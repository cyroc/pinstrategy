  /* ─── DEADLY WEAPON (GOTTLIEB 1990) ──────────────────────── */
MACHINES['deadlyweapon'] = {
    name: "Deadly Weapon",  sub: "1990 · Gottlieb (Premier) · System 3 (alphanumeric)",
    tagline: "Cop cars 1-7 · yellow badges for Million Times · Mystery-only multiball: 1M, 5M, then 9M per car set · East Side jackpot up to 9.99M · Pop Bonus",
    image: "images/deadly-weapon.webp",
    difficulty: "Medium", diffClass: "diff-medium", era: "SS",

    /* ── QUICK GUIDE (30–90 s read) ───────────────────────────── */
    quick: {
      goal: "Collect the <strong>cop cars 1–6 in order</strong>, finish with the <strong>yellow 7</strong> (left orbit) for yellow badges; 5 yellow badges start <strong>Million Times</strong> at the drop targets. Mystery is the only way to multiball: always pick <strong>Points</strong>.",
      steps: [
        { title: "Skill shot and cars",
          body: "Time the plunge into the <strong>top saucer</strong> when Pik-5 is lit (pick Instant Multiball or Two Yellow Badges). A short plunge collects car 1 instead. Cars: 1 top right, 2 lower right inlane, 3 left orbit, 4 upper right inlane, 5 Brick Alley, 6 right spinner. Each starts a hurry-up for the next." },
        { title: "Badges and Million Times",
          body: "<strong>Yellow 7</strong> at the left orbit lights the top saucer for yellow badges (red 7 in the center lane only gives red badges for a Special). Mystery awards add badges too. With 5 yellow badges, Million Times: each <strong>drop target bank</strong> for 20 s scores 1M × bonus X (max 10M). Raise X first at the <strong>right 5-bank</strong>." },
        { title: "Mystery and multiball",
          body: "One saucer is always lit for <strong>Mystery</strong>. Instant Multiball: press the right flipper for <strong>Points</strong>, then complete all six cars in any order: 1M for the first set, 5M for the second, 9M for each set after that." },
      ],
      shots: [
        { name: "Saucers (top and right)", why: "Mystery, Pik-5, badges, Pop Bonus." },
        { name: "Left orbit", why: "Car 3, yellow 7, West Side." },
        { name: "Drop targets", why: "Bonus ladder; Million Times." },
      ],
      avoid: [
        "Choosing Arrests in multiball: about 1/10 of the value.",
        "The red 7 in the center lane when you want yellow badges.",
      ],
      target: "Milestones (estimates): one multiball for Points = baseline. A Million Times round = good. A 9M multiball or big jackpot plus Million Times = great.",
    },

    info: {
      stats: [
        { label: "Manufacturer", value: "Gottlieb (Premier)" },
        { label: "Year",         value: "1990 (September)" },
        { label: "Design",       value: "John Trudeau, Jon Norris" },
        { label: "Production",   value: "803 (Pinpedia)" },
        { label: "Platform",     value: "Gottlieb System 3 (alphanumeric)" },
      ],
      theme: "A police and crime theme: three flippers, no ramps, cop cars, badges and arrests.",
      features: [
        { name: "Cop cars", desc: "1–6 in order (1 top right orbit exit, 2 lower right inlane, 3 left orbit, 4 upper right inlane, 5 Brick Alley, 6 right spinner), then yellow 7 (left orbit) or red 7 (center lane). Each starts a hurry-up for the next car, worth 100K × its number. Cars 1–5 light Pik-5 at the top saucer. The star rollover by the left flipper spots the next car when lit." },
        { name: "Badges", desc: "From Mystery/Pik-5 (usually 2), the saucer lit after a 7, or the near left outlane. 5 red = Special Round (20 s to hit the flashing shot). 5 yellow = Million Times (20 s: each drop bank = 1M × bonus X)." },
        { name: "Mystery / Pik-5", desc: "One saucer is lit for Mystery (switches alternate it). Pick within 5 s. Awards: points (100K–400K or 3M), badges, Instant Multiball, advance X, Weapon letter, kicksave, 5 arrests, extra ball, Catch-Up (multiplayer)." },
        { name: "Multiball", desc: "Only from Mystery/Pik-5. Pick Points (right flipper). 2 balls; from the right saucer you can plunge into the top saucer for a 3rd. All 6 cars in any order: 1M, 5M, then 9M repeatable." },
        { name: "Jackpot", desc: "Starts at 1M, carries over between games (max 9.999M). Lit spinners (lower right inlane or star rollover, ~15 s) score 10K and add 20K to it per spin. Shoot West Side (left orbit) and East Side (upper right inlane), then East Side again within 15 s." },
        { name: "Pop Bonus and Weapon", desc: "Upper pops add 10K to Pop Bonus (from 1M). Exiting via the Light Collect Pop Bonus lane lights the right saucer to collect it. W-E-A-P-O-N letters (Mystery, or Supercop at the top saucer) start Riot Bonus: mostly arrests, low points." },
      ],
      scoring: [
        { key: "Million Times",     val: "1M × bonus X per drop bank (max 10M)" },
        { key: "Multiball cars",    val: "1M, 5M, then 9M" },
        { key: "Jackpot",           val: "1M–9.999M" },
        { key: "Pop Bonus",         val: "1M + 10K a pop" },
        { key: "Drop bonus ladder", val: "10K → 500K × X" },
        { key: "Arrests",           val: "10K per arrest so far, every end of ball" },
      ],
      rules: [
        "Right 5-bank: advances bonus X 2×-3×-5×-10× (or extra ball, once per ball); no progress during multiball or timed rounds.",
        "Bonus comes only from drop target completions; a tilt warning resets it.",
        "Kicksave on the far left outlane: lit by the center lane or Mystery; times out after 20 s.",
        "Jackpot can only be qualified in single ball play with no timed round running.",
        "Arrests pay 10K each at the end of every ball for all arrests so far in the game (not multiplied); 20 arrests = extra ball.",
        "One source says each Million Times drop bank also adds 1 to bonus X.",
        "Extra ball and special values in competition aren't confirmed; Catch-Up Bonus matters only in multiplayer.",
      ],
      benchmarks: [
        { score: "9M multiball or big jackpot + Million Times (estimate)", label: "Great game" },
        { score: "Million Times round",                                   label: "Good game" },
        { score: "One multiball for Points",                              label: "Baseline" },
      ],
      resources: [
        { name: "Strategy Guide (Pinball Primer)", url: "https://pinballprimer.github.io/deadlyweapon_Grj9q.html", icon: "📖" },
        { name: "SDPC Cheatsheet",                 url: "https://pinball.miraheze.org/wiki/Deadly_Weapon", icon: "📄" },
        { name: "Pinside Game Page",               url: "https://pinside.com/pinball/machine/deadly-weapon", icon: "🕹️" },
      ],
    },

    strategy: {
      skillShot: "Timed plunge into the top saucer: 10K, 20K, 50K, 100K or Pik-5 (shortest window) plus 5K. In Pik-5 stop on Instant Multiball or Two Yellow Badges. A short plunge for car 1 is a good alternative.",
      multiball: [
        { name: "Mystery Multiball", balls: "2–3", locks: "Instant Multiball from Mystery or Pik-5.", start: "Immediately; press the right flipper for Points.", jackpots: "All six cars in any order: 1M, 5M, then 9M repeatable.", tip: "Short-plunge for car 1; from the right saucer, plunge into the top saucer for a third ball." },
      ],
      goal: "<strong>Cars 1–6 → yellow 7 → yellow badges → Million Times with high bonus X; saucers for Mystery multiball (Points).</strong>",
      phases: [
        { num: "Phase 1", title: "Skill shot", body: "Pik-5 at the top saucer, or car 1 by short plunge." },
        { num: "Phase 2", title: "Cars and badges", body: "Cars in order, yellow 7, saucer for the badges; right 5-bank for bonus X." },
        { num: "Phase 3", title: "Million Times", body: "Drop target bank as often as possible in 20 s." },
      ],
      safeShots: [
        { name: "Lit saucers", desc: "Mystery every time; one is always lit." },
        { name: "Left orbit", desc: "Car 3, yellow 7 and West Side." },
      ],
      avoidShots: [
        { name: "Riot Bonus shots", desc: "Mostly arrests, very few points." },
      ],
      tips: [
        { head: "Bonus X first", body: "Million Times multiplies by bonus X, so complete the right 5-bank up to 5× or 10× before the 5th yellow badge." },
        { head: "Jackpot", body: "It carries over between games, so check its value when you start: if it's high, go West Side → East Side → East Side. Otherwise build it with lit spinners first." },
        { head: "Pop Bonus", body: "Worth collecting once it's well above 1M; everything but the saucers unlights until you do." },
      ],
      mistakes: [
        "Choosing Arrests for multiball.",
        "Collecting car 7 at the center lane (red) instead of the left orbit (yellow).",
      ],
    },

    hotspots: [
      { x: 31, y: 6,  type: "key",   label: "TS", name: "Top Saucer", body: "Skill shot; Pik-5; Mystery; yellow badges; Supercop." },
      { x: 81, y: 18, type: "key",   label: "RS", name: "Right Saucer", body: "Mystery; red badges; collect Pop Bonus." },
      { x: 12, y: 40, type: "key",   label: "LO", name: "Left Orbit (West Side)", body: "Car 3; yellow 7; jackpot qualify." },
      { x: 50, y: 37, type: "key",   label: "DT", name: "Drop Targets", body: "Bonus ladder; Million Times." },
      { x: 28, y: 42, type: "info",  label: "BA", name: "Brick Alley", body: "Car 5." },
      { x: 39, y: 40, type: "info",  label: "CL", name: "Center Lane", body: "Red 7; lights kicksave." },
      { x: 67, y: 17, type: "info",  label: "SP", name: "Right Spinner", body: "Car 6; jackpot build when lit." },
      { x: 75, y: 56, type: "key",   label: "5B", name: "Right 5-Bank", body: "Advance bonus X (2×-3×-5×-10×)." },
      { x: 83, y: 54, type: "key",   label: "ES", name: "East Side", body: "Car 4; jackpot shot." },
      { x: 13, y: 35, type: "info",  label: "LS", name: "Left Spinner", body: "Yellow 7; jackpot build when lit." },
      { x: 25, y: 14, type: "info",  label: "P",  name: "Pop Bumpers", body: "Pop Bonus +10K a hit." },
      { x: 22, y: 83, type: "info",  label: "★",  name: "Star Rollover", body: "Lights spinners; can spot a car." },
      { x: 4,  y: 79, type: "avoid", label: "!",  name: "Left Outlanes", body: "Near: badge; far: kicksave when lit." },
    ],
  };
