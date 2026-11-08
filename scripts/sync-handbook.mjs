import { readdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const handbookPath = resolve(root, "handbook/CBSE_Class_10_Mathematics_Standard_2027_Handbook.md");
const checkOnly = process.argv.includes("--check");
const handbookOriginal = await readFile(handbookPath, "utf8");
const preserveCrLf = handbookOriginal.includes("\r\n");
let handbook = handbookOriginal.replace(/\r\n/g, "\n");
let changes = 0;
const sectionFiles = (await readdir(resolve(root, "handbook/sections"))).filter((name) => name.endsWith(".md"));

function bodyAfterFrontMatter(markdown, label) {
  markdown = markdown.replace(/\r\n/g, "\n");
  if (!markdown.startsWith("---\n")) {
    throw new Error(`${label} is missing YAML front matter.`);
  }
  const end = markdown.indexOf("\n---\n", 4);
  if (end < 0) {
    throw new Error(`${label} has unterminated YAML front matter.`);
  }
  return markdown.slice(end + 5).trim();
}

function replaceSection(startMarker, endMarker, replacement, label) {
  const start = handbook.indexOf(startMarker);
  const end = handbook.indexOf(endMarker, start + startMarker.length);
  if (start < 0 || end < 0) {
    throw new Error(`Could not locate ${label} in the consolidated handbook.`);
  }
  const current = handbook.slice(start, end).trimEnd();
  if (current === replacement) {
    return;
  }
  if (checkOnly) {
    throw new Error(`${label} is out of sync. Run node scripts/sync-handbook.mjs.`);
  }
  handbook = `${handbook.slice(0, start)}${replacement}\n\n${handbook.slice(end)}`;
  changes += 1;
}

for (let chapterNumber = 1; chapterNumber <= 14; chapterNumber += 1) {
  const chapterId = String(chapterNumber).padStart(2, "0");
  const entries = await readdir(resolve(root, "handbook/chapters"));
  const chapterFile = entries.find((name) => name.startsWith(`${chapterId}-`) && name.endsWith(".md"));
  if (!chapterFile) {
    throw new Error(`Chapter ${chapterNumber} file is missing.`);
  }
  const chapter = (await readFile(resolve(root, "handbook/chapters", chapterFile), "utf8")).replace(/\r\n/g, "\n");
  const body = bodyAfterFrontMatter(chapter, chapterFile);
  const chapterHeading = body.match(/^## Chapter \d+:.+$/m)?.[0];
  if (!chapterHeading) {
    throw new Error(`${chapterFile} is missing its chapter heading.`);
  }
  const nextChapter = chapterNumber === 14 ? "## Final formula revision sheet" : `## Chapter ${chapterNumber + 1}:`;
  replaceSection(chapterHeading, nextChapter, `${body}\n<!-- PAGE BREAK -->`, chapterFile);
}

const blueprint = bodyAfterFrontMatter(await readFile(resolve(root, "handbook/sections/examination-blueprint.md"), "utf8"), "Examination blueprint");
replaceSection("## Examination blueprint", "### Unit I: Number Systems", blueprint, "Examination blueprint");

const romanNumerals = ["i", "ii", "iii", "iv", "v", "vi", "vii"];
for (let unitNumber = 1; unitNumber <= 7; unitNumber += 1) {
  const numeral = romanNumerals[unitNumber - 1];
  const unitFile = sectionFiles.find((name) => name.startsWith(`unit-${numeral}-`));
  if (!unitFile) {
    throw new Error(`Unit ${unitNumber} overview file is missing.`);
  }
  let unitBody = bodyAfterFrontMatter(await readFile(resolve(root, "handbook/sections", unitFile), "utf8"), unitFile);
  unitBody = unitBody.split("\n---\n\n<!-- PAGE BREAK -->")[0].trim();
  const nextUnit = unitNumber === 7 ? "<!-- PAGE BREAK -->" : `### Unit ${romanNumerals[unitNumber].toUpperCase()}:`;
  replaceSection(`### Unit ${romanNumerals[unitNumber - 1].toUpperCase()}:`, nextUnit, unitBody, unitFile);
}

const formulaSheet = bodyAfterFrontMatter(
  (await readFile(resolve(root, "handbook/sections/final-formula-revision-sheet.md"), "utf8")).replace(/\r\n/g, "\n"),
  "Final formula revision sheet",
);
replaceSection(
  "## Final formula revision sheet",
  "## Final examination checklist",
  formulaSheet,
  "Final formula revision sheet",
);

if (changes > 0) {
  await writeFile(handbookPath, preserveCrLf ? handbook.replace(/\n/g, "\r\n") : handbook, "utf8");
}

console.log(checkOnly ? "Consolidated chapter and formula content is synchronized." : `Synchronized ${changes} handbook section(s).`);
