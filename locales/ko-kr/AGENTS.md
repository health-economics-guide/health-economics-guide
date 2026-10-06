# AGENTS.md — Korean locale (ko-kr)

Operating instructions for any agent that edits `locales/ko-kr/`. They add to the repository-root `AGENTS.md` and `spec/index.md`, which still govern; where they disagree, the spec wins.

## Layout

- Source of truth for prose: `locales/en-gb-oxendict/topics/<slug>/index.md`.
- Korean topics: `locales/ko-kr/주제/<NN-NN-korean-slug>/index.md`, 34 files (preface plus 33 topics).
- Each topic directory also holds `.locale-peer-id` (identical to the English topic's) and a `README.md` symlink to `index.md`. Never edit either by hand.
- The site flattens these into `health-economics-guide.github.io/src/content/locales/ko-kr/topics/<slug>.md` with `scripts/sync-content.sh`. Run it, then `pnpm check` and `pnpm build`, and commit the vendored output with the change.

## Hard rules

1. **Faithful, whole translation.** Translate every paragraph, list item, table cell and checklist item. Do not summarise, omit or add. Keep the same number of headings, numbered items, bullets and table rows, exactly three discussion questions, and the same checklist count as the English.
2. **Never invent sources.** Do not change any number, name, acronym or URL. `## Key sources` and `## References` stay verbatim English. Body Wikipedia links stay `en.wikipedia.org` unless a Korean article has been verified to exist and to be the right subject.
3. **H1 keeps digits before the em dash**: `# 주제 N.N — <Korean title>`. The preface is `# 머리말`. The site parses this.
4. **Cross-references carry number and title**, using the canonical titles below: "주제 2.1 — 경제성 평가", never a bare number. "This topic" is "이 주제". Never use 챕터 or 장.
5. **Register**: 합니다체, professional and plain, for senior health-sector readers.
6. **Acronyms**: expand on first use in each topic as the English does, for example 질보정생존연수(QALY). Keep standard abbreviations (QALY, DALY, ICER, NICE, WHO, OECD, HTA) in Latin letters.
7. **One writer per file.** Work serially. Do not fan out subagents unless the user asks.

## Roles

- [`AGENTS/translator.md`](AGENTS/translator.md) — translates one topic into Korean.
- [`AGENTS/reviewer.md`](AGENTS/reviewer.md) — checks Korean topics against the English and these rules.

## Fixed headings

| English | Korean |
|---|---|
| Why this matters in health economics | 보건경제학에서 이것이 중요한 이유 |
| Core concepts | 핵심 개념 |
| Best practices | 모범 사례 |
| Questions to discuss with your team | 팀과 논의할 질문 |
| In practice: a health economics example | 실무 사례: 보건경제학의 한 예 |
| Four sector lenses | 네 가지 부문별 관점 (### 스타트업, 소규모 사업체, 대기업, 정부, in that order) |
| Common failure modes | 흔한 실패 유형 |
| Maturity model | 성숙도 모델 (columns 시작 / 발전 / 표준화 / 관리 / 총괄) |
| Checklist | 체크리스트 |
| Key sources, References | unchanged |

Parts: 1 기초 · 2 평가와 근거 · 3 체계, 정책, 우선순위 · 4 세계적·사회적 이슈 · 5 디지털, 소프트웨어, 기술.

## Canonical topic titles

| No. | Korean | No. | Korean |
|---|---|---|---|
| 1.1 | 보건경제학 입문 | 3.7 | 보험과 위험 보호 |
| 1.2 | 건강과 의료에 대한 수요 | 3.8 | 장기요양과 사회적 돌봄 경제학 |
| 1.3 | 시장실패 | 3.9 | 정신건강 경제학 |
| 1.4 | 의료 공급 | 3.10 | 전략적 구매와 계약 |
| 1.5 | 건강 결정요인 | 3.11 | 의료의 질과 안전 경제학 |
| 2.1 | 경제성 평가 | 3.12 | 팬데믹과 비상 대비 경제학 |
| 2.2 | 모델링 | 4.1 | 행동경제학 |
| 2.3 | 보건계량경제학 | 4.2 | 세계 보건과 무역 |
| 2.4 | 약물경제학 | 4.3 | 기후와 지구 보건 경제학 |
| 2.5 | 예산영향과 감당가능성 | 4.4 | 소셜미디어와 보건 커뮤니케이션 경제학 |
| 2.6 | 근거 종합과 메타분석 | 5.1 | 혁신 보건경제학 |
| 3.1 | 보건의료체계 | 5.2 | 디지털 보건경제학 |
| 3.2 | 보건정책 | 5.3 | 인공지능 보건경제학 |
| 3.3 | 의료 배급 | 5.4 | 소프트웨어 공학 보건경제학 |
| 3.4 | 형평성 | 5.5 | 로봇공학 보건경제학 |
| 3.5 | 역량 | 5.6 | 보건 데이터 경제학 |
| 3.6 | 보건의료 인력과 노동시장 | Preface | 머리말 |

## Core terms

기회비용 · 비용효과분석 · 비용효용분석 · 비용편익분석 · 질보정생존연수(QALY) · 장애보정생존연수(DALY) · 점증적 비용효과비(ICER) · 임계값 · 할인 · 분석 관점 · 지불의사 · 예산영향 · 시장실패 · 외부효과 · 도덕적 해이 · 역선택 · 정보 비대칭 · 지불자 · 공급자 · 보편적 의료보장 · 본인부담금 · 보건의료기술평가(HTA) · 배급 · 형평성 · 건강 결정요인 · 사회적 결정요인 · 위험 풀 · 위험 보정 · 가치 기반 구매 · 메타분석 · 체계적 문헌고찰 · 마르코프 모형 · 이산사건 시뮬레이션 · 의사결정 나무 · 민감도 분석 · 성숙도 모델 · 부문별 관점.

## Checking a topic

Compare against the English source before committing:

- same count of `##` and `###` headings, numbered items, bullets, table rows, checklist items;
- same set of URLs and the same numbers;
- no leftover English paragraphs, and the file ends with a newline;
- `grep -rn "챕터\|읍니다" locales/ko-kr` returns nothing.

## Known gaps

- The Korean text has had structural checks only. A native-speaker review is still wanted.
- Blank lines between the "Common failure modes" bullets are omitted in some files. This is not a structural difference.
