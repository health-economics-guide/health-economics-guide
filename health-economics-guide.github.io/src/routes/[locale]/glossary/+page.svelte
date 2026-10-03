<script lang="ts">
  import ReferencePage from '#lib/ReferencePage.svelte';
  import { ui } from '#lib/i18n.js';

  let { data } = $props();
</script>

<ReferencePage
  title={ui(data.locale).glossary}
  lead="Key terms defined in plain English, each pointing at the chapter that owns it."
  doc={data.doc}
  locale={data.locale}
/>
