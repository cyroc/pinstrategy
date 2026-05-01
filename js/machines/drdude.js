  /* ─── DR. DUDE ──────────────────────────────────────────── */
MACHINES["drdude"] = {
    name: "Dr. Dude",
    sub: "1990 · Williams · Standard",
    tagline: "Groovy vintage · Bag of Tricks multiplier + Reflex 1-2-3 loop",
    image: "images/dr-dude.png",
    difficulty: "Easy–Medium",
    diffClass: "diff-medium",
    era: "DMD",
    info: {
      stats: [
        {
          label: "Manufacturer",
          value: "Williams Electronics",
        },
        {
          label: "Year",
          value: "1990",
        },
        {
          label: "Designer",
          value: "Dennis Nordman",
        },
        {
          label: "Programmer",
          value: "Bill Pfutzenreuter",
        },
        {
          label: "Production",
          value: "~4,000 units",
        },
        {
          label: "Platform",
          value: "WPC",
        },
      ],
      theme: "A groovy 1990s theme with Dr. Dude as the smooth-talking host. Collect the 'Elements of Coolness' to become totally cool and activate Multiball. Features a spinning Molecular Mixmaster toy and a Dude-O-Meter tracking progress toward wizard mode.",
      features: [
        {
          name: "Magnetic Personality Spot Target (1)",
          desc: "Standup target in a curved lower-left lane (with magnet catch). Hit 3× to collect this Element of Coolness. Also Reflex 3 shot — final step of the Reflex 1-2-3 loop.",
        },
        {
          name: "Excellent Ray Saucer (2) — Bag of Tricks + Lock",
          desc: "Central saucer. Lit for <strong>Bag of Tricks</strong> at the start of every ball (and after every Drop Target Bank completion) — always the first shot. Best award: 'Bonus Booster at Maximum' (instant 6× multiplier). Also the Reflex 1 shot and the ball lock for Multiball activation.",
        },
        {
          name: "Ramp (3)",
          desc: "Very steep ramp, shot from right flipper only. Routes ball into the Molecular Mixmaster Spinner (10). When 'Molecular Million' is lit, scores <strong>1M per shot</strong>. Also the Gazillion Point Shot when Super Dude is reached.",
        },
        {
          name: "Heart of Rock 'N Roll Spot Target (4)",
          desc: "Standup target right of the ramp entrance. Hit 3× to collect this Element of Coolness.",
        },
        {
          name: "Reflex Spot Targets Bank (5)",
          desc: "Bank of standup targets. Completing lights 'Reflex 1' at Excellent Ray Saucer (2) — first step of the Reflex 1-2-3 loop. Scoring 1M–2M per full cycle. Each completion while Reflex is active adds 250K to the Reflex bonus.",
        },
        {
          name: "Big Shot Spot Target (6)",
          desc: "Lights after every 3 collections of any single Element. When lit: scores 10K→20K→40K→…→100K per hit. Each Big Shot hit also lights <strong>Big Score in both outlanes</strong> (200K–1M if ball drains there).",
        },
        {
          name: "Gift of Gab Saucer (7)",
          desc: "Left-side saucer. Hit 3× to collect this Element of Coolness. Also the Reflex 2 shot — second step of the Reflex 1-2-3 loop (12-second timer).",
        },
        {
          name: "Right Orbit (8)",
          desc: "Orbit lane. Complete 3× to advance Jumper Bumpers through 500→1K→2.5K→5K pts/hit. Let it accumulate naturally.",
        },
        {
          name: "Drop Targets Bank (9)",
          desc: "Bank of 4 drop targets. Each completion: <strong>+2× End-of-Ball Bonus Multiplier</strong> (max 6×), relights Bag of Tricks, and on 2nd completion lights Molecular Million (1M Ramp shot). 3rd completion lights Extra Ball at Saucer.",
        },
        {
          name: "Molecular Mixmaster Whirlwind Spinner (10)",
          desc: "Spinning toy at top of playfield, fed by Ramp. Contains 9 Spot Targets (3 Yellow/Red/Green per Element). 10 hits of any combination = Jackpot (1M–5M). Hitting 10 same-color targets collects that Element. Drop Target Bank completion during Multiball doubles the current Jackpot.",
        },
        {
          name: "Skill Shot Spot Target (11)",
          desc: "Back-center standup. Hit on full-power plunge for 25K–100K. Aim for 100K (Way Cool). Hitting 75K also temporarily boosts Jumper Bumpers to 5K/hit.",
        },
      ],
      scoring: [
        {
          key: "Skill Shot (Way Cool, 100K)",
          val: "100,000 points",
        },
        {
          key: "Element of Coolness (1st collection)",
          val: "25,000 points",
        },
        {
          key: "Element of Coolness (2nd collection)",
          val: "50,000 points",
        },
        {
          key: "Element of Coolness (subsequent)",
          val: "Cycles 10K → 25K → 50K",
        },
        {
          key: "Reflex Spot Target (unlit)",
          val: "25,000 points",
        },
        {
          key: "Drop Target (each)",
          val: "10,000 points",
        },
        {
          key: "Drop Target Bank completion",
          val: "+50K + +2× Bonus Multiplier",
        },
        {
          key: "Molecular Million (Ramp when lit)",
          val: "1,000,000 points",
        },
        {
          key: "Reflex 1-2-3 loop (per run)",
          val: "1M–2M per cycle",
        },
        {
          key: "Multiball Jackpot",
          val: "1M–5M (doubling possible)",
        },
        {
          key: "Big Shot Spot Target (lit)",
          val: "10K → 20K → … → 100K",
        },
        {
          key: "Big Score (lit outlane drain)",
          val: "200K–1M",
        },
        {
          key: "Gazillion Point Shot (per Spinner hit)",
          val: "500,000 points",
        },
        {
          key: "Post-Multiball scoring",
          val: "All scoring doubled",
        },
        {
          key: "Bonus Multiplier (max)",
          val: "6× (Drop Targets + Bag of Tricks)",
        },
      ],
      rules: [
        "<strong>Bag of Tricks</strong> is lit at every ball start at the Excellent Ray Saucer (2). Best award: 'Bonus Booster at Maximum' (instant 6×). Relit after every Drop Target Bank completion.",
        "<strong>Drop Target Bank (9):</strong> Each completion = +2× Bonus Multiplier (max 6×) + relights Bag of Tricks. 2nd completion lights Molecular Million (1M Ramp shot). 3rd completion lights Extra Ball at Saucer. Bonus Multiplier resets each ball.",
        "<strong>Molecular Million</strong> lights at Ramp (3) after 2nd Drop Target Bank completion. Shoot Ramp immediately for 1M. Relights every 3 more Drop Target Bank completions after that.",
        "<strong>Reflex 1-2-3 loop:</strong> Complete Reflex Bank (5) → Excellent Ray Saucer (2) → Gift of Gab Saucer (7) [12-sec] → Magnetic Personality Target (1) [12-sec] → 1M–2M scored. Completing Bank while Reflex 2 or 3 are active adds 250K to bonus AND restarts the mode. Even failing Reflex 2 or 3 and re-completing the Bank adds 250K to the bonus.",
        "<strong>Elements of Coolness:</strong> Each of the 3 Elements (Magnetic Personality, Heart of Rock 'N Roll, Gift of Gab) must be collected 3× to activate Multiball. Elements also collectable from the Molecular Mixmaster: 10 hits on same-colored Spot Targets (Yellow/Red/Green) collects that Element. One collection of each is pre-banked at game start.",
        "<strong>Multiball Jackpot counter:</strong> Starts at 10 Spinner target hits. Increases by 10 for each subsequent Jackpot scored. Resets to 10 at start of each new Multiball.",
        "<strong>Gazillion Point Shot:</strong> Reached at 'Super Dude' (5 Multiballs). Lights Ramp for 500K per Spinner target hit. Turns off after scored — next Multiball resets Dude-O-Meter to 'Plain Dude'.",
        "<strong>All scoring doubled</strong> immediately following a Multiball session for the rest of that ball.",
        "<strong>Big Score (outlane):</strong> Lit by hitting Big Shot Spot Target (6). Starts at 200K, increases 100K per lit Big Shot hit, max 1M. Resets to 200K once scored.",
      ],
      benchmarks: [
        {
          score: "50M+",
          label: "Excellent — multiple Multiballs + 6× multiplier",
        },
        {
          score: "15M+",
          label: "Good — Multiball achieved with some multiplier",
        },
        {
          score: "< 5M",
          label: "Bag of Tricks missed, multiplier not built",
        },
      ],
      resources: [
        {
          name: "IPDB Entry",
          url: "https://www.ipdb.org/machine.cgi?id=695",
          icon: "🎯",
        },
        {
          name: "Pinside Game Page",
          url: "https://pinside.com/pinball/machine/dr-dude",
          icon: "🕹️",
        },
        {
          name: "Zen Studios Guide",
          url: "https://zensite.wpenginepowered.com/wp-content/uploads/2024/04/WP-Dr-Dude-Pinball-Guide-by-ShoryukenToTheChin.pdf",
          icon: "📖",
        },
      ],
    },
    strategy: {
      skillShot: "Full-power plunge to hit <strong>Skill Shot Spot Target (11)</strong> at back-center. Aim for <strong>100K (Way Cool)</strong>. Hitting 75K temporarily boosts Jumper Bumpers to 5K/hit. Immediately after ball launches, shoot <strong>Excellent Ray Saucer (2)</strong> for Bag of Tricks — best award is 'Bonus Booster at Maximum' (instant 6× multiplier).",
      multiball: "<strong>Collect 3 Elements of Coolness 3× each</strong> via the Reflex 1-2-3 loop (Reflex Bank → Saucer → Gift of Gab Saucer → Magnetic Personality Target) or via 10 same-color Spinner hits. Then hit any Spinner target → lock ball in Excellent Ray Saucer (2) → Multiball begins (2 balls). Hit 10 Spinner targets for Jackpot (1M–5M). Complete Drop Targets during Multiball to double Jackpot. All scoring doubled after Multiball ends. 5 Multiballs = Super Dude → Gazillion Point Shot (500K/Spinner hit).",
      goal: "Shoot Skill Shot Spot Target (11) then immediately collect Bag of Tricks at Excellent Ray Saucer (2) every ball — 'Bonus Booster at Maximum' = instant 6×. Complete Drop Target Bank twice for +4× multiplier + Molecular Million (1M Ramp) + two Bag of Tricks relights. Run Reflex 1-2-3 loop for 1M–2M per cycle; each loop also advances Element collection toward Multiball.",
      phases: [
        {
          num: "Phase 1 · Every Ball",
          title: "Skill Shot → Bag of Tricks → Multiplier",
          body: "Full-power plunge for Skill Shot (11), aiming 100K. Then immediately shoot Excellent Ray Saucer (2) for Bag of Tricks. If 'Bonus Booster at Maximum' → multiplier maxed instantly. Otherwise, complete Drop Target Bank (9) twice: +4× multiplier + Molecular Million lit + two more Bag of Tricks relights. Shoot Ramp for 1M when Molecular Million is lit.",
        },
        {
          num: "Phase 2 · Reflex Loop",
          title: "Elements → Multiball Setup",
          body: "Complete Reflex Bank (5) → shoot Excellent Ray Saucer (2) for Reflex 1 → shoot Gift of Gab Saucer (7) within 12 sec for Reflex 2 → hit Magnetic Personality (1) within 12 sec for Reflex 3 = 1M–2M scored + Elements collected. Repeat loop. Also hit Heart of Rock 'N Roll (4) directly when passing. Keep Big Shot Target (6) lit for outlane Big Score insurance.",
        },
        {
          num: "Phase 3 · Multiball + Post-Multiball",
          title: "Jackpot + Doubled Scoring Window",
          body: "Complete Drop Target Bank before shooting Ramp (doubles Jackpot). Shoot Ramp repeatedly to send balls to Spinner; hit 10 targets for Jackpot. Immediately after Multiball ends: ALL scoring doubled — keep running Reflex loop and Ramp for Molecular Million during doubled phase. Don't hold the ball; keep shooting.",
        },
      ],
      safeShots: [
        {
          name: "Excellent Ray Saucer (2)",
          desc: "Safe plunking shot. Every ball start = Bag of Tricks; also Reflex 1 step and ball lock.",
        },
        {
          name: "Drop Target Bank (9)",
          desc: "Wide bank, hittable from both flippers. +2× multiplier per completion + Bag of Tricks relight.",
        },
        {
          name: "Reflex Bank (5)",
          desc: "Standup targets — first step in the Reflex 1-2-3 loop.",
        },
        {
          name: "Ramp (3)",
          desc: "Right-flipper-only shot. Feeds Molecular Mixmaster. Reliable if you control the angle. Used for Molecular Million (1M) and Multiball.",
        },
        {
          name: "Gift of Gab Saucer (7)",
          desc: "Safe saucer shot for Reflex 2 step and Gift of Gab Element collection.",
        },
      ],
      avoidShots: [
        {
          name: "Ramp (3) without a mode lit",
          desc: "Steep ramp — only shoot when Molecular Million is lit or Multiball is active; random ramp shots waste energy.",
        },
        {
          name: "Right Orbit (8) actively",
          desc: "Low priority chase; let bumper advancement happen naturally via normal ball routing.",
        },
      ],
      tips: [
        {
          head: "Skill Shot + Bag of Tricks = two separate first actions",
          body: "Plunge full power for Skill Shot (11), then immediately shoot Excellent Ray Saucer (2) for Bag of Tricks. Many players skip the Skill Shot or don't immediately follow with Bag of Tricks — both should happen every ball.",
        },
        {
          head: "Bag of Tricks is the most important first shot after Skill Shot",
          body: "'Bonus Booster at Maximum' = instant 6× Bonus Multiplier. The entire ball's strategy pivots on this reward. Also relit after every Drop Target Bank completion — collect it every time.",
        },
        {
          head: "Failing Reflex 2 or 3 still raises bonus",
          body: "Re-completing the Reflex Bank after failing Reflex 2 or Reflex 3 adds +250K to the Reflex bonus and restarts the mode. Don't panic after a fail — go back to the Bank immediately.",
        },
        {
          head: "Molecular Million + 6× = pure scoring",
          body: "With Ramp lit for 1M at 6× Bonus Multiplier, each Ramp shot contributes heavily to the end-of-ball bonus. Prioritize Ramp immediately when Molecular Million is lit.",
        },
        {
          head: "Post-Multiball 2× window is huge",
          body: "The moment one Multiball ball drains, all scoring doubles for the rest of that ball. Keep shooting — run Reflex loop and Molecular Million Ramp shots at 2× for maximum impact.",
        },
        {
          head: "Complete Drop Targets before Multiball Jackpot",
          body: "Completing Drop Targets during Multiball doubles the current Jackpot. Do this before shooting Ramp for the 10th Spinner hit to maximize Jackpot value.",
        },
      ],
      mistakes: [
        "Skipping the Skill Shot Spot Target (11) — always plunge full power to hit it for 100K.",
        "Missing Bag of Tricks on ball start — foregoing the 6× instant multiplier opportunity.",
        "Not completing Drop Target Bank twice — leaving multiplier at 1× or 2× when 4× is easily achievable.",
        "Running Reflex loop out of order — Reflex Bank must be completed before Saucer, then Gift of Gab Saucer, then Magnetic Personality Target.",
        "Not shooting the Ramp immediately when Molecular Million (1M) is lit.",
        "Neglecting the post-Multiball 2× window by playing passively after Multiball ends.",
        "Forgetting Gazillion Point Shot resets Dude-O-Meter — once scored, it turns off and next Multiball starts from Plain Dude.",
      ],
    },
    hotspots: [
      {
        x: 37.8,
        y: 15.2,
        type: "info",
        label: "SS",
        name: "Skill Shot Spot Target (11)",
        body: "Back-center standup. <strong>Always hit on full-power plunge</strong> for 25K–100K (aim for 100K 'Way Cool'). Hitting 75K temporarily boosts Jumper Bumpers to 5,000 pts/hit. Available during normal play too at whatever value is currently cycling.",
      },
      {
        x: 67.2,
        y: 20.7,
        type: "key",
        label: "MX",
        name: "Molecular Mixmaster Spinner (10)",
        body: "Spinning toy at top, fed by Ramp (3). Contains 9 Spot Targets (3 Yellow/Red/Green). <strong>During Multiball:</strong> hit any 10 targets = Jackpot (1M–5M). Counter starts at 10, increases by 10 per Jackpot. 10 same-color hits collects that Element. During Gazillion Point Shot: each hit = 500K.",
      },
      {
        x: 27,
        y: 31.2,
        type: "key",
        label: "RP",
        name: "Ramp (3)",
        body: "<strong>Right-flipper-only shot.</strong> Routes ball to Molecular Mixmaster. When <strong>Molecular Million is lit</strong> (after 2nd Drop Target Bank completion) = 1M per shot. Key for Multiball activation (must hit Spinner target to light Lock). Also the Gazillion Point Shot route at Super Dude level.",
      },
      {
        x: 47.7,
        y: 35.8,
        type: "info",
        label: "RF",
        name: "Reflex Spot Targets Bank (5)",
        body: "Completing the bank lights 'Reflex 1' at Excellent Ray Saucer (2) — start of the <strong>Reflex 1-2-3 loop</strong>. 25K per unlit target, 10K per lit target. Completing the bank while Reflex 2 or 3 is active adds +250K to Reflex bonus and restarts the mode — even failing and re-completing is beneficial.",
      },
      {
        x: 59.1,
        y: 45.6,
        type: "info",
        label: "BS",
        name: "Big Shot Spot Target (6)",
        body: "Lights after every 3 collections of any single Element. When lit: <strong>10K → 20K → … → 100K</strong> per hit (max). <strong>Each Big Shot hit lights Big Score in both outlanes</strong> — ball draining through a lit outlane scores 200K–1M. Under open-outlane settings, keep this target lit to maximize Big Score insurance.",
      },
      {
        x: 16.2,
        y: 36.8,
        type: "key",
        label: "ER",
        name: "Excellent Ray Saucer (2)",
        body: "<strong>Bag of Tricks — always first shot every ball.</strong> Lit at ball start; also relit by every Drop Target Bank completion. Best award: 'Bonus Booster at Maximum' (instant 6×). Also Reflex 1 step (after Reflex Bank complete) and ball lock for Multiball. One shot collects all lit awards simultaneously.",
      },
      {
        x: 39.7,
        y: 44.4,
        type: "safe",
        label: "HR",
        name: "Heart of Rock 'N Roll Spot Target (4)",
        body: "Standup target right of the Ramp entrance. Hit <strong>3× to collect this Element of Coolness</strong>. First collection: 25K; second: 50K; subsequent: cycles 10K→25K→50K. Can also be spotted by Bag of Tricks 'Found the Heart of Rock 'N Roll' award.",
      },
      {
        x: 77.2,
        y: 62.9,
        type: "key",
        label: "DT",
        name: "Drop Targets Bank (9)",
        body: "<strong>Each completion = +2× Bonus Multiplier</strong> (max 6×) + relights Bag of Tricks. 2nd completion lights <strong>Molecular Million (1M Ramp shot)</strong>. 3rd completion lights Extra Ball at Saucer. Complete during Multiball to <strong>double the current Jackpot</strong>. Bonus Multiplier resets each ball.",
      },
      {
        x: 13.5,
        y: 50.3,
        type: "key",
        label: "MP",
        name: "Magnetic Personality Spot Target (1)",
        body: "Standup in a curved lower-left lane with a magnet that catches the ball. Hit <strong>3× to collect this Element of Coolness</strong>. Also the <strong>Reflex 3 shot</strong> — final step of the Reflex 1-2-3 loop (12-second timer from Reflex 2). Magnet ejects ball toward left flipper — be ready.",
      },
      {
        x: 66.3,
        y: 43.8,
        type: "key",
        label: "GG",
        name: "Gift of Gab Saucer (7)",
        body: "Left-side saucer. Hit <strong>3× to collect this Element of Coolness</strong>. Also the <strong>Reflex 2 shot</strong> — second step of the Reflex 1-2-3 loop (12-second timer after Reflex 1). If you miss Reflex 2, let the timer run; don't rush an uncontrolled shot. Re-complete Reflex Bank to restart.",
      },
      {
        x: 77,
        y: 44.1,
        type: "info",
        label: "RO",
        name: "Right Orbit (8)",
        body: "Orbit lane. Completing it 3× advances Jumper Bumpers: 500 → 1,000 → 2,500 → 5,000 pts/hit. Let this accumulate naturally via normal ball routing — don't chase it actively. Jumper Bumpers also revert to 500 pts/hit at start of each ball.",
      },
      {
        x: 8.6,
        y: 78.7,
        type: "avoid",
        label: "!",
        name: "Left Outlane",
        body: "Open outlane — no kickback. However, if Big Score is lit (from hitting Big Shot Target), draining here scores <strong>200K–1M</strong>. Keep Big Shot Target hit count high to push outlane value toward max before a forced drain.",
      },
      {
        x: 82.8,
        y: 79,
        type: "avoid",
        label: "!",
        name: "Right Outlane",
        body: "Open outlane. Ramp misses can redirect right toward this lane. Control Ramp angle carefully. Big Score also applies here when lit — 200K–1M consolation on drain if Big Shot Target was hit.",
      },
    ],
  };
