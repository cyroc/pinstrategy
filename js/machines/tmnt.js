  /* ─── TMNT ─────────────────────────────────────────────── */
MACHINES['tmnt'] = {
    name: "Teenage Mutant Ninja Turtles",  sub: "2020 · Stern · Spike 2",
    tagline: "Cowabunga! · Episodes, Ninja Pizza Multiball & 2x Playfield",
    image: "images/tmnt.jpg",
    difficulty: "Easy–Medium", diffClass: "diff-medium", era: "Modern",

    info: {
      stats: [
        { label: "Manufacturer", value: "Stern Pinball" },
        { label: "Year",         value: "2020" },
        { label: "Designer",     value: "John Borg" },
        { label: "Platform",     value: "Spike 2 / LCD" },
        { label: "Multiball",    value: "Multiple (Pizza, Cowabunga)" },
        { label: "Theme",        value: "Teenage Mutant Ninja Turtles" },
      ],
      theme: "Based on the classic TMNT franchise. Leonardo, Raphael, Michelangelo, and Donatello battle Shredder and the Foot Clan across New York City. Features the Turtle Van, the sewer lair, and plenty of pizza. Designed for accessibility while rewarding deep play.",
      features: [
        { name: "Pizza Parlor (Scoop)", desc: "The most important shot on the table. Light it by shooting both ramps, then shoot the Pizza Parlor to start an Episode. Three shots to the Pizza Parlor (without lighting Episode first) starts Ninja Pizza Multiball. Visit it constantly." },
        { name: "Left Ramp", desc: "One of the two ramp shots needed to light Start Episode at the Pizza Parlor. Also the Team-Up Multiball start (after 4 episodes). Feeds back to the left flipper — a safe, reliable looping shot." },
        { name: "Right Ramp", desc: "The second ramp shot needed to light Episode start. Shoot it 4 times to light Turtle Power Multiball (or pick Donatello at game start). Clean shot that rewards consistent play." },
        { name: "Turtle Power Multiball", desc: "Started by shooting the right ramp 4 times (or instantly with Donatello). A multiball mode focused on ramp and major shots. Stack with a running Episode for maximum scoring." },
        { name: "Ninja Pizza Multiball", desc: "Started by shooting the Pizza Parlor 3 times. The main multiball — shoot enough shots to light the Krang Loop for Super Jackpot, then collect at the LAIR Lane. Stack with Episodes for big points." },
        { name: "Turtle Shots (Leo, Raph, Mike, Don)", desc: "Each turtle has a dedicated skill-shot target and individual perks earned via Training. Select your turtle at game start — each offers a different Level 1 perk and style of play." },
        { name: "LAIR Target / Training", desc: "Spell LAIR at the standup targets to light Training at the LAIR Lane (under-flipper shot). Completing Training boosts scoring by 10%, enables your next Turtle Perk, and lights Neutrino Pizza Party." },
        { name: "Pict-o-Pops (Pop Bumpers)", desc: "Upper bumper cluster. Passive scoring every hit. During bumper-boosted modes these become valuable — when Neutrino Pizza Party is lit, bumper hits can be very productive." },
      ],
      scoring: [
        { key: "Episode start / completion",   val: "275k start + escalating completion bonus" },
        { key: "Ninja Pizza Multiball jackpot", val: "Millions (Mondo/Grande jackpots)" },
        { key: "Turtle Power Multiball",        val: "Ramp/major shot jackpots" },
        { key: "Super Jackpot (LAIR Lane)",     val: "Big payout during either multiball" },
        { key: "2x Playfield",                  val: "Doubles all scoring when active" },
      ],
      rules: [
        "<strong>Shoot both ramps to light Start Episode at the Pizza Parlor</strong>, then shoot the Pizza Parlor to start an Episode. Episodes are the main progression path.",
        "Three Pizza Parlor shots (without Episode lit) starts <strong>Ninja Pizza Multiball</strong> — stack it with an active Episode for maximum points.",
        "Shoot the <strong>right ramp 4 times</strong> to light Turtle Power Multiball. Both main multiballs can be stacked with Episodes.",
        "Spell LAIR and complete <strong>Training</strong> to earn a 10% scoring boost and unlock your next Turtle Perk — pursue it every ball.",
        "<strong>Get 2x Playfield running</strong> (spell LAIR twice, then shoot the 2X target) and keep it active with periodic shots. It doubles all scoring.",
      ],
      benchmarks: [
        { score: "3B+",    label: "Excellent — completing all 8 Episodes, Team-Up Multiball" },
        { score: "800M+",  label: "Solid — completing 4+ Episodes and both main multiballs" },
        { score: "200M+",  label: "Getting the ramp/Pizza Parlor flow" },
      ],
      resources: [
        { name: "IPDB Entry",        url: "https://www.ipdb.org/machine.cgi?id=6749",                                    icon: "🎯" },
        { name: "Pinside Game Page", url: "https://pinside.com/pinball/machine/teenage-mutant-ninja-turtles-stern-2020", icon: "🕹️" },
        { name: "Stern Rules Sheet", url: "https://www.sternpinball.com/games/teenage-mutant-ninja-turtles/",            icon: "📖" },
      ],
    },

    strategy: {
      skillShot: {
        name: "Top Lane + Turtle Skill Shot",
        value: "+1 Bonus Multiplier + skill shot award",
        desc: "Plunge into the flashing right top lane for +1 bonus multiplier. Then within 15 seconds, shoot the lit shot corresponding to your chosen Turtle (e.g., LAIR for Leonardo, Left Ramp for Raphael, Pizza Parlor for Michelangelo, Center Ramp for Donatello) to score the turtle skill shot award and light a Weapon Hurry-Up. Hold the left flipper to feed the ball to the upper flipper instead.",
      },
      multiball: [
        { name: "Ninja Pizza Multiball", balls: 3,
          locks: "Shoot the Pizza Parlor 3 times (without Episode lit) to lock virtual balls.",
          start: "Three Pizza Parlor shots start Ninja Pizza Multiball automatically.",
          jackpots: "Shoot enough shots to light the Krang Loop (upper flipper shot), then shoot LAIR Lane for Super Jackpot. Repeat for additional jackpots.",
          tip: "Stack Ninja Pizza Multiball with an active Episode — Episode shot values still score during multiball, and the combined scoring is huge." },
        { name: "Turtle Power Multiball", balls: 2,
          locks: "Shoot the right ramp 4 times to light Turtle Power Multiball. Donatello players get it free at game start.",
          start: "Shoot the right ramp the required number of times; multiball starts when lit.",
          jackpots: "Shoot major shots for jackpots. Krang Loop → LAIR Lane sequence scores Super Jackpot during this multiball too.",
          tip: "Use this multiball alongside 2x Playfield if possible — doubling multiball jackpots compounds quickly." },
      ],
      goal: "<strong>Shoot both ramps to light Start Episode, start Episodes at the Pizza Parlor, stack main multiballs (Ninja Pizza or Turtle Power) with active Episodes, and get 2x Playfield running for doubled scoring throughout.</strong> The ramps and Pizza Parlor are your two most important destinations every ball.",
      phases: [
        {
          num: "Phase 1 · Early Game",
          title: "Ramps → Pizza Parlor (Episodes)",
          body: "<strong>Start every ball by shooting both ramps to light Start Episode, then shoot the Pizza Parlor to start an Episode.</strong> Episodes are your main scoring engine — shoot the lit episode targets to complete each one. Also collect LAIR targets when you can to spell LAIR and start Training. Even one completed Episode per ball builds significant momentum.",
        },
        {
          num: "Phase 2 · Mid Game",
          title: "Stack Episodes with Multiball",
          body: "<strong>Once you have a multiball opportunity (3 Pizza Parlor shots for Ninja Pizza, or 4 right ramp shots for Turtle Power), start it while an Episode is running.</strong> Episode shots still score during multiball. The Super Jackpot sequence (light the Krang Loop, then shoot LAIR Lane) is your biggest scoring moment — pursue it during multiball when multiple balls provide cover.",
        },
        {
          num: "Phase 3 · 2x Playfield + Progression",
          title: "Double Everything",
          body: "<strong>Spell LAIR twice and shoot the 2X Target to start 2x Playfield.</strong> Keep it active by hitting the 2X target periodically. With 2x Playfield running, every Episode shot, every multiball jackpot, and every switch hit is worth double. The best TMNT scores combine 2x Playfield with a running Episode and multiball.",
        },
      ],
      safeShots: [
        { name: "Left Ramp", desc: "One of two ramp shots that light Start Episode at the Pizza Parlor. Safe loop, clean feed back to the left flipper. Use as your default baseline shot whenever you don't have a clean Pizza Parlor angle." },
        { name: "Right Ramp", desc: "Second ramp shot for lighting Episodes. Also the path to Turtle Power Multiball (4 shots). Clean, reliable — make it your other baseline shot alongside the left ramp." },
        { name: "Pizza Parlor (Scoop)", desc: "After both ramps are lit, shoot here to start an Episode — your most important destination every ball. Three shots here (without Episode lit) starts Ninja Pizza Multiball. Always safe to shoot after controlling the ball." },
      ],
      avoidShots: [
        { name: "Krang Loop (under pressure)", desc: "The Krang Loop (upper flipper shot) is required to light the LAIR Lane for Super Jackpot during multiball. Only shoot it when you have a ball under control — a mistimed upper flipper shot can send the ball to the drain." },
        { name: "Center drain area", desc: "The center of this playfield can feed a center drain. Don't panic-flip when the ball is between flippers — a controlled tap to one flipper is safer than a desperate double-flip." },
      ],
      tips: [
        { head: "Ramps to Episode, always", body: "When in doubt, shoot a ramp. Both ramps lit = Episode available at the Pizza Parlor. Even on a chaotic ball, getting two ramp shots and a Pizza Parlor visit starts an Episode — that's always productive." },
        { head: "2x Playfield is a game changer", body: "Spell LAIR twice, then shoot the 2X target in the center of the playfield. Keep 2x active by periodically hitting the target. All scoring doubles — Episode shots, multiball jackpots, everything. Pursuing it early is worth the setup time." },
        { head: "Pick Raphael for competition", body: "Raphael's Level 1 perk lights Start Episode immediately — you can start an Episode on your first shot. His 3x Episode scoring and 3x Playfield multiplier combo can multiply Episode scoring by 9x with enough Training levels. Strong choice for competitive play." },
        { head: "Multiball Super Jackpot sequence", body: "During either multiball, shoot enough shots to light the Krang Loop (upper flipper). Shoot the Krang Loop to light LAIR Lane. Shoot the LAIR Lane under-flipper shot for the Super Jackpot. This sequence is repeatable — it's the engine of TMNT multiball scoring." },
      ],
      mistakes: [
        "Not shooting both ramps before visiting the Pizza Parlor — the Episode won't start until both ramps are lit.",
        "Ignoring 2x Playfield — it's available mid-game and doubles all scoring, including multiball jackpots.",
        "Skipping Training — the 10% scoring boost and Turtle Perk upgrades compound across balls and matter a lot.",
        "Panicking during Ninja Pizza Multiball and ignoring the Krang Loop sequence — the Super Jackpot is the biggest payout.",
        "Ignoring the right ramp — it's the path to both Episode lighting and Turtle Power Multiball, and should be a frequent target.",
      ],
    },

    hotspots: [
      { x:20, y:18, type:"key",   label:"LR", name:"Left Ramp",                body:"<strong>One of two ramps that light Start Episode</strong> at the Pizza Parlor. Safe looping shot with clean feed back to the left flipper. Use this as your baseline shot — every ball should start with both ramps to qualify the Pizza Parlor." },
      { x:62, y:11, type:"key",   label:"🍕", name:"Pizza Parlor (Scoop)",    body:"<strong>Your most important destination every ball.</strong> After shooting both ramps (left + right), shoot here to start an Episode. Or shoot it 3 times without Episode lit to start Ninja Pizza Multiball. Always safe and always productive." },
      { x:78, y:15, type:"safe",  label:"RR", name:"Right Ramp",              body:"<strong>Second ramp for lighting Start Episode.</strong> Also shoot it 4 times to qualify Turtle Power Multiball (or pick Donatello to start with it lit). Clean, reliable shot from the left flipper — the right ramp + left ramp combo is your bread and butter." },
      { x:40, y:45, type:"key",   label:"2X", name:"2X Playfield Target",     body:"<strong>Shoot this to activate 2x Playfield</strong> — doubles all scoring. Light it by spelling LAIR twice (via the LAIR standup targets), then shoot this target. Keep 2x active by periodically hitting this target. One of the highest-leverage moves in the game." },
      { x:50, y:28, type:"key",   label:"KL", name:"Krang Loop (Upper Flipper)", body:"<strong>During multiball: shoot enough shots to light this, then rip it</strong> to light the LAIR Lane for Super Jackpot. The Krang Loop is the upper flipper lane — requires an active upper flipper shot. This sequence is the engine of TMNT multiball scoring." },
      { x:22, y:62, type:"key",   label:"LA", name:"LAIR Lane (Super Jackpot)", body:"<strong>Under-flipper shot that collects the Super Jackpot</strong> during multiball (after lighting the Krang Loop first). Also the Training start location after spelling LAIR at standup targets. A key recurring objective — pursue this sequence in every multiball." },
      { x:50, y:18, type:"info",  label:"↑",  name:"Pict-o-Pops (Bumpers)",   body:"Upper bumper cluster. Passive scoring every hit. During Neutrino Pizza Party (lit after first Training completion), these bumpers become very valuable — intentionally directing the ball here during the mode rewards well." },
      { x:82, y:38, type:"info",  label:"TT", name:"Turtle Select / Perks",   body:"Your chosen turtle determines your skill shot and Level 1 perk. <strong>Raphael</strong>: starts with Episode lit. <strong>Michelangelo</strong>: Battle Again + pizza bonuses. <strong>Leonardo</strong>: Training lit. <strong>Donatello</strong>: Turtle Power Multiball instantly lit. Choose based on your game plan." },
      { x:10, y:80, type:"avoid", label:"!",  name:"Left Outlane",             body:"Left-side drain. Any errant left-side shot can feed here. Play controlled, centered shots and don't spray toward the left wall." },
      { x:88, y:80, type:"avoid", label:"!",  name:"Right Outlane",            body:"Right outlane catches fast right orbit returns. Always be positioned before the ball comes back around the orbit. A right-side ball that gets behind the flipper is usually unrecoverable." },
    ],
  };
