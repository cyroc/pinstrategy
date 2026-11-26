  /* ─── EIGHT BALL (BALLY 1977) ────────────────────────────── */
MACHINES['eightball'] = {
    name: "Eight Ball",  sub: "1977 · Bally · Bally -35 (solid state)",
    tagline: "Collect your pool balls for 3,000 bonus each · Bank Shot raises bonus X to 5× · 8-ball target lights the kickback and a 1,000-a-spin spinner · 24,000 Super Bonus",
    image: "images/eight-ball.webp",
    difficulty: "Medium-Hard", diffClass: "diff-medium-hard", era: "SS",

    /* ── QUICK GUIDE (30–90 s read) ───────────────────────────── */
    quick: {
      goal: "<strong>Bonus is the game.</strong> Each pool ball you collect is worth <strong>3,000 bonus</strong> for the rest of the game, and the <strong>Bank Shot</strong> multiplies it (2×, 3×, 5×) every ball. Hit the <strong>8-ball target</strong> to light the left <strong>kickback</strong> and a <strong>1,000-a-spin spinner</strong>.",
      steps: [
        { title: "Pool balls",
          body: "Your seven balls (solids 1–7 or stripes 9–15, depending on the player) come from the <strong>top lanes</strong> (1–4), the <strong>5</strong> target (left, below the spinner), the <strong>6</strong> target (right, below the Bank Shot) and the <strong>right inlane</strong> (7, the hardest). With all seven, the <strong>8-ball target</strong> completes the rack: from the next ball the <strong>24,000 Super Bonus</strong> is lit and you collect the balls again." },
        { title: "Bank Shot",
          body: "The candy-cane lane on the right: 300, then 600 + <strong>2×</strong>, 900 + <strong>3×</strong>, 1,200 + <strong>5×</strong>, then extra ball (15,000 in competition), then 5,000. Bonus X resets every ball, so take it to 5× every ball once you have a few pool balls. After lanes 1–4, the lit top lane also advances it." },
        { title: "8-ball, spinner and kickback",
          body: "The <strong>8-ball target</strong> (top right) lights the left kickback and the spinner (1,000 a spin instead of 10). Using the kickback unlights both, so relight them right away. The left outlane is one of the hungriest in pinball." },
      ],
      shots: [
        { name: "Bank Shot", why: "Bonus X up to 5×." },
        { name: "8-ball target", why: "Kickback and lit spinner; completes the rack." },
        { name: "Spinner (when lit)", why: "1,000 a spin; feeds the top lanes." },
      ],
      avoid: [
        "Tilting: most of your score is bonus, so nudge carefully.",
        "Letting the ball drift down-left off the right sling or pops: the left outlane drains fast.",
      ],
      target: "Milestones (estimates): five pool balls and 3× = baseline. A completed rack and 5× = good. Super Bonus collected at 5× = great.",
    },

    info: {
      stats: [
        { label: "Manufacturer", value: "Bally" },
        { label: "Year",         value: "1977 (September)" },
        { label: "Design",       value: "George Christian" },
        { label: "Platform",     value: "Bally -35 (solid state)" },
        { label: "Production",   value: "20,230" },
      ],
      theme: "A Fonz-style pool hall. The first of Bally's three pool games (Eight Ball Deluxe followed in 1981), and one of the first to keep track of each player's own progress. Stellar Airship (Geiger, 1979) is a conversion with the same rules.",
      features: [
        { name: "Pool balls and bonus", desc: "Each collected ball = 3,000 bonus, kept for the whole game. Top lanes (500 each) give 1–4; standup targets give 5 and 6; the right inlane gives 7. Settings may tie lanes 1+4 and 2+3 (common on 3-ball play)." },
        { name: "8-ball and Super Bonus", desc: "The 8-ball target (500) always lights the kickback and spinner. With 1–7 collected it completes the rack: right outlane special (15,000 in competition) and, from the next ball, the 24,000 Super Bonus (multiplied by bonus X); no more balls on the current ball." },
        { name: "Bank Shot", desc: "Star rollover at the back of the candy cane: 300, 600 + 2×, 900 + 3×, 1,200 + 5×, 1,500 + extra ball, then 5,000. After lanes 1–4 are made, a lit top lane (2 or 3, alternating) also scores and advances it. Some settings skip the 300." },
        { name: "Spinner", desc: "10 a spin, or 1,000 a spin once the 8-ball target is hit (until the kickback is used). A weak spinner shot rejects to the left flipper." },
        { name: "Kickback", desc: "Left outlane ('Break Shot Lane'), one use: 5,000; then the kickback and the lit spinner both go out. On some machines it may not get the ball fully back into play." },
      ],
      scoring: [
        { key: "Pool ball",        val: "3,000 bonus each" },
        { key: "Super Bonus",      val: "24,000 (× bonus X)" },
        { key: "Lit spinner",      val: "1,000 a spin" },
        { key: "Bonus X",          val: "2×, 3×, 5× (Bank Shot)" },
        { key: "Extra ball / special (competition)", val: "15,000" },
      ],
      rules: [
        "Base bonus builds over the whole game; bonus X resets every ball.",
        "No scored skill shot; SDPC suggests plunging to the right top lane to bump into the 8-ball target.",
      ],
      benchmarks: [
        { score: "Super Bonus at 5× (estimate)", label: "Great game" },
        { score: "Rack completed + 5×",          label: "Good game" },
        { score: "Five pool balls + 3×",         label: "Baseline" },
      ],
      resources: [
        { name: "Strategy Guide (Pinball Primer)", url: "https://pinballprimer.github.io/eightball_GrN7J.html", icon: "📖" },
        { name: "SDPC Cheatsheet",                 url: "https://pinball.miraheze.org/wiki/Eight_Ball", icon: "📄" },
        { name: "Pinside Game Page",               url: "https://pinside.com/pinball/machine/eight-ball", icon: "🕹️" },
      ],
    },

    strategy: {
      skillShot: "None scored; plunge to the right top lane and try to bump the ball into the 8-ball target to light the kickback and spinner early.",
      multiball: [],
      goal: "<strong>8-ball target first (kickback), pool balls for bonus, Bank Shot to 5× every ball.</strong>",
      phases: [
        { num: "Phase 1", title: "Protect", body: "Light the kickback and spinner at the 8-ball target." },
        { num: "Phase 2", title: "Collect", body: "Top lanes via the lit spinner; 5 and 6 targets from traps on the opposite flipper." },
        { num: "Phase 3", title: "Multiply", body: "Bank Shot to 5×; finish the rack for the Super Bonus." },
      ],
      safeShots: [
        { name: "8-ball target", desc: "Relights the kickback." },
        { name: "Spinner lane", desc: "Back to the top lanes; rejects come to the left flipper." },
      ],
      avoidShots: [
        { name: "Unlit spinner just for points", desc: "Only 10 a spin." },
      ],
      tips: [
        { head: "7-ball", body: "The right inlane rarely comes naturally: a nudge off the wall above the right outlane, or an alley pass from a left trap." },
        { head: "Fast game", body: "Eight Ball plays fast: trap whenever you can." },
      ],
      mistakes: [
        "Skipping the Bank Shot late in a ball with many pool balls collected.",
        "Forgetting to relight the kickback after using it.",
      ],
    },

    hotspots: [
      { x: 45,  y: 18,  type: "key",   label: "1-4", name: "Top Lanes", body: "Pool balls 1–4; lit lane advances the Bank Shot." },
      { x: 83,  y: 52,  type: "key",   label: "BS", name: "Bank Shot", body: "Bonus X 2×, 3×, 5×." },
      { x: 74,  y: 27.5, type: "key",  label: "8",  name: "8-Ball Target", body: "Kickback and spinner; completes the rack." },
      { x: 17,  y: 48.5, type: "key",  label: "SP", name: "Spinner", body: "1,000 a spin when lit." },
      { x: 9.5, y: 55,  type: "info",  label: "5",  name: "5-Ball Target", body: "Pool ball 5." },
      { x: 81,  y: 54.5, type: "info",  label: "6",  name: "6-Ball Target", body: "Pool ball 6." },
      { x: 77,  y: 75,  type: "info",  label: "7",  name: "Right Inlane (7-ball)", body: "Pool ball 7." },
      { x: 45,  y: 54.5, type: "info",  label: "SB", name: "Super Bonus", body: "24,000 after a full rack." },
      { x: 9,   y: 74,  type: "avoid", label: "!",  name: "Left Outlane / Kickback", body: "Very hungry; kickback when lit." },
      { x: 84,  y: 75,  type: "avoid", label: "!",  name: "Right Outlane", body: "Special after a full rack." },
    ],
  };
