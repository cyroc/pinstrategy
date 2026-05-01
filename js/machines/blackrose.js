  /* ─── BLACK ROSE ──────────────────────────────────────────── */
MACHINES["blackrose"] = {
    name: "Black Rose",
    sub: "1992 · Williams/Bally · Standard",
    tagline: "Pirate cannon · Double Broadside · Sink Ship scoring",
    image: "images/black-rose.png",
    difficulty: "Hard",
    diffClass: "diff-hard",
    era: "DMD",
    info: {
      stats: [
        {
          label: "Manufacturer",
          value: "Williams (Bally label)",
        },
        {
          label: "Year",
          value: "1992",
        },
        {
          label: "Designers",
          value: "John Trudeau & Brian Eddy",
        },
        {
          label: "Programmer",
          value: "Brian Eddy",
        },
        {
          label: "Production",
          value: "3,746 units",
        },
        {
          label: "Platform",
          value: "WPC",
        },
      ],
      theme: "A pirate ship battles enemies using the Cannon. Load the Cannon via the Side Ramp (4) to collect Cannon Level Awards — especially 'Double Broadside,' which doubles the Broadside Lane value up to 32M per hit. Collect all 7 Broadside Bonus Values to light the Jackpot at the Left Ramp (2). Sink Ships for 20M–40M each. Activate Multiball via Pirate's Cove (1) to collect SINK SHIP letters and unlock Hidden Treasure.",
      features: [
        {
          name: "Cannon Level Awards",
          desc: "Load the Cannon via Side Ramp (4) to earn escalating awards. <strong>Level 1 'Double Broadside'</strong> turns the Broadside Lane (7) into a 30-second scoring engine: 1M → 2M → 4M → 8M → 16M → 32M per hit, doubling each shot. This is the highest-value timed mode on the table.",
        },
        {
          name: "Broadside Bonus Values",
          desc: "Separate from Cannon awards, the Broadside Lane (7) cycles through 7 values during normal play: Polly (random Video Mode reward + 2M kill bonus), Knife Throw, Walk the Plank, Rigging Swing (all Video Modes), Instant Multiball, Treasure Chest, and Millions (all ramps score 1M+ escalating for 30 sec). Collect all 7 to light Jackpot.",
        },
        {
          name: "Jackpot — Left Ramp (2)",
          desc: "Jackpot lives on the Left Ramp (2). Starts at 5M, max 30M. Lit by collecting all 7 Broadside Bonus Values, or via Video Mode/Polly reward. Carries over ball-to-ball and game-to-game until collected.",
        },
        {
          name: "Multiball (2 or 3 Ball)",
          desc: "Spell L-O-C-K via inlane/outlane rollovers → light Lock 1 → shoot Pirate's Cove (1). During 2-ball: each ramp shot = 1M + 1 SINK SHIP letter. During 3-ball: 2M + 2 letters. Upgrade to 3-ball by shooting both balls into Pirate's Cove (1) within 20 seconds. Collect Jewels to unlock Hidden Treasure Mode.",
        },
        {
          name: "Sinking Ships",
          desc: "Complete S-I-N-K S-H-I-P letters (S-I-N-K pre-completed) → Locker opens → load Cannon → fire at Broadside Lane (7). 1st ship = 20M, 2nd = 30M, 3rd = 40M (+10M each). 2 ships sunk lights Special (10M + Jackpot) at Pirate's Cove (1) and Right Orbit (10) for 30 seconds.",
        },
        {
          name: "Bonus Multiplier (max 9×)",
          desc: "Applied to Damage Bonus only (base 5K, grows with every major shot). After 'Lock 1' is lit, each full L-O-C-K rollover completion advances multiplier by 1×. Max is 9×. Also advances during Multiball.",
        },
        {
          name: "Jet Bumper Progression",
          desc: "Start at 1K/hit. Each Right Orbit (10) shot adds 1K up to 15K max. Once maxed, Right Orbit = 1M for the rest of that ball. Carries over ball-to-ball until maxed; resets after drain. Cannon Level 6 instantly maxes them.",
        },
        {
          name: "Whirlpool Ramp (9)",
          desc: "Advancing shots within 20-second windows score 100K → 200K → 300K → 400K → Extra Ball → 1M. Once at 1M, consecutive shots keep scoring 1M until the timer expires. Feeds left inlane for easy repeat shots.",
        },
        {
          name: "3-Bank Ricochet",
          desc: "Advanced technique: hit Torch Targets (3) so ball bounces to Gun Powder (8) then Cannon Ball (6). Scores 3M and opens Davey Jones' Locker. Very high reward if executed.",
        },
        {
          name: "Hidden Treasure Mode",
          desc: "During Multiball, collect all 6 flashing Jewels (100K each) to score 1M and activate Hidden Treasure. While active: each Jewel = +250K, each Left Ramp (2) or Whirlpool Ramp (9) coin = +500K added to end-of-ball Treasure Bonus.",
        },
      ],
      scoring: [
        {
          key: "Double Broadside (max run)",
          val: "1M+2M+4M+8M+16M+32M = 63M (6 hits)",
        },
        {
          key: "Double Broadside single hit (max)",
          val: "32M",
        },
        {
          key: "Ship sinking — 1st / 2nd / 3rd",
          val: "20M / 30M / 40M",
        },
        {
          key: "Jackpot (Left Ramp)",
          val: "5M – 30M",
        },
        {
          key: "SINK SHIP letter",
          val: "1M each",
        },
        {
          key: "Multiball ramp (2-ball / 3-ball)",
          val: "1M / 2M per shot",
        },
        {
          key: "Multiball Bonus (Broadside/SR)",
          val: "250K → max 4.75M (carries over)",
        },
        {
          key: "Broadside Hurry-Up",
          val: "2M → 500K",
        },
        {
          key: "3-Bank Ricochet",
          val: "3M + Locker open",
        },
        {
          key: "Special (after 2 ships)",
          val: "10M + Jackpot value",
        },
        {
          key: "Sneak Attack (LR→SR roll-down)",
          val: "1M",
        },
        {
          key: "Damage Bonus multiplier (max)",
          val: "9×",
        },
      ],
      rules: [
        "<strong>Double Broadside is the primary scoring engine.</strong> Load Cannon via Side Ramp (4) → earn Level 1 → hammer Broadside Lane (7) for up to 32M per hit for 30 seconds. Never shoot anything else during Double Broadside.",
        "<strong>Two separate Broadside systems exist.</strong> Cannon Level Awards (earned from the Cannon) and Broadside Bonus Values (cycling at Broadside Lane during normal play) are distinct. Collect all 7 Bonus Values → Jackpot lit at Left Ramp (2).",
        "<strong>Multiball is via Pirate's Cove (1).</strong> Spell L-O-C-K on rollovers → Light Lock 1 → shoot Pirate's Cove. Ramp shots during Multiball collect SINK SHIP letters (1M each) and advance toward Hidden Treasure.",
        "<strong>Bonus Multiplier max is 9×</strong> (on Damage Bonus only). After Lock 1 is lit, every L-O-C-K rollover completion = +1×. Cycle inlanes/outlanes continuously.",
        "<strong>SINK SHIP: S-I-N-K pre-completed.</strong> Only 4 more letters needed (S-H-I-P). After completing: Locker opens → load Cannon → fire Broadside Lane (7) to sink ship. Can stack multiple completions for back-to-back sinking attempts.",
        "<strong>Instant Reload window:</strong> Missing a Cannon shot re-opens Locker for 20 seconds. Reload immediately — far easier than reopening from scratch.",
        "<strong>Jackpot carries over game-to-game</strong> until collected. May start high on a warm machine. Lit by all 7 Broadside values, Video Mode reward, or Polly.",
        "<strong>Left Ramp (2) doubles Side Ramp values.</strong> Hit Left Ramp once → chain Side Ramp shots at 200K/400K/600K/800K within the 6-second timer.",
      ],
      benchmarks: [
        {
          score: "500M+",
          label: "Excellent — Double Broadside maxed + multiple ships + Jackpot",
        },
        {
          score: "150M+",
          label: "Good — Double Broadside collected + 1–2 ships",
        },
        {
          score: "< 30M",
          label: "Cannon not advanced past Level 1",
        },
      ],
      resources: [
        {
          name: "IPDB Entry",
          url: "https://www.ipdb.org/machine.cgi?id=257",
          icon: "🎯",
        },
        {
          name: "Pinside Game Page",
          url: "https://pinside.com/pinball/machine/black-rose",
          icon: "🕹️",
        },
        {
          name: "Zen Studios Guide",
          url: "https://zensite.wpenginepowered.com/wp-content/uploads/2024/04/WP-Black-Rose-Pinball-Guide-by-ShoryukenToTheChin.pdf",
          icon: "📖",
        },
      ],
    },
    strategy: {
      skillShot: "Plunge to hit the Torch Stand-Up Targets (3). Scores 500K and opens Davey Jones' Locker for free — shoot Side Ramp (4) immediately to load the Cannon and attempt Level 1 'Double Broadside' right away.",
      multiball: "<strong>2-Ball or 3-Ball Multiball via Pirate's Cove (1).</strong> Spell L-O-C-K via inlane/outlane rollovers → light Lock 1 → shoot Pirate's Cove (1) to lock ball and start Multiball. Upgrade to 3-ball by shooting both balls into Pirate's Cove (1) within 20 seconds. During Multiball: hit Left Ramp (2), Side Ramp (4), Whirlpool Ramp (9) for 1M + 1 SINK SHIP letter each (2M + 2 letters in 3-ball). Collect Jewels to unlock Hidden Treasure Mode for end-of-ball Treasure Bonus. Broadside Lane (7) and Side Ramp (4) also score the escalating Multiball Bonus (250K → max 4.75M, carries over).",
      goal: "Load the Cannon via Side Ramp (4) every ball to earn Cannon Level Awards — starting with 'Double Broadside' (Broadside Lane 1M→32M for 30 sec). Collect all 7 Broadside Bonus Values to light Jackpot at Left Ramp (2). Sink ships (20M, 30M, 40M) by completing SINK SHIP letters. Build 9× Damage Bonus Multiplier via L-O-C-K rollovers. Activate Multiball through Pirate's Cove (1) for rapid letter collection and Hidden Treasure.",
      phases: [
        {
          num: "Phase 1 · Cannon Loading",
          title: "Skill Shot → Double Broadside",
          body: "Every ball: land Skill Shot on Torch Targets (3) for free Locker opening (500K). Immediately shoot Side Ramp (4) to load Cannon. Earn Level 1 'Double Broadside' — then hammer Broadside Lane (7) exclusively for 30 seconds. 6 hits = 63M. Begin L-O-C-K rollover progress alongside.",
        },
        {
          num: "Phase 2 · Broadside Values + Multiball",
          title: "Broadside Bonus → SINK SHIP → Lock",
          body: "Between Cannon loads, hit Broadside Lane (7) to collect cycling Broadside Bonus Values. Bank toward all 7 → Jackpot at Left Ramp (2). Spell L-O-C-K → shoot Pirate's Cove (1) for Multiball. During Multiball: ramp shots for SINK SHIP letters + 1M each. Collect Jewels for Hidden Treasure.",
        },
        {
          num: "Phase 3 · Ship Sinking + Jackpot",
          title: "Sink Ships + Maximize Bonus",
          body: "After SINK SHIP completes (during or after Multiball), fire Cannon at Broadside Lane (7) to sink ships (20M/30M/40M). Collect Jackpot at Left Ramp (2) — up to 30M. Keep cycling L-O-C-K rollovers for 9× Bonus Multiplier. Broadside 'Millions' mode = all 3 ramps at escalating 1M+ for 30 sec.",
        },
        {
          num: "Phase 4 · Repetition",
          title: "Reload Cannon Each Ball",
          body: "Re-engage the full loop every ball: Skill Shot → Cannon load → Double Broadside → Broadside values → Multiball. The Side Ramp consecutive-shot counter resets each ball (back to 2 shots needed), so every ball restarts efficiently. Keep stacking SINK SHIP completions for back-to-back ship sinks.",
        },
      ],
      safeShots: [
        {
          name: "Side Ramp (4)",
          desc: "Primary Cannon-loading shot. Consistent return. Values 100K→400K consecutive (doubles if Left Ramp hit first). The core safe shot for the whole game.",
        },
        {
          name: "Left Ramp (2)",
          desc: "Reliable from right flipper. Doubles Side Ramp values. Jackpot shot when lit. Sneak Attack (1M) if ball rolls back down to Side Ramp.",
        },
        {
          name: "Whirlpool Ramp (9)",
          desc: "Feeds left inlane for easy repeat shots. 100K→1M advancing value. 1M per shot once maxed. Essential for Multiball SINK SHIP letters and Hidden Treasure coins.",
        },
        {
          name: "Broadside Lane (7)",
          desc: "Primary scoring destination during Double Broadside (1M→32M). Also collects cycling Broadside Bonus Values and is the ship-sinking shot.",
        },
      ],
      avoidShots: [
        {
          name: "Torch Targets (3) at speed",
          desc: "Ball can ricochet unpredictably from the standup bank. Approach with medium power for controlled 3-Bank Ricochet attempts only.",
        },
        {
          name: "Pirate's Cove (1) without purpose",
          desc: "Very short lane with unpredictable returns. Only shoot it to complete L-O-C-K letters or collect the Special after 2 ships are sunk.",
        },
      ],
      tips: [
        {
          head: "Double Broadside is everything",
          body: "When Level 1 lights, stop all other activity and hit Broadside Lane (7) exclusively for 30 seconds. 5 hits = 31M. 6 = 63M. 7 = 127M. Historical records show 95M+ from a single Double Broadside run.",
        },
        {
          head: "Left Ramp doubles Side Ramp",
          body: "Hit Left Ramp (2) once to double all subsequent Side Ramp (4) values within the 6-second timer window. Chain: Left Ramp → Side Ramp → Side Ramp → Side Ramp for 200K/400K/600K/800K.",
        },
        {
          head: "Stack SINK SHIP during Multiball",
          body: "During 3-ball Multiball, every ramp shot collects 2 SINK SHIP letters + 2M. Complete SINK SHIP twice to bank two ship-sinking attempts. After Multiball: fire Cannon → Broadside Lane → 20M + 30M in rapid succession.",
        },
        {
          head: "Polly kill bonus",
          body: "When Polly announces the Video Mode reward, immediately mash Launch + Flipper buttons rapidly to kill Polly for an extra 2M points on top of the award.",
        },
        {
          head: "Jackpot carries over",
          body: "The Left Ramp Jackpot (5M–30M) persists across balls and games until someone collects it. Check the DMD for Jackpot value — it may already be high from previous play.",
        },
      ],
      mistakes: [
        "Missing the Skill Shot — loses the free Locker opening, forcing 2+ consecutive Side Ramp shots just to start the Cannon sequence.",
        "Shooting anything other than Broadside Lane (7) during Double Broadside — every miss wastes a doubling window.",
        "Confusing the two Broadside systems — Cannon Level Awards and Broadside Bonus Values both use the Broadside Lane but are triggered differently and tracked separately.",
        "Missing the 20-second Instant Reload window after a failed Cannon shot — reloading during this window is far easier than reopening the Locker from scratch.",
        "Starting Multiball without a plan — ramp shots during Multiball (1M + 1 letter each) are your fastest SINK SHIP letter source.",
        "Forgetting SINK SHIP completed during Multiball doesn't open the Locker until Multiball ends.",
        "Ignoring L-O-C-K rollovers after Lock 1 is lit — the 9× Damage Bonus Multiplier is significant free scoring.",
        "Not building Jet Bumper value via Right Orbit (10) shots — maxing it enables 1M per Right Orbit for the rest of that ball.",
      ],
    },
    hotspots: [
      {
        x: 12.7,
        y: 40.6,
        type: "key",
        label: "PC",
        name: "Pirate's Cove Lane (1)",
        body: "<strong>Multiball lock shot.</strong> Spell L-O-C-K on rollovers → light Lock 1 → shoot here to start Multiball. Also spots L-O-C-K letters. After 2 ships sunk: Special lit here for 10M + Jackpot value.",
      },
      {
        x: 22.3,
        y: 37.6,
        type: "key",
        label: "LR",
        name: "Left Ramp (2)",
        body: "<strong>Jackpot shot (5M–30M) when lit.</strong> Doubles Side Ramp (4) values when hit. Sneak Attack: if ball rolls back down to Side Ramp = 1M automatically. Multiball SINK SHIP letters + 1M each.",
      },
      {
        x: 37.8,
        y: 45,
        type: "info",
        label: "TT",
        name: "Torch Stand-Up Targets (3)",
        body: "<strong>Skill Shot target — 500K + free Locker opening.</strong> Completing all 3 (with Gun Powder & Cannon Ball banks) also opens Locker. Each flashing target = 10K; lit = 5K; bank complete = 150K.",
      },
      {
        x: 33,
        y: 28.5,
        type: "key",
        label: "SR",
        name: "Side Ramp / Davey Jones' Locker (4)",
        body: "<strong>Load the Cannon here.</strong> 2 consecutive shots (within 6 sec) opens Locker; count increases by 1 each time (max 6), resets next ball. Values: 100K→200K→300K→400K. Hit Left Ramp first to double all values. During Multiball: 1M + 1 SINK SHIP letter.",
      },
      {
        x: 36.8,
        y: 21.8,
        type: "safe",
        label: "SL",
        name: "Side Loop (5)",
        body: "Combo shot. Side Loop → Right Orbit = 500K (2-way combo). Left Ramp → Side Loop → Right Orbit = 1M (3-way combo).",
      },
      {
        x: 34.8,
        y: 16.4,
        type: "info",
        label: "CB",
        name: "Cannon Ball Stand-Up Targets (6)",
        body: "Complete this bank (with Torch & Gun Powder) to open Davey Jones' Locker. Each flashing target = 10K; lit = 5K; bank complete = 150K. Doubloon Target (11) spots a target in this bank.",
      },
      {
        x: 46,
        y: 52.5,
        type: "key",
        label: "BS",
        name: "Broadside Lane (7)",
        body: "<strong>Double Broadside (Cannon Level 1): 1M→2M→4M→8M→16M→32M per hit for 30 sec.</strong> Also cycles 7 Broadside Bonus Values during normal play (Polly, Knife, Walk the Plank, Rigging Swing, Instant Multiball, Treasure Chest, Millions). All 7 collected → Jackpot at Left Ramp (2). Ship sinking shot from Cannon.",
      },
      {
        x: 58.4,
        y: 31.8,
        type: "info",
        label: "GP",
        name: "Gun Powder Stand-Up Targets (8)",
        body: "Complete this bank (with Torch & Cannon Ball) to open Davey Jones' Locker. 3-Bank Ricochet: Torch→Gun Powder→Cannon Ball = 3M + Locker open. Each flashing target = 10K; lit = 5K; bank complete = 150K.",
      },
      {
        x: 67.5,
        y: 30.3,
        type: "safe",
        label: "WP",
        name: "Whirlpool Ramp (9)",
        body: "<strong>Advancing value: 100K→200K→300K→400K→1M</strong> within 20-second windows. Once at 1M, stays at 1M until timer expires. During Multiball: 1M + 1 SINK SHIP letter. Hidden Treasure coin shots = +500K to Treasure Bonus each.",
      },
      {
        x: 74,
        y: 37.7,
        type: "info",
        label: "RO",
        name: "Right Orbit (10)",
        body: "Each shot adds 1K to Jet Bumper value (max 15K). Once Jet Bumpers maxed: Right Orbit = <strong>1M for rest of ball</strong>. After 2 ships sunk: Special lit here for 10M + Jackpot. Combo target (Side Loop → Right Orbit).",
      },
      {
        x: 76.2,
        y: 55.3,
        type: "info",
        label: "DT",
        name: "Doubloon Target (11)",
        body: "50K per hit. Spots a Stand-Up Target to help complete banks (opens Locker). Also relights Broadside Lane (7) during the Hurry-Up window after a Broadside Bonus Value is collected.",
      },
      {
        x: 7,
        y: 83,
        type: "avoid",
        label: "!",
        name: "Left Outlane",
        body: "Open outlane. L-O-C-K rollover here contributes to multiplier and LOCK progress. Control your shots — Side Ramp misses can feed left drain.",
      },
      {
        x: 88,
        y: 83,
        type: "avoid",
        label: "!",
        name: "Right Outlane",
        body: "Open outlane. L-O-C-K rollover here contributes to multiplier and LOCK progress. Whirlpool Ramp misses can slide right.",
      },
    ],
  };
