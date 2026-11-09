  /* ─── STAR GAZER ─────────────────────────────────────────── */
MACHINES['stargazer'] = {
    name: "Star Gazer",  sub: "1980 · Stern Electronics · M-200",
    tagline: "Lock a top-spinner value of up to 4,000 a spin with one upper drop target · zodiac bonus to 48,000 and bonus X to 10×, both carried over",
    image: "images/star-gazer.webp",
    difficulty: "Medium-Hard", diffClass: "diff-medium-hard", era: "SS",

    /* ── QUICK GUIDE (30–90 s read) ───────────────────────────── */
    quick: {
      goal: "The <strong>top spinner</strong> is the money shot. A moving light picks its value; hitting <strong>one upper drop target</strong> locks it (up to <strong>4,000 a spin</strong>) until that bank is completed. Lock a high value and rip the spinner; if it's low, finish the bank to roll again.",
      steps: [
        { title: "Lock the top spinner",
          body: "Values run 4,000 / 3,500 / 3,000 … 500 a spin (the drop completion pays the reverse, 5,000 up to 100,000). <strong>3,000+ a spin</strong>: shoot only the spinner. Low: complete the upper drops to restart the light. Unlocked, the spinner pays only 200." },
        { title: "Zodiac",
          body: "Twelve zodiac targets: each new sign adds 1,000 bonus; the <strong>star rollovers above the flippers</strong> spot them when lit white, or light the opposite side spinner for one 2,000-a-spin rip when yellow. Bonus (max 48,000) is <strong>carried between balls</strong>." },
        { title: "Multiplier",
          body: "Clearing the <strong>left or right drop bank</strong> adds bonus X (max 10×, also carried). It takes many targets, so pick them up mainly when only one target is left in a bank." },
      ],
      shots: [
        { name: "Top spinner (locked high)", why: "Up to 4,000 a spin." },
        { name: "Upper drop targets", why: "Lock or re-roll the spinner value." },
        { name: "Left spinner lane", why: "Most reliable way up to the upper drops." },
      ],
      avoid: [
        "A ball coming back down the left spinner lane often drains down the middle.",
        "The flippers sit low and flat — the flipper gap is smaller when raised. Practise your aim first.",
      ],
      target: "Milestones: a locked 3,000–4,000 spinner ripped repeatedly = good game. Add a carried 48,000 at high X = great.",
    },

    info: {
      stats: [
        { label: "Manufacturer", value: "Stern Electronics" },
        { label: "Year",         value: "1980 (August)" },
        { label: "Design",       value: "Brian Poklacki" },
        { label: "Art",          value: "Gerry Simkus" },
        { label: "Production",   value: "869" },
        { label: "System",       value: "Stern M-200" },
        { label: "Max bonus",    value: "48,000 × 10 = 480,000" },
      ],
      theme: "Astrology: a star-gazing heroine surrounded by the twelve signs of the zodiac.",
      features: [
        { name: "Top spinner + upper drops", desc: "A light moves over 8 value pairs. Hitting any upper drop target locks the pair until the bank is completed: 4,000/spin & 5,000 drops … 500/spin & 100,000 drops. Unlocked: 200 a spin." },
        { name: "Zodiac targets (12)", desc: "Score the zodiac value (1,000, +1,000 per completed zodiac, max 4,000); unlit targets light and add 1,000 bonus. Progress carries over between balls." },
        { name: "Left / right drop banks", desc: "1,000 each; a clear adds bonus X (max 10×, carried over). Left centre target = extra ball after a zodiac; right bank = special after the set number of zodiacs." },
        { name: "Side spinners", desc: "200 a spin; 2,000 for one rip when lit by the opposite star rollover." },
        { name: "Star rollovers", desc: "Above each flipper: 2,000; white spots a zodiac sign, yellow lights the opposite spinner." },
        { name: "No inlanes", desc: "Outlanes (5,000, special when lit), flippers and big slingshots only." },
      ],
      scoring: [
        { key: "Locked top spinner", val: "500 – 4,000 a spin" },
        { key: "Upper drop completion", val: "5,000 – 100,000 (reverse of the spinner)" },
        { key: "Bonus",              val: "1,000 per sign, max 48,000 (carried)" },
        { key: "Bonus X",            val: "Max 10× (carried)" },
        { key: "Lit side spinner",   val: "2,000 a spin, one rip" },
      ],
      rules: [
        "Bonus and multiplier carry over; a maxed 48,000 drops back to 36,000 on the next ball.",
        "On Fast settings the value light speeds up as the zodiac nears completion.",
        "Specials score 100,000 or nothing in competition play; extra balls are void.",
        "Rules from The Pinball Primer; settings vary by machine.",
      ],
      benchmarks: [
        { score: "4,000 spinner + high-X bonus", label: "Great game" },
        { score: "Locked 3,000+ spinner, ripped often", label: "Good game" },
        { score: "Half the zodiac + 3×", label: "Baseline" },
      ],
      resources: [
        { name: "Rules (The Pinball Primer)", url: "https://pinballprimer.github.io/stargazer_GrZY2.html", icon: "📖" },
        { name: "IPDB Entry",                url: "https://www.ipdb.org/machine.cgi?id=2346", icon: "🎯" },
        { name: "Pinside Game Page",         url: "https://pinside.com/pinball/machine/star-gazer", icon: "🕹️" },
      ],
    },

    strategy: {
      skillShot: "None.",
      multiball: [],
      goal: "<strong>Lock a high top-spinner value and rip it until the bumpers finish the drops by accident.</strong> Bonus and X carry over, so zodiac signs and side-bank clears add up across the game.",
      phases: [
        { num: "Phase 1", title: "Lock", body: "Hit one upper drop target when the light is on 3,000+." },
        { num: "Phase 2", title: "Rip", body: "Top spinner only; re-roll with the upper drops if the value is low." },
        { num: "Phase 3", title: "Bonus", body: "Star rollovers and zodiac targets; side banks when nearly done." },
      ],
      safeShots: [
        { name: "Left spinner lane", desc: "A hard shot through it reaches the upper drops." },
      ],
      avoidShots: [
        { name: "Full side banks from scratch", desc: "Many targets for one multiplier step." },
      ],
      tips: [
        { head: "Re-roll", body: "A backhand from the left flipper can finish the upper drops, but a bumper bounce may knock one down again and re-lock the same value." },
        { head: "Lit rips", body: "Lit side spinners unlight about a second after spinning — make the rip count." },
      ],
      mistakes: [
        "Ripping the top spinner before a value is locked (200 a spin).",
        "Locking a low value and not re-rolling.",
      ],
    },

    hotspots: [
      { x: 31,   y: 24,   type: "key",   label: "U",  name: "Upper Drop Targets", body: "Lock / re-roll the top spinner value." },
      { x: 30,   y: 40,   type: "info",  label: "V",  name: "Value Lights", body: "Spinner / drop value pairs." },
      { x: 15,   y: 23,   type: "key",   label: "TS", name: "Top Spinner", body: "Up to 4,000 a spin when locked." },
      { x: 10,   y: 37.5, type: "key",   label: "LS", name: "Left Spinner", body: "2,000 rip when lit; route to the upper drops." },
      { x: 77,   y: 43,   type: "info",  label: "RS", name: "Right Spinner", body: "2,000 rip when lit." },
      { x: 69,   y: 36,   type: "info",  label: "R",  name: "Right Drop Bank", body: "Bonus X; special when lit." },
      { x: 8,    y: 52,   type: "info",  label: "L",  name: "Left Drop Bank", body: "Bonus X; centre target extra ball." },
      { x: 78,   y: 22,   type: "info",  label: "Z",  name: "Zodiac Targets", body: "1,000 bonus each." },
      { x: 77,   y: 59,   type: "info",  label: "Z",  name: "Zodiac Targets (2)", body: "Below the right spinner." },
      { x: 22,   y: 86,   type: "safe",  label: "★",  name: "Left Star Rollover", body: "Spot a sign or light the right spinner." },
      { x: 68,   y: 86,   type: "safe",  label: "★",  name: "Right Star Rollover", body: "Spot a sign or light the left spinner." },
      { x: 5,    y: 76,   type: "avoid", label: "!",  name: "Left Outlane", body: "5,000; special when lit." },
      { x: 85,   y: 76,   type: "avoid", label: "!",  name: "Right Outlane", body: "5,000; special when lit." },
    ],
  };
