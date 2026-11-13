  /* ─── CATACOMB ───────────────────────────────────────────── */
MACHINES['catacomb'] = {
    name: "Catacomb",  sub: "1981 · Stern Electronics · M-200",
    tagline: "Drop-target bingo grid: bonus and 5× carried all game · 136,000 super bonus for a full grid · spinner to 1,500 a spin · backglass bagatelle",
    image: "images/catacomb.webp",
    difficulty: "Medium", diffClass: "diff-medium", era: "SS",

    /* ── QUICK GUIDE (30–90 s read) ───────────────────────────── */
    quick: {
      goal: "Fill the <strong>16-number grid</strong> by completing <strong>drop target banks</strong>: each lit number is bonus, and the bonus and multiplier <strong>carry over all game</strong>. A full grid (before the last ball) gives a <strong>136,000 super bonus</strong> on the next ball. Late in the game, switch to a <strong>1,500-a-spin spinner</strong>.",
      steps: [
        { title: "Short-plunge to the spinner-advance lane",
          body: "Always <strong>short-plunge</strong> into the far-right top lane: each pass raises the spinner 100 → 500 → 1,000 → 1,500 a spin. Bumper luck rarely gets you back up there." },
        { title: "Banks → grid numbers",
          body: "Banks A (left), B (top), C (upper right), D (middle right). Completing a bank lights the number that was lit in front of it. Each finished <strong>colour</strong> (4 numbers) raises bonus X (max 5×) and releases any locked balls for multiball. The two left top lanes freeze the lights on red or yellow." },
        { title: "Then the spinner",
          body: "On the last ball, or once the spinner is at 1,500 and you're at about 4×, rip the spinner. One number left? Pick it off for the 136,000 super bonus next ball." },
      ],
      shots: [
        { name: "Short plunge (right top lane)", why: "Spinner value up to 1,500." },
        { name: "A, C and D banks", why: "Direct flipper shots for grid numbers." },
        { name: "Spinner lane", why: "1,500 a spin; fast shots also hit B and C." },
      ],
      avoid: [
        "Forgetting the backglass bagatelle after each drain — it can win grid numbers.",
        "Playing the bagatelle on another player's turn (it's easy to do by mistake).",
      ],
      target: "Milestones: 4× with a 1,500 spinner = good game. A full grid (136,000 super bonus) = great.",
    },

    info: {
      stats: [
        { label: "Manufacturer", value: "Stern Electronics" },
        { label: "Year",         value: "1981 (October)" },
        { label: "Design",       value: "Joe Joos Jr." },
        { label: "Art",          value: "Larry Day" },
        { label: "System",       value: "Stern M-200" },
        { label: "Max multiplier", value: "5×" },
      ],
      theme: "Dungeon horror: a catacomb with dragons, a spider, a chained heroine, a caged prisoner and a monster.",
      features: [
        { name: "Drop banks A–D (3 each)", desc: "1,000 per target. A completed bank lights its rotating number on the grid. Numbers: A 1/6/9/14, B 16/11/8/3, C 4/7/12/15, D 13/10/5/2." },
        { name: "Grid (16 numbers)", desc: "1,000 × multiplier per lit number in bonus. A full colour = +1× (max 5×) and releases locked balls. Last ball: +34,000 per completed line. Full grid before the last ball = 136,000 super bonus next ball." },
        { name: "Top lanes", desc: "Far left: stop lights on red (lit: 5,000 + spot 6). Near left: stop on yellow (lit: 5,000 + spot 1). Far right: 1,000 + spinner value step." },
        { name: "Spinner", desc: "100 → 500 → 1,000 → 1,500 a spin. The one-way gate at the end of its lane: 1,000; extra ball at 4×, special at 5×." },
        { name: "Hidden lock saucers", desc: "Above the A and D banks; reached only by bumper luck. A lock feeds a new ball to plunge. Locked balls carry over between players and games." },
        { name: "Letter order", desc: "Completing A, B, C, D in order on one ball lights the inlanes for an extra ball." },
        { name: "Bagatelle (backglass)", desc: "After each drain: flip a ball into lanes A–D for 3,000 + that bank's lit number; the left flipper freezes a colour. Continues until you win a number you already have." },
        { name: "Inlanes / outlanes", desc: "Inlanes 1,000; outlanes 5,000 (special at 5×)." },
      ],
      scoring: [
        { key: "Grid number",     val: "1,000 × X in bonus" },
        { key: "Super bonus",     val: "136,000 (full grid)" },
        { key: "Last-ball lines", val: "34,000 each" },
        { key: "Spinner",         val: "100 → 1,500 a spin" },
        { key: "Specials",        val: "100,000 in competition/novelty" },
      ],
      rules: [
        "Bonus count and multiplier carry over between balls.",
        "Multiball has no special scoring; it's a safety net for more targets and spins.",
        "Extra balls are void with comp settings.",
        "Rules from The Pinball Primer; settings vary by machine.",
      ],
      benchmarks: [
        { score: "Full grid (5×) + super bonus", label: "Great game" },
        { score: "4× and 1,500 spinner", label: "Good game" },
        { score: "Two colours", label: "Baseline" },
      ],
      resources: [
        { name: "Rules (The Pinball Primer)", url: "https://pinballprimer.github.io/catacomb_GRoQ6.html", icon: "📖" },
        { name: "IPDB Entry",                url: "https://www.ipdb.org/machine.cgi?id=469", icon: "🎯" },
        { name: "Pinside Game Page",         url: "https://pinside.com/pinball/machine/catacomb", icon: "🕹️" },
      ],
    },

    strategy: {
      skillShot: "Short plunge into the far-right top lane: advances the spinner value.",
      multiball: [
        { name: "Multiball", balls: "2–3",
          locks: "Hidden saucers above the A and D banks (bumper luck only).",
          start: "Complete a colour on the grid — releases all locked balls.",
          jackpots: "None; extra balls in play for safer target and spinner shots.",
          tip: "Locked balls stay between players and games — check before you start." },
      ],
      goal: "<strong>Grid numbers first (carried bonus and 5×), spinner value on every plunge, then rip the spinner late.</strong>",
      phases: [
        { num: "Phase 1", title: "Grid", body: "A, C, D banks for numbers; freeze colours with the left top lanes." },
        { num: "Phase 2", title: "Colours", body: "Finish colours for bonus X and multiball." },
        { num: "Phase 3", title: "Spinner", body: "Last ball or at 1,500: spinner all day." },
      ],
      safeShots: [
        { name: "A, C and D banks", desc: "Shootable straight from the flippers." },
      ],
      avoidShots: [
        { name: "Banks whose numbers you have", desc: "No reward for repeats." },
      ],
      tips: [
        { head: "Bagatelle", body: "Use the left flipper to freeze the colour you need before flipping." },
        { head: "B bank", body: "Hit it with a fast spinner-lane shot or a ricochet off the A bank." },
      ],
      mistakes: [
        "Full-plunging instead of short-plunging to the spinner-advance lane.",
        "Skipping your bagatelle turn.",
      ],
    },

    hotspots: [
      { x: 25,   y: 37.5, type: "key",   label: "A",  name: "A Bank", body: "Grid numbers 1/6/9/14." },
      { x: 49.5, y: 17.5, type: "key",   label: "B",  name: "B Bank", body: "Grid numbers 16/11/8/3." },
      { x: 79,   y: 30.5, type: "key",   label: "C",  name: "C Bank", body: "Grid numbers 4/7/12/15." },
      { x: 81.5, y: 52,   type: "key",   label: "D",  name: "D Bank", body: "Grid numbers 13/10/5/2." },
      { x: 13,   y: 42,   type: "key",   label: "S",  name: "Spinner (left orbit)", body: "100 → 1,500 a spin." },
      { x: 63,   y: 17,   type: "key",   label: "+S", name: "Spinner-Advance Top Lane", body: "Short-plunge here." },
      { x: 29,   y: 14,   type: "info",  label: "R",  name: "Red-Stop Top Lane", body: "Freezes red; lit: spot 6." },
      { x: 39,   y: 14,   type: "info",  label: "Y",  name: "Yellow-Stop Top Lane", body: "Freezes yellow; lit: spot 1." },
      { x: 45,   y: 62,   type: "info",  label: "G",  name: "Grid", body: "16 numbers; colours raise bonus X." },
      { x: 9,    y: 51.5, type: "info",  label: "2",  name: "Lower-Left Standup", body: "Spots 2 when lit." },
      { x: 13,   y: 78,   type: "info",  label: "IN", name: "Left Inlane", body: "Extra ball after A-B-C-D in order." },
      { x: 6,    y: 80,   type: "avoid", label: "!",  name: "Left Outlane", body: "5,000; special at 5×." },
      { x: 86,   y: 80,   type: "avoid", label: "!",  name: "Right Outlane", body: "5,000; special at 5×." },
    ],
  };
