# StudentHub project review

**Review date:** 7 November 2026  
**Reviewed revision:** `fd6c022`  
**Scope:** Repository content, handbook structure, shared site layout and styles, validation scripts, and GitHub Pages workflow.

This document contains recommendations only. No handbook content, website behavior, or publishing configuration was changed as part of this review.

## Summary

StudentHub now has a substantial 14-chapter handbook, separate chapter and section pages, a consolidated edition, accessible SVG diagrams, responsive book navigation, and automated source and rendered-site checks. Stable S/M/C practice identifiers and keyed answers address several issues identified by the earlier review in [PROJECT-REVIEW.md](./PROJECT-REVIEW.md).

The strongest remaining opportunities are to verify curriculum claims against authoritative sources, broaden instructional and accessibility quality assurance, reduce maintenance friction from duplicated content, and provide a more reproducible local preview workflow.

## Prioritized recommendations

### P0 — Establish authoritative and maintainable curriculum sourcing

**Evidence:** The [examination blueprint](./handbook/sections/examination-blueprint.md) says its unit figures and competency split were supplied for planning and have not been independently verified against current CBSE documents. Chapter pages appropriately repeat that the figures are unverified and that unit marks are not chapter predictions.

**Why it matters:** Students may still rely on the displayed figures when planning revision. The qualification is clear, but the figures' accuracy and applicability to the 2027 examination remain uncertain.

**Suggested improvement:**

1. Verify the current syllabus, assessment structure, and any published sample paper against accessible primary CBSE sources.
2. Record source title, URL, publication or academic year, date checked, and which claims each source supports.
3. If primary sources cannot be verified, consider omitting numeric planning figures rather than carrying them forward indefinitely.
4. Add a lightweight review date or owner for curriculum-dependent content.

**Acceptance:** Each curriculum-dependent claim is either supported by a current primary source with traceable details or explicitly withheld; the review date and applicable examination year are visible.

### P1 — Add independent mathematics and pedagogy review

**Evidence:** The [handbook check](./scripts/check-handbook.mjs) verifies structure, synchronization, practice identifiers, accessibility markers, and selected algebraic edge cases. It does not independently verify every worked solution, formula, diagram, difficulty label, or chapter's coverage of its objectives. The [practice sections](./handbook/chapters/01-real-numbers.md) are explicitly identified as original questions, but there is no documented teacher-review or answer-verification process.

**Why it matters:** Structural checks cannot determine whether a mathematical explanation is correct, pedagogically clear, or appropriately challenging. A wrong answer repeated in both chapter and consolidated copies could remain synchronized and still pass the current checks.

**Suggested improvement:**

1. Arrange a chapter-by-chapter review by a qualified mathematics educator, with a checklist for calculations, assumptions, units, notation, and answer-key correspondence.
2. Map each practice question to a stated learning objective and define how the S/M/C labels are assigned.
3. Track corrections and review dates in a simple issue log or contribution process.
4. Keep any future past-paper quotations or adaptations clearly distinguished from original questions and link to verifiable sources.

**Acceptance:** Every chapter and answer key has a documented independent review; questions map to objectives and difficulty criteria; corrections can be traced to a review record.

### P1 — Expand rendered and accessibility testing

**Evidence:** The [Pages workflow](./.github/workflows/pages.yml) runs handbook checks, builds the site, and runs rendered-output checks before deployment. Those rendered checks sample three pages for semantic tables and navigation/fallback markers, and verify practice labels across all chapters. The [layout](./_layouts/book.html) uses responsive disclosure navigation, focusable tables, and a MathJax error notice; the [stylesheet](./assets/css/site.css) includes focus and print styles. No automated browser, accessibility, or visual regression tests are present in the repository.

**Why it matters:** Passing source and HTML string checks does not prove that controls work at different viewport sizes, focus remains visible, MathJax fallback is usable, or pages are readable with assistive technology and print settings.

**Suggested improvement:**

1. Add a small browser-based smoke test for desktop/mobile navigation, previous/next links, table overflow, and math-loading failure behavior.
2. Run an accessibility checker against representative rendered pages and manually check keyboard navigation and a screen reader.
3. Test print layout and zoom/reflow at representative sizes; prioritize actual usability defects over adding tests for their own sake.
4. Extend rendered checks to confirm section anchors and expected key content on representative pages.

**Acceptance:** A repeatable test covers key user flows at desktop and mobile widths; accessibility findings are reviewed and resolved or documented; print and fallback behavior have been checked.

### P1 — Make the local build reproducible

**Evidence:** The [README](./README.md) documents installing Ruby gems with `gem install` and running `jekyll serve`, while CI uses GitHub's Jekyll Pages build action. The repository excludes `Gemfile` and `Gemfile.lock` from the generated site but does not contain a dependency manifest to pin the local Jekyll toolchain.

**Why it matters:** Contributors can get different local output from CI or from one another as Jekyll and plugin versions change. A successful local preview may therefore fail to reproduce the deployed Pages build.

**Suggested improvement:**

1. Document the supported Ruby/Jekyll versions and a deterministic dependency installation method.
2. Align local build commands with the GitHub Pages-compatible toolchain used by CI.
3. Document the rendered-site check as a post-build command and include expected output.
4. Keep the setup concise and verify it on a clean environment before recommending it.

**Acceptance:** A contributor can follow the repository instructions from a clean checkout and build locally with versions and steps consistent with CI.

### P2 — Reduce synchronization and navigation maintenance risk

**Evidence:** Chapter and formula content is maintained in individual Markdown files and copied into the [consolidated handbook](./CBSE_Class_10_Mathematics_Standard_2027_Handbook.md) by [sync-handbook.mjs](./scripts/sync-handbook.mjs). Navigation order is in [_data/book.yml](./_data/book.yml), while previous/next metadata is also stored on individual pages.

**Why it matters:** Synchronization checks reduce the chance of stale copies, but duplicated authored content and navigation metadata still create extra steps and potential inconsistency when adding, reordering, or renaming pages.

**Suggested improvement:**

1. Retain the current synchronization model unless it causes recurring maintenance problems; it preserves editable standalone Markdown.
2. If simplifying is worthwhile, generate previous/next metadata from the navigation data and keep the consolidated edition deterministically generated.
3. Document which files are canonical and which are generated, including the required update/check commands.
4. Add a consistency check that every navigation item maps to one source page and that adjacent previous/next links are reciprocal.

**Acceptance:** Contributors can identify canonical content, and automated checks catch missing, duplicate, or non-reciprocal navigation without removing standalone Markdown access.

### P2 — Clarify external math-rendering and offline behavior

**Evidence:** The [book layout](./_layouts/book.html) loads MathJax from jsDelivr and exposes a readable notice if that script fails. Mathematical expressions remain in TeX source notation in the Markdown.

**Why it matters:** The site depends on an external host for formatted mathematics. Network restrictions, content blockers, or a CDN outage can leave dense formulas in source notation, which may be less approachable for some students.

**Suggested improvement:**

1. Test a representative set of formulas with JavaScript disabled and with the CDN blocked.
2. Decide whether the current fallback is sufficient for the audience; if not, evaluate a locally hosted renderer or build-time rendering with its maintenance and accessibility costs.
3. Keep the failure notice concise and ensure it does not obscure the reading experience.

**Acceptance:** Core mathematical meaning remains understandable when the rendering service is unavailable, and the chosen hosting approach and trade-offs are documented.

## Suggested order

1. Verify or remove unsupported curriculum-dependent figures.
2. Establish independent mathematics review and a question-difficulty rubric.
3. Add focused browser and accessibility validation.
4. Make local build instructions reproducible and CI-aligned.
5. Simplify navigation/content synchronization only if maintenance evidence justifies it.
6. Confirm that the math-rendering fallback meets the needs of offline and restricted-network users.

## Review method and limitations

- Inspected repository structure, current handbook and assessment notes, representative chapter content, synchronization and validation scripts, the shared layout and stylesheet, README, and GitHub Pages workflow.
- This was a targeted repository review, not an exhaustive audit of every mathematical statement, source link, rendered page, device, assistive technology, or official CBSE document.
- Recommendations identify opportunities and risks; they do not establish that an untested behavior is currently broken.
