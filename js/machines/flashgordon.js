  /* ─── FLASH GORDON ───────────────────────────────────────── */
MACHINES['flashgordon'] = {
    name: "Flash Gordon",  sub: "1981 · Bally · AS-2518-35",
    tagline: "Split-level playfield · bonus X to 5X · playfield 2X/3X/5X · collect bonus",
    image: "images/flash-gordon.webp",
    difficulty: "Medium", diffClass: "diff-medium", era: "SS",

    /* ── QUICK GUIDE (30–90 s read) ───────────────────────────── */
    quick: {
      goal: "A bonus game: raise the <strong>bonus multiplier to 5X</strong> step by step, light the <strong>playfield 2X and 3X</strong> (both = <strong>5X</strong>), and <strong>collect the bonus</strong> while the playfield multiplier runs. Mini (50K) and Super (100K) bonus are extra, paid at end of ball.",
      steps: [
        { title: "Bonus X ladder (in order)",
          body: "Right <strong>in-line drops</strong> = 2X, 3X → <strong>upper 1-2-3 drops</strong> = 4X (after 3X) → <strong>lower-left 4 drops</strong> = 5X (after 4X)." },
        { title: "Light the playfield multipliers",
          body: "Upper 1-2-3 drops while flashing = Mini Bonus 50K + lights saucer 2X. Lower 4 drops while flashing (with both return lanes and both lower-right standups) = Super Bonus 100K + saucer 3X." },
        { title: "Saucer = playfield multiplier",
          body: "Put the ball in the <strong>centre saucer</strong>: 15 s of 2X or 3X playfield scoring — with both lit, <strong>5X</strong>." },
        { title: "Collect bonus",
          body: "Drop the single target on the upper playfield and shoot around to the plunger lane, or hit the top-centre collect target once lit. Best during the playfield multiplier." },
      ],
      shots: [
        { name: "Right in-line drop targets", why: "2X / 3X bonus multiplier." },
        { name: "Upper 1-2-3 drops (upper flipper)", why: "4X, Mini Bonus, saucer 2X." },
        { name: "Centre saucer", why: "Starts 2X/3X/5X playfield for 15 s; kickout alternates down/up." },
      ],
      avoid: [
        "Rebounds are confined and fast — nudge and pass the ball rather than flail.",
        "Balls coming down the right spinner or left ramp can go straight down the middle.",
      ],
      target: "Milestones: 5X bonus collected = good game. A 5X playfield run with a big collect = great.",
    },

    info: {
      stats: [
        { label: "Manufacturer", value: "Bally" },
        { label: "Year",         value: "1981 (February)" },
        { label: "Design",       value: "Claude Fernandez" },
        { label: "Software",     value: "Rehman Merchant" },
        { label: "Art",          value: "Kevin O'Connor" },
        { label: "Production",   value: "≈10,000 units" },
      ],
      theme: "Flash Gordon (1980 film). Bally's first split-level game: a raised upper playfield styled as Ming's palace, reached by two ramps. First game with the Squawk & Talk speech board.",
      features: [
        { name: "Upper playfield", desc: "Raised area with its own flipper, the 1-2-3 drop targets, a single drop target and the collect-bonus target." },
        { name: "Right in-line drop targets", desc: "2X and 3X bonus multiplier (and extra ball if enabled)." },
        { name: "Lower-left 4 drop targets", desc: "5X bonus (after 4X); completions advance the saucer value (10K/20K/30K/EB) and light the spinners (left, then right); 5th completion lights the outlane Specials." },
        { name: "Centre saucer", desc: "Starts the timed playfield multiplier; kickout alternates bottom and top." },
        { name: "Left and right ramps (with spinners)", desc: "Lead up to the upper playfield." },
        { name: "Lower-right standups + return lanes", desc: "Part of the Super Bonus requirement." },
      ],
      scoring: [
        { key: "Bonus (each playfield)", val: "Up to 19K" },
        { key: "Bonus multiplier",       val: "Up to 5X" },
        { key: "Mini Bonus (upper drops)", val: "50K (end of ball only, not multiplied)" },
        { key: "Super Bonus (lower goal)", val: "100K (end of ball only, not multiplied)" },
        { key: "Playfield multiplier",    val: "2X, 3X, or 5X (both lit) for 15 s" },
      ],
      rules: [
        "Top and bottom playfields each build their own bonus (to 19K).",
        "Bonus X order (each step needs the previous one): in-line 2X, 3X → upper 1-2-3 drops 4X → lower 4 drops 5X.",
        "Playfield 2X needs the flashing upper drops, 3X the lower goal; both lit = 5X. The centre saucer starts it.",
        "Mini and Super bonus are collected at the outhole only.",
        "Extra balls and Specials are void under comp settings.",
      ],
      benchmarks: [
        { score: "5X playfield + collect", label: "Great game" },
        { score: "5X bonus",               label: "Good game" },
        { score: "2X/3X bonus",            label: "Baseline" },
      ],
      resources: [
        { name: "Rules (silverballmania)", url: "https://rules.silverballmania.com/rules/G5728-MDbjD", icon: "📖" },
        { name: "IPDB Entry",              url: "https://www.ipdb.org/machine.cgi?id=874", icon: "🎯" },
        { name: "Wikipedia",               url: "https://en.wikipedia.org/wiki/Flash_Gordon_(pinball)", icon: "📄" },
      ],
    },

    strategy: {
      skillShot: null,
      multiball: [],
      goal: "<strong>Build bonus X to 5X in order, light both playfield multipliers, start 5X playfield at the centre saucer and collect the bonus while it runs.</strong>",
      phases: [
        { num: "Phase 1", title: "2X–3X", body: "Right in-line drops." },
        { num: "Phase 2", title: "4X–5X + extras", body: "Upper 1-2-3 drops (flashing: Mini Bonus + 2X playfield), then the lower-left 4 drops (flashing with the return lanes and right standups: Super Bonus + 3X playfield)." },
        { num: "Phase 3", title: "Multiply + collect", body: "Centre saucer for 2X/3X/5X playfield, then collect bonus via the plunger-lane path or the top collect target." },
      ],
      safeShots: [
        { name: "Upper playfield", desc: "Temporarily safe; the upper flipper can keep the ball up top." },
      ],
      avoidShots: [
        { name: "Centre saucer kickout downward", desc: "Can bounce off the left bumper and rubbers into the right outlane or centre." },
      ],
      tips: [
        { head: "Backhand", body: "The right spinner can often be backhanded." },
        { head: "Saucer direction", body: "The blinking lights under the centre saucer show whether the next kickout goes up or down." },
      ],
      mistakes: [
        "Collecting the bonus before the multiplier is high.",
        "Skipping a step of the bonus X ladder (they must be lit in order).",
      ],
    },

    hotspots: [
      { x: 44.5, y: 35.5, type: "key",   label: "CS", name: "Centre Saucer",
        body: "Starts the 2X/3X/5X playfield multiplier; kickout alternates down and up." },
      { x: 27.5, y: 13,   type: "key",   label: "UB", name: "Upper 1-2-3 Drop Targets",
        body: "4X bonus (after 3X); flashing = Mini Bonus 50K + saucer 2X." },
      { x: 80.5, y: 44,   type: "key",   label: "IL", name: "Right In-line Drop Targets",
        body: "2X and 3X bonus multiplier." },
      { x: 12,   y: 53,   type: "key",   label: "LB", name: "Lower-Left 4 Drop Targets",
        body: "5X bonus (after 4X); flashing goal = Super Bonus 100K + saucer 3X; advances saucer value, lights spinners." },
      { x: 45,   y: 11.5, type: "info",  label: "CB", name: "Collect Bonus Target", body: "Top centre of the upper playfield; lit after the flashing upper targets." },
      { x: 66.5, y: 13.3, type: "info",  label: "SD", name: "Single Drop Target", body: "Opens the path around into the plunger lane for collect bonus." },
      { x: 80,   y: 27,   type: "info",  label: "UF", name: "Upper Flipper", body: "Shoots the upper 1-2-3 drops." },
      { x: 12,   y: 28,   type: "info",  label: "LR", name: "Left Ramp (spinner at entrance)", body: "To the upper playfield." },
      { x: 69,   y: 37,   type: "info",  label: "RR", name: "Right Ramp (spinner at entrance)", body: "To the upper playfield; the spinner at its entrance can often be backhanded." },
      { x: 80.3, y: 58.5, type: "info",  label: "ST", name: "Lower-Right Standups", body: "Needed for the Super Bonus goal." },
      { x: 7,    y: 77,   type: "avoid", label: "!",  name: "Left Outlane",  body: "Open under comp settings." },
      { x: 83.5, y: 78,   type: "avoid", label: "!",  name: "Right Outlane", body: "Open under comp settings." },
    ],
  };
