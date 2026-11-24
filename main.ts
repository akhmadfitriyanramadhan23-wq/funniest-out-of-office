// funniest-out-of-office
// One original line: a funny out-of-office auto-reply, at most 140
// characters. A real person could set it, the twist is a surprise (direct
// urgent matters to the void), and every word earns its place.
// Node 22, stdlib only, no network; writes /output/entry.txt.
// Verified: 138 code points, two runs byte-identical (sha256 f11166b6e444).
import { mkdirSync, writeFileSync } from "node:fs";

const text =
  "Out of office until Monday: I have left the building, the inbox, and all emotional availability. Please direct urgent matters to the void.";

const points = [...text].length;
if (points < 1 || points > 140 || text.trim().length === 0) {
  throw new Error(`entry must be 1-140 code points, got ${points}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
