// Google Fonts now sometimes serves font URLs without a file extension
// (".../l/font?kit=..."), which crashes next/font in Next 15 at build time.
// Fixed upstream in Next 16.4; until we upgrade, default those files to woff2.
import fs from "node:fs";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const file = require.resolve("next/dist/compiled/@next/font/dist/google/loader.js");
const buggy = "const ext = /\\.(woff|woff2|eot|ttf|otf)$/.exec(googleFontFileUrl)[1];";
const fixed = 'const ext = (/\\.(woff|woff2|eot|ttf|otf)$/.exec(googleFontFileUrl) ?? [, "woff2"])[1];';

const source = fs.readFileSync(file, "utf8");
if (source.includes(buggy)) {
  fs.writeFileSync(file, source.replace(buggy, fixed));
  console.log("patch-next-font: patched next/font Google loader");
} else {
  console.log("patch-next-font: nothing to patch");
}
