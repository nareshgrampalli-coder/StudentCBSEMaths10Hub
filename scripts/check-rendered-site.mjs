import { access, readFile, readdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const site = resolve(root, "_site");
const failures = [];

async function rendered(path) {
  return readFile(resolve(site, path), "utf8");
}

function assert(condition, message) {
  if (!condition) failures.push(message);
}

try {
  await access(site);
} catch {
  console.error("Rendered Pages output was not found at _site. Run this after the Jekyll Pages build.");
  process.exit(1);
}

for (const file of [
  "handbook/chapters/02-polynomials/index.html",
  "handbook/chapters/04-quadratic-equations/index.html",
  "handbook/sections/final-formula-revision-sheet/index.html",
]) {
  try {
    const html = await rendered(file);
    assert((html.match(/<table\b/g) ?? []).length > 0, `${file} should render semantic HTML tables.`);
    assert(!/<p>\s*\|\s*[^<\n]+\|/.test(html), `${file} contains a raw Markdown table.`);
    assert(html.includes('class="contents-disclosure"'), `${file} is missing the accessible contents disclosure.`);
    assert(html.includes("mathjax-status"), `${file} is missing the formula fallback notice.`);
  } catch {
    failures.push(`Expected rendered page is missing: ${file}.`);
  }
}

for (let chapter = 1; chapter <= 14; chapter += 1) {
  const number = String(chapter).padStart(2, "0");
  const chapterFile = (await readdir(resolve(root, "handbook/chapters"))).find((name) => name.startsWith(`${number}-`) && name.endsWith(".md"));
  if (!chapterFile) {
    failures.push(`Source chapter ${number} is missing.`);
    continue;
  }
  const slug = chapterFile.slice(0, -3);
  const file = `handbook/chapters/${slug}/index.html`;
  try {
    const html = await rendered(file);
    for (const id of [`S1.`, `S2.`, `M1.`, `M2.`, `C1.`, `C2.`]) {
      assert(html.includes(`>${id}</strong>`) || html.includes(`>${id}</b>`), `${file} does not render question/answer label ${id}.`);
    }
    assert(html.includes("Simple") && html.includes("Medium") && html.includes("Complex"), `${file} is missing a practice difficulty heading.`);
    assert(!/<h4[^>]*>Simple<\/h4>\s*<ol\b/.test(html), `${file} should not render an ambiguously numbered simple-question list.`);
    assert(!/<h4[^>]*>Medium<\/h4>\s*<ol\b/.test(html), `${file} should not render an ambiguously numbered medium-question list.`);
    assert(!/<h4[^>]*>Complex<\/h4>\s*<ol\b/.test(html), `${file} should not render an ambiguously numbered complex-question list.`);
  } catch {
    failures.push(`Rendered chapter page is missing: ${file}.`);
  }
}

for (const image of ["polynomial-zeros.svg", "quadratic-roots.svg"]) {
  try {
    await access(resolve(site, "assets/images", image));
  } catch {
    failures.push(`Rendered site is missing diagram asset assets/images/${image}.`);
  }
}

if (failures.length) {
  console.error(`Rendered site checks failed (${failures.length}):`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exitCode = 1;
} else {
  console.log("Rendered site checks passed: tables, navigation, fallback messaging, diagrams, and practice labels.");
}
