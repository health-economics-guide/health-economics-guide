Here are **prioritized, actionable quality improvement tasks** for the Health Economics Guide, organized by your two categories. Each task is framed for AI/external contributors to execute with clear acceptance criteria.

---

---

# **🎯 PART A: New Visitors, Promotion & Upskilling**

## **1. Onboarding & Discoverability**

| Priority | Task | Description | Acceptance Criteria |
|----------|------|-------------|---------------------|
| **HIGH** | Create `GOVERNANCE.md` | Document project governance: decision-making process, maintainer roles, how contributions are reviewed/merged, escalation paths | File exists, linked from README, covers: maintainer list, review process, DCO/CLA requirements (if any), release cadence |
| **HIGH** | Create `ROADMAP.md` | Public roadmap showing planned features, milestones, and release timeline | File exists, linked from README, includes: 6-month vision, quarterly goals, "how to influence the roadmap" section |
| **HIGH** | Create `GOOD_FIRST_ISSUE.md` or GitHub label template | Curated list of beginner-friendly tasks with estimated effort (15 min, 1 hour, 1 day) | File or label exists, 10+ issues tagged, includes: clear instructions, expected outcomes, where to ask for help |
| **MEDIUM** | Add "How to Read This Book" guide | Create a reader orientation document explaining the book's structure, how topics relate, suggested reading paths by role | File in `docs/` or `locales/en-gb-oxendict/`, linked from README, covers: executive path, analyst path, policy maker path |
| **MEDIUM** | Add interactive onboarding to GitHub repo | Create a GitHub Issue Template for "New Contributor Checklist" | `.github/ISSUE_TEMPLATE/new-contributor.md` exists, includes: setup instructions, first task suggestions, code of conduct acknowledgment |
| **MEDIUM** | Create `ADOPTERS.md` | List organizations, universities, or individuals publicly using/adopting the guide | File exists, includes: adoption stories (2-3 sentences each), logos if permitted, how to add yourself |
| **LOW** | Add "Testimonials" section to README | Collect and display quotes from users in healthcare, academia, or policy | README has testimonials section, 3+ real quotes with attribution, links to source if available |

---

## **2. Promotion & Community Growth**

| Priority | Task | Description | Acceptance Criteria |
|----------|------|-------------|---------------------|
| **HIGH** | Create social media promotion kit | Design shareable graphics, tweet/stub threads, LinkedIn post templates for contributors to promote the project | `promotion/` directory with: 3-5 graphic templates (SVG/Canva), 5 tweet threads, LinkedIn template, hashtag suggestions |
| **HIGH** | Set up GitHub Discussions categories | Create structured discussion categories for Q&A, ideas, showcases | `.github/COMMUNITY.md` or Discussions configured with: Q&A, Ideas, Show and Tell, General |
| **HIGH** | Create a "News" or "Changelog" feed | Regular updates on new topics, improvements, community events | `NEWS.md` or GitHub Releases, updated monthly, includes: version, date, key changes, contributor shoutouts |
| **MEDIUM** | Add link to GitHub Pages from repo README | Ensure the live site is prominently linked | README.md has clear "Read the Book" button/link at top, points to `https://health-economics-guide.github.io/` |
| **MEDIUM** | Create a "Contributor Spotlight" series | Monthly blog posts or README section highlighting top contributors | `CONTRIBUTORS.md` or blog post series, 1+ spotlight published, includes: photo (optional), bio, contributions, social links |
| **MEDIUM** | Set up automatic social media cross-posting | Use GitHub Actions to post releases to Twitter/LinkedIn/Mastodon | `.github/workflows/social-post.yml` exists, posts to at least one platform on new releases |
| **MEDIUM** | Create a "Press Kit" | Assets for journalists, bloggers, or conference organizers | `press/` directory with: project summary (1-pager), high-res logo, founder bio, press contact, FAQ |
| **LOW** | Set up a community calendar | Track office hours, AMAs, sprints, and events | `CALENDAR.md` or Google Calendar link, includes: recurring events, how to add events, timezone info |
| **LOW** | Create a "Related Projects" page | List complementary resources, tools, or initiatives | `RELATED.md` exists, 10+ projects listed with descriptions and links |

---

## **3. Upskilling & Education**

| Priority | Task | Description | Acceptance Criteria |
|----------|------|-------------|---------------------|
| **HIGH** | Create learning pathways | Curated sequences of topics for different roles/learning goals | `learning-paths/` directory with: 5+ pathways (e.g., "Health Policy Analyst", "Digital Health Leader", "Clinical Economist"), each with: duration estimate, prerequisite knowledge, learning outcomes |
| **HIGH** | Add workshop facilitation guides | Templates for running workshops based on book content | `workshops/` directory with: 3+ workshop templates, each includes: objectives, agenda, required materials, facilitator notes, slide deck (optional) |
| **MEDIUM** | Create a "Teaching with Health Economics Guide" guide | Resources for educators using the book in courses | `TEACHING.md` exists, includes: syllabus suggestions, assignment ideas, assessment rubrics, mapping to common health economics curricula |
| **MEDIUM** | Add video tutorial scripts | Scripts for creating video walkthroughs of key topics | `videos/` directory with: 5+ scripts, each includes: title, target audience, learning objectives, script, suggested visuals, estimated length |
| **MEDIUM** | Create a glossary pronunciation guide | Audio clips or phonetic spellings for key terms | `GLOSSARY.md` enhanced with: IPA transcriptions for 50+ terms, or audio clips in `audio/` directory |
| **MEDIUM** | Add case study templates | Templates for contributors to submit real-world case studies | `templates/case-study.md` exists, includes: structure, required sections, submission guidelines |
| **LOW** | Create a "Deep Dive" series | Extended explorations of complex topics beyond the book's scope | `deep-dives/` directory with: 3+ deep dives, each 2,000+ words, includes: advanced concepts, case studies, references |
| **LOW** | Add interactive quizzes | Self-assessment quizzes for each part | `quizzes/` directory with: 5+ quizzes (one per part), each with: 10 questions, answer key, explanations |
| **LOW** | Create a certification path | Badges or certificates for completing learning pathways | `certification/` directory with: requirements document, badge designs, verification process |

---

---

# **🔧 PART B: Engineering, Coding, Testing & Auditing**

## **1. Repository Infrastructure**

| Priority | Task | Description | Acceptance Criteria |
|----------|------|-------------|---------------------|
| **HIGH** | Migrate `bin/test` to a proper test framework | Replace shell script with a maintainable test suite (e.g., Python/pytest, Node.js/Jest) | `tests/` directory with: structural tests, link tests, consistency tests, all passing, documentation on how to run |
| **HIGH** | Set up CI/CD pipeline | Automate testing, building, and deployment | `.github/workflows/ci.yml` exists, runs on PR and push, includes: linting, tests, build, deployment to GitHub Pages |
| **HIGH** | Add pre-commit hooks | Automate code quality checks before commits | `.pre-commit-config.yaml` exists, includes: markdown linting, spell checking (Oxford spelling), file naming conventions |
| **HIGH** | Create a `Makefile` or `justfile` | Simplify common development tasks | File exists, includes commands for: test, build, serve, lint, clean |
| **MEDIUM** | Add dependency management | Track and version dependencies for the website | `health-economics-guide.github.io/package.json` updated, `pnpm-lock.yaml` committed, dependencies pinned |
| **MEDIUM** | Set up automatic documentation generation | Generate API docs or site maps automatically | Script in `scripts/` directory, runs as part of CI, outputs to `docs/` or site |
| **MEDIUM** | Add a `DEVELOPMENT.md` guide | Document how to set up, develop, and test locally | File exists, covers: prerequisites, setup instructions, running tests, debugging, contributing workflow |
| **LOW** | Set up code coverage reporting | Track test coverage for the test suite | CI workflow includes coverage reporting, badge in README, minimum coverage threshold (e.g., 80%) |
| **LOW** | Add a `BREAKING_CHANGES.md` log | Track structural changes that affect contributors | File exists, includes: dates, descriptions, migration guides for each breaking change |

---

## **2. Testing & Quality Assurance**

| Priority | Task | Description | Acceptance Criteria |
|----------|------|-------------|---------------------|
| **HIGH** | Implement automated link checking | Verify all Wikipedia and external links in topics | Script in `scripts/check-links.js` or similar, runs in CI, fails on broken links, generates report |
| **HIGH** | Implement structural validation | Validate all topics against the 13-section template | Script in `scripts/validate-structure.js`, checks: section presence, order, counts (6 questions, 4 lenses, etc.), Oxford spelling |
| **HIGH** | Implement citation validation | Verify all citations and references are real and checkable | Script in `scripts/validate-citations.js`, checks: Wikipedia links resolve, external URLs return 200, no invented sources |
| **HIGH** | Implement consistency checking | Verify cross-references, glossary, and index are in sync | Script in `scripts/check-consistency.js`, checks: topic numbers match manifest, cross-references resolve, glossary pointers match topics, index entries are valid |
| **HIGH** | Add spell checking with Oxford dictionary | Custom dictionary for health economics terms | `.cspell.json` or similar, includes: Oxford spelling rules, health economics terms, proper nouns |
| **MEDIUM** | Implement word count validation | Ensure topics meet the 3,000–3,500 word target | Script in `scripts/check-word-count.js`, runs in CI, warns on outliers, fails on <2,500 words |
| **MEDIUM** | Add markdown linting | Enforce consistent markdown style | `.markdownlint.json` exists, includes: heading levels, line lengths, list formatting, link formatting |
| **MEDIUM** | Implement accessibility checking | Ensure markdown is accessible (alt text, etc.) | Script in `scripts/check-accessibility.js`, checks: images have alt text, tables have headers, links have descriptive text |
| **MEDIUM** | Add a test for locale completeness | Verify all locales have the same topic structure | Script in `scripts/check-locales.js`, checks: all locales have same topics, all topics have same sections, `.locale-peer-id` files match |
| **LOW** | Implement performance testing | Test site build time and size | Script in `scripts/test-performance.js`, measures: build time, bundle size, load time |
| **LOW** | Add visual regression testing | Detect unintended visual changes to the site | Script in `scripts/test-visual-regression.js`, uses tools like Puppeteer, runs in CI, stores baselines |

---

## **3. Automation & Tooling**

| Priority | Task | Description | Acceptance Criteria |
|----------|------|-------------|---------------------|
| **HIGH** | Create topic generation CLI | Tool to scaffold new topics from the template | Script in `scripts/new-topic.js`, accepts: topic number, title, filename, generates: topic file with template, updates manifest, updates README |
| **HIGH** | Create a topic validation CLI | Tool to validate a single topic against spec | Script in `scripts/validate-topic.js`, accepts: topic path, outputs: list of violations, exit code 0 if valid |
| **HIGH** | Create a bulk topic validation CLI | Tool to validate all topics | Script in `scripts/validate-all.js`, outputs: summary report, list of failing topics, exit code 0 if all valid |
| **MEDIUM** | Create a glossary/index regeneration CLI | Tool to regenerate reference matter from topics | Script in `scripts/regenerate-reference.js`, extracts terms from topics, updates `GLOSSARY.md` and `INDEX.md`, preserves manual edits |
| **MEDIUM** | Create a cross-reference updater | Tool to update cross-references after renumbering | Script in `scripts/update-cross-references.js`, accepts: old number, new number, new title, updates all topics, glossary, index |
| **MEDIUM** | Create a locale synchronization CLI | Tool to sync topics across locales | Script in `scripts/sync-locales.js`, copies changes from canonical locale to others, preserves translations |
| **MEDIUM** | Create a topic deepening assistant | Tool to help authors deepen existing topics | Script in `scripts/deepen-topic.js`, suggests: new best practices, failure modes, references based on scope notes |
| **MEDIUM** | Create a source verification CLI | Tool to verify sources in `_sources/research-notes.md` | Script in `scripts/verify-sources.js`, checks: Wikipedia articles exist, external URLs resolve, citations are verifiable |
| **LOW** | Create a release automation CLI | Tool to automate release preparation | Script in `scripts/prepare-release.js`, updates: version in README, changelog, release notes, git tag |
| **LOW** | Create a contribution stats CLI | Tool to generate contributor statistics | Script in `scripts/contributor-stats.js`, outputs: list of contributors, commits per contributor, files changed, etc. |

---

## **4. Code & Content Auditing**

| Priority | Task | Description | Acceptance Criteria |
|----------|------|-------------|---------------------|
| **HIGH** | Audit all Wikipedia links | Verify every Wikipedia link in all topics resolves | All 292+ Wikipedia links checked, broken links fixed or removed, report generated |
| **HIGH** | Audit all external links | Verify every external URL returns HTTP 200 | All external URLs checked, broken links fixed or removed, report generated |
| **HIGH** | Audit cross-references | Verify all "Topic N — Title" references resolve to real topics | All cross-references checked, broken references fixed, report generated |
| **HIGH** | Audit glossary and index | Verify all glossary pointers and index numbers are valid | All glossary entries checked, all index entries checked, broken references fixed, report generated |
| **MEDIUM** | Audit Oxford spelling | Verify all topics use Oxford spelling consistently | All topics checked, `-ise` → `-ize` conversions applied where needed, report generated |
| **MEDIUM** | Audit acronym expansions | Verify all acronyms are expanded on first use in each topic | All topics checked, missing expansions added, report generated |
| **MEDIUM** | Audit word counts | Verify all topics meet the 3,000–3,500 word target | All topics checked, short topics deepened, long topics trimmed, report generated |
| **MEDIUM** | Audit template compliance | Verify all topics follow the 13-section template exactly | All topics checked, non-compliant topics fixed, report generated |
| **MEDIUM** | Audit link gate compliance | Verify all topics have 5–12 Wikipedia links, each in References | All topics checked, non-compliant topics fixed, report generated |
| **LOW** | Audit consistency across locales | Verify all locales have the same topics and structure | All locales checked, missing topics added, extra topics removed, report generated |
| **LOW** | Audit accessibility | Verify markdown is accessible (alt text, etc.) | All topics checked, missing alt text added, accessibility issues fixed, report generated |

---

## **5. Security & Compliance**

| Priority | Task | Description | Acceptance Criteria |
|----------|------|-------------|---------------------|
| **HIGH** | Add a `SECURITY.md` | Document security policy and vulnerability reporting | File exists, includes: vulnerability reporting process, response SLA, scope, how to report, security.txt if applicable |
| **HIGH** | Set up Dependabot | Automatically update dependencies for the website | `.github/dependabot.yml` exists, configured for: npm, GitHub Actions, Docker (if applicable) |
| **HIGH** | Add a CODEOWNERS file | Define who reviews which parts of the codebase | `.github/CODEOWNERS` exists, covers: docs, locales, scripts, site, specifies owners for each |
| **MEDIUM** | Add a license scanner | Verify all dependencies use compatible licenses | Script in `scripts/scan-licenses.js`, runs in CI, fails on incompatible licenses, generates report |
| **MEDIUM** | Add a secret scanner | Detect accidentally committed secrets | Script in `scripts/scan-secrets.js` or use `gitleaks`, runs in CI, fails on secrets detected |
| **MEDIUM** | Set up branch protection | Protect main branch from direct pushes | Branch protection rules configured for `main`, requires: PR review, status checks pass, signed commits |
| **LOW** | Add a DCO (Developer Certificate of Origin) | Require contributors to certify their contributions | `.github/DCO.md` exists, `dco.yml` workflow configured, requires DCO sign-off for PRs |
| **LOW** | Add a CLA (Contributor License Agreement) | Require contributors to sign a CLA | CLA document exists, CLA assistant bot configured, requires CLA sign-off for PRs |
| **LOW** | Set up signed commits | Require commits to be GPG-signed | Repository settings configured, requires signed commits, documentation on how to sign commits |

---

## **6. Documentation & Maintainability**

| Priority | Task | Description | Acceptance Criteria |
|----------|------|-------------|---------------------|
| **HIGH** | Document the architecture | Explain how the project is structured and how components interact | `ARCHITECTURE.md` exists, includes: directory structure, data flow, component diagram, decision records |
| **HIGH** | Create an API documentation | Document the website's API (if applicable) or data structures | `API.md` or OpenAPI spec exists, covers: endpoints, request/response formats, examples |
| **MEDIUM** | Add JSDoc/TSDoc comments | Document the codebase with type annotations | All scripts in `scripts/` have JSDoc/TSDoc comments, type definitions where applicable |
| **MEDIUM** | Create a data dictionary | Document the structure of key data files | `DATA_DICTIONARY.md` exists, covers: `spec/index.md`, `GLOSSARY.md`, `INDEX.md`, topic files |
| **MEDIUM** | Add a "How to Contribute" video | Record a screencast walking through the contribution process | Video exists (hosted on YouTube or similar), linked from CONTRIBUTING.md, covers: setup, finding tasks, submitting PRs |
| **LOW** | Create a style guide for scripts | Document coding standards for scripts | `SCRIPT_STYLE_GUIDE.md` exists, covers: language (JavaScript/TypeScript), formatting, error handling, testing |
| **LOW** | Add a troubleshooting guide | Document common issues and their solutions | `TROUBLESHOOTING.md` exists, covers: setup issues, test failures, build errors, common mistakes |
| **LOW** | Create a decision log | Document key architectural decisions | `DECISIONS/` directory with: 5+ ADR (Architecture Decision Record) files, each includes: context, decision, consequences |

---

## **7. Performance & Scalability**

| Priority | Task | Description | Acceptance Criteria |
|----------|------|-------------|---------------------|
| **MEDIUM** | Optimize site build time | Reduce the time to build the GitHub Pages site | Build time < 5 minutes, measured in CI, optimizations documented |
| **MEDIUM** | Optimize site load time | Reduce the time to load the first page | Lighthouse score > 90 for performance, measured in CI, optimizations documented |
| **MEDIUM** | Add caching for external links | Cache responses from Wikipedia and external URLs | Caching mechanism implemented, reduces link checking time by >50%, cache invalidation strategy documented |
| **LOW** | Add incremental builds | Only rebuild changed topics | Incremental build implemented, reduces build time for small changes by >80%, measured in CI |
| **LOW** | Optimize image assets | Compress and optimize images in the site | All images compressed, total size reduced by >50%, no visible quality loss |
| **LOW** | Add a CDN for static assets | Serve static assets from a CDN | CDN configured, assets served from CDN, load time improved |

---

---

# **📊 Implementation Roadmap**

## **Phase 1: Foundation (Weeks 1-2)**
- [ ] **HIGH priority infrastructure**: `GOVERNANCE.md`, `ROADMAP.md`, CI/CD pipeline
- [ ] **HIGH priority testing**: Automated link checking, structural validation, citation validation
- [ ] **HIGH priority automation**: Topic generation CLI, topic validation CLI
- [ ] **HIGH priority auditing**: Audit all Wikipedia links, external links, cross-references

## **Phase 2: Community (Weeks 3-4)**
- [ ] **HIGH priority onboarding**: `GOOD_FIRST_ISSUE.md`, GitHub Issue Templates, learning pathways
- [ ] **HIGH priority promotion**: Social media kit, GitHub Discussions, Press Kit
- [ ] **MEDIUM priority upskilling**: Workshop facilitation guides, teaching guide
- [ ] **MEDIUM priority auditing**: Audit glossary/index, Oxford spelling, acronym expansions

## **Phase 3: Quality (Weeks 5-6)**
- [ ] **MEDIUM priority testing**: Consistency checking, word count validation, markdown linting
- [ ] **MEDIUM priority automation**: Bulk validation CLI, reference matter regeneration
- [ ] **MEDIUM priority auditing**: Audit word counts, template compliance, link gate compliance
- [ ] **MEDIUM priority documentation**: Architecture documentation, API documentation

## **Phase 4: Maturity (Weeks 7-8+)**
- [ ] **LOW priority tasks**: All remaining tasks from above
- [ ] **Ongoing**: Regular audits, test suite maintenance, community engagement

---

# **💡 Quick Wins (Can be done in <1 hour)**

1. **Add "Read the Book" button to README** - Link to GitHub Pages at the top
2. **Create `GOOD_FIRST_ISSUE.md`** - List 5-10 beginner tasks from tasks.md
3. **Set up Dependabot** - `.github/dependabot.yml` for website dependencies
4. **Add CODEOWNERS file** - Define who reviews what
5. **Create a simple link checker script** - Basic Node.js script to check Wikipedia links
6. **Add security policy** - Create `SECURITY.md` with vulnerability reporting
7. **Create a contribution template** - `.github/ISSUE_TEMPLATE/new-contributor.md`
8. **Add license badge to README** - Show which license is used
9. **Create a basic Makefile** - `make test`, `make build`, `make serve`
10. **Set up GitHub Discussions** - Enable and categorize discussions

---

# **🎯 Recommended Starting Point**

**Start with these 5 tasks to create immediate impact:**

1. **Add "Read the Book" link to README** - Improves discoverability
2. **Create `GOOD_FIRST_ISSUE.md`** - Lowers barrier to entry
3. **Set up basic CI with link checking** - Prevents broken links
4. **Create topic validation script** - Ensures quality
5. **Add CODEOWNERS and SECURITY.md** - Professionalizes the project

These tasks can be completed in **1-2 days** and will significantly improve the project's quality and contributor experience.
