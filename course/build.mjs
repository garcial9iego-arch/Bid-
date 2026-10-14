// Builds the course into single self-contained HTML files.
//   dist/course.html  - page body for publishing as a claude.ai artifact (no <html>/<head> wrapper)
//   dist/index.html   - standalone page you can open in any browser
// Usage: node course/build.mjs
import { readFileSync, writeFileSync, mkdirSync, readdirSync, cpSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));
const src = join(root, "src");
const dist = join(root, "dist");

// MODULES=1,2,3 builds only those modules (handy while others are still being written).
const only = process.env.MODULES ? new Set(process.env.MODULES.split(",").map(Number)) : null;
const moduleFiles = readdirSync(src).filter(f => /^m\d+\.js$/.test(f) && (!only || only.has(parseInt(f.slice(1))))).sort((a, b) => parseInt(a.slice(1)) - parseInt(b.slice(1)));
const extras = ["plans.js", "realbids.js", "lab.js"].map(f => readFileSync(join(src, f), "utf8"));
const content = [readFileSync(join(src, "outline.js"), "utf8"), ...moduleFiles.map(f => readFileSync(join(src, f), "utf8")), ...extras].join("\n");
const shell = readFileSync(join(src, "shell.html"), "utf8");
if (!shell.includes("/*__CONTENT__*/")) throw new Error("shell.html is missing the /*__CONTENT__*/ placeholder");
const page = shell.replace("/*__CONTENT__*/", () => content);

mkdirSync(dist, { recursive: true });
writeFileSync(join(dist, "course.html"), page);
writeFileSync(join(dist, "index.html"),
  '<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">\n</head>\n<body style="margin:0">\n' + page + "\n</body>\n</html>\n");
if (existsSync(join(src, "img"))) cpSync(join(src, "img"), join(dist, "img"), { recursive: true });
console.log("Built " + moduleFiles.length + " module(s) → dist/course.html, dist/index.html");
