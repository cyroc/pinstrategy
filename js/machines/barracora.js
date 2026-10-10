  /* ─── BARRACORA ──────────────────────────────────────────── */
MACHINES['barracora'] = {
    name: "Barracora", sub: "1981 · Williams · System 7", era: "SS",
    tagline: "B-A-RR / A-C-O-R-A drops · stacking bonus multipliers up to 25X · eject-hole multiball",
    image: 'images/barracora.webp',
    difficulty: "Medium", diffClass: "diff-medium",

    /* ── QUICK GUIDE (30–90 s read) ───────────────────────────── */
    quick: {
      goal: "The big points are the <strong>bonus</strong>. Each completed drop bank raises the regular <strong>bonus X</strong>, completing both banks raises the <strong>Super bonus X</strong> (kept between balls), and the two <strong>multiply</strong> (up to 25X). Cash it in with the 1–6 lanes → bonus collect at the top eject hole.",
      steps: [
        { title: "Complete the drop banks in order",
          body: "<strong>B-A-RR</strong> (left) and <strong>A-C-O-R-A</strong> (right): letters must fall in sequence. Each bank = bonus X up + a lock lamp; both banks = Super bonus X up." },
        { title: "Lock and start multiball",
          body: "One lock lamp: shoot the <strong>left eject hole</strong> (upper left) for 2-ball. Both lamps lit: lock in the <strong>top eject hole</strong> first, then the left eject hole → 3-ball." },
        { title: "Build the bonus",
          body: "Every lane (top, inlanes, outlanes) adds 1K bonus (max 29K). Keep completing banks to raise the multipliers." },
        { title: "Collect",
          body: "Complete <strong>1-2-3 and 4-5-6</strong> on the top lanes (right flipper rotates 1-2-3, left rotates 4-5-6) → <strong>top eject hole</strong> collects the bonus; multipliers stay." },
      ],
      shots: [
        { name: "B-A-RR and A-C-O-R-A drop banks", why: "Bonus X, Super bonus X, lock lamps." },
        { name: "Left eject hole (upper left)", why: "Starts multiball; 30K/60K/90K value." },
        { name: "Top eject hole", why: "Lock for 3-ball; bonus collect after 1–6." },
      ],
      avoid: [
        "Don't aim at the centre stand-ups or the target-bonus lane — let them happen.",
        "Drop-target rebounds fly everywhere and the outlanes are open — be ready on the flippers.",
      ],
      target: "Milestones: Super bonus X raised early (it carries over) and a full 1–6 bonus collect = a good game.",
    },

    info: {
      stats: [
        { label: "Manufacturer", value: "Williams" },
        { label: "Year",         value: "1981 (September)" },
        { label: "Design",       value: "Roger Sharpe & Steve Epstein (whitewood: Barry Oursler)" },
        { label: "Software",     value: "Ed Suchocki" },
        { label: "Art",          value: "Doug Watson" },
        { label: "Platform / units", value: "System 7 · 2,350 units" },
      ],
      theme: "Underwater predator theme (working titles 'Las Vegas' and 'Jet Orbit'; the art was first called 'Barracuda'). The first Williams game with a Super bonus multiplier.",
      features: [
        { name: "B-A-RR drop targets (left)", desc: "3 drops, completed in sequence. Advances bonus X and spots a lock lamp." },
        { name: "A-C-O-R-A drop targets (right)", desc: "5 drops, completed in sequence. Advances bonus X and spots a lock lamp." },
        { name: "Left eject hole (upper left)", desc: "Value 30K/60K/90K (raised by 1-2-3). Lock/start for 2- or 3-ball multiball." },
        { name: "Top eject hole", desc: "First lock for 3-ball multiball; collects the bonus once all six lane numbers are lit." },
        { name: "Bull's-Eye target (upper right)", desc: "Value 20K/40K/Extra Ball (raised by 4-5-6). With extra balls off it pays 100K." },
        { name: "Top lanes 1-2-3 / 4-5-6", desc: "Right flipper rotates 1-2-3, left flipper rotates 4-5-6. A ball scores the lowest unscored number in its lane." },
        { name: "Centre stand-ups + target bonus lane", desc: "Left stand-up raises the target bonus value, right raises its multiplier; collected via the 'Scores Target Bonus' lane on the right." },
      ],
      scoring: [
        { key: "Bonus multiplier",  val: "Regular X × Super X, up to 25X" },
        { key: "Base bonus",        val: "1K per lane, max 29K" },
        { key: "Target bonus",      val: "Up to 250K" },
        { key: "Left eject value",  val: "30K / 60K / 90K (1-2-3)" },
        { key: "Bull's-Eye value",  val: "20K / 40K / EB (100K with extra balls off)" },
      ],
      rules: [
        "<strong>Regular bonus X</strong> resets each ball; <strong>Super bonus X</strong> is kept for the whole game. Reaching Super 5X lights the outlane Specials.",
        "<strong>Locks:</strong> either bank spots an eject-hole lock lamp. With both lamps lit, lock in the top eject first for a 3-ball multiball (per the rulesheet, that top-locked ball is returned if you drain before multiball).",
        "<strong>Bull's-Eye value</strong> is kept when scored; the left-eject value resets — so 4-5-6 is the more useful lane set (both reset each ball).",
        "<strong>Target bonus</strong> resets when scored (or, with bonus lamps lined up, when scored twice).",
        "Factory setting: the best-scoring player gets a bonus ball in multiplayer games (normally off in competition).",
      ],
      benchmarks: [
        { score: "High Super X + collect", label: "Great game" },
        { score: "3-ball multiball",       label: "Good game" },
        { score: "Both banks once",        label: "Baseline" },
      ],
      resources: [
        { name: "Rules (silverballmania)", url: "https://rules.silverballmania.com/rules/GRo7K-MQ4e3", icon: "📖" },
        { name: "IPDB Entry",              url: "https://www.ipdb.org/machine.cgi?id=177", icon: "🎯" },
        { name: "Wikipedia",               url: "https://en.wikipedia.org/wiki/Barracora", icon: "📄" },
      ],
    },

    strategy: {
      skillShot: null,
      multiball: [
        { name: "Eject-hole Multiball", balls: 3,
          locks: "Each B-A-RR or A-C-O-R-A completion lights a lock lamp.",
          start: "One lamp: the left eject hole starts 2-ball. Both lamps: lock in the top eject first, then the left eject → 3-ball.",
          jackpots: "No jackpot rule; multiball is time to keep completing banks and lanes.",
          tip: "The rulesheet suggests finishing A-C-O-R-A first and locking up top early." },
      ],
      goal: "<strong>Complete both drop banks repeatedly</strong> (in letter order) to stack regular × Super bonus X, run multiball from the eject holes, and collect the bonus via the 1–6 lanes.",
      phases: [
        { num: "Phase 1", title: "Banks + locks", body: "Complete a bank, then the other. With both lock lamps lit, lock in the top eject." },
        { num: "Phase 2", title: "Multiball", body: "Left eject hole starts multiball. Keep shooting drops for more multipliers." },
        { num: "Phase 3", title: "Collect", body: "Use lane change to finish 1-2-3 and 4-5-6, then collect the bonus at the top eject hole." },
      ],
      safeShots: [
        { name: "Drop banks", desc: "The core shots; hit letters in order." },
      ],
      avoidShots: [
        { name: "Centre stand-ups", desc: "Rebounds go everywhere; let them happen naturally." },
      ],
      tips: [
        { head: "Lane trick", body: "A ball scores the lowest missing number in its lane, so move lit lanes with the flippers to avoid repeats." },
        { head: "Super X carries over", body: "Early Super bonus X raises every later bonus." },
      ],
      mistakes: [
        "Collecting the bonus before building the multipliers.",
        "Hitting drop targets out of order — out-of-sequence hits don't count toward the bank.",
      ],
    },

    hotspots: [
      { x: 81, y: 51,   type: "key",  label: "ACORA", name: "A-C-O-R-A Drop Targets",
        body: "5 drops (right), in order. Completion: bonus X up + lock lamp." },
      { x: 13, y: 47,   type: "key",  label: "BARR", name: "B-A-RR Drop Targets",
        body: "3 drops (left), in order. Completion: bonus X up + lock lamp." },
      { x: 74, y: 17,   type: "key",  label: "TE", name: "Top Eject Hole",
        body: "First lock for 3-ball multiball. Bonus collect when 1–6 are complete." },
      { x: 22, y: 19.5, type: "key",  label: "LE", name: "Left Eject Hole (upper left)",
        body: "Starts multiball. Value 30K/60K/90K via 1-2-3." },
      { x: 72, y: 23,   type: "info", label: "BE", name: "Bull's-Eye Target",
        body: "20K / 40K / EB (100K with extra balls off) via 4-5-6; value is kept when scored." },
      { x: 45, y: 14,   type: "info", label: "1-6", name: "Top Lanes 1-2-3 / 4-5-6",
        body: "Lane change with the flippers. All six = bonus collect lit." },
      { x: 46, y: 29,   type: "info", label: "J", name: "Jet Bumpers", body: "Safe area up top until the bumpers kick the ball out." },
      { x: 80, y: 25,   type: "info", label: "TB", name: "Target Bonus Lane",
        body: "'Scores Target Bonus' (up to 250K). Don't aim for it early." },
      { x: 91, y: 26,   type: "info", label: "RL", name: "Right Lane",
        body: "Outer right lane into the loop around the upper right." },
      { x: 10, y: 80, type: "avoid", label: "!", name: "Left Outlane",  body: "Open under comp settings. Special when lit (Super 5X)." },
      { x: 81, y: 80, type: "avoid", label: "!", name: "Right Outlane", body: "Open under comp settings. Special when lit (Super 5X)." },
    ],
  };
