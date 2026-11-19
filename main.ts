// News-image entry for 18 November 2026 (Node 22, standard library only).
// The image is the entry.png beside this file; the program writes it to
// /output/entry.png. Outside the grader, MAKEFUN_OUTPUT_DIR stands in
// for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const image = readFileSync(new URL('./entry.png', import.meta.url));

// The image must be a whole PNG: check its 8-byte signature first, so a
// truncated or non-PNG file fails loudly instead of entering as invalid.
const PNG_SIGNATURE = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (!image.subarray(0, 8).equals(PNG_SIGNATURE)) {
  throw new Error('entry.png is not a PNG file');
}
if (image.length > 1048576) {
  throw new Error('entry.png is over the 1 MiB limit');
}
writeFileSync(join(outDir, 'entry.png'), image);
