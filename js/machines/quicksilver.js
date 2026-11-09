  /* ─── QUICKSILVER ────────────────────────────────────────── */
MACHINES['quicksilver'] = {
    name: "Quicksilver",  sub: "1980 · Stern Electronics · M-200",
    tagline: "Spell Q-U-I-C-K-S-I-L-V-E-R for a 75,000 bonus held all game · right drops: bonus X carried all game · left saucer: drop targets up to 20,000 each",
    image: "images/quicksilver.webp",
    difficulty: "Medium", diffClass: "diff-medium", era: "SS",

    /* ── QUICK GUIDE (30–90 s read) ───────────────────────────── */
    quick: {
      goal: "The bonus is the <strong>sum</strong> of the lit values, so each new <strong>Quicksilver letter</strong> is worth more: all 11 = <strong>75,000</strong>, held for the rest of the game. Multiply it with the <strong>right drop targets</strong> (bonus X is kept all game, up to 5×).",
      steps: [
        { title: "Right 3-bank early",
          body: "Each clear advances the <strong>bonus multiplier</strong>, which carries over for the whole game — shoot it from the first ball. After 5×, a clear scores a special." },
        { title: "Letters",
          body: "Q-U-I-C top lanes, K lower right, S-I-L left of the bumpers, V-E-R right of them (bumper rebounds often hit these). Clearing the <strong>left 4-bank</strong> spots a letter. Letter 2 makes the bonus 3,000, letter 3 makes 6,000 … letter 11 adds 20,000 for <strong>75,000</strong>." },
        { title: "Left saucer → big drops",
          body: "The <strong>left saucer</strong> (5,000) raises each <strong>left drop target</strong> to 5,000, then 10,000, 15,000 and 20,000. Both flippers can hit the angled bank; a miss can come back fast, especially from the right flipper." },
      ],
      shots: [
        { name: "Right 3-bank", why: "Bonus X carried all game." },
        { name: "Left saucer + left 4-bank", why: "Drops up to 20,000 each; spots a letter." },
        { name: "Lit spinner after an inlane", why: "2,000 a spin for one rip." },
      ],
      avoid: [
        "Shooting a lit spinner that is still swinging — you may get only one lit spin.",
        "Missing the angled left bank from the right flipper: the rebound is fast.",
      ],
      target: "Milestones: 75,000 bonus held and 3× = good game. 5× with the held 75,000 (375,000 a ball) = great.",
    },

    info: {
      stats: [
        { label: "Manufacturer", value: "Stern Electronics" },
        { label: "Year",         value: "1980 (June)" },
        { label: "Design",       value: "Joe Joos Jr." },
        { label: "Art",          value: "Doug Watson" },
        { label: "Software",     value: "Bill Pfutzenreuter" },
        { label: "Production",   value: "1,201" },
        { label: "System",       value: "Stern M-200" },
        { label: "Max bonus",    value: "75,000 × 5" },
      ],
      theme: "Quicksilver: flowing, liquid-drop figures in yellow and red on a green playfield.",
      features: [
        { name: "Quicksilver letters (11)", desc: "Each advances the bonus wheel; the bonus is the sum of lit values (1K + 2K + …). The 11th adds 20,000 for 75,000, held for the rest of the game." },
        { name: "Right 3-bank", desc: "500 per target; clear = 25,000 + bonus multiplier (carried over all game); after 5×, a special." },
        { name: "Left 4-bank", desc: "1,000 per target, raised by the left saucer to 5,000 / 10,000 / 15,000 / 20,000. Clear spots a letter. Rebounds feed the left orbit / spinner." },
        { name: "Left saucer", desc: "5,000 and raises the left drop target value one step." },
        { name: "Spinners", desc: "200 a spin; an inlane lights the opposite spinner for one rip at 2,000 a spin." },
        { name: "Pop bumpers", desc: "1,000 each." },
        { name: "Extra ball", desc: "With Q-U-I-C-K lit, one letter target flashes at random for an extra ball." },
        { name: "Specials", desc: "All 11 letters on one ball light specials at the small lane above-right of the bumpers and the outlanes." },
      ],
      scoring: [
        { key: "Bonus (11 letters)", val: "75,000 (held all game)" },
        { key: "Left drop target",   val: "1,000 → 20,000 each" },
        { key: "Lit spinner",        val: "2,000 a spin (one rip)" },
        { key: "Left saucer",        val: "5,000" },
        { key: "Right bank clear",   val: "25,000 + bonus X" },
        { key: "Specials",           val: "100,000 if set to points" },
      ],
      rules: [
        "Bonus X carries over for the whole game.",
        "Specials: free game, extra ball or 100,000; limit one per game or one per ball.",
        "Extra balls are void with comp settings.",
        "Rules from The Pinball Primer; settings vary by machine.",
      ],
      benchmarks: [
        { score: "75,000 held at 5×", label: "Great game" },
        { score: "75,000 held + 3×", label: "Good game" },
        { score: "6–8 letters + 2×", label: "Baseline" },
      ],
      resources: [
        { name: "Rules (The Pinball Primer)", url: "https://pinballprimer.github.io/quicksilver_GRBZl.html", icon: "📖" },
        { name: "IPDB Entry",                url: "https://www.ipdb.org/machine.cgi?id=1895", icon: "🎯" },
        { name: "Pinside Game Page",         url: "https://pinside.com/pinball/machine/quicksilver", icon: "🕹️" },
      ],
    },

    strategy: {
      skillShot: "None. The plunge feeds the Q-U-I-C top lanes.",
      multiball: [],
      goal: "<strong>Bonus X at the right bank from ball 1, then all 11 letters for the held 75,000.</strong> Use the left saucer and 4-bank for big drop-target points and letter spots.",
      phases: [
        { num: "Phase 1", title: "Multiplier", body: "Right 3-bank clears — they last all game." },
        { num: "Phase 2", title: "Letters", body: "Spell Quicksilver; the left 4-bank spots letters." },
        { num: "Phase 3", title: "Points", body: "Left saucer to raise drop values; lit spinner rips from the inlanes." },
      ],
      safeShots: [
        { name: "Left 4-bank", desc: "Rebounds feed the left orbit/spinner." },
      ],
      avoidShots: [
        { name: "Still-swinging lit spinner", desc: "Wait for it to stop before shooting the lit rip." },
      ],
      tips: [
        { head: "QUIC last", body: "Bumper rebounds pick up S-I-L and V-E-R; the top lanes usually come last." },
        { head: "Per ball", body: "Each ball pays the bonus × multiplier — 75,000 held means every drain is worth a lot." },
      ],
      mistakes: [
        "Ignoring the right bank on ball 1, when the multiplier would pay on every later ball.",
        "Wasting a one-rip 2,000 spinner on a weak shot.",
      ],
    },

    hotspots: [
      { x: 85,   y: 45,   type: "key",   label: "X",  name: "Right 3-Bank", body: "Bonus X, carried all game." },
      { x: 40,   y: 54,   type: "key",   label: "D",  name: "Left 4-Bank", body: "Up to 20,000 each; spots a letter." },
      { x: 9,    y: 53,   type: "key",   label: "S",  name: "Left Saucer", body: "5,000; raises drop values." },
      { x: 42,   y: 12,   type: "info",  label: "Q",  name: "Q-U-I-C Top Lanes", body: "Letters." },
      { x: 21,   y: 30,   type: "info",  label: "SIL", name: "S-I-L Targets", body: "Letters." },
      { x: 66,   y: 32,   type: "info",  label: "VER", name: "V-E-R Targets", body: "Letters." },
      { x: 77,   y: 61,   type: "info",  label: "K",  name: "K Target", body: "Letter." },
      { x: 12,   y: 43,   type: "info",  label: "LS", name: "Left Spinner", body: "2,000 a spin for one rip when lit." },
      { x: 77,   y: 34,   type: "info",  label: "RS", name: "Right Spinner", body: "2,000 a spin for one rip when lit." },
      { x: 72,   y: 20,   type: "info",  label: "SP", name: "Special Lane", body: "Special after all 11 letters." },
      { x: 5,    y: 80,   type: "avoid", label: "!",  name: "Left Outlane", body: "Special when lit." },
      { x: 83,   y: 80,   type: "avoid", label: "!",  name: "Right Outlane", body: "Special when lit." },
    ],
  };
