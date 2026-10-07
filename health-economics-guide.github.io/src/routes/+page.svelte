<script lang="ts">
  // `/` is a stub, not a server-side redirect: a redirect would drop the query
  // string, and `/?<target>` is the site-search URL (see $lib/SearchGate.svelte).
  // With no query this forwards on the client; with one it stays put and the
  // layout's SearchGate shows the results. The destination is, in order: the
  // locale the reader last chose in the picker, the first of the browser's
  // preferred languages (`navigator.languages`, whose first entry is
  // `navigator.language`) that the book is published in, then the default
  // locale. Without JavaScript, the <noscript> meta refresh below forwards to
  // the default locale.
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { page } from '$app/state';
  import { DEFAULT_LOCALE, isLocale, localeForLanguages } from '#lib/book.js';

  // The picker's own storage key (see +layout.svelte); the stored value can be
  // stale or unavailable, so check it is still a published route.
  const STORED_LOCALE_KEY = 'health-economics-guide-locale';

  function preferredLocale(): string {
    try {
      const stored = localStorage.getItem(STORED_LOCALE_KEY);
      if (stored && isLocale(stored)) return stored;
    } catch {
      // storage blocked: fall through to the browser language
    }
    const tags = navigator.languages?.length ? navigator.languages : [navigator.language];
    return localeForLanguages(tags.filter(Boolean)) ?? DEFAULT_LOCALE;
  }

  onMount(() => {
    if (!page.url.search) goto(`/${preferredLocale()}/`, { replaceState: true });
  });
</script>

<svelte:head>
  <title>Health Economics Guide</title>
  <noscript><meta http-equiv="refresh" content="0; url=/{DEFAULT_LOCALE}/" /></noscript>
</svelte:head>

<p><a href="/{DEFAULT_LOCALE}/">Health Economics Guide</a></p>
