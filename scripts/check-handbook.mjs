import { readdir, readFile } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const failures = [];

async function text(path) {
  return (await readFile(resolve(root, path), "utf8")).replace(/\r\n/g, "\n");
}

function assert(condition, message) {
  if (!condition) failures.push(message);
}

function frontMatterValue(source, key) {
  return source.match(new RegExp(`^${key}:\\s*([^\\n]+)$`, "m"))?.[1]?.trim() ?? "";
}

function bodyAfterFrontMatter(source) {
  const end = source.indexOf("\n---\n", 4);
  return end < 0 ? "" : source.slice(end + 5).trim();
}

const navigationSource = await text("_data/book.yml");
const navigationUrls = [...navigationSource.matchAll(/^\s+url:\s+([^\s]+)\s*$/gm)].map((match) => match[1]);
assert(navigationUrls.length === 24, `Expected 24 navigation entries, found ${navigationUrls.length}.`);
assert(new Set(navigationUrls).size === navigationUrls.length, "Navigation URLs must be unique.");

for (let index = 0; index < navigationUrls.length; index += 1) {
  const url = navigationUrls[index];
  const file = `${url.replace(/^\/|\/$/g, "")}.md`;
  let source;
  try {
    source = await text(file);
  } catch {
    failures.push(`Navigation entry has no page: ${url} (${file}).`);
    continue;
  }
  const expectedPrevious = navigationUrls[index - 1] ?? "";
  const expectedNext = navigationUrls[index + 1] ?? "";
  const previous = frontMatterValue(source, "previous_url").replace(/^["']|["']$/g, "");
  const next = frontMatterValue(source, "next_url").replace(/^["']|["']$/g, "");
  const navigationItems = [...navigationSource.matchAll(/^- title:\s+(.+)\n\s+url:\s+([^\n]+)$/gm)];
  const expectedTitle = navigationItems[index]?.[1].replace(/^(["'])(.*)\1$/, "$2").trim();
  const title = frontMatterValue(source, "title").replace(/^(["'])(.*)\1$/, "$2").trim();
  const previousTitle = frontMatterValue(source, "previous_title").replace(/^(["'])(.*)\1$/, "$2").trim();
  const nextTitle = frontMatterValue(source, "next_title").replace(/^(["'])(.*)\1$/, "$2").trim();
  assert(expectedTitle === title, `${file} title should match its navigation title (${expectedTitle}).`);
  assert(previous === expectedPrevious, `${file} previous_url should be ${expectedPrevious || "(unset)"}.`);
  assert(next === expectedNext, `${file} next_url should be ${expectedNext || "(unset)"}.`);
  if (index > 0) {
    const expectedPreviousTitle = navigationItems[index - 1]?.[1].replace(/^(["'])(.*)\1$/, "$2").trim();
    assert(previousTitle === expectedPreviousTitle, `${file} previous_title should match the preceding navigation title.`);
  } else {
    assert(!previousTitle, `${file} must not define a previous_title for the first page.`);
  }
  if (index + 1 < navigationUrls.length) {
    const expectedNextTitle = navigationItems[index + 1]?.[1].replace(/^(["'])(.*)\1$/, "$2").trim();
    assert(nextTitle === expectedNextTitle, `${file} next_title should match the following navigation title.`);
  } else {
    assert(!nextTitle, `${file} must not define a next_title for the final page.`);
  }
}

const chapterFiles = (await readdir(resolve(root, "handbook/chapters")))
  .filter((name) => /^\d{2}-.+\.md$/.test(name))
  .sort();
assert(chapterFiles.length === 14, `Expected 14 chapters, found ${chapterFiles.length}.`);

for (const file of chapterFiles) {
  const source = await text(`handbook/chapters/${file}`);
  const practiceStart = source.indexOf("### I. Practice questions");
  const practice = practiceStart < 0 ? "" : source.slice(practiceStart);
  assert(practiceStart >= 0, `${file} is missing its practice section.`);
  assert(practice.includes("original questions written for this handbook") && practice.includes("not copied from past papers"), `${file} must state practice-question provenance.`);
  assert(practice.includes("**Difficulty guide:**"), `${file} must define its simple/medium/complex rubric.`);
  assert(source.includes("**Assessment note:**") && !source.includes("Exam planning estimate"), `${file} must avoid unsupported chapter mark estimates.`);

  const questionIds = [];
  for (const [category, prefix] of [["Simple", "S"], ["Medium", "M"], ["Complex", "C"]]) {
    const marker = `#### ${category}\n`;
    const categoryStart = practice.indexOf(marker);
    const nextHeading = categoryStart < 0 ? -1 : practice.indexOf("\n#### ", categoryStart + marker.length);
    const block = categoryStart < 0 ? "" : practice.slice(categoryStart + marker.length, nextHeading < 0 ? undefined : nextHeading);
    const ids = [...block.matchAll(new RegExp(`^\\*\\*${prefix}(\\d+)\\.\\*\\*`, "gm"))].map((match) => `${prefix}${match[1]}`);
    assert(ids.length >= 2, `${file} should have at least two ${category.toLowerCase()} questions.`);
    assert(new Set(ids).size === ids.length, `${file} has duplicate ${category} question IDs.`);
    questionIds.push(...ids);
  }

  const answerBlock = practice.split("#### Answers / hints\n")[1] ?? "";
  const answerIds = [...answerBlock.matchAll(/^\*\*([SMC]\d+)\.\*\*/gm)].map((match) => match[1]);
  assert(answerIds.length === questionIds.length, `${file} has ${questionIds.length} questions but ${answerIds.length} keyed answers.`);
  assert(questionIds.every((id) => answerIds.filter((answerId) => answerId === id).length === 1), `${file} question IDs do not map one-to-one to answers.`);
  assert(answerIds.every((id) => questionIds.includes(id)), `${file} includes an answer without a question.`);
  assert(!/\n {2,}(?!\n)/.test(answerBlock), `${file} answer section should use paragraph-separated steps, not soft line breaks.`);
}

for (const [file, altText] of [
  ["assets/images/polynomial-zeros.svg", "zeros"],
  ["assets/images/quadratic-roots.svg", "roots"],
]) {
  const svg = await text(file);
  assert(svg.includes("<title") && svg.includes("<desc") && svg.includes('role="img"'), `${file} needs accessible SVG title and description.`);
  assert(svg.toLowerCase().includes(altText), `${file} title/description should describe its mathematical concept.`);
}

const formulaSheet = await text("handbook/sections/final-formula-revision-sheet.md");
assert((formulaSheet.match(/^### \[/gm) ?? []).length === 14, "Formula revision sheet must link all 14 chapters.");
assert(formulaSheet.includes("\\Delta=a_1b_2-a_2b_1") && formulaSheet.includes("where neither $(a_i,b_i)=(0,0)$") && formulaSheet.includes("These determinant conditions work even when one or more coefficients are zero."), "Linear-pair formula must define zero-safe conditions for genuine lines.");

const blueprint = await text("handbook/sections/examination-blueprint.md");
assert(blueprint.includes("**Source review:** 8 November 2026") && blueprint.includes("2027 board examination"), "Blueprint must show its source review date and applicable examination year.");
assert(!/\|[^\n]*\|\s*\d+\s*\|/.test(blueprint) && !/\b\d+\s*%/.test(blueprint), "Blueprint must not publish unverified numeric assessment allocations.");

for (let unit = 1; unit <= 7; unit += 1) {
  const prefix = ["i", "ii", "iii", "iv", "v", "vi", "vii"][unit - 1];
  const files = (await readdir(resolve(root, "handbook/sections"))).filter((name) => name.startsWith(`unit-${prefix}-`));
  assert(files.length === 1, `Expected one page for Unit ${unit}.`);
  if (!files.length) continue;
  const page = await text(`handbook/sections/${files[0]}`);
  for (const required of ["**Learning goals:**", "**Prerequisites:**", "**Common checks:**", "**Self-check:**", "**Practice path:**"]) {
    assert(page.includes(required), `${files[0]} is missing ${required}`);
  }
}

const markdownPaths = [
  "README.md",
  "index.md",
  "CBSE_Class_10_Mathematics_Standard_2027_Handbook.md",
  ...chapterFiles.map((name) => `handbook/chapters/${name}`),
  ...(await readdir(resolve(root, "handbook/sections")))
    .filter((name) => name.endsWith(".md"))
    .map((name) => `handbook/sections/${name}`),
];
for (const file of markdownPaths) {
  const source = await text(file);
  for (const match of source.matchAll(/\{\{\s*'([^']+)'\s*\|\s*relative_url\s*\}\}/g)) {
    const route = match[1].split("#")[0];
    if (route === "/") {
      assert(await readFile(resolve(root, "index.md")).then(() => true, () => false), `${file} links to a missing home page.`);
    } else if (route.startsWith("/assets/")) {
      assert(await readFile(resolve(root, route.slice(1))).then(() => true, () => false), `${file} links to missing asset ${route}.`);
    } else if (route === "/complete-handbook/") {
      assert(await readFile(resolve(root, "CBSE_Class_10_Mathematics_Standard_2027_Handbook.md")).then(() => true, () => false), `${file} links to a missing consolidated handbook.`);
    } else {
      assert(navigationUrls.includes(route), `${file} links to an unknown page route ${route}.`);
    }
  }
}

function classifyLines(first, second) {
  const [a1, b1, c1] = first;
  const [a2, b2, c2] = second;
  const determinant = a1 * b2 - a2 * b1;
  if (determinant !== 0) return "one";
  if (a1 * c2 - a2 * c1 === 0 && b1 * c2 - b2 * c1 === 0) return "infinite";
  return "none";
}
assert(classifyLines([1, 0, -2], [1, 0, -3]) === "none", "Zero-safe line classification should handle distinct vertical lines.");
assert(classifyLines([1, 0, -2], [2, 0, -4]) === "infinite", "Zero-safe line classification should handle coincident vertical lines.");
assert(classifyLines([1, 1, -7], [1, -1, -1]) === "one", "Line classification should detect a unique solution.");

const layout = await text("_layouts/book.html");
const stylesheet = await text("assets/css/site.css");
assert(layout.includes("<details class=\"contents-disclosure\"") && layout.includes("mobileContents"), "Book contents should have responsive, keyboard-operable disclosure navigation.");
assert(layout.includes("mathjax-status") && layout.includes("addEventListener(\"error\""), "Math rendering failure should expose a readable fallback notice.");
assert(stylesheet.includes(":focus-visible") && stylesheet.includes("@media print"), "Keyboard focus and print styles are required.");

const sync = spawnSync(process.execPath, ["scripts/sync-handbook.mjs", "--check"], { cwd: root, encoding: "utf8" });
assert(sync.status === 0, `Consolidated handbook is out of sync: ${(sync.stderr || sync.stdout).trim()}`);

if (failures.length) {
  console.error(`Handbook checks failed (${failures.length}):`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exitCode = 1;
} else {
  console.log(`Handbook checks passed: ${navigationUrls.length} linked pages, ${chapterFiles.length} chapters, and keyed practice questions.`);
}
