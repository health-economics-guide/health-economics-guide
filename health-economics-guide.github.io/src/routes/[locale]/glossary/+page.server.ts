import { error } from '@sveltejs/kit';
import { isLocale, ROUTABLE_LOCALE_SLUGS } from '#lib/book.js';
import { glossary } from '#lib/server/book.js';

/** One glossary page per locale; the document is shared (not localized upstream). */
export function entries() {
  return ROUTABLE_LOCALE_SLUGS.map((locale) => ({ locale }));
}

export function load({ params }) {
  if (!isLocale(params.locale)) error(404, `No locale named "${params.locale}"`);
  return { locale: params.locale, doc: glossary() };
}
