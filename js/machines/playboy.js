  /* ─── PLAYBOY (BALLY 1978) ───────────────────────────────── */
MACHINES['playboy'] = {
    name: "Playboy",  sub: "1978 · Bally · Bally -35 (solid state)",
    tagline: "Collect 5 keys for 2×, 3×, 5× bonus that carries over · Playboy Grotto worth 30,000 · drop targets and Playmate targets for outlane and star rollover awards",
    image: "images/playboy.webp",
    difficulty: "Medium", diffClass: "diff-medium", era: "SS",

    /* ── QUICK GUIDE (30–90 s read) ───────────────────────────── */
    quick: {
      goal: "Collect the five <strong>keys</strong> (four top lanes and the center target) for <strong>bonus X</strong> that carries over to later balls, then feed the <strong>Playboy Grotto</strong> as often as you can: with all five keys lit it's worth <strong>30,000 and 5 bonus advances</strong>. A strong ball 1 sets up the whole game.",
      steps: [
        { title: "Keys",
          body: "Keys 1–4 are the <strong>top lanes</strong>, key 5 the <strong>center standup</strong> below the pops. Each set of five raises bonus X: <strong>2×, 3×, 5×</strong>, and it <strong>carries over</strong> between balls. Later sets are specials (nothing in competition). Partial sets may reset between balls (setting)." },
        { title: "Playboy Grotto",
          body: "Each key you've collected this ball lights a number in the <strong>Grotto</strong> (the left-side kickout lane). It pays 1,000 and a bonus advance per lit number, plus 25,000 with all five. Reach it with a strong <strong>right orbit</strong> shot or from the pops; it kicks the ball back up to the top lanes." },
        { title: "Bonus",
          body: "Bonus maxes at 39,000; once it reaches the <strong>20,000 Super Bonus</strong> it never drops below 20,000 for the rest of the game. At 5× that's at least 100,000 every ball. Bonus advances: the center key 5, right orbit, star rollover, lit Playmates and the Grotto." },
      ],
      shots: [
        { name: "Right orbit", why: "Feeds the Grotto and top lanes; bonus advance; 5,000 when lit." },
        { name: "Center key 5 target", why: "Completes the key set." },
        { name: "Drop targets (right)", why: "First bank lights the outlanes for 25,000 (drain insurance)." },
      ],
      avoid: [
        "Draining ball 1 cheaply: bonus X and the Super Bonus carry over, so early progress pays three times.",
        "Tilting a 5× bonus.",
      ],
      target: "Milestones (estimates; factory replay levels are 400,000 and 660,000): about 250,000 = baseline. 400,000 = good. 650,000+ = great.",
    },

    info: {
      stats: [
        { label: "Manufacturer", value: "Bally" },
        { label: "Year",         value: "1978" },
        { label: "Design",       value: "Jim Patla" },
        { label: "Art",          value: "Paul Faris" },
        { label: "Platform",     value: "Bally -35 (solid state)" },
        { label: "Production",   value: "About 18,250" },
      ],
      theme: "Playboy magazine: Hugh Hefner on the backglass, the Playboy Mansion Grotto and Playmates on the playfield. Not the Data East (1989) or Stern (2002) Playboy.",
      features: [
        { name: "Keys and bonus X", desc: "Keys 1–4 (top lanes) and 5 (center standup): 500 each (the manual lists only key 5 as a bonus advance; the Primer says all keys). Sets give 2×, 3×, 5×, then specials (no award in competition). Bonus X always carries over. Settings can tie keys 1+4 and 2+3 together." },
        { name: "Playboy Grotto", desc: "Left-side kickout lane: 1,000 and a bonus advance per lit key number, +25,000 with all five lit (30,000 and 5 advances in all). Kicks the ball back up toward the top lanes." },
        { name: "Drop targets", desc: "Five on the right, 500 each. First completion lights the outlanes for 25,000 (or one alternating outlane, by setting); second completion scores a special (no award in competition)." },
        { name: "Playmate targets and star rollover", desc: "Five left standups: 500, and a bonus advance once lit. All five light the star rollover above them for an extra ball, then a special the second time (neither counts in competition). The rollover always scores 5,000 and a bonus advance." },
        { name: "Right orbit", desc: "500, or 5,000 when lit (switches alternate it), plus a bonus advance." },
      ],
      scoring: [
        { key: "Grotto (all keys lit)", val: "30,000 + 5 advances" },
        { key: "Max bonus",             val: "39,000 × 5 = 195,000" },
        { key: "Lit outlane",           val: "25,000" },
        { key: "Star rollover",         val: "5,000 + bonus advance" },
        { key: "Right orbit (lit)",     val: "5,000" },
      ],
      rules: [
        "Bonus resets to 1,000 each ball until it reaches the 20,000 Super Bonus, then to 20,000.",
        "Lit extra balls, specials and key sets in progress can each be set to carry over or not.",
        "No setting turns specials into points: in novelty/competition mode specials give no award, and the playfield extra ball has no separate disable setting.",
      ],
      benchmarks: [
        { score: "650,000+ (estimate)", label: "Great game" },
        { score: "400,000 (factory 1st replay)", label: "Good game" },
        { score: "About 250,000",               label: "Baseline" },
      ],
      resources: [
        { name: "Strategy Guide (Pinball Primer)", url: "https://pinballprimer.github.io/playboy_GrkOB.html", icon: "📖" },
        { name: "Operations Manual (PDF)",         url: "https://www.arcade-museum.com/manuals-pinball/P/Playboy_Bally_OPS.pdf", icon: "📄" },
        { name: "Pinside Game Page",               url: "https://pinside.com/pinball/machine/playboy", icon: "🕹️" },
      ],
    },

    strategy: {
      skillShot: "None; the plunge feeds the top key lanes.",
      multiball: [],
      goal: "<strong>Key sets for bonus X on ball 1 → Super Bonus → Grotto over and over.</strong>",
      phases: [
        { num: "Phase 1", title: "Keys", body: "Top lanes and the center 5 target for 2×, 3×, 5×." },
        { num: "Phase 2", title: "Super Bonus", body: "Reach 20,000 bonus once so it carries over." },
        { num: "Phase 3", title: "Grotto", body: "Right orbit and pops into the Grotto with all keys lit." },
      ],
      safeShots: [
        { name: "Right orbit", desc: "Feeds the top lanes and the Grotto." },
        { name: "Center target", desc: "Key 5; easy from either flipper." },
      ],
      avoidShots: [
        { name: "Drop targets after the first bank", desc: "The second bank's special gives nothing in competition." },
      ],
      tips: [
        { head: "Nudge to the Grotto", body: "The Grotto is fed from the pops and a strong right orbit; a little nudge helps." },
        { head: "Outlane value", body: "After the first drop bank, an outlane drain at least scores 25,000." },
      ],
      mistakes: [
        "Ignoring keys on ball 1, when bonus X carries over for the rest of the game.",
      ],
    },

    hotspots: [
      { x: 45, y: 16, type: "key",   label: "K",  name: "Key Lanes 1–4", body: "Keys; bonus X sets." },
      { x: 44, y: 44.5, type: "key", label: "5",  name: "Key 5 Target", body: "Completes the key set." },
      { x: 5,  y: 38, type: "key",   label: "G",  name: "Playboy Grotto", body: "30,000 with all keys lit." },
      { x: 84, y: 43, type: "key",   label: "RO", name: "Right Orbit", body: "Grotto feed; bonus advance." },
      { x: 70, y: 43, type: "info",  label: "DT", name: "Drop Targets", body: "First bank lights the outlanes for 25,000." },
      { x: 11, y: 55, type: "info",  label: "PM", name: "Playmate Targets", body: "Light the star rollover." },
      { x: 15, y: 38, type: "info",  label: "★",  name: "Star Rollover", body: "5,000 and a bonus advance." },
      { x: 6,  y: 73, type: "avoid", label: "!",  name: "Left Outlane", body: "25,000 when lit." },
      { x: 84, y: 73, type: "avoid", label: "!",  name: "Right Outlane", body: "25,000 when lit." },
    ],
  };
