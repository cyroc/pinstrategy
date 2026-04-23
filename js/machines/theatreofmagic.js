  /* ─── THEATRE OF MAGIC ──────────────────────────────────── */
MACHINES['theatreofmagic'] = {
    name: "Theatre of Magic", sub: "1995 · Bally · Standard",
    tagline: "Magic illusions · 8 Illusions → 500M Grand Finale",
    image: "images/theatre-of-magic.jpg",
    difficulty: "Medium", diffClass: "diff-medium", era: "DMD",

    info: {
      stats: [
        { label: "Manufacturer", value: "Williams (Bally label)" },
        { label: "Year",         value: "1995" },
        { label: "Designer",     value: "John Popadiuk" },
        { label: "Programmer",   value: "Jeff Johnson" },
        { label: "Production",   value: "6,600 units" },
        { label: "Platform",     value: "WPC" },
      ],
      theme: "A theatre of magic with a magician theme. Features an animated Trunk toy, Tiger Saw, Hocus Pocus magnets, and 8 magic Illusions to unlock. Complete all 8 Illusions for the Grand Finale wizard mode (500M).",
      features: [
        { name: "Trunk (Skill Shot / Right Orbit)", desc: "The skill shot selects from multiple awards via the Trunk. Best choices: '20 Million', 'Bonus 2×', 'Magic Letter'. Right Orbit also goes through the Trunk for Theatre Clock advancement." },
        { name: "Theatre Clock (Right Orbit)", desc: "Advance clock to Midnight via Right Orbit shots. Midnight activates Magic Multiball. Each Right Orbit also scores the current clock value." },
        { name: "MAGIC Letters", desc: "Collect M-A-G-I-C letters via specific shots. All 5 = Magic Multiball (3-ball, 100M jackpot at Centre Ramp)." },
        { name: "Hocus Pocus Magnets", desc: "Playfield magnets that can grab and redirect the ball. Used for ball saves — press the button when ball is near an outlane to fire the magnet. Each Hocus Pocus magnet save reduces remaining saves for the game." },
        { name: "Tiger Saw", desc: "Activates Tiger Saw Multiball (2-ball). Jackpot at Centre Ramp." },
        { name: "8 Illusions", desc: "Complete all 8 magic illusions (each activated via specific mode completions) → Grand Finale wizard mode = 500M." },
        { name: "Captive Ball", desc: "3 hits → Left Orbit → 40M 'Ball Vanished' award + adds 4th ball to next Magic Multiball." },
      ],
      scoring: [
        { key: "Skill Shot ('20 Million')",  val: "20M immediate" },
        { key: "Magic Multiball Jackpot",    val: "100M" },
        { key: "Grand Finale",               val: "500M" },
        { key: "Ball Vanished (Captive ×3)", val: "40M + 4th Multiball ball" },
        { key: "Bonus Multiplier (max)",     val: "8× (via rollovers)" },
      ],
      rules: [
        "<strong>Skill Shot:</strong> Select best Trunk award — '20 Million' or 'Bonus 2×' are highest priority each ball.",
        "<strong>Magic Multiball:</strong> Collect M-A-G-I-C letters → 3-ball (or 4-ball with Ball Vanished) Multiball. Centre Ramp = 100M Jackpot.",
        "<strong>Hocus Pocus magnets</strong> are limited ball saves — use them when ball is heading down outlane. They're finite; use them wisely.",
        "<strong>8 Illusions</strong> unlocked through specific mode completions. All 8 → Grand Finale (500M).",
        "<strong>Bonus Multiplier</strong> builds to 8× via top lane rollover completions. Flip to cycle lit lanes.",
      ],
      benchmarks: [
        { score: "1B+",   label: "Excellent — Grand Finale + multiple Multiball Jackpots" },
        { score: "300M+", label: "Good — Magic Multiball completed" },
        { score: "< 50M", label: "MAGIC letters not completed" },
      ],
      resources: [
        { name: "IPDB Entry",       url: "https://www.ipdb.org/machine.cgi?id=2528",                    icon: "🎯" },
        { name: "Pinside Game Page",url: "https://pinside.com/pinball/machine/theatre-of-magic",         icon: "🕹️" },
        { name: "Zen Studios Guide",url: "https://zenstudios.com/pinball-table-guides",                  icon: "📖" },
      ],
    },

    strategy: {
      skillShot: "Use the Trunk to select <strong>'20 Million'</strong> (immediate 20M) or <strong>'Bonus 2×'</strong> (doubles current bonus multiplier) each ball. '20 Million' is the safest consistent choice.",
      multiball: "<strong>Magic Multiball (3–4 ball):</strong> Collect M-A-G-I-C letters → Centre Ramp = 100M Jackpot. Before activating, hit Captive Ball 3× → Left Orbit for 'Ball Vanished' (40M + adds 4th ball). <strong>Tiger Saw Multiball (2-ball):</strong> Secondary multiball with Centre Ramp jackpot. Stack multiballs when possible.",
      goal: "Select '20 Million' or 'Bonus 2×' Skill Shot each ball. Build Bonus Multiplier to 8× via top lane rollovers. Advance Theatre Clock to Midnight via Right Orbit. Collect MAGIC letters for Magic Multiball (100M jackpot). Complete Captive Ball ×3 first for Ball Vanished (40M + 4-ball Multiball). Work through all 8 Illusions for Grand Finale (500M). Use Hocus Pocus magnets wisely for outlane saves.",
      phases: [
        { num: "Phase 1 · Early Ball", title: "Skill Shot + Multiplier + Letters", body: "'20 Million' or 'Bonus 2×' Skill Shot. Cycle top lanes for Bonus Multiplier (max 8×). Captive Ball ×3 → Left Orbit for Ball Vanished (40M). Collect MAGIC letters via designated shots." },
        { num: "Phase 2 · Magic Multiball", title: "100M Jackpot", body: "All MAGIC letters → Magic Multiball (3 or 4 balls). Centre Ramp = 100M Jackpot. Keep multiple balls in play. Tiger Saw Multiball for additional jackpot opportunities." },
        { num: "Phase 3 · Illusions + Grand Finale", title: "500M Wizard Mode", body: "Complete all 8 Illusions through mode play → Grand Finale (500M). Each Illusion unlocked via specific mode completions. The Grand Finale is the ultimate goal." },
      ],
      safeShots: [
        { name: "Right Orbit (Theatre Clock)", desc: "Primary clock-advancing shot. Reliable. Works toward Midnight Multiball and accumulates clock value scores." },
        { name: "Centre Ramp", desc: "Magic Multiball Jackpot (100M). Tiger Saw jackpot. Most important Multiball shot." },
      ],
      avoidShots: [
        { name: "Tiger Saw without Multiball lit", desc: "Moderate-risk shot. Only target when Tiger Saw Multiball is actively set up." },
      ],
      tips: [
        { head: "Captive Ball first, Multiball second", body: "Before starting Magic Multiball, hit Captive Ball 3× → Left Orbit for 'Ball Vanished' (40M instant + adds 4th ball to Multiball). A 4-ball Multiball gives more chances at the 100M Centre Ramp Jackpot." },
        { head: "Hocus Pocus magnets are finite", body: "Each magnet save is consumed. Reserve them for balls heading down outlanes on full shots — don't waste them on balls you could flip normally." },
      ],
      mistakes: [
        "Starting Magic Multiball without Ball Vanished — missing the 4th ball and 40M bonus.",
        "Not completing top lane rollovers for Bonus Multiplier — 8× is achievable and significantly amplifies the end-of-ball bonus.",
        "Wasting Hocus Pocus magnet saves on recoverable balls.",
      ],
    },

    hotspots: [
      { x:50, y:18, type:"key",   label:"TK", name:"Trunk (Skill Shot / Lock)", body:"<strong>Skill Shot and Multiball lock.</strong> Plunge for '20 Million' or 'Bonus 2×'. Lock here for Magic Multiball. During Grand Finale: Trunk shots score Jackpots." },
      { x:18, y:25, type:"key",   label:"LR", name:"Left Ramp",                 body:"Primary ramp. Advances MAGIC letters → 8 Illusions toward Grand Finale (500M). During Magic Multiball: 100M Jackpot. Most reliable scoring shot." },
      { x:74, y:25, type:"key",   label:"RR", name:"Right Ramp",                body:"Mirror of Left Ramp. MAGIC letters and Illusion count. During Multiball: Super Jackpot target. Alternate with Left Ramp during Multiball." },
      { x:50, y:38, type:"key",   label:"CB", name:"Captive Ball",              body:"<strong>Hit 3× = Ball Vanished (4th ball launch).</strong> Key to extending Multiball. Also Tiger Saw illusion bonus. Hit opportunistically." },
      { x:72, y:42, type:"safe",  label:"RS", name:"Right Saucer (Hocus Pocus)", body:"Saves ball when Hocus Pocus magnet fires — finite uses per ball. Scores Hocus Pocus bonus. Reliable from left flipper." },
      { x:14, y:42, type:"safe",  label:"LO", name:"Left Orbit",                body:"Feeds bumpers. Illusion count advance. Bonus Multiplier building." },
      { x:48, y:55, type:"info",  label:"IL", name:"Illusion Targets",          body:"8 distinct Illusions. Complete all 8 → Grand Finale (500M). MAGIC letters advance Illusions." },
      { x:7,  y:82, type:"avoid", label:"!",  name:"Left Outlane",              body:"Open outlane. Left orbit and left ramp misses feed here. Trap carefully." },
      { x:88, y:82, type:"avoid", label:"!",  name:"Right Outlane",             body:"Open outlane. Full-power controlled shots only on Right Ramp." },
    ],
  };
