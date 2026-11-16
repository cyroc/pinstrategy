  /* ─── SCARED STIFF (BALLY 1996) ──────────────────────────── */
MACHINES['scaredstiff'] = {
    name: "Scared Stiff",  sub: "1996 · Bally · WPC-95 (DMD)",
    tagline: "Six Tales of Terror · Spin the Spider · Coffin and Crate multiballs · Stiff-O-Meter · Monster Multiball",
    image: "images/scared-stiff.webp",
    difficulty: "Medium", diffClass: "diff-medium", era: "DMD",

    /* ── QUICK GUIDE (30–90 s read) ───────────────────────────── */
    quick: {
      goal: "Start all <strong>six Tales of Terror</strong> (the inserts around the ring above the flippers), then shoot the <strong>crate</strong> for <strong>Scared Stiff</strong>: ramps and crate alternate to fill the Stiff-O-Meter, and reaching the top starts <strong>Monster Multiball</strong> (5M + 1M jackpots).",
      steps: [
        { title: "Spin the Spider first",
          body: "Skip the skill shot: soft-plunge into the lit <strong>spider hole</strong>, then stop the backglass spider with a flipper button. Aim for <strong>Coffin</strong> (Coffin Multiball restarts when it would end) and <strong>Double Trouble</strong> (2× scoring for 20 s). The right ramp relights the hole." },
        { title: "Coffin Multiball",
          body: "The <strong>left ramp</strong> lights lock; lock 3 balls in the <strong>left orbit</strong>. Both ramps are lit for 500K jackpots, then they alternate. Start it during Double Trouble." },
        { title: "Tick off the Tales",
          body: "Left ramp 3× (Boney Beast), each <strong>leaper</strong> target once, all 3 <strong>Deadhead lanes</strong>, 20 bumper hits (Monster's Lab), crate hits for <strong>Crate Multiball</strong> (250K jackpots in the crate), and Coffin Multiball." },
      ],
      shots: [
        { name: "Left ramp", why: "Lights locks, Boney Beast tale, Stiff-O-Meter." },
        { name: "Right ramp", why: "Relights the spider; repeat shots score up to 450K." },
        { name: "Crate", why: "Crate Multiball, Scared Stiff, Monster Multiball." },
      ],
      avoid: [
        "The right outlane: Telepathetic Power is a random award, not a ball save.",
        "Wasting the spider: stopping on an award you already have gives nothing.",
      ],
      target: "Milestones (estimates): Coffin Multiball and a few Tales = baseline. Scared Stiff started = good. Monster Multiball or Spider Mania = great.",
    },

    info: {
      stats: [
        { label: "Manufacturer", value: "Bally (Midway / Williams)" },
        { label: "Year",         value: "1996 (September)" },
        { label: "Design",       value: "Dennis Nordman (with Mark Weyna)" },
        { label: "Art",          value: "Greg Freres" },
        { label: "Software",     value: "Mike Boon, Cameron Silver" },
        { label: "Platform",     value: "Williams WPC-95 (DMD)" },
      ],
      theme: "Elvira's second pinball: a B-movie horror show with a skeletal Boney Beast ramp, jumping Leapers, a rattling crate and a spinning spider wheel in the backbox.",
      features: [
        { name: "Six Tales of Terror", desc: "Coffin Multiball, Night of the Leapers (each leaper once), Return of the Deadheads (all 3 top lanes), Terror from the Crate (Crate Multiball), Monster's Lab (20 bumper hits), Eyes of the Boney Beast (left ramp 3×). Start all six to light Scared Stiff at the crate." },
        { name: "Coffin Multiball (3 balls)", desc: "Left ramp lights lock (1 ramp per lock at first, more later); lock in the left orbit. Both ramps lit for 500K; after one, the lit ramp alternates. Hitting the unlit ramp raises the jackpot (+10K)." },
        { name: "Crate Multiball (2 balls)", desc: "Hit the crate to light its 4 lamps (more hits needed each time), then enter the crate. Each crate shot is a 250K jackpot; left ramp shots raise the crate value." },
        { name: "Spin the Spider", desc: "Lit spider hole: stop the backglass spider with a flipper button. every award collected once (rulesheets count 14–16 positions): 3 eyes (all = extra ball), Coffin (lock + Coffin MB restarts), Crate (crate hit + Crate MB restarts), Double Trouble (2× for 20 s), Light Jackpot, Boney Beast hurry-up (200K), Leaper Mania, Boogie Man Boogie, two Deadhead skulls, two crystal balls (Telepathetic Power), Monster's Lab bumper hits, Beat the Crate." },
        { name: "Scared Stiff → Monster Multiball", desc: "Shoot the crate to start. Alternate a ramp, then the crate, to climb the 10-level Stiff-O-Meter (250K +50K per shot); the last shot is the crate. Reaching Scared Stiff: 5M, then 4-ball Monster Multiball with both ramps and the crate lit for 1M jackpots. Progress is saved if you fail; after Monster Multiball all Tales reset." },
        { name: "Spider Mania", desc: "Collect every spider award: the wheel spots everything and starts a 4-ball multiball with every feature lit, including doubled jackpots." },
        { name: "Leapers and Deadheads", desc: "Enough leaper hits start Leaper Mania (hit 5 in time; 100K each). Deadhead lanes score 25K more each time they're collected (to 2.475M at 99)." },
      ],
      scoring: [
        { key: "Monster Multiball start", val: "5M" },
        { key: "Monster Multiball jackpot", val: "1M (both ramps and crate)" },
        { key: "Coffin jackpot",       val: "500K (raised by unlit-ramp shots)" },
        { key: "Crate jackpot",        val: "250K" },
        { key: "Stiff-O-Meter shot",   val: "250K, +50K per level" },
        { key: "Right ramp repeat",    val: "25K, 100K, then +50K to 450K" },
        { key: "Skill shot hole",      val: "250K, +250K each time" },
      ],
      rules: [
        "The spider hole is lit at the start of each ball and relit by the right ramp; a soft plunge can reach it, and a plunge that touches nothing can be relaunched.",
        "Cast a Spell: complete the 3 targets above the left outlane (twice at first) to light the left outlane ball save.",
        "Telepathetic Power: the target on the right toggles the right outlane; draining there gives a random award.",
        "Eyes of the Boney Beast: once collected, consecutive left ramps score more until you miss.",
        "Rulesheets disagree on some values (Deadhead and crate counts); later code may differ.",
      ],
      benchmarks: [
        { score: "Monster Multiball or Spider Mania (estimate)", label: "Great game" },
        { score: "Scared Stiff started",                         label: "Good game" },
        { score: "Coffin Multiball + a few Tales",               label: "Baseline" },
      ],
      resources: [
        { name: "Rulesheet (Pinball Archive)",   url: "https://pinball.org/rules/scaredstiff.html", icon: "📖" },
        { name: "SDPC Cheatsheet",               url: "https://pinball.miraheze.org/wiki/Scared_Stiff", icon: "📄" },
        { name: "Playfield Tour (Planetary Pinball)", url: "https://planetarypinball.com/mm5/Williams/games/stiff/playfd.htm", icon: "🗺️" },
        { name: "Pinside Game Page",             url: "https://pinside.com/pinball/machine/scared-stiff", icon: "🕹️" },
      ],
    },

    strategy: {
      skillShot: "Skill shot hole: 250K, +250K each time. Better: soft-plunge into the spider hole and spin the spider. If the ball touches nothing, you can plunge again.",
      multiball: [
        { name: "Coffin Multiball", balls: 3, locks: "Left ramp lights lock; lock in the left orbit.", start: "Third lock.", jackpots: "Either ramp first (500K), then the lit ramp alternates. Hitting the unlit ramp adds 10K.", tip: "Get Coffin (restart) and Double Trouble from the spider first; keep one ball looping the right ramp." },
        { name: "Crate Multiball", balls: 2, locks: "Crate hits light its 4 lamps.", start: "Enter the crate.", jackpots: "250K per crate shot.", tip: "The spider's Crate award restarts it once." },
        { name: "Monster Multiball", balls: 4, locks: "Complete the Stiff-O-Meter in Scared Stiff.", start: "5M on start.", jackpots: "1M at both ramps and the crate, repeatable.", tip: "Keep it going: every shot that matters is a jackpot." },
        { name: "Spider Mania", balls: 4, locks: "Collect every spider award.", start: "Automatically.", jackpots: "Everything lit; jackpots doubled.", tip: "Huge scoring; rare in a 3-ball game." },
      ],
      goal: "<strong>Spider (Coffin + Double Trouble) → Coffin Multiball → the other five Tales → Scared Stiff → Monster Multiball.</strong>",
      phases: [
        { num: "Phase 1", title: "Set up the spider", body: "Soft plunge to the spider hole; right ramp to relight it. Prioritise Coffin and Double Trouble, then the eyes." },
        { num: "Phase 2", title: "Multiballs", body: "Lock at the left orbit for Coffin Multiball; bash the crate for Crate Multiball. Each counts as a Tale." },
        { num: "Phase 3", title: "Scared Stiff", body: "Finish the leapers, Deadhead lanes, bumpers and Boney Beast, then crate → ramp/crate alternating to Monster Multiball." },
      ],
      safeShots: [
        { name: "Right ramp", desc: "Returns to the left inlane; repeat shots build to 450K and relight the spider." },
        { name: "Left ramp", desc: "Returns to the right inlane; locks and the Boney Beast." },
      ],
      avoidShots: [
        { name: "Crate rebounds", desc: "Bank shots off the crate can drop straight down the middle." },
        { name: "Right lane", desc: "Little value; feeds the crate or skill shot hole." },
      ],
      tips: [
        { head: "Double Trouble + multiball", body: "Start Coffin or Crate Multiball while Double Trouble is running (20 s)." },
        { head: "Coffin restart", body: "With the spider's Coffin award, Coffin Multiball restarts with 3 balls when it would end." },
        { head: "Long games", body: "Deadhead lane values keep rising (to 2.475M each, double in Double Trouble)." },
        { head: "Secret Passage", body: "A weak left orbit falls into the Secret Passage: it spots a Tale, or a Stiff-O-Meter level during Scared Stiff." },
        { head: "Spider bonus pick", body: "If a '3' runs round the web instead of the spider, press Start 3 times for two picks." },
      ],
      mistakes: [
        "Taking the skill shot instead of the spider early in the game.",
        "Letting Scared Stiff time out (30 s, each shot adds time): ramps and crate must alternate.",
      ],
    },

    hotspots: [
      { x: 26, y: 47, type: "key",   label: "LR", name: "Left Ramp (Boney Beast)", body: "Lights lock; Boney Beast tale; Coffin and Monster jackpots." },
      { x: 70, y: 48, type: "key",   label: "RR", name: "Right Ramp", body: "Relights the spider; Coffin and Monster jackpots." },
      { x: 83, y: 51, type: "key",   label: "SP", name: "Spider Hole", body: "Spin the Spider when lit; soft-plunge target." },
      { x: 12, y: 46, type: "key",   label: "LO", name: "Left Orbit / Coffin Lock", body: "Locks for Coffin Multiball; weak shots hit the Secret Passage." },
      { x: 45, y: 28, type: "key",   label: "CR", name: "The Crate", body: "Crate Multiball; starts Scared Stiff; Monster jackpot." },
      { x: 40, y: 22, type: "info",  label: "DH", name: "Deadhead Lanes", body: "Light all 3 for the Deadheads tale." },
      { x: 34, y: 43, type: "info",  label: "LP", name: "Leapers", body: "Three frog targets: hit each once; Leaper Mania." },
      { x: 82, y: 30, type: "info",  label: "ML", name: "Monster's Lab (bumpers)", body: "20 hits: Monster's Lab tale." },
      { x: 45, y: 52, type: "info",  label: "SM", name: "Stiff-O-Meter", body: "10 levels in Scared Stiff; top = Monster Multiball." },
      { x: 77, y: 72, type: "info",  label: "TP", name: "Telepathetic Power Target", body: "Toggles the right outlane award." },
      { x: 5,  y: 71, type: "info",  label: "CS", name: "Cast a Spell Targets", body: "Light the left outlane ball save." },
      { x: 8,  y: 57, type: "info",  label: "CO", name: "Coffin", body: "Lock exit to the left inlane." },
      { x: 7,  y: 85, type: "avoid", label: "!",  name: "Left Outlane", body: "Ball save when Cast a Spell is lit." },
      { x: 86, y: 85, type: "avoid", label: "!",  name: "Right Outlane", body: "Random Telepathetic award, no save." },
    ],
  };
