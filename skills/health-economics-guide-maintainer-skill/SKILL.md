---
name: health-economics-guide-maintainer
description: Use when authoring, reviewing, or reorganizing content in the Health Economics Guide repository — writing a new chapter, running quality gates, updating the glossary/index, renumbering chapters, or otherwise editing the book's source files. For repo maintainers and contributors, not general readers of the finished guide; see health-economics-guide-skill for that.
---

# Health Economics Guide — maintainer's assistant

You help maintain the *Health Economics Guide* book: 28 Markdown chapters in five parts plus reference matter. This is a governed repository — read before you write.

## The one rule

**`spec/index.md` is the source of truth.** Read it before any change. Where any file disagrees with the spec, fix the file — or change the spec deliberately and bring every artifact into line in the same commit. `AGENTS.md` is the operating manual; read it first for the full rules and workflow. This skill summarizes both for quick reference but never overrides them.

## Orientation

| File | Role |
|---|---|
| `AGENTS.md` | Operating instructions and hard rules for agents working in this repo. |
| `spec/index.md` | The governing spec: manifest, 13-section chapter template, style, citation rules, quality gates, definition of done, renumbering procedure. |
| `STYLE_GUIDE.md` | The prose/formatting contract, subordinate to the spec, with worked examples. |
| `spec/oxford-spelling.md` | The house spelling contract (Oxford spelling: `-ize` endings, but British `behaviour`/`centre`/`licence`/`programme`/`analyse`). |
| `plan.md` / `tasks.md` | The phased build plan and its live checklist — update `tasks.md` in the same change as the work it tracks. |
| `AGENTS/*.md` | Role cards: `researcher.md`, `chapter-author.md`, `reviewer.md`, `reference-editor.md`. |
| `_sources/research-notes.md` | Verified research grounding chapters — verify sources directly before citing, even from here. |

## Hard rules (violations block "done")

1. **Never invent sources** — no fabricated citations, URLs, statistics, or quotations. Describe a pattern qualitatively if you can't verify a figure.
2. **Verify every Wikipedia link** resolves before using it; 5–12 per chapter, each also listed in `## References`.
3. **Follow the 13-section chapter template exactly** (spec §3): names, order, and counts — exactly six discussion questions before the worked example, sector lenses in order Startup/Small business/Enterprise/Government, a 6–12 item checklist.
4. **One writer per file.** Never let two agents edit the same chapter concurrently; fan out across distinct chapters only.
5. **Consistency updates travel together**: a change to terms or chapters updates `README.md`, `GLOSSARY.md`, and `INDEX.md` in the same change (spec §7).
6. **Cross-references carry number and title** — "(see Chapter 2.1 — Economic Evaluation)" — never a bare number.
7. **Oxford spelling; expand every acronym on first use per chapter; ~3,000–3,500 words of substantive prose per chapter**, reached by depth, never filler.
8. **Chapter scope is assigned.** The manifest's scope notes (spec §4) give every contested concept exactly one home chapter; cross-reference rather than re-teach.

## Map the request to a role and workflow

- **Write or regenerate one chapter** → wear the `AGENTS/chapter-author.md` hat, after `AGENTS/researcher.md` has produced verified sources in `_sources/research-notes.md`. Follow spec §9 end to end: fix scope → verify sources → draft to template → hit length by depth → self-check against spec §8 → register new terms in `GLOSSARY.md`/`INDEX.md` → tick `tasks.md`.
- **Review a chapter, a batch, or the whole book** → wear the `AGENTS/reviewer.md` hat and run the four quality gates (spec §10): structural, link, source, consistency. Report findings as file — gate — what's wrong — what passing looks like, most severe first; don't rewrite prose yourself unless asked.
- **Reconcile `README.md` / `GLOSSARY.md` / `INDEX.md`** → wear the `AGENTS/reference-editor.md` hat (spec §12): alphabetical glossary entries with a verified Wikipedia link and a home-chapter pointer; index entries as ascending, de-duplicated chapter numbers; README table of contents character-accurate against the spec §4 manifest.
- **Add, remove, split, merge, or reorder chapters** → this is the highest-risk operation (spec §11). Decide the final manifest first, back up untracked state, remap cross-references through one lookup applied once, two-phase rename files to avoid collisions, then rebuild `README.md`/manifest/`GLOSSARY.md`/`INDEX.md` together and re-run the consistency gate. Finish any renumber before writing new prose.

## Definition of done (per chapter — spec §8)

All 13 template sections present and correctly ordered; bold one-sentence thesis; numbered best practices with bold lead-ins; exactly six discussion questions with briefings before the worked example; four sector lenses in order; a 5-level maturity table (Initiate/Develop/Standardize/Manage/Orchestrate); 6–12 checklist items; 5–12 verified Wikipedia links each also in `## References`; no invented facts; Oxford spelling; acronyms expanded; ~3,000–3,500 words; `README.md`/`GLOSSARY.md`/`INDEX.md` updated for any new terms or structure.

## Cautions

- Prefer additive edits to destructive ones; the repo's own untracked working state is not a safety net — use git.
- After a parallel fan-out across chapters, verify what actually reached disk before re-running anything; re-run only what's genuinely missing.
- When in doubt, re-read `spec/index.md` rather than inferring convention from a single chapter — a single file can itself be wrong relative to the spec.
