  /* ─── XENON (BALLY 1980) ─────────────────────────────────── */
MACHINES['xenon'] = {
    name: "Xenon",  sub: "1980 · Bally · Bally -35 (solid state)",
    tagline: "Tube shot worth up to 90,000 · top saucer X's for lock and 2-ball multiball · 1,000-a-spin spinner · X-E-N-O-N bonus to 4×",
    image: "images/xenon.webp",
    difficulty: "Medium", diffClass: "diff-medium", era: "SS",

    /* ── QUICK GUIDE (30–90 s read) ───────────────────────────── */
    quick: {
      goal: "If the left flipper can make the <strong>tube</strong> reliably and you can control the left saucer's kickout, shoot it all game: 5,000 more each time, up to 50,000 or 90,000. Otherwise use the <strong>spinner</strong> and <strong>top saucer</strong> to start <strong>multiball</strong>, which lights the spinner for <strong>1,000 a spin</strong> for the rest of the ball.",
      steps: [
        { title: "The tube shot",
          body: "The <strong>tube</strong> (right ramp, from the left flipper) scores 5,000, then 10,000, 15,000… up to the maximum (50,000 or 90,000); a shot at max also gives a special (50,000 in competition). Strong left flippers make this the best plan." },
        { title: "Lock and multiball",
          body: "Each <strong>top saucer</strong> hit (5,000) lights an X. Three X's light the <strong>lock</strong> at the tube; three more start <strong>2-ball multiball</strong>. Two X's of the next set can be collected before locking, so saucer 5 times, lock, then one saucer starts it." },
        { title: "Spinner and bonus",
          body: "After multiball starts, the <strong>left spinner</strong> is 1,000 a spin for the ball. Before that it's only 10, but it's the best way up to the saucer. Lit yellow arrows (two left standups, then the drops) advance X-E-N-O-N bonus (2,000 a letter; 10 advances light a 20,000 bonus, 20 a 40,000 bonus)." },
      ],
      shots: [
        { name: "Tube (right ramp)", why: "5,000 rising to 90,000; lock." },
        { name: "Left spinner", why: "1,000 a spin after multiball; feeds the top saucer." },
        { name: "Top saucer", why: "X's for lock and multiball." },
      ],
      avoid: [
        "The right drops past 4× bonus: low, hard-to-control value.",
        "Long tube attempts with a weak left flipper late in a tournament day.",
      ],
      target: "Milestones (estimates): one multiball = baseline. A maxed tube value = good. Repeated max tube shots or a long lit-spinner ball = great.",
    },

    info: {
      stats: [
        { label: "Manufacturer", value: "Bally" },
        { label: "Year",         value: "1980 (November)" },
        { label: "Design",       value: "Greg Kmiec" },
        { label: "Sound/voice",  value: "Suzanne Ciani" },
        { label: "Platform",     value: "Bally -35 (solid state)" },
        { label: "Production",   value: "About 11,000" },
      ],
      theme: "A sci-fi world with a clear plastic tube, and Bally's first talking pinball, with the voice of Suzanne Ciani.",
      features: [
        { name: "Tube shot", desc: "5,000, +5,000 per shot, max 50,000 or 90,000 (setting); at max the next shot also scores a special. May carry over between balls (setting). Lock when lit; with a ball locked, the next tube shot kicks out the locked ball and holds the new one." },
        { name: "Top saucer and X's", desc: "5,000 and (usually) an X. 3 X's light lock; with a ball locked, 3 more start 2-ball multiball. In multiball, the first 3 X's light both outlanes for special; each later set awards a special." },
        { name: "Left spinner", desc: "10 a spin, or 1,000 a spin for the rest of the ball once multiball has started." },
        { name: "Top rollovers", desc: "1,000 each; when the green light by a button flashes, it also drops the matching right drop target." },
        { name: "Right drop targets", desc: "1,500 each; the bank: 10,000, one or both inlanes lit for 10,000 and the lit award: 2× bonus, 4×, 25,000, extra ball (25,000 in competition), then specials." },
        { name: "Xenon bonus", desc: "Lit arrow shot (lower standup → upper standup → drops) lights a letter: 2,000 each; 10 advances light the 20,000 and 20 the 40,000 wizard bonus. Ten more advances after the 40,000 is lit score a special. Max 58,000 × 4 = 232,000." },
      ],
      scoring: [
        { key: "Tube shot",        val: "5,000 → 50,000/90,000" },
        { key: "Lit spinner",      val: "1,000 a spin" },
        { key: "Special (competition)", val: "50,000" },
        { key: "Max bonus",        val: "58,000 × 4 = 232,000" },
        { key: "Top saucer",       val: "5,000" },
        { key: "Drop bank",        val: "10,000 + award" },
      ],
      rules: [
        "The drop-target award resets to 2× each ball; individual drops stay down.",
        "Bonus can carry over between balls, or only the wizard bonuses (setting).",
        "Yellow standups score 700 even when not lit.",
        "Flippers can weaken as the coils heat up during long sessions, making the tube harder.",
      ],
      benchmarks: [
        { score: "Repeated max tube shots (estimate)", label: "Great game" },
        { score: "Maxed tube value",                   label: "Good game" },
        { score: "One multiball",                      label: "Baseline" },
      ],
      resources: [
        { name: "Strategy Guide (Pinball Primer)", url: "https://pinballprimer.github.io/xenon_G42Pk.html", icon: "📖" },
        { name: "SDPC Cheatsheet",                 url: "https://pinball.miraheze.org/wiki/Xenon", icon: "📄" },
        { name: "Pinside Game Page",               url: "https://pinside.com/pinball/machine/xenon", icon: "🕹️" },
      ],
    },

    strategy: {
      skillShot: "None. If a green light by a top rollover button is flashing, rolling over it also drops the matching right drop target.",
      multiball: [
        { name: "Xenon Multiball", balls: 2, locks: "3 top saucer X's light the lock at the tube.", start: "3 more X's with a ball locked.", jackpots: "No jackpot; the spinner is lit at 1,000 a spin for the ball, and X sets now light specials.", tip: "Collect two X's of the second set before locking: then one saucer hit starts multiball." },
      ],
      goal: "<strong>Tube all day with a strong left flipper and a controllable left saucer; otherwise spinner → saucer X's → multiball → lit spinner.</strong>",
      phases: [
        { num: "Phase 1", title: "Choose", body: "Test the tube early; if it's reliable, keep shooting it." },
        { num: "Phase 2", title: "Multiball", body: "Spinner to the top saucer for X's; lock, then finish the X's." },
        { num: "Phase 3", title: "Lit spinner", body: "1,000 a spin for the rest of the ball, mixed with tube shots." },
      ],
      safeShots: [
        { name: "Left spinner", desc: "Feeds the top of the playfield." },
      ],
      avoidShots: [
        { name: "Right drop targets (after 4×)", desc: "Less valuable than tube or lit spinner shots." },
      ],
      tips: [
        { head: "Bonus X", body: "With a big bonus, two drop bank completions for 4× can be worth it." },
        { head: "Left saucer", body: "If its kickout reliably feeds the left flipper, you can repeat the tube shot." },
        { head: "Multiball outlanes", body: "In multiball, the first set of 3 X's lights both outlanes for a 50,000 special." },
      ],
      mistakes: [
        "Shooting the unlit spinner for points rather than to reach the saucer.",
        "Forcing the tube with a weak left flipper.",
      ],
    },

    hotspots: [
      { x: 80, y: 38, type: "key",   label: "T",  name: "Tube (right ramp)", body: "5,000 rising to the max; lock." },
      { x: 13, y: 44, type: "key",   label: "SP", name: "Left Spinner", body: "1,000 a spin after multiball." },
      { x: 47, y: 15, type: "key",   label: "TS", name: "Top Saucer", body: "5,000 and an X." },
      { x: 47, y: 9,  type: "info",  label: "TL", name: "Top Rollovers", body: "1,000; drop a lit right target." },
      { x: 82, y: 58, type: "info",  label: "DT", name: "Right Drop Targets", body: "Bonus 2×, 4×, then points." },
      { x: 15, y: 53, type: "info",  label: "YS", name: "Yellow Standups", body: "Xenon bonus when the arrow is lit." },
      { x: 48, y: 60, type: "info",  label: "X",  name: "X Lights", body: "3 for lock, 3 more for multiball." },
      { x: 47, y: 31, type: "info",  label: "P",  name: "Pop Bumpers", body: "Points; feed the top saucer area." },
      { x: 48, y: 86, type: "info",  label: "XB", name: "X-E-N-O-N Bonus", body: "2,000 a letter; wizard bonuses." },
      { x: 9,  y: 61, type: "info",  label: "LS", name: "Left Saucer", body: "Control the kickout to the left flipper for repeat tube shots." },
      { x: 6,  y: 76, type: "avoid", label: "!",  name: "Left Outlane", body: "Special when lit." },
      { x: 89, y: 76, type: "avoid", label: "!",  name: "Right Outlane", body: "Special when lit." },
    ],
  };
