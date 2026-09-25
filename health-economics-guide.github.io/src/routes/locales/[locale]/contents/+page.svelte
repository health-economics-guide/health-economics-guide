<script lang="ts">
  import {
    ArticleLayout,
    SectionHeading,
    BreadcrumbNav,
    BreadcrumbList,
    BreadcrumbListItem
  } from '@lilydesignsystem/svelte-headless';
  import { PARTS, LOCALES } from '$lib/book';
  import { ui, partTitle } from '$lib/i18n';

  let { data } = $props();

  const t = $derived(ui(data.locale));
  const localeLabel = $derived(
    LOCALES.find((candidate) => candidate.slug === data.locale)?.label ?? data.locale
  );
  const frontMatter = $derived(data.toc.filter((chapter) => chapter.part === 0));
  const parts = $derived(
    PARTS.map((part) => ({
      ...part,
      title: partTitle(data.locale, part.number),
      chapters: data.toc.filter((chapter) => chapter.part === part.number)
    }))
  );
</script>

<svelte:head>
  <title>{t.contents} — {t.siteName}</title>
  <meta name="description" content="The full table of contents of the Health Economics Guide." />
</svelte:head>

<ArticleLayout class="page">
  <BreadcrumbNav label="Breadcrumb" class="page-breadcrumb">
    <BreadcrumbList>
      <BreadcrumbListItem><a href="/">{t.home}</a></BreadcrumbListItem>
      <BreadcrumbListItem current>{t.contents}</BreadcrumbListItem>
    </BreadcrumbList>
  </BreadcrumbNav>

  <header class="page-header">
    <h1>{t.contents}</h1>
    <p class="page-lead">
      Every chapter is self-contained. Read straight through for a course in health economics, or
      go directly to the chapter that matches the decision in front of you.
    </p>
    <p class="page-eyebrow">{t.readingIn} {localeLabel}. {t.switchLanguageHint}</p>
  </header>

  {#if frontMatter.length}
    <section class="page-section">
      <SectionHeading heading={t.frontMatter} />
      <ol class="contents-chapters">
        {#each frontMatter as chapter (chapter.slug)}
          <li><a href="/locales/{data.locale}/chapters/{chapter.slug}/">{chapter.title}</a></li>
        {/each}
      </ol>
    </section>
  {/if}

  {#each parts as part (part.number)}
    <section class="page-section">
      <SectionHeading
        eyebrow="{t.part} {part.number}"
        heading={part.title}
        subtitle={part.tagline}
      />
      <ol class="contents-chapters">
        {#each part.chapters as chapter (chapter.slug)}
          <li>
            <a href="/locales/{data.locale}/chapters/{chapter.slug}/">
              <span class="site-contents-number">{chapter.number}</span>
              {chapter.title}
            </a>
          </li>
        {/each}
      </ol>
    </section>
  {/each}

  <section class="page-section">
    <SectionHeading heading={t.reference} />
    <ol class="contents-chapters">
      <li><a href="/glossary/">{t.glossary}</a></li>
      <li><a href="/index/">{t.index}</a></li>
    </ol>
  </section>
</ArticleLayout>
