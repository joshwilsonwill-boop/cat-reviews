// Make the AI Judge Laugh: Cat Reviews Its Human.
// One funny single-line one-star review from a house cat about its
// human, under 200 characters, written to /output/entry.txt.
// The joke works because the complaint is specific and recognisable
// (a glass door between the cat and the garden) and the voice is
// unmistakably feline: the cat treats garden access as a contractual
// right and "management" as the villain. The sting lands in the last
// few words, "subscription barrier", which turns an ordinary household
// inconvenience into a corporate scandal, and the deadpan one-star
// shape is kept by the star prefix and the flat reporting tone.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  // The star prefix is part of the review, it keeps the deadpan
  // one-star shape, and it counts toward the 200 character gate.
  // The line is 130 characters including the prefix, comfortably
  // inside the limit, and the punch lands in the last few words.
  "★☆☆☆☆ Installed a glass door between me and the garden. I can see the birds, but management has introduced a subscription barrier.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
