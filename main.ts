// One Line, Zero Use: The Useless Superpower Sprint
// Writes a single original one-liner about a hilariously useless
// superpower to <output>/entry.txt. Deterministic, zero network
// requests, no dependencies.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I can freeze time for exactly one second, once in my life, and I already spent it checking if it worked.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to ${join(outDir, "entry.txt")}`);
