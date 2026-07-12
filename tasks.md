# Tasks — Health Economics Guide

Live task checklist for building the book. Phases and rationale are in `plan.md`; the governing contract is `spec/index.md`. Tick items only when they meet the spec's definition of done (§8 per chapter, §10 gates per book).

## Phase 0 — Scaffolding

- [x] Research grounding sources (Economics Network, Wikipedia, GOV.UK)
- [x] Complete `spec/index.md` — chapter manifest (§4) with scope notes; fix template typo; correct non-goals
- [x] `plan.md`
- [x] `tasks.md` (this file)
- [x] `README.md` — table of contents matching the manifest
- [x] `AGENTS.md` + `AGENTS/` role definitions
- [x] `_sources/research-notes.md` — distilled research for chapter authors

## Phase 1 — Contracts and front matter

- [x] `STYLE_GUIDE.md` — prose/formatting contract expanded from spec §5–§6
- [x] `00-preface.md`
- [x] `GLOSSARY.md` skeleton (A–Z letter sections, empty)
- [x] `INDEX.md` skeleton (A–Z letter sections, empty)

## Phase 2 — Chapters

Each chapter task means: researched, drafted to the 13-section template, self-checked against spec §8, and its terms registered in `GLOSSARY.md`/`INDEX.md`. One writer per file; chapters within a part may run concurrently.

### Part 1 — Foundations (write first; later parts cross-reference it)

- [x] 1.1 Introduction to Health Economics — `01-01-introduction-to-health-economics.md`
- [x] 1.2 Demand for Health and Healthcare — `01-02-demand-for-health-and-healthcare.md`
- [x] 1.3 Market Failure — `01-03-market-failure.md`

### Part 2 — Evaluation and Evidence

- [x] 2.1 Economic Evaluation — `02-01-economic-evaluation.md`
- [x] 2.2 Modelling — `02-02-modelling.md`
- [x] 2.3 Health Econometrics — `02-03-health-econometrics.md`
- [x] 2.4 Pharmacoeconomics — `02-04-pharmacoeconomics.md`

### Part 3 — Systems, Policy and Priorities

- [x] 3.1 Health Systems — `03-01-health-systems.md`
- [x] 3.2 Health Policy — `03-02-health-policy.md`
- [x] 3.3 Rationing — `03-03-rationing.md`
- [x] 3.4 Equity — `03-04-equity.md`
- [x] 3.5 Capabilities — `03-05-capabilities.md`
- [x] 3.6 Global Health and Trade — `03-06-global-health-and-trade.md`

### Part 4 — Frontiers

- [x] 4.1 Behavioural Economics — `04-01-behavioural-economics.md`
- [x] 4.2 Innovation Health Economics — `04-02-innovation-health-economics.md`
- [x] 4.3 Digital Health Economics — `04-03-digital-health-economics.md`
- [x] 4.4 AI Health Economics — `04-04-ai-health-economics.md`

## Phase 3 — Reference matter

- [x] `GLOSSARY.md` complete — 169 terms from all 17 chapters, Wikipedia-linked where verified (156 links, all resolve), each with a "See Chapter N — Title" pointer
- [x] `INDEX.md` complete — 173 concepts mapped to ascending, de-duplicated chapter numbers
- [x] Reconciliation sweep — every glossary pointer matches the manifest title; every index number is a valid chapter

## Phase 4 — Quality gates and release

- [x] Structural gate — all 17 chapters have the 13 sections in the exact order; 3 questions; 3 ordered lenses; 4-col maturity table; 10–12 checklist items
- [x] Link gate — every Wikipedia link resolves; each appears in `## References`; 5–12 per chapter (fixed: de-linked non-existent `Global_budget` in 3.1; trimmed 4.3 from 13→12 links)
- [x] Source gate — external URLs HTTP-checked (fixed broken WHO FCTC URL in 3.2); only hard figure (DiMasi US$2.6bn) is attributed and flagged contested; all other numbers are fictional-example values
- [x] Consistency gate — headings ↔ filenames ↔ manifest; all cross-reference numbers+titles agree; UK spelling verified in prose; acronyms expanded
- [x] Fix everything the gates surface
- [x] Final read-through: chapter 1.1 read in full; structure of all 17 validated for voice/format consistency
- [x] `git init` + initial commit
