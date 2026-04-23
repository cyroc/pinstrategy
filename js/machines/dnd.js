  /* ─── DUNGEONS & DRAGONS: THE TYRANT'S EYE ─────────────── */
MACHINES['dnd'] = {
    name: "Dungeons & Dragons: The Tyrant's Eye",  sub: "2025 · Stern · Spike 2",
    tagline: "Campaign RPG · Battles, Dungeon Crawls & Dragon Multiball",
    image: "images/dungeons-and-dragons.webp",
    difficulty: "Hard", diffClass: "diff-hard", era: "Modern",

    info: {
      stats: [
        { label: "Manufacturer", value: "Stern Pinball" },
        { label: "Year",         value: "2025" },
        { label: "Designer",     value: "Brian Eddy" },
        { label: "Platform",     value: "Spike 2 / LCD" },
        { label: "Multiball",    value: "Dragon Multiball / Town Celebration + Gelatinous Cube" },
        { label: "Theme",        value: "Dungeons & Dragons — Forgotten Realms, stop Tiamat" },
      ],
      theme: "Brian Eddy's fourth machine since returning to Stern. D&D: The Tyrant's Eye is the most RPG-like pinball machine ever made. Choose from 4 character classes (Paladin, Rogue, Cleric, Wizard), travel a campaign map through 7 locations, battle monsters, level up, and collect equipment and artifacts to stop the five-headed dragon Tiamat. PinSave (via Insider Connected) lets you resume a campaign across separate sessions.",
      features: [
        { name: "Character Selection & Leveling", desc: "Choose Paladin (Ardor), Rogue (Anya), Cleric (Frey), or Wizard (Helenir) at game start. Each has unique stats and class perks. Characters level up via XP from battles and quest completions. Three more characters (Ranger, Bard, Barbarian) unlock via wizard mode completions." },
        { name: "Campaign Map (7 Locations)", desc: "Travel between Greenest, Westgate, Arabel, Kobold Town, Darkhold, Dragonspear Castle, and Gauntlgrym. Complete color-matched quests (level 1 + 2 of same color) to unlock level 3 modes at Dragonspear Castle and Gauntlgrym." },
        { name: "Battles (Red Shots + D20)", desc: "Shoot red arrow shots to deal damage. Each hit triggers D20 rolls from all 4 party members for variable damage output. Enemies attack the party on a flashing timer — stay aggressive. Ranged attack (hold action button, release on lit blue arrow) spots a shot for free." },
        { name: "Dragon Multiball / Town Celebration", desc: "Complete a Town Dungeon (multi-phase mode at each location) to qualify Dragon Multiball at the dragon head Rath. Shoot Rath to start. Jackpots and Super Jackpot during multiball. Town Celebration is awarded after major quest completions." },
        { name: "Gelatinous Cube Multiball", desc: "Encountered during the Arabel Town Dungeon Phase 2. Defeat the Cube by shooting moving shots (right → center → left), then complete the rescue shot. The Cube Multiball then begins." },
        { name: "Hidden Temple (2× Scoring)", desc: "Shoot the hidden shot behind the upper flipper (MXV skill shot) to access the Hidden Temple with 2× scoring. Wizard character gets longer Hidden Temple timers. One of the best scoring multipliers in the game." },
        { name: "Equipment & Artifacts", desc: "Earn gold from battles and quests to buy equipment from Fizmo the shopkeeper. Best early purchase: Ranged Weapon of Accuracy (slows the targeting reticle). Artifacts are awarded from level 3 modes and are crucial for endgame scoring." },
        { name: "Shield Ball Saver", desc: "Earn a shield ball saver through quests and dungeon completions. Wizard class gets the longest default shield timer. Can be activated to save the ball — particularly important in Town Dungeons where party death ends the mode in failure." },
      ],
      scoring: [
        { key: "Skill Shot (upper loop)",         val: "2M × ball number (ball 1 = 2M, ball 2 = 4M, etc.)" },
        { key: "Super Skill Shot (3-shot combo)",  val: "6M (left eject → side ramp → right ramp)" },
        { key: "MXV Skill Shot (hidden temple)",   val: "6M + activates 2× Hidden Temple scoring" },
        { key: "Dragon Multiball Super Jackpot",   val: "Scales with jackpots collected during multiball" },
        { key: "Hidden Temple (2× scoring)",       val: "Doubles ALL scoring while active" },
        { key: "Battle XP completion",             val: "Party XP + gold + campaign map progress" },
      ],
      rules: [
        "Choose your character at game start — <strong>Rogue (Anya) has the highest luck stat</strong> for treasure; <strong>Wizard (Helenir)</strong> gets the longest Hidden Temple 2× timer.",
        "Travel to a city, complete its quests (color-coded 1→2→3 progression), then clear the <strong>Town Dungeon</strong> to qualify Dragon Multiball and advance the campaign.",
        "<strong>Battles: shoot red shots, use the action button</strong> (ranged attack) to spot hard shots. Party members die if they reach 0 HP — all 4 dying ends the dungeon in failure.",
        "The <strong>MXV Skill Shot</strong> (plunge to upper flipper, shoot the hidden temple target) activates 2× scoring. Use it every ball for doubled early scoring.",
        "<strong>Fizmo's shop:</strong> spend gold on Ranged Weapon of Accuracy first — it slows the action button targeting reticle dramatically and makes ranged attacks almost trivially easy.",
      ],
      benchmarks: [
        { score: "500M+",  label: "Excellent — Dragon Multiball, multiple dungeon clears, 2× stacks" },
        { score: "150M+",  label: "Solid — 2 dungeon clears, Dragon Multiball, Hidden Temple" },
        { score: "40M+",   label: "Getting started — first quest and basic battle completion" },
      ],
      resources: [
        { name: "IPDB Entry",            url: "https://www.ipdb.org/machine.cgi?id=6863",                              icon: "🎯" },
        { name: "Pinside Game Page",     url: "https://pinside.com/pinball/machine/dungeons-dragons-the-tyrants-eye",  icon: "🕹️" },
        { name: "Tilt Forums Rulesheet", url: "https://tiltforums.com/t/dungeons-dragons-the-tyrants-eye-rulesheet/9267", icon: "📖" },
      ],
    },

    strategy: {
      skillShot: {
        name: "MXV Skill Shot (Hidden Temple)",
        value: "6M + 2× scoring while inside Hidden Temple",
        desc: "Plunge to the upper left flipper, then make a reflex shot to the hidden target behind it to enter the Hidden Temple with 2× scoring. This doubles all scoring while active — on the Wizard character with a longer timer, it can cover an entire early-ball run. If you can't reliably make the upper-flipper reflex shot, take the Super Skill Shot instead: left eject → side ramp → right ramp for 6M. The basic skill shots (short plunge to upper loop = 2M × ball number, or the gelatinous cube switch = similar value) are solid fallbacks.",
      },
      actionButton: {
        name: "Ranged Attack + PinSave Shield",
        when: "During Battles (ranged) · Button insert flashing (shield)",
        desc: "<strong>Ranged Attack:</strong> During any Battle, hold the action button — a blue arrow sweeps across the playfield. Release it when pointing at a lit red shot to <strong>deal battle damage for free without shooting</strong>. First, buy <strong>Ranged Weapon of Accuracy</strong> at Fizmo's shop to dramatically slow the arrow's sweep — it becomes trivially easy to aim. Always make at least one shot before using a ranged attack (the bow must be 'reloaded' each time). Cannot spot shots outside of battle damage. <br><br><strong>PinSave Shield:</strong> When the action button insert flashes, press it to deploy a metal bar between the flippers that <strong>saves a center-drain ball</strong>. Relight the shield by completing a set of 4 return lane inserts (1 completion for the first relight, increasing by 1 each time, max 5). This is critical during Town Dungeons — always have it available when pushing into multi-phase battle sequences.",
      },
      multiball: [
        { name: "Dragon Multiball", balls: 3,
          locks: "Complete a Town Dungeon (multi-phase battle mode at any location). Dungeons unlock after all quests at a location are completed.",
          start: "After clearing a Town Dungeon, Dragon Multiball qualifies at the Rath dragon head. Shoot the head to start.",
          jackpots: "Lit jackpots on the playfield. Build toward the Super Jackpot at the Rath head for the biggest award. Premium/LE: Rath moves on two axes and physically ejects balls during the multiball.",
          tip: "Every Town Dungeon cleared = one Dragon Multiball qualification. Prioritize dungeon clears — they're also required to unlock Darkhold (bonus round) and access the endgame locations." },
        { name: "Gelatinous Cube Multiball", balls: 2,
          locks: "Reach Arabel Town Dungeon Phase 2 — defeat the Gelatinous Cube by hitting moving shots (right → center → left).",
          start: "After defeating the Cube, complete the orange rescue shot and the Gelatinous Cube Multiball begins.",
          jackpots: "Variable scoring during the multiball phase — target the most valuable lit shots.",
          tip: "Arabel is one of the easiest starting cities and its dungeon contains the Gelatinous Cube sequence. Consider starting here on a new campaign for a fast first multiball." },
      ],
      goal: "<strong>Choose your class → travel to a starting city → complete quests (color 1→2→3) → clear Town Dungeons for Dragon Multiball → buy equipment from Fizmo → advance the campaign to Dragonspear Castle and Gauntlgrym for wizard modes.</strong> Use the Hidden Temple (MXV skill shot) to double scoring every ball.",
      phases: [
        {
          num: "Phase 1 · Character + Starting City",
          title: "Pick Your Build and First Dungeon",
          body: "<strong>Choose Rogue (Anya) for treasure luck or Wizard (Helenir) for long 2× scoring.</strong> Start in Arabel (Gelatinous Cube dungeon) or Westgate (Dockside dungeon) for the most accessible first dungeon. Complete the two quests at your starting city, then enter and clear the Town Dungeon to qualify Dragon Multiball. Take the MXV skill shot every ball for 6M + Hidden Temple 2×.",
        },
        {
          num: "Phase 2 · Campaign + Equipment",
          title: "Multiple Dungeon Clears and Fizmo Purchases",
          body: "<strong>Clear multiple Town Dungeons to advance the campaign and unlock Darkhold.</strong> Visit Fizmo's shop whenever you have gold — buy Ranged Weapon of Accuracy first (slows the blue arrow targeting reticle, making ranged attacks trivially easy), then armor upgrades. Earn matched-color level 3 modes by completing level 1 and 2 quests of the same color to unlock wizard modes at Dragonspear Castle or Gauntlgrym.",
        },
        {
          num: "Phase 3 · Wizard Modes",
          title: "Dragonspear Castle and Gauntlgrym",
          body: "<strong>The campaign endgame is at Dragonspear Castle or Gauntlgrym</strong>, each with multi-phase Town Dungeons that unlock wizard modes. At Dragonspear: choose 'Go after the Scepter' → Ritual of the Chosen (Bard unlock), or 'Stay and fight Sammaster' → The Undermountain (Ranger unlock). At Gauntlgrym: 'Stay with Nighdaar' → Rescue the King (Barbarian unlock). Collect all artifacts from level 3 modes before the endgame for maximum scoring.",
        },
      ],
      safeShots: [
        { name: "Center Spinner", desc: "Fast, reliable shot. Advances Town Dungeon phases via the yellow arrow and scores well during battles. Your most consistent single shot — a spinner rip scores points and progresses dungeons safely." },
        { name: "Right Ramp", desc: "Upper-right ramp. Part of the Super Skill Shot combo. Scores during quests and battles. Clean shot from the left flipper — a good default when no specific target is lit." },
        { name: "Left Orbit", desc: "Wide left orbit. Scores during travel and quests. Part of the Arabel Dungeon Gelatinous Cube path. Safe from left flipper — always a reliable fallback." },
      ],
      avoidShots: [
        { name: "Town Dungeons without healing potions or full HP", desc: "Town Dungeons are multi-phase battles where your party takes damage. Entering at low HP without potions risks party wipeout (mode failure + no Dragon Multiball). Collect healing potions (green shots between dungeon phases) before pushing to the next phase." },
        { name: "Ranged attack without reloading", desc: "The action button ranged attack requires a reload (hit any lane or ramp first). Pressing it without reloading wastes the action. Always make one shot before attempting a ranged attack." },
      ],
      tips: [
        { head: "MXV Skill Shot every ball", body: "The MXV Skill Shot (upper flipper reflex → hidden template target) enters the Hidden Temple with 2× scoring instantly. On the Wizard character with a longer timer, this can double an entire early-ball sequence. Practice the upper flipper reflex shot — it's worth grinding. The payoff is enormous." },
        { head: "Ranged attack = free damage", body: "Hold the action button to move the blue arrow across the playfield. Release it on a lit red shot to deal damage for free. With the Ranged Weapon of Accuracy item, the arrow slows to an almost stop — trivially easy to aim. Always reload (shoot something) before using it." },
        { head: "Campaign routing matters", body: "Start in Arabel or Westgate for easy first dungeons. Travel through connected cities toward Dragonspear Castle and Gauntlgrym for the endgame. Avoid Darkhold until after clearing a dungeon (it requires dungeon completion to unlock). Don't rush toward harder cities until you have equipment and levels." },
        { head: "Fizmo shop priorities", body: "Priority order: (1) Ranged Weapon of Accuracy — dramatically slows the targeting reticle; (2) Armor upgrades — raises party Armor Class, reducing incoming damage; (3) Spell components for Wizard (magic missile/fireball = massive single-hit damage). Never hoard gold — spend it each time you accumulate enough for your next tier." },
      ],
      mistakes: [
        "Not taking the MXV Skill Shot — entering the Hidden Temple with 2× scoring at ball start is one of the highest-value moves available.",
        "Entering Town Dungeons at low party HP without healing potions — party wipeout ends the dungeon in failure, losing the artifact reward and Dragon Multiball qualification.",
        "Ignoring the ranged attack — it's free damage that spots any battle shot. Use it whenever the action button is available and reloaded.",
        "Attempting level 3 modes at Dragonspear Castle or Gauntlgrym without completing the prerequisite color-matched level 1 and 2 quests — they won't unlock.",
        "Spending gold on the wrong items first — Ranged Weapon of Accuracy is the most impactful first purchase, outperforming armor or potions at early levels.",
      ],
    },

    hotspots: [
      { x:12, y:18, type:"safe",  label:"LO", name:"Left Orbit",              body:"Wide left orbit. Safe from left flipper. Scores during travel and quests, and is the Arabel Dungeon Cube path shot. Good default when no specific target is lit." },
      { x:78, y:22, type:"safe",  label:"RR", name:"Right Ramp",              body:"<strong>Your primary ramp shot.</strong> Part of the Super Skill Shot (left eject → side ramp → right ramp = 6M). Scores during quests, battles, and Dragon Multiball jackpots. Clean shot from left flipper — make it your default." },
      { x:22, y:28, type:"key",   label:"SR", name:"Side Ramp (Left)",        body:"Left-side ramp. Part of the Super Skill Shot sequence. Key shot for several quest and dungeon phases. Scored during Dragon Multiball. Shoot from the right flipper." },
      { x:48, y:20, type:"key",   label:"RH", name:"Rath Dragon Head",        body:"<strong>Dragon Multiball start shot</strong> — shoot after clearing a Town Dungeon to begin multiball. During Dragon Multiball, jackpots and the Super Jackpot are collected here. Premium/LE: Rath moves on two axes and ejects balls during multiball." },
      { x:50, y:38, type:"key",   label:"CS", name:"Center Spinner",          body:"Fast, reliable shot. Advances Town Dungeon phases via the yellow arrow. Scores well in battles and passively during all modes. Your best single shot for consistent dungeon phase progression." },
      { x:72, y:28, type:"key",   label:"HT", name:"Hidden Temple (MXV Skill Shot)", body:"<strong>Plunge to upper left flipper, then reflex shot here for 2× scoring in the Hidden Temple.</strong> Doubles ALL scoring while active. Wizard character gets the longest timer. One of the best per-ball moves in the game — practice and master this." },
      { x:20, y:38, type:"info",  label:"GC", name:"Gelatinous Cube Lane",    body:"Access the <strong>Gelatinous Cube dungeon from Arabel.</strong> Skill shot (short plunge, hit cube switch) also lands here. During Arabel Town Dungeon Phase 2, shoot moving shots (right → center → left) to defeat the Cube and unlock Gelatinous Cube Multiball." },
      { x:18, y:45, type:"info",  label:"LE", name:"Left Eject Kickout",      body:"Starts the Super Skill Shot sequence (left eject → side ramp → right ramp = 6M). Also lights a Treasure Chest after each Town Dungeon phase — shoot here for chest rewards including equipment and gold." },
      { x:48, y:55, type:"info",  label:"DT", name:"Dragon Standup Targets",  body:"Three-bank dragon standups. Often required to advance to or relight Town Dungeon phases. Also used to light ranged attack targets in advanced dungeon battles (Dragonspear, Gauntlgrym). Shoot opportunistically." },
      { x:10, y:82, type:"avoid", label:"!",  name:"Left Outlane",            body:"<strong>Dangerous drain — especially if party HP is low during an active dungeon.</strong> The Shield ball saver (Wizard class gets the longest timer) can save here if timed correctly. Keep shots centered and use controlled technique during dungeon multi-phases." },
    ],
  };
