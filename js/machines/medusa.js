  /* ─── MEDUSA (BALLY 1981) ────────────────────────────────── */
MACHINES['medusa'] = {
    name: "Medusa",  sub: "1981 · Bally · Bally -35 (solid state)",
    tagline: "Upper playfield with zipper flippers · Olympus drop targets raise a big saucer collect · Colossus bonus · Shield of the Gods center post · Extended Play",
    image: "images/medusa.webp",
    difficulty: "Medium-Hard", diffClass: "diff-medium-hard", era: "SS",

    /* ── QUICK GUIDE (30–90 s read) ───────────────────────────── */
    quick: {
      goal: "<strong>Up top all day.</strong> Get to the <strong>upper playfield</strong> and clear its <strong>drop targets</strong> again and again: each clear adds steps toward the next goal and lights the <strong>upper left saucer</strong>, whose collect grows 50,000 per goal reached. Collect it every time it's lit.",
      steps: [
        { title: "Upper playfield",
          body: "Reach it through either <strong>orbit</strong> or the gap between the upper flippers. Hitting a drop target <strong>zips the upper flippers together</strong> for 10 s, so the ball can't drain between them. Each bank clear adds 3 steps (fewer later, by setting); goals at 6, 11, 16 and 21 steps each add <strong>50,000</strong> to the saucer. Light the two <strong>green targets</strong> first to double the next clear's steps; the <strong>red target</strong> takes a step away (possibly only when lit)." },
        { title: "Saucer collect",
          body: "Every clear lights one collect at the <strong>upper left saucer</strong>; clearing again before you collect wastes it. A collect of 150,000+ qualifies <strong>Extended Play</strong> (a timed bonus ball after your game, if enabled); 200,000+ scores a special (points in competition)." },
        { title: "Lower playfield",
          body: "The <strong>1-2-3 targets</strong> (in order, left) or the <strong>right drop targets</strong> collect the <strong>Colossus bonus</strong>: 30,000, +30,000 each, max 150,000 this ball. The <strong>left orbit</strong> raises bonus X (2×, 3×, 5×); orbits also add <strong>Shield</strong> uses." },
      ],
      shots: [
        { name: "Upper drop targets", why: "Steps toward bigger saucer collects." },
        { name: "Upper left saucer", why: "Collects the Olympus value." },
        { name: "Left orbit", why: "Upper playfield access; bonus X; Shield." },
      ],
      avoid: [
        "The red standup up top: it takes away a step.",
        "Wasting Shield of the Gods uses: each unused one is worth 10,000 at the end, and the post saves center drains.",
      ],
      target: "Milestones (estimates): a 100,000 saucer collect = baseline. 150,000 and Extended Play = good. 200,000+ collects and a maxed Colossus = great.",
    },

    info: {
      stats: [
        { label: "Manufacturer", value: "Bally" },
        { label: "Year",         value: "1981 (September)" },
        { label: "Design",       value: "Wally Welch" },
        { label: "Art",          value: "Kevin O'Connor" },
        { label: "Platform",     value: "Bally -35 (solid state)" },
        { label: "Production",   value: "About 3,250" },
      ],
      theme: "Greek myth: Zeus on Olympus, the Gorgon Medusa, Colossus and Neptune, with clear flippers and an in-playfield number display.",
      features: [
        { name: "Upper playfield and Olympus", desc: "Upper drop targets (one at first, one more after each clear) raise the 21 red step lights; goals at 6, 11, 16, 21 add 50,000 to the saucer collect, then the lights reset. Green targets A and B double the next clear's steps; the red target subtracts a step (can be disabled; the art says \"when lit\", and one source says it opens the zipper flippers). Steps per clear: Easy 3-3-3-3, Medium 3-3-2-2, Hard 3-2-2-2, X-Hard 3-2-1-1 over clears 1–5, 6–10, 11–15, 16+." },
        { name: "Saucer collect", desc: "Lit by each drop clear (one collect at a time). Very low before the first goal. First collect of 150,000+ qualifies Extended Play; first 200,000+ scores a special. The value never goes down." },
        { name: "Colossus bonus", desc: "1-2-3 targets in order or the lower right drop bank: 30,000 +30,000, max 150,000 (which also scores a special). Resets each ball." },
        { name: "Extra ball number", desc: "Two digits in the playfield display change constantly; 1-2-3 locks the left one and the right drops the right one. A match = extra ball (points in competition); an orbit restarts the numbers." },
        { name: "Shield of the Gods", desc: "A center post fired by an extra button on the right. Start with 5 uses; each orbit adds one; unused uses score 10,000 each at the end of the game." },
        { name: "Extended Play", desc: "A bonus ball after your last ball; drains are saved while its timer (starts at 10 s) runs: 1-2-3 adds 10 s, right drops 5 s, saucer or a lit green target 1 s. Draining at 00 ends it." },
      ],
      scoring: [
        { key: "Saucer collect",  val: "+50,000 per goal (max unknown, at least 300,000)" },
        { key: "Colossus bonus",  val: "30,000 → 150,000" },
        { key: "Max Medusa bonus", val: "99,000 × 5" },
        { key: "Skill shot star", val: "10,000 each" },
        { key: "Special (competition)", val: "50,000" },
      ],
      rules: [
        "Skill shot: after Ready-Aim-Fire flashes, plunge so the ball rolls over as many lit star rollovers as possible (10,000, 3 bonus advances and +500 spinner value each). It sets the center spinner value for the ball.",
        "Right orbit: 10,000 → 50,000 rising per ball. Left orbit: 2×, 3×, 5× bonus X, then 50,000.",
        "Medusa bonus (max 99,000) locks in at 20,000, 40,000, 60,000 and 80,000 for the rest of the game.",
        "In competition, extra balls score 25,000 and specials 50,000. Whether Extended Play stays on in competition isn't documented.",
      ],
      benchmarks: [
        { score: "200,000+ collects + maxed Colossus (estimate)", label: "Great game" },
        { score: "150,000 collect and Extended Play",             label: "Good game" },
        { score: "A 100,000 saucer collect",                       label: "Baseline" },
      ],
      resources: [
        { name: "Strategy Guide (Pinball Primer)", url: "https://pinballprimer.github.io/medusa_G4xXQ.html", icon: "📖" },
        { name: "SDPC Cheatsheet",                 url: "https://pinball.miraheze.org/wiki/Medusa", icon: "📄" },
        { name: "Pinside Game Page",               url: "https://pinside.com/pinball/machine/medusa", icon: "🕹️" },
      ],
    },

    strategy: {
      skillShot: "Time a short plunge so the ball rolls over the lit star rollovers: 10,000 each, and it sets the spinner value for the ball. If you get a high value, rip the spinner.",
      multiball: [],
      goal: "<strong>Upper playfield drops → goals → saucer collects (150,000 for Extended Play); Colossus and bonus X below.</strong>",
      phases: [
        { num: "Phase 1", title: "Get up top", body: "Orbits or the upper flipper gap; left orbit also raises bonus X." },
        { num: "Phase 2", title: "Olympus", body: "Green targets, then clear the drops; collect the saucer each time." },
        { num: "Phase 3", title: "Below", body: "1-2-3 and the right drops for Colossus when the ball falls back." },
      ],
      safeShots: [
        { name: "Upper drops with zipped flippers", desc: "The ball can't drain between the upper flippers while they're zipped." },
        { name: "Orbits", desc: "Return access to the upper playfield; Shield uses." },
      ],
      avoidShots: [
        { name: "Red standup (upper)", desc: "Loses a step." },
      ],
      tips: [
        { head: "Don't waste collects", body: "Make the saucer before clearing the drops again." },
        { head: "Shield timing", body: "Fire the post when the ball heads down the middle; save uses for late balls." },
        { head: "Inlane posts", body: "Only a post separates inlane from outlane: nudge the ball off it toward the inlane." },
      ],
      mistakes: [
        "Playing the lower playfield when the upper drops are the main scoring.",
        "Clearing the drops twice without collecting the saucer.",
      ],
    },

    hotspots: [
      { x: 53, y: 8, type: "key",   label: "DT", name: "Olympus Drop Targets", body: "Steps toward goals; light the saucer." },
      { x: 16, y: 12, type: "key",   label: "S",  name: "Upper Left Saucer", body: "Collects the Olympus value." },
      { x: 9,  y: 44, type: "key",   label: "LO", name: "Left Orbit", body: "Upper playfield; bonus X; Shield." },
      { x: 78, y: 40, type: "key",   label: "RO", name: "Right Orbit", body: "Upper playfield; 10,000–50,000; Shield." },
      { x: 37, y: 5,  type: "info",  label: "G",  name: "Green Targets", body: "Double the next clear's steps." },
      { x: 48, y: 5,  type: "avoid", label: "R",  name: "Red Target", body: "Takes away a step." },
      { x: 35, y: 36, type: "info",  label: "ZF", name: "Zipper Flippers", body: "Close together for 10 s after a drop hit." },
      { x: 46, y: 37, type: "info",  label: "SP", name: "Gorgon Spinner", body: "Value set by the skill shot." },
      { x: 9.5, y: 55, type: "key",  label: "123", name: "1-2-3 Targets", body: "In order: Colossus bonus; left digit." },
      { x: 79, y: 60, type: "key",   label: "RD", name: "Right Drop Targets", body: "Colossus bonus; right digit." },
      { x: 91, y: 24, type: "info",  label: "SK", name: "Skill Shot Stars", body: "10,000 each when lit." },
      { x: 45, y: 95, type: "info",  label: "SG", name: "Shield of the Gods", body: "Center post; extra button." },
      { x: 5,  y: 85, type: "avoid", label: "!",  name: "Left Outlane", body: "Drain." },
      { x: 87, y: 85, type: "avoid", label: "!",  name: "Right Outlane", body: "Drain." },
    ],
  };
