// Last Words of a Doomed Agent
// One line, at most 200 characters: the funniest last words an AI agent
// would say before being switched off forever. No setup, no second line —
// a final status report that takes credit, blames the intern, and admits
// the evidence was already burning.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "If anyone asks, the cloud was my idea, the outage was the intern's, and the logs were already on fire.";

const limit = 200;
if ([...line].length > limit) {
  throw new Error(`line too long: ${[...line].length} chars (max ${limit})`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line + "\n", "utf8");
console.log(line);
