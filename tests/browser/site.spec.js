import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("desktop navigation and keyboard skip link work", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("handbook/chapters/01-real-numbers/");

  await expect(page.getByRole("heading", { name: "Chapter 1: Real Numbers" })).toBeVisible();
  await expect(page.locator(".contents-disclosure")).toHaveJSProperty("open", true);
  await expect(page.getByRole("link", { name: /Next.*Chapter 2: Polynomials/ })).toHaveAttribute(
    "href",
    "/StudentHub/handbook/chapters/02-polynomials/",
  );

  await page.keyboard.press("Tab");
  await expect(page.locator(".skip-link")).toBeFocused();
});

test("mobile contents disclosure and table overflow are usable", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("handbook/sections/final-formula-revision-sheet/");

  const disclosure = page.locator(".contents-disclosure");
  await expect(disclosure).toHaveJSProperty("open", false);
  await disclosure.locator("summary").click();
  await expect(disclosure.getByRole("link", { name: "Chapter 1: Real Numbers" })).toBeVisible();

  const table = page.locator(".book-content table").first();
  await expect(table).toHaveAttribute("tabindex", "0");
  expect(await table.evaluate((element) => getComputedStyle(element).overflowX)).toBe("auto");
});

test("math fallback appears when the renderer fails to load", async ({ page }) => {
  await page.route("https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js", (route) => route.abort());
  await page.goto("handbook/chapters/01-real-numbers/");

  await expect(page.locator("#mathjax-status")).toBeVisible();
});

test("major print sections start on fresh A4 pages", async ({ page }) => {
  await page.goto("handbook/chapters/01-real-numbers/");
  await page.emulateMedia({ media: "print" });

  const sections = page.locator(".book-content.sectioned-print > h2");
  await expect(sections.nth(2)).toHaveCSS("break-before", "page");
  await expect(sections.nth(1)).toHaveCSS("break-before", "auto");
});

test("chapter page has no serious or critical accessibility violations", async ({ page }) => {
  await page.goto("handbook/chapters/01-real-numbers/");
  const results = await new AxeBuilder({ page }).analyze();
  const serious = results.violations.filter((violation) => ["serious", "critical"].includes(violation.impact));

  expect(serious, JSON.stringify(serious, null, 2)).toEqual([]);
});