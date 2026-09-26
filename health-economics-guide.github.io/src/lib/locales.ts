// Locale labels, direction, and language-tag helpers, one entry per code
// this site actually publishes (matching $lib/book.ts's LOCALES) — per
// spec/locales-for-global-sharing-with-svelte/index.md ("Labels live in
// locales.js's LOCALE_LABELS, one entry per code, in that language ...
// Falls back to the raw code via localeLabel() if a code has no label
// yet"). Every locale gets its own endonym.
//
// Format: "<language>" alone for a `-001` "worldwide" code (never a
// "World"/"International" qualifier — genuinely no region to name), or
// "<language> - <region>[ - <variant>]" for one with a real region —
// always the region's full name, in the label's own language, never an
// abbreviation ("Great Britain", not "UK"; "United States", not "US").
// "gb" is "Great Britain" specifically, not "United Kingdom" — this is a
// deliberate house choice, not a claim about the two names being
// synonyms. Every label follows this same " - "-joined shape so that
// `languageName()` below can recover the bare language name generically,
// by taking everything before the first " - ", without a second parallel
// data structure.
export const LOCALE_LABELS: Record<string, string> = {
  'en-us': 'English - United States',
  'en-gb': 'English - Great Britain',
  'en-gb-oxendict': 'English - Great Britain - Oxford',
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
  'zh-cn': '中文 - 中国'
};

export function localeLabel(code: string): string {
  return LOCALE_LABELS[code] ?? code;
}

/**
 * The bare language name for a locale code — its label with any
 * " - <region>[ - <variant>]" suffix dropped. For contexts that want to
 * name the book's languages, not its routable locale variants (currently
 * just the home page's "available in" list — see $lib/book.ts's
 * LANGUAGES).
 */
export function languageName(code: string): string {
  return localeLabel(code).split(' - ')[0];
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
