// Locale labels, direction, and language-tag helpers, one entry per code
// this site actually publishes (matching $lib/book.ts's LOCALES) — per
// spec/locales-for-global-sharing-with-svelte/index.md ("Labels live in
// locales.js's LOCALE_LABELS, one entry per code, in that language ...
// Falls back to the raw code via localeLabel() if a code has no label
// yet"). English dialects get a descriptive label (endonym and exonym are
// the same word, "English", so plain "English" three times would not
// distinguish them); every other locale gets its own endonym.
export const LOCALE_LABELS: Record<string, string> = {
  'en-us': 'English (US)',
  'en-gb': 'English (UK)',
  'en-gb-oxendict': 'English (UK, Oxford spelling)',
  'ar-001': 'العربية',
  'bn-001': 'বাংলা',
  'cy-001': 'Cymraeg',
  'en-001': 'English',
  'es-001': 'Español',
  'fr-001': 'Français',
  'hi-001': 'हिन्दी',
  'id-001': 'Bahasa Indonesia',
  'pt-001': 'Português',
  'ru-001': 'Русский',
  'ur-001': 'اردو',
  'zh-cn': '中文 (简体)'
};

export function localeLabel(code: string): string {
  return LOCALE_LABELS[code] ?? code;
}

/** Right-to-left locale codes among the ones this site publishes. */
export const RTL_LOCALES: ReadonlySet<string> = new Set(['ar-001', 'ur-001']);

export function localeDir(code: string): 'ltr' | 'rtl' {
  return RTL_LOCALES.has(code) ? 'rtl' : 'ltr';
}

/**
 * BCP 47-ish language tag for the `lang` attribute. The book's locale codes
 * are close to BCP 47 already: `ar-001`/`bn-001`/`cy-001`/`en-001`/`es-001`/
 * `fr-001`/`hi-001`/`id-001`/`pt-001`/`ru-001`/`ur-001` are CLDR "worldwide"
 * region codes, not real BCP 47 regions, so the synthetic `-001` is
 * stripped to the bare language subtag; `en-gb-oxendict` keeps its real,
 * IANA-registered `oxendict` variant subtag with conventional casing.
 */
export function langAttr(code: string): string {
  if (code === 'en-gb-oxendict') return 'en-GB-oxendict';
  if (code.endsWith('-001')) return code.slice(0, -4);
  const [lang, region] = code.split('-');
  return region ? `${lang}-${region.toUpperCase()}` : lang;
}
