  /* ─── FIREBALL (BALLY 1972) ──────────────────────────────── */
MACHINES['fireball'] = {
    name: "Fireball",  sub: "1972 · Bally · Electromechanical",
    tagline: "3,000-point skill shot · Odin and Wotan saucer locks · zipper flippers · spinning Fireball disc",
    image: "images/fireball.webp",
    difficulty: "Hard", diffClass: "diff-hard", era: "EM",

    /* ── QUICK GUIDE (30–90 s read) ───────────────────────────── */
    quick: {
      goal: "Make the <strong>3,000 skill shot</strong> on every plunge, light the <strong>right side lane</strong> to 3,000 with the mushroom bumpers, and use the <strong>Odin and Wotan</strong> saucers to lock balls for extra plunges and multiball, all while surviving the <strong>spinning disc</strong>.",
      steps: [
        { title: "Skill shot",
          body: "Plunge so the ball drops into the <strong>3,000 lane</strong> at the top. It also lights the two yellow pop bumpers (100 a hit). Too soft: 100; too hard: the ball crosses the top. Locking your only ball in play gives you another plunge, so learn this shot." },
        { title: "Locks and multiball",
          body: "A ball in <strong>Odin</strong> (left) or <strong>Wotan</strong> (right) is held and a new ball comes to the plunger. The <strong>opposite yellow mushroom</strong> releases it; the <strong>captive ball target</strong> releases both. Up to 3 balls; scoring doesn't change in multiball." },
        { title: "Right lane and the disc",
          body: "Each mushroom bumper turns one of the three <strong>right lane</strong> switches from 100 to 1,000 for the ball. The blue mushroom <strong>zips the flippers</strong> together (no center drain); a yellow one opens them again. The disc throws the ball around: nudge and react." },
      ],
      shots: [
        { name: "3,000 skill lane (plunge)", why: "The biggest repeatable award." },
        { name: "Right side lane", why: "Up to 3,000 a pass once lit." },
        { name: "Captive ball lane", why: "Lit value (1,000–5,000) and releases both locks." },
      ],
      avoid: [
        "Plunging another player's ball: watch the backglass after locks and drains.",
        "Locking one ball and then draining the other right after: it counts as a drain and ends your turn.",
      ],
      target: "Milestones (estimates): a skill shot every plunge = baseline. A lit right lane and several multiballs = good. Many locked-ball replunges for 3,000 each = great.",
    },

    info: {
      stats: [
        { label: "Manufacturer", value: "Bally" },
        { label: "Year",         value: "1972 (February)" },
        { label: "Design",       value: "Ted Zale" },
        { label: "Art",          value: "Dave Christensen" },
        { label: "Platform",     value: "Electromechanical; up to 4 players" },
        { label: "Production",   value: "3,815" },
      ],
      theme: "Fireball, the fire god, flanked by the fire gods Odin and Wotan; one of the first multiball games, with a spinning disc in the middle of the playfield.",
      features: [
        { name: "Skill shot", desc: "A plunge that drops into the 3,000 lane scores 3,000 and lights the yellow pop bumpers; short = 100 down the right side, long = across the top through a one-way gate." },
        { name: "Odin and Wotan locks", desc: "Either saucer holds a ball; with no other ball in play a new one is fed to the plunger. Left yellow mushroom releases Wotan (right), right yellow mushroom releases Odin (left), the captive ball target releases both." },
        { name: "Captive ball lane", desc: "Rollovers score 100 then 1,000; the target at the back scores the value lit in front of Odin (it scans 1,000–5,000 while a ball is held there) and releases the locks." },
        { name: "Mushroom bumpers", desc: "100 each and light one right-lane switch to 1,000. Blue (center) zips the flippers; yellow ones open them and release the opposite lock." },
        { name: "Spinning disc", desc: "Spins constantly and flings the ball. Its ring of rollovers scores 10; the top one turns on the left outlane kicker, the lower left and right ones turn it off." },
      ],
      scoring: [
        { key: "Skill shot",          val: "3,000" },
        { key: "Right lane (lit)",    val: "1,000 per switch (3)" },
        { key: "Captive ball target", val: "1,000–5,000 (lit value)" },
        { key: "Lit pop bumpers",     val: "100" },
        { key: "Mushroom bumpers",    val: "100" },
      ],
      rules: [
        "No inlanes: the flippers sit right below the slingshots.",
        "The left outlane kicker stays on until a disc rollover turns it off; the right outlane has none.",
        "In multiball the gate at the bottom of the right lane sends balls back to the plunger; leaving one there is usually allowed in tournaments, but check with the director.",
        "If you lock a ball and your other ball then drains, the game may count it as a drained single ball and end your turn.",
        "If a ball drains and you then lock the remaining ball, you get a new ball."
      ],
      benchmarks: [
        { score: "Many 3,000 replunges (estimate)", label: "Great game" },
        { score: "Lit right lane + multiballs",     label: "Good game" },
        { score: "Skill shot every plunge",         label: "Baseline" },
      ],
      resources: [
        { name: "Strategy Guide (Pinball Primer)", url: "https://pinballprimer.github.io/fireball_G48ZN.html", icon: "📖" },
        { name: "Pinside Game Page",               url: "https://pinside.com/pinball/machine/fireball", icon: "🕹️" },
      ],
    },

    strategy: {
      skillShot: "Plunge into the 3,000 lane: 3,000 and the yellow pops lit. Learn the exact plunger strength; you get it again after every lock.",
      multiball: [
        { name: "Fire Gods Multiball", balls: "Up to 3", locks: "Odin (left saucer) and Wotan (right saucer).", start: "Release locked balls with the opposite yellow mushroom or the captive ball target.", jackpots: "None; scoring is unchanged.", tip: "Locking your only ball in play means another plunge for the 3,000 skill shot." },
      ],
      goal: "<strong>3,000 skill shot every plunge → mushrooms to light the right lane → locks for more plunges → captive ball for its lit value.</strong>",
      phases: [
        { num: "Phase 1", title: "Plunge", body: "3,000 skill shot." },
        { num: "Phase 2", title: "Light up", body: "Mushroom bumpers for the right lane; blue mushroom to zip the flippers." },
        { num: "Phase 3", title: "Lock and replunge", body: "Lock in Odin/Wotan, skill shot again, then release with the captive ball." },
      ],
      safeShots: [
        { name: "Right side lane", desc: "Connected to Wotan; up to 3,000 a pass once all three switches are lit." },
      ],
      avoidShots: [
        { name: "Center of the disc", desc: "The ball can be flung anywhere, including the outlanes." },
      ],
      tips: [
        { head: "Zipped flippers", body: "With the flippers together a center drain is impossible, but aiming is harder (backhands get easier). Releasing a lock with a yellow mushroom also opens them." },
        { head: "Kicker", body: "Hit the top disc rollover to turn the left outlane kicker on; it stays on after use until the lower left or lower right disc rollover turns it off." },
        { head: "Turn order", body: "Fireball causes many tournament mistakes: check whose ball it is before plunging." },
      ],
      mistakes: [
        "Plunging at full strength out of habit.",
        "Locking a ball while another ball is in play: if that ball drains right after, your turn ends.",
      ],
    },

    hotspots: [
      { x: 39, y: 11, type: "key",   label: "3K", name: "3,000 Skill Lane", body: "Plunge here: 3,000, lights the yellow pops." },
      { x: 8,  y: 42, type: "key",   label: "OD", name: "Odin Saucer", body: "Lock; released by the right yellow mushroom." },
      { x: 82, y: 39, type: "key",   label: "WO", name: "Wotan Saucer", body: "Lock; released by the left yellow mushroom." },
      { x: 13, y: 30, type: "key",   label: "CB", name: "Captive Ball Lane", body: "Scores the lit value; releases both locks." },
      { x: 87, y: 60, type: "key",   label: "RL", name: "Right Side Lane", body: "100 or 1,000 per switch." },
      { x: 7,  y: 59, type: "info",  label: "YM", name: "Left Yellow Mushroom", body: "Releases Wotan; opens the flippers." },
      { x: 73, y: 59, type: "info",  label: "YM", name: "Right Yellow Mushroom", body: "Releases Odin; opens the flippers." },
      { x: 43, y: 43, type: "info",  label: "BM", name: "Blue Mushroom", body: "Zips the flippers together." },
      { x: 46, y: 28, type: "info",  label: "P",  name: "Pop Bumpers", body: "Yellow ones lit by the skill shot." },
      { x: 45, y: 66, type: "avoid", label: "D",  name: "Spinning Disc", body: "Flings the ball; top rollover lights the kicker." },
      { x: 4,  y: 74, type: "avoid", label: "!",  name: "Left Outlane", body: "Kicker when on." },
      { x: 89, y: 89, type: "avoid", label: "!",  name: "Right Outlane", body: "Drain." },
    ],
  };
