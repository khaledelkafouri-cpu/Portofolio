// Renders cv-source/khaled-elsawy-cv.html to public/cv/khaled-elsawy-cv.pdf.
// Requires Playwright (not a project dependency): `npx playwright` or a global install.
// Optional: PHONE="+20 ..." OUT=path.pdf adds a phone number for a private copy.
// Optional: HEADLINE="Social Media Executive | Video Producer" swaps the title line; its first part
// (before "|") also opens the profile. Match a job ad's wording, but only with a title that honestly fits.
import { chromium } from "playwright";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const here = (path) => fileURLToPath(new URL(path, import.meta.url));
const out = process.env.OUT ?? here("../public/cv/khaled-elsawy-cv.pdf");
let html = await readFile(here("./khaled-elsawy-cv.html"), "utf8");
// Inline the Inter font files (cv-source/fonts, SIL OFL) so the PDF embeds them.
html = await inlineFonts(html);
if (process.env.PHONE) html = html.replace("<!--PHONE-->", ` | ${process.env.PHONE}`);
if (process.env.HEADLINE) {
  html = html.replace(/<!--H-->.*?<!--\/H-->/, process.env.HEADLINE);
  html = html.replace(/<!--S-->.*?<!--\/S-->/, process.env.HEADLINE.split("|")[0].trim());
}

// Keep hyphenated terms ("Long-Form", "post-performance") on one line: when they wrap at the hyphen,
// ATS text extraction glues the halves together ("LongForm") and the keyword no longer matches.
html = keepHyphenatedWordsTogether(html);

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setContent(html, { waitUntil: "load" });
await page.evaluate(() => document.fonts.ready);
await page.pdf({ path: out, format: "A4", printBackground: true, preferCSSPageSize: true });
await browser.close();
console.log(`Wrote ${out}`);

async function inlineFonts(source) {
  const urls = [...new Set([...source.matchAll(/url\((fonts\/[\w.-]+\.woff2)\)/g)].map((m) => m[1]))];
  for (const url of urls) {
    const data = (await readFile(here(`./${url}`))).toString("base64");
    source = source.replaceAll(`url(${url})`, `url(data:font/woff2;base64,${data})`);
  }
  return source;
}

function keepHyphenatedWordsTogether(source) {
  const [head, body] = source.split("<body>");
  const wrapped = body.replace(/>([^<]+)</g, (_, text) =>
    `>${text.replace(/[\p{L}\d]+(?:-[\p{L}\d]+)+/gu, (word) => `<span style="white-space:nowrap">${word}</span>`)}<`,
  );
  return `${head}<body>${wrapped}`;
}
