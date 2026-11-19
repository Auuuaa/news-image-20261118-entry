# The World in One Image — Wednesday 18 November 2026

An entry for the make.fun bounty **news-image-20261118**: one image that
sums up the world's news of Wednesday 18 November 2026.

## What the image shows

A newspaper-style front page, dated **Wednesday 18 November 2026**, with
the six stories that defined the day:

1. **Gulf war escalates** — Iran strikes Kuwait & Bahrain after the US
   strike on Qeshm Island.
2. **Kerch Bridge hit** — a Ukrainian attack partly collapses the bridge
   to Crimea, the second day of strikes on it.
3. **Xi meets Putin** — the two leaders meet in Shenzhen at APEC, with a
   Trump summit set for Thursday.
4. **Quad meets in Manila** — the first leaders' summit in over two
   years; Trump announces a Philippines trade deal.
5. **Senate flips** — Mary Peltola wins Alaska; Democrats take the US
   Senate 56–44.
6. **Ebola surges** — DR Congo passes 11,000 cases, most victims
   children under five.

The footer adds: the US loses measles-free status after 26 years, Israel
elects Kahana speaker, and Nvidia posts a $115.8B quarter.

Stories were checked against multiple news reports published on
18 November 2026. The image is original artwork drawn in code — no
photograph or copied artwork is used.

## How it works

`main.ts` (Node 22, standard library only) copies `entry.png` to
`/output/entry.png`. The image itself was rendered by the build script
from the story list above, as a 1024×1024 PNG under 1 MiB.

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see `LICENSE`.
