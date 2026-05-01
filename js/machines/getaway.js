  /* ─── THE GETAWAY: HIGH SPEED II ──────────────────────────────────────────── */
MACHINES["getaway"] = {
    name: "The Getaway: High Speed II",
    sub: "1992 · Williams · Standard",
    tagline: "Police-chase street racing · Shift through 5 Gears to reach Redline Mania",
    image: "images/getaway-playfield.jpg",
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
          value: "1992",
        },
        {
          label: "Designer",
          value: "Steve Ritchie",
        },
        {
          label: "Programmer",
          value: "Bill Pfutzenreuter",
        },
        {
          label: "Production",
          value: "~14,000 units",
        },
        {
          label: "Platform",
          value: "WPC (DMD)",
        },
      ],
      theme: "A high-speed police-chase sequel to the 1986 High Speed. You're the driver of a getaway car, shifting through 5 gears via the physical gear-shifter on the cabinet. Complete Stoplight colors (Green → Yellow → Red) to lock balls for Multiball, then collect Jackpots and Super Jackpots at the Back Ramp. Reach 5th Gear to light Redline Mania — the wizard mode.",
      features: [
        {
          name: "Supercharger Ramp",
          desc: "Triangular ball-accelerator loop mounted above the Jet Bumpers. When lit, the ball loops through the magnetic Supercharger multiple times. Awards Supercharger Boost (3M–10M, increasing). During Multiball, 10 loops = Jackpot lit. During Supercharger Mode (4th Gear award), all shots score 5M and each Supercharger hit scores 5M, 10M, 15M, 20M, 25M.",
        },
        {
          name: "Gear Shifter (Plunger)",
          desc: "Physical up/down gear shifter replaces the spring plunger. Also serves as the ball launcher (auto-plunge). <strong>After completing each gear's RPM requirement, you must shift the gear</strong> to advance to the next gear and collect the Gear Award. Shifting also increases Bonus Multiplier by 2× (max 8×) and relights Burn Rubber at the Tunnel.",
        },
        {
          name: "5 Gears &amp; RPM Shots",
          desc: "Advance RPMs by hitting Left Orbit, Right Orbit, or Speed Millions (Side Loop). 1st Gear = 1 RPM shot, 2nd = 2, 3rd = 3, 4th = 4, 5th = 5. When the tachometer reaches the redline, shift to collect the Gear Award and move on.",
        },
        {
          name: "3 Stoplight Banks (Green/Yellow/Red)",
          desc: "Three banks of targets (left of bumpers, two along the Side Loop entrance), each with Green, Yellow, Red targets. Light all 3 of one color → Lock is lit at Left Orbit / Side Loop (via Back Ramp). Green first, then Yellow, then Red. Completing all 3 colors + locking 3 balls = Multiball.",
        },
        {
          name: "Tunnel Saucer",
          desc: "The Swiss-army-knife shot. Awards Burn Rubber (random award when lit), Video Mode (when lit from 3rd Gear), Extra Ball (when lit), Helicopter Bonus (during Multiball after Jackpot). Counts toward Tunnel Shots total — 8 Tunnel Shots lights Special on outlanes.",
        },
        {
          name: "Left &amp; Right Orbits",
          desc: "Primary RPM advancement shots. Going through either inlane lights Freeway on the opposite orbit. Freeway values build from 1M→2M→3M→4M→5M+Extra Ball per ball. When '2× RPM' is lit (each new gear), the Right Orbit via the Left Inlane awards 2 RPMs.",
        },
        {
          name: "Side Loop (Left Loop)",
          desc: "Upper-right flipper shot that loops around to the same flipper. Awards Speed Millions (1M, 2M, 3M... resets on timeout). Each Speed Millions also counts as 1 RPM shot. Loop Champion tracks highest consecutive loops.",
        },
        {
          name: "Back Ramp &amp; Hideout",
          desc: "Drops down when Lock or Jackpot is lit. A firm Left Orbit or Side Loop shot carries through to the Back Ramp and into the Hideout (ball lock housing). Jackpot is always 25M. Super Jackpots start at 50M (or 100M during Redline Mania) and increase by 25M each collection.",
        },
      ],
      scoring: [
        {
          key: "Gear Awards",
          val: "1st: 3M · 2nd: Hold Bonus · 3rd: Light Video Mode · 4th: Supercharger Mode · 5th: Light Redline Mania",
        },
        {
          key: "Supercharger Boost",
          val: "3M → 5M → 7M → 9M → 11M → 13M... (progressive)",
        },
        {
          key: "Supercharger Mode (4th Gear)",
          val: "All flashing shots 5M. Supercharger: 5M, 10M, 15M, 20M, 25M. Lasts 25 seconds.",
        },
        {
          key: "Jackpot (Multiball)",
          val: "25M (always). Requires 10 Supercharger loops to light, then hit Back Ramp.",
        },
        {
          key: "Super Jackpot",
          val: "50M first (20 loops to light). +25M each subsequent. Requires 2+ balls in play.",
        },
        {
          key: "Redline Mania Super Jackpot",
          val: "Starts at 100M (no loop requirement for Jackpot). +25M each subsequent.",
        },
        {
          key: "Helicopter Bonus",
          val: "5M+ (grows via Jet Bumpers and 1-2-3 completions). Awarded at Tunnel after Jackpot/Super Jackpot during Multiball.",
        },
        {
          key: "Freeway (max per ball)",
          val: "1M → 2M → 3M → 4M → 5M + lights Extra Ball",
        },
        {
          key: "Speed Millions (Side Loop)",
          val: "1M, 2M, 3M... (resets on timeout). Also counts as RPM.",
        },
        {
          key: "Video Mode (5th Gear speed)",
          val: "~26–27M (steer between VW Bugs on the DMD)",
        },
      ],
      rules: [
        "<strong>Shift gears!</strong> After filling the RPM tachometer for each gear, you MUST physically shift the gear shifter (either direction) to collect the Gear Award and advance. Forgetting to shift means no progress.",
        "<strong>Gear Awards matter.</strong> 1st Gear = 3M. 2nd = Hold Bonus. 3rd = Lights Video Mode at Tunnel. 4th = Supercharger Mode (timed 25s frenzy). 5th = Lights Redline Mania.",
        "<strong>Shifting increases Bonus Multiplier</strong> by 2× each time (max 8×). Combined with 'Hold Bonus' from 2nd Gear, this makes bonus a significant part of scoring.",
        "<strong>Stoplight progression:</strong> Green → Yellow → Red. Each completed color lights a Lock at the Left Orbit / Side Loop (→ Back Ramp). Lock 3 balls → Multiball. First Multiball: Tunnel or Supercharger shots spot unlit Stoplights.",
        "<strong>Kickback relighting:</strong> Complete 1-2-3 targets (banks above each outlane) to relight the left outlane Kickback. Redline Mania also relights Kickback.",
        "<strong>Redline Mania (5th Gear wizard mode):</strong> Awards 10M, lights Extra Ball, relights Kickback, sets Freeway to 5M, lights Jackpot immediately (no loops needed), starts Multiball with Super Jackpot at 100M. The ultimate goal.",
      ],
      benchmarks: [
        {
          score: "500M+",
          label: "Exceptional — multiple Redline Manias with Super Jackpots",
        },
        {
          score: "200M+",
          label: "Excellent — Redline Mania reached + Super Jackpot collected",
        },
        {
          score: "50M–100M",
          label: "Good — Multiball achieved with Jackpot, some Gears cleared",
        },
        {
          score: "< 25M",
          label: "Below average — Stoplights or Gears not completed",
        },
      ],
      resources: [
        {
          name: "IPDB Entry",
          url: "https://www.ipdb.org/machine.cgi?id=1009",
          icon: "🎯",
        },
        {
          name: "Pinside Game Page",
          url: "https://pinside.com/pinball/machine/getaway-high-speed-ii",
          icon: "🕹️",
        },
        {
          name: "Zen Studios Guide",
          url: "https://zensite.wpenginepowered.com/wp-content/uploads/2024/01/WP-Getaway-Pinball-Guide-by-ShoryukenToTheChin.pdf",
          icon: "📖",
        },
      ],
    },
    strategy: {
      skillShot: "The auto-plunger launches the ball around the Left Loop toward the upper-right flipper. On a well-set-up machine the ball completes the loop and arrives at the upper flipper — from there you can immediately shoot Speed Millions (Side Loop) or let it fall to the lower right flipper for a controlled start. There is no traditional skill shot — focus on a clean catch.",
      multiball: "<strong>Stoplight Multiball (3-ball):</strong> Complete Green targets across all 3 banks → Lock lit at Left Orbit / Side Loop (→ Back Ramp). Repeat for Yellow, then Red. Lock 3 balls in the Hideout → Multiball begins. <strong>During Multiball:</strong> Shoot the Supercharger Ramp — each shot completes 10 loops. After 10 loops, the Jackpot (25M) is lit at the Back Ramp (via Left Orbit / Side Loop). After collecting the Jackpot, 20 more Supercharger loops light the Super Jackpot (50M, then 75M, 100M...). You need 2+ balls in play to collect the Super Jackpot. After each Jackpot or Super Jackpot, the Tunnel awards the Helicopter Bonus (5M+). <strong>Getaway Time:</strong> If you lose balls before collecting the Jackpot, you get 20 seconds of single-ball Getaway Time to still light and collect it.",
      goal: "Shift through all 5 Gears to reach Redline Mania (the wizard mode). Along the way, collect Stoplight Multiballs for Jackpots. Redline Mania gives you a Multiball where the Jackpot is pre-lit (no loops needed) and the Super Jackpot starts at 100M — the single biggest scoring opportunity in the game.",
      phases: [
        {
          num: "Phase 1 · Early Ball",
          title: "Gears 1–2 + Stoplights + Kickback Safety",
          body: "Start by shooting the Right Orbit repeatedly — it's the safest RPM shot and also builds Freeway values. 1st Gear needs only 1 RPM shot, 2nd needs 2. <strong>Shift the gear shifter after each gear completes</strong> to collect the award (1st = 3M, 2nd = Hold Bonus) and relight Burn Rubber. Hit 1-2-3 targets on either side to relight the Kickback early. Collect Burn Rubber at the Tunnel whenever it's lit — you might get Spot Gear, Lite Locks, or Bonus Held.",
        },
        {
          num: "Phase 2 · Mid Game",
          title: "Gears 3–4 + Video Mode + Supercharger Mode",
          body: "3rd Gear (3 RPM shots) awards Video Mode — collect it at the Tunnel, then shift to 5th Gear in the Video Mode mini-game for ~27M. 4th Gear (4 RPM shots) triggers Supercharger Mode automatically: 25 seconds where all flashing shots score 5M and the Supercharger scores 5M/10M/15M/20M/25M. Strategy: trap on right flipper → Supercharger Ramp → catch on left → pass to right → repeat. Meanwhile, complete Stoplight colors whenever possible to stock up Locks for Multiball.",
        },
        {
          num: "Phase 3 · Redline Mania",
          title: "5th Gear → Redline Mania (Wizard Mode)",
          body: "5th Gear requires 5 RPM shots. Once complete, <strong>shift the gear shifter</strong> — Redline Mania lights on the Supercharger Ramp entrance. <strong>Before shooting the Supercharger to start Redline Mania:</strong> try to light the Extra Ball via Freeway first (reach 5M Freeway value), because Redline Mania also lights an Extra Ball and you can't light Freeway EB afterward. When ready, shoot the Supercharger Ramp to activate Redline Mania. You get: 10M, Extra Ball lit, Kickback relit, Freeway at 5M, all targets worth 500K, Jackpot pre-lit (no Supercharger loops needed), and a 3-ball Multiball with the Super Jackpot starting at 100M. Immediately collect the 25M Jackpot at the Back Ramp (Left Orbit / Side Loop), then hammer the Supercharger to light the 100M Super Jackpot. After Redline Mania ends, Gears reset — start the whole climb again.",
        },
      ],
      safeShots: [
        {
          name: "Right Orbit (RPM + Freeway)",
          desc: "Safest repeatable shot. Awards RPM, Freeway value, and is easy to repeat from both flippers. Use this as your bread-and-butter RPM shot.",
        },
        {
          name: "Supercharger Ramp",
          desc: "Primary left-side shot from right flipper. Awards Boost value (3M–13M+), feeds to Left Inlane for safe ball return. During Multiball it's the Jackpot-lighting mechanism. Even when not lit for Boost, awards Speed Bonus (speed × 1K).",
        },
        {
          name: "Tunnel Saucer",
          desc: "Awards Burn Rubber (random award), Extra Ball, Video Mode, or Helicopter Bonus. Ball is held briefly then kicked to upper-right flipper. Safe harbor shot that also accumulates toward Special.",
        },
      ],
      avoidShots: [
        {
          name: "Side Loop (Speed Millions) — unless well-practiced",
          desc: "Very narrow sweet spot on the upper-right flipper. Missed shots dribble toward the right outlane. Only attempt if comfortable with the shot or if you need RPM progress urgently.",
        },
        {
          name: "Left Orbit when Lock is not lit",
          desc: "A weak Left Orbit can fall short and feed dangerously toward the center drain or slingshots. Save it for Lock shots where a firm shot goes through to the Back Ramp.",
        },
        {
          name: "1-2-3 Target shots from the flippers",
          desc: "Deliberately aiming at the 1-2-3 target banks (above the outlanes) can put the ball into the most dangerous outlane-drain areas. Better to let incidental target hits do this work naturally.",
        },
      ],
      tips: [
        {
          head: "Always remember to shift!",
          body: "The most common beginner mistake. After the tachometer redlines, you MUST physically shift the gear (either direction — even with your knee works). No shift = no Gear Award, no progress, no Burn Rubber relight.",
        },
        {
          head: "Light Extra Ball via Freeway before Redline Mania",
          body: "Advance Freeway values (1M→2M→3M→4M→5M) on one ball to light Extra Ball at the Tunnel. Do this BEFORE activating Redline Mania, which also lights an Extra Ball. After Redline Mania, you can't light Freeway EB — so do it first for two Extra Balls.",
        },
        {
          head: "2× RPM shortcut each new gear",
          body: "At the start of each gear, '2× RPM' is lit. Rolling through the Left Inlane lights 2× on the Right Orbit for a few seconds — one orbit shot counts as 2 RPMs. Use this to cut gear progression nearly in half.",
        },
        {
          head: "Supercharger feeds Left Inlane",
          body: "Even an unlit Supercharger Ramp shot feeds safely to the Left Inlane, which lights Freeway on the Right Orbit. Use it as a safe pass to set up your next shot.",
        },
        {
          head: "Video Mode in 5th Gear = ~27M",
          body: "When Video Mode starts, you begin in 2nd Gear. Immediately shift to 5th Gear for maximum speed and points (~27M). Straddle the line between the leftmost two lanes. Watch for the Extra Ball target about halfway through.",
        },
        {
          head: "Helicopter Bonus can be huge",
          body: "After collecting a Jackpot or Super Jackpot during Multiball, the next Tunnel shot awards the Helicopter Bonus (starts at 5M, grows with Jet Bumper hits and 1-2-3 completions). On a long game this can exceed 50M.",
        },
        {
          head: "Secret Mania at Donut Heaven",
          body: "When you see 3 police cars parked at Donut Heaven on the DMD (during ball lock animation), quickly shift the gear up and down a couple of times. This triggers Secret Mania — 20 seconds where all targets score 500K. Risky but lights Extra Ball if you complete all 9 Stoplights. In Tournament Mode, there are always 3 cars.",
        },
      ],
      mistakes: [
        "Forgetting to shift after completing a gear — the single most common mistake. No shift = no gear award, no bonus multiplier increase, no progress.",
        "Rushing to lock balls immediately after Stoplights complete — first build RPMs and Freeway values, then lock for Multiball when you're ready.",
        "Not relighting the Kickback via 1-2-3 targets — the gaping left outlane is the #1 drain threat. On strict settings with no ball save, this is critical.",
        "Ignoring Freeway values — completing the 1M→5M Freeway progression each ball lights an Extra Ball. With Extra Balls off, this still awards points.",
        "Shooting Redline Mania before lighting the Freeway Extra Ball — once Redline Mania starts, you can't get the Freeway EB anymore.",
        "During Multiball, not shooting the Tunnel after a Jackpot — missing the Helicopter Bonus, which grows throughout the game and can be worth 50M+.",
      ],
    },
    hotspots: [
      {
        x: 30.1,
        y: 44.9,
        type: "key",
        label: "SC",
        name: "Supercharger Ramp",
        body: "<strong>Multi-purpose powerhouse.</strong> Normal play: awards Boost (3M→5M→7M...progressing). Multiball: 10 loops = lights Jackpot. 4th Gear: triggers Supercharger Mode (5M/10M/15M/20M/25M per hit, 25s). 5th Gear: shoot here to start Redline Mania. Feeds to Left Inlane — always safe.",
      },
      {
        x: 16,
        y: 34.7,
        type: "safe",
        label: "LO",
        name: "Left Orbit",
        body: "RPM shot from lower-left flipper. Also collects Freeway value when lit (via Right Inlane). When Lock is lit, a firm shot carries through to the Back Ramp for ball lock. During Multiball: scores Jackpot/Super Jackpot when lit at the Back Ramp.",
      },
      {
        x: 37,
        y: 37.4,
        type: "info",
        label: "SL",
        name: "Side Loop (Left Loop)",
        body: "Upper-right flipper shot. Awards Speed Millions (1M, 2M, 3M... resets on timeout). Each Speed Millions counts as 1 RPM. Also reaches the Back Ramp for Lock/Jackpot shots. <strong>Narrow sweet spot</strong> — missed shots head toward the right outlane. Loop Champion tracks consecutive loops.",
      },
      {
        x: 73.5,
        y: 22.7,
        type: "key",
        label: "TN",
        name: "Tunnel Saucer",
        body: "<strong>Multi-award saucer.</strong> Burn Rubber (random award: Kickback, RPM, Spot Gear, Lite Locks, Multiball, Bonus Held, Video Mode, Extra Ball, Free Ride, points). Video Mode when lit (3rd Gear). Extra Ball when lit (Freeway/Redline). During Multiball post-Jackpot: Helicopter Bonus (5M+, grows all game). 8 total Tunnel Shots → Special on outlanes.",
      },
      {
        x: 43.4,
        y: 50.4,
        type: "info",
        label: "S1",
        name: "1st Stoplight Bank",
        body: "Left bank of Green/Yellow/Red targets. Complete all 3 banks of one color to light Lock. Targets can be spotted by Tunnel/Supercharger hits (first Multiball only). During Multiball/Redline Mania: each hit scores 100K, completing all 9 lights Extra Ball at Tunnel.",
      },
      {
        x: 55,
        y: 39.3,
        type: "info",
        label: "S2",
        name: "2nd Stoplight Bank",
        body: "Center bank of Green/Yellow/Red targets along the Side Loop entrance. Works with banks 1 and 3 to progress through stoplight colors for ball locks.",
      },
      {
        x: 61,
        y: 24.7,
        type: "info",
        label: "S3",
        name: "3rd Stoplight Bank",
        body: "Right bank of Green/Yellow/Red targets above the bumpers. Completing this bank plus the other two of the same color lights Lock.",
      },
      {
        x: 44.5,
        y: 23.6,
        type: "info",
        label: "JB",
        name: "Jet Bumpers",
        body: "Three bumpers above center playfield. Each hit increases the Helicopter Bonus value (by 3K–35K). The Helicopter Bonus is collected at the Tunnel after scoring a Jackpot or Super Jackpot during Multiball. Let the bumpers work passively — don't aim for them.",
      },
      {
        x: 80,
        y: 37,
        type: "safe",
        label: "RO",
        name: "Right Orbit",
        body: "<strong>Safest RPM shot.</strong> Reliable from the left flipper. Awards RPM + Freeway value when lit (via Left Inlane). When '2× RPM' is lit at the start of each gear, rolling through Left Inlane → Right Orbit = 2 RPMs. Repeatable loop for fast gear progression.",
      },
      {
        x: 85.8,
        y: 18.4,
        type: "key",
        label: "BR",
        name: "Back Ramp → Hideout",
        body: "Drops down only when Lock or Jackpot is lit. Reached via a firm Left Orbit or Side Loop shot. Locks balls in the Hideout for Multiball. During Multiball: Jackpot = 25M (always). Super Jackpot = 50M/75M/100M... (need 2+ balls in play). <strong>The big-money shot.</strong>",
      },
      {
        x: 14.3,
        y: 57.8,
        type: "info",
        label: "123",
        name: "Left 1-2-3 Targets",
        body: "Three angled targets above the left outlane. Hit 1, 2, and 3 (either side lights both) within ~8 seconds → relights Kickback. Also increases Supercharger Boost by 1M per hit (max 10M) and Helicopter Bonus by 1M per completion. Critical for survival.",
      },
      {
        x: 80.7,
        y: 58.1,
        type: "info",
        label: "123",
        name: "Right 1-2-3 Targets",
        body: "Mirror of the left bank. Completing either side relights the Kickback and feeds the Supercharger Boost / Helicopter Bonus. Let these happen naturally from inlane feeds — don't aim directly.",
      },
      {
        x: 8.4,
        y: 81.2,
        type: "avoid",
        label: "!",
        name: "Left Outlane + Kickback",
        body: "<strong>Primary drain threat.</strong> No rubber on the lane divider. The Kickback fires the ball into the Tunnel, but it only fires once per activation. Relight via 1-2-3 targets or Redline Mania. On strict settings (open outlane posts), this is the #1 cause of ball loss. Focus on Kickback management.",
      },
      {
        x: 83,
        y: 81.2,
        type: "avoid",
        label: "!",
        name: "Right Outlane",
        body: "Thin metal lane divider. Missed Side Loop shots and weak Right Orbit shots drift here. Less dangerous than the left but still a threat. Special can be lit here (8+ Tunnel Shots).",
      },
      {
        x: 48,
        y: 65,
        type: "key",
        label: "⇅",
        name: "Gear Shifter",
        body: "<strong>Don't forget to shift!</strong> Physical shifter on the cabinet front. After completing each gear's RPM requirement (tachometer hits redline), shift up/down to: collect the Gear Award, increase Bonus Multiplier by 2× (max 8×), and relight Burn Rubber at the Tunnel. Shifting either direction works — even with your knee.",
      },
    ],
  };
