  /* ─── DR. DUDE ──────────────────────────────────────────── */
MACHINES['drdude'] = {
    name: "Dr. Dude", sub: "1990 · Williams · Standard",
    tagline: "Groovy vintage · Bag of Tricks multiplier + Reflex 1-2-3 loop",
    image: "images/dr-dude.png",
    difficulty: "Easy–Medium", diffClass: "diff-medium", era: "DMD",

    info: {
      stats: [
        { label: "Manufacturer", value: "Williams Electronics" },
        { label: "Year",         value: "1990" },
        { label: "Designer",     value: "Dennis Nordman" },
        { label: "Programmer",   value: "Bill Pfutzenreuter" },
        { label: "Production",   value: "~4,000 units" },
        { label: "Platform",     value: "WPC" },
      ],
      theme: "A groovy 1990s theme with Dr. Dude as the smooth-talking host. Collect the 'Elements of Coolness' to become totally cool and activate Multiball. Features a spinning Molecular Mixmaster toy and a Dude-O-Meter tracking progress toward wizard mode.",
      features: [
        { name: "Bag of Tricks (1)", desc: "Right saucer. Lit every ball start. Best award is <strong>'Bonus Booster at Maximum'</strong> — instantly sets Bonus Multiplier to 6×, the maximum. This is the first priority shot every ball." },
        { name: "Excellent Ray Saucer (2)", desc: "Left saucer. Collects Elements of Coolness (toward Multiball). Scores Saucer Award." },
        { name: "Drop Targets Bank (9)", desc: "3 targets. Completing the bank = +2× Bonus Multiplier. 2 completions from base (1×) = 4× — nearly max. Combined with Bag of Tricks, reach 6× quickly." },
        { name: "Reflex Targets Bank (5)", desc: "3 standup targets. Completing them = 'Reflex Complete' → Excellent Ray Saucer (2) lit → then Gift of Gab (7) → then Magnetic Personality (1). This loop collects Elements and scores 1M–2M per cycle." },
        { name: "Gift of Gab (7)", desc: "Upper feature shot. Part of the Reflex 1-2-3 loop. Also collects specific Elements of Coolness." },
        { name: "Molecular Mixmaster Spinner (10)", desc: "Centre spinner. Scores 1M when 'Molecular Million' is lit (after Drop Target completions). Best pure shot-for-shot value in the game." },
        { name: "Magnetic Personality (1)", desc: "Right magnet/target. Part of Reflex loop and Element collection. Also used for Dude-O-Meter advancement." },
        { name: "Elements of Coolness + Multiball", desc: "Collect elements to fill the 'Elements' meter → Multiball (3 balls). All scoring doubled during and immediately after Multiball. Dude-O-Meter: 5 Multiballs = Super Dude → Gazillion Point Shot (500K per hit at spinner)." },
      ],
      scoring: [
        { key: "Skill Shot (Bag of Tricks)",      val: "6× instant + bonus award" },
        { key: "Drop Target completion",          val: "+2× Bonus Multiplier" },
        { key: "Molecular Million (spinner)",     val: "1M per hit when lit" },
        { key: "Reflex 1-2-3 loop (per run)",     val: "1M–2M per cycle" },
        { key: "Bonus Multiplier (max)",          val: "6× (Drop Targets + Bag of Tricks)" },
        { key: "Post-Multiball scoring",          val: "All scoring doubled" },
      ],
      rules: [
        "<strong>Bag of Tricks</strong> is lit at every ball start. First shot = right saucer. Best award: 'Bonus Booster at Maximum' (instant 6×).",
        "<strong>Drop Target bank</strong> completion = +2× Bonus Multiplier each time. Two completions from base = 4×; combined with Bag of Tricks 6× option = max. Bonus Multiplier resets each ball.",
        "<strong>Molecular Million</strong> lights at spinner (10) after Drop Target completions. 1M per spinner pass when lit. Very efficient scoring.",
        "<strong>Reflex 1-2-3 loop:</strong> Complete Reflex Bank (5) → Excellent Ray Saucer (2) → Gift of Gab (7) → Magnetic Personality (1) → collects Elements + 1M–2M per cycle.",
        "<strong>All scoring doubled</strong> immediately following a Multiball session.",
      ],
      benchmarks: [
        { score: "50M+",  label: "Excellent — multiple Multiballs + 6× multiplier" },
        { score: "15M+",  label: "Good — Multiball achieved with some multiplier" },
        { score: "< 5M",  label: "Bag of Tricks missed, multiplier not built" },
      ],
      resources: [
        { name: "IPDB Entry",       url: "https://www.ipdb.org/machine.cgi?id=695",                     icon: "🎯" },
        { name: "Pinside Game Page",url: "https://pinside.com/pinball/machine/dr-dude",                  icon: "🕹️" },
        { name: "Zen Studios Guide",url: "https://zensite.wpenginepowered.com/wp-content/uploads/2024/04/WP-Dr-Dude-Pinball-Guide-by-ShoryukenToTheChin.pdf", icon: "📖" },
      ],
    },

    strategy: {
      skillShot: "Shoot the <strong>Bag of Tricks (1)</strong> saucer immediately on ball launch — it's lit at the start of every ball. Cycle through awards with flipper button; the best award is <strong>'Bonus Booster at Maximum'</strong> which instantly sets the Bonus Multiplier to 6×.",
      multiball: "<strong>Collect Elements of Coolness</strong> via the Reflex 1-2-3 loop (Reflex Bank → Saucer → Gift of Gab → Magnetic Personality). Fill all Elements → 3-Ball Multiball. All scoring is doubled immediately after Multiball ends. 5 total Multiballs = Super Dude → 500K per spinner hit.",
      goal: "Bag of Tricks on every ball start for possible instant 6× multiplier. Complete Drop Target Bank twice for +4× (or get 6× from Bag of Tricks). Run Reflex 1-2-3 loop for 1M–2M per cycle + Element collection toward Multiball. When Molecular Million is lit at spinner: spam it for 1M per pass.",
      phases: [
        { num: "Phase 1 · Every Ball", title: "Bag of Tricks → Multiplier", body: "Bag of Tricks saucer first (6× if 'Bonus Booster at Maximum'). Drop Target Bank × 2 completions for +4× multiplier. Light Molecular Million → spinner for 1M per pass. Build toward Element collection." },
        { num: "Phase 2 · Reflex Loop", title: "Elements → Multiball", body: "Reflex Bank (5) → Excellent Ray Saucer (2) → Gift of Gab (7) → Magnetic Personality (1) = 1 cycle = Elements collected + 1M–2M. Repeat until Multiball activates." },
        { num: "Phase 3 · Multiball + Post-Multiball", title: "Doubled Scoring Window", body: "During Multiball: all shots score + Elements repopulate. Immediately post-Multiball: all scoring doubled — spam Molecular Million spinner and Drop Targets for doubled value." },
      ],
      safeShots: [
        { name: "Drop Target Bank (9)", desc: "3 targets. Easy +2× Multiplier per completion. Light Molecular Million." },
        { name: "Reflex Bank (5)", desc: "3 standups. First step in the Elements loop." },
        { name: "Molecular Mixmaster Spinner (10)", desc: "1M per pass when 'Molecular Million' is lit. Very high value when active." },
      ],
      avoidShots: [
        { name: "Excellent Ray Saucer (2) without Reflex Complete", desc: "Only shoot when lit by Reflex Bank completion for maximum efficiency." },
      ],
      tips: [
        { head: "Bag of Tricks first shot, every ball", body: "'Bonus Booster at Maximum' is the most valuable award — instant 6× Bonus Multiplier. Hit this saucer before anything else every ball." },
        { head: "Molecular Million + 6× = pure scoring", body: "With the spinner lit for 1M per pass at 6× Bonus Multiplier, each spinner rip is effectively scoring toward a massive end-of-ball bonus. Keep spinner going." },
      ],
      mistakes: [
        "Missing Bag of Tricks on ball start — foregoing the 6× instant multiplier opportunity.",
        "Not completing Drop Target Bank twice — leaving multiplier at 1× or 2× when 4× is easily achievable.",
        "Running Reflex loop out of order — Reflex Bank must be completed before Saucer, Saucer before Gift of Gab, etc.",
      ],
    },

    hotspots: [
      { x:48, y:18, type:"key",   label:"BT", name:"Bag of Tricks Saucer",      body:"<strong>First shot every ball.</strong> 'Bonus Booster at Maximum' = instant 6× Bonus Multiplier. Always shoot this before anything else." },
      { x:18, y:30, type:"key",   label:"SP", name:"Molecular Mixmaster (Spinner)", body:"<strong>1M per spin when 'Molecular Million' is lit.</strong> With 6× multiplier each rip scores toward massive bonus. Light via Reflex sequence, then spin repeatedly." },
      { x:72, y:30, type:"safe",  label:"RR", name:"Right Ramp",                body:"Advances Elements (Earth, Air, Water, Fire) and ramp bonus. Part of Molecular Reflex loop. Reliable from left flipper." },
      { x:50, y:40, type:"key",   label:"DT", name:"Drop Target Bank",          body:"<strong>Each completion = +2× Bonus Multiplier</strong> (max 6× with 3 completions). Wide bank, hittable from both flippers." },
      { x:28, y:42, type:"safe",  label:"RF", name:"Reflex Bank (5)",           body:"3 standups. Completing lights Excellent Ray Saucer for next step in Elements loop. First step in Molecular Million activation." },
      { x:68, y:42, type:"info",  label:"GG", name:"Gift of Gab Target",        body:"Completes Reflex → Saucer → Gift of Gab → Spinner loop. Hit after Reflex Bank and Excellent Ray saucer. Lights Spinner for 1M/spin." },
      { x:7,  y:82, type:"avoid", label:"!",  name:"Left Outlane",              body:"Open outlane. Spinner shots hitting left slingshot can deflect left — control power." },
      { x:88, y:82, type:"avoid", label:"!",  name:"Right Outlane",             body:"Open outlane. Right Ramp misses drain right — full-power controlled shots only." },
    ],
  };
