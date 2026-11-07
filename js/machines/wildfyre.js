  /* ─── WILD FYRE ──────────────────────────────────────────── */
MACHINES['wildfyre'] = {
    name: "Wild Fyre",  sub: "1978 · Stern Electronics · M-100",
    tagline: "Max the bonus to 20,000 to keep the spinner at 1,000 a spin · double bonus · collect saucer upper right · WILD FYRE specials",
    image: "images/wild-fyre.webp",
    difficulty: "Medium", diffClass: "diff-medium", era: "SS",

    /* ── QUICK GUIDE (30–90 s read) ───────────────────────────── */
    quick: {
      goal: "Get the bonus to its <strong>20,000 max</strong>: the <strong>spinner</strong> then stays at <strong>1,000 a spin</strong> for the rest of the ball. Light <strong>double bonus</strong>, keep the ball up top, and cash full bonuses at the <strong>upper-right collect saucer</strong>.",
      steps: [
        { title: "Bonus to 20,000",
          body: "Each advance is worth 2,000. Advances: centre rollovers, the upper-right standup, the outer right inlane (2–3 advances) and the outlanes (one per WILD FYRE letter lit this ball). Before 20,000 the spinner is only lit at exactly 2,000, 8,000 or 14,000." },
        { title: "Double bonus",
          body: "Clear the <strong>upper-left 3-bank</strong> twice, or collect three arrow advances at the <strong>right side lane</strong> rollover / lower-right standup. On the last ball, 2× alternates with <strong>5×</strong> — collect or drain on 5×." },
        { title: "Spin and collect",
          body: "Rip the <strong>spinner</strong>, then shoot the <strong>collect saucer</strong> (bonus × multiplier, resets to 2,000). If specials score 100,000 (points setting), completing <strong>W-I-L-D F-Y-R-E</strong> at the left 4-bank lights the inner-left lane special, and two top-saucer sets light the centre saucer special." },
      ],
      shots: [
        { name: "Spinner", why: "1,000 a spin when lit." },
        { name: "Collect saucer (upper right)", why: "Bonus × multiplier." },
        { name: "Upper-left 3-bank", why: "2× on the second clear." },
      ],
      avoid: [
        "Collecting before you reach 20,000 — the bonus resets to 2,000 and the permanent spinner is delayed.",
        "Watch the dividers beside the innermost inlanes — they are the riskiest spot (Kineticist).",
      ],
      target: "Milestones: 20,000 bonus and 2× most balls = good game. A 5× collect on the last ball (100,000) = great.",
    },

    info: {
      stats: [
        { label: "Manufacturer", value: "Stern Electronics" },
        { label: "Year",         value: "1978 (October)" },
        { label: "Design",       value: "Harry Williams" },
        { label: "Production",   value: "≈2,400" },
        { label: "System",       value: "Stern M-100" },
        { label: "Max bonus",    value: "20,000 × 2 (× 5 on the last ball)" },
      ],
      theme: "Roman chariot racing through fire: harnessed horses, laurel-crowned Romans and women in classical dress, wrapped in flames.",
      features: [
        { name: "Spinner", desc: "100 a spin; 1,000 when lit (bonus at 2K/8K/14K, or for the rest of the ball once 20,000 is reached)." },
        { name: "Collect saucer (upper right)", desc: "Collects bonus × multiplier; resets the bonus to 2,000 (multiplier kept). Kicks out to the left." },
        { name: "Upper-left 3-bank", desc: "500 each; clears: 3,000, then 3,000 + 2×, then 7,000 each." },
        { name: "Left 4-bank (WILD FYRE)", desc: "500 each; lights the matching WILD letter, or FYRE once that WILD letter is lit. Clear 3,000 then 5,000. WILD = inner-right lane 5,000 + extra ball; WILD FYRE = inner-left lane special." },
        { name: "Top saucers (3)", desc: "3,000 each and light. All three lit: centre saucer 7,000. Second set: centre special." },
        { name: "Right side lane / lower-right standup", desc: "1,000 + arrow advance; three arrows = 2× and the rollover scores 10,000." },
        { name: "Bottom lanes", desc: "Two inlanes each side (the innermost ones replace the slingshots). Standard left lane resets the 4-bank; standard right lane 2–3 advances; outlanes 3,000 + one advance per lit letter." },
        { name: "Pop bumpers", desc: "1,000 in 3-ball play (100 in 5-ball)." },
      ],
      scoring: [
        { key: "Bonus advance",   val: "2,000 each (max 20,000)" },
        { key: "Lit spinner",     val: "1,000 a spin" },
        { key: "Collect",         val: "Up to 40,000 (100,000 at 5×)" },
        { key: "Arrow rollover (lit)", val: "10,000" },
        { key: "Centre saucer",   val: "3,000 → 7,000 → special" },
        { key: "Specials",        val: "100,000 in competition/novelty play" },
      ],
      rules: [
        "The last-ball 5× alternates with 2× on every 10-point switch (2× must be lit).",
        "Specials can be capped at one per ball or left open; extra balls can only be on or off (void with comp settings).",
        "Bonus and multiplier never carry over.",
        "Rules from The Pinball Primer; settings vary by machine.",
      ],
      benchmarks: [
        { score: "5× collect on the last ball", label: "Great game" },
        { score: "20,000 + 2× most balls", label: "Good game" },
        { score: "Spinner lit for a whole ball", label: "Baseline" },
      ],
      resources: [
        { name: "Rules (The Pinball Primer)", url: "https://pinballprimer.github.io/wildfyre_GrOwV.html", icon: "📖" },
        { name: "IPDB Entry",                url: "https://www.ipdb.org/machine.cgi?id=2783", icon: "🎯" },
        { name: "Pinside Game Page",         url: "https://pinside.com/pinball/machine/wild-fyre", icon: "🕹️" },
      ],
    },

    strategy: {
      skillShot: "None.",
      multiball: [],
      goal: "<strong>Max the bonus once to light the spinner for the ball, get 2×, then spin and collect whenever the bonus is high.</strong> On the last ball, mid-ball 5× collects are possible.",
      phases: [
        { num: "Phase 1", title: "Max bonus", body: "Advances to 20,000 — spinner lit for the ball." },
        { num: "Phase 2", title: "2×", body: "Upper-left 3-bank twice or three arrows." },
        { num: "Phase 3", title: "Collect", body: "Spinner and collect saucer; repeat." },
      ],
      safeShots: [
        { name: "Spinner (left orbit)", desc: "1,000 a spin once the bonus has maxed." },
      ],
      avoidShots: [
        { name: "Early collect", desc: "Before 20,000 it delays the lit spinner." },
      ],
      tips: [
        { head: "Last ball", body: "With 2× lit, the multiplier flips between 2× and 5× — collect with 5× lit." },
        { head: "Outlane value", body: "Each WILD FYRE letter lit this ball adds a bonus advance on an outlane drain." },
      ],
      mistakes: [
        "Collecting below 20,000 early in a ball.",
        "Chasing the 4-bank for the extra ball, which is void with comp settings.",
      ],
    },

    hotspots: [
      { x: 10,   y: 32,   type: "key",   label: "S",  name: "Left Spinner", body: "1,000 a spin when lit." },
      { x: 73,   y: 27,   type: "key",   label: "C",  name: "Collect Saucer", body: "Collects bonus × multiplier." },
      { x: 22,   y: 24,   type: "key",   label: "3",  name: "Upper-Left 3-Bank", body: "2× on the second clear." },
      { x: 10,   y: 48,   type: "info",  label: "W",  name: "Left 4-Bank (WILD FYRE)", body: "Letters; extra ball / special lanes." },
      { x: 44,   y: 16.5, type: "info",  label: "T",  name: "Top Saucers", body: "3,000; centre 7,000, then special." },
      { x: 81,   y: 32,   type: "info",  label: "A",  name: "Right Side Lane", body: "Arrow advance; three = 2×." },
      { x: 84,   y: 51,   type: "info",  label: "R",  name: "Lower-Right Standup", body: "Arrow advance." },
      { x: 22,   y: 82,   type: "info",  label: "SP", name: "Inner-Left Lane", body: "Special after WILD FYRE." },
      { x: 69,   y: 82,   type: "info",  label: "EB", name: "Inner-Right Lane", body: "5,000 + extra ball after WILD." },
      { x: 7,    y: 83,   type: "avoid", label: "!",  name: "Left Outlane", body: "3,000 + letter advances." },
      { x: 84,   y: 83,   type: "avoid", label: "!",  name: "Right Outlane", body: "3,000 + letter advances." },
    ],
  };
