# StudentHub

Collection of formulas and notes for students of various boards.

## CBSE Class 10 Mathematics Standard (041)

**Read the handbook online:** [https://nareshgrampalli-coder.github.io/StudentHub/maths/](https://nareshgrampalli-coder.github.io/StudentHub/maths/)

The [2026–27 handbook for the 2027 board examination](./handbook/CBSE_Class_10_Mathematics_Standard_2027_Handbook.md) covers all 14 NCERT chapters with explanations, clearly organized formula and theorem sheets, illustrative diagrams, solved examples, practice questions, and revision checklists.

The online edition is organized as a book with a contents page, chapter sidebar, and previous/next navigation. Individual chapter files are in [`handbook/chapters/`](./handbook/chapters/), and the blueprint, unit summaries, and final revision sections are in [`handbook/sections/`](./handbook/sections/). The consolidated handbook remains the complete student-facing reference.

The handbook is an original study resource. The official CBSE curriculum and notices remain the final authority; check its assessment-source note before relying on marks allocations.

## Contributing and validation

The individual chapter pages in [`handbook/chapters/`](./handbook/chapters/) and the pages in [`handbook/sections/`](./handbook/sections/) are canonical. The consolidated handbook (`handbook/CBSE_Class_10_Mathematics_Standard_2027_Handbook.md`) is generated from those pages; do not edit its copied sections directly. After editing canonical content, update the consolidated copy and run the checks:

```sh
node scripts/sync-handbook.mjs
node scripts/check-handbook.mjs
```

After building the site, check its rendered output with `node scripts/check-rendered-site.mjs` (expected output: `Rendered site checks passed...`).

Run the browser, print-layout, and accessibility smoke tests with `npm ci`, `npx playwright install chromium`, and `npm run test:browser`. To use an already-installed Chrome or Edge instead, set `PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH` to its executable path before running `npm run test:browser`.

The check verifies navigation order, page metadata, chapter and formula synchronization, assessment caveats, accessible graph descriptions, unit-summary essentials, and one-to-one practice question/answer identifiers. GitHub Actions runs it for pull requests and builds the published Jekyll site after changes reach `main`.

For mathematics and pedagogy review, follow [the educator review checklist](./docs/educator-review/EDUCATOR_REVIEW.md) and record findings in [the review log](./docs/educator-review/EDUCATOR_REVIEW_LOG.md). All chapters currently await independent educator review. Project reviews and recommendations are kept in [`docs/reviews/`](./docs/reviews/).

### Windows setup

1. Install **Ruby+Devkit 3.3.13 x64** from [RubyInstaller for Windows](https://rubyinstaller.org/downloads/). The GitHub Pages dependency bundle used here does not yet support Ruby 4. Keep the option to add Ruby to `PATH` enabled and run the recommended MSYS2 toolchain setup when prompted.
2. Open a new PowerShell window and verify `ruby --version` reports Ruby 3.3.x. Bundler is normally included; if `bundle --version` fails, install it with `gem install bundler` and verify again.
3. Install the pinned GitHub Pages dependency set and start the preview:

```powershell
bundle install
bundle exec jekyll serve
```

Open the local URL printed by Jekyll, usually `http://127.0.0.1:4000/StudentHub/`. The `Gemfile` and committed `Gemfile.lock` pin the GitHub Pages dependency set used by CI. Ruby 3.3 is required because Ruby 4 cannot resolve the current Pages dependencies. See the [Bundler documentation](https://bundler.io/) for usage and the [Jekyll installation guide](https://jekyllrb.com/docs/installation/) for platform-specific details.

GitHub Pages' current dependency versions are listed at [pages.github.com/versions](https://pages.github.com/versions/).
