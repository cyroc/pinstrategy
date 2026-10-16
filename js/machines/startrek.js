  /* ─── STAR TREK: THE NEXT GENERATION ─────────────────────── */
MACHINES['startrek'] = {
    name: "Star Trek: The Next Generation",
    sub: "1993 · Williams · WPC-DCS",
    tagline: "7 missions + artifacts → Final Frontier · Borg Multiball with cannon jackpots · Warp 9 · Neutral Zone · Captain rank",
    image: "images/star-trek-tng.webp",
    difficulty: "Medium-Hard", diffClass: "diff-medium-hard", era: "DMD",

    /* ── QUICK GUIDE (30–90 s read) ───────────────────────────── */
    quick: {
      goal: "Play the seven <strong>missions</strong> and collect <strong>artifacts</strong> (50M each, 4 types): the 6-ball <strong>Final Frontier</strong> pays 100M per artifact plus <strong>1B per set of all four</strong>, then 25M × artifacts per shot. <strong>Borg Multiball</strong> jackpots and <strong>Q's Challenge</strong> are the steady money.",
      steps: [
        { title: "Plunge choice",
          body: "Plunge for <strong>Warp Factor 4</strong> (expert default) or <strong>Light Lock</strong> (2 of the 3 locks); take <strong>Start Mission</strong> when Q's Challenge is flashing." },
        { title: "Borg Multiball",
          body: "Lock 3 balls (Holodeck orbit, the <strong>Delta Quadrant ramp</strong> once, or the Neutral Zone hole before the first MB). Aim the left <strong>cannon</strong> at <strong>Start Mission</strong>: 1×, 2×, 3× jackpots (+10M each) — a miss starts multiball. In MB: Start Mission cycles 1×/2×/3×, the <strong>left ramp</strong> = 3×." },
        { title: "Keep the shields up",
          body: "Borg fire drops the shields; at 0 % the Start Mission jackpot goes out. Shoot the <strong>spinner</strong> (left orbit) to recharge." },
        { title: "Q's Challenge",
          body: "The most lucrative mode: each lit shot 10M, then +10M up to 100M. Loop the left orbit → left ramp combo." },
        { title: "Artifacts",
          body: "Battle Sim level 5 · Q 5 shots · Rescue 25 people · Asteroid 3 hits · Worm Hole collect · Search the Galaxy 3 ramps (+1 in order + NZ) · Time Rift ~4 shots · Warp Factor 8." },
      ],
      shots: [
        { name: "Start Mission hole", why: "Missions; cannon jackpots; Borg jackpots." },
        { name: "Delta Quadrant (left) ramp", why: "Triple jackpot in multiball; warp; one lock." },
        { name: "Spinner (left orbit)", why: "Warp; shields." },
      ],
      avoid: [
        "Don't let the shields hit 0 % in Borg Multiball — the Start Mission jackpot turns off.",
        "Keep the kickback lit: hit the one lit target in the left/right yellow bank.",
      ],
      target: "Milestones: a Borg Multiball with triple jackpots = good game. Final Frontier with a full set of artifacts (1B) = great.",
    },

    info: {
      stats: [
        { label: "Manufacturer", value: "Williams" },
        { label: "Year",         value: "1993 (November)" },
        { label: "Design",       value: "Steve Ritchie (with Dwight Sullivan, Greg Freres)" },
        { label: "Software",     value: "Dwight Sullivan, Matt Coriale" },
        { label: "Art",          value: "Greg Freres" },
        { label: "Production",   value: "≈11,728 units" },
      ],
      theme: "The Enterprise-D against the Borg, Romulans, Ferengi, Cardassians and Q. A widebody with two swinging probe launchers (cannons) fired from the gun-grip trigger, a Borg ship over the Start Mission hole and three ball-lock routes.",
      features: [
        { name: "Probe launchers", desc: "Two swinging cannons above the slings; fire with the trigger at the lit shot (multiball jackpots, Battle Simulation, probes)." },
        { name: "Start Mission hole", desc: "Under the Borg ship: missions, multiball jackpots, extra balls." },
        { name: "Delta Quadrant ramp", desc: "Left ramp from the upper right flipper: warp, lock, triple jackpot." },
        { name: "Command Decision", desc: "Small hole beside the left ramp: choose the next mission; advance rank." },
        { name: "Neutral Zone", desc: "Three targets with a hole in front: Ferengi, Romulan or Cardassian multiball/modes; locks on the first MB." },
        { name: "Holodeck orbit (right)", desc: "Drop target and hole: locks, Hurry-up, Holodeck (25M or Shuttle Simulation)." },
        { name: "Beta Quadrant ramp", desc: "Right ramp: shuttle count (Command Decision and extra balls), Explosive Millions with the Alpha ramp." },
        { name: "Spinner + Time/Rift targets", desc: "Spinner (left orbit) value raised by the Time/Rift targets; warp advances." },
      ],
      scoring: [
        { key: "Borg jackpot",         val: "Base 20M (+250K per pop), +10M per cannon hit; 1×/2×/3×, left ramp 3×" },
        { key: "Final Frontier",       val: "100M per artifact + 1B per set of all 4 types; shots 25M × artifacts (max 250M)" },
        { key: "Captain (rank)",       val: "100M at Command Decision" },
        { key: "Super Spinner",        val: "10M per spin (timed; operator can disable — A.2 26)" },
        { key: "Explosive Millions",   val: "Centre/right ramps 5M-10M-20M-30M…50M" },
        { key: "Q's Challenge",        val: "10M, 20M, 30M … max 100M" },
        { key: "Worm Hole",            val: "From 30M (+10M per right ramp)" },
      ],
      rules: [
        "<strong>Missions:</strong> Time Rift, Worm Hole, Search the Galaxy, Battle Simulation, Q's Challenge, Rescue, Asteroid Threat; play all seven → Final Frontier (6 balls). Mode totals are scored immediately.",
        "<strong>Warp factors:</strong> 2 = 5M, 3 = jets 1M, 4 = spinner lit, 5 = multipliers held, 6 = return lanes lit, 7 = double spinner, 8 = EB first (artifact with EBs off), 9 = Factor 9 mode.",
        "<strong>Locks:</strong> the Holodeck orbit lights lock; only one lock per MB on the Delta ramp; the Neutral Zone hole locks only before the first MB. Light Lock plunges can supply 2 of the 3 locks. The left ramp advances warp only until the first Warp 9.",
        "<strong>Neutral Zone:</strong> 3 hits light it — Ferengi (add balls), Romulan (cloak 3 shots), Cardassian (2-ball, jackpot from 50M by shield level).",
        "<strong>Ranks:</strong> Ensign 5M → Captain 25M (in bonus), then 100M awards.",
        "Rules for the final L-7 ROM (LA-7/LX-7), per Cameron Silver v1.D. Under PAPA-style tournament settings Light Lock becomes Bonus Multiplier, Super Spinner is off and the kickback starts unlit. Extra balls and specials are void.",
      ],
      benchmarks: [
        { score: "Final Frontier",            label: "Great game" },
        { score: "Borg MB triple jackpots",   label: "Good game" },
        { score: "Multiball started",         label: "Baseline" },
      ],
      resources: [
        { name: "Rulesheet (Cameron Silver)", url: "https://www.pinball.org/rules/startrekthenextgeneration.html", icon: "📖" },
        { name: "IPDB Entry",                 url: "https://www.ipdb.org/machine.cgi?id=2357", icon: "🎯" },
        { name: "Pinside Game Page",          url: "https://pinside.com/pinball/machine/star-trek-the-next-generation", icon: "🕹️" },
      ],
    },

    strategy: {
      skillShot: "Plunger choice (cycle with the flippers, launch to pick): Start Mission, Light Lock (locks the ball; twice per multiball), Launch Probe (cannon shot for an award), Flipper Skill Shot (shoot the right ramp from the left flipper for an award) or Warp Factor 4.",
      actionButton: { name: "Gun trigger", when: "Ball loaded in a probe launcher", desc: "The launcher swings across the playfield; pull the trigger when it points at the lit shot (the Start Mission hole for multiball jackpots)." },
      multiball: [
        { name: "Borg Multiball", balls: 3,
          locks: "Holodeck orbit lights/takes locks; one lock per MB on the Delta ramp; Neutral Zone hole on the first MB; Light Lock plunges.",
          start: "Third lock: three cannon shots at Start Mission (1×, 2×, 3×, +10M each), then multiball.",
          jackpots: "Start Mission cycles 1×/2×/3×; Delta Quadrant ramp = 3× every time. Jets raise the base (+250K each).",
          tip: "Spinner shots recharge the shields; at 0 % the Start Mission jackpot goes out." },
        { name: "Final Frontier", balls: 6,
          locks: "Play all seven missions.",
          start: "Start Mission.",
          jackpots: "100M per artifact + 1B per set of all four types up front; every lit shot 25M × artifacts (max 250M; 10M with none).",
          tip: "Collect a full set of the four artifact types for the 1B award." },
      ],
      goal: "<strong>Light Lock plunges and the Holodeck orbit to Borg Multiball, cannon jackpots into Start Mission, left-ramp triple jackpots; missions and artifacts toward Final Frontier.</strong>",
      phases: [
        { num: "Phase 1", title: "Lock + warp", body: "Light Lock plunges; spinner/left ramp for warp factors." },
        { num: "Phase 2", title: "Borg Multiball", body: "Three cannon jackpots, then Start Mission and left-ramp 3× jackpots; spinner for shields." },
        { num: "Phase 3", title: "Missions", body: "Command Decision to pick easy missions; artifacts → Final Frontier." },
      ],
      safeShots: [
        { name: "Delta Quadrant ramp", desc: "From the upper right flipper; returns to the right inlane (lights the spinner)." },
        { name: "Beta Quadrant ramp", desc: "Shuttles, Explosive Millions." },
      ],
      avoidShots: [
        { name: "Start Mission from the right flipper", desc: "Hard angle; much easier from the left flipper." },
      ],
      tips: [
        { head: "Combo", body: "Left orbit → left ramp builds warp (2 factors on the first trip to 9) and gives a triple jackpot in multiball." },
        { head: "Shuttle targets", body: "Red standups beside the Beta ramp double (or quadruple) the next ramp's shuttle count." },
      ],
      mistakes: [
        "Missing a cannon shot at the start of Borg Multiball — the jackpot round ends and the rest are lost.",
        "Letting the shields drain to 0 % during multiball.",
      ],
    },

    hotspots: [
      { x: 56.5, y: 21.5,   type: "key",   label: "SM", name: "Start Mission Hole", body: "Missions; cannon jackpots; Borg jackpots 1×/2×/3×." },
      { x: 31,   y: 39,   type: "key",   label: "DQ", name: "Delta Quadrant Ramp", body: "3× jackpot in multiball; warp; one lock per MB." },
      { x: 18,   y: 45,   type: "key",   label: "WO", name: "Warp Orbit + Spinner", body: "Warp factors; shields; Super Spinner." },
      { x: 90,   y: 37,   type: "key",   label: "HO", name: "Holodeck Orbit", body: "Locks; Hurry-up; Holodeck." },
      { x: 21.5, y: 24.5,   type: "safe",  label: "CD", name: "Command Decision", body: "Choose a mission; advance rank (Captain = 100M)." },
      { x: 32,   y: 20,   type: "info",  label: "NZ", name: "Neutral Zone", body: "Ferengi, Romulan, Cardassian; locks on the first MB." },
      { x: 49,   y: 23.5,   type: "info",  label: "AQ", name: "Alpha Quadrant Ramp", body: "Explosive Millions; mode shots." },
      { x: 80,   y: 34,   type: "info",  label: "BQ", name: "Beta Quadrant Ramp", body: "Shuttles; Explosive Millions." },
      { x: 64.5, y: 28.5,   type: "info",  label: "Q",  name: "Q Target", body: "Changes the mission; adds Q shots." },
      { x: 30.5, y: 48.5, type: "info",  label: "TR", name: "Time / Rift Targets", body: "Raise the spinner value." },
      { x: 19.5, y: 64,   type: "info",  label: "LR", name: "Left Kickback Targets", body: "Hit the lit one to relight the kickback." },
      { x: 81.5, y: 63.5,   type: "info",  label: "RR", name: "Right Targets", body: "Kickback relight." },
      { x: 7.5,  y: 82,   type: "avoid", label: "KB", name: "Left Outlane (Kickback)", body: "Kickback when lit." },
      { x: 91,   y: 80,   type: "avoid", label: "!",  name: "Right Outlane", body: "Open under comp settings." },
    ],
  };
