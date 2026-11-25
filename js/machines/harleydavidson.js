  /* ─── HARLEY-DAVIDSON 2ND EDITION (STERN 2002) ───────────── */
MACHINES['harleydavidson'] = {
    name: "Harley-Davidson",  sub: "2002 · Stern · Whitestar (DMD) · 2nd Edition",
    tagline: "16 cities to Milwaukee Multiball · Harley, Red Light and Speedometer multiballs · 35M perfect video mode · patch hurry-ups",
    image: "images/harley-davidson.webp",
    difficulty: "Medium", diffClass: "diff-medium", era: "DMD",

    /* ── QUICK GUIDE (30–90 s read) ───────────────────────────── */
    quick: {
      goal: "Play the three easy multiballs (<strong>Red Light</strong> and <strong>Speedometer</strong> are worth most), collect cities with Miles for patch hurry-ups, and if you know the <strong>video mode</strong> by heart, a perfect run is worth <strong>35M</strong> every time.",
      steps: [
        { title: "Multiballs",
          body: "<strong>Red Light</strong>: shoot the five stoplight shots (both orbits, Harley, right ramp, Big Stoplight) twice each, then the Big Stoplight: 2M jackpots, then a 20M super. <strong>Speedometer</strong>: right ramp to 5th gear, then once more; build speed (every switch = 1 mph) to light a 10M+ jackpot at the right ramp; the value keeps growing. <strong>Harley</strong>: hit the bike 6 times." },
        { title: "Cities and patches",
          body: "Every switch is a Mile; cities need 75, then +20 each. Completing both drop banks (L-I-V-E, R-I-D-E) or the skill shot lights <strong>Next City</strong> at the left scoop: use it right after a city for the most Miles. Each city starts a <strong>patch hurry-up</strong> (4M → 1M) at the Big Stoplight." },
        { title: "Video mode",
          body: "The four red <strong>Bar &amp; Shield posts</strong> light the video mode at the Big Stoplight. It's identical every time: avoid all cars and hit all 16 pedestrians for 6.2M plus a <strong>35M Perfect</strong> bonus." },
      ],
      shots: [
        { name: "Big Stoplight scoop", why: "Red Light start/super; patches; video mode." },
        { name: "Right ramp", why: "Gears and Speedometer jackpots." },
        { name: "Stoplight shots", why: "1M each and Red Light progress." },
      ],
      avoid: [
        "Wasting Next City right before a city is done: use it straight after one.",
        "Chasing Milwaukee's 24 bike hits: very hard; play it but don't count on it.",
      ],
      target: "Milestones (estimates): one multiball and a patch = baseline. A Red Light super jackpot or a perfect video mode = good. Several of either = great.",
    },

    info: {
      stats: [
        { label: "Manufacturer", value: "Stern (2nd Edition)" },
        { label: "Year",         value: "2002 (original Sega 1999)" },
        { label: "Design",       value: "John Borg (software Lonnie Ropp)" },
        { label: "Platform",     value: "Whitestar (DMD)" },
      ],
      theme: "Harley-Davidson motorcycles: a cross-country ride through 16 cities to Milwaukee, a raising bike toy, stoplights and a speedometer. The 1999, 2nd (2002, a re-run with updated code) and 3rd Editions are believed to share the rules.",
      features: [
        { name: "Skill shot", desc: "Choose an award: 10 Million, Speed Pops (3 Miles per pop until the ball leaves), Next City or a Harley letter." },
        { name: "Cities", desc: "75 Miles, +20 per city; the first 15 random, the 16th always Milwaukee (375 Miles). Speed Pops also from a full right orbit. Patch hurry-ups 4M → 1M at the Big Stoplight; the 4th, 10th and 14th give an extra ball instead (with extra balls off, no source says what these give)." },
        { name: "Harley Multiball", desc: "Bike hits spell HAR, then the raised bike locks L-E-Y (3 balls). Jackpots at the bike 2M +100K per drop target; 6 jackpots light a Super (sum of the six) for ~15 s." },
        { name: "Red Light Multiball", desc: "Five stoplight shots twice each (1M each), then the Big Stoplight. In multiball, the same 10 shots again: 2M jackpots, then a 20M Super at the Big Stoplight (untimed); jackpots +1M per cycle." },
        { name: "Speedometer Multiball", desc: "Gears from the right ramp (and the left inlane until you've played your first Speedometer Multiball). In multiball every switch is +1 mph: 40 mph lights a 10M jackpot at the right ramp, then +20 mph each (max 120); the jackpot grows 20K a switch once lit and doesn't reset when collected (until the multiball ends)." },
        { name: "Milwaukee Multiball (wizard)", desc: "4 balls for 80 s with unlimited ball save: bike hits score 200K × patches (max 3.2M); 24 hits = 48M. The three normal multiballs don't stack with each other." },
      ],
      scoring: [
        { key: "Perfect video mode", val: "35M + ~6.2M" },
        { key: "Red Light super",    val: "20M" },
        { key: "Speedometer jackpot", val: "10M + 20K a switch" },
        { key: "Milwaukee completion", val: "48M" },
        { key: "Patch hurry-up",     val: "4M → 1M" },
        { key: "Mystery Rider",      val: "1M–7M" },
      ],
      rules: [
        "Mystery Rider at the left scoop: lit by the left orbit, briefly by the right inlane.",
        "Bonus: 1M + 100K per post target, drop target and stoplight advance that ball; no multiplier.",
        "Outlane extra balls are a consolation feature and don't apply in competition play.",
        "Harley Multiball can offer a restart; in tournament mode mystery awards come in a set order.",
        "Milwaukee can run alongside one normal multiball if the 16th city is reached by Miles during it.",
      ],
      benchmarks: [
        { score: "Several supers or perfect video modes (estimate)", label: "Great game" },
        { score: "Red Light super or a perfect video mode",          label: "Good game" },
        { score: "One multiball + a patch",                          label: "Baseline" },
      ],
      resources: [
        { name: "Strategy Guide (Pinball Primer)", url: "https://pinballprimer.github.io/harleystern_G56lO.html", icon: "📖" },
        { name: "Stern Manual (PDF)",              url: "https://sternpinball.com/wp-content/uploads/2019/04/Harley_Davidson_Manual.pdf", icon: "📄" },
        { name: "Pinside Game Page",               url: "https://pinside.com/pinball/machine/harley-davidson-2nd-edition", icon: "🕹️" },
      ],
    },

    strategy: {
      skillShot: "Pick Next City and collect it at the left scoop right after you earn a city; otherwise 10 Million. Speed Pops if you're close to a city.",
      multiball: [
        { name: "Red Light Multiball", locks: "Five stoplight shots twice each.", start: "Big Stoplight.", jackpots: "2M per stoplight advance; 20M Super at the Big Stoplight.", tip: "Most valuable regular multiball." },
        { name: "Speedometer Multiball", locks: "Right ramp to 5th gear.", start: "Right ramp again.", jackpots: "Speed target → 10M+ at the right ramp; doesn't reset when collected.", tip: "Rip switches between jackpots." },
        { name: "Harley Multiball", locks: "HAR at the bike, then L-E-Y locks.", start: "Third lock.", jackpots: "Bike 2M+; 6 jackpots → Super (sum).", tip: "Drop targets raise the jackpot." },
        { name: "Milwaukee Multiball", balls: 4, locks: "16th city.", start: "Automatically.", jackpots: "Bike: 200K × patches; 24 hits = 48M.", tip: "80 s with unlimited ball save: shoot only the bike." },
      ],
      goal: "<strong>Red Light → Speedometer → Harley multiballs; perfect video modes; Next City after each city.</strong>",
      phases: [
        { num: "Phase 1", title: "Stoplights", body: "Stoplight shots (1M each until that light is red) to light Red Light." },
        { num: "Phase 2", title: "Multiballs", body: "Red Light super, then Speedometer jackpots." },
        { num: "Phase 3", title: "Cities", body: "Patches at the Big Stoplight; video mode whenever lit." },
      ],
      safeShots: [
        { name: "Right ramp", desc: "Gears; returns to the right inlane." },
      ],
      avoidShots: [
        { name: "Big Stoplight once its light is red and nothing is lit there", desc: "Save it for patches, video mode and Red Light." },
      ],
      tips: [
        { head: "Learn the video mode", body: "It's the same every game; a perfect run (16 pedestrians, no crashes) is 35M+." },
        { head: "Next City timing", body: "Collect it right after earning a city so it spots the most Miles." },
      ],
      mistakes: [
        "Hitting the bike into Harley Multiball when Red Light is nearly lit: multiballs don't stack, so the weaker one blocks the better one.",
        "Letting patch hurry-ups run down.",
      ],
    },

    hotspots: [
      { x: 59, y: 41, type: "key",   label: "BS", name: "Big Stoplight Scoop", body: "Red Light; patches; video mode." },
      { x: 42, y: 44, type: "key",   label: "H",  name: "Harley Bike", body: "HARLEY letters; jackpots; Milwaukee." },
      { x: 70, y: 50, type: "key",   label: "RR", name: "Right Ramp", body: "Gears; Speedometer jackpots." },
      { x: 33.5, y: 62, type: "key", label: "LS", name: "Left Scoop", body: "Next City; Mystery Rider." },
      { x: 17, y: 49, type: "key",   label: "LO", name: "Left Orbit", body: "Stoplight; lights Mystery Rider." },
      { x: 84, y: 45, type: "key",   label: "RO", name: "Right Orbit", body: "Stoplight; Speed Pops." },
      { x: 18, y: 74, type: "info",  label: "LV", name: "L-I-V-E Drop Targets", body: "With R-I-D-E: Next City." },
      { x: 80.5, y: 70, type: "info", label: "RD", name: "R-I-D-E Drop Targets", body: "With L-I-V-E: Next City." },
      { x: 17, y: 54, type: "info",  label: "P",  name: "Pop Bumpers", body: "Miles; Speed Pops." },
      { x: 48.5, y: 49.5, type: "info", label: "BP", name: "Bar & Shield Posts", body: "Four red posts (beside the bike and the right ramp) light the video mode." },
      { x: 59.5, y: 69, type: "info", label: "SM", name: "Speedometer", body: "Gears 1–5." },
      { x: 8,  y: 88, type: "avoid", label: "!",  name: "Left Outlane", body: "Drain." },
      { x: 84, y: 88, type: "avoid", label: "!",  name: "Right Outlane", body: "Drain." },
    ],
  };
