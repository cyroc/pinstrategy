  /* ─── LECTRONAMO ─────────────────────────────────────────── */
MACHINES['lectronamo'] = {
    name: "Lectronamo",  sub: "1978 · Stern Electronics · M-100",
    tagline: "Bonus to 10,000 lights the spinner at 1,000 a spin · right drops for 2×/3×/5× · collect at the left kicker · 9,000 left inlane",
    image: "images/lectronamo.webp",
    difficulty: "Medium", diffClass: "diff-medium", era: "SS",

    /* ── QUICK GUIDE (30–90 s read) ───────────────────────────── */
    quick: {
      goal: "Build the bonus with the <strong>spinner</strong>: at 10,000 it lights for <strong>1,000 a spin</strong> for the rest of the ball. Raise the multiplier at the <strong>right drop targets</strong> (2×, 3×, 5×), then <strong>collect at the upper-left side lane</strong> once the bonus is at its 19,000 max. Expert option: farm the <strong>9,000 left inlane</strong>.",
      steps: [
        { title: "Right drops first",
          body: "Each clear of the <strong>right 3-bank</strong> = 6,000 + multiplier 2× → 3× → 5×. Get these early each ball — the multiplier <strong>resets every ball</strong>." },
        { title: "Spinner to 10,000",
          body: "Every 4th spin advances the bonus (starts at 1,000). At <strong>10,000</strong> the spinner lights yellow: 1,000 a spin for the rest of the ball, even after a collect." },
        { title: "Collect at 19,000",
          body: "The kicker in the <strong>upper-left side lane</strong> pays bonus × multiplier, resets the bonus to 1,000 and keeps the multiplier. Don't go in before 10,000; go in as soon as possible at 19,000 (up to 95,000 at 5×)." },
        { title: "Expert: 9,000 inlane",
          body: "If the lit left inlane <strong>stays lit</strong> (a setting), hit the star rollover behind the spinner, then alley-pass from the right flipper into the left inlane again and again — 9,000 each. Top players farm this." },
      ],
      shots: [
        { name: "Right 3-bank", why: "Multiplier to 5×." },
        { name: "Spinner", why: "Bonus advances; 1,000 a spin when lit." },
        { name: "Upper-left side lane", why: "Collects bonus × multiplier." },
        { name: "Left inlane (lit)", why: "9,000 a pass." },
      ],
      avoid: [
        "The upper-left 5-bank lights specials/extra ball — only worth it if specials are set to repeatable points.",
        "Collecting before the bonus reaches 10,000 delays the lit spinner.",
      ],
      target: "Milestones: 5× and a lit spinner each ball = good game. Several 95,000 collects = great.",
    },

    info: {
      stats: [
        { label: "Manufacturer", value: "Stern Electronics" },
        { label: "Year",         value: "1978 (August)" },
        { label: "Design",       value: "Mike Kubin" },
        { label: "Production",   value: "2,423" },
        { label: "System",       value: "Stern M-100; Stern's first game with electronic sound" },
        { label: "Max bonus",    value: "19,000 × 5 = 95,000" },
      ],
      theme: "Electricity: lightning bolts, sparks and star bumpers in orange, red, yellow and teal.",
      features: [
        { name: "Spinner", desc: "100 a spin; every 4th spin advances the bonus. 1,000 a spin for the rest of the ball once the bonus reaches 10,000." },
        { name: "Star rollover behind the spinner", desc: "100; lights the left inlane for 9,000." },
        { name: "Right 3-bank", desc: "500 per target; clear = 6,000 + multiplier (2×, 3×, 5×; no 4×). Resets each ball." },
        { name: "Upper-left side lane (collect)", desc: "Kicker collects bonus × multiplier and resets the bonus to 1,000 (multiplier kept); kicks the ball over a top rollover (1,000 + advance, or 5,000 + 3 advances when lit)." },
        { name: "Top saucer", desc: "500 + advance; 5,000 + 3 advances when lit." },
        { name: "Lower left standup", desc: "5,000 + advance; lights the top saucer and the collect-lane rollover." },
        { name: "Upper-left 5-bank", desc: "500 per target; clear = 10,000 + award (default: nothing, then lights the right-inlane extra ball, then special; operator-adjustable)." },
        { name: "Pop bumpers", desc: "1,000 in 3-ball play (100 in 5-ball)." },
        { name: "Inlanes / outlanes", desc: "Inlanes 3,000 (left 9,000 when lit; right extra ball when lit); outlanes 3,000 + 3 advances." },
      ],
      scoring: [
        { key: "Lit spinner",     val: "1,000 a spin" },
        { key: "Collect",         val: "Up to 19,000 × 5 = 95,000" },
        { key: "Left inlane (lit)", val: "9,000" },
        { key: "Right bank clear", val: "6,000 + multiplier" },
        { key: "5-bank clear",    val: "10,000 + award" },
      ],
      rules: [
        "Setting: the lit 9,000 left inlane either stays lit for the ball or unlights after one collect. If it stays lit, expert players alley-pass (shatz) into it over and over.",
        "Bonus × multiplier is also paid on the drain; collecting mid-ball lets you rebuild from 1,000 instead of wasting advances at 19,000.",
        "Specials can be set to 100,000 points and to repeat; extra balls are void with comp settings.",
        "Rules from The Pinball Primer; settings vary by machine.",
      ],
      benchmarks: [
        { score: "Several 95,000 collects", label: "Great game" },
        { score: "5× and spinner lit each ball", label: "Good game" },
        { score: "3× + one collect", label: "Baseline" },
      ],
      resources: [
        { name: "Rules (The Pinball Primer)", url: "https://pinballprimer.github.io/lectronamo_GRWd2.html", icon: "📖" },
        { name: "IPDB Entry",                url: "https://www.ipdb.org/machine.cgi?id=1429", icon: "🎯" },
        { name: "Pinside Game Page",         url: "https://pinside.com/pinball/machine/lectronamo", icon: "🕹️" },
      ],
    },

    strategy: {
      skillShot: "None.",
      multiball: [],
      goal: "<strong>Multiplier at the right drops, bonus to 10,000 for the 1,000 spinner, then collect at 19,000.</strong> If the 9,000 inlane stays lit and you can alley-pass, farm it instead.",
      phases: [
        { num: "Phase 1", title: "5×", body: "Right 3-bank three times." },
        { num: "Phase 2", title: "Spinner", body: "Bonus to 10,000; spinner lit." },
        { num: "Phase 3", title: "Collect", body: "At 19,000 go to the left collect lane; rebuild and repeat." },
      ],
      safeShots: [
        { name: "Spinner", desc: "Advances bonus every 4 spins; 1,000 a spin when lit." },
      ],
      avoidShots: [
        { name: "Upper-left 5-bank", desc: "Harder, riskier shots for special/extra-ball awards." },
      ],
      tips: [
        { head: "9,000 inlane", body: "Hit the star rollover behind the spinner to light it; alley-pass the ball into it from the right flipper." },
        { head: "Lower left standup", body: "Don't chase it, but it lights the 5,000 top saucer and collect rollover." },
      ],
      mistakes: [
        "Entering the collect lane before the bonus reaches 10,000.",
        "Leaving the bonus at 19,000 — further advances are wasted.",
      ],
    },

    hotspots: [
      { x: 73,   y: 21,   type: "key",   label: "S",  name: "Spinner", body: "Bonus advances; 1,000 a spin when lit." },
      { x: 81,   y: 48,   type: "key",   label: "X",  name: "Right 3-Bank", body: "Multiplier 2×/3×/5×." },
      { x: 5,    y: 38,   type: "key",   label: "C",  name: "Upper-Left Side Lane – Collect (approx.)", body: "Collects bonus × multiplier." },
      { x: 73,   y: 13,   type: "info",  label: "★",  name: "Star Rollover", body: "Lights the 9,000 left inlane." },
      { x: 44,   y: 8,    type: "info",  label: "T",  name: "Top Saucer", body: "5,000 + 3 advances when lit." },
      { x: 20,   y: 20,   type: "info",  label: "5",  name: "Upper-Left 5-Bank", body: "10,000 + extra ball / special awards." },
      { x: 8,    y: 52,   type: "info",  label: "L",  name: "Lower Left Standup", body: "Lights the top saucer and collect rollover." },
      { x: 13,   y: 70,   type: "key",   label: "9",  name: "Left Inlane", body: "9,000 when lit." },
      { x: 5,    y: 80,   type: "avoid", label: "!",  name: "Left Outlane", body: "3,000 + 3 advances." },
      { x: 87.5, y: 80,   type: "avoid", label: "!",  name: "Right Outlane", body: "3,000 + 3 advances." },
    ],
  };
