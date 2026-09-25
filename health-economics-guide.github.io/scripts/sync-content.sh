#!/bin/sh
# Copy the book's markdown from the source repository into this site.
#
# The site vendors the prose rather than building from a checkout of the book,
# so that `pnpm dev` and `pnpm build` work standalone. The cost is that the copy
# goes stale: run this after the book changes, then commit the result.
#
# Usage:
#   ./scripts/sync-content.sh [path-to-health-economics-guide]
#
# The default path assumes this site lives inside the book's monorepo:
#   health-economics-guide/                    <- the book (repo root)
#   └── health-economics-guide.github.io/      <- this site

set -eu

here=$(cd "$(dirname "$0")/.." && pwd)
source_repo=${1:-"$here/.."}
locales_dir="$source_repo/locales"

if [ ! -d "$locales_dir" ]; then
    echo "No locales/ directory under $source_repo" >&2
    echo "Pass the path to the book repository as the first argument." >&2
    exit 1
fi

destination="$here/src/content"

# GLOSSARY.md and INDEX.md are not localized in the book repo — one copy,
# shared across every locale on the site.
cp "$source_repo/GLOSSARY.md" "$destination/GLOSSARY.md"
cp "$source_repo/INDEX.md" "$destination/INDEX.md"

# Remove first so a locale or chapter removed upstream is removed here too,
# rather than lingering as an orphaned page the picker or sidebar still links
# to.
rm -rf "$destination/locales"
mkdir -p "$destination/locales"

# Chapters live one directory per chapter upstream (chapters/<slug>/index.md,
# alongside a README.md symlink and a .locale-peer-id — see
# spec/locales-for-global-sharing-with-svelte/index.md), not as flat
# chapters/<slug>.md files. Flatten back to <slug>.md on the way in so the
# site's own chapter lookup (server/book.ts's chapterFiles glob) needs no
# change: it still expects one file per chapter, named by slug.
total=0
for locale_path in "$locales_dir"/*/; do
    slug=$(basename "$locale_path")
    if [ ! -d "${locale_path}chapters" ]; then
        continue
    fi

    count=0
    for chapter_dir in "$locale_path"chapters/*/; do
        [ -d "$chapter_dir" ] || continue
        chapter_slug=$(basename "$chapter_dir")
        index_file="${chapter_dir}index.md"
        if [ -f "$index_file" ]; then
            mkdir -p "$destination/locales/$slug/chapters"
            cp "$index_file" "$destination/locales/$slug/chapters/$chapter_slug.md"
            count=$((count + 1))
        fi
    done

    if [ "$count" -eq 0 ]; then
        # A locale scaffolded upstream (per spec, every locale gets its
        # directory created before it has any translated chapters) but not
        # yet translated. Skip it silently here rather than erroring on an
        # empty glob — see the README's caution against an unfinished locale
        # silently appearing on the live site; this just keeps it out of the
        # vendored copy, so $lib/book.ts's hand-curated LOCALES (the site's
        # actual published-locale list) stays the real gate on visibility.
        continue
    fi

    total=$((total + count))
    echo "Synced $count chapters for locale $slug"
done

echo "Synced $total chapter files across all locales, plus the glossary and the index, from $source_repo"
echo "Review with: git -C \"$here\" status"
