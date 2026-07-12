# Style Guide

This is the prose and formatting contract every chapter follows. It is **subordinate to [`spec/index.md`](spec/index.md)** — where the two disagree, the spec wins. Its job is to make the spec's rules concrete with worked examples, so any author or agent produces chapters that read as one book.

Read this alongside the spec's §3 (template), §5 (voice/style), and §6 (citation rules) before drafting.

---

## 1. Voice

Authoritative, practical, calm. You are briefing a busy director who wants to **act**, not impressing an examiner. Three tests every paragraph should pass:

- **Evidence over assertion.** Prefer "trials of financial incentives for smoking cessation show modest, often short-lived effects" to "incentives don't really work."
- **Name the trade-off.** Health economics is the study of trade-offs; a paragraph that presents a practice with no cost, tension, or loser is probably hiding something. Say who pays and what is given up.
- **No hype.** Avoid "revolutionary", "game-changing", "cutting-edge", "seamless". If a claim needs an adjective to sound true, it needs a citation instead.

**Person.** Second person for guidance to the reader ("your organisation", "before you commission an evaluation, decide the perspective"). Third person when describing how practice works in the world ("commissioners weigh the incremental cost against the threshold"). Do not slip into first person ("I", "we") except in the preface.

---

## 2. The reader and the world

The book is **worldwide** (spec §1). Do not assume the reader works in any one country's system.

- When a claim is true only of a specific system, **name the system**: "In England, the National Institute for Health and Care Excellence (NICE) uses a cost-per-QALY threshold" — not "the threshold is £20,000–£30,000" stated as if universal.
- Draw exemplars from a range of settings across chapters — tax-funded (the United Kingdom's National Health Service), social insurance (Germany, France), private insurance (the United States), and low- and middle-income settings (India's Ayushman Bharat, WHO and World Bank programmes). Vary them; do not let every example be British or American.
- Currency: quote figures in their original currency and year, and say so ("US$2.6 billion (2013 estimate)"). Never silently convert or update.

---

## 3. Spelling, terms, and mechanics

- **UK spelling** is the house style (organis*e*, prioritis*e*, behaviour, programme, centre), consistent with World Health Organization usage. This is a style choice, not a statement of scope. Exception: "program" only for a software program; "programme" for a delivery construct or a health programme.
- **Acronyms:** expand on first use **in each chapter**, with the acronym in parentheses: "quality-adjusted life year (QALY)". After that, use the acronym. Re-expand in the next chapter — chapters are read standalone.
- **Numbers:** words for one to nine in prose, numerals for 10 and above and for all figures with units, percentages, and money (£20,000, 7%, 3.5 million). Use a non-breaking sense of "per cent" or "%" consistently within a chapter.
- **Em dashes** for parenthetical breaks — like this — with spaces. En dashes for ranges (5–12, 2003–2008).
- **Emphasis:** **bold** for lead-ins and defined terms; *italic* for titles of works and for light emphasis. Never underline; never ALL CAPS.

---

## 4. Formatting

- Markdown only. Paragraphs of **2–4 sentences**; break longer ones up.
- Use **tables** for comparisons, typologies, and the maturity model — not for prose that flows.
- One `#` H1 (the chapter title) per file. Sections are `##`; sub-sections (only the sector lenses) are `###`.
- Blank line between every block. No trailing whitespace. No hard line-wrapping inside paragraphs.
- Links inline: `[quality-adjusted life year](https://en.wikipedia.org/wiki/Quality-adjusted_life_year)`.

---

## 5. Citations and links (non-negotiable — spec §6)

- **Never invent** a citation, URL, statistic, or quotation. If you cannot verify a figure, describe the pattern qualitatively ("costs rise steeply with age" rather than a fabricated number).
- **Wikipedia links:** on first mention of a key named concept, link to its canonical English Wikipedia article. **Verify the article exists** before linking — never guess a slug. Aim for **5–12** links per chapter. Every inline Wikipedia link must also appear in `## References`.
- Prefer **durable** sources (seminal papers, standing guidance, textbooks) over news that dates. Date-stamp any time-sensitive claim, especially in Chapters 4.2–4.4.
- `## Key sources` names frameworks and bodies of knowledge (NICE methods guidance, the HM Treasury Green Book, WHO health financing publications, ISPOR good-practice reports). `## References` is the numbered list, each formatted *title — publisher/author — URL*.

---

## 6. The thirteen sections — what "good" looks like

Every chapter has exactly these sections, in this order (spec §3). Notes and mini-examples for each:

**1. `# Chapter N — Title`** — matches the manifest and filename exactly. Example: `# Chapter 2.1 — Economic Evaluation`.

**2. The one-sentence thesis** — the first body line, in **bold**, no heading. It states the chapter's single most important claim. Example: *"**Economic evaluation is the discipline of making the opportunity cost of a health decision visible, so that a yes to one thing is an honest no to another.**"*

**3. `## Why this matters in health economics`** — 2–4 short paragraphs on the stakes: public money, safety, equity, statutory duty, lives. Concrete, not abstract. Answer "why should a busy director read on?"

**4. `## Core concepts`** — the definitions and mental models the rest of the chapter assumes. First mention of each key named concept is Wikipedia-linked. This is where most links land. Define terms in plain language before using them.

**5. `## Best practices`** — the heart of the chapter. **Numbered** list, **8–12 items**. Each item: a **bold lead-in sentence**, then 2–4 sentences of substance. Practices are actionable — a reader should be able to do something differently. Example item:

> 3. **Fix the perspective before you count a single cost.** Whether you take a health-system, payer, or societal perspective decides which costs and benefits are in scope, and it can flip a conclusion. Agree it with decision-makers up front and state it prominently; a "cost-effective" result is meaningless until the reader knows from whose standpoint.

**6. `## Questions to discuss with your team`** — **exactly three**, numbered, each question in **bold** and open (not yes/no). Each is followed by a 4–8 sentence briefing that names the real tension, gives concrete angles, and says what an honest answer looks like. Workshop-ready. Placed **before** the worked example.

**7. `## In practice: a health economics example`** — one concrete, realistic, **fictional** worked scenario. Give it a named (fictional) setting that varies by chapter and rotates around the world. Walk through the decision and the economics; show the method doing work, including where it is uncomfortable.

**8. `## Three sector lenses`** — three `###` subsections in this fixed order: `### Startup`, `### Enterprise`, `### Government`. Each 3–6 sentences. Show how the same topic changes with scale, funding model, risk appetite, and accountability. "Startup" = a small/early venture (a digital health start-up, a pilot); "Enterprise" = a large provider or insurer/payer organisation; "Government" = a ministry, national payer, or regulator.

**9. `## Common failure modes`** — anti-patterns and how to avoid each. A bulleted or short-numbered list; name the failure, then the fix.

**10. `## Maturity model`** — a table with exactly four level columns — **Initial / Developing / Defined / Optimising** — and **3–5 rows** of observable characteristics. Cells describe what you would actually see at that level, not aspirations.

**11. `## Checklist`** — **6–12** actionable `- [ ]` items a reader can take away and use.

**12. `## Key sources`** — bulleted; real, verifiable, named frameworks and bodies of knowledge.

**13. `## References`** — a **numbered** list combining (a) the Wikipedia articles for concepts named in the chapter and (b) authoritative sources. Format each: *Title — publisher/author — URL*. Every inline Wikipedia link appears here.

---

## 7. Cross-references

Reference sibling chapters by **number and title**, always both: "(see Chapter 1.3 — Market Failure)". Never a bare number — numbers rot, titles survive renumbering. Cross-reference rather than repeat: if a concept is another chapter's to own (spec §4 scope notes), give it one sentence and point there.

---

## 8. Length

Target **~3,000–3,500 words of substantive prose** (spec §5). Reach it by **depth** — more real best practices, richer core concepts, a fuller worked example — never by padding, filler, or restating. If a chapter is thin, add practices and concepts a practitioner would actually use. No chapter below ~3,000 words.

---

## 9. Quick self-check before you hand over

- [ ] All 13 sections present, correctly named, in order.
- [ ] Bold one-sentence thesis as the first body line.
- [ ] Best practices numbered, 8–12, bold lead-ins.
- [ ] Exactly three discussion questions, each with a briefing, before the worked example.
- [ ] Sector lenses in order: Startup, Enterprise, Government.
- [ ] Maturity table: four columns (Initial/Developing/Defined/Optimising), 3–5 rows.
- [ ] Checklist: 6–12 `- [ ]` items.
- [ ] 5–12 verified Wikipedia links; every one also in `## References`.
- [ ] No invented sources, figures, or quotations.
- [ ] UK spelling; acronyms expanded on first use; ~3,000–3,500 words.
- [ ] Cross-references carry number and title.
