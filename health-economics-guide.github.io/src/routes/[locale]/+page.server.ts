import { error } from '@sveltejs/kit';
import { isLocale, ROUTABLE_LOCALE_SLUGS } from '#lib/book.js';
import { toc } from '#lib/server/book.js';

/** A locale's landing page: the book's overview and its chapters grouped by part. */
export function entries() {
  return ROUTABLE_LOCALE_SLUGS.map((locale) => ({ locale }));
}

export function load({ params }) {
  if (!isLocale(params.locale)) error(404, `No locale named "${params.locale}"`);
  return { locale: params.locale, toc: toc(params.locale) };
}
