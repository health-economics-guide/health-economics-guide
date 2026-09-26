// Shared book types and the part manifest.
//
// This module holds no chapter prose — only the small metadata that both the
// server load functions and the Svelte components need, so it is safe to import
// from either side. The prose lives in `$lib/server/book.ts`, which is
// server-only and therefore never reaches a client bundle.

import { localeLabel, languageName } from '$lib/locales';

/** One entry in the table of contents. */
export type ChapterRef = {
  /** URL slug, e.g. `1-1-introduction-to-health-economics` or `preface`. */
  slug: string;
  /** Chapter number as printed, e.g. `1.1`. Empty for front matter. */
  number: string;
  /** Chapter title without the `Chapter N.N — ` prefix. */
  title: string;
  /** Part number this chapter belongs to; 0 for front matter. */
  part: number;
};

/** One of the book's five parts. */
export type Part = {
  number: number;
  title: string;
  /** The one-line framing shown under the part title. */
  tagline: string;
};

/** One locale the book is written in, per `locales/<slug>/chapters/` upstream. */
export type Locale = {
  /** URL slug and directory name, e.g. `en-us`. Matches the source repo's `locales/<slug>/`. */
  slug: string;
  /** Reader-facing label for the locale picker. */
  label: string;
};

/**
 * The book's locales, in the order offered by the picker — sorted by code,
 * per spec/locales-for-global-sharing-with-svelte/index.md's "Locale picker"
 * section (the `-001` "worldwide" suffix, used for a locale with no single
 * national dialect, happens to sort before any letter-starting regional
 * suffix).
 *
 * Kept in sync by hand with the source repo's `locales/` directory — the
 * codes here are exactly spec/locales-for-global-sharing-with-svelte/
 * locales.tsv's list. The book repo's `locales/` also has a few
 * ISO-3166-suffixed duplicates of these (`ar-eg`, `cy-gb`, `en-150`,
 * `es-es`, `fr-fr`, `ru-ru`, `zh-001`) left over from before that spec
 * settled on the `-001` "worldwide" convention; they are not listed here
 * and so never appear on the live site, even though `pnpm sync` still
 * vendors their content (harmless, just unused).
 */
export const LOCALES: Locale[] = [
  { slug: 'ar-001', label: localeLabel('ar-001') },
  { slug: 'bn-001', label: localeLabel('bn-001') },
  { slug: 'cy-001', label: localeLabel('cy-001') },
  { slug: 'en-001', label: localeLabel('en-001') },
  { slug: 'en-gb', label: localeLabel('en-gb') },
  { slug: 'en-gb-oxendict', label: localeLabel('en-gb-oxendict') },
  { slug: 'en-us', label: localeLabel('en-us') },
  { slug: 'es-001', label: localeLabel('es-001') },
  { slug: 'fr-001', label: localeLabel('fr-001') },
  { slug: 'hi-001', label: localeLabel('hi-001') },
  { slug: 'id-001', label: localeLabel('id-001') },
  { slug: 'pt-001', label: localeLabel('pt-001') },
  { slug: 'ru-001', label: localeLabel('ru-001') },
  { slug: 'ur-001', label: localeLabel('ur-001') },
  { slug: 'zh-cn', label: localeLabel('zh-cn') }
];

/** Locale slugs only, for validating a route param against the known set. */
export const LOCALE_SLUGS: string[] = LOCALES.map((locale) => locale.slug);

/**
 * One entry per distinct LANGUAGE the book is written in, not per routable
 * locale variant — collapsing English's three dialects (`en-gb`,
 * `en-gb-oxendict`, `en-us`) down to the single language-only `en-001`
 * entry. For contexts that want to name the book's languages rather than
 * list every locale a reader could switch to — currently just the home
 * page's "available in" sentence, which would otherwise say "English"
 * three times over.
 */
export const LANGUAGES: Locale[] = LOCALES.filter(
  (locale) => !['en-gb', 'en-gb-oxendict', 'en-us'].includes(locale.slug)
).map((locale) => ({ ...locale, label: languageName(locale.slug) }));

/**
 * The locale served at unprefixed reference pages (glossary, index) and used
 * for "browse the chapters" links from locale-neutral pages. Oxford spelling
 * is the book's own house style (`spec/oxford-spelling.md` upstream), so it is
 * the natural default rather than picking one of the two national dialects.
 */
export const DEFAULT_LOCALE = 'en-gb-oxendict';

/** Is `value` one of the book's known locale slugs? */
export function isLocale(value: string): boolean {
  return LOCALE_SLUGS.includes(value);
}

/**
 * The five parts, in reading order. Kept in sync by hand with the source repo's
 * README — the chapter files themselves record only their own number, not the
 * part groupings or taglines.
 */
export const PARTS: Part[] = [
  {
    number: 1,
    title: 'Foundations',
    tagline: 'why health is economically different, and the models that explain it'
  },
  {
    number: 2,
    title: 'Evaluation and Evidence',
    tagline: "the analyst's toolkit: valuing outcomes, building models, testing claims"
  },
  {
    number: 3,
    title: 'Systems, Policy and Priorities',
    tagline: 'how societies organize, fund, and share out healthcare'
  },
  {
    number: 4,
    title: 'Global and Societal Issues',
    tagline:
      'health beyond one system: behaviour, global trade and financing, the planet, and the public conversation'
  },
  {
    number: 5,
    title: 'Digital, Software, and Technology',
    tagline:
      'the economics of health technology: innovation, digital care, artificial intelligence, software, robotics, and data'
  }
];

/** Where the book's source lives, for "edit this page" and provenance links. */
export const SOURCE_REPO = 'https://github.com/health-economics-guide/health-economics-guide';

/** Where the Claude Code skills for this guide live, in the source repo. */
export const SKILLS_REPO = `${SOURCE_REPO}/tree/main/skills`;
