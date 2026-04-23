  /* ─── FLASH GORDON ─────────────────────────────────────────── */
MACHINES['flashgordon'] = {
    name: "Flash Gordon",  sub: "1981 · Bally · Solid-State",
    tagline: "Sci-fi classic · drop target combos & saucer scoring",
    image: "images/flash-gordon.png",
    difficulty: "Hard", diffClass: "diff-hard", era: "SS",

    info: {
      stats: [
        { label: "Manufacturer", value: "Bally Mfg. Co." },
        { label: "Year",         value: "1981" },
        { label: "Type",         value: "Solid-State (MPU-35)" },
        { label: "Body",         value: "Standard" },
        { label: "Theme",        value: "Flash Gordon film (1980)" },
        { label: "Music",        value: "Queen soundtrack" },
      ],
      theme: "Based on the 1980 Flash Gordon film featuring the legendary Queen soundtrack. Flash Gordon must defeat Ming the Merciless. One of Bally's landmark solid-state games with iconic cabinet art.",
      features: [
        { name: "Drop Target Banks", desc: "Multiple banks of drop targets on both sides. Completing banks awards increasing point values and can light special features." },
        { name: "Saucers", desc: "Multiple saucers on the playfield award points and advance bonus. Key scoring features throughout the game." },
        { name: "Spinner", desc: "Center spinner awards points per spin. Feeds the bumper cluster at the top." },
        { name: "Top Rollovers", desc: "Lane rollovers at the top advance bonus and can light extra ball or special." },
        { name: "Bonus Multiplier", desc: "Built via drop target completions. Higher multiplier dramatically increases end-of-ball bonus payout." },
      ],
      scoring: [
        { key: "Drop target banks",  val: "Increasing awards per completion" },
        { key: "Saucer value",       val: "Builds with hits" },
        { key: "Bonus multiplier",   val: "Up to 5×" },
        { key: "End-of-ball bonus",  val: "Primary scoring mechanism" },
      ],
      rules: [
        "End-of-ball <strong>bonus is the primary scoring event</strong> — build base bonus and multiplier throughout each ball.",
        "Drop target completions advance both the bonus multiplier and unlock saucer awards.",
        "Outlane balls are typically unrecoverable — play conservatively on this machine.",
      ],
      benchmarks: [
        { score: "500,000+", label: "Excellent — strong bonus collection each ball" },
        { score: "200,000+", label: "Solid play" },
        { score: "100,000+", label: "Decent — still learning the layout" },
      ],
      resources: [
        { name: "IPDB Entry",        url: "https://www.ipdb.org/machine.cgi?id=858",          icon: "🎯" },
        { name: "Pinside Game Page", url: "https://pinside.com/pinball/machine/flash-gordon", icon: "🕹️" },
      ],
    },

    strategy: {
      skillShot: null,
      multiball: null,
      goal: "<strong>Build bonus multiplier via drop target completions, accumulate a large base bonus, and collect a massive end-of-ball payout every ball.</strong> This is a solid-state bonus game — keep the ball alive and build patiently.",
      phases: [
        { num: "Phase 1 · Early Game", title: "Build the Multiplier", body: "<strong>Complete the drop target banks to advance the bonus multiplier.</strong> Getting to 3× or 5× early sets up large payouts for the rest of the ball. The banks are your primary destination." },
        { num: "Phase 2 · Mid Game", title: "Accumulate Bonus Base", body: "<strong>Work the saucers and rollovers to build the base bonus.</strong> With the multiplier locked in, every bonus advance becomes increasingly valuable. Shoot saucers whenever the ball feeds cleanly." },
        { num: "Phase 3 · Late Game", title: "Survive for the Collect", body: "<strong>Keep the ball alive until end-of-ball bonus collection.</strong> With high multiplier and base bonus, your payout will be substantial. Resist risky shots and play defensively." },
      ],
      safeShots: [
        { name: "Drop Target Banks", desc: "Primary feature — manageable shots with high return value for bonus multiplier advancement." },
        { name: "Center Saucer", desc: "Safe target when the ball arrives naturally. Each hit advances bonus base." },
      ],
      avoidShots: [
        { name: "Outlane-adjacent shots", desc: "Any shot that risks feeding the outlanes is too costly. Ball loss before end-of-ball collect wastes accumulated bonus." },
      ],
      tips: [
        { head: "Multiplier first", body: "Always prioritize reaching maximum multiplier before spending time on base bonus. A high multiplier magnifies every point you've earned." },
        { head: "Trap and aim", body: "Flash Gordon rewards patient ball control. Trap the ball on the flipper and aim deliberately rather than reacting frantically." },
      ],
      mistakes: [
        "Draining before collecting the end-of-ball bonus — this is the biggest points wasted in the game.",
        "Ignoring the multiplier and focusing only on base bonus — the two must be built together.",
        "Playing aggressively and losing balls before the payout.",
      ],
    },

    hotspots: [
      { x:13, y:8,  type:"key",   label:"LR", name:"Left Ramp",                body:"<strong>One of your primary shots.</strong> Sends the ball up and through the upper playfield. Completing both ramps unlocks the Ricochet combo — hit the left ramp then quickly follow with the right for a significant bonus." },
      { x:82, y:8,  type:"key",   label:"RR", name:"Right Ramp",               body:"<strong>Pairs with the left ramp for Ricochet combos.</strong> After a left ramp shot feeds back to the right flipper, fire the right ramp immediately for the Ricochet award. The two ramps together are your best consistent scoring route." },
      { x:22, y:42, type:"safe",  label:"SL", name:"Left Saucer",              body:"Left kickout saucer. Awards points and can advance the bonus multiplier. A reliable safe shot when the ball arrives on the left flipper with no clean ramp angle. Ball ejects back toward center." },
      { x:73, y:42, type:"safe",  label:"SR", name:"Right Saucer",             body:"Right kickout saucer. Similar value to the left saucer. Both saucers are useful for building toward awards between ramp shots." },
      { x:44, y:38, type:"info",  label:"↑",  name:"Pop Bumpers",              body:"Central pop bumper cluster. Feeds the top rollover lanes. Every bumper hit advances bonus passively. Ball returns from the bumpers can go either direction — be ready on both flippers." },
      { x:44, y:62, type:"info",  label:"#",  name:"Numbered Target Sequence", body:"<strong>A ring of numbered targets in the center playfield.</strong> Completing them in sequence awards escalating points. Not a primary strategy target but contributes to bonus building. Hit when the ball arrives naturally in the center area." },
      { x:20, y:52, type:"key",   label:"DL", name:"Left Drop Targets",        body:"<strong>Left bank of drop targets.</strong> Completing the bank advances the bonus multiplier and scores a bank completion bonus. A solid multiplier is important for end-of-ball payouts. Shoot from the right flipper." },
      { x:77, y:52, type:"key",   label:"DR", name:"Right Drop Targets",       body:"<strong>Right bank of drop targets.</strong> Same value as the left bank — completing both banks scores significant awards and multiplier advances. Shoot from the left flipper at mid-strength." },
      { x:12, y:82, type:"avoid", label:"!",  name:"Left Outlane",             body:"Direct drain — no save in competition settings. Shots to the left side that go wide of the left saucer can fall here. Play controlled left-side shots." },
      { x:88, y:82, type:"avoid", label:"!",  name:"Right Outlane",            body:"Right outlane is especially dangerous after fast ramp returns. After a ramp shot, be positioned and ready before the ball clears the upper playfield." },
    ],
  };
