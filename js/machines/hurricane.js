  /* ─── HURRICANE ──────────────────────────────────────────── */
MACHINES['hurricane'] = {
    name: "Hurricane", sub: "1991 · Williams · WPC (DMD)",
    tagline: "Ducks → Juggler locks · Hurricane 1M/2M/5M multiball · multiplied scoring after · Palace Jackpot",
    image: "images/hurricane.webp",
    difficulty: "Medium", diffClass: "diff-medium", era: "DMD",

    /* ── QUICK GUIDE (30–90 s read) ───────────────────────────── */
    quick: {
      goal: "<strong>Multiball</strong> is the key: in it the <strong>Hurricane ramp</strong> pays 1M, 2M, 5M (repeating), and afterwards you get <strong>2×/3×/5× playfield scoring</strong> for as long as Multiball lasted. Spell <strong>PALACE</strong> for the Jackpot (5M–16M) at the Juggler.",
      steps: [
        { title: "Skill shot",
          body: "The plunge goes around the Hurricane ramp to the left flipper — shoot it straight back up the <strong>Hurricane</strong>: 500K (+500K each, max 2M) + a PALACE letter." },
        { title: "Ducks → lock",
          body: "Knock down the 3 <strong>Ducks</strong> (left drop targets) to light locks (first time both), then shoot the <strong>Juggler</strong> lane to lock. 2 locked + launch = 3-ball Multiball." },
        { title: "Multiball: Hurricane ramp",
          body: "Hurricane = 1M, 2M, 5M, then repeat. Ferris Wheel 750K; a 2nd/3rd ball sent up quickly scores 1M/2M. Keep the balls alive — every second counts for the scoring multiplier." },
        { title: "Multiplied scoring",
          body: "When Multiball ends you get 2×, 3× or 5× scoring (min 15 s). Shoot the Juggler <strong>Mystery</strong> if lit (Cats relight it) — up to 5M ×5. Start building the Comet as Multiball ends so its 1M is lit when the multiplier kicks in." },
        { title: "PALACE → Jackpot",
          body: "Letters from the skill shot, Hurricane millions, and the Hurricane within ~8 s of Ducks/Cats. All 6 → shoot the <strong>Juggler</strong> within 30 s (a miss drops it back to PAL)." },
      ],
      shots: [
        { name: "Hurricane ramp (right)", why: "Millions, PALACE letters, Multiball 1M/2M/5M, Clown Time start." },
        { name: "Ducks (left drops)", why: "Light the Juggler locks." },
        { name: "Juggler lane", why: "Locks, Mystery, Jackpot (easiest as a left-flipper backhand)." },
      ],
      avoid: [
        "Don't aim for the Dummy — a miss is often a drain (its extra-ball reward is off in competition play).",
        "Holding a flipper up during Multiball stops the multiplied-scoring timer from growing.",
      ],
      target: "Milestones (estimates): ~20M baseline; ~50M with a long Multiball into multiplied scoring = good; 100M+ with the Palace Jackpot and a multiplied Mystery = great.",
    },

    info: {
      stats: [
        { label: "Manufacturer", value: "Williams" },
        { label: "Year",         value: "1991 (August)" },
        { label: "Design",       value: "Barry Oursler" },
        { label: "Software",     value: "Mark Penacho" },
        { label: "Platform",     value: "WPC (DMD)" },
        { label: "Production",   value: "≈4,400 units" },
      ],
      theme: "Third of Barry Oursler's amusement-park trilogy (after Comet and Cyclone): the Hurricane ramp ride, two Ferris wheels, the Juggler and a clown face.",
      features: [
        { name: "Hurricane ramp", desc: "Right entrance, around the back to the left inlane. 200K, 225K …, then unlimited millions (each with a PALACE letter) while timed shots keep it lit." },
        { name: "Comet ramp", desc: "Centre ramp to the right inlane: 100K, 200K, 300K, then 1M per shot (8 s timer). After the first million, touching anything but the right inlane turns it off (not in Multiball)." },
        { name: "Ferris Wheel", desc: "Far-left lane; ball rides both wheels onto the Hurricane ramp. Ferris Wheel bonus (250K–1M) and Quick Score after the right inlane." },
        { name: "Juggler", desc: "Big blue box at the back; locks, Mystery, Jackpot. Backhand from the left flipper." },
        { name: "Ducks (3 drops, left)", desc: "Light locks and the Ferris Wheel bonus." },
        { name: "Cats (4 standups, right)", desc: "Relight the Hurricane and the Mystery." },
        { name: "Dummy (bullseye)", desc: "Bonus X when lit (lit at game start; relit ~18 s by the left inlane or by hitting it unlit); 1M at 6X." },
      ],
      scoring: [
        { key: "Skill shot",              val: "500K, +500K each (max 2M) + PALACE letter" },
        { key: "Multiball Hurricane",     val: "1M, 2M, 5M, repeat" },
        { key: "Multiplied scoring",      val: "2×/3×/5× for the Multiball duration (min 15 s; not Jackpot)" },
        { key: "Palace Jackpot",          val: "5M, +130K per ramp, wraps at 16M" },
        { key: "Mystery",                 val: "1M/2M/3M/5M, playfield X, Clown Time, lock, letter…" },
        { key: "Clown Time",              val: "25 s: targets 50K, major shots 500K/750K/1M" },
        { key: "Comet",                   val: "1M per shot once lit (accuracy-dependent)" },
      ],
      rules: [
        "<strong>Locks:</strong> first Multiball — the Ducks light both locks; later, one Ducks set per lock.",
        "<strong>Multiplied scoring:</strong> one second per second of Multiball (holding a flipper pauses the count). Multiplier is 2×, 3× or 5×.",
        "<strong>PALACE</strong> and Clown's Face progress carry over between players and games — so tournament games may not start equal.",
        "<strong>Clown's Face</strong> (6 parts: Ferris Wheel, Hurricane, Dummy, Ducks, Cats, Comet 300K) → Hurricane starts Clown Time.",
        "Bonus is capped at 500K × 6X per ball.",
        "<strong>Extra balls</strong> (Dummy) and <strong>Specials</strong> (Mystery, 3rd Multiball; collected at the Hurricane) — void in comp play.",
      ],
      benchmarks: [
        { score: "100M+ (estimate)", label: "Great game" },
        { score: "~50M (estimate)",  label: "Good game" },
        { score: "~20M (replay default)", label: "Baseline" },
      ],
      resources: [
        { name: "Rulesheet (Keefer)", url: "https://www.pinball.org/rules/hurricane.html", icon: "📖" },
        { name: "Pinside Game Page",  url: "https://pinside.com/pinball/machine/hurricane", icon: "🕹️" },
        { name: "IPDB Entry",         url: "https://www.ipdb.org/machine.cgi?id=1257", icon: "🎯" },
      ],
    },

    strategy: {
      skillShot: "The plunger sends the ball around the Hurricane ramp to the left flipper; shoot it right back up the <strong>Hurricane</strong> for 500K (+500K each, max 2M) and a PALACE letter.",
      multiball: [
        { name: "Juggler Multiball", balls: 3,
          locks: "Ducks (3 drops) light the locks (both on the first Multiball).",
          start: "Lock 2 balls in the Juggler, then launch the third.",
          jackpots: "Hurricane 1M → 2M → 5M, repeating. Ferris Wheel 750K; 1M/2M for further balls sent up quickly. Comet millions are timed-only during Multiball.",
          tip: "Afterwards: multiplied scoring for as long as Multiball lasted — go for the Juggler Mystery and Comet." },
      ],
      goal: "<strong>Ducks → Juggler locks → long Multiball on the Hurricane ramp → multiplied scoring.</strong> Fill PALACE along the way for the Juggler Jackpot.",
      phases: [
        { num: "Phase 1", title: "Skill shot + Ducks", body: "Skill shot on the Hurricane; Ducks, then the Juggler to lock." },
        { num: "Phase 2", title: "Multiball", body: "Hurricane over and over (1M/2M/5M); keep balls alive." },
        { num: "Phase 3", title: "Multiplied scoring", body: "Mystery at the Juggler first, then Comet millions; relock with the Ducks if time allows." },
      ],
      safeShots: [
        { name: "Hurricane ramp", desc: "Returns to the left flipper for repeats." },
        { name: "Comet ramp", desc: "Easy from either flipper; returns to the right inlane." },
      ],
      avoidShots: [
        { name: "Dummy", desc: "A missed Dummy shot is often a drain." },
      ],
      tips: [
        { head: "Ducks trick", body: "Clear 1–2 Ducks, catch, finish the bank — the ball often bounces straight into the Juggler for a lock." },
        { head: "Clown Time", body: "Shoot the Comet repeatedly as soon as Clown Time starts." },
      ],
      mistakes: [
        "Ignoring the Ducks (no Multiball).",
        "Not using the Mystery during multiplied scoring.",
      ],
    },

    hotspots: [
      { x: 71,   y: 35, type: "key",   label: "HR", name: "Hurricane Ramp",
        body: "<strong>Main shot.</strong> Millions + PALACE letters; Multiball 1M/2M/5M; skill shot; Clown Time start." },
      { x: 29,   y: 38,   type: "key",   label: "JU", name: "Juggler Lane",
        body: "Locks, Mystery, Palace Jackpot. Backhand from the left flipper." },
      { x: 17.5, y: 51,   type: "key",   label: "DK", name: "Ducks (drop targets)",
        body: "Light the Juggler locks and the Ferris Wheel bonus." },
      { x: 41.5, y: 33.3, type: "safe",  label: "CR", name: "Comet Ramp",
        body: "100K/200K/300K, then 1M per shot (timed); after the first million, only the right inlane may be touched." },
      { x: 13,   y: 36.7, type: "safe",  label: "FW", name: "Ferris Wheel Lane",
        body: "Ferris Wheel bonus; Quick Score after the right inlane; Multiball 750K–2M." },
      { x: 56,   y: 41,   type: "info",  label: "DT", name: "Dummy (bullseye)", body: "Bonus X when lit; don't aim for it otherwise." },
      { x: 77,   y: 53,   type: "info",  label: "CT", name: "Cats (standups)", body: "Relight the Hurricane and the Mystery." },
      { x: 57,   y: 21,   type: "info",  label: "JB", name: "Jet Bumpers", body: "Raise the Ferris Wheel bonus." },
      { x: 2,    y: 75,   type: "avoid", label: "!",  name: "Left Outlane",  body: "Open under comp settings." },
      { x: 91,   y: 77,   type: "avoid", label: "!",  name: "Right Outlane", body: "Open under comp settings." },
    ],
  };
