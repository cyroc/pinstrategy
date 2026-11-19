  /* ─── BUCK ROGERS (GOTTLIEB 1980) ────────────────────────── */
MACHINES['buckrogers'] = {
    name: "Buck Rogers",  sub: "1980 · Gottlieb · System 1 (solid state)",
    tagline: "Captive-ball Return to Base · yellow drops for 5× bonus · bonus collect at the saucer · B-U-C-K lanes",
    image: "images/buck-rogers.webp",
    difficulty: "Medium-Hard", diffClass: "diff-medium-hard", era: "SS",

    /* ── QUICK GUIDE (30–90 s read) ───────────────────────────── */
    quick: {
      goal: "Push the <strong>captive ball</strong> all the way in (ideally in one hit) to light features, clear <strong>yellow drop targets</strong> for up to <strong>5× bonus</strong>, build the bonus to 20,000, then <strong>collect it at the upper right saucer</strong> (up to 100,000). Repeat.",
      steps: [
        { title: "Return to Base",
          body: "Hit the <strong>captive ball</strong> hard, best from the right flipper. One full push: 10,000, all yellow drops reset and lit, bonus collect lit at the saucer. Two pushes: 5,000 and drops lit. A partial push lights a number (1–5): the saucer and outlanes then give that many bonus advances." },
        { title: "Yellow drops for bonus X",
          body: "Clearing all four yellow drops (or just a lit pair) advances the bonus multiplier up to <strong>5×</strong>. Each drop is 1,000 and a bonus advance." },
        { title: "Build and collect",
          body: "Loop the <strong>left orbit</strong> to the top lanes for advances. At 20,000 base bonus the <strong>upper right saucer</strong> collects the whole bonus × multiplier; the base resets but the multiplier stays. Then do it again." },
      ],
      shots: [
        { name: "Captive ball", why: "Return to Base: lights everything." },
        { name: "Yellow drops", why: "Bonus multiplier." },
        { name: "Upper right saucer", why: "Bonus advances and bonus collect." },
      ],
      avoid: [
        "The captive-ball rebound: it often comes straight down the middle; be ready to nudge.",
        "Draining with a big bonus uncollected: collect it at the saucer when lit.",
      ],
      target: "Milestones (estimates): 5× bonus = baseline. One 100,000 bonus collect = good. Several collects in a game = great.",
    },

    info: {
      stats: [
        { label: "Manufacturer", value: "Gottlieb" },
        { label: "Year",         value: "1980 (January)" },
        { label: "Design",       value: "John Buras" },
        { label: "Art",          value: "Gordon Morison" },
        { label: "Platform",     value: "Gottlieb System 1 (solid state)" },
        { label: "Production",   value: "7,410" },
      ],
      theme: "The 1979 Buck Rogers in the 25th Century TV series: a captive-ball 'Return to Base' target in the middle of the top lanes.",
      features: [
        { name: "Return to Base (captive ball)", desc: "Each hit pushes the vary-target further and lights a number 1–5 (bonus advances at the saucer and outlanes). Full push in 1 attempt: 10,000, reset and light both yellow pairs, bonus collect at the saucer, extra ball at the upper right side lane. 2 attempts: 5,000 + both pairs. 3 attempts: 3,000 + left pair. 4+: 1,000." },
        { name: "Yellow drop targets", desc: "Two pairs: 1,000 and a bonus advance each. All four (or a lit pair) = +1 bonus X (5,000 at 5×)." },
        { name: "Upper right saucer", desc: "5,000 + the lit number of bonus advances. At 20,000 base bonus it collects bonus × multiplier; the multiplier is kept." },
        { name: "B-U-C-K lanes", desc: "Top lanes (B and K also at the inlanes): 5,000 when lit, 500 otherwise, + a bonus advance. Completing B-U-C-K resets the red drops and lights them for a special." },
        { name: "Red drop targets", desc: "500 each; the bank: 10,000 (3-ball) + a bonus advance." },
      ],
      scoring: [
        { key: "Bonus collect",      val: "Up to 20,000 × 5 = 100,000" },
        { key: "Return to Base (1 push)", val: "10,000 + features" },
        { key: "Red drop bank",      val: "10,000 (3-ball)" },
        { key: "Lit top/inlane",     val: "5,000" },
        { key: "Pop bumpers",        val: "1,000 (3-ball)" },
      ],
      rules: [
        "Bonus and multiplier never carry over between balls.",
        "Outlanes score 5,000 + the lit number of bonus advances.",
        "If the saucer's advances bring the base bonus to 20,000, it collects automatically. The attempt counter is sometimes generous: two or three pushes can still give the one-push awards.",
        "A center post below the flippers saves many drains from captive-ball rebounds.",
        "Extra balls and specials are off in competition.",
      ],
      benchmarks: [
        { score: "Several bonus collects (estimate)", label: "Great game" },
        { score: "One 100,000 collect",             label: "Good game" },
        { score: "5× bonus",                        label: "Baseline" },
      ],
      resources: [
        { name: "Strategy Guide (Pinball Primer)", url: "https://pinballprimer.github.io/buckrogers_GRKx7.html", icon: "📖" },
        { name: "Pinside Game Page",               url: "https://pinside.com/pinball/machine/buck-rogers", icon: "🕹️" },
      ],
    },

    strategy: {
      skillShot: "Plunge into a lit top lane (U or C; B and K can also be collected at the inlanes): 5,000.",
      multiball: [],
      goal: "<strong>Captive ball in one hit → yellow drops to 5× → left orbit for bonus → collect at the upper right saucer.</strong>",
      phases: [
        { num: "Phase 1", title: "Return to Base", body: "Hard, accurate captive-ball shot from the right flipper." },
        { num: "Phase 2", title: "Multiplier", body: "Clear the lit yellow pairs until 5×." },
        { num: "Phase 3", title: "Collect", body: "Build to 20,000 base bonus and shoot the saucer; repeat." },
      ],
      safeShots: [
        { name: "Left orbit", desc: "Feeds the top lanes for bonus advances." },
      ],
      avoidShots: [
        { name: "Dead-center captive-ball hits", desc: "The rebound comes straight down the middle." },
      ],
      tips: [
        { head: "Partial pushes", body: "A high lit number (up to 5) makes every saucer and outlane hit worth more bonus." },
        { head: "Saucer loop", body: "On some machines the saucer kicks into a bumper and back into the saucer: free points." },
      ],
      mistakes: [
        "Tapping the captive ball softly several times: fewer features than one full push.",
        "Ignoring the saucer when bonus collect is lit.",
      ],
    },

    hotspots: [
      { x: 45, y: 21, type: "key",   label: "RB", name: "Captive Ball (Return to Base)", body: "Push it in fully, ideally in one hit." },
      { x: 77, y: 23, type: "key",   label: "SA", name: "Upper Right Saucer", body: "Bonus advances; bonus collect." },
      { x: 35, y: 46, type: "key",   label: "YD", name: "Yellow Drop Targets (right pair)", body: "Bonus multiplier." },
      { x: 12, y: 52, type: "key",   label: "YD", name: "Yellow Drop Targets (left pair)", body: "Bonus multiplier." },
      { x: 6,  y: 42, type: "key",   label: "LO", name: "Left Orbit", body: "To the top lanes for bonus." },
      { x: 45, y: 11, type: "info",  label: "BK", name: "B-U-C-K Lanes", body: "5,000 when lit; lights the red drops for a special." },
      { x: 85, y: 57, type: "info",  label: "RD", name: "Red Drop Targets", body: "10,000 for the bank." },
      { x: 85, y: 38, type: "info",  label: "SL", name: "Upper Right Side Lane", body: "Extra ball after a one-push Return to Base." },
      { x: 18, y: 21, type: "info",  label: "ST", name: "Upper Left Standup", body: "3,000 + bonus advance." },
      { x: 4,  y: 82, type: "avoid", label: "!",  name: "Left Outlane", body: "5,000 + lit bonus advances." },
      { x: 88, y: 82, type: "avoid", label: "!",  name: "Right Outlane", body: "5,000 + lit bonus advances." },
    ],
  };
