  /* ─── HARLEM GLOBETROTTERS ON TOUR (BALLY 1979) ──────────── */
MACHINES['harlemglobetrotters'] = {
    name: "Harlem Globetrotters On Tour",  sub: "1979 · Bally · Bally -35 (solid state)",
    tagline: "In-line drop targets for 5× bonus · 2,000-a-spin spinner · G-L-O-B-E saucer · two left flippers",
    image: "images/harlem-globetrotters.webp",
    difficulty: "Medium", diffClass: "diff-medium", era: "SS",

    /* ── QUICK GUIDE (30–90 s read) ───────────────────────────── */
    quick: {
      goal: "Knock down the <strong>in-line drop targets</strong> to light <strong>5× bonus</strong> and raise the <strong>left spinner</strong> to <strong>2,000 a spin</strong>, then rip that spinner and build bonus. Spell <strong>G-L-O-B-E</strong> for 50,000 each time.",
      steps: [
        { title: "In-line drops first",
          body: "Each target is 5,000 and a G-L-O-B-E letter; the 2nd, 3rd and 4th light <strong>2×, 3× and 5× bonus</strong>, and each one raises the left spinner (100, 200, 1,000, then 2,000 a spin). All down lights the saucer behind them (25,000, then 50,000 in competition)." },
        { title: "Spinner and bonus",
          body: "With the spinner at 2,000, shoot it from the right flipper every time. The <strong>right inlane</strong> and the <strong>top saucer</strong> give 3 bonus advances each; bonus is up to 49,000 × 5 = 245,000 per ball, so never tilt." },
        { title: "G-L-O-B-E",
          body: "The <strong>top saucer</strong> gives the lit letter (and 3 bonus advances); the drops spot letters too. Every completion is 50,000, and from the 2nd (or 3rd) also a special (50,000 in competition). Letters carry over between balls." },
      ],
      shots: [
        { name: "Left spinner", why: "Up to 2,000 a spin." },
        { name: "In-line drop targets", why: "Bonus X, spinner value, letters." },
        { name: "Top saucer", why: "G-L-O-B-E letter + 3 bonus." },
      ],
      avoid: [
        "Scissor drains between the two left flippers: catch the ball before shooting.",
        "Tilting: the bonus is most of your score.",
      ],
      target: "Milestones (estimates): 5× bonus and a maxed spinner on one ball = baseline. Two G-L-O-B-E completions = good. Several 200K+ bonuses = great.",
    },

    info: {
      stats: [
        { label: "Manufacturer", value: "Bally" },
        { label: "Year",         value: "1979 (September)" },
        { label: "Design",       value: "Greg Kmiec" },
        { label: "Art",          value: "Greg Freres" },
        { label: "Platform",     value: "Bally -35 (solid state)" },
      ],
      theme: "The touring basketball show team: a basketball-hoop top saucer, three pops and an unusual pair of stacked left flippers.",
      features: [
        { name: "In-line drop targets", desc: "Four targets one behind the other: 5,000 and a G-L-O-B-E letter each; targets 2–4 light 2×, 3×, 5× bonus; each raises the left spinner. All down: the saucer behind them scores 25,000, then the special (50,000 in competition). An operator setting decides whether they reset after the saucer or only at the end of the ball." },
        { name: "Left spinner", desc: "10 points a spin at the start of each ball; 100, 200, 1,000 and 2,000 as drop targets fall. At 2,000 it's the best shot on the table." },
        { name: "Top saucer and G-L-O-B-E", desc: "3,000, 3 bonus advances and the lit letter (fixed or rotating, a setting). Each G-L-O-B-E = 50,000; the first lights the left outlane for 25,000 for the rest of the game; later ones add a special." },
        { name: "Player standups", desc: "Five on the left: 300 each, 10,000 for all and they advance the solo standup on the right (extra ball, then special). The solo standup also opens the right outlane gate." },
        { name: "Center spinners", desc: "100 a spin; every 5th spin of a lit one gives a bonus advance." },
      ],
      scoring: [
        { key: "Max bonus",          val: "49,000 × 5 = 245,000" },
        { key: "Left spinner",       val: "Up to 2,000 a spin" },
        { key: "G-L-O-B-E",          val: "50,000 (+ special = 50,000)" },
        { key: "Saucer behind drops", val: "25,000, then 50,000" },
        { key: "Player targets",     val: "10,000 for all five" },
      ],
      rules: [
        "There is no left inlane; the left outlane scores 1,000 (25,000 after the first G-L-O-B-E).",
        "Right outlane gate: the solo standup opens it; one drain is sent back to the inlane (3,000).",
        "Super Bonus (setting): bonus counts of 20, 30 and 40 become checkpoints for later balls.",
        "Bonus advances also come from each drop target and every 5th spin of a lit center spinner. The right inlane can't be alley-passed.",
        "Bonus X and drop-target progress reset each ball; G-L-O-B-E carries over.",
        "Competition: extra balls score 25,000 and specials 50,000.",
      ],
      benchmarks: [
        { score: "Several 200K+ bonuses (estimate)", label: "Great game" },
        { score: "Two G-L-O-B-E completions",      label: "Good game" },
        { score: "5× bonus + 2,000 spinner",        label: "Baseline" },
      ],
      resources: [
        { name: "Strategy Guide (Pinball Primer)", url: "https://pinballprimer.github.io/harlem_GRnwQ.html", icon: "📖" },
        { name: "Pinside Game Page",               url: "https://pinside.com/pinball/machine/harlem-globetrotters-on-tour", icon: "🕹️" },
      ],
    },

    strategy: {
      skillShot: "None. Plunge and get control; the first targets are the in-line drops.",
      multiball: [],
      goal: "<strong>In-line drops (5× bonus, 2,000 spinner) → spinner from the right flipper → bonus advances → G-L-O-B-E.</strong>",
      phases: [
        { num: "Phase 1", title: "Drops", body: "Clear the in-line drops from whichever left flipper gives the cleaner shot; watch the rebound." },
        { num: "Phase 2", title: "Spin", body: "Spinner at 2,000: shoot it repeatedly. Use the right inlane and top saucer for bonus." },
        { num: "Phase 3", title: "Letters", body: "Top saucer for G-L-O-B-E; if the drops don't reset mid-ball, keep hitting the saucer behind them." },
      ],
      safeShots: [
        { name: "Left spinner", desc: "Clean lane shot from the right flipper." },
        { name: "Center spinners", desc: "Reachable from any flipper; small bonus help." },
      ],
      avoidShots: [
        { name: "Player standups", desc: "No bonus advance; only worth it for the right gate or (if on) extra balls." },
      ],
      tips: [
        { head: "Two left flippers", body: "Learn which one makes the drop-target shot and which only passes the ball." },
        { head: "Right gate", body: "Hit the solo standup whenever the gate is closed: it saves a right outlane drain." },
        { head: "Bonus first", body: "A ball with 5× and lots of advances can be worth more than all other scoring." },
      ],
      mistakes: [
        "Shooting the spinner before the drops have raised it: 10 points a spin.",
        "Flipping both left flippers at once on a fast ball: it can go straight between them.",
      ],
    },

    hotspots: [
      { x: 14, y: 33, type: "key",   label: "LS", name: "Left Spinner", body: "Up to 2,000 a spin after the in-line drops." },
      { x: 80, y: 31, type: "key",   label: "ID", name: "In-line Drop Targets", body: "2×/3×/5× bonus, spinner value, G-L-O-B-E letters." },
      { x: 71, y: 14, type: "key",   label: "FT", name: "Saucer Behind the Drops", body: "25,000, then special, when all drops are down." },
      { x: 45, y: 15, type: "key",   label: "TS", name: "Top Saucer (hoop)", body: "G-L-O-B-E letter + 3 bonus advances." },
      { x: 37, y: 40, type: "info",  label: "CS", name: "Center Spinners", body: "Every 5th lit spin = bonus advance." },
      { x: 6,  y: 52, type: "info",  label: "PS", name: "Player Standups", body: "All five: 10,000 and the solo target award." },
      { x: 83, y: 46, type: "info",  label: "SD", name: "Slam Dunk Standup", body: "Opens the right outlane gate; extra ball/special when lit." },
      { x: 45, y: 70, type: "info",  label: "BX", name: "Bonus Multipliers", body: "2×, 3×, 5× from the drops." },
      { x: 5,  y: 80, type: "avoid", label: "!",  name: "Left Outlane", body: "25,000 after the first G-L-O-B-E." },
      { x: 87, y: 80, type: "avoid", label: "!",  name: "Right Outlane", body: "Gate returns the ball when open." },
    ],
  };
