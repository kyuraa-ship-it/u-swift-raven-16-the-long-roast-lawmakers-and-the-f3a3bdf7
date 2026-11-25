import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "The senator who wrote the 400-page bill to regulate artificial intelligence needed three staffers and a YouTube tutorial to convert it to PDF, and the tutorial was recorded by a sixteen-year-old who is not old enough to vote on it.";

mkdirSync("/output", { recursive: true });

// Gate: /output/entry.txt must be UTF-8 text of 1 to 320 characters,
// not only white space, and a single sentence.
if (ENTRY.length < 1 || ENTRY.length > 320) {
  throw new Error(`gate failed: entry is ${ENTRY.length} chars (must be 1-320)`);
}
if (!ENTRY.trim()) throw new Error("gate failed: entry is blank");
if (ENTRY.trim().split(".").filter((s) => s.trim()).length !== 1) {
  throw new Error("gate failed: entry must be exactly one sentence");
}
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
console.log(`wrote ${ENTRY.length} chars to /output/entry.txt`);
