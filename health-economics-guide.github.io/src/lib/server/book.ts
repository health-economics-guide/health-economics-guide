// Server-only access to the book's markdown.
//
// Living under `$lib/server/` means SvelteKit refuses to bundle this into
// client code, which matters here: the vendored content is several megabytes of
// prose. The site is fully prerendered, so this module runs at build time and
// each page ships only its own rendered HTML.

import { parse, type Document, type Heading } from '$lib/markdown';
import { PARTS, LOCALE_SLUGS, type ChapterRef } from '$lib/book';

/**
 * Raw markdown for every chapter, keyed by module path, e.g.
 * `../../content/locales/en-us/chapters/02-02-modeling.md`. Each locale is
 * its own directory upstream (`locales/<slug>/chapters/`), vendored here the
 * same way — see `scripts/sync-content.sh`.
 */
const chapterFiles = import.meta.glob('../../content/locales/*/chapters/*.md', {
  query: '?raw',
  import: 'default',
  eager: true
}) as Record<string, string>;

const glossaryFile = import.meta.glob('../../content/GLOSSARY.md', {
  query: '?raw',
  import: 'default',
  eager: true
}) as Record<string, string>;

const indexFile = import.meta.glob('../../content/INDEX.md', {
  query: '?raw',
  import: 'default',
  eager: true
}) as Record<string, string>;

/** A chapter: its table-of-contents entry plus its markdown source. */
type Chapter = ChapterRef & { markdown: string };

/**
 * Parse a content filename's structural part/chapter numbers and derive its
 * URL slug.
 *
 * Files are named `NN-NN-kebab-title.md` (one directory per chapter,
 * `NN-NN-kebab-title/index.md`, vendored flat by scripts/sync-content.sh),
 * where the leading numbers order the book on disk and, for numbered
 * chapters, give the part and chapter number directly — read from here
 * rather than from the heading text, because a translated heading's own
 * digits are not always ASCII (Bengali chapters are headed "অধ্যায় ৩.১",
 * not "Chapter 3.1"). Front matter uses part `00` and has no chapter number
 * of its own; its slug drops both leading numbers entirely — `00-01-preface`
 * becomes just `preface`. Numbered chapters keep a de-zero-padded number in
 * the slug: `01-01-market-failure` becomes `1-1-market-failure`.
 *
 * The kebab-title itself is per-locale — translated locales rename it to a
 * native-script or accented slug (`03-01-স্বাস্থ্য-ব্যবস্থা`) — which is
 * exactly why chapters are looked up per locale rather than by a single slug
 * shared across all of them.
 */
function parseStem(
  stem: string
): { slug: string; part: number; chapter: number } | { slug: string; part: 0 } {
  const numbered = stem.match(/^(\d+)-(\d+)-(.+)$/);
  if (!numbered) return { slug: stem, part: 0 };
  const [, partStr, chapterStr, rest] = numbered;
  const part = Number(partStr);
  if (part === 0) return { slug: rest, part: 0 };
  return { slug: `${part}-${Number(chapterStr)}-${rest}`, part, chapter: Number(chapterStr) };
}

/**
 * The title text of a chapter heading, with any localized "Chapter N.N — "
 * lead-in stripped. The part/chapter numbers themselves come from the
 * filename (`parseStem`), not from here — this only needs to recognize
 * *some* lead-in and drop it. Every locale's numbered-chapter heading
 * follows "<word> <number> <dash> <title>" (`Chapter 1.1 — …`, `الفصل 1.1
 * — …`, `第1.1章 — …`, `অধ্যায় ৩.১ — …`); front matter has no lead-in at
 * all (`Preface`, `مقدمة`). `\p{Nd}` matches a decimal digit in any script,
 * not just ASCII, which is what a plain `\d` would miss.
 */
function stripHeadingPrefix(heading: string): string {
  const dashSplit = heading.match(/^(.+?)\s*[—–-]\s*(.+)$/);
  if (!dashSplit) return heading.trim();
  const [, prefix, rest] = dashSplit;
  return /\p{Nd}/u.test(prefix) ? rest.trim() : heading.trim();
}

/** Parse `../../content/locales/<slug>/chapters/<file>.md` into its parts. */
function parseChapterPath(path: string): { locale: string; stem: string } {
  const match = path.match(/\/locales\/([^/]+)\/chapters\/([^/]+)\.md$/);
  if (!match) throw new Error(`Unrecognized chapter content path: ${path}`);
  return { locale: match[1], stem: match[2] };
}

/**
 * Every chapter, in reading order, grouped by locale. The content filenames
 * already sort into reading order within a locale, so sorting the glob keys
 * is enough.
 */
const chaptersByLocale: Record<string, Chapter[]> = {};
for (const [path, markdown] of Object.entries(chapterFiles).sort(([a], [b]) =>
  a.localeCompare(b)
)) {
  const { locale, stem } = parseChapterPath(path);
  const parsed = parseStem(stem);
  const heading = markdown.match(/^#\s+(.+)$/m)?.[1] ?? stem;
  const entry: Chapter = {
    slug: parsed.slug,
    number: 'chapter' in parsed ? `${parsed.part}.${parsed.chapter}` : '',
    title: stripHeadingPrefix(heading),
    part: parsed.part,
    markdown
  };
  (chaptersByLocale[locale] ??= []).push(entry);
}

/** Chapters for one locale, or `[]` if the locale is unknown. */
function chaptersFor(locale: string): Chapter[] {
  return chaptersByLocale[locale] ?? [];
}

/** Table-of-contents entries for one locale — metadata only, safe for the client. */
export function toc(locale: string): ChapterRef[] {
  return chaptersFor(locale).map(({ slug, number, title, part }) => ({
    slug,
    number,
    title,
    part
  }));
}

/** The parts, each with its chapters, for rendering one locale's full contents. */
export function contents(locale: string): Array<{
  number: number;
  title: string;
  tagline: string;
  chapters: ChapterRef[];
}> {
  const chapters = toc(locale);
  return PARTS.map((part) => ({
    ...part,
    chapters: chapters.filter((chapter) => chapter.part === part.number)
  }));
}

/** Front matter for one locale — chapters with no part, such as the preface. */
export function frontMatter(locale: string): ChapterRef[] {
  return toc(locale).filter((chapter) => chapter.part === 0);
}

/** A rendered chapter plus its neighbours, or `null` if the locale or slug is unknown. */
export function chapter(
  locale: string,
  slug: string
): {
  ref: ChapterRef;
  doc: Document;
  previous: ChapterRef | null;
  next: ChapterRef | null;
} | null {
  const chapters = chaptersFor(locale);
  const at = chapters.findIndex((candidate) => candidate.slug === slug);
  if (at === -1) return null;

  const { markdown, ...ref } = chapters[at];
  const neighbour = (offset: number): ChapterRef | null => {
    const found = chapters[at + offset];
    if (!found) return null;
    const { markdown: _omit, ...rest } = found;
    return rest;
  };

  return { ref, doc: parse(markdown), previous: neighbour(-1), next: neighbour(1) };
}

/** `{ locale, slug }` for every chapter in every locale, for prerender entry generation. */
export function localeChapterEntries(): Array<{ locale: string; slug: string }> {
  return LOCALE_SLUGS.flatMap((locale) => slugs(locale).map((slug) => ({ locale, slug })));
}

/** Every chapter slug for one locale, for prerender entry generation. */
export function slugs(locale: string): string[] {
  return chaptersFor(locale).map((chapter) => chapter.slug);
}

/**
 * Maps a chapter identifier to its slug in each locale, so the locale picker
 * can jump to the equivalent chapter after a switch instead of just the
 * target locale's contents page. Most chapters share the same slug in every
 * locale; translated locales rename it to a native-script or accented slug
 * (e.g. `market-failure` vs. `স্বাস্থ্য-ব্যবস্থা`), which is exactly why
 * this is keyed by chapter number rather than by slug.
 *
 * Front matter has no number, and — now that locales can translate its slug
 * too (`preface` vs. `مقدمة`) — no locale-independent slug to key it by
 * either. There is exactly one front-matter entry per locale, so a single
 * constant key is enough to line them all up.
 */
export function localeSlugMap(): Record<string, Record<string, string>> {
  const map: Record<string, Record<string, string>> = {};
  for (const [locale, chapters] of Object.entries(chaptersByLocale)) {
    for (const ch of chapters) {
      const key = ch.part === 0 ? 'front-matter' : ch.number;
      (map[key] ??= {})[locale] = ch.slug;
    }
  }
  return map;
}

/**
 * Render a reference document (the glossary or the index).
 *
 * Both files carry one relative link to `spec/index.md`, which exists in the
 * source repository but not on this site; repoint it at GitHub so the link
 * still resolves for readers who follow it.
 */
function reference(markdown: string): Document & { letters: Heading[] } {
  const repointed = markdown.replace(
    /\]\(spec\/index\.md\)/g,
    '](https://github.com/health-economics-guide/health-economics-guide/blob/main/spec/index.md)'
  );
  const doc = parse(repointed);
  return { ...doc, letters: doc.headings.filter((heading) => heading.depth === 2) };
}

/**
 * The A–Z glossary and the concept index are not localized upstream — one
 * shared copy, served at unprefixed URLs regardless of which locale a reader
 * arrived from.
 */
export function glossary() {
  return reference(Object.values(glossaryFile)[0]);
}

/** The concept index. */
export function conceptIndex() {
  return reference(Object.values(indexFile)[0]);
}
