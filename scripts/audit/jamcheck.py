#!/usr/bin/env python3
"""jamcheck.py — find words that were welded together when a long value was re-emitted.

WHY. A long reader-facing value is written in a source file as several literals wrapped across lines,
and if they are concatenated with `+` and no trailing space, the value LOSES A SPACE AT EVERY WRAP:
"took the towns it had used" becomes "took the townsit had used", "fighting for the Klisura pass"
becomes "fighting for theKlisura pass". It renders like that on the map card. It also corrupts every
word-count cap, because `split()` counts "townsit" as one word — so a field can pass a cap while being
over it. This class has bitten this project more than once and no gate could see it.

TWO DETECTORS.
 1. lower-then-Capital fusion (`inDecember`, `MarchHitler`, `withforce`→rule 2) is unambiguous in the
    raw text: `[a-zà-ÿ]{2,}` immediately followed by `[A-Z][a-z]` with no space. Legitimate cases in
    this corpus are hyphenated ("anti-British", "Soviet-occupied"), so they are not fused.
 2. lower-then-lower fusion (`townsit`, `causethree`, `tothe`) cannot be found by pattern alone —
    "battlecruisers" must not fail. So a token is suspect only when the WHOLE token is unknown AND it
    splits into two known words. "Known" means /usr/share/dict/words plus the vocabulary of everything
    already shipped, so every place name and term the site already uses is known by definition-of-use.

    python3 jamcheck.py PAYLOAD.json [--dump ww2.json --dump ww1.json]
    SELFTEST=1 python3 jamcheck.py            # planted jams must fail, real text must pass
"""
import json
import os
import re
import sys
from collections import Counter

HERE = os.path.dirname(os.path.abspath(__file__))
WORDLIST = "/usr/share/dict/words"
# A wrap boundary can only fuse two real words, so a fragment shorter than this is never a half-word,
# which keeps the split search from inventing "a|ndthe" style pairs.
MIN_PART = 3
# Reader-facing fields worth a reader's eyes. `citation` is excluded: it is a title, and a title's own
# capitalisation is not our formatting.
FIELDS = ("summary", "strength", "name", "operation", "note", "mapNote", "explanation",
          "topic", "range", "usedFor", "citation_note")
ACCENT = "À-ÿ"

# The lowercase run must BEGIN at a token boundary. Without that guard the pattern fires on every
# internal capital: "TheSecondWar.pl", "MacNeill" and "HyperWar" are all shipped, correct text, and
# they produced 35 of 35 suspects on first calibration — noise of that size is how a gate gets ignored.
FUSE = re.compile(r"(?<![A-Za-z%s])[a-z%s]{2,}(?=[A-Z][a-z])" % (ACCENT, ACCENT))
TOKEN = re.compile(r"[A-Za-z%s]+" % ACCENT)
# A token with an internal capital, i.e. two capitalised words welded: "MarchHitler".
CAMEL = re.compile(r"[A-Za-z%s]*[a-z%s][A-Z][A-Za-z%s]*" % (ACCENT, ACCENT, ACCENT))


def known_words():
    """Dictionary words plus every word the shipped dumps already use."""
    # Lowercase-initial entries only. The word list holds 25,000 capitalized names, and "Ed" being
    # listed is what made "named" split into "nam" + "ed" — a proper-name half is never the missing
    # space this gate is looking for.
    known = set()
    if os.path.exists(WORDLIST):
        with open(WORDLIST, encoding="utf-8", errors="ignore") as fh:
            for line in fh:
                w = line.strip()
                # >= 2, NOT MIN_PART: a two-letter word is still a word, and dropping "of", "to", "in"
                # and "and" from the vocabulary made "defeatof", "tothe" and "andnot" invisible — which
                # is precisely the weld a wrapped value produces most often. MIN_PART governs the split
                # fragments instead, and a short fragment is only allowed if it is on SHORT_WORDS.
                if len(w) >= 2 and w[0].islower():
                    known.add(w.lower())
    return known


def corpus_vocab(dumps):
    vocab = set()
    for path in dumps:
        doc = json.load(open(path))
        for key, rows in doc.items():
            if not isinstance(rows, list):
                continue
            for row in rows:
                for text in walk_strings(row):
                    for tok in TOKEN.findall(text):
                        vocab.add(tok.lower())
    return vocab


def walk_strings(obj):
    if isinstance(obj, str):
        yield obj
    elif isinstance(obj, dict):
        for v in obj.values():
            yield from walk_strings(v)
    elif isinstance(obj, list):
        for v in obj:
            yield from walk_strings(v)


def fused_lower(text):
    """Detector 1: a lowercase run welded straight onto a capitalised word.

    Returns (token, context) pairs so every detector reports the same key and a token seen by two of
    them is counted once: this reports DEFECTS, not detector hits.
    """
    out = []
    for m in FUSE.finditer(text):
        whole = TOKEN.match(text, m.start())
        tok = whole.group(0) if whole else m.group(0)
        out.append((tok, text[max(0, m.start() - 12):m.end() + 8]))
    return out


# Two-letter words a wrap boundary can weld onto. Without this list "defeatof" and "tothe" are missed,
# because MIN_PART rejects 2-letter halves; with it, an arbitrary 2-letter dictionary name ("Ed") is
# still rejected, because it is not on this list and the word list is lowercase-initial only.
SHORT_WORDS = {"of", "in", "to", "at", "on", "by", "it", "is", "as", "or", "an", "up", "be", "we",
               "so", "no", "if", "us", "he", "do", "my", "me"}


def camel_suspects(text, known, common):
    """Detector 3: two capitalised words welded at a wrap boundary ("MarchHitler", "Korce fell" -> …).

    Detector 1 cannot see these — there is no lowercase run to anchor on — and they are the commonest
    kind of wrap, because a value often wraps before a month or a name. The shipped corpus is what makes
    this safe: every camel token the site already publishes ("TheSecondWar.pl", "MacNeill", "HyperWar")
    is known by definition-of-use and skipped, so only a NEW welded token can be reported.
    """
    out = []
    for tok in CAMEL.findall(text):
        if is_known(tok.lower(), known):
            continue
        for i in range(1, len(tok)):
            if not tok[i].isupper():
                continue
            a, b = tok[:i], tok[i:]
            if a.lower() not in known or b.lower() not in known:
                continue
            if len(a) < 3 and a.lower() not in SHORT_WORDS or len(b) < 3 and b.lower() not in SHORT_WORDS:
                continue
            if a.lower() not in common and b.lower() not in common:
                continue
            out.append((tok, "%s → %s %s" % (tok, a, b)))
            break
    return out


SUFFIXES = ("ing", "edly", "ies", "ied", "ies", "ers", "est", "ed", "es", "ly", "s")
DOUBLED = "bdglmnprs"


def is_known(tok, known):
    """Is this a word this project may publish?

    The system dictionary is American, so it has no "refuelled", "cancelled" or "modelled" — house
    spelling is en-GB, and on first run the gate called "refuelled" a weld ("refuel" + the word "led").
    Rather than a list of exceptions, generate the inflections: a stem plus a suffix, including the
    doubled-consonant forms ("hopping" from "hop") that British and American orthography share.
    """
    if tok in known:
        return True
    # "-ies" replaces a "y": "replies" is "reply" + a suffix swap, not "rep" + the word "lies". Missing
    # this made the gate report "replies" in a shipped usedFor, and a gate that flags an ordinary English
    # plural is one I learn to skim past, which is how a real weld gets through.
    if tok.endswith("ies") and len(tok) > 4 and (tok[:-3] + "y") in known:
        return True
    for suf in SUFFIXES:
        if not tok.endswith(suf) or len(tok) <= len(suf) + 1:
            continue
        stem = tok[:-len(suf)]
        if stem in known or stem + "e" in known:
            return True
        # "hopping" -> stem "hopp": a doubled final consonant, one letter back
        if len(stem) >= 3 and stem[-1] == stem[-2] and stem[-1] in DOUBLED and stem[:-1] in known:
            return True
    return False


def split_suspects(text, known, common=None):
    """Detector 2: an unknown token that is exactly two known words with the space removed.

    `common` is what makes this trustworthy. The word list contains obscure entries — "esca" and "ped"
    are both in it — so "escaped" splits into two "words" and every reader would call that a false
    alarm. A split is reported only when at least one half is a word this project actually uses (or a
    small function word), which is what a real missing space produces: "town" + "sit", "because" +
    "three", "and" + "not".
    """
    common = common if common is not None else known
    out = []
    for tok in TOKEN.findall(text):
        low = tok.lower()
        if is_known(low, known) or len(tok) < 2 * MIN_PART or not tok.islower():
            continue
        for i in range(2, len(tok) - 1):
            a, b = tok[:i], tok[i:]
            if a not in known or b not in known:
                continue
            if len(a) < 3 and a not in SHORT_WORDS or len(b) < 3 and b not in SHORT_WORDS:
                continue
            if a not in common and b not in common:
                continue
            out.append((tok, "%s → %s %s" % (tok, a, b)))
            break
    return out


# Real English the atlas uses and /usr/share/dict/words does not contain: it is American, it is thin,
# and it has no `cameramen`, no `minelayer` and no `neighbourhood`. Every one of these was read by hand
# in the sentence it occurred in before it was listed here. Without the list a scan of the shipped trees
# prints 16 lines of noise on every run, and a gate that cries wolf gets skimmed — which is exactly how
# a real defect in the middle of that noise gets waved through. It is an EXACT-TOKEN list, it is counted
# out loud on every run, and it cannot rescue anything not exactly on it: `mineface` is not on it.
KNOWN_COMPOUNDS = {
    "backdated", "smokescreen", "dockworkers", "foreseen", "cameramen", "codenamed", "downloaded",
    "website", "readout", "keyword", "minelayer", "neighbourhood", "refetchable", "javascript",
    "disorganisation", "geocodes",
}


def check(label, fields, known, common=None, published=None):
    """Two verdicts, because the gate can tell them apart and pretending otherwise would be a lie.

    JAM   — the token appears in NO shipped text anywhere. A new apply introduces exactly this, so it
            blocks: exit 1.
    LIVE? — the token is published, but only inside the file being scanned. Either the project has
            adopted that spelling or this defect is ALREADY LIVE on the site. No script can tell those
            apart from the text alone, so it goes on a list to be read, and it does not block.
    """
    bad = 0
    live = []
    suppressed = set()
    for field, text in fields:
        if not isinstance(text, str):
            continue
        hits = [("fusion", h) for h in fused_lower(text)]
        hits += [("welded", h) for h in split_suspects(text, known, common)]
        hits += [("fused-caps", h) for h in camel_suspects(text, known, common)]
        # A token can look wrong to more than one detector ("inDecember" does, to detectors 1 and 3).
        # Report it once, under the first kind that caught it, so the tally counts defects, not hits.
        seen = set()
        for kind, (tok, disp) in hits:
            key = tok.lower()
            if key in seen:
                continue
            seen.add(key)
            if published and key in published:
                live.append((key, field, disp))
                continue
            if key in KNOWN_COMPOUNDS:
                suppressed.add(key)
                continue
            bad += 1
            print("  JAM %-10s %s: %s" % (kind, field, disp.replace("\n", " ")[:90]))
    for key, field, disp in live:
        print("  LIVE? %-10s %s: %s  (published here only — read it)"
              % ("", field, disp.replace("\n", " ")[:70]))
    verdict = "%d suspected jams" % bad if bad else "clean"
    if live:
        verdict += ", %d published-here-only to read" % len(live)
    if suppressed:
        # Say what was silenced. A suppression that is not printed is how a gate starts lying.
        verdict += ", %d known compound(s) suppressed (%s)" % (
            len(suppressed), ", ".join(sorted(suppressed)))
    print("%s: %s" % (label, verdict))
    return bad


def payload_fields(path):
    """Reader fields of a payload OR of a dump — the same gate must be able to read both.

    A payload is {"items": [...]} (or a bare list); a dump is a dict of array-valued keys
    (EVENTS, CAMPAIGN_LINES, MARCH_LINES, SOURCES, UNCERTAINTIES…). Both are just rows of fields.
    """
    doc = json.load(open(path))
    if isinstance(doc, dict) and "items" in doc:
        rows = doc["items"]
    elif isinstance(doc, dict):
        rows = [r for v in doc.values() if isinstance(v, list) for r in v]
    else:
        rows = doc
    rows = rows if isinstance(rows, list) else []
    for row in rows:
        if not isinstance(row, dict):
            continue
        ident = row.get("id", "?")
        for f in FIELDS:
            v = row.get(f)
            if isinstance(v, str):
                yield ("%s.%s" % (ident, f), v)
            elif isinstance(v, dict):
                for k, inner in v.items():
                    if isinstance(inner, str):
                        yield ("%s.%s.%s" % (ident, f, k), inner)
                    elif isinstance(inner, dict):
                        for k2, v2 in inner.items():
                            if isinstance(v2, str):
                                yield ("%s.%s.%s.%s" % (ident, f, k, k2), v2)


def selftest():
    """A gate is only as good as the failure it catches. Planted first, then real text.

    A child process is refused outright: this self-test spawns the gate three times, and a child that
    spawned its own children fork-bombed the machine once already.

    This carries its OWN vocabulary fixture rather than reading whatever dumps happen to sit in the
    directory — a self-test that depends on an outside file is one that fails in someone else's job.
    The fixture stands in for the shipped corpus: the words this site already publishes, which are the
    authority on what counts as a real word here.
    """
    if os.environ.get("JAMCHECK_CHILD") == "1":
        raise SystemExit("refusing to run a self-test inside a self-test child")
    FIXTURE_CORPUS = {
        "town", "towns", "sit", "used", "as", "bases", "because", "three", "fell", "november",
        "december", "fighting", "for", "pass", "ran", "on", "coast", "reached", "the", "and",
        "not", "defeat", "invasion", "first", "setback", "south", "answer", "its", "ships",
        "with", "force", "began", "firing", "that", "reason", "proclaimed", "protectorate",
        "battlecruiser", "battlecruisers", "battleship", "warships", "escaped", "strasbourg",
        "korce", "gjirokaster", "mannerheim", "klisura", "sarande", "himare", "gibraltar",
        "french", "surrender", "soviet", "occupied", "poland", "named", "twice", "line",
        "broken", "ten", "days", "corps", "took", "hands", "almost", "lost", "german", "troops",
        "hitler", "proclaimed", "short", "ring", "stops", "town", "next", "arriving",
        # "lies" is in the SHIPPED corpus, not in /usr/share/dict/words — the -ies arm below needs it.
        "lies", "filed", "his", "were", "day",
        # The allow-list arm needs one half of each listed word in the CORPUS, because a suspect needs a
        # half the project really uses. Without these the arm reports "clean" for the wrong reason.
        "mine", "site", "dated", "spring", "after", "he", "drove", "through", "was",
    }
    known = known_words() | FIXTURE_CORPUS
    common = FIXTURE_CORPUS | SHORT_WORDS
    planted = [
        ("welded lower-lower — the emitter bug itself", "took the townsit had used as bases"),
        ("lower welded onto a place name", "fighting for theKlisura pass ran on"),
        ("lower welded onto a name", "on 16 MarchHitler proclaimed a protectorate"),
        ("weld inside a date phrase", "reached the coast inDecember at Sarande"),
        ("weld onto a two-letter word (MIN_PART alone misses this)",
         "the defeatof the Italian invasion was the first setback"),
        ("weld onto a bare article", "the line runs south tothe coast inanswer on the 5th"),
        ("weld across a clause boundary", "the defeatof german troops andnot a surveyed front"),
        ("weld between two capitalised words — the commonest wrap, before a month",
         "the protectorate was proclaimed on 16 MarchHitler arriving the next day"),
        ("weld before a place name that begins the next clause",
         "the line stops short of the town atKorce and the ring interpolates there"),
    ]
    ok = True
    for label, text in planted:
        n = (len(fused_lower(text)) + len(split_suspects(text, known, common))
             + len(camel_suspects(text, known, common)))
        print("  planted %s: %s" % (label, "caught" if n else "MISSED"))
        ok = ok and n > 0
    must_pass = [
        "Force H, based at Gibraltar, had the task of making the French warships at Mers-el-Kebir "
        "surrender; anti-British feeling ran high and Soviet-occupied Poland was named twice.",
        "Korce fell on 22 November and Gjirokaster on 8 December; the battlecruiser Strasbourg "
        "escaped and the battleship HMS Hood was lost with almost all hands.",
        "The Mannerheim Line was broken in ten days and the XX Corps took the town on the 27th.",
        # Calibrated against: these three camelCase forms are shipped, correct text, and the first
        # version of this gate reported 35 suspects over them. They must never fail again.
        "HyperWar and TheSecondWar.pl are the two families for this, and Eoin MacNeill was quoted.",
        "The MacArthur transcript and HyperWar's order of battle both give the same date.",
    ]
    FIXTURE_CORPUS |= {"macarthur", "macneill", "eoin", "hyperwar", "thesecondwar", "transcript"}
    for text in must_pass:
        n = (fused_lower(text) + split_suspects(text, known, common)
             + camel_suspects(text, known, common))
        print("  real prose must pass: %s" % ("ok" if not n else "FALSE POSITIVE %s" % n))
        ok = ok and not n
    # "escaped" splits into two entries the word list really does contain; the common-word rule is what
    # stops that being reported. Assert the halves exist first, or this arm proves nothing.
    halves = all(w in known_words() for w in ("esca", "ped"))
    fp = split_suspects("the battlecruiser Strasbourg escaped", known, common)
    print("  dictionary false alarm suppressed: %s%s"
          % ("ok" if not fp else "REPORTED %s" % fp,
             "" if halves else "  (ARM VACUOUS: esca/ped are not in the word list)"))
    ok = ok and not fp and halves
    # An ordinary English plural must not read as a weld. "replies" is "reply" with -ies, but it also
    # happens to be "rep" + the word "lies", and the gate reported it in a shipped usedFor. Assert the
    # halves really exist first, or this arm proves nothing, exactly as with esca/ped above.
    ies_halves = all(w in known for w in ("rep", "lies"))
    fp2 = split_suspects("his replies were filed the next day", known, common)
    print("  -ies plural is not a weld: %s%s"
          % ("ok" if not fp2 else "REPORTED %s" % fp2,
             "" if ies_halves else "  (ARM VACUOUS: rep/lies are not both in the word list)"))
    ok = ok and not fp2 and ies_halves
    # guard against the arm going quiet for the wrong reason: "replies" must be UNKNOWN as a whole and
    # split-able, or the -ies widening above is never exercised.
    pre = ("replies" not in known
           and any(a in known and b in known for a, b in [("rep", "lies")]))
    print("  -ies arm exercises the widening: %s" % ("ok" if pre else "VACUOUS"))
    ok = ok and pre
    # The compound allow-list must be EXACT-TOKEN and its suppression must be PRINTED. Plant a real
    # weld beside two listed words: exactly one may fail, and the run must say it suppressed two. The
    # guard first proves the two listed words are detected at all in this fixture — otherwise the arm
    # goes quiet for the wrong reason and reads as a pass, which is the failure mode I keep meeting.
    import contextlib
    import io
    guarded = split_suspects("the website was backdated last spring", known, common)
    guarded_toks = {t for t, _ in guarded}
    buf = io.StringIO()
    with contextlib.redirect_stdout(buf):
        n = check("fixture", [("note", "he drove through the mineface after the website was "
                                       "backdated")], known, common)
    cap = buf.getvalue()
    listed_ok = {"website", "backdated"} <= guarded_toks
    list_ok = (n == 1 and "mineface" in cap and "2 known compound(s) suppressed" in cap)
    print("  the allow-list is exact-token and says what it silenced: %s%s"
          % ("ok" if list_ok else "FAIL %r -> %r" % (n, cap.strip()[:160]),
             "" if listed_ok else "  (ARM VACUOUS: website/backdated are not suspects in this fixture)"))
    ok = ok and list_ok and listed_ok
    # A dump may NEVER vouch for the file it is vocabulary for. This is the bug that made me report a
    # weld I had just PROVEN live on https://ww1-european.vercel.app as clean: I passed the target as
    # ".../ww1-european/scripts/audit/ww1.json" (built from $s="ww1") and the SAME file as
    # "--dump .../WW1-European/scripts/audit/ww1.json", and the exclusion compared paths as STRINGS. On
    # a case-insensitive filesystem those are one file, so the target supplied its own vocabulary and
    # the gate printed "0 suspected jam(s)" and exit 0. Realpath identity is the fix, and this arm is
    # what fails if anyone puts the string comparison back.
    import subprocess
    import tempfile
    script = os.path.abspath(__file__)
    # The child MUST NOT inherit SELFTEST: it would run this same self-test and spawn three more of
    # itself. That fork bomb cost 900 s and 3,183 leftover temp dirs the first time I wrote this arm.
    child_env = {k: v for k, v in os.environ.items() if k != "SELFTEST"}
    child_env["JAMCHECK_CHILD"] = "1"
    with tempfile.TemporaryDirectory() as td:
        fixture = os.path.join(td, "FixtureDump.json")
        json.dump({"EVENTS": [{"id": "fixture_card",
                               "note": "the force retired to the hillslying south of the river"}]},
                  open(fixture, "w", encoding="utf-8"))
        other = os.path.join(td, "OtherDump.json")
        # The other dump has to contain BOTH halves of the planted weld as ordinary words. The split
        # detector reports only when at least one half is a word the project really uses, so a fixture
        # that never says "hills" or "lying" makes this arm report MISSED for the wrong reason — which is
        # exactly how I found the arm was vacuous the first time.
        json.dump({"EVENTS": [{"id": "other",
                               "note": "the hills above the town were steep, and the troops kept lying "
                                       "low in the coast defences below the town"}]},
                  open(other, "w", encoding="utf-8"))
        variant = next((v for v in (fixture.swapcase(), fixture.upper())
                        if v != fixture and os.path.exists(v)), None)
        if variant is None:
            print("  self-vouching arm: SKIPPED — the filesystem is case-sensitive, so no second path to "
                  "the same file exists here; the REFUSE arm below still runs")
        else:
            for label, tp in (("identical path", fixture), ("case-differing path to one file", variant)):
                r = subprocess.run([sys.executable, script, tp, "--dump", other, "--dump", fixture],
                                   capture_output=True, text=True, env=child_env, timeout=120)
                caught = "hillslying" in r.stdout and r.returncode == 1
                print("  a dump may not vouch for itself (%s): %s" % (label, "caught" if caught else "MISSED"))
                ok = ok and caught
        # And if NOTHING but the target is available as vocabulary, refuse: "clean" would be a lie.
        r = subprocess.run([sys.executable, script, fixture, "--dump", fixture],
                           capture_output=True, text=True, env=child_env, timeout=120)
        refused = r.returncode != 0 and "REFUSE" in (r.stdout + r.stderr)
        print("  refuses when the only --dump IS the target: %s" % ("ok" if refused else "NOT REFUSED"))
        ok = ok and refused
    # The shipped corpus must actually be consulted: without it a real weld is invisible, so a run that
    # forgot its vocabulary could not quietly report a clean bill of health.
    without = split_suspects("took the townsit had used as bases", known_words(), SHORT_WORDS)
    print("  corpus is load-bearing: %s"
          % ("proven (the same weld is missed without shipped vocabulary)" if not without
             else "NOT PROVEN — vocabulary is not being consulted"))
    ok = ok and not without
    print("SELFTEST %s" % ("PASS — a welded value fails, real prose passes, and the corpus is used"
                           if ok else "FAIL"))
    return 0 if ok else 1


def main():
    args = sys.argv[1:]
    dumps = [args[i + 1] for i, a in enumerate(args) if a == "--dump"]
    payload = next((a for a in args if not a.startswith("--")
                    and (args.index(a) == 0 or args[args.index(a) - 1] != "--dump")), None)
    if os.environ.get("SELFTEST") == "1":
        raise SystemExit(selftest())
    if not payload:
        raise SystemExit("usage: jamcheck.py PAYLOAD.json [--dump wwN.json] | SELFTEST=1 jamcheck.py")
    if not dumps:
        raise SystemExit(
            "REFUSE: jamcheck needs at least one --dump wwN.json. Without the shipped corpus as\n"
            "vocabulary it reports every open compound as a jam (\u0022battlecruiser\u0022 -> \u0022battle cruiser\u0022),\n"
            "and a gate that cries wolf gets ignored, which is worse than no gate.")
    # The shipped corpus is the authority on what a word in this project is allowed to look like, and a
    # file may NEVER vouch for itself. Excluded by REALPATH, not by string.
    #
    # I ran this over both dumps at once and wrote the target as "$s-european/scripts/..." (lowercase,
    # because $s was "ww1") and the --dump as "WW1-European/scripts/...". On macOS's case-insensitive
    # filesystem those are the SAME FILE, so a string comparison left the WW1 dump inside its own
    # vocabulary and "hillslying" — a weld I had just PROVEN on screen at two widths on
    # https://ww1-european.vercel.app — came back CLEAN. The gate printed "0 suspected jam(s)" and exit 0.
    # A difference in letter case silenced the only gate that catches this defect class.
    def file_id(path):
        """The FILE, not its name.

        realpath() is not enough and I proved it here: on macOS it does NOT canonicalise case, so
        "/…/fIXTUREdUMP.JSON" and "/…/FixtureDump.json" are two different strings for one inode. That is
        precisely how ww1-european's live weld got a CLEAN verdict — the target came from "$s-european"
        and the --dump from "WW1-European". Identity has to be device + inode, which also covers
        symlinks and "./" paths for free.
        """
        try:
            st = os.stat(path)
            return (st.st_dev, st.st_ino)
        except OSError:
            return ("path", os.path.realpath(path))

    target = file_id(payload)
    used, self_ref = [], []
    for d in dumps:
        (self_ref if file_id(d) == target else used).append(d)
    if self_ref:
        print("note: %d --dump excluded because it IS the file being scanned (a dump may not vouch for itself)"
              % len(self_ref))
    print("vocabulary from: " + (", ".join(os.path.basename(u) for u in used) or "NOTHING"))
    if not used:
        raise SystemExit("REFUSE: every --dump given is the file being scanned, so there is no vocabulary "
                         "outside it. Pass the OTHER site's dump.")
    vocab = set().union(*[corpus_vocab([u]) for u in used])
    doc = json.load(open(payload))
    is_tree = isinstance(doc, dict) and "items" not in doc
    if is_tree:
        # Scanning SHIPPED text. A spelling the tree uses many times is a word the project has adopted
        # ("panzer" appeared 13 times in one report); a token used exactly once is not, so only a
        # singleton can be a live weld. That is a heuristic, not a proof: these verdicts get read.
        counts = Counter()
        for text in walk_strings(doc):
            for tok in TOKEN.findall(text):
                counts[tok.lower()] += 1
        published = {t for t, n in counts.items() if n >= 2}
        print("note: scanning shipped text — a hit whose token is used 2+ times is listed, not failed")
    else:
        # Scanning a PROPOSAL. Nothing in it is published, so nothing in it can excuse itself: this is
        # the case the gate exists for, and every hit blocks. 15 hits in the delivered payload, 0 across
        # 2,057 shipped reader fields, is the calibration this branch is held to.
        published = set()
    known = known_words() | vocab | published
    common = vocab | published | SHORT_WORDS
    total = check(payload, list(payload_fields(payload)), known, common, published)
    print("\n%d suspected jam(s)" % total)
    raise SystemExit(1 if total else 0)


if __name__ == "__main__":
    main()
