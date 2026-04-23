  /* ─── MEDIEVAL MADNESS ─────────────────────────────────────── */
MACHINES['mm'] = {
    name: "Medieval Madness",  sub: "1997 · Williams · WPC-95",
    tagline: "Castle siege · multiball chaos & merlin's magic",
    image: "images/medieval-madness.webp",
    difficulty: "Medium", diffClass: "diff-medium", era: "DMD",

    info: {
      stats: [
        { label: "Manufacturer", value: "Williams Electronics" },
        { label: "Year",         value: "1997" },
        { label: "Designer",     value: "Brian Eddy" },
        { label: "Platform",     value: "WPC-95" },
        { label: "Multiball",    value: "2–4 ball (Madness) & 3-ball (Castle)" },
        { label: "Theme",        value: "Medieval / comedy" },
      ],
      theme: "Comedic medieval theme with a fully functional drawbridge and castle that can be destroyed. Players attack a royal castle, battle trolls, and interact with Merlin. Considered one of the greatest pinball machines ever made.",
      features: [
        { name: "Castle (Center)", desc: "The central feature — shoot the castle gate to lower the drawbridge, then shoot through to score. Destroying the castle (multiple hits) awards major points and starts modes." },
        { name: "Left & Right Ramps (Jousting)", desc: "Ramp shots award Joust awards and help build toward multiball. Clean, flowing shots that feed back to the flippers." },
        { name: "Castle Multiball (3-ball)", desc: "Shoot Castle Lock 3 times (6 times after the first) to start 3-ball multiball. Shoot ramps for 750K jackpots, then Castle Lock for 1.5M Super Jackpot." },
        { name: "Multiball Madness (2–4 ball)", desc: "Light Madness lamps (Troll, Damsel, Kingdom, Joust, Catapult) by completing each mode. Activate via Merlin Saucer. 5 lamps = 4-ball multiball with Super Jackpots on matching lanes." },
        { name: "Trolls (Pop Bumpers)", desc: "Four pop bumpers in the upper playfield. Troll bumper hits advance toward troll-related awards." },
        { name: "Damsel / Merlin Lanes", desc: "Top lanes spell D-A-M-S-E-L. Completing awards bonus multiplier increases and Merlin awards." },
        { name: "King of the Realm", desc: "Accumulate enough castle hits across the game to become King. Huge scoring award — the grand achievement of the game." },
      ],
      scoring: [
        { key: "Castle hit value",       val: "Increases with each hit" },
        { key: "Castle Multiball jackpot", val: "750K per ramp, 1.5M Super Jackpot" },
        { key: "Multiball Madness jackpot", val: "Super Jackpots on lit lanes" },
        { key: "Castle destruction",     val: "Major bonus + mode start" },
        { key: "King of Realm",          val: "Grand scoring milestone" },
      ],
      rules: [
        "<strong>Skill Shot every ball</strong> — plunge to the lit upper rollover for +5× Bonus Multiplier. Standard Skill Shot is more reliable than Super Skill Shot.",
        "The <strong>castle gate</strong> must be opened (drawbridge down) before you can shoot through it. Lower it with a direct gate hit.",
        "<strong>Castle Multiball</strong> (3-ball) uses ramp jackpots (750K each) and Super Jackpot (1.5M) at Castle Lock. Complete 5 ramps for Super Jackpot.",
        "<strong>Multiball Madness</strong> scales with Madness lamps lit — light all 5 for 4-ball multiball with Super Jackpots. Always try to start with all 5 lit.",
        "Completing <strong>DAMSEL/FIRE rollovers</strong> advances the bonus multiplier — +2× per completion.",
      ],
      benchmarks: [
        { score: "2B+",    label: "Excellent — Castle Siege Multiball mastered" },
        { score: "500M+",  label: "Solid play — consistent castle hits" },
        { score: "150M+",  label: "Getting the castle flow" },
      ],
      resources: [
        { name: "IPDB Entry",        url: "https://www.ipdb.org/machine.cgi?id=1603",              icon: "🎯" },
        { name: "Pinside Game Page", url: "https://pinside.com/pinball/machine/medieval-madness-b", icon: "🕹️" },
      ],
    },

    strategy: {
      skillShot: "Plunge to roll down the <strong>lit upper rollover</strong> — scores 50K+ and <strong>+5× Bonus Multiplier</strong>. Use flipper buttons before launch to select which rollover is lit. Do not miss this — the multiplier is the foundation of all bonus scoring.",
      multiball: [
        { name: "Castle Multiball", balls: 3,
          locks: "Shoot Castle Lock (centre) 3 times to lock balls (6 times after the first multiball).",
          start: "Lock 3 balls → Castle Multiball begins.",
          jackpots: "Shoot Left Ramp or Right Ramp for 750K jackpots. Hit 5 ramp jackpots to light Super Jackpot (1.5M) at Castle Lock. After Super Jackpot: all major lanes light for Super Jackpots, increasing by 250K–500K each cycle.",
          tip: "Focus only on the two ramps during Castle Multiball — don't chase other targets. Ramp → ramp → Super Jackpot is the cleanest path." },
        { name: "Multiball Madness", balls: 4,
          locks: "Light Madness lamps (one per mode completed: Troll, Damsel, Kingdom, Joust, Catapult). Activate at Merlin Saucer when lamps are lit.",
          start: "1 lamp = 2-ball, 2–4 lamps = 3-ball, 5 lamps = 4-ball multiball.",
          jackpots: "Lanes matching lit Madness lamps = Super Jackpots. Castle Lock = Super Double Jackpot (always). Highest value when all 5 lamps are lit.",
          tip: "Try to light all 5 Madness lamps before activating. The Troll Madness trick: light 4 lamps + kill both trolls during Multiball Madness to trigger Troll Madness and relaunch any drained balls." },
      ],
      goal: "<strong>Land the Skill Shot every ball (+5× Bonus Multiplier), complete FIRE rollovers to stack the multiplier further, and work toward Castle Multiball via Castle Lock.</strong> Build Madness lamps for Multiball Madness. The Bonus Multiplier combined with Madness jackpots is the core of all big scores.",
      phases: [
        { num: "Phase 1 · Every Ball", title: "Skill Shot + Multiplier Stack", body: "<strong>Land the Skill Shot for +5× Bonus Multiplier.</strong> Then complete FIRE rollovers (inlane/outlane, use flipper buttons) for +2× per completion. Stack multiplier as high as possible early — it carries throughout the ball." },
        { num: "Phase 2 · Castle + Madness Setup", title: "Castle Lock + Light Madness Lamps", body: "<strong>Shoot Castle Lock to build toward Castle Multiball.</strong> Between lock shots, shoot ramps (Jousting), hit Merlin Saucer for Merlin's Magic awards, and complete Troll/Damsel/Joust/Catapult modes to light Madness lamps. Try to light all 5 before Multiball Madness." },
        { num: "Phase 3 · Multiball", title: "Ramps for Jackpots, Madness for Super Jackpots", body: "<strong>Castle Multiball:</strong> Ramp → ramp → ramp → ramp → ramp → Castle Lock Super Jackpot (1.5M). Stay disciplined on ramps only. <strong>Multiball Madness:</strong> Shoot lanes matching your lit Madness lamps for Super Jackpots. Castle Lock = Super Double Jackpot always." },
      ],
      safeShots: [
        { name: "Left Ramp (Jousting)", desc: "Flows back cleanly to the left flipper. Safe, consistent scoring — always a good choice when the castle is closed." },
        { name: "Right Ramp (Jousting)", desc: "Feeds back to the right flipper reliably. Comfortable repeating shot." },
        { name: "Castle Gate (open)", desc: "When the drawbridge is down, the castle shot is a high-value, moderately safe target. Your primary objective." },
      ],
      avoidShots: [
        { name: "Castle Gate (closed)", desc: "Hitting the closed gate knocks the ball back unpredictably. Always check whether the drawbridge is down before shooting the center." },
        { name: "Troll Bumper area (uncontrolled)", desc: "Bumper returns are fast and unpredictable. Don't aim for the bumpers — they're passive scoring." },
      ],
      tips: [
        { head: "Skill Shot is the highest-ROI action on the table", body: "Each Skill Shot gives +5× Bonus Multiplier. With FIRE rollover completions adding +2× each, your multiplier can reach very high values by mid-game. Every Madness jackpot and end-of-ball bonus is multiplied by this — never miss the Skill Shot." },
        { head: "Drawbridge first", body: "Before every castle shot attempt, verify the drawbridge status. A shot at a closed gate often results in a dangerous return. Open it first with a gate hit, then go through." },
        { head: "Ramp when in doubt", body: "If the castle is closed and you don't have a clean approach, shoot a ramp. They score well, feed back cleanly, and advance Joust progress. During Castle Multiball, ramps ARE the jackpot shots." },
        { head: "Light all 5 Madness lamps before Multiball Madness", body: "With all 5 lit you get 4-ball multiball. The Troll Madness trick: light 4 lamps + have 'Trolls' at Merlin — start Multiball Madness, then kill both trolls to trigger Troll Madness mid-multiball and relaunch lost balls." },
      ],
      mistakes: [
        "Missing the Skill Shot — losing +5× Bonus Multiplier is a huge cost every ball.",
        "Shooting the closed castle gate and taking a dangerous return without the drawbridge open.",
        "During Castle Multiball, shooting the castle instead of the ramps — jackpots are collected at the ramps, not the castle.",
        "Starting Multiball Madness with only 1–2 lamps lit — the payoff is drastically lower than 5 lamps.",
        "Ignoring FIRE rollover completions — each completion is +2× Bonus Multiplier that stacks with the Skill Shot.",
      ],
    },

    hotspots: [
      { x:43, y:13, type:"key",   label:"CG", name:"Castle Gate",               body:"<strong>Your primary target every ball.</strong> Hit the gate to lower the drawbridge, then shoot through the open castle to lock balls and score. Always verify the drawbridge is down before shooting the center — a shot at the closed gate bounces back unpredictably." },
      { x:19, y:22, type:"key",   label:"LR", name:"Left Ramp (Jousting Lance)", body:"<strong>Safe, high-value shot.</strong> The left Jousting Lance ramp feeds back cleanly to the left flipper. Advances Joust progress and scores well. Use the left ramp whenever the castle is closed — never go idle between castle shots." },
      { x:72, y:20, type:"safe",  label:"RR", name:"Right Ramp",                body:"Right-side ramp. Reliable return, good for keeping the ball moving while waiting for the castle gate to open. Feeds back to the right flipper area." },
      { x:82, y:23, type:"info",  label:"CA", name:"Catapult",                  body:"The catapult in the upper right launches balls toward the castle. Plays a role in certain modes. Watch for unpredictable ball paths after catapult launches — the exit angle varies." },
      { x:67, y:32, type:"info",  label:"TR", name:"Troll Pop Bumpers",         body:"Four troll pop bumpers in the upper right. Each hit advances troll-related awards. Ball returns from this cluster can go left toward the castle or right toward the outlane — be ready. Not a target — passive scoring only." },
      { x:50, y:6,  type:"safe",  label:"T",  name:"DAMSEL Top Lanes",          body:"Top lanes spell D-A-M-S-E-L. Completing advances the <strong>bonus multiplier</strong>. Use the flipper buttons to position the lit lane while the ball is in the troll bumpers." },
      { x:42, y:50, type:"key",   label:"↑",  name:"Ramp Lane Structure",       body:"The multiple angled lanes leading toward the castle area. Balls funneling up these lanes contribute to lock progress and Joust awards. Keep the ball moving into this zone as part of your castle attack flow." },
      { x:8,  y:82, type:"avoid", label:"!",  name:"Left Outlane",              body:"Direct drain — no post in competition settings. The left side is safe during ramp shots but watch for unexpected deflections off the castle gate or troll bumpers." },
      { x:90, y:82, type:"avoid", label:"!",  name:"Right Outlane",             body:"The right outlane is a real danger during troll bumper action. Bumper hits near the right side can send the ball straight toward this outlane. Stay alert on the right flipper." },
    ],
  };
