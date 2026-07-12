# Plan — Health Economics Guide

This plan turns `spec/index.md` (the source of truth) into a finished book: 17 chapters in 4 parts, plus front matter and reference matter. Progress is tracked in `tasks.md`; agent operating rules are in `AGENTS.md`.

## What we are building

A practical, worldwide handbook of health economics for senior health and care leaders — 17 chapters of ~3,000–3,500 words each, every chapter following the 13-section template in spec §3, grounded in real, verifiable sources. All health-system types and income settings are in scope; named national systems appear as exemplars, not defaults.

The chapter list derives from the Economics Network's health economics curriculum (14 topics) plus three frontier chapters (innovation, digital, AI). The full manifest with scope boundaries is spec §4.

## Grounding sources (already researched)

- **Economics Network — Health Economics for Teachers** (https://economicsnetwork.ac.uk/health/teachers): the 14-module curriculum this book's chapter list is built on, with per-topic sub-pages.
- **Wikipedia — Health economics** (https://en.wikipedia.org/wiki/Health_economics): Arrow's 1963 framing, Williams' eight-area "plumbing diagram", the Grossman model, market failures, evaluation methods, subfields.
- **GOV.UK — Health economics: a guide for public health teams** (https://www.gov.uk/guidance/health-economics-a-guide-for-public-health-teams): ROI tools, prioritisation frameworks, SPOT/HEER resources — one national exemplar of the practitioner's view this book must serve; WHO, OECD, and World Bank materials balance it internationally (spec §6).

Distilled notes live in `_sources/research-notes.md`. Chapter authors should start there, then verify sources directly.

## Phases

### Phase 0 — Scaffolding ✅

Spec completed (manifest §4 filled, template typo fixed, non-goals corrected), `plan.md`, `tasks.md`, `README.md` (table of contents), `AGENTS.md` + `AGENTS/` role definitions, `_sources/research-notes.md`.

### Phase 1 — Contracts and front matter

Deliverables, in this order (they gate everything after):

1. `STYLE_GUIDE.md` — the prose/formatting contract, expanded from spec §5–§6 with worked examples of each template section done well.
2. `00-preface.md` — who the book is for, how to read it, how it was built.
3. Empty-but-structured `GLOSSARY.md` and `INDEX.md` (letter-section skeletons) so chapter authors have a place to register terms as they go.

### Phase 2 — Chapters, part by part

Write chapters in part order — Part 1 first, because later chapters cross-reference its concepts; then Part 2 (the methods toolkit), then Parts 3 and 4. Within a part, chapters are independent and can be authored concurrently (one writer per file, per spec §9).

For each chapter: research and verify sources → draft to the 13-section template → self-check against spec §8 → register new terms in `GLOSSARY.md`/`INDEX.md`.

Chapter numbers are final (spec §4), so cross-references can be written with confidence from day one.

### Phase 3 — Reference matter

Once all 17 chapters exist: complete `GLOSSARY.md` (every key term, Wikipedia-linked, pointing to its home chapter) and `INDEX.md` (concept → chapter numbers), sweep for orphaned or missing entries, and reconcile both against the chapters.

### Phase 4 — Quality gates and release

Run the four gates from spec §10 across the whole book:

- **Structural gate** — 13 sections, correct order and names, per chapter (scriptable).
- **Link gate** — every Wikipedia link resolves and appears in `## References`; 5–12 per chapter (scriptable: extract links, HEAD-check each).
- **Source gate** — no invented citations, figures, or quotations (human/agent review).
- **Consistency gate** — headings match filenames match manifest; cross-references carry correct number *and* title; UK spelling; acronyms expanded (partly scriptable).

Fix everything the gates surface, then a final read-through of README → preface → one chapter per part for voice consistency.

## Working method

- **Sequencing:** Phase 1 before Phase 2; within Phase 2, Part 1 before the rest. Phases 3–4 need all chapters present.
- **Concurrency:** fan out one author-agent per chapter within a part; never two writers on one file (spec §9). Verify what actually reached disk before re-running anything.
- **Definition of done** is per-chapter (spec §8) and per-book (all four §10 gates pass, README/GLOSSARY/INDEX consistent with all 17 chapters).

## Risks and mitigations

- **Invented citations** — the biggest failure mode for generated prose. Mitigation: spec §6 is non-negotiable; the link gate HEAD-checks every URL; qualitative description replaces any unverifiable figure.
- **Template drift** on "different-feeling" chapters (e.g. 4.4 AI). Mitigation: the template is the contract (spec §13); the structural gate is mechanical.
- **Silent overlap** between adjacent chapters (1.3 vs 3.2; 2.1 vs 2.4; 4.3 vs 4.4). Mitigation: scope notes in spec §4 assign every contested concept a single home chapter.
- **Dated claims** in fast-moving areas (digital, AI, drug pricing). Mitigation: prefer durable frameworks over news; date-stamp any time-sensitive claim in prose.
