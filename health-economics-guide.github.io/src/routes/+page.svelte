<script lang="ts">
  // `/` is a stub, not a server-side redirect: a redirect would drop the query
  // string, and `/?<target>` is the site-search URL (see $lib/SearchGate.svelte).
  // With no query this forwards to the default locale on the client; with one
  // it stays put and the layout's SearchGate shows the results. Without
  // JavaScript, the <noscript> meta refresh below does the forwarding.
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { page } from '$app/state';
  import { DEFAULT_LOCALE } from '#lib/book.js';

  onMount(() => {
    if (!page.url.search) goto(`/${DEFAULT_LOCALE}/`, { replaceState: true });
  });
</script>

<svelte:head>
  <title>Health Economics Guide</title>
  <noscript><meta http-equiv="refresh" content="0; url=/{DEFAULT_LOCALE}/" /></noscript>
</svelte:head>

<p><a href="/{DEFAULT_LOCALE}/">Health Economics Guide</a></p>
