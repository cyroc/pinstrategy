  /* ─── RACK EM UP ───────────────────────────────────────────── */
MACHINES['rackemup'] = {
    name: "Rack Em Up",  sub: "1983 · Bally · Solid-State",
    tagline: "Pool hall theme · sequential targets & bonus build",
    image: "images/rack-em-up.jpg",
    difficulty: "Medium", diffClass: "diff-medium", era: "SS",

    info: {
      stats: [
        { label: "Manufacturer", value: "Bally Mfg. Co." },
        { label: "Year",         value: "1983" },
        { label: "Type",         value: "Solid-State" },
        { label: "Body",         value: "Standard" },
        { label: "Theme",        value: "Pool / billiards" },
      ],
      theme: "Pool hall theme with billiard ball motif. Players pot numbered balls in sequence just like 8-ball pool. A late Bally solid-state title with sequential target play at its core.",
      features: [
        { name: "Numbered Drop Targets (1–8)", desc: "The central feature. Hit drop targets numbered 1 through 8 in sequence — like potting pool balls in order. Sequential completion awards major points." },
        { name: "8-Ball Target", desc: "The final and most valuable target. Hitting 8 last (after 1–7) completes the rack and awards the largest single bonus." },
        { name: "Bonus Multiplier Lanes", desc: "Top and side lanes advance the bonus multiplier. Higher multiplier makes each rack completion significantly more valuable." },
        { name: "Saucer / Kickout", desc: "Awards points and can advance multiplier or light features." },
      ],
      scoring: [
        { key: "Sequential 1–8 completion", val: "Major rack bonus" },
        { key: "Bonus multiplier",           val: "Up to 5×" },
        { key: "End-of-ball bonus",          val: "Primary scoring event" },
      ],
      rules: [
        "Drop targets must be hit in <strong>sequential order</strong> (1 → 2 → 3 ... → 8). Out-of-order hits do not advance the sequence.",
        "End-of-ball <strong>bonus is the primary payout</strong> — build it each ball and protect it.",
        "Higher bonus multiplier dramatically increases the end-of-ball bonus collect.",
      ],
      benchmarks: [
        { score: "300,000+", label: "Excellent — completing multiple racks with high multiplier" },
        { score: "100,000+", label: "Solid play" },
        { score: "40,000+",  label: "Getting comfortable with the sequence" },
      ],
      resources: [
        { name: "IPDB Entry",        url: "https://www.ipdb.org/machine.cgi?id=1913",        icon: "🎯" },
        { name: "Pinside Game Page", url: "https://pinside.com/pinball/machine/rack-em-up",  icon: "🕹️" },
      ],
    },

    strategy: {
      skillShot: null,
      multiball: null,
      goal: "<strong>Hit drop targets 1 through 8 in sequential order to rack up bonus, advance the multiplier via lane rollovers, and collect a large end-of-ball bonus every ball.</strong> Patience and sequence discipline win on this machine.",
      phases: [
        { num: "Phase 1 · Early Game", title: "Advance the Multiplier", body: "<strong>Complete the top and side lanes to build the bonus multiplier before working the numbered targets.</strong> Higher multiplier means every subsequent rack completion pays more. Aim for at least 3× before committing to the drop target sequence." },
        { num: "Phase 2 · Mid Game", title: "Run the Sequence (1–8)", body: "<strong>Hit targets 1 through 8 in strict order.</strong> Wait for the ball to settle on the flipper before each shot. If you're forced out of sequence, wait for the next opportunity rather than scrambling and hitting the wrong target." },
        { num: "Phase 3 · Late Game", title: "Survive for the Bonus Collect", body: "<strong>Once the rack is complete or near-complete, focus on keeping the ball alive.</strong> The end-of-ball bonus is your biggest payout — every second of survival is more bonus accruing." },
      ],
      safeShots: [
        { name: "Next sequential target (1–8)", desc: "Always your primary target. Hit the next number in sequence from a controlled flipper position. Methodical, not rushed." },
        { name: "Top lanes (multiplier)", desc: "Reliable shots that advance the multiplier. Safe approach from either flipper." },
      ],
      avoidShots: [
        { name: "Out-of-sequence targets", desc: "Hitting the wrong numbered target resets your position in the sequence — a waste of a shot. If the ball won't land on the right target, hold and wait." },
      ],
      tips: [
        { head: "Trap before every target shot", body: "Rack Em Up rewards deliberate play. Trap the ball, identify the next sequential target, then shoot. Don't react — plan each shot." },
        { head: "Multiplier is king", body: "At 5× multiplier, a full rack completion pays five times what it does at 1×. Invest your early game in multiplier lanes — it pays dividends all game." },
      ],
      mistakes: [
        "Hitting out-of-sequence drop targets and resetting your progress.",
        "Neglecting the multiplier lanes early and completing racks at 1× or 2× value.",
        "Playing aggressively and draining before the end-of-ball bonus payout.",
        "Rushing shots instead of trapping and aiming — this machine punishes impatience.",
      ],
    },

    hotspots: [
      { x:48, y:12, type:"key",   label:"T1", name:"Top Saucer #1 (Left)",      body:"<strong>One of three top saucers that award points and advance the bonus multiplier.</strong> Hit any top saucer to score — they build in value as you hit them. These are your most reliable bonus-building shots." },
      { x:65, y:12, type:"key",   label:"T2", name:"Top Saucer #2 (Right)",     body:"Second top saucer. All three top saucers award escalating point values and advance the multiplier. Shoot from whichever flipper gives you the cleanest angle — they're wide targets, very forgiving." },
      { x:38, y:30, type:"info",  label:"↑",  name:"Pop Bumpers",               body:"Upper bumper cluster. Each hit advances bonus. Feeds the top lanes and top saucers passively. Returns are unpredictable — always be ready." },
      { x:22, y:40, type:"key",   label:"1",  name:"Numbered Targets (Left)",   body:"<strong>Hit these targets in strict sequential order (1 → 2 → 3 ... → 8).</strong> Each hit in sequence scores and advances the rack. An out-of-order hit does not advance the sequence. Trap the ball and aim deliberately before each shot." },
      { x:72, y:40, type:"key",   label:"8",  name:"Numbered Targets (Right)",  body:"<strong>Right side of the numbered target sequence.</strong> Completing 1 through 8 in order earns the full rack bonus — your primary scoring event. Always know which number is next before you shoot. Patience over speed." },
      { x:50, y:55, type:"key",   label:"🎱", name:"Pool Ball Triangle",        body:"<strong>The pool rack layout of bonus targets in the center.</strong> These accumulate bonus base as you complete sequences. Building a large base bonus combined with a high multiplier is how big scores happen. Every sequence completion adds to your end-of-ball payout." },
      { x:50, y:7,  type:"safe",  label:"TL", name:"Top Rollover Lanes",        body:"Top lane rollovers advance the bonus multiplier. Completing them multiple times can light Extra Ball or Special. Pass through both lanes in a single ball for maximum effect." },
      { x:12, y:82, type:"avoid", label:"!",  name:"Left Outlane",              body:"Drain hazard. Protect the left side — a ball that goes wide on any left-flipper target shot can trickle toward the outlane. Trap first, then aim." },
      { x:88, y:82, type:"avoid", label:"!",  name:"Right Outlane",             body:"Right outlane is particularly dangerous on missed right-side shots. Only shoot right-side targets from a controlled, trapped position." },
    ],
  };
