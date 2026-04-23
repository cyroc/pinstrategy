  /* ─── ATTACK FROM MARS ──────────────────────────────────── */
MACHINES['attackfrommars'] = {
    name: "Attack from Mars", sub: "1995 · Williams/Bally · Standard",
    tagline: "Alien invasion · bonus multiplier stacking + Martian Multiball",
    image: "images/attack-from-mars.jpg",
    difficulty: "Medium", diffClass: "diff-medium", era: "DMD",

    info: {
      stats: [
        { label: "Manufacturer", value: "Williams (Bally label)" },
        { label: "Year",         value: "1995" },
        { label: "Designer",     value: "Brian Eddy" },
        { label: "Programmer",   value: "Lyman F. Sheats" },
        { label: "Production",   value: "3,450 units" },
        { label: "Platform",     value: "WPC" },
      ],
      theme: "Martians attack Earth's cities and famous landmarks. Players defend against 5 attack waves, then activate Martian Attack Multiball. Each destroyed Martian adds 250M to the end-of-ball bonus. With a maxed bonus multiplier, the bonus alone can reach hundreds of billions of points.",
      features: [
        { name: "Force Field Targets / UFO Saucer", desc: "Centre saucer behind force field targets. 5 Attack Waves must be completed to unlock Martian Attack Multiball. Each Wave = hit Force Field Targets when lit, then shoot UFO." },
        { name: "Attack Targets Bank (6)", desc: "Primary standup targets. Build Attack Waves by completing them. Lock shots for Multiball come from this bank when Force Field Targets are lit." },
        { name: "Stroke of Luck Sinkhole", desc: "Centre sinkhole. Random awards. Skill Shot target. Also resets Bonus Multiplier potential. <strong>One of the best shots on the table for random high-value awards.</strong>" },
        { name: "Martian Targets", desc: "Four Martian standup targets. During Martian Attack Multiball: each Martian destroyed = +250M to End-of-Ball Bonus." },
        { name: "Bonus Multiplier", desc: "Built via Skill Shots (+5× each!) and rollover completions. Can reach extremely high values — this is the key to astronomical scores." },
        { name: "Left/Right Ramps", desc: "Primary flow shots. Score multipliers and mode progress. Safe shots for general play." },
      ],
      scoring: [
        { key: "Skill Shot bonus multiplier",  val: "+5× per Skill Shot (stacks!)" },
        { key: "Martian destroyed (bonus)",    val: "+250M to End-of-Ball Bonus" },
        { key: "Bonus Multiplier",             val: "Can reach 250×+ with repeated Skill Shots" },
        { key: "Stroke of Luck",               val: "Random (can be very high)" },
        { key: "Force Field / UFO shots",      val: "Mode-dependent (escalating)" },
      ],
      rules: [
        "<strong>Skill Shot adds 5× to Bonus Multiplier</strong> each time — this stacks! Repeated Skill Shots over multiple balls can push the multiplier into the hundreds.",
        "<strong>5 Attack Waves</strong> must be completed sequentially → unlocks Martian Attack Multiball. Each wave = specific target sequence.",
        "<strong>Martian Attack Multiball:</strong> Each Martian hit = +250M to End-of-Ball Bonus. With a high multiplier, bonus payouts become astronomical.",
        "<strong>Stroke of Luck</strong> is the Skill Shot target — plunge to land ball there for +5× Bonus Multiplier and a random award.",
      ],
      benchmarks: [
        { score: "2B+",   label: "Excellent — Multiball + maxed Martians + high multiplier" },
        { score: "500M+", label: "Good — Multiball reached with some Martians" },
        { score: "< 100M", label: "Attack Waves not completed" },
      ],
      resources: [
        { name: "IPDB Entry",       url: "https://www.ipdb.org/machine.cgi?id=125",                     icon: "🎯" },
        { name: "Pinside Game Page",url: "https://pinside.com/pinball/machine/attack-from-mars",         icon: "🕹️" },
        { name: "Zen Studios Guide",url: "https://zenstudios.com/pinball-table-guides",                  icon: "📖" },
      ],
    },

    strategy: {
      skillShot: "Plunge to land ball in the <strong>Stroke of Luck sinkhole</strong> — awards +5× Bonus Multiplier immediately plus a random award. This stacks every ball, making the Skill Shot the most important recurring action in the game.",
      multiball: "<strong>Complete 5 Attack Waves</strong> (hit lit Force Field Targets, then UFO saucer, 5 times) → Martian Attack Multiball. During Multiball: destroy Martians (standup targets) — each = +250M to End-of-Ball Bonus. With multiplier stacked at 250×: each Martian = 62.5 <em>billion</em> bonus points at ball drain.",
      goal: "Land every Skill Shot into Stroke of Luck for +5× Bonus Multiplier stacking. Complete all 5 Attack Waves to unlock Martian Attack Multiball. During Multiball, destroy as many Martians as possible — each adds 250M to bonus. Combined with a massive multiplier, the End-of-Ball Bonus dwarfs all live scoring.",
      phases: [
        { num: "Phase 1 · Every Ball", title: "Skill Shot → Bonus Multiplier Stack", body: "Plunge into Stroke of Luck. The +5× bonus multiplier stacks across all balls. By ball 3, if you've hit all three Skill Shots, you have 15× before any other multiplier sources. This is the single most important recurring action." },
        { num: "Phase 2 · Attack Waves", title: "Complete 5 Waves for Multiball", body: "Hit lit Attack Targets Bank when Force Field Targets flash, then shoot UFO Saucer. Repeat for all 5 waves. Use ramp shots between waves for safe scoring. Stroke of Luck awards between waves are secondary." },
        { num: "Phase 3 · Martian Multiball", title: "Destroy Martians for Bonus", body: "During Multiball: prioritize hitting all Martian standup targets. Each = +250M to End-of-Ball Bonus. With high multiplier, this is where the game's astronomical scores come from. Keep all balls in play as long as possible." },
      ],
      safeShots: [
        { name: "Left/Right Ramps", desc: "Reliable safe shots for general scoring and mode advancement between Attack Waves." },
        { name: "Stroke of Luck (Skill Shot)", desc: "Centre sinkhole — Skill Shot target each ball for +5× Bonus Multiplier. Also playable mid-game for random awards." },
      ],
      avoidShots: [
        { name: "Force Field Targets outside wave windows", desc: "Only hit when lit for the current Attack Wave — random hits don't advance waves." },
      ],
      tips: [
        { head: "Skill Shot multiplier is the whole game", body: "Attack from Mars uniquely stacks the Bonus Multiplier at +5× per Skill Shot. Three balls × 5 = 15× before other sources. The end-of-ball bonus with Martians at 250M each × 250× multiplier is astronomical — this dwarfs all live scoring." },
      ],
      mistakes: [
        "Missing the Stroke of Luck Skill Shot — losing +5× Bonus Multiplier every ball.",
        "During Multiball, ignoring Martian targets in favor of ramp/mode shots — Martians are the entire bonus strategy.",
      ],
    },

    hotspots: [
      { x:18, y:24, type:"key",   label:"LR", name:"Left Ramp",                 body:"<strong>Primary safe shot.</strong> Each ramp scores Total Annihilation progress for that lane and feeds cleanly back to the right flipper or inlane. Use during Attack Wave progression. During Rule the Universe wizard mode: each ramp = 1 Billion pts." },
      { x:74, y:24, type:"key",   label:"RR", name:"Right Ramp",                body:"Mirror of Left Ramp — reliable safe shot returning cleanly. Advances Total Annihilation. During Rule the Universe: each ramp = 1 Billion pts. Alternate left and right for highest output." },
      { x:50, y:18, type:"key",   label:"SA", name:"UFO Saucer (Centre)",       body:"<strong>The Saucer is lit after completing each Attack Wave's Force Field Targets.</strong> Shoot UFO to complete the wave and progress toward Martian Attack Multiball. Also the Stroke of Luck Skill Shot target every ball — scores +5× Bonus Multiplier." },
      { x:50, y:38, type:"key",   label:"MA", name:"Martian Targets",           body:"Hit during Martian Attack Multiball. Each Martian hit = <strong>+250M to End-of-Ball Bonus</strong>. With a 250× multiplier, each Martian is worth tens of billions in bonus. After all 5 Attack Waves completed, Martian Attack Multiball unlocks." },
      { x:14, y:42, type:"safe",  label:"LO", name:"Left Orbit",                body:"Safe shot. Returns via inlane for Total Annihilation and Bonus Multiplier progress. Good for general scoring between Attack Wave attempts." },
      { x:82, y:42, type:"safe",  label:"RO", name:"Right Orbit",               body:"Safe from left flipper. Returns via right inlane. Bonus Multiplier advance. Use during multiball for safe scoring." },
      { x:28, y:48, type:"info",  label:"AT", name:"Force Field Targets",       body:"Hit when lit for the current Attack Wave. Each wave requires completing the lit Force Field Targets, then shooting the UFO Saucer. Do not hit when not lit for a wave — random hits don't advance waves." },
      { x:7,  y:82, type:"avoid", label:"!",  name:"Left Outlane",              body:"Open outlane. Left ramp shots too weak can drain left — use full power." },
      { x:88, y:82, type:"avoid", label:"!",  name:"Right Outlane",             body:"Open outlane. Always recover position after Right Orbit returns." },
    ],
  };
