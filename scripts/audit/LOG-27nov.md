# 27 Nov 2026 — the gate set gets a home, and the number audit starts

Durable notes for the next session. (No memory tool is available in this session, so the facts that
would have gone into the project memory block are written here and committed into both repos.)

## The gates are in version control now

`scripts/audit/` in each checkout holds the working gate set, so a verdict can be re-run by someone
who has the repo and nothing else. The temp directory is no longer the only copy — which matters,
because ten gate scripts vanished from it between 25 and 26 Nov with no copy anywhere.

- WW2: `b10f32c` (add), `73ede2c` + `c89a745` (repairs). WW1: `0d8be16` + `98f20b5`.
- **None of these are pushed.** They are local on top of `8c3032c` / `583671f`, and the branches
  below must rebase onto whatever the other writer lands first.
- Both commits pass the real `next build` with **rc=0**, proven in a throw-away worktree of each
  (`audit/out/build-ww2-gates.log`, `build-ww1-gates.log`). Turbopack needs a *real* `node_modules`:
  a symlink fails with "Could not find the Next.js package". Use an APFS clone — `cp -cR` is seconds.

## Four defects fixed today, all of them "a green verdict that meant nothing"

1. **`lengths.py` defaulted to one site.** A bare run printed one green verdict, exit 0, and never
   opened the other site's dump, so any "0 over on both" before this was a one-site verdict. It now
   measures both by default, refuses when a dump is absent (a self-test that skipped missing dumps
   used to print "0 over" from an empty directory), and resolves its own dump path.
2. **`linkcheck.py` had no tree parameter** and read a dump from the *current directory*. It could
   only ever report on one checkout, and would happily gate yesterday's file. Now `REPO=`, gate-
   relative dump, refuses to judge two dumps that name different trees.
3. **`stanceturns.mjs` computed its verdict value and never read it** — `bad.length` was written into
   a variable and dropped, so the gate printed a pass for any input. Fixed, and its report path threw
   only inside a checkout, which is why nobody saw it.
4. **`idcheck.py` required both sites' payloads and both dumps**, so a WW2-only proposal died on a
   missing WW1 file. It now reads what exists, prints which site it skipped, and still refuses when
   there is no payload at all. Its `--selftest-only` carries its own fixture, because it used to read
   a file that exists in exactly one job directory — and `--selftest-only` is the command every
   worker is told to run first.

Method that found all four: **plant the failure and watch for the red line.** Two more came from the
same attack on my own tools — a gate that exits 0 with problems, and a `grep` of a gate's output that
hid a traceback behind a correct-looking collision line. **Read the exit code, not the last line.**

`mirror_gates.py` resolves the canonical copy **first** now. It was mirroring from a stale copy left
in one worker's directory over the fixed one, and reporting "no changes" — which is how two files
with the same name and different behaviour get shipped. It prints the path each file came from.

## The number audit: what is provable, and what is not

`numbercheck.py` does not fetch anything. It proves a figure by matching it against the quotations
**stored in the payload's own `sources` rows** — and a shipped `SOURCES` row carries a citation, a
publisher and one note, **no quotation**. So the site contains nothing to match its own prose
against; coverage is only answerable from the batch payloads a job left behind.

Scanning the 379 payload and quote files on this machine against the shipped lines, and intersecting
with the 27 Nov line-prose census:

| site | lines | with a quotation on file | quantities in line prose | in a line with no quotation | sentences to cite |
|---|---:|---:|---:|---:|---:|
| WW2 | 114 | 26 | 583 | **489** | 235 |
| WW1 | 58 | 9 | 146 | **117** | 71 |

**606 figures in 306 sentences have nothing on disk that could prove them.** This is not a claim that
they are wrong — it is a statement about re-provability. Full write-up, caveats and the three options
with their costs: `audit/out/line-figures-backlog-27nov.md`. The census itself (1,549 figures
classified `date` / `quantity` / `identifier` / `other`) is `audit/line-figures/`.

## The content map, measured rather than guessed

- **WW1 is fully drawn**: every line-free month is a diplomacy month (only 1914-07, all cards, no
  movement). The naval gap I had briefed in was closed on 25 Nov by another writer's 2 `sea` + 1
  `air` lines. Do not re-brief it.
- **WW2's real gap is 1939-40.** Of the ten months with ≥2 cards and no line, five are policy months
  (a marching line for a cabinet crisis would be a lie) and five are movement: Bohemia-Moravia and
  Memel (1939-03), Italy–Albania (1939-04), Mers-el-Kébir (1940-07), and the **Greco-Italian war
  1940-10..1941-03**, which has two cards, eight months of movement, nothing drawn, and a shipped
  `marita` line covering only Germany's April 1941 intervention — so a new line must hand over at
  6 April 1941, not overlap it. Brief: `audit/AGENT-BRIEF-axes-1939-40.md`.
- Gotcha: a month arithmetic of `m % 12 + 1` on a 1-based month is wrong by one month; the
  trustworthy form is `y, mm = divmod(m - 1, 12)`. Any month list computed before that fix in this
  session is mislabelled.
- Gotcha: the per-front "lines drawn here" token-overlap metric reports 112 of 114 lines for
  `politics`. It measures nothing; do not quote it.

## `apply_panel_copy.py`, and why a refusal was the right answer

The dry run against the us-lines worktrees refused: *"the text to replace occurs 0 times, not once"*.
That is the anchor guard doing its job — the panel copy is **already applied** in those worktrees
("two to seven" in WW2, "two to fifteen" in WW1), while the main trees still carry the stale "five to
eight". Re-run it against a fresh dump after the rebase: the range may have moved when the other
writer's lines land, and then the `expect` values must refuse until the sentence is re-drafted.
SELFTEST is 7 arms, all green.

## Branches waiting on the other writer (all unpushed, one commit each on the prod HEADs)

| worktree | branch | commit |
|---|---|---|
| `wt-ww2-ui` | `ui-fixes-26nov` | `4717fe3` |
| `wt-ww2-uslines` | `uslines-26nov` | `de524ac` |
| `wt-ww1-ui` | `ui-fixes-26nov-ww1` | `04e4a7f` |
| `wt-ww1-uslines` | `uslines-26nov-ww1` | `9fe22a2` |

Nothing to rebase yet — all four sit exactly on top of `8c3032c` / `583671f`. Expect the conflict in
`MapBrowser.tsx`: the 26 Nov pin-click fix (`.leaflet-control-attribution { pointer-events: none }`
plus the `PIN_ICONS` cache) exists **only** in the dirty main trees, not in either HEAD, so no
production control of that class can exist until it is committed.
