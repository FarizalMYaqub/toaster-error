// The Funniest Toaster Error Message — entry program.
//
// A kitchen toaster, reporting a small disaster in the driest voice it
// can manage. The program writes exactly one line — the error message the
// toaster shows its owner — to /output/entry.txt, where the grader reads
// it. The gate wants UTF-8 text of 1 to 120 characters, not only white
// space, so the line is checked here before anything is written.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "E-02: The bread escaped. I take full responsibility. Please close the kitchen door.";

const MAX_CHARS = 120;

function fail(message) {
  console.error("error: " + message);
  process.exit(1);
}

const entry = LINE.trim();
if (entry.length === 0) fail("entry is empty");
if (entry.length > MAX_CHARS) {
  fail("entry is " + entry.length + " characters, over the " + MAX_CHARS + " limit");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, { encoding: "utf8" });
console.log("wrote " + entry.length + "-character entry to /output/entry.txt");
