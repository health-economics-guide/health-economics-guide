<script lang="ts">
  import ReferencePage from '#lib/ReferencePage.svelte';
  import { ui } from '#lib/i18n.js';

  let { data } = $props();
</script>

<ReferencePage
  title={ui(data.locale).index}
  lead="Where to find each concept and framework. Numbers are chapter numbers, not pages."
  doc={data.doc}
  locale={data.locale}
/>
