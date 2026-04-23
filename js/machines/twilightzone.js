  /* ─── TWILIGHT ZONE ─────────────────────────────────────── */
MACHINES['twilightzone'] = {
    name: "Twilight Zone", sub: "1993 · Bally · Standard",
    tagline: "Pat Lawlor masterpiece · Door Panels + Piano Multiball",
    image: "images/twilight-zone.png",
    difficulty: "Hard", diffClass: "diff-hard", era: "DMD",

    info: {
      stats: [
        { label: "Manufacturer", value: "Bally (Williams Electronics)" },
        { label: "Year",         value: "1993" },
        { label: "Designer",     value: "Pat Lawlor" },
        { label: "Programmers",  value: "Larry DeMar & Ted Estes" },
        { label: "Production",   value: "15,235 units" },
        { label: "Platform",     value: "WPC" },
      ],
      theme: "Based on the classic TV series. Surreal, spooky, dimension-bending theme. Features a talking gumball machine, a miniature town square, a camera, and an animate piano. Collecting Door Panels (14 total) progresses through the zones.",
      features: [
        { name: "Piano (13)", desc: "Main Jackpot target. Shoot after hitting 7 Greed Targets for Jackpot (15M base). Relit by Camera Lane. Each Greed Target hit during Jackpot window = +5M (max 15+35M escalation over relights). Also starts Multiball sequences." },
        { name: "Greed Targets (1,3,4,12,15,16,17)", desc: "Seven standup targets spread across the playfield. Hit all 7 → Piano lit for Jackpot. Each target = 1M. During Piano Jackpot window: each hit = +5M to Jackpot value." },
        { name: "Left Ramp (8)", desc: "Bonus X target (Right Inlane → 5-sec window → Left Ramp = +1× Bonus Multiplier, max 5×). Also Miles accumulation and mode scoring." },
        { name: "Camera Lane (6)", desc: "Re-lights the Piano Jackpot. Each 10 Robots collected = Camera Award (collect here). Camera Awards: extra ball, hold bonus, 10M, Collect Bonus (mid-ball bonus payout), Spiral, others." },
        { name: "Lock Lane (11)", desc: "Ball lock for Multiball. Also accumulates Robots (+1 per pass, along with Left Ramp)." },
        { name: "Town Square Lane (5)", desc: "Town Square Award (up to 25M). Dead End feature doubles the current Town Square Award when lit." },
        { name: "14 Door Panels", desc: "Collected via Skill Shot (Yellow = 10M Door Panel free), Piano hits, and other modes. Door Panels include: 10M, Super Speed, Battle the Power, The Camera (best for scoring), Hitch-Hiker, Gumball Machine, Spiral, Super Jets, The Power, Extra Ball, Hold Bonus, and more." },
      ],
      scoring: [
        { key: "Yellow Skill Shot",       val: "10M + free Door Panel" },
        { key: "Greed Target each",       val: "1M" },
        { key: "Piano Jackpot (base)",    val: "15M" },
        { key: "Piano Jackpot (max w/ relights)", val: "90M+ (after 5 relights)" },
        { key: "Bonus Multiplier (max)",  val: "5× (Right Inlane → Left Ramp)" },
        { key: "Town Square Award (max)", val: "25M" },
        { key: "Dead End × Town Square",  val: "Up to 50M" },
        { key: "Camera Award — Collect Bonus", val: "Full bonus mid-ball" },
        { key: "Lost in the Zone (wizard)", val: "6 balls, all modes, 45 sec" },
      ],
      rules: [
        "<strong>Bonus Multiplier:</strong> Right Inlane lights Left Ramp for 'Bonus X' for 5 seconds. Shoot Left Ramp immediately = +1× (max 5×). Resets each ball — build it first.",
        "<strong>Piano Jackpot:</strong> Hit all 7 Greed Targets → Piano lit. Shoot Piano for Jackpot. During Piano window: more Greed Target hits = +5M each to Jackpot. Relight Piano via Camera Lane. Jackpot increases with each relight.",
        "<strong>Robots</strong> accumulate from Left Ramp and Lock Lane passes. Every 10 Robots = Camera Award at Camera Lane (6).",
        "<strong>Yellow Skill Shot</strong> earns a Door Panel instantly and 10M — the best consistent per-ball reward. Adjust plunger carefully.",
        "<strong>Dead End</strong> (left side feature) doubles current Town Square Award. Shoot Town Square Lane (5) immediately after Dead End activates for up to 50M.",
      ],
      benchmarks: [
        { score: "500M+", label: "Excellent — multiple Multiball completions + wizard mode" },
        { score: "150M+", label: "Good — consistent Multiball and Camera Awards" },
        { score: "< 50M", label: "Early drain or missed Jackpot windows" },
      ],
      resources: [
        { name: "IPDB Entry",       url: "https://www.ipdb.org/machine.cgi?id=2684",                    icon: "🎯" },
        { name: "Pinside Game Page",url: "https://pinside.com/pinball/machine/twilight-zone",            icon: "🕹️" },
        { name: "Zen Studios Guide",url: "https://zensite.wpenginepowered.com/wp-content/uploads/2024/01/WP-Twilight-Zone-Pinball-Guide-by-ShoryukenToTheChin.pdf", icon: "📖" },
      ],
    },

    strategy: {
      skillShot: "Adjust plunger power so ball hits the <strong>Yellow Skill Shot lane</strong> — 10M immediately plus a free Door Panel. Yellow Skill Shot is the best per-ball free reward available.",
      multiball: "Hit all 7 <strong>Greed Targets</strong> → Piano (13) lights for Jackpot (15M base). During Piano window: hit more Greed Targets for +5M each. Relight Piano via Camera Lane (6). Each relight increases base Jackpot. After 5 relights: up to 90M+ per Piano shot. This is the game's primary scoring loop.",
      goal: "Land the Yellow Skill Shot every ball for 10M + free Door Panel. Build Bonus Multiplier to 5× (Right Inlane → Left Ramp reflex). Complete Greed Targets repeatedly and score escalating Piano Jackpots via Camera Lane relights. Accumulate Robots from Left Ramp and Lock Lane → Camera Awards every 10 (prioritize 'Collect Bonus' for mid-ball bonus payout). Shoot Dead End → Town Square Lane immediately for doubled Town Square Awards (up to 50M). Collect all 14 Door Panels for Lost in the Zone wizard mode.",
      phases: [
        { num: "Phase 1 · Early Ball", title: "Skill Shot + Bonus X + Greed", body: "Yellow Skill Shot for 10M + Door Panel. Right Inlane → Left Ramp immediately for +1× Bonus Multiplier (repeat up to 5×). Then: hit Greed Targets (1M each) → Piano for Jackpot → Camera Lane to relight Piano." },
        { num: "Phase 2 · Mid Ball", title: "Piano Jackpot Loop + Camera Awards", body: "Camera Lane relights Piano and escalates base Jackpot each time. During Piano window: hit Greed Targets for +5M each before shooting Piano. Watch for Robots milestone (every 10 Left Ramp + Lock Lane passes) → Camera Award. 'Collect Bonus' Camera Award = massive mid-ball payout if multiplier is at 5×." },
        { num: "Phase 3 · Town Square + Door Panels", title: "Dead End combos + Wizard Mode", body: "Dead End doubles Town Square Award. When Dead End activates, immediately shoot Town Square Lane (5) for up to 50M. Collect all 14 Door Panels → Lost in the Zone: 6 balls, 45 seconds, all modes active simultaneously." },
      ],
      safeShots: [
        { name: "Left Ramp (8)", desc: "Bonus X multiplier, Robot accumulation, reliable ramp return. Primary safe shot throughout the game." },
        { name: "Greed Targets", desc: "Spread around the playfield. 1M each, build toward Piano Jackpot. Lower-risk target shots." },
        { name: "Camera Lane (6)", desc: "Relights Piano, grants Camera Awards. Safe center shot." },
      ],
      avoidShots: [
        { name: "Piano (13) without Jackpot lit", desc: "Moderate-risk shot that returns unpredictably. Only shoot when Jackpot is lit." },
        { name: "Lock Lane (11) without purpose", desc: "Ball lock consumes a lock sequence — only shoot when setting up Multiball or collecting Robots." },
      ],
      tips: [
        { head: "Right Inlane → Left Ramp is a reflex", body: "Every time the ball rolls through the Right Inlane, the Left Ramp is lit for Bonus X for 5 seconds. Develop the habit of immediately shooting Left Ramp after every Right Inlane pass — 5× bonus multiplier compounds all end-of-ball scoring significantly." },
        { head: "Camera Award priority", body: "When a Camera Award is available, 'Collect Bonus' is the best pick if your bonus multiplier is high. At 5× with accumulated bonus, this can be 50M+ mid-ball." },
        { head: "Dead End timing", body: "Dead End doubles the current Town Square Award. If Town Square Award is at 25M, Dead End + Town Square Lane = 50M. Watch for Dead End activation and immediately shoot Town Square." },
      ],
      mistakes: [
        "Missing the Yellow Skill Shot — forfeiting 10M + Door Panel every ball.",
        "Not shooting Left Ramp within 5 seconds of Right Inlane (missing Bonus X window).",
        "Shooting Piano without having all 7 Greed Targets hit — Jackpot starts at minimum.",
        "Not relighting Piano via Camera Lane — the Jackpot escalation over multiple relights is the main scoring engine.",
        "Ignoring Robots accumulation — 10 Robots from Left Ramp + Lock Lane = Camera Award, potentially a Collect Bonus worth 50M+.",
      ],
    },

    hotspots: [
      { x:18, y:22, type:"key",   label:"LR", name:"Left Ramp (Camera)",        body:"<strong>Primary shot.</strong> Bonus Multiplier via Right Inlane → Left Ramp (5-sec window). Feeds Slot Machine. Essential for Piano Jackpot setup." },
      { x:48, y:16, type:"key",   label:"PI", name:"Piano (Jackpot)",            body:"<strong>Collect Piano Jackpot here.</strong> Built by 7 Greed Targets: 15M–90M+. Cycle the flashing Greed target via pop bumpers then shoot standup." },
      { x:72, y:28, type:"key",   label:"GD", name:"Greed Targets",             body:"Seven standups spelling G-R-E-E-D-!-?. Complete all → light Piano Jackpot. Each hit adds to value. Cycle flashing target via Right Orbit (Jet Bumpers)." },
      { x:10, y:42, type:"safe",  label:"LO", name:"Left Orbit",                body:"Soft shot → Camera Lanes for Bonus Multiplier. Full-power → Jet Bumpers / Slot Machine. Reliable from right flipper." },
      { x:62, y:38, type:"safe",  label:"PS", name:"Power Saucer (Right)",      body:"Collects active award. Hit Right Inlane first (5-sec window) then shoot. Also collects Spiral jackpots." },
      { x:50, y:46, type:"info",  label:"SL", name:"Slot Machine",              body:"Triggered by Left Ramp. Awards Extra Ball, Jackpot, Special, or playfield multipliers." },
      { x:82, y:20, type:"info",  label:"RO", name:"Right Orbit",               body:"Feeds Jet Bumpers. Use to cycle Greed target letter and advance Spiral." },
      { x:7,  y:82, type:"avoid", label:"!",  name:"Left Outlane",              body:"No rubber on strict settings. Left orbit shots can feed left outlane." },
      { x:88, y:82, type:"avoid", label:"!",  name:"Right Outlane",             body:"Fast drain risk after Right Orbit. Trap carefully before right-side shots." },
    ],
  };
