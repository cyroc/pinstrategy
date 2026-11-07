  /* ─── FLIGHT 2000 ────────────────────────────────────────── */
MACHINES['flight2000'] = {
    name: "Flight 2000",  sub: "1980 · Stern Electronics · Widebody · Speech",
    tagline: "Right spinner up to 5,000 a spin · bonus X to 15× · 3-ball multiball: 2 locks, B-L-A-S-T-O-F-F, 5-4-3-2-1 countdown",
    image: "images/flight-2000.webp",
    difficulty: "Medium-Hard", diffClass: "diff-medium-hard", era: "SS",

    /* ── QUICK GUIDE (30–90 s read) ───────────────────────────── */
    quick: {
      goal: "Two plans. <strong>Simple:</strong> rip the <strong>right spinner</strong> — each clear of the 3-bank behind it raises the spinner (to 5,000 a spin) and the bonus multiplier (to 15×), and both carry over by default. <strong>Advanced:</strong> build <strong>3-ball multiball</strong> (about 180,000 just to start), then shoot spinners.",
      steps: [
        { title: "Right spinner + 3-bank",
          body: "The spinner starts at 500 a spin and feeds the <strong>right drop targets</strong>. Each target scores the spinner value; each clear adds +500 a spin and +1× bonus. Spinner then all 3 targets with nothing in between = <strong>50,000 sweep</strong>." },
        { title: "Multiball: locks + BLASTOFF",
          body: "Shoot through the <strong>left spinner</strong> so the ball arcs into the next lane = lock (two locks). Spell <strong>B-L-A-S-T-O-F-F</strong>: L-A-S-T top lanes, B/O far inlanes (B also on the bumper standups), F-F near inlanes." },
        { title: "Countdown, then lock 3",
          body: "Hit the <strong>lit</strong> numbered drop target in order <strong>5-4-3-2-1</strong>. With 2 locks + BLASTOFF, the 1 lights <strong>All Systems Go</strong> (finish the 1 only after both locks and BLASTOFF — earlier it pays 0–20K); lock the third ball to launch multiball. Shoot the spinners while 3 balls are in play." },
      ],
      shots: [
        { name: "Right spinner", why: "Up to 5,000 a spin; feeds the 3-bank." },
        { name: "Left spinner (lock)", why: "Locks; up to 4,000 a spin after a multiball." },
        { name: "Lit countdown target", why: "Multiball qualification." },
      ],
      avoid: [
        "Don't lock a 3rd ball before All Systems Go — it just kicks a ball out (30,000).",
        "Unlit countdown targets only score 500.",
      ],
      target: "Milestones: spinner at 2,500+ with 5×+ = good game. Multiball started, or 15× with a 5,000 spinner = great.",
    },

    info: {
      stats: [
        { label: "Manufacturer", value: "Stern Electronics" },
        { label: "Year",         value: "1980 (produced from August; released October)" },
        { label: "Design",       value: "Harry Williams" },
        { label: "Art",          value: "Gerry Simkus, Doug Watson" },
        { label: "Software",     value: "Bill Pfutzenreuter" },
        { label: "Production",   value: "≈6,300" },
        { label: "Format",       value: "Widebody; Stern's first game with speech" },
        { label: "Max bonus",    value: "10,000 × 15 = 150,000" },
      ],
      theme: "Futuristic space flight: rockets launching through three lift-off stages in a maze-like lock at the upper left.",
      features: [
        { name: "Right spinner", desc: "500 a spin, +500 per 3-bank clear (max 5,000). Carries over by default." },
        { name: "Right 3-bank", desc: "Each target = current spinner value; clear = +1× bonus (max 15×). Sweep (spinner then 3 targets, no other switch) = 50,000." },
        { name: "5-4-3-2-1 drop targets", desc: "Lit target: 5,000, resets the bank, lights the next lower number. Hitting the lit 1 scores 10K/20K/30K/40K depending on locks and BLASTOFF; 30K lights All Systems Go." },
        { name: "Lock (left spinner)", desc: "First two locks 10,000 each. With All Systems Go lit, the third lock starts multiball; otherwise a ball is pushed out for 30,000." },
        { name: "Left spinner", desc: "200 a spin; after a multiball, 500 × lit BLASTOFF letters (max 4,000)." },
        { name: "Centre standup", desc: "Between targets 3 and 4: 25,000 + bonus X. After a multiball it spots all of B-L-A-S-T." },
        { name: "BLASTOFF lanes", desc: "L-A-S-T top lanes 5,000; B/O far inlanes 3,000; F-F near inlanes 5,000 + spot a number. All advance bonus." },
        { name: "Centre post", desc: "A post between the flippers; often removed for tournaments." },
      ],
      scoring: [
        { key: "Right spinner",      val: "500 → 5,000 a spin" },
        { key: "3-bank sweep",       val: "50,000" },
        { key: "Multiball start",    val: "≈180,000" },
        { key: "Countdown complete", val: "10,000 – 40,000" },
        { key: "Centre standup",     val: "25,000 + bonus X" },
        { key: "Outlanes",           val: "25,000 + advance + spot number" },
      ],
      rules: [
        "Bonus X and the right spinner value carry over by default (operator can reset them).",
        "Base bonus is only 10,000 max and is never carried; there is no mid-ball collect.",
        "Locks are kept per player — they can't be stolen.",
        "No jackpots in multiball; balls can be relocked toward the next multiball.",
        "Specials can be 100,000 points or nothing in competition play; extra balls are void.",
        "Rules from The Pinball Primer; settings vary by machine.",
      ],
      benchmarks: [
        { score: "Multiball or 15× + 5,000 spinner", label: "Great game" },
        { score: "Spinner 2,500+ and 5×+", label: "Good game" },
        { score: "Two right-bank clears", label: "Baseline" },
      ],
      resources: [
        { name: "Rules (The Pinball Primer)", url: "https://pinballprimer.github.io/flight2000_G48kY.html", icon: "📖" },
        { name: "IPDB Entry",                url: "https://www.ipdb.org/machine.cgi?id=887", icon: "🎯" },
        { name: "Wikipedia",                 url: "https://en.wikipedia.org/wiki/Flight_2000_(pinball)", icon: "📚" },
      ],
    },

    strategy: {
      skillShot: "None.",
      multiball: [
        { name: "Multiball", balls: 3,
          locks: "Two locks through the left spinner (arc into the next lane).",
          start: "Spell BLASTOFF, then complete 5-4-3-2-1 in countdown order (All Systems Go), then lock the third ball.",
          jackpots: "No jackpots; about 180,000 on the start. Shoot the spinners.",
          tip: "If the spinner value resets between balls, multiball is the main plan." },
      ],
      goal: "<strong>Right spinner and its 3-bank for a spinner value and multiplier that last all game; multiball when it is close.</strong> If you're near multiball, give it priority.",
      phases: [
        { num: "Phase 1", title: "Spinner", body: "Right spinner rips; clear the 3-bank to raise both values." },
        { num: "Phase 2", title: "Locks", body: "Lock two balls; collect BLASTOFF letters as they come." },
        { num: "Phase 3", title: "Launch", body: "Countdown 5-4-3-2-1, lock the third ball, shoot spinners in multiball." },
      ],
      safeShots: [
        { name: "Right spinner", desc: "The safest route to big points." },
      ],
      avoidShots: [
        { name: "Unlit countdown targets", desc: "500 points, no progress." },
      ],
      tips: [
        { head: "The Fs", body: "Near inlanes are hard to reach; a shatz to the opposite side can roll the ball up the far inlane and back through the near one." },
        { head: "After multiball", body: "The centre standup spots B-L-A-S-T — the left spinner jumps to 2,500+ a spin." },
        { head: "Last ball", body: "With 15×, protect the bonus — it can be worth 150,000." },
      ],
      mistakes: [
        "Hitting countdown targets out of order.",
        "Ignoring the right spinner when its value carries over.",
      ],
    },

    hotspots: [
      { x: 73,   y: 55,   type: "key",   label: "RS", name: "Right Spinner", body: "500 → 5,000 a spin." },
      { x: 84,   y: 39,   type: "key",   label: "3",  name: "Right 3-Bank", body: "Spinner value per target; +1× and +500/spin per clear." },
      { x: 12,   y: 43,   type: "key",   label: "LS", name: "Left Spinner / Lock", body: "Locks; up to 4,000 a spin after a multiball." },
      { x: 24,   y: 20,   type: "info",  label: "L",  name: "Lock (Lift-Off Stages)", body: "Holds locked balls." },
      { x: 43,   y: 43,   type: "key",   label: "54", name: "Drop Targets 4-5", body: "Countdown: start at the lit 5." },
      { x: 24,   y: 48,   type: "key",   label: "32", name: "Drop Targets 2-3", body: "Countdown." },
      { x: 7.5,  y: 51,   type: "key",   label: "1",  name: "Drop Target 1", body: "Completes the countdown." },
      { x: 34.3, y: 29.5, type: "info",  label: "C",  name: "Centre Standup", body: "25,000 + bonus X; Spot Blast after a multiball." },
      { x: 67,   y: 10,   type: "info",  label: "LAST", name: "L-A-S-T Top Lanes", body: "BLASTOFF letters." },
      { x: 14.5, y: 80,   type: "info",  label: "B",  name: "Left Inlanes (B, F)", body: "B far inlane; F near inlane." },
      { x: 76,   y: 81,   type: "info",  label: "O",  name: "Right Inlanes (F, O)", body: "F near inlane; O far inlane." },
      { x: 3.5,  y: 79,   type: "avoid", label: "!",  name: "Left Outlane", body: "25,000; special when lit." },
      { x: 86,   y: 79,   type: "avoid", label: "!",  name: "Right Outlane", body: "25,000; special when lit." },
    ],
  };
