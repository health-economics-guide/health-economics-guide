# Specification — Health Economics

**Status:** Authoritative source of truth. This document governs the book. Where a chapter, the README, the style guide, or any generated content disagrees with this spec, **this spec wins** — fix the artifact, or change the spec deliberately and then bring the artifacts into line.

**Purpose:** Enough here for any author or agent to (a) understand what the book is, (b) build or regenerate any single chapter to a consistent standard, and (c) verify the result against a checklist — without reading the other 63 files first.

---

## 1. Product definition

A practical handbook of best practices for understanding and applying health economics in real health and care organizations.

- **Working title:** *Health Economics Guide
- **Subtitle:** A practical handbook of best practices for health economics.
- **Format:** A set of Markdown files, one per chapter, stitched by `README.md` (the table of contents) plus reference matter (`GLOSSARY.md`, `INDEX.md`).
- **Premise (the book's spine):** *In health, **how** economics provides the frameworks for strategy, resourcing, equity, and public-trust — not merely efficiency.* Every chapter must ultimately serve this thesis.
- **Centre of gravity:** Health systems worldwide. The book treats tax-funded, social-insurance, private-insurance, and mixed systems — and low-, middle-, and high-income settings — as equally first-class, drawing examples from many jurisdictions (e.g. the UK's NHS, Germany's social insurance, US Medicare/Medicaid, India's Ayushman Bharat, WHO and World Bank programmes). No single country's system is the default; when a claim is system-specific, name the system.

### Audience
Chief executives and senior leaders; directors of digital and transformation; product, delivery, programme, and portfolio leads; clinical and care professionals; and the operational managers who run services daily. Write for a busy director who wants to **act**.

---

## 2. Repository layout

| Path | Role |
|---|---|
| `README.md` | Reader-facing front door + table of contents. Must list every chapter with correct number, title, and filename. |
| `STYLE_GUIDE.md` | The prose/formatting contract every chapter author follows. Subordinate to this spec. |
| `00-preface.md` | Front matter. |
| `PP-CC-slug.md` | The chapters. Filenames are **sortable zero-padded decimals** — a two-digit part number, a dash, a two-digit within-part number, then the slug (e.g. `01-00-introduction.md`, — so a plain lexical sort lists chapters in reading order. See manifest, §4. |
| `GLOSSARY.md` | A–Z definitions of key terms, Wikipedia-linked, each pointing to its home chapter. |
| `INDEX.md` | A–Z concepts/frameworks → chapter numbers (numbers are **chapter numbers, not pages**). |
| `_sources/` | Raw source material used for grounding |
| `spec/index.md` | **This file** — the source of truth. |
| `spec/README.md` | Pointer to this file. |

---

## 3. Chapter template (canonical structure)

Every chapter uses these headings, in this order. This is the contract the maturity model, checklist, and reviews are verified against.

1. `# Chapter N — Title`
2. **In one sentence** — a single **bold** sentence stating the chapter's thesis. (No heading; it's the first line of body.)
3. `## Why this matters in health economics` — the domain-specific stakes: safety, equity, statutory duties, public money.
4. `## Core concepts` — definitions and mental models. First mention of each key named concept is hyperlinked to its English Wikipedia article.
5. `## Best practices` — **numbered**; each item a **bold lead-in** + 2–4 sentences. This is the heart of the chapter.
6. `## Questions to discuss with your team` — **exactly six** numbered, open (non-yes/no) questions, each in **bold**, each followed by a 4–8 sentence briefing that names the real tensions, concrete angles, and what an honest answer looks like. Placed **before** the worked example. Must be workshop-ready.
7. `## In practice: a health economics example` — one concrete, realistic, fictional worked scenario (e.g. a regional health system deciding whether to fund a new screening programme). Vary the setting across chapters — different countries, system types, and income levels — so the book reads as genuinely worldwide.
8. `## Four sector lenses` — the same topic across four `###` subsections **in this order**: `### Startup`, `### Small business`, `### Enterprise`, `### Government`. Each 3–6 sentences, showing how the practice changes with scale, funding model, risk appetite, and accountability. "Startup" is an early-stage venture; "Small business" is a small but established provider or practice; "Enterprise" is a large provider, insurer, or payer; "Government" is a ministry, national payer, or regulator.
9. `## Common failure modes` — anti-patterns and how to avoid them.
10. `## Maturity model` — a **5-level** table with columns **Initiate / Develop / Standardize / Manage / Orchestrate** and 3–5 rows of observable characteristics. These five level names are a fixed house vocabulary; keep them verbatim (Oxford spelling — note the `-ize` in "Standardize").
11. `## Checklist` — 6–12 actionable `- [ ]` items.
12. `## Key sources` — bulleted, real and verifiable; cite frameworks by name.
13. `## References` — a numbered list combining (a) Wikipedia articles for the key concepts named in the chapter and (b) authoritative sources. Format each: *title — publisher/author — URL*.

---

## 4. Chapter manifest

Thirty-three chapters in five parts. Chapter numbers are `Part.Chapter` (e.g. "Chapter 2.3 — Health Econometrics"); filenames are the zero-padded equivalents. New chapters are **appended within their part** (e.g. Supply is 1.4, after Market Failure) so that existing chapter numbers never move — a deliberate choice to avoid the renumbering risk of §11. Reading order within a part is the table order; where a later-numbered chapter is a logical sibling of an earlier one (Supply 1.4 beside Demand 1.2), the cross-references make the link.

### Part 1 — Foundations
*Why health is economically different, and the models that explain it.*

| # | Title | Filename |
|---|---|---|
| 1.1 | Introduction to Health Economics | `01-01-introduction-to-health-economics.md` |
| 1.2 | Demand for Health and Healthcare | `01-02-demand-for-health-and-healthcare.md` |
| 1.3 | Market Failure | `01-03-market-failure.md` |
| 1.4 | Supply of Healthcare | `01-04-supply-of-healthcare.md` |
| 1.5 | Determinants of Health | `01-05-determinants-of-health.md` |

### Part 2 — Evaluation and Evidence
*The analyst's toolkit: valuing outcomes, building models, testing claims.*

| # | Title | Filename |
|---|---|---|
| 2.1 | Economic Evaluation | `02-01-economic-evaluation.md` |
| 2.2 | Modelling | `02-02-modelling.md` |
| 2.3 | Health Econometrics | `02-03-health-econometrics.md` |
| 2.4 | Pharmacoeconomics | `02-04-pharmacoeconomics.md` |
| 2.5 | Budget Impact and Affordability | `02-05-budget-impact-and-affordability.md` |
| 2.6 | Evidence Synthesis and Meta-Analysis | `02-06-evidence-synthesis-and-meta-analysis.md` |

### Part 3 — Systems, Policy and Priorities
*How societies organize, fund, and share out healthcare.*

| # | Title | Filename |
|---|---|---|
| 3.1 | Health Systems | `03-01-health-systems.md` |
| 3.2 | Health Policy | `03-02-health-policy.md` |
| 3.3 | Rationing | `03-03-rationing.md` |
| 3.4 | Equity | `03-04-equity.md` |
| 3.5 | Capabilities | `03-05-capabilities.md` |
| 3.6 | Health Workforce and Labour Markets | `03-06-health-workforce-and-labour-markets.md` |
| 3.7 | Insurance and Risk Protection | `03-07-insurance-and-risk-protection.md` |
| 3.8 | Long-Term and Social Care Economics | `03-08-long-term-and-social-care-economics.md` |
| 3.9 | Mental Health Economics | `03-09-mental-health-economics.md` |
| 3.10 | Strategic Purchasing and Commissioning | `03-10-strategic-purchasing-and-commissioning.md` |
| 3.11 | Quality and Safety Economics | `03-11-quality-and-safety-economics.md` |
| 3.12 | Pandemic and Emergency Preparedness Economics | `03-12-pandemic-and-emergency-preparedness-economics.md` |

### Part 4 — Global and Societal Issues
*Health beyond one system: behaviour, global trade and financing, the planet, and the public conversation.*

| # | Title | Filename |
|---|---|---|
| 4.1 | Behavioural Economics | `04-01-behavioural-economics.md` |
| 4.2 | Global Health and Trade | `04-02-global-health-and-trade.md` |
| 4.3 | Climate and Planetary Health Economics | `04-03-climate-and-planetary-health-economics.md` |
| 4.4 | Social Media and Health Communication Economics | `04-04-social-media-and-health-communication-economics.md` |

### Part 5 — Digital, Software, and Technology
*The economics of health technology: innovation, digital care, artificial intelligence, software, robotics, and data.*

| # | Title | Filename |
|---|---|---|
| 5.1 | Innovation Health Economics | `05-01-innovation-health-economics.md` |
| 5.2 | Digital Health Economics | `05-02-digital-health-economics.md` |
| 5.3 | AI Health Economics | `05-03-ai-health-economics.md` |
| 5.4 | Software Engineering Health Economics | `05-04-software-engineering-health-economics.md` |
| 5.5 | Robotics Health Economics | `05-05-robotics-health-economics.md` |
| 5.6 | Health Data Economics | `05-06-health-data-economics.md` |

### Chapter scope notes (boundaries, to prevent silent overlap)

- **1.1 Introduction** owns the discipline's history (Arrow 1963, Williams' plumbing diagram), scope, and core vocabulary. It signposts, never deep-dives; every other chapter may assume it.
- **1.2 Demand** owns the Grossman model, health as capital, derived demand, elasticities, agency. Insurance-driven demand distortions belong to 1.3.
- **1.3 Market Failure** owns information asymmetry, adverse selection, moral hazard, supplier-induced demand, externalities, monopoly, Baumol effect. Policy responses belong to 3.2.
- **2.1 Economic Evaluation** owns CEA/CUA/CBA/ROI/SROI, QALYs, DALYs, ICERs, thresholds, discounting, perspective. The workhorse chapter; 2.2–2.4 build on it.
- **2.2 Modelling** owns decision trees, Markov models, microsimulation, sensitivity/uncertainty analysis, model validation.
- **2.3 Health Econometrics** owns causal inference: RCT analysis, difference-in-differences, instrumental variables, regression discontinuity, panel methods, and data pitfalls (selection, confounding, missing data).
- **2.4 Pharmacoeconomics** owns drug pricing, value-based pricing, HTA for medicines, managed entry agreements, generics/biosimilars.
- **3.1 Health Systems** owns financing models (Beveridge, Bismarck, private insurance, out-of-pocket), provider payment (capitation, fee-for-service, DRGs), system comparison.
- **3.2 Health Policy** owns the policy process, regulation, prevention economics, fiscal/pricing levers (e.g. sugar taxes), and evidence-to-policy translation.
- **3.3 Rationing** owns priority-setting mechanisms, waiting lists, explicit vs implicit rationing, opportunity cost at system level, disinvestment.
- **3.4 Equity** owns equity concepts (horizontal/vertical), measurement (concentration curves), health inequalities, equity–efficiency trade-offs.
- **3.5 Capabilities** owns Sen's capability approach, ICECAP measures, extra-welfarism vs welfarism, wellbeing measurement beyond QALYs.
- **4.2 Global Health and Trade** owns global health financing, priority-setting in low- and middle-income countries, trade and health (TRIPS, medical tourism, workforce migration), pandemics as global externalities.
- **4.1 Behavioural Economics** owns bounded rationality, present bias, defaults and nudges, incentive design for health behaviour, and behavioural critiques of standard models.
- **5.1 Innovation Health Economics** owns R&D economics, incentives for innovation (patents, prizes, advance market commitments), diffusion of technology, early HTA.
- **5.2 Digital Health Economics** owns evaluating digital health tools (apps, telehealth, remote monitoring), evidence standards for digital health (e.g. NICE's Evidence Standards Framework, WHO digital health guidance), and digital exclusion economics; data as an asset belongs to 5.6 Health Data Economics (cross-reference).
- **5.3 AI Health Economics** owns economic evaluation of AI-enabled care, automation and the health workforce, algorithmic bias as an equity cost, and paying for continuously-learning technologies.
- **1.4 Supply of Healthcare** owns the production of health services (production functions, inputs, economies of scale and scope), provider cost structures, hospital and provider objectives and behaviour (public, non-profit, for-profit), and provider market structure and competition. The labour input specifically belongs to 3.6 Health Workforce; supplier-induced demand and monopoly *as failures* belong to 1.3 Market Failure; payment mechanisms belong to 3.1. It is the supply-side counterpart to 1.2 Demand.
- **2.5 Budget Impact and Affordability** owns budget impact analysis, the affordability-versus-value distinction, the opportunity cost of adoption at scale, financial headroom, and phased/managed adoption. Cost-effectiveness, ICERs, and thresholds belong to 2.1 Economic Evaluation (assume and cross-reference); managed entry agreements belong to 2.4; disinvestment to release headroom belongs to 3.3 Rationing.
- **3.6 Health Workforce and Labour Markets** owns medical and nursing labour markets, monopsony and wage-setting, licensure and entry restrictions, skill mix and task-shifting, the economics of training and the workforce pipeline, and retention and burnout. International health-worker migration belongs to 4.2 Global Health and Trade (cross-reference); general provision/production belongs to 1.4 Supply of Healthcare.
- **3.7 Insurance and Risk Protection** owns the *design* of health insurance and coverage: benefit-package design, cost-sharing structure (co-payments, deductibles, coinsurance, caps), managed care, community versus experience rating, and risk adjustment as a design tool. The *failures* of insurance (adverse selection, moral hazard) belong to 1.3 Market Failure (assume and cross-reference, do not re-derive); financing typologies (Beveridge, Bismarck) belong to 3.1 Health Systems; universal coverage and financial protection as equity goals belong to 3.4 Equity and 3.6.
- **3.8 Long-Term and Social Care Economics** owns the economics of ageing and dependency, long-term-care financing models (social LTC insurance, means-testing, private LTC insurance and its market failure), the valuation of informal/unpaid care, the health–social-care boundary and cost-shifting, and integration. General equity belongs to 3.4; capability/wellbeing measures for older people belong to 3.5 (cross-reference ICECAP-O); mental health belongs to 3.10.
- **3.9 Mental Health Economics** owns the distinctive economics of mental illness: why standard outcome measures fit poorly, human-capital and productivity effects (absenteeism, presenteeism), parity of esteem in funding, the treatment gap, and the economics of prevention and early intervention. Capability and wellbeing measurement belongs to 3.5 (cross-reference); general evaluation to 2.1; behavioural mechanisms to 4.1.
- **4.3 Climate and Planetary Health Economics** owns the environmental externalities of health systems (the carbon footprint of care), the health co-benefits of climate action, valuing health within climate policy (where the social cost of carbon meets health), the cost-effectiveness of low-carbon/sustainable care, and climate change as a driver of future health costs. General externality theory belongs to 1.3 (cross-reference); global and pandemic externalities to 4.2; evaluation methods to 2.1.
- **1.5 Determinants of Health** owns what *produces* health beyond healthcare (Williams' "box A"): the socioeconomic gradient in health, the social, commercial, and environmental determinants as *causes*, the limited marginal contribution of medical care to population health, "health in all policies", and the causation-versus-correlation challenge in determinants evidence. The *distribution* of health and the measurement of inequity belong to 3.4 Equity (cross-reference — determinants are the causes, equity is the fairness of the result); the demand-side production of health by individuals (Grossman) belongs to 1.2; behavioural mechanisms to 4.1; environmental/climate determinants to 4.5.
- **2.6 Evidence Synthesis and Meta-Analysis** owns how a body of studies is pooled into the evidence that feeds evaluation and health technology assessment: systematic review, meta-analysis, network (indirect-comparison) meta-analysis, evidence hierarchies and GRADE, heterogeneity, publication bias, and living evidence. Single-study causal inference belongs to 2.3 Health Econometrics (cross-reference); the decision model that consumes the synthesized inputs belongs to 2.2 Modelling; the evaluation itself to 2.1. This is the "where the numbers in the model come from" chapter.
- **3.10 Strategic Purchasing and Commissioning** owns the active discipline of *buying* care to get value: strategic purchasing, the commissioning cycle (assess, plan, procure, monitor), selective and value-based contracting, provider selection, make-or-buy, and outcome-based contracts. The payment *mechanisms* (capitation, fee-for-service, diagnosis-related groups) as system design belong to 3.1 Health Systems (cross-reference); insurance benefit design to 3.7; priority-setting and disinvestment to 3.3. This is "how a payer purchases"; 3.1 is "how the system is structured".
- **3.11 Quality and Safety Economics** owns the economics of quality and patient safety: the cost of poor quality and of harm (adverse events, healthcare-associated infection), the business case for safety, pay-for-performance for quality and its unintended effects, value-based purchasing for quality, and the measurement of quality. Payment mechanisms in general belong to 3.1 (cross-reference); outcome measurement to 2.1; AI-specific safety to 4.4.
- **3.12 Pandemic and Emergency Preparedness Economics** owns the economics of preparing for rare, catastrophic events: low-probability/high-consequence appraisal and tail risk, the option value of preparedness (stockpiles, surge capacity, standing vaccine platforms), why markets and annual budgets systematically under-provide preparedness, and the value of preventing catastrophe. Pandemics as global externalities and public goods belong to 4.2 Global Health and Trade (cross-reference); climate resilience to 4.3; antimicrobial resistance to 1.3 and 4.2.
- **5.4 Software Engineering Health Economics** owns the engineering economics of the software that health systems build, buy, and run: total cost of ownership over a system's life, technical debt as an economic liability, build-versus-buy and vendor lock-in, legacy systems and the economics of modernization and migration, interoperability and standards (e.g. HL7 FHIR) as network economics, open-source versus proprietary trade-offs, and the reliability engineering that clinical safety demands. Evaluating digital tools as *health interventions* belongs to 5.2 Digital Health Economics (cross-reference); AI-specific evaluation to 5.3; procurement discipline to 3.10 Strategic Purchasing and Commissioning; the cost of harm to 3.11 Quality and Safety Economics.
- **4.4 Social Media and Health Communication Economics** owns the economics of reaching and persuading the public: appraisal of health-communication campaigns and outreach (social marketing, return on a prevented harm), social media as a channel and a market (the attention economy, algorithmic amplification, influencer and platform economics), misinformation and infodemics as negative externalities, and public trust as an economic asset. The behavioural mechanisms of persuasion belong to 4.1 Behavioural Economics (cross-reference); digital tool evaluation to 5.2 Digital Health Economics; policy and regulatory levers to 3.2 Health Policy; commercial determinants of health to 1.5 Determinants of Health; emergency context to 3.12 Pandemic and Emergency Preparedness Economics.
- **5.5 Robotics Health Economics** owns the economics of physical automation in health and care: surgical robotics (high fixed cost, learning curves, throughput and utilization economics), rehabilitation and assistive robots, care robots in ageing societies, and the automation of hospital logistics, pharmacy, and laboratories. The capital-appraisal machinery belongs to 2.1 Economic Evaluation and 2.5 Budget Impact and Affordability (cross-reference); production and capital economics to 1.4 Supply of Healthcare; workforce substitution and labour markets to 3.6 Health Workforce and Labour Markets; the software and AI inside robots to 5.4 and 5.3; long-term-care context to 3.8 Long-Term and Social Care Economics.
- **5.6 Health Data Economics** owns the economics of health data as an asset: its peculiar cost structure (non-rival, curation-heavy, combinatorial value), data architecture as economic strategy (warehouse, data lake, data mesh and funded domain ownership), the economics of data access (friction as a cost, trusted research environments, single-front-door permit models), data quality at source, privacy techniques (de-identification, differential privacy, federated learning) as trade-offs, and the social licence for secondary and commercial use. Interoperability plumbing belongs to 5.4 Software Engineering Health Economics (cross-reference); models trained on the data to 5.3 AI Health Economics; what bad data does to causal claims to 2.3 Health Econometrics; public-trust communication to 4.4 Social Media and Health Communication Economics.

**Front matter:** Preface — `00-preface.md`
**Reference:** Glossary — `GLOSSARY.md` · Index — `INDEX.md`

## 5. Voice, style & formatting rules

- **Voice:** authoritative, practical, calm. No hype. Name trade-offs honestly; evidence over assertion.
- **Person:** second person ("you", "your organization") for guidance; third person when describing practice.
- **Acronyms:** expand every acronym on first use **in each chapter**.
- **Spelling:** **Oxford spelling** as the house style — British spelling with `-ize`/`-ization` endings for Greek-derived verbs (organize, prioritize, standardize, realize), while keeping British forms elsewhere (behaviour, centre, licence, programme, modelling, judgement, ageing, and **analyse**/paralyse with `-yse`). This matches World Health Organization and UN-system usage; it is a style choice, not a scope statement. The full contract is in **[`spec/oxford-spelling.md`](oxford-spelling.md)**. Exception: keep "program" only for a software program; use "programme" for the delivery construct. Never change the spelling of a proper name, citation, or the text inside a URL. Be consistent within a chapter.
- **Paragraphs:** 2–4 sentences. Markdown only. Use tables for comparisons and maturity models.
- **Length:** target **~3,000–3,500 words of substantive prose per chapter** (most run ~3,000–4,000 words including tables and references). Deepen rather than pad; never invent filler. No chapter should fall below ~3,000 words.
- **Cross-references:** reference sibling chapters by number and title — e.g. "(see Chapter 8.1 — Change Management)". Always include the title, not just the number, so references survive renumbering.

---

## 6. Grounding & citation rules (non-negotiable)

- **Real, checkable sources only.** Never invent citations, URLs, statistics, or quotations. If unsure of a figure, describe the pattern qualitatively.
- **Wikipedia linking:** on first mention of a key named concept/framework/method, hyperlink it to its canonical English Wikipedia article, e.g. `[Cost of delay](https://en.wikipedia.org/wiki/Cost_of_delay)`. **Verify each article exists** before linking; never invent a slug. Aim for **5–12** Wikipedia links per chapter. Every inline Wikipedia link must also appear in `## References`.
- **Favoured bodies of knowledge** (use where they fit): https://en.wikipedia.org/wiki/Health_economics, https://economicsnetwork.ac.uk/health/teachers (and its per-topic sub-pages), WHO health financing and health systems publications, World Bank and OECD health resources (e.g. *Health at a Glance*), ISPOR good-practice guidance, and national HTA/guidance bodies as exemplars of practice worldwide — e.g. NICE methods guidance (https://www.nice.org.uk/process/pmg36), https://www.gov.uk/guidance/health-economics-a-guide-for-public-health-teams, IQWiG, CADTH/CDA, PBAC, ICER (US). Summaries gathered in `_sources/` are the starting point.

---

## 7. Cross-artifact consistency rules

When a chapter is added, renamed, renumbered, or its concepts change, update **all** of these in the same change so the book stays coherent:

1. `README.md` table of contents (number, title, filename, part).
2. This manifest (§4) if structure changed.
3. `GLOSSARY.md` — every newly-introduced key term gets an entry pointing to its home chapter.
4. `INDEX.md` — every key concept maps to the chapter numbers that cover it.
5. Inbound/outbound cross-references in sibling chapters.

---

## 8. Definition of done (per chapter)

A chapter is complete when all are true:

- [ ] Filename and `# Chapter N — Title` match the manifest (§4) exactly.
- [ ] All 13 template sections (§3) present, correctly ordered and named.
- [ ] Opens with a single **bold** one-sentence thesis.
- [ ] `## Best practices` is numbered with bold lead-ins.
- [ ] Exactly **six** open discussion questions, each with a 4–8 sentence briefing, placed before the worked example.
- [ ] Four sector lenses in order: Startup, Small business, Enterprise, Government.
- [ ] Maturity model is a 5-level table (Initiate / Develop / Standardize / Manage / Orchestrate).
- [ ] Checklist has 6–12 `- [ ]` items.
- [ ] 5–12 verified Wikipedia links; every inline link also in `## References`.
- [ ] Every citation is real and checkable; no invented facts, URLs, or numbers.
- [ ] Oxford spelling (see `spec/oxford-spelling.md`); acronyms expanded on first use; ~2,500–3,500 words.
- [ ] `README.md`, `GLOSSARY.md`, and `INDEX.md` updated for any new terms/structure (§7).

---

## 9. How to author or regenerate a chapter

A chapter can be written from scratch, regenerated, or deepened by a human or an agent using only this spec plus the chapter's manifest entry. The workflow:

1. **Fix the scope.** Read the manifest (§4) entry — number, title, filename, part — and the neighbouring chapters so you know where the boundaries lie and what to cross-reference rather than repeat. A chapter earns its place by covering what no other chapter owns; if it overlaps a sibling, narrow it or deepen the sibling instead (§13).
2. **Research and verify sources first.** Gather real, current sources and **verify every Wikipedia article exists** before you link it (a quick check per slug). Never link a guessed slug; if no good article exists, name the concept in plain text and cite an authoritative source in `## References` instead.
3. **Draft to the template.** Follow §3 exactly — all thirteen sections, in order, with the correct headings. Open with the bold one-sentence thesis; make `## Best practices` the substantive heart; write exactly three workshop-ready questions before the worked example; give the three sector lenses in the fixed order.
4. **Hit the length by depth.** Reach the §5 length target by adding real substance — more best practices, richer core concepts, a fuller worked example — never filler. If a chapter is short, add practices and concepts a practitioner would actually use.
5. **Self-check against the definition of done (§8)** and update the reference matter (§7) for any new terms or structure.

**Authoring at scale.** When many chapters are created or renumbered at once, one writer per chapter — each editing a *distinct* file — is safe and fast; never let two writers touch the same file concurrently. Give every writer the full final manifest so cross-references resolve to the right numbers, and **complete any renumbering before writing new chapters** so numbers are final when authors cite them. Transient failures happen: check what actually reached disk and re-run only what is genuinely missing, rather than blindly repeating work.

## 10. Review & quality gates

Before a chapter or a change is considered complete, it passes four gates. Automate them wherever possible; a failure in any gate blocks "done".

- **Structural gate.** Thirteen sections present and correctly named; a bold one-sentence thesis; numbered best practices with bold lead-ins; exactly six discussion questions before the example; four sector lenses in the order Startup, Small business, Enterprise, Government; a five-column maturity table (Initiate / Develop / Standardize / Manage / Orchestrate); a checklist of 6–12 `- [ ]` items.
- **Link gate.** Every inline Wikipedia link resolves to a real article and also appears in `## References`; no invented or guessed slugs; 5–12 links per chapter.
- **Source gate.** No invented citations, URLs, statistics, or quotations. Figures are either real and checkable or described qualitatively.
- **Consistency gate.** The `# Chapter N — Title` heading matches the filename and the manifest; every `Chapter N — Title` cross-reference names the chapter that actually holds that number; Oxford spelling (see `spec/oxford-spelling.md`); acronyms expanded on first use.

## 11. Structural change & renumbering procedure

Adding, removing, splitting, merging, or reordering chapters is the highest-risk change in the book, because chapter numbers appear in filenames, headings, cross-references, the index, and the glossary. Follow this order every time:

1. **Decide the final manifest first** — the complete target list of numbers, titles, and filenames — before touching any file.
2. **Back up.** Untracked files are not protected by git; copy the directory somewhere safe before renumbering.
3. **Remap in one pass.** Rewrite in-prose chapter references by mapping each chapter label through a single lookup applied once, so a shorter label can never partially match a longer one. Rename files two-phase (to a temporary name, then to the final name) to avoid collisions when numbers shift.
4. **Remap the reference matter.** Update the chapter-number lists in `INDEX.md` and the "See Chapter N" pointers in `GLOSSARY.md` through the same map.
5. **Rebuild** `README.md` and this manifest (§4) to match, then re-run the consistency gate (§10). Fix any reference whose title no longer matches its number, including pre-existing ones the renumber exposes.

## 12. Reference-matter conventions

- **`GLOSSARY.md`** — one **bold term**, a plain-English definition, an optional *verified* Wikipedia link, and a "See Chapter N" pointer to the term's home chapter. Entries are alphabetical within `## A … ## Z` letter sections. When a term gains a dedicated home chapter, repoint it there.
- **`INDEX.md`** — entries of the form `**Concept** — n, m, …` where the numbers are **chapter numbers, not pages**, listed ascending and de-duplicated. Include the concept's home chapter plus every chapter that materially covers it. Keep both files in step with the manifest in the same change (§7).

## 13. Book-level anti-patterns to avoid

- **Inventing sources or figures** to hit a target or sound authoritative — describe the pattern qualitatively instead.
- **Drifting from the template** "because this topic is different" — the template is the contract that makes the book navigable and self-assessable.
- **Number-only cross-references** that rot the moment chapters are renumbered — always carry the title.
- **Silent overlap** — a new chapter that largely repeats an existing one. Prefer deepening the existing chapter (adding best practices or a subsection) over adding a thin new chapter.
- **Half-renumbering** — changing numbers without updating `README.md`, `GLOSSARY.md`, and `INDEX.md` in the same change, leaving the book internally inconsistent.

## 14. Versioning & change control

Treat structural changes — chapters added, removed, split, merged, renumbered, or reorganized into new parts — as versioned events. Make each such change as a single, self-contained commit that updates **every** artifact in §7 together, so the repository is never left half-renumbered between commits. Where the repository and this manifest disagree, the manifest expresses the intended structure and the repository must be corrected to match it, not the other way around. Keep this spec current in the same change: it is only a source of truth if it describes the book as it actually is.


## 15. Non-goals & scope boundaries

To keep the book coherent, some things are deliberately out of scope:

- **Not a clinical guideline or a product manual.** The book describes *how to think and decide economically* — frameworks, evaluation methods, and priority-setting disciplines — not clinical protocols, condition-specific pathways, or step-by-step instructions for a particular product or platform.
- **Not an econometrics or statistics textbook.** Chapter 2.3 — Health Econometrics explains what the methods are for, when to trust them, and how to commission them; readers should turn to dedicated texts for mathematical derivations and software instruction.
- **Not vendor or tool documentation.** Name frameworks and standards, but do not become a how-to for a specific commercial product; those date quickly and belong elsewhere.
- **Not a legal or regulatory authority.** The book explains the terrain (see Chapter 3.2 — Health Policy) and points to primary sources, but readers must consult current statute, regulator guidance, and their own governance for binding decisions.
- **Worldwide, not encyclopaedic.** The book covers health systems globally and draws examples from many jurisdictions, but it does not attempt to document every country's system, statute, or reimbursement pathway; named systems are exemplars of patterns, and readers map the principles onto their own jurisdiction (Chapter 3.1 — Health Systems and Chapter 4.2 — Global Health and Trade carry the comparative load).

When a proposed addition falls into a non-goal, prefer a short signpost and an authoritative external reference over new chapters, so the book stays focused on ways of working.

