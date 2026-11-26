  /* ─── BLACK KNIGHT (WILLIAMS 1980) ───────────────────────── */
MACHINES['blackknight'] = {
    name: "Black Knight",  sub: "1980 · Williams · System 7 (solid state)",
    tagline: "Two-level playfield · 3-ball multiball at 3× playfield · four drop banks for Magna-Saves and 10,000 each · lit spinner 2,500 a spin · Mystery 20,000–99,000",
    image: "images/black-knight.webp",
    difficulty: "Hard", diffClass: "diff-hard", era: "SS",

    /* ── QUICK GUIDE (30–90 s read) ───────────────────────────── */
    quick: {
      goal: "<strong>Stay upstairs and lock three balls.</strong> Lock at the top-left structure of the <strong>upper playfield</strong>; the third lock starts <strong>3-ball multiball</strong>, where every score is multiplied by the number of balls in play (<strong>3×</strong>). Drop target banks between multiballs light <strong>Magna-Saves</strong> and points.",
      steps: [
        { title: "Get to the upper playfield",
          body: "Hold up the <strong>upper right flipper</strong> as you plunge to catch the ball upstairs. Lock by looping the ball around the arrows from the <strong>upper left flipper</strong>, or thread it between the bumper and the top-left drops from the upper right flipper. Each lock scores 5,000. If the green lock arrows aren't lit (harder settings), shoot the <strong>Turnaround</strong> on the lower playfield once." },
        { title: "Multiball",
          body: "Start it with the <strong>third lock upstairs</strong>: all three balls come to the upper flippers at a controlled speed. 2 balls = 2×, 3 balls = 3×. Locks reset every ball. Big multiplied points: <strong>right inlane → left ramp</strong> (spinner 2,500 a spin) and <strong>left inlane → near right ramp</strong> (Mystery 20,000–99,000)." },
        { title: "Drop banks and Magna-Save",
          body: "Four 3-target banks (two up, two down): finish a bank within 9 s of the first hit for 10,000, 3 bonus advances and a lit <strong>Magna-Save</strong>. Press the second button to hold the ball over that inlane; making the inlane after it is 10,000 and 5 advances." },
      ],
      shots: [
        { name: "Upper loop / lock", why: "Locks and multiball." },
        { name: "Upper drop banks", why: "10,000 and a Magna-Save." },
        { name: "Left ramp (after the right inlane)", why: "Lit spinner, multiplied in multiball." },
      ],
      avoid: [
        "The lower center multiball lane: a dangerous shot; start multiball with the third lock upstairs instead.",
        "Partial drop banks: if you don't finish the bank within 9 s it resets.",
      ],
      target: "Milestones (estimates): one multiball = baseline. Two multiballs with lit-spinner or Mystery hits = good. Three multiballs and a big bonus = great.",
    },

    info: {
      stats: [
        { label: "Manufacturer", value: "Williams" },
        { label: "Year",         value: "1980 (November)" },
        { label: "Design",       value: "Steve Ritchie (also the Knight's voice)" },
        { label: "Software",     value: "Larry DeMar" },
        { label: "Art",          value: "Tony Ramunni" },
        { label: "Platform",     value: "Williams System 7 (solid state)" },
        { label: "Production",   value: "About 13,000" },
      ],
      theme: "A medieval duel with the taunting Black Knight. The first solid-state machine with a two-level playfield, and the first with Magna-Save.",
      features: [
        { name: "Locks and multiball", desc: "Lock at the top-left structure (loop from the upper left flipper, or between the bumper and the top-left drops from the upper right flipper). The third lock starts 3-ball multiball; with 1–2 locked, the lower center lane starts a 2- or 3-ball multiball. Playfield × balls in play; every kickout scores 5,000 × that. Locks don't carry over between balls (default)." },
        { name: "Drop target banks", desc: "Four banks of 3 (two upper, two lower): 1,000 a target; the bank must be finished within 9 s of the first hit or it resets. A completed bank: 10,000, 3 bonus advances, lights a Magna-Save if one is unlit (right first) and an arrow toward extra balls (off in competition)." },
        { name: "Magna-Save", desc: "One for each inlane, lit by drop banks. The second button gives about 5 s of magnet to stop the ball and drop it into the inlane: 10,000 and 5 advances." },
        { name: "Ramps", desc: "Left ramp (longest, hardest): spinner 100 a spin, or 2,500 a spin for a few seconds after the right inlane; top rollover is a bonus advance or extra ball. Near right ramp: Mystery (random 20,000–99,000) for a few seconds after the left inlane. Right ramp: a transit between the playfields." },
        { name: "Turnaround", desc: "The hook lane between the left ramp and the lower center drops: raises bonus X (max 5×, then 5,000); lights locks on harder settings; extra ball when lit (off in competition)." },
        { name: "Bonus ball", desc: "In multiplayer games only, the top score gets a 30 s bonus ball with unlimited ball save (no multiball, no extra balls): complete as many drop banks as you can." },
      ],
      scoring: [
        { key: "Mystery (near right ramp)", val: "20,000–99,000 (× balls in play)" },
        { key: "Lit spinner",             val: "2,500 a spin (× balls in play)" },
        { key: "Drop bank",               val: "10,000 + 3 advances" },
        { key: "Max bonus",               val: "49,000 × 5 = 245,000" },
        { key: "Lock / kickout",          val: "5,000" },
      ],
      rules: [
        "Bonus: left ramp rollover 1 advance, inlanes and outlanes 2, drop bank 3, inlane after a Magna-Save 5. Bonus and multiplier reset every ball.",
        "On the last ball, with balls locked, the outlanes are lit for Last Chance: a drain there kicks out the locked balls.",
        "Extra balls (from drop bank arrows) can't be set to a point value, so they are simply off in competition.",
      ],
      benchmarks: [
        { score: "Three multiballs + big bonus (estimate)",      label: "Great game" },
        { score: "Two multiballs with spinner/Mystery hits",     label: "Good game" },
        { score: "One multiball",                                label: "Baseline" },
      ],
      resources: [
        { name: "Strategy Guide (Pinball Primer)", url: "https://pinballprimer.github.io/blackknight_GrO7w.html", icon: "📖" },
        { name: "SDPC Cheatsheet",                 url: "https://pinball.miraheze.org/wiki/Black_Knight", icon: "📄" },
        { name: "Wikipedia",                       url: "https://en.wikipedia.org/wiki/Black_Knight_(pinball)", icon: "📚" },
        { name: "Pinside Game Page",               url: "https://pinside.com/pinball/machine/black-knight", icon: "🕹️" },
      ],
    },

    strategy: {
      skillShot: "None. Plunge moderately and hold the upper right flipper up to catch the ball on the upper playfield.",
      multiball: [
        { name: "Multiball", balls: "2–3", locks: "Top-left lock structure on the upper playfield.", start: "Third lock, or the lower center lane with 1–2 locked.", jackpots: "No jackpot: all scoring × balls in play (2× or 3×).", tip: "Keep balls upstairs; go for right inlane → left ramp (spinner) or left inlane → near right ramp (Mystery) only when it's safe." },
      ],
      goal: "<strong>Upstairs → three locks → 3× multiball; drop banks and Magna-Saves in between.</strong>",
      phases: [
        { num: "Phase 1", title: "Upstairs", body: "Catch the plunge on the upper right flipper; locks from the upper flippers." },
        { num: "Phase 2", title: "Multiball", body: "Keep balls alive; drop banks and kickouts at 3×." },
        { num: "Phase 3", title: "Lower playfield", body: "Turnaround for bonus X, then back up a ramp." },
      ],
      safeShots: [
        { name: "Upper playfield drop banks", desc: "Controlled shots from the upper flippers." },
        { name: "Right ramp", desc: "A way back to the upper playfield (no score)." },
      ],
      avoidShots: [
        { name: "Lower center multiball lane", desc: "Dangerous; lock upstairs instead." },
      ],
      tips: [
        { head: "Magna-Save timing", body: "Press as the ball heads for the outlane; it holds about 5 s, then drops into the inlane." },
        { head: "Upper flipper drains", body: "A ball falling between the upper flippers returns to the lower playfield; it isn't a drain." },
      ],
      mistakes: [
        "Starting multiball with the lower lane at 1 lock (only 2 balls, 2×).",
        "Leaving drop banks half-finished.",
      ],
    },

    hotspots: [
      { x: 28,  y: 9,   type: "key",   label: "L",  name: "Lock Structure", body: "Locks; third lock starts multiball." },
      { x: 30,  y: 16,  type: "key",   label: "DT", name: "Upper Left Drop Targets", body: "10,000; lights a Magna-Save." },
      { x: 69,  y: 14,  type: "key",   label: "DT", name: "Upper Right Drop Targets", body: "10,000; lights a Magna-Save." },
      { x: 66,  y: 39,  type: "info",  label: "UF", name: "Upper Flippers", body: "Locks and upper drop banks." },
      { x: 18,  y: 43,  type: "key",   label: "LR", name: "Left Ramp / Spinner", body: "2,500 a spin after the right inlane." },
      { x: 65,  y: 58,  type: "info",  label: "NR", name: "Near Right Ramp", body: "Mystery after the left inlane." },
      { x: 79,  y: 58,  type: "info",  label: "RR", name: "Right Ramp", body: "Back to the upper playfield." },
      { x: 43,  y: 48,  type: "info",  label: "CD", name: "Lower Center Drop Targets", body: "10,000; Magna-Save." },
      { x: 16,  y: 56,  type: "info",  label: "LD", name: "Lower Left Drop Targets", body: "10,000; Magna-Save." },
      { x: 30,  y: 39,  type: "info",  label: "T",  name: "Turnaround", body: "Bonus X; lights locks on hard settings." },
      { x: 56,  y: 51,  type: "avoid", label: "MB", name: "Lower Multiball Lane", body: "Starts multiball with 1–2 locked; dangerous." },
      { x: 14,  y: 71,  type: "info",  label: "MS", name: "Left Magna-Save", body: "Second button." },
      { x: 74,  y: 71,  type: "info",  label: "MS", name: "Right Magna-Save", body: "Second button." },
      { x: 8,   y: 82,  type: "avoid", label: "!",  name: "Left Outlane", body: "Drain; Last Chance on the last ball." },
      { x: 82,  y: 82,  type: "avoid", label: "!",  name: "Right Outlane", body: "Drain; Last Chance on the last ball." },
    ],
  };
