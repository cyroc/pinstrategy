  /* ─── STINGRAY ───────────────────────────────────────────── */
MACHINES['stingray'] = {
    name: "Stingray",  sub: "1977 · Stern Electronics · M-100",
    tagline: "It's all about the 55,000 saucer: get to the top saucer as often as possible · 10,000-per-advance bonus with double bonus",
    image: "images/stingray.webp",
    difficulty: "Medium", diffClass: "diff-medium", era: "SS",

    /* ── QUICK GUIDE (30–90 s read) ───────────────────────────── */
    quick: {
      goal: "Stingray is decided by who collects the most <strong>55,000 saucers</strong>. Get the ball to the <strong>top saucer</strong> as often as you can — through the <strong>spinner lane</strong> or the <strong>right Stingray lane</strong> — and hope the rotating award is on 55,000.",
      steps: [
        { title: "Top saucer",
          body: "Five awards rotate on every 10-point switch (not always in order): 5,000; 5,000 + light spinner and Stingray lane; 5,000 + double bonus; 5,000 + extra ball (just 5,000 with extra balls off); <strong>55,000</strong>. Both saucers show the same award, and it carries over between turns." },
        { title: "Getting up there",
          body: "The <strong>spinner lane</strong> is the preferred route to the top (1,000 a spin when lit). The <strong>right Stingray lane</strong> (5 rollovers, 1,000 each when lit) also feeds it." },
        { title: "Extras",
          body: "Each bonus advance is worth <strong>10,000</strong> (max 100,000, doubled with the saucer's double bonus). Left drop target clears score 10,000; the second lights specials (100,000 if set to points)." },
      ],
      shots: [
        { name: "Spinner lane", why: "Best route to the top saucer." },
        { name: "Right Stingray lane", why: "Second route to the top." },
        { name: "Left drop targets", why: "10,000 per clear; specials." },
      ],
      avoid: [
        "Don't aim for the centre saucer: posts on both sides make it risky and strong flippers make the ball skip out.",
        "Tournament machines may give saucer awards in order (custom board) — check first.",
      ],
      target: "Milestones: two 55,000 saucers = good game. Four or more = great.",
    },

    info: {
      stats: [
        { label: "Manufacturer", value: "Stern Electronics" },
        { label: "Year",         value: "1977 (December)" },
        { label: "Design",       value: "Roger Sharpe & Sam Stern (Mike Kubin built the whitewood, per IPDB)" },
        { label: "Production",   value: "3,006" },
        { label: "System",       value: "Stern M-100" },
        { label: "Max bonus",    value: "100,000 × 2 = 200,000" },
      ],
      theme: "Scuba diving: a stingray, fish, an octopus, seahorses and divers around a ship's-wheel saucer.",
      features: [
        { name: "Top saucer (ship's wheel)", desc: "Rotating award: 5,000; 5,000 + light spinner & Stingray lane (and the bumper standups); 5,000 + double bonus; 5,000 + extra ball; 55,000." },
        { name: "Centre saucer", desc: "Same award as the top saucer; risky to shoot." },
        { name: "Spinner lane", desc: "100 a spin, 1,000 when lit. Route to the top." },
        { name: "Stingray lane (right)", desc: "Five rollovers, 100 each or 1,000 when lit." },
        { name: "Left drop targets", desc: "Clear = 10,000; the second clear lights specials at the outlanes and the upper-right target lane." },
        { name: "Bonus", desc: "10,000 per advance (upper-right target lane, lit rollover above the flippers, outlanes); max 100,000; double bonus from the saucer." },
        { name: "Inlanes / outlanes", desc: "Inlanes 5,000 (extra ball when lit); outlanes 10,000 + advance (special when lit)." },
      ],
      scoring: [
        { key: "Saucer jackpot", val: "55,000" },
        { key: "Bonus",          val: "10,000 per advance, max 200,000 with 2×" },
        { key: "Drop clear",     val: "10,000" },
        { key: "Lit spinner",    val: "1,000 a spin" },
        { key: "Specials",       val: "100,000 if set to points" },
      ],
      rules: [
        "Bonus and multiplier do not carry over; the lit saucer award does.",
        "Some competition machines use a custom board that gives saucer awards in order.",
        "Extra balls are void with comp settings.",
        "Rules from The Pinball Primer; settings vary by machine.",
      ],
      benchmarks: [
        { score: "4+ saucer 55,000s", label: "Great game" },
        { score: "Two 55,000s", label: "Good game" },
        { score: "One 55,000", label: "Baseline" },
      ],
      resources: [
        { name: "Rules (The Pinball Primer)", url: "https://pinballprimer.github.io/stingray_G57lj.html", icon: "📖" },
        { name: "IPDB Entry",                url: "https://www.ipdb.org/machine.cgi?id=2377", icon: "🎯" },
        { name: "Pinside Game Page",         url: "https://pinside.com/pinball/machine/stingray", icon: "🕹️" },
      ],
    },

    strategy: {
      skillShot: "None.",
      multiball: [],
      goal: "<strong>Maximise trips to the top saucer.</strong> Almost nothing else matters next to 55,000 collects.",
      phases: [
        { num: "Phase 1", title: "Route", body: "Spinner lane or Stingray lane to the top." },
        { num: "Phase 2", title: "Collect", body: "Top saucer — every visit is a chance at 55,000." },
        { num: "Phase 3", title: "Extras", body: "Left drops and bonus when convenient." },
      ],
      safeShots: [
        { name: "Spinner lane", desc: "The preferred way back to the top." },
      ],
      avoidShots: [
        { name: "Centre saucer", desc: "Posts on both sides; balls skip out." },
      ],
      tips: [
        { head: "Watch the lights", body: "The lit award carries over between turns — note what's lit when your ball starts." },
        { head: "In-order boards", body: "If awards come in order, count saucer visits to time the 55,000." },
      ],
      mistakes: [
        "Spending shots on drop targets instead of feeding the top saucer.",
        "Shooting the centre saucer.",
      ],
    },

    hotspots: [
      { x: 47,   y: 14,   type: "key",   label: "S",  name: "Top Saucer", body: "Rotating award; 55,000." },
      { x: 9.5,  y: 37.5, type: "key",   label: "SP", name: "Spinner Lane", body: "Route to the top; 1,000 a spin when lit." },
      { x: 86,   y: 40,   type: "key",   label: "SR", name: "Stingray Lane", body: "Route to the top; 1,000 per rollover when lit." },
      { x: 47,   y: 51,   type: "avoid", label: "C",  name: "Centre Saucer", body: "Same award; risky to shoot." },
      { x: 10,   y: 56,   type: "info",  label: "D",  name: "Left Drop Targets", body: "10,000 per clear; specials." },
      { x: 78.5, y: 36.5, type: "info",  label: "T",  name: "Upper-Right Target Lane", body: "Bonus advance; special when lit." },
      { x: 46,   y: 78,   type: "info",  label: "R",  name: "Bonus Rollover", body: "Advance when lit." },
      { x: 13,   y: 72,   type: "info",  label: "EB", name: "Left Inlane", body: "5,000; extra ball when lit." },
      { x: 79,   y: 72,   type: "info",  label: "EB", name: "Right Inlane", body: "5,000; extra ball when lit." },
      { x: 5,    y: 73,   type: "avoid", label: "!",  name: "Left Outlane", body: "10,000 + advance; special when lit." },
      { x: 86,   y: 73,   type: "avoid", label: "!",  name: "Right Outlane", body: "10,000 + advance; special when lit." },
    ],
  };
