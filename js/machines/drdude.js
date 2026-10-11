  /* ─── DR. DUDE ───────────────────────────────────────────── */
MACHINES['drdude'] = {
    name: "Dr. Dude", sub: "1990 · Bally · System 11C",
    tagline: "3 Elements of Coolness → Mix Master Multiball · Reflex 1-2-3 · Dude-O-Meter → Gazillion shot",
    image: "images/dr-dude.png",
    difficulty: "Medium", diffClass: "diff-medium", era: "SS",

    /* ── QUICK GUIDE (30–90 s read) ───────────────────────────── */
    quick: {
      goal: "Collect the <strong>3 Elements of Coolness</strong>, mix them in the <strong>Mix Master</strong> and lock for <strong>2-ball Multiball</strong> (Jackpots 1M–5M, then double scoring for the rest of the ball). <strong>Reflex 1-2-3</strong> pays 1M–2M.",
      steps: [
        { title: "Elements of Coolness",
          body: "Shoot the <strong>Magnetic Personality</strong> target (left), the <strong>Heart of Rock 'n Roll</strong> target (right of the ramp) and the <strong>Gift of Gab</strong> saucer (under the gift box, right of Big Shot) until their lights stop flashing. Progress is kept between balls." },
        { title: "Mix Master → lock → Multiball",
          body: "Shoot the steep <strong>Ramp</strong> (right flipper) into the Mix Master and hit a target there, then lock in the <strong>Excellent Ray saucer</strong> (left) → 2-ball Multiball." },
        { title: "Jackpots",
          body: "Keep shooting the Ramp: Mix Master target hits count down to the <strong>Jackpot</strong> (1M–5M). Complete the <strong>drop targets</strong> to double it. After Multiball, all scoring is doubled for the rest of the ball." },
        { title: "Reflex 1-2-3",
          body: "Complete the <strong>REFLEX</strong> targets → Excellent Ray saucer (1) → Gift of Gab (2, short timer) → Magnetic Personality (3) = 1M–2M (+250K each time you re-spell REFLEX)." },
      ],
      shots: [
        { name: "Ramp (right flipper)", why: "Mix Master, Multiball Jackpots, Million and Gazillion shots." },
        { name: "Excellent Ray saucer (left)", why: "Lock, Bag of Tricks, Reflex 1, extra ball." },
        { name: "Drop targets (right)", why: "Bonus X, Million, Bag of Tricks relight, double Jackpot." },
      ],
      avoid: [
        "Collect the Bag of Tricks (Excellent Ray saucer, lit every ball) early. Missed Reflex 2? Regain control and restart.",
        "In Multiball, avoid having both balls in the Mix Master at once; hold one ball on the left flipper.",
      ],
      target: "Milestones: a Multiball Jackpot = good game. Reaching Super Dude and the Gazillion shot = great.",
    },

    info: {
      stats: [
        { label: "Manufacturer", value: "Bally (Midway)" },
        { label: "Year",         value: "1990" },
        { label: "Design",       value: "Dennis Nordman" },
        { label: "Software",     value: "Bill Pfutzenreuter" },
        { label: "Platform",     value: "System 11C (alphanumeric)" },
        { label: "Art / units",  value: "Greg Freres · ≈3,983 units" },
      ],
      theme: "Dr. Dude, the coolest dude in the universe, mixes the Elements of Coolness in his Molecular Mix Master (a spinning disc with targets) to rate your coolness on the Dude-O-Meter.",
      features: [
        { name: "Ramp", desc: "Very steep ramp, only from the right flipper; drops the ball into the Mix Master. Collects the Million and Gazillion shots." },
        { name: "Mix Master", desc: "Spinning disc with 9 targets (3 per Element colour). Spots Elements, lights the lock, and counts toward Jackpots in Multiball." },
        { name: "Excellent Ray saucer (left)", desc: "Lock, Bag of Tricks, Reflex 1, Special/Extra Ball." },
        { name: "Elements: Magnetic Personality, Heart of Rock 'n Roll, Gift of Gab", desc: "Left magnet target, target right of the ramp, saucer under the gift box. Each collected 3 times (adjustable pre-lit lamps)." },
        { name: "REFLEX targets", desc: "6 standups right of the bumpers; completion lights Reflex 1." },
        { name: "Drop targets (4)", desc: "Each completion advances bonus X (max 6X); set numbers of completions light Molecular Million (Ramp) and Extra Ball; relight Bag of Tricks; double the Jackpot in Multiball." },
        { name: "Big Shot target", desc: "Lit by Element completions; also lights Big Score in the outlanes." },
      ],
      scoring: [
        { key: "Multiball Jackpot",   val: "1M – 5M (doubled by the drop targets)" },
        { key: "After Multiball",     val: "All scores doubled for the rest of the ball" },
        { key: "Reflex 1-2-3",        val: "1M+, +250K per extra completion (max ~2M)" },
        { key: "Molecular Million",   val: "1M (Ramp when lit)" },
        { key: "Gazillion shot",      val: "500K per Mix Master hit (Super Dude)" },
        { key: "Skill shot",          val: "Up to 100K (Way Cool)" },
        { key: "Bonus multiplier",    val: "Up to 6X (drop targets)" },
      ],
      rules: [
        "<strong>Dude-O-Meter:</strong> each Multiball advances Plain → Party → Cool → Major → Super Dude; Super Dude lights the Gazillion shot on the Ramp.",
        "<strong>Multiball</strong> is 2 balls with no restart; Jackpots need more Mix Master hits each time.",
        "<strong>Bag of Tricks</strong> (Excellent Ray saucer; lit each ball, relit by the drop targets): random — points, slings/bumpers at max, Bonus X, Jackpot at max, Elements, Reflex, Million, extra ball, extra tilt warning.",
        "<strong>Reflex:</strong> Reflex 2/3 time out in about 12 s; a miss usually means re-spelling REFLEX.",
        "<strong>Dude-O-Meter</strong> may carry over between games on real machines — check it at game start.",
        "Operator 'Contest Game' setting keeps the Jackpot at maximum (5M).",
        "<strong>Extra balls:</strong> drop targets, Bag of Tricks, a short-ball consolation extra ball — void in comp play.",
      ],
      benchmarks: [
        { score: "Gazillion shot", label: "Great game — Super Dude reached" },
        { score: "Jackpot",        label: "Good game" },
        { score: "Multiball",      label: "Baseline" },
      ],
      resources: [
        { name: "Rulesheet (Michael Dunn)", url: "https://www.pinball.org/rules/drdude.html", icon: "📖" },
        { name: "Pinside Game Page",        url: "https://pinside.com/pinball/machine/dr-dude", icon: "🕹️" },
        { name: "IPDB Entry",               url: "https://www.ipdb.org/machine.cgi?id=737", icon: "🎯" },
      ],
    },

    strategy: {
      skillShot: "Full plunge into the skill-shot target at the top: scores the lit value (Geek 25K → Way Cool 100K) as the lights cycle.",
      multiball: [
        { name: "Mix Master Multiball", balls: 2,
          locks: "Collect all three Elements of Coolness, then hit a Mix Master target (via the Ramp).",
          start: "Lock in the Excellent Ray saucer, then plunge the new ball.",
          jackpots: "Mix Master target hits (via the Ramp) count down to a 1M–5M Jackpot; the drop targets double it. Each Multiball advances the Dude-O-Meter.",
          tip: "Trap one ball on the left flipper and loop the Ramp with the other." },
      ],
      goal: "<strong>Elements → Mix Master → lock → Multiball.</strong> Shoot the Ramp for Jackpots, double them with the drop targets, then enjoy double scoring. Play Reflex 1-2-3 whenever it is lit.",
      phases: [
        { num: "Phase 1", title: "Elements", body: "Magnetic Personality, Heart of Rock 'n Roll, Gift of Gab." },
        { num: "Phase 2", title: "Multiball", body: "Ramp → Mix Master, lock in the Excellent Ray saucer, then Ramp for Jackpots." },
        { num: "Phase 3", title: "Double scoring + Reflex", body: "After Multiball everything is doubled: Reflex, drop targets and Millions are worth twice as much." },
      ],
      safeShots: [
        { name: "Excellent Ray saucer", desc: "Kicks the ball onto a habitrail to the left inlane." },
        { name: "Gift of Gab saucer", desc: "Kicks onto a habitrail to the right inlane." },
      ],
      avoidShots: [
        { name: "Weak Ramp shots", desc: "The ramp is extremely steep; a weak shot rolls straight back." },
      ],
      tips: [
        { head: "Watch the Mix Master", body: "A ball can be flung out of the Mix Master suddenly; keep an eye on it." },
        { head: "Sling bonus", body: "A Bag of Tricks award boosts the slingshots for the rest of the ball." },
      ],
      mistakes: [
        "Rushing Reflex 2 with an uncontrolled shot.",
        "Letting both Multiball balls go into the Mix Master together.",
      ],
    },

    hotspots: [
      { x: 33,   y: 42,   type: "key",   label: "RP", name: "Ramp",
        body: "Steep ramp to the <strong>Mix Master</strong> (right flipper only). Jackpots, Million, Gazillion." },
      { x: 67.2, y: 20.7, type: "key",   label: "MX", name: "Mix Master",
        body: "Spinning disc with 9 coloured targets: Elements, lock lighting, Jackpot countdown." },
      { x: 18,   y: 36, type: "key",   label: "ER", name: "Excellent Ray Saucer",
        body: "Lock, Bag of Tricks, Reflex 1, extra ball." },
      { x: 78.5, y: 55.5, type: "key",   label: "DT", name: "Drop Targets",
        body: "Bonus X, Million, Bag of Tricks relight; double the Jackpot in Multiball." },
      { x: 13.5, y: 50.3, type: "safe",  label: "MP", name: "Magnetic Personality",
        body: "Element (green); Reflex 3." },
      { x: 38.9, y: 41.8, type: "safe",  label: "HR", name: "Heart of Rock 'n Roll", body: "Element (red)." },
      { x: 67.5, y: 41.5, type: "safe",  label: "GG", name: "Gift of Gab Saucer", body: "Element (yellow); Reflex 2." },
      { x: 50.5, y: 35, type: "info",  label: "RF", name: "REFLEX Targets", body: "Complete to light Reflex 1." },
      { x: 59.4, y: 42.7, type: "info",  label: "BS", name: "Big Shot Target", body: "Lit by Element completions; lights Big Score in the outlanes." },
      { x: 37.8, y: 15.2, type: "info",  label: "SS", name: "Skill Shot Target", body: "Scores the lit Geek → Way Cool value." },
      { x: 77,   y: 44.1, type: "info",  label: "RL", name: "Right Lane", body: "Plunger path to the top target and bumpers; raises the bumper value." },
      { x: 8.6,  y: 78.7, type: "avoid", label: "!",  name: "Left Outlane",  body: "No kickback." },
      { x: 82.8, y: 79,   type: "avoid", label: "!",  name: "Right Outlane", body: "Open under comp settings." },
    ],
  };
