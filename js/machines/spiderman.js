  /* ─── SPIDER-MAN (STERN 2007) ────────────────────────────── */
MACHINES['spiderman'] = {
    name: "Spider-Man",  sub: "2007 · Stern · SAM (DMD) · also Vault Edition 2016",
    tagline: "Four villains, three battles each · Black Suit Multiball · white-arrow shot multipliers · Battle Royale · Super Hero wizard mode",
    image: "images/spider-man.webp",
    difficulty: "Medium-Hard", diffClass: "diff-medium-hard", era: "DMD",

    /* ── QUICK GUIDE (30–90 s read) ───────────────────────────── */
    quick: {
      goal: "Beat the four villains (<strong>Green Goblin, Doc Ock, Sandman, Venom</strong>) three times each, using <strong>white-arrow shot multipliers</strong> to make shots worth 2× and 3×. Two levels of each light <strong>Battle Royale</strong>; everything leads to <strong>Super Hero</strong> (250M).",
      steps: [
        { title: "Multiply shots",
          body: "Hit all six <strong>white arrows</strong> (both orbits, three ramps, Doc Ock): the next shot gets a <strong>2× multiplier</strong> for the rest of the ball, and a 40 s timed mode starts. Finish that mode to make it 3×. Best on the left orbit, side ramp and Doc Ock." },
        { title: "Villain battles",
          body: "<strong>Doc Ock</strong>: saucer shots start multiball rounds; stack them with Black Suit. <strong>Sandman</strong>: drop the center 3-bank, hit the targets/Sandman, then the hole. <strong>Green Goblin</strong>: complete the green targets. <strong>Venom</strong>: side ramp shots (from the upper right flipper)." },
        { title: "Black Suit Multiball",
          body: "Hit the <strong>Light Lock target</strong> to light a lock at the orbits, lock it, and repeat for 3 locks. Two jackpots at each major shot (pops raise the value), then super jackpots at the left ramp (4×) and side ramp (8×)." },
      ],
      shots: [
        { name: "Doc Ock saucer", why: "Easy multiball rounds; white arrow." },
        { name: "Side ramp", why: "Venom; 8× super jackpots; Super Skill Shot." },
        { name: "Left orbit", why: "Locks, timed modes, Battle Royale, Super Hero start." },
      ],
      avoid: [
        "The Spider Sense lane on an unlevel machine: it can feed the right outlane.",
        "Missing the side ramp from the lower flippers: it needs the upper right flipper.",
      ],
      target: "Milestones (estimates): one Black Suit Multiball and a villain = baseline. Battle Royale = good. Super Hero = great.",
    },

    info: {
      stats: [
        { label: "Manufacturer", value: "Stern Pinball" },
        { label: "Year",         value: "2007 (June); Vault Edition 2016" },
        { label: "Design",       value: "Steve Ritchie" },
        { label: "Code",         value: "Lyman Sheats" },
        { label: "Platform",     value: "Stern SAM (DMD)" },
        { label: "Models",       value: "Spider-Man, Black Suit edition, Vault Edition (same layout and rules; some mode names differ)" },
      ],
      theme: "The Sam Raimi film trilogy: Doc Ock with a magnet, a moving Sandman, Green Goblin and Venom figures. Image shows the Vault Edition art.",
      features: [
        { name: "White arrows and timed modes", desc: "Six white-arrow shots: 150K +12.5K each, the last 350K. Complete all six: the next shot gets 2× for the ball, and a 40 s timed mode starts (at once, or at the orbits; sources differ) (New Goblin, Daily Bugle, The Amazing Spider-Man, Bonesaw, Rescue MJ). Finishing it upgrades a multiplier to 3×. Playing all five is needed for Super Hero." },
        { name: "Sandman", desc: "Complete the moving 3-bank (or hit the strobing target): shoot the two inner targets and Sandman (double) — 6, 8, 12 hits, then the hole: 2M, 4M, 6M." },
        { name: "Doc Ock (multiball rounds)", desc: "A few saucer shots for each (sources say 1/3/more or 2/4/6): Fusion Malfunction (2 balls, 250K jackpots, super after 5), Bank Bust (3 balls, jackpot set by knocking the ball off the magnet), Armed at the Dock (4 balls). Stackable with Black Suit Multiball." },
        { name: "Green Goblin", desc: "Complete the five green targets, then hit one: 6 hits (any target), then 8 and 12 flashing-target hits: 3M, 4M, 6M." },
        { name: "Venom", desc: "Side ramp: Goo on You (hurry-up 1M), then 4 ramps to start each later battle; 6 and 8 hits score the Venom Value (250K–750K; spinner raises it)." },
        { name: "Black Suit Multiball", desc: "Each lock: Light Lock target (1 hit, +1 per Black Suit played), then a lit orbit; 3 locks. 12 jackpots (2 per major shot, 250K+), then supers: left ramp 4×, side ramp 8×." },
        { name: "Battle Royale → Super Hero", desc: "Two waves of villains light Battle Royale at the orbits (multiball: hit the four villain shots, then the right ramp for the Royale Jackpot, add-a-ball first two rounds). All 5 timed modes + Battle Royale + 3 waves: Super Hero at the left orbit, 4-ball, untimed, no shot multipliers: all six shots (2.5M), each villain (3M), all white shots red (3.5M), the Sandman hole (4M each; 3 + 1 per ball played), then the Spider Sense lane for 250M (it also adds a ball in phases 1–4). Then 2× playfield for the rest of the ball." },
      ],
      scoring: [
        { key: "Super Hero jackpot",  val: "250M" },
        { key: "Royale Jackpot",      val: "≥3.25M (first round)" },
        { key: "Black Suit supers",   val: "4× / 8× jackpot" },
        { key: "Villain completions", val: "2M–6M" },
        { key: "Super Skill Shot",    val: "500K (+50K)" },
        { key: "Skill shot",          val: "250K (+25K), +5 bonus X" },
      ],
      rules: [
        "Skill shots: WEB lane = 250K, +5× bonus, pops doubled. Soft plunge to the upper right flipper, then side ramp = Super Skill Shot (500K, Venom progress). On ball 3 they double or triple the bonus.",
        "Spider Sense targets light the lane behind them for awards tied to running modes, including an add-a-ball in multiball.",
        "Completing wave 1 lights an extra ball (off in competition); wave 3 lights a special at the Light Lock target.",
        "Last Chance: on the last ball, Battle Royale and Super Hero light the outlanes to replunge a drained ball.",
      ],
      benchmarks: [
        { score: "Super Hero (estimate)",            label: "Great game" },
        { score: "Battle Royale",                     label: "Good game" },
        { score: "Black Suit Multiball + a villain",  label: "Baseline" },
      ],
      resources: [
        { name: "Rulesheet (Tilt Forums wiki)",   url: "https://pinballrulesheets.com/stern/spider-man-rulesheet-wip.html", icon: "📖" },
        { name: "Strategy Guide (Pinball Primer)", url: "https://pinballprimer.github.io/spiderman_G5D94.html", icon: "📖" },
        { name: "Pinside Game Page",               url: "https://pinside.com/pinball/machine/spider-man", icon: "🕹️" },
      ],
    },

    strategy: {
      skillShot: "Soft plunge to the upper right flipper and shoot the side ramp: Super Skill Shot (500K, Venom progress; triples the bonus on ball 3). Short ball save afterwards.",
      multiball: [
        { name: "Black Suit Multiball", balls: 3, locks: "Light Lock target lights one lock at the orbits; repeat 3 times.", start: "Third lock.", jackpots: "12 jackpots, then supers at the left ramp (4×) and side ramp (8×).", tip: "Stack with a Doc Ock round; put a multiplier on the side ramp." },
        { name: "Doc Ock rounds", balls: "2–4", locks: "Saucer shots lower Doc Ock.", start: "Saucer.", jackpots: "Hit Doc Ock / lit shots; super at the saucer.", tip: "Safe time for risky shots like Light Lock and Sandman." },
        { name: "Battle Royale", balls: 4, locks: "Two waves of villains.", start: "Orbits.", jackpots: "Villain shots build the Royale Jackpot at the right ramp.", tip: "Loop the left orbit for points while the jackpot is lit." },
      ],
      goal: "<strong>White arrows for 2×/3× multipliers → Doc Ock rounds stacked with Black Suit → villain waves → Battle Royale → Super Hero.</strong>",
      phases: [
        { num: "Phase 1", title: "Multipliers", body: "Super Skill Shot, then the six white arrows; put 2× on the left orbit, side ramp or Doc Ock." },
        { num: "Phase 2", title: "Villains", body: "Doc Ock first (multiball), then Sandman, Green Goblin, Venom." },
        { num: "Phase 3", title: "Royale and Super Hero", body: "Two waves: Battle Royale. Finish wave 3 and all timed modes for Super Hero." },
      ],
      safeShots: [
        { name: "Right orbit", desc: "Easier than the left; locks and timed modes." },
        { name: "Doc Ock saucer", desc: "Easy, controlled kickout to the right ramp exit." },
      ],
      avoidShots: [
        { name: "Light Lock target in single ball", desc: "Narrow; save it for multiball when possible." },
      ],
      tips: [
        { head: "3× placement", body: "The 3× can go on a different shot than the 2×: cover two high-value shots." },
        { head: "Venom Value", body: "Spinner hits raise it (carried between balls, max 750K)." },
        { head: "Stacking", body: "Black Suit + a Doc Ock round = 4 balls; Black Suit doesn't stack with Battle Royale. Put a multiplier on the right ramp before Battle Royale (Royale Jackpot)." },
        { head: "Add-a-ball", body: "Complete the Spider Sense targets in multiball, then the lane: add-a-ball." },
      ],
      mistakes: [
        "Shooting the side ramp from the lower flippers.",
        "Letting timed modes run out: completing one turns 2× into 3×.",
      ],
    },

    hotspots: [
      { x: 14, y: 42, type: "key",   label: "LO", name: "Left Orbit", body: "Locks, timed modes, Battle Royale, Super Hero." },
      { x: 26, y: 44, type: "key",   label: "SR", name: "Side Ramp (Venom)", body: "From the upper right flipper; 8× supers." },
      { x: 36, y: 42, type: "key",   label: "LR", name: "Left Ramp", body: "4× supers; Venom (early)." },
      { x: 50, y: 41, type: "key",   label: "SA", name: "Sandman", body: "3-bank, inner targets, hole." },
      { x: 63, y: 41, type: "key",   label: "RR", name: "Right Ramp", body: "Royale Jackpot." },
      { x: 72, y: 41, type: "key",   label: "DO", name: "Doc Ock Saucer", body: "Multiball rounds." },
      { x: 86, y: 42, type: "key",   label: "RO", name: "Right Orbit", body: "Locks, timed modes." },
      { x: 19, y: 63, type: "info",  label: "GG", name: "Green Goblin Targets", body: "Five green standups." },
      { x: 28, y: 48.5, type: "info", label: "LL", name: "Light Lock Target", body: "Lights Black Suit locks; special." },
      { x: 74, y: 67, type: "info",  label: "SS", name: "Spider Sense Targets", body: "Light the lane behind them." },
      { x: 86, y: 60, type: "key",   label: "SL", name: "Spider Sense Lane", body: "Awards; add-a-ball; ends Super Hero (250M)." },
      { x: 70, y: 16, type: "info",  label: "WEB", name: "WEB Lanes", body: "Skill shot; bonus X." },
      { x: 77, y: 24, type: "info",  label: "P",  name: "Pop Bumpers", body: "Raise the Black Suit jackpot." },
      { x: 5,  y: 84, type: "avoid", label: "!",  name: "Left Outlane", body: "H of HERO; Last Chance when lit." },
      { x: 85, y: 84, type: "avoid", label: "!",  name: "Right Outlane", body: "O of HERO; Last Chance when lit." },
    ],
  };
