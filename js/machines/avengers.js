  /* ─── THE AVENGERS (STERN 2012) ──────────────────────────── */
MACHINES['avengers'] = {
    name: "The Avengers",  sub: "2012 · Stern · SAM (DMD) · Pro",
    tagline: "Collect six Avengers · Hulk and Loki multiballs · Tesseract jackpots · Assault on the Helicarrier · Battle for Earth",
    image: "images/the-avengers.webp",
    difficulty: "Medium-Hard", diffClass: "diff-medium-hard", era: "DMD",

    /* ── QUICK GUIDE (30–90 s read) ───────────────────────────── */
    quick: {
      goal: "Collect all six <strong>Avengers</strong> by playing their modes, then play <strong>Assault on the Helicarrier</strong>. On the way, the <strong>Hulk</strong> and <strong>Loki multiballs</strong> are the big scorers. Modes carry over between balls.",
      steps: [
        { title: "Hulk first",
          body: "Knock down the <strong>H-U-L-K drop targets</strong> 3 times, then shoot the <strong>Black Widow ramp</strong>: it drops the ball into the Hulk saucer for <strong>Hulk Multiball</strong> (4 balls). That collects Hulk at once. Jackpots: the drop targets, then hit Hulk himself, then the drops again for double jackpots, then the <strong>Hulk Smash</strong> target behind his arm for the super jackpot." },
        { title: "Loki Multiball",
          body: "Light all four <strong>L-O-K-I</strong> in/outlanes (flippers move the lit lanes), then lock 3 balls by shooting the <strong>Hawkeye lane</strong> onto the Loki ramp. Hit Hawkeye, Black Widow or Iron Man twice each (jackpot, then double), then Hulk twice, then Captain America twice. Then the Hawkeye lane again: the super jackpot equals everything you collected. The next round doubles." },
        { title: "Avengers modes",
          body: "Hawkeye, Captain America, Black Widow, Iron Man: their shot 4× starts the mode (Thor: complete the 4 targets 3×). Finishing a mode pays 2M and 2× that shot for the ball. When all six portraits above the flippers are lit and the Loki lock lamps strobe, shoot the Hawkeye lane into the Loki lock for the Helicarrier." },
      ],
      shots: [
        { name: "Hawkeye lane (outer left)", why: "Easiest shot; Loki locks; wizard mode starts." },
        { name: "Black Widow ramp", why: "Starts Hulk Multiball via the saucer." },
        { name: "Tesseract", why: "COSMIC letters; stack its mode with a multiball." },
      ],
      avoid: [
        "Balls leaving the pops: the right star posts and sling can send them straight down the right outlane, even before your first flip.",
        "Tilting: the bonus (character shots × bonus X) is worth keeping.",
      ],
      target: "Milestones (estimates): Hulk Multiball and one mode = baseline. Loki super jackpot and three Avengers = good. Assault on the Helicarrier = great.",
    },

    info: {
      stats: [
        { label: "Manufacturer", value: "Stern Pinball" },
        { label: "Year",         value: "2012 (November)" },
        { label: "Design",       value: "George Gomez" },
        { label: "Sound",        value: "David Thiel" },
        { label: "Platform",     value: "Stern SAM (DMD)" },
        { label: "Models",       value: "Pro (this guide), Premium, Avengers LE and Hulk LE (Premium/LE add two ramps)" },
      ],
      theme: "The 2012 Marvel film: assemble Thor, Hawkeye, Captain America, the Hulk, Black Widow and Iron Man to beat Loki. A moving Hulk figure and a free-spinning Tesseract cube are the centrepieces.",
      features: [
        { name: "Avenger modes", desc: "Thor: complete T-H-O-R 3×, then hit the strobing target. Hawkeye: outer left lane 4×, then 7 more (H-A-W-K-E-Y-E). Captain America: inner left orbit 4×, then pop bumpers drain the enemy. Black Widow: ramp 4×, then 10 more. Iron Man: right orbit 4×, then 7 more. Completing a mode = 2M (Thor: not stated) and 2× on that shot for the ball. Modes carry over between balls." },
        { name: "Hulk Multiball (4 balls)", desc: "H-U-L-K drops 3×, then the saucer (easiest via the Black Widow ramp diverter). Jackpots: 3 drop targets (100K+), Hulk himself 4× (100K; 8× the second time), each drop once (200K double), then Hulk Smash super jackpot (1M)." },
        { name: "Loki Multiball (3 balls)", desc: "L-O-K-I lights all 3 locks the first time (later: 1 lock). Lock at the Hawkeye lane / Loki ramp. Jackpot + double at Hawkeye, Black Widow and Iron Man (any order), then Hulk, then Captain America; super jackpot (sum of all) at the Loki lock. Next round values double." },
        { name: "Tesseract", desc: "Any spin lights a C-O-S-M-I-C letter; spins build the Cosmic value. Completing it starts Tesseract mode (25 s): every major shot scores the Cosmic value, and 15 spins per letter spell C-O-S-M-I-C again for a super jackpot at the lit shot (spin the cube to move it). Can start during multiballs." },
        { name: "S.H.I.E.L.D. mystery", desc: "Hit both lower targets (Coulson, Hill), then Nick Fury above them: add-a-ball, more time, points and more. Awards stack." },
        { name: "Assault on the Helicarrier", desc: "All six Avengers flashing or solid: shoot the Hawkeye lane into the Loki lock. Single ball; each Avenger shot twice (12 shots, 550K +50K each), then the lock for the super jackpot (sum, about 9.9M)." },
        { name: "Head-to-head + Battle for Earth", desc: "Light an Avenger's inserts a second time to start a 2-ball challenge vs another Avenger or Loki. Win all (Hulk: his multiball super jackpot) to light Battle for Earth at the Loki lock: all shots 4× each (500K, +50K each), super jackpot at the Loki lock, repeatable while 2 balls stay in play." },
      ],
      scoring: [
        { key: "Helicarrier super jackpot", val: "≈9.9M (+1M start)" },
        { key: "Avenger mode complete",     val: "2M (Hawkeye, Cap, Black Widow, Iron Man)" },
        { key: "Hulk Smash super jackpot",  val: "1M" },
        { key: "Loki super jackpot",        val: "Sum of the round's jackpots (≈1.5M estimate; shot multipliers apply; next round doubled)" },
        { key: "Hulk / Loki jackpots",      val: "100K–200K" },
        { key: "Skill shot",                val: "250K (+25K each, +100K hands-free)" },
        { key: "End-of-ball bonus",         val: "Shots per Avenger × bonus X" },
      ],
      rules: [
        "Skill shot: full plunge; move the flashing top lane with the flippers. A soft plunge just feeds the right flipper and never counts as a lock.",
        "Top lanes: light all six Avengers inserts for +1× bonus.",
        "Hulk Multiball and Loki Multiball can't run together.",
        "Values are from Pinball News' review of v1.3. Later code (to v1.70) changed details: new bonus values and a Captain America skill shot (v1.4); Captain America pops 20K; the spinner can count as a Black Widow ramp shot (default on); a ramp-diverter setting; Hulk drops stay down in the Helicarrier and Battle for Earth; Battle for Earth has 4 levels; a Helicarrier ball save; virtual Loki locks and Helicarrier carry-over are settings; S.H.I.E.L.D. no longer gives bonus holds.",
      ],
      benchmarks: [
        { score: "Assault on the Helicarrier (estimate)", label: "Great game" },
        { score: "Loki super jackpot + 3 Avengers",       label: "Good game" },
        { score: "Hulk Multiball + one mode",             label: "Baseline" },
      ],
      resources: [
        { name: "In-Depth Review & Rules (Pinball News)", url: "https://www.pinballnews.com/games/avengers/index5.html", icon: "📖" },
        { name: "Code Readme (Stern)",                    url: "https://sternpinball.com/wp-content/uploads/2019/03/AVGR_LE_readme.txt", icon: "📄" },
        { name: "Pinside Game Page",                      url: "https://pinside.com/pinball/machine/the-avengers", icon: "🕹️" },
      ],
    },

    strategy: {
      skillShot: "Plunge at full strength and move the flashing top lane (flippers) to where the ball is heading: 250K, +25K each time, +100K if you don't touch the flippers. Not available after a lock or ball save.",
      multiball: [
        { name: "Hulk Multiball", balls: 4, locks: "None: complete H-U-L-K 3×.", start: "Hulk saucer, easiest via the Black Widow ramp diverter.", jackpots: "Drop targets → Hulk himself → each drop once (double) → Hulk Smash super jackpot (1M); repeats.", tip: "Double jackpots: hit each flashing drop once (hitting a down/unlit one resets the bank). For the super jackpot, a drop or two down makes Hulk Smash easier; the long left guide helps." },
        { name: "Loki Multiball", balls: 3, locks: "3 at the Loki ramp (via the Hawkeye lane) after L-O-K-I.", start: "Third lock.", jackpots: "Pick Hawkeye, Black Widow or Iron Man: 2 shots each; then Hulk ×2, Captain America ×2; super jackpot at the Loki lock.", tip: "Start with the easiest shot (Hawkeye); values double after each super jackpot. In the Hulk phase, knock down only one or two drops to see Hulk; all four just reset." },
        { name: "Head-to-head challenges", balls: 2, locks: "None: light an Avenger's inserts a second time.", start: "Automatically.", jackpots: "200K +50K per shot.", tip: "Long ball save at the start; advance other Avengers to add balls." },
      ],
      goal: "<strong>Hulk Multiball → Loki Multiball → finish the easy Avengers (Hawkeye, Thor, Captain America) → Assault on the Helicarrier.</strong> Spin the Tesseract during multiballs.",
      phases: [
        { num: "Phase 1", title: "Hulk", body: "H-U-L-K drops 3×, Black Widow ramp to the saucer. Starting the multiball collects Hulk." },
        { num: "Phase 2", title: "Loki and the easy Avengers", body: "Loop the Hawkeye lane (Hawkeye progress + Loki locks); finish Thor at the left targets and Captain America in the pops." },
        { num: "Phase 3", title: "Hard Avengers and the Helicarrier", body: "Black Widow (14 ramps; fewer on later code if the spinner counts) and Iron Man (11 right orbits) take longest. All six flashing → Hawkeye lane." },
      ],
      safeShots: [
        { name: "Hawkeye lane", desc: "Long lead-in; the switch is partway up, so weak shots still count for Hawkeye (locks and wizard starts need the ball to reach the Loki ramp)." },
        { name: "Thor targets", desc: "Wide target bank on the left." },
      ],
      avoidShots: [
        { name: "Iron Man right orbit", desc: "No lead-in; misses often hit the red post on the right." },
        { name: "Hulk saucer directly", desc: "Hard to hit; use the Black Widow ramp diverter instead." },
      ],
      tips: [
        { head: "Stack Tesseract", body: "Start Tesseract mode during a multiball: every major shot then scores the Cosmic value." },
        { head: "S.H.I.E.L.D.", body: "Mystery awards stack; save them for add-a-ball during multiballs and challenges." },
        { head: "Modes carry over", body: "Avenger modes continue next ball (Hulk Multiball and the Helicarrier don't), so don't rush risky shots." },
        { head: "Bonus", body: "In v1.3 Hawkeye shots paid the most bonus (30K each; values changed in v1.4); light the six top-lane inserts for bonus X." },
      ],
      mistakes: [
        "Short-plunging into the Loki lock: it never counts as a lock.",
        "Knocking down all four Hulk drops when you need to hit Hulk in Loki Multiball or Battle for Earth: they reset.",
      ],
    },

    hotspots: [
      { x: 9,    y: 26,   type: "key",   label: "HE", name: "Hawkeye Lane (outer left)", body: "Hawkeye; Loki locks; Helicarrier and Battle for Earth start." },
      { x: 21.5, y: 26.5, type: "key",   label: "CA", name: "Captain America Orbit (inner left)", body: "Captain America; feeds the top lanes and pops." },
      { x: 73,   y: 37,   type: "key",   label: "BW", name: "Black Widow Ramp", body: "Black Widow; diverter drops the ball into the Hulk saucer." },
      { x: 86,   y: 30,   type: "key",   label: "IM", name: "Iron Man Orbit (inner right)", body: "Iron Man; feeds the top lanes." },
      { x: 42,   y: 27,   type: "key",   label: "H",  name: "H-U-L-K Drop Targets", body: "3 completions qualify Hulk Multiball; jackpots during it." },
      { x: 40,   y: 13,   type: "key",   label: "HK", name: "The Hulk", body: "Jackpots in Hulk and Loki multiballs." },
      { x: 28.5, y: 31,   type: "info",  label: "SA", name: "Hulk Saucer", body: "Starts Hulk Multiball; extra ball." },
      { x: 26,   y: 15,   type: "info",  label: "HS", name: "Hulk Smash Target", body: "Hulk Multiball super jackpot (1M)." },
      { x: 54.5, y: 35.5, type: "key",   label: "TS", name: "Tesseract", body: "Spin for C-O-S-M-I-C and the Cosmic value." },
      { x: 14,   y: 54,   type: "info",  label: "T",  name: "T-H-O-R Targets", body: "Thor: complete 3× to start his mode." },
      { x: 78,   y: 58,   type: "info",  label: "SH", name: "S.H.I.E.L.D. Targets", body: "Lower two, then Nick Fury above: mystery award." },
      { x: 76,   y: 22,   type: "info",  label: "P",  name: "Pop Bumpers", body: "Captain America mode is won here." },
      { x: 71,   y: 11,   type: "info",  label: "TL", name: "Top Lanes", body: "Skill shot; light six Avengers for bonus X." },
      { x: 45,   y: 77,   type: "info",  label: "AV", name: "Avengers Progress", body: "Flashing = collected; solid = won its head-to-head." },
      { x: 3,    y: 79,   type: "avoid", label: "!",  name: "Left Outlane", body: "L of L-O-K-I." },
      { x: 88,   y: 79,   type: "avoid", label: "!",  name: "Right Outlane", body: "I of L-O-K-I; dangerous after the pops." },
    ],
  };
