  /* ─── FALLOUT (STERN 2026) ───────────────────────────────── */
MACHINES['fallout'] = {
    name: "Fallout",  sub: "2026 · Stern · Spike 3 · Pro · code 0.82",
    tagline: "HP-timed quests for legendary weapons · weapon upgrades and Power Armor multipliers · Deathclaw, Wasteland and Vault multiballs · Radaway Jackpots · side quests and radio modes",
    image: "images/fallout.webp",
    difficulty: "Hard", diffClass: "diff-hard", era: "Modern",

    /* ── QUICK GUIDE (30–90 s read) ───────────────────────────── */
    quick: {
      goal: "<strong>Weapon upgrades</strong> (junk, then the scoop) add +0.2× playfield and +1× bonus for the whole game and unlock the next <strong>Deathclaw Multiball</strong>. <strong>Power Armor</strong> (fusion-core pop bumper) adds a timed +1× on top: save it for jackpots. Finish <strong>quests</strong> for legendary weapons.",
      steps: [
        { title: "Quests and HP",
          body: "The <strong>left orbit</strong> (and the right ramp for the first two quests) adds HP. With 50+ HP the <strong>scoop</strong> starts the lit quest; its timer is your HP in seconds (max 100). The junk target changes the quest. Finished single-ball quests give <strong>legendary weapons</strong>; playing 3 quests lights an extra ball (15M in competition) at the target beside the lower Pip-Boy ramp." },
        { title: "Multiballs",
          body: "<strong>Deathclaw</strong>: hit the bash toy when FIRE flashes. <strong>Wasteland</strong>: complete the right 3-bank, shoot the lit Pip-Boy ramp, then (Pro) hit the lit 3-bank target; three kills start it. Super: upper Pip-Boy ramp, then the centre-right target. <strong>VAULT</strong> letters → centre ramp → Find the Lunchbox! (odd lunchboxes = Vault Multiball)." },
        { title: "Radaway and side quests",
          body: "Three green radaway shots let a Pip-Boy ramp start the <strong>Radaway Hurry-Up</strong> (single-ball): make all 3 ramps, then loop the <strong>upper loop</strong> from the mutant flipper for 10 s of <strong>Radaway Jackpots</strong>. Finishing the blue insert row at the left ramp, U-turn and right ramp lights a <strong>side quest</strong> (50+ HP) at the scoop: after phases 1–3, cash out at a Pip-Boy ramp or continue." },
      ],
      shots: [
        { name: "Scoop", why: "Quests, weapon upgrades, loot, Sundries." },
        { name: "Deathclaw bash toy", why: "Deathclaw Multiballs." },
        { name: "Upper loop (mutant flipper)", why: "Radaway Jackpots; wasteland locations." },
      ],
      avoid: [
        "Re-hitting a killed radroach gives RAD (lower max HP); only take it on purpose when you want radaway shots.",
              ],
      target: "Milestones (estimates): 2 quests + a Deathclaw Multiball = baseline. Weapon level 3 + Wasteland or Vault Multiball = good. Radaway Jackpots under Power Armor, or Vault 4 = great.",
    },

    info: {
      stats: [
        { label: "Manufacturer", value: "Stern Pinball" },
        { label: "Year",         value: "2026 (September)" },
        { label: "Design",       value: "Keith Elwin" },
        { label: "Code",         value: "Andrew Wilkening, Brett Z Rubin, Raymond Davidson, Rick Naegele" },
        { label: "Art",          value: "Sam Gilbey, Jeremy Parker (Zombie Yeti)" },
        { label: "Code version", value: "0.82.0 \"Filly Battle\" (12 Nov 2026), the latest; some wizard modes still undocumented" },
        { label: "Models",       value: "Pro (shown), Premium, LE (Premium/LE: Fat Man launcher, lower-playfield vault, Deathclaw fire-back)" },
      ],
      theme: "The Fallout TV series and games: Vault-Tec, Lucy, Maximus and The Ghoul, the Pip-Boy, Power Armor, Deathclaws and the Nuka-Cola wasteland.",
      features: [
        { name: "Character select", desc: "Before the first plunge: Lucy (easier VAULT letters, longer vault timers), Maximus (+2 s Power Armor per core level), The Ghoul (radroaches build HP). Each adds two SPECIAL stats." },
        { name: "Quests", desc: "Wedding Day and The Kings (2-ball; 5 Deathclaw hits add a ball), Radscorpion Attack (jump ramp build), Mind Control (ramps lower the spinner, 3 levels), NOVAC (left orbit and right ramp, final shot at a Pip-Boy ramp), Find the Target (3 phases). Timer = HP. Since 0.82, quests can be replayed until the Observatory is ready." },
        { name: "Deathclaw Multiballs (3)", desc: "Bash toy hits when FIRE flashes. DC1: 20 s of red shots build the jackpot (2M +250K), then 12 s of bash-toy jackpots. DC2: charge the weapon with red shots, then the Deathclaw; 5 jackpots light the super. DC3: clear all shots, then the super at the Deathclaw (legendary weapon). All 4 radroaches add a ball. Each next one needs a weapon upgrade." },
        { name: "Wasteland Multiball", desc: "Nuke targets (right 3-bank) light a Pip-Boy ramp to load the Fat Man; on the Pro, then shoot the lit 3-bank targets. Jackpots (left orbit, U-turn, right ramp) 3M +500K; super 15M + 2.5M × jackpots × wave, lit at the upper Pip-Boy ramp after 2 jackpots, scored at the centre-right target. The first two supers add a ball; the first gives a legendary weapon." },
        { name: "VAULT / Vault Multiball", desc: "VAULT letters light Open Vault at the centre ramp. Pro: Find the Lunchbox! (15 s): a blue shot, then the scoop; upper loops add 250K. Odd lunchboxes = Vault Multiball (3 balls: jackpot moves left to right, double jackpot at the upper loop, super at the centre ramp); even = legendary weapon." },
        { name: "Power Armor and weapons", desc: "Fusion-core pop bumper (and nearby targets) charge Power Armor; at 50%+ hold the action button 2 s for +100% scoring, added to the weapon multiplier (toggle by holding again). Weapons: junk (slings/bumpers light the junk target; right inlane first = 2 junk) upgraded at the scoop: +0.2× playfield and +1× bonus per level." },
        { name: "Radaway", desc: "RAD lights green radaway shots on the ramps. Three collected → Radaway Hurry-Up at a Pip-Boy ramp (single-ball). All 3 ramps (upper Pip-Boy, centre, right) light the Radaway Jackpot at the upper loop: repeat it for 10 s (15 s with Rad-X, which is used up after that jackpot)." },
        { name: "Wasteland items and side quests", desc: "Rows of inserts at the left ramp, U-turn and right ramp: white = Stimpak (outlane ball save), yellow = companion (Victor, Protectron, Dogmeat, Mr. Handy; action button for its ability), blue = side quest (also needs 50+ HP; after the first, the inserts must be made left to right). Side quests (Filly, Gulper; the next one is random) are 4-phase single-ball modes that take priority over everything but radio modes; after phases 1–3 cash out at a Pip-Boy ramp (legendary weapon, then junk, then a bobblehead) or continue with more time." },
        { name: "Radio modes", desc: "Radio tower target (next to the Nuka-Cola spinner) builds the signal; then a coloured music-note shot starts that song as a timed mode (the timer can't be paused). Clear the flashing notes to light the Radio Jackpot at the tower; the song's focus shot adds +1× to it." },
        { name: "Loops, caps and Sundries", desc: "Upper loops lead to wasteland locations (5, 10, 20, 35 loops…; 35 lights Vault 4 Multiball). Both Nuka-Cola inlanes light a Cap Stash spinner rip. Spend caps at the scoop: fusion cores, stimpaks, Rad-X, Psycho (tilt warning), junk; Legendary Junk buys a Gold Pinball (extra ball) or bobbleheads." },
      ],
      scoring: [
        { key: "Power Armor",            val: "+1× playfield (timed), adds to weapon X" },
        { key: "Weapon upgrade",         val: "+0.2× playfield, +1× bonus" },
        { key: "Wasteland super",        val: "15M + 2.5M × jackpots × wave" },
        { key: "Glowing radroach",       val: "20M + 10M each" },
        { key: "Legendary weapon after all 11", val: "50M + 25M each" },
        { key: "Extra ball (competition)", val: "15M, multiplied" },
      ],
      rules: [
        "Pro differences: no Fat Man launcher (shoot the 3-bank from the flippers) and no lower-playfield vault (Find the Lunchbox! instead).",
        "A lit side quest must be played before the next main quest.",
        "Hacking (mystery): a Pip-Boy ramp lights the lower left target; about half the time it fails without Mentats or Intelligence 2.",
        "Bonus: 1M per character level, caps and junk, × weapon level (max 6×) + 1× per unused tilt warning.",
        "Wizard modes: Vault 4 Multiball (35 loops), What Makes YOU Special, Observatory, Cold Fusion (the last three not yet documented).",
      ],
      benchmarks: [
        { score: "Radaway Jackpot run under Power Armor or Vault 4 (estimate)", label: "Great game" },
        { score: "Weapon level 3 + Wasteland or Vault Multiball",               label: "Good game" },
        { score: "2 quests + a Deathclaw Multiball",                            label: "Baseline" },
      ],
      resources: [
        { name: "Rulesheet (pinballrulesheets.com)", url: "https://pinballrulesheets.com/stern/fallout-rulesheet", icon: "📖" },
        { name: "Pro 0.82 Release Notes (Stern)",    url: "https://wp.sternpinball.com/wp-content/uploads/2026/11/pro_release_notes.txt", icon: "📄" },
        { name: "Stern Game Code",                   url: "https://sternpinball.com/support/game-code/", icon: "💾" },
      ],
    },

    strategy: {
      skillShot: "Time the full plunge so the ball rolls over the flashing Nuka-Cola insert on the right inlane; the Nuka-Cola spinner drops — rip it from the right flipper (3M + 75K per spin, caps, 3 s ball save; +1M base and +50K per spin each later time).",
      actionButton: { name: "Power Armor / companion", when: "Fusion core 50%+ / companion lit", desc: "Hold for 2× playfield (hold again to pause it); also fires your companion's ability or VATS." },
      multiball: [
        { name: "Deathclaw Multiball (1–3)", locks: "Bash toy hits when FIRE is lit.", start: "Hit with all limbs and FIRE flashing.", jackpots: "DC1: build with red shots, then 12 s of Deathclaw jackpots; DC2: charge the weapon; DC3: clear shots, then the super (legendary weapon).", tip: "All 4 radroach targets add a ball; upgrade the weapon to unlock the next one." },
        { name: "Wasteland Multiball", locks: "Nuke targets + Pip-Boy ramps (Fat Man).", start: "Clear the shooting-gallery targets.", jackpots: "Left orbit, U-turn, right ramp; super lit at the upper Pip-Boy ramp, scored at the centre-right target.", tip: "The first two supers add a ball; use Power Armor on the super." },
        { name: "Vault Multiball", balls: 3, locks: "VAULT letters → lunchbox.", start: "Odd-numbered lunchboxes.", jackpots: "Moving jackpot left to right; double at the upper loop (Pro); super at the centre ramp.", tip: "Super progress carries over unless you drain with the double or super lit." },
        { name: "Vault 4 Multiball", locks: "35 wasteland loops.", start: "Scoop (Pro), with no other mode running.", jackpots: "4 phases; each adds a ball; jackpots × balls in play.", tip: "Losing down to one ball gives 20 s to finish the phase." },
      ],
      goal: "<strong>Weapon upgrades and quests early, multiballs under Power Armor, Radaway Jackpots from the mutant flipper.</strong>",
      phases: [
        { num: "Phase 1", title: "Build", body: "HP at the left orbit, first quest, junk for a weapon upgrade, fusion core charge." },
        { num: "Phase 2", title: "Multiballs", body: "Deathclaw MB; nuke targets for Wasteland; VAULT letters for lunchboxes." },
        { num: "Phase 3", title: "Cash in", body: "Power Armor on supers and Radaway Jackpots; side quests when lit; loops toward Vault 4." },
      ],
      safeShots: [
        { name: "Left orbit", desc: "HP and food; repeat shots add more." },
        { name: "Upper loop from the mutant flipper", desc: "Locations, loop value, Radaway Jackpots." },
      ],
      avoidShots: [
        { name: "Already-killed radroaches", desc: "RAD lowers your max HP." },
      ],
      tips: [
        { head: "Pick a character", body: "The Ghoul turns radroach hits into HP, which makes quests more forgiving." },
        { head: "Side quest cash-out", body: "In competition, cash out after phase 1 (legendary weapon) unless the ball is under control; later cash-outs add junk, then a bobblehead." },
        { head: "Power Armor timing", body: "It adds to weapon X: switch it on for multiballs, supers and Radaway Jackpot loops, then off again." },
        { head: "Radio combo", body: "After any upper loop, the radio tower target as a combo scores the built-up loop value." },
      ],
      mistakes: [
        "Starting quests with low HP (short timers).",
        "Ignoring junk and weapon upgrades: they're permanent multipliers and unlock Deathclaw Multiballs.",
      ],
    },

    hotspots: [
      { x: 75,   y: 37,   type: "key",   label: "D",  name: "Deathclaw Bash Toy", body: "Deathclaw Multiballs." },
      { x: 5,    y: 42,   type: "key",   label: "LO", name: "Left Orbit", body: "HP / food; Wasteland jackpots." },
      { x: 77,   y: 21,   type: "key",   label: "S",  name: "Scoop (approx.)", body: "Quests, side quests, Sundries, weapon upgrades, loot." },
      { x: 84.5, y: 52,   type: "key",   label: "N",  name: "Right Nuke Targets (3-bank)", body: "Fat Man / Wasteland Multiball; Wasteland super." },
      { x: 33,   y: 26,   type: "key",   label: "P",  name: "Pip-Boy Ramp (approx.; other entrance at 24,26)", body: "Level-ups, Radaway Hurry-Up, hacking, Fat Man." },
      { x: 51,   y: 36,   type: "info",  label: "CR", name: "Centre Jump Ramp", body: "VAULT / lunchbox; radaway ramp." },
      { x: 64,   y: 23,   type: "info",  label: "RR", name: "Right Ramp", body: "Food (first quests); wasteland items; escape after a failed steal." },
      { x: 20,   y: 70,   type: "info",  label: "F",  name: "Fusion-Core Pop Bumper", body: "Charges Power Armor." },
      { x: 19,   y: 37,   type: "info",  label: "MF", name: "Mutant (Upper) Flipper", body: "Upper loop: Radaway Jackpots, wasteland locations." },
      { x: 51,   y: 31,   type: "info",  label: "NC", name: "Nuka-Cola Drop Spinner (approx.)", body: "Cap Stash rips; skill shot." },
      { x: 23,   y: 21,   type: "info",  label: "PB", name: "Pip-Boy Display", body: "Perks and timers." },
      { x: 41,   y: 18,   type: "info",  label: "U",  name: "U-Turn", body: "Wasteland items; Wasteland jackpots." },
      { x: 31,   y: 78,   type: "info",  label: "J",  name: "Junk Target", body: "Junk; changes the quest." },
      { x: 31.5, y: 51,   type: "info",  label: "?",  name: "Hacking Target", body: "Mystery, lit by a Pip-Boy ramp." },
      { x: 29.5, y: 48,   type: "info",  label: "EB", name: "Extra Ball Target (approx.)", body: "15M in competition." },
      { x: 56,   y: 32.5, type: "info",  label: "RT", name: "Radio Tower Target (approx.)", body: "Radio modes; loop combo bonus." },
      { x: 77.5, y: 63,   type: "info",  label: "RC", name: "Lower Right Radroach", body: "2× on a glowing radroach (Pro)." },
      { x: 8,    y: 82,   type: "avoid", label: "!",  name: "Left Outlane", body: "Stimpak when lit." },
      { x: 86.5, y: 79,   type: "avoid", label: "!",  name: "Right Outlane", body: "Stimpak when lit." },
    ],
  };
