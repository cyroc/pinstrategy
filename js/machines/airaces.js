  /* ─── AIR ACES (BALLY 1975) ──────────────────────────────── */
MACHINES['airaces'] = {
    name: "Air Aces",  sub: "1975 · Bally · Electro-mechanical",
    tagline: "A 9-target drop bank worth 5,000 and 5 bonus advances · four flippers · top saucers light extra ball and double bonus · inlane specials",
    image: "images/air-aces.webp",
    difficulty: "Medium", diffClass: "diff-medium", era: "EM",

    /* ── QUICK GUIDE (30–90 s read) ───────────────────────────── */
    quick: {
      goal: "Build the <strong>bonus</strong> (up to 20,000) and double it. The <strong>9-target drop bank</strong> is the fastest way: 500 and an advance per target, <strong>5,000 and 5 advances</strong> for the whole bank. Once the bonus is high enough, the right <strong>top saucer</strong> lights <strong>Double Bonus</strong> (max 40,000).",
      steps: [
        { title: "Drop targets",
          body: "Shoot the long bank from the <strong>side (upper) flippers</strong> or the lower ones. Completing all nine: 5,000, 5 bonus advances, the bank resets and both inlanes light for a special. Careful: drop shots from an upper flipper often come back toward the opposite outlane." },
        { title: "Bumpers and sides",
          body: "One of the two <strong>top bumpers</strong> is always lit; a lit bumper is 100 and a bonus advance, and any 10-point switch swaps which one is lit. Shots up the sides feed the bumpers for safe advances when the drops are risky." },
        { title: "Top saucers",
          body: "Both score 500. When the bonus reaches the set level (default 5,000 left and 8,000 right; one tournament machine used 12,000 and 11,000) the <strong>left saucer</strong> lights extra ball and the <strong>right saucer</strong> lights <strong>Double Bonus</strong>. Collect the double before you drain." },
      ],
      shots: [
        { name: "9-target drop bank", why: "Bonus advances; 5,000 per bank." },
        { name: "Right top saucer", why: "Double Bonus when lit." },
        { name: "Side lanes to the bumpers", why: "Safe bonus advances." },
      ],
      avoid: [
        "Wild drop-target shots from the side flippers: rebounds go to the opposite outlane.",
        "Letting a ball roll along the top of the drop structure into the center: nudge it off the side wall.",
      ],
      target: "Milestones (estimates): one full drop bank a ball = baseline. Double Bonus collected = good. A 20,000 bonus doubled on several balls = great.",
    },

    info: {
      stats: [
        { label: "Manufacturer", value: "Bally" },
        { label: "Year",         value: "1975 (February)" },
        { label: "Design",       value: "Jim Patla" },
        { label: "Art",          value: "Dave Christensen" },
        { label: "Platform",     value: "Electro-mechanical, 4 flippers, 4 players" },
        { label: "Production",   value: "About 3,085" },
      ],
      theme: "World War I biplanes and flying aces. Billed as Bally's first machine with drop targets.",
      features: [
        { name: "9-target drop bank", desc: "500 and a bonus advance per target. All nine: 5,000, 5 advances, the bank resets and both inlanes light for a special (relit by the next full bank)." },
        { name: "Bumpers", desc: "Two top bumpers, one always lit: unlit 10, lit 100 and a bonus advance. Any 10-point switch alternates the lit bumper." },
        { name: "Top saucers", desc: "500 each. Left = extra ball and right = Double Bonus once the bonus reaches the operator's levels (4,000–13,000; default 5,000 and 8,000)." },
        { name: "Bonus", desc: "Advanced by the lit bumper, each drop target and 5 times by a full bank. Max 20,000, doubled to 40,000. No holdover between balls." },
      ],
      scoring: [
        { key: "Full drop bank",  val: "5,000 + 5 advances" },
        { key: "Max bonus",       val: "20,000 × 2 = 40,000" },
        { key: "Drop target",     val: "500 + advance" },
        { key: "Outlane / inlane", val: "1,000 / 500" },
      ],
      rules: [
        "Specials and the extra ball give credits or balls, not points: in competition they add nothing.",
        "The SDPC cheatsheet lists Double Bonus at 11,000 and extra ball at 12,000, so check the card on your machine.",
      ],
      benchmarks: [
        { score: "20,000 bonus doubled on several balls (estimate)", label: "Great game" },
        { score: "Double Bonus collected",                          label: "Good game" },
        { score: "One full drop bank a ball",                       label: "Baseline" },
      ],
      resources: [
        { name: "Strategy Guide (Pinball Primer)", url: "https://pinballprimer.github.io/airaces_G420v.html", icon: "📖" },
        { name: "SDPC Cheatsheet",                 url: "https://pinball.miraheze.org/wiki/Air_Aces", icon: "📄" },
        { name: "Pinside Game Page",               url: "https://pinside.com/pinball/machine/air-aces", icon: "🕹️" },
      ],
    },

    strategy: {
      skillShot: "None.",
      multiball: [],
      goal: "<strong>Drop bank for bonus, bumpers for safe advances, right saucer for Double Bonus.</strong>",
      phases: [
        { num: "Phase 1", title: "Build", body: "Drop bank and lit bumper to the Double Bonus level." },
        { num: "Phase 2", title: "Double", body: "Right top saucer when Double Bonus is lit." },
        { num: "Phase 3", title: "Max", body: "Keep building toward 20,000 without draining." },
      ],
      safeShots: [
        { name: "Side lanes", desc: "Up to the bumpers for advances." },
      ],
      avoidShots: [
        { name: "Drops from an upper flipper at a bad angle", desc: "Rebounds toward the opposite outlane." },
      ],
      tips: [
        { head: "Top of the drops", body: "A ball rolling along the top of the drop structure can fall straight down the middle: nudge it off the side wall." },
      ],
      mistakes: [
        "Draining with Double Bonus lit but not collected.",
      ],
    },

    hotspots: [
      { x: 47,  y: 36,  type: "key",   label: "DT", name: "9-Target Drop Bank", body: "500 + advance each; 5,000 for all." },
      { x: 58.3, y: 12,  type: "key",   label: "DB", name: "Right Saucer (Double Bonus)", body: "Double Bonus when lit." },
      { x: 35.5, y: 12,  type: "info",  label: "EB", name: "Left Saucer (Extra Ball)", body: "Extra ball when lit." },
      { x: 29,  y: 17,  type: "info",  label: "B",  name: "Left Bumper", body: "Bonus advance when lit." },
      { x: 64,  y: 17,  type: "info",  label: "B",  name: "Right Bumper", body: "Bonus advance when lit." },
      { x: 13,  y: 57,  type: "info",  label: "UF", name: "Left Side Flipper", body: "Drops and the right side." },
      { x: 82,  y: 57,  type: "info",  label: "UF", name: "Right Side Flipper", body: "Drops and the left side." },
      { x: 15,  y: 78,  type: "info",  label: "IL", name: "Left Inlane", body: "Special when lit." },
      { x: 78,  y: 78,  type: "info",  label: "IL", name: "Right Inlane", body: "Special when lit." },
      { x: 9,   y: 82,  type: "avoid", label: "!",  name: "Left Outlane", body: "Drain." },
      { x: 84,  y: 82,  type: "avoid", label: "!",  name: "Right Outlane", body: "Drain." },
    ],
  };
