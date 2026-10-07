<script lang="ts">
  import { page } from '$app/state';
  import { ArticleLayout } from '@lilydesignsystem/svelte-headless';
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { DEFAULT_LOCALE } from '#lib/book.js';
  import { resolveLocale } from '#lib/locales.js';

  // A link to a locale we do not publish under that name (`/de-001/contents/`)
  // lands here, because GitHub Pages serves 404.html for every unknown path.
  // Send the reader to the nearest published locale instead of a dead end:
  // the contents, glossary and index pages exist in every locale, so keep
  // those; a topic slug is locale-specific, so fall back to that locale's
  // contents page.
  onMount(() => {
    const [, segment, section] = page.url.pathname.split('/');
    const target = segment ? resolveLocale(decodeURIComponent(segment)) : undefined;
    if (page.status !== 404 || !target || target === segment) return;
    const keep = ['contents', 'glossary', 'index'].includes(section) ? section : 'contents';
    goto(`/${target}/${keep}/`, { replaceState: true });
  });
</script>

<svelte:head>
  <title>{page.status} — Health Economics Guide</title>
</svelte:head>

<ArticleLayout class="page">
  <header class="page-header">
    <p class="page-eyebrow">Error {page.status}</p>
    <h1>{page.status === 404 ? 'That page is not here' : 'Something went wrong'}</h1>
    <p class="page-lead">{page.error?.message ?? 'Unknown error'}</p>
  </header>

  <p>
    Try the <a href="/{DEFAULT_LOCALE}/contents/">table of contents</a>, the
    <a href="/{DEFAULT_LOCALE}/glossary/">glossary</a>, or the <a href="/{DEFAULT_LOCALE}/index/">index</a>.
  </p>
</ArticleLayout>
