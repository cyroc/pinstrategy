  /* ─── CORVETTE (BALLY 1994) ──────────────────────────────── */
MACHINES['corvette'] = {
    name: "Corvette",  sub: "1994 · Bally · WPC-S (DCS)",
    tagline: "Lock balls in the shaking ZR-1 engine · Torque and Horse Power jackpots · collect nine Corvettes in Challenge races · Route 66 awards · Turbo Boost spinner · Puzzle Mode for the future car",
    image: "images/corvette.webp",
    difficulty: "Medium", diffClass: "diff-medium", era: "DMD",

    /* ── QUICK GUIDE (30–90 s read) ───────────────────────────── */
    quick: {
      goal: "<strong>Multiball is the main scorer:</strong> the <strong>left outer loop</strong> lights the lock, the <strong>ZR-1 ramp</strong> (engine) locks; three locks start multiball, where the <strong>Skid Pad ramp</strong> (Torque) and <strong>inner loop</strong> (Horse Power) are the jackpots. Between multiballs, collect Corvettes through Challenge races and Route 66.",
      steps: [
        { title: "Lock and multiball",
          body: "Shoot the <strong>left outer loop</strong> to light the lock (all three locks for the first multiball, one at a time after that), then the <strong>ZR-1 ramp</strong>. The first multiball's locks each award a car. In multiball, collect <strong>Torque</strong> (Skid Pad ramp) and <strong>Horse Power</strong> (inner loop); once both are made they relight. Inner loop → Skid Pad ramp is the <strong>Super Jackpot</strong> (double Torque)." },
        { title: "Cars",
          body: "Shoot the flashing blue <strong>Speed Part</strong> shots to light <strong>Start Challenge</strong> at the <strong>Pit</strong>; win the race (shoot anything, harder shots move your car further) for the next car. The <strong>Route 66 ramp</strong> gives an award every second shot: Catch Me, a car, the Pit Stop hurry-up, QuadraJets and more." },
        { title: "Extras",
          body: "Complete the left <strong>three-bank</strong> to light <strong>Turbo Boost</strong> on the spinner. LT-1 lanes raise bonus X (2×, 4×, 6×, 8×). Nine cars start <strong>Puzzle Mode</strong>, then a 4-ball multiball." },
      ],
      shots: [
        { name: "Left outer loop", why: "Lights the lock; loops for the speed record." },
        { name: "ZR-1 ramp", why: "Locks and multiball." },
        { name: "Inner loop → Skid Pad ramp", why: "Jackpots and the Super Jackpot." },
      ],
      avoid: [
        "The center drain: the game's most common drain; stay on the flippers.",
        "Leaving the kickback unlit: relight it at the red kickback target as soon as it fires.",
      ],
      target: "Milestones (estimates): one multiball with a jackpot = baseline. Both jackpots and a Super Jackpot plus a few cars = good. Several multiballs or Puzzle Mode = great.",
    },

    info: {
      stats: [
        { label: "Manufacturer", value: "Bally (Williams)" },
        { label: "Year",         value: "1994 (August)" },
        { label: "Design",       value: "George Gomez" },
        { label: "Software",     value: "Tom Uban (effects: Bill Grupp)" },
        { label: "Mechanics",    value: "Tom Kopera" },
        { label: "Art",          value: "Dan Hughes" },
        { label: "Platform",     value: "WPC-S (DCS sound)" },
        { label: "Production",   value: "5,001" },
      ],
      theme: "40 years of the Chevrolet Corvette: a shaking ZR-1/LT-5 engine, a slot-car race track along the right side, Route 66 and the Crossed Flags Dragway.",
      features: [
        { name: "LT-5 lock and multiball", desc: "Left outer loop lights the lock; the ZR-1/LT-5 ramp locks in the engine. Third lock starts a 3-ball multiball (after a short Rev mode for up to 50M). Torque jackpot (Skid Pad ramp) and Horse Power jackpot (inner loop); both made = both relit, worth more. Inner loop → Skid Pad ramp = Super Jackpot. No jackpot when two balls drain: shoot the ZR-1 ramp in time for a 2-ball restart." },
        { name: "Corvette Challenge", desc: "Collect the lit blue Speed Parts (each doubles that shot's value and race advance) to light Start Challenge at the Pit. Race the machine's red car on the track; win = the next car. Races get harder each time." },
        { name: "Route 66", desc: "Every second Route 66 ramp shot gives the next award: Catch Me, car, Pit Stop hurry-up, car, QuadraJets, car, Catch Me, bonus X, car, points, special (points on competition settings)." },
        { name: "Two-ball modes", desc: "Catch Me (make each flashing shot in time), Pit Stop (hurry-up at the Pit, then 2-ball with the Pit as a jackpot) and Race Today (a drag race on the flippers, lit by Spark Plugs, started at the Route 66 ramp) each end in a 2-ball multiball." },
        { name: "Turbo Boost", desc: "Complete the left three-bank in time: the spinner and all shots score more while Turbo Boost runs." },
        { name: "Puzzle Mode", desc: "All nine cars: lit shots add puzzle pieces; complete it for the future car and a 4-ball multiball with the ZR-1 ramp as a jackpot × balls in play." },
      ],
      scoring: [
        { key: "Super Jackpot",     val: "2× the Torque jackpot" },
        { key: "Horse Power jackpot", val: "50M+ (max about 100M)" },
        { key: "Rev mode",          val: "Up to 50M" },
        { key: "Bonus X",           val: "2× → 8× (LT-1 lanes)" },
        { key: "End-of-ball bonus", val: "10M per car (not multiplied)" },
      ],
      rules: [
        "Skill shot: lane-change the flashing LT-1 lane under the plunged ball (5M, +5M each). Super skill shot: enter Left-Right-Left-Left on the flippers before plunging (manual; the rulesheet reports L-L-R-L-L), then make the inner loop (10M) or Skid Pad ramp (15M) from the upper flipper, +5M each success.",
        "Track combos (e.g. right outer loop → Skid Pad ramp, inner loop → Skid Pad ramp) score a growing value through the ball and add to the bonus.",
        "Spark Plugs: lit arrows count up; every eight alternates points and lighting Race Today.",
        "The right inlane lights the left outer loop for Qualify (15M, +5M each).",
      ],
      benchmarks: [
        { score: "Several multiballs or Puzzle Mode (estimate)", label: "Great game" },
        { score: "Super Jackpot plus a few cars",                  label: "Good game" },
        { score: "One multiball with a jackpot",                  label: "Baseline" },
      ],
      resources: [
        { name: "Rulesheet (pinball.org archive)", url: "https://web.archive.org/web/2020/http://www.pinball.org/rules/corvette.html", icon: "📄" },
        { name: "Operations Manual (Planetary Pinball)", url: "https://www.planetarypinball.com/reference/gamemanuals/Corvette/files/assets/basic-html/toc.html", icon: "📘" },
        { name: "Pinside Game Page",          url: "https://pinside.com/pinball/machine/corvette", icon: "🕹️" },
      ],
    },

    strategy: {
      skillShot: "Lane-change the flashing LT-1 lane under the plunged ball: 5M, +5M each time. Super skill shot: enter left, right, left, left on the flippers before plunging (the rulesheet reports L-L-R-L-L); the ball goes to the upper flipper for the inner loop or Skid Pad ramp.",
      multiball: [
        { name: "Mid-Ohio Endurance (LT-5) Multiball", locks: "Left outer loop lights, ZR-1 ramp locks (three).", start: "Third lock, after Rev mode.", jackpots: "Torque (Skid Pad ramp), Horse Power (inner loop); Super Jackpot = inner loop → Skid Pad ramp.", tip: "Collect both jackpots to relight them higher; go for the combo when the upper flipper has the ball." },
        { name: "Puzzle Multiball", locks: "Nine cars, then finish Puzzle Mode.", start: "Last puzzle piece.", jackpots: "ZR-1 ramp × balls in play.", tip: "4 balls: keep as many in play as you can." },
      ],
      goal: "<strong>Left outer loop → ZR-1 ramp locks → Torque, Horse Power and the Super Jackpot; Challenge and Route 66 for cars between multiballs.</strong>",
      phases: [
        { num: "Phase 1", title: "Lock", body: "Left outer loop, then the ZR-1 ramp three times." },
        { num: "Phase 2", title: "Multiball", body: "Skid Pad ramp and inner loop jackpots; the combo for the Super." },
        { num: "Phase 3", title: "Cars", body: "Speed Parts → Challenge at the Pit; Route 66 every second shot." },
      ],
      safeShots: [
        { name: "Left outer loop", desc: "A wide entrance; always returns to the upper flipper." },
        { name: "Kickback target", desc: "Easy; relights the left outlane kickback." },
      ],
      avoidShots: [
        { name: "Missed Skid Pad shots", desc: "The ball can wedge under the Route 66 ramp or come straight back." },
      ],
      tips: [
        { head: "Raise the jackpot", body: "Shooting the engine (ZR-1 ramp) while the lock isn't lit raises the jackpots every 3rd–4th shot; Skid Pad → unlit engine adds 20M. Horse Power caps around 100M." },
        { head: "Speed Parts", body: "Each Speed Part doubles that shot's race advance: collect them all before the harder later races." },
        { head: "Upper flipper", body: "Loops and the kickback feed the upper flipper: that is where the inner loop and Skid Pad ramp come from." },
      ],
      mistakes: [
        "Starting multiball and only shooting the ZR-1 ramp: the jackpots are the inner loop (Horse Power) and the Skid Pad ramp (Torque).",
        "Ignoring the kickback target after the kickback fires.",
      ],
    },

    hotspots: [
      { x: 34,  y: 49,  type: "key",   label: "ZR", name: "ZR-1 / LT-5 Ramp (engine)", body: "Locks; multiball; Puzzle jackpot." },
      { x: 25,  y: 20,  type: "info",  label: "EN", name: "ZR-1 Engine", body: "Shakes the locked ball into the lock." },
      { x: 20,  y: 55,  type: "key",   label: "LL", name: "Left Outer Loop", body: "Lights the lock; World Speed Record." },
      { x: 57,  y: 51,  type: "key",   label: "SK", name: "Skid Pad Ramp (approx.)", body: "Torque jackpot; Super Jackpot." },
      { x: 59,  y: 42,  type: "key",   label: "IL", name: "Inner Loop (approx.)", body: "Horse Power jackpot." },
      { x: 40,  y: 37,  type: "key",   label: "PT", name: "Pit (Pit In)", body: "Start Challenge; Pit Stop hurry-up." },
      { x: 61,  y: 59,  type: "key",   label: "66", name: "Route 66 Ramp", body: "An award every second shot." },
      { x: 79,  y: 50,  type: "info",  label: "RL", name: "Right Outer Loop", body: "Speed Parts; combos." },
      { x: 48,  y: 35,  type: "info",  label: "TB", name: "Turbo Boost Spinner", body: "More per spin with Turbo Boost lit." },
      { x: 56,  y: 18,  type: "info",  label: "LT", name: "LT-1 Lanes", body: "Skill shot; bonus X." },
      { x: 58,  y: 28,  type: "info",  label: "QJ", name: "Jet Bumpers", body: "QuadraJets when lit." },
      { x: 12,  y: 68,  type: "info",  label: "3B", name: "Three-Bank", body: "Lights Turbo Boost." },
      { x: 27,  y: 51,  type: "info",  label: "M",  name: "Million Target", body: "Millions." },
      { x: 45,  y: 78,  type: "info",  label: "CA", name: "Car Collection", body: "Nine cars → Puzzle Mode." },
      { x: 93,  y: 55,  type: "info",  label: "RT", name: "Race Track", body: "Challenge races." },
      { x: 13,  y: 61,  type: "info",  label: "UF", name: "Upper Flipper (approx.)", body: "Inner loop and Skid Pad ramp." },
      { x: 83,  y: 67,  type: "info",  label: "KT", name: "Kickback Target (approx.)", body: "Relights the kickback." },
      { x: 5,   y: 82,  type: "avoid", label: "K",  name: "Left Outlane (kickback)", body: "Kickback when lit." },
    ],
  };
