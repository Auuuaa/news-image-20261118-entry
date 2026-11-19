// News-image entry for 18 November 2026 (Node 22, standard library only).
// The image is the entry.png beside this file; the program writes it to
// /output/entry.png. Outside the grader, MAKEFUN_OUTPUT_DIR stands in
// for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const image = readFileSync(new URL('./entry.png', import.meta.url));
writeFileSync(join(outDir, 'entry.png'), image);
