  /* ─── THE SIX MILLION DOLLAR MAN (BALLY 1978) ────────────── */
MACHINES['sixmilliondollarman'] = {
    name: "The Six Million Dollar Man",  sub: "1978 · Bally · Bally -35 (solid state)",
    tagline: "Lit spinners for 1,000 a spin · top saucer to 5× bonus · 50,000 Bionic Power Score · six-player game",
    image: "images/six-million-dollar-man.webp",
    difficulty: "Medium", diffClass: "diff-medium", era: "SS",

    /* ── QUICK GUIDE (30–90 s read) ───────────────────────────── */
    quick: {
      goal: "Complete the <strong>right drop targets</strong> once to light both <strong>spinners</strong> (1,000 a spin), shoot through the spinners to the <strong>top saucer</strong> for <strong>5× bonus</strong>, then collect the <strong>50,000 Bionic Power Score</strong> again and again.",
      steps: [
        { title: "Light the spinners",
          body: "Clear the <strong>right drop bank</strong> once: both spinners score 1,000 a spin for the rest of the ball (every 5th spin is a bonus advance). After that, ignore the drops (the next completions give an extra ball and specials, worth only 20,000 in competition)." },
        { title: "Top saucer to 5×",
          body: "The <strong>top saucer</strong> pays 3,000, 5,000, then <strong>2×, 3×, 5× bonus</strong>, then 10,000 each time. Each hit also raises the <strong>center post</strong> and gives 3 bonus advances (3-ball play). Aim plunges and spinner shots at it." },
        { title: "50,000 Bionic Power",
          body: "Spell 5-0-0-0-0: the two <strong>top lanes</strong> (5 and the first 0) and the three <strong>left 0 targets</strong>. It scores 50,000 and 5 bonus advances, raises the post and opens the right outlane gate. Three on one ball = special." },
      ],
      shots: [
        { name: "Spinners", why: "1,000 a spin once lit." },
        { name: "Top saucer", why: "Bonus X, center post, bonus advances." },
        { name: "Left 0 targets", why: "50,000 Bionic Power Score." },
      ],
      avoid: [
        "The drop targets after the first completion: little value in competition.",
        "Tilting: the 5× bonus (up to 145,000) is a big part of each ball.",
      ],
      target: "Milestones (estimates): 5× bonus on a ball = baseline. A 50,000 power score plus a maxed bonus = good. Several power scores per ball = great.",
    },

    info: {
      stats: [
        { label: "Manufacturer", value: "Bally" },
        { label: "Year",         value: "1978 (October)" },
        { label: "Design",       value: "Greg Kmiec" },
        { label: "Art",          value: "Dave Christensen" },
        { label: "Platform",     value: "Bally -35 (solid state); up to 6 players" },
        { label: "Production",   value: "10,320" },
      ],
      theme: "The 1970s TV series about bionic astronaut Steve Austin. One of very few six-player pinball machines.",
      features: [
        { name: "Top saucer", desc: "3,000 → 5,000 → 2× → 3× → 5× bonus → 10,000 each time; at 5× the outlanes light alternately for a special. Every hit raises the center post and adds 3 bonus advances (1 in 5-ball play)." },
        { name: "Spinners", desc: "10 a spin, or 1,000 when lit (right drop bank completed once). Every 5th spin = bonus advance." },
        { name: "Right drop targets", desc: "30 each, 3,000 for the bank. 1st completion lights the spinners, 2nd = extra ball, 3rd+ = special." },
        { name: "Bionic Power Score", desc: "Top lanes (5, 0) + three left 0 targets: 50,000, 5 bonus advances, center post up and the right outlane gate open. 3 times in one ball = special." },
        { name: "Center post", desc: "Raised by the top saucer, the center target or a power score; lowered by the inlanes and star rollovers." },
      ],
      scoring: [
        { key: "Bionic Power Score", val: "50,000" },
        { key: "Max bonus (3-ball)", val: "29,000 × 5 = 145,000" },
        { key: "Lit spinner",        val: "1,000 a spin" },
        { key: "Top saucer after 5×", val: "10,000" },
        { key: "Extra ball / special (competition)", val: "20,000" },
      ],
      rules: [
        "Bonus and bonus X reset every ball; there's no mid-ball bonus collect.",
        "Top lanes and 0 targets each score 500 and a bonus advance: they build bonus too.",
        "Right outlane gate: opened only by a power score; sends one ball back to the plunger.",
        "Settings can make the special 2 power scores instead of 3, start the saucer at 5,000, or link two of the 0 targets.",
      ],
      benchmarks: [
        { score: "Several power scores per ball (estimate)", label: "Great game" },
        { score: "Power score + maxed 5× bonus",           label: "Good game" },
        { score: "5× bonus on a ball",                     label: "Baseline" },
      ],
      resources: [
        { name: "Strategy Guide (Pinball Primer)", url: "https://pinballprimer.github.io/6mdm_GrEke.html", icon: "📖" },
        { name: "Pinside Game Page",               url: "https://pinside.com/pinball/machine/six-million-dollar-man", icon: "🕹️" },
      ],
    },

    strategy: {
      skillShot: "None, but a plunge that reaches the top saucer starts the bonus X ladder.",
      multiball: [],
      goal: "<strong>Right drops once → lit spinners into the top saucer (5×) → 50,000 power scores.</strong>",
      phases: [
        { num: "Phase 1", title: "Spinners", body: "Complete the right drop bank once." },
        { num: "Phase 2", title: "Bonus", body: "Spinner shots that reach the top saucer; five saucer hits = 5×." },
        { num: "Phase 3", title: "Power", body: "Top lanes and left 0 targets for 50,000 each time; the open gate and raised post protect you." },
      ],
      safeShots: [
        { name: "Spinners", desc: "Points, bonus and a feed to the top saucer." },
      ],
      avoidShots: [
        { name: "Right drops (after the first time)", desc: "Extra balls and specials are only 20,000 in competition." },
      ],
      tips: [
        { head: "Center post", body: "When it's up, a center drain is blocked: take bigger risks then." },
        { head: "Bonus count", body: "Max base bonus (29,000) comes fast with spinners and saucer hits; after that, chase power scores." },
      ],
      mistakes: [
        "Shooting unlit spinners (10 a spin) before clearing the right drops.",
        "Rolling through the inlanes needlessly when the center post is up: it drops the post.",
      ],
    },

    hotspots: [
      { x: 46, y: 17, type: "key",   label: "TS", name: "Top Saucer", body: "3K, 5K, 2×, 3×, 5× bonus, then 10K; raises the post." },
      { x: 21, y: 23, type: "key",   label: "LS", name: "Left Spinner", body: "1,000 a spin when lit." },
      { x: 70, y: 23, type: "key",   label: "RS", name: "Right Spinner", body: "1,000 a spin when lit." },
      { x: 84, y: 54, type: "key",   label: "DT", name: "Right Drop Targets", body: "1st completion lights the spinners." },
      { x: 12, y: 59, type: "key",   label: "0",  name: "Left 0 Targets", body: "Part of the 50,000 power score." },
      { x: 30, y: 16, type: "info",  label: "5",  name: "Top Lane 5", body: "500 + bonus advance; the 5 of 50,000." },
      { x: 61, y: 16, type: "info",  label: "0",  name: "Top Lane 0", body: "500 + bonus advance; the first 0." },
      { x: 46, y: 46, type: "info",  label: "CT", name: "Center Target", body: "Raises the center post." },
      { x: 45, y: 63, type: "info",  label: "BP", name: "Bionic Power Score", body: "Spell 50000 for 50,000." },
      { x: 5,  y: 85, type: "avoid", label: "!",  name: "Left Outlane", body: "Special alternates here after 5× bonus." },
      { x: 88, y: 85, type: "avoid", label: "!",  name: "Right Outlane", body: "Gate opens after a power score." },
    ],
  };
