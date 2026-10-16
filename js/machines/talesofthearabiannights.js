  /* ─── TALES OF THE ARABIAN NIGHTS ────────────────────────── */
MACHINES['talesofthearabiannights'] = {
    name: "Tales of the Arabian Nights",
    sub: "1996 · Williams · WPC-95",
    tagline: "Spin the Lamp for a carried-over bonus · 7 Tales → Jewels → Genie Battle · Make A Wish · Genie Multiball",
    image: "images/tales-arabian-nights.webp",
    difficulty: "Medium", diffClass: "diff-medium", era: "DMD",

    /* ── QUICK GUIDE (30–90 s read) ───────────────────────────── */
    quick: {
      goal: "A low-scoring game where <strong>bonus is king</strong>: every <strong>Lamp spin</strong> adds 10K, and the bonus carries over to every following ball — so spin the Lamp early and raise <strong>bonus X</strong> late. Collect the seven <strong>Jewels</strong> (Tales + Make A Wish) for the <strong>Genie Battle</strong> (20M).",
      steps: [
        { title: "Skill shot",
          body: "Manual plunge into the basket with the snake (50K, rising). Then hit the <strong>ramp</strong> right away for the Super Skill Shot (2× more)." },
        { title: "Spin the Lamp",
          body: "Hit a lamp post hard when the posts are horizontal. Every 15 spins starts <strong>Lightning Lamp</strong> (250K+ per spin) and lights <strong>Make A Wish</strong>; spins in multiples of 15 are kept between balls." },
        { title: "Tales → Jewels",
          body: "Hit the <strong>Genie</strong> to start the lit Tale (choose with the left flipper at ball start), complete it, then shoot the <strong>ramp</strong> for its Jewel. Tales aren't timed and carry over." },
        { title: "Make A Wish",
          body: "<strong>Bazaar</strong> scoop when lit: always take 'Collect a Jewel' — with no Tale running it awards the selected Tale's Jewel outright. Light the Ruby first for two Jewels. During the Wish animation, use the left flipper to pick a hard Tale (Ali Baba, Flying Horse) to wish away." },
        { title: "Genie Multiball",
          body: "Hit the Genie 5× (G-E-N-I-E) to light locks (orbits, centre lock lane); lock 2, then the Genie starts 3-ball Multiball. Lamp spins raise the Jackpot at the Genie; the lit orbit relights it." },
      ],
      shots: [
        { name: "Lamp", why: "Spins = bonus; Lightning Lamp; Make A Wish." },
        { name: "Genie", why: "Starts Tales; multiball; Jackpots." },
        { name: "Ramp", why: "Collect Jewels; Super Skill Shot; Fireball." },
      ],
      avoid: [
        "Only shoot the Bazaar when Make A Wish is lit — misses rebound down the middle.",
        "Don't collect a Wish while a Jewel is already lit at the ramp — the ramp is easier.",
      ],
      target: "Milestones (per the rulesheet): replay ~10–20M, 40M is a high score, 100M+ is world class. The Genie Battle = great game.",
    },

    info: {
      stats: [
        { label: "Manufacturer", value: "Williams" },
        { label: "Year",         value: "1996 (May)" },
        { label: "Design",       value: "John Popadiuk" },
        { label: "Software",     value: "Louis Koziarz (final ROM 1.4, Oct 1996)" },
        { label: "Art / Sound",  value: "Pat McMahon · Dave Zabriskie" },
        { label: "Production",   value: "3,128 units" },
      ],
      theme: "Rescue the Princess from the evil genie. A spinning golden Lamp in the middle of the playfield, a hinged Genie whose magnet sinks the ball into the playfield to start multiball, a flying-carpet ramp spiral, Shooting Star ball-grabbers above the outlanes and two captive-ball orbs. Scores are about 1/1000 of other games of its era.",
      features: [
        { name: "Lamp", desc: "Rotating lamp on two posts: each half turn = a Lamp spin (10K bonus)." },
        { name: "Genie + magnet", desc: "Starts Tales and multiball; Jackpot target." },
        { name: "Ramp (flying carpet)", desc: "Collects Jewels, Super Skill Shot, Fireball; a ball falling off the spiral can earn the Secret Ball Lock (once per game)." },
        { name: "Bazaar scoop", desc: "B-A-Z-A-A-R random awards; Make A Wish." },
        { name: "Orbits", desc: "Locks (magnet), Harem, Tiger Loops." },
        { name: "Orbs (captive balls)", desc: "Raise bonus X." },
        { name: "Shooting Stars", desc: "Ball-grabbers above the outlanes, lit by the left/right standup banks." },
      ],
      scoring: [
        { key: "Lamp spin",            val: "10K bonus each (× bonus X)" },
        { key: "Lightning Lamp",       val: "250K+ per spin, rising each time (rulesheet; Zen lists 50K)" },
        { key: "Genie Battle",         val: "20M for rescuing the Princess" },
        { key: "Jewel",                val: "50K bonus each" },
        { key: "Fireball",             val: "400K + 200K per saucer entry, countdown — hit the Genie before it ends" },
        { key: "Skill shot",           val: "50K → 125K; Super 2× more" },
      ],
      rules: [
        "<strong>Tales:</strong> Sinbad, Ali Baba, Flying Horse, Scheherazade, Camel Race, Flying Carpet, Cyclops — complete, then ramp for the Jewel. All seven → Genie Battle (wizard, unlimited balls in the final stage).",
        "<strong>Bonus</strong> carries over from ball to ball; Lamp spins drop back to the last multiple of 15 when you drain.",
        "<strong>Make A Wish</strong> lights every 15 Lamp spins; up to 3 Wishes can be stored. <strong>Ruby:</strong> with Make A Wish lit and one Shooting Star lit, light the other Shooting Star — the next Wish gives two Jewels (lost at the end of the ball).",
        "<strong>Genie Multiball:</strong> after the first, G-E-N-I-E must be spelled twice to relight the locks (Zen).",
        "<strong>Harem Multiball:</strong> H-A-R-E-M at the left orbit, or 3 Harem sneak-ins from the pops.",
        "Rules from Joshua Lehan's rulesheet; extra balls (Tiger Loops, 4th Jewel) are void under comp settings.",
      ],
      benchmarks: [
        { score: "Genie Battle won",  label: "Great game" },
        { score: "~40M",              label: "High score" },
        { score: "~10–20M (replay)",  label: "Baseline" },
      ],
      resources: [
        { name: "Rulesheet (pinball.org)", url: "https://www.pinball.org/rules/talesofthearabiannights.html", icon: "📖" },
        { name: "IPDB Entry",              url: "https://www.ipdb.org/machine.cgi?id=3824", icon: "🎯" },
        { name: "Pinside Game Page",       url: "https://pinside.com/pinball/machine/tales-of-the-arabian-nights", icon: "🕹️" },
      ],
    },

    strategy: {
      skillShot: "Manual plunger: hit the basket with the snake in it (top = full plunge, bottom = barely clear the launch ramp) for 50K (+25K each, max 125K), then the ramp right away for the Super Skill Shot (2× the value).",
      multiball: [
        { name: "Genie Multiball", balls: 3,
          locks: "G-E-N-I-E (5 Genie hits) lights locks at both orbits and the centre lock lane; lock 2.",
          start: "Genie (magnet catches the ball).",
          jackpots: "Genie = Jackpot, raised by Lamp spins; the lit orbit relights it.",
          tip: "Lamp spins come easily in multiball — start it with the blue path nearly empty." },
        { name: "Harem Multiball", balls: 2,
          locks: "H-A-R-E-M at the left orbit, or 3 Harem sneak-ins.",
          start: "Automatic.",
          jackpots: "Harem jackpot (raised by pop hits).",
          tip: "A small bonus feature." },
      ],
      goal: "<strong>Lamp spins early (bonus carries over), Jewels via Tales and Make A Wish, bonus X late.</strong> Genie Multiball for Jackpots; all seven Jewels for the Genie Battle.",
      phases: [
        { num: "Phase 1", title: "Lamp + Tales", body: "Spin the Lamp; start a Tale at the Genie, finish it, ramp for the Jewel." },
        { num: "Phase 2", title: "Wishes + multiball", body: "Make A Wish for Jewels (with the Ruby if possible); Genie Multiball." },
        { num: "Phase 3", title: "Bonus X + Genie Battle", body: "Orbs for bonus X on the last ball; seven Jewels → Genie Battle." },
      ],
      safeShots: [
        { name: "Ramp", desc: "Collects Jewels; the ball returns safely." },
      ],
      avoidShots: [
        { name: "Bazaar scoop when unlit", desc: "Misses often rebound down the drain." },
        { name: "Lamp when the posts are vertical", desc: "Hard to spin; shoot the Genie and other back shots instead." },
      ],
      tips: [
        { head: "Choose your Tale", body: "At ball start the left flipper changes the lit Tale; slings change it too, so hit the Genie quickly." },
        { head: "Lightning Lamp", body: "With a high bonus X it can be better to trap and wait for Lightning Lamp to end, then keep counting spins." },
      ],
      mistakes: [
        "Choosing random Wish awards instead of Jewels.",
        "Draining just before a 15-spin threshold.",
        "Holding stored Wishes on the last ball — collect them right away.",
      ],
    },

    hotspots: [
      { x: 52.5, y: 43,   type: "key",   label: "LA", name: "Lamp", body: "Spins = bonus; Lightning Lamp; Make A Wish." },
      { x: 40,   y: 23,   type: "key",   label: "GE", name: "Genie", body: "Starts Tales; multiball; Jackpot." },
      { x: 29.5, y: 38, type: "key",   label: "RP", name: "Ramp (Flying Carpet)", body: "Collect Jewels; Super Skill Shot; Fireball." },
      { x: 68,   y: 48.5, type: "key",   label: "BZ", name: "Bazaar Scoop", body: "Make A Wish; Bazaar awards." },
      { x: 17,   y: 44, type: "safe",  label: "LO", name: "Left Orbit", body: "Lock, Harem, Tiger Loops." },
      { x: 78,   y: 44,   type: "safe",  label: "RO", name: "Right Orbit", body: "Lock, Tiger Loops." },
      { x: 63,   y: 39,   type: "info",  label: "CL", name: "Centre Lock Lane", body: "Lock when lit (narrow, behind the Lamp)." },
      { x: 23.5, y: 48, type: "info",  label: "O1", name: "Left Orb (captive ball)", body: "Bonus X." },
      { x: 81,   y: 60.5, type: "info",  label: "O2", name: "Right Orb (captive ball)", body: "Bonus X." },
      { x: 16.5, y: 59,   type: "info",  label: "LT", name: "Left Standup Targets", body: "Light the left Shooting Star." },
      { x: 52.5, y: 29,   type: "info",  label: "RT", name: "Right Standup Targets", body: "Light the right Shooting Star (hidden behind the Lamp)." },
      { x: 90,   y: 40,   type: "info",  label: "SK", name: "Skill Shot Baskets", body: "Hit the basket with the snake." },
      { x: 7,    y: 83,   type: "avoid", label: "!",  name: "Left Outlane", body: "Shooting Star saves when lit." },
      { x: 84,   y: 83,   type: "avoid", label: "!",  name: "Right Outlane", body: "Shooting Star saves when lit." },
    ],
  };
