  /* ─── VIKING ─────────────────────────────────────────────── */
MACHINES['viking'] = {
    name: "Viking",  sub: "1980 · Bally · Standard body",
    tagline: "Bonus game: 5× from the inline drops · 50K standup · collect bonus at the top saucer · 20K/40K super bonus",
    image: "images/viking.webp",
    difficulty: "Easy-Medium", diffClass: "diff-medium", era: "SS",

    /* ── QUICK GUIDE (30–90 s read) ───────────────────────────── */
    quick: {
      goal: "Two scoring engines: clear the <strong>left inline drop targets</strong> (5× bonus, then the <strong>standup behind them</strong> pays ~50K per hit for the rest of the ball), and <strong>collect bonus</strong> at the top-left saucer — up to 59K × 5 = 295K per collect.",
      steps: [
        { title: "Inline drops (right flipper)",
          body: "Knock down the <strong>left inline drop targets</strong>: they raise the bonus multiplier to 5× and add bonus. When all are down, the <strong>standup behind them</strong> stays lit (usually 50K per hit) and the outlanes light for 25K." },
        { title: "Collect bonus (left flipper)",
          body: "Shoot the <strong>right orbit</strong> to light the top-left saucer for Collect Bonus; a strong orbit shot carries straight into it. Relight with another right orbit." },
        { title: "Build the base bonus",
          body: "The <strong>spinner</strong> adds a bonus every 10 spins and its value rises 10 → 100 → 1,000 per spin if you rip it again quickly. Reaching <strong>20K</strong> (then <strong>40K</strong>) base bonus is held for all later balls." },
      ],
      shots: [
        { name: "Left inline drops + standup", why: "5× bonus; standup 50K per hit." },
        { name: "Right orbit → top-left saucer", why: "Collect bonus (up to 295K)." },
        { name: "Spinner", why: "Bonus advances; 1,000 per spin at max." },
      ],
      avoid: [
        "The right 1-2-3 drop bank (2K–10K, ×10 in sequence) is riskier than it's worth.",
        "Balls dropping straight through the spinner or off the top bumpers can go down the middle.",
      ],
      target: "Milestones: 5× and 20K held with a couple of collects = good game. Several 295K collects = great.",
    },

    info: {
      stats: [
        { label: "Manufacturer", value: "Bally" },
        { label: "Year",         value: "1980 (July; designed Dec 1979)" },
        { label: "Design",       value: "Jim Patla" },
        { label: "Art",          value: "Kevin O'Connor" },
        { label: "Software",     value: "Rehman Merchant (per Pinside)" },
        { label: "Production",   value: "≈2,600 (model 1198)" },
        { label: "Display",      value: "Numeric (Bally -35 era)" },
        { label: "Max bonus",    value: "59K × 5 = 295,000" },
      ],
      theme: "Norse raiders: longships, runes and warrior art on a classic Bally solid-state with a spinner, two drop banks and a bonus-collect saucer.",
      features: [
        { name: "Left inline drop targets", desc: "Bonus multiplier to 5× plus bonus; completing them lights the standup, the Extra Ball rollover and the 25K outlanes." },
        { name: "Standup behind the inline drops", desc: "Special — usually set to 50K per shot — for the rest of the ball once the drops are down." },
        { name: "Top-left saucer", desc: "Collect Bonus when lit (by the right orbit); otherwise kicks toward the left bumper." },
        { name: "Right orbit", desc: "Lights collect; a strong shot runs over the top into the saucer." },
        { name: "Spinner", desc: "10 → 100 → 1,000 per spin on a timer; bonus every 10 spins." },
        { name: "Right 1-2-3 drops", desc: "2K → 10K per set; ×10 when hit in 1-2-3 order (20K–100K)." },
        { name: "Top saucer / A-B lanes", desc: "Plunge targets (skill shot = centre saucer, small award)." },
        { name: "Outlane bounce-back gates", desc: "One-way gates at the bottom of each outlane: a well-timed nudge can sometimes bounce a draining ball back to the inlane. Inconsistent; don't count on it." },
      ],
      scoring: [
        { key: "Collect bonus",         val: "Base (max 59K) × multiplier (max 5×)" },
        { key: "Standup (drops down)",  val: "Usually 50K per hit" },
        { key: "Super bonus",           val: "20K and 40K base held for later balls" },
        { key: "Spinner",               val: "10 / 100 / 1,000 per spin" },
        { key: "1-2-3 drops",           val: "2K–10K; ×10 in sequence" },
        { key: "Outlanes (drops down)", val: "25K" },
      ],
      rules: [
        "The standup value is an operator setting (usually 50K, could be a Special).",
        "Collecting bonus requires relighting the saucer with the right orbit each time.",
        "Extra ball (rollover after the inline drops) is void under comp settings.",
        "Rules from silverballmania's Viking page; settings vary by machine.",
      ],
      benchmarks: [
        { score: "Several 295K collects", label: "Great game" },
        { score: "5× + 20K held + collects", label: "Good game" },
        { score: "5× bonus",              label: "Baseline" },
      ],
      resources: [
        { name: "Rules (silverballmania)", url: "https://rules.silverballmania.com/rules/G57kN-MQ71K", icon: "📖" },
        { name: "IPDB Entry",              url: "https://www.ipdb.org/machine.cgi?id=2737", icon: "🎯" },
        { name: "Pinside Game Page",       url: "https://pinside.com/pinball/machine/viking", icon: "🕹️" },
      ],
    },

    strategy: {
      skillShot: "Plunge into the centre saucer at the top — a small award, not a big deal.",
      multiball: [],
      goal: "<strong>Inline drops to 5× and the 50K standup, then bonus collects at the top-left saucer via the right orbit.</strong> Build base bonus to the 20K/40K held levels with the spinner.",
      phases: [
        { num: "Phase 1", title: "5×", body: "Right flipper at the inline drops; then the standup behind them." },
        { num: "Phase 2", title: "Collect", body: "Left flipper: right orbit to light and collect the saucer." },
        { num: "Phase 3", title: "Bonus base", body: "Spinner rips to reach 20K/40K held bonus." },
      ],
      safeShots: [
        { name: "Right orbit from the left flipper", desc: "Lights and often collects the bonus in one shot." },
      ],
      avoidShots: [
        { name: "Right 1-2-3 drop bank", desc: "Riskier than the left drops or the orbit for modest points." },
      ],
      tips: [
        { head: "Left bumper", body: "A ball near the left bumper can be kicked into the collect saucer." },
        { head: "Spinner timing", body: "Rip it again soon — the raised value drops back if you wait." },
      ],
      mistakes: [
        "Collecting bonus before the multiplier is at 5×.",
        "Forgetting the standup once the inline drops are down.",
      ],
    },

    hotspots: [
      { x: 18.5, y: 29,   type: "key",   label: "V", name: "Left Inline Drops", body: "Bonus X to 5×; light the standup, EB rollover and 25K outlanes." },
      { x: 21,   y: 17.5, type: "key",   label: "S", name: "Standup behind the Drops", body: "Usually 50K per hit once the drops are down." },
      { x: 26,   y: 15,   type: "key",   label: "C", name: "Top-Left Saucer (Collect)", body: "Collect bonus when lit." },
      { x: 75.5, y: 27,   type: "key",   label: "O", name: "Right Orbit", body: "Lights collect; strong shots reach the saucer." },
      { x: 47.5, y: 26,   type: "safe",  label: "~", name: "Spinner", body: "10 → 100 → 1,000 per spin; bonus advances." },
      { x: 67,   y: 29.5, type: "info",  label: "3", name: "Right 1-2-3 Drops", body: "2K–10K; ×10 in sequence." },
      { x: 48,   y: 13,   type: "info",  label: "A", name: "Top Saucer / A-B Lanes", body: "Plunge targets; skill shot = centre saucer." },
      { x: 40,   y: 18.5, type: "info",  label: "B", name: "Pop Bumpers", body: "Exits can go straight down — be ready." },
      { x: 9,    y: 66,   type: "avoid", label: "!", name: "Left Outlane", body: "25K when lit; bounce-back gate — a timed nudge may save it." },
      { x: 85,   y: 67,   type: "avoid", label: "!", name: "Right Outlane", body: "25K when lit; bounce-back gate — a timed nudge may save it." },
    ],
  };
