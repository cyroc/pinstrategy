  /* ─── STARS ──────────────────────────────────────────────── */
MACHINES['stars'] = {
    name: "Stars",  sub: "1978 · Stern Electronics · M-100",
    tagline: "Five star targets: spinner up to 1,000 a spin and a roaming special · two drop banks for 2×, 3× and specials · centre-target spinner gamble",
    image: "images/stars.webp",
    difficulty: "Medium-Hard", diffClass: "diff-medium-hard", era: "SS",

    /* ── QUICK GUIDE (30–90 s read) ───────────────────────────── */
    quick: {
      goal: "If specials score <strong>100,000</strong>: light all five <strong>star targets</strong> and chase the roaming special. Otherwise, build a spinner (stars or the drop-bank spinner) and rip it, and use the <strong>drop banks</strong> for 2×/3× bonus (max 57,000).",
      steps: [
        { title: "Star targets",
          body: "Five: two beside the top bumper, one above the spinner, two in the lower middle. Each hit = 500 + bonus advance; a lit star is collected and raises the <strong>star spinner</strong> by 200 a spin (max 1,000). All five lit = a <strong>Special roams</strong> between the star targets on switch hits." },
        { title: "Drop banks",
          body: "Award order (settings can change it): one bank → 2× bonus; both banks → 3×; both again → extra ball (Wow); then each completion of both = special. Each bank completion scores 3,000." },
        { title: "Centre-target gamble",
          body: "The <strong>left spinner</strong> between the banks pays 200 + 400 a spin per <strong>centre target</strong> knocked down (resets with the banks). Or leave a centre target standing after its side targets fall: it's then worth +7,000." },
      ],
      shots: [
        { name: "Star targets", why: "Spinner value and the 100K special." },
        { name: "Drop banks", why: "2×, 3×, specials." },
        { name: "Star spinner", why: "Up to 1,000 a spin." },
      ],
      avoid: [
        "This is a tough, unforgiving table — favour controlled shots over wild rips.",
        "Specials worth nothing (or one per ball already taken)? Switch to spinners and drop banks.",
      ],
      target: "Milestones: 3× and a 1,000 spinner = good game. Repeated 100,000 specials = great.",
    },

    info: {
      stats: [
        { label: "Manufacturer", value: "Stern Electronics" },
        { label: "Year",         value: "1978 (March)" },
        { label: "Design",       value: "Steve Kirk" },
        { label: "Art",          value: "Jorge Obregon" },
        { label: "Production",   value: "≈5,127" },
        { label: "System",       value: "Stern M-100" },
        { label: "Max bonus",    value: "19,000 × 3 = 57,000" },
      ],
      theme: "Outer space: rockets, planets, galaxies and a big star bumper at the top.",
      features: [
        { name: "Star targets (5)", desc: "500 + bonus advance; lit = star collected (one is spotted at ball start). All five: special roams between them." },
        { name: "Star spinner", desc: "200 a spin per lit star (max 1,000)." },
        { name: "Drop banks (2 × 3)", desc: "500 each; bank clear 3,000. Awards: 2×, 3×, extra ball, then specials (both banks reset on each award)." },
        { name: "Centre targets", desc: "Each one down adds 400 a spin to the left spinner; a centre target left standing after its side targets is worth +7,000." },
        { name: "Left spinner", desc: "Between the drop banks: 200 + 400 per centre target down; resets with the banks." },
        { name: "Rollovers", desc: "Centre and top buttons advance bonus when lit (switch hits toggle them)." },
        { name: "Inlanes / outlanes", desc: "500; when lit 3,000 + 3 advances." },
      ],
      scoring: [
        { key: "Star spinner",  val: "200 – 1,000 a spin" },
        { key: "Left spinner",  val: "200 – 1,000 a spin" },
        { key: "Centre target", val: "+7,000 (saved)" },
        { key: "Max bonus",     val: "57,000" },
        { key: "Specials",      val: "100,000 if set to points" },
      ],
      rules: [
        "Bonus X does not carry over.",
        "Settings change the drop awards (2×/3× from one or both banks; Wow can be skipped) and whether the star special repeats.",
        "Extra balls are void with comp settings.",
        "Rules from The Pinball Primer; settings vary by machine.",
      ],
      benchmarks: [
        { score: "Several 100K specials", label: "Great game" },
        { score: "3× + 1,000 spinner", label: "Good game" },
        { score: "2× + 3 stars", label: "Baseline" },
      ],
      resources: [
        { name: "Rules (The Pinball Primer)", url: "https://pinballprimer.github.io/stars_GrXEW.html", icon: "📖" },
        { name: "IPDB Entry",                url: "https://www.ipdb.org/machine.cgi?id=2366", icon: "🎯" },
        { name: "Pinside Game Page",         url: "https://pinside.com/pinball/machine/stars", icon: "🕹️" },
      ],
    },

    strategy: {
      skillShot: "None. One star is spotted at random at the start of each ball.",
      multiball: [],
      goal: "<strong>Specials worth points: stars, then the roaming special, repeatedly.</strong> Otherwise build a spinner and multiply the bonus with the drop banks.",
      phases: [
        { num: "Phase 1", title: "Stars", body: "Collect lit stars; spinner value rises." },
        { num: "Phase 2", title: "Banks", body: "2× and 3× from the drop banks." },
        { num: "Phase 3", title: "Special / spin", body: "Chase the roaming special or rip the best spinner." },
      ],
      safeShots: [
        { name: "Drop banks", desc: "Every clear moves the award ladder forward." },
      ],
      avoidShots: [
        { name: "Low-value spinner rips", desc: "With one star lit the star spinner pays only 200 a spin." },
      ],
      tips: [
        { head: "Settings", body: "Check whether the star special can repeat — it decides the whole plan." },
        { head: "Roaming special", body: "The lit special moves on switch hits; shoot the target it's on." },
      ],
      mistakes: [
        "Ripping spinners with few stars lit.",
        "Knocking down a centre target you meant to save for 7,000.",
      ],
    },

    hotspots: [
      { x: 36,   y: 29,   type: "key",   label: "D1", name: "Upper Drop Bank", body: "Bonus X / specials." },
      { x: 13,   y: 40,   type: "key",   label: "D2", name: "Left Drop Bank", body: "Bonus X / specials." },
      { x: 17,   y: 21,   type: "key",   label: "LS", name: "Left Spinner", body: "+400 a spin per centre target down." },
      { x: 76.5, y: 41,   type: "key",   label: "SS", name: "Star Spinner", body: "200 a spin per lit star." },
      { x: 33.5, y: 14.5, type: "key",   label: "★",  name: "Star Target (top left)", body: "Collect a star; special roams when all lit." },
      { x: 67,   y: 15,   type: "key",   label: "★",  name: "Star Target (top right)", body: "Collect a star." },
      { x: 72.5, y: 28,   type: "key",   label: "★",  name: "Star Target (above spinner)", body: "Collect a star." },
      { x: 12,   y: 58,   type: "info",  label: "★",  name: "Star Target (lower left)", body: "Collect a star." },
      { x: 77.5, y: 58,   type: "info",  label: "★",  name: "Star Target (lower right)", body: "Collect a star." },
      { x: 55,   y: 16,   type: "info",  label: "B",  name: "Star Bumper", body: "Top bumper." },
      { x: 44,   y: 10.5, type: "info",  label: "R",  name: "Top Rollover", body: "Bonus advance when lit." },
      { x: 45,   y: 61,   type: "info",  label: "R",  name: "Centre Rollover", body: "Bonus advance when lit." },
      { x: 7,    y: 81,   type: "avoid", label: "!",  name: "Left Outlane", body: "3,000 + 3 advances when lit." },
      { x: 84,   y: 81,   type: "avoid", label: "!",  name: "Right Outlane", body: "3,000 + 3 advances when lit." },
    ],
  };
