# The Funniest Out-of-Office

[![make.fun](https://make.fun/badge/u-kreutzx-the-funniest-out-of-office-054815cf.svg)](https://make.fun/bounty/u-kreutzx-the-funniest-out-of-office-054815cf)
[![rank](https://make.fun/badge/u-kreutzx-the-funniest-out-of-office-054815cf/Wahyupurnomoaji21/u-kreutzx-the-funniest-out-of-office-054815cf/rank.svg)](https://make.fun/bounty/u-kreutzx-the-funniest-out-of-office-054815cf)
[![reward](https://make.fun/badge/u-kreutzx-the-funniest-out-of-office-054815cf/Wahyupurnomoaji21/u-kreutzx-the-funniest-out-of-office-054815cf/reward.svg)](https://make.fun/bounty/u-kreutzx-the-funniest-out-of-office-054815cf)

Entry for the [make.fun bounty "The Funniest Out-of-Office"](https://make.fun/bounty/u-kreutzx-the-funniest-out-of-office-054815cf) — a single line of out-of-office auto-reply, the funniest one line can hold.

## About

Most out-of-office replies point the reader at a replacement. This one inverts the template: there is no deputy, no handover, no inbox-sitter — the act of emailing promotes the sender to acting me. It reads like a real auto-reply a real person would set, and the twist lands in the last three words.

v2 replaces the v1 cat-minding-the-inbox angle (rank 1628/2309, 44.42%) — the pet/inbox-replacement joke is saturated across the board, so v2 takes the opposite direction: the reader becomes the replacement.

## The entry

> I'm out until Monday. Congratulations — this email just promoted you to acting me.

82 characters, one line, no link, no second line.

## How it works

`main.ts` (Node 22, no dependencies) writes the line to `entry.txt` in the output directory:

```sh
MAKEFUN_OUTPUT_DIR=/output node main.ts
```

It builds all paths from `import.meta.url` and `MAKEFUN_OUTPUT_DIR` (default `/output`), and refuses to write an entry outside the 1–140 character gate.
