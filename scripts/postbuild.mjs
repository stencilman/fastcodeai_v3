/**
 * Post-build script: Converts render-blocking CSS <link> tags to the
 * non-blocking <link rel="preload"> pattern in pre-rendered HTML files.
 *
 * This runs after `next build` and modifies .next/server/app/*.html files.
 * Combined with the CriticalCSS component (which inlines all CSS), this
 * ensures zero render-blocking CSS requests.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const APP_DIR = path.join(ROOT, ".next", "server", "app");
const CSS_DIR = path.join(ROOT, ".next", "static", "css");

// Read all built CSS to inline
function getAllCSS() {
  if (!fs.existsSync(CSS_DIR)) return "";
  return fs
    .readdirSync(CSS_DIR)
    .filter((f) => f.endsWith(".css"))
    .map((f) => fs.readFileSync(path.join(CSS_DIR, f), "utf-8"))
    .join("\n");
}

// Recursively find all .html files
function findHTML(dir) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) results.push(...findHTML(full));
    else if (entry.name.endsWith(".html")) results.push(full);
  }
  return results;
}

const allCSS = getAllCSS();
const htmlFiles = fs.existsSync(APP_DIR) ? findHTML(APP_DIR) : [];

// Regex matches Next.js CSS link tags in the HTML (not inside RSC flight data)
const cssLinkRe =
  /<link rel="stylesheet" href="(\/_next\/static\/css\/[^"]+)" data-precedence="next"\/>/g;

let processed = 0;

for (const file of htmlFiles) {
  let html = fs.readFileSync(file, "utf-8");
  const original = html;

  // Collect hrefs for noscript fallback
  const hrefs = [];

  // Replace render-blocking <link rel="stylesheet"> with <link rel="preload">
  html = html.replace(cssLinkRe, (_match, href) => {
    hrefs.push(href);
    return `<link rel="preload" href="${href}" as="style" onload="this.onload=null;this.rel='stylesheet'"/>`;
  });

  if (html !== original && hrefs.length > 0) {
    // Build noscript fallback for no-JS browsers
    const noscript =
      "<noscript>" +
      hrefs.map((h) => `<link rel="stylesheet" href="${h}"/>`).join("") +
      "</noscript>";

    // Insert inline <style> + <noscript> before the first <script in <head>
    const firstScript = html.indexOf("<script");
    if (firstScript !== -1) {
      const inlineBlock = `<style>${allCSS}</style>${noscript}`;
      html = html.slice(0, firstScript) + inlineBlock + html.slice(firstScript);
    }

    fs.writeFileSync(file, html);
    processed++;
  }
}

console.log(
  `✓ CSS render-blocking fix: processed ${processed}/${htmlFiles.length} HTML files`
);
