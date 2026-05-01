  /* ─── CIRQUS VOLTAIRE ──────────────────────────────────────────── */
MACHINES["cirqusvoltaire"] = {
    name: "Cirqus Voltaire",
    sub: "1997 · Williams (Bally) · Pinball FX3",
    tagline: "Complete nine performance acts and join the circus to take on the Ringmaster.",
    image: "images/cirqus-voltaire.jpg",
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
          value: "1997",
        },
        {
          label: "Designers",
          value: "John Popadiuk & Cameron Silver",
        },
        {
          label: "Programmer",
          value: "Cameron Silver",
        },
        {
          label: "Platform",
          value: "Pinball FX3",
        },
        {
          label: "Production",
          value: "2,704 units",
        },
      ],
      theme: "Immerses players in a chaotic circus environment where they must complete nine different performance acts (Marvels) to join the circus as a performer. The game features an eccentric ringmaster who must be defeated multiple times, dangerous acrobats, explosive boom balloons, and intricate multiball stacking mechanics. The circus theme combines whimsy with challenging game progression.",
      features: [
        {
          name: "Highwire Ramp (4)",
          desc: "Primary ramp; locks balls for Highwire Multiball (must hit twice after each lock: Lite/Lock targets, then ramp).",
        },
        {
          name: "Menagerie Spot Targets (1)",
          desc: "5 hits to complete Marvel; continued hits award bonus multiplier spots, extra balls, big points.",
        },
        {
          name: "Left/Right Orbits (2, 10)",
          desc: "3 hits to spell JUGGLER; then 3 more to lock balls for Juggler Multiball (3-ball mode with Jackpots).",
        },
        {
          name: "Boom Balloon Jet Bumper (11)",
          desc: "Raises via collecting V-O-L-T letters; hitting raised bumper = Boom Value (100K-400K+); 15 hits = extra ball light.",
        },
        {
          name: "W-O-W Spot Targets (8)",
          desc: "Only 1 hit needed for the very first Ringmaster summon; all subsequent summons require 3 hits. Spinners increase WOW target value per rotation. 10 hits during Neon Multiball = Extra Ball.",
        },
        {
          name: "Ringmaster (center stage)",
          desc: "Hit 5 times to raise; sink in hole for 1M+ per defeat. 1st defeat = 1M (no multiball). 2nd = 2M + Frenzie. 3rd = 3M + EB + Razz. 4th = 4M + Special (completes Marvel). 5th = Battle.",
        },
        {
          name: "Lite/Lock Spot Targets (3)",
          desc: "Hit both to light lock at Highwire Ramp; can stack locks before first Multiball activation.",
        },
        {
          name: "Inner Loops (6, 9)",
          desc: "2 hits in succession to complete S-P-I-N Marvel; quick succession required (2-second timer).",
        },
        {
          name: "Side Show Spot Targets (7)",
          desc: "5 hits to relight Bally Hoo Side Show. Rewards random awards. Also register as Ringmaster hits while he is raised; each hit during Ringmaster Special increases Jackpot by 7,110 points.",
        },
        {
          name: "N-G Spot Target (12)",
          desc: "Located above the right slingshot. Hit twice to provide 'N-G' toward spelling R-I-N-G for the Bonus Multiplier. Pair with 2 Menagerie hits ('R-I') to raise multiplier 1× (max 4×). Resets each ball.",
        },
      ],
      scoring: [
        {
          key: "Skill Shot (1st)",
          val: "200,000 points",
        },
        {
          key: "Skill Shot (subsequent)",
          val: "+200,000 points (max 1M)",
        },
        {
          key: "Menagerie target (pre-completion)",
          val: "24,110 points",
        },
        {
          key: "Menagerie target (post-completion)",
          val: "4,110 points",
        },
        {
          key: "Side Show Spot Target",
          val: "8,220 points",
        },
        {
          key: "Right Orbit (Acrobats, per hit)",
          val: "24,110 points",
        },
        {
          key: "Ringmaster defeat (1st)",
          val: "1,000,000 points",
        },
        {
          key: "Ringmaster defeat (2nd)",
          val: "2,000,000 points",
        },
        {
          key: "Ringmaster defeat (3rd)",
          val: "3,000,000 points",
        },
        {
          key: "Ringmaster defeat (4th, starts Special)",
          val: "4,000,000 points",
        },
        {
          key: "Ringmaster Battle completion bonus",
          val: "10,000,000 points",
        },
        {
          key: "Juggler Jackpot",
          val: "500,000 points",
        },
        {
          key: "Juggler Double Jackpot",
          val: "1,000,000 points",
        },
        {
          key: "Highwire Jackpot",
          val: "1,000,000 points",
        },
        {
          key: "Neon Jackpot",
          val: "1,000,000 points",
        },
        {
          key: "Video Mode win",
          val: "1,000,000 points",
        },
        {
          key: "End-of-Ball Bonus Multiplier",
          val: "Max 4X",
        },
      ],
      rules: [
        "Cannon Balls fired build End-of-Ball Bonus (20K per ball) cumulatively throughout game.",
        "Load Cannon: both outlanes have an alternating rollover (toggle with flipper buttons). Tripping the lit one awards random points + 1 cannon ball. Not available during multiball.",
        "End-of-Ball Bonus Judges score Ringmaster, Juggler, and Highwire modes (0-10 each, averaged and x50K); perfect 3-judge score = +500K bonus.",
        "Maximum 4 Extra Balls per game; Extra Balls are lit at Left Orbit. Auto-awarded at 25 Million Points, or via defeating 3rd Ringmaster, 50 Menagerie hits, 15 Boom Balloon hits, Neon Multiball 10 WOW hits, Ringmaster Battle win, or Side Show reward.",
        "Multiball stacking allows 2-3 modes to run simultaneously (Highwire + Ringmaster modes, Highwire + Strike-an-Arc, Neon + Juggler, etc.); becomes 4-ball when multiple modes active.",
        "Multiple Multiball completion triggers Voltaires Multiple Jackpots if Highwire Ramp is shot with 1 ball remaining (awards Jackpot from each active mode).",
        "Ringmaster Jackpot doubling: Score Jackpot, then immediately shoot another ball into hole = Double value.",
        "Bonus Multiplier raised by spelling R-I-N-G: Menagerie Spot Targets (1) twice for 'R-I', then N-G Spot Target (12) twice for 'N-G'. Max 4×; resets each ball.",
        "Lights can carry over in specific patterns (Marvel progression, Extra Ball lights).",
      ],
      benchmarks: [
        {
          score: "200M+",
          label: "Excellent",
        },
        {
          score: "100M+",
          label: "Good",
        },
        {
          score: "< 50M",
          label: "Below average",
        },
      ],
      resources: [
        {
          name: "IPDB Entry",
          url: "https://www.ipdb.org/machine.cgi?id=524",
          icon: "🎯",
        },
        {
          name: "Pinside Game Page",
          url: "https://pinside.com/pinball/machine/cirqus-voltaire",
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
      skillShot: "Launch ball with enough power to hit Skill Shot Spot Target (5). Awards 200K first time, +200K each subsequent (up to 1M). Risky on weak launch but relatively safe if you control power.",
      multiball: "Hit Lite/Lock targets (3) twice, then shoot Highwire Ramp (4) to lock 1 ball. Repeat to lock 3 balls = Highwire Multiball activates. Jackpot 1M (Left Orbit, Left Inner Loop, Right Orbit). After 5 Jackpots, one cycles between three locations every 6 seconds.",
      goal: "Complete all 9 Marvels to join the circus and unlock the wizard mode (3 multi-step stages plus Party Multiball finale). Under strict settings, focus on repeatable multiball stacking and reliable Marvel completion via orbital/ramp shots rather than difficult timed modes.",
      phases: [
        {
          num: "Phase 1 · Early Ball",
          title: "Skill Shot & Lock Setup",
          body: "Attempt Skill Shot Spot Target (5) for 200K; establish comfort with launch power. Hit both Lite/Lock targets (3) to light first lock. Shoot Highwire Ramp (4) to lock 1st ball; repeat Lite/Lock+Ramp to queue 2nd lock. Hit W-O-W targets (8) once to summon Ringmaster (1-hit is fast, safe). Hit Menagerie targets (1) 1-2 times to establish rhythm. Attempt Spin Marvel (2 inner loop hits in 2 seconds); if successful, earns first Marvel.",
        },
        {
          num: "Phase 2 · Mid Ball",
          title: "Multiball & Mid-Game Marvels",
          body: "Lock 3rd ball & activate Highwire Multiball. Score 5+ Jackpots during Multiball (1M-2M+ range). Finish Menagerie Marvel (5 total hits). Defeat Ringmaster 1st time for 1M + Ringmaster Frenzie lights. Hit Right Orbit 2-3 times toward 4-hit Acrobats Marvel. Hit 1-2 Balloon Rollovers toward V-O-L-T. Aim to complete 3-4 Marvels overall.",
        },
        {
          num: "Phase 3 · Late Ball / Wizard Mode Setup",
          title: "Final Marvels & Endgame",
          body: "Complete remaining Marvels: Acrobats (4 Right Orbit hits), Boom (final V-O-L-T letters), Side Show (5 Side Show target hits then Left Orbit), Juggler (spell JUGGLER with 3 Left Orbit hits, then 3 more to lock). Defeat Ringmaster 3rd time for 3M + Extra Ball + Ringmaster Razz. Defeat 4th time for 4M + Ringmaster Special = completes 'Defeat all Ringmasters' Marvel. Maximize cannon ball count via Ringmaster defeats, Boom raises, Jackpots, and Load Cannon outlane rollovers. Once all 9 Marvels complete → Wizard Mode unlocked for next ball.",
        },
      ],
      safeShots: [
        {
          name: "Menagerie Targets (1)",
          desc: "No time pressure; hit whenever available; 4K-24K per hit (pre/post-completion).",
        },
        {
          name: "Left Orbit (2)",
          desc: "Relatively safe entry; essential to many modes; feeds bumpers naturally.",
        },
        {
          name: "Lite/Lock Targets (3)",
          desc: "Spot targets; low drain risk; core to Highwire setup.",
        },
        {
          name: "Right Orbit (10)",
          desc: "Safe exit; required for Acrobats Marvel.",
        },
        {
          name: "Jet Bumpers",
          desc: "Always active; safe background scoring; build cannon ball count.",
        },
        {
          name: "Inner Loops (6, 9)",
          desc: "2-hit sequences; low angle risk; essential to Spin Marvel and cycling play.",
        },
      ],
      avoidShots: [
        {
          name: "Rapid orbital exchanges (left/right alternation)",
          desc: "Under open outlanes, momentum from fast orbit chains leads to left/right drain; pace shots carefully, take 1-2 second breaks between.",
        },
        {
          name: "Highwire Ramp rush",
          desc: "Only shoot when lock is actually lit (after Lite/Lock targets complete); shooting prematurely causes ball to drain or redirect unsafely.",
        },
        {
          name: "Ringmaster hole chasing",
          desc: "Ringmaster rises/lowers unpredictably; precise timing is required. Only pursue hole sinks when Ringmaster is clearly raised; amateur attempts lead to drain.",
        },
        {
          name: "Inner Loop combo stacking",
          desc: "Attempting Spin Marvel (2 hits in 2 seconds) AND Acrobats Marvel simultaneously on same loop = high complexity; separate these across different times.",
        },
        {
          name: "Side Show target under-preparation",
          desc: "5 target hits seem simple, but scattered positions require ramp/orbit combos. Don't assume fast completion; targets can be spread across 2-3 minutes of play.",
        },
        {
          name: "Boom Balloon timing",
          desc: "Raising the Boom requires all V-O-L-T letters collected in one sequence (or across ball). Only shoot Highwire Ramp or other major shots while collecting letters; avoid random target shooting.",
        },
      ],
      tips: [
        {
          head: "Multiball stacking payoff",
          body: "Highwire + Ringmaster Frenzie (2-ball) = 4-ball multiball. During 4-ball setup, you score both Highwire Jackpots (1M each) AND Ringmaster Frenzie Jackpots (250K each) simultaneously. A well-executed 4-ball run = 15-25M in one multiball.",
        },
        {
          head: "Ringmaster Jackpot doubling",
          body: "After scoring a Ringmaster Jackpot, immediately shoot the hole again for 2x value. In Ringmaster Razz (variable Jackpot), this is huge; a 400K jackpot becomes 800K with quick succession.",
        },
        {
          head: "Side Show reward timing",
          body: "Spot Marvel award from Side Show instantly completes whichever Marvel is lit. If you're stuck on a difficult Marvel (like Juggler's 6th orbit hit), call Side Show and grab Spot Marvel to skip it.",
        },
        {
          head: "Cannon Ball escalation",
          body: "Every event (defeat, boost, jackpot) fires a cannon. By mid-game, you've fired 20-30 cannons. Each = 20K End-of-Ball Bonus contribution. By late game, cannon ball count is 50+, contributing 1M+ to your end-of-ball bonus alone.",
        },
        {
          head: "Lite/Lock stacking (early game only)",
          body: "Before first Highwire Multiball activation, you can hit Lite/Lock targets twice, then the Highwire Ramp three separate times to queue 3 locks without relighting between them.",
        },
        {
          head: "Bonus multiplier progression",
          body: "With perfect judge scores (10/10 on Ringmaster, Juggler, Highwire) and all Cannon Balls collected, End-of-Ball Bonus Multiplier reaches max 4X relatively easily by mid-game. Protect this multiplier; losing a ball with 4X active is a 2M+ missed bonus.",
        },
        {
          head: "Video Mode (Amazing Roonie) as safety valve",
          body: "If you're uncertain about a difficult Marvel and Side Show awards Video Mode, accept it. 20-second Kangaroo dodging game = 1M guaranteed (or 120K per dodge). Less risky than Ringmaster Battle.",
        },
        {
          head: "Wizard Mode 3-stage tempo",
          body: "Join Cirqus has 3 distinct stages (Spell C-I-R-Q-U-S, Unmask Voltaire, Meet Cirqus). Each stage = 3-ball multiball with 20-second ball saver. Take your time; don't rush through stages. Final Party Multiball (4-ball) is unlimited balls, so errors aren't fatal.",
        },
      ],
      mistakes: [
        "Not locking balls early: Players shoot Highwire Ramp without setting up Lite/Lock targets first. Ramp shot with unlock lit does nothing; always complete Lite/Lock sequence before Highwire ramp.",
        "Ringmaster defeat mismanagement: Attempting 2nd/3rd/4th defeats on the same ball. If you lose a ball mid-sequence, you lose progress. Space defeats across 2-3 different balls for safety.",
        "Ignoring Menagerie Marvel: It's the easiest 5-hit completion, but players chase complex modes and leave Menagerie at 2-3 hits. Finish it early.",
        "Juggler Multiball confusion: Hit Left Orbit 3 times to spell JUGGLER, then 3 more times to lock is straightforward but some players think it's 6 consecutive hits. After first activation, must respell JUGGLER (3 hits) before locking each ball.",
        "Side Show target scatter: 5 targets sound simple but they're spread across the playfield. Players waste 2-3 minutes trying to chain them; instead, hit them incidentally during other play and let completion happen naturally.",
        "Boom Marvel neglect: Balloon Rollover collection for V-O-L-T can feel slow (4 separate rollovers). Players skip it until endgame, but it's trivial if done early.",
        "Inner Loop Spin Marvel timing: 2 hits in 2 seconds is tight. Players attempt once, fail, and give up. Try it 3-4 times per ball; eventually, the rhythm clicks.",
        "Overextending in Ringmaster Battle: Ringmaster Battle is the 5th defeat (after completing 'Defeat all Ringmasters' Marvel via 4th defeat). It requires hitting him 10+ times. If you start on a weak ball, you'll likely lose mid-battle. Only attempt when confident.",
        "Neglecting Acrobats Marvel: 4 Right Orbit hits is trivial, but players don't pursue it and leave it at 2-3 hits. Finish it quickly; once lit, the Acrobat Spins add 10K per rotation for idle scoring.",
        "Wizard Mode entry hesitation: Once all 9 Marvels are done, Join Cirqus lights automatically next ball. Some players finish Marvels late-ball and don't have time for wizard; instead, aim to complete Marvels by mid-ball to enjoy wizard mode on fresh start with full ball.",
      ],
    },
    hotspots: [
      {
        x: 29.5,
        y: 41.5,
        type: "key",
        label: "HW",
        name: "Highwire Ramp",
        body: "<strong>Lock shot for Highwire Multiball.</strong> Only shoot after completing both Lite/Lock targets — shooting unlit does nothing useful. Lock 3 balls here to start Highwire Multiball (Jackpot 1M per orbit/loop shot). Can stack with Ringmaster Frenzy for 4-ball multiball worth 15–25M.",
      },
      {
        x: 61.3,
        y: 34.5,
        type: "key",
        label: "RM",
        name: "Ringmaster",
        body: "<strong>Hit 5 times to raise, then sink ball in hole to defeat.</strong> Sequence across 5 defeats: 1st = 1M (no multiball), 2nd = 2M + Frenzie, 3rd = 3M + Extra Ball + Razz, 4th = 4M + Special (completes Marvel), 5th = Battle (10M completion + 1M/hit). After sinking a Jackpot, immediately shoot hole again for double value. Only 1 WOW hit needed to summon the first time; all subsequent summons require 3 WOW hits.",
      },
      {
        x: 16,
        y: 35,
        type: "safe",
        label: "LO",
        name: "Left Orbit",
        body: "Relatively safe entry. Essential for Juggler Marvel (spell J-U-G-G-L-E-R with 3 orbit hits) and Acrobats Marvel (4 Right Orbit hits). Feeds jet bumpers naturally. Use as filler between Highwire setups.",
      },
      {
        x: 82.4,
        y: 36.2,
        type: "safe",
        label: "RO",
        name: "Right Orbit",
        body: "Safe exit side. Required for <strong>Acrobats Marvel</strong> (4 hits). Part of Juggler multiball orbit sequence. Low drain risk at controlled speed — pace shots, don't chain rapidly back-to-back.",
      },
      {
        x: 39.8,
        y: 46.8,
        type: "info",
        label: "LL",
        name: "Lite/Lock Targets",
        body: "Hit both spot targets to light the lock at Highwire Ramp. Must complete before each Highwire lock shot. Pre-Multiball trick: can hit Lite/Lock twice then shoot ramp 3 times to queue all 3 locks without relighting between them.",
      },
      {
        x: 27.1,
        y: 50.1,
        type: "info",
        label: "LL",
        name: "Lite/Lock Targets",
        body: "Hit both spot targets to light the lock at Highwire Ramp. Must complete before each Highwire lock shot. Pre-Multiball trick: can hit Lite/Lock twice then shoot ramp 3 times to queue all 3 locks without relighting between them.",
      },
      {
        x: 64.6,
        y: 22,
        type: "info",
        label: "WW",
        name: "W-O-W Spot Targets",
        body: "<strong>Only 1 hit needed to summon the Ringmaster the very first time.</strong> All subsequent summons require 3 WOW hits. Spinners in Left Orbit and Right Inner Loop increase the WOW target score per rotation. At 10 WOW hits during Neon Multiball → Extra Ball. Hit once early to summon Ringmaster for the first time; thereafter build to 3 hits before each re-summon.",
      },
      {
        x: 13.9,
        y: 53.8,
        type: "info",
        label: "MG",
        name: "Menagerie Targets (1)",
        body: "5 hits to complete the Menagerie Marvel — <strong>easiest Marvel on the table.</strong> No time pressure; complete early and consistently. Also provides <strong>'R' and 'I'</strong> toward spelling R-I-N-G for the Bonus Multiplier (pair with 2 N-G Target hits to raise multiplier). Post-completion hits continue rewarding: +10 = Spot Marvel at Highwire Ramp, +35 = Extra Ball, then further Spot Marvels and Big Points (500K). Don't neglect it chasing complex modes.",
      },
      {
        x: 63.8,
        y: 60.2,
        type: "info",
        label: "BB",
        name: "Boom Balloon Bumper",
        body: "Raises after collecting all V-O-L-T letters. Hitting the raised bumper = Boom Value (100K–400K+). 15 hits on raised bumper lights Extra Ball. Collect letters incidentally; don't rush the sequence.",
      },
      {
        x: 47,
        y: 29.2,
        type: "info",
        label: "IL",
        name: "Inner Loops",
        body: "Two inner loops requiring 2 hits in 2 seconds to complete the <strong>Spin Marvel</strong>. Timing is tight — attempt 3–4 times per ball until the rhythm clicks. Also used in Juggler Multiball ball-lock sequence. Low drain risk at proper angle.",
      },
      {
        x: 74.9,
        y: 34.4,
        type: "info",
        label: "IL",
        name: "Inner Loops",
        body: "Two inner loops requiring 2 hits in 2 seconds to complete the <strong>Spin Marvel</strong>. Timing is tight — attempt 3–4 times per ball until the rhythm clicks. Also used in Juggler Multiball ball-lock sequence. Low drain risk at proper angle.",
      },
      {
        x: 43.8,
        y: 36.9,
        type: "info",
        label: "SS",
        name: "Side Show Spot Targets (7)",
        body: "5 hits relight the Bally Hoo Side Show (lit at game start). Side Show = shoot Left Orbit when lit for random reward: Lock lit, Spot Marvel (instant Marvel skip), Big Points (250K/500K), Cannon Ball Run, Neon Multiball, Hat-Trick, Popcorn Mania, Amazing Roonie video mode. <strong>During Ringmaster Special:</strong> each hit registers on Ringmaster AND increases Jackpot by 7,110 points. Hit these to simultaneously raise the Ringmaster and inflate the jackpot before sinking.",
      },
      {
        x: 70.5,
        y: 70.2,
        type: "info",
        label: "NG",
        name: "N-G Spot Target (12)",
        body: "Located above the right slingshot. Provides <strong>'N' and 'G'</strong> toward spelling R-I-N-G for the Bonus Multiplier. Pair with 2 Menagerie Spot Target hits (which give 'R-I') to complete RING and raise the multiplier by 1×. Max multiplier is 4×; resets each ball. Low drain risk — take these hits opportunistically.",
      },
      {
        x: 7,
        y: 82,
        type: "avoid",
        label: "!",
        name: "Left Outlane",
        body: "Open outlane under strict settings. Fast orbit chains (left/right alternation) build dangerous momentum. Pace shots with 1–2 second gaps. Left orbit is safe on its own; the danger is rapid chaining. <strong>Load Cannon</strong> rollover may be lit here — tripping it awards random points + 1 cannon ball (flipper button toggles which outlane is lit).",
      },
      {
        x: 88,
        y: 82,
        type: "avoid",
        label: "!",
        name: "Right Outlane",
        body: "Open outlane. Right orbit exits are usually safe but jet bumper action near the right side can deflect toward here. Stay alert after right-side bumper activity. <strong>Load Cannon</strong> rollover may be lit here — tripping it awards random points + 1 cannon ball (flipper button toggles which outlane is lit). Not available during multiball.",
      },
    ],
  };
