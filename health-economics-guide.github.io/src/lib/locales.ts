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
 * The `lang` attribute value for a locale code.
 *
 * This is deliberately the *identity function*, not a normalizer: the
 * header's `LocalePicker` (`@lilydesignsystem/svelte-locale-picker`) also
 * writes `document.documentElement.lang` — on mount as well as on a real
 * switch — via its own `bcp47LocaleTag()`, which is `_` → `-` only. Once
 * that component hydrates, its value always wins, so returning anything
 * that would print differently here just produces a pointless flash where
 * the client immediately overwrites what the server rendered. `-001` is a
 * real, valid BCP 47 region subtag (CLDR's UN M49 "World" macro-region —
 * `en-001` is genuinely "English, World"), which is exactly why the
 * component's own author chose not to strip it either.
 */
export function langAttr(code: string): string {
  return code;
}
