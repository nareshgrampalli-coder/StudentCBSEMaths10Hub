# StudentHub project improvement review

**Review date:** 8 November 2026  
**Reviewed revision:** `817e994`  
**Scope:** Repository structure, handbook validation, rendered-site checks, browser tests, print styling, contributor guidance, and Pages workflow.

This is a recommendations-only review. No application, content, or workflow implementation is included here.

## Summary

The project has a clear canonical-content workflow, deterministic handbook synchronization, rendered-site validation, a Pages build, and browser checks for navigation, mobile disclosure, math fallback, print styling, and one accessibility scan. The most useful next improvements are to secure independent educational review, broaden accessibility and print regression coverage, and make the validation entry point easier to run consistently.

## Prioritized improvements

### P1 — Complete independent mathematics and pedagogy review

**Evidence:** The [educator review log](EDUCATOR_REVIEW_LOG.md) marks all 14 chapters “Not reviewed.” The [review checklist](EDUCATOR_REVIEW.md) requires independent checking of definitions, formulas, worked examples, diagrams, practice answers, and objective coverage.

**Recommendation:** Arrange qualified independent review in manageable chapter batches. Record findings against stable question IDs or headings, resolve them, and update the log only after each chapter has been reviewed.

**Why it matters:** Automated synchronization and structural checks cannot establish mathematical correctness, syllabus alignment, or whether the stated difficulty matches the reasoning required.

**Acceptance:** Each chapter has a dated independent review record, and findings are traceable to a resolution or an open issue.

### P1 — Broaden accessibility checks across representative pages and layouts

**Evidence:** The [browser suite](tests/browser/site.spec.js) runs axe on Chapter 1 only. Its responsive interaction check covers the formula sheet, while other section and chapter templates are not included in an axe scan.

**Recommendation:** Add a small, representative accessibility matrix covering a chapter with diagrams and tables, a longer section page, the contents page, and the short `/maths/` redirect destination. Include a mobile viewport for at least one representative content page; keep automated axe results supplemented by keyboard and screen-reader spot checks.

**Why it matters:** Shared layout rules help, but content-specific labels, tables, links, and diagrams can introduce issues that a single chapter scan will not catch.

**Acceptance:** Automated accessibility checks cover each materially different page/content pattern, and manual assistive-technology checks are recorded for major navigation changes.

### P1 — Turn print layout goals into an output-level regression check

**Evidence:** The formula-sheet browser test checks CSS sizing and that headings do not request forced page breaks. It does not assert printed output or page count. A manual Chromium PDF check during the recent layout work produced four A4 pages.

**Recommendation:** Set an intentional page-count target or acceptable range for the formula sheet, then automate a stable PDF page-count check or document a repeatable manual check. Review the result when content grows so a page-budget failure prompts a layout decision rather than silent pagination drift.

**Why it matters:** CSS properties alone do not guarantee the number of printed pages; font metrics, content length, table splitting, and browser print behavior all affect pagination.

**Acceptance:** A repeatable check detects when the formula sheet exceeds its agreed page budget while preserving readable type and tables.

### P2 — Provide one documented validation entry point

**Evidence:** The [README](README.md) lists separate commands for handbook checks, rendered checks, browser tests, and setup. The [package manifest](package.json) exposes only `test:browser`, while [CI](.github/workflows/pages.yml) invokes the other checks directly.

**Recommendation:** Consider adding a single documented local validation command that runs the source, rendered-output, and browser checks in the same order as CI, while retaining individual commands for focused work.

**Why it matters:** Contributors can more easily reproduce CI locally and are less likely to omit a required check after editing canonical content or site presentation.

**Acceptance:** One documented command runs the complete validation sequence from a built site, and its behavior matches the workflow checks.

### P2 — Reduce repeated browser setup in pull-request CI

**Evidence:** The [Pages workflow](.github/workflows/pages.yml) installs npm dependencies and Chromium in the build job, which runs for both pull requests and pushes. The separate `validate` job checks handbook source but does not share the build job’s generated output or dependencies.

**Recommendation:** Measure workflow duration and consider caching dependencies/browser binaries or separating source-only validation from browser tests where the workflow can preserve equivalent pull-request coverage.

**Why it matters:** Browser installation and duplicated checkout/runtime setup can make feedback slower and consume CI time. Any optimization should preserve the current rendered-site and browser checks before deployment.

**Acceptance:** Pull requests retain source, rendered-site, browser, accessibility, and print checks, with measured CI time or setup work reduced.

## Existing strengths to preserve

- Canonical chapter and section sources are distinguished from the generated consolidated handbook in the [README](README.md), and synchronization is checked.
- Source checks validate navigation metadata, practice identifiers, selected mathematical edge cases, and required content.
- Rendered checks inspect generated HTML rather than relying solely on Markdown-source patterns.
- The browser suite covers the `/maths/` redirect, mobile contents disclosure, keyboard skip navigation, MathJax failure messaging, print styles, and an accessibility scan.
- The handbook explicitly identifies independent educator review as distinct from author or automated review.

## Review limitations

This was a targeted project review, not a full mathematical fact-check of all 14 chapters, an exhaustive inspection of all generated pages, a cross-browser/device test, or a full manual accessibility audit. Recommendations identify coverage and process opportunities; they do not claim untested behavior is broken.
