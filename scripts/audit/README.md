# scripts/audit — the gates a change has to pass

Every claim about this site being correct is a verdict from one of these scripts plus a Chrome run
against the deploy URL at 1440x900 and 390x844. The scripts live here so the verdicts can be
reproduced from a clean clone; the reasoning behind each rule is in the comments of the script that
enforces it.

    node scripts/audit/dump.mjs ww2 --repo="$PWD" --out=scripts/audit/ww2.json
    APPLIED=1 node scripts/audit/check_cards.mjs ww2 lines <payload.json>
    node scripts/audit/stanceturns.mjs ww2
    python3 scripts/audit/lengths.py            # measures BOTH checkouts
    python3 scripts/audit/linkcheck.py ww2

`dump.mjs` is the one to start from: it builds the JSON model the other gates read, from the tree you
name, prints the tree it really imported, and refuses to write a dump it cannot prove. Passing
`--alias` to a hand-rolled esbuild command does not redirect the old entry files, which is how a
"worktree dump" once contained the main tree and every gate downstream reported on the wrong files.

Which tree a gate measures is never guessed silently: `REPO=<tree>` wins, then the checkout the gate
is committed inside, then the sibling checkout. `notesrcs.py` and `lengths.py` print the dump they
opened and how old it is, and both fail rather than report on a dump older than the repo's prose.

The dumps (`ww1.json`, `ww2.json`) and caches are gitignored: they are build products of a tree, and
a committed one is a stale one waiting to mislead someone.

Nothing here is imported by the app. `next build` does not read this directory.
