  /* ─── BLACK KNIGHT 2000 (WILLIAMS 1989) ──────────────────── */
MACHINES['blackknight2000'] = {
    name: "Black Knight 2000",  sub: "1989 · Williams · System 11B (alphanumeric)",
    tagline: "Upper playfield Skyway loops · drawbridge locks · Stand Up and Fight Multiball (4M jackpot) · R-A-N-S-O-M · The King's Ransom",
    image: "images/black-knight-2000.webp",
    difficulty: "Medium-Hard", diffClass: "diff-medium-hard", era: "SS",

    /* ── QUICK GUIDE (30–90 s read) ───────────────────────────── */
    quick: {
      goal: "Stay on the <strong>upper playfield</strong>: hit the three <strong>drawbridge targets</strong>, lock 3 balls up the ramp for <strong>Stand Up and Fight Multiball</strong>, and relock a ball for the jackpot (1M–4M). Lock right after completing <strong>W-I-N</strong> to spell <strong>R-A-N-S-O-M</strong> for <strong>The King's Ransom</strong>.",
      steps: [
        { title: "Get upstairs",
          body: "From the lower flippers, shoot the <strong>Skyway</strong> (left ramp) back up. Loops around the upper playfield score 20K and up; a loop right after the Skyway is a 100K combo." },
        { title: "Lock and multiball",
          body: "Hit targets 1-2-3 to lower the <strong>drawbridge</strong>, then shoot up the lock ramp. Three locks start 3-ball multiball: every switch adds 5K to the jackpot (1M to 4M). <strong>Relock a ball</strong> to collect it; one jackpot per multiball, so build it first." },
        { title: "Ransom and hurry-ups",
          body: "Completing <strong>W-I-N</strong> lights a Ransom letter at the lock for ~10 s. Six letters (they carry over) start The King's Ransom: 3 balls, everything lit, 20 s of ball save. <strong>W-A-R</strong> lanes start hurry-ups at the Skyway (200K, rising to 1.5M): one-timer it from the lower right flipper." },
      ],
      shots: [
        { name: "Skyway (left ramp)", why: "Back to the upper playfield; hurry-ups; 1M after B-L-A-C-K." },
        { name: "Drawbridge targets + lock", why: "Multiball, jackpot, Ransom letters." },
        { name: "Upper loop", why: "Skyway loops and combos." },
      ],
      avoid: [
        "The far right lane when unlit: it kicks the ball out toward the center drain (hold the right flipper up).",
        "Collecting the jackpot early: there's only one per multiball.",
      ],
      target: "Milestones (estimates): one Stand Up and Fight Multiball = baseline. A 3M+ jackpot = good. The King's Ransom = great.",
    },

    info: {
      stats: [
        { label: "Manufacturer", value: "Williams" },
        { label: "Year",         value: "1989" },
        { label: "Design",       value: "Steve Ritchie" },
        { label: "Platform",     value: "Williams System 11B (alphanumeric)" },
      ],
      theme: "Sequel to Black Knight (1980): two playfield levels, a motorized drawbridge, the Lightning Wheel and the Black Knight's taunts.",
      features: [
        { name: "Upper playfield", desc: "W-I-N lanes (bonus X up to 5× and a Ransom letter at the lock), Skyway loops (20K +20K per combo; 2 in a row light an extra ball at the Skyway and Hold Bonus), drawbridge targets and lock ramp, W-A-R lanes at the bottom." },
        { name: "Stand Up and Fight Multiball", desc: "3 locks (balls can be stolen). Jackpot 1M + 5K per switch, max 4M; collected by relocking a ball up the drawbridge ramp. If not collected, it stays lit ~12 s after multiball." },
        { name: "W-A-R hurry-ups", desc: "Complete W-A-R: hurry-up at the Skyway: 200K, 500K, 750K, 1M, 1.5M. During Double Knights Challenge or King's Ransom W-A-R = instant 1M." },
        { name: "Lower playfield", desc: "6 drop targets (2 banks): completing all spells a B-L-A-C-K letter and relights kickback and magna save; B-L-A-C-K lights the Skyway for 1M. U-Turn: 25K, +25K each (to 250K); lights the far right lane for Double Knights Challenge (2-ball)." },
        { name: "Lightning lane", desc: "Lit Spin: Lightning Wheel mystery (points to 250K, hurry-up, drawbridge, kickback/magna save, Ransom letter, Double Knights Challenge)." },
        { name: "The King's Ransom", desc: "6 R-A-N-S-O-M letters (carry over between games): bonus maxed at 5×, U-Turn 250K, W-A-R 1M, Skyway 1M, jackpot lit, 3-ball multiball with 20 s ball save." },
      ],
      scoring: [
        { key: "Stand Up and Fight jackpot", val: "1M–4M" },
        { key: "W-A-R hurry-up",            val: "200K → 1.5M" },
        { key: "Skyway after B-L-A-C-K",    val: "1M" },
        { key: "W-A-R in DKC / Ransom",     val: "1M" },
        { key: "U-Turn",                    val: "25K, +25K to 250K" },
        { key: "Ramp-loop combo",           val: "100K" },
      ],
      rules: [
        "Kickback in the left outlane (lit each ball); magna save on the right (button, ~5 s magnet).",
        "Last Chance: last ball with exactly 2 locked balls: an outlane drain releases them as 2-ball multiball (once per player).",
        "Bonus: 3K per loop + 3K per U-Turn (game totals, max 99 each) × bonus X.",
        "Drawbridge: on hard settings, or after the first Stand Up and Fight, it may re-raise after each lock.",
        "Double Knights Challenge can't start with 2 balls already locked; the jackpot can't be raised in a King's Ransom multiball.",
        "Competition: specials score 100K (extra balls probably the same).",
      ],
      benchmarks: [
        { score: "The King's Ransom (estimate)", label: "Great game" },
        { score: "3M+ jackpot",                  label: "Good game" },
        { score: "One multiball",                label: "Baseline" },
      ],
      resources: [
        { name: "Strategy Guide (Pinball Primer)", url: "https://pinballprimer.github.io/bk2000_GrxPP.html", icon: "📖" },
        { name: "Rulesheet (Pinball Archive)",     url: "https://pinball.org/rules/blackknight2000.html", icon: "📄" },
        { name: "Pinside Game Page",               url: "https://pinside.com/pinball/machine/black-knight-2000", icon: "🕹️" },
      ],
    },

    strategy: {
      skillShot: "None as such; the plunge feeds the upper playfield, so start looping and working the drawbridge targets.",
      multiball: [
        { name: "Stand Up and Fight", balls: 3, locks: "Drawbridge targets 1-2-3, then the lock ramp (3 locks).", start: "Third lock.", jackpots: "1M + 5K per switch (max 4M); relock a ball to collect, once per multiball.", tip: "Let switches build the jackpot, then relock; the lightning lane also returns balls upstairs." },
        { name: "Double Knights Challenge", balls: 2, locks: "U-Turn lights the far right lane briefly.", start: "Far right lane.", jackpots: "W-A-R lanes = 1M each time.", tip: "Drawbridge stays up during it." },
        { name: "The King's Ransom", balls: 3, locks: "R-A-N-S-O-M letters (lock within ~10 s of W-I-N).", start: "Sixth letter.", jackpots: "Skyway 1M, W-A-R 1M, U-Turn 250K, jackpot at the lock; 20 s ball save.", tip: "Shoot the Skyway and the lock while the ball save lasts." },
      ],
      goal: "<strong>Upper playfield control → W-I-N then lock (Ransom letters) → multiball jackpot near max → Skyway hurry-ups.</strong>",
      phases: [
        { num: "Phase 1", title: "Upstairs", body: "Skyway back up; loops for combos; drawbridge targets." },
        { num: "Phase 2", title: "Locks with letters", body: "Complete W-I-N, then lock within ~10 s for a Ransom letter." },
        { num: "Phase 3", title: "Multiball", body: "Build the jackpot, relock, then keep the multiball going for the next one." },
      ],
      safeShots: [
        { name: "Skyway ramp", desc: "Returns the ball to the upper playfield." },
        { name: "Lightning lane", desc: "Always sends the ball upstairs (hold the upper right flipper up)." },
      ],
      avoidShots: [
        { name: "Far right lane (unlit)", desc: "Dangerous kickout toward the center." },
      ],
      tips: [
        { head: "Hurry-ups", body: "Only a direct shot from the lower right flipper collects one near full value, but collect every hurry-up anyway: the next one is worth more." },
        { head: "Stay upstairs", body: "Nudge the ball across the tops of the W-A-R lanes; if it falls after W-I-N, the Lightning lane sends it back up in time to lock for the Ransom letter." },
        { head: "Multiball hold", body: "In any multiball the far right lane holds a ball ~10 s: fewer balls to manage." },
        { head: "Drop targets", body: "One complete bank is a checkpoint; only shoot them when you need the kickback or magna save relit (each completion speeds up the reset)." },
        { head: "Last Chance", body: "On the last ball, 2 locked balls are worth keeping: an outlane drain gives a 2-ball multiball." },
      ],
      mistakes: [
        "Collecting the jackpot at 1M right after multiball starts.",
        "Locking without W-I-N lit: you miss the Ransom letter.",
      ],
    },

    hotspots: [
      { x: 29, y: 26, type: "key",   label: "DB", name: "Drawbridge / Lock Ramp", body: "1-2-3 targets lower it; lock balls; jackpot." },
      { x: 21, y: 48, type: "key",   label: "SK", name: "Skyway (left ramp)", body: "Back upstairs; hurry-ups; 1M after B-L-A-C-K." },
      { x: 66, y: 12, type: "info",  label: "WIN", name: "W-I-N Lanes", body: "Bonus X; Ransom letter at the lock." },
      { x: 56, y: 45, type: "info",  label: "WAR", name: "W-A-R Lanes", body: "Hurry-ups at the Skyway." },
      { x: 68, y: 25, type: "info",  label: "P",  name: "Pop Bumpers", body: "Upper playfield." },
      { x: 45, y: 56, type: "key",   label: "DT", name: "G-H-T Drop Targets", body: "With K-N-I: B-L-A-C-K letters; relight kickback and magna save." },
      { x: 19, y: 64, type: "info",  label: "DT", name: "K-N-I Drop Targets", body: "Left bank of the six drops." },
      { x: 35, y: 50, type: "key",   label: "UT", name: "U-Turn", body: "25K +25K; lights the far right lane for Double Knights Challenge." },
      { x: 63, y: 61, type: "info",  label: "LL", name: "Lightning Lane", body: "Lightning Wheel spin; back upstairs." },
      { x: 74, y: 62, type: "avoid", label: "FR", name: "Far Right Lane", body: "Double Knights Challenge when lit; dangerous kickout otherwise." },
      { x: 27, y: 66, type: "info",  label: "BL", name: "B-L-A-C-K", body: "Letters from the drop targets." },
      { x: 5,  y: 82, type: "avoid", label: "!",  name: "Left Outlane", body: "Kickback when lit." },
      { x: 86, y: 82, type: "avoid", label: "!",  name: "Right Outlane", body: "Magna save above it." },
    ],
  };
