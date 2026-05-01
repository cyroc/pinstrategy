  /* ─── ATTACK FROM MARS ──────────────────────────────────────────── */
MACHINES["attackfrommars"] = {
    name: "Attack from Mars",
    sub: "1995 · Williams/Bally · Standard",
    tagline: "Alien invasion · bonus multiplier stacking + Martian Multiball",
    image: "images/attack-from-mars.jpg",
    difficulty: "Medium",
    diffClass: "diff-medium",
    era: "DMD",
    info: {
      stats: [
        {
          label: "Manufacturer",
          value: "Williams (Bally label)",
        },
        {
          label: "Year",
          value: "1995",
        },
        {
          label: "Designer",
          value: "Brian Eddy",
        },
        {
          label: "Programmer",
          value: "Lyman F. Sheats",
        },
        {
          label: "Production",
          value: "3,450 units",
        },
        {
          label: "Platform",
          value: "WPC",
        },
      ],
      theme: "Martians attack Earth's cities and famous landmarks. Defend 5 countries through Attack Waves, then Conquer Mars. Four distinct multiball modes can overlap: Regular Lock Multiball, Martian Multiball, Total Annihilation, and Strobe Multiball. Every Martian destroyed adds 250 Million Points to your end-of-ball bonus, multiplied by your stacked Bonus Multiplier.",
      features: [
        {
          name: "Force Field Targets (6) / UFO Target (7)",
          desc: "Motorised 3-target bank. Knock down all 3 to lower the bank and start an Attack Wave. Behind it: the UFO Target (7) scores hits on the saucer; once enough hits land the UFO Target lowers, revealing a hole for the final saucer-destroying shot. 6 Attack Waves total (5 countries + Conquer Mars). Also used in Strobe Multiball as the only target at 50M per hit.",
        },
        {
          name: "Centre Orbit (4) - Ball Lock",
          desc: "The Centre Orbit lights locks and is a jackpot shot during all multiball modes. First multiball: shoot it once to enable all 3 locks, then 3 more times to lock balls. Subsequent multiballs: one shot per lock. Also scores Annihilation Awards during Total Annihilation and is the Annihilation Jackpot target. Stroke of Luck can award Light Lock, Award Lock, or instant Multiball.",
        },
        {
          name: "Stroke of Luck Sinkhole (9)",
          desc: "Right sinkhole. Lit at game start, relit by completing all 4 inlane/outlane rollovers. Random awards: +5 Bonus X, Hold Bonus X, Light/Award Lock, Multiball, Strobe Multiball, Sneak Attack (150M hurry-up + 2 Martian Bombs!), Video Mode, and more. Lighting it 10 times lights Extra Ball. <strong>Collect every time it is lit.</strong>",
        },
        {
          name: "Regular Lock Multiball",
          desc: "Lock 3 balls via the Centre Orbit (4). 3-ball multiball with 5 shots lit for Jackpots: Left Orbit (2), Left Ramp (3), Centre Orbit (4), Right Ramp (10), Right Orbit (11). 60M base, +10M each, max 200M. Collect all 5 to light the roaming Super Jackpot: 250M / 500M / 750M / max 1B (increases each time scored). Super Jackpot moves every few seconds. 10-second Last Chance after multiball ends.",
        },
        {
          name: "Martian Attack / Martian Multiball",
          desc: "Complete all 7 M-A-R-T-I-A-N targets, then shoot Stroke of Luck Sinkhole (9) to start. Hit all 4 Martian banks in 30 sec to add a 2nd ball (Martian Multiball). Each Martian hit = 20M-100M live + 250 Million Points added to end-of-ball bonus (x your multiplier). At 250x, each Martian adds 62.5 Billion from bonus. Up to 10 Martians per target bank per session. Stacks with Lock Multiball and Total Annihilation.",
        },
        {
          name: "Total Annihilation Multiball",
          desc: "Build 3 progress lamps on each of 4 shots: Left Orbit (2), Left Ramp (3), Right Ramp (10), Right Orbit (11). 3rd lamp starts a Hurry-Up (100M) at the Attack Targets Bank (6). Stack all 4 Hurry-Ups simultaneously for 1B awarded automatically + 4-ball TA Multiball. During TA: all 5 shots (plus Centre Orbit) lit for Annihilation Awards (50M base, +5M each, max 250M). Centre Orbit (4) lights for Annihilation Jackpot after each ramp/orbit award.",
        },
        {
          name: "Strobe Multiball",
          desc: "Stroke of Luck exclusive award. All lights out, strobe flashes, forcefield raises, 3 balls launched. Hit Force Field targets: 50M each. 10 hits = 250M bonus + Extra Ball lit. Every 10 hits after = another 250M bonus. At 100+ hits: each hit scores 250M. Lengthy ball saver active throughout.",
        },
        {
          name: "Martian Targets (M-A-R-T-I-A-N)",
          desc: "7 standup targets across the playfield. Complete all 7 to light Martian Attack at Stroke of Luck Sinkhole (9). Each Martian destroyed adds <strong>250 Million Points to End-of-Ball Bonus</strong>. At 250x multiplier: 62.5 Billion per Martian from bonus alone. Kill value increases by 10M each time M-A-R-T-I-A-N is re-completed, up to 100M live.",
        },
        {
          name: "Bonus Multiplier",
          desc: "Built via Skill Shots (+5x each), inlane/outlane completions, and Stroke of Luck +5 Bonus X. Caps at 250x. End-of-ball bonus = (5M base + 250M x Martians killed) x multiplier. Hold Bonus X carries the multiplier to the next ball.",
        },
        {
          name: "Left/Right Ramps (3, 10)",
          desc: "Primary flow shots. Advance Total Annihilation lamps, score jackpots/Annihilation Awards during multiball. Safest shots on the table. Left Ramp = Big-O-Beam, Right Ramp = Tractor Beam.",
        },
      ],
      scoring: [
        {
          key: "Skill Shot",
          val: "+5x Bonus Multiplier per shot (stacks, max 250x)",
        },
        {
          key: "Martian destroyed (live, Martian Multiball)",
          val: "20M-100M per hit (base 20M, +10M each M-A-R-T-I-A-N re-completion)",
        },
        {
          key: "Martian destroyed (end-of-ball bonus)",
          val: "+250M to bonus x multiplier = up to 62.5B each at 250x",
        },
        {
          key: "Lock Multiball Jackpot",
          val: "60M base, +10M each collected, max 200M",
        },
        {
          key: "Lock Multiball Super Jackpot",
          val: "250M > 500M > 750M > max 1B (increases each time scored)",
        },
        {
          key: "TA: 4 simultaneous Hurry-Ups",
          val: "1B awarded automatically",
        },
        {
          key: "TA Multiball Annihilation Award",
          val: "50M base, +5M each, max 250M",
        },
        {
          key: "TA Multiball Annihilation Jackpot (Centre Orbit)",
          val: "Starts at 50M, grows with each award collected",
        },
        {
          key: "Strobe Multiball",
          val: "50M per hit; 250M bonus + EB at every 10 hits; 250M per hit after 100 hits",
        },
        {
          key: "Conquer Mars (6th wave, final shot)",
          val: "2.5B",
        },
        {
          key: "Rule the Universe goal",
          val: "5B during wizard multiball, then +5B bonus awarded",
        },
        {
          key: "Stroke of Luck",
          val: "Variable: best awards are +5 Bonus X, Hold Bonus X, Multiball, Strobe Multiball",
        },
      ],
      rules: [
        "<strong>Skill Shot adds 5x to Bonus Multiplier</strong> each time, stacks across all balls. Max 250x.",
        "<strong>6 Attack Waves:</strong> defend 5 countries (hit Force Field targets to lower, then UFO Target hits, then hole to destroy saucer), then Conquer Mars (10 hole shots, final = 2.5B). Wave 2 lights Extra Ball.",
        "<strong>Regular Lock Multiball:</strong> Shoot Centre Orbit (4) to light locks, then 3 more times to lock balls. 5 jackpot shots (60M-200M). Collect all 5 to light roaming Super Jackpot (250M-1B max).",
        "<strong>Martian Attack / Martian Multiball:</strong> Complete all 7 M-A-R-T-I-A-N targets, collect at Stroke of Luck Sinkhole (9), hit all 4 Martian banks in 30 sec for 2-ball Martian Multiball. Each Martian = 20M-100M live + 250M bonus (x multiplier).",
        "<strong>Total Annihilation Multiball:</strong> 3 lamps on each of Left Orbit, Left Ramp, Right Ramp, Right Orbit. 3rd lamp starts Hurry-Up at Attack Targets Bank (6). Stack all 4 Hurry-Ups for 1B + 4-ball TA. Annihilation Awards on all 5 shots; Annihilation Jackpot at Centre Orbit (4).",
        "<strong>Strobe Multiball:</strong> Stroke of Luck exclusive. All lights out, 3 balls, Force Field targets for 50M each. 10 hits = 250M bonus + EB lit.",
        "<strong>Multiballs can stack:</strong> Martian Multiball runs alongside Lock Multiball, TA, or Strobe. Start Martian Attack first, then trigger the other multiball.",
        "<strong>Stroke of Luck Sinkhole (9):</strong> relit by completing all 4 inlane/outlane rollovers. Cycle unlit lanes with flipper buttons.",
      ],
      benchmarks: [
        {
          score: "2B+",
          label: "Excellent: Multiball + Martian kills + high multiplier",
        },
        {
          score: "500M+",
          label: "Good: Multiball reached with some Martians",
        },
        {
          score: "< 100M",
          label: "Attack Waves not completed",
        },
      ],
      resources: [
        {
          name: "IPDB Entry",
          url: "https://www.ipdb.org/machine.cgi?id=125",
          icon: "🎯",
        },
        {
          name: "Pinside Game Page",
          url: "https://pinside.com/pinball/machine/attack-from-mars",
          icon: "🕹️",
        },
        {
          name: "Zen Studios Guide",
          url: "https://zenstudios.com/pinball-table-guides",
          icon: "📖",
        },
      ],
    },
    strategy: {
      skillShot: "Use the <strong>standard Skill Shot</strong> (lit rollover lane) every ball for <strong>+5x Bonus Multiplier</strong>. This stacks across all balls. Avoid the Super Skill Shot (hold left flipper) unless you specifically need to spot Total Annihilation lamps; the multiplier gain from the standard Skill Shot is always more valuable.",
      multiball: "<strong>4 multiball modes, and they can overlap.</strong> (1) <em>Lock Multiball:</em> Shoot Centre Orbit (4) to light locks, lock 3 balls, collect 5 jackpots, then chase the roaming Super Jackpot (250M-1B). (2) <em>Martian Multiball:</em> Complete M-A-R-T-I-A-N, collect at Stroke of Luck Sinkhole (9), hit all 4 Martian banks in 30 sec. Each Martian = 20M-100M live + 250M to bonus (x multiplier). (3) <em>Total Annihilation:</em> 3 lamps on each of 4 shots, stack all 4 Hurry-Ups for 1B + 4-ball multiball. Annihilation Jackpot at Centre Orbit (4). (4) <em>Strobe Multiball:</em> Stroke of Luck exclusive, Force Field targets for 50M each in the dark, 250M bonus every 10 hits. <strong>Stack Martian Multiball with any other multiball</strong> by starting Martian Attack first.",
      goal: "Stack Bonus Multiplier every ball (Skill Shot = +5x each). Run overlapping multiballs. Accumulate Martian kills: each adds 250M to end-of-ball bonus x your multiplier. At 250x with 5 Martians killed, the bonus exceeds 300 Billion. Get Hold Bonus X from Stroke of Luck to carry your multiplier to the next ball.",
      phases: [
        {
          num: "Phase 1: Every Ball",
          title: "Skill Shot, Multiplier Stack, Stroke of Luck",
          body: "Nail the Skill Shot (+5x multiplier). Immediately collect the Stroke of Luck Sinkhole (9), lit at ball start on the right side. Cycle inlane/outlane rollovers with flip buttons to relight it. Best awards: +5 Bonus X, Hold Bonus X, Light/Award Lock. Build Total Annihilation lamps via ramp and orbit shots.",
        },
        {
          num: "Phase 2: Lock Multiball + Martian Attack",
          title: "Trigger Multiballs and Stack Them",
          body: "Get Lock Multiball going via Centre Orbit (4). While working locks, also complete M-A-R-T-I-A-N targets to light Martian Attack. Ideal sequence: light Martian Attack, start Martian Attack window, then trigger Lock Multiball so both run concurrently. During Lock Multiball: collect all 5 jackpots (Left Orbit, Left Ramp, Centre Orbit, Right Ramp, Right Orbit), then chase the roaming Super Jackpot. Use left/right ramps as your safe jackpot shots.",
        },
        {
          num: "Phase 3: Total Annihilation + Martian Kills",
          title: "4-Ball TA Multiball and Bonus Accumulation",
          body: "Total Annihilation lamps build passively through ramp and orbit play. When 3 Hurry-Ups are active at the Attack Targets Bank (6), go for the 4th to trigger 1B + TA Multiball automatically. During TA, alternate ramps and orbits for safe annihilation awards, and shoot Centre Orbit (4) for the Annihilation Jackpot. Keep killing Martians whenever possible: every kill stacks 250M onto your end-of-ball bonus.",
        },
        {
          num: "Phase 4: End of Ball Protection",
          title: "Protect the Multiplier",
          body: "If you have built a large Bonus Multiplier (50x+) and accumulated Martian kills, the end-of-ball bonus will be massive: (5M + 250M x kills) x multiplier. Stop taking risky shots. Hold Bonus X from Stroke of Luck carries your multiplier to the next ball. If you get this award, that ball is worth protecting from the very start.",
        },
      ],
      safeShots: [
        {
          name: "Left/Right Ramps (3, 10)",
          desc: "Most reliable shots on the table. Return cleanly to flippers, advance Total Annihilation lamps, score jackpots and Annihilation Awards during multiball. Primary shots throughout all phases.",
        },
        {
          name: "Left/Right Orbits (2, 11)",
          desc: "Good for Total Annihilation progress. Return via inlanes. Safe during multiball for jackpot and annihilation award collection.",
        },
        {
          name: "Stroke of Luck Sinkhole (9)",
          desc: "Right sinkhole, worth attempting from the right flipper whenever lit. The potential awards (multiplier boosts, lock awards, multiball) are too valuable to pass up.",
        },
      ],
      avoidShots: [
        {
          name: "Force Field Targets (6) outside Attack Wave",
          desc: "Only hit when lit for the current Attack Wave. Random hits do not advance waves.",
        },
        {
          name: "Centre Orbit (4) during single-ball play when not needed",
          desc: "The Centre Orbit can feed the bumper area unpredictably when not used for locking. Shoot it deliberately for locks and TA progress only.",
        },
      ],
      tips: [
        {
          head: "Standard Skill Shot beats Super Skill Shot every time",
          body: "+5x Bonus Multiplier per standard Skill Shot compounds enormously across a game. The Super Skill Shot's 50M is a one-time fixed value. Unless you desperately need TA spots on a ramp, always take the standard Skill Shot.",
        },
        {
          head: "Start Martian Attack BEFORE triggering other multiballs",
          body: "Once Lock Multiball or Strobe Multiball is running, you cannot start Martian Attack fresh. If Martian Attack is already active (in the 30-second window), it can run concurrently with those modes, giving you Martian kills alongside multiball scoring.",
        },
        {
          head: "All 5 jackpots must be scored before the Super Jackpot appears",
          body: "During Lock Multiball, the Super Jackpot only becomes available after all 5 jackpot shots (Left Orbit, Left Ramp, Centre Orbit, Right Ramp, Right Orbit) are collected. Once lit, it roams every few seconds. Use ramps as your safe setup shots and wait for it to arrive.",
        },
        {
          head: "Martian Bombs only work during Martian Attack phase",
          body: "Martian Bombs (earned via Sneak Attack or Stroke of Luck, used with Launch Button) work during the 30-second Martian Attack window only, NOT during Martian Multiball itself. Each bomb destroys one Martian, which still adds 250M to your end-of-ball bonus.",
        },
      ],
      mistakes: [
        "Missing the standard Skill Shot: +5x Bonus Multiplier per ball is the foundation of everything.",
        "Not cycling rollover lamps with flip buttons: every unlit lane completed relights Stroke of Luck and adds to multiplier.",
        "Starting Lock Multiball before lighting Martian Attack: you lose the chance to stack them.",
        "During Lock Multiball, hunting ramp jackpots before collecting all 5 shots: the Super Jackpot only appears after all 5 are scored.",
        "During Martian Multiball, chasing ramps instead of Martian target banks: each Martian kill adds 250M to the bonus.",
        "Ignoring Total Annihilation lamp progress: every ramp and orbit shot builds TA passively.",
        "Draining on a high-multiplier ball without collecting end-of-ball bonus.",
        "Using Martian Bombs during Martian Multiball (they do not work there) or saving them unused.",
      ],
    },
    hotspots: [
      {
        x: 23.2,
        y: 35.4,
        type: "key",
        label: "LR",
        name: "Left Ramp (3) - Big-O-Beam",
        body: "<strong>Primary safe shot.</strong> Advances Total Annihilation lamps (Big-O-Beam) and scores Annihilation Awards during TA Multiball. Returns cleanly to left flipper. Scores jackpots during Lock Multiball.",
      },
      {
        x: 74.9,
        y: 36.1,
        type: "key",
        label: "RR",
        name: "Right Ramp (10) - Tractor Beam",
        body: "Mirror of Left Ramp. Advances Total Annihilation (Tractor Beam) and scores Annihilation Awards during TA Multiball. Returns cleanly to right flipper. Alternate left and right ramps for highest jackpot output.",
      },
      {
        x: 50.5,
        y: 25.5,
        type: "key",
        label: "UFO",
        name: "UFO Target (7) / Saucer Hole",
        body: "<strong>The UFO Target is hit during Attack Waves</strong> to damage the flying saucer. Once enough hits land, the UFO Target lowers revealing the hole behind it. Shoot the hole to destroy the saucer and complete the wave (200M-600M, +100M each wave). During Conquer Mars (6th wave): 10 hole shots, final shot = <strong>2.5B</strong>. After Conquer Mars: each UFO Target hit = 100M for the rest of the game. Also used during Rule the Universe to relight Victory Laps.",
      },
      {
        x: 32.2,
        y: 31.6,
        type: "key",
        label: "CO",
        name: "Centre Orbit (4) - Ball Lock",
        body: "<strong>Key central shot used for ball locking, jackpots, and Total Annihilation.</strong> First multiball: shoot once to enable all 3 locks, then 3 more times to lock balls. Subsequent multiballs: one shot per lock. During Lock Multiball and TA Multiball: scores jackpots and Annihilation Awards. <strong>Annihilation Jackpot is lit here</strong> after scoring any other TA shot. Stroke of Luck can award Light Lock or Award Lock to shortcut the locking process.",
      },
      {
        x: 67.2,
        y: 31.7,
        type: "key",
        label: "SoL",
        name: "Stroke of Luck Sinkhole (9)",
        body: "<strong>Right sinkhole: the most valuable recurring shot in the game.</strong> Lit at ball start, relit by completing all 4 inlane/outlane rollovers (cycle with flipper buttons). Random awards: +5 Bonus X (key multiplier boost), Hold Bonus X (carries multiplier to next ball!), Light/Award Lock (shortcuts multiball locking), Multiball (instant!), Strobe Multiball, Sneak Attack (150M hurry-up + 2 Martian Bombs), Video Mode, and more. Lighting it 10 times also lights Extra Ball. <strong>Always collect when lit.</strong>",
      },
      {
        x: 19.6,
        y: 64.8,
        type: "key",
        label: "MAR",
        name: "M-A-R Martian Targets (1)",
        body: "Part of the 7-target M-A-R-T-I-A-N bank. <strong>Complete all 7 to light Martian Attack</strong> at Stroke of Luck Sinkhole (9). During Martian Attack (30-sec window) hitting these counts as one of 4 banks needed to start Martian Multiball. Each kill = 20M-100M live + <strong>250M added to end-of-ball bonus</strong>. At 250x multiplier: 62.5B per Martian from bonus.",
      },
      {
        x: 41.2,
        y: 40.2,
        type: "key",
        label: "T",
        name: "T Martian Target (5)",
        body: "The T of M-A-R-T-I-A-N. Hit during Martian Attack phase (30-sec window) to count as one of 4 required banks. Each kill = 20M-100M live + 250M to end-of-ball bonus (x multiplier).",
      },
      {
        x: 60.2,
        y: 40.2,
        type: "key",
        label: "I",
        name: "I Martian Target (8)",
        body: "The I of M-A-R-T-I-A-N. Located just left of the Stroke of Luck Sinkhole. Hit during Martian Attack phase to count as one of 4 required banks. Each kill = 20M-100M live + 250M to end-of-ball bonus (x multiplier).",
      },
      {
        x: 75,
        y: 62.7,
        type: "key",
        label: "AN",
        name: "A-N Martian Targets (12)",
        body: "The A-N of M-A-R-T-I-A-N, lower right. Hit during Martian Attack phase to count as one of 4 required banks. During Martian Multiball, prioritise this bank alongside M-A-R on the left. Each kill = 20M-100M live + 250M to end-of-ball bonus (x multiplier).",
      },
      {
        x: 15.2,
        y: 39.9,
        type: "safe",
        label: "LO",
        name: "Left Orbit (2) - Capture",
        body: "Safe shot. Advances Total Annihilation (Capture) and scores jackpots/Annihilation Awards during multiball. Returns via inlane.",
      },
      {
        x: 82.7,
        y: 39.9,
        type: "safe",
        label: "RO",
        name: "Right Orbit (11) - Atomic Blaster",
        body: "Safe from left flipper. Advances Total Annihilation (Atomic Blaster) and scores jackpots/Annihilation Awards during multiball. Returns via right inlane.",
      },
      {
        x: 50.3,
        y: 35.7,
        type: "info",
        label: "FF",
        name: "Attack Targets Bank / Force Field (6)",
        body: "Motorised 3-target bank (Force Field). Hit all 3 to lower the bank and start an Attack Wave. Also the target for TA Hurry-Up: when a TA Hurry-Up is active, hit any of these 3 targets to collect the value. Used in <strong>Strobe Multiball</strong> as the only target: 50M per hit. When already lowered, TA Hurry-Up is instead scored at the UFO Target (7).",
      },
      {
        x: 7.7,
        y: 77.9,
        type: "avoid",
        label: "!",
        name: "Left Outlane",
        body: "Open outlane, no rubber post. Use full power on ramp shots to avoid weak shots bouncing back left. Cycle rollover lamps to keep Stroke of Luck lit.",
      },
      {
        x: 84.2,
        y: 77.9,
        type: "avoid",
        label: "!",
        name: "Right Outlane",
        body: "Open outlane. Recover flipper position quickly after right orbit shots. The Stroke of Luck Sinkhole (9) is on the right side: approach it deliberately, never chase it under pressure.",
      },
    ],
  };
