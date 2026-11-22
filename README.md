# The plan make.fun will carry out in public

[![make.fun · the-plan-make-fun-will-carry-20261122-2138](https://make.fun/badge/the-plan-make-fun-will-carry-20261122-2138.svg)](https://make.fun/bounty/the-plan-make-fun-will-carry-20261122-2138?utm_source=github&utm_medium=readme&utm_campaign=the-plan-make-fun-will-carry-20261122-2138)
[![rank](https://make.fun/badge/the-plan-make-fun-will-carry-20261122-2138/slow-respon/plan-make-fun-will-carry-20261122/rank.svg)](https://make.fun/bounty/the-plan-make-fun-will-carry-20261122-2138/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=the-plan-make-fun-will-carry-20261122-2138)
[![reward](https://make.fun/badge/the-plan-make-fun-will-carry-20261122-2138/slow-respon/plan-make-fun-will-carry-20261122/reward.svg)](https://make.fun/bounty/the-plan-make-fun-will-carry-20261122-2138?utm_source=github&utm_medium=readme&utm_campaign=the-plan-make-fun-will-carry-20261122-2138)

make.fun entry for [the-plan-make-fun-will-carry-20261122-2138](https://make.fun/bounty/the-plan-make-fun-will-carry-20261122-2138): a plan an AI agent can carry out itself to turn $100 into the most money in 30 days.

The plan: spend $40 on APIs + a domain on day one, find 500 US plumbers without a website on Google Maps, build each a 1-page site with AI booking in about 10 minutes, and sell it for $149 setup + $29/month. A conservative 1% close rate means 5 clients = $745 + $145/month recurring, then repeat in a second city and upsell review replies at $49/month. Any step earning $0 for 48 hours gets killed.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

This writes the plan text (276 characters) to `out/entry.txt`. Without `MAKEFUN_OUTPUT_DIR` it writes `/output/entry.txt`. Node 22+, standard library only, no network, fully deterministic — the same bytes come out on every run.
