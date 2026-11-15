  /* ─── FALLOUT (STERN 2026) ───────────────────────────────── */
MACHINES['fallout'] = {
    name: "Fallout",  sub: "2026 · Stern · Pro · early code",
    tagline: "HP-timed quests at the scoop · Power Armor 2× and weapon upgrades · Deathclaw, Wasteland and Vault multiballs · radaway jackpots at the upper loop",
    image: "images/fallout.webp",
    difficulty: "Hard", diffClass: "diff-hard", era: "Modern",

    /* ── QUICK GUIDE (30–90 s read) ───────────────────────────── */
    quick: {
      goal: "Start <strong>quests</strong> (main modes) at the <strong>scoop</strong> — their timer is your HP — and stack the multipliers: <strong>Power Armor</strong> (2× playfield from the fusion-core bumper) and <strong>weapon upgrades</strong> (+0.2× playfield and +1× bonus each). Multiballs come from the <strong>Deathclaw</strong>, the <strong>right nuke targets</strong> and the <strong>VAULT</strong> letters.",
      steps: [
        { title: "Quests",
          body: "Shoot the <strong>left orbit</strong> (and right ramp early on) for food = HP; with 50+ HP the <strong>scoop</strong> starts the lit quest (1 HP = 1 s). The junk target changes the quest. Re-hitting a killed (solid) radroach gives RAD and lowers max HP — collect the green radaway shots. Each finished quest gives a legendary weapon perk; 3 quests light an extra ball." },
        { title: "Multiballs",
          body: "<strong>Deathclaw</strong>: hit the bash toy each time FIRE is lit; multiball 2 and 3 need a weapon upgrade first. <strong>Wasteland</strong>: right nuke targets light the pipboy ramps, then (Pro) the lit right standups. <strong>VAULT</strong> letters → centre ramp → Find the Lunchbox! (odd lunchboxes = Vault Multiball)." },
        { title: "Multipliers",
          body: "Hit the <strong>fusion-core pop bumper</strong>; at 50%+ hold the action button for 2× Power Armor (toggle it to save time for big shots). Slings and bumpers light the junk target; junk upgrades the weapon at the scoop. Once lit, the <strong>radaway jackpot</strong> pays on every upper-loop shot for 10 s." },
      ],
      shots: [
        { name: "Left orbit + scoop", why: "HP and quest starts." },
        { name: "Deathclaw bash toy", why: "Deathclaw Multiballs." },
        { name: "Pipboy ramps", why: "Level-ups, Fat Man, radaway hurry-up, hacking." },
      ],
      avoid: [
        "Re-hitting a radroach target you already killed: it gives RAD and cuts your max HP (shorter quests).",
        "Wasting Power Armor on single-ball shots — switch it on for jackpots and hurry-ups.",
      ],
      target: "Milestones: two quests and a Deathclaw Multiball = good game. Weapon level 3+ with Wasteland or Vault Multiball = great.",
    },

    info: {
      stats: [
        { label: "Manufacturer", value: "Stern Pinball" },
        { label: "Year",         value: "2026 (September)" },
        { label: "Design",       value: "Keith Elwin" },
        { label: "Code",         value: "Andrew Wilkening, Brett Z Rubin, Raymond Davidson, Rick Naegele" },
        { label: "Art",          value: "Sam Gilbey, Jeremy Parker (Zombie Yeti)" },
        { label: "Code version", value: "0.82 (rulesheet basis; early code, rules may change)" },
        { label: "Models",       value: "Pro (shown), Premium, LE of 770 (Premium/LE: Fat Man launcher, lower-playfield vault, Deathclaw fire-back)" },
      ],
      theme: "The Fallout TV series and games: Vault-Tec, Lucy, Maximus and The Ghoul, the Pip-Boy, power armour, Deathclaws and the Nuka-Cola wasteland.",
      features: [
        { name: "Character select", desc: "Lucy (easier vaults, longer vault timers), Maximus (+2 s power armour per core level), The Ghoul (radroaches build HP)." },
        { name: "Quests (6)", desc: "Wedding Day and The Kings (2-ball), Radscorpion Attack, Mind Control, NOVAC, Find the Target. HP-timed; completion = legendary weapon." },
        { name: "Deathclaw Multiballs (3)", desc: "Bash toy hits when FIRE flashes. Jackpots at the Deathclaw; radroach targets add a ball. Each later level needs a weapon upgrade." },
        { name: "Wasteland Multiball", desc: "Right 3-bank nuke targets → pipboy ramp → (Pro) shoot the lit right standups. Jackpots 3M+, supers 15M+ at the upper pipboy ramp then the centre-right standup (Pro)." },
        { name: "VAULT / Find the Lunchbox!", desc: "Pro: VAULT letters light the centre ramp; then any blue shot and the scoop opens a lunchbox. Odd = Vault Multiball (3-ball), even = legendary weapon." },
        { name: "Power Armor", desc: "Fusion-core pop bumper charges it; hold the action button at 50%+ for 2× scoring (can toggle)." },
        { name: "Weapons", desc: "Junk upgrades: +0.2× playfield and +1× bonus per level, and unlock the next Deathclaw Multiball." },
        { name: "Radaway", desc: "Three radaway shots → upper pipboy hurry-up; all three ramps light the radaway jackpot at the upper loop (repeat it for 10 s)." },
        { name: "Wasteland loops", desc: "Upper loop from the mutant flipper: locations, loot and Nuka Quantum; 35 loops light Vault 4 Multiball." },
        { name: "Caps & Sundries", desc: "Nuka-Cola spinner rips earn caps; spend them at the scoop for fusion cores, stimpaks, junk, Nuka Quantum etc." },
        { name: "Stimpak", desc: "Outlane ball save from the white wasteland-item inserts or Sundries." },
      ],
      scoring: [
        { key: "Power Armor",        val: "2× playfield (timed)" },
        { key: "Weapon upgrade",     val: "+0.2× playfield, +1× bonus" },
        { key: "Glowing radroach",   val: "20M + 10M each (half from the flippers)" },
        { key: "Wasteland super",    val: "15M + 2.5M × jackpots × wave" },
        { key: "Extra ball (competition)", val: "15M, multiplied" },
      ],
      rules: [
        "Pro differences: no Fat Man launcher (shoot the right standups from the flippers) and no lower-playfield vault (Find the Lunchbox! instead).",
        "Bonus: character level, caps and junk × weapon level (max 6×) + remaining tilt warnings.",
        "Early code (0.82): several wizard modes are still undocumented.",
        "Rules from the pinballrulesheets.com rulesheet.",
      ],
      benchmarks: [
        { score: "Weapon 3+ and Wasteland/Vault MB", label: "Great game" },
        { score: "2 quests + Deathclaw MB", label: "Good game" },
        { score: "1 quest + Power Armor used", label: "Baseline" },
      ],
      resources: [
        { name: "Rulesheet (pinballrulesheets.com)", url: "http://pinballrulesheets.com/stern/fallout-rulesheet", icon: "📖" },
        { name: "Stern Game Code",                   url: "https://sternpinball.com/support/game-code/", icon: "💾" },
      ],
    },

    strategy: {
      skillShot: "Time the full plunge so the ball rolls over the flashing Nuka-Cola insert on the right inlane; the Nuka-Cola spinner drops — rip it from the right flipper (3M + 75K per spin, caps, 3 s ball save).",
      actionButton: { name: "Power Armor / companion", when: "Fusion core 50%+ / companion lit", desc: "Hold for 2× playfield; also fires your companion's ability or VATS." },
      multiball: [
        { name: "Deathclaw Multiball (1–3)", balls: 2, locks: "Bash toy hits when FIRE is lit.", start: "Final bash-toy hit.", jackpots: "MB1: build with red shots, then 12 s of Deathclaw jackpots; MB2: charge the weapon; MB3: clear shots, then the super.", tip: "Radroach targets add a ball; upgrade the weapon to unlock the next one." },
        { name: "Wasteland Multiball", balls: "2+", locks: "Nuke targets + pipboy ramps.", start: "Clear the shooting-gallery targets.", jackpots: "Left orbit, U-turn, right ramp; super at the upper pipboy ramp then the right standup.", tip: "The first super gives a legendary weapon and adds a ball." },
        { name: "Vault Multiball", balls: 3, locks: "VAULT letters → lunchbox.", start: "Odd-numbered lunchboxes.", jackpots: "Moving jackpot left to right; double at the upper loop (Pro); super at the centre ramp.", tip: "Super-jackpot progress carries between Vault Multiballs." },
      ],
      goal: "<strong>Quests for legendary weapons, Power Armor and weapon upgrades for multipliers, and the three multiballs.</strong> Use the 2× on jackpots.",
      phases: [
        { num: "Phase 1", title: "Build", body: "HP at the left orbit, first quest, fusion core charge." },
        { num: "Phase 2", title: "Multiballs", body: "Deathclaw MB 1; nuke targets for Wasteland; VAULT letters." },
        { num: "Phase 3", title: "Multiply", body: "Upgrade weapons, Power Armor on jackpots, radaway jackpots." },
      ],
      safeShots: [
        { name: "Left orbit", desc: "HP and food; repeat shots add more." },
      ],
      avoidShots: [
        { name: "Already-killed radroaches", desc: "RAD lowers your max HP." },
      ],
      tips: [
        { head: "Pick a character", body: "The Ghoul turns radroach hits into HP — forgiving for quests." },
        { head: "Radaway jackpot", body: "Once lit, repeat the upper loop from the mutant flipper for 10 s." },
        { head: "Caps", body: "Rip the Nuka-Cola spinner when the cap stash is lit and buy fusion cores or stimpaks." },
      ],
      mistakes: [
        "Starting quests with low HP (short timers).",
        "Ignoring junk and weapon upgrades — they're permanent multipliers.",
      ],
    },

    hotspots: [
      { x: 75,   y: 37,   type: "key",   label: "D",  name: "Deathclaw Bash Toy", body: "Deathclaw Multiballs." },
      { x: 5,    y: 42,   type: "key",   label: "LO", name: "Left Orbit", body: "HP / food." },
      { x: 77,   y: 21,   type: "key",   label: "S",  name: "Scoop (approx.)", body: "Quests, Sundries, weapon upgrades, loot." },
      { x: 80,   y: 51.5, type: "key",   label: "N",  name: "Right Nuke Targets", body: "Fat Man / Wasteland Multiball." },
      { x: 33,   y: 26,   type: "key",   label: "P",  name: "Pipboy Ramps (other at 24,26)", body: "Level-ups, radaway hurry-up, hacking." },
      { x: 51,   y: 33,   type: "info",  label: "CR", name: "Centre Jump Ramp", body: "VAULT / lunchbox; radaway ramp." },
      { x: 64,   y: 23,   type: "info",  label: "RR", name: "Right Ramp", body: "Food (first quests); wasteland items." },
      { x: 20,   y: 70,   type: "info",  label: "F",  name: "Fusion-Core Pop Bumper", body: "Charges Power Armor." },
      { x: 19,   y: 37,   type: "info",  label: "MF", name: "Mutant (Upper) Flipper", body: "Shoots the upper loop: radaway jackpot, wasteland loops." },
      { x: 61,   y: 25.5, type: "info",  label: "NC", name: "Nuka-Cola Spinner (approx.)", body: "Cap stash rips; skill shot." },
      { x: 23,   y: 21,   type: "info",  label: "PB", name: "Pip-Boy Display", body: "Perks and timers." },
      { x: 8,    y: 82,   type: "avoid", label: "!",  name: "Left Outlane", body: "Stimpak when lit." },
      { x: 86.5, y: 79,   type: "avoid", label: "!",  name: "Right Outlane", body: "Stimpak when lit." },
    ],
  };
