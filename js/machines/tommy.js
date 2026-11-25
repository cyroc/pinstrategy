  /* ─── THE WHO'S TOMMY PINBALL WIZARD (DATA EAST 1994) ───── */
MACHINES['tommy'] = {
    name: "The Who's Tommy Pinball Wizard",  sub: "1994 · Data East · Version 3 (DMD)",
    tagline: "13 Union Jack modes · Tommy Multiball with 250M–500M super jackpots · the blinder · Pinball Wizard 6-ball wizard mode",
    image: "images/tommy.webp",
    difficulty: "Medium-Hard", diffClass: "diff-medium-hard", era: "DMD",

    /* ── QUICK GUIDE (30–90 s read) ───────────────────────────── */
    quick: {
      goal: "Spell <strong>T-O-M-M-Y</strong> at the <strong>mirror</strong> (upper flipper) for <strong>Tommy Multiball</strong> and work through to the <strong>super jackpot</strong> (250M on the left ramp, 500M on the side ramp). Between multiballs, light <strong>Union Jack</strong> modes with the orbits and start them at the scoops.",
      steps: [
        { title: "Skill shot and orbits",
          body: "Plunge into the <strong>Skill Shot hole</strong> (10M, +5M each time you make it, max 50M). Either <strong>orbit</strong> lights a Union Jack mode at the left or right scoop; repeated orbits score 1M–4M, then Super Loops: 5M per orbit for the rest of the game." },
        { title: "Tommy Multiball",
          body: "Mirror hits spell TOMMY. Start behind the lowered <strong>mirror</strong> (4 balls, 20M jackpots) rather than the left scoop (3 balls, 15M; first multiball only). Shoot both ramps (side ramp = double jackpot), then a third ramp; respell TOMMY behind the mirror (20M each); then <strong>one</strong> super jackpot: take the <strong>side ramp</strong> for 2× (500M+)." },
        { title: "Best modes",
          body: "Silver Ball (white targets 5M, Silver Ball target 10M and rising), Cousin Kevin (white targets 5M and add-a-ball), Smash the Mirror (mirror 5M–25M, then 50M behind it), Christmas (switch frenzy), Acid Queen (three holes hurry-up). The <strong>More Time</strong> target resets a mode timer once. All 12 → <strong>Pinball Wizard</strong> (6 balls)." },
      ],
      shots: [
        { name: "Mirror (upper flipper)", why: "TOMMY letters; multiball; Smash the Mirror." },
        { name: "Side ramp", why: "Double jackpot and double super jackpot." },
        { name: "Orbits", why: "Light Union Jack modes; Super Loops." },
      ],
      avoid: [
        "Collecting the 250M left-ramp super when the side ramp is makeable: only one super per cycle.",
        "Starting multiball at the left scoop when you can make the mirror: 3 balls and lower jackpots.",
      ],
      target: "Milestones (estimates): one Tommy Multiball with jackpots = baseline. A super jackpot = good. A side-ramp super or Pinball Wizard = great.",
    },

    info: {
      stats: [
        { label: "Manufacturer", value: "Data East" },
        { label: "Year",         value: "1994 (January)" },
        { label: "Design",       value: "Joe Kaminkow, Ed Cebula" },
        { label: "Software",     value: "Lonnie D. Ropp, Lyman F. Sheats Jr." },
        { label: "Platform",     value: "Data East Version 3 (DMD)" },
        { label: "Production",   value: "4,700 (Wikipedia)" },
      ],
      theme: "The Who's rock opera Tommy: the deaf, dumb and blind kid, the mirror, the Acid Queen and a WWII bomber over the playfield. A blinder can rise from the apron to hide the flippers.",
      features: [
        { name: "Union Jack modes", desc: "Orbit lights a mode; start it at either scoop (they can stack unless a multiball mode runs). Pops and the Silver Ball target rotate the flashing one. Christmas, Cousin Kevin (multiball), Holiday Camp, Light Extra Ball, Silver Ball, Captain Walker (video), Smash the Mirror (multiball), Fiddle About, Acid Queen, There's a Doctor, Tommy Scoring (3-ball frenzy, blinder up), Sally Simpson. All 12 → Pinball Wizard." },
        { name: "Tommy Multiball", desc: "Mirror letters (factory settings spot 2 a ball before the first multiball; reportedly not in the competition ROM). Mirror hole: 4 balls, jackpot from 20M; left scoop: 3 balls, from 15M (first multiball only). Switches +200K. Three jackpots (each adds a ball) → respell TOMMY behind the mirror (20M each) → super jackpot 250M+ left ramp or 500M+ side ramp → restart with the blinder up. 2-ball restart within 15 s if no jackpot was scored." },
        { name: "Pinball Wizard", desc: "6-ball multiball, blinder up, every switch 1M; 25 switches = W (20M), then +25 switches and +10M per letter of WIZARD, each adding a ball back." },
        { name: "Genius lane", desc: "Letters spell OK (5M), WOW (10M), GOOD (15M, extra ball), SUPER (20M), GENIUS (25M, lights outlane specials); letters only when no mode or multiball runs. Also collects Mystery (lit by right ramps)." },
        { name: "White targets and captive ball", desc: "Hit each white target twice (flashing, then solid) to light the Silver Ball target for 20M. The right captive ball advances bonus X (max 7×)." },
        { name: "Spinners and lower targets", desc: "Spinners start at 25K a spin; each lower standup bank completion +25K (max 1M) and 5M→20M. Inlane → opposite spinner doubles it." },
      ],
      scoring: [
        { key: "Super jackpot",       val: "250M+ (side ramp 2×)" },
        { key: "Tommy jackpot",       val: "15M/20M + 200K a switch" },
        { key: "Skill shot",          val: "10M → 50M" },
        { key: "Smash the Mirror",    val: "5M–25M, then 50M" },
        { key: "Silver Ball target",  val: "20M" },
        { key: "Super Loops",         val: "5M per orbit" },
      ],
      rules: [
        "After the first Tommy Multiball, plunges no longer spot letters and multiball can only start behind the mirror.",
        "Captain Walker's mode (5 left ramps the first time per one source, 2 per another; +1 each time after): left ramp 5M, side ramp 10M, spinner up to 1M a spin.",
        "Bonus: 100K per left ramp + 200K per right ramp (game totals) + 600K per mode started, × bonus X (max 7×).",
        "A 1994 rulesheet says a lit extra ball scores 25M when extra balls are off; this is unconfirmed.",
        "The blinder rises during Tommy Scoring, Pinball Wizard and Tommy Multiball after a super jackpot.",
      ],
      benchmarks: [
        { score: "Side-ramp super or Pinball Wizard (estimate)", label: "Great game" },
        { score: "A super jackpot",                             label: "Good game" },
        { score: "Tommy Multiball with jackpots",               label: "Baseline" },
      ],
      resources: [
        { name: "Strategy Guide (Pinball Primer)", url: "https://pinballprimer.github.io/tommy_GR6do.html", icon: "📖" },
        { name: "Rulesheet (Pinball Archive)",     url: "https://pinball.org/rules/tommy.html", icon: "📄" },
        { name: "SDPC Cheatsheet",                 url: "https://pinball.miraheze.org/wiki/Tommy", icon: "📄" },
        { name: "Pinside Game Page",               url: "https://pinside.com/pinball/machine/tommy-pinball-wizard", icon: "🕹️" },
      ],
    },

    strategy: {
      skillShot: "Soft plunge into the Skill Shot hole in the back right: 10M, +5M each ball you make it (max 50M). Overshoot: the side ramp (the right ramp, shot from the upper flipper) right off the plunge scores 10M. With multiball lit, the Tommy hole off the plunge adds a 5M combo (wait for the mirror to lower).",
      multiball: [
        { name: "Tommy Multiball", balls: "3–4", locks: "Spell TOMMY at the mirror (upper flipper).", start: "Hole behind the mirror (4 balls) or left scoop (3, first time only).", jackpots: "Ramps (side = double), respell TOMMY (20M each), one super jackpot (250M+ / side ramp 500M+).", tip: "Every switch before the super adds 1M to it; go for the side ramp." },
        { name: "Cousin Kevin", balls: "Up to 4", locks: "Union Jack mode.", start: "Scoop.", jackpots: "White targets 5M; first hit on each adds a ball.", tip: "Start it last: once it runs no other mode can start, so get the timed modes going first." },
        { name: "Smash the Mirror", balls: 2, locks: "Union Jack mode.", start: "Scoop.", jackpots: "Mirror 5M → 25M, then 50M behind it.", tip: "Mirror hits still count TOMMY letters for later." },
        { name: "Pinball Wizard", balls: 6, locks: "All 12 Union Jack modes.", start: "Scoop.", jackpots: "1M a switch; WIZARD letters 20M → 70M.", tip: "Blinder is up: watch the ball, not the flippers." },
      ],
      goal: "<strong>Skill shot → orbits + scoops for modes → TOMMY at the mirror → multiball → side-ramp super jackpot.</strong>",
      phases: [
        { num: "Phase 1", title: "Modes", body: "Orbit, scoop; favour Silver Ball, Cousin Kevin, Christmas." },
        { num: "Phase 2", title: "Multiball", body: "TOMMY, start behind the mirror, ramps, respell, super." },
        { num: "Phase 3", title: "Wizard", body: "Finish the Union Jack for Pinball Wizard." },
      ],
      safeShots: [
        { name: "Orbits", desc: "Light modes and come back round." },
        ],
      avoidShots: [
        { name: "Left ramp super", desc: "Only when the side ramp isn't realistic." },
      { name: "Right captive ball", desc: "Rebounds toward the right outlane or down the middle; only for Holiday Camp or bonus X." },
      ],
      tips: [
        { head: "More Time target", body: "Center target facing left: resets a 20-second mode timer once." },
        { head: "Captain Walker video mode", body: "Leaving the plane at the bottom scores about 13M." },
        { head: "Silver Ball", body: "Best non-multiball mode: pound the Silver Ball target (each hit adds 5M to everything) and the white targets; save More Time for the last seconds." },
      ],
      mistakes: [
        "Taking the left-ramp super out of habit.",
        "Collecting Mystery with no mode running: if it gives Double Scoring, you can't start modes or multiball for 20 s.",
      ],
    },

    hotspots: [
      { x: 70, y: 17, type: "key",   label: "SK", name: "Skill Shot Hole", body: "10M → 50M off the plunge." },
      { x: 69, y: 30, type: "key",   label: "MI", name: "Mirror / Tommy Hole", body: "TOMMY letters; multiball start; Smash the Mirror." },
      { x: 27, y: 38, type: "key",   label: "LR", name: "Left Ramp", body: "Jackpot; 250M super; Captain Walker." },
      { x: 59, y: 42, type: "key",   label: "SR", name: "Side Ramp", body: "Double jackpot; 500M super." },
      { x: 15, y: 39, type: "key",   label: "LO", name: "Left Orbit", body: "Light Union Jack; Super Loops." },
      { x: 76, y: 46, type: "key",   label: "RO", name: "Right Orbit", body: "Light Union Jack; Super Loops." },
      { x: 37, y: 34, type: "info",  label: "G",  name: "Genius Lane", body: "OK-WOW-GOOD-SUPER-GENIUS; Mystery." },
      { x: 48, y: 22, type: "info",  label: "P",  name: "Pop Bumpers", body: "Rotate the Union Jack mode." },
      { x: 15, y: 51, type: "info",  label: "UF", name: "Upper Flipper", body: "Mirror and side ramp." },
      { x: 44, y: 34, type: "info",  label: "SB", name: "Silver Ball Target", body: "20M when lit; rotates the mode." },
      { x: 60, y: 53, type: "key",   label: "RS", name: "Right Scoop", body: "Starts Union Jack modes." },
      { x: 17, y: 57, type: "key",   label: "LS", name: "Left Scoop", body: "Union Jack modes; first multiball." },
      { x: 54, y: 54, type: "info",  label: "MT", name: "More Time Target", body: "Resets a mode timer once." },
      { x: 37, y: 66, type: "info",  label: "UJ", name: "Union Jack", body: "12 modes; all 12 → Pinball Wizard (the 13th)." },
      { x: 80, y: 50, type: "info",  label: "CB", name: "Captive Ball", body: "Bonus X (max 7×); Holiday Camp; spots right targets." },
      { x: 8,  y: 78, type: "avoid", label: "!",  name: "Left Outlane", body: "Special after GENIUS." },
      { x: 80, y: 78, type: "avoid", label: "!",  name: "Right Outlane", body: "Special after GENIUS." },
    ],
  };
