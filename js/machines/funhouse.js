  /* ─── FUNHOUSE ──────────────────────────────────────────── */
MACHINES['funhouse'] = {
    name: "Funhouse", sub: "1990 · Williams · Standard",
    tagline: "Pat Lawlor classic · Rudy + clock to Midnight multiball",
    image: "images/funhouse.png",
    difficulty: "Easy–Medium", diffClass: "diff-medium", era: "DMD",

    info: {
      stats: [
        { label: "Manufacturer", value: "Williams Electronics" },
        { label: "Year",         value: "1990" },
        { label: "Designers",    value: "Pat Lawlor & Larry DeMar" },
        { label: "Programmers",  value: "Larry DeMar & Brian Eddy" },
        { label: "Production",   value: "~10,750 units" },
        { label: "Platform",     value: "WPC" },
      ],
      theme: "A funhouse carnival theme starring Rudy, a wise-cracking animatronic head who interacts with the player throughout the game. Advance the clock to midnight, then shoot Rudy's open mouth to start 3-Ball Multiball.",
      features: [
        { name: "Rudy (1)", desc: "The talking animatronic head. Hit Rudy repeatedly to build the End-of-Ball Bonus (200K per hit). His eyes and mouth animate. When Midnight is reached: Rudy falls asleep, mouth opens → shoot mouth (1M) to start Multiball. During Multiball, hitting Rudy = 1M." },
        { name: "Clock", desc: "Advance from 3:00 PM to Midnight (12:00 AM) by shooting specific shots. Key milestones: 6:00 → Quick Multiball, 9:00 → Speed Mode, 11:30 → lock 1st ball at Hidden Hallway (7), 11:45 → lock 2nd ball, Midnight → Rudy asleep → shoot mouth for Multiball." },
        { name: "Trap Door Loop (9)", desc: "Primary Multiball jackpot shot. During Multiball: Million Plus available here — first hit = 2M, each subsequent = +1M, max 10M. Centre Ramp re-opens the Trap Door (250K per ramp hit)." },
        { name: "Centre Ramp (4)", desc: "Re-opens Trap Door during Multiball (250K each). Also scores during normal play (advancing clock, 2-ball Quick Multiball setup)." },
        { name: "Left Ramp (6)", desc: "Advances clock. Scores Step-Up value during normal play." },
        { name: "Skill Shot (Rudy's Mouth)", desc: "Plunge so ball lands directly in Rudy's mouth — 1M first ball, escalating. Most consistent per-ball bonus." },
        { name: "Mirrors", desc: "Upper playfield area. Mirrors reflect and misdirect the ball. Features Jet Bumpers and access to the Hidden Hallway." },
      ],
      scoring: [
        { key: "Skill Shot (Rudy's mouth)", val: "1M+ escalating" },
        { key: "Rudy hit (bonus build)",    val: "200K per hit" },
        { key: "Trap Door Loop first hit",  val: "2M" },
        { key: "Trap Door Loop (max)",      val: "10M per hit" },
        { key: "Centre Ramp (Multiball)",   val: "250K per hit (re-opens Trap Door)" },
        { key: "Rudy hit (Multiball)",      val: "1M" },
        { key: "Quick Multiball Jackpot",   val: "Varies" },
        { key: "Bonus Multiplier (max)",    val: "Increases via specific shots" },
      ],
      rules: [
        "<strong>Clock advancement:</strong> Multiple shots advance the clock — Left Ramp, specific targets, and Rudy hits. Each major milestone lights or enables new features.",
        "<strong>Multiball setup:</strong> Clock to 11:30 → lock at Hidden Hallway (7). Clock to 11:45 → lock second ball. Midnight → Rudy asleep → shoot open mouth to start 3-Ball Multiball.",
        "<strong>Trap Door Loop:</strong> During Multiball, Million Plus starts at 2M. Each hit = +1M. Shoot Centre Ramp to re-open the Trap Door (250K per ramp). Maximize by keeping Trap Door open.",
        "<strong>If no Million Plus scored:</strong> 'Lock' lights for 12 seconds → shoot Hidden Hallway to start 2-ball Hidden Hallway Multiball.",
        "<strong>Rudy hits all game</strong> = 200K added to End-of-Ball Bonus each. Hitting him is always worthwhile.",
      ],
      benchmarks: [
        { score: "100M+", label: "Excellent — Multiball + 10M Trap Door hits" },
        { score: "40M+",  label: "Good — Multiball achieved" },
        { score: "< 15M", label: "Clock not advanced to Midnight" },
      ],
      resources: [
        { name: "IPDB Entry",       url: "https://www.ipdb.org/machine.cgi?id=873",                     icon: "🎯" },
        { name: "Pinside Game Page",url: "https://pinside.com/pinball/machine/funhouse",                 icon: "🕹️" },
        { name: "Zen Studios Guide",url: "https://zenstudios.com/pinball-table-guides",                  icon: "📖" },
      ],
    },

    strategy: {
      skillShot: "Plunge so ball lands in <strong>Rudy's mouth</strong> — 1M first ball, escalating each ball. Most reliable early scoring. Rudy's mouth stays open briefly after launch.",
      multiball: "<strong>Advance clock to Midnight</strong> via Left Ramp and other clock-advancing shots. At 11:30 PM: lock at Hidden Hallway (7). At 11:45 PM: lock second ball. At Midnight: Rudy's mouth opens → shoot mouth (1M) to start 3-Ball Multiball. During Multiball: shoot Trap Door Loop (9) for Million Plus — starts at 2M, grows to 10M per hit. Shoot Centre Ramp (4) to re-open Trap Door (250K). If Trap Door closes between shots, re-open with a Ramp shot then immediately resume Loop.",
      goal: "Land Skill Shot every ball (1M+). Advance the clock to Midnight consistently via Left Ramp and clock shots. Hit Rudy frequently to build End-of-Ball Bonus (200K per hit). Once in Multiball: loop the Trap Door for escalating Million Plus (2M → 10M). The Centre Ramp re-opens the Trap Door — alternate Ramp and Loop shots to keep the jackpot flowing.",
      phases: [
        { num: "Phase 1 · Early Ball", title: "Skill Shot + Clock + Rudy", body: "Rudy's mouth Skill Shot (1M). Hit Left Ramp to advance clock. Hit Rudy periodically for 200K bonus build. Work clock toward 11:30 for first lock opportunity." },
        { num: "Phase 2 · Multiball Setup", title: "Clock to Midnight + Locks", body: "Clock at 11:30 → Hidden Hallway lock. Clock at 11:45 → second lock. Continue advancing toward Midnight. Rudy falls asleep at Midnight → shoot open mouth → Multiball." },
        { num: "Phase 3 · Multiball", title: "Trap Door Loop", body: "Shoot Trap Door Loop (9) for Million Plus (2M, 3M, 4M... to 10M). When Trap Door closes: shoot Centre Ramp (4) immediately (250K re-open). Resume Loop. Rudy hits during Multiball = 1M each." },
      ],
      safeShots: [
        { name: "Left Ramp (6)", desc: "Primary clock-advancing shot. Reliable return. Safe shot throughout the game." },
        { name: "Rudy (1)", desc: "Wide target. 200K per hit for bonus building. Worth hitting whenever ball is in Rudy's range." },
        { name: "Trap Door Loop (9)", desc: "During Multiball: primary scoring loop. Feed from left flipper." },
      ],
      avoidShots: [
        { name: "Mirrors (upper playfield)", desc: "Ball returns are unpredictable. Only shoot when specifically required for modes." },
      ],
      tips: [
        { head: "Centre Ramp re-opens Trap Door", body: "During Multiball, the Trap Door closes after each Million Plus collection. A Centre Ramp shot re-opens it (250K) — then immediately resume looping the Trap Door. Alternate Ramp → Loop to keep the 10M jackpot flowing." },
        { head: "Rudy bonus building is cumulative", body: "Every Rudy hit all game adds 200K to End-of-Ball Bonus. With 5× multiplier, each Rudy hit is effectively 1M. Hit him whenever possible — not just for clock advancement." },
      ],
      mistakes: [
        "Missing the Rudy Skill Shot at plunge — forfeiting 1M+ per ball.",
        "During Multiball, not re-opening Trap Door via Centre Ramp after each Million Plus — the value resets if Door stays closed.",
        "Failing to lock at Hidden Hallway at 11:30 PM — missing the first Multiball lock opportunity.",
      ],
    },

    hotspots: [
      { x:25, y:30, type:"key",   label:"TL", name:"Trap Door Loop (Left Ramp)", body:"<strong>Million Plus: 2M→3M→...→10M per shot per ball.</strong> Re-opens the Trap Door each hit. Primary scoring loop — prioritize all game." },
      { x:50, y:18, type:"key",   label:"CL", name:"Clock (Midnight Target)",    body:"Advance clock toward midnight via ramp shots and standups. <strong>Midnight = 3-Ball Multiball.</strong> Clock advances cumulative across balls." },
      { x:68, y:28, type:"safe",  label:"CR", name:"Centre Ramp",                body:"Re-opens Trap Door after it closes. Also advances the clock. Ball returns to left flipper via habitrail." },
      { x:48, y:38, type:"key",   label:"TD", name:"Trap Door",                  body:"Open Trap Door feeds ball to Left Ramp for Million Plus. During Multiball: Rudy's Eye = Jackpot target. Keep Trap Door open." },
      { x:72, y:45, type:"info",  label:"RU", name:"Rudy's Head",                body:"Hit for Rudy Bonus (100K+). During Multiball, shooting Rudy advances Super Jackpot. Don't let taunts distract — keep shooting ramps." },
      { x:12, y:42, type:"safe",  label:"LO", name:"Left Orbit",                 body:"Feeds bumpers. Bonus Multiplier building. Safe from right flipper." },
      { x:48, y:55, type:"info",  label:"ST", name:"Standup Targets (F-U-N)",    body:"Complete F-U-N for clock advance and feature lighting. Natural hits sufficient — don't force." },
      { x:7,  y:82, type:"avoid", label:"!",  name:"Left Outlane",               body:"Open outlane on strict settings. Keep ball on right side as much as possible." },
      { x:88, y:82, type:"avoid", label:"!",  name:"Right Outlane",              body:"Open outlane. Rudy deflections can surprise — stay alert." },
    ],
  };
