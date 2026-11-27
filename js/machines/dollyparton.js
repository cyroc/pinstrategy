  /* ─── DOLLY PARTON (BALLY 1979) ──────────────────────────── */
MACHINES['dollyparton'] = {
    name: "Dolly Parton",  sub: "1979 · Bally · Bally -35 (solid state)",
    tagline: "Spell DOLLY PARTON for 22,000 and 44,000 Super Bonus that carries over · inline drop targets for the spinner and 2×, 3×, 5× bonus · Super Star target",
    image: "images/dolly-parton.webp",
    difficulty: "Medium", diffClass: "diff-medium", era: "SS",

    /* ── QUICK GUIDE (30–90 s read) ───────────────────────────── */
    quick: {
      goal: "<strong>Every ball, clear the four inline drop targets first:</strong> they light the spinner (1,000 a spin) and give <strong>5×</strong> bonus. Then spell <strong>DOLLY PARTON</strong>: each letter is 2,000 bonus; the first completion lights a 22,000 <strong>Super Bonus</strong>, the second raises it to 44,000, and it carries over to later balls.",
      steps: [
        { title: "Inline drop targets",
          body: "The lane of four drops on the right: 1st lights the <strong>spinner</strong> for the ball, 2nd = 2×, 3rd = 3×, 4th = <strong>5×</strong> bonus, and each spots a PARTON letter (default). Do this first on every ball, since bonus X resets. Behind them, the <strong>Super Star target</strong> scores 25,000, then 50,000, then 20,000 a hit in competition (extra ball, special)." },
        { title: "DOLLY PARTON",
          body: "PARTON comes from the drops and the <strong>top saucer</strong>. DOLLY only comes from the five upper-left <strong>standups</strong>, which you mostly reach by nudging the ball around the pop bumpers. Letters and Super Bonus carry over between balls. The second completion lights the outlanes for a special; the third scores a special but drops the bonus from 64,000 back to 44,000: at 5× that costs more than the 50,000 special." },
        { title: "Shots to the top",
          body: "Lit spinner from the left flipper, the area left of the pops from the right flipper: both send the ball to the top for more letters." },
      ],
      shots: [
        { name: "Inline drop targets", why: "Spinner, 5× bonus, PARTON letters." },
        { name: "Right spinner (lit)", why: "1,000 a spin; feeds the top." },
        { name: "Top saucer", why: "PARTON letter (5,000 after PARTON)." },
      ],
      avoid: [
        "The Super Star target when the rebound from a miss isn't safe.",
        "Tilting: at 5× with a Super Bonus the end-of-ball bonus is most of your score.",
      ],
      target: "Milestones (estimates): one DOLLY PARTON = baseline. Two completions (44,000 Super Bonus) collected at 5× = good. 5× bonus near the 64,000 maximum on several balls = great.",
    },

    info: {
      stats: [
        { label: "Manufacturer", value: "Bally" },
        { label: "Year",         value: "1979" },
        { label: "Design",       value: "George Christian" },
        { label: "Art",          value: "Dave Christensen" },
        { label: "Platform",     value: "Bally -35 (solid state)" },
      ],
      theme: "Country singer Dolly Parton: records, guitars and stars, with Dolly on the playfield and backglass.",
      features: [
        { name: "Inline drop targets", desc: "200 (lights the spinner), 400 (2×), 600 (3×), 800 (5×); each spots a PARTON letter (setting). The Super Star target behind them: extra ball, then special, then 20,000 each time." },
        { name: "DOLLY PARTON", desc: "Each letter = 2,000 bonus. DOLLY standups score 400 (1,000 once DOLLY is done); the top saucer scores 500 and a PARTON letter (5,000 once PARTON is done). Completion 1: 22,000 Super Bonus and inlanes lit for 5,000. Completion 2: 44,000 Super Bonus and outlane special. Completion 3: a special, and the bonus drops back to 44,000." },
        { name: "Spinner", desc: "100 a spin, or 1,000 when lit by the first inline drop (for the rest of the ball)." },
        { name: "Pop bumpers", desc: "100 each; nudging the ball around them is the only way to reach the DOLLY standups." },
        { name: "Right shooter return lane", desc: "5,000 and back to the shooter lane for a replunge." },
      ],
      scoring: [
        { key: "Max bonus",        val: "64,000 × 5 = 320,000" },
        { key: "Super Bonus",      val: "22,000 / 44,000" },
        { key: "Lit spinner",      val: "1,000 a spin" },
        { key: "Extra ball / special (competition)", val: "25,000 / 50,000" },
        { key: "Super Star (after the special)", val: "20,000" },
      ],
      rules: [
        "Letters in progress and the Super Bonus carry over between balls; bonus X does not (unless set to), and the drops reset every ball.",
        "Settings can light the top saucer and inlanes for 5,000 from the start, put the outlane special on the left outlane only, or stop the drops spotting PARTON letters.",
        "The left standup only scores 500.",
      ],
      benchmarks: [
        { score: "5× near the 64,000 maximum on several balls (estimate)", label: "Great game" },
        { score: "Two completions collected at 5×",                        label: "Good game" },
        { score: "One DOLLY PARTON",                                       label: "Baseline" },
      ],
      resources: [
        { name: "Strategy Guide (Pinball Primer)", url: "https://pinballprimer.github.io/dollyparton_G43Yq.html", icon: "📖" },
        { name: "SDPC Cheatsheet",                 url: "https://pinball.miraheze.org/wiki/Dolly_Parton", icon: "📄" },
        { name: "Pinside Game Page",               url: "https://pinside.com/pinball/machine/dolly-parton", icon: "🕹️" },
      ],
    },

    strategy: {
      skillShot: "None.",
      multiball: [],
      goal: "<strong>Drops first (spinner and 5×), then DOLLY PARTON letters through the top; never tilt a big bonus.</strong>",
      phases: [
        { num: "Phase 1", title: "Drops", body: "Four inline drops: spinner, 5×, PARTON letters." },
        { num: "Phase 2", title: "Letters", body: "Spinner and left-of-pops shots to the top; nudge in the pops for DOLLY." },
        { num: "Phase 3", title: "Bonus", body: "Build toward 64,000 at 5×." },
      ],
      safeShots: [
        { name: "Lit spinner", desc: "From the left flipper; points and a trip to the top." },
      ],
      avoidShots: [
        { name: "Super Star target", desc: "Narrow lane; only when a miss is saveable." },
      ],
      tips: [
        { head: "Third completion", body: "After two completions, think twice before the 11th letter: at 5× it costs up to 100,000 bonus for a 50,000 special." },
        { head: "Pop nudging", body: "Nudge while the ball is in the bumpers to push it into the DOLLY standups." },
      ],
      mistakes: [
        "Skipping the drops at the start of a ball (no spinner, no 5×).",
      ],
    },

    hotspots: [
      { x: 70,  y: 32,  type: "key",   label: "DT", name: "Inline Drop Targets", body: "Spinner, 2×/3×/5×, PARTON letters." },
      { x: 70,  y: 23,  type: "info",  label: "SS", name: "Super Star Target", body: "Extra ball, special, then 20,000." },
      { x: 80,  y: 37,  type: "key",   label: "SP", name: "Right Spinner", body: "1,000 a spin when lit." },
      { x: 44,  y: 15,  type: "key",   label: "S",  name: "Top Saucer", body: "PARTON letter; 5,000 after PARTON." },
      { x: 20,  y: 20,  type: "key",   label: "D",  name: "DOLLY Standups (approx.)", body: "DOLLY letters." },
      { x: 32,  y: 31,  type: "info",  label: "P",  name: "Pop Bumpers", body: "Nudge toward the DOLLY standups." },
      { x: 50,  y: 58,  type: "info",  label: "DP", name: "DOLLY PARTON Letters", body: "2,000 bonus each; Super Bonus." },
      { x: 85,  y: 57,  type: "info",  label: "RL", name: "Right Shooter Return Lane", body: "5,000 and a replunge; not worth aiming for." },
      { x: 8,   y: 53,  type: "info",  label: "L",  name: "Left Standup", body: "500." },
      { x: 12,  y: 80,  type: "info",  label: "IL", name: "Left Inlane", body: "5,000 after one completion." },
      { x: 83,  y: 80,  type: "info",  label: "IL", name: "Right Inlane", body: "5,000 after one completion." },
      { x: 5,   y: 80,  type: "avoid", label: "!",  name: "Left Outlane", body: "Special after two completions." },
      { x: 91,  y: 80,  type: "avoid", label: "!",  name: "Right Outlane", body: "Special after two completions (setting)." },
    ],
  };
