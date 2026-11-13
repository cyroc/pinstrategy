  /* ─── METEOR ─────────────────────────────────────────────── */
MACHINES['meteor'] = {
    name: "Meteor",  sub: "1979 · Stern Electronics · M-200",
    tagline: "Spinner game: knock down 5 of the 6 METEOR targets (leave an E, T or O) for 2,000 a spin, then rip it all day",
    image: "images/meteor.webp",
    difficulty: "Medium", diffClass: "diff-medium", era: "SS",

    /* ── QUICK GUIDE (30–90 s read) ───────────────────────────── */
    quick: {
      goal: "Meteor is a <strong>spinner</strong> game. Each <strong>M-E-T-E-O-R</strong> drop target down adds to the spinner value; <strong>5 of 6 down</strong> (leaving an E, T or O standing) = <strong>2,000 a spin</strong>, the max. Then rip the spinner over and over. Nothing else matters much.",
      steps: [
        { title: "Set up the spinner",
          body: "M and R add <strong>600 a spin</strong> (and score 6,000); E, T, E and O add <strong>200</strong> (2,000 each). Base is 200. Knock down M, R and three of the others: 200 + 1,200 + 600 = <strong>2,000</strong>." },
        { title: "Don't finish the bank",
          body: "Completing all six resets the spinner to 200 (it does advance bonus X). The lit top rollovers, standup and lit inlanes <strong>spot</strong> targets — one can ruin a perfect 5-of-6, so expect to rebuild." },
        { title: "Rip it",
          body: "Shoot the spinner from the left flipper; learn a pass from the right flipper to the left. If the ball comes back while the spinner is still turning, wait so the next shot hits it squarely." },
      ],
      shots: [
        { name: "Spinner", why: "Up to 2,000 a spin." },
        { name: "M and R targets", why: "+600 a spin each." },
        { name: "E, T, E, O targets", why: "+200 a spin each; leave one standing." },
      ],
      avoid: [
        "Completing the METEOR bank while the spinner is high — it drops back to 200.",
        "Relying on the centre post between the flippers — it saves balls, until it doesn't.",
      ],
      target: "Milestones: a 2,000 spinner ripped a few times a ball = good game. Long 2,000 rips every ball = great.",
    },

    info: {
      stats: [
        { label: "Manufacturer", value: "Stern Electronics" },
        { label: "Year",         value: "1979 (September)" },
        { label: "Design",       value: "Steve Kirk" },
        { label: "Art",          value: "Jorge Obregon, Leslie Kaip" },
        { label: "Software",     value: "Alan McNeil" },
        { label: "Production",   value: "7,939 (+423 Australian kits)" },
        { label: "System",       value: "Stern M-200" },
      ],
      theme: "Inspired by the 1979 film Meteor: an impending cosmic collision, fiery meteors, rockets and deep space.",
      features: [
        { name: "METEOR drop targets (6)", desc: "M and R: 6,000 and +600 a spin. E, T, E, O: 2,000 and +200 a spin. Completing the bank resets the spinner to 200 and advances bonus X (max 7×)." },
        { name: "Spinner", desc: "200 a spin plus the target values: 2,000 with 5 of 6 down (one E, T or O standing)." },
        { name: "Target spots", desc: "Lit top rollovers, the standup and lit inlanes spot a METEOR target; fewer spots as the multiplier rises (setting)." },
        { name: "1-2-3 drop targets", desc: "Each advances its numbered bonus (max 7,000) and scores it. Passive bumpers advance bonus 1 and 3 once they're above 0." },
        { name: "WOW", desc: "At 6×–7× a METEOR target is lit for WOW (rotates on a timer). Also lit at the standup or a numbered bank's centre target when all three bonuses are equal (not 0 or 7,000). In competition: 70,000, 40,000 or nothing." },
        { name: "Star pop bumper", desc: "1,000 a hit in 3-ball play." },
        { name: "Outlanes", desc: "When lit, pay the three bonuses (unmultiplied) before the bonus count." },
        { name: "Upper flipper", desc: "Third flipper at the upper right, below the METEOR bank." },
        { name: "Centre post", desc: "Between the flippers." },
      ],
      scoring: [
        { key: "Spinner (5 of 6)", val: "2,000 a spin" },
        { key: "M / R target",     val: "6,000" },
        { key: "E / T / O target", val: "2,000" },
        { key: "Bonus",            val: "(1 + 2 + 3) × X, max 147,000" },
        { key: "WOW",              val: "70,000 / 40,000 / nothing in competition" },
      ],
      rules: [
        "Bonus X carries over at 5× or less, but resets after reaching 6× or 7×.",
        "Specials can be 130,000, 90,000 or nothing in competition; what lights them is unclear.",
        "Extra balls are void with comp settings.",
        "Rules from The Pinball Primer; settings vary by machine.",
      ],
      benchmarks: [
        { score: "2,000 spinner every ball", label: "Great game" },
        { score: "2,000 spinner on some balls", label: "Good game" },
        { score: "1,000+ spinner", label: "Baseline" },
      ],
      resources: [
        { name: "Rules (The Pinball Primer)", url: "https://pinballprimer.github.io/meteor_G5b38.html", icon: "📖" },
        { name: "IPDB Entry",                url: "https://www.ipdb.org/machine.cgi?id=1580", icon: "🎯" },
        { name: "Pinside Game Page",         url: "https://pinside.com/pinball/machine/meteor", icon: "🕹️" },
      ],
    },

    strategy: {
      skillShot: "None. Lit top rollovers on the plunge spot METEOR targets.",
      multiball: [],
      goal: "<strong>Build the spinner to 2,000 (5 of 6 METEOR targets, keep one E/T/O up) and rip it.</strong> The 1-2-3 bonuses are a sideshow.",
      phases: [
        { num: "Phase 1", title: "M and R", body: "The two big targets first (+600 each)." },
        { num: "Phase 2", title: "Three more", body: "Three of E, T, E, O — leave one standing." },
        { num: "Phase 3", title: "Spin", body: "Spinner from the left flipper; pass from right to left." },
      ],
      safeShots: [
        { name: "Spinner from the left flipper", desc: "The main and best scoring shot." },
      ],
      avoidShots: [
        { name: "The last METEOR target", desc: "Completing the bank resets the spinner." },
      ],
      tips: [
        { head: "Square hits", body: "Wait for the spinner to stop before the next shot so it rips fully." },
        { head: "Spots happen", body: "A lit inlane can spot the last target — be ready to rebuild." },
      ],
      mistakes: [
        "Chasing the 1-2-3 bonuses instead of the spinner.",
        "Clearing the METEOR bank with a 2,000 spinner.",
      ],
    },

    hotspots: [
      { x: 44,   y: 20,   type: "key",   label: "M",  name: "METEOR Drop Targets", body: "Spinner value; leave one E/T/O up." },
      { x: 80,   y: 28,   type: "key",   label: "S",  name: "Spinner", body: "Up to 2,000 a spin." },
      { x: 76,   y: 40,   type: "info",  label: "V",  name: "Spinner Value Lights", body: "200 → 2,000." },
      { x: 57,   y: 34,   type: "info",  label: "UF", name: "Upper Flipper", body: "Third flipper, upper right." },
      { x: 29,   y: 16,   type: "info",  label: "R",  name: "Spot Rollovers", body: "Spot a METEOR target when lit." },
      { x: 35,   y: 37,   type: "info",  label: "★",  name: "Star Pop Bumper", body: "1,000 a hit." },
      { x: 9,    y: 16,   type: "info",  label: "1",  name: "Advance-1 Bumper", body: "Advances bonus 1 when lit." },
      { x: 68,   y: 13,   type: "info",  label: "3",  name: "Advance-3 Bumper", body: "Advances bonus 3 when lit." },
      { x: 15,   y: 37,   type: "info",  label: "D",  name: "Numbered Drop Targets (upper left)", body: "Advance and score a bonus." },
      { x: 12,   y: 56,   type: "info",  label: "D",  name: "Numbered Drop Targets (lower left)", body: "Advance and score a bonus." },
      { x: 81,   y: 57,   type: "info",  label: "D",  name: "Numbered Drop Targets (right)", body: "Advance and score a bonus." },
      { x: 60,   y: 39,   type: "info",  label: "T",  name: "Spot Standup", body: "Spots a METEOR target." },
      { x: 14,   y: 80,   type: "info",  label: "IN", name: "Left Inlane", body: "Spots a target when lit." },
      { x: 78,   y: 80,   type: "info",  label: "IN", name: "Right Inlane", body: "Spots a target when lit." },
      { x: 7,    y: 78,   type: "avoid", label: "!",  name: "Left Outlane", body: "Pays the bonuses when lit." },
      { x: 85,   y: 79,   type: "avoid", label: "!",  name: "Right Outlane", body: "Pays the bonuses when lit." },
    ],
  };
