  /* ─── DRAGONFIST ─────────────────────────────────────────── */
MACHINES['dragonfist'] = {
    name: "Dragonfist",  sub: "1981 · Stern Electronics · M-200",
    tagline: "Light the yellow standups to grow the left orbit to 21,000 · white drop banks raise bonus X to 7× · spinner up to 1,200 a spin at 7×",
    image: "images/dragonfist.webp",
    difficulty: "Medium", diffClass: "diff-medium", era: "SS",

    /* ── QUICK GUIDE (30–90 s read) ───────────────────────────── */
    quick: {
      goal: "Light the <strong>yellow standups</strong> (each lit one adds 2,000 to the <strong>left orbit</strong>, up to 21,000), clear the <strong>drop bank lit white</strong> to raise the <strong>bonus multiplier</strong> to 7×, then rip the <strong>right spinner</strong>, which pays up to 1,200 on every other spin at 7×.",
      steps: [
        { title: "Yellow standups",
          body: "The first hit lights a target; hits on lit targets score 3,000 + a bonus advance. Lit targets <strong>stay lit between balls</strong>. Each lit target adds 2,000 to the <strong>left orbit star</strong> (5,000 base, max 21,000). <strong>Stop at 8 lit</strong> (orbit = 21,000) and farm the orbit: the 9th target resets them all for only an extra ball (void with comp settings)." },
        { title: "Multiplier at the white bank",
          body: "Only the bank lit <strong>white</strong> advances bonus X when cleared, and its targets also give bonus advances. White moves upper right → centre → upper left. Bank clears: centre 10,000, upper right 15,000, upper left 20,000." },
        { title: "Spinner at high X",
          body: "The <strong>right spinner</strong> alternates 100 and 200 × the number of lit multiplier lights (2× = 200 … 7× = 1,200). Worth it from about 5×; earlier, the orbit is better." },
      ],
      shots: [
        { name: "Left orbit (star)", why: "5,000 + 2,000 per lit standup." },
        { name: "White-lit drop bank", why: "Bonus X to 7×." },
        { name: "Right spinner", why: "Big once X is 5×+." },
      ],
      avoid: [
        "Lighting the 9th standup — it resets all of them.",
        "Prefer the white bank; other bank clears are points only (still 10,000–20,000).",
        "The multiplier resets each ball by default — use it before you drain.",
      ],
      target: "Milestones: 8 standups lit and the orbit collected at 21,000 = good game. 7× with long spinner rips = great.",
    },

    info: {
      stats: [
        { label: "Manufacturer", value: "Stern Electronics" },
        { label: "Year",         value: "1981 (November per Pinside; some sources say 1982)" },
        { label: "Design",       value: "Joe Joos Jr." },
        { label: "Art",          value: "Doug Watson" },
        { label: "System",       value: "Stern M-200" },
        { label: "Max bonus",    value: "100,000 base; multiplier max 7×" },
      ],
      theme: "Martial arts: a kung-fu fighter, a dragon and a fist emblem in blue, red and gold.",
      features: [
        { name: "Yellow standups (9)", desc: "Unlit: lights the target (no score). Lit: 3,000 + bonus advance. Stay lit between balls. All 9 lit: they reset and an extra ball lights at a drop bank (centre target)." },
        { name: "Left orbit star", desc: "5,000 + 2,000 per lit yellow standup (max 21,000)." },
        { name: "Drop banks", desc: "1,000 per target. Clears: centre 10,000, upper right 15,000, upper left 20,000. The white-lit bank also advances bonus X, and its targets advance the bonus." },
        { name: "Red special light", desc: "After 7×, the white light turns red; the centre target of the red bank scores a special. Slingshots rotate the red and orange lights between banks." },
        { name: "Right spinner", desc: "100 a spin; from 2× it alternates 100 and 200 per lit multiplier light (1,200 at 7×). Stopping on exactly 20, 40, 60 or 80 spins = special." },
        { name: "Inlanes / outlanes", desc: "Inlanes 2,000 + advance; outlanes 5,000." },
      ],
      scoring: [
        { key: "Left orbit",         val: "5,000 – 21,000" },
        { key: "Lit standup",        val: "3,000 + advance" },
        { key: "Bank clear",         val: "10,000 / 15,000 / 20,000" },
        { key: "Spinner at 7×",      val: "1,200 / 100 alternating" },
        { key: "Max bonus",          val: "100,000 × 7" },
      ],
      rules: [
        "Bonus X resets each ball by default (operator option to carry over); no super bonus.",
        "Extra balls are void with comp settings; specials follow operator settings.",
        "Rules from The Pinball Primer; settings vary by machine.",
      ],
      benchmarks: [
        { score: "7× + spinner rips", label: "Great game" },
        { score: "Orbit at 21,000 (8 lit)", label: "Good game" },
        { score: "3×–4× each ball", label: "Baseline" },
      ],
      resources: [
        { name: "Rules (The Pinball Primer)", url: "https://pinballprimer.github.io/dragonfist_GRQkJ.html", icon: "📖" },
        { name: "IPDB Entry",                url: "https://www.ipdb.org/machine.cgi?id=731", icon: "🎯" },
        { name: "Pinside Game Page",         url: "https://pinside.com/pinball/machine/dragonfist", icon: "🕹️" },
      ],
    },

    strategy: {
      skillShot: "None.",
      multiball: [],
      goal: "<strong>Standups for a big left orbit, white banks for multiplier, spinner once the multiplier is high.</strong> If the multiplier carries over, focus on hitting the spinner hard.",
      phases: [
        { num: "Phase 1", title: "Light", body: "Light yellow standups; shoot the left orbit as its value grows." },
        { num: "Phase 2", title: "Multiply", body: "Clear the white bank each time it moves." },
        { num: "Phase 3", title: "Spin", body: "At 5×+ rip the right spinner." },
      ],
      safeShots: [
        { name: "Left orbit", desc: "Big single-switch value once standups are lit." },
      ],
      avoidShots: [
        { name: "The 9th yellow standup", desc: "Resets all lit standups (orbit back to 5,000) for an extra ball that is void in competition." },
      ],
      tips: [
        { head: "Carry-over", body: "Lit standups survive the drain, so the orbit keeps its value next ball — hold at 8 lit." },
        { head: "Spin hard", body: "Long rips matter: half the spins pay the multiplied value." },
      ],
      mistakes: [
        "Spinner rips at 1×–2× (100–200 a spin).",
        "Lighting the 9th standup and losing the 21,000 orbit.",
      ],
    },

    hotspots: [
      { x: 5,    y: 37,   type: "key",   label: "O",  name: "Left Orbit Star", body: "5,000 + 2,000 per lit standup." },
      { x: 77,   y: 49.5, type: "key",   label: "S",  name: "Right Spinner", body: "Up to 1,200 every other spin at 7×." },
      { x: 43,   y: 43,   type: "key",   label: "C",  name: "Centre Drop Bank", body: "10,000; bonus X when white." },
      { x: 8.5,  y: 24,   type: "key",   label: "UL", name: "Upper-Left Drop Bank", body: "20,000; bonus X when white." },
      { x: 82.5, y: 24.5, type: "key",   label: "UR", name: "Upper-Right Drop Bank", body: "15,000; bonus X when white." },
      { x: 59,   y: 14,   type: "info",  label: "Y",  name: "Yellow Standups", body: "Light them; 3,000 + advance when lit." },
      { x: 26,   y: 32,   type: "info",  label: "B",  name: "Pop Bumpers", body: "Bumpers." },
      { x: 4,    y: 80,   type: "avoid", label: "!",  name: "Left Outlane", body: "5,000." },
      { x: 12,   y: 80,   type: "info",  label: "I",  name: "Left Inlane", body: "2,000 + bonus advance." },
      { x: 78,   y: 80,   type: "info",  label: "I",  name: "Right Inlane", body: "2,000 + bonus advance." },
      { x: 85.5, y: 80,   type: "avoid", label: "!",  name: "Right Outlane", body: "5,000." },
    ],
  };
