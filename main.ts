import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Elsewhere: clear skies, 22 degrees, and the traffic lights have all agreed to stay green until every commuter is home.";

// Gate guard: the sealed scorer wants 1-140 characters, one line, not
// whitespace-only. Count code points, the way the scorer counts UTF-8 text.
const chars = [...LINE].length;
if (chars < 1 || chars > 140 || LINE.includes("\n") || LINE.trim().length === 0) {
  throw new Error(`entry violates the 1-140 character gate (${chars} chars)`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE);
