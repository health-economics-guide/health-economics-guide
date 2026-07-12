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

- [ ] `STYLE_GUIDE.md` — prose/formatting contract expanded from spec §5–§6
- [ ] `00-preface.md`
- [ ] `GLOSSARY.md` skeleton (A–Z letter sections, empty)
- [ ] `INDEX.md` skeleton (A–Z letter sections, empty)

## Phase 2 — Chapters

Each chapter task means: researched, drafted to the 13-section template, self-checked against spec §8, and its terms registered in `GLOSSARY.md`/`INDEX.md`. One writer per file; chapters within a part may run concurrently.

### Part 1 — Foundations (write first; later parts cross-reference it)

- [ ] 1.1 Introduction to Health Economics — `01-01-introduction-to-health-economics.md`
- [ ] 1.2 Demand for Health and Healthcare — `01-02-demand-for-health-and-healthcare.md`
- [ ] 1.3 Market Failure — `01-03-market-failure.md`

### Part 2 — Evaluation and Evidence

- [ ] 2.1 Economic Evaluation — `02-01-economic-evaluation.md`
- [ ] 2.2 Modelling — `02-02-modelling.md`
- [ ] 2.3 Health Econometrics — `02-03-health-econometrics.md`
- [ ] 2.4 Pharmacoeconomics — `02-04-pharmacoeconomics.md`

### Part 3 — Systems, Policy and Priorities

- [ ] 3.1 Health Systems — `03-01-health-systems.md`
- [ ] 3.2 Health Policy — `03-02-health-policy.md`
- [ ] 3.3 Rationing — `03-03-rationing.md`
- [ ] 3.4 Equity — `03-04-equity.md`
- [ ] 3.5 Capabilities — `03-05-capabilities.md`
- [ ] 3.6 Global Health and Trade — `03-06-global-health-and-trade.md`

### Part 4 — Frontiers

- [ ] 4.1 Behavioural Economics — `04-01-behavioural-economics.md`
- [ ] 4.2 Innovation Health Economics — `04-02-innovation-health-economics.md`
- [ ] 4.3 Digital Health Economics — `04-03-digital-health-economics.md`
- [ ] 4.4 AI Health Economics — `04-04-ai-health-economics.md`

## Phase 3 — Reference matter

- [ ] `GLOSSARY.md` complete — every key term from all 17 chapters, Wikipedia-linked where verified, each with a "See Chapter N" pointer
- [ ] `INDEX.md` complete — every key concept mapped to ascending, de-duplicated chapter numbers
- [ ] Reconciliation sweep — no glossary/index entry points at a chapter that doesn't cover it; no chapter concept missing from both

## Phase 4 — Quality gates and release

- [ ] Structural gate — all 17 chapters have the 13 sections, correctly named and ordered (script it)
- [ ] Link gate — every Wikipedia link resolves (HEAD-check), appears in `## References`, 5–12 per chapter (script it)
- [ ] Source gate — spot-review citations, statistics, and quotations in every chapter for authenticity
- [ ] Consistency gate — headings ↔ filenames ↔ manifest; cross-reference numbers and titles agree; UK spelling; acronyms expanded
- [ ] Fix everything the gates surface
- [ ] Final read-through: README → preface → one chapter per part, for voice consistency
- [ ] `git init` + initial commit (repository is not yet under version control)
