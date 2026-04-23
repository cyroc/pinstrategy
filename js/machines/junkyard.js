  /* ─── JUNK YARD ─────────────────────────────────────────── */
MACHINES['junkyard'] = {
    name: "Junk Yard", sub: "1996 · Williams · Standard",
    tagline: "Game-wide multiplier carryover · Bus Ramp + Crane Lane Multiball",
    image: "images/junk-yard.png",
    difficulty: "Medium", diffClass: "diff-medium", era: "DMD",

    info: {
      stats: [
        { label: "Manufacturer", value: "Williams Electronics" },
        { label: "Year",         value: "1996" },
        { label: "Designers",    value: "Barry Oursler & Louis Koziarz" },
        { label: "Programmer",   value: "Dwight Sullivan" },
        { label: "Production",   value: "3,013 units" },
        { label: "Platform",     value: "WPC" },
      ],
      theme: "A junk yard theme with Bud and Buzz (two junkyard scavengers), a working Crane toy, a Bus, and various contraptions assembled from salvaged parts. Complete Adventures and collect all Junk pieces for Outer Space wizard mode.",
      features: [
        { name: "Bonus Multiplier (GAME-WIDE!)", desc: "<strong>The Bonus Multiplier carries over the entire game</strong> — not just one ball. Build it to 6× as early as possible via D-O-G completions. Once at 6×, it stays at 6× for the whole game." },
        { name: "D-O-G (Alley Ramp)", desc: "Shoot the Alley Ramp (12) three times to complete D-O-G = +1× Bonus Multiplier + Video Mode. This is the primary multiplier method. After 6×: each D-O-G = 250K." },
        { name: "Bus Ramp (3)", desc: "Primary scoring shot. Each hit = 1 Bus Ride. Magic Bus lights at 1st, 4th, 11th rides with special awards. First hit always has 'Collect Junk' lit. Top choices: 'Start Multiball', 'Lite Jackpot', 'Bonus Multiplier'." },
        { name: "Crane Lane (6)", desc: "Centre shot accessible from either flipper. Each shot = 3 M-U-L-T-I-B-A-L-L letters ('Sneak-In', 100K). Three Crane Lane shots = all 9 letters collected → Multiball ready." },
        { name: "Left/Right Target Banks (1,14)", desc: "Complete both to light Ball Recycle (kickback) in both outlanes. Critical on open outlane settings. Each bank has 3 targets." },
        { name: "Upper Car Targets", desc: "During Multiball: each hit = +75K to Jackpot value (max 3.025M). Hit several before collecting Crane Lane Jackpot." },
        { name: "Wrecking Ball (7)", desc: "Centre ball target. Hits contribute letters to M-U-L-T-I-B-A-L-L. Can also build Crane Multiball progress, but slower than Crane Lane Sneak-Ins." },
      ],
      scoring: [
        { key: "Skill Shot — X Bonus",      val: "+1× Bonus Multiplier immediately" },
        { key: "D-O-G (Alley Ramp ×3)",    val: "+1× Bonus Multiplier (game-wide)" },
        { key: "Bus Ramp (Magic Bus)",      val: "Variable: 'Start Multiball', multiplier, Jackpot" },
        { key: "Crane Lane (Sneak-In)",     val: "100K per shot + 3 MULTIBALL letters" },
        { key: "Multiball Jackpot",         val: "1M → 3.025M (Upper Car Targets)" },
        { key: "Multiball Super Jackpot",   val: "3M (after first Jackpot)" },
        { key: "Bonus Multiplier (max)",    val: "6× — game-wide permanent" },
      ],
      rules: [
        "<strong>Bonus Multiplier carries over ALL balls.</strong> Build to 6× as early as possible via D-O-G Alley Ramp completions. It never resets during the game.",
        "<strong>Skill Shot</strong> — press Launch and cycle with Left Flipper to select reward. Best: 'X Bonus' (+1× Multiplier immediately) or 'Collect Junk'.",
        "<strong>Crane Lane Sneak-In</strong> is fastest Multiball path: 3 shots = all 9 MULTIBALL letters. Far faster than grinding Wrecking Ball hits.",
        "<strong>During Multiball:</strong> Hit Upper Car Targets first to boost Jackpot (+75K each). Then collect Jackpot at Crane Lane. Super Jackpot (3M) available after first Jackpot — stay in Multiball for it.",
        "<strong>Ball Recycle:</strong> Complete Left and Right Target Banks to light kickback in both outlanes. Critical on strict settings.",
      ],
      benchmarks: [
        { score: "50M+",  label: "Excellent — 6× game multiplier + multiple Multiballs" },
        { score: "15M+",  label: "Good — Multiball with partial multiplier" },
        { score: "< 5M",  label: "Multiplier not built, Multiball missed" },
      ],
      resources: [
        { name: "IPDB Entry",       url: "https://www.ipdb.org/machine.cgi?id=1336",                    icon: "🎯" },
        { name: "Pinside Game Page",url: "https://pinside.com/pinball/machine/junk-yard",                icon: "🕹️" },
        { name: "Zen Studios Guide",url: "http://zensite.wpenginepowered.com/wp-content/uploads/2021/02/WP-Junkyard-Pinball-Guide-by-ShoryukenToTheChin.pdf", icon: "📖" },
      ],
    },

    strategy: {
      skillShot: "Press Launch and use Left Flipper to cycle which reward is highlighted. Select <strong>'X Bonus'</strong> for immediate +1× Bonus Multiplier, or <strong>'Collect Junk'</strong> to advance toward Junk Champion.",
      multiball: "<strong>Crane Lane Sneak-In (fastest path):</strong> 3 Crane Lane (6) shots = all 9 M-U-L-T-I-B-A-L-L letters → Multiball ready → Crane Lane again to start. During Multiball: hit Upper Car Targets (top of playfield) first — each = +75K to Jackpot (max 3.025M). Then Crane Lane for Jackpot. After Jackpot: Super Jackpot = 3M at Crane Lane. If no Jackpot: 'Last Chance' lights 12 seconds at Crane Lane.",
      goal: "Build Bonus Multiplier to 6× via D-O-G Alley Ramp completions — this carries the entire game. Complete Left/Right Target Banks for Ball Recycle. Bus Ramp for Magic Bus awards. Crane Lane for fast Multiball setup (3 shots). During Multiball: Upper Car Targets → Crane Lane Jackpot → Super Jackpot (3M).",
      phases: [
        { num: "Phase 1 · Early Game", title: "Recycle + Multiplier + Multiball Setup", body: "'X Bonus' Skill Shot. Complete Left/Right Target Banks for Ball Recycle in both outlanes. Alley Ramp ×3 for D-O-G (+1× Multiplier). Bus Ramp first hit (Collect Junk lit at game start). Crane Lane ×3 for Multiball readiness." },
        { num: "Phase 2 · Mid Game", title: "Magic Bus + Multiball + Junk", body: "Bus Ramp aggressively — Magic Bus at 1st, 4th, 11th ride. Prioritize 'Start Multiball' or 'Lite Jackpot'. Between Magic Bus windows: alternate Alley Ramp (D-O-G) and Crane Lane (Sneak-Ins). Collect Junk via Toilet Ramp 'Choose Junk' (25 sec after Bus Ramp Junk collection)." },
        { num: "Phase 3 · Late Game", title: "Multiball + Adventures", body: "During Multiball: Upper Car Targets → Crane Lane Jackpot → Super Jackpot (3M). After Multiball: D-O-G continues to add permanent multiplier value. Assemble Contraptions → Adventures at Sewer → Outer Space wizard mode." },
      ],
      safeShots: [
        { name: "Bus Ramp (3)", desc: "Most reliable ramp. Centre-right, from left flipper. Magic Bus awards drive the game." },
        { name: "Alley Ramp (12)", desc: "Right ramp. D-O-G letters for permanent multiplier. Safe from right flipper." },
        { name: "Crane Lane (6)", desc: "Centre lane. Sneak-In shots and Jackpots during Multiball. Full-power from right flipper." },
      ],
      avoidShots: [
        { name: "Wrecking Ball (7) for MULTIBALL letters", desc: "Unpredictable return. Use Crane Lane Sneak-Ins instead — 3 shots vs. grinding Wrecking Ball." },
        { name: "Sewer Sink Hole (13) without purpose", desc: "Don't randomly shoot — save for Adventure activation, Extra Ball, or specific modes." },
      ],
      tips: [
        { head: "Multiplier never resets", body: "Unlike most tables, Junk Yard's Bonus Multiplier is permanent. Every D-O-G completion all game adds +1× permanently. Reach 6× as fast as possible — often achievable on ball 1 with Skill Shot + two D-O-G completions." },
        { head: "Crane Lane beats Wrecking Ball", body: "3 Crane Lane shots collect all 9 MULTIBALL letters (100K each + Sneak-In). Wrecking Ball hits only give 1 letter each. The math is simple: Crane Lane for Multiball, always." },
        { head: "Magic Bus is the first Bus Ramp hit", body: "Magic Bus lights at the 1st ride. Your very first Bus Ramp hit triggers Magic Bus — shoot Bus Ramp immediately after launch for the first Magic Bus award." },
      ],
      mistakes: [
        "Not completing Left/Right Target Banks early — no Ball Recycle on open outlanes means constant drain risk.",
        "Missing Magic Bus window (stays lit ~25 seconds) after Bus Ramp hits.",
        "Using Wrecking Ball for MULTIBALL letters instead of 3 Crane Lane Sneak-Ins.",
        "During Multiball, shooting Crane Lane immediately without Upper Car Target hits first — missing Jackpot value.",
        "Forgetting the Bonus Multiplier carries over — treating each ball as a fresh start.",
      ],
    },

    hotspots: [
      { x:20, y:25, type:"key",   label:"CR", name:"Crane Lane (Left)",         body:"<strong>Primary feature.</strong> Advances Crane toward MULTIBALL letters. 3 shots = all letters → Multiball (Sneak-In). Also fastest path to permanent Bonus Multiplier (max 6×)." },
      { x:72, y:28, type:"key",   label:"BU", name:"Bus Ramp",                  body:"<strong>Magic Bus — huge bonus at 1st, 4th, and 11th rides.</strong> Game-wide permanent Bonus Multiplier makes milestone awards worth 2×–6× base value." },
      { x:50, y:20, type:"key",   label:"WR", name:"Wreck (Top Ramp)",          body:"Hits scrap car toy. Each Wreck advances Bonus Multiplier and scores Wreck Bonus. During Multiball: Jackpot. Primary Boss Battle shot." },
      { x:48, y:40, type:"safe",  label:"DT", name:"Dog Target Bank",           body:"Complete D-O-G for Sparky Multiball qualification and Bonus Multiplier advance. Wide bank, easy from either flipper." },
      { x:14, y:44, type:"safe",  label:"LO", name:"Left Orbit",                body:"Feeds jet bumpers and left rollover for Bonus Multiplier. Safe from right flipper." },
      { x:48, y:55, type:"info",  label:"UC", name:"Upper Car Targets",         body:"Hit during Multiball for +75K each (permanent). Stacks with 6× multiplier = 450K per hit sustained." },
      { x:7,  y:82, type:"avoid", label:"!",  name:"Left Outlane",              body:"Open outlane. Permanent Bonus Multiplier makes each ball extra valuable — extreme caution." },
      { x:88, y:82, type:"avoid", label:"!",  name:"Right Outlane",             body:"Open outlane. Bus Ramp misses slide right — full-power deliberate shots only." },
    ],
  };
