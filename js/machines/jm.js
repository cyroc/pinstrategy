  /* ─── JOHNNY MNEMONIC ─────────────────────────────────── */
MACHINES['jm'] = {
    name: "Johnny Mnemonic",  sub: "1995 · Williams · WPC",
    tagline: "Cyberpunk classic · spinner millions & multiball",
    image: "images/johnny-mnemonic.jpg",
    difficulty: "Medium", diffClass: "diff-medium", era: "DMD",

    info: {
      stats: [
        { label: "Manufacturer", value: "Williams Electronics" },
        { label: "Year",         value: "1995" },
        { label: "Designer",     value: "George Gomez" },
        { label: "Platform",     value: "WPC-S" },
        { label: "Multiball",    value: "Up to 4-ball" },
        { label: "Top Score",    value: "5–10 billion+" },
      ],
      theme: "Based on the 1995 cyberpunk film. Johnny is a data courier with a cybernetic memory implant carrying stolen corporate data. Features the Magnetic Data Glove, the Cyber Matrix ball lock system, Yakuza assassins, and Crazy Bob's underground safe house.",
      features: [
        { name: "Magnetic Data Glove (The Hand)", desc: "A player-controlled magnetic glove on the upper playfield. When Cyber Locks are lit, the center VUK feeds the ball to the glove. The player steers the glove via flipper buttons across a 9-spot Cyber Matrix to deposit balls into award/lock slots. When deactivated, the glove stays at rest and the center VUK feeds balls to the bumpers instead." },
        { name: "Cyber Matrix (9-spot grid)", desc: "Ball lock and award system. Each spot holds a random award (Bonus ×, Hold Bonus, Video Mode, Super Loops, Extra Ball, 50 GB, etc.). Lock 3 balls to start Cyberspace Multiball. Locking 3 balls in a row or column triples all multiball jackpots." },
        { name: "Left Loop (JOHNNY)", desc: "Shooting this loop spells J-O-H-N-N-Y. Completing JOHNNY advances the mode level and is the primary mode trigger." },
        { name: "Right Loop (MNEMONIC)", desc: "Completes M-N-E-M-O-N-I-C letters. Works alongside JOHNNY for mode advancement." },
        { name: "Left Ramp (Juke Joint)", desc: "Core Throwing Spike setup shot. Advances Yakuza Strike progress. Feeds the right orbit/ramp combo sequence." },
        { name: "Right Ramp", desc: "Pairs with the left ramp for Throwing Spike awards. Also advances Yakuza Strike. The 3rd ramp hit starts Yakuza Strike — use the right orbit instead to collect awards without triggering it early." },
        { name: "Spinner", desc: "10M points per spin awarded during end-of-ball bonus, multiplied by bonus ×. The most powerful sustained scoring mechanism in the game. Best hit from the left flipper in a controlled cradle." },
        { name: "Crazy Bob's (Saucer)", desc: "Upper-left saucer. Lights Cyber Locks, reveals matrix award positions, unlocks Power Items. Essential for setting up big multiball jackpots." },
        { name: "Top Lanes", desc: "Completing top lanes advances the bonus multiplier (max 4×). Completing them during Access Code 2 (Riot) mode is especially valuable since bumpers score 5M × bonus ×." },
        { name: "Yakuza Strike", desc: "Started after 3 ramp shots. All shots on the playfield light up for a hurry-up starting at 60M, decreasing to 25M. High risk/high reward — requires very fast reactions. Recovery from the spinner exit can be vicious." },
      ],
      scoring: [
        { key: "Skill shot",              val: "25M × skill shots + 5 GB" },
        { key: "Bumpers (Access Code 2)", val: "5M × bonus multiplier" },
        { key: "Power items",             val: "100M × items obtained" },
        { key: "Power Down shots",        val: "100M × lit shots (max 700M)" },
        { key: "Yakuza Strike hurry-up",  val: "60M → 25M" },
        { key: "Spinner Millions (bonus)", val: "10M per spin × bonus ×" },
        { key: "Multiball jackpot (base)", val: "30M (1st–3rd), +10M each" },
        { key: "Multiball 3× jackpot",    val: "Row/column line-up in matrix" },
        { key: "Quick Multiball jackpots", val: "50M per ramp (2-ball)" },
      ],
      rules: [
        "<strong>Spinner Millions</strong> is multiplied by bonus × at end-of-ball — building bonus × via top lanes is crucial before going for spinner value.",
        "<strong>Hold Bonus</strong> carries the spinner millions value to the next ball. Securing it before end-of-ball is a top priority.",
        "The Throwing Spikes sequence (6 awards) must be completed in order: GB → Big Points → <strong>Light Spinner Millions</strong> → Quick Multiball → Hold Bonus → Light Extra Ball.",
        "Once all 6 Throwing Spike awards are collected in one ball, the sequence cannot restart until the next ball (via Yakuza Strike).",
        "<strong>With Hand deactivated:</strong> The Cyber Matrix cannot be used for ball locking. Cyberspace 3-ball Multiball is unavailable. Quick Multiball (2-ball, Throwing Spikes award #4) remains available. Center VUK feeds bumpers instead of the glove.",
        "\"Mnemonic Recovery\" ball save lights at the left outlane after hitting a specific right-side target; automatically lit at the start of ball 1.",
      ],
      benchmarks: [
        { score: "5–10 billion", label: "Competitive — solid multiball + spinner exploitation" },
        { score: "500M–2B",      label: "Strong — 4× bonus + good spinner value" },
        { score: "Under 500M",   label: "Learning the machine — focus on bonus first" },
      ],
      resources: [
        { name: "Kineticist Tutorial",   url: "https://www.kineticist.com/post/johnny-mnemonic-tutorial",    icon: "📖" },
        { name: "IPDB Entry",            url: "https://www.ipdb.org/machine.cgi?id=3683",                    icon: "🎯" },
        { name: "Pinside Game Page",     url: "https://pinside.com/pinball/machine/johnny-mnemonic",         icon: "🕹️" },
        { name: "Pinball Archive Rules", url: "http://pinball.org/rules/johnnymnemonic.html",                icon: "📋" },
      ],
    },

    strategy: {
      skillShot: {
        name: "Skill Shot Lane",
        value: "25M × skill shots made + 5 GB",
        desc: "Plunge with precise timing to land the ball in the dedicated skill shot lane at the top of the playfield. Each successful skill shot scores <strong>25 million × the total number of skill shots made</strong> this game, plus <strong>5 GB</strong> of data. Ball 1 = 25M, Ball 2 (if ball 1 was collected) = 50M, Ball 3 = 75M — it scales massively. <strong>Aim for the skill shot every single ball.</strong> The consistent GB income also advances the Throwing Spikes sequence.",
      },
      multiball: [
        {
          name: "Quick Multiball",
          balls: 2,
          locks: "Work through the <strong>Throwing Spikes sequence</strong> by alternating left ramp and right orbit shots (use right orbit, not right ramp — it collects the award without advancing Yakuza Strike). Award #4 is <strong>Light Quick Multiball</strong>. Collect it and the lower cup will be ready for locking.",
          start: "After Light Quick Multiball is collected, shoot the <strong>lower center cup</strong> to lock one ball. The second ball is immediately released — 2-ball Quick Multiball is now active.",
          jackpots: "Every <strong>ramp shot</strong> during Quick Multiball scores <strong>50 million points</strong>. Shoot both ramps alternately as fast as possible for maximum payout. The multiball runs until one ball drains.",
          tip: "Quick Multiball is your only multiball source with the Hand deactivated. Time it carefully — if Yakuza Strike is active simultaneously, every ramp shot earns both the 50M Quick Multiball jackpot AND the hurry-up value. Stack them for your biggest scoring moments.",
        },
      ],
      goal: "<strong>Build bonus × to 4×, secure Hold Bonus, then accumulate Spinner Millions across multiple balls.</strong> With the Hand deactivated, Cyberspace Multiball is not available — pivot entirely to Throwing Spikes, Yakuza Strike, and Quick Multiball for big scoring.",
      phases: [
        {
          num: "Phase 1 · Early Game",
          title: "Start Modes & Build Bonus ×",
          body: "<strong>Access Code 2 (Riot) is your highest-priority mode.</strong><br><br>Spell JOHNNY/MNEMONIC via the loop shots to advance mode level and start modes. Access Code 2 sends balls to the bumpers for every mode shot — and bumpers score <strong>5M × bonus multiplier</strong>. Also complete the top lanes in this phase to advance the bonus × to 4×. This multiplier is what makes Spinner Millions explosive later.<br><br>Also grab the skill shot on ball start — consistently shooting the right spot scores 25M × number of skill shots made.",
        },
        {
          num: "Phase 2 · Mid Game",
          title: "Throwing Spikes Sequence — Get Spinner Millions + Hold Bonus",
          body: "<strong>Execute the left ramp → right orbit/ramp combos to collect Throwing Spike awards in order.</strong><br><br>The 6 awards in order: 10 GB → Big Points (100M) → <strong>Light Spinner Millions</strong> → Quick Multiball → Hold Bonus → Light Extra Ball.<br><br>Key tactic: use the <strong>right orbit</strong> instead of the right ramp when possible — the orbit collects Throwing Spike awards but does NOT advance the Yakuza Strike counter. This prevents Yakuza Strike from starting at a bad time.<br><br>Priority stops: Award #3 (Spinner Millions) and Award #5 (Hold Bonus). These are the two game-changing pickups.",
        },
        {
          num: "Phase 3 · Big Scoring",
          title: "Rip the Spinner + Quick Multiball Jackpots",
          body: "<strong>Once Spinner Millions is lit, rip the spinner as many times as possible before end-of-ball.</strong><br><br>Each spin scores 10M during end-of-ball bonus, multiplied by your bonus × (up to 4×). 150–200 spins per trip is realistic at a strong hit. With 4× bonus, 200 spins = <strong>8 billion</strong> in end-of-ball bonus alone.<br><br>Also collect <strong>Quick Multiball</strong> (Award #4): 2-ball multiball where every ramp shot scores 50M. Stack this with Yakuza Strike for simultaneous big payouts.<br><br>If Hold Bonus is secured, these spinner values carry to the next ball — every ball starts with a pre-loaded scoring engine.",
        },
      ],
      safeShots: [
        { name: "Left Orbit", desc: "Fast, consistent return. Collects loop letters for JOHNNY. Does not advance Yakuza Strike — safe to use throughout the game." },
        { name: "Spinner", desc: "The most important sustained scoring shot. Hit from left flipper cradle for maximum spin count. Rip early and often once Spinner Millions is lit." },
        { name: "Left Ramp (Juke Joint)", desc: "Core Throwing Spike setup shot. Reliable and high-value. Aim for this first in the Throwing Spikes sequence." },
      ],
      avoidShots: [
        { name: "Right Ramp (before ready for Yakuza Strike)", desc: "Three right ramp shots start Yakuza Strike. Use the right orbit instead to collect Throwing Spike awards while keeping Yakuza Strike under your control." },
        { name: "Center VUK (with Hand off)", desc: "With the glove disabled, VUK shots feed bumpers. The bumper exit on JM is notoriously vicious. Only use VUK shots deliberately during Access Code 2 or NAS Cure modes." },
      ],
      tips: [
        { head: "Bonus × before spinner", body: "Spinner Millions is worthless without bonus ×. Always build bonus × to 4× (via top lanes and Access Code 2) before chasing spinner value. A 4× bonus turns 200 spins into 8B — a 1× bonus turns it into 2B." },
        { head: "Right orbit over right ramp", body: "Both shots can collect Throwing Spike awards, but the right ramp also advances the Yakuza Strike counter. Right orbit is the cleaner option: same award, no risk of accidentally starting Yakuza Strike at the wrong time." },
        { head: "Hold Bonus is a force multiplier", body: "If you secure Hold Bonus before end-of-ball, your spinner millions value carries into the next ball. Every subsequent ball starts with an active scoring engine. Treat Hold Bonus (Award #5) as a top priority alongside Spinner Millions (Award #3)." },
        { head: "Yakuza Strike timing", body: "Yakuza Strike lights all shots for a hurry-up from 60M to 25M. It's valuable but requires very fast reactions. Trigger it intentionally when the ball is under control and your positioning is good — not as an accident from unplanned ramp shots." },
        { head: "Quick Multiball stack", body: "Quick Multiball (2-ball, 50M per ramp) can be combined with Yakuza Strike for simultaneous payouts. If you collect Award #3 and Award #4 in the same trip, you can stack both modes — plan the timing carefully." },
      ],
      mistakes: [
        "Building spinner value without 4× bonus multiplier — you're leaving 3× of the value on the table.",
        "Not securing Hold Bonus: spinner millions resets to zero at ball drain without it.",
        "Accidentally starting Yakuza Strike from unplanned ramp shots before the ball is under control.",
        "Shooting the center VUK randomly with the hand off — the bumper exit is unpredictable and can easily drain.",
        "Trying to pursue Cyberspace Multiball (3-ball) with the hand disabled — it's not available.",
        "Ignoring the skill shot — it's repeatable and scales with each successful shot (25M × number made).",
      ],
    },

    /* Hotspot positions calibrated to JM_VPW_playfield.png (1100×2172 portrait).
       The image shows the physical playfield with all components lit. */
    hotspots: [
      { x:42, y: 9, type:"info",  label:"JM", name:"Top Lanes (JOHNNY/MNEMONIC)", body:"Rollover lanes at the very top of the playfield. Completing them <strong>advances bonus × (max 4×)</strong>. They light naturally as the ball rolls through after bumper/saucer kicks — let the machine do the work. At 4× bonus, Spinner Millions yields 40M per spin in end-of-ball bonus." },
      { x:55, y:15, type:"info",  label:"★",  name:"Cyber Matrix & Data Glove",   body:"The 9-spot ball lock and award grid at the top center. <strong>With the Hand deactivated, ball locking via the glove is unavailable.</strong> When active, the player steers the magnetic glove with the flipper buttons to deposit balls into matrix spots. Row or column of 3 = triple jackpots during Cyberspace Multiball." },
      { x:20, y:22, type:"info",  label:"↑",  name:"Pop Bumpers",                 body:"Upper-left bumper cluster. When the glove is deactivated, center VUK shots feed balls here. <strong>Bumpers score 5M × bonus × during Access Code 2 (Riot) mode</strong> — extremely valuable. The pop bumper exit can be vicious; always be ready at the flippers after bumper action." },
      { x:10, y:38, type:"safe",  label:"←",  name:"Left Orbit (JOHNNY loop)",    body:"Fast lane around the left side of the playfield that spells J-O-H-N-N-Y. <strong>Does not advance the Yakuza Strike counter</strong> — safe to use throughout the game. Also collects Throwing Spike awards when lit, making it preferable to the right ramp for mid-game award collecting." },
      { x:20, y:36, type:"key",   label:"JK", name:"Left Ramp (Juke Joint)",      body:"<strong>Core Throwing Spike setup shot.</strong> The left ramp starts the ramp combo sequence and advances the mode level. Reliable and repeatable. Advances Yakuza Strike counter — 3 ramp hits total (left + right combos) starts Yakuza Strike." },
      { x:28, y:46, type:"key",   label:"CB", name:"Crazy Bob's (Saucer)",        body:"Left-side saucer behind the pop bumpers. <strong>Lights Cyber Locks, reveals matrix award positions, and unlocks Power Items.</strong> Visit early to learn which matrix spots hold Hold Bonus and Award Bonus. Essential for planning multiball setup even with the hand disabled." },
      { x:50, y:42, type:"info",  label:"↕",  name:"Center VUK",                 body:"Vertical up-kicker in the center of the playfield. Normally feeds the Data Glove when Cyber Locks are lit. <strong>With the Hand deactivated, the VUK feeds balls to the bumpers instead.</strong> During Access Code 2 and NAS Cure modes, deliberate VUK shots are intentional and high-scoring." },
      { x:47, y:53, type:"key",   label:"Sp", name:"Spinner",                     body:"<strong>The most important sustained scoring shot in the game.</strong> Each spin scores 10M during end-of-ball bonus, multiplied by your bonus × (max 4× = 40M per spin). Best hit from a left flipper cradle for maximum spin count. At 4× with ~200 spins = 8 billion in bonus alone." },
      { x:76, y:36, type:"avoid", label:"→",  name:"Right Ramp",                 body:"Pairs with the left ramp for Throwing Spike awards. <strong>Warning: each right ramp hit advances the Yakuza Strike counter.</strong> Use the right orbit instead when collecting Throwing Spike awards to avoid accidentally starting Yakuza Strike at the wrong moment." },
      { x:88, y:38, type:"safe",  label:"→",  name:"Right Orbit (MNEMONIC loop)", body:"Fast lane around the right side that spells M-N-E-M-O-N-I-C. <strong>Collects Throwing Spike awards when lit — without advancing the Yakuza Strike counter.</strong> Preferred over the right ramp for safe mid-game award collecting. Fast return requires ready flippers." },
      { x:10, y:83, type:"info",  label:"MR", name:"Mnemonic Recovery (Left Outlane)", body:"Ball save zone on the left outlane. <strong>Lit automatically at ball 1 start.</strong> Can be re-lit by hitting a specific right-side target enough times. When lit, balls draining here are saved and returned. Learn which shot re-lights it — it can rescue the ball several times per game." },
    ],
  };
