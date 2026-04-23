  /* ─── RED AND TED'S ROAD SHOW ───────────────────────────── */
MACHINES['roadshow'] = {
    name: "Red and Ted's Road Show", sub: "1994 · Williams · Standard",
    tagline: "Cross-country road trip · Bridge Out multiplier + City Events",
    image: "images/road-show.png",
    difficulty: "Medium–Hard", diffClass: "diff-hard", era: "DMD",

    info: {
      stats: [
        { label: "Manufacturer", value: "Williams Electronics" },
        { label: "Year",         value: "1994" },
        { label: "Designer",     value: "Pat Lawlor" },
        { label: "Programmers",  value: "Dwight Sullivan & Ted Estes" },
        { label: "Production",   value: "6,259 units" },
        { label: "Platform",     value: "WPC" },
      ],
      theme: "Red (a talking skull) and Ted (a giant animatronic bulldozer) travel from New York to Los Angeles destroying everything in their path. 18 City Events unlock as you travel. Reach the West Coast for Super Payday wizard mode.",
      features: [
        { name: "Bridge Out (Left/Right Ramps)", desc: "<strong>Most important ongoing mechanic.</strong> Left Inlane → Right Ramp lit for 5 sec, or Inner Right Inlane → Left Ramp lit for 5 sec. Each Bridge Out = +1× End-of-Ball Bonus Multiplier (max 6×). After 6×: each Bridge Out = 10M." },
        { name: "Bob's Bunker Spinner (5)", desc: "Center shot. Collects Blast Wheel Awards and Souvenirs. <strong>Big Millions</strong> (5M→25M escalating) lights at Red (11) for a few seconds every time ball exits here." },
        { name: "Bulldozer / Ted (8)", desc: "Hit Bulldozer Targets Bank to advance day of week (Mon→Fri). Each hit = 1.5M. At Friday: Lock lights at Bob's Bunker → Multiball. Day resets after each Multiball." },
        { name: "Red Skull (11)", desc: "Normal hit = 4M. Open mouth = 20M. 6 hits = 20M Cheeseburger. <strong>Big Millions</strong> (5M→25M) lights here after each Bob's Bunker exit. Alternating Jackpot target with Ted during Multiball." },
        { name: "Left Orbit (2)", desc: "170 Miles per shot — best Miles source. Lights Blast Zone Targets 2× temporarily." },
        { name: "City Event Hole (14)", desc: "Activates City Events + 75 Miles. Best events: Salt Lake City (60M if Bulldozer hit in 5 sec), Las Vegas (Blast Wheel cycling), Denver (Left Ramp escalating to 50M)." },
        { name: "Souvenirs + Albuquerque Trading Post", desc: "Buy cheap Souvenirs (500K–5M), collect free ones via Skill Shot. At Albuquerque City Event: sell all Souvenirs for cost × current Bonus Multiplier. At 6×: a 5M Souvenir sells for 30M." },
      ],
      scoring: [
        { key: "Skill Shot (Blast Hole)",  val: "5M→25M + free Souvenir" },
        { key: "Bridge Out",               val: "+1× Bonus Multiplier (max 6×)" },
        { key: "Bridge Out after 6×",      val: "10M each" },
        { key: "Big Millions (max)",        val: "25M (grows across game)" },
        { key: "Multiball Jackpot",        val: "40M (1st) / 65M (2nd) / 75M+ base" },
        { key: "Super Payday",             val: "All targets = 1M for duration" },
        { key: "Salt Lake City event",     val: "60M (Bulldozer within 5 sec)" },
        { key: "Albuquerque Souvenir",     val: "Cost × Bonus Multiplier" },
        { key: "Flying Rocks — Ted head",  val: "25M" },
        { key: "Radio Riot (10M/target)",  val: "Up to 30–50M from Radio Bank" },
      ],
      rules: [
        "<strong>Bridge Out reflex:</strong> Every Left/Right Inlane pass → immediately shoot the lit Ramp (5-sec window). Building to 6× is the most important ongoing task.",
        "<strong>Big Millions:</strong> Every time ball exits Bob's Bunker → Red (11) lights for Big Millions for a few seconds (5M→25M escalating game-wide). Shoot Red immediately.",
        "<strong>Albuquerque Trading Post:</strong> Wait for 6× multiplier BEFORE reaching Albuquerque. Selling Souvenirs at 6× transforms cheap Souvenirs into massive payouts.",
        "<strong>Multiball:</strong> Hit Bulldozer Targets → advance to Friday → Lock 2 balls at Bob's Bunker → shoot ball into Ted's mouth. Jackpot alternates Red/Ted. During Red window: Bulldozer hits each +5M (up to 125M).",
        "<strong>Flying Rocks:</strong> 3 Blasts → Flying Rocks activates (Left Ramp → Left Plunger). Middle exit = Radio Riot (10M per Radio Target for rest of ball).",
      ],
      benchmarks: [
        { score: "500M+", label: "Excellent — Super Payday reached" },
        { score: "150M+", label: "Good — Multiball + 6× multiplier + Trading Post" },
        { score: "< 50M", label: "Multiplier not built or early drain" },
      ],
      resources: [
        { name: "IPDB Entry",       url: "https://www.ipdb.org/machine.cgi?id=1993",                    icon: "🎯" },
        { name: "Pinside Game Page",url: "https://pinside.com/pinball/machine/road-show",                icon: "🕹️" },
        { name: "Zen Studios Guide",url: "https://zensite.wpenginepowered.com/wp-content/uploads/2024/01/WP-Road-Show-Pinball-Guide-by-ShoryukenToTheChin.pdf", icon: "📖" },
      ],
    },

    strategy: {
      skillShot: "Adjust plunger to land ball in the <strong>Blast Hole (16)</strong> — 5M first ball, up to 25M by ball 5. Also awards a free Souvenir (pure profit at Albuquerque) and can activate the current City Event.",
      multiball: "<strong>Hit Bulldozer Targets Bank (8)</strong> to advance Mon→Fri → Lock lights at Bob's Bunker → lock 2 balls → shoot Ted's mouth. Jackpot alternates Red (11) and Ted (8). During Red window (Bulldozer lowered): hit Bulldozer targets aggressively for +5M each → shoot Red for max Jackpot. First Multiball = 40M base, 2nd = 65M, 3rd+ = 75M.",
      goal: "Build the End-of-Ball Bonus Multiplier to 6× via Bridge Out shots (every inlane → immediate Ramp). Collect cheap Souvenirs early, sell them all at Albuquerque at 6× for multiplied value. Score Big Millions (25M max) after every Bob's Bunker exit. Advance to Multiball via Bulldozer Targets, grow the Jackpot during Red windows. Reach the West Coast for Super Payday (all targets = 1M).",
      phases: [
        { num: "Phase 1 · Early Ball", title: "Skill Shot + Bridge Out + Souvenirs", body: "Blast Hole Skill Shot (5M + free Souvenir). Make Bridge Out reflex automatic: every inlane → shoot lit Ramp immediately. Buy cheapest Souvenirs (Coffee Mug 750K, Salt Shakers 500K) at Bob's Bunker. Hit Bulldozer Targets toward Friday." },
        { num: "Phase 2 · Mid Ball", title: "6× + Trading Post + Multiball", body: "Continue Bridge Out on every inlane — reach 6×. Purchase city-specific Souvenirs before their City Events (10M bonus to End-of-Ball Bonus each). Activate Albuquerque Trading Post at 6× to sell. Lock 2 balls at Bob's Bunker → Multiball. During Multiball: Bulldozer hits during Red window → maximum Jackpot." },
        { num: "Phase 3 · West Coast", title: "Super Payday Wizard Mode", body: "Progress through City Events eastward to west. Hit Salt Lake City event (60M if Bulldozer in 5 sec). At Seattle/SF/LA: lock ball during City Event → lock second → Super Payday. All targets = 1M. Hit everything continuously." },
      ],
      safeShots: [
        { name: "Left Ramp (7) / Right Ramp (15)", desc: "Both primary safe shots. Bridge Out opportunities, Miles, Flying Rocks activation. Reliable from respective flippers." },
        { name: "Bob's Bunker Spinner (5)", desc: "Center safe shot. Collects Souvenirs, Blast Wheel Awards, triggers Big Millions at Red." },
        { name: "Bulldozer Targets Bank (8)", desc: "Wide target bank, easy to hit. Advances day of week toward Multiball." },
      ],
      avoidShots: [
        { name: "Red (11) without Big Millions lit", desc: "Standup target causing erratic bounces. Only shoot when Big Millions or Jackpot is lit." },
        { name: "Left Orbit (2) without control", desc: "Best Miles shot but sends ball to unpredictable bumper zone. Only when ball control is confident." },
      ],
      tips: [
        { head: "Bridge Out is everything", body: "Every inlane pass gives a 5-second window to shoot the lit Ramp for a Bonus Multiplier increase. Make this a reflex. At 6×, the Albuquerque Souvenir sale and end-of-ball bonus become enormous. After 6×: each Bridge Out = 10M." },
        { head: "Big Millions grows game-wide", body: "First Bob's Bunker exit = 5M at Red. Each subsequent = +1M, up to 25M. By late game, every Bob's Bunker exit → shoot Red immediately for 25M." },
        { head: "Flying Rocks middle exit = Radio Riot", body: "After 3 Blasts: Left Ramp → Left Plunger → choose Middle exit for Radio Riot (10M per Radio Target for rest of ball). Easy 30–50M from Radio Target Bank." },
      ],
      mistakes: [
        "Missing Bridge Out windows after inlane passes — 5 seconds is short, make it a reflex.",
        "Buying expensive Souvenirs before reaching 6× multiplier — wait for max before Albuquerque.",
        "During Multiball, shooting Ted's mouth when Red is the Jackpot target — let Bulldozer hits build the Jackpot first.",
        "Not immediately shooting Red (11) for Big Millions after Bob's Bunker exit.",
      ],
    },

    hotspots: [
      { x:20, y:25, type:"key",   label:"LR", name:"Left Ramp (Red's Ramp)",    body:"<strong>Primary ramp.</strong> +1× Bonus Multiplier (max 6×) via Left Inlane → Left Ramp 3-sec window. Builds Mileage. Big Millions target (5M→25M escalating)." },
      { x:72, y:25, type:"key",   label:"RR", name:"Right Ramp (Ted's Ramp)",   body:"Mirror of Left Ramp — +1× Bonus Multiplier via Right Inlane. Big Millions target. Build both ramps equally for 6× multiplier quickly." },
      { x:50, y:18, type:"key",   label:"BB", name:"Bob's Bunker",              body:"<strong>Lights Big Millions mode.</strong> 5M→10M→15M→20M→25M per ramp shot for 20 seconds — the game's peak scoring window." },
      { x:48, y:35, type:"safe",  label:"CS", name:"Centre Scoop",              body:"City progression. Albuquerque Trading Post: Souvenir × 6× when all six categories collected." },
      { x:14, y:45, type:"safe",  label:"LO", name:"Left Orbit",                body:"Safe shot. Feeds jet bumpers. Bonus Multiplier via Left Inlane." },
      { x:82, y:45, type:"info",  label:"RO", name:"Right Orbit",               body:"Feeds jet bumpers. Bonus Multiplier via Right Inlane. Use during Souvenir 2× window." },
      { x:48, y:50, type:"info",  label:"MB", name:"Multiball Locks",           body:"Complete G-R-U-N-G-E → lock in Red's and Ted's craters. Jackpot 40M → Super Jackpot 65M → Mega Jackpot 75M+." },
      { x:7,  y:82, type:"avoid", label:"!",  name:"Left Outlane",              body:"Open outlane. Left orbit shots can feed left drain." },
      { x:88, y:82, type:"avoid", label:"!",  name:"Right Outlane",             body:"Open outlane. Right ramp misses slide right — deliberate aim only." },
    ],
  };
