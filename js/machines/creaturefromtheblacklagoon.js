  /* ─── CREATURE FROM THE BLACK LAGOON ──────────────────────────────────────────── */
MACHINES["creaturefromtheblacklagoon"] = {
    name: "Creature from the Black Lagoon",
    sub: "1992 · Bally · Pinball FX3",
    tagline: "Rescue the girl from the creature by unlocking the Black Lagoon's secrets.",
    image: "images/creature-black-lagoon.jpg",
    difficulty: "Medium",
    diffClass: "diff-medium",
    era: "DMD",
    info: {
      stats: [
        {
          label: "Manufacturer",
          value: "Bally",
        },
        {
          label: "Year",
          value: "1992",
        },
        {
          label: "Designer",
          value: "John Trudeau",
        },
        {
          label: "Programmer",
          value: "Jeff Johnson",
        },
        {
          label: "Platform",
          value: "Pinball FX3",
        },
        {
          label: "Production",
          value: "7,841 units",
        },
      ],
      theme: "A movie-themed adventure where the objective is to rescue the girl from the creature. The game combines film-inspired modes with multiball excitement and features creature encounters, exploration of underwater settings, and dramatic rescue sequences. The black lagoon itself drives the table's narrative and playfield design.",
      features: [
        {
          name: "Left Saucer (1)",
          desc: "Locks balls for Multiball; scores points based on game state; collects K-I-S-S letters.",
        },
        {
          name: "Snackbar (5)",
          desc: "Central hub; opens via menu targets; awards random rewards (Extra Ball, Special, Letters, Multiball entry, bonus multipliers).",
        },
        {
          name: "Left/Right Ramps (3, 7)",
          desc: "3-5M points per shot depending on mode; critical to Playground Awards and Big Millions.",
        },
        {
          name: "Centre Lane (4)",
          desc: "Scores points; essential for Move Your Car mode and skill shot combos.",
        },
        {
          name: "Right Saucer (8)",
          desc: "Locks balls; triggers Mega Menu; lights for SLIDE letter collection.",
        },
        {
          name: "Menu Targets (2, 6)",
          desc: "30,000 points; must light all 4 to open Snackbar and progress modes.",
        },
        {
          name: "Jet Bumpers",
          desc: "Base scores; hit count escalates various rewards. During Multiball: 20 hits after a Jackpot lights Super Jackpot (2× Jackpot value). While Video Mode is lit, bumper hits alternate the lit saucer.",
        },
        {
          name: "Whirlpool (Left Ramp entrance)",
          desc: "During Multiball, each rotation collects a C-R-E-A-T-U-R-E letter (1M points + 1× Playfield Multiplier, up to 4×). Max multiplier dramatically amplifies Jackpots and Finding Creature/Rescue Girl awards.",
        },
      ],
      scoring: [
        {
          key: "Skill Shot (P-A-I-D rollover, 1st)",
          val: "Completes sequence + increases multiplier + collects Letter L",
        },
        {
          key: "K-I-S-S Skill Shot (1st)",
          val: "Collects 1-4 letters depending on timing",
        },
        {
          key: "P-A-I-D Rollover (each)",
          val: "503,000 points",
        },
        {
          key: "Double Film Letter Combo",
          val: "4,000,000 points",
        },
        {
          key: "Menu Target",
          val: "30,000 points",
        },
        {
          key: "Mega Menu (per target)",
          val: "5,000,000 points",
        },
        {
          key: "Left Ramp (Unlimited Millions, 1st)",
          val: "3,000,000 points",
        },
        {
          key: "Big Millions (1st shot)",
          val: "5,000,000 points",
        },
        {
          key: "Double Feature (max)",
          val: "16,000,000 points",
        },
        {
          key: "Video Mode win",
          val: "15,000,000 points",
        },
        {
          key: "Finding Creature (Multiball)",
          val: "5,000,000 × Playfield Multiplier",
        },
        {
          key: "Rescue Girl",
          val: "10,000,000 points",
        },
        {
          key: "Movie Madness (Multiball, 1st RR)",
          val: "500,000 × Playfield Multiplier",
        },
        {
          key: "Monster Madness (Multiball, RR)",
          val: "4,000,000 × Playfield Multiplier",
        },
        {
          key: "Rescue Jackpot (base)",
          val: "40,000,000 points",
        },
        {
          key: "Rescue Super Jackpot",
          val: "2× Jackpot (20 Jet Bumper hits after Jackpot)",
        },
        {
          key: "Outlane FOCUS award",
          val: "500,000 points",
        },
        {
          key: "End-of-Ball Bonus Multiplier",
          val: "Max 10×",
        },
      ],
      rules: [
        "Extra balls lit at Centre Lane after collecting K-I-S-S twice (relight after 6, then 4 subsequent times).",
        "Xtra Ball Countdown activates from Snackbar; shoot left ramp within timer to light extra ball.",
        "Special lights at Left/Right Outlanes after Snackbar awards Lite Special or completing Genie Battle. Outlanes also award FOCUS (500K) on drain.",
        "P-A-I-D rollovers increase bonus multiplier (1–10×); use flipper buttons to alternate lit rollover. Each rollover = 503,000 points. P-A-I-D Skill Shot also collects Letter L.",
        "Snackbar requires lighting all 4 menu targets to open (one lights per jet bumper hit once opened). First-ever closed Snackbar shot = 80K.",
        "Big Millions unlocked via Right Saucer sequence: RS hit → Mega Menu → Playground Award → Big Millions lit at RS → shooting RS lights Right Ramp for 12 seconds (5M first shot, +5M per shot).",
        "During Multiball: Super Jackpot lit by 20 Jet Bumper hits after scoring a Jackpot (NOT Snackbar hits). Super Jackpot = 2× current Jackpot value.",
        "During Multiball: Right Ramp = Movie Madness (500K × Playfield Multiplier, +500K × PM per shot). Complete all 4 Menu Targets during Multiball → Monster Madness lights Right Ramp (4M × PM).",
        "Playfield Multiplier in Multiball scales 1×-4× by collecting C-R-E-A-T-U-R-E letters via Whirlpool (left ramp spins during Multiball).",
        "Double Feature timeout is 10 seconds; left ramp resets and doubles value each time.",
        "While Video Mode is lit, Jet Bumper hits alternate the lit saucer between Left and Right Saucer — use to position saucer before shooting.",
      ],
      benchmarks: [
        {
          score: "100M+",
          label: "Excellent",
        },
        {
          score: "50M+",
          label: "Good",
        },
        {
          score: "< 20M",
          label: "Below average",
        },
      ],
      resources: [
        {
          name: "IPDB Entry",
          url: "https://www.ipdb.org/machine.cgi?id=586",
          icon: "🎯",
        },
        {
          name: "Pinside Game Page",
          url: "https://pinside.com/pinball/machine/creature-from-the-black-lagoon",
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
      skillShot: "Choose P-A-I-D rollover (safest — progresses multiplier AND collects Letter L) or K-I-S-S orbit (higher risk, can grab F letter early). Use flipper buttons to control lit rollover.",
      multiball: "Collect all four F-I-L-M letters, then lock balls in saucers to start Rescue the Girl Multiball. Search caves for Creature (5M × Playfield Multiplier), then hit Snackbar to rescue girl (10M). Right Ramp = Movie Madness (500K × PM). All 4 Menu Targets during Multiball → Monster Madness (4M × PM). Super Jackpot lit by 20 Jet Bumper hits after a Jackpot (2× value). Playfield multiplier 1×-4× via C-R-E-A-T-U-R-E letters.",
      goal: "Collect F-I-L-M letters to unlock Rescue the Girl Multiball wizard mode. Under strict settings, focus on repeatable ramp shots and Snackbar exploitation to pile points safely.",
      phases: [
        {
          num: "Phase 1 · Early Ball",
          title: "Multiplier & Setup",
          body: "Attempt Skill Shot (P-A-I-D safest). Begin hitting 4 Menu Targets (30K each) to light Snackbar. Complete as many P-A-I-D rollovers as possible; each = +1X multiplier (goal: 5X by end of phase). Start collecting K-I-S-S letters via left saucer for F letter. Use jet bumper hits to cycle through all 4 menu targets.",
        },
        {
          num: "Phase 2 · Mid Ball",
          title: "Snackbar & Mode Climbing",
          body: "Once Snackbar opened, exploit it for random rewards (shoot 5+ times). Finish rolling over all four P-A-I-D to push multiplier to 7-8X. Unlock Big Millions via Right Saucer: shoot RS → Mega Menu (complete 4 targets for 5M each) → Playground Award → Big Millions lights at RS → shoot RS → Right Ramp lit for 12 seconds (5M, +5M per shot). Hit left ramp to light centre lane for Double Feature (500K-16M combo). Complete K-I-S-S for F letter.",
        },
        {
          num: "Phase 3 · Late Ball / Multiball",
          title: "Multiball & Endgame",
          body: "Shoot right saucer for final M letter (if not collected). Lock balls and start Rescue the Girl Multiball. Build Playfield Multiplier via Whirlpool C-R-E-A-T-U-R-E spins (1M per letter, up to 4×). Search caves (Left Saucer, Snackbar, Right Saucer) = Finding Creature (5M × PM). Hit Snackbar to rescue (10M). Shoot Right Ramp for Movie Madness (500K × PM). Complete all 4 Menu Targets for Monster Madness (4M × PM on Right Ramp). Score 20 Jet Bumper hits after any Jackpot to light Super Jackpot (2× value). Maximize end-of-ball bonus with 10× multiplier.",
        },
      ],
      safeShots: [
        {
          name: "Left Ramp (3)",
          desc: "Reliable entry; feeds back to flippers naturally; essential to modes and Double Feature.",
        },
        {
          name: "P-A-I-D Rollovers",
          desc: "Guaranteed progress toward multiplier; safe switch hits.",
        },
        {
          name: "Menu Targets",
          desc: "Scattered but predictable; part of opening sequence; low risk.",
        },
        {
          name: "Left/Right Saucers",
          desc: "Lock mechanism is safe; low drain risk on entry.",
        },
        {
          name: "Jet Bumpers",
          desc: "Always scoring; hit constantly to progress menu targets and build points.",
        },
      ],
      avoidShots: [
        {
          name: "Right Ramp (7)",
          desc: "Requires specific lane feeds; high-risk under open outlanes; only pursue when Big Millions or Super Mode actively lit.",
        },
        {
          name: "Centre Lane from non-controlled positions",
          desc: "Can drain left; prioritize controlled left-ramp feeds before centre lane combos.",
        },
        {
          name: "Rapid ramp alternation",
          desc: "Momentum on back-to-back left/right ramp shots increases outlane vulnerability; pace shots carefully.",
        },
        {
          name: "Snackbar entries at low-flapper efficiency",
          desc: "Snackbar position can drain if flipper control is loose; take time, don't rush.",
        },
        {
          name: "Overly aggressive double feature sequencing",
          desc: "Attempting to loop left ramp 10+ times for max value (16M) in one shot sequence risks momentum drain.",
        },
      ],
      tips: [
        {
          head: "Multiplier cascade",
          body: "Hitting 10X multiplier with a full bonus pool (from jet bumper hits and switch accumulation) can generate 40M+ end-of-ball bonuses alone; prioritize multiplier over mode chasing.",
        },
        {
          head: "Hold Bonus X exploit",
          body: "If Snackbar awards Hold Bonus X, you carry your multiplier to the next ball; this is the single best award you can receive under strict settings.",
        },
        {
          head: "Double Feature looping",
          body: "Left Ramp → Centre Lane → Left Ramp → Centre Lane (repeat) stacks value exponentially (500K, 1M, 2M, 4M, etc. up to 16M); each left ramp shot resets the 10-second timer.",
        },
        {
          head: "Whirlpool letter farming",
          body: "During Multiball, the Whirlpool (left ramp entrance) collects C-R-E-A-T-U-R-E letters; each = 1M points and +1X playfield multiplier (up to 4X); prioritize if playfield multiplier is low.",
        },
        {
          head: "Snackbar reward dependency",
          body: "One Multiball reward from Snackbar can unlock entire wizard mode; if you get it early, accept it.",
        },
        {
          head: "Video Mode as safety valve",
          body: "If Big Millions or Super Mode feel risky, Video Mode (right ramp 8 times) is a mini-mode that awards 15M with partial credit (300K per punch); less punishing than timed ramp sequences.",
        },
      ],
      mistakes: [
        "Not opening Snackbar early: Players ignore menu targets; Snackbar is too valuable to delay. Prioritize all 4 target hits on the first ball.",
        "Overshooting left ramp: Momentum carries ball into right orbit and outlane. Right ramp entry is tight; control the feed angle carefully.",
        "Ignoring Double Feature resets: Left ramp hits reset the 10-second Double Feature timer and double the value. Skilled players can loop this 3-4 times per sequence for 4-8M; casual players miss the combo entirely.",
        "Chasing Big Millions when multiplier is low: A 30M Big Millions value is great, but if your multiplier is 3X, the end-of-ball impact is capped. Build multiplier first, then enter modes.",
        "P-A-I-D alternation mistakes: Flipper control doesn't always toggle the lit rollover correctly; practice the timing. If unsure, shoot any rollover for points rather than risk missing the lit one.",
        "Multiball entry timing: Locking balls in saucers takes time; under open outlanes, the longer you spend locking, the more drain risk you accrue. Execute lock sequences quickly and decisively.",
        "Neglecting Super Mode: Super Mode combines 5 different modes in 25 seconds. It's chaotic but incredibly rewarding. Don't dismiss it as too hard; it's a 50M+ scenario if you can handle the complexity.",
        "Not using Hold Bonus X: If Snackbar grants Hold Bonus X and your multiplier is 8X+, the next ball's end-of-ball bonus gets that multiplier applied from the start; this is a game-changer under strict settings.",
      ],
    },
    hotspots: [
      {
        x: 26.1,
        y: 39.9,
        type: "key",
        label: "LR",
        name: "Left Ramp",
        body: "<strong>Primary safe shot and Double Feature engine.</strong> Each Left Ramp → Centre Lane → Left Ramp chain doubles value (500K → 1M → 2M → 4M → 8M → 16M). Each shot resets the 10-second Double Feature timer. Feeds Whirlpool during Multiball — see Whirlpool hotspot.",
      },
      {
        x: 63.9,
        y: 85.3,
        type: "info",
        label: "WP",
        name: "Whirlpool (Left Ramp entrance)",
        body: "<strong>Only active during Rescue the Girl Multiball.</strong> Each pass through the Whirlpool collects one C-R-E-A-T-U-R-E letter: <strong>1M points + 1× Playfield Multiplier</strong> per letter (max 4×). Completing all letters = maximum PM for the rest of Multiball. Prioritize Whirlpool on first shots of Multiball — higher PM dramatically amplifies Jackpots, Finding Creature (5M × PM), and Movie/Monster Madness.",
      },
      {
        x: 47,
        y: 47,
        type: "key",
        label: "SB",
        name: "Snackbar",
        body: "<strong>Random reward hub — highest priority shot early.</strong> Opens after lighting all 4 Menu Targets (first-ever closed shot = 80K; after opening = 1.1M+). Shoot 5+ times per ball for mode advances and the critical <strong>Hold Bonus X</strong> award. Hold Bonus X carries your multiplier to next ball — the best award in the game under strict settings. Also used to rescue the girl in Multiball (10M).",
      },
      {
        x: 65.4,
        y: 54.3,
        type: "key",
        label: "RR",
        name: "Right Ramp",
        body: "Secondary ramp — high-risk under open outlanes. During Multiball: <strong>Movie Madness</strong> (500K × Playfield Multiplier, +500K × PM per shot). <strong>Monster Madness</strong> (lit after completing all 4 Menu Targets during Multiball) = 4M × PM. Outside Multiball: completes toward Super Mode (12 shots) or Video Mode (8 shots). Only pursue when a specific mode is actively lit.",
      },
      {
        x: 38.7,
        y: 42.4,
        type: "safe",
        label: "CL",
        name: "Centre Lane",
        body: "Safe companion shot to Left Ramp for <strong>Double Feature combo.</strong> Left Ramp → Centre Lane = value doubles. Chain repeatedly (10-second reset timer on each Left Ramp). Can drain left on approach if ball has too much momentum — slow down before shooting.",
      },
      {
        x: 15.2,
        y: 59.4,
        type: "info",
        label: "LS",
        name: "Left Saucer",
        body: "Locks balls for Rescue Multiball; also collects K-I-S-S letters for F-I-L-M progress. Low drain risk on entry. Used during Rescue sequence to find the Creature (random: Left Saucer, Snackbar, or Right Saucer). Essential for Multiball activation.",
      },
      {
        x: 78.8,
        y: 55.2,
        type: "info",
        label: "RS",
        name: "Right Saucer",
        body: "<strong>Triggers Big Millions sequence</strong> and locks balls. First RS hit → Mega Menu (15 seconds, 5M per target hit). After Mega Menu → Playground Award (Super Jets / Unlimited Millions / Intermission Time). After Playground Award completes → Big Millions lights at RS → shoot RS → Right Ramp lit for 12 seconds (5M first shot, +5M per shot up to 50M+). Also part of Rescue Multiball lock sequence. Eject can be directed via flippers — practice the angle.",
      },
      {
        x: 47.4,
        y: 55.3,
        type: "info",
        label: "MT",
        name: "Menu Targets",
        body: "4 targets (2 left, 2 right) that open the Snackbar when all lit. One lights per jet bumper hit once opened. <strong>Priority shot #1 on every ball</strong> — getting Snackbar open early unlocks the table's best rewards.",
      },
      {
        x: 29.4,
        y: 55.3,
        type: "info",
        label: "MT",
        name: "Menu Targets",
        body: "4 targets (2 left, 2 right) that open the Snackbar when all lit. One lights per jet bumper hit once opened. <strong>Priority shot #1 on every ball</strong> — getting Snackbar open early unlocks the table's best rewards.",
      },
      {
        x: 63,
        y: 11.5,
        type: "info",
        label: "PA",
        name: "P-A-I-D Rollovers",
        body: "Top rollovers advance Bonus Multiplier (1–10×). Use flipper buttons to position the lit rollover. Completing all four = +1× multiplier. With 10× multiplier and full bonus pool, end-of-ball bonus can reach 40M+ alone. Prioritize multiplier building throughout.",
      },
      {
        x: 61.1,
        y: 28.5,
        type: "info",
        label: "JB",
        name: "Jet Bumpers",
        body: "Always active. Hit constantly for idle scoring and progress. <strong>During Multiball:</strong> scoring 20 Jet Bumper hits after a Jackpot lights the <strong>Super Jackpot (2× current Jackpot value)</strong>. While Video Mode is lit, Jet Bumper hits alternate the lit saucer between Left and Right Saucer — use to position before shooting.",
      },
      {
        x: 7,
        y: 82,
        type: "avoid",
        label: "!",
        name: "Left Outlane",
        body: "Open outlane. Centre Lane approach can drain here if angle is off — control feed speed. Repeated Left Ramp alternation with Right Ramp increases outlane vulnerability; pace shots carefully. Awards <strong>FOCUS (500K)</strong> on drain — consolation only.",
      },
      {
        x: 88,
        y: 82,
        type: "avoid",
        label: "!",
        name: "Right Outlane",
        body: "Open outlane. Overshooting Left Ramp can carry ball to Right Ramp entry and then drain right. Right Ramp is tight; missing sends ball toward right outlane. Only attempt Right Ramp with confident angle control. Awards <strong>FOCUS (500K)</strong> on drain — consolation only.",
      },
    ],
  };
