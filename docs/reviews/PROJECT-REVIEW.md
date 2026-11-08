# StudentCBSEMaths10Hub project review and improvement suggestions

**Review date:** 7 November 2026  
**Reviewed revision:** `eee2c9a`  
**Scope:** CBSE Class 10 Mathematics Standard handbook, its chapter and revision pages, site layout, and GitHub Pages workflow.

This is a recommendations document only. No handbook, website, or publishing changes are proposed as already implemented.

## Summary

StudentCBSEMaths10Hub already has a coherent book-like structure, 14 chapter pages, worked examples, practice questions, diagrams, a consolidated edition, and a substantial formula sheet. The site includes a skip link, current-page navigation, previous/next links, and responsive styles.

The most important next steps are to improve the reliability of assessment information and diagrams, correct practice-question numbering in the published site, and introduce checks that prevent content and presentation regressions. The remaining suggestions improve learning depth and usability.

## Prioritized recommendations

### P0 — Make exam-weightage guidance evidence-based

**Evidence:** The [assessment note](../../handbook/CBSE_Class_10_Mathematics_Standard_2027_Handbook.md#L13) says the 2026–27 curriculum could not be text-extracted and the marks circular returned 403. The [blueprint page](../../handbook/sections/examination-blueprint.md) labels its figures unverified, while individual chapter overviews present numeric marks and question-count estimates, for example [Quadratic Equations](../../handbook/chapters/04-quadratic-equations.md#L19).

**Why it matters:** Students may treat the repeated chapter ranges as reliable predictions despite the disclaimers. The repository does not document a past-paper sample or methodology supporting those ranges. The question-count figures also combine questions and subparts, which are different units of measurement.

**Suggested improvement:**

1. Verify the current syllabus and assessment pattern against accessible official CBSE documents; record the source, publication date, verification date, and any remaining uncertainty.
2. Keep official unit weightage separate from non-official chapter estimates. Do not present an estimate as a typical historical range without a reproducible analysis of identifiable past papers.
3. If estimates are retained, explain the methodology and define whether counts refer to whole questions or subparts. Otherwise replace numeric predictions with a clear statement that chapter coverage varies.
4. Link each chapter overview to the assessment note so readers entering directly from search can check the qualification.

**Acceptance:** Every published figure is traceable to a source or a documented calculation, and no chapter-level prediction is presented as official or as a measured trend without evidence.

### P0 — Correct and verify instructional graphs

**Evidence:** The [polynomials diagram](../../handbook/chapters/02-polynomials.md#L26) and [quadratics diagram](../../handbook/chapters/04-quadratic-equations.md#L25) depict the parabola above the x-axis without visibly meeting the marked intercepts. The quadratics caption calls its U-shaped curve “downward-opening.”

**Why it matters:** The visual and explanation contradict the concept of zeros as intersections; the opening direction is also mislabeled. Students learning from the picture can acquire an incorrect model.

**Suggested improvement:** Redraw both graphs so the curve actually intersects the x-axis at the labeled roots, correct the opening-direction caption, and review the other diagrams against their accompanying statements. Use labeled, accessible SVG or another clear format where appropriate, with a text explanation that remains useful to screen-reader users.

**Acceptance:** A mathematics reviewer can trace every labeled point and relationship in each diagram to the accompanying text; graphics have accessible descriptions.

### P1 — Fix practice numbering and answer presentation

**Evidence:** [Chapter 4](../../handbook/chapters/04-quadratic-equations.md#L119) starts separate ordered lists with `1.`, `2.`, and `3.` under the three difficulty headings. On the published Chapter 4 page inspected during this review, all three rendered lists start at 1, while the combined answer list runs from 1 to 3. Within an answer, source line breaks are rendered as ordinary paragraph spaces rather than distinct working lines.

**Why it matters:** A student sees “1” in each category and cannot reliably match the medium and complex questions to answers 2 and 3. The working is also less readable than the source suggests.

**Suggested improvement:** Use stable identifiers such as S1, M1, and C1 in both questions and answers, or use one continuous list with headings that preserve numbering. Format working as separate paragraphs or nested steps, and test the rendered output rather than relying on Markdown source line breaks.

**Acceptance:** On the generated site, each question has a unique visible identifier that matches exactly one answer, and separate working steps appear on separate lines on desktop and mobile.

### P1 — Expand and calibrate practice

**Evidence:** Each of the 14 chapters currently has one question per difficulty category, for 42 practice questions in total; see [Statistics](../../handbook/chapters/13-statistics.md#L119). Some “complex” examples are single-formula substitutions, such as the hemisphere question in [Surface Areas and Volumes](../../handbook/chapters/12-surface-areas-and-volumes.md#L130). Questions are explicitly labeled original rather than actual past-paper extracts.

**Why it matters:** One question per level offers little opportunity to practice a chapter's different concepts, and difficulty labels are not consistently tied to reasoning or number of steps. Board-style claims and actual past-paper provenance need to remain distinct.

**Suggested improvement:** Create a chapter-by-chapter coverage matrix and add a balanced pool spanning core skills, application, reasoning, and mixed-topic or case-based problems. Define a difficulty rubric and give full solutions or graduated hints for multi-step questions. If using actual board papers, link to authoritative sources and confirm reuse permissions; otherwise label original adaptations clearly and cite the source pattern where verified.

**Acceptance:** Each chapter has multiple independently reviewed questions per level, coverage mapped to its learning objectives, unambiguous answer keys, and clear provenance for every sourced or adapted question.

### P1 — Add mathematical and content quality checks

**Evidence:** The project contains worked examples, answer keys, formula tables, and duplicate content in the [consolidated handbook](../../handbook/CBSE_Class_10_Mathematics_Standard_2027_Handbook.md) and [chapter pages](../../handbook/chapters/). No test files were found in the repository. The formula sheet's [linear-equation table](../../handbook/sections/final-formula-revision-sheet.md#L33) relies on ratios and advises cross-multiplication when denominators are zero without spelling out the full coefficient conditions.

**Why it matters:** A small answer-key, formula-condition, or copied-content error can be repeated across the site. Zero coefficients, undefined ratios, units, and geometry assumptions deserve explicit review.

**Suggested improvement:** Perform a teacher-reviewed mathematics audit, including substituting answers back into questions, checking units and special cases, and reviewing illustrations. Add reproducible checks for question/answer correspondence, required conditions, and matching chapter content between the two editions. For linear pairs, give the complete zero-safe coefficient tests with examples rather than relying on undefined ratios.

**Acceptance:** Each answer has been independently checked; documented automated checks catch missing questions/answers, inconsistent copies, and representative edge cases. Keep an issue log for corrections and review dates.

### P1 — Introduce pre-deployment checks and a local preview workflow

**Evidence:** The [Pages workflow](../../.github/workflows/pages.yml#L1) builds and deploys on pushes to `main` or manual dispatch; it does not define a pull-request validation job. The [README](../../README.md) explains how to read the site but not how to build or test it locally.

**Why it matters:** The site can build successfully while still publishing broken navigation, raw Markdown, wrong numbering, or unsynchronized copies. Contributors also lack a documented way to reproduce the Pages build before publishing.

**Suggested improvement:** Add a pull-request check using the same Jekyll configuration as Pages. Validate links, navigation order and previous/next symmetry, expected table rendering, question identifiers, and synchronization of consolidated and individual content. Document prerequisites and exact local build/preview commands; pin or otherwise document the tooling needed to reproduce the build.

**Acceptance:** A contributor can follow the documented commands on a clean environment, and an intentionally broken link, table, or chapter/answer mismatch causes the appropriate check to fail before deployment.

### P2 — Reduce duplicated content and navigation metadata

**Evidence:** Chapter bodies and the formula sheet appear both as individual pages and in the consolidated handbook. Sidebar order is in [book data](_data/book.yml), while previous/next URLs are repeated in page front matter and used by the [layout](_layouts/book.html#L49).

**Why it matters:** Each edit must be kept synchronized in multiple places; a new chapter or reordered page can silently leave navigation or the complete handbook out of date.

**Suggested improvement:** Establish one canonical content source and generate or assemble the consolidated edition and previous/next navigation from it. If retaining duplicate Markdown for offline readers, use a deterministic synchronization command and a CI check. Preserve existing published URLs and plain-Markdown usability.

**Acceptance:** Editing a chapter once updates both editions through a documented process; a check detects discrepancies and verifies all navigation links.

### P2 — Improve mobile navigation and accessibility

**Evidence:** On narrow screens the [sidebar styles](assets/css/site.css#L393) place a scrollable contents panel above the main content, up to 18rem high. The [layout](_layouts/book.html#L75) loads MathJax from a CDN, and diagrams are primarily monospaced text blocks.

**Why it matters:** A long navigation block can delay access to chapter content on small screens; network restrictions may prevent formatted mathematics from loading; text-art geometry may be hard to interpret with assistive technology. These are risks to validate, not failures established for every device.

**Suggested improvement:** Test keyboard navigation, screen readers, zoom, contrast, and small-screen layouts; consider a clearly labeled collapsible contents control. Evaluate an appropriate offline or CDN-failure fallback for mathematical notation, and add descriptive text to diagrams. Keep table scrolling discoverable and usable by keyboard.

**Acceptance:** Representative pages are usable with keyboard and screen reader, at 200% zoom and narrow viewport widths; math and diagram meaning remain available when the CDN is blocked.

### P2 — Make revision and unit pages more useful

**Evidence:** Unit overview pages such as [Coordinate Geometry](../../handbook/sections/unit-iii-coordinate-geometry.md) contain little beyond the unit title. The expanded [formula sheet](../../handbook/sections/final-formula-revision-sheet.md) is detailed but does not link individual formulas back to examples or include a compact study route.

**Why it matters:** Students need help deciding what to revise next and how to move from a formula to an application, not only a list of topics.

**Suggested improvement:** Add unit objectives, prerequisite reminders, links to relevant chapters and examples, common errors, and a short self-check. Add links from the formula sheet to representative worked examples and consider a compact printable version alongside the detailed reference.

**Acceptance:** A student can start from each unit page, identify its chapters and objectives, and reach a worked example or self-check without searching the entire book.

## Suggested order of work

1. Correct graph errors and resolve unsupported assessment claims.
2. Repair published practice numbering and answer-step layout.
3. Audit mathematical content and add pre-deployment checks.
4. Expand and calibrate practice using a documented coverage and provenance policy.
5. Improve single-source maintenance, accessibility, mobile reading, and revision pathways.

## Review method and limitations

- Reviewed repository structure, representative chapters and practice sections, assessment and formula pages, the shared layout and CSS, and the Pages workflow.
- Counted three practice questions per chapter and inspected the published Chapter 4 page to confirm its list rendering.
- This was a targeted project review, not an exhaustive independent verification of every formula, answer, link, device, syllabus requirement, or official CBSE document. Official-source availability and reuse permissions require separate verification before changes are made.
