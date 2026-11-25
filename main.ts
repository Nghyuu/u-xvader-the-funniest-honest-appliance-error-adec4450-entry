import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

// The entry line is embedded in this file; there are no data files to
// resolve. (Any data file would be resolved via import.meta.url, never
// process.cwd().)
const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

const line =
  "Error: door seal failed. I have been cooling the entire kitchen since Tuesday, and the electricity bill proves it.";

mkdirSync(outDir, { recursive: true });
const entryPath = join(outDir, "entry.txt");
writeFileSync(entryPath, line + "\n", "utf8");
chmodSync(entryPath, 0o644);
