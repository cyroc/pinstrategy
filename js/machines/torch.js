  /* ─── TORCH (GOTTLIEB 1980) ──────────────────────────────── */
MACHINES['torch'] = {
    name: "Torch",  sub: "1980 · Gottlieb · System 1 (solid state)",
    tagline: "Roto-target lights a tic-tac-toe grid for up to 10× bonus · lit drop targets worth up to 10,000 each · upper gate collects half the bonus",
    image: "images/torch.webp",
    difficulty: "Medium", diffClass: "diff-medium", era: "SS",

    /* ── QUICK GUIDE (30–90 s read) ───────────────────────────── */
    quick: {
      goal: "Fill the <strong>A-B-C / 1-2-3 grid</strong> with the <strong>roto-target</strong> for a big bonus multiplier (up to <strong>10×</strong>), light both <strong>drop target banks</strong> with the top lanes, then clear lit drops for up to <strong>10,000 each</strong>. With bonus maxed at 20,000, the <strong>upper right gate</strong> cashes in half of it.",
      steps: [
        { title: "Roto-target and grid",
          body: "A hit on the <strong>roto-target</strong> (top left) scores 3,000 and lights a grid square: its column (A, B, C) is the panel you hit, its row (1–3) the number on that panel. B2 is free each ball. Diagonal = 2×, row = 3×, column = 4×, four corners = 5×, <strong>full grid = 10×</strong>. Completing both drop banks, even unlit, lights all four corners: an easy 5×." },
        { title: "Top lanes and drops",
          body: "Each pair of <strong>top lanes</strong> (far left and right of center) lights the drop bank on its side. Every drop advances the bonus; lit drops score 1,000 plus 1,000 per lit grid square (up to 10,000 each). Both banks completed light the upper right standup for a special (points in competition)." },
        { title: "Cash in the bonus",
          body: "Bonus maxes at 20,000. Then a shot through the <strong>upper right gate</strong> scores 10,000 × your multiplier and drops the bonus back to 10,000: at 10× that's 100,000 each time. Bonus and multiplier reset every ball." },
      ],
      shots: [
        { name: "Roto-target", why: "Grid squares for the bonus multiplier." },
        { name: "Upper right gate", why: "Spins the roto; cashes in half the bonus." },
        { name: "Drop target banks", why: "Big points once lit; grid corners." },
      ],
      avoid: [
        "The gap beside each lower post: rolling up the flipper and guide can drop the ball into the outlane.",
        "Spending long on unlit drops once the corners are lit: only 500 a target.",
      ],
      target: "Milestones (estimates): a 4× or 5× grid and lit drops = baseline. A full 10× grid = good. Several 100,000 gate cash-ins = great.",
    },

    info: {
      stats: [
        { label: "Manufacturer", value: "Gottlieb" },
        { label: "Year",         value: "1980 (February)" },
        { label: "Design",       value: "John Buras" },
        { label: "Art",          value: "Gordon Morison" },
        { label: "Platform",     value: "Gottlieb System 1 (solid state)" },
        { label: "Production",   value: "About 3,880" },
      ],
      theme: "Track-and-field athletes and a torch bearer over a world map (working title 'Decathlon'). Two flippers, no ramps, no multiball.",
      features: [
        { name: "Roto-target and grid", desc: "A rotating three-panel target; each panel shows 1, 2 or 3. A hit scores 3,000 and lights the matching grid square. The roto spins on top lanes, the upper right gate and the lower side lanes; the outlanes award the left or right panel shown." },
        { name: "Bonus multiplier", desc: "Diagonal 2×, row 3×, column 4×, four corners 5×, whole grid 10×." },
        { name: "Top lanes", desc: "Two pairs (far left, right of center). Lit lanes 5,000, unlit 500, plus a bonus advance. A completed pair lights the drop bank on its side and that side's lower lane for an extra ball (50,000 in competition)." },
        { name: "Drop targets", desc: "Two banks on the sides. Unlit: 500 a target. Lit: 1,000 + 1,000 per lit grid square (2,000–10,000). Each target is a bonus advance; a completed bank resets at once and spots grid corners. Both banks → upper right special." },
        { name: "Upper right gate", desc: "1,000 and a roto spin. With bonus at 20,000 it also scores 10,000 × the multiplier and resets the bonus to 10,000. The ball may return to the shooter lane for a replunge." },
      ],
      scoring: [
        { key: "Gate cash-in (10×)",  val: "100,000" },
        { key: "Lit drop target",     val: "2,000–10,000" },
        { key: "Max bonus",           val: "20,000 × 10 = 200,000" },
        { key: "Lit top lane",        val: "5,000" },
        { key: "Roto-target",         val: "3,000" },
        { key: "Extra ball / special (competition)", val: "50,000" },
      ],
      rules: [
        "Pop bumpers score 1,000 in 3-ball play (100 in 5-ball).",
        "Lower side lanes: 3,000, a roto spin and a bonus advance; extra ball when lit (50,000 in competition).",
        "Bonus and multiplier never carry over between balls.",
      ],
      benchmarks: [
        { score: "Several 100,000 gate cash-ins (estimate)", label: "Great game" },
        { score: "Full 10× grid",                            label: "Good game" },
        { score: "4×–5× grid and lit drops",                 label: "Baseline" },
      ],
      resources: [
        { name: "Strategy Guide (Pinball Primer)", url: "https://pinballprimer.github.io/torch_G4JbV.html", icon: "📖" },
        { name: "SDPC Cheatsheet",                 url: "https://pinball.miraheze.org/wiki/Torch", icon: "📄" },
        { name: "Pinside Game Page",               url: "https://pinside.com/pinball/machine/torch", icon: "🕹️" },
      ],
    },

    strategy: {
      skillShot: "No scored skill shot; plunge toward the far-left top lanes to start lighting the left drops.",
      multiball: [],
      goal: "<strong>Roto-target to fill the grid → light both drop banks → lit drops → gate cash-ins at 20,000 bonus.</strong>",
      phases: [
        { num: "Phase 1", title: "Grid", body: "Roto-target from the right flipper; upper gate from the left to spin it." },
        { num: "Phase 2", title: "Light the drops", body: "Both top lane pairs." },
        { num: "Phase 3", title: "Cash in", body: "Lit drops to max the bonus, then the gate; repeat." },
      ],
      safeShots: [
        { name: "Roto-target", desc: "From the right flipper (SDPC)." },
        { name: "Upper right gate", desc: "From the left flipper; may give a replunge." },
      ],
      avoidShots: [
        { name: "Unlit drops after the corners", desc: "Only 500 a target; once both banks have spotted their corners, wait until the banks are lit." },
      ],
      tips: [
        { head: "Drops fill corners", body: "Each bank completion spots two corners, so drops help the grid too." },
        { head: "Post nudge", body: "Bounce or nudge the ball off the lower post onto the rail toward the flippers." },
      ],
      mistakes: [
        "Clearing lit drops before the grid has many squares lit.",
        "Forgetting the gate once the bonus is maxed at 20,000.",
      ],
    },

    hotspots: [
      { x: 35, y: 13, type: "key",   label: "RT", name: "Roto-Target", body: "Lights grid squares." },
      { x: 80, y: 19, type: "key",   label: "G",  name: "Upper Right Gate", body: "Roto spin; cashes in half the bonus." },
      { x: 16, y: 54, type: "key",   label: "LD", name: "Left Drop Targets", body: "Lit: up to 10,000 each; spots A1 and C3." },
      { x: 75, y: 53, type: "key",   label: "RD", name: "Right Drop Targets", body: "Lit: up to 10,000 each; spots A3 and C1." },
      { x: 14, y: 22, type: "info",  label: "LL", name: "Left Top Lanes", body: "Light the left drops." },
      { x: 58, y: 12, type: "info",  label: "RL", name: "Right Top Lanes", body: "Light the right drops." },
      { x: 46, y: 48, type: "info",  label: "#",  name: "Bonus Multiplier Grid", body: "2× to 10×." },
      { x: 79, y: 32, type: "info",  label: "SP", name: "Special Target", body: "Lit by both drop banks." },
      { x: 8,  y: 74, type: "info",  label: "EL", name: "Left Side Lane", body: "3,000; extra ball when lit." },
      { x: 84, y: 74, type: "info",  label: "ER", name: "Right Side Lane", body: "3,000; extra ball when lit." },
      { x: 9,  y: 88, type: "avoid", label: "!",  name: "Left Outlane", body: "Drain; awards the left roto value." },
      { x: 83, y: 88, type: "avoid", label: "!",  name: "Right Outlane", body: "Drain; awards the right roto value." },
    ],
  };
