  /* ─── SAFE CRACKER ──────────────────────────────────────── */
MACHINES['safecracker'] = {
    name: "Safe Cracker", sub: "1996 · Bally · Standard",
    tagline: "Unique timer-based format · Board Game → Vault → Stash",
    image: "images/safe-cracker.png",
    difficulty: "Hard", diffClass: "diff-hard", era: "DMD",

    info: {
      stats: [
        { label: "Manufacturer", value: "Williams (Bally label)" },
        { label: "Year",         value: "1996" },
        { label: "Designer",     value: "Pat Lawlor" },
        { label: "Programmer",   value: "Matt Coriale" },
        { label: "Production",   value: "1,148 units" },
        { label: "Platform",     value: "WPC-95" },
      ],
      theme: "A bank heist theme unlike any other pinball machine. Instead of traditional balls, Safe Cracker uses a <strong>timed play format</strong> — you start with a 45-minute countdown (every 3 real seconds = 5 game minutes lost) and must keep the timer alive. Score in dollar amounts, not points. The goal is to navigate the Board Game, reach the Vault, and collect the Stash.",
      features: [
        { name: "A-B-C Rollover Lanes (10)", desc: "Upper rollover lanes. Complete all 3 = <strong>+5 min to timer</strong>. Cycle lit lanes with flipper buttons. Most consistent timer-adder available — do this every pass." },
        { name: "Centre Ramp (7)", desc: "Primary shot. Locks ball for Board Game setup. Jackpot during Vault/Token Multiball. Collects 1 Doughnut per shot (2 if Right Inlane just triggered). Most important shot on the table." },
        { name: "Board Game", desc: "Navigate clockwise from Bank Entrance to Vault. Land on 'S' spaces (+$20K Stash, or $40K with ATM Card), '?' spaces (choose Time Award 5–20 min), avoid Alarm spaces (if active). Reach Vault → Vault Multiball." },
        { name: "Vari-Target (5)", desc: "Cellar Award sequence. Hit repeatedly to open Cellar Entrance. Awards in order: <strong>ATM Card</strong> (doubles 'S' space value to $40K), <strong>Note to Teller</strong> (prevents Money Bomb), Explosives, Safe #, Lite Outlane (+20 min drain)." },
        { name: "A-L-A-R-M Targets (4,6,13,15,16)", desc: "Complete all 5 twice (each letter lit, then flashing) = de-activate one Alarm Board Game space. 4 Alarm spaces total. De-activating all = $50K per future A-L-A-R-M completion." },
        { name: "Vault Multiball (3 balls)", desc: "Break into Vault → Jackpot = Stash value at Centre Ramp. Each Jackpot = +10 min timer. Maximize Stash by landing on many 'S' spaces before reaching Vault." },
        { name: "TNT Multiball (3 balls)", desc: "3 balls — hit everything for target points ($2,500/drop target completion). Every 20 hits = +5 min timer. Excellent timer accumulator." },
      ],
      scoring: [
        { key: "A-B-C completion",           val: "+5 min timer" },
        { key: "Board Game 'S' space",       val: "$20K Stash (or $40K with ATM Card)" },
        { key: "Board Game '?' — Time",      val: "+5/10/15/20 min" },
        { key: "Vault Multiball Jackpot",    val: "Stash value at Centre Ramp + 10 min" },
        { key: "Lite Outlane drain",         val: "+20 min (ball re-launches!)" },
        { key: "End-of-Game Bonus Mult (max)", val: "5× via Board Game starts" },
        { key: "ATM Card effect",            val: "Doubles all 'S' spaces $20K → $40K" },
      ],
      rules: [
        "<strong>All balls re-launch</strong> during Timed Play — no ball loss until Sudden Death (timer reaches 0).",
        "<strong>A-B-C Rollovers = +5 min.</strong> Complete every pass by cycling lit lanes with flipper buttons. This is the most consistent timer source.",
        "<strong>ATM Card</strong> (first Vari-Target Cellar Award) doubles all 'S' board spaces from $20K to $40K for the rest of the game. Get this first.",
        "<strong>Note to Teller</strong> (second Cellar Award) prevents 'Money Bomb' from ending the Board Game when landing on Teller spaces.",
        "<strong>De-activate Alarm spaces</strong> via A-L-A-R-M completions before entering those Board Game spaces. All 4 de-activated = $50K per future completion.",
        "<strong>Lite Outlane</strong> Cellar Award: during Timed Play, draining down a lit outlane = +20 free minutes (ball re-launches anyway!).",
        "<strong>Right Flipper</strong> slowly stops the Safe Dial for better Board Game landing space control. Left Flipper stops it immediately.",
        "<strong>End-of-Game Bonus Multiplier</strong>: each Board Game start = +1×. Play Board Game as often as possible to reach 5×.",
      ],
      benchmarks: [
        { score: "$500K+", label: "Excellent — multiple Vault Multiball Jackpots" },
        { score: "$200K+", label: "Good — ATM Card + Vault reached" },
        { score: "< $50K", label: "Timer drained quickly, Board Game rarely accessed" },
      ],
      resources: [
        { name: "IPDB Entry",       url: "https://www.ipdb.org/machine.cgi?id=2045",                    icon: "🎯" },
        { name: "Pinside Game Page",url: "https://pinside.com/pinball/machine/safe-cracker",             icon: "🕹️" },
        { name: "Zen Studios Guide",url: "https://zensite.wpenginepowered.com/wp-content/uploads/2024/04/WP-Safe-Cracker-Pinball-Guide-by-ShoryukenToTheChin.pdf", icon: "📖" },
      ],
    },

    strategy: {
      skillShot: "No traditional Skill Shot — all drained balls re-launch during Timed Play. Focus immediately on A-B-C Rollover Lanes each launch for +5 min timer.",
      multiball: "<strong>Vault Multiball (3-ball):</strong> Navigate Board Game to Vault (maximize 'S' space visits beforehand for high Stash) → Jackpot = Stash value per Centre Ramp (7). Each Jackpot scored = +10 min timer. Relight Jackpot via Disc spin. <strong>TNT Multiball:</strong> 3 balls, maximize hit volume — every 20 hits = +5 min. Both multiballs are excellent timer accumulators.",
      goal: "Keep the timer alive via A-B-C Rollover completions (+5 min each) and Board Game '?' Time Awards. Get ATM Card (Cellar Award #1) immediately to double all 'S' Board Game spaces. De-activate all 4 Alarm spaces via A-L-A-R-M Target completions. Navigate Board Game to Vault with maximum 'S' space visits. Vault Multiball Jackpot = Stash value + 10 min per hit. Use 'Lite Outlane' drains for free +20 min during Timed Play.",
      phases: [
        { num: "Phase 1 · Timer Management", title: "A-B-C Rollovers + A-L-A-R-M + Cellar", body: "Complete A-B-C Rollovers every pass (+5 min). Hit A-L-A-R-M Targets to de-activate Alarm spaces. Hit Vari-Target (5) repeatedly to access Cellar: get ATM Card first, then Note to Teller." },
        { num: "Phase 2 · Board Game", title: "S-Spaces → Vault", body: "Complete flashing Drop Target Banks → Centre Ramp lock → enter Bank via Teller/Roof/Vari-Target → Board Game. Use Right Flipper to slow Safe Dial. Target 'S' spaces ($40K each with ATM Card). Choose Time Awards (15–20 min) at '?' spaces. Reach Vault → Vault Multiball." },
        { num: "Phase 3 · Vault Multiball + Cellar Awards", title: "High Stash = High Jackpot", body: "During Vault Multiball: Centre Ramp repeatedly for Jackpot (= accumulated Stash) + 10 min each. Relight via Disc spin. 'Lite Outlane' Cellar Award: drain intentionally down lit outlane for +20 min (ball re-launches). Repeat Board Game starts for End-of-Game Bonus Multiplier (max 5×)." },
      ],
      safeShots: [
        { name: "Centre Ramp (7)", desc: "Most important shot. Lock, Jackpot, Doughnut. Reliable from right flipper." },
        { name: "A-B-C Rollovers (10)", desc: "Upper rollovers. +5 min per completion. Cycle with flipper buttons every pass." },
        { name: "Lite Bank Entry Drop Targets (2)", desc: "Wide bank. Advances all 3 Bank paths toward Vault simultaneously." },
      ],
      avoidShots: [
        { name: "Vari-Target (5) without purpose", desc: "Ball can go erratically. Only approach deliberately for Cellar Award sequence." },
        { name: "Roof Saucer (9) carelessly", desc: "Only shoot when Roof Entrance is lit for Board Game entry." },
      ],
      tips: [
        { head: "ATM Card doubles everything", body: "The first Cellar Award from Vari-Target doubles all 'S' Board Game spaces from $20K to $40K for the entire game. 8 'S' spaces at $40K each = $320K from one Board Game trip. Get this early." },
        { head: "Lite Outlane = free timer", body: "During Timed Play, draining down a lit outlane (ball re-launches!) = +20 free minutes. When 'Extra Time' is lit, intentionally drain an outlane — it's 100% profitable." },
        { head: "Right Flipper for Board Game control", body: "Use Right Flipper to slowly stop the Safe Dial — gives more control over landing space. Left Flipper stops immediately. Slow-stop on a desirable 'S' space before releasing." },
        { head: "Centre Ramp Right Inlane combo = 2 Doughnuts", body: "Right Inlane → Centre Ramp immediately = 2 Doughnuts instead of 1. Build Doughnuts for Bribe Guard spaces (need 5+)." },
      ],
      mistakes: [
        "Ignoring A-B-C Rollover Lanes — letting the timer drain without completing easy rollover shots.",
        "Not getting ATM Card or Note to Teller early — unsafe Board Game and Money Bomb disasters.",
        "Entering Board Game with active Alarm spaces — getting ejected from the game.",
        "Reaching Vault before maximizing 'S' space visits — low Stash = low Vault Multiball Jackpot.",
        "Stopping Safe Dial with Left Flipper immediately — use Right Flipper for slow, controlled landing.",
        "Not using 'Extra Time' lit outlane drains — consequence-free +20 min during Timed Play.",
      ],
    },

    hotspots: [
      { x:48, y:18, type:"key",   label:"TS", name:"Time Safe (Top Centre)",    body:"<strong>Primary timed lock target.</strong> Complete A-B-C Rollovers to add +5 min to timer. Each shot advances Board Game and scores current space value." },
      { x:18, y:28, type:"key",   label:"LR", name:"Left Ramp",                 body:"Board Game advance — one space forward per shot. Landing on S-spaces with ATM Card = value doubled. Most reliable ramp." },
      { x:72, y:28, type:"safe",  label:"RR", name:"Right Ramp",                body:"Mirror of Left Ramp for Board Game advance. Also advances Vault Jackpot. Reliable from left flipper." },
      { x:50, y:38, type:"key",   label:"VT", name:"Vault (Centre Saucer)",     body:"<strong>Collect Vault Multiball Jackpot here.</strong> Jackpot = Stash + 10 min. Build Stash high before collecting. Starts Vault Multiball (2-ball)." },
      { x:50, y:50, type:"info",  label:"BG", name:"Board Game Spaces",         body:"S = Stash (adds to Vault Jackpot), E = Extra Time (+10 min), X = Double Next. ATM Card doubles all S-space values — save for S-spaces." },
      { x:14, y:42, type:"safe",  label:"AB", name:"A-B-C Rollovers",           body:"Completing A-B-C adds +5 min to timer. Cycle via flipper buttons. Build clock time early each ball." },
      { x:7,  y:82, type:"avoid", label:"!",  name:"Left Outlane",              body:"Every drained ball costs significant timer time. Ball preservation paramount." },
      { x:88, y:82, type:"avoid", label:"!",  name:"Right Outlane",             body:"Open outlane. Right ramp misses drain right — careful control essential." },
    ],
  };
