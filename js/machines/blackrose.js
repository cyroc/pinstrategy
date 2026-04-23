  /* ─── BLACK ROSE ────────────────────────────────────────── */
MACHINES['blackrose'] = {
    name: "Black Rose", sub: "1992 · Williams/Bally · Standard",
    tagline: "Pirate cannon · Broadside doubling + Sink Ship scoring",
    image: "images/black-rose.png",
    difficulty: "Medium", diffClass: "diff-medium", era: "DMD",

    info: {
      stats: [
        { label: "Manufacturer", value: "Williams (Bally label)" },
        { label: "Year",         value: "1992" },
        { label: "Designers",    value: "John Trudeau & Brian Eddy" },
        { label: "Programmer",   value: "Brian Eddy" },
        { label: "Production",   value: "3,746 units" },
        { label: "Platform",     value: "WPC" },
      ],
      theme: "A pirate ship theme. The Black Rose (your ship) battles enemy ships using the Cannon. Collect Doubloons, complete SINK SHIP letters, and use the Cannon to collect escalating Broadside Lane awards. Whirlpool Multiball unlocks Hidden Treasure.",
      features: [
        { name: "Cannon (Side Ramp)", desc: "Load the Cannon by shooting the Side Ramp. Each load advances the Cannon Level Award. Cannon Level Awards escalate — the most important is <strong>'Double Broadside'</strong> which doubles the Broadside Lane value (up to 32M per hit!)." },
        { name: "Broadside Lane", desc: "Hit this lane to fire the Cannon for your current Cannon Award. With 'Double Broadside': values escalate 1M → 2M → 4M → 8M → 16M → 32M per hit. Highest consistent scoring opportunity." },
        { name: "S-I-N-K S-H-I-P Letters", desc: "Complete SINK and SHIP letter sequences to sink enemy ships. Each completion = significant award + End-of-Ball Bonus increase." },
        { name: "Whirlpool Ramp (9)", desc: "Advance Whirlpool by hitting Ramp repeatedly → lock balls → Whirlpool Multiball. During Multiball: Broadside Lane and ramps for jackpots. Jackpots boosted by current Cannon state." },
        { name: "Treasure Chest", desc: "Collect Doubloons (pirate currency) for Treasure Chest awards. Doubloons earned via completing letters, ramp shots, and specific features." },
        { name: "Bonus Multiplier", desc: "Built via rollover completions. Max 5×. Applied to End-of-Ball Bonus." },
      ],
      scoring: [
        { key: "Broadside — base",            val: "1M" },
        { key: "Broadside — Double Broadside", val: "1M → 2M → 4M → 8M → 16M → 32M" },
        { key: "SINK SHIP completion",         val: "Major award + bonus" },
        { key: "Whirlpool Multiball Jackpot",  val: "Escalating via Cannon state" },
        { key: "Hidden Treasure",              val: "Large award during Whirlpool" },
        { key: "Bonus Multiplier (max)",       val: "5×" },
      ],
      rules: [
        "<strong>Cannon Level = key to Broadside value.</strong> Load Cannon via Side Ramp to advance level. The 'Double Broadside' Cannon Award doubles the escalating Broadside values.",
        "<strong>Broadside Lane becomes the primary scoring engine</strong> once Double Broadside is active — hit it repeatedly for exponentially growing values.",
        "<strong>SINK SHIP letters</strong> advance via target hits across the playfield. Each complete set sinks an enemy ship for a bonus award.",
        "<strong>Whirlpool Multiball</strong> via Whirlpool Ramp lock shots. During Multiball: Broadside and ramp shots for jackpots.",
      ],
      benchmarks: [
        { score: "300M+", label: "Excellent — Double Broadside maxed + Multiball" },
        { score: "80M+",  label: "Good — Cannon loaded, multiple SINK SHIP" },
        { score: "< 20M", label: "Cannon not advanced" },
      ],
      resources: [
        { name: "IPDB Entry",       url: "https://www.ipdb.org/machine.cgi?id=257",                     icon: "🎯" },
        { name: "Pinside Game Page",url: "https://pinside.com/pinball/machine/black-rose",               icon: "🕹️" },
        { name: "Zen Studios Guide",url: "https://zensite.wpenginepowered.com/wp-content/uploads/2024/04/WP-Black-Rose-Pinball-Guide-by-ShoryukenToTheChin.pdf", icon: "📖" },
      ],
    },

    strategy: {
      skillShot: "Plunge to hit the Skill Shot target. Advances toward Cannon Level or earns initial points. Prioritize whatever gets Cannon loaded fastest.",
      multiball: "<strong>Whirlpool Multiball:</strong> Hit Whirlpool Ramp (9) repeatedly to advance and lock balls → Multiball. During Multiball: Broadside Lane and ramps for jackpots. Jackpot values scale with current Cannon Level — load Cannon before Multiball for maximum jackpot returns.",
      goal: "Load the Cannon via Side Ramp shots to advance Cannon Level Awards. Acquire 'Double Broadside' Cannon Award, then repeatedly hit the Broadside Lane for exponentially growing values (1M → 32M per hit). Complete SINK SHIP letters for bonus awards. Activate Whirlpool Multiball with Cannon pre-loaded for maximum jackpots.",
      phases: [
        { num: "Phase 1 · Cannon Loading", title: "Side Ramp → Cannon Level", body: "Hit Side Ramp repeatedly to load Cannon and advance through Cannon Level Awards. Work toward 'Double Broadside'. Collect SINK/SHIP letters along the way." },
        { num: "Phase 2 · Broadside Loop", title: "Double Broadside = Exponential Value", body: "With Double Broadside active: hit Broadside Lane for 1M → 2M → 4M → 8M → 16M → 32M per hit. This is the primary scoring engine. Keep the Cannon loaded by returning to Side Ramp periodically." },
        { num: "Phase 3 · Whirlpool Multiball", title: "Cannon-Boosted Jackpots", body: "Advance Whirlpool Ramp for lock → Multiball. Broadside Lane and ramp shots during Multiball score scaled jackpots. Maintain Cannon state for maximum returns." },
      ],
      safeShots: [
        { name: "Side Ramp (Cannon loading)", desc: "Primary safe shot. Cannon Level advancement is the game's key mechanic." },
        { name: "Broadside Lane", desc: "Cannon firing / scoring lane. With Double Broadside active, this is your primary scoring destination." },
      ],
      avoidShots: [
        { name: "Whirlpool Ramp without Multiball setup purpose", desc: "Only shoot when actively building toward Whirlpool lock." },
      ],
      tips: [
        { head: "Double Broadside is everything", body: "The Cannon Level Award 'Double Broadside' transforms the Broadside Lane from a 1M shot to an exponentially escalating engine reaching 32M per hit. Prioritize loading Cannon to reach this award as fast as possible." },
      ],
      mistakes: [
        "Not loading Cannon consistently via Side Ramp — missing the Double Broadside escalation.",
        "Starting Whirlpool Multiball before reaching Double Broadside Cannon Award — reduced jackpot values.",
      ],
    },

    hotspots: [
      { x:18, y:28, type:"key",   label:"SR", name:"Side Ramp (Cannon Load)",   body:"<strong>Load the Cannon here.</strong> Cannon fires at centre targets for Broadside sequence. Load every opportunity — engine of all high-value scoring." },
      { x:50, y:20, type:"key",   label:"BS", name:"Broadside Targets",         body:"<strong>Double Broadside: 1M→2M→4M→8M→16M→32M, doubling each hit.</strong> Triggered by Cannon shots. Keep Broadside active — each hit is worth more than the last." },
      { x:72, y:28, type:"safe",  label:"RR", name:"Right Ramp (Treasure)",     body:"Treasure Ramp. Advances SINK SHIP letters and bonus. Unlocks Whirlpool Multiball when sequence complete. Reliable from left flipper." },
      { x:48, y:38, type:"key",   label:"SS", name:"SINK SHIP Targets",         body:"Complete S-I-N-K-S-H-I-P → Whirlpool Multiball. Each letter = bonus advance. Multiball Jackpot at Broadside position." },
      { x:14, y:42, type:"safe",  label:"LO", name:"Left Orbit",                body:"Safe shot. Feeds Cannon load area via upper left." },
      { x:50, y:52, type:"info",  label:"WP", name:"Whirlpool Saucer",          body:"Awards Whirlpool bonus and Doubloon values. Collect here after SINK SHIP for Multiball start." },
      { x:7,  y:82, type:"avoid", label:"!",  name:"Left Outlane",              body:"Open outlane. Side Ramp misses feed left drain — deliberate power on Side Ramp." },
      { x:88, y:82, type:"avoid", label:"!",  name:"Right Outlane",             body:"Open outlane. Right Ramp misses slide right. Controlled shots only." },
    ],
  };
