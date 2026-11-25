  /* ─── SHARKEY'S SHOOTOUT (STERN 2000) ────────────────────── */
MACHINES['sharkeysshootout'] = {
    name: "Sharkey's Shootout",  sub: "2000 · Stern · Whitestar (DMD)",
    tagline: "Beat pool hustlers at 8-ball and 9-ball · Trick Shot up to 30M · virtual-lock multiball · Bumper Pool · user-activated post saves · The Web wizard mode",
    image: "images/sharkeys-shootout.webp",
    difficulty: "Medium", diffClass: "diff-medium", era: "DMD",

    /* ── QUICK GUIDE (30–90 s read) ───────────────────────────── */
    quick: {
      goal: "Beat the pool opponents by clearing the <strong>7 drop targets</strong>, play <strong>9-ball</strong> whenever you can (much easier), build <strong>Trick Shot</strong> toward 30M, and use the <strong>virtual locks</strong> for 5M–10M jackpot multiball. Beat five players and Jeanette Lee to reach <strong>The Web</strong>.",
      steps: [
        { title: "Pool games",
          body: "<strong>8-ball</strong>: all 7 drops, then the inner right loop. The left ramp spots a pool ball. <strong>9-ball</strong>: drops in order, then the <strong>left orbit</strong>; from drop 3 or 4 a 9-ball combo can end it early, so take it. Winning starts <strong>Trick Shot</strong>: two flashing drops add 1.25M each (max 30M, carried over); lock shot collects. Slingshots switch the next game: finish Trick Shot with 9-ball flashing." },
        { title: "Multiball",
          body: "Lock 3 balls at the far right loop or the inner right loop (backhand from the right flipper). All four major shots: 5M jackpots; after 5 (then up to 10), a Super Jackpot (5×) at the inner or far right loop (the far one is usually shot from the upper flipper after a left-orbit feed). Against <strong>Tex</strong> jackpots are 10M." },
        { title: "Extras",
          body: "Skill shot: center top lane, 5M (+5M each) and starts <strong>Bumper Pool</strong> (also C-U-E): the hole by the pops raises the pop value toward 1M. Left ramp = Mystery; combos from the left ramp to the inner right loop start at 10M." },
      ],
      shots: [
        { name: "Drop targets 1–7", why: "Win pool games; Trick Shot." },
        { name: "Inner right loop", why: "Locks; Super Jackpots; combos." },
        { name: "Left orbit", why: "9-ball; Black Widow." },
      ],
      avoid: [
        "Ending Trick Shot with 8-ball flashing.",
        "Wasting the post saves: one use each until PAYOFF relights them.",
      ],
      target: "Milestones (estimates): one pool game and a multiball = baseline. A Super Jackpot and a high Trick Shot = good. The Web = great.",
    },

    info: {
      stats: [
        { label: "Manufacturer", value: "Stern" },
        { label: "Year",         value: "2000 (September)" },
        { label: "Design",       value: "John Borg" },
        { label: "Software",     value: "Dwight Sullivan, Lonnie D. Ropp, Keith P. Johnson" },
        { label: "Platform",     value: "Whitestar (DMD)" },
      ],
      theme: "A pool hall: shoot pool against hustlers such as Tex, Mr. Grey, Sticks and Dr. Wood, then the real-life champion Jeanette Lee, the Black Widow.",
      features: [
        { name: "Pool games", desc: "Start in 8-ball (7 drops + inner right loop); 9-ball = drops in order + left orbit. Each win is a completion bonus and Trick Shot. Beat five opponents, then Jeanette Lee at both games for The Web." },
        { name: "Trick Shot", desc: "Single-ball: two adjacent drops light; each +1.25M (from 5M, max 30M, carried to later Trick Shots). The lock shot collects and starts the next game; slingshots change 8-ball/9-ball." },
        { name: "Multiball", desc: "Virtual locks at the far right loop (green Lock) or inner right loop. 3 locks: 4 major shots 5M jackpots; Super Jackpot (5×) at a right loop after 5 jackpots (up to 10 later); base +1M per super (max 10M). Modes can still start." },
        { name: "Prize money", desc: "Shots build the Prize Money value; winnings come from beating opponents and spelling PAYOFF and are paid in the bonus × multiplier (C-U-E lanes: starts 5×, +3× each)." },
        { name: "Black Widow", desc: "25 spinner spins light it (another source: a full loop); the next left orbit feeds the upper flipper for a hurry-up at the drop guarding the right lanes; spinner resets it to 10M. Completing it lights a lock." },
        { name: "The Web (wizard)", desc: "4-ball multiball with a long ball save; every shot is a jackpot worth 10M plus your Prize Money; enough jackpots light a hurry-up at the Black Widow target that adds a ball (sources say 4 or 5)." },
      ],
      scoring: [
        { key: "Trick Shot",       val: "5M → 30M" },
        { key: "Super Jackpot",    val: "5× jackpot (25M–50M)" },
        { key: "Jackpot",          val: "5M → 10M (10M vs Tex)" },
        { key: "Combo",            val: "10M, +10M each" },
        { key: "Skill shot",       val: "5M, +5M each" },
        { key: "Airball",          val: "5M" },
      ],
      rules: [
        "Post saves: buttons behind the flipper buttons raise the matching outlane post; both together raise a center post. One use each, ~3 s; relit by PAYOFF letters behind the drops or Mystery.",
        "Mystery at the left ramp (lit each ball; POOL lanes relight it): extra ball, multiball, millions, post saves, hurry-up, jackpot.",
        "Bumper Pool: pops 25K while hit often; the hole by the pops raises the value; the middle blue target resets its timer.",
        "A right post save that launches the ball into the shooter lane is an Airball (5M).",
      ],
      benchmarks: [
        { score: "The Web (estimate)",               label: "Great game" },
        { score: "Super Jackpot + high Trick Shot",  label: "Good game" },
        { score: "One pool win + multiball",         label: "Baseline" },
      ],
      resources: [
        { name: "Rulesheet (Tilt Forums wiki)", url: "https://pinballrulesheets.com/stern/creating-a-rulesheet-for-sharkeys-shootout", icon: "📄" },
        { name: "SDPC Cheatsheet",              url: "https://pinball.miraheze.org/wiki/Sharkey%27s_Shootout", icon: "📄" },
        { name: "Pinside Game Page",            url: "https://pinside.com/pinball/machine/sharkeys-shootout", icon: "🕹️" },
      ],
    },

    strategy: {
      skillShot: "Plunge into the center top lane: 5M (+5M each time) and Bumper Pool.",
      multiball: [
        { name: "Multiball", balls: 3, locks: "Far right loop or inner right loop (virtual locks); after the first multiball, each lock is relit by the Black Widow Hurry-Up.", start: "Third lock.", jackpots: "Left orbit, left ramp, right hole and right loops 5M; Super (5×) at a right loop after 5 jackpots.", tip: "During Trick Shot the center standup or pops change the next opponent: pick Tex, then finish the locks for 10M jackpots (Stampede Multiball)." },
        { name: "The Web", balls: 4, locks: "Beat 5 opponents and Jeanette Lee.", start: "Automatically.", jackpots: "Every shot: 10M + Prize Money.", tip: "Long ball save: shoot everything." },
      ],
      goal: "<strong>Drops → win at 9-ball → Trick Shot toward 30M → locks and Super Jackpots → The Web.</strong>",
      phases: [
        { num: "Phase 1", title: "Skill shot", body: "Center lane: 5M and Bumper Pool." },
        { num: "Phase 2", title: "Pool", body: "Drops; switch to 9-ball during Trick Shot." },
        { num: "Phase 3", title: "Multiball", body: "Backhand the inner right loop for locks and supers." },
      ],
      safeShots: [
        { name: "Inner right loop", desc: "Easy backhand from the right flipper." },
      ],
      avoidShots: [
        ],
      tips: [
        { head: "9-ball shortcut", body: "From drop 3 or 4, a lit 9-ball combo ends the game early: shoot it at once." },
        { head: "Trick Shot builds", body: "Its value carries over, so build it early in the game." },
        { head: "Post saves", body: "Hold them for real drains; the center post needs both buttons." },
      ],
      mistakes: [
        "Playing 8-ball games when a slingshot could have switched to 9-ball.",
        "Collecting Trick Shot at 5M.",
      ],
    },

    hotspots: [
      { x: 73, y: 63, type: "key",   label: "DT", name: "Drop Targets 1–7", body: "Pool games; Trick Shot." },
      { x: 71, y: 46, type: "key",   label: "IL", name: "Inner Right Loop", body: "Locks; Super Jackpots; combos." },
      { x: 81, y: 44, type: "key",   label: "RL", name: "Far Right Loop", body: "Locks." },
      { x: 14, y: 44, type: "key",   label: "LO", name: "Left Orbit", body: "9-ball shot; Black Widow; spinner." },
      { x: 25, y: 50, type: "key",   label: "LR", name: "Left Ramp", body: "Mystery; spots a pool ball; lights combos." },
      { x: 78, y: 33, type: "info",  label: "8",  name: "8-Ball (inner right loop)", body: "Wins 8-ball after all drops." },
      { x: 63, y: 35, type: "key",   label: "RH", name: "Right Hole", body: "Bumper Pool value; Prize Money; jackpot; extra ball when lit." },
      { x: 46, y: 26, type: "info",  label: "CUE", name: "C-U-E Lanes / Skill Shot", body: "Center lane 5M; bonus X; Bumper Pool." },
      { x: 40, y: 40, type: "info",  label: "P",  name: "Pop Bumpers", body: "Bumper Pool up to 1M a hit." },
      { x: 33, y: 65, type: "info",  label: "$",  name: "Prize Money", body: "Paid in the bonus." },
      { x: 8,  y: 85, type: "avoid", label: "!",  name: "Left Outlane", body: "Post save when lit." },
      { x: 85, y: 87, type: "avoid", label: "!",  name: "Right Outlane", body: "Post save when lit." },
    ],
  };
