# Locales for major projects with SvelteKit

Translate content into multiple locales.

How this site supports multiple locales end to end: content, web
routing, UI chrome, and bugs.

Read locales via file `locales.tsv`.

## Locale directory names

Every directory under `locales/` is named `<language>-<region>`, all lowercase:
a two-letter ISO 639-1 language code, a hyphen, then a region that is either a
two-letter ISO 3166-1 country code (`de-de`, `ja-jp`, `en-us`) or `001`, the UN
M.49 code for the world, for a locale with no single national dialect
(`fr-001`, `cy-001`).

- A bare language code is never a directory name: there is no `locales/en/`,
  no `locales/cy/`. The two-letter forms (`/en/`, `/cy/`) exist only as web
  route aliases of the `-001` locale, derived from it by the site, and are
  never stored as content.
- A locale may carry a further variant suffix after the region, as
  `en-gb-oxendict` does for Oxford spelling; the `<language>-<region>` prefix
  is still required.
- Directory names are the locale codes used everywhere else: in
  `locales.tsv`, in route slugs, and in `LOCALE_LABELS`.

## .locale-peer.id file

`.locale-peer-id` file is a byte-identical 32-character hexadecimal lowercase
number then newline, across every locale's version of "the same" topic,
regardless of slug.

`.locale-peer-id` id is how the project resolves "this page, in locale X".

## Guidance

- en-us: consistent American spelling; fix any stray en-gb forms (organisation→organization, licence→license, programme→program, cancelled→canceled, analogue→analog).

- en-gb: the -ize/-ise family (optimise, realise, organise, prioritise, utilise, etc.), -or/-our (colour, behaviour, favour, labour, neighbours), -er/-re (centre, theatre for the metaphorical sense), -ense/-ce (defence, licence), doubled-L forms (modelled, labelled, cancelled, enrol/enrolment), analogue, programme, and math→maths.

- en-gb-oxendict: use en-gb then revert just the -ise family back to Oxford -ize spelling (optimize, realise→realize, organise→organize, etc.), while correctly keeping -yse forms (analyse/analysable) unchanged, since Oxford style never uses -yze, and keeping all other British forms (colour, centre, defence, licence, programme, maths, modelled) intact.

## Guard against corruption

Keep proper nouns unconverted. Example: "Hospital Readmissions Reduction Program" (a real United States federal program name).

## Verify

For each locale subdirectory:

- Name matches `<language>-<region>` (see Locale directory names); a bare two-letter directory is an error
- File exists: `index.md`
- Symlink exists: `README.md`
- Locale peer id tracking file exists: `.locale-peer-id`

Then:

- Fix any broken internal links
- Fix any residual wrong-dialect spellings
- Update this file and `locales.tsv`

## Content structure (book side)

Each locale is `locales/<code>/` in the book repo, containing:

- `locales/<code>/topics/<slug>/index.md` + `.locale-peer-id` — one per topic.
  `README.md` is a symlink to `index.md`. The `topics` directory name and
  the word "topic" in the prose are translated per locale:

  | Locale(s) | Word / directory |
  |---|---|
  | en-* | topics |
  | ar-001, ar-eg | المواضيع (الموضوع) |
  | bn-001 | বিষয় |
  | cy-001, cy-gb | pynciau (pwnc) |
  | de-001, de-de | themen (Thema) |
  | es-001, es-es | temas (tema) |
  | fr-001, fr-fr | sujets (sujet) |
  | hi-001 | विषय |
  | id-001 | topik |
  | ja-jp | トピック |
  | ko-kr | 주제 |
  | pt-001 | tópicos (tópico) |
  | ru-001, ru-ru | темы (тема) |
  | ur-001 | موضوعات (موضوع) |
  | zh-001, zh-cn | 主题 |

  The site finds the directory by its numbered `NN-NN-<slug>` children, so the
  name is free to vary (`scripts/sync-content.sh`). The site route is
  `/<locale>/topics/<slug>/` for every locale.
- `locales/<code>/index.md` + `.locale-peer-id` + `README.md` symlink — the
  locale's own translated README (site home/contents page source). Intended
  to be scaffolded for every locale (matching the topic-file pattern), empty
  until translated; it has not been created for any locale yet, English
  included, and the site does not read it today.

## Slugs

Slugs are per-locale, not shared.** Translated locales rename topic directories
to native-script/accented slugs.

Example: `es-001` `año-de-vida-ajustado-por-calidad`, `ur-001` `صحت-ایڈجسٹڈ-متوقع-زندگی`.

Nothing in the site assumes slugs match across locales.

## Routes and language forwarding

Every published locale code is a top-level route: `/<code>/`, with
`/<code>/contents/`, `/<code>/topics/<slug>/`, `/<code>/glossary/` and
`/<code>/index/` beneath it. There is no `/locales/` segment in a URL; the
`locales/` directory name is a repository path only.

- **Published set.** The routes are exactly the codes in `locales.tsv`, in the
  same order as `LOCALES` in `book.ts`. A directory under `locales/` that is
  not in that list is vendored but never routed (`ar-eg`, `cy-gb`, `en-150`,
  `es-es`, `fr-fr`, `ru-ru`, `zh-001`).
- **Two-letter aliases.** Each published `-001` locale also answers at its bare
  language (`/en/` renders `en-001`, `/cy/` renders `cy-001`). The alias is
  derived from the `-001` code, never stored as a directory, and its page names
  the `-001` URL as its canonical link. The two routes are peers: the site never
  forwards `/<language>-001/` to `/<language>/` or the reverse.
- **Root `/`.** A client-side stub, not a server redirect, because `/?<terms>` is
  the site-search URL and must stay put (with JavaScript off, a `<noscript>`
  refresh goes to the default locale). With no query it forwards to the first
  of:
  1. the locale the reader last chose in the picker (stored locally), if it is
     still a published route;
  2. the first of the browser's `navigator.languages` that matches, where each
     tag is lower-cased with `_` read as `-` and tried as: an exact published
     route; else the language's `-001` route (a bare `en` counts as the
     language); else the nearest published locale in the same language;
  3. the default locale, `en-gb-oxendict`.

  | Browser language | Forwards to |
  |---|---|
  | `en-GB` | `/en-gb/` (exact) |
  | `en-AU`, `en` | `/en-001/` |
  | `cy-GB`, `cy_GB` | `/cy-001/` (there is no `cy-gb` route; publishing one would win automatically) |
  | `de-AT` | `/de-001/` |
  | `zh-TW` | `/zh-cn/` (no `zh-001`) |
  | `sw-KE` (not published) | `/en-gb-oxendict/` |
- **Unknown locale in a URL.** A 404 under a locale segment the site does not
  publish (`/de-xx/…`, `/zh-001/…`) forwards to the nearest published locale
  in the same language, keeping the rest of the path; a language the book is not
  written in stays a 404.
- **Picker.** The picker shows the locale named by the URL, not the saved one,
  and picking the locale the page is already in does nothing. Elsewhere,
  choosing a language goes to the same topic in that locale (found through
  `.locale-peer-id`, since slugs differ) or else to that locale's contents.

## Locale picker (labels + ordering)

- Labels live in `locales.ts`'s `LOCALE_LABELS`, one entry per code, in that
  language: `<language>` alone for a `-001` locale (`'fr-001': 'Français'`),
  `<language> - <region>[ - <variant>]` otherwise (`'ja-jp': '日本語 - 日本'`,
  `'en-gb-oxendict': 'English - Great Britain - Oxford'`), with the region's
  full name, never an abbreviation. Falls back to the raw code via
  `localeLabel()` if a code has no label yet.
- Header `PickerBar` order comes from `content.js`'s `locales()` (sorted by
  code) — the `-001` suffix happens to sort before any letter-starting
  regional suffix, so variants already come first there.
- Home page's locale list (`+page.server.js`) sorts explicitly: default
  locale first, then grouped by language name (label text before the `(`),
  with the `-001`/World variant sorted before its regional siblings within
  each group, then alphabetically by label. This does NOT fall out of
  alphabetical-by-label sort on its own (e.g. "España" < "Mundo") — it needs
  the explicit `-001` check.

## Bug fixes (regression watch-list)

### Bug: ASCII-only `\w` regexes broke every non-Latin/non-accented slug

Bug: matched topic slugs with `[\w.-]+` (ASCII word chars only). Any locale with
an accented or native-script slug (Spanish, French, Russian, Chinese, Arabic,
Welsh, Hindi, Bengali, Portuguese, Indonesian, Urdu) silently failed peer-id
resolution and cross-topic links.

Fix by widening the slug capture group to `[^/]+`.

### Bug: Every locale's home/contents page showed canonical English content

Bug: code and content always read a single top-level `/README.md` for title,
intro, "New here?" picks, part headings, and blurbs — only topic _links_ were
ever localized.

Fix: populate the previously-empty `locales/<code>/index.md` per locale.

## Bug: Link extraction was hardcoded to literal English phrase

Bug: link silently found nothing once the README was translated.

Fix: extract all links from the whole pre-`##` intro block instead of
regex-matching the English sentence.

### Bug: UI chrome was hardcoded English in the `.svelte` templates

Bug: nav labels, subtitles, page titles, intros, breadcrumbs, topic position,
pagination, picker/share labels.

Fix: add `i18n.js` and threading `ui(locale)` through every locale-scoped route
and `+layout.svelte`.

### Bug: header/footer brand wordmark stayed English

Bug: wordmark came only from the root (locale-agnostic) `+layout.server.js`,
which deliberately never picks a locale.

Fix: have `[locale]/+layout.server.js` supply this locale's own title,
which overrides the root layout's canonical one via SvelteKit's merged
`page.data` on any route under `/<locale>/` — the root picker and
`/about/` (no locale in the URL) correctly keep the canonical English title.
