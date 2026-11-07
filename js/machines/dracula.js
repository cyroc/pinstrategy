  /* ─── DRACULA (1979) ─────────────────────────────────────── */
MACHINES['dracula'] = {
    name: "Dracula",  sub: "1979 · Stern Electronics · M-100",
    tagline: "Max the bonus to 20,000 to keep the spinner at 1,000 a spin · double bonus · always-on collect saucer · 5× on the last ball",
    image: "images/dracula.webp",
    difficulty: "Medium", diffClass: "diff-medium", era: "SS",

    /* ── QUICK GUIDE (30–90 s read) ───────────────────────────── */
    quick: {
      goal: "Push the bonus to its <strong>20,000 max</strong>: the <strong>right spinner</strong> then stays at <strong>1,000 a spin</strong> for the rest of the ball. Add <strong>double bonus</strong>, rip the spinner, and cash the bonus at the <strong>top-left saucer</strong> when it's full.",
      steps: [
        { title: "Build bonus to 20,000",
          body: "Each advance is worth 2,000. Advances: the four star rollovers, the small passive bumper up top, the bottom right standup and the outlanes. Before 20,000 the spinner is only lit at exactly 2,000, 8,000 or 14,000." },
        { title: "Double bonus",
          body: "Clear the <strong>left drop targets</strong> twice (later clears 7,000 each), or light three stars (upper-left loop or the top right standup) and then make the lit <strong>star loop</strong> for 10,000 + 2×." },
        { title: "Spin and collect",
          body: "Rip the <strong>right spinner</strong>; when the bonus is full, shoot the <strong>top-left saucer</strong> to collect bonus × multiplier (it resets to 2,000 — rebuild and repeat). On the last ball, double bonus alternates with <strong>5×</strong>: collect or drain while 5× is lit." },
      ],
      shots: [
        { name: "Right spinner", why: "1,000 a spin when lit." },
        { name: "Left drop targets", why: "2× on the second clear; 7,000 after." },
        { name: "Top-left saucer", why: "Collects the full bonus." },
      ],
      avoid: [
        "Don't collect at the saucer before 20,000 — it resets the bonus to 2,000 and delays the permanently lit spinner.",
        "Extra balls are void with comp settings, but if specials score 100,000 (points setting), X-Y-Z then Y twice is a direct path to one.",
      ],
      target: "Milestones: 20,000 bonus and 2× on most balls = good game. A 5× collect on the last ball = great.",
    },

    info: {
      stats: [
        { label: "Manufacturer", value: "Stern Electronics" },
        { label: "Year",         value: "1979 (January)" },
        { label: "Design",       value: "Harry Williams" },
        { label: "Production",   value: "3,612" },
        { label: "System",       value: "Stern M-100" },
        { label: "Max bonus",    value: "20,000 × 2 (× 5 on the last ball)" },
      ],
      theme: "Count Dracula, with his victims, bats and a serpent painted around the playfield.",
      features: [
        { name: "Right spinner", desc: "100 a spin; 1,000 when lit (bonus at 2K/8K/14K, or for the rest of the ball once 20,000 is reached)." },
        { name: "Top-left saucer", desc: "Always collects bonus × multiplier; resets the bonus to 2,000." },
        { name: "Star loop (upper left)", desc: "1,000 + advance star; with three stars lit the loop scores 10,000 + 2×. Hard to shoot directly." },
        { name: "Left drop targets", desc: "500 each; clears: 3,000, then 3,000 + 2×, then 7,000 each." },
        { name: "Upper drop targets (4)", desc: "Shot from the upper flipper. 1st clear lights the cats (3,000); 2nd lights the bats (5,000) plus the inlane special and extra ball." },
        { name: "Right standups", desc: "Top: 1,000 + star. X-Y-Z: 3,000 each; then Y for 7,000, then Y for a special. Bottom: 1,000 + bonus advance." },
        { name: "Passive bumper", desc: "Small bumper near the upper flipper: 1,000 + bonus advance." },
        { name: "Outlanes", desc: "3,000 + one advance per lit cat or bat (0–8)." },
      ],
      scoring: [
        { key: "Bonus advance",   val: "2,000 each (max 20,000)" },
        { key: "Lit spinner",     val: "1,000 a spin" },
        { key: "Lit star loop",   val: "10,000 + 2×" },
        { key: "Left drops",      val: "3,000 / 3,000 + 2× / 7,000" },
        { key: "Pop bumpers",     val: "1,000 (3-ball) / 100 (5-ball)" },
        { key: "Saucer collect",  val: "Up to 40,000 (100,000 at 5×)" },
      ],
      rules: [
        "The last-ball 5× alternates with 2× on every 10-point switch (2× must be lit).",
        "Bonus and multiplier never carry over.",
        "Specials can be set to 100,000 points; extra balls are void with comp settings.",
        "Rules from The Pinball Primer; settings vary by machine.",
      ],
      benchmarks: [
        { score: "5× collect on the last ball", label: "Great game" },
        { score: "20,000 + 2× on most balls", label: "Good game" },
        { score: "Spinner lit for a whole ball", label: "Baseline" },
      ],
      resources: [
        { name: "Rules (The Pinball Primer)", url: "https://pinballprimer.github.io/dracula_G4Zl2.html", icon: "📖" },
        { name: "IPDB Entry",                url: "https://www.ipdb.org/machine.cgi?id=728", icon: "🎯" },
        { name: "Wikipedia",                 url: "https://en.wikipedia.org/wiki/Dracula_(pinball)", icon: "📚" },
      ],
    },

    strategy: {
      skillShot: "None. A plunge can be fed to the upper flipper for a shot at the upper drop targets.",
      multiball: [],
      goal: "<strong>Max the bonus, earn 2×, rip the lit spinner and collect at the saucer when full.</strong> On the last ball, time a collect or drain with 5× lit.",
      phases: [
        { num: "Phase 1", title: "Max bonus", body: "Advances to 20,000 — spinner lit for the ball." },
        { num: "Phase 2", title: "2×", body: "Left drops twice, or three stars then the lit loop." },
        { num: "Phase 3", title: "Collect", body: "Spinner, then saucer collects at full bonus." },
      ],
      safeShots: [
        { name: "Left drop targets", desc: "Going for these all day is a decent plan." },
        { name: "Right spinner", desc: "Feeds the upper area for more advances." },
      ],
      avoidShots: [
        { name: "Early saucer", desc: "Resets the bonus before the spinner is permanently lit." },
      ],
      tips: [
        { head: "Last ball", body: "Watch the 2×/5× lights alternate and collect at the saucer with 5× lit." },
        { head: "Upper flipper", body: "A spinner shot often feeds it — fire at the upper drop targets." },
      ],
      mistakes: [
        "Collecting at the saucer below 20,000.",
        "Shooting the spinner when it isn't lit (only 100 a spin).",
      ],
    },

    hotspots: [
      { x: 82,   y: 33,   type: "key",   label: "S",  name: "Right Spinner", body: "1,000 a spin when lit." },
      { x: 16,   y: 34,   type: "key",   label: "C",  name: "Collect Saucer", body: "Collects bonus × multiplier." },
      { x: 10,   y: 48,   type: "key",   label: "L",  name: "Left Drop Targets", body: "2× on the 2nd clear; 7,000 later." },
      { x: 5,    y: 33,   type: "info",  label: "★",  name: "Star Loop", body: "Three loops = 10,000 + 2×." },
      { x: 69,   y: 20,   type: "info",  label: "U",  name: "Upper Drop Targets", body: "Cats / bats; light inlane awards." },
      { x: 37,   y: 32,   type: "info",  label: "UF", name: "Upper Flipper", body: "Shoots the upper drop targets." },
      { x: 38,   y: 19,   type: "info",  label: "PB", name: "Passive Bumper", body: "1,000 + bonus advance." },
      { x: 78,   y: 58,   type: "info",  label: "XYZ", name: "X-Y-Z Standups", body: "3,000; then Y for 7,000 and a special." },
      { x: 78,   y: 66,   type: "info",  label: "A",  name: "Bottom Standup", body: "1,000 + bonus advance." },
      { x: 4,    y: 80,   type: "avoid", label: "!",  name: "Left Outlane", body: "3,000 + cats/bats advances." },
      { x: 87,   y: 79,   type: "avoid", label: "!",  name: "Right Outlane", body: "3,000 + cats/bats advances." },
    ],
  };
