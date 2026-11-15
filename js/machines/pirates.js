  /* ─── PIRATES OF THE CARIBBEAN (STERN 2006) ──────────────── */
MACHINES['pirates'] = {
    name: "Pirates of the Caribbean",  sub: "2006 · Stern · S.A.M. (DMD)",
    tagline: "Tortuga Multiball for playfield multipliers · sink ships for Kraken battles · Dead Man's Chest Heart Multiball · complete the compass for Four Winds",
    image: "images/pirates-of-the-caribbean.webp",
    difficulty: "Medium-Hard", diffClass: "diff-medium-hard", era: "DMD",

    /* ── QUICK GUIDE (30–90 s read) ───────────────────────────── */
    quick: {
      goal: "Use <strong>Tortuga Multiball</strong> (left ramp) to build a <strong>playfield multiplier</strong>, and stack it with <strong>ship sinkings</strong> (Battle the Kraken) and <strong>Heart</strong> jackpots from the <strong>Dead Man's Chest</strong>. Progress comes from completing the <strong>compass</strong> in the middle.",
      steps: [
        { title: "Tortuga (left ramp)",
          body: "Left ramp shots spin the ball on the <strong>turntable</strong> to spell TORTUGA; then a <strong>timed lock</strong>: lock up to three balls at the left ramp within 10 s each. Multiball starts with a playfield multiplier = balls in play; it drops to 1× after a few seconds — re-raise it +1× per ball shot back onto the turntable." },
        { title: "Ships → Kraken",
          body: "Hit the <strong>ship</strong> to destroy the sails, then sink it (2 hits each for the first ship, +1 per ship). Sinking starts <strong>Battle the Kraken</strong> (2-ball): ship-lane jackpots drain its health, then a 3M hurry-up and Victory Jig. The fourth ship also starts Fight Davy Jones." },
        { title: "Chest → Heart",
          body: "Spell KEY (top lanes or the <strong>chest</strong>), then chest shots spell HEART. Each letter lights jackpots at the left orbit, ship, centre lane and right orbit. HEART lights <strong>Heart Multiball</strong> (3-ball); spell HEART again in it for the super (2M+)." },
      ],
      shots: [
        { name: "Left ramp", why: "Tortuga letters, locks, playfield X." },
        { name: "Ship", why: "Sink ships; Kraken jackpots." },
        { name: "Dead Man's Chest", why: "KEY / HEART; Heart Multiball." },
      ],
      avoid: [
        "Forgetting to build the jackpot: unlit left-orbit and centre-saucer shots add 25K each (max 2M).",
        "Draining a Tortuga timed lock with one ball on the turntable — the multiball is lost.",
      ],
      target: "Milestones: a Kraken defeated plus Tortuga = good game. Heart Multiball stacked with Tortuga or Victory Jig = great.",
    },

    info: {
      stats: [
        { label: "Manufacturer", value: "Stern Pinball" },
        { label: "Year",         value: "2006 (July)" },
        { label: "Design",       value: "Dennis Nordman" },
        { label: "Software",     value: "Dwight Sullivan, Lonnie Ropp" },
        { label: "Art",          value: "Kevin O'Connor" },
        { label: "System",       value: "Stern S.A.M., dot-matrix display" },
        { label: "Max bonus X",  value: "30×" },
      ],
      theme: "Disney's Pirates of the Caribbean films: Jack Sparrow, Davy Jones, the Kraken, Tortuga, Port Royal and the Dead Man's Chest.",
      features: [
        { name: "Upper playfield (full plunge)", desc: "Parlay hole: bonus X + PARLAY letters (outlane ball save). Top lanes: Rum Combo (left), Walk the Plank (centre, 250K → 1M), Broadside (right, finishes a ship with sails down)." },
        { name: "Tortuga turntable (left ramp)", desc: "TORTUGA letters, then a timed 3-ball lock. Multiball starts at playfield X = balls in play; balls back on the turntable add +1×." },
        { name: "Ship", desc: "Sails then hull (2+ hits each). Sinking starts Battle the Kraken; the fourth ship (Terpsichore) also starts Fight Davy Jones (4-ball)." },
        { name: "Dead Man's Chest", desc: "KEY each ball, then HEART letters (kept between balls). HEART = Heart Multiball; spell it again inside for the super jackpot." },
        { name: "Centre flip ramp", desc: "JACK letters → a 2M hurry-up that counts down fast." },
        { name: "Pirates targets (6)", desc: "Green standups; all six in single-ball play light Liar's Dice (mystery) at the centre saucer." },
        { name: "Compass", desc: "Two awards per direction; both flash the arrow, collected at the centre lane. North Collect Crew, South Max Jackpot (2M), West extra ball, East special. All four = Four Winds Multiball." },
        { name: "Treasure", desc: "Side lanes and their targets: 5,000 bonus each, carried all game." },
        { name: "Catch the Wind", desc: "Lit inlane → opposite orbit while flashing = jackpot value." },
        { name: "Sword Fight", desc: "Pop bumper hits (20, then +2): +2× bonus." },
      ],
      scoring: [
        { key: "Jackpot",          val: "350K → 2M (+25K per unlit left orbit / centre saucer)" },
        { key: "Heart super",      val: "2M + 150K per jackpot" },
        { key: "Kraken hurry-up",  val: "3M → 1M" },
        { key: "Davy Jones",       val: "5M on defeat" },
        { key: "Super Duper Skill Shot", val: "10M" },
      ],
      rules: [
        "Tortuga's playfield multiplier falls back to 1× a few seconds into the multiball; re-raise it with turntable shots.",
        "The jackpot carries between balls until it passes 1M, then resets to 1M each ball.",
        "Extra balls (West arrow, Liar's Dice, treasure) are void with comp settings.",
        "Rules from The Pinball Primer.",
      ],
      benchmarks: [
        { score: "Heart MB stacked with Tortuga / Kraken", label: "Great game" },
        { score: "Kraken defeated + Tortuga MB", label: "Good game" },
        { score: "One ship sunk", label: "Baseline" },
      ],
      resources: [
        { name: "Rules (The Pinball Primer)", url: "https://pinballprimer.github.io/pirates_GR7ZX.html", icon: "📖" },
        { name: "IPDB Entry",                url: "https://www.ipdb.org/machine.cgi?id=5163", icon: "🎯" },
        { name: "Pinside Game Page",         url: "https://www.pinside.com/pinball/machine/1166", icon: "🕹️" },
      ],
    },

    strategy: {
      skillShot: "Short plunge, then the lower-left side lane = Super Skill Shot (3M); if the ball crosses to the lower-right side lane = Super Duper (10M). A full plunge reaches the Parlay hole / top lanes.",
      multiball: [
        { name: "Tortuga Multiball", balls: "2–4", locks: "TORTUGA at the turntable, then the timed lock.", start: "Third lock or the 10 s timer.", jackpots: "None — it's a playfield multiplier (balls on the turntable).", tip: "Start ships and Heart during it." },
        { name: "Battle the Kraken", balls: 2, locks: "Sink a ship.", start: "Automatically.", jackpots: "Ship-lane jackpots; 3M hurry-up; Victory Jig.", tip: "Stack it with Heart Multiball for big shots." },
        { name: "Heart Multiball", balls: 3, locks: "KEY then HEART at the chest.", start: "Chest shot.", jackpots: "Four jackpot shots; HEART again for the super.", tip: "Max Jackpot (South compass) makes every jackpot 2M." },
        { name: "Four Winds", balls: 4, locks: "Complete all compass arrows.", start: "Centre lane saucer.", jackpots: "Four hurry-up winds, then Gauntlet of Pirates.", tip: "The wizard mode." },
      ],
      goal: "<strong>Stack multiballs: Tortuga's playfield X with ship sinkings and Heart jackpots.</strong> Build the jackpot value early with unlit orbit/centre shots.",
      phases: [
        { num: "Phase 1", title: "Set up", body: "Left ramp for TORTUGA; KEY and HEART at the chest; ship hits." },
        { num: "Phase 2", title: "Stack", body: "Tortuga MB with a ship sinking or Heart Multiball." },
        { num: "Phase 3", title: "Compass", body: "North and South first; then West; East for Four Winds." },
      ],
      safeShots: [
        { name: "Left ramp", desc: "Turntable feeds back safely and builds Tortuga." },
      ],
      avoidShots: [
        { name: "Centre saucer from the pops", desc: "Liar's Dice / extra ball don't count if the last switch was a pop bumper." },
      ],
      tips: [
        { head: "Rum Combo", body: "Left top lane → centre flip ramp → left orbit loops for growing combos." },
        { head: "Broadside", body: "With a ship's sails down, the right top lane finishes the ship in one go." },
        { head: "Bonus", body: "Pop bumper Sword Fights add +2× bonus; treasure carries all game." },
      ],
      mistakes: [
        "Playing Tortuga without another mode to multiply.",
        "Forgetting KEY must be re-earned every ball before chest shots give HEART letters.",
      ],
    },

    hotspots: [
      { x: 19,   y: 13,   type: "key",   label: "T",  name: "Tortuga Turntable", body: "TORTUGA letters and locks." },
      { x: 24,   y: 41,   type: "key",   label: "LR", name: "Left Ramp", body: "To the turntable; playfield X in Tortuga." },
      { x: 35,   y: 39,   type: "key",   label: "S",  name: "Ship Shot", body: "Sails and hull; Kraken jackpots." },
      { x: 78,   y: 41,   type: "key",   label: "C",  name: "Dead Man's Chest", body: "KEY / HEART; Heart Multiball." },
      { x: 56,   y: 43,   type: "info",  label: "J",  name: "Centre Flip Ramp", body: "JACK hurry-up; Rum Combo." },
      { x: 47,   y: 39,   type: "info",  label: "CL", name: "Centre Lane / Saucer", body: "Compass awards; Liar's Dice." },
      { x: 74,   y: 14,   type: "info",  label: "P",  name: "Parlay Hole / Top Lanes", body: "Bonus X; Rum Combo, Walk the Plank, Broadside." },
      { x: 45,   y: 78,   type: "info",  label: "N",  name: "Compass", body: "Four directions → Four Winds." },
      { x: 9,    y: 62,   type: "info",  label: "TR", name: "Lower-Left Side Lane", body: "Treasure; skill shot." },
      { x: 85,   y: 63,   type: "info",  label: "TR", name: "Lower-Right Side Lane", body: "Treasure; Super Duper skill shot." },
      { x: 35,   y: 20,   type: "info",  label: "SH", name: "Ship Toy", body: "Rocks during Davy Jones — hit the toy itself." },
      { x: 4,    y: 80,   type: "avoid", label: "!",  name: "Left Outlane", body: "Parlay ball save when lit." },
      { x: 86,   y: 80,   type: "avoid", label: "!",  name: "Right Outlane", body: "Parlay ball save when lit." },
    ],
  };
