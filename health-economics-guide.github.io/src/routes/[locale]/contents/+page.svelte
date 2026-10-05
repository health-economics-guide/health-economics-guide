<script lang="ts">
  import {
    ArticleLayout,
    SectionHeading,
    BreadcrumbNav,
    BreadcrumbList,
    BreadcrumbListItem
  } from '@lilydesignsystem/svelte-headless';
  import { PARTS, LOCALES } from '#lib/book.js';
  import { ui, partTitle } from '#lib/i18n.js';

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
  <meta name="description" content={t.contentsDescription} />
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
    <p class="page-lead">{t.contentsLead}</p>
    <p class="page-eyebrow">{t.readingIn} {localeLabel}. {t.switchLanguageHint}</p>
  </header>

  {#if frontMatter.length}
    <section class="page-section">
      <SectionHeading heading={t.frontMatter} />
      <ul class="contents-chapters">
        {#each frontMatter as chapter (chapter.slug)}
          <li><a href="/{data.locale}/topics/{chapter.slug}/">{chapter.title}</a></li>
        {/each}
      </ul>
    </section>
  {/if}

  <section class="page-section">
    <ul class="contents-parts">
      {#each parts as part (part.number)}
        <li>
          <SectionHeading heading="{part.number} {part.title}" />
          <ul class="contents-chapters">
            {#each part.chapters as chapter (chapter.slug)}
              <li>
                <a href="/{data.locale}/topics/{chapter.slug}/">
                  <span class="site-contents-number">{chapter.number}</span>
                  {chapter.title}
                </a>
              </li>
            {/each}
          </ul>
        </li>
      {/each}
    </ul>
  </section>

  <section class="page-section">
    <SectionHeading heading={t.reference} />
    <ul class="contents-chapters">
      <li><a href="/{data.locale}/glossary/">{t.glossary}</a></li>
      <li><a href="/{data.locale}/index/">{t.index}</a></li>
    </ul>
  </section>
</ArticleLayout>
