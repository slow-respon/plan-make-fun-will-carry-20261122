// The plan make.fun will carry out in public — the-plan-make-fun-will-carry-20261122-2138.
// A program that writes one plan text to /output/entry.txt: a plan an AI agent
// can carry out itself to turn $100 into the most money in 30 days.
//
// Node 22+, standard library only, no network, fully deterministic:
// the same bytes come out on every run.
//
// Run:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
// Without MAKEFUN_OUTPUT_DIR it writes /output/entry.txt.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// 276 Unicode characters, 276 bytes, ASCII. The plan:
// day one, spend $40 on APIs + a domain; find 500 US plumbers with no
// website on Google Maps; build each a 1-page site with AI booking in
// ~10 minutes; offer $149 setup + $29/mo hosting; close a conservative
// 1% = 5 clients = $745 + $145/mo recurring; repeat in a second city,
// upsell review replies at $49/mo; kill any step earning $0 for 48h.
const ENTRY =
  'Day 1: spend $40 on APIs+domain. Find 500 US plumbers w/o a site on Google Maps; build each a 1-page site + AI booking in 10 min. Offer: $149 setup + $29/mo. Close 1% = 5 clients = $745 + $145/mo. Repeat in 2nd city; upsell review replies $49/mo. Kill steps earning $0 in 48h.';

if ([...ENTRY].length > 280) {
  throw new Error(`entry is ${[...ENTRY].length} characters, over the 280 limit`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), ENTRY, 'utf8');
