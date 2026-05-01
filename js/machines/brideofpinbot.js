  /* ─── BRIDE OF PINBOT ──────────────────────────────────────────── */
MACHINES["brideofpinbot"] = {
    name: "Bride of Pinbot",
    sub: "1991 · Williams Electronics · System 11",
    tagline: "Build multiplier, chain loop combos, and transform the Bride through three phases.",
    image: "images/bride-of-pinbot.jpg",
    difficulty: "Medium",
    diffClass: "diff-medium",
    era: "SS",
    info: {
      stats: [
        {
          label: "Manufacturer",
          value: "Williams Electronics",
        },
        {
          label: "Year",
          value: "1991",
        },
        {
          label: "Designer",
          value: "Python Anghelo, John Trudeau",
        },
        {
          label: "Programmer",
          value: "Brian Eddy",
        },
        {
          label: "Platform",
          value: "System 11",
        },
        {
          label: "Production",
          value: "8,100 units",
        },
      ],
      theme: "Help the robot Bride of Pinbot transform from a machine into a human through three phases of metamorphosis. Navigate through mechanical circuits, unlock optics, and trigger a passionate 2-ball multiball where you guide the Bride to true humanity. Along the way, rack up loop combos, hit ramps for climbing jackpots, and spin the Big Wheel for massive random rewards.",
      features: [
        {
          name: "Shuttle Ramp (3)",
          desc: "Diverts ball to Pinbot Playfield (11) when lit, or Bride's Face (10) when unlit. Core of Metamorphosis progression.",
        },
        {
          name: "Left Loop (4)",
          desc: "Value ramps from 25K to 500K (8-second timer). At max, lights Extra Ball. Loop combos accumulate for massive multipliers.",
        },
        {
          name: "Heart Ramp (5)",
          desc: "Value ramps 100K → 500K → 1M (7-second timer). Can be lit for 1B shot (Big Wheel reward).",
        },
        {
          name: "Right Loop (7)",
          desc: "Value ramps 25K to 500K (8-second timer). At max, lights Jackpot at Left Lane for 17 seconds.",
        },
        {
          name: "Reverse Right Loop (9)",
          desc: "Travels the right side of the playfield in reverse and advances the Bonus Multiplier. Feeds ball to the left flipper.",
        },
        {
          name: "Left Lane (2)",
          desc: "Spins Small Wheel when Jackpot not lit. Collects Jackpot (1M–8M) when lit. During Multiball: scores Power Charge (100K→1M, +100K per shot — NOT doubled).",
        },
        {
          name: "Bride's Face (10)",
          desc: "Target for Phase 1/2/3 of Metamorphosis. Hit when Shuttle unlit to advance.",
        },
        {
          name: "Pinbot Playfield (11)",
          desc: "Mini-table hit by Shuttle Ramp (when lit). Advances Pinbot Value: 100K, 200K, 300K (repeats); 7th hit = 600K + Extra Ball.",
        },
        {
          name: "Phase 3 Multiball (2-Ball)",
          desc: "All scoring doubled (except Power Charge and Jackpot). Shoot Bride's Face twice to complete Metamorphosis (250K + 750K locks). Repeat to spin Big Wheel.",
        },
      ],
      scoring: [
        {
          key: "Skill Shot (maximum)",
          val: "200,000",
        },
        {
          key: "Jet Bumper hit",
          val: "10,000",
        },
        {
          key: "Jet Bumper: 100 hits",
          val: "500,000 bonus",
        },
        {
          key: "Pinbot Playfield (1st–6th)",
          val: "100K–300K",
        },
        {
          key: "Pinbot Playfield (7th = Extra Ball)",
          val: "600,000",
        },
        {
          key: "Left Loop (max)",
          val: "500,000",
        },
        {
          key: "Right Loop (max)",
          val: "500,000",
        },
        {
          key: "Heart Ramp (max)",
          val: "1,000,000",
        },
        {
          key: "Heart Ramp (Big Wheel)",
          val: "1,000,000,000",
        },
        {
          key: "10 Loop Combo (Backdoor Billion)",
          val: "1,000,000,000",
        },
        {
          key: "Jackpot (min.–max.)",
          val: "1,000,000–8,000,000",
        },
      ],
      rules: [
        "Skill Shot multiplier increases by 1× each time the ball re-enters the plunger — no hard cap (can reach 17×+ for multi-million skill shots).",
        "Bonus Multiplier caps at 255× via Left Multiplier (1), Right Multiplier (8) Spot Targets, and the Reverse Right Loop (9).",
        "Loop values are timer-based (7–8 seconds); fail to shoot again before timer = value reverts.",
        "The Spinner (6) and every loop shot (Left Loop, Right Loop, Heart Ramp) each add 10K to the Jackpot value.",
        "Reverse Right Loop (9) advances the Bonus Multiplier level when completed — an overlooked multiplier path.",
        "No Kickback mechanic; outlanes are open drains without saves.",
        "Extra Ball lights at Left Outlane via Pinbot (7th hit), Left Loop (500K), Small Wheel, or Big Wheel.",
      ],
      benchmarks: [
        {
          score: "1B+",
          label: "Excellent",
        },
        {
          score: "300M–1B",
          label: "Good",
        },
        {
          score: "< 100M",
          label: "Below average",
        },
      ],
      resources: [
        {
          name: "IPDB Entry",
          url: "https://www.ipdb.org/machine.cgi?id=345",
          icon: "🎯",
        },
        {
          name: "Pinside Game Page",
          url: "https://pinside.com/pinball/machine/bride-of-pinbot",
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
      skillShot: "Manually launch with controlled power to land in the second-to-last lane (200K base). The Skill Shot multiplier increases by 1× every time the ball re-enters the plunger — no hard cap. Experienced players can reach 17×+ for multi-million skill shots.",
      multiball: "After Phase 2, 2-ball Multiball activates automatically. All scoring is doubled. Shoot Bride's Face twice with both balls to complete Metamorphosis and lock balls. Repeat Face shots to spin Big Wheel for random rewards.",
      goal: "Build bonus multiplier to 100×+ via Multiplier Spot Targets, then chain loop combos (Left Loop, Right Loop, Heart Ramp) in rapid succession to accumulate 1–2M per combo cycle. Simultaneously advance the Bride Metamorphosis through three phases by hitting Bride's Face strategically. Unlock the 2-ball Phase 3 multiball, and shoot Bride's Face twice to trigger the Big Wheel. The endgame is 10-loop combos (1B Backdoor) or 1B Heart Ramp shots.",
      phases: [
        {
          num: "Phase 1 · Early Ball",
          title: "Build Multiplier & Start Metamorphosis",
          body: "Skill Shot: Launch with controlled power to hit the second-to-last lane (200K base). Immediately start hitting Left and Right Multiplier Spot Targets alternately. Chain flashing targets for 10K each. Shoot Shuttle Ramp (lit at start) to hit Pinbot Playfield (advances Pinbot Value to 100K). Once ready, shoot Shuttle Ramp once, then shoot Bride's Face (unlit) to lock ball, activate Vocal Circuits (250K × multiplier), and complete Phase 1. Goals: Multiplier 5×–10×, Phase 1 complete, Skill Shot multiplier at 2×–3×.",
        },
        {
          num: "Phase 2 · Mid Ball",
          title: "Eye Sockets & Phase Progression",
          body: "After Phase 1, Shuttle relights. Shoot it once (Pinbot Playfield). Then shoot Bride's Face twice (unlit) to progress through eye sockets: 1st = 250K, 2nd = 500K (Optics activated). Phase 2 complete. Continue Multiplier building toward 20×–30×. Spin the Spinner (6) a few times to raise Jackpot minimum. Goals: Phase 2 complete, Multiplier 15×–30×, Spinner spun 5+, Multiball about to begin.",
        },
        {
          num: "Phase 3 · Late Game/Multiball",
          title: "Doubled Scoring & Loop Combos",
          body: "Phase 3 Multiball begins with 2 balls. All scoring is doubled (Jackpot and Power Charge excepted). Shoot Bride's Face twice to complete Metamorphosis: 1st ball = Human Influx (250K × 2 = 500K, locks ball), 2nd ball = Metamorphosis complete (750K × 2 = 1.5M, both balls released). Repeat Face shots to spin Big Wheel for random rewards (up to 1B Heart Ramp). Power Charge: Left Lane (2) scores a Power Charge starting at 100K, increasing 100K per shot to a max of 1M — note this is NOT doubled and resets each multiball; skip it unless you want easy filler. With multiplier 30×+ and doubled scoring, chains of loops are worth massive points: Left Loop (500K × 2 × 30 = 30M per loop), Heart Ramp (1M × 2 × 30 = 60M). 10-loop combo = 2B (!!!). Jackpot: Once Right Loop maxes, Left Lane collects 1M–8M Jackpot (10–20M+ with multiplier). Continue until draining.",
        },
      ],
      safeShots: [
        {
          name: "Left Loop (4)",
          desc: "Forgiving angle; looping success rate ~70%. Safe entry point for combo chains.",
        },
        {
          name: "Spinner (6)",
          desc: "Always available at Right Loop entrance. Spins add 10K to Jackpot. Low skill ceiling, always safe. Use for filler.",
        },
        {
          name: "Right Loop (7)",
          desc: "Similar angle to Left Loop; safe once learned. Part of combo rotation.",
        },
        {
          name: "Jet Bumpers",
          desc: "Passive bumpers; automatic if ball rolls into them. Safe multiplier building via nearby Multiplier Spot Targets.",
        },
        {
          name: "Bride's Face (10)",
          desc: "Direct target when unlit; auto-captures. Safe feeding during Metamorphosis phases.",
        },
      ],
      avoidShots: [
        {
          name: "Heart Ramp without multiplier",
          desc: "Heart Ramp is tight and requires precision. Avoid shooting it alone; always shoot as part of loop combo.",
        },
        {
          name: "Right Outlane (no save)",
          desc: "In strict settings (no outlane rubbers), any ball draining right is gone. Avoid aggressive right flipper play.",
        },
        {
          name: "Left Outlane (open)",
          desc: "Same danger; open left outlane. Keep ball in mid-field via loops. Avoid lane-switching unless confident.",
        },
        {
          name: "Jackpot lane (without setup)",
          desc: "Shooting Left Lane (2) before Right Loop reaches 500K = Small Wheel spin (low reward). Wait until Right Loop maxed.",
        },
      ],
      tips: [
        {
          head: "Loop combo chains",
          body: "Practice Left Loop → Right Loop → Heart Ramp → Left Loop rhythm. Each loop is 8 seconds; chains are learnable.",
        },
        {
          head: "Multiplier stacking",
          body: "With 100× multiplier and 2× Phase 3 doubling, a 4-loop combo = 500K × 2 × 100 = 100M. Multiplier is your best friend.",
        },
        {
          head: "Jackpot pumping",
          body: "Every Spinner rotation AND every loop shot (Left Loop, Right Loop, Heart Ramp) adds +10K to the Jackpot. Chaining loops before collecting also inflates the payout — each 10-loop chain adds 100K+ to Jackpot value.",
        },
        {
          head: "Face feeding trick",
          body: "During Phase 3 multiball, alternate between loop combos and Face shots. Loops pump up scoring; Faces spin Big Wheel.",
        },
        {
          head: "Big Wheel 1B strategy",
          body: "If you get a 1B Heart Ramp award from Big Wheel, immediately shoot within 12-second window. With 100× multiplier, you're looking at 2B on one shot.",
        },
      ],
      mistakes: [
        "Shooting Heart Ramp out of combo: Heart Ramp is 1M or 1B, but only safe as 3rd leg of combo. Shooting standalone often drains.",
        "Ignoring multiplier early: Many jump straight to loops without multiplier. Spend first 20 seconds building 10×+; it applies forever.",
        "Losing track of Shuttle Ramp state: After Phase 1, Shuttle relights. Forgetting whether it's lit or unlit causes accidental progression.",
        "Premature Phase 3 entry: Entering Phase 3 with Multiplier at 5× is wasteful. Stall Phase 2 until Multiplier is 20×+.",
        "Draining during loop combos: Greedy players push 8–10 loops and drain via left outlane. Stop at 4–6 if heading left.",
        "Forgetting Face shots during Multiball: Some fixate on loops and forget Face shots. Alternate Face and Loops to balance.",
        "Wasting Small Wheel spins: Before Jackpot is lit, Left Lane spins Small Wheel. Use Left Lane to collect Jackpot, not for padding.",
      ],
    },
    hotspots: [
      {
        x: 37.6,
        y: 48.4,
        type: "key",
        label: "LL",
        name: "Left Loop",
        body: "<strong>Primary combo entry.</strong> Value ramps 25K→500K on an 8-second timer. At max (500K), lights Extra Ball at left outlane. Core of loop combo chains — Left Loop → Heart Ramp → Right Loop. Forgiving angle; ~70% success rate for most players.",
      },
      {
        x: 69.3,
        y: 56.3,
        type: "key",
        label: "RL",
        name: "Right Loop",
        body: "Mirror of Left Loop — value ramps 25K→500K (8-second timer). At max, lights <strong>Jackpot at Left Lane</strong>. Part of the combo rotation. Equal difficulty to Left Loop. Use to alternate with Left Loop for sustained combo chains.",
      },
      {
        x: 47.6,
        y: 50.1,
        type: "key",
        label: "HR",
        name: "Heart Ramp",
        body: "<strong>Highest single-shot value: 100K→500K→1M.</strong> Tight and precision-dependent — only shoot as the 3rd leg of a combo (Left Loop → Right Loop → Heart Ramp). Big Wheel can award a 1B Heart Ramp shot; with 100× multiplier and Phase 3 doubling = 2B on one shot.",
      },
      {
        x: 25.7,
        y: 57.6,
        type: "key",
        label: "SR",
        name: "Shuttle Ramp",
        body: "Diverts to <strong>Pinbot Playfield</strong> (when lit) or <strong>Bride's Face</strong> (when unlit). Core of Metamorphosis progression. After Phase 1, Shuttle relights. Track lit/unlit state carefully — accidental unlit shots advance Metamorphosis prematurely.",
      },
      {
        x: 43,
        y: 17.4,
        type: "key",
        label: "BF",
        name: "Bride's Face",
        body: "<strong>Metamorphosis target.</strong> Phase 1: 1 unlit hit (Vocal Circuits, 250K × mult). Phase 2: 2 unlit hits (Eye Sockets, 250K + 500K). Phase 3 Multiball: 2 hits = Metamorphosis complete, spins Big Wheel. Only shoot when ready to advance phase — timing is critical.",
      },
      {
        x: 46.4,
        y: 75.1,
        type: "info",
        label: "BW",
        name: "Big Wheel",
        body: "Awarded via Bride's Face hits during Phase 3 Multiball. Spins for random reward: 1M, 5M, 10M, 50M, Special (Extra Ball), or 1B Heart Ramp (12-second window). With 100× multiplier and 2× Phase 3 doubling = 2B on a single Heart Ramp shot. The table's highest ceiling.",
      },
      {
        x: 21.4,
        y: 72.7,
        type: "info",
        label: "LM",
        name: "Left Multiplier Spot Target",
        body: "Hit when flashing to advance bonus multiplier. Caps at 255× combined with Right Multiplier. Priority: build to 10× within first 20 seconds of each ball before chasing combos. Multiplier applies forever — it's your most important resource.",
      },
      {
        x: 72.4,
        y: 74.2,
        type: "info",
        label: "RM",
        name: "Right Multiplier Spot Target",
        body: "Mirror of Left Multiplier. Alternate Left → Right to chain multiplier advances rapidly. With 100× multiplier and Phase 3 doubling, a 4-loop combo = 100M+. Don't skip multiplier building for early loop attempts.",
      },
      {
        x: 73,
        y: 63.5,
        type: "info",
        label: "RR",
        name: "Reverse Right Loop (9)",
        body: "<strong>Advances Bonus Multiplier</strong> when completed — often overlooked but free multiplier progress. The ball travels right-side in reverse and feeds to the left flipper. Not part of the loop combo chain (no combo credit) but a passive multiplier builder if the ball naturally routes here.",
      },
      {
        x: 10.8,
        y: 48,
        type: "key",
        label: "LN",
        name: "Left Lane (2)",
        body: "Three roles: (1) <strong>Small Wheel</strong> — spins for 25K/50K/100K, Jackpot lit, Lite Extra Ball, or Extra Ball when Jackpot not lit. (2) <strong>Jackpot</strong> — collects 1M–8M when lit after Right Loop maxes (17-second window). With 100× multiplier = 100M–800M+. (3) <strong>Power Charge</strong> during Multiball — scores 100K → 200K → … → 1M per shot (not doubled, resets each multiball). Avoid Power Charge unless looping is risky; Jackpot collection is the priority.",
      },
      {
        x: 62.4,
        y: 48.3,
        type: "info",
        label: "SP",
        name: "Spinner (6)",
        body: "Every spin adds <strong>+10K to the Jackpot value</strong>. Located at the Right Loop entrance; the ball naturally passes through it on Right Loop shots. Chain Right Loop shots to simultaneously build loop value AND Jackpot. All loop shots (Left Loop, Right Loop, Heart Ramp) also add +10K to Jackpot — funneling loops before collecting inflates payouts significantly.",
      },
      {
        x: 7,
        y: 82,
        type: "avoid",
        label: "!",
        name: "Left Outlane",
        body: "Open outlane — no save in strict settings. Greedy loop chains (8–10 loops) risk draining left at the end. Stop at 4–6 loops if ball is heading left. Left Loop exit angle can feed here if shot power is inconsistent.",
      },
      {
        x: 88,
        y: 82,
        type: "avoid",
        label: "!",
        name: "Right Outlane",
        body: "Open outlane. Right Loop exits toward right inlane but outlane drain is possible on missed shots. Keep Phase 3 multiball alive by avoiding aggressive right-side play when down to single ball.",
      },
    ],
  };
