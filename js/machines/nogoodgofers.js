  /* ─── NO GOOD GOFERS ────────────────────────────────────── */
MACHINES['nogoodgofers'] = {
    name: "No Good Gofers", sub: "1997 · Williams · Standard",
    tagline: "Golf theme · Hole-in-One loop + cumulative End-of-Ball Bonus",
    image: "images/no-good-gofers.png",
    difficulty: "Medium", diffClass: "diff-medium", era: "DMD",

    info: {
      stats: [
        { label: "Manufacturer", value: "Williams Electronics" },
        { label: "Year",         value: "1997" },
        { label: "Designers",    value: "Pat Lawlor & Louis Koziarz" },
        { label: "Programmer",   value: "Louis Koziarz" },
        { label: "Production",   value: "2,711 units" },
        { label: "Platform",     value: "WPC" },
      ],
      theme: "A golf course overrun by Bud and Buzz — two no-good gofer characters (animatronic figures who pop up from behind ramps). Complete 18 holes of golf by hitting Drive Shots to light 'Putt Out' at the Putting Green, then sinking the ball. Hole-in-Ones and low-stroke completions build a massive cumulative End-of-Ball Bonus.",
      features: [
        { name: "Skill Shot (6)", desc: "Partial-power plunge to hit Skill Shot Spot Targets Bank — 75K first, +25K each ball. Instantly completes all Drive Shots and lights Putt Out for the current hole." },
        { name: "Hole-in-One Sequence", desc: "<strong>Left Ramp (7) → Left Inlane → Slam Ramp (17)</strong> → Hole-in-One Hole (11) = current hole completed in 1 stroke = 250K End-of-Ball Bonus. Best per-hole value." },
        { name: "Putting Green (8)", desc: "Sink ball here when 'Putt Out' is lit to complete holes. 'Water Hazard' (10–99K, no completion) if shot without Putt Out lit. Extra Ball after 4th hole." },
        { name: "End-of-Ball Bonus (CUMULATIVE)", desc: "<strong>The End-of-Ball Bonus accumulates across the ENTIRE game</strong> — it does not reset between balls. Each hole completion adds based on stroke count: 1 stroke = 250K, 2 = 125K, ... 7 = 10K." },
        { name: "Cart Path (Bonus Multiplier)", desc: "Right Inlane → Left Cart Path (4), or Outer Left Inlane → Right Cart Path (14). Each Cart Path shot escalates value. Multiplier advances at 1st, 3rd, 5th shots (+1× each). Max 5×. <strong>Resets each ball.</strong>" },
        { name: "Whirlwheel", desc: "Spun by hole completions (and Jet Bumpers, Captive Ball, Spinner). Awards: Hole-in-One (instant 1-stroke), Q Jackpot (Left Ramp Jackpot), Big Points (1M+), Player's Choice, Speed Golf, Ripoff, Kickback, etc." },
        { name: "3-Ball Multiball", desc: "Centre Ramp → hit Bud → lock; Centre Ramp → hit Buzz → lock → Putting Green = Multiball. Jackpot at Left Ramp (3.5M). Left Inlane → Slam Ramp → Hole-in-One = Super Jackpot (2× Jackpot = 7M+)." },
      ],
      scoring: [
        { key: "Skill Shot (1st ball)",      val: "75K (then +25K each)" },
        { key: "Hole-in-One completion",     val: "250K to cumulative bonus" },
        { key: "Hole complete (par, 2 str)", val: "125K to cumulative bonus" },
        { key: "End-of-Ball Bonus",          val: "Cumulative all game (NOT per ball)" },
        { key: "Bonus Multiplier (max)",     val: "5× via Cart Path shots (resets/ball)" },
        { key: "Multiball Left Ramp Jackpot", val: "3.5M" },
        { key: "Multiball Super Jackpot",    val: "2× last Jackpot = 7M+" },
        { key: "Completing 18th hole",       val: "10M + course restarts" },
      ],
      rules: [
        "<strong>End-of-Ball Bonus is cumulative all game</strong> — does NOT reset between balls. Every 1-stroke hole adds 250K permanently.",
        "<strong>Bonus Multiplier resets each ball</strong> — build via Cart Path shots (right/left inlane → cart path) every ball. Get to 5× early.",
        "<strong>Skill Shot instantly completes all Drive Shots</strong> for current hole → Putt Out lights immediately. Use every ball.",
        "<strong>Hole 1 requires no Drive Shots</strong> — Putt Out lights automatically. Holes 2–9 need 2 Drive Shots. Holes 10–18 need 3.",
        "<strong>Slam Ramp only opens briefly</strong> after Left Ramp → Left Inlane sequence. Shoot immediately.",
        "<strong>Kickback active at game start</strong> — relit via K-I-C-K Targets (16) two completions. Up to 2 stacked.",
        "<strong>Stroke penalties:</strong> Sand Trap Saucer (1) = +1 stroke. Outlane drain = +1 stroke. Hitting Bud/Buzz when they appear = -1 stroke.",
      ],
      benchmarks: [
        { score: "30M+",  label: "Excellent — consistent Hole-in-Ones + Multiball" },
        { score: "10M+",  label: "Good — several holes completed, Multiball once" },
        { score: "< 3M",  label: "Skill Shot missed, holes not completed consistently" },
      ],
      resources: [
        { name: "IPDB Entry",       url: "https://www.ipdb.org/machine.cgi?id=1847",                    icon: "🎯" },
        { name: "Pinside Game Page",url: "https://pinside.com/pinball/machine/no-good-gofers",           icon: "🕹️" },
        { name: "Zen Studios Guide",url: "https://zensite.wpenginepowered.com/wp-content/uploads/2025/05/No-Good-Gofers-Pinball-Guide-by-ShoryukenToTheChin.pdf", icon: "📖" },
      ],
    },

    strategy: {
      skillShot: "Partial-power plunge to hit the <strong>Skill Shot Spot Targets Bank (6)</strong> — 75K + instantly completes all Drive Shots + lights Putt Out. Allows immediate hole completion without additional shots.",
      multiball: "<strong>Centre Ramp → hit Bud → lock → Centre Ramp → hit Buzz → lock → Putting Green = 3-Ball Multiball.</strong> Left Ramp (7) = 3.5M Jackpot. After Jackpot: Left Inlane → Slam Ramp → Hole-in-One Hole = Super Jackpot (2× last Jackpot = 7M+). 'Free Locks' Whirlwheel award spots 1 lock.",
      goal: "Use Skill Shot to instantly light Putt Out every ball. Execute Hole-in-One loop (Left Ramp → Left Inlane → Slam Ramp) for 1-stroke completions (250K each to cumulative bonus). Rebuild Bonus Multiplier to 5× via Cart Path shots each ball. Over 18 holes at 1 stroke each: 250K × 18 × 5× = 22.5M bonus alone. Activate 3-Ball Multiball for 3.5M Jackpot + 7M Super Jackpot.",
      phases: [
        { num: "Phase 1 · Each Ball", title: "Skill Shot + K-I-C-K + Multiplier", body: "Skill Shot (75K + instant Putt Out). Complete K-I-C-K Targets for Kickback (2 stacked). Cart Path shots via Right/Left Inlane × 5 for 5× Bonus Multiplier. Then Hole-in-One loop." },
        { num: "Phase 2 · Hole Completion Loop", title: "Hole-in-One for 250K each", body: "Left Ramp → Left Inlane → Slam Ramp within the brief window → Hole-in-One Hole = 1-stroke completion. Sink Putting Green for each completed hole. Hit Bud/Buzz when they appear for -1 stroke (100K+). Avoid Sand Trap." },
        { num: "Phase 3 · Multiball + Late Holes", title: "7M+ Super Jackpot", body: "Multiball via Centre Ramp Bud/Buzz lock sequence. Left Ramp Jackpot (3.5M) → Hole-in-One Super Jackpot (7M). Holes 10–18 need 3 Drive Shots each — Skill Shot still works to shortcut this. Complete 18th hole = 10M + course restart." },
      ],
      safeShots: [
        { name: "Left Ramp (7)", desc: "Primary safe shot. Feeds Left Inlane every time, enabling Slam Ramp. Also Drive Shot and Multiball Jackpot." },
        { name: "Putting Green (8)", desc: "Safe when Putt Out is lit. Consistent ball path." },
        { name: "K-I-C-K Targets Bank (16)", desc: "Wide bank, easy to hit. Kickback protection on open outlanes." },
      ],
      avoidShots: [
        { name: "Sand Trap Saucer (1)", desc: "+1 stroke penalty. Never deliberately shoot it." },
        { name: "Putting Green without Putt Out lit", desc: "Water Hazard result — wastes a shot without completing hole." },
      ],
      tips: [
        { head: "End-of-Ball Bonus is the whole game", body: "The bonus is cumulative all game. 18 holes at 1 stroke each × 5× multiplier = 22.5M just from bonus. Consistent Hole-in-Ones and high multiplier each ball compound enormously." },
        { head: "Player's Choice Whirlwheel = pick Big Points or Hole-in-One", body: "When Whirlwheel offers Player's Choice, stop it on 'Hole-in-One' (instant 1-stroke completion, 250K bonus) or 'Big Points' (1M first, +1M each time)." },
        { head: "Kickback stacks to 2", body: "Restore both Kickback uses via K-I-C-K Target completions each ball. Outlane drains also add stroke penalties — Kickback prevents both ball loss and stroke count increase." },
      ],
      mistakes: [
        "Missing the Skill Shot and grinding Drive Shots instead — wastes ball time on Hole-in-One opportunities.",
        "Shooting Putting Green before Putt Out is lit — Water Hazard, no hole completion.",
        "Not rebuilding Bonus Multiplier each ball — it resets, so 5× must be re-earned every ball.",
        "During Multiball, not immediately following Jackpot with Hole-in-One Super Jackpot sequence.",
      ],
    },

    hotspots: [
      { x:18, y:25, type:"key",   label:"LR", name:"Left Ramp (7)",             body:"<strong>Core shot.</strong> Drive Shot + Hole-in-One setup (feeds Left Inlane → Slam Ramp). Multiball Jackpot (3.5M). Every Left Ramp feeds Left Inlane — watch immediately for Slam Ramp." },
      { x:50, y:18, type:"key",   label:"SR", name:"Slam Ramp (17)",            body:"<strong>Hole-in-One = 1 stroke = 250K bonus per hole.</strong> Opens briefly after Left Ramp → Left Inlane. Shoot immediately. After Jackpot on Left Ramp: Left Inlane → Slam Ramp = Super Jackpot (7M+)." },
      { x:72, y:28, type:"safe",  label:"PG", name:"Putting Green (8)",         body:"Complete hole here when 'Putt Out' is lit. Skill Shot lights it instantly. Don't shoot without Putt Out — Water Hazard only." },
      { x:50, y:38, type:"safe",  label:"CP", name:"Cart Path",                 body:"Right Inlane → Left Cart Path (or Outer Left Inlane → Right Cart Path). +1× Bonus Multiplier at 1st, 3rd, 5th shots = max 5×. Resets each ball — rebuild early." },
      { x:48, y:50, type:"info",  label:"KI", name:"K-I-C-K Targets (16)",     body:"Complete K-I-C-K twice to relight Kickback × 2. Essential on open outlanes. Restore immediately if used." },
      { x:65, y:35, type:"info",  label:"WW", name:"Whirlwheel",               body:"Spins on hole completion. Players Choice: stop on Hole-in-One (instant 250K), Q Jackpot, or Big Points (1M+). Avoid 'Bad Shot'." },
      { x:7,  y:82, type:"avoid", label:"!",  name:"Left Outlane (Kickback)",   body:"Kickback active at start. Keep K-I-C-K completed for up to 2 stacked saves." },
      { x:88, y:82, type:"avoid", label:"!",  name:"Right Outlane",             body:"No rubber. Right-side shots too weak drain right — full-power shots only." },
    ],
  };
