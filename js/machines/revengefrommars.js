  /* ─── REVENGE FROM MARS (BALLY 1999) ─────────────────────── */
MACHINES['revengefrommars'] = {
    name: "Revenge from Mars",  sub: "1999 · Bally · Pinball 2000",
    tagline: "Video modes projected on the playfield · 9 saucer lights · Bonus Wave multiballs · Mothership Multiball · Attack Mars",
    image: "images/revenge-from-mars.webp",
    difficulty: "Medium", diffClass: "diff-medium", era: "Modern",

    /* ── QUICK GUIDE (30–90 s read) ───────────────────────────── */
    quick: {
      goal: "Play the <strong>nine modes</strong> (three groups: Fuel, Saucer, Weapons). Each group finished starts a <strong>Bonus Wave Multiball</strong>; 40 items lead to <strong>Mothership Multiball</strong>. With all <strong>9 saucer lights</strong>, the three Bonus Waves and Mothership, Attack Mars lights: the wizard mode worth 100M+.",
      steps: [
        { title: "Modes in order",
          body: "Pick the Fuel or Weapons group at the start with the action buttons; modes then run one after another (no start shot) and carry over between balls. Shoot the video targets; when the <strong>center mini ramp</strong> rises, shoot it to finish. A <strong>Flawless</strong> finish gives a saucer light." },
        { title: "Missiles and multiballs",
          body: "Lit <strong>orbits and ramps</strong> give missiles in modes (500K, +100K each that ball). The <strong>capture lane</strong> lights and awards 3 captures for regular multiball: 10 saucers, then hit the big one 5 times for the super jackpot (and a saucer light)." },
        { title: "Bonus Waves",
          body: "4-ball multiballs: ramps/orbits 500K+, capture lane 250K+, center 100K+. Move the <strong>2×</strong> with the action buttons and shoot it; all four 2× shots make it 3×, up to 5×. Items carry over toward Mothership Multiball." },
      ],
      shots: [
        { name: "Ramps", why: "Missiles, jackpots, Bonus Wave value." },
        { name: "Center mini ramp", why: "Finishes modes and multiballs." },
        { name: "Capture lane", why: "Regular multiball locks." },
      ],
      avoid: [
        "The center target bank under the video: look at it with the video off to learn where rebounds go.",
        "Losing track of the action buttons in Attack Mars: they aim the targets.",
      ],
      target: "Milestones (estimates): three modes and one Bonus Wave = baseline. Mothership Multiball = good. Attack Mars = great.",
    },

    info: {
      stats: [
        { label: "Manufacturer", value: "Bally (Midway / Williams)" },
        { label: "Year",         value: "1999" },
        { label: "Design",       value: "George Gomez" },
        { label: "Art",          value: "John Youssi, Greg Freres" },
        { label: "Platform",     value: "Pinball 2000 (video projected onto the playfield)" },
      ],
      theme: "Sequel to Attack from Mars: the Martians return, and video scenes reflected onto the upper playfield react to the targets behind them. Image: a bare replacement playfield (no ramps or toys).",
      features: [
        { name: "Nine modes", desc: "Fuel: Alien Abduction, Martian Happy Hour, Secret Weapon. Saucer: Tower Struggle, a random mystery mode (Martian Aerobics, Bowling, Autopsy or Tank), Drive-In Demolition. Weapons: Paris in Peril, Big-O-Beam, Mars Kneads Women. Fuel or Weapons first (your choice); Saucer after both. Flawless = saucer light." },
        { name: "Saucer lights (9)", desc: "Flawless modes, regular multiball super jackpot, Bonus Wave awards, Martian Multiball (10 and 30 martians), Stroke of Luck. All nine (plus the three Bonus Waves and Mothership) light Attack Mars." },
        { name: "Regular multiball (3 balls)", desc: "3 captures at the capture lane. Destroy 10 saucers (center 500K, capture lane/martian 1M, ramps 1.5M), then hit the big saucer 5 times: super jackpot + saucer light." },
        { name: "Bonus Wave multiballs (4 balls)", desc: "After each mode group. Center 100K+, capture lane 250K+, ramps/orbits 500K+ (rising), moving 2× up to 5×. Items: 5 JP, 10 JP, 15 saucer light, 20 JP, 25 JP, 30 extra ball, 35 JP, 40 Mothership. Last ball: center ramp for 100K per item." },
        { name: "Mothership Multiball", desc: "All shots damage the mothership; the center ramp destroys it, then a bigger one appears." },
        { name: "Martian Attack → Martian Multiball", desc: "Seven martian targets (3 on the left under the rubber martian, 3 plus a martian on the right, 1 left of the center bank) light Martian Attack at the Stroke of Luck scoop; kill the martians, then the mini ramp: 2-ball Martian Multiball, every shot 1M." },
        { name: "Attack Mars", desc: "Center shot to start: 1) aim three ships with the action buttons and hit the center; 2) four targets; 3) the Big Brain via the center and the mini ramp. 100M+ for the final shot." },
      ],
      scoring: [
        { key: "Attack Mars final",   val: "100M+" },
        { key: "Hypno Multiball (2nd)", val: "15M" },
        { key: "Regular multiball saucers", val: "500K–1.5M" },
        { key: "Martian Multiball",   val: "1M per martian; 2M big martian" },
        { key: "Missiles",            val: "500K, +100K each (per ball)" },
        { key: "Super Skill Shot",    val: "1M (+200K) + 3 missiles" },
        { key: "Skill shot",          val: "500K (+100K)" },
      ],
      rules: [
        "Super Skill Shot: hold the left flipper while launching; the ball circles the left orbit to the left flipper; hit an orbit or ramp within ~10 s.",
        "Stroke of Luck scoop: random awards (points, missiles, saucer light, Hypno or capture multiball, +5 bonus X…).",
        "Extra balls come from scores, missiles (20, 50), Bonus Wave items and Hypno Multiball; off in competition.",
        "Hypno Multiball (a Stroke of Luck award): hit the center targets to drop the beam to 0%, then the ramp; small spirals add balls. First completion = extra ball, second = 15M.",
        "Default is 1 tilt warning.",
        "Values are from a rulesheet for code 1.4; later code may differ.",
      ],
      benchmarks: [
        { score: "Attack Mars (estimate)",          label: "Great game" },
        { score: "Mothership Multiball",            label: "Good game" },
        { score: "Three modes + one Bonus Wave",    label: "Baseline" },
      ],
      resources: [
        { name: "Rulesheet (Pinball Archive)",  url: "https://pinball.org/rules/revengefrommars.html", icon: "📖" },
        { name: "SDPC Cheatsheet",              url: "https://pinball.miraheze.org/wiki/Revenge_From_Mars", icon: "📄" },
        { name: "Pinside Game Page",            url: "https://pinside.com/pinball/machine/revenge-from-mars", icon: "🕹️" },
      ],
    },

    strategy: {
      skillShot: "Hold the left flipper while launching for the Super Skill Shot (1M + 3 missiles): then hit an orbit or ramp quickly. Otherwise the lit top lane is 500K.",
      multiball: [
        { name: "Regular (capture) multiball", balls: 3, locks: "Light and award 3 captures at the capture lane.", start: "Third capture.", jackpots: "10 saucers, then 5 hits on the big saucer = super jackpot.", tip: "The ramps are worth the most per saucer (1.5M)." },
        { name: "Bonus Wave", balls: 4, locks: "Finish a mode group.", start: "Automatically.", jackpots: "Every shot; move and hit the 2× (up to 5×).", tip: "Items carry over: keep collecting toward 40." },
        { name: "Mothership", locks: "40 Bonus Wave items.", start: "Automatically.", jackpots: "Damage with ramps/orbits; center ramp to destroy.", tip: "Ramps and orbits do the most damage." },
        { name: "Martian Multiball", balls: 2, locks: "Martian targets → Martian Attack at the Stroke of Luck.", start: "Mini ramp after Martian Attack.", jackpots: "Each martian 1M; big martian 2M.", tip: "10 martians = saucer light." },
      ],
      goal: "<strong>Modes (Flawless where possible) → Bonus Waves → Mothership → 9 saucer lights → Attack Mars.</strong>",
      phases: [
        { num: "Phase 1", title: "First group", body: "Choose the group you find easier; Super Skill Shot for missiles." },
        { num: "Phase 2", title: "Multiballs", body: "Capture multiball for a saucer light; Bonus Waves for items." },
        { num: "Phase 3", title: "Attack Mars", body: "Collect the remaining saucer lights, then the center shot." },
      ],
      safeShots: [
        { name: "Ramps", desc: "Feed the inlanes; best values in most modes." },
        { name: "Orbits", desc: "Missiles; feed the rollover lanes and pops." },
      ],
      avoidShots: [
        { name: "Center targets (unneeded)", desc: "Rebounds can be hard to read under the video." },
      ],
      tips: [
        { head: "Missile value", body: "It resets each ball, so long balls make missile shots very valuable." },
        { head: "Flawless", body: "Follow the on-screen directions in each mode to earn its saucer light." },
        { head: "Mode choice", body: "Big-O-Beam is a good group to start with; Secret Weapon is one of the easiest Flawless modes. In Mars Kneads Women, the orbits start a show at once. Tower Struggle finished by hitting the tower gives no saucer light." },
        { head: "Bonus Wave 2×", body: "Place the 2× on the shot you're about to make." },
      ],
      mistakes: [
        "Ending modes early with the mini ramp before Flawless is reached.",
        "Ignoring the action buttons in Bonus Waves and Attack Mars.",
      ],
    },

    hotspots: [
      { x: 17, y: 26, type: "key",   label: "LO", name: "Left Orbit", body: "Missiles; to the rollover lanes." },
      { x: 27, y: 26, type: "key",   label: "LR", name: "Left Ramp", body: "Missiles; jackpots." },
      { x: 47, y: 35, type: "key",   label: "MR", name: "Center Targets / Mini Ramp", body: "Video targets; mini ramp finishes modes." },
      { x: 59, y: 22, type: "key",   label: "CL", name: "Capture Lane", body: "Captures for multiball." },
      { x: 74, y: 26, type: "key",   label: "RR", name: "Right Ramp", body: "Missiles; jackpots." },
      { x: 82, y: 27, type: "key",   label: "RO", name: "Right Orbit", body: "Missiles." },
      { x: 69, y: 17, type: "info",  label: "SL", name: "Stroke of Luck Scoop", body: "Random awards; Martian Attack; extra ball." },
      { x: 34, y: 28, type: "info",  label: "MT", name: "Martian Targets", body: "Light Martian Attack." },
      { x: 47, y: 52, type: "info",  label: "SAU", name: "Saucer Lights", body: "Nine lights for Attack Mars." },
      { x: 47, y: 72, type: "info",  label: "M",  name: "Mode Inserts", body: "Fuel, Saucer and Weapons groups." },
      { x: 4,  y: 80, type: "avoid", label: "!",  name: "Left Outlane", body: "Drain." },
      { x: 90, y: 80, type: "avoid", label: "!",  name: "Right Outlane", body: "Drain." },
    ],
  };
