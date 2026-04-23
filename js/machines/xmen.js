  /* ─── THE UNCANNY X-MEN ────────────────────────────────── */
MACHINES['xmen'] = {
    name: "The Uncanny X-Men",  sub: "2024 · Stern · Spike 2",
    tagline: "Days of Future Past · Missions, Sentinels & Berzerker",
    image: "images/uncanny-x-men.webp",
    difficulty: "Hard", diffClass: "diff-hard", era: "Modern",

    info: {
      stats: [
        { label: "Manufacturer", value: "Stern Pinball" },
        { label: "Year",         value: "2024" },
        { label: "Designer",     value: "Jack Danger" },
        { label: "Platform",     value: "Spike 2 / LCD" },
        { label: "Multiball",    value: "Sentinel, Save the City, To Me My X-Men, Berzerker" },
        { label: "Theme",        value: "Marvel Comics — Days of Future Past story arc" },
      ],
      theme: "Jack Danger's third retail design, based on the iconic 'Days of Future Past' X-Men comics arc. Players complete 8 missions, escape to the future by defeating Sentinels, and earn character perks. Features the Danger Room training system, 4 multiballs (including the Berzerker endgame multiball), and Bishop's action-button assist mechanic.",
      features: [
        { name: "Missions (8 Total)", desc: "Hit white shots to qualify missions, then shoot a blue ramp (midtown center ramp or subway right loop) to start one. 4 easy missions (Bishop, Wolverine, Gambit, Professor X) and 4 challenging ones (Rogue, Storm, Colossus, Magneto). Completing a mission triggers The Future." },
        { name: "The Future (Sentinel Mode / Escape Nimrod)", desc: "After any mission, enter The Future. Easy missions: defeat 6 Sentinels at spawned shots within 40 seconds. Challenging missions (Escape Nimrod): make 3 red shots then escape via center or right loop within 35 seconds. Escaping awards a character perk." },
        { name: "Danger Room Training", desc: "During single-ball, non-mode play: hit the spinner, standup targets, bumpers, and danger room exit ramp to advance Danger Room levels. Level 1 (green) doubles ALL mission scoring for the rest of the game. Levels 2–3 make The Future easier. Progress carries ball-to-ball until Level 1." },
        { name: "Sentinel Multiball", desc: "Hit the giant Sentinel head 3 times (+2 per multiball) to spawn it, then deplete its health to open its mouth. Defeat it to start multiball. All shots lit for jackpots. Danger room exit ramp upgrades jackpots to 2× (orange) then 3× (red). 4 jackpots → Super Jackpot at the Sentinel head." },
        { name: "Save the City Multiball", desc: "Hit each of 6 primary ramp/loop shots 3 times to qualify. During: 5 city areas lit for jackpots via their specific switch types. Collect all 5 → X-Jet ramp → danger room spinner for Super Jackpot (1M per spin × 15 seconds)." },
        { name: "To Me, My X-Men Multiball", desc: "Use Cerebro skill shots or hit Nightcrawler targets 5 times to light Cerebro manually. Advance it 3 times by shooting uptown or highway ramp while lit. During: 6 blue shots for jackpots → Super Jackpot at left ramp (min ~5M). 2× SJ at danger room exit ramp." },
        { name: "Berzerker Multiball", desc: "Defeat 35 total Sentinels (across Sentinel Multiball, The Future, and mission shots) to light the uptown ramp. 3-ball multiball where all shots score jackpots at 5M. Every 5 jackpots → X-Jet ramp for Super Jackpot (sum of those 5 jackpots, increasing per SJ)." },
        { name: "Bishop Action Button", desc: "Hit Bishop's bumper (left lower bumper) enough times to charge the action button. Press it during a mission to spot the most valuable unlit shot. An enormous shortcut — especially for challenging missions. Bishop's perk from completing his mission reduces the recharge requirement." },
      ],
      scoring: [
        { key: "Danger Room Level 1 (green)",    val: "Doubles ALL mission shot scoring permanently" },
        { key: "Sentinel Multiball SJ",          val: "Total of all jackpots in current wave (2× at open mouth)" },
        { key: "Save the City spinner SJ",       val: "1M per spin × 15 seconds (can reach 50M+)" },
        { key: "To Me My X-Men SJ",              val: "~5M+ (total of 6 jackpots), 2× at danger room ramp" },
        { key: "Berzerker SJ",                   val: "Sum of 5 jackpots (5M base each, increases per SJ)" },
        { key: "Bishop action button",           val: "Spots the most valuable shot during any active mission" },
      ],
      rules: [
        "Hit white shots to qualify missions, then start one at the <strong>midtown (center) or subway (right loop) ramp</strong>. Use flippers to cycle the mission selection.",
        "<strong>Get Danger Room to Level 1 (green) BEFORE starting your first mission</strong> — it doubles all mission scoring for the rest of the game.",
        "After each mission, enter <strong>The Future</strong> — defeat 6 Sentinels (easy) or make 3 red shots and escape (challenging) to earn a character perk.",
        "<strong>Bishop's action button</strong> spots the most valuable mission shot — charge it between missions by hitting Bishop's bumper and save it for the hardest shot in any mode.",
        "Defeat 35 total Sentinels across all modes to light the uptown ramp for <strong>Berzerker Multiball</strong> — the highest-value multiball on the table.",
      ],
      benchmarks: [
        { score: "500M+",  label: "Excellent — Berzerker, 6+ missions, Danger Room Level 3" },
        { score: "150M+",  label: "Solid — 3–4 missions, Sentinel Multiball, Danger Room Level 1" },
        { score: "40M+",   label: "Getting started — first mission + Future escape" },
      ],
      resources: [
        { name: "IPDB Entry",            url: "https://www.ipdb.org/machine.cgi?id=6779",                         icon: "🎯" },
        { name: "Pinside Game Page",     url: "https://pinside.com/pinball/machine/the-uncanny-x-men-le",         icon: "🕹️" },
        { name: "Tilt Forums Rulesheet", url: "https://tiltforums.com/t/the-uncanny-x-men-rulesheet/9100",        icon: "📖" },
      ],
    },

    strategy: {
      skillShot: {
        name: "Cerebro Skill Shot (left ramp)",
        value: "One free step toward To Me My X-Men Multiball + bonus X",
        desc: "There are 4 skill shots. The best is the Cerebro skill shot — shoot the left ramp off the plunge to spot one advancement toward To Me, My X-Men Multiball. With 3 Cerebro advances needed to start the multiball, taking this skill shot every ball means you qualify To Me My X-Men after just 3 balls of skill shots, for free. Alternatively: shoot the X-Jet into the X-Mansion ramp for +3 bonus X; repeat the downtown shot up to 5 times for +15 seconds of ball save; or soft plunge into the lane near the highway ramp for 200k + 1 bonus X.",
      },
      actionButton: {
        name: "Bishop — Spot the Most Valuable Shot",
        when: "Action button flashes red during any active mission",
        desc: "Hit the <strong>left pop bumper</strong> to charge Bishop's power (up to 3 uses can be stacked). When the button flashes red during a mission, <strong>press it to instantly spot the most valuable lit shot</strong> on the playfield — an enormous shortcut for completing hard missions. Note: Bishop never spots the Sentinel head shot or any Danger Room shot, and is <strong>disabled during Escape Nimrod</strong>. During multiball, bumper hits required to charge Bishop are doubled (unless you've earned Bishop's perk from completing Rescue the Innocent + Future escape, which reduces the requirement). <strong>Rogue perk (hold the button, green flash):</strong> After earning Rogue's perk from Sentinel Facility Raid + Future escape, you can hold the action button during any multiball to add a ball — once per ball.",
      },
      multiball: [
        { name: "Sentinel Multiball", balls: 3,
          locks: "Hit the giant Sentinel head 3 times (+2 per multiball) to spawn it. Deplete health with more head shots to open its mouth, then defeat it.",
          start: "Defeat the giant Sentinel. A Fastball Special combo (two-shot sequence) advances the Sentinel to its next stage immediately.",
          jackpots: "All shots lit yellow for 1× jackpots. Danger room exit ramp → 2× (orange) → 3× (red). After 4 jackpots: SJ at Sentinel head (2× with shot to open mouth). Each wave requires 2 more jackpots than before, up to 6 max.",
          tip: "Shoot the Danger Room exit ramp early in multiball to upgrade jackpots to 2× before cashing in. Unlocked shots without jackpots kill a Sentinel toward Berzerker." },
        { name: "To Me, My X-Men Multiball", balls: 3,
          locks: "Take the Cerebro skill shot each ball (or hit Nightcrawler targets 5 times manually). Advance Cerebro 3 times by shooting uptown or highway ramp while lit.",
          start: "Third Cerebro advance starts the multiball. Three Cerebro skill shots across 3 balls qualify it automatically.",
          jackpots: "Hit 6 blue shots for jackpots (same shot can't repeat consecutively). Every 6th jackpot → SJ at left ramp (min ~5M). 2× SJ at danger room exit ramp. Bonus for summoning all 12 X-Men before a SJ.",
          tip: "The most consistently attainable multiball — three Cerebro skill shots qualify it with no extra effort. Stack it with a mission for massive combined value. Danger room exit ramp 2× SJ is the highest single shot in this multiball." },
      ],
      goal: "<strong>Get Danger Room to Level 1 before any mission → complete easy missions first → escape The Future for perks → stack multiballs with missions → accumulate 35 Sentinel kills for Berzerker Multiball.</strong> Bishop's action button is your most powerful in-game tool — always keep it charged.",
      phases: [
        {
          num: "Phase 1 · Early Game",
          title: "Danger Room First — Always",
          body: "<strong>Before starting any mission, advance Danger Room to Level 1 (green).</strong> During single-ball play between missions, hit the danger room spinner, standup targets, bumpers, and the exit ramp until the green light activates. This doubles ALL mission scoring for the rest of the game. Danger Room progress carries ball-to-ball. Take the Cerebro skill shot every ball to passively bank To Me My X-Men progress.",
        },
        {
          num: "Phase 2 · Easy Missions + Future Escapes",
          title: "Safe Perks from Easy Missions",
          body: "<strong>Start with easy missions (Bishop, Wolverine, Gambit, Prof. X) for reliable perks.</strong> Bishop's perks reduce bumper requirements; Wolverine's extend all ball saves; Gambit's bumper gives 3× mode shot value. After each mission, enter The Future — defeat 6 Sentinels to escape and collect the perk. Every Sentinel killed in The Future counts toward Berzerker (35 total).",
        },
        {
          num: "Phase 3 · Multiballs + Berzerker",
          title: "Stack Multiballs with Missions",
          body: "<strong>Multiballs stack with missions if the mission starts first.</strong> Sentinel Multiball's danger room ramp 3× jackpots combined with Danger Room Level 1 doubled mission scoring is enormous. Build toward 35 Sentinel kills throughout play for Berzerker Multiball — the table's best at 5M per jackpot base with escalating Super Jackpots.",
        },
      ],
      safeShots: [
        { name: "Midtown Center Ramp", desc: "One of two mission start ramps. Also a jackpot shot in all multiballs. Clean, reliable from left flipper — the backbone of your game. Use this as your primary safe shot in all game states." },
        { name: "Downtown Left Loop", desc: "Left-side loop shot. Scores in missions and multiball jackpots. Fast and reliable from the right flipper. Part of the Time Loop combo skill shot (5× for +15s ball save)." },
        { name: "Uptown Left Ramp", desc: "Super Jackpot shot during To Me My X-Men and Berzerker. Advances Cerebro when lit. Reliable from right flipper — the highest-value shot in Berzerker Multiball." },
      ],
      avoidShots: [
        { name: "Challenging Missions without Bishop charged", desc: "Challenging missions (Rogue, Storm, Colossus, Magneto) have strict moving or timed shot requirements. Without Bishop's action button charged, missing their targets is very costly. Only start challenging missions if Bishop is ready or Danger Room is at Level 2+." },
        { name: "Starting missions before Danger Room Level 1", desc: "Without Danger Room Level 1, mission scoring is at base value. Spending 2–3 shots pre-mission to activate it nearly doubles all subsequent mission output — skip this and you leave enormous points on the table." },
      ],
      tips: [
        { head: "Danger Room — first, every game", body: "Danger Room Level 1 doubles all mission shot scoring permanently. It needs spinner, standup targets, bumpers, and exit ramp hits during single-ball non-mode play. It's the most important 30 seconds at the start of any game of X-Men. Don't skip it, ever." },
        { head: "Bishop's action button", body: "Hit Bishop's bumper (lower-left) to charge the action button. When it flashes green during a mission, pressing it spots the most valuable unlit shot. Save it for challenging missions or for the hardest shot in any mode. Bishop mission perk reduces the recharge requirement." },
        { head: "Danger Room exit ramp in Sentinel Multiball", body: "During Sentinel Multiball, the danger room exit ramp upgrades jackpots from 1× to 2× to 3×. Always shoot it early — before collecting jackpots. Tripling jackpot values is the single best move during Sentinel Multiball." },
        { head: "Berzerker progress is passive", body: "Every Sentinel killed in The Future, Sentinel Multiball, and the Sentinel Facility Raid mission counts toward the 35 for Berzerker. Play your missions and multiballs normally and it will arrive mid-game without dedicated effort." },
      ],
      mistakes: [
        "Starting missions before Danger Room Level 1 — base mission scoring is roughly half what it would be with Level 1 active.",
        "Wasting Bishop's action button on easy shots — save it for the hardest shot in challenging missions (Genosha's green Toad shots, Mayhem in Midtown's flanking shots).",
        "Not escaping The Future — failing to defeat 6 Sentinels wastes the perk and leaves you in single-ball with no reward. Know your mode's escape conditions before starting.",
        "Ignoring the Danger Room exit ramp in Sentinel Multiball — collecting jackpots at 1× instead of 2× or 3× is a massive efficiency loss.",
        "Starting Save the City Multiball without knowing the switch types — each city jackpot only activates via specific switches (bumpers for Highway, spinner for Subway, targets for Midtown, etc.).",
      ],
    },

    hotspots: [
      { x:78, y:20, type:"key",   label:"XJ", name:"X-Jet Ramp",              body:"<strong>Major jackpot shot in Save the City and Berzerker Multiball.</strong> One of 6 shots that must be hit 3× to qualify Save the City. Skill shot sequence: X-Jet → X-Mansion ramp = +3 bonus X. Reliable from the left flipper." },
      { x:12, y:20, type:"safe",  label:"DT", name:"Downtown Left Loop",      body:"Wide left-side loop. One of 6 Save the City qualifying shots. Fast and reliable from the right flipper. Part of the Time Loop Combo skill shot (5× for +15s ball save)." },
      { x:20, y:25, type:"key",   label:"UP", name:"Uptown Left Ramp",        body:"<strong>Super Jackpot shot in To Me My X-Men and Berzerker Multiball.</strong> Advances Cerebro when lit. The highest-value shot during Berzerker — shoot it for every Super Jackpot. One of 6 Save the City qualifying shots." },
      { x:48, y:20, type:"key",   label:"MT", name:"Midtown Center Ramp",     body:"<strong>One of two mission start ramps (blue arrow = choose mission here).</strong> Save the City qualifying shot. Jackpot in all multiballs. Your primary safe shot — always active and reliable." },
      { x:78, y:18, type:"safe",  label:"SB", name:"Subway Right Loop",       body:"Second mission start ramp (blue arrow). One of 6 Save the City qualifying shots. Also Escape Nimrod completion target. Fast loop from the left flipper." },
      { x:50, y:15, type:"key",   label:"SN", name:"Giant Sentinel Head",     body:"<strong>Hit 3× to spawn the giant Sentinel, then deplete health to start Sentinel Multiball.</strong> Super Jackpot scored here during multiball (2× into open mouth). Each hit also counts toward the 35-Sentinel Berzerker threshold." },
      { x:28, y:30, type:"key",   label:"DR", name:"Danger Room Exit Ramp",   body:"<strong>The most important shot during Sentinel Multiball</strong> — shoot it to upgrade jackpots from 1× to 2× (orange) then 3× (red). During single-ball, advances the Danger Room level (Level 1 doubles all mission scoring). Always hit this early in Sentinel Multiball." },
      { x:65, y:35, type:"info",  label:"BP", name:"Bishop Bumper",           body:"Hit enough to charge the action button. Pressing it during a mission <strong>spots the most valuable unlit shot.</strong> Bishop's perk (after completing Rescue the Innocent + Future escape) reduces hits required. Charge it between every mission." },
      { x:72, y:40, type:"info",  label:"GM", name:"Gambit Bumper",           body:"Hit 3× (or alley pass via right inlane) to activate <strong>2× on your next mode shot value.</strong> Gambit perk (after Smuggled Cargo + Future) upgrades to 3×. Activate before every mission start — it's a free score multiplier." },
      { x:10, y:82, type:"avoid", label:"!",  name:"Left Outlane",            body:"Left outlane drain. Hit the X-Mansion ball save targets near the outlane to light an outlane save (10 hits = Jean Grey perk). Keep shots centered and use controlled flipper technique." },
    ],
  };
