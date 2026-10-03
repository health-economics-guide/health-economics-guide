import { error } from '@sveltejs/kit';
import { isLocale, LOCALE_SLUGS } from '#lib/book.js';
import { conceptIndex } from '#lib/server/book.js';

/** One index page per locale; the document is shared (not localized upstream). */
export function entries() {
  return LOCALE_SLUGS.map((locale) => ({ locale }));
}

export function load({ params }) {
  if (!isLocale(params.locale)) error(404, `No locale named "${params.locale}"`);
  return { locale: params.locale, doc: conceptIndex() };
}
