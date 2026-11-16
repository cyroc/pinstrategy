  /* ─── STREET FIGHTER II (GOTTLIEB 1993) ─────────────────────── */
MACHINES['streetfighter2'] = {
    name: "Street Fighter II",  sub: "1993 · Gottlieb (Premier) · System 3 (DMD)",
    tagline: "Defeat 12 fighters · Multiball on every 2nd defeat · 300M Super Jackpot · Torpedo frenzy · 500M Champion Challenge",
    image: "images/street-fighter-ii.webp",
    difficulty: "Medium-Hard", diffClass: "diff-medium-hard", era: "DMD",

    /* ── QUICK GUIDE (30–90 s read) ───────────────────────────── */
    quick: {
      goal: "Defeat fighters to earn <strong>multiballs</strong>, and in multiball work through the 8 jackpots to the <strong>300M Super Jackpot</strong>. Jackpot progress carries over, so every multiball moves you closer.",
      steps: [
        { title: "Defeat fighters",
          body: "Three fighters are lit at a time (white inserts), starting with <strong>E. Honda</strong> (lower left hole), <strong>M. Bison</strong> (lower right hole) and <strong>Sagat</strong>. Each defeat offers two awards: <strong>always take the right-flipper one</strong>. Every 2nd defeat, that award is <strong>Multiball</strong>. If you don't choose within 5 s, the game picks the left one (usually points)." },
        { title: "Multiball → Super Jackpot",
          body: "Two jackpot shots flash at a time: 5M, 10M, … 35M, then the 8th is the <strong>300M Super Jackpot</strong>. A flashing jackpot you skip stays flashing, so <strong>leave an easy one (Sagat, Vega, Dhalsim) for last</strong>; Guile and Ken &amp; Ryu must be made as regular jackpots anyway. On default settings (maybe not tournament) the Super Jackpot repeats until multiball ends." },
        { title: "Torpedo Multiball",
          body: "Shoot <strong>E. Honda</strong> when he isn't lit to spell TORPEDO (M. Bison helps until the first one). Torpedo is a 3-ball frenzy: <strong>3M every switch</strong>. Keep shooting Sagat and Vega. Its total is your only end-of-ball bonus, so don't tilt afterwards." },
      ],
      shots: [
        { name: "Lower left / right holes", why: "E. Honda, M. Bison and Balrog; TORPEDO letters; first jackpots." },
        { name: "Left ramp / underpass", why: "Zangief, Sagat; 4 barrels start multiball." },
        { name: "Right ramp / underpass", why: "Chun-Li (unlit 5M–25M), Vega (random awards)." },
      ],
      avoid: [
        "Letting the timer pick the left-flipper award: it's usually just points.",
        "Wasting the Super Jackpot on Guile or Ken &amp; Ryu: hard shots are hard to repeat at 300M.",
      ],
      target: "Milestones (estimates): one multiball with a few jackpots = baseline (~150M). One Super Jackpot = good game (~500M). Repeated Super Jackpots or the Champion Challenge = great (1B+).",
    },

    info: {
      stats: [
        { label: "Manufacturer", value: "Premier Technology (Gottlieb)" },
        { label: "Year",         value: "1993 (March)" },
        { label: "Design",       value: "Ray Tanzer, Bill Parker, Jon Norris" },
        { label: "Art",          value: "David Moore, Constantino Mitchell" },
        { label: "Platform",     value: "Gottlieb System 3 (DMD)" },
        { label: "Code",         value: "Rand Paulin" },
        { label: "Production",   value: "5,550 units" },
      ],
      theme: "Capcom's fighting game (the playfield says Champion Edition): defeat Ryu, Ken, Chun-Li, Guile and the rest of the 12 world warriors, then beat them all again to become the new Master. A car-smashing bonus round sits in a mini-playfield under the main playfield.",
      features: [
        { name: "12 fighters on 8 shots", desc: "Lower left hole E. Honda; lower right hole M. Bison and Balrog; left ramp Zangief (ramp down) or underpass Sagat (ramp up); Dhalsim hole; Blanka lane; Guile vertical loop; Ken &amp; Ryu spiral; right ramp Chun-Li (down) or underpass Vega (up)." },
        { name: "Defeat awards (left / right flipper)", desc: "1 5M / Car Crunch · 2 5M / Multiball · 3 5M / Roaming Ninjas · 4 10M / Multiball · 5 Hurry-up EB or 10M / Count-Up · 6 3 TORPEDO letters / Multiball · 7 10M / 1-2 Punch · 8 2 GUILE letters / Multiball · 9 10M / Double Score · 10 complete FIGHTER / Multiball · 11 nothing · 12 Champion Challenge." },
        { name: "Multiball", desc: "Progressive: 5M, 10M, 15M, 20M, 25M, 30M, 35M, then the 300M Super Jackpot. Two shots flash at a time; ramps stay raised, so shoot the underpasses. Collected jackpots and the value carry over between multiballs until you collect the Super Jackpot; after that multiball ends, the next starts again at 5M." },
        { name: "Torpedo Multiball", desc: "Spell TORPEDO at an unlit E. Honda (and unlit M. Bison before the first one): 3-ball frenzy, 3M per switch, added to bonus. About 100M on average." },
        { name: "Champion Challenge", desc: "After all 12 defeats: all 8 shots lit; defeat all 12 again on the same ball (10 shots: the lower right hole and the spiral count double) for 500M and a special (50M in tournament). Each shot scores only 5M otherwise; drain and you start over." },
        { name: "Car Crunch", desc: "Lower mini-playfield with its own flipper: smash the car before time runs out. Bonus 5M (3M on tournament settings), then 10M, then 30M. Unlit Blanka shots also build it." },
        { name: "Upper left flipper", desc: "Sideways flipper halfway up the left side, fed from the Blanka hole: the shot for the bracelet and the Ken &amp; Ryu spiral." },
        { name: "DOUBLE light", desc: "Doubles an unlit shot (2 TORPEDO letters, 2 barrels, 2 Vega awards…). Sling and pop hits move it." },
      ],
      scoring: [
        { key: "Super Jackpot (8th)",  val: "300M" },
        { key: "Jackpots 1–7",         val: "5M, 10M … 35M" },
        { key: "Champion Challenge",   val: "500M + special (50M tournament)" },
        { key: "Torpedo Multiball",    val: "3M per switch (~100M)" },
        { key: "Roaming Ninjas",       val: "5M, 20M, 50M, 100M" },
        { key: "Count-Up",             val: "3M rising to 48M" },
        { key: "Double Score round",   val: "4 shots in 20 s; the 4th doubles your score" },
        { key: "Extra ball / special (tournament)", val: "20M / 50M" },
      ],
      rules: [
        "Unlit shots: Zangief 3M (raises the ramp for Sagat); Sagat 4M + a barrel (4 barrels = multiball); Dhalsim 2M; Chun-Li 5M rising to 25M per ball; Vega a random award; Ken &amp; Ryu 1M per loop, rising all game; Guile a GUILE letter (first GUILE = extra ball, or 50M with extra balls disabled; then 50M each).",
        "The right ramp has a rotating flipper at the top: if it hits the ball, the shot scores nothing.",
        "On hard (possibly tournament) settings, the Super Jackpot resets the jackpots to 5M after one collection.",
        "Second chance: drain in the first ~10 s before defeating anyone and the ball is returned.",
        "No grace period on hurry-ups and count-ups. Rules from Dave Stewart's 1993 rulesheet (one machine) and club cheatsheets; values may differ by ROM and settings.",
      ],
      benchmarks: [
        { score: "1B+ (estimate)",   label: "Great game" },
        { score: "~500M (estimate)", label: "Good game" },
        { score: "~150M (estimate)", label: "Baseline" },
      ],
      resources: [
        { name: "Stewart's Rulesheet (pinball.org)", url: "http://www.pinball.org/rules/streetfighter2.html", icon: "📖" },
        { name: "IPDB Entry",                        url: "https://www.ipdb.org/machine.cgi?id=2403", icon: "🎯" },
        { name: "Pinside Game Page",                 url: "https://pinside.com/pinball/machine/street-fighter-ii", icon: "🕹️" },
      ],
    },

    strategy: {
      skillShot: "Plunge just after Chun-Li says \"shoot\": the timing sets the bracelet value (5M, 10M, 15M or 20M). The ball is fed to the upper left flipper; hit the <strong>bracelet target</strong> for that value, or double for the centre pin. A miss turns it into a hurry-up. If Blanka is lit, the plunge also defeats Blanka.",
      multiball: [
        { name: "Multiball", balls: 2, locks: "None: a right-flipper defeat award (every 2nd defeat), 4 barrels at the unlit Sagat underpass, or a Vega random award.", start: "Choose it after a defeat.", jackpots: "5M up to 35M for the first 7, then the 300M Super Jackpot. Order: E. Honda and M. Bison first, then Sagat / Vega, Dhalsim, Blanka, Guile, Ken &amp; Ryu.", tip: "Two shots flash at a time; skip an easy one so it becomes the repeatable Super Jackpot. If the Blanka jackpot is lit when multiball starts, the plunge collects it." },
        { name: "Torpedo Multiball", balls: 3, locks: "None: spell TORPEDO.", start: "The last TORPEDO letter at E. Honda (or M. Bison before the first).", jackpots: "No jackpots; every switch scores 3M.", tip: "Loop Sagat (3 switches a shot, takes a ball out briefly) and Vega (feeds the pop and green targets)." },
      ],
      goal: "<strong>Defeat fighters → right-flipper awards → multiball → 300M Super Jackpots.</strong> Collect TORPEDO letters on the side. Late in a good ball, the Double Score round and the Champion Challenge are the biggest awards.",
      phases: [
        { num: "Phase 1", title: "Skill shot and first defeats", body: "Bracelet skill shot, then E. Honda and M. Bison: easy holes that defeat fighters when lit and give TORPEDO letters when unlit." },
        { num: "Phase 2", title: "Multiball", body: "Take multiball at the 2nd defeat. Work down the jackpots, keeping an easy shot flashing for the Super Jackpot." },
        { num: "Phase 3", title: "Late awards", body: "Double Score (9th defeat): hit 4 lit shots in 20 s (5M, 10M, 15M, then the 4th doubles your score; usually includes Guile or Ken &amp; Ryu). After the 12th defeat, Champion Challenge: 10 shots for 500M." },
      ],
      safeShots: [
        { name: "E. Honda hole", desc: "Reliable; TORPEDO letters when unlit." },
        { name: "Left ramp / Sagat underpass", desc: "Comes back via the E. Honda hole; barrels toward multiball." },
      ],
      avoidShots: [
        { name: "Right ramp when unlit", desc: "The rotating flipper often rejects it for nothing." },
        { name: "Guile loop", desc: "Very small sweet spot; shoot it when it's a jackpot or the last GUILE letter." },
      ],
      tips: [
        { head: "Right flipper", body: "The right-flipper award always beats the left one; press the right flipper button as soon as you defeat someone." },
        { head: "Pick the last jackpot", body: "Leave Sagat or Vega flashing as the final jackpot: 300M each time you reshoot it." },
        { head: "Upper left flipper", body: "Practise it: it's the only way to the bracelet and the Ken &amp; Ryu spiral." },
        { head: "No bonus", body: "Before your first Torpedo Multiball there's no end-of-ball bonus, so you can nudge hard." },
      ],
      mistakes: [
        "Letting the 5 s choice timer run out and taking points.",
        "Tilting after Torpedo Multiball: you lose its whole bonus.",
      ],
    },

    hotspots: [
      { x: 14.5, y: 59,   type: "key",   label: "EH", name: "E. Honda Hole (lower left)", body: "Defeat E. Honda; unlit: TORPEDO letter." },
      { x: 85,   y: 58,   type: "key",   label: "MB", name: "M. Bison / Balrog Hole (lower right)", body: "Two fighters; unlit: TORPEDO letter (until the first Torpedo) and 1M, +1M per hit (resets each ball)." },
      { x: 22,   y: 38,   type: "key",   label: "LR", name: "Left Ramp / Underpass", body: "Ramp down: Zangief (unlit 3M). Ramp up: Sagat (unlit 4M + barrel; 4 barrels = multiball)." },
      { x: 77,   y: 47,   type: "key",   label: "RR", name: "Right Ramp / Underpass", body: "Ramp down: Chun-Li (unlit 5M–25M). Ramp up: Vega (unlit: random award)." },
      { x: 30,   y: 21.5, type: "info",  label: "D",  name: "Dhalsim Hole", body: "Defeat Dhalsim; unlit: 2M flame." },
      { x: 8,    y: 30,   type: "info",  label: "BL", name: "Blanka Lane", body: "Defeat Blanka; unlit: builds Car Crunch. Feeds the upper left flipper." },
      { x: 59.5, y: 30,   type: "info",  label: "GU", name: "Guile Loop", body: "Defeat Guile; unlit: GUILE letter (50M per GUILE)." },
      { x: 70,   y: 32,   type: "info",  label: "KR", name: "Ken & Ryu Spiral", body: "Shoot from the upper left flipper; unlit: 1M+ per loop." },
      { x: 66,   y: 29.5, type: "info",  label: "BR", name: "Bracelet Target", body: "Skill shot (5M–20M, double for the centre pin)." },
      { x: 12.5, y: 51.5, type: "info",  label: "UF", name: "Upper Left Flipper", body: "Fed by the Blanka hole; the shot for the bracelet and the Ken & Ryu spiral." },
      { x: 48,   y: 34,   type: "info",  label: "EB", name: "Extra Ball Target", body: "White centre target while flashing (20M in tournament mode)." },
      { x: 47,   y: 22,   type: "info",  label: "G",  name: "Pop Bumper & Green Targets", body: "Complete the green targets to light the extra ball briefly." },
      { x: 60.5, y: 48,   type: "info",  label: "F",  name: "FIGHTER Targets", body: "Each completed pair spots a letter; FIGHTER lights Special on one of the 4 in/outlanes (50M tournament). Use the flippers to move it to an inlane." },
      { x: 45,   y: 65,   type: "info",  label: "C",  name: "Car Crunch", body: "Mini-playfield under the glass window: 5M, 10M, 30M." },
      { x: 4,    y: 79,   type: "avoid", label: "!",  name: "Left Outlane", body: "Special when lit (50M tournament); move it to an inlane with the flippers." },
      { x: 88,   y: 79,   type: "avoid", label: "!",  name: "Right Outlane", body: "Special when lit (50M tournament); move it to an inlane with the flippers." },
    ],
  };
