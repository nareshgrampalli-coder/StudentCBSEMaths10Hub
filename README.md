# StudentHub

Collection of formulas and notes for students of various boards.

## CBSE Class 10 Mathematics Standard (041)

**Read the handbook online:** [https://nareshgrampalli-coder.github.io/StudentHub/](https://nareshgrampalli-coder.github.io/StudentHub/)

The [2026–27 handbook for the 2027 board examination](./CBSE_Class_10_Mathematics_Standard_2027_Handbook.md) covers all 14 NCERT chapters with explanations, clearly organized formula and theorem sheets, illustrative diagrams, solved examples, practice questions, and revision checklists.

The online edition is organized as a book with a contents page, chapter sidebar, and previous/next navigation. Individual chapter files are in [`handbook/chapters/`](./handbook/chapters/), and the blueprint, unit summaries, and final revision sections are in [`handbook/sections/`](./handbook/sections/). The consolidated handbook remains the complete student-facing reference.

The handbook is an original study resource. The official CBSE curriculum and notices remain the final authority; check its assessment-source note before relying on marks allocations.

## Contributing and validation

The individual chapter pages in [`handbook/chapters/`](./handbook/chapters/) and the pages in [`handbook/sections/`](./handbook/sections/) are canonical. The consolidated handbook (`CBSE_Class_10_Mathematics_Standard_2027_Handbook.md`) is generated from those pages; do not edit its copied sections directly. After editing canonical content, update the consolidated copy and run the checks:

```sh
node scripts/sync-handbook.mjs
node scripts/check-handbook.mjs
```

After building the site, check its rendered output with `node scripts/check-rendered-site.mjs` (expected output: `Rendered site checks passed...`).

The check verifies navigation order, page metadata, chapter and formula synchronization, assessment caveats, accessible graph descriptions, unit-summary essentials, and one-to-one practice question/answer identifiers. GitHub Actions runs it for pull requests and builds the published Jekyll site after changes reach `main`.

### Windows setup

1. Install the stable **Ruby+Devkit x64** release from [RubyInstaller for Windows](https://rubyinstaller.org/downloads/). Keep the option to add Ruby to `PATH` enabled and run the recommended MSYS2 toolchain setup when prompted.
2. Open a new PowerShell window and verify `ruby --version` and `gem --version`. Bundler is normally included; if `bundle --version` fails, install it with `gem install bundler` and verify again.
3. Install Jekyll and the plugin used by this site, then start the preview:

```powershell
gem install jekyll jekyll-relative-links
jekyll serve
```

Open the local URL printed by Jekyll, usually `http://127.0.0.1:4000/StudentHub/`. Bundler is not required by the current preview commands because this repository does not yet include a `Gemfile`. See the [Bundler documentation](https://bundler.io/) for usage and the [Jekyll installation guide](https://jekyllrb.com/docs/installation/) for platform-specific details.

GitHub Pages builds the deployed site with its Pages Jekyll builder. These commands provide a convenient preview, not a pinned reproduction of that hosted toolchain; the repository currently does not pin Ruby or gem versions, so local output can differ from CI.
