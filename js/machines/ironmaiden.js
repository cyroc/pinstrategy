  /* ─── IRON MAIDEN: LEGACY OF THE BEAST ─────────────────── */
MACHINES['ironmaiden'] = {
    name: "Iron Maiden: Legacy of the Beast",  sub: "2018 · Stern · Spike 2",
    tagline: "Eddie Battles · Soul Shards & Power Features",
    image: "images/iron-maiden.png",
    difficulty: "Medium", diffClass: "diff-medium", era: "Modern",

    info: {
      stats: [
        { label: "Manufacturer", value: "Stern Pinball" },
        { label: "Year",         value: "2018" },
        { label: "Designer",     value: "Keith Elwin" },
        { label: "Platform",     value: "Spike 2 / LCD" },
        { label: "Multiball",    value: "Trooper (3-ball), Mummy, Cyborg" },
        { label: "Theme",        value: "Iron Maiden band / Legacy of the Beast mobile game" },
      ],
      theme: "Keith Elwin's debut design for Stern. Players battle as Eddie through 5 themed modes — Aces High, Fear of the Dark, Rime of the Ancient Mariner, Hallowed Be Thy Name, and Flight of Icarus — then face 2 Minutes to Midnight and the Number of the Beast wizard mode. Features three multiballs, Soul Shards, Eddie Cards, and the Run to the Hills 6-ball super wizard.",
      features: [
        { name: "Eddie Battles (5 Modes)", desc: "Spell E-D-D-I-E at white arrow shots to qualify a Battle at the Pharaoh center ramp. 5 battles: Aces High (2-ball), Fear of the Dark, Rime of the Ancient Mariner (2-ball), Hallowed Be Thy Name, Flight of Icarus. Complete all 5 to unlock the 6th: 2 Minutes to Midnight." },
        { name: "Soul Shards", desc: "Win any Eddie Battle and the bullseye target lights for 10 seconds to collect a Soul Shard — a hurry-up worth 20% of battle score × 2 or 3 based on position. Missing the 10-second window loses the shard entirely." },
        { name: "Power Features", desc: "Make shots repeatedly to activate Power Features (Spinners, Orbits, Ramps, Targets, Bumpers). Complete all 5 to qualify Cyborg Multiball. Each completed feature builds the Power Jackpot at the Orb target." },
        { name: "Trooper Multiball (3-ball)", desc: "Complete drop targets twice to light lock, then lock 3 balls at the orbits (left orbit + right loop) for 3-ball multiball. All shots lit for jackpots. Collect 3 jackpots → Super Jackpot. Complete drops during multiball → bullseye cannon shot for bonus jackpots + add-a-ball." },
        { name: "Mummy Multiball", desc: "Hit the Sarcophagus captive ball twice to light the Mummy Lock. Lock a ball, then spell MUMMY (5 more captive ball hits) to start multiball. Jackpots via switch hit accumulation at the captive ball. Spelling MUMMY again → Super Jackpot at bullseye." },
        { name: "Eddie Cards (4 Cards)", desc: "Earn Eddie Cards from Mummy, Cyborg, Trooper multiballs, and 2 Minutes to Midnight. Collect all 4 to qualify Number of the Beast wizard mode. Level 2 cards (harder to earn) are retained after failed NoBeast attempts." },
        { name: "Tomb Treasures", desc: "10 objectives light the Tomb (right loop on Pro) for a cumulative award sequence: points, super slings, Power Jackpot boosts, extra ball, revive. Collecting all 10 starts Run to the Hills — the 6-ball super wizard mode." },
        { name: "Left Spinner (Fear of the Dark)", desc: "During the Fear of the Dark Eddie Battle, a spinner rip scores massive points based on the lit shot value. Also advances Power Spinner feature. Rip aggressively when controlled." },
      ],
      scoring: [
        { key: "Skill Shot (soft plunge)",     val: "1M + 1 EDDIE letter + 5s ball save" },
        { key: "Super Skill Shot",             val: "5M + Playfield X multiplier + 10s ball save" },
        { key: "Soul Shard hurry-up",          val: "20% of battle score × 2 or 3" },
        { key: "Power Jackpot (Orb target)",   val: "Built by Power Features + Eddie Cards + Mystery awards" },
        { key: "Trooper Super Jackpot",        val: "Escalates per jackpot multiplier round (1×–5×)" },
        { key: "2 Minutes to Midnight SJ",     val: "Sum of all 5 mode shots (up to 2× multiplier)" },
      ],
      rules: [
        "<strong>Spell EDDIE at white arrow shots</strong> to qualify a Battle at the Pharaoh center ramp — you're spotted 2 free EDDIE letters toward your first mode.",
        "After winning a Battle, <strong>shoot the bullseye within 10 seconds</strong> for the Soul Shard hurry-up. Missing it wastes a major scoring opportunity.",
        "Stack single-ball Eddie Battles with <strong>Trooper or Mummy Multiball</strong> for maximum combined scoring — 2-ball modes cannot be stacked.",
        "<strong>Super Skill Shot:</strong> hold left flipper, inner orbit back to upper flipper, shoot the Super Jackpot target = 5M + Playfield X.",
        "<strong>Power Jackpot</strong> at the Orb target is the biggest non-mode score available. Build it with Power Features and Eddie Cards, then cash out with Playfield X active.",
      ],
      benchmarks: [
        { score: "500M+",  label: "Excellent — multiple Battles, multiballs, Soul Shards collected" },
        { score: "150M+",  label: "Solid — 2–3 Battles completed with Soul Shards" },
        { score: "40M+",   label: "Getting started — consistent Battle qualification" },
      ],
      resources: [
        { name: "IPDB Entry",            url: "https://www.ipdb.org/machine.cgi?id=6534",                            icon: "🎯" },
        { name: "Pinside Game Page",     url: "https://pinside.com/pinball/machine/iron-maiden-le",                  icon: "🕹️" },
        { name: "Tilt Forums Rulesheet", url: "https://tiltforums.com/t/iron-maiden-pinball-rulesheet/3787",          icon: "📖" },
      ],
    },

    strategy: {
      skillShot: {
        name: "Super Skill Shot (5M + Playfield X)",
        value: "5M + Playfield X multiplier + 10s ball save",
        desc: "Hold the left flipper before plunging and let the ball travel the inner orbit back down to the upper flipper. Then shoot the Super Jackpot target for 5M + a Playfield X multiplier + 10 seconds of ball save. Very reliable once you identify the target, and Playfield X boosts your first shots significantly. The basic soft plunge (1M + 1 EDDIE letter + 5s ball save) is a fine alternative — a free EDDIE letter is never wasted.",
      },
      multiball: [
        { name: "Trooper Multiball", balls: 3,
          locks: "Complete the drop targets twice to light lock. Then shoot the green arrow orbit shots (left orbit and right loop) to virtually lock 3 balls.",
          start: "Lock 3 balls at the orbits to start Trooper Multiball.",
          jackpots: "All shots lit blue for 1× jackpots. Collect 3 jackpots → Super Jackpot at the Super Jackpot target. Each SJ relights jackpots at +1× (green, yellow, orange, red progression). Complete drops during multiball to light the bullseye cannon for bonus jackpots + add-a-ball.",
          tip: "Trooper is your most consistently attainable multiball. Stack a single-ball Eddie Battle inside Trooper for the biggest scoring window — Battle mode jackpots carry the Trooper multiplier." },
        { name: "Mummy Multiball", balls: 2,
          locks: "Hit the captive ball (Sarcophagus) twice to light the Mummy Lock at the center ramp (Pro). Lock a ball, then hit the captive ball 5 more times to spell MUMMY.",
          start: "Captive ball hit after MUMMY is spelled starts Mummy Multiball.",
          jackpots: "Jackpots at the captive ball via switch hit accumulation (10 hits per jackpot). Each jackpot spots a MUMMY letter. Spell MUMMY → Super Jackpot at the bullseye (× 2 or 3 based on target position hit).",
          tip: "Build MUMMY with casual captive ball hits throughout the game. Once the lock lights, prioritize it. Stacks freely with single-ball Eddie Battles." },
      ],
      goal: "<strong>Spell EDDIE at white arrows → start Eddie Battles at the Pharaoh ramp → win battles for Soul Shards (bullseye within 10 sec) → stack with Trooper Multiball → build Power Features for the Power Jackpot.</strong> Every completed Battle brings you closer to 2 Minutes to Midnight and the Number of the Beast wizard mode.",
      phases: [
        {
          num: "Phase 1 · Early Game",
          title: "Earn EDDIE Letters + Qualify First Battle",
          body: "<strong>Start with the Super Skill Shot for Playfield X and 5M.</strong> Then shoot white arrow shots to spell EDDIE — you're spotted 2 free letters. Left ramp, orbits, and right loop are your targets. When EDDIE is spelled, the Pharaoh center ramp lights — shoot it to start your first Battle. Use the left spinner before EDDIE is fully spelled to change the upcoming Battle if needed.",
        },
        {
          num: "Phase 2 · Battles + Trooper Multiball",
          title: "Win Battles and Collect Soul Shards",
          body: "<strong>Work through Eddie Battles while building toward Trooper Multiball</strong> (complete drop targets twice, then lock 3 orbit shots). Stack single-ball Battles inside Trooper for big combined scoring. After each Battle win, immediately shoot the bullseye for the Soul Shard — don't miss the 10-second window.",
        },
        {
          num: "Phase 3 · Power Features + Eddie Cards",
          title: "Power Jackpot and Number of the Beast",
          body: "<strong>Build all 5 Power Features</strong> to qualify Cyborg Multiball. Each completed Feature adds to the Power Jackpot — cash it out at the Orb with Playfield X active. Collect Eddie Cards from all 4 sources (Mummy, Cyborg, Trooper, 2MTM) for the Number of the Beast wizard mode (100M). 10 Tomb Treasures → Run to the Hills 6-ball super wizard.",
        },
      ],
      safeShots: [
        { name: "Left Ramp", desc: "Most consistent shot on the table. Feeds back to the left flipper cleanly. Advances Power Features, contributes to EDDIE progress, and is a jackpot shot during Trooper. Make this your default." },
        { name: "Right Loop (Tomb on Pro)", desc: "Reliable orbit shot that collects Tomb Treasures on Pro. Also a Trooper lock shot and loop jackpot target. Safe from the right flipper with a clean return." },
        { name: "Left/Right Orbits", desc: "Wide orbit shots that are Trooper lock shots. Contribute to Power Features and EDDIE letters. Reliable from both flippers." },
      ],
      avoidShots: [
        { name: "Captive ball — rushed", desc: "The Sarcophagus captive ball can rebound unpredictably off-center. Build MUMMY slowly and deliberately — don't rush it during risky game states." },
        { name: "Shooting for the Bullseye outside key windows", desc: "The bullseye is your Soul Shard shot (10s after a Battle win), Trooper cannon shot, and Mummy SJP. Outside these windows it scores minor points. Focus on EDDIE letters and ramps instead." },
      ],
      tips: [
        { head: "Soul Shard timing is everything", body: "Winning a Battle lights the bullseye for exactly 10 seconds. This is worth 20–40% of your Battle score. Don't get distracted — immediately aim for the bullseye when the Battle ends. Missing it is one of the costliest mistakes on this table." },
        { head: "Playfield X multiplier", body: "Activate Playfield X (Super Skill Shot, or via WAR lane completions in the menu) then cash out the Power Jackpot at the Orb. Playfield X applies to ALL scoring including jackpots — activate it before any major cash-out." },
        { head: "Stack Battles with Trooper", body: "Trooper Multiball can stack with any single-ball Eddie Battle. Start the Battle first, then drop into Trooper while the Battle is active. Battle mode jackpots benefit from Trooper's escalating multipliers." },
        { head: "EDDIE letters and white arrows", body: "White arrows change position after each hit. Getting harder each Battle (fewer arrows lit, no spotted letters after first mode). Prioritize the easiest-to-hit lit white arrow each time to spell EDDIE as quickly as possible." },
      ],
      mistakes: [
        "Missing the Soul Shard window (10s after a Battle win) — one of the highest-value opportunities in the game.",
        "Ignoring the Super Skill Shot — 5M and a Playfield X at the start of every ball is free money worth pursuing reliably.",
        "Starting a 2-ball Eddie Battle (Aces High or Rime of the Ancient Mariner) while Trooper or Mummy Multiball is running — these cannot be stacked.",
        "Letting the Power Jackpot sit uncollected at the Orb — always cash it out with Playfield X active for maximum return.",
        "Neglecting drop targets — they're the gateway to Trooper Multiball. Work them passively alongside your other shot priorities.",
      ],
    },

    hotspots: [
      { x:18, y:22, type:"key",   label:"LR", name:"Left Ramp",               body:"<strong>Your primary safe shot all game.</strong> Advances EDDIE letters at white arrows, Power Features, and is the jackpot shot during Trooper and Mummy Multiball. Feeds back cleanly to the left flipper. Learn this shot and trust it." },
      { x:50, y:18, type:"key",   label:"PH", name:"Pharaoh Center Ramp (Battle Start)", body:"<strong>Shoot when EDDIE is fully spelled to start an Eddie Battle.</strong> Also the Mummy Lock on the Pro. During 2 Minutes to Midnight, all 5 mode shots must be completed before this shot opens for the Super Jackpot. Your most critical mode-start shot." },
      { x:80, y:18, type:"safe",  label:"RL", name:"Right Loop (Tomb on Pro)", body:"Wide loop shot. On Pro, this is the <strong>Tomb Treasure collection shot</strong>. Also a Trooper lock target and loop jackpot location. Reliable from the right flipper." },
      { x:15, y:32, type:"key",   label:"SP", name:"Left Spinner",             body:"<strong>Critical during Fear of the Dark Eddie Battle</strong> — a lit spinner rip scores massive points. Also advances Power Spinner feature and changes the upcoming Eddie Battle before EDDIE is fully spelled. Rip aggressively when controlled." },
      { x:50, y:38, type:"key",   label:"BU", name:"Bullseye Target",          body:"<strong>The Soul Shard shot</strong> — lights for 10 seconds after every Eddie Battle win. Worth 20–40% of your battle score × 2 or 3. Also the Trooper cannon (after completing drops in multiball) and Mummy Super Jackpot. <strong>Never miss the 10-second window.</strong>" },
      { x:68, y:48, type:"info",  label:"CB", name:"Sarcophagus Captive Ball", body:"Hit twice to light Mummy Lock, then spell MUMMY (5 more hits) to qualify Mummy Multiball. During multiball, jackpots are earned here via switch accumulation (10 hits per jackpot). Spell MUMMY again for the Super Jackpot at the bullseye." },
      { x:42, y:55, type:"info",  label:"DT", name:"Drop Targets",             body:"Complete twice to light Trooper lock. Complete during Trooper Multiball for the cannon shot (bullseye → bonus jackpots + add-a-ball). Always hit opportunistically — they reset when lit." },
      { x:70, y:22, type:"info",  label:"↑",  name:"Pop Bumpers (Upper Right)", body:"Passive bumper scoring. Contributes to Power Bumpers feature. Also scores during Aces High — Mystery Award during Aces High can add a ball." },
      { x:10, y:82, type:"avoid", label:"!",  name:"Left Outlane",             body:"<strong>Primary drain risk.</strong> Left-side shots that go wide are gone. Always be on the left flipper to catch after a ramp or orbit shot that doesn't make it up cleanly." },
      { x:88, y:82, type:"avoid", label:"!",  name:"Right Outlane",            body:"Fast right-side drains after right loop returns. Be positioned to recover. Revive feature (Tomb Treasure #6) saves the ball once — don't waste it prematurely." },
    ],
  };
