<script lang="ts">
  import { page } from '$app/state';
  import { goto } from '$app/navigation';
  import {
    SkipLink,
    GrailLayout,
    GrailLayoutTopHeader,
    GrailLayoutCenterMain,
    GrailLayoutBottomFooter
  } from '@lilydesignsystem/svelte-headless';
  import PickerBar from '@lilydesignsystem/svelte-picker-bar';
  import { SOURCE_REPO, LOCALES, LOCALE_SLUGS, DEFAULT_LOCALE } from '$lib/book';
  import { ui } from '$lib/i18n';

  let { children } = $props();

  const LOCALE_LABELS: Record<string, string> = Object.fromEntries(
    LOCALES.map((locale) => [locale.slug, locale.label])
  );

  // The locale of the page currently showing, when there is one — set on
  // every `/locales/<slug>/...` route, absent on locale-neutral pages
  // (home, glossary, index). UI chrome (nav, picker labels, footer) follows
  // it, falling back to the house-style default on locale-neutral pages —
  // see spec/locales-for-global-sharing-with-svelte/index.md's bug-fix note
  // on UI chrome staying hardcoded English.
  const currentLocale = $derived(page.params.locale);
  const t = $derived(ui(currentLocale ?? DEFAULT_LOCALE));

  /**
   * Where switching to `newLocale` should go from the page showing now.
   *
   * A chapter page jumps to the *same chapter* in the new locale via the
   * cross-locale slug map (most chapters share a slug across locales, but a
   * few — "Modelling"/"Modeling" — do not). Anywhere else lands on the new
   * locale's contents page, since locale-neutral pages (home, glossary,
   * index) have no per-locale equivalent to jump to.
   */
  function targetPathForLocale(newLocale: string): string {
    const chapterMatch = page.url.pathname.match(/^\/locales\/[^/]+\/chapters\/([^/]+)\/?$/);
    if (chapterMatch && page.data?.ref) {
      const key: string = page.data.ref.part === 0 ? 'front-matter' : page.data.ref.number;
      const mapped = page.data.localeSlugMap?.[key]?.[newLocale];
      if (mapped) return `/locales/${newLocale}/chapters/${mapped}/`;
    }
    return `/locales/${newLocale}/contents/`;
  }

  /**
   * The locale picker fires `onChange` once on mount (to apply the initial
   * `lang`/`dir`) as well as on a genuine user selection — the two are
   * indistinguishable from here, see the Lily locale-picker source. Treat the
   * very first call as that mount-time initialisation, never navigation; only
   * calls after that come from the reader actually choosing a language.
   */
  let readyToNavigate = false;

  function handleLocaleChange(newLocale: string): void {
    if (!readyToNavigate) {
      readyToNavigate = true;
      return;
    }
    const target = targetPathForLocale(newLocale);
    if (target !== page.url.pathname) goto(target);
  }

  // Every theme slug title-cases to a readable label on its own (see
  // ThemePicker's default labelFor) except the UK/US government and NHS
  // ones, which read as a wall of words without a shorthand.
  const THEME_LABELS: Record<string, string> = {
    'united-kingdom-government-digital-service': 'UK Government',
    'united-kingdom-national-health-service-england-for-patients': 'NHS England',
    'united-kingdom-national-health-service-england-for-practitioners':
      'NHS England (Practitioners)',
    'united-kingdom-national-health-service-scotland-for-patients': 'NHS Scotland',
    'united-kingdom-national-health-service-scotland-for-practitioners':
      'NHS Scotland (Practitioners)',
    'united-kingdom-national-health-service-wales-for-patients': 'NHS Wales',
    'united-kingdom-national-health-service-wales-for-practitioners':
      'NHS Wales (Practitioners)',
    'united-states-web-design-system': 'US Web Design System'
  };

  // "Contents" follows whichever locale is currently showing, falling back
  // to the house-style default on locale-neutral pages.
  const siteLinks = $derived([
    { href: `/locales/${currentLocale ?? DEFAULT_LOCALE}/contents/`, label: t.contents },
    { href: '/glossary/', label: t.glossary },
    { href: '/index/', label: t.index }
  ]);

  // Read at share time (inside each href, not as a static prop), so it
  // reflects whatever page is showing even after a client-side
  // navigation the layout itself doesn't re-run for.
  function pageTitle(): string {
    return typeof document !== 'undefined' ? document.title : '';
  }

  const shareTargets = [
    {
      id: 'email',
      label: 'Email Link',
      href: (url: string) =>
        `mailto:?subject=${encodeURIComponent(pageTitle())}&body=${encodeURIComponent(url)}`,
      newTab: false
    },
    {
      id: 'linkedin',
      label: 'Share on LinkedIn',
      href: (url: string) =>
        `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
    },
    {
      id: 'reddit',
      label: 'Share on Reddit',
      href: (url: string) =>
        `https://www.reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(pageTitle())}`
    },
    {
      id: 'bluesky',
      label: 'Share on Bluesky',
      href: (url: string) =>
        `https://bsky.app/intent/compose?text=${encodeURIComponent(`${pageTitle()} ${url}`)}`
    },
    {
      id: 'mastodon',
      label: 'Share on Mastodon',
      href: (url: string) =>
        `https://mastodonshare.com/?text=${encodeURIComponent(pageTitle())}&url=${encodeURIComponent(url)}`
    }
  ];
</script>

<SkipLink href="#main" label={t.skipToContent} />

<GrailLayout class="site">
  <GrailLayoutTopHeader class="site-header">
    <a class="site-brand" href="/">
      <span class="site-brand-icon" aria-hidden="true">⚕</span>
      <span class="site-brand-title">{t.siteName}</span>
    </a>

    <nav class="site-nav" aria-label="Site">
      {#each siteLinks as link (link.href)}
        <a href={link.href} aria-current={page.url.pathname === link.href ? 'page' : undefined}>
          {link.label}
        </a>
      {/each}
      <a href={SOURCE_REPO} rel="noopener">{t.source}</a>
    </nav>

    <PickerBar
      class="site-controls"
      labels={{
        theme: t.pickerTheme,
        locale: t.pickerLocale,
        textSize: t.pickerTextSize,
        share: t.pickerShare
      }}
      themesUrl="/assets/themes/"
      themeProps={{
        themeLabels: THEME_LABELS,
        defaultValue: 'light',
        detectFromSystem: true,
        storageKey: 'health-economics-guide-theme'
      }}
      locales={LOCALE_SLUGS}
      localeProps={{
        value: currentLocale,
        defaultValue: DEFAULT_LOCALE,
        storageKey: 'health-economics-guide-locale',
        localeLabels: LOCALE_LABELS,
        onChange: handleLocaleChange
      }}
      textSizeProps={{ storageKey: 'health-economics-guide-text-size' }}
      shareTargets={shareTargets}
      shareProps={{
        copyLabel: t.copyLabel,
        copiedLabel: t.copiedLabel,
        copyFailedLabel: t.copyFailedLabel
      }}
    />
  </GrailLayoutTopHeader>

  <GrailLayoutCenterMain class="site-main" id="main">
    {@render children()}
  </GrailLayoutCenterMain>

  <GrailLayoutBottomFooter class="site-footer">
    <p>
      <strong>{t.siteName}</strong> — a practical handbook of best practices for health economics,
      worldwide in scope.
    </p>
    <p>
      {t.source}: <a href={SOURCE_REPO} rel="noopener">github.com/health-economics-guide</a>. Built
      with the <a href="https://github.com/LilyDesignSystem" rel="noopener">Lily Design System™</a>.
    </p>
  </GrailLayoutBottomFooter>
</GrailLayout>
