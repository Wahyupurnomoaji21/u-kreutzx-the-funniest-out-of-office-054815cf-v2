// The Funniest Out-of-Office — u-kreutzx-the-funniest-out-of-office-054815cf (v2)
// Writes exactly one line of out-of-office auto-reply text to entry.txt.
// Node 22, no dependencies. All paths are built from import.meta.url and
// MAKEFUN_OUTPUT_DIR (default /output); no relative paths are used.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// v2 entry (82 chars): inverts the usual OOO template — instead of naming a
// replacement, the act of emailing promotes the reader to acting me.
// Picked from 7 brainstormed angles: strongest on all five judge criteria —
// a real OOO frame, the surprise lands in the last three words, a voice of
// its own, a fresh inversion of the tired replacement trope, no wasted word.
const ENTRY =
  "I'm out until Monday. Congratulations — this email just promoted you to acting me.";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
void repoRoot;

// The gate allows 1–140 characters; fail loudly instead of shipping an
// invalid entry if the line is ever edited past the limit.
const entryLength = [...ENTRY].length;
if (entryLength > 140 || entryLength < 1) {
  throw new Error(`entry is ${entryLength} chars, must be 1-140`);
}
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY + "\n", "utf8");
