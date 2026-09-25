import type { Handle } from '@sveltejs/kit';
import { isLocale, DEFAULT_LOCALE } from '$lib/book';
import { langAttr, localeDir } from '$lib/locales';

// Every route prerenders (see routes/+layout.ts), and adapter-static bakes
// this hook's output into the static HTML at build time — there is no
// runtime server on GitHub Pages. This is the standard way to give a fully
// static, per-locale SvelteKit site a correct `<html lang dir>` per page,
// rather than the one static value app.html can express on its own.
//
// Locale-neutral pages (home, glossary, index — see
// spec/locales-for-global-sharing-with-svelte/index.md's content-structure
// note that the glossary and index are "not localized upstream") fall back
// to DEFAULT_LOCALE, matching what they actually render.
const LOCALE_PATH = /^\/locales\/([^/]+)\//;

export const handle: Handle = async ({ event, resolve }) => {
  const match = event.url.pathname.match(LOCALE_PATH);
  const locale = match && isLocale(match[1]) ? match[1] : DEFAULT_LOCALE;

  return resolve(event, {
    transformPageChunk: ({ html }) =>
      html.replace(/<html([^>]*)>/, (_full, attrs: string) => {
        const withoutLang = attrs.replace(/\s*lang="[^"]*"/, '');
        return `<html lang="${langAttr(locale)}" dir="${localeDir(locale)}"${withoutLang}>`;
      })
  });
};
