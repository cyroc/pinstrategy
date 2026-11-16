  /* ─── CLASS OF 1812 (GOTTLIEB 1991) ──────────────────────── */
MACHINES['classof1812'] = {
    name: "Class of 1812",  sub: "1991 · Gottlieb (Premier) · System 3 (alphanumeric)",
    tagline: "Lock at the right ramp for 2-ball Multiball Madness · 1M left ramps · COFFIN jackpots · Zom-B's Bonus and Grover's Millions",
    image: "images/class-of-1812.webp",
    difficulty: "Medium", diffClass: "diff-medium", era: "SS",

    /* ── QUICK GUIDE (30–90 s read) ───────────────────────────── */
    quick: {
      goal: "<strong>Multiball</strong> is the big scorer: lock a ball at the <strong>right ramp</strong>, then every <strong>left ramp</strong> in multiball scores <strong>1M</strong>. In single-ball play, combo the ramps for <strong>COFFIN</strong> letters (2M jackpot) and play the two drop-target modes.",
      steps: [
        { title: "Lock → Multiball",
          body: "If the <strong>blue light above the right ramp</strong> is lit, shoot the <strong>right ramp</strong> to lock; 2-ball multiball starts at once. Not lit? Complete the <strong>left drop targets</strong> (1 or 2 sets, by setting) to relight it. In multiball, trap one ball on the right flipper and loop the other up the <strong>left ramp</strong> (1M each, often makeable as a backhand)." },
        { title: "COFFIN combos",
          body: "The left inlane briefly lights the right ramp, and the right inlane the left ramp, for a COFFIN letter: 100K, +100K for each letter in an unbroken combo (max 1M). Spelling COFFIN = <strong>2M jackpot</strong>." },
        { title: "Drop-target modes",
          body: "Banks lit red start a mode. <strong>Left drops</strong>: Zom-B's Bonus, a hurry-up from 6M down to 2M — hit the lit standup behind the drops. <strong>Right drops</strong>: Grover's Millions, 2M for each set of lit standups until the timer runs out." },
      ],
      shots: [
        { name: "Right ramp", why: "Lock; COFFIN letters; relights the Crypt."},
        { name: "Left ramp", why: "1M in multiball; COFFIN letters." },
        { name: "Left drop targets", why: "Relight the lock; Zom-B's Bonus." },
      ],
      avoid: [
        "Starting a drop-target mode while the lock is lit: you can't start multiball during a mode.",
        "Hitting other switches after multiball: the left ramp stays at 1M only until you touch anything but the ramps or inlanes.",
      ],
      target: "Milestones (estimates): one multiball with a few 1M ramps = baseline. A COFFIN jackpot and a long multiball = good. Repeated multiballs and big Grover's Millions = great.",
    },

    info: {
      stats: [
        { label: "Manufacturer", value: "Premier Technology (Gottlieb)" },
        { label: "Year",         value: "1991 (August)" },
        { label: "Design",       value: "Ray Tanzer, Joe Kaminkow" },
        { label: "Art",          value: "David Moore, Constantino Mitchell, Jeanine Mitchell" },
        { label: "Platform",     value: "Gottlieb System 3 (alphanumeric)" },
        { label: "Production",   value: "1,668 units" },
      ],
      theme: "A reunion of a long-dead class of monsters: Dracula, the Wolfman and friends, with a beating heart and chattering teeth on the backboard that play the 1812 Overture in multiball.",
      features: [
        { name: "Multiball Madness", desc: "Lock 1 ball at the right ramp (lit at game start, then relit by the left drops); 2-ball multiball starts at once. Left ramp = 1M a shot." },
        { name: "COFFIN letters", desc: "Inlane → opposite ramp; 100K rising by 100K per combo letter (max 1M). COFFIN = 2M jackpot." },
        { name: "Zom-B's Bonus (left drops)", desc: "Hurry-up from 6M to 2M at a lit standup behind the left drops." },
        { name: "Grover's Millions (right drops)", desc: "Hit all lit standups (red triangles) for 2M; repeats with a reset timer until it runs out." },
        { name: "Crypt (skill shot)", desc: "Hidden top lane left of the three top lanes: 1M on a precise plunge or in play; the right ramp relights it." },
        { name: "Top lanes", desc: "Light all 3 for +1× bonus (max 7×, carried over). 6× lights extra ball, 7× special; past 7× = 1M." },
        { name: "Bat-o-Meter spinner", desc: "5K a spin; the white standups raise it to 10K, then 20K (resets each ball)." },
        { name: "Door Prize (centre saucer)", desc: "Mystery: points, instant multiball, light lock, left ramp million, bonus X, extra ball and more." },
      ],
      scoring: [
        { key: "Multiball left ramp", val: "1M each" },
        { key: "COFFIN jackpot",      val: "2M" },
        { key: "Zom-B's Bonus",       val: "6M → 2M" },
        { key: "Grover's Millions",   val: "2M per set" },
        { key: "Max bonus",           val: "750K × 7 = 5.25M" },
        { key: "Extra ball / special (comp)", val: "1M each" },
      ],
      rules: [
        "Modes don't stack with each other or with multiball, and COFFIN letters can't be earned during multiball or a mode.",
        "After Zom-B's Bonus, the next left-drop set relights the lock if it isn't lit; one more set restarts the mode.",
        "Base bonus never carries over; the bonus multiplier always does.",
        "Rules from The Pinball Primer; lock difficulty (1 or 2 drop sets) is a setting.",
      ],
      benchmarks: [
        { score: "Repeated multiballs + Grover's Millions", label: "Great game" },
        { score: "COFFIN jackpot + long multiball",        label: "Good game" },
        { score: "One multiball, a few 1M ramps",          label: "Baseline" },
      ],
      resources: [
        { name: "Rules (The Pinball Primer)", url: "https://pinballprimer.github.io/classof1812_G5DYX.html", icon: "📖" },
        { name: "IPDB Entry",                 url: "https://www.ipdb.org/machine.cgi?id=528", icon: "🎯" },
        { name: "Pinside Game Page",          url: "https://pinside.com/pinball/machine/class-of-1812", icon: "🕹️" },
      ],
    },

    strategy: {
      skillShot: "Plunge with exactly the right power into the hidden Crypt lane left of the three top lanes: 1M.",
      multiball: [
        { name: "Multiball Madness", balls: 2, locks: "Right ramp when the blue light above it is lit (or a Crypt entry with lock lit).", start: "Immediately after the lock.", jackpots: "Every left ramp scores 1M.", tip: "Hold one ball on the right flipper and backhand the left ramp with the other." },
      ],
      goal: "<strong>Lock → multiball → 1M left ramps, repeatedly.</strong> Fill single-ball play with COFFIN combos and the drop-target modes.",
      phases: [
        { num: "Phase 1", title: "First multiball", body: "The lock is lit at game start: right ramp, then loop the left ramp." },
        { num: "Phase 2", title: "Relight", body: "Left drops to relight the lock; ramp combos for COFFIN while you're at it." },
        { num: "Phase 3", title: "Modes", body: "Grover's Millions and Zom-B's Bonus when the lock is already used or unreachable." },
      ],
      safeShots: [
        { name: "Left ramp", desc: "Returns to the flippers; 1M in multiball." },
        { name: "Right ramp", desc: "Lock, COFFIN letter, relights the Crypt." },
      ],
      avoidShots: [
        { name: "Pop bumpers after multiball", desc: "Any non-ramp switch turns off the left ramp million." },
      ],
      tips: [
        { head: "Backhand", body: "On most machines the left ramp can be made on the fly from the left flipper — the key multiball skill." },
        { head: "Left ramp million", body: "After multiball, keep shooting only ramps and inlanes to keep the 1M lit." },
        { head: "Bonus X carries over", body: "Top lanes are worth more early: the multiplier stays all game." },
      ],
      mistakes: [
        "Letting a drop-target mode block the multiball start.",
        "Ignoring the blue light: the lock is shown above the right ramp, not on a playfield insert.",
      ],
    },

    hotspots: [
      { x: 81,   y: 32,   type: "key",   label: "RR", name: "Right Ramp (Lock)", body: "Lock for multiball; COFFIN letter." },
      { x: 16,   y: 37,   type: "key",   label: "LR", name: "Left Ramp", body: "1M in multiball; COFFIN letter." },
      { x: 11,   y: 54,   type: "key",   label: "Z",  name: "Left Drop Targets", body: "Relight the lock; Zom-B's Bonus." },
      { x: 82,   y: 54,   type: "key",   label: "G",  name: "Right Drop Targets", body: "Grover's Millions; Door Prize relight." },
      { x: 57,   y: 45,   type: "info",  label: "DP", name: "Door Prize Saucer", body: "Mystery award." },
      { x: 41,   y: 9,    type: "info",  label: "CR", name: "Crypt (hidden lane)", body: "Skill shot 1M." },
      { x: 54,   y: 16,   type: "info",  label: "TL", name: "Top Lanes", body: "Bonus X (max 7×)." },
      { x: 14,   y: 41,   type: "info",  label: "S",  name: "Bat-o-Meter Spinner", body: "5K → 20K a spin." },
      { x: 56,   y: 25,   type: "info",  label: "P",  name: "Pop Bumpers", body: "3K each." },
      { x: 6,    y: 77,   type: "avoid", label: "!",  name: "Left Outlane", body: "Extra ball when lit (1M in comp)." },
      { x: 86.5, y: 77,   type: "avoid", label: "!",  name: "Right Outlane", body: "Extra ball when lit (1M in comp)." },
    ],
  };
