  /* ─── SPACE STATION ──────────────────────────────────────── */
MACHINES['spacestation'] = {
    name: "Space Station",
    sub: "1987 · Williams · System 11B",
    tagline: "Dock two balls → Multiball → re-dock for the Rescue Jackpot · Stop 'N Score up to 5× · SHUTTLE / STATION awards",
    image: "images/space-station.webp",
    difficulty: "Medium", diffClass: "diff-medium", era: "SS",

    /* ── QUICK GUIDE (30–90 s read) ───────────────────────────── */
    quick: {
      goal: "Two ways to score: <strong>Multiball</strong> (dock two balls, start it, re-dock two for the <strong>Rescue Jackpot</strong>), and <strong>Stop 'N Score</strong> — a ramp shot timed on a value cycling 20K–99K, multiplied up to <strong>5×</strong> by the U-S-A lanes. Loft's rulesheet rates the 5× Stop 'N Score as the big points.",
      steps: [
        { title: "Dock two balls",
          body: "Knock down the ramp <strong>drop target</strong>, then shoot the <strong>ramp</strong> (easiest from the left flipper) — or a full left orbit into the centre popper. The rotating diverter sends the ball to an empty dock." },
        { title: "Start and re-dock",
          body: "Shoot the <strong>up-kicker</strong> (past the drop targets; good from the right flipper) or the centre popper to start 3-ball Multiball. Re-dock two balls = <strong>Rescue Jackpot</strong> (200K, +10K for each Multiball that ends without it)." },
        { title: "Build the Stop 'N Score multiplier",
          body: "Each U-S-A completion (lanes under the mini-playfield, reached by weak orbit shots or pop rebounds) adds 1×, up to 5×. The multiplier resets each ball — cash it before you drain." },
        { title: "Cash Stop 'N Score",
          body: "The ramp <strong>drop target</strong> starts a 25 s timer at your current multiplier: catch on the left flipper and shoot the ramp near 99K (up to ~495K). Build U-S-A before knocking it down; per Zen, if the diverter points at the left dock the value is paid at the habitrail switch, so shoot a little earlier." },
        { title: "SHUTTLE / STATION awards",
          body: "Completing either target set awards its lit prize (150K + hold bonus, 75K…). The right spot target re-rolls one award (Zen: toggle it with both flippers to the set with the worse prize)." },
      ],
      shots: [
        { name: "Ramp", why: "Docks, re-docks, Stop 'N Score collect." },
        { name: "Up-kicker (right popper)", why: "Starts Multiball; feeds the mini-playfield 1-2-3 lanes." },
        { name: "Ramp drop target", why: "Starts Stop 'N Score." },
      ],
      avoid: [
        "After Multiball you must complete 1-2-3 before docking again.",
      ],
      target: "Milestones: a Rescue Jackpot = good game. A 5× Stop 'N Score near 99K = great.",
    },

    info: {
      stats: [
        { label: "Manufacturer", value: "Williams" },
        { label: "Year",         value: "1987" },
        { label: "Design",       value: "Barry Oursler" },
        { label: "Software",     value: "Ed Boon" },
        { label: "Platform",     value: "System 11B" },
        { label: "Production",   value: "≈3,804 units" },
      ],
      theme: "Dock the shuttles Liberty and Defender at a space station whose rotating diverter routes ramp shots into two ball locks. Software by Ed Boon, later co-creator of Mortal Kombat.",
      features: [
        { name: "Ramp + Space Station diverter", desc: "Sends the ball to an empty dock; collects Stop 'N Score." },
        { name: "Ramp drop target", desc: "Mostly blocks the ramp; hitting it starts Stop 'N Score." },
        { name: "Centre popper / up-kicker", desc: "Centre popper (round the back past U-S-A) feeds a dock; the right popper (past the drop targets) feeds the mini-playfield. Either starts Multiball with two docked." },
        { name: "Mini-playfield 1-2-3 lanes", desc: "Raise the jet value (500 → 3,000) and relight docking." },
        { name: "U-S-A lanes", desc: "Under the mini-playfield: Stop 'N Score multiplier up to 5×." },
        { name: "3 drop targets", desc: "Bonus multiplier up to 7×; 4× lights extra ball." },
        { name: "SHUTTLE (7) + STATION (3+4) targets", desc: "Random awards set each ball; right spot target re-rolls one." },
        { name: "Re-entry kickback", desc: "Left outlane, lit at the start of each ball." },
      ],
      scoring: [
        { key: "Stop 'N Score",       val: "20K–99K × up to 5×" },
        { key: "Rescue Jackpot",      val: "200K, +10K per Multiball without it; resets to 200K when collected (Zen)" },
        { key: "SHUTTLE/STATION",     val: "Special, EB, 50K + kickback, 50K + bonus ball, 150K + hold bonus, 75K, 25K" },
        { key: "Drop target set",     val: "52K (132K in one shot, Zen) + bonus X" },
        { key: "Jets",                val: "500 → 3,000 per hit (held)" },
        { key: "Right outlane",       val: "100K when lit" },
      ],
      rules: [
        "<strong>Docking:</strong> 'Dock when lit' must be lit (1-2-3 relights it). A ramp shot with two docked swaps balls.",
        "<strong>Multiball:</strong> two docked + either popper. Re-dock two = Rescue Jackpot.",
        "<strong>Bonus ball</strong> (from the 50K + Bonus Ball SHUTTLE/STATION award): a timed extra ball after the last ball (25 s, 45 s if you had Multiball) — may be disabled in competition.",
        "<strong>Memory (factory):</strong> SHUTTLE, STATION, 1-2-3, U-S-A and jet value carry over; bonus X and the Stop 'N Score multiplier reset each ball.",
        "Extra balls and Specials are void under comp settings.",
      ],
      benchmarks: [
        { score: "5× Stop 'N Score + Rescue Jackpot", label: "Great game" },
        { score: "Rescue Jackpot",                    label: "Good game" },
        { score: "Multiball started",                 label: "Baseline" },
      ],
      resources: [
        { name: "Rulesheet (pinball.org)", url: "https://www.pinball.org/rules/spacestation.html", icon: "📖" },
        { name: "IPDB Entry",              url: "https://www.ipdb.org/machine.cgi?id=2261", icon: "🎯" },
        { name: "Pinside Game Page",       url: "https://pinside.com/pinball/machine/space-station", icon: "🕹️" },
      ],
    },

    strategy: {
      skillShot: null,
      multiball: [
        { name: "Docking Multiball", balls: 3,
          locks: "Ramp (or centre popper) twice with 'Dock' lit.",
          start: "Up-kicker or centre popper with two balls docked.",
          jackpots: "Re-dock two balls = Rescue Jackpot (200K, +10K each time it isn't collected).",
          tip: "3-ball Multiball. Re-docking only needs two ramp shots." },
      ],
      goal: "<strong>Max the Stop 'N Score multiplier with U-S-A, then time ramp shots near 99K; dock, start Multiball and re-dock for the Rescue Jackpot.</strong>",
      phases: [
        { num: "Phase 1", title: "Dock", body: "Ramp drop target, then the ramp (or left orbit to the centre popper); up-kicker to start Multiball." },
        { num: "Phase 2", title: "U-S-A", body: "Weak orbits and pop rebounds for U-S-A to raise the multiplier." },
        { num: "Phase 3", title: "Stop 'N Score", body: "Drop target, catch, ramp near 99K." },
      ],
      safeShots: [
        { name: "Ramp from the left flipper", desc: "The key shot; feeds a dock." },
        { name: "Right flipper → drop targets → up-kicker", desc: "A favourite combo: drops for bonus X and into the popper." },
      ],
      avoidShots: [],
      tips: [
        { head: "Toggle the spot target (Zen)", body: "Point it at the set with the poor award so a stray hit doesn't re-roll a good one." },
      ],
      mistakes: [
        "Starting Stop 'N Score at 1× when U-S-A is nearly complete.",
      ],
    },

    hotspots: [
      { x: 80,   y: 54,   type: "key",   label: "RM", name: "Ramp", body: "Docks; Stop 'N Score collect." },
      { x: 64,   y: 20,   type: "key",   label: "UK", name: "Up-kicker (right popper)", body: "Starts Multiball; feeds the 1-2-3 lanes." },
      { x: 56,   y: 23,   type: "key",   label: "DT", name: "Drop Targets", body: "Bonus X up to 7×; 4× lights EB." },
      { x: 32,   y: 16.5, type: "key",   label: "US", name: "U-S-A Lanes", body: "Stop 'N Score multiplier up to 5×." },
      { x: 33,   y: 6,    type: "info",  label: "12", name: "1-2-3 Lanes (mini-playfield)", body: "Jet value; relight docking." },
      { x: 17.5, y: 39,   type: "info",  label: "LO", name: "Left Orbit", body: "To the centre popper; weak shots reach U-S-A." },
      { x: 20.5, y: 61, type: "info",  label: "SH", name: "SHUTTLE Targets", body: "Lit SHUTTLE award." },
      { x: 37,   y: 46,   type: "info",  label: "ST", name: "S-T-A Targets", body: "Part of STATION." },
      { x: 71.5, y: 38, type: "info",  label: "TN", name: "T-I-O-N Targets", body: "Part of STATION." },
      { x: 85.5, y: 57.5, type: "info",  label: "SP", name: "Right Spot Target", body: "Re-rolls a SHUTTLE/STATION award." },
      { x: 79,   y: 57,   type: "key",   label: "RD", name: "Ramp Drop Target", body: "Starts Stop 'N Score; drop it to open the ramp." },
      { x: 50,   y: 16,   type: "info",  label: "CP", name: "Centre Popper (approx.)", body: "End of the left orbit; feeds a dock; starts Multiball." },
      { x: 7,    y: 81, type: "avoid", label: "KB", name: "Left Outlane (Re-entry)", body: "Kickback when lit." },
      { x: 91,   y: 81, type: "avoid", label: "!",  name: "Right Outlane", body: "100K when lit; drain." },
    ],
  };
