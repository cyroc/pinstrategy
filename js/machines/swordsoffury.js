  /* ─── SWORDS OF FURY ─────────────────────────────────────── */
MACHINES['swordsoffury'] = {
    name: "Swords of Fury",
    sub: "1988 · Williams · System 11B",
    tagline: "Titan Multiball (3×/2× playfield) · upper-playfield Jackpot · AVENGER · Lionman · Ogres Alley",
    image: "images/swords-of-fury.webp",
    difficulty: "Medium", diffClass: "diff-medium", era: "SS",

    /* ── QUICK GUIDE (30–90 s read) ───────────────────────────── */
    quick: {
      goal: "<strong>Titan Multiball</strong> is the centrepiece: playfield scores <strong>3×</strong> (then 2×, not Jackpot or Lionman), and the moving lit target on the upper playfield pays the <strong>Jackpot</strong> (500K–4M, carried between games). Fill the gaps with <strong>AVENGER</strong>, <strong>Lionman</strong> (up to 1M) and <strong>Ogres Alley</strong> (500K — save it for 3×).",
      steps: [
        { title: "Lock in the Titan Tunnel",
          body: "The <strong>Titan Tunnel</strong> (left) is lit to lock whenever multiball isn't running; the centre ramp can also drop a ball in. Two locks light 'Release'; the third Titan shot starts 3-ball Multiball." },
        { title: "Jackpot on the upper playfield",
          body: "In multiball a light roves across the five <strong>Magic Targets</strong> on the upper playfield (reach it via the centre ramp or Magic Tunnel): hit the lit one for the Jackpot. One Jackpot per multiball." },
        { title: "Ogres Alley at 3×",
          body: "Shoot the lit 'Advance' side of the U-turns behind the centre ramp (slings swap the Collect side) up to 500K, then <strong>collect</strong> it at the start of multiball for 3× = 1.5M (once per game at 500K)." },
        { title: "AVENGER + Lionman",
          body: "Spell AVENGER (7 round targets; the inlanes spot a letter and light the Magic Tunnel): 50K, 150K, 250K, then EB; +1 bonus X. It lights <strong>Lionman</strong> at the centre ramp for 10 s — 100K rising to 1M (rulesheet: centre-ramp shots; Zen: Magic Target sets)." },
      ],
      shots: [
        { name: "Titan Tunnel", why: "Locks and multiball start." },
        { name: "Centre (Lionman) ramp", why: "Lionman; diverter to the upper playfield, lock or bonus X." },
        { name: "Ogres Alley U-turns", why: "Build to 500K; collect at 3×." },
      ],
      avoid: [
        "The kickback is only relit by starting multiball (or draining) — don't waste it.",
      ],
      target: "Milestones: a Titan Multiball Jackpot = good game. Jackpot plus a 3× Ogres Alley collect = great.",
    },

    info: {
      stats: [
        { label: "Manufacturer", value: "Williams" },
        { label: "Year",         value: "1988 (June)" },
        { label: "Design",       value: "Steve Kirk, Tony Kraemer" },
        { label: "Software",     value: "Dan Lee" },
        { label: "Art / Sound",  value: "Doug Watson · Brian Schmidt" },
        { label: "Production",   value: "≈2,705 units" },
      ],
      theme: "Sword-and-sorcery: the Avenger, Lionman, Titans and ogres. Two levels, four flippers and no pop bumpers; the upper-left mini-playfield has a mini flipper and five drop-style Magic Targets with nothing behind them.",
      features: [
        { name: "Upper playfield (Magic Targets)", desc: "Five targets: complete them for the Magic Value (50K–250K) and +1 bonus X; Jackpot target in multiball." },
        { name: "Titan Tunnel", desc: "Left tunnel with a spinner (1K–4.5K per spin): locks and multiball." },
        { name: "Centre (Lionman) ramp", desc: "Leads to a 3-way diverter: upper playfield, lock, or +1 bonus X." },
        { name: "Magic Spinners", desc: "Two-entrance U-turn on the left-centre: bonus, raise the Magic Value; 3× when lit by the inlanes." },
        { name: "Ogres Alley", desc: "U-turns either side of the centre ramp plus both outlanes: advance on one side, collect on the other (slings swap)." },
        { name: "AVENGER targets", desc: "Seven round targets around the playfield." },
        { name: "Magic Tunnel", desc: "Right tunnel, lit by the inlanes for 6 s: AVENGER and the upper playfield." },
        { name: "Kickback", desc: "Left outlane; relit only by starting multiball (or a drain)." },
      ],
      scoring: [
        { key: "Jackpot",             val: "500K–4M, carried between games: 500K after a win, +50K per game, back to ≥1.5M when credits run out" },
        { key: "Multiball playfield", val: "3× (all 3 balls), then 2× — not Jackpot or Lionman" },
        { key: "Lionman",             val: "100K → 1M (125K, 175K, 250K … 800K, 1M)" },
        { key: "AVENGER",             val: "50K, 150K, 250K, Extra Ball" },
        { key: "Ogres Alley",         val: "20K–50K, 100K, 500K (500K once per game)" },
        { key: "Magic Value",         val: "50K–250K" },
        { key: "Bonus X",             val: "Up to 7× (held at 3× between balls)" },
      ],
      rules: [
        "<strong>Bonus X:</strong> Magic Target sets, AVENGER, and the ramp's lower diverter exit; beyond 7× lights a Special.",
        "<strong>Multiball:</strong> 3× while three balls are in play (Zen: for 10 s, then 2×); 2× with two balls. One Jackpot per multiball, then the Magic Targets flash for Magic Values.",
        "The rulesheet says the game toughens past 2M points (shorter Lionman/AVENGER timers).",
        "Extra balls (AVENGER, replay) and Specials are void under comp settings.",
      ],
      benchmarks: [
        { score: "Jackpot + 3× Ogres Alley", label: "Great game" },
        { score: "Multiball Jackpot",        label: "Good game" },
        { score: "Multiball started",        label: "Baseline" },
      ],
      resources: [
        { name: "Rulesheet (pinball.org)", url: "https://www.pinball.org/rules/swordsoffury.html", icon: "📖" },
        { name: "IPDB Entry",              url: "https://www.ipdb.org/machine.cgi?id=2486", icon: "🎯" },
        { name: "Pinside Game Page",       url: "https://pinside.com/pinball/machine/swords-of-fury", icon: "🕹️" },
      ],
    },

    strategy: {
      skillShot: null,
      multiball: [
        { name: "Titan Multiball", balls: 3,
          locks: "Titan Tunnel (always lit outside multiball) or the centre ramp's lock exit.",
          start: "Shoot the Titan Tunnel when 'Release' is lit (or the ramp's lock exit).",
          jackpots: "Moving lit Magic Target on the upper playfield = Jackpot (once per multiball); everything else 3×/2×.",
          tip: "Collect a maxed Ogres Alley (500K) right at the start for 1.5M." },
      ],
      goal: "<strong>Lock in the Titan Tunnel, start multiball with Ogres Alley built up, collect it at 3×, and hit the moving Jackpot target upstairs.</strong> AVENGER and Lionman between multiballs.",
      phases: [
        { num: "Phase 1", title: "Build", body: "Advance Ogres Alley; AVENGER letters; raise Lionman." },
        { num: "Phase 2", title: "Multiball", body: "Ogres Alley collect at 3×; get upstairs for the Jackpot." },
        { num: "Phase 3", title: "Lionman", body: "AVENGER → Lionman at the centre ramp within 10 s." },
      ],
      safeShots: [
        { name: "Centre ramp", desc: "Lionman; the diverter feeds the upper playfield, lock or bonus X." },
      ],
      avoidShots: [],
      tips: [
        { head: "Inlanes", body: "Each inlane spots an AVENGER letter and lights the Magic Tunnel for 6 s." },
        { head: "Magic Value", body: "Spinner shots raise it; other switches between Magic Target hits lower it." },
      ],
      mistakes: [
        "Collecting Ogres Alley at 500K outside multiball.",
        "Wasting the kickback early — it doesn't relight until multiball.",
      ],
    },

    hotspots: [
      { x: 20,   y: 12,   type: "key",   label: "MT", name: "Magic Targets (upper playfield)", body: "Magic Value; Jackpot target in multiball." },
      { x: 13,   y: 55,   type: "key",   label: "TT", name: "Titan Tunnel", body: "Locks; multiball start; spinner." },
      { x: 50,   y: 22,   type: "key",   label: "LR", name: "Centre (Lionman) Ramp", body: "Lionman; diverter to upper playfield / lock / bonus X." },
      { x: 40,   y: 23,   type: "key",   label: "O1", name: "Ogres Alley (left U-turn)", body: "Advance or collect (lit side)." },
      { x: 60,   y: 23,   type: "key",   label: "O2", name: "Ogres Alley (right U-turn)", body: "Advance or collect (lit side)." },
      { x: 30,   y: 53,   type: "safe",  label: "MS", name: "Magic Spinners", body: "Bonus; raise the Magic Value." },
      { x: 72,   y: 50,   type: "info",  label: "MG", name: "Magic Tunnel", body: "Lit 6 s by the inlanes: AVENGER, upper playfield." },
      { x: 37,   y: 33,   type: "info",  label: "AV", name: "A-V Targets", body: "AVENGER letters." },
      { x: 62.5, y: 32,   type: "info",  label: "EN", name: "E-N-G Targets", body: "AVENGER letters." },
      { x: 77.5, y: 55.5,   type: "info",  label: "ER", name: "E-R Targets", body: "AVENGER letters." },
      { x: 7.5,  y: 76,   type: "avoid", label: "KB", name: "Left Outlane (Kickback / Ogres)", body: "Kickback when lit; part of Ogres Alley." },
      { x: 83.5, y: 76,   type: "avoid", label: "!",  name: "Right Outlane (Ogres)", body: "Part of Ogres Alley; drain." },
    ],
  };
