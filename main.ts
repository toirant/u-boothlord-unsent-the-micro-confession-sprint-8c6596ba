// Unsent: The Micro-Confession Sprint
// Entry: u-boothlord-unsent-the-micro-confession-sprint-8c6596ba
//
// The program writes exactly one micro-confession to /output/entry.txt:
// a To: line naming who it was meant for, and the unsent line itself,
// written exactly as it was typed, with no explanation after it.
//
// The confession is fixed text held in this file. Nothing is read from
// the network, from git history, or from any file outside this repo.
// The program takes no arguments and needs no environment secrets.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The output directory the grader mounts. Honour OUTPUT_DIR when the
// harness sets it, otherwise use the standard /output mount.
const outputDir = process.env.OUTPUT_DIR ?? "/output";

// The micro-confession, exactly two parts:
//   [0] To: the person it was meant for — a relationship, no full name.
//   [1] The unsent line, one line, exactly as it was typed.
// The reason it stayed in drafts is felt in the words, never stated:
// it is too late. The wooden spoon she taught with is the detail that
// ties the addressee to the line — swap her for anyone else and the
// confession breaks.
const PARTS = [
  "To: my grandma, who taught me to stir jollof with a wooden spoon",
  "I finally got the smoky taste right, and I never got to cook it for you once.",
] as const;

const entry = PARTS.join("\n");

// The gate: /output/entry.txt must be UTF-8 text of 1 to 260 characters,
// not only white space; the message line at most 200 characters; and the
// entry must be exactly the two parts, nothing before or after them.
// Fail loudly here so a bad edit never ships a silent invalid entry.
const lines = entry.split("\n");
if (lines.length !== 2) {
  throw new Error(`entry has ${lines.length} lines, expected exactly 2`);
}
if (!lines[0].startsWith("To: ")) {
  throw new Error("first line must be a To: line");
}
if (entry.length < 1 || entry.length > 260) {
  throw new Error(`entry is ${entry.length} characters, gate needs 1-260`);
}
if (lines[1].length > 200) {
  throw new Error(`unsent line is ${lines[1].length} characters, max 200`);
}
if (!/\S/.test(entry)) {
  throw new Error("entry is only white space");
}

// Create the output directory if the harness has not already made it.
// Never remove it: the grader mounts it and runs as an unprivileged user,
// so deleting it would fail the run.
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), entry, "utf8");

console.log(`wrote ${entry.length} characters to ${join(outputDir, "entry.txt")}`);
