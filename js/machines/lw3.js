  /* ─── LETHAL WEAPON 3 ──────────────────────────────────────── */
MACHINES['lw3'] = {
    name: "Lethal Weapon 3",  sub: "1992 · Data East · Solid-State",
    tagline: "Action movie theme · ramp combos & multiball madness",
    image: "images/lethal-weapon-3.webp",
    difficulty: "Medium", diffClass: "diff-medium", era: "DMD",

    info: {
      stats: [
        { label: "Manufacturer", value: "Data East Pinball" },
        { label: "Year",         value: "1992" },
        { label: "Type",         value: "Solid-State" },
        { label: "Multiball",    value: "3-ball" },
        { label: "Theme",        value: "Lethal Weapon film series" },
        { label: "Voices",       value: "Mel Gibson & Danny Glover" },
      ],
      theme: "Based on the Lethal Weapon film series featuring Riggs and Murtaugh. One of Data East's most successful licensed titles, featuring digitized speech from the movie actors.",
      features: [
        { name: "Left & Right Ramps", desc: "Primary scoring features. Completing both ramps builds toward Ricochet ramp awards. Ramp combo shots score increasing values." },
        { name: "Police Station (Center Saucer)", desc: "Advances modes and awards points. Key for lighting multiball and collecting awards." },
        { name: "Multiball", desc: "3-ball multiball with jackpots at the ramps. Start by locking balls via the designated lock shots." },
        { name: "Extra Ball Lanes", desc: "Top lanes spell E-X-T-R-A or similar — completing awards Extra Ball." },
        { name: "Ramp Combos (Ricochet)", desc: "Hitting both ramps quickly in sequence awards Ricochet bonus — a significant points multiplier." },
      ],
      scoring: [
        { key: "Ramp shot",         val: "Millions range per ramp" },
        { key: "Ricochet combo",    val: "Bonus for quick ramp-to-ramp" },
        { key: "Multiball jackpot", val: "Super Jackpot at ramps" },
        { key: "Mode awards",       val: "Varies by mode" },
      ],
      rules: [
        "Ramp combo (Ricochet) shots reward fast sequential ramp hits with a <strong>multiplied bonus</strong>.",
        "<strong>Lock balls</strong> via the center to trigger 3-ball multiball — jackpots are your biggest scoring opportunities.",
        "Mode stacking can multiply scoring significantly — try to time mode starts with multiball.",
      ],
      benchmarks: [
        { score: "1B+",    label: "Excellent — strong multiball and combos" },
        { score: "300M+",  label: "Solid play" },
        { score: "100M+",  label: "Getting the flow" },
      ],
      resources: [
        { name: "IPDB Entry",        url: "https://www.ipdb.org/machine.cgi?id=1451",            icon: "🎯" },
        { name: "Pinside Game Page", url: "https://pinside.com/pinball/machine/lethal-weapon-3", icon: "🕹️" },
      ],
    },

    strategy: {
      skillShot: null,
      multiball: [
        { name: "LW3 Multiball", balls: 3,
          locks: "Shoot the ball lock shot (center or dedicated lock area) to lock balls one at a time.",
          start: "Lock 3 balls to start 3-ball multiball.",
          jackpots: "Jackpots are collected at the ramps during multiball. Super Jackpot resets after collection.",
          tip: "Keep both ramps in play during multiball — alternate sides to collect jackpots efficiently." },
      ],
      goal: "<strong>Run the left and right ramps for Ricochet combos, lock balls for multiball, and collect ramp jackpots during 3-ball play.</strong> The ramps are your best friends — flow between them all game.",
      phases: [
        { num: "Phase 1 · Early Game", title: "Establish Ramp Flow", body: "<strong>Build ramp muscle memory early.</strong> The left and right ramps are your primary targets. Each ramp completion scores well, and hitting them back-to-back awards a Ricochet combo bonus. Find a comfortable shooting angle and stick with it." },
        { num: "Phase 2 · Mid Game", title: "Lock Balls for Multiball", body: "<strong>Work in lock shots alongside ramp play.</strong> Getting multiball started is the biggest priority once ramp flow is established. Don't sacrifice good ball position trying to force a lock shot — wait for natural opportunities." },
        { num: "Phase 3 · Multiball", title: "Ramp Jackpots", body: "<strong>During 3-ball multiball, focus on ramp shots for jackpots.</strong> Keep as many balls in play as possible. Protect the left flipper and use it to feed ramps repeatedly." },
      ],
      safeShots: [
        { name: "Left Ramp", desc: "Feeds back smoothly. One of the safest high-value shots on the machine. Make it your primary route." },
        { name: "Right Ramp", desc: "Slightly trickier angle but very rewarding. Completing both ramps unlocks Ricochet combos." },
      ],
      avoidShots: [
        { name: "Center drop/standup area", desc: "Can feed dangerous exits. Only shoot when you have full control of the ball." },
      ],
      tips: [
        { head: "Ricochet timing", body: "After a ramp shot returns the ball to the flipper, immediately shoot the opposite ramp. The window for a Ricochet combo is generous — you don't need to rush, but don't wait too long." },
        { head: "Protect your multiball", body: "During 3-ball play, resist chasing both outlane balls. Trap one ball and keep shooting the ramp with it — one ball under control is worth more than two wild balls." },
      ],
      mistakes: [
        "Losing ball lock shots to outlane drains — be patient waiting for clean lock shot opportunities.",
        "Ignoring the Ricochet combo and treating ramps as single shots instead of pairs.",
        "Panicking during multiball and losing all three balls within seconds without collecting jackpots.",
      ],
    },

    hotspots: [
      { x:18, y:12, type:"key",   label:"LR", name:"Left Ramp",                  body:"<strong>Your primary safe shot all game.</strong> Feeds back smoothly to the left flipper. Ramp combos (left → right quickly) award the Ricochet bonus. Default to the left ramp whenever you have a clean shot." },
      { x:78, y:13, type:"key",   label:"RR", name:"Right Ramp",                 body:"<strong>Pairs with the left ramp for Ricochet combos.</strong> After a left ramp return, immediately shoot the right ramp for bonus scoring. Also advances Yakuza Strike progress. <em>Note:</em> the 3rd ramp shot triggers Yakuza Strike — use the right orbit after two ramp shots to collect awards without starting it early." },
      { x:46, y:20, type:"key",   label:"LK", name:"Ball Lock / Upper Area",     body:"<strong>Lock balls here to start 3-ball multiball.</strong> The lock entrance is accessed through the upper playfield. During multiball, jackpots are collected at the ramps. Pre-build your ramp flow before triggering multiball." },
      { x:50, y:7,  type:"safe",  label:"T",  name:"Top Lanes",                  body:"Completing the top lanes advances the <strong>bonus multiplier</strong>. Bumpers passively complete lanes during play. Use flipper buttons to position the lit lane when the ball is in the bumper area." },
      { x:55, y:18, type:"info",  label:"↑",  name:"Pop Bumpers",                body:"Upper bumper cluster. Each hit advances bonus. Bumper action after a ramp shot or lock exit feeds the top lanes. Returns can be unpredictable — stay on both flippers." },
      { x:35, y:45, type:"info",  label:"PS", name:"Police Station (Center)",    body:"The central saucer area. Key for advancing modes and lighting features. Shooting here unlocks certain awards and contributes to Police Badge progress. Not a primary scoring route but important for mode progression." },
      { x:12, y:82, type:"avoid", label:"!",  name:"Left Outlane",               body:"Direct drain in competition settings. Left-side shots that miss the ramp entrance can trickle down here. Don't overshoot the left ramp." },
      { x:88, y:82, type:"avoid", label:"!",  name:"Right Outlane",              body:"Right outlane catches fast right-ramp returns that aren't caught cleanly. Always be positioned before the ball comes back from the upper playfield." },
    ],
  };
