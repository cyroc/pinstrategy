  /* ─── INDIANAPOLIS 500 (BALLY 1995) ──────────────────────── */
MACHINES['indianapolis500'] = {
    name: "Indianapolis 500",  sub: "1995 · Bally · Williams WPC-S (DMD)",
    tagline: "Left orbit lights everything · Turbo lock multiball · 11 Speedway modes · 3× Playfield · stacked Victory Laps up to 1 billion",
    image: "images/indianapolis-500.webp",
    difficulty: "Medium", diffClass: "diff-medium", era: "DMD",

    /* ── QUICK GUIDE (30–90 s read) ───────────────────────────── */
    quick: {
      goal: "Use the <strong>left orbit</strong> to light locks, modes and passes, and work toward <strong>Victory Laps</strong> at the center saucer. Light two or more before collecting one (2 = 500M), ideally during <strong>3× Playfield</strong>.",
      steps: [
        { title: "Skill shot, then the left orbit",
          body: "Each plunge feeds the right inlane: shoot the <strong>left ramp</strong> right away for 5M (+1M each, max 15M). The <strong>left orbit</strong> lights locks at the Turbo (upper flipper), lights the right orbit for a mode, and passes a car once lit by a ramp or orbit." },
        { title: "Modes and multiball",
          body: "Start modes at the <strong>right orbit</strong> (they stack, but not during multiball). Only the <strong>right ramp</strong> changes the next mode. Best: <strong>Gasoline Alley</strong> (3rd shot passes 15 cars), <strong>Turbo Boost</strong>, Super Jets (30M), and 3× Playfield. Two Turbo locks start 3-ball multiball: jackpots on the ramps from 30M." },
        { title: "Victory Laps",
          body: "Each lights the center saucer: <strong>200 laps</strong>, <strong>1st place</strong> (start 28th), <strong>all modes</strong> (Checkered Flag), or light-up <strong>wave 6</strong>. One = 200M, two = 500M, three = 732M, four = 1 billion; 3× Playfield triples it. Hold off on the saucer while more are close." },
      ],
      shots: [
        { name: "Left orbit", why: "Locks, mode lighting, passes; combo to the Turbo." },
        { name: "Right orbit", why: "Modes, Hit the Wall, Change Setup." },
        { name: "Right ramp", why: "Laps, Fast Laps, changes the next mode." },
      ],
      avoid: [
        "Starting 3× Playfield with nothing to triple: start it just before the second Turbo lock or a Victory Lap (no mode starts in multiball).",
        "Risky nudging late in a long ball: bonus can be 100M+ and a tilt loses it.",
      ],
      target: "Milestones (estimates): one multiball and a few modes = baseline. A Victory Lap = good. A stacked or tripled Victory Lap = great.",
    },

    info: {
      stats: [
        { label: "Manufacturer", value: "Bally (Midway)" },
        { label: "Year",         value: "1995 (June)" },
        { label: "Design",       value: "Dennis Nordman" },
        { label: "Platform",     value: "Williams WPC-S (Security)" },
        { label: "Production",   value: "2,249 (Wikipedia)" },
      ],
      theme: "The Indianapolis 500 race: a car racing around a mini track at the back, a Turbo lock, pit stops, souvenirs and passing 27 cars to take the lead.",
      features: [
        { name: "Speedway modes", desc: "Left orbit lights the right orbit (into the back saucer) to start the flashing mode; the center saucer also starts one when Green Flag is lit and nothing else runs. Right-ramp Advance Speedway is the only way to change it. Go for the Pole (4 right ramps 5–20M), Quick Pit, 3× Playfield (30 s), Gasoline Alley (right orbit 5–25M; 3rd = pass 15), Wrong Turn (frenzy from 250K), Light Extra Ball, Caution (video), Super Light-ups, Dueling Drivers (4 shots 5–20M + 1 pass), Super Jets (30 pops = 30M), Turbo Boost (2-ball, 10–90M). Then Checkered Flag lights a Victory Lap." },
        { name: "Turbo multiball", desc: "Left orbit lights locks (1st multiball: one orbit for both; later more). Two locks at the Turbo = 3 balls. Both ramps lit; after a jackpot the opposite ramp is lit. 30M +2M per unlit Turbo/center hit (max 50M), +10M per ball held in the Turbo; hold 3 = 60M super jackpot." },
        { name: "Pit Stop multiball", desc: "PIT top lanes light the right ramp; the ball is held, a second ball is launched, and you have 25 s (default) to make the right ramp again with it. Under 12 s: all four ramp/orbit shots lit; slower: fewer. Jackpots 10M +2M." },
        { name: "Victory Laps", desc: "200 laps, 1st place, all modes, or light-up wave 6 each light one at the center saucer. Stacked: 200M / 500M / 732M / 1B; tripled by 3× Playfield." },
        { name: "Laps and passes", desc: "Major shots 1 lap (left ramp 2; repeated right ramps = Fast Laps for 2 and 4–18M). Mode starts 5 laps. An unlit left orbit or ramp lights the left orbit to pass one car; Hit the Wall also passes one." },
        { name: "Light-up targets and souvenirs", desc: "3 targets, 4 hits each per wave (1M × wave a hit); a finished target 5M; waves 15M +5M (max 35M); wave 4 lights extra ball, wave 6 a Victory Lap. I-N-D-Y lanes light a souvenir at the left ramp (5M), some of which cut a specific wave (1, 2, 3, 4, 6, 8) to one hit per target." },
      ],
      scoring: [
        { key: "Victory Lap (1/2/3/4 stacked)", val: "200M / 500M / 732M / 1B" },
        { key: "Turbo Boost jackpot", val: "10M–90M" },
        { key: "Super jackpot",       val: "60M" },
        { key: "Multiball jackpot",   val: "30M–50M (+10M per held ball)" },
        { key: "Super Jets",          val: "30M" },
        { key: "Loop-Turbo combo",    val: "10M +2M (max ~30M)" },
        { key: "Skill shot",          val: "5M–15M" },
      ],
      rules: [
        "Bonus = switch count + 10K a lap + position bonus, × bonus X (PIT lanes, max 8×), plus Dueling Drivers, Gasoline Alley and Wrong Turn and Caution totals from that ball.",
        "Change Setup (blue target left of the left-ramp entrance, one more hit each time, then the right orbit): pick an award; 20M is five flips after '5 Laps'.",
        "Wrench targets spell words: 4M, +2M each (max 18M).",
        "Hit the Wall (lower left standups → right orbit): 5M +2M (max 21M) and one pass.",
        "Sources differ on some values by ROM: multiball jackpot base 20M or 30M, a single Victory Lap 100M or 200M, souvenirs 5M each or rising.",
        "Extra balls have no point value in competition, so Light Extra Ball awards are worthless there.",
      ],
      benchmarks: [
        { score: "Stacked or tripled Victory Lap (estimate)", label: "Great game" },
        { score: "One Victory Lap",                          label: "Good game" },
        { score: "One multiball + a few modes",              label: "Baseline" },
      ],
      resources: [
        { name: "Strategy Guide (Pinball Primer)", url: "https://pinballprimer.github.io/indy500_Gr8l3.html", icon: "📖" },
        { name: "Rulesheet (Pinball Archive)",     url: "https://pinball.org/rules/indianapolis500.html", icon: "📄" },
        { name: "SDPC Cheatsheet",                 url: "https://pinball.miraheze.org/wiki/Indianapolis_500", icon: "📄" },
        { name: "Pinside Game Page",               url: "https://pinside.com/pinball/machine/indianapolis-500", icon: "🕹️" },
      ],
    },

    strategy: {
      skillShot: "Left ramp straight from the right inlane after any plunge: 5M, +1M each time (max 15M). Alternative: pass to the left flipper and make the right ramp to start Go for the Pole with its first shot spotted (only if Pole hasn't been played this set).",
      multiball: [
        { name: "Turbo Multiball", balls: 3, locks: "Left orbit lights locks; shoot the Turbo with the upper flipper.", start: "Second lock.", jackpots: "Ramps 30M–50M (opposite ramp after each); +10M per ball held in the Turbo; hold 3 = 60M super.", tip: "Shoot the Turbo when it isn't lit for lock beforehand: +2M jackpot each." },
        { name: "Pit Stop Multiball", balls: 2, locks: "Complete P-I-T, then the right ramp.", start: "Make the right ramp again (or wait out the stopwatch).", jackpots: "10M +2M at the lit ramps/orbits.", tip: "Letting the stopwatch run out leaves only the left orbit lit: trap one ball on the left flipper and shoot the left orbit with the right (10M +2M and a pass each)." },
        { name: "Turbo Boost", balls: 2, locks: "Speedway mode.", start: "Right orbit when flashing.", jackpots: "Turbo: 10M, +10M per left ramp (max 90M).", tip: "Build with left ramps (each boost lasts ~10 s), then hit the Turbo from the upper flipper." },
      ],
      goal: "<strong>Left orbit all ball → modes at the right orbit → Turbo multiball → stack Victory Laps and triple them with 3× Playfield.</strong>",
      phases: [
        { num: "Phase 1", title: "Skill shot + orbits", body: "Left ramp skill shot; left orbit to light locks and the mode; pass cars." },
        { num: "Phase 2", title: "Modes", body: "Gasoline Alley for the 15 passes; use right ramps to line up 3× Playfield." },
        { num: "Phase 3", title: "Victory Laps", body: "Light two or more, start 3× Playfield, then the center saucer." },
      ],
      safeShots: [
        { name: "Left orbit", desc: "Comes around to the upper flipper / right flipper; feeds the Turbo combo." },
        { name: "Right ramp", desc: "Repeatable for laps and Fast Laps." },
      ],
      avoidShots: [
        { name: "Center saucer with one Victory Lap lit", desc: "If a second objective is close, wait: two are worth 500M." },
      ],
      tips: [
        { head: "Loop-Turbo combo", body: "Left orbit straight into the Turbo with the upper flipper: 10M, +2M each. Start flipping early; the ball arrives fast." },
        { head: "3× Playfield", body: "Triples jackpots, laps and Victory Laps. Right ramps advance the flashing mode to 3×; then avoid starting modes until you're ready, and start it just before the second lock or a Victory Lap (30 s)." },
        { head: "Wrong Turn", body: "Every saucer raises the switch value; the center saucer feeds the pops." },
        { head: "Super Light-ups", body: "Does nothing useful, but it must be played to finish the set of modes." },
      ],
      mistakes: [
        "Collecting a single Victory Lap when another is a few shots away.",
        "Ignoring the left orbit: it drives locks, modes and passes.",
      ],
    },

    hotspots: [
      { x: 14, y: 46, type: "key",   label: "LO", name: "Left Orbit", body: "Lights locks and modes; passes cars." },
      { x: 30, y: 47, type: "key",   label: "LR", name: "Left Ramp", body: "Skill shot; 2 laps; souvenirs; jackpots." },
      { x: 68, y: 47, type: "key",   label: "RR", name: "Right Ramp", body: "Laps, Fast Laps, Advance Speedway, Pit Stop." },
      { x: 83, y: 48, type: "key",   label: "RO", name: "Right Orbit", body: "Starts modes; Hit the Wall; Change Setup." },
      { x: 27, y: 22, type: "key",   label: "T",  name: "Turbo Lock", body: "Locks from the upper flipper; multiball." },
      { x: 46, y: 22, type: "key",   label: "CS", name: "Center Saucer", body: "Victory Laps; extra ball; mode start." },
      { x: 70, y: 13, type: "info",  label: "PIT", name: "P-I-T Lanes", body: "Bonus X; light Pit Stop at the right ramp." },
      { x: 72, y: 23, type: "info",  label: "P",  name: "Pop Bumpers", body: "Super Jets; Wrong Turn feed." },
      { x: 22, y: 66, type: "info",  label: "HW", name: "Hit the Wall Targets", body: "Light Hit the Wall at the right orbit." },
      { x: 84, y: 55, type: "info",  label: "UF", name: "Upper Flipper", body: "Shoots the Turbo lock and the loop combo." },
      { x: 59, y: 37, type: "info",  label: "LU", name: "Light-up Targets", body: "4 hits each per wave; wave 6 lights a Victory Lap." },
      { x: 21, y: 45, type: "info",  label: "CU", name: "Change Setup Target", body: "Lights Change Setup at the right orbit." },
      { x: 45, y: 72, type: "info",  label: "M",  name: "Speedway Modes", body: "11 modes, then Checkered Flag." },
      { x: 7,  y: 74, type: "avoid", label: "!",  name: "Left Outlane", body: "Drain (I-N-D-Y letter)." },
      { x: 86, y: 74, type: "avoid", label: "!",  name: "Right Outlane", body: "Drain (I-N-D-Y letter)." },
    ],
  };
