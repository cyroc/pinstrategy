  /* ─── GILLIGAN'S ISLAND (BALLY 1991) ─────────────────────── */
MACHINES['gilligansisland'] = {
    name: "Gilligan's Island",  sub: "1991 · Bally (Midway) · WPC (DMD)",
    tagline: "Collect 7 Lava Seltzer ingredients · Run to Kona for the 50M Island Treasure · Jungle Runs up to 10M a ramp · Lagoon mystery",
    image: "images/gilligans-island.webp",
    difficulty: "Medium", diffClass: "diff-medium", era: "DMD",

    /* ── QUICK GUIDE (30–90 s read) ───────────────────────────── */
    quick: {
      goal: "Almost all big points come from the <strong>Jungle Run ramp</strong>. Collect the <strong>7 Lava Seltzer ingredients</strong>, brew them at the <strong>seltzer saucer</strong>, then make the ramp <strong>6 times</strong> (the first starts a 45 s timer: Run to Kona) for the <strong>50M Island Treasure</strong>. Use <strong>Jungle Runs</strong> from the top saucer for repeatable ramp millions.",
      steps: [
        { title: "Collect the ingredients",
          body: "Pineapples (3 yellow targets, lower left), shells (<strong>Lagoon</strong> centre lane), rope (right side lane, entered from below), turtle eggs (<strong>turtle lane</strong> left of the ramp, 3×), shrunken head (red target above the left sling), bananas (green target left of the ramp) and coconuts (3 white targets, middle right). Any order." },
        { title: "Run to Kona → 50M",
          body: "With all 7, shoot the <strong>seltzer saucer</strong> to brew. Then the <strong>ramp</strong>: 1M starts a 45 s timer, then 2M, 3M, 4M, 5M, and the 6th shot scores the <strong>50M Island Treasure</strong>. The diverter switches the ramp's exit between shots, so be able to hit the ramp from both flippers." },
        { title: "Jungle Runs",
          body: "The <strong>top saucer</strong> (by the bumpers) cycles four awards; if it gives Jungle Run, loop the ramp: 500K rising to 5M, or 1M rising to 10M a shot. It ends 7 s after your last ramp, so keep looping until you miss." },
      ],
      shots: [
        { name: "Jungle Run ramp", why: "Run to Kona, Jungle Runs, the 50M treasure." },
        { name: "Seltzer saucer", why: "Brews the seltzer once all 7 ingredients are lit." },
        { name: "Lagoon centre lane", why: "Shells; Lagoon mystery (only multiball)." },
      ],
      avoid: [
        "Draining during Run to Kona — all 7 ingredients reset whether you finish or not.",
        "Chasing bonus X: the hard secret-lane shot only adds small bonus points.",
      ],
      target: "Milestones (estimates): a Jungle Run string and most ingredients = baseline. One Island Treasure (50M) = good game. Two treasures = great.",
    },

    info: {
      stats: [
        { label: "Manufacturer", value: "Bally (Midway)" },
        { label: "Year",         value: "1991 (May)" },
        { label: "Design",       value: "Dan Langlois, Ward Pemberton" },
        { label: "Art",          value: "John Youssi" },
        { label: "Platform",     value: "WPC (DMD; first WPC game with a 128×32 dot-matrix display)" },
        { label: "Production",   value: "≈4,100 units" },
      ],
      theme: "The 1960s TV series: Gilligan and the Skipper, the Professor's 'Lava Seltzer' formula, and the volcano god Kona, with Bob Denver's voice as Gilligan.",
      features: [
        { name: "Lava Seltzer ingredients (7)", desc: "Pineapples ×3, shells, rope, turtle eggs ×3, shrunken head, bananas, coconuts ×3. Pineapple and coconut progress carries over; Lagoon letters and the kickback value depend on settings." },
        { name: "Run to Kona", desc: "Brew at the seltzer saucer, then 6 ramp shots in 45 s: 1M, 2M, 3M, 4M, 5M, then the 50M Island Treasure. Ingredients reset afterwards." },
        { name: "Top saucer", desc: "Cycles Light Kickback, Jungle Run 500K, Spot Ingredient and Jungle Run 1M. Straight from a bumper it scores 100K instead (500K with all 7 ingredients)." },
        { name: "Jungle Run", desc: "Ramp loops: 500K +500K (max 5M) or 1M +1M (max 10M) a shot; ends 7 s after the last ramp." },
        { name: "Lagoon mystery", desc: "6 blue L-A-G-O-O-N targets (inlanes spot a letter) light the centre lane: 150K–3M, 2-ball multiball, bonus ball or special." },
        { name: "Kickback", desc: "Left outlane, lit at game start. Lit inlanes raise its award: 250K, 500K, Gift of the Gods, 2M, bonus ball." },
        { name: "Lane change", desc: "Either flipper moves the lit lane between both inlanes and the right outlane (500K when lit)." },
      ],
      scoring: [
        { key: "Island Treasure",  val: "50M (Run to Kona finished)" },
        { key: "Run to Kona ramps", val: "1M, 2M, 3M, 4M, 5M" },
        { key: "Jungle Run",       val: "Up to 5M or 10M a ramp" },
        { key: "Lagoon mystery",   val: "150K–3M, multiball, bonus ball, special" },
        { key: "Special (comp)",   val: "1M" },
      ],
      rules: [
        "The only multiball is from the Lagoon mystery (about 3% by default): 2 balls, with an untimed 1M Jungle Run on the ramp.",
        "Bonus X (max 5×): a very hard shot that sends the ball under the ramp diverter to a secret lane. Only when the ramp isn't lit for Jungle Run or Kona.",
        "Gift of the Gods gives 1M to every other player — nothing to you.",
        "Bonus balls (max 1 per player per game) are played after all players' normal balls; there is no known setting to disable them. Specials score 1M in competition play.",
        "Rules from The Pinball Primer; mystery odds and timers are operator settings (hard: 35 s Kona, 5 s Jungle Run).",
      ],
      benchmarks: [
        { score: "Two Island Treasures (estimate)", label: "Great game" },
        { score: "One Island Treasure (50M+)",      label: "Good game" },
        { score: "Jungle Run string + ingredients", label: "Baseline" },
      ],
      resources: [
        { name: "Rules (The Pinball Primer)", url: "https://pinballprimer.github.io/gilligans_GRBxQ.html", icon: "📖" },
        { name: "IPDB Entry",                 url: "https://www.ipdb.org/machine.cgi?id=1004", icon: "🎯" },
        { name: "Pinside Game Page",          url: "https://pinside.com/pinball/machine/gilligans-island", icon: "🕹️" },
      ],
    },

    strategy: {
      skillShot: "None. Plunge and start working on ingredients; the top saucer and its Jungle Run come from normal play.",
      multiball: [
        { name: "Lagoon Multiball", balls: 2, locks: "None — a Lagoon mystery award.", start: "Centre lane when the mystery gives multiball.", jackpots: "No jackpots; the ramp is lit for an untimed 1M Jungle Run (+1M a shot, max 10M).", tip: "Loop the ramp; the Jungle Run lasts until a ball drains." },
      ],
      goal: "<strong>Ingredients, then Run to Kona for 50M; loop the ramp whenever a Jungle Run is lit.</strong> Everything else is small.",
      phases: [
        { num: "Phase 1", title: "Ingredients", body: "Easy ones first: turtle lane, bananas, shells, pineapples. Rope and coconuts take aimed shots." },
        { num: "Phase 2", title: "Brew", body: "Seltzer saucer with all 7, then the ramp six times in 45 s." },
        { num: "Phase 3", title: "Repeat", body: "Start again from 0 ingredients; take any Jungle Run from the top saucer on the way." },
      ],
      safeShots: [
        { name: "Jungle Run ramp", desc: "Returns to the flippers; the diverter alternates its exit." },
        { name: "Turtle lane", desc: "Easy eggs, next to the ramp." },
      ],
      avoidShots: [
        { name: "Secret bonus-X lane", desc: "Only reachable by a very hard ramp shot; little value." },
      ],
      tips: [
        { head: "Both flippers", body: "Practise the ramp from each flipper — the diverter sends the ball to alternating sides in Run to Kona." },
        { head: "Jungle Run first", body: "When the top saucer lights a Jungle Run, forget the ingredients and loop the ramp until you miss." },
        { head: "Lane change", body: "Move the lit lane to the inlane you'll likely roll through to raise the kickback award." },
      ],
      mistakes: [
        "Starting Run to Kona without being able to make the ramp from both flippers.",
        "Brewing at the wrong saucer: brew at the saucer between the centre lane and the coconuts, not the top saucer.",
      ],
    },

    hotspots: [
      { x: 36,   y: 44,   type: "key",   label: "R",  name: "Jungle Run Ramp", body: "Run to Kona, Jungle Runs, 50M Island Treasure." },
      { x: 66,   y: 42.5, type: "key",   label: "SS", name: "Seltzer Saucer", body: "Brews the Lava Seltzer once all 7 ingredients are lit." },
      { x: 76,   y: 17,   type: "key",   label: "TS", name: "Top Saucer", body: "Jungle Run 500K/1M, spot ingredient, kickback." },
      { x: 49,   y: 40,   type: "key",   label: "L",  name: "Lagoon Centre Lane", body: "Shells; Lagoon mystery when lit." },
      { x: 53,   y: 39,   type: "info",  label: "LG", name: "L-A-G-O-O-N Targets", body: "Light the Lagoon mystery." },
      { x: 27,   y: 43,   type: "info",  label: "T",  name: "Turtle Lane", body: "Turtle eggs (3 shots)." },
      { x: 31.5, y: 50.5, type: "info",  label: "B",  name: "Banana Target", body: "Bananas (1 hit)." },
      { x: 25.5, y: 59.5, type: "info",  label: "P",  name: "Pineapple Targets", body: "3 yellow standups." },
      { x: 69,   y: 54,   type: "info",  label: "C",  name: "Coconut Targets", body: "3 white standups." },
      { x: 82,   y: 59,   type: "info",  label: "RP", name: "Rope Lane", body: "Rope — enter from below." },
      { x: 17.5, y: 68,   type: "info",  label: "H",  name: "Shrunken Head Target", body: "Red standup above the left sling." },
      { x: 15,   y: 5,    type: "info",  label: "K",  name: "Kona Toy", body: "The volcano god you calm with Run to Kona (not a shot)." },
      { x: 6.5,  y: 84,   type: "avoid", label: "!",  name: "Left Outlane", body: "Kickback when lit." },
      { x: 92,   y: 82,   type: "avoid", label: "!",  name: "Right Outlane", body: "500K when the lane change lights it." },
    ],
  };
