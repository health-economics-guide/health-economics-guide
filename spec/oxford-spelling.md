# Oxford spelling — the house standard

This book is written in **Oxford spelling**. This document defines it for authors, reviewers, and tools. It is the spelling contract referenced by the specification (`spec/index.md` §5) and the style guide (`STYLE_GUIDE.md` §3).

## What Oxford spelling is

Oxford spelling (also called *Oxford English* or, in language tags, `en-GB-oxendict`) is **British English spelling with `-ize` endings**. It follows standard British conventions in almost every respect, but for the family of verbs derived from the Ancient Greek suffix *-ίζω* (*-izo*) — and their noun forms in *-ization* — it uses **‑z‑** rather than the ‑s‑ that is also common in Britain. It is the style of the Oxford University Press (the *Concise Oxford English Dictionary* is the reference), of academic journals such as *Nature*, and — most relevant to this book — of the United Nations system and its agencies, including the **World Health Organization**, the International Labour Organization, the World Trade Organization, UNESCO, the IAEA, and the International Organization for Standardization (ISO). It is therefore the natural register for a worldwide health-economics handbook.

## The one rule that differs from ordinary British spelling

**Words built on the Greek *-ize* suffix take ‑ize / ‑ization / ‑izer, not ‑ise / ‑isation / ‑iser.**

| Use (Oxford) | Not |
|---|---|
| organize, organization | organise, organisation |
| prioritize, prioritization | prioritise, prioritisation |
| standardize, standardization | standardise, standardisation |
| realize, recognize, maximize, minimize, utilize | realise, recognise, maximise, minimise, utilise |
| randomize, randomization | randomise, randomisation |
| optimize, subsidize, monetize, incentivize | optimise, subsidise, monetise, incentivise |
| capitalize, characterize, marginalize, hospitalize | capitalise, characterise, marginalise, hospitalise |
| decarbonize, globalize, privatize, equalize | decarbonise, globalise, privatise, equalise |

This is the **only** systematic difference from the British spelling the rest of the book uses.

## The critical exception — keep ‑yse

Verbs ending in **‑lyse** are **not** from the Greek *-izo* suffix (they come from Greek *lysis*, "loosening"), so Oxford spelling keeps the British **‑yse**, never the American ‑yze:

- **analyse, analysed, analysing, analysis** (not analyze)
- **paralyse, catalyse, dialyse, electrolyse**

## What Oxford spelling KEEPS from British spelling (do not Americanize)

Everything else stays British. In particular:

| Category | Oxford (British) | Not (American) |
|---|---|---|
| **‑our** | colour, behaviour, favour, labour, honour, rigour, tumour | color, behavior, labor, honor |
| **‑re** | centre, theatre, metre, litre, fibre, calibre | center, theater, meter, fiber |
| **‑ce noun / ‑se verb** | licence (n.) / license (v.); practice (n.) / practise (v.); defence, offence | license, practice, defense, offense |
| **doubled ‑l‑** | modelling, modelled, labelling, travelling, counselling, cancelled, levelling | modeling, labeling, traveling, canceled |
| **ae / oe** | anaesthetic, paediatric, foetus, haemorrhage, oestrogen, orthopaedic | anesthetic, pediatric, fetus, hemorrhage |
| **‑gue** | catalogue, dialogue, analogue | catalog, dialog, analog |
| **other** | programme (except a computer *program*), judgement, ageing, grey, manoeuvre, enrol, enrolment, fulfil, instalment, skilful, sceptical, cheque | program, judgment, aging, gray, maneuver, enroll, fulfill |

## Boundaries and cautions

- **Never alter a proper name, formal title, journal-article title, or citation** to fit the house style. Organizations spell their own names; some UN-system bodies use ‑ize (WHO: *World Health Organization*) and some do not (the OECD is officially the *Organisation for Economic Co‑operation and Development*, with ‑s‑). Reproduce every cited work's title exactly as published, even where its spelling differs from Oxford. In practice this means the `## Key sources` and `## References` sections are left as authored.
- **Never change spelling inside a URL.** Wikipedia article slugs have their own spelling (e.g. `Deinstitutionalisation`, `Randomized_controlled_trial`); the link target must be preserved byte-for-byte even when the visible anchor text is spelled the Oxford way.
- The maturity-model column heading **Standardize** follows this rule (Greek ‑ize), as do any ‑ization nouns in the tables and prose.
- "‑ise" words that are **not** from the Greek suffix keep ‑ise in Oxford spelling too: *advertise, comprise, compromise, exercise, improvise, revise, supervise, advise, devise, surprise, disguise, franchise, merchandise, enterprise, arise, promise, premise, otherwise*. Do not "correct" these to ‑ize.

## For reviewers and tooling

The consistency gate scans for ‑ise/‑isation forms of the Greek *-ize* verbs (which should be ‑ize) while **leaving** ‑yse (analyse), ‑our, ‑re, doubled‑l, ae/oe, and the citation sections untouched. A safe automated pass converts a fixed list of known Greek *-ize* stems only, protects URLs and the `## Key sources`/`## References` sections, and never touches proper names such as the OECD.
