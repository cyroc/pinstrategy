  /* ─── HOT HAND ───────────────────────────────────────────── */
MACHINES['hothand'] = {
    name: "Hot Hand",  sub: "1979 · Stern Electronics · M-100",
    tagline: "Poker pinball: collect cards for bonus, pairs → 4-of-a-kind for 2×–4×, all carried over · 1,000-a-spin spinner · rotating clock flipper in the saucer ring",
    image: "images/hot-hand.webp",
    difficulty: "Medium", diffClass: "diff-medium", era: "SS",

    /* ── QUICK GUIDE (30–90 s read) ───────────────────────────── */
    quick: {
      goal: "Every <strong>card</strong> you collect is 1,000 bonus, and matching ranks raise the multiplier: <strong>pair = 2×, three = 3×, four of a kind = 4×</strong>. Cards and multiplier <strong>carry over between balls</strong>, so build them on ball 1, then rip the <strong>1,000-a-spin spinner</strong>.",
      steps: [
        { title: "Where cards come from",
          body: "A card of the <strong>lit suit</strong> comes from: the 10 <strong>top saucers</strong> (Ten, Jack, Queen, King), the right standups (King/Queen top, Jack/Ten lower) and the <strong>right drop targets</strong> (K-J-A-T-Q). <strong>Aces only</strong> come from the centre drop target." },
        { title: "Suits and multipliers",
          body: "The spinner, slingshots and left bumper change the lit suit. Chase one rank in four suits for <strong>4×</strong> early. 5× needs all 20 cards (every royal flush) — very hard." },
        { title: "Spinner and saucers",
          body: "The <strong>left spinner</strong> pays 1,000 a spin (2,000 after the Spade royal flush), changes suit each spin and returns the ball to the top. A saucer pays 200 per fifth of a second until the rotating <strong>clock flipper</strong> pushes the ball out — often into another saucer for more cards." },
      ],
      shots: [
        { name: "Left spinner", why: "1,000 a spin; back to the top." },
        { name: "Right drop targets", why: "Cards; the centre target is the only Ace." },
        { name: "Right standups", why: "Cards; 2,000 once a rank is complete." },
      ],
      avoid: [
        "Flipping straight at the bumpers.",
        "Chasing all four royal flushes — even one or two is a good game.",
      ],
      target: "Milestones: 4× with a dozen cards on ball 1 = good game. A 40,000–50,000 bonus each ball = great.",
    },

    info: {
      stats: [
        { label: "Manufacturer", value: "Stern Electronics" },
        { label: "Year",         value: "1979 (May)" },
        { label: "Design",       value: "Harry Williams" },
        { label: "Production",   value: "3,793 (IPDB/Pinpedia; Pinside 4,117)" },
        { label: "System",       value: "Stern M-100" },
        { label: "Max bonus",    value: "20 cards × 1,000 × 5 + 100,000 super = 200,000" },
      ],
      theme: "Poker: a big hand of playing cards, poker chips and a card table, with a saucer ring laid out like a clock.",
      features: [
        { name: "Top saucers (10) + clock flipper", desc: "Four Tens and two each of Jack, Queen, King: award that card in the lit suit, plus 200 per 1/5 s (2,000 after the Diamond royal flush). A rotating flipper pushes the ball on, often through several saucers." },
        { name: "Right drop targets (5)", desc: "K-J-A-T-Q, 500 each, award that card; 2,000 once all four of that rank are lit. Centre = the only Ace (5,000 with all Aces and the Spade flush)." },
        { name: "Right standups (4)", desc: "King, Queen (top right) and Jack, Ten (lower right): 500 + card; 2,000 once the rank is complete." },
        { name: "Left spinner", desc: "1,000 a spin (2,000 after the Spade flush); changes the suit each spin; returns the ball to the top." },
        { name: "Left standup", desc: "500, or 5,000 after the Heart royal flush." },
        { name: "Left kickback lane", desc: "10,000 and kicks the ball to the saucers; extra ball after the Spade flush." },
        { name: "Bumpers", desc: "Left bumper 100 and changes the suit; the others 10." },
        { name: "Inlanes / outlanes", desc: "Inlanes 500 (5,000 after Club/Heart flushes); outlanes 3,000, special after 2 flushes." },
      ],
      scoring: [
        { key: "Each card",     val: "1,000 bonus" },
        { key: "Pair / three / four", val: "2× / 3× / 4×" },
        { key: "Spinner",       val: "1,000 (2,000) a spin" },
        { key: "Saucer time",   val: "200 (2,000) per 1/5 s" },
        { key: "Specials",      val: "100,000 if set to points" },
      ],
      rules: [
        "All cards and multipliers carry over between balls.",
        "All 20 cards: next ball resets the board with 5× kept and a 100,000 super bonus.",
        "Royal flushes, best first: Spades (2,000 spinner, kickback extra ball, 5,000 Ace), Diamonds (2,000 saucers), Hearts (5,000 right inlane and left standup), Clubs (5,000 left inlane).",
        "Extra balls are void with comp settings.",
        "Rules from The Pinball Primer; settings vary by machine.",
      ],
      benchmarks: [
        { score: "40,000–50,000 bonus at 4×", label: "Great game" },
        { score: "4× on ball 1", label: "Good game" },
        { score: "3× + 8 cards", label: "Baseline" },
      ],
      resources: [
        { name: "Rules (The Pinball Primer)", url: "https://pinballprimer.github.io/hothand_GRvNk.html", icon: "📖" },
        { name: "IPDB Entry",                url: "https://www.ipdb.org/machine.cgi?id=1244", icon: "🎯" },
        { name: "Pinside Game Page",         url: "https://pinside.com/pinball/machine/hot-hand", icon: "🕹️" },
      ],
    },

    strategy: {
      skillShot: "None.",
      multiball: [],
      goal: "<strong>Cards and 4× on ball 1 (they carry over), then the spinner and saucers.</strong> On a tough machine, the spinner all day is the safe plan.",
      phases: [
        { num: "Phase 1", title: "Cards", body: "Saucers, right standups and drops in the lit suit." },
        { num: "Phase 2", title: "4×", body: "Four of one rank — Tens are the most common saucer." },
        { num: "Phase 3", title: "Spin", body: "Left spinner for 1,000 a spin and more saucer visits." },
      ],
      safeShots: [
        { name: "Left spinner", desc: "1,000 a spin and back to the top." },
      ],
      avoidShots: [
        { name: "Bumpers", desc: "10–100 points and erratic." },
      ],
      tips: [
        { head: "Watch the suit", body: "Check the lit suit before shooting a card target." },
        { head: "Spade flush first", body: "It's the most valuable royal flush (2,000 spinner)." },
      ],
      mistakes: [
        "Ignoring cards on ball 1, when they pay on every later ball.",
        "Collecting cards you already have.",
      ],
    },

    hotspots: [
      { x: 45,   y: 18,   type: "key",   label: "S",  name: "Saucer Ring + Clock Flipper", body: "Cards and 200 per 1/5 s." },
      { x: 8,    y: 26,   type: "key",   label: "SP", name: "Left Spinner", body: "1,000 a spin; changes the suit." },
      { x: 82.5, y: 50,   type: "key",   label: "D",  name: "Right Drop Targets", body: "K-J-A-T-Q; centre = Ace." },
      { x: 80,   y: 19.5, type: "key",   label: "KQ", name: "King/Queen Standups", body: "Cards of the lit suit." },
      { x: 84,   y: 64,   type: "info",  label: "JT", name: "Jack/Ten Standups", body: "Cards of the lit suit." },
      { x: 6,    y: 54.5, type: "info",  label: "K",  name: "Left Kickback Lane", body: "10,000; extra ball after the Spade flush." },
      { x: 36,   y: 42,   type: "info",  label: "B",  name: "Left Bumper", body: "Changes the lit suit." },
      { x: 21,   y: 28.5, type: "info",  label: "LT", name: "Left Standup", body: "500; 5,000 after the Heart flush." },
      { x: 47,   y: 65,   type: "info",  label: "C",  name: "Card Board", body: "20 cards; 1,000 bonus each." },
      { x: 7.5,  y: 81,   type: "avoid", label: "!",  name: "Left Outlane", body: "3,000; special when lit." },
      { x: 85,   y: 80,   type: "avoid", label: "!",  name: "Right Outlane", body: "3,000; special when lit." },
    ],
  };
