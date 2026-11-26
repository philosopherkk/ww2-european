#!/usr/bin/env python3
"""Fresh over-length report against the reading-level caps."""
import json, re, sys, os, time

CAPS = {"primary": 45, "secondary": 97, "university": 143}
W = re.compile(r"[A-Za-zÀ-ž0-9’'\-]+")

def wc(s):
    return len(W.findall(s))

def walk(dump, tag):
    rows = []
    for e in dump["EVENTS"]:
        for lvl, parts in (e.get("levels") or {}).items():
            if lvl not in CAPS:
                continue
            for k in ("cause", "what", "consequence"):
                v = (parts or {}).get(k)
                if v and wc(v) > CAPS[lvl]:
                    rows.append((tag, e["id"], f"levels.{lvl}.{k}", wc(v), CAPS[lvl]))
    for f in dump["FIGURES"]:
        for lvl in CAPS:
            v = (f.get("bio") or {}).get(lvl)
            if v and wc(v) > CAPS[lvl]:
                rows.append((tag, f["id"], f"bio.{lvl}", wc(v), CAPS[lvl]))
    return rows

# Which checkout's prose the caps belong to. Committed copy: this gate lives in <repo>/scripts/audit,
# so its own site is that repo and the other site is its sibling. In the working audit directory it
# falls back to the two sibling checkouts. REPO_DIR=<tree> overrides, which is how a worktree gets
# measured instead of the main tree.
_HERE = os.path.dirname(os.path.abspath(__file__))


def _own_site():
    """ww1 / ww2 when this file sits in a checkout's scripts/audit, else None."""
    parts = _HERE.split(os.sep)
    if len(parts) >= 3 and parts[-1] == "audit" and parts[-2] == "scripts" and parts[-3] in ("WW1-European", "ww2-european"):
        return "ww1" if parts[-3] == "WW1-European" else "ww2"
    return None


def repo_for(site):
    """The checkout whose prose this run measures. REPO_DIR applies only to the site it was named
    for (REPO_SITE=<ww1|ww2>, defaulting to the site being gated), so gating a ww2 worktree cannot
    quietly re-measure ww1's caps off the same tree."""
    # REPO_DIR_WW1 / REPO_DIR_WW2 name a tree per site, which is what a worktree PAIR needs: my content
    # branches live in wt-ww2-uslines and wt-ww1-uslines at the same time, and a single REPO_DIR can
    # only redirect one of them, so gating the pair used to print a wrong-tree refusal.
    per_site = os.environ.get("REPO_DIR_" + site.upper())
    if per_site:
        return os.path.abspath(per_site)
    if os.environ.get("REPO_DIR") and os.environ.get("REPO_SITE", site) == site:
        return os.path.abspath(os.environ["REPO_DIR"])
    name = "WW1-European" if site == "ww1" else "ww2-european"
    own = _own_site()
    if own:                        # committed copy: own site is this checkout, the other is its sibling
        here = os.path.dirname(os.path.dirname(_HERE))
        return here if site == own else os.path.join(os.path.dirname(here), name)
    return os.path.join("/Users/ka-kinpoon/Project/WW2", name)


REPOS = {s: repo_for(s) for s in ("ww1", "ww2")}


def sites_to_measure():
    """Which sites this run gates. BOTH unless ONLY=<site> narrows it for a worktree run — and a
    narrowed run must SAY so out loud, because "0 fields over the cap" for one site is not a verdict
    on the other. This gate has already been burned once by printing a confident nothing.
    """
    only = (os.environ.get("ONLY") or "").strip().lower()
    if not only:
        return ("ww1", "ww2")
    if only not in ("ww1", "ww2"):
        raise SystemExit(f"FAIL: ONLY={only!r} is neither ww1 nor ww2 — refusing to guess the site")
    other = "ww1" if only == "ww2" else "ww2"
    print(f"NOTE: ONLY={only} — {other} is NOT measured by this run and has no verdict here.")
    return (only,)


def newest_data_file(site):
    """The mtime of the repo's newest prose file. A dump older than that is a dump of a tree nobody
    is looking at, and a green verdict from it is a false one."""
    lib = os.path.join(REPOS[site], "lib", "data")
    newest, name = 0, ""
    for root, dirs, files in os.walk(lib):
        dirs[:] = [d for d in dirs if d not in ("portraits",)]
        for f in files:
            if f.endswith((".ts", ".json")):
                m = os.path.getmtime(os.path.join(root, f))
                if m > newest:
                    newest, name = m, os.path.join(root, f)
    return newest, name


def dump_path(site):
    """DUMP_DIR wins, then the copy beside this gate, then the copy committed in the checkout whose
    prose we measure, then the current directory. The committed copy used to open only CWD, so
    `python3 scripts/audit/lengths.py` from a repo root refused even with a dump beside the gate."""
    cands = []
    if os.environ.get("DUMP_DIR"):
        cands.append(os.path.join(os.environ["DUMP_DIR"], f"{site}.json"))
    cands.append(os.path.join(_HERE, f"{site}.json"))
    cands.append(os.path.join(REPOS[site], "scripts", "audit", f"{site}.json"))
    cands.append(os.path.join(os.getcwd(), f"{site}.json"))
    for c in cands:
        if os.path.exists(c):
            return os.path.abspath(c), cands
    return None, cands


def check(site, quiet=False):
    path, tried = dump_path(site)
    if not path:
        # An `if exists` filter here once made this gate print "0 fields over the cap" for BOTH
        # sites from an empty directory and exit 0. A cap gate with nothing to read has told us
        # nothing, so it must fail loudly rather than agreeably.
        print(f"FAIL {site}: no dump to read — looked for {', '.join(tried)}\n"
              f"  node scripts/audit/dump.mjs {site} --repo=<tree> --out=scripts/audit/{site}.json")
        return None
    dump = json.load(open(path, encoding="utf-8"))
    # A dump of tree A measured against tree B's caps and mtimes is not a verdict: dump.mjs records
    # the tree it bundled, so the two are compared and a mismatch is a refusal.
    src = dump.get("__SOURCE_REPO")
    if src and os.path.abspath(src) != os.path.abspath(REPOS[site]):
        print(f"FAIL {site}: the dump says it was built from {src} but the caps and prose tree are "
              f"{REPOS[site]} — different trees, no verdict")
        return None
    m_repo, f_repo = newest_data_file(site)
    m_dump = os.path.getmtime(path)
    if m_dump < m_repo and os.environ.get("ALLOW_STALE") != "1":
        print(f"FAIL {site}: the dump is older than {os.path.relpath(f_repo, REPOS[site])} — "
              f"it gates a tree that no longer exists. Re-dump, or ALLOW_STALE=1 with a reason.")
        return None
    rows = sorted(walk(dump, site), key=lambda r: -(r[3] - r[4]))
    if not quiet:
        age = int(time.time() - m_dump)
        print(f"\n===== {site}: {len(rows)} fields over the cap "
              f"({len(dump['EVENTS'])} events, {len(dump['FIGURES'])} figures read) =====")
        print(f"  measured {os.path.abspath(path)}, {age // 60} min old, against the caps; "
              f"prose tree {REPOS[site]}")
        for r in rows:
            print(f"  {r[2]:<28} {r[1]:<38} {r[3]:>4}w / cap {r[4]}")
        from collections import Counter
        print("  by level:", dict(Counter(r[2].split('.')[1] for r in rows)))
    return rows


def selftest():
    """Planted failures. Every case names its dump with DUMP_DIR, because a dump lying beside the gate
    otherwise decides the outcome — which is precisely the bug the gate-relative lookup introduced and
    the reason the first run of this self-test failed on its own fixture. An over-cap field must be
    reported; a missing, a stale and a wrong-tree dump must each be a refusal. Printing 0 for a
    directory with nothing to read is what an `if exists` filter used to do here."""
    import shutil, subprocess, tempfile
    bad = 0
    long60 = " ".join(str(n) for n in range(1, 61))  # 60 words against the 45-word primary cap

    def fixture(d, site, source_repo):
        json.dump({"__SOURCE_REPO": source_repo,
                   "EVENTS": [{"id": "planted_over", "levels": {
                       "primary": {"cause": long60, "what": "short", "consequence": "short"}}}],
                   "FIGURES": [{"id": "f", "bio": {}}]},
                  open(os.path.join(d, f"{site}.json"), "w"))

    def expect(why, site, want):
        rows = check(site, quiet=True)
        ok = (bool(rows) and rows[0][2] == "levels.primary.cause" and rows[0][3] == 60) if want else rows is None
        print(f"  {'ok  ' if ok else 'FAIL'} {why}")
        return 0 if ok else 1

    for site in ("ww1", "ww2"):
        tmp = tempfile.mkdtemp()
        fixture(tmp, site, REPOS[site])
        os.environ["DUMP_DIR"] = tmp
        bad += expect("planted 60-word primary cause is reported against the 45 cap", site, True)

        other = tempfile.mkdtemp()          # a dump of a different checkout
        fixture(other, site, "/Users/ka-kinpoon/Project/WW2/some-other-checkout")
        os.environ["DUMP_DIR"] = other
        bad += expect("a dump built from a different checkout is REFUSED", site, False)

        stale = tempfile.mkdtemp()          # older than the repo's newest prose file
        fixture(stale, site, REPOS[site])
        os.utime(os.path.join(stale, f"{site}.json"), (1, 1))
        os.environ["DUMP_DIR"] = stale
        bad += expect("a dump older than the repo's prose is REFUSED", site, False)

        for d in (tmp, other, stale):
            shutil.rmtree(d, ignore_errors=True)
    os.environ.pop("DUMP_DIR", None)

    # And the case the committed copy got wrong: a gate with no dump anywhere near it must die, naming
    # every path it tried, instead of agreeing with an empty directory.
    bare = tempfile.mkdtemp()
    shutil.copy(os.path.abspath(__file__), os.path.join(bare, "lengths.py"))
    # SELFTEST must be cleared or the child runs its own self-test, which spawns another child: the
    # fork-bomb that once read as a slow gate. (Same trap as linkcheck.py's child.)
    env = {k: v for k, v in os.environ.items() if k not in ("DUMP_DIR", "SELFTEST")}
    # REPO_DIR/REPO_SITE cannot redirect both sites at once by design, so the child is given a
    # parent directory with no sibling checkout to fall back to: REPOS then points at trees with no
    # lib/data and no scripts/audit dumps, which is the "no dump anywhere" situation under test.
    lonely = tempfile.mkdtemp()
    os.makedirs(os.path.join(lonely, "lib", "data"))     # a tree with prose but no dumps
    shutil.copytree(bare, os.path.join(lonely, "audit"), dirs_exist_ok=False)
    # REPO_DIR redirects one site only, by design, so this tests ww1's refusal. The other site is left
    # alone and reports normally — a refusal for one site still has to fail the whole run.
    env["REPO_DIR"] = lonely
    env["REPO_SITE"] = "ww1"
    p = subprocess.run([sys.executable, os.path.join(lonely, "audit", "lengths.py")], cwd=lonely,
                       capture_output=True, text=True, env=env, timeout=180)
    ok = p.returncode == 1 and "ww1: no dump to read" in p.stdout
    print(f"  {'ok  ' if ok else 'FAIL'} a gate with no dump anywhere exits 1, naming what it tried"
          + ('' if ok else f' (rc={p.returncode}, out={p.stdout.strip()[:110]})'))
    bad += 0 if ok else 1
    shutil.rmtree(bare, ignore_errors=True)
    shutil.rmtree(lonely, ignore_errors=True)
    # ONLY must narrow, refuse nonsense, and never imply the other site was measured.
    saved = {k: os.environ.get(k) for k in ("ONLY", "REPO_DIR_WW2")}
    os.environ["ONLY"] = "ww2"
    narrowed = sites_to_measure() == ("ww2",)
    os.environ["ONLY"] = "everything"
    try:
        sites_to_measure()
        guessed = True
    except SystemExit:
        guessed = False
    os.environ["REPO_DIR_WW2"] = "/Users/ka-kinpoon/Project/WW2/wt-some-ww2-worktree"
    per_site_ok = (repo_for("ww2").endswith("wt-some-ww2-worktree")
                   and repo_for("ww1").endswith("WW1-European"))
    for k, v in saved.items():
        os.environ.pop(k, None)
        if v is not None:
            os.environ[k] = v
    for label, ok in (("ONLY=ww2 narrows to one site and says the other has no verdict", narrowed),
                      ("ONLY=<nonsense> is refused rather than guessed", not guessed),
                      ("REPO_DIR_WW2 redirects ww2 only, ww1 stays the checkout", per_site_ok)):
        print(f"  {'ok  ' if ok else 'FAIL'} {label}")
        bad += 0 if ok else 1
    print("SELFTEST passed: an over-cap field is caught; a missing, stale or wrong-tree dump is a refusal"
          if not bad else f"SELFTEST FAILED ({bad})")
    return 1 if bad else 0


tot, missing = 0, 0
if os.environ.get("SELFTEST") == "1":
    sys.exit(selftest())
for tag in sites_to_measure():
    rows = check(tag)
    if rows is None:
        missing += 1
        continue
    tot += len(rows)
if missing:
    print(f"\nFAILED: {missing} site(s) could not be measured — no verdict given")
    sys.exit(1)
print(f"\ntotal over-length fields across both sites: {tot}")
