  /* ─── MAGIC ──────────────────────────────────────────────── */
MACHINES['magic'] = {
    name: "Magic",  sub: "1979 · Stern Electronics · M-100",
    tagline: "Spell M-A-G-I-C for spinners at 1,000 and 2,000 a spin · drop targets for 2×–5× · bonus collect saucer (bumper luck) · inlanes up to 8,000",
    image: "images/magic.webp",
    difficulty: "Medium", diffClass: "diff-medium", era: "SS",

    /* ── QUICK GUIDE (30–90 s read) ───────────────────────────── */
    quick: {
      goal: "Spell <strong>M-A-G-I-C</strong> to power up the <strong>two spinners</strong> (one ends at 1,000, the other at <strong>2,000 a spin</strong>), then rip them hard. Bonus X comes from the drop targets, and <strong>bonus collects</strong> at the upper-left saucer often decide the game.",
      steps: [
        { title: "Letters → spinners",
          body: "M-A-G top lanes; M, G, I, C also on standups either side of the middle. Both spinners start at 200. <strong>M, G</strong> add 400 to the right spinner; <strong>I, C</strong> add 400 to the left; <strong>A</strong> adds 1,000 to one of them (alternates on 10-point switches). A second MAGIC scores a special (100,000 if set to points). Everything resets each ball." },
        { title: "Multiplier and collect",
          body: "Clearing the upper-right <strong>drop targets</strong> gives 2× → 5× (then specials); they're hard to aim at except with a very hard left-spinner shot across the top. When the ball is in the bumpers, <strong>nudge it toward the Collect Bonus saucer</strong> (upper left): it pays bonus × X and keeps the X." },
        { title: "Backup: inlanes",
          body: "Each hit on the lower centre star rollover adds 2,000 to the inlanes (max 8,000). If the spinners are poor, alley-pass between the inlanes." },
      ],
      shots: [
        { name: "Spinners", why: "1,000 / 2,000 a spin after MAGIC." },
        { name: "Letter standups", why: "Spinner value." },
        { name: "Hard left-spinner shot", why: "Can reach the drop targets." },
      ],
      avoid: [
        "The flipper gap is wide — the centre post helps, but don't count on it.",
      ],
      target: "Milestones: MAGIC each ball with long spinner rips = good game. Add collects at 3×+ = great.",
    },

    info: {
      stats: [
        { label: "Manufacturer", value: "Stern Electronics" },
        { label: "Year",         value: "1979 (August)" },
        { label: "Design",       value: "Mike Kubin" },
        { label: "Art",          value: "Bob Timm" },
        { label: "Production",   value: "2,202 (2,466 incl. 264 kits)" },
        { label: "System",       value: "Stern M-100" },
        { label: "Max bonus",    value: "19,000 × 5 = 95,000" },
      ],
      theme: "Fantasy sorcery: a sorcerer, a dragon, a serpent and skulls in a mystical forest.",
      features: [
        { name: "MAGIC letters", desc: "M-A-G top lanes; standups either side of the middle (all but A). Each raises a spinner; MAGIC = one spinner 1,000, the other 2,000 a spin. 1st completion lights the extra ball; later ones score a special." },
        { name: "Spinners", desc: "200 a spin, raised by the letters (M/G right, I/C left, A alternates)." },
        { name: "Drop targets (upper right)", desc: "Outer 1,000, inner 500. Clears: 5,000 + 2×, 10,000 + 3×, 20,000 + 4×, 30,000 + 5×, then specials. 2nd or 3rd clear lights the right outlane special." },
        { name: "Collect Bonus saucer", desc: "Upper left; reached only by bumper luck. Pays bonus × X, resets bonus to 1,000, keeps the multiplier." },
        { name: "Bumpers", desc: "Top bumper 1,000 + bonus advance; others 1,000 in 3-ball play." },
        { name: "Centre star rollovers", desc: "Upper: bonus advance. Lower: +2,000 to the inlanes (max 8,000)." },
        { name: "Inlanes / outlanes", desc: "Inlanes 2,000 + advance (up to 8,000). Outlanes 5,000 + 3 advances; right outlane special after 2–3 drop clears." },
        { name: "Centre post", desc: "Between the wide-gap flippers." },
      ],
      scoring: [
        { key: "Best spinner",  val: "2,000 a spin" },
        { key: "Drop clears",   val: "5,000 → 30,000 + X" },
        { key: "Collect",       val: "Bonus × X (max 95,000)" },
        { key: "Inlanes",       val: "2,000 → 8,000" },
        { key: "Specials",      val: "100,000 if set to points" },
      ],
      rules: [
        "Bonus, multiplier, inlane value and all letters reset every ball (no setting changes this).",
        "Drop-target specials (4th clear on) can be one per ball or unlimited.",
        "Extra balls are void with comp settings.",
        "Rules from The Pinball Primer; settings vary by machine.",
      ],
      benchmarks: [
        { score: "Spinner rips + collects at 3×+", label: "Great game" },
        { score: "MAGIC every ball", label: "Good game" },
        { score: "3 letters + 2×", label: "Baseline" },
      ],
      resources: [
        { name: "Rules (The Pinball Primer)", url: "https://pinballprimer.github.io/magic_G4eyp.html", icon: "📖" },
        { name: "IPDB Entry",                url: "https://www.ipdb.org/machine.cgi?id=1509", icon: "🎯" },
        { name: "Pinside Game Page",         url: "https://pinside.com/pinball/machine/magic", icon: "🕹️" },
      ],
    },

    strategy: {
      skillShot: "None. The plunge feeds the M-A-G top lanes.",
      multiball: [],
      goal: "<strong>Spell MAGIC every ball and rip the 2,000 spinner; nudge for bonus collects.</strong> Inlane alley passes are the backup.",
      phases: [
        { num: "Phase 1", title: "Letters", body: "Top lanes and side standups." },
        { num: "Phase 2", title: "Spin", body: "Rip the 2,000 spinner hard." },
        { num: "Phase 3", title: "Multiply", body: "Drop targets for X; collects from bumper luck." },
      ],
      safeShots: [
        { name: "Spinners", desc: "The main scoring shots once MAGIC is lit." },
      ],
      avoidShots: [
        { name: "Direct shots at the drop targets", desc: "Practically impossible from the flippers." },
      ],
      tips: [
        { head: "Nudge in the pops", body: "Steer the ball toward the collect saucer — games often come down to one extra collect." },
        { head: "Which spinner?", body: "The A decides which spinner gets the extra 1,000 — check the lights." },
      ],
      mistakes: [
        "Ripping spinners before any letters are lit (200 a spin).",
        "Forgetting that everything resets each ball.",
      ],
    },

    hotspots: [
      { x: 7,    y: 40,   type: "key",   label: "LS", name: "Left Spinner", body: "I and C raise it." },
      { x: 81,   y: 39,   type: "key",   label: "RS", name: "Right Spinner", body: "M and G raise it." },
      { x: 17,   y: 24,   type: "key",   label: "C",  name: "Collect Bonus Saucer", body: "Bonus × X; keeps X." },
      { x: 67,   y: 21,   type: "key",   label: "D",  name: "Drop Targets", body: "2× → 5×, then specials." },
      { x: 47,   y: 12,   type: "info",  label: "MAG", name: "M-A-G Top Lanes", body: "Letters." },
      { x: 7.5,  y: 54,   type: "info",  label: "IG", name: "Left Letter Standups (I, G)", body: "Letters." },
      { x: 82.5, y: 55.5, type: "info",  label: "CM", name: "Right Letter Standups (C, M)", body: "Letters." },
      { x: 6,    y: 28,   type: "info",  label: "★",  name: "Star Rollover (behind left spinner)", body: "3 bonus advances; extra ball when lit." },
      { x: 42,   y: 26,   type: "info",  label: "B",  name: "Top Bumper", body: "1,000 + bonus advance." },
      { x: 46,   y: 78,   type: "info",  label: "★",  name: "Lower Star Rollover", body: "+2,000 inlane value." },
      { x: 7,    y: 81,   type: "avoid", label: "!",  name: "Left Outlane", body: "5,000 + 3 advances." },
      { x: 86,   y: 80,   type: "avoid", label: "!",  name: "Right Outlane", body: "5,000 + 3 advances; special when lit." },
    ],
  };
