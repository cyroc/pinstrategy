  /* ─── PARAGON ────────────────────────────────────────────── */
MACHINES['paragon'] = {
    name: "Paragon",  sub: "1979 · Bally · Widebody",
    tagline: "Bonus game: 5× multiplier + 20K super bonus · Golden Cliffs saucer · PARAGON letters · beware the Beast's Lair",
    image: "images/paragon.webp",
    difficulty: "Hard", diffClass: "diff-hard", era: "SS",

    /* ── QUICK GUIDE (30–90 s read) ───────────────────────────── */
    quick: {
      goal: "A <strong>bonus</strong> game: reach <strong>5× bonus</strong> through the left inline drops and build the base bonus to <strong>20K</strong> (held for the rest of the game). Max bonus is 49K × 5 = 245K. With extra balls off, the EB and specials score points instead (25K / 50K).",
      steps: [
        { title: "Skill shot",
          body: "If PARAGON letters are awarded in order, plunge for the <strong>Paragon saucer</strong>; otherwise for the <strong>Golden Cliffs saucer</strong> (2K→4K→6K→8K→10K→20K, held all game)." },
        { title: "Inline drops → Treasure Chamber",
          body: "From the right flipper, clear the four <strong>inline drop targets</strong> (drops 3 and 4 give 2× and 3×), then shoot the <strong>Treasure Chamber</strong> saucer behind them: 1st entry each ball = 5× (resets every ball), 2nd = extra ball (points if EBs off), then Special." },
        { title: "Spinner → 20K super bonus",
          body: "The <strong>spinner</strong> just right of the inline drops builds bonus fast. Reach 20K and it's held (then 30K, 40K). If the spinner is lively, do this first." },
        { title: "Right drop bank",
          body: "Each completion is worth 10K, 15K, 20K, 25K, then Special (50K) and raises the <strong>waterfall</strong> lane value behind it — good from the left flipper." },
      ],
      shots: [
        { name: "Inline drops + Treasure Chamber", why: "5× bonus each ball; extra ball / Special." },
        { name: "Spinner", why: "Fast bonus advances toward 20K." },
        { name: "Right drop bank", why: "10K → 25K → Special 50K; waterfall value." },
      ],
      avoid: [
        "The Beast's Lair (lower left) eats balls — learning to nudge it out is advanced, so keep the ball up top.",
      ],
      target: "Milestones: 20K super bonus held and 5× each ball = good game. A full 245K bonus (listen for the high tone) = great.",
    },

    info: {
      stats: [
        { label: "Manufacturer", value: "Bally" },
        { label: "Year",         value: "1979" },
        { label: "Design",       value: "Greg Kmiec" },
        { label: "Art",          value: "Paul Faris" },
        { label: "Format",       value: "Widebody, 4 flippers" },
        { label: "Production",   value: "≈9,120 units" },
      ],
      theme: "Sword-and-sorcery widebody: the Valley of Demons, the Golden Cliffs, the Beast's Lair and a waterfall lane. Two right flippers (stacked) and an upper-left mini flipper.",
      features: [
        { name: "Inline drop targets (Valley of Demons)", desc: "Four drops in a line on the left: drops 3 and 4 give 2× and 3×; the Treasure Chamber saucer behind them (always 5K) gives 5× (first entry each ball), then the extra ball, then Special." },
        { name: "Golden Cliffs saucer", desc: "Left top saucer: 2K, 4K, 6K, 8K, 10K, 20K (20K also advances bonus); value held all game." },
        { name: "Paragon saucer", desc: "Right top saucer: P-A-R-A-G-O-N letters; spell it, then the next saucer shot = 25K + Special (carries over)." },
        { name: "Spinner", desc: "Just right of the inline drops: bonus advances." },
        { name: "Right 3-bank + waterfall", desc: "Bank value 10K/15K/20K/25K/Special (carries over between balls); each completion raises the waterfall lane 5K → 10K → Special (resets each ball)." },
        { name: "Beast's Lair", desc: "Lower-left hazard area that swallows many balls." },
        { name: "Mini flipper", desc: "Upper left, above the Beast's Lair; aim between the left and centre bumpers to keep the ball up top." },
      ],
      scoring: [
        { key: "Bonus",               val: "Up to 49K × 5 = 245K" },
        { key: "Super bonus",         val: "20K (then 30K/40K) base held for the game" },
        { key: "Golden Cliffs",       val: "2K→4K→6K→8K→10K→20K (held)" },
        { key: "Right drop bank",     val: "10K, 15K, 20K, 25K, Special" },
        { key: "PARAGON complete",    val: "Next saucer shot = 25K + Special" },
        { key: "Waterfall lane",      val: "5K → 10K → Special (per ball)" },
        { key: "EB / Special (points)", val: "25K / 50K when set for points (depends on settings)" },
      ],
      rules: [
        "<strong>Specials:</strong> PARAGON saucer when lit; Treasure Chamber (after the EB); right drops at the Special step (value carries over between balls); waterfall lane when lit (raised by each bank completion, resets each ball).",
        "<strong>Extra ball</strong> only from the Treasure Chamber (second entry on a ball).",
        "Machine: 4 flippers, 4 pop bumpers, 3 kick-out holes, 1 spinner, 4-target inline bank, 3-target right bank; 6-digit displays.",
        "Feeds to learn: inline-drop rebounds, the waterfall exit, and the top saucer kickouts (nudge to keep the ball up and hit the centre standup for bonus advances).",
        "The saucer behind the inline drops sometimes rejects the ball — try a slightly slower shot.",
        "Comp settings: extra ball and specials only count if the machine is set to award points.",
      ],
      benchmarks: [
        { score: "245K bonus",         label: "Great game" },
        { score: "5× + 20K held",      label: "Good game" },
        { score: "5× bonus",           label: "Baseline" },
      ],
      resources: [
        { name: "Rules (silverballmania)", url: "https://rules.silverballmania.com/rules/GrXy3-ML0Ey", icon: "📖" },
        { name: "IPDB Entry",              url: "https://www.ipdb.org/machine.cgi?id=1755", icon: "🎯" },
        { name: "Pinside Game Page",       url: "https://pinside.com/pinball/machine/paragon", icon: "🕹️" },
      ],
    },

    strategy: {
      skillShot: "Depends on settings: if PARAGON letters are awarded in order, plunge for the Paragon saucer; if not, plunge for the Golden Cliffs saucer (2K→4K→6K→8K→10K→20K, held all game).",
      multiball: [],
      goal: "<strong>5× from the inline drops, base bonus to 20K with the spinner, then keep building.</strong> Use the mini flipper to keep the ball up top and away from the Beast's Lair.",
      phases: [
        { num: "Phase 1", title: "5× + EB", body: "Inline drops, then the Treasure Chamber (5× every ball; second entry EB)." },
        { num: "Phase 2", title: "20K super bonus", body: "Spinner until the base bonus reaches 20K (held for the game)." },
        { num: "Phase 3", title: "Points", body: "Right drop bank values and the waterfall; Golden Cliffs and PARAGON from the saucers." },
      ],
      safeShots: [
        { name: "Right drop bank (from the left flipper)", desc: "Shots continue into the bumpers; may nudge into a top saucer." },
      ],
      avoidShots: [
        { name: "Inline drops when rebounds go centre", desc: "Watch where the rebound goes; it can drain down the middle." },
      ],
      tips: [
        { head: "Right flipper", body: "The go-to flipper; the double right flipper lets you cradle only on the right side of the upper flipper." },
        { head: "Top saucers", body: "Nudge after the kickout to keep the ball up and hit the centre standup or fall back into a saucer." },
      ],
      mistakes: [
        "Forgetting the 20K super bonus — it's held for the rest of the game.",
        "Never using the mini flipper.",
      ],
    },

    hotspots: [
      { x: 19,   y: 36,   type: "key",   label: "V",  name: "Inline Drop Targets (Valley of Demons)", body: "Clear them for the back saucer: 5×, then EB / 25K." },
      { x: 21,   y: 15,   type: "key",   label: "S",  name: "Treasure Chamber Saucer", body: "5K; 1st entry each ball = 5×; 2nd = extra ball; then Special." },
      { x: 28,   y: 29.5, type: "key",   label: "Sp", name: "Spinner", body: "Advances bonus; shoot from the right flippers toward the 20K super bonus." },
      { x: 41.5, y: 19,   type: "safe",  label: "G",  name: "Golden Cliffs Saucer", body: "2K→4K→6K→8K→10K→20K, held all game." },
      { x: 64,   y: 19,   type: "safe",  label: "P",  name: "Paragon Saucer", body: "PARAGON letters; all = 25K + Special." },
      { x: 76.5, y: 41,   type: "key",   label: "D",  name: "Right 3-Bank Drops", body: "10K/15K/20K/25K/Special (carries over); raises the waterfall." },
      { x: 81.5, y: 31.5, type: "info",  label: "W",  name: "Waterfall Lane", body: "5K → 10K → Special, raised by each drop-bank completion; resets each ball." },
      { x: 53,   y: 19.5, type: "info",  label: "C",  name: "Centre Standup (Advance Bonus)", body: "Nudge saucer kickouts into it for bonus advances." },
      { x: 53,   y: 8,    type: "info",  label: "A",  name: "Advance Bonus Rollover", body: "Bonus advance." },
      { x: 22.5, y: 52.5, type: "info",  label: "M",  name: "Mini Flipper", body: "Keep the ball up top; aim between the left and centre bumpers." },
      { x: 19,   y: 64,   type: "avoid", label: "B",  name: "Beast's Lair", body: "Swallows balls; advanced nudging can save some." },
      { x: 84,   y: 62,   type: "avoid", label: "!",  name: "Right Outlane", body: "Open under comp settings." },
    ],
  };
