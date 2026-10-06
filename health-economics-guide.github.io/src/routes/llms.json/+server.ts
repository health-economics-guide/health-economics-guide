import { DEFAULT_LOCALE, LOCALES, PARTS, SOURCE_REPO } from '#lib/book.js';
import { toc } from '#lib/server/book.js';

export const prerender = true;

const SITE = 'https://health-economics-guide.github.io';

/**
 * The machine-readable twin of /llms.txt: the same map as JSON, with every
 * locale's topics listed so a client can pick a language without scraping.
 */
export function GET() {
  const entry = (locale: string) => (ref: ReturnType<typeof toc>[number]) => ({
    number: ref.number || null,
    title: ref.title,
    part: ref.part || null,
    slug: ref.slug,
    url: `${SITE}/${locale}/topics/${ref.slug}/`
  });

  const data = {
    title: 'Health Economics Guide',
    description:
      'A practical handbook of best practices for health economics, written for the people who run health and care organizations.',
    site: SITE,
    source: SOURCE_REPO,
    llms_txt: `${SITE}/llms.txt`,
    sitemap: `${SITE}/sitemap.xml`,
    default_locale: DEFAULT_LOCALE,
    parts: PARTS.map(({ number, title, tagline }) => ({ number, title, tagline })),
    locales: LOCALES.map((locale) => ({
      code: locale.slug,
      label: locale.label,
      contents: `${SITE}/${locale.slug}/contents/`,
      glossary: `${SITE}/${locale.slug}/glossary/`,
      index: `${SITE}/${locale.slug}/index/`,
      topics: toc(locale.slug).map(entry(locale.slug))
    }))
  };

  return new Response(JSON.stringify(data, null, 2) + '\n', {
    headers: { 'content-type': 'application/json; charset=utf-8' }
  });
}
