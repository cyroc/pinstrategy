  /* ─── LETHAL WEAPON 3 ──────────────────────────────────────── */
MACHINES['lw3'] = {
    name: "Lethal Weapon 3",  sub: "1992 · Data East · Version 3 system (DMD)",
    tagline: "Freeway ramp jackpots (double/quad) · LW 1-2-3 saucer stunts · Uzi Shoot Out · Crazy Riggs",
    image: "images/lethal-weapon-3.webp",
    difficulty: "Medium", diffClass: "diff-medium", era: "DMD",

    /* ── QUICK GUIDE (30–90 s read) ───────────────────────────── */
    quick: {
      goal: "Score with the <strong>Freeway (left ramp)</strong> in multiball — Jackpot 10M+, Double 20M+, Quad 40M+ — and with the <strong>LW 1-2-3 saucer stunts</strong> (5M up to 25M, then a 50M Super Stunt). The orbits load the <strong>Uzi</strong> for Shoot Out awards like Crazy Riggs.",
      steps: [
        { title: "Skill shot",
          body: "Plunge with the gun trigger to hit the lit (moving) <strong>bullet</strong> target: 2M / 3M / 4M on balls 1–3." },
        { title: "Light and start Multiball",
          body: "Complete a <strong>drop target bank</strong> (once or twice depending on code/settings), then shoot the <strong>centre saucer (LW2, the VUK)</strong>. 3 balls." },
        { title: "Freeway jackpots",
          body: "<strong>Left ramp</strong> = Jackpot. <strong>Double:</strong> two balls up the ramp within ~2 s, or a lit LW saucer then the ramp. <strong>Quad:</strong> light the double, then two balls up the ramp in a row. Saucers relight the Jackpot." },
        { title: "Stunts (LW 1-2-3)",
          body: "Left, centre and right saucers: all three = a stunt — High Fall 5M, Police Chase (Car Crash) 10M, Toilet 15M, Explosion 20M, Helicopter 25M, then the 50M <strong>Super Stunt</strong>. Saucer shots also set up double jackpots in multiball." },
        { title: "Uzi Shoot Out",
          body: "Orbit shots load the Uzi bullets; when full, pull the trigger to beat the gunman: 3M, 1M + bonus held, Super Leo + Super Spinners, Video + Getaway, Crazy Riggs, Super Lethal Weapon." },
      ],
      shots: [
        { name: "Left ramp (Freeway)", why: "Jackpots, Double/Quad, Freeway millions." },
        { name: "LW 1-2-3 saucers", why: "Stunts; multiball start (LW2); relight/double jackpots." },
        { name: "Orbits", why: "Uzi bullets; spinners; Subway (2 left orbits) relights Laser Kick." },
      ],
      avoid: [
        "The left outlane is wide and unrubbered — keep the Laser Kick lit (Subway relights its standup).",
        "Shoot Out runs with the ball still in play — keep a flipper ready.",
      ],
      target: "Milestones: a Double Jackpot plus a couple of stunts = good game. A Quad Jackpot or the Super Stunt = great.",
    },

    info: {
      stats: [
        { label: "Manufacturer", value: "Data East" },
        { label: "Year",         value: "1992 (August)" },
        { label: "Design",       value: "Joe Kaminkow, Ed Cebula" },
        { label: "Software",     value: "Kristina Donofrio" },
        { label: "Art / Mech.",  value: "Markus Rothkranz · John Lund" },
        { label: "Production",   value: "≈10,350 units" },
      ],
      theme: "Riggs and Murtaugh in Lethal Weapon 3. A gun-handle launcher fires the ball and the Uzi Shoot Out; movie-clip 'stunts' play on the dot-matrix display. The image shows a virtual (VPX) recreation of the playfield.",
      features: [
        { name: "Left ramp (Freeway)", desc: "Jackpots, Double/Quad Jackpots, Freeway millions, Looping, Victory Laps." },
        { name: "Centre saucer / VUK (LW2)", desc: "Starts Multiball and Video; feeds the left flipper." },
        { name: "Left (LW1) and right (LW3) saucers", desc: "Stunts; relight/double jackpots; right saucer collects Leo Getz / Super Leo." },
        { name: "Drop target banks", desc: "Centre and lower right: light Multiball; centre targets start Red/Blue Wire." },
        { name: "Bullet targets", desc: "Four targets along the left orbit lane: light Leo Getz; skill shot target." },
        { name: "Orbits + spinners", desc: "Load the Uzi; Super Spinners; Getaway (left inlane → right orbit)." },
        { name: "Laser Kick", desc: "Left outlane kickback; relit by the lower-left standup." },
      ],
      scoring: [
        { key: "Jackpot / Double / Quad", val: "10M (+5M) / 20M (+10M) / 40M (+20M) (Avery 1998)" },
        { key: "Stunts",                  val: "5M, 10M, 15M, 20M, 25M; Super Stunt 50M" },
        { key: "Skill shot",              val: "2M / 3M / 4M (balls 1–3)" },
        { key: "Getaway",                 val: "15M counting down" },
        { key: "Crazy Riggs",             val: "250K per switch for 15 s" },
        { key: "Looping",                 val: "5M per ramp shot for 20 s (Avery; Earl: 10M)" },
        { key: "Bonus",                   val: "5K per switch × bonus X" },
      ],
      rules: [
        "<strong>Bonus X:</strong> the top lanes advance the multiplier.",
        "<strong>Red / Blue Wire:</strong> centre drop target starts it; cut the right wire for Unlimited Millions at the lower-left target.",
        "<strong>Leo Getz:</strong> all four bullets, then the right saucer: random award. Super Leo lets you choose between two (e.g. Bank Heist, 20M, Crazy Riggs, Looping) — varies by code.",
        "<strong>Uzi:</strong> either orbit loads bullets (factory: first two completions give all 6, then 3, 2, 1).",
        "<strong>Murtaugh's Retirement:</strong> right outlane 5–10M — a settings-dependent outlane gamble.",
        "Rules differ between code versions (Earl's rule-card transcription vs. Ryan Avery's 1998 sheet); extra balls and Special are void under comp settings.",
      ],
      benchmarks: [
        { score: "Quad Jackpot / Super Stunt", label: "Great game" },
        { score: "Double Jackpot + stunts",    label: "Good game" },
        { score: "Multiball started",          label: "Baseline" },
      ],
      resources: [
        { name: "Rulesheet (pinball.org)",    url: "https://www.pinball.org/rules/lethalweapon3.html", icon: "📖" },
        { name: "Avery rulesheet (Pinball Nirvana)", url: "https://pinballnirvana.com/forums/resources/lethal-weapon-3-data-east-1992.7230/", icon: "📋" },
        { name: "IPDB Entry",                 url: "https://www.ipdb.org/machine.cgi?id=1433", icon: "🎯" },
        { name: "Wikipedia",                  url: "https://en.wikipedia.org/wiki/Lethal_Weapon_3_(pinball)", icon: "📄" },
      ],
    },

    strategy: {
      skillShot: "Plunge with the gun trigger to hit the lit, moving bullet target: 2M, 3M, 4M on balls 1–3.",
      multiball: [
        { name: "Multiball (Lotsaballs)", balls: 3,
          locks: "Complete a drop target bank (once or twice depending on code/settings).",
          start: "Centre saucer (LW2 / VUK); two balls are autoplunged.",
          jackpots: "Left ramp Jackpot 10M+; Double (two balls within ~2 s, or lit saucer then ramp) 20M+; Quad (two balls in a row after lighting the double) 40M+.",
          tip: "Stack Crazy Riggs with multiball; saucer shots in multiball also score stunts and light doubles." },
      ],
      goal: "<strong>Freeway jackpots in multiball, LW 1-2-3 stunts toward the 50M Super Stunt, and Uzi Shoot Outs.</strong> Keep the Laser Kick lit.",
      phases: [
        { num: "Phase 1", title: "Skill shot + saucers", body: "Skill shot; LW saucers for stunts; drops toward multiball." },
        { num: "Phase 2", title: "Multiball", body: "Double and Quad jackpots on the Freeway." },
        { num: "Phase 3", title: "Uzi", body: "Orbits for bullets; Shoot Out awards (Crazy Riggs, Super Lethal Weapon)." },
      ],
      safeShots: [
        { name: "Left ramp from the right flipper", desc: "The money shot." },
        { name: "Centre saucer (LW2)", desc: "VUK feeds the left flipper." },
      ],
      avoidShots: [
        { name: "Left outlane side with the Laser Kick off", desc: "Wide, unrubbered outlane." },
      ],
      tips: [
        { head: "Subway", body: "Two left-orbit shots in a row relight the Laser Kick standup." },
      ],
      mistakes: [
        "Sending balls up the Freeway one by one instead of pairing them for doubles.",
      ],
    },

    hotspots: [
      { x: 27,   y: 30,   type: "key",   label: "LR", name: "Left Ramp (Freeway)", body: "Jackpots; Double/Quad; Freeway millions." },
      { x: 37,   y: 18,   type: "key",   label: "L2", name: "Centre Saucer / VUK (LW2)", body: "Starts Multiball and Video; stunt saucer." },
      { x: 80.5, y: 22,   type: "key",   label: "L3", name: "Right Saucer (LW3)", body: "Stunt saucer; Leo Getz / Super Leo." },
      { x: 53,   y: 39,   type: "key",   label: "DT", name: "Centre Drop Targets", body: "Light Multiball; Red/Blue Wire." },
      { x: 82,   y: 60,   type: "info",  label: "DR", name: "Lower-Right Drop Targets", body: "Light Multiball; Red/Blue Wire." },
      { x: 17,   y: 35,   type: "safe",  label: "LO", name: "Left Orbit", body: "Uzi bullets; spinner; Subway." },
      { x: 84,   y: 38,   type: "safe",  label: "RO", name: "Right Orbit", body: "Uzi bullets; spinner; Getaway." },
      { x: 20,   y: 43,   type: "info",  label: "BT", name: "Bullet Targets", body: "Light Leo Getz; skill shot." },
      { x: 55,   y: 14,   type: "info",  label: "TL", name: "Top Lanes", body: "Advance the bonus multiplier." },
      { x: 21,   y: 65,   type: "info",  label: "LK", name: "Laser Kick Target", body: "Relights the Laser Kick; Unlimited Millions." },
      { x: 10,   y: 76,   type: "avoid", label: "KB", name: "Left Outlane (Laser Kick)", body: "Kickback when lit; wide, no rubber." },
      { x: 82,   y: 75,   type: "avoid", label: "!",  name: "Right Outlane", body: "Murtaugh's Retirement when lit." },
    ],
  };
