# Tasks — Health Economics Guide

Live task checklist for building the book. Phases and rationale are in `plan.md`; the governing contract is `spec/index.md`. Tick items only when they meet the spec's definition of done (§8 per topic, §10 gates per book).

## Phase 0 — Scaffolding

- [x] Research grounding sources (Economics Network, Wikipedia, GOV.UK)
- [x] Complete `spec/index.md` — topic manifest (§4) with scope notes; fix template typo; correct non-goals
- [x] `plan.md`
- [x] `tasks.md` (this file)
- [x] `README.md` — table of contents matching the manifest
- [x] `AGENTS.md` + `AGENTS/` role definitions
- [x] `_sources/research-notes.md` — distilled research for topic authors

## Phase 1 — Contracts and front matter

- [x] `STYLE_GUIDE.md` — prose/formatting contract expanded from spec §5–§6
- [x] `00-preface.md`
- [x] `GLOSSARY.md` skeleton (A–Z letter sections, empty)
- [x] `INDEX.md` skeleton (A–Z letter sections, empty)

## Phase 2 — Topics

Each topic task means: researched, drafted to the 13-section template, self-checked against spec §8, and its terms registered in `GLOSSARY.md`/`INDEX.md`. One writer per file; topics within a part may run concurrently.

### Part 1 — Foundations (write first; later parts cross-reference it)

- [x] 1.1 Introduction to Health Economics — `01-01-introduction-to-health-economics.md`
- [x] 1.2 Demand for Health and Healthcare — `01-02-demand-for-health-and-healthcare.md`
- [x] 1.3 Market Failure — `01-03-market-failure.md`
- [x] 1.4 Supply of Healthcare — `01-04-supply-of-healthcare.md` *(expansion)*
- [x] 1.5 Determinants of Health — `01-05-determinants-of-health.md` *(expansion 2)*

### Part 2 — Evaluation and Evidence

- [x] 2.1 Economic Evaluation — `02-01-economic-evaluation.md`
- [x] 2.2 Modelling — `02-02-modelling.md`
- [x] 2.3 Health Econometrics — `02-03-health-econometrics.md`
- [x] 2.4 Pharmacoeconomics — `02-04-pharmacoeconomics.md`
- [x] 2.5 Budget Impact and Affordability — `02-05-budget-impact-and-affordability.md` *(expansion)*
- [x] 2.6 Evidence Synthesis and Meta-Analysis — `02-06-evidence-synthesis-and-meta-analysis.md` *(expansion 2)*

### Part 3 — Systems, Policy and Priorities

- [x] 3.1 Health Systems — `03-01-health-systems.md`
- [x] 3.2 Health Policy — `03-02-health-policy.md`
- [x] 3.3 Rationing — `03-03-rationing.md`
- [x] 3.4 Equity — `03-04-equity.md`
- [x] 3.5 Capabilities — `03-05-capabilities.md`
- [x] 3.6 Health Workforce and Labour Markets — `03-06-health-workforce-and-labour-markets.md` *(expansion)*
- [x] 3.7 Insurance and Risk Protection — `03-07-insurance-and-risk-protection.md` *(expansion)*
- [x] 3.8 Long-Term and Social Care Economics — `03-08-long-term-and-social-care-economics.md` *(expansion)*
- [x] 3.9 Mental Health Economics — `03-09-mental-health-economics.md` *(expansion)*
- [x] 3.10 Strategic Purchasing and Commissioning — `03-10-strategic-purchasing-and-commissioning.md` *(expansion 2)*
- [x] 3.11 Quality and Safety Economics — `03-11-quality-and-safety-economics.md` *(expansion 2)*
- [x] 3.12 Pandemic and Emergency Preparedness Economics — `03-12-pandemic-and-emergency-preparedness-economics.md` *(expansion 2)*

### Part 4 — Global and Societal Issues

- [x] 4.1 Behavioural Economics — `04-01-behavioural-economics.md`
- [x] 4.2 Global Health and Trade — `04-02-global-health-and-trade.md`
- [x] 4.3 Climate and Planetary Health Economics — `04-03-climate-and-planetary-health-economics.md` *(expansion)*
- [x] 4.4 Social Media and Health Communication Economics — `04-04-social-media-and-health-communication-economics.md`

### Part 5 — Digital, Software, and Technology

- [x] 5.1 Innovation Health Economics — `05-01-innovation-health-economics.md`
- [x] 5.2 Digital Health Economics — `05-02-digital-health-economics.md`
- [x] 5.3 AI Health Economics — `05-03-ai-health-economics.md`
- [x] 5.4 Software Engineering Health Economics — `05-04-software-engineering-health-economics.md`
- [x] 5.5 Robotics Health Economics — `05-05-robotics-health-economics.md`
- [x] 5.6 Health Data Economics — `05-06-health-data-economics.md`

## Phase 3 — Reference matter

- [x] `GLOSSARY.md` — 169 terms from the first 17 topics (superseded by the expansion rebuild below)
- [x] `INDEX.md` — 173 concepts from the first 17 topics (superseded by the expansion rebuild below)
- [x] Reconciliation sweep — every glossary pointer matches the manifest title; every index number is a valid topic

### Phase 3b — Reference matter rebuild for the 24-topic book (expansion)

- [x] `GLOSSARY.md` rebuilt over all 24 topics — **265 terms** (target 200+), 240 verified Wikipedia links, each with a "See Topic N — Title" pointer
- [x] `INDEX.md` rebuilt over all 24 topics — **238 concepts**, cross-cutting entries updated to include the new topics
- [x] Reconciliation sweep across 24 topics — every glossary pointer matches the manifest; every index number valid; all 240 links resolve

### Phase 4b — Quality gates for the 24-topic book (expansion)

- [x] Structural gate — all 7 new topics pass the 13-section sequence, 3 questions, 3 lenses, 4-col table, 10–12 checklist
- [x] Link gate — trimmed 1.4 (19→12), 3.7 (13→12), 3.10 (19→12); all 24 topics now 9–12 links, all resolve, all inline in References
- [x] Source gate — new topics' external URLs HTTP-checked (fixed Health Care Without Harm → noharm.org, Green Book slug typo in 4.5); figures qualitative
- [x] Consistency gate — cross-references across all 24 topics resolve to correct manifest titles; UK spelling; README/preface updated to 24 topics
- [x] `git commit` the expansion

## Phase 5 — Deepening existing topics (in place of three overlap-risk topics)

Rather than add thin new topics for prevention, ethics, and genomics, deepen the topics that already own them (spec §13 anti-overlap discipline). Each deepened in the uncapped sections (Core concepts, Common failure modes, References) to preserve the template gates.

- [x] 3.2 Health Policy — added prevention economics depth (three levels; prevention ≠ cost-saving; the prevention paradox; long-payback vs annual budgeting; public-health ROI)
- [x] 3.4 Equity — added distributive-justice theories (utilitarianism, prioritarianism, egalitarianism, Rawlsian maximin/"just health", sufficientarianism, fair innings)
- [x] 3.5 Capabilities — added the value judgements inside the QALY (equal-weighting as a value choice; patient vs public values; adaptation/response shift; legitimacy via process)
- [x] 4.2 Innovation — added precision/stratified medicine and genomics (companion diagnostics, co-dependent technologies, shrinking subgroups, genomics as durable asset/global public good)
- [x] Gates re-run on the 4 deepened topics — all 12 links, all resolve, gates intact; new DOIs (Rose 1985, Sprangers & Schwartz 1999) Crossref-verified
- [x] Reference matter updated with the new named concepts (glossary 265→281, index +17); glossary/index re-validated — all pointers match manifest, all numbers valid, all links resolve
- [x] `git commit` the deepening

## Phase 6 — Second expansion (24 → 29 topics) + template change

### 6a — Five new topics (appended within parts; spec manifest, README, preface updated to 29)

- [x] 1.5 Determinants of Health; 2.6 Evidence Synthesis and Meta-Analysis; 3.11 Strategic Purchasing and Commissioning; 3.12 Quality and Safety Economics; 4.6 Pandemic and Emergency Preparedness Economics
- [x] Deepened 2.1 Economic Evaluation (outcome measurement, PROMs) and 3.1 Health Systems (fiscal sustainability, fiscal space)

### 6b — Template change applied to ALL 29 topics (per user request)

Spec §3/§8/§10 and STYLE_GUIDE updated, then every topic retrofitted:

- [x] Discussion questions: 3 → **6** (three new distinct briefed questions per topic)
- [x] Sector lenses: 3 → **4** (added `### Small business` after Startup: Startup, Small business, Enterprise, Government)
- [x] Maturity model: 4-level → **5-level** (Initiate / Develop / Standardize / Manage / Orchestrate — fixed house vocabulary; Oxford spelling, `-ize`)
- [x] Structural gate re-run: all 29 pass (6 questions, 4 ordered lenses, 5-level table, 13-section sequence)
- [x] Link gate: all 29 topics 5–12 links, every inline link in References, all 292 unique Wikipedia URLs resolve 200
- [x] Reference matter rebuilt for 29 topics — glossary **352 terms**, index **325 concepts**; re-validated (pointers match manifest, index numbers valid, all links resolve)
- [x] `git commit` the second expansion + template change

## Phase 4 — Quality gates and release

- [x] Structural gate — all 17 topics have the 13 sections in the exact order; 3 questions; 3 ordered lenses; 4-col maturity table; 10–12 checklist items
- [x] Link gate — every Wikipedia link resolves; each appears in `## References`; 5–12 per topic (fixed: de-linked non-existent `Global_budget` in 3.1; trimmed 4.3 from 13→12 links)
- [x] Source gate — external URLs HTTP-checked (fixed broken WHO FCTC URL in 3.2); only hard figure (DiMasi US$2.6bn) is attributed and flagged contested; all other numbers are fictional-example values
- [x] Consistency gate — headings ↔ filenames ↔ manifest; all cross-reference numbers+titles agree; UK spelling verified in prose; acronyms expanded
- [x] Fix everything the gates surface
- [x] Final read-through: topic 1.1 read in full; structure of all 17 validated for voice/format consistency
- [x] `git init` + initial commit

## Phase 7 — Adopt Oxford spelling as the house standard

The house spelling standard is **Oxford spelling** (British spelling with `-ize`/`-ization` for Greek-derived verbs; British otherwise, incl. `-yse` in *analyse*), matching World Health Organization / UN-system usage.

- [x] `spec/oxford-spelling.md` written (the spelling contract, with word lists and boundaries)
- [x] Spelling rule updated in spec §5, STYLE_GUIDE §3, AGENTS.md, AGENTS role cards, plan.md to reference Oxford spelling
- [x] Whole-book conversion `-ise → -ize` for Greek-derived verbs across all 29 topics + front/reference matter, applied with three safeguards: **URLs protected** (no Wikipedia slug altered), **`## Key sources` / `## References` sections skipped** (citations/titles unchanged), and the **OECD's official name** ("Organisation for Economic Co-operation and Development") preserved
- [x] Preserved British forms: `-yse` (analyse, paralyse), `-our`, `-re`, licence/defence, programme, modelling, judgement, ageing, grey, anaesthetic
- [x] Maturity header now "Standardize" (Oxford `-ize`) across all 29 topics
- [x] Verified: all 292 Wikipedia URLs still resolve 200; body residual `-ise` misses (organizational, unrecognized, etc.) fixed; analyse untouched
- [x] `git commit` the Oxford spelling adoption
