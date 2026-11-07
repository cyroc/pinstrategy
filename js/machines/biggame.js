  /* ─── BIG GAME ───────────────────────────────────────────── */
MACHINES['biggame'] = {
    name: "Big Game",  sub: "1980 · Stern Electronics · Widebody",
    tagline: "Bingo-card bonus that carries all game · drop targets fill X/Y/Z cards · 2×/3× multipliers · spinners and the B-I-G-G-A-M-E pocket",
    image: "images/big-game.webp",
    difficulty: "Medium", diffClass: "diff-medium", era: "SS",

    /* ── QUICK GUIDE (30–90 s read) ───────────────────────────── */
    quick: {
      goal: "Bonus and multipliers <strong>carry over from ball to ball</strong>. Fill the three <strong>bingo cards</strong> with the drop targets early to build bonus and 2×/3×, then <strong>rip the left spinners</strong> and collect the Big Game letters at the pocket.",
      steps: [
        { title: "Drop targets fill the cards",
          body: "Banks: <strong>1-2-3</strong> upper left, <strong>4-5-6</strong> upper right, <strong>7-8-9</strong> lower right. Each target lights its number on the lit card (X, Y or Z) = 1,000 bonus. One line on every card (or one full card) = <strong>2×</strong>; two lines on every card (or two full cards) = <strong>3×</strong>. All three cards full = 27,000 super bonus held all game." },
        { title: "Watch the lit card",
          body: "Top lanes, the top pop, the centre star and the slingshots rotate the lit card. Hit targets for numbers the lit card still needs. <strong>X lit</strong>: outer spinner 2,000 a spin. <strong>Z lit</strong>: right-lane stars 2,000." },
        { title: "Then the spinners",
          body: "B-I-G (top lanes) lights the <strong>inner spinner</strong> for 1,000 a spin. The <strong>outer spinner</strong> leads to the <strong>pocket</strong>: 5,000 per lit Big Game letter (+35,000 once Big Game was completed on an earlier ball). Letters: B-I-G top lanes, G-A left standups, M-E inlanes." },
      ],
      shots: [
        { name: "Drop target banks", why: "Card numbers = bonus and 2×/3×." },
        { name: "Outer left spinner → pocket", why: "Safest shot (Kineticist); collects the letters." },
        { name: "Inner left spinner", why: "1,000 a spin with B-I-G." },
      ],
      avoid: [
        "Don't fear the double flippers: both on one side fire together and a ball can't drain between them — trap freely.",
        "Hitting numbers the lit card already has wastes shots.",
      ],
      target: "Milestones: 2× by ball 2 = good game. 3× with most numbers lit and repeated letter collects = great.",
    },

    info: {
      stats: [
        { label: "Manufacturer", value: "Stern Electronics" },
        { label: "Year",         value: "1980 (March)" },
        { label: "Design",       value: "Harry Williams" },
        { label: "Art",          value: "Gerry Simkus, Doug Watson" },
        { label: "Production",   value: "2,713" },
        { label: "Format",       value: "Widebody, four flippers" },
        { label: "Display",      value: "7-digit numeric (first SS game with 7 digits)" },
      ],
      theme: "Jungle safari: lions, tigers, leopards, a giraffe and birds in jungle foliage, with three bingo cards (X, Y, Z) printed in the middle of the playfield.",
      features: [
        { name: "1-2-3 / 4-5-6 / 7-8-9 drop banks", desc: "500 per target and light that number on the lit card(s). A bank whose numbers are lit on all three cards scores 25,000 per completion." },
        { name: "Bingo cards X, Y, Z", desc: "1,000 bonus per lit number. Lines and full cards light 2× and 3×. All three full = lights reset and 27,000 super bonus carried." },
        { name: "Outer left spinner", desc: "2,000 a spin when X is lit; leads to the pocket." },
        { name: "Pocket (top left)", desc: "5,000 per lit Big Game letter, +35,000 if Big Game was completed on a previous ball." },
        { name: "Inner left spinner + star", desc: "1,000 a spin and 5,000 star when B-I-G is complete (100 / 500 otherwise)." },
        { name: "G-A standups (left)", desc: "Letters G and A; 5,000 each once both are lit." },
        { name: "Right lane stars", desc: "2,000 each when Z is lit." },
        { name: "Left side lane", desc: "Extra ball after one Big Game, special after two." },
        { name: "Double flippers", desc: "Two flippers per side fire together; no gap to drain between them." },
      ],
      scoring: [
        { key: "Bonus",                val: "1,000 per lit card number × 2× / 3×" },
        { key: "Super bonus",          val: "27,000 (all three cards full), held all game" },
        { key: "Pocket",               val: "5,000 per lit letter (+35,000)" },
        { key: "Inner spinner",        val: "100 / 1,000 a spin" },
        { key: "Outer spinner (X lit)", val: "2,000 a spin" },
        { key: "Full bank (all cards)", val: "25,000" },
        { key: "Extra scoring",        val: "5,000 per completed line at end of ball (from ball 3 on the usual setting; not multiplied)" },
      ],
      rules: [
        "Big Game letters complete once per ball; they carry over unless all 7 are lit.",
        "Card rotation: hard setting = one card lit at a time; easy setting = sometimes two cards at once.",
        "Tournament alternate rules: the lit card also rotates on a timer, and a secret 5× is lit by completing Big Game on a ball with 3×.",
        "Extra balls are void with comp settings; specials score 100,000 if set to points.",
        "Rules from The Pinball Primer; settings vary by machine.",
      ],
      benchmarks: [
        { score: "3× + repeated pocket collects", label: "Great game" },
        { score: "2× by ball 2", label: "Good game" },
        { score: "One card line on each card", label: "Baseline" },
      ],
      resources: [
        { name: "Rules (The Pinball Primer)", url: "https://pinballprimer.github.io/biggame_G4jQw.html", icon: "📖" },
        { name: "IPDB Entry",                url: "https://www.ipdb.org/machine.cgi?id=249", icon: "🎯" },
        { name: "Pinside Game Page",         url: "https://pinside.com/pinball/machine/big-game", icon: "🕹️" },
      ],
    },

    strategy: {
      skillShot: "None. The plunge feeds the B-I-G top lanes — each one lit counts toward the inner spinner value.",
      multiball: [],
      goal: "<strong>Build the carried bonus with the drop targets first, then score with the spinners and pocket.</strong> Because bonus and multipliers stay all game, early card progress pays on every later ball.",
      phases: [
        { num: "Phase 1", title: "Cards", body: "Ball 1–2: drop targets for numbers on the lit card; reach 2×." },
        { num: "Phase 2", title: "Lines", body: "Push for two lines per card (3×) or full cards for the 27,000 super bonus." },
        { num: "Phase 3", title: "Spinners", body: "Outer spinner (pocket) and inner spinner with B-I-G lit; collect letters each ball." },
      ],
      safeShots: [
        { name: "Outer left spinner", desc: "The safest shot on the table; feeds the pocket." },
        { name: "Trap on the lower flippers", desc: "No scissor drain between same-side flippers." },
      ],
      avoidShots: [
        { name: "Shots on the fly", desc: "Kineticist rates the table medium-high risk; shoot the drop banks from a trapped ball." },
      ],
      tips: [
        { head: "Card first", body: "Before a drop shot, check which card is lit and whether that number is already on it." },
        { head: "Last balls", body: "Completed lines also score 5,000 each at end of ball from ball 3 (usual setting)." },
        { head: "Pocket timing", body: "Collect the pocket after the inlanes and top lanes have lit more letters." },
      ],
      mistakes: [
        "Shooting spinners on ball 1 before any bonus is built.",
        "Ignoring the card rotation and repeating numbers already lit.",
      ],
    },

    hotspots: [
      { x: 10,   y: 31,   type: "safe",  label: "OS", name: "Outer Left Spinner", body: "2,000 a spin with X lit; leads to the pocket." },
      { x: 22,   y: 30,   type: "key",   label: "IS", name: "Inner Left Spinner", body: "1,000 a spin with B-I-G lit." },
      { x: 19,   y: 11,   type: "key",   label: "P",  name: "Pocket", body: "5,000 per lit Big Game letter (+35,000)." },
      { x: 26,   y: 22,   type: "info",  label: "★",  name: "Star Rollover", body: "5,000 with B-I-G lit." },
      { x: 34.5, y: 31,   type: "key",   label: "1",  name: "1-2-3 Drop Targets", body: "Card numbers 1-2-3." },
      { x: 74,   y: 30,   type: "key",   label: "4",  name: "4-5-6 Drop Targets", body: "Card numbers 4-5-6." },
      { x: 82.5, y: 52,   type: "key",   label: "7",  name: "7-8-9 Drop Targets", body: "Card numbers 7-8-9." },
      { x: 55,   y: 12,   type: "info",  label: "BIG", name: "B-I-G Top Lanes", body: "Letters B-I-G; rotate the lit card." },
      { x: 16,   y: 51,   type: "info",  label: "GA", name: "G-A Standups", body: "Letters G and A; 5,000 when both lit." },
      { x: 85,   y: 30,   type: "info",  label: "Z",  name: "Right Lane Stars", body: "2,000 each with Z lit." },
      { x: 45,   y: 60,   type: "info",  label: "C",  name: "Centre Star", body: "Changes the lit card." },
      { x: 7,    y: 47,   type: "info",  label: "EB", name: "Left Side Lane", body: "Extra ball / special after Big Game." },
      { x: 4.5,  y: 72,   type: "avoid", label: "!",  name: "Left Outlane", body: "10,000; special when lit." },
      { x: 87,   y: 72,   type: "avoid", label: "!",  name: "Right Outlane", body: "10,000; extra ball when lit." },
    ],
  };
