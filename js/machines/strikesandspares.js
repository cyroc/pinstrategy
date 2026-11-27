  /* ─── STRIKES AND SPARES (BALLY 1978) ────────────────────── */
MACHINES['strikesandspares'] = {
    name: "Strikes and Spares",  sub: "1978 · Bally · Bally -35 (solid state)",
    tagline: "Top B lane lights a 1,000-a-spin spinner for the ball · Strike value up to 30,000 that carries over · A-B-C lanes for 2×, 3×, 5× bonus · ten pin rollovers and SPARE targets",
    image: "images/strikes-and-spares.webp",
    difficulty: "Medium", diffClass: "diff-medium", era: "SS",

    /* ── QUICK GUIDE (30–90 s read) ───────────────────────────── */
    quick: {
      goal: "<strong>Light the spinner, then rip it all ball.</strong> The center top lane (<strong>B</strong>) lights the left <strong>spinner</strong> at 1,000 a spin for the rest of the ball and can score the <strong>Strike value</strong> (up to 30,000, kept between balls). Use the top lanes for bonus X; ignore most of the rest.",
      steps: [
        { title: "Plunge and spinner",
          body: "Plunge to the <strong>B lane</strong>: it lights the spinner (10 a spin until then) and, when the white light above it is on, scores and raises the Strike value. Then shoot the lit <strong>spinner</strong> from the right flipper again and again: it sends the ball back to the top lanes." },
        { title: "Strike value",
          body: "Scored and raised by the lit B lane, the <strong>upper right saucer</strong> (also 3 bonus advances) or clearing all ten pin rollovers: 5,000, 10,000, 15,000, 20,000, 30,000, then a special (50,000 in competition), then 30,000 each time. It carries over between balls. Take the saucer from the left flipper when the Strike value is high, unless the lit spinner is spinning well." },
        { title: "Bonus X",
          body: "Completing <strong>A-B-C</strong> gives 2× (and lights the center bumper for 1,000), then 3×, then 5×, all on the same ball; the 4th set is 5,000 and later sets are specials. Bonus maxes at 29,000 × 5. The <strong>SPARE</strong> targets light an extra ball at the inlanes the first time (only 20,000 in competition), so skip them in competition." },
      ],
      shots: [
        { name: "Lit spinner", why: "1,000 a spin; back to the top lanes." },
        { name: "B top lane", why: "Lights the spinner; Strike value." },
        { name: "Upper right saucer", why: "Strike value; 3 bonus advances." },
      ],
      avoid: [
        "Shooting the pin rollovers in the middle: risky, only 1,000 each.",
        "The lower left standup: 500 and nothing else.",
      ],
      target: "Milestones (estimates): spinner lit every ball = baseline. Strike value at 30,000 and 5× bonus = good. The Strike special plus long lit-spinner runs = great.",
    },

    info: {
      stats: [
        { label: "Manufacturer", value: "Bally" },
        { label: "Year",         value: "1978 (June)" },
        { label: "Design",       value: "Gary Gayton" },
        { label: "Art",          value: "Kevin O'Connor" },
        { label: "Platform",     value: "Bally -35 (solid state)" },
        { label: "Production",   value: "About 12,800" },
      ],
      theme: "Ten-pin bowling: pins, strikes, spares and a bowling-alley score sheet.",
      features: [
        { name: "A-B-C top lanes", desc: "500 and a bonus advance each. The B lane always lights the spinner and scores the Strike when its white light is lit (always lit, or alternating, by setting). Sets: 2× and center bumper, 3×, 5×, 5,000, then specials (same ball; bonus X resets each ball by default)." },
        { name: "Strike value", desc: "1,000 until lit (5,000 by setting), then 5,000, 10,000, 15,000, 20,000, 30,000, special, then 30,000. Scored at the lit B lane, the upper right saucer, or by clearing all ten pins. Kept between balls." },
        { name: "Spinner", desc: "10 a spin, or 1,000 a spin for the rest of the ball once the B lane is made." },
        { name: "Pin rollovers", desc: "Ten star rollovers laid out like pins: lit 1,000 (then unlit), unlit 100. Clearing all ten scores the Strike value. Settings can tie the 1&3, 2&5 and 8&9 pins together." },
        { name: "SPARE targets", desc: "Five on the right: 500 and a bonus advance. All five (in one ball): extra ball alternating at the inlanes, then a special at the outlanes, then a special. Lost at the end of the ball." },
        { name: "Bumpers", desc: "Side bumpers 100; the center bumper 100, or 1,000 once A-B-C is completed this ball." },
      ],
      scoring: [
        { key: "Strike value",     val: "5,000 → 30,000" },
        { key: "Lit spinner",      val: "1,000 a spin" },
        { key: "Max bonus",        val: "29,000 × 5 = 145,000" },
        { key: "Special / extra ball (competition)", val: "50,000 / 20,000" },
        { key: "Lit pin rollover", val: "1,000" },
      ],
      rules: [
        "Bonus advances: top lanes, SPARE targets and inlanes 1 each; upper right saucer 3. No mid-ball bonus collect.",
        "The game allows only one extra ball per ball in play; extra ball awards beyond that score points.",
        "Bonus X can be set to carry over between balls (default: it resets).",
      ],
      benchmarks: [
        { score: "Strike special + long lit-spinner runs (estimate)", label: "Great game" },
        { score: "Strike value 30,000 + 5× bonus",                    label: "Good game" },
        { score: "Spinner lit every ball",                            label: "Baseline" },
      ],
      resources: [
        { name: "Strategy Guide (Pinball Primer)", url: "https://pinballprimer.github.io/strikesnspares_GrleW.html", icon: "📖" },
        { name: "Pinside Game Page",               url: "https://pinside.com/pinball/machine/strikes-and-spares", icon: "🕹️" },
      ],
    },

    strategy: {
      skillShot: "Plunge into the center B lane: it lights the spinner for the ball and scores the Strike when its white light is lit.",
      multiball: [],
      goal: "<strong>B lane → lit spinner all ball; Strike value at the B lane and saucer; A-B-C for bonus X.</strong>",
      phases: [
        { num: "Phase 1", title: "Light", body: "B lane on the plunge." },
        { num: "Phase 2", title: "Spin", body: "Lit spinner from the right flipper; top lanes for A-B-C and Strikes." },
        { num: "Phase 3", title: "Strikes", body: "Upper right saucer from the left flipper when the Strike value is high." },
      ],
      safeShots: [
        { name: "Lit spinner", desc: "Returns the ball to the top lanes." },
      ],
      avoidShots: [
        { name: "Pin rollovers", desc: "Low value, risky." },
      ],
      tips: [
        { head: "Lane priority", body: "If the spinner isn't lit yet, or the B lane's Strike light is on, B beats the other lanes." },
      ],
      mistakes: [
        "Draining with the spinner never lit on a ball.",
      ],
    },

    hotspots: [
      { x: 45,  y: 16,  type: "key",   label: "B",  name: "A-B-C Top Lanes (B in the center)", body: "B lights the spinner; Strike." },
      { x: 15,  y: 39,  type: "key",   label: "SP", name: "Left Spinner", body: "1,000 a spin when lit." },
      { x: 73,  y: 21,  type: "key",   label: "S",  name: "Upper Right Saucer", body: "Strike value; 3 bonus advances." },
      { x: 45,  y: 50,  type: "info",  label: "P",  name: "Pin Rollovers", body: "All ten score the Strike." },
      { x: 79,  y: 55,  type: "info",  label: "SR", name: "SPARE Targets", body: "Extra ball at the inlanes." },
      { x: 45,  y: 34,  type: "info",  label: "CB", name: "Center Bumper", body: "1,000 after A-B-C." },
      { x: 44,  y: 64,  type: "info",  label: "SV", name: "Strike Value Ladder", body: "5,000 → 30,000 → special." },
      { x: 13,  y: 82,  type: "info",  label: "IL", name: "Left Inlane", body: "Extra ball when lit." },
      { x: 78,  y: 82,  type: "info",  label: "IL", name: "Right Inlane", body: "Extra ball when lit." },
      { x: 4.5, y: 82,  type: "avoid", label: "!",  name: "Left Outlane", body: "Special when lit." },
      { x: 84.5, y: 82,  type: "avoid", label: "!",  name: "Right Outlane", body: "Special when lit." },
    ],
  };
