"""Validate curated line->event links: line id, waypoint index, date within +/-3 days of the window.

    python3 linkcheck.py [ww1 ww2]          SELFTEST=1 python3 linkcheck.py

Two guards against a green run that measured nothing, both learned the hard way:

- The dump must be newer than the repo's data files. A stale dump silently gates a tree that no
  longer exists (this same trap made srclinks probe 105 of 106 rows once).
- The row regex must account for every `line:` in the source. When the lookup was over
  CAMPAIGN_LINES only, all 12 WW1 march links were reported as NO SUCH LINE — false problems. The
  mirror image is a formatting change the regex stops matching, which would print "0 links, 0
  problems" and pass.

A curated link may point at a WW1 march, which lives in its own MARCH_LINES array, so the line
lookup spans both arrays.
"""
import json, os, re, shutil, subprocess, sys, tempfile, time
from datetime import date, timedelta

# The curated links are read from a tree and the dump from a resolved path (see dump_path). If those
# two are different trees the verdict is a fiction, so the tree is a parameter: REPO=<tree> wins, then
# a copy committed inside a repo (<repo>/scripts/audit/) uses that repo, then the sibling checkout.
_HERE = os.path.dirname(os.path.abspath(__file__))
_SELF = _HERE[: -len('/scripts/audit')] if _HERE.endswith('/scripts/audit') else None
REPOS = {'ww1': '/Users/ka-kinpoon/Project/WW2/WW1-European', 'ww2': '/Users/ka-kinpoon/Project/WW2/ww2-european'}
if os.environ.get('REPO'):
    REPOS = {k: os.environ['REPO'] for k in REPOS}
elif _SELF:
    REPOS = {k: _SELF for k in REPOS}
# A trailing comma before the brace is allowed: a formatter that wraps a row or leaves `at: 0,`
# must not make ROW under-count while the `{ line:` guard still counts it (the self-test plants that).
ROW = re.compile(r"\{\s*line:\s*'([^']+)',\s*event:\s*'([^']+)',\s*at:\s*(\d+)\s*,?\s*\}")


def newest_data_file(site):
    lib = os.path.join(REPOS[site], 'lib', 'data')
    newest, name = 0, ''
    for root, dirs, files in os.walk(lib):
        dirs[:] = [d for d in dirs if d != 'portraits']
        for f in files:
            if f.endswith(('.ts', '.json')):
                m = os.path.getmtime(os.path.join(root, f))
                if m > newest:
                    newest, name = m, os.path.join(root, f)
    return newest, name


# The dump is resolved, never assumed. This gate used to open `f'{site}.json'`, which is relative to
# the CURRENT DIRECTORY, while its own failure message said "no dump beside the gate" — so running it
# from a repo root looked for ./ww2.json, and the one time a dump happened to sit in the CWD the gate
# measured that one whatever it was. DUMP=<file|dir> wins, then the copy beside this file, then CWD.
def dump_path(site):
    env = os.environ.get('DUMP')
    cands = []
    if env:
        cands.append(env if env.endswith('.json') else os.path.join(env, f'{site}.json'))
    cands += [os.path.join(_HERE, f'{site}.json'), f'{site}.json']
    for c in cands:
        if os.path.exists(c):
            return os.path.abspath(c), cands
    return None, cands


def run_site(site, quiet=False):
    """Returns the problem count, or None when the run could not measure anything (a refusal)."""
    path = f'{REPOS[site]}/lib/data/campaign-events.ts'
    src = open(path, encoding='utf-8').read()
    # Every ROW-shaped object in the file should be parsed by ROW. Counting `{ line:` rather than
    # any `line:` matters: the interface at the top of the file declares `line: string;`, and a
    # guard that counted it reported a false mismatch on both sites the first time it ran.
    rows = ROW.findall(src)
    mentions = len(re.findall(r"\{\s*line\s*:\s*['\"]", src))
    if len(rows) == 0 or len(rows) != mentions:
        if not quiet:
            print(f'== {site}: FAIL parsed {len(rows)} rows but the source mentions `line:` '
                  f'{mentions} times — the ROW regex no longer matches {path}')
        return None
    dump, tried = dump_path(site)
    if not dump:
        if not quiet:
            print(f'== {site}: FAIL no dump to read — looked for {", ".join(tried)}. '
                  f'Re-dump: node scripts/audit/dump.mjs {site} --repo={REPOS[site]} --out=<here>/{site}.json')
        return None
    m_dump = os.path.getmtime(dump)
    m_repo, f_repo = newest_data_file(site)
    if m_dump < m_repo and os.environ.get('ALLOW_STALE') != '1':
        if not quiet:
            print(f'== {site}: FAIL the dump is older than {os.path.relpath(f_repo, REPOS[site])} '
                  f'— re-dump, or ALLOW_STALE=1 with a reason')
        return None
    if not quiet:
        print(f'== {site}: read {dump} ({int(time.time() - m_dump) // 60} min old), links from '
              f'{os.path.relpath(path, REPOS[site])} in {REPOS[site]}')
    d = json.load(open(dump, encoding='utf-8'))
    # The last way this class of gate lied: links read from one checkout, events read from a dump of
    # another. dump.mjs records the tree it bundled, so the two are now compared and a mismatch dies.
    src_repo = d.get('__SOURCE_REPO')
    if src_repo and os.path.abspath(src_repo) != os.path.abspath(REPOS[site]):
        if not quiet:
            print(f'== {site}: FAIL the dump says it was built from {src_repo} but the links are read '
                  f'from {REPOS[site]} — these are different trees, no verdict')
        return None
    ev = {e['id']: e.get('date') for e in d['EVENTS']}
    lines = {c['id']: c for c in list(d['CAMPAIGN_LINES']) + list(d.get('MARCH_LINES') or [])}
    problems, per_line = 0, {}
    for line, event, at in rows:
        per_line.setdefault(line, 0)
        per_line[line] += 1
        if line not in lines:
            if not quiet:
                print(f'  NO SUCH LINE {line}')
            problems += 1
            continue
        if event not in ev:
            if not quiet:
                print(f'  NO SUCH EVENT {event} (line {line})')
            problems += 1
            continue
        c = lines[line]
        if int(at) >= len(c['path']):
            if not quiet:
                print(f'  AT OUT OF RANGE {line} at={at} path len={len(c["path"])}')
            problems += 1
        frm, to, dt = c.get('from'), c.get('to'), ev[event]
        if dt and frm and to:
            d0 = date.fromisoformat(dt)
            lo, hi = date.fromisoformat(frm) - timedelta(days=3), date.fromisoformat(to) + timedelta(days=3)
            if not (lo <= d0 <= hi):
                if not quiet:
                    print(f'  DATE OUT OF WINDOW {event} {dt} not in {frm}..{to} ({line})')
                problems += 1
    if not quiet:
        print(f'== {site}: {len(rows)} links over {len(per_line)} of {len(lines)} lines, {problems} problems')
    return problems


def selftest():
    """Planted: a source the regex cannot read must be REFUSED, not reported as zero problems; and a
    directory with no dump must be REFUSED. Both are the vacuous-pass class."""
    bad = 0
    good = "{ line: 'a', event: 'e1', at: 0 },\n{ line: 'b', event: 'e2', at: 2 };"
    reformatted = '{ line: "a", event: "e1", at: 0 },\n{ line: "b", event: "e2", at: 2 };'
    with_interface = "interface L {\n  line: string;\n  event: string;\n  at: number;\n}\n" + good
    multiline = "{\n    line: 'a',\n    event: 'e1',\n    at: 0,\n  },"
    for why, src, want_none in [('a source the regex still reads is parsed', good, False),
                                ('a source re-quoted to double quotes is REFUSED, not counted as 0', reformatted, True),
                                ("an `interface { line: string }` declaration is not mistaken for a row", with_interface, False),
                                ('a row split across lines is parsed, not refused', multiline, False)]:
        rows = ROW.findall(src)
        mentions = len(re.findall(r"\{\s*line\s*:\s*['\"]", src))
        trips = len(rows) == 0 or len(rows) != mentions
        ok = trips is want_none
        print(f"  {'ok  ' if ok else 'FAIL'} {why} (rows={len(rows)} mentions={mentions})")
        bad += 0 if ok else 1
    # The negative case has to isolate the gate too: with the lookup now gate-relative, the real
    # copy in a directory that has a dump legitimately finds it, so "run the real file from an empty
    # CWD" no longer tests absence. A copy with no dump anywhere near it does.
    empty = tempfile.mkdtemp()
    bare = tempfile.mkdtemp()
    shutil.copy(os.path.abspath(__file__), os.path.join(bare, 'linkcheck.py'))
    # A self-test that re-invokes THIS file must clear SELFTEST in the child's env: with SELFTEST=1
    # inherited, the child runs its own self-test, which spawns another child, forever. That deadlock
    # ate a 900-second background slot and looked exactly like a slow gate.
    child_env = {k: v for k, v in os.environ.items() if k != 'SELFTEST'}
    p = subprocess.run([sys.executable, os.path.join(bare, 'linkcheck.py'), 'ww1'], cwd=empty,
                       capture_output=True, text=True, env=child_env, timeout=60)
    ok = p.returncode == 1 and 'no dump to read' in p.stdout
    print(f"  {'ok  ' if ok else 'FAIL'} a gate with no dump anywhere exits 1 instead of reporting 0 problems"
          + ('' if ok else f' (rc={p.returncode}, out={p.stdout.strip()[:90]})'))
    bad += 0 if ok else 1
    empty = tempfile.mkdtemp()
    # The positive half of the same case: a dump beside a COPY of this gate must be found even when
    # the command is typed from somewhere else entirely. The CWD-relative lookup passed the negative
    # test below for the wrong reason and then failed in a repo root.
    gdir, other = tempfile.mkdtemp(), tempfile.mkdtemp()
    shutil.copy(os.path.abspath(__file__), os.path.join(gdir, 'linkcheck.py'))
    json.dump({'__SOURCE_REPO': REPOS['ww2'], 'EVENTS': [], 'CAMPAIGN_LINES': [], 'MARCH_LINES': [],
               'CAMPAIGN_EVENT_LINKS': []},
              open(os.path.join(gdir, 'ww2.json'), 'w'))
    p2 = subprocess.run([sys.executable, os.path.join(gdir, 'linkcheck.py'), 'ww2'], cwd=other,
                        capture_output=True, text=True, env=child_env, timeout=60)
    ok2 = 'read ' in p2.stdout and os.path.join(gdir, 'ww2.json') in p2.stdout
    print(f"  {'ok  ' if ok2 else 'FAIL'} a dump beside the gate is read from any working directory"
          + ('' if ok2 else f' (rc={p2.returncode}, out={p2.stdout.strip()[:110]})'))
    bad += 0 if ok2 else 1
    # And a dump built from a DIFFERENT tree than the links is refused, not compared.
    json.dump({'__SOURCE_REPO': '/somewhere/else', 'EVENTS': [], 'CAMPAIGN_LINES': [],
               'MARCH_LINES': []}, open(os.path.join(gdir, 'ww2.json'), 'w'))
    p3 = subprocess.run([sys.executable, os.path.join(gdir, 'linkcheck.py'), 'ww2'], cwd=other,
                        capture_output=True, text=True, env=child_env, timeout=60)
    ok3 = p3.returncode == 1 and 'different trees' in p3.stdout
    print(f"  {'ok  ' if ok3 else 'FAIL'} a dump from another checkout is refused"
          + ('' if ok3 else f' (rc={p3.returncode}, out={p3.stdout.strip()[:110]})'))
    bad += 0 if ok3 else 1
    shutil.rmtree(gdir, ignore_errors=True)
    shutil.rmtree(bare, ignore_errors=True)
    shutil.rmtree(other, ignore_errors=True)
    print('SELFTEST passed: an unreadable source, a missing dump, a dump beside the gate from any CWD, '
          'and a dump from another tree all behave'
          if not bad else f'SELFTEST FAILED ({bad})')
    return 1 if bad else 0


if __name__ == '__main__':
    if os.environ.get('SELFTEST') == '1':
        sys.exit(selftest())
    refused, total = 0, 0
    for site in sys.argv[1:] or ['ww1', 'ww2']:
        got = run_site(site)
        if got is None:
            refused += 1
            continue
        total += got
    if refused:
        print(f'\nFAILED: {refused} site(s) could not be measured — no verdict given')
        sys.exit(1)
    sys.exit(1 if total else 0)
