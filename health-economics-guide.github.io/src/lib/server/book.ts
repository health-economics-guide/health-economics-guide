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
 * Turn a content filename into a URL slug.
 *
 * Files are named `NN-NN-kebab-title.md`, where the leading numbers order the
 * book on disk. URLs keep the chapter number (readers cite chapters by number)
 * but drop the zero padding: `01-01-market-failure` becomes `1-1-market-failure`.
 * Front matter has no chapter number, so `00-preface` becomes just `preface`.
 *
 * The kebab-title itself can differ by locale (`labour-markets` vs.
 * `labor-markets`), which is exactly why chapters are looked up per locale
 * rather than by a single slug shared across all three.
 */
function slugFor(stem: string): string {
  const numbered = stem.match(/^(\d+)-(\d+)-(.+)$/);
  if (numbered) {
    const [, part, chapter, rest] = numbered;
    return `${Number(part)}-${Number(chapter)}-${rest}`;
  }
  // Front matter is numbered for ordering only — `00-preface` — and reads
  // better without the digits.
  const frontMatter = stem.match(/^\d+-(.+)$/);
  return frontMatter ? frontMatter[1] : stem;
}

/**
 * Split a document title into its number and its title.
 *
 * Chapter files open with `# Chapter 1.1 — Introduction to Health Economics`;
 * front matter opens with a bare `# Preface`.
 */
function splitTitle(heading: string): { number: string; title: string } {
  const match = heading.match(/^Chapter\s+([\d.]+)\s*[—–-]\s*(.+)$/);
  if (match) return { number: match[1], title: match[2].trim() };
  return { number: '', title: heading.trim() };
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
  const heading = markdown.match(/^#\s+(.+)$/m)?.[1] ?? stem;
  const { number, title } = splitTitle(heading);
  const entry: Chapter = {
    slug: slugFor(stem),
    number,
    title,
    part: number ? Number(number.split('.')[0]) : 0,
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
 * locale; a few (e.g. "Modelling"/"Modeling") do not, which is exactly why
 * this is keyed by chapter number rather than by slug.
 *
 * Front matter has no number, so it is keyed by its own slug instead — safe
 * here because front-matter filenames (and therefore slugs) are identical
 * across all three locales upstream.
 */
export function localeSlugMap(): Record<string, Record<string, string>> {
  const map: Record<string, Record<string, string>> = {};
  for (const [locale, chapters] of Object.entries(chaptersByLocale)) {
    for (const ch of chapters) {
      const key = ch.number || `front:${ch.slug}`;
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
