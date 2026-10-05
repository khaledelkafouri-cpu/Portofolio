// Renders cv-source/khaled-elsawy-cv.html to public/cv/khaled-elsawy-cv.pdf.
// Requires Playwright (not a project dependency): `npx playwright` or a global install.
// Optional: PHONE="+20 ..." OUT=path.pdf adds a phone number for a private copy.
// Optional: HEADLINE="Social Media Executive" swaps the headline (title line + opening of the profile)
// to match a job ad's wording. Only use a title that honestly describes the work.
import { chromium } from "playwright";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const here = (path) => fileURLToPath(new URL(path, import.meta.url));
const out = process.env.OUT ?? here("../public/cv/khaled-elsawy-cv.pdf");
let html = await readFile(here("./khaled-elsawy-cv.html"), "utf8");
if (process.env.PHONE) html = html.replace("<!--PHONE-->", ` | ${process.env.PHONE}`);
if (process.env.HEADLINE) html = html.replace(/<!--H-->.*?<!--\/H-->/g, process.env.HEADLINE);

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setContent(html, { waitUntil: "load" });
await page.pdf({ path: out, format: "A4", printBackground: true, preferCSSPageSize: true });
await browser.close();
console.log(`Wrote ${out}`);
