  /* ─── THEATRE OF MAGIC ───────────────────────────────────── */
MACHINES['theatreofmagic'] = {
    name: "Theatre of Magic", sub: "1995 · Bally (Williams) · WPC-S",
    tagline: "Theatre Multiball (100M trunk shot) · Tiger Saw Multiball · 8 Illusions · Midnight Madness · Grand Finale",
    image: "images/theatre-of-magic.jpg",
    difficulty: "Medium", diffClass: "diff-medium", era: "DMD",

    /* ── QUICK GUIDE (30–90 s read) ───────────────────────────── */
    quick: {
      goal: "<strong>Theatre Multiball</strong> is the money: hit the <strong>Trunk hole</strong> during the 5-second countdown for <strong>100M</strong>, then Theatre Jackpots (50M + 5M per loop/ramp shot). Add <strong>Tiger Saw Multiball</strong> (captive ball jackpots 30M–70M) and work toward the <strong>Grand Finale</strong> (500M).",
      steps: [
        { title: "Skill shot",
          body: "Plunge when the award you want shows (10M/20M, 2× bonus, +2 hours, Begin Illusion / 2× combos), then shoot the <strong>Trunk</strong> from the right flipper." },
        { title: "Lock for Theatre Multiball",
          body: "Spell MAGIC on the <strong>ramps</strong>, then lock at either inner loop — or shoot the <strong>Rear Trunk Entrance</strong> for a Secret Lock (first two MBs). Lock 2 turns the Trunk to the magnet: hit it to start. Vanish a ball first for 4 balls." },
        { title: "100M + jackpots",
          body: "As the balls come out, shoot the <strong>Trunk hole</strong> during the countdown for 100M. Otherwise the Trunk is lit for the Jackpot (50M, +5M per left lane, inner loops, right ramp, right orbit). Relight with 2, 3, 4… Trunk hits." },
        { title: "Tiger Saw Multiball",
          body: "<strong>Captive ball</strong> 3 times (then 6) lights Vanish at the left lane (40M lock); the <strong>right orbit</strong> starts 2-ball Tiger Saw: captive ball = 30M, 40M … 70M." },
        { title: "Grand Finale",
          body: "Spell THEATRE (left lane), play Theatre Multiball, reach Midnight (right orbit = +1 hour) and start all 8 Illusions (3 Trunk hits, then the hole). Then the left inner loop: 12 ramp/loop shots in 60 s, 50M each, +500M." },
      ],
      shots: [
        { name: "Trunk", why: "Illusions; multiball start; 100M and jackpots; Midnight Madness." },
        { name: "Ramps", why: "MAGIC (locks; right ramp only from the 3rd MB); Spirit Ring; combos." },
        { name: "Captive ball + right orbit", why: "Vanish and Tiger Saw Multiball; clock hours." },
      ],
      avoid: [
        "No ball saver in either multiball — and the Trap Door kickout has none either.",
        "The right inner loop can send the ball straight down the middle on a full loop.",
      ],
      target: "Milestones: the 100M Trunk shot or a couple of Theatre Jackpots = good game. Grand Finale = great.",
    },

    info: {
      stats: [
        { label: "Manufacturer", value: "Williams (Bally label)" },
        { label: "Year",         value: "1995 (March)" },
        { label: "Design",       value: "John Popadiuk" },
        { label: "Software",     value: "Jeff Johnson" },
        { label: "Platform",     value: "WPC-S (DMD)" },
        { label: "Production",   value: "≈6,600 units" },
      ],
      theme: "A magician's theatre: a rotating four-sided Magic Trunk with a hole and a magnet, a Tiger Saw captive ball, a Spirit Ring that lifts the ball between ramps, a Trap Door to the haunted basement, and inlane magnets that save outlane drains (Hocus Pocus).",
      features: [
        { name: "Magic Trunk", desc: "Rotating trunk: plain face, hole (Illusions, jackpots), green-light face, magnet bullseye (multiball start, Midnight Madness). Rear entrance = lock." },
        { name: "Tiger Saw captive ball", desc: "Lights Vanish; Tiger Saw jackpots; 2M when unlit." },
        { name: "Ramps + Spirit Ring", desc: "MAGIC letters; Spirit Ring 10M, 20M, 30M; Raise Trap Door (centre)." },
        { name: "Inner loops (spinner on the right)", desc: "Theatre locks; Grand Finale start; Spirit Cards and Safe Escape Illusions." },
        { name: "Left lane", desc: "THEATRE letters; Vanish lock; extra ball." },
        { name: "Right orbit", desc: "Advances the clock; starts Tiger Saw Multiball." },
        { name: "Trap Door", desc: "4 target hits + centre ramp raise it: 15M and a Basement award (random awards off in tournament mode)." },
        { name: "Hocus Pocus targets", desc: "Light the inlane magnets (outlane saves) for 15 s (not in multiball)." },
      ],
      scoring: [
        { key: "Trunk countdown shot",  val: "100M" },
        { key: "Theatre Jackpot",       val: "50M + 5M per left lane / inner loop / right ramp / right orbit" },
        { key: "Tiger Saw jackpots",    val: "30M, 40M … 70M" },
        { key: "Grand Finale",          val: "50M per shot (12 shots) + 500M" },
        { key: "THEATRE hurry-up",      val: "50M+ (Trunk hole, 10 s)" },
        { key: "Vanish",                val: "40M" },
        { key: "Combos",                val: "2M, 4M, 6M… (×2 with the skill-shot award)" },
        { key: "Bonus X",               val: "Up to 8× (top rollovers)" },
      ],
      rules: [
        "<strong>Illusions</strong> (~20 s each): Tiger Saw, Levitate Woman, Trunk Escape, Spirit Cards, Safe Escape (20M, 20M, 30M), Metamorphosis, Strait Jacket (60M, bumpers), Hat Magic. Trunk hits score 2M, 3M, 4M… in non-Trunk Illusions.",
        "<strong>Midnight Madness:</strong> reaching 12:00 turns the Trunk to the magnet; each catch scores 2× the hour (min 10M) as the clock winds back.",
        "<strong>Bonus</strong> includes Magicianship, THEATRE/MAGIC letters, clock, Illusions and skill shots, × bonus X (can exceed 300M).",
        "<strong>Tournament mode:</strong> the Trap Door scores only 15M (no random Basement awards).",
        "Rules from Bowen Kerins' rulesheet (A 1.0, with 1.3X updates; 1.3X is the final factory code). Extra balls (6:00, third Vanish, Basement) and Specials are void under comp settings.",
      ],
      benchmarks: [
        { score: "Grand Finale",            label: "Great game" },
        { score: "100M trunk shot / jackpots", label: "Good game" },
        { score: "Theatre Multiball",       label: "Baseline" },
      ],
      resources: [
        { name: "Rulesheet (Bowen Kerins)", url: "https://www.pinball.org/rules/theatreofmagic.html", icon: "📖" },
        { name: "IPDB Entry",               url: "https://www.ipdb.org/machine.cgi?id=2845", icon: "🎯" },
        { name: "Pinside Game Page",        url: "https://pinside.com/pinball/machine/theatre-of-magic", icon: "🕹️" },
      ],
    },

    strategy: {
      skillShot: "Plunge when the award you want is on the display (10M or 20M, 2× bonus, advance clock 2 hours, Begin Illusion or 2× Combo), then shoot the Trunk from the right flipper (the hole if an Illusion is lit). Later plunges: the captive ball = +1 hour.",
      multiball: [
        { name: "Theatre Multiball", balls: 3,
          locks: "Spell MAGIC on the ramps (right ramp only from the 3rd MB), then lock at either inner loop (20M each); or a Secret Lock via the Rear Trunk Entrance (first two MBs).",
          start: "After lock 2, hit the Trunk's magnet face.",
          jackpots: "Trunk hole during the 5-second countdown = 100M; then the Jackpot at the Trunk (50M + 5M per left lane / inner loop / right ramp / right orbit), relit by 2, 3, 4, 5 Trunk hits.",
          tip: "With a ball in the Vanish lock it becomes 4-ball." },
        { name: "Tiger Saw Multiball", balls: 2,
          locks: "Captive ball 3 times (then 6) lights Vanish; left lane = 40M lock.",
          start: "Right orbit.",
          jackpots: "Captive ball: 30M, 40M, 50M … 70M; no relight needed.",
          tip: "No ball saver." },
      ],
      goal: "<strong>Theatre Multiball with the 100M countdown shot and Trunk jackpots, Tiger Saw Multiball, and the four Grand Finale tasks (THEATRE, Theatre MB, Midnight, 8 Illusions).</strong>",
      phases: [
        { num: "Phase 1", title: "Skill shot + MAGIC", body: "Trunk skill shot; ramps for MAGIC; Rear Trunk Entrance for a Secret Lock." },
        { num: "Phase 2", title: "Multiballs", body: "100M countdown shot; Theatre Jackpots; Vanish and Tiger Saw." },
        { num: "Phase 3", title: "Grand Finale", body: "THEATRE, Midnight (right orbit), Illusions; then 12 shots for 500M." },
      ],
      safeShots: [
        { name: "Left lane", desc: "Loops back to the right flipper — repeatable for THEATRE and combos." },
        { name: "Centre ramp", desc: "Feeds the left inlane." },
      ],
      avoidShots: [
        { name: "Right inner loop (full)", desc: "Can come straight down the middle." },
      ],
      tips: [
        { head: "Spirit Ring", body: "Light it with a right ramp shot; then 10M, 20M and 30M if repeated quickly." },
        { head: "Hocus Pocus", body: "Hit the targets above the left inlane to activate the inlane magnets (outlane saves) for 15 s." },
      ],
      mistakes: [
        "Hitting another major shot during the 100M countdown (it aborts).",
        "Leaving Illusions too late — they are the hardest Grand Finale task.",
      ],
    },

    hotspots: [
      { x: 36,   y: 32,   type: "key",   label: "TK", name: "Magic Trunk", body: "Illusions; multiball start; 100M countdown; jackpots; Midnight Madness." },
      { x: 52.5, y: 37,   type: "key",   label: "CR", name: "Centre Staircase Ramp", body: "MAGIC; Raise Trap Door; Levitate Woman." },
      { x: 72.5, y: 43,   type: "key",   label: "RR", name: "Right Staircase Ramp", body: "MAGIC; Spirit Ring; Metamorphosis." },
      { x: 22.5, y: 44, type: "key",   label: "CB", name: "Tiger Saw Captive Ball", body: "Vanish; Tiger Saw jackpots." },
      { x: 80.5, y: 44,   type: "key",   label: "RO", name: "Right Orbit", body: "Clock +1 hour; starts Tiger Saw Multiball." },
      { x: 18,   y: 45,   type: "safe",  label: "LL", name: "Left Lane", body: "THEATRE letters; Vanish lock; extra ball." },
      { x: 27.5, y: 35.5, type: "info",  label: "IL", name: "Left Inner Loop", body: "Locks; Grand Finale start." },
      { x: 63,   y: 37.5, type: "info",  label: "IR", name: "Right Inner Loop (Spinner)", body: "Locks; Spirit Cards." },
      { x: 45.8, y: 38.5,   type: "info",  label: "T1", name: "Trap Door Target (left)", body: "4 hits light Raise Trap Door." },
      { x: 56.8, y: 39.5, type: "info",  label: "T2", name: "Trap Door Target (right)", body: "4 hits light Raise Trap Door." },
      { x: 18.5, y: 58.5,   type: "info",  label: "HP", name: "Hocus Pocus Targets", body: "Outlane magnets for 15 s." },
      { x: 12,   y: 80,   type: "avoid", label: "!",  name: "Left Outlane", body: "Inlane magnet save when Hocus Pocus is lit." },
      { x: 82,   y: 80,   type: "avoid", label: "!",  name: "Right Outlane", body: "Inlane magnet save when Hocus Pocus is lit." },
    ],
  };
