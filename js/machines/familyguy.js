  /* ─── FAMILY GUY (STERN 2007) ────────────────────────────── */
MACHINES['familyguy'] = {
    name: "Family Guy",  sub: "2007 · Stern · S.A.M. (DMD)",
    tagline: "Spinner lights TV modes · Fart Multiball at the drops · Stewie Pinball mini-playfield · Beer Can modes · Sperm Attack wizard mode",
    image: "images/family-guy.webp",
    difficulty: "Medium", diffClass: "diff-medium", era: "DMD",

    /* ── QUICK GUIDE (30–90 s read) ───────────────────────────── */
    quick: {
      goal: "Rip the <strong>right spinner</strong> to light <strong>TV modes</strong> at the scoop, complete the upper-left <strong>Fart drop targets</strong> for <strong>Fart Multiball</strong>, and spell PINBALL at the <strong>captive ball</strong> for <strong>Stewie Pinball</strong> on the mini-playfield. Play all five TV modes well for a big TV Wizard.",
      steps: [
        { title: "TV modes",
          body: "Spinner spins light the <strong>TV scoop</strong> (10 spins, then +5 each). Best: <strong>Good Old Boys</strong> (orbits/left ramp up to 1M each) and <strong>Super Griffins</strong> (all six character shots, +1M for all). Chicken Fight: rip the spinner to end it fast. All five → <strong>TV Wizard</strong> hurry-up; 25M total there is one of the Sperm Attack requirements." },
        { title: "Fart Multiball",
          body: "Complete the upper-left <strong>Fart drop targets</strong> 3 times (then 4, 5, 6). Jackpots come from <strong>switch counts</strong>, so rip the spinner and pops. Start a TV mode first: multiball can't start one but stacks with one already running." },
        { title: "Stewie Pinball",
          body: "Captive ball hits spell PINBALL; shoot the scoop to play the mini-playfield. Stewie targets before you go up add ball-save time. Complete all five characters for <strong>Stewie Multiball</strong> (mini-ball plus 4 balls)." },
      ],
      shots: [
        { name: "Right spinner / orbit", why: "Lights TV modes; Lois." },
        { name: "Fart drop targets", why: "Fart Multiball; skill shot." },
        { name: "Brian toy", why: "Beer Can modes and Lard Multiball." },
      ],
      avoid: [
        "The Brian toy in single-ball play: a straight-up center shot; hit it in multiball instead.",
        "Dragging out Chicken Fight, usually the least valuable mode: end it fast with spinner rips. Pops rotate the lit mode, so check before shooting the scoop.",
      ],
      target: "Milestones (estimates): two TV modes and a Fart Multiball = baseline. Stewie Multiball or TV Wizard = good. Sperm Attack wizard mode = great.",
    },

    info: {
      stats: [
        { label: "Manufacturer", value: "Stern" },
        { label: "Year",         value: "2007" },
        { label: "Design",       value: "Pat Lawlor (Pat Lawlor Design)" },
        { label: "Platform",     value: "Stern S.A.M. (DMD)" },
      ],
      theme: "The Fox cartoon: Peter, Stewie's mini-playfield, Brian, the beer can, the Evil Monkey and the Griffin house. Shrek (2008) uses the same playfield and rules. Some content is adult humor.",
      features: [
        { name: "TV modes", desc: "Spinner (1,000 + 50 a spin, max 5,000) lights the scoop. Good Old Boys (500K → 1M), Super Griffins (750K–1M per new shot, +1M bonus), Chicken Fight (switch fight, ~3M), Sexy Party (300K–750K, Stewie targets raise it), Ipecac Contest (250K–1M by variety). All five → TV Wizard (repeatable hurry-up at the jackpot shots; the scoop resets it)." },
        { name: "Fart Multiball", desc: "3/4/5/6 drop-bank completions; 2 balls first time, then 3. Jackpots at switch-count thresholds, worth 20K × the switches needed." },
        { name: "Stewie Pinball and Multiball", desc: "Spell PINBALL at the captive ball, then the scoop. Mini-playfield with two mini-flippers: five shots spell character names (letters 50K+, completions 500K and up to 3× scoring). All five → Stewie Multiball: jackpots alternate between the mini-playfield and the matching main shots (500K +100K); 2 per character lights the Super Jackpot lane (2M +1M)." },
        { name: "Beer Can modes", desc: "Brian toy hits (5, then +1 each) start the flashing award: Collect Beers, Giggity Giggity (pops 5,500), Happy Hour (2× for 20 s), Remember When (3M hurry-up), Lard Multiball (2 balls, jackpots 250K–750K, Super 3M)." },
        { name: "Left orbit and Monkey Jackpot", desc: "Left orbit target: 100K+, advances awards (200K–500K, then Crazy Chris: 20 s of 400K shots) collected at the hanging target; also lights the Super Jackpot lane for a few seconds (shoot it from the upper left flipper) for a Monkey Jackpot (500K–1M)." },
        { name: "Sperm Attack (wizard)", desc: "5 Monkey Jackpots, 10 Crazy Chris shots, 15 Fart jackpots, all Beer Can modes, a Stewie Super Jackpot and 25M in TV Wizard. Mini-playfield build phase, then 4-ball multiball where every major shot is a jackpot." },
      ],
      scoring: [
        { key: "Stewie Super Jackpot",  val: "2M, +1M each" },
        { key: "Lard Super Jackpot",    val: "3M" },
        { key: "Remember When",         val: "3M → 750K" },
        { key: "Good Old Boys shot",    val: "Up to 1M" },
        { key: "Skill shot",            val: "500K +250K (secret 2×)" },
      ],
      rules: [
        "Skill shot: plunge to hit the lowest Fart drop target. Secret skill shot: softer plunge to the upper left flipper, then the Super Jackpot lane: 2× value.",
        "Center post: hit the Death drop target (between left orbit and the drops) to raise it about 5 s; the near left inlane resets the target.",
        "Mysteries: Pirate target (relit by the Meg lane) and the Drunken Clam saucer at the back (lit each ball and by a full left ramp): points, bonus X, add-a-ball, light TV mode, instant Fart Multiball…",
        "Inlanes when lit (slingshots alternate them): far left = 2× Lois (spinner), right = 2× Meg (lower left lane).",
        "Tournament machines may have only one captive ball, which makes PINBALL slower.",
      ],
      benchmarks: [
        { score: "Sperm Attack wizard mode (estimate)", label: "Great game" },
        { score: "Stewie Multiball or TV Wizard",       label: "Good game" },
        { score: "Two TV modes + Fart Multiball",       label: "Baseline" },
      ],
      resources: [
        { name: "Strategy Guide (Pinball Primer)", url: "https://pinballprimer.github.io/familyguy_G5LW9.html", icon: "📖" },
        { name: "SDPC Cheatsheet",                 url: "https://pinball.miraheze.org/wiki/Family_Guy", icon: "📄" },
        { name: "Pinside Game Page",               url: "https://pinside.com/pinball/machine/family-guy", icon: "🕹️" },
      ],
    },

    strategy: {
      skillShot: "Plunge to knock down the lowest Fart drop target (500K, +250K each). A softer plunge to the upper left flipper and a shot up the Super Jackpot lane doubles it.",
      multiball: [
        { name: "Fart Multiball", balls: "2–3", locks: "Fart drop bank completions (3, then 4, 5, 6).", start: "Last completion.", jackpots: "At switch-count thresholds (20K × switches needed).", tip: "Spinner and pops rack up switches." },
        { name: "Stewie Multiball", balls: "4 + mini-ball", locks: "Spell all five characters on the mini-playfield.", start: "Last character.", jackpots: "Alternate mini-playfield / main shots 500K+; Super Jackpot lane 2M+.", tip: "Spell PINBALL again to add a ball." },
        { name: "Lard Multiball", balls: 2, locks: "Beer Can mode at the Brian toy.", start: "When Lard is flashing.", jackpots: "Lower left lane, orbits, captive balls: 250K → 750K; all five lit off = 3M Super.", tip: "Keep jackpots chained within 10 s." },
      ],
      goal: "<strong>Spinner → TV modes (stacked with multiballs) → Fart Multiball → Stewie Pinball → TV Wizard → Sperm Attack.</strong>",
      phases: [
        { num: "Phase 1", title: "Light modes", body: "Skill shot, then the spinner for the TV scoop." },
        { num: "Phase 2", title: "Stack", body: "Start a TV mode, then finish the F-A-R-T drops for multiball." },
        { num: "Phase 3", title: "Mini-playfield", body: "PINBALL at the captive ball; Stewie Multiball; Super Jackpot." },
      ],
      safeShots: [
        { name: "Right spinner", desc: "Mode lighting and switch hits." },
        { name: "Left orbit", desc: "Comes back to the upper left flipper." },
      ],
      avoidShots: [
        { name: "Brian toy (single ball)", desc: "Straight-down-the-middle rebounds." },
      ],
      tips: [
        { head: "Center post", body: "For about 5 s after you hit the Death target the post is up (warning bells before it drops): a ball resting on the post and left flipper shoots straight into the spinner; on the right flipper, straight into the left orbit." },
        { head: "Pirate target", body: "In any multiball the Pirate target (relit by the Meg lane) adds a ball." },
        { head: "Triple Super Jackpot", body: "For a few seconds after a Stewie Super Jackpot, the Drunken Clam saucer scores a secret Triple Super Jackpot." },
        { head: "Ball save time", body: "Stewie targets before entering the mini-playfield add 1 s each (max 30 s)." },
        { head: "TV Wizard value", body: "It's built from your shots in the five modes, so play them out rather than timing them out." },
      ],
      mistakes: [
        "Timing out the TV modes to rush the TV Wizard: low value.",
        "Ignoring the Super Jackpot in Stewie Multiball: it's needed for Sperm Attack.",
      ],
    },

    hotspots: [
      { x: 75, y: 62, type: "key",   label: "SP", name: "Right Spinner / Orbit", body: "Lights TV modes; Lois." },
      { x: 64, y: 59, type: "key",   label: "TV", name: "TV Scoop", body: "Starts TV modes; Stewie Pinball." },
      { x: 25.5, y: 47, type: "key",  label: "DT", name: "Fart Drop Targets", body: "Fart Multiball; skill shot." },
      { x: 70, y: 57, type: "key",   label: "CB", name: "Captive Ball", body: "PINBALL letters." },
      { x: 51, y: 43, type: "key",   label: "BR", name: "Brian / Beer Can", body: "Beer Can modes; Lard Multiball." },
      { x: 29, y: 33, type: "info",  label: "LR", name: "Left Ramp / Evil Monkey", body: "Hanging target collects left orbit awards; full ramp lights Drunken Clam." },
      { x: 20, y: 61, type: "info",  label: "UF", name: "Upper Left Flipper", body: "Super Jackpot lane and Stewie targets." },
      { x: 18, y: 50, type: "key",   label: "LO", name: "Left Orbit", body: "Awards; Crazy Chris; Monkey Jackpot." },
      { x: 76, y: 30, type: "info",  label: "MP", name: "Stewie Mini-Playfield", body: "Spell the characters." },
      { x: 40, y: 33, type: "info",  label: "X",  name: "X-X-X Targets", body: "Bonus X; character shot." },
      { x: 58, y: 26.5, type: "info", label: "DC", name: "Drunken Clam Saucer", body: "Mystery awards." },
      { x: 30, y: 56, type: "info",  label: "D",  name: "Death Drop Target", body: "Raises the center post." },
      { x: 8,  y: 85, type: "avoid", label: "!",  name: "Left Outlane", body: "Drain." },
      { x: 85, y: 85, type: "avoid", label: "!",  name: "Right Outlane", body: "Special when lit." },
    ],
  };
