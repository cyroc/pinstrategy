  /* ─── JOHN WICK (STERN 2024) ─────────────────────────────── */
MACHINES['johnwick'] = {
    name: "John Wick",  sub: "2024 · Stern · SPIKE 2 · Pro rules (Premium/LE shown)",
    tagline: "Jobs at the weapons crate, multiplied by enemies · defeat 10 enemies for adversary battles · car, Excommunicado and Deconsecrated multiballs · Red Circle Reckoning",
    image: "images/john-wick.webp",
    difficulty: "Medium-Hard", diffClass: "diff-medium-hard", era: "Modern",

    /* ── QUICK GUIDE (30–90 s read) ───────────────────────────── */
    quick: {
      goal: "Play <strong>jobs</strong> (timed modes) and <strong>multiballs</strong> while <strong>enemies</strong> — blue circles in front of shots — multiply lit shots (up to 4×). Every 10 enemies defeated in single-ball play lights an <strong>adversary battle</strong> at the left eject. One job, one battle and all three multiball types light <strong>Red Circle Reckoning</strong>.",
      steps: [
        { title: "Jobs",
          body: "Shoot the <strong>weapons crate</strong> / right VUK until its three lights are solid, then the <strong>VUK</strong> starts a job (60 s, +3 s per shot). Pick the faction first by shooting its shot. Finish with the <strong>left eject</strong> cash-out for 20% of the job total plus a permanent perk (e.g. multiball extend, add-a-ball, bonus X starts at 2×)." },
        { title: "Enemies and battles",
          body: "Enemies spawn every 50 switch hits; orange targets and the <strong>Red Circle</strong> bumper speed it up. Shoot shots with enemies during modes for big multipliers. 10 defeated (single-ball) = battle at the <strong>left eject</strong>: long ball save; reach the escape jackpot or 'Be Seeing You' (25M, +10M bonus)." },
        { title: "Multiballs",
          body: "<strong>Car Chase</strong>: rip the spinner, bash the car, start at the left orbit (Bagarre a L'Étoile is the best of four). <strong>Deconsecrated</strong>: captive ball under the Continental spells WINSTON, lock 3 at the centre ramp. <strong>Excommunicado</strong>: Red Circle bumper and targets to max level, then the Red Circle." },
      ],
      shots: [
        { name: "Weapons crate / right VUK", why: "Lights and starts jobs." },
        { name: "Left eject", why: "Job cash-outs and battles." },
        { name: "Shots with enemies", why: "Up to 4× in modes." },
      ],
      avoid: [
        "Skipping job cash-outs: the perks (multiball extend, add-a-ball, 2× bonus) last the whole game.",
        "Risky shots without the marker ball save — light it first with 5 left-standup hits.",
      ],
      target: "Milestones: two jobs, a battle and one multiball = good game. Red Circle Reckoning = great.",
    },

    info: {
      stats: [
        { label: "Manufacturer", value: "Stern Pinball" },
        { label: "Year",         value: "2024 (May)" },
        { label: "Design",       value: "Elliot Eismin" },
        { label: "Code / rules", value: "Tim Sexton, Mike Vinikour, Joshua Henderson" },
        { label: "Art",          value: "Randy Martinez" },
        { label: "Code",         value: "1.02 (latest; rulesheet basis). 1.01.0 (May 2026) added Red Circle Reckoning, Duel Part II and Special Assignment" },
        { label: "Models",       value: "Pro, Premium, LE (Premium/LE: moving car, physical locks)" },
      ],
      theme: "The John Wick films: the Continental, the Red Circle club, the High Table, adversaries and car chases.",
      features: [
        { name: "Jobs (7)", desc: "One per faction: Night Watch, Assassination, Security Detail, VIP Award, Heist, Gather Intel, Task a Crew. Cash out at the left eject for a game-long perk. All seven light a wizard mode." },
        { name: "Enemies", desc: "Blue circles (max 3 per shot = 4×) multiply lit shots in jobs and multiballs. 10 defeated in single-ball play lights a battle; 10 also lights an extra ball." },
        { name: "Adversary battles (5)", desc: "Viggo, Kirill, Cassian, Ares, Zero: 200 s modes with a 40 s ball save. Escape jackpot ends the battle; continuing raises the battle multiplier to 4×. Be Seeing You = 25M + 10M bonus." },
        { name: "Car Chase Multiballs (4)", desc: "Pro: rip the spinner to light the car, bash it, start at the left orbit. Car hits before starting change which of the four is lit." },
        { name: "Deconsecrated Multiball", desc: "Captive ball spells WINSTON → 3 locks at the centre ramp (virtual on Pro). Green jackpots, then 15 s of captive-ball supers." },
        { name: "Excommunicado Multiball", desc: "Max the dance-floor level at the Red Circle bumper/targets; 15 s build phase, then 2-ball jackpots and a Red Circle super." },
        { name: "Allies", desc: "Gold coin targets light Akira (left ramp, moves enemies), Charon (centre ramp, enemies respawn), Katia (right ramp, moves enemies onto lit shots)." },
        { name: "Lights Out", desc: "Spell YAGA at the inlanes, then the action button: 2× scoring for 30 s." },
        { name: "Marker ball save", desc: "Left standups light an outlane save (both outlanes after the Assassination job)." },
      ],
      scoring: [
        { key: "Be Seeing You",     val: "25M + 10M bonus" },
        { key: "Job cash-out",      val: "20% of the job total + perk" },
        { key: "Red Circle Reckoning", val: "10M per shot, 30M finale" },
        { key: "Bonus X",           val: "BABA at the inlanes, max 5×" },
        { key: "Extra ball (disabled)", val: "10M" },
      ],
      rules: [
        "Wizard modes in order: Red Circle Reckoning, The Staircase, The Duel, Special Assignment (limited-flip finale).",
        "Pro: the car must be lit by spinner rips; Deconsecrated locks are virtual.",
        "Rules from the pinballrulesheets.com rulesheet (code 1.02).",
      ],
      benchmarks: [
        { score: "Red Circle Reckoning", label: "Great game" },
        { score: "2 jobs + battle + multiball", label: "Good game" },
        { score: "One job cashed out", label: "Baseline" },
      ],
      resources: [
        { name: "Rulesheet (pinballrulesheets.com)", url: "http://pinballrulesheets.com/stern/john-wick-rulesheet", icon: "📖" },
        { name: "Stern Game Code",                   url: "https://sternpinball.com/support/game-code/", icon: "💾" },
        { name: "Pinside",                           url: "https://pinside.com/pinball/machine/john-wick", icon: "🕹️" },
      ],
    },

    strategy: {
      skillShot: "Plunge into the right VUK: with no switch hits = Baba Yaga (1.5M and starts the lit job); one switch = super crate skill shot. VIP lane into the Red Circle = VIP skill shot (starts Excommunicado if lit). MXV: full plunge, then right orbit → right ramp → left eject = 10M + 10 enemies.",
      actionButton: { name: "Lights Out / add-a-ball", when: "After YAGA / with the Task a Crew perk", desc: "Starts 2× Lights Out; adds a ball in multiball once per ball." },
      multiball: [
        { name: "Car Chase Multiball", balls: "2+", locks: "Spinner rips, then car hits.", start: "Left orbit.", jackpots: "Award shots build the car jackpot; supers at the car / left orbit.", tip: "Car hits before starting change the lit multiball — Bagarre a L'Étoile scores most." },
        { name: "Deconsecrated Multiball", balls: 3, locks: "WINSTON at the captive ball; lock at the centre ramp.", start: "Third lock.", jackpots: "Green jackpots at unique shots; 7 → 15 s of captive-ball supers (2.5M+).", tip: "Enemies raise jackpot values — spawn them first." },
        { name: "Excommunicado Multiball", balls: 2, locks: "Red Circle bumper / targets to max level.", start: "Red Circle shot.", jackpots: "Six panning jackpots, then the Red Circle super (5M+).", tip: "Build the jackpot in the 15 s single-ball phase." },
      ],
      goal: "<strong>Jobs with cash-outs for perks, enemies for multipliers, battles every 10 enemies, and each multiball type once for Red Circle Reckoning.</strong>",
      phases: [
        { num: "Phase 1", title: "Jobs", body: "Crate → VUK; cash out at the left eject." },
        { num: "Phase 2", title: "Battles", body: "10 enemies → left eject; aim for Be Seeing You." },
        { num: "Phase 3", title: "Multiballs", body: "Car, Deconsecrated, Excommunicado → Red Circle Reckoning." },
      ],
      safeShots: [
        { name: "Weapons crate", desc: "Job progress and timer boost." },
      ],
      avoidShots: [
        { name: "Shots without enemies in modes", desc: "Shoot multiplied shots first." },
      ],
      tips: [
        { head: "Perk order", body: "Security Detail (multiball extend) and Task a Crew (add-a-ball) make later multiballs safer (one extend perk per multiball)." },
        { head: "Lights Out", body: "Save it for a battle's Be Seeing You or Red Circle Reckoning (the only wizard mode it works in)." },
      ],
      mistakes: [
        "Starting jobs without choosing a faction first.",
        "Ignoring enemies — they're the game's main multiplier.",
      ],
    },

    hotspots: [
      { x: 75,   y: 58,   type: "key",   label: "W",  name: "Weapons Crate / Right VUK", body: "Light and start jobs." },
      { x: 9,    y: 44,   type: "key",   label: "LE", name: "Left Eject", body: "Job cash-out, battles, extra ball." },
      { x: 36,   y: 16,   type: "key",   label: "RC", name: "Red Circle", body: "Excommunicado; enemy spawns." },
      { x: 55,   y: 22,   type: "key",   label: "C",  name: "Car", body: "Car Chase Multiball." },
      { x: 63,   y: 25,   type: "key",   label: "CB", name: "Captive Ball / WINSTON", body: "Deconsecrated locks." },
      { x: 46,   y: 33,   type: "info",  label: "CR", name: "Centre Ramp", body: "Deconsecrated lock; Charon." },
      { x: 27,   y: 41,   type: "info",  label: "LR", name: "Left Ramp", body: "Akira; Security Detail start." },
      { x: 75,   y: 40,   type: "info",  label: "RR", name: "Right Ramp", body: "Katia; Task a Crew." },
      { x: 19,   y: 45,   type: "info",  label: "LO", name: "Left Orbit", body: "Car Chase start." },
      { x: 41,   y: 44,   type: "info",  label: "E",  name: "Enemy Circles", body: "Blue circles in front of each shot." },
      { x: 7,    y: 82,   type: "avoid", label: "!",  name: "Left Outlane", body: "Marker ball save when lit." },
      { x: 85,   y: 81,   type: "avoid", label: "!",  name: "Right Outlane", body: "Marker ball save when lit." },
    ],
  };
