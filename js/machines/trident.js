  /* ─── TRIDENT ────────────────────────────────────────────── */
MACHINES['trident'] = {
    name: "Trident",  sub: "1979 · Stern Electronics · M-100",
    tagline: "Drop targets to 5× and a 30,000 top saucer · five colour standups set the spinners to 1,000/2,000 a spin · no left outlane",
    image: "images/trident.webp",
    difficulty: "Medium", diffClass: "diff-medium", era: "SS",

    /* ── QUICK GUIDE (30–90 s read) ───────────────────────────── */
    quick: {
      goal: "Two set-ups every ball, then score. Complete the <strong>drop targets</strong> four times for <strong>5× bonus</strong> and a <strong>30,000 top saucer</strong>; hit all five <strong>colour standups</strong> so one spinner pays <strong>2,000 a spin</strong>. Then rip the 2,000 spinner and shoot the saucer.",
      steps: [
        { title: "Drop targets (upper left)",
          body: "Completions get harder: 1st needs only targets 2 and 4 (2×), 2nd needs 1-3-5 (3×), 3rd needs 1-2-4-5 (4×), 4th all five (5×). The first three also raise the <strong>top saucer</strong> 5,000 → 10,000 → 20,000 → 30,000. Later completions score a special." },
        { title: "Colour standups (upper right)",
          body: "Each: 1,000 + bonus advance. White/red add 400 a spin to the <strong>left spinner</strong>; green/yellow to the <strong>right spinner</strong>; purple adds 1,000 to one spinner (switches on bumper/sling hits). All five: one spinner 1,000, the other <strong>2,000 a spin</strong>." },
        { title: "Score",
          body: "Rip the 2,000 spinner and hit the 30,000 <strong>top saucer</strong>. If specials score 100,000 and repeat, keep completing the drop targets (if only one per ball, collect it, then rip the spinner); a second set of standups also scores a special." },
      ],
      shots: [
        { name: "Drop targets", why: "Bonus X to 5×; saucer to 30,000." },
        { name: "Colour standups", why: "Spinner values; 2,000 a spin when done." },
        { name: "Top saucer", why: "5,000 → 30,000." },
      ],
      avoid: [
        "Trapping on the right flipper: the ball can roll up the cut-off inlane rail into the outlane.",
        "Spinner rips before the standups — base value is only 200 a spin.",
      ],
      target: "Milestones: 5× and a 2,000 spinner on a ball = good game. Repeated 30,000 saucers and 100,000 specials = great.",
    },

    info: {
      stats: [
        { label: "Manufacturer", value: "Stern Electronics" },
        { label: "Year",         value: "1979 (March)" },
        { label: "Design",       value: "Mike Kubin" },
        { label: "Production",   value: "3,757 (IPDB; older sources say 4,019)" },
        { label: "System",       value: "Stern M-100" },
        { label: "Max bonus",    value: "19,000 × 5 = 95,000" },
      ],
      theme: "Undersea mythology: Neptune with his trident battling a sea serpent, plus sharks and a chained giant.",
      features: [
        { name: "5 drop targets", desc: "500 each. Completions 1–4 advance bonus X (2×–5×) and need fewer targets at first (2-4, then 1-3-5, then 1-2-4-5, then all). Later completions score a special." },
        { name: "Top saucer", desc: "5,000 at ball start; 10,000 / 20,000 / 30,000 after the first three drop completions." },
        { name: "Colour standups (5)", desc: "1,000 + bonus advance; light the colour. A second full set scores a special; the first lights the right-inlane extra ball." },
        { name: "Left / right spinners", desc: "200 a spin, raised by the standups: all five = 1,000 on one spinner and 2,000 on the other." },
        { name: "Left orbit star", desc: "100; raises the left inlane to 4,000 / 6,000 / 8,000." },
        { name: "Upper slingshots", desc: "Walls below each spinner entrance: 1,000 + bonus advance." },
        { name: "Left inlane (no left outlane)", desc: "2,000 + advance, up to 8,000 with the left-orbit star." },
        { name: "Right inlane / outlane", desc: "Inlane 3,000 + 3 advances (extra ball when lit). Outlane 5,000 + 3 advances (special after 4×). The cut-off inlane rail lets balls dribble out — and a post can bounce outlane balls back." },
      ],
      scoring: [
        { key: "Top saucer",    val: "5,000 → 30,000" },
        { key: "Best spinner",  val: "2,000 a spin" },
        { key: "Max bonus",     val: "95,000 (no mid-ball collect)" },
        { key: "Left inlane",   val: "2,000 → 8,000" },
        { key: "Specials",      val: "100,000 in competition/novelty play" },
      ],
      rules: [
        "Bonus and multiplier never carry over; there is no bonus collect.",
        "Settings: drop-target special once per ball or open; outlane special at 3× instead of 4×.",
        "Extra balls are void with comp settings.",
        "Rules from The Pinball Primer; settings vary by machine.",
      ],
      benchmarks: [
        { score: "Repeated 30K saucers + specials", label: "Great game" },
        { score: "5× + 2,000 spinner", label: "Good game" },
        { score: "3× + a few standups", label: "Baseline" },
      ],
      resources: [
        { name: "Rules (The Pinball Primer)", url: "https://pinballprimer.github.io/trident_GR0KD.html", icon: "📖" },
        { name: "IPDB Entry",                url: "https://www.ipdb.org/machine.cgi?id=2644", icon: "🎯" },
        { name: "Pinside Game Page",         url: "https://pinside.com/pinball/machine/trident", icon: "🕹️" },
      ],
    },

    strategy: {
      skillShot: "None.",
      multiball: [],
      goal: "<strong>Drop targets to 5× (30,000 saucer) and all five standups (2,000 spinner), then farm the spinner and saucer.</strong> Chase drop-target specials if they score points and can repeat.",
      phases: [
        { num: "Phase 1", title: "Drops", body: "Four completions: 5× and a 30,000 saucer." },
        { num: "Phase 2", title: "Standups", body: "All five colours: a 2,000 spinner." },
        { num: "Phase 3", title: "Score", body: "2,000 spinner, top saucer, extra drop completions for specials." },
      ],
      safeShots: [
        { name: "Early drop completions", desc: "Only 2–4 targets needed for the first three." },
      ],
      avoidShots: [
        { name: "Unlit spinners", desc: "200 a spin until the standups are done." },
      ],
      tips: [
        { head: "Left side", body: "No left outlane — the left inlane always returns the ball." },
        { head: "Right inlane", body: "Balls can dribble off the cut-off rail; catch them early." },
      ],
      mistakes: [
        "Trapping on the right flipper and losing the ball up the inlane rail.",
        "Shooting spinners before the standups have raised them.",
      ],
    },

    hotspots: [
      { x: 24,   y: 27,   type: "key",   label: "D",  name: "Drop Targets", body: "5× and saucer value." },
      { x: 47,   y: 12,   type: "key",   label: "T",  name: "Top Saucer", body: "5,000 → 30,000." },
      { x: 72,   y: 26,   type: "key",   label: "C",  name: "Colour Standups", body: "Spinner values; extra ball / special." },
      { x: 14,   y: 43,   type: "key",   label: "LS", name: "Left Spinner", body: "White/red standups raise it." },
      { x: 79,   y: 43,   type: "key",   label: "RS", name: "Right Spinner", body: "Green/yellow standups raise it." },
      { x: 6,    y: 28,   type: "info",  label: "★",  name: "Left Orbit Star", body: "Raises the left inlane value." },
      { x: 12,   y: 53,   type: "info",  label: "US", name: "Upper Slingshots (approx.)", body: "1,000 + bonus advance." },
      { x: 54,   y: 29,   type: "info",  label: "B",  name: "Pop Bumpers", body: "Rotate the purple spinner bonus." },
      { x: 5,    y: 78,   type: "safe",  label: "L",  name: "Left Inlane (no outlane)", body: "2,000 → 8,000." },
      { x: 78,   y: 76,   type: "info",  label: "EB", name: "Right Inlane", body: "Extra ball when lit; cut-off rail." },
      { x: 85,   y: 77,   type: "avoid", label: "!",  name: "Right Outlane", body: "5,000; special after 4×." },
    ],
  };
