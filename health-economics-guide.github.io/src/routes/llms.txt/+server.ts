import { DEFAULT_LOCALE, LOCALES, SOURCE_REPO } from '#lib/book.js';
import { contents, frontMatter } from '#lib/server/book.js';

export const prerender = true;

const SITE = 'https://health-economics-guide.github.io';

/**
 * An llms.txt (https://llmstxt.org) for the book: a plain-markdown map that a
 * language model can read in one fetch. Topics are listed for the default
 * locale; every other locale gets one contents link under "Optional".
 */
export function GET() {
  const url = (path: string) => `${SITE}/${DEFAULT_LOCALE}/${path}`;

  const front = frontMatter(DEFAULT_LOCALE).map(
    (ref) => `- [${ref.title}](${url(`topics/${ref.slug}/`)})`
  );

  const parts = contents(DEFAULT_LOCALE).map(
    (part) =>
      `## Part ${part.number} — ${part.title}\n\n${part.tagline}\n\n` +
      part.chapters
        .map((ref) => `- [Topic ${ref.number} — ${ref.title}](${url(`topics/${ref.slug}/`)})`)
        .join('\n')
  );

  const locales = LOCALES.map(
    (locale) => `- [${locale.label}](${SITE}/${locale.slug}/contents/) (\`${locale.slug}\`)`
  );

  const body = `# Health Economics Guide

> A practical handbook of best practices for health economics, written for the people who run health and care organizations. It covers tax-funded, social-insurance, private-insurance, and mixed systems in low-, middle-, and high-income settings. Every topic follows one template: why it matters, core concepts, best practices, discussion questions, a worked example, sector lenses, failure modes, a maturity model, and a checklist.

The book is available in ${LOCALES.length} locales. The links below are the ${DEFAULT_LOCALE} edition (British English, Oxford spelling). A machine-readable version of this map is at ${SITE}/llms.json.

## Front matter

${front.join('\n')}

${parts.join('\n\n')}

## Reference

- [Glossary](${url('glossary/')})
- [Index of concepts](${url('index/')})
- [Source repository](${SOURCE_REPO})
- [Sitemap](${SITE}/sitemap.xml)

## Optional

Other locales, each with its own contents page:

${locales.join('\n')}
`;

  return new Response(body, { headers: { 'content-type': 'text/plain; charset=utf-8' } });
}
