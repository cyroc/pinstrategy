  /* ─── THE GETAWAY: HIGH SPEED II ─────────────────────────── */
MACHINES['getaway'] = {
    name: "The Getaway: High Speed II", sub: "1992 · Williams · WPC Fliptronics II",
    tagline: "Run the red lights → Multiball · Supercharger Jackpots · shift through 5 gears",
    image: "images/getaway-playfield.webp",
    difficulty: "Medium", diffClass: "diff-medium", era: "DMD",

    /* ── QUICK GUIDE (30–90 s read) ───────────────────────────── */
    quick: {
      goal: "<strong>Multiball</strong> is the point: run the red lights to lock 3 balls, loop the <strong>Supercharger</strong> to light the 25M Jackpot, then build <strong>Super Jackpots</strong> (50M, 75M, 100M …). Between Multiballs, the orbits move you through the gears.",
      steps: [
        { title: "Stoplights → locks",
          body: "Green, then yellow, then red: each completed colour lights a lock. Lock via the <strong>Back Ramp</strong> with a firm <strong>Left Orbit</strong> or <strong>Left Loop</strong> (upper flipper) shot." },
        { title: "Multiball: loop the Supercharger",
          body: "Each <strong>Supercharger</strong> shot = 10 loops: 1 shot lights the 25M Jackpot (Back Ramp); after it, 2+ shots light the Super Jackpot (50M, 75M, 100M…). Keep 2 balls in play. After a Jackpot, the <strong>Tunnel</strong> scores the Helicopter Bonus (jets build it)." },
        { title: "Gears between Multiballs",
          body: "<strong>Orbits</strong> = RPM. Finishing each gear awards 3M → Hold Bonus → Video Mode → Supercharger Mode (20 s, 5M shots) → Redline Mania. Then shift up for bonus X and to relight Burn Rubber (Tunnel)." },
        { title: "Redline Mania (after 5th gear)",
          body: "Collect at the Supercharger: 3-ball multiball with the Jackpot pre-lit and a Super Jackpot from <strong>100M</strong> — take the Jackpot right away, then go for the 100M." },
      ],
      shots: [
        { name: "Supercharger ramp", why: "Multiball Jackpot and Super Jackpot loops; Boost value." },
        { name: "Left Orbit / Left Loop → Back Ramp", why: "Locks and the Jackpot." },
        { name: "Orbits", why: "RPM and Freeway values." },
      ],
      avoid: [
        "The left outlane has no rubber — play cautiously when the kickback is off. The 1-2-3 targets (all three in ~8 s) relight it, but don't aim for them; Burn Rubber and Redline Mania relight it too.",
        "Lost to one ball before the Jackpot? Use the Getaway Time (~20 s) to still light and collect it.",
      ],
      target: "Milestones: Jackpot = good; a Super Jackpot or Redline Mania = great; 100M+ Super Jackpot = excellent.",
    },

    info: {
      stats: [
        { label: "Manufacturer", value: "Williams" },
        { label: "Year",         value: "1992 (February)" },
        { label: "Design",       value: "Steve Ritchie" },
        { label: "Software",     value: "Dwight Sullivan" },
        { label: "Platform",     value: "WPC (Fliptronics II)" },
        { label: "Production",   value: "≈13,259 units" },
      ],
      theme: "Sequel to High Speed (1986): a police chase in a red sports car. A gear-shifter launches the ball, and the magnetic Supercharger loops balls at high speed.",
      features: [
        { name: "Supercharger", desc: "Steep left ramp into a magnet-accelerated loop. Boost value in single ball (+1M per 1-2-3 hit, max 10M; completing 1-2-3 relights it); in Multiball loops light the Jackpot and Super Jackpot." },
        { name: "Stoplights (3 rows)", desc: "Green, yellow, red; each completed colour lights a lock. In Multiball/Manias all nine flash." },
        { name: "Back Ramp + Hideout", desc: "Comes down when a lock, Jackpot or Super Jackpot is lit (and in Getaway Time); a firm Left Orbit / Left Loop shot reaches it. Locked balls wait in the Hideout." },
        { name: "Left Loop (upper right flipper)", desc: "Speed Millions (1M, +1M per quick repeat); lock path." },
        { name: "Orbits", desc: "RPM shots for the gears; Freeway values when lit by the opposite inlane." },
        { name: "Tunnel saucer", desc: "Burn Rubber (random award), Video Mode, Helicopter Bonus, extra balls." },
        { name: "1-2-3 targets", desc: "Above each outlane; all three before they time out relight the kickback; also raise and relight the Supercharger Boost." },
      ],
      scoring: [
        { key: "Multiball Jackpot",   val: "25M (Back Ramp)" },
        { key: "Super Jackpot",       val: "50M, 75M, 100M … (no limit)" },
        { key: "Supercharger Boost",  val: "Starts 3M; +1M per 1-2-3 target hit, max 10M" },
        { key: "Supercharger Mode",   val: "Flashing shots 5M; Supercharger 5M, 10M … for 20 s" },
        { key: "Gear awards",         val: "3M, Hold Bonus, Video Mode, Supercharger Mode, Redline Mania" },
        { key: "Freeway",             val: "1M → 5M" },
        { key: "Bonus multiplier",    val: "2X / 4X / 6X / 8X (shifting up)" },
      ],
      rules: [
        "<strong>Gears:</strong> 1st needs 1 RPM shot, 2nd 2, … 5th 5; shift up (either direction on the shifter) when lit.",
        "<strong>Multiball</strong> (3 balls): lock 3 (Back Ramp), or a Burn Rubber award, or Redline Mania. Jackpot needs 10 more loops each later Multiball (max 20); Super Jackpot +10 loops each (max 50).",
        "<strong>Getaway Time:</strong> if you drop to one ball before the Jackpot, you get ~20 s to still light and collect it.",
        "<strong>Redline Mania</strong> (collect at the Supercharger after 5th Gear) is a 3-ball multiball: Jackpot pre-lit, Super Jackpot starts at 100M, all targets 500K, relights kickback. <strong>Secret Mania</strong>: when 3 police cars show at Donut Heaven, shift up/down quickly for a 20 s 500K-per-target frenzy.",
        "<strong>Kickback</strong> is not relit at ball start on normal settings — only by 1-2-3.",
        "On final ROMs (L-2 and later) the 1-2-3 targets raise the Boost (max 10M) and relight it; early L-1 ROMs used escalating 3M/5M/7M Boosts.",
        "<strong>Extra balls</strong> (Freeway 5M, Stoplights in Manias, Redline) — void in comp play.",
      ],
      benchmarks: [
        { score: "100M+ Super Jackpot", label: "Excellent" },
        { score: "Super Jackpot / Redline", label: "Great game" },
        { score: "Jackpot",       label: "Good game" },
        
      ],
      resources: [
        { name: "Rulesheet (Kevin Martin)", url: "https://www.pinball.org/rules/getaway.html", icon: "📖" },
        { name: "Pinside Game Page",        url: "https://pinside.com/pinball/machine/getaway-high-speed-ii", icon: "🕹️" },
        { name: "IPDB Entry",               url: "https://www.ipdb.org/machine.cgi?id=1000", icon: "🎯" },
      ],
    },

    strategy: {
      skillShot: null,
      actionButton: { name: "Gear shifter", when: "When a gear is complete (Shift lit)", desc: "Pull or push the shifter to go up a gear: raises the bonus multiplier and relights Burn Rubber. It also launches the ball." },
      multiball: [
        { name: "Getaway Multiball", balls: 3,
          locks: "Complete the green, yellow and red stoplights (each colour lights a lock). Lock via the Back Ramp (Left Orbit or Left Loop).",
          start: "Third lock ('run the red light').",
          jackpots: "Supercharger: 10 loops light the 25M Jackpot on the Back Ramp. Each Supercharger shot = 10 loops. Then 20 loops (+10 per later Super, max 50) light the Super Jackpot (50M, +25M each).",
          tip: "Two balls in the Supercharger count as more loops at once. After a Jackpot, the Tunnel scores the Helicopter Bonus." },
      ],
      goal: "<strong>Run the red lights to Multiball, and loop the Supercharger for Jackpots and ever-growing Super Jackpots.</strong> Shift through the gears with the orbits between Multiballs.",
      phases: [
        { num: "Phase 1", title: "Kickback + stoplights", body: "Stoplights for locks; orbits for RPM; take 1-2-3 targets when they come." },
        { num: "Phase 2", title: "Multiball", body: "Supercharger → Jackpot (Back Ramp) → Supercharger → Super Jackpot." },
        { num: "Phase 3", title: "Gears", body: "Shift up for bonus X; 4th gear = Supercharger Mode; 5th gear = Redline Mania (Jackpot first, then the 100M Super)." },
      ],
      safeShots: [
        { name: "Supercharger ramp", desc: "Returns to the left inlane." },
        { name: "Right Orbit", desc: "Easier RPM/Freeway repeat shot than the left." },
      ],
      avoidShots: [
        { name: "Tunnel with a hard shot", desc: "A powerful shot can bounce out without registering." },
      ],
      tips: [
        { head: "Video Mode", body: "Shift up to 5th inside Video Mode right away: ~27M vs ~16–20M in 4th. Straddle the left two lanes." },
        { head: "Speed Millions", body: "Repeat Left Loop shots within ~6 s raise the value by 1M each." },
      ],
      mistakes: [
        "Forcing risky shots at the 1-2-3 targets just to relight the kickback.",
        "Letting Multiball drop to one ball without using the Getaway Time.",
      ],
    },

    hotspots: [
      { x: 30.1, y: 44.9, type: "key",   label: "SC",  name: "Supercharger Ramp",
        body: "Multiball: loops light the <strong>Jackpot</strong> and <strong>Super Jackpot</strong>. Single ball: Boost value." },
      { x: 86,   y: 22,   type: "key",   label: "BR",  name: "Back Ramp → Hideout",
        body: "Down when a lock, Jackpot or Super Jackpot is lit; reached by a firm Left Orbit / Left Loop shot." },
      { x: 16,   y: 34.7, type: "key",   label: "LO",  name: "Left Orbit",
        body: "RPM shot; with lock/Jackpot/Super lit, feeds the Back Ramp." },
      { x: 37,   y: 37.4, type: "key",   label: "LL",  name: "Left Loop (upper flipper)",
        body: "Speed Millions; lock/Jackpot path to the Back Ramp. Narrow — misses drift right." },
      { x: 80,   y: 37,   type: "safe",  label: "RO",  name: "Right Orbit", body: "RPM and Freeway shot." },
      { x: 41,   y: 46.7, type: "info",  label: "S1",  name: "Stoplights (row 1)", body: "Green → yellow → red: each colour lights a lock." },
      { x: 45.5, y: 36.5, type: "info",  label: "S2",  name: "Stoplights (row 2)", body: "Part of the stoplight sets." },
      { x: 60.5, y: 27.5, type: "info",  label: "S3",  name: "Stoplights (row 3)", body: "Vertical row right of the jets." },
      { x: 71.5, y: 25,   type: "info",  label: "TN",  name: "Tunnel Saucer", body: "Burn Rubber, Video Mode, Helicopter Bonus." },
      { x: 44.5, y: 23.6, type: "info",  label: "JB",  name: "Jet Bumpers", body: "Raise the Helicopter Bonus." },
      { x: 17.5, y: 60.5, type: "info",  label: "123", name: "Left 1-2-3 Targets", body: "With the right set: relight the kickback, raise the Boost. Don't aim for them." },
      { x: 76,   y: 61,   type: "info",  label: "123", name: "Right 1-2-3 Targets", body: "With the left set: relight the kickback, raise the Boost. Don't aim for them." },
      { x: 8.4,  y: 81.2, type: "avoid", label: "KB",  name: "Left Outlane + Kickback", body: "No rubber on the divider; the kickback saves it when lit." },
      { x: 83,   y: 81.2, type: "avoid", label: "!",   name: "Right Outlane", body: "Thin metal divider; open under comp settings." },
    ],
  };
