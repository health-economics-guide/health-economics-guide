#!/bin/sh
# Copy the Lily Design System's reference theme stylesheets from the
# @lilydesignsystem/themes npm package into static/assets/themes/.
#
# There is now a published theme package, so this replaces the older
# practice (see AGENTS.md history) of hand-copying static/assets/themes/
# from a checkout of lilydesignsystem/lily-design-system's own themes/
# directory. The site still serves them as plain static files, at the
# same /assets/themes/<slug>.css URLs the header's ThemePicker expects
# (its themesUrl prop, in +layout.svelte) — only the source changed.
#
# Usage:
#   pnpm sync-themes
#
# Run this after bumping the @lilydesignsystem/themes version in
# package.json, then review and commit the result.

set -eu

here=$(cd "$(dirname "$0")/.." && pwd)
source_dir="$here/node_modules/@lilydesignsystem/themes/dist"
destination="$here/static/assets/themes"

if [ ! -d "$source_dir" ]; then
    echo "No @lilydesignsystem/themes package found under node_modules." >&2
    echo "Run 'pnpm install' first." >&2
    exit 1
fi

# Remove first so a theme removed upstream is removed here too, rather
# than lingering as an orphaned stylesheet the theme picker still lists.
rm -rf "$destination"
mkdir -p "$destination"
cp "$source_dir"/*.css "$destination/"

count=$(find "$destination" -name '*.css' | wc -l | tr -d ' ')
echo "Synced $count theme stylesheets from @lilydesignsystem/themes into $destination"
echo "Review with: git -C \"$here\" status"
