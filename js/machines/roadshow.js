  /* ─── RED & TED'S ROAD SHOW ──────────────────────────────── */
MACHINES['roadshow'] = {
    name: "Red and Ted's Road Show", sub: "1994 · Williams · WPC-S (DCS)",
    tagline: "Bulldozer days → Payday Multiball (40M+ jackpots) · 18 city modes · Bridge Out bonus X · Super Payday",
    image: "images/road-show.png",
    difficulty: "Medium", diffClass: "diff-medium", era: "DMD",

    /* ── QUICK GUIDE (30–90 s read) ───────────────────────────── */
    quick: {
      goal: "The big money is <strong>Multiball</strong> jackpots (from <strong>40M</strong>, alternating <strong>Ted's</strong> and <strong>Red's</strong> mouths) and the end-of-ball bonus: each <strong>souvenir</strong> whose city you've played is worth 10M × bonus X. The <strong>ramps</strong> build miles toward city modes and light <strong>Bridge Out</strong> for bonus X.",
      steps: [
        { title: "Skill shot",
          body: "Plunge so the ball drops straight into the <strong>Blast Hole</strong>: a free souvenir and 5M (+5M each, max 25M)." },
        { title: "Bulldozer → locks",
          body: "Hit the <strong>bulldozer blade</strong> (in front of Ted) to advance the days; on Friday Lock lights at <strong>Bob's Bunker</strong>. Lock 2 balls, then shoot <strong>Ted's open mouth</strong> to start 3-ball Multiball. Each blade hit raises the jackpot 5M (max 75M on the first)." },
        { title: "Multiball jackpots",
          body: "First jackpot = <strong>Ted's mouth</strong> (the blade rises and falls), then <strong>Red's mouth</strong>, alternating. No jackpot after two drains? 12 s restart at the Lock." },
        { title: "Bridge Out → bonus X",
          body: "Left inlane lights the <strong>right ramp</strong>, inside right inlane the <strong>left ramp</strong>: each lit ramp = Bridge Out, bonus 2× up to 6× (then 10M)." },
        { title: "City modes",
          body: "Start City is lit at game start (scoop or Blast Hole); after each city, 400 miles relights it. Buy <strong>souvenirs</strong> at Bob's Bunker (fixed order in tournament mode) and re-aim the skill shot after every lock. West Coast modes allow <strong>Super Payday</strong>." },
      ],
      shots: [
        { name: "Bulldozer blade", why: "Days to Lock, jackpot +5M; mode shots." },
        { name: "Ramps", why: "Bridge Out (bonus X), miles, mode shots." },
        { name: "Red's mouth / Ted's mouth", why: "Multiball jackpots; Big Millions at Red." },
      ],
      avoid: [
        "The right outlane is wicked — don't flail on the right side.",
      ],
      target: "Milestones: a multiball jackpot or two = good game. Several souvenir/city pairs at 6× bonus = great.",
    },

    info: {
      stats: [
        { label: "Manufacturer", value: "Williams" },
        { label: "Year",         value: "1994 (October)" },
        { label: "Design",       value: "Pat Lawlor" },
        { label: "Software",     value: "Dwight Sullivan, Ted Estes" },
        { label: "Platform",     value: "WPC-S (DMD, DCS sound)" },
        { label: "Production",   value: "≈6,259 units" },
      ],
      theme: "Red and Ted, demolition experts, bulldoze across the USA. A widebody with four flippers, two talking heads (Ted behind a bulldozer blade, Red with an open mouth), a shaker motor and 18 city modes; Carlene Carter is Red's voice.",
      features: [
        { name: "Bulldozer blade + Ted", desc: "Blade hits advance the days and raise the jackpot; the blade lifts in multiball to expose Ted's mouth." },
        { name: "Red", desc: "Open mouth from the upper left flipper: Big Millions (5M–25M) and multiball jackpots." },
        { name: "Bob's Bunker (Lock)", desc: "Spinner lane sinkhole: locks, extra balls, souvenirs, Wheel awards." },
        { name: "Ramps", desc: "Left ramp (Flying Rocks, Shooter Bypass) and right ramp through the bumpers (Million Plus); both can divert for Bridge Out." },
        { name: "Blast Hole + Blast targets", desc: "Blast value 1M–10M (×2 after the left loop, ×3 after Bridge Out on the right ramp, ×5 Big Blast); Super Blast via loop/ramp → Blast Hole." },
        { name: "Start City Scene scoop", desc: "Starts modes; kicks to the right flipper." },
        { name: "Magic Standup", desc: "Backwards standup under the upper left flipper; let balls from the Lock roll into it for big mode boosts." },
        { name: "Wheel", desc: "12 awards lit by advancing bonus X, collected at the Lock or Blast Hole." },
      ],
      scoring: [
        { key: "Multiball jackpot",   val: "40M, +5M per blade hit (max 75M; +25M max per later MB)" },
        { key: "Skill shot",          val: "5M → 25M + souvenir" },
        { key: "Big Millions (Red)",  val: "5M, +1M each (max 25M)" },
        { key: "Blast",               val: "1M–10M; ×2 / ×3 / ×5" },
        { key: "City modes",          val: "e.g. Atlanta hurry-up 35M, Dallas 13–22M per shot, Salt Lake City 60M; southern cities pay more" },
        { key: "Bonus",               val: "(2M per mode + miles + 200K per blast + 10M per souvenir with its city) × up to 6×" },
      ],
      rules: [
        "<strong>Later multiballs</strong> need the days again (and more blade hits per day from the third); the jackpot cap rises 25M each time.",
        "<strong>Modes:</strong> 18 cities from New York westward; the flashing one changes with bumpers and standups of the same colour. One mode at a time; none during multiball.",
        "<strong>Super Payday</strong> (wizard): during a West Coast mode lock two balls (Bunker, then Bunker/scoop/Blast Hole): 3–4 balls, ramps and loops pay back city totals.",
        "<strong>Souvenirs</strong> (skill shot, Bob's Bunker): 10M each with their city in the bonus, × bonus X.",
        "Rules from Dunn/Moorhouse v2.0 (LA-4/LA-5). Final code L-6 (1995) only fixes bugs; jackpot and Super Payday values are unchanged. L-5 gives souvenirs in a fixed order with TOURNAMENT = YES. Extra balls and Specials are void under comp settings.",
      ],
      benchmarks: [
        { score: "Super Payday",           label: "Great game" },
        { score: "Jackpots + several cities", label: "Good game" },
        { score: "Multiball started",      label: "Baseline" },
      ],
      resources: [
        { name: "Rulesheet (pinball.org)", url: "https://www.pinball.org/rules/roadshow.html", icon: "📖" },
        { name: "IPDB Entry",              url: "https://www.ipdb.org/machine.cgi?id=1972", icon: "🎯" },
        { name: "Pinside Game Page",       url: "https://pinside.com/pinball/machine/road-show-red-and-teds", icon: "🕹️" },
      ],
    },

    strategy: {
      skillShot: "Manual plunge: land the ball in the Blast Hole without touching anything else — a free souvenir plus 5M (+5M per skill shot, max 25M). Also counts when the ball rolls up the skill-shot lane into the hole later.",
      multiball: [
        { name: "Payday Multiball", balls: 3,
          locks: "Blade hits advance the days; Friday lights Lock at Bob's Bunker; lock 2 balls.",
          start: "After lock 2 the blade rises: shoot Ted's mouth (all balls are then kicked out of the Lock).",
          jackpots: "Ted's mouth, then Red's mouth, alternating; 40M +5M per blade hit before (max 75M first time).",
          tip: "Blade hits between lighting and locking ball 1 score Overtime (1.1M–3M)." },
        { name: "Super Payday", balls: 4,
          locks: "During a West Coast mode, lock a ball in Bob's Bunker, then a second in the Bunker, scoop or Blast Hole.",
          start: "Second lock (3–4 balls depending on how the balls sit).",
          jackpots: "Ramps and loops = Payday Bonus (city totals); jets 1M; 3× Blasts; Wheel at the Lock/Blast Hole.",
          tip: "Lock both balls in the Bunker, then make the skill shot into the Blast Hole for 4 balls." },
      ],
      goal: "<strong>Bulldozer → locks → alternate Ted/Red jackpots; ramps for Bridge Out (6× bonus) and miles toward the city modes and Super Payday.</strong>",
      phases: [
        { num: "Phase 1", title: "Skill shot + days", body: "Skill shot into the Blast Hole; bulldozer blade to Friday; lock." },
        { num: "Phase 2", title: "Multiball", body: "Ted, then Red, alternating jackpots." },
        { num: "Phase 3", title: "Cities + bonus", body: "Ramps for miles and Bridge Out; souvenirs × 6× bonus late in the game." },
      ],
      safeShots: [
        { name: "Ramps", desc: "The best shots: Bridge Out, miles, Wheel." },
        { name: "Start City Scene scoop", desc: "Kicks out to the right flipper for an easy catch." },
      ],
      avoidShots: [
        { name: "Middle left flipper area", desc: "Cramped; easy to drain down the left outlane." },
      ],
      tips: [
        { head: "Magic Standup", body: "Don't flip at balls coming out of the Lock — they roll into the Magic Standup (e.g. +16M in Atlanta, 60M in Salt Lake City)." },
        { head: "Souvenirs × bonus X", body: "With several souvenir/city pairs, building 6× bonus in multiball can beat the jackpots (Tilt Forums pro tips)." },
        { head: "Combo", body: "Right ramp Bridge Out with the left loop lit collects both awards (and 275 miles)." },
      ],
      mistakes: [
        "Ignoring Bridge Out — bonus X multiplies the big end-of-ball bonus.",
        "Shooting Ted for the jackpot while the blade is down.",
      ],
    },

    hotspots: [
      { x: 43.5, y: 26,   type: "key",   label: "BD", name: "Bulldozer Blade / Ted", body: "Days to Lock; jackpot +5M; Ted's mouth = jackpot in multiball." },
      { x: 69.5, y: 25.5,   type: "key",   label: "RD", name: "Red's Mouth", body: "Jackpots; Big Millions." },
      { x: 22,   y: 32,   type: "key",   label: "BB", name: "Bob's Bunker (Lock)", body: "Locks; souvenirs; Wheel; extra balls." },
      { x: 29,   y: 24,   type: "key",   label: "LR", name: "Left Ramp", body: "Bridge Out (bonus X); Flying Rocks; miles." },
      { x: 70,   y: 43,   type: "key",   label: "RR", name: "Right Ramp", body: "Bridge Out (bonus X); Million Plus; miles." },
      { x: 56,   y: 50.5, type: "safe",  label: "CS", name: "Start City Scene Scoop", body: "Starts city modes." },
      { x: 79.5, y: 57.5,   type: "info",  label: "BH", name: "Blast Hole", body: "Skill shot; Super Blast; Wheel; modes." },
      { x: 77,   y: 60, type: "info",  label: "BT", name: "Blast Targets", body: "Collect the Blast value (×2/×3/×5)." },
      { x: 23,   y: 53,   type: "info",  label: "LL", name: "Left Loop", body: "U-turn to the middle left flipper; 2× Blast." },
      { x: 55,   y: 17,   type: "info",  label: "CL", name: "Centre Loop", body: "Into the bumpers; relights Bob's Bunker." },
      { x: 54.5, y: 46.5,   type: "info",  label: "RT", name: "Radio Targets", body: "Radio Riot; Nashville and Kansas City modes." },
      { x: 24,   y: 45,   type: "info",  label: "MS", name: "Magic Standup", body: "Mode boosts; lights the Blast targets." },
      { x: 19,   y: 74,   type: "avoid", label: "!",  name: "Left Outlane", body: "Drain; cramped middle-left flipper area above." },
      { x: 84.5, y: 75,   type: "avoid", label: "!",  name: "Right Outlane", body: "Particularly wicked." },
    ],
  };
