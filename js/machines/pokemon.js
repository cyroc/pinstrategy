  /* ─── POKÉMON ───────────────────────────────────────────── */
MACHINES['pokemon'] = {
    name: "Pokémon",  sub: "2026 · Stern · Spike 2",
    tagline: "Catch 'Em All · Story Modes & Team Rocket Multiball",
    image: "images/pokemon.webp",
    difficulty: "Medium", diffClass: "diff-medium", era: "Modern",

    info: {
      stats: [
        { label: "Manufacturer", value: "Stern Pinball" },
        { label: "Year",         value: "2026" },
        { label: "Designer",     value: "George Gomez & Jack Danger" },
        { label: "Platform",     value: "Spike 2 / LCD" },
        { label: "Multiball",    value: "Team Rocket Multiball + Pikachu vs. Raichu (story)" },
        { label: "Theme",        value: "Pokémon anime — Kanto starters and biome journey" },
      ],
      theme: "Stern's first pinball of 2026 and Nintendo's first physical pinball in over 30 years. Players join Pikachu and the three Kanto starters on a journey through four biomes (Forest, Lake, Desert, Mountain), catching Pokémon and battling rivals along the way. Code is still in early development (v0.81) with more content being added.",
      features: [
        { name: "Story Modes (4 Characters)", desc: "Ramps/orbits correspond left to right: Bulbasaur (left ramp), Squirtle, Pikachu, Charmander (right ramp). Hit any of them 3 times during single-ball play to start that character's story mode. Completing a story mode qualifies a 2× shot multiplier." },
        { name: "Discover & Catch Pokémon", desc: "During non-mode play, fill the switch gauge to discover a wild Pokémon at the captive ball. Scan it to start a 2M catch hurry-up: hit purple targets then shoot the left ramp (Poké Ball). Catching Pokémon lights the right scoop for a Rival Battle." },
        { name: "Rival Battles", desc: "Shoot the right scoop to fight rivals with your team. Hit flashing shots to deal damage, shoot town scoop when lit to swap Pokémon. Win to advance biomes: Forest → Lake → Desert → Mountain. Each biome requires one more caught Pokémon than the last." },
        { name: "Team Rocket Multiball", desc: "Complete BATTLE targets to lower the Meowth balloon (center lane Super Skill Shot does it instantly). Shoot the balloon 3 times, then the lane below it to start multiball. 6 jackpots at ramps/balloon → Super Jackpot → 15 seconds of unlimited Super Jackpots." },
        { name: "Berries (2× Playfield)", desc: "Hit left and right berry targets twice each, then center berry target when flashing to start 2× Playfield for 20 seconds. Extend by hitting the center berry while 2× is active. Stack with multiball jackpots for maximum value." },
        { name: "Shot Multipliers", desc: "Earned by completing a story mode or scoring a Team Rocket Super Jackpot. The next shot made after earning one becomes a permanent 2× scoring shot for the rest of the ball. Stacking multipliers on high-traffic shots is the core skill." },
        { name: "Eevee Evolution Combos", desc: "8 secret 3-shot sequences earn Eevee Evolutions for 2.5M + 500k each. Collecting all 8 awards 20M. Example: Vaporeon = Left Ramp → Right Ramp → Battlefield; Jolteon = Right Ramp → Left Orbit → Center X Target." },
        { name: "Mystery (TEAM Lanes)", desc: "Complete TEAM bottom lanes to light mystery at the town scoop. Possible awards: 2.5M, advance Discover, Poké Balls, advance outlane ball save, or light extra ball. First mystery after 1 TEAM completion; subsequent need 2." },
      ],
      scoring: [
        { key: "Skill Shot (lit lane)",           val: "500k base + 2× bonus multiplier" },
        { key: "Super Skill Shot (left flipper)",  val: "1M base + instantly lowers Meowth balloon (center lane)" },
        { key: "Psyduck Sneak-In",                val: "1.5M base (3× skill shot, random bounce)" },
        { key: "Team Rocket unlimited SJ phase",  val: "15 seconds of unlimited Super Jackpots at ramps/orbits" },
        { key: "Pikachu vs. Charizard SJ",        val: "Up to 100M hurry-up (200M with 2× playfield)" },
        { key: "Shot Multiplier (2×)",            val: "Permanent 2× scoring at chosen shot for rest of ball" },
      ],
      rules: [
        "Hit any ramp or orbit <strong>3 times</strong> to start that character's story mode. Each mode completed qualifies a permanent 2× shot multiplier.",
        "<strong>Team Rocket Multiball:</strong> complete BATTLE targets (or use center lane Super Skill Shot to instantly lower balloon), then shoot balloon 3×, then the lane below it.",
        "<strong>Berries = 2× Playfield</strong>: hit left/right berries twice each, then center when flashing. Stack with multiball jackpots for the game's biggest scoring window.",
        "After winning a story mode or Team Rocket SJ, <strong>deliberately choose your next shot</strong> — it becomes a permanent 2× scoring location for the rest of the ball.",
        "Catching Pokémon lights the right scoop for <strong>Rival Battles</strong> — advance the biome circuit for stronger battles and higher scoring.",
      ],
      benchmarks: [
        { score: "300M+",  label: "Excellent — multiple story modes, Rocket multiball, 2× stacks" },
        { score: "80M+",   label: "Solid — 2 story modes and Team Rocket multiball" },
        { score: "20M+",   label: "Getting started — first story mode and basic combos" },
      ],
      resources: [
        { name: "Tilt Forums Rulesheet", url: "https://tiltforums.com/t/pokemon-rulesheet/10092",  icon: "📖" },
        { name: "Pinside Game Page",     url: "https://pinside.com/pinball/machine/pokemon",        icon: "🕹️" },
        { name: "Stern Rules Sheet",     url: "https://www.sternpinball.com/games/pokemon/",        icon: "🎯" },
      ],
    },

    strategy: {
            skillShot: {
        name: "Center Lane Super Skill Shot (left flipper + full plunge)",
        value: "1M + instantly lowers Meowth balloon + BATTLE targets completed",
        desc: "Hold the left flipper and full plunge into the center lane for 1M AND an instant Meowth balloon lower (completing all BATTLE targets). This effectively gives you Team Rocket Multiball progress for free every ball — an enormous shortcut. If the center lane isn't lit as a super skill shot, hit whichever lit lane is flashing for the standard skill shot (500k + 2× bonus multiplier). A Psyduck Sneak-In (lucky bounce above training targets) gives 1.5M — watch for it unprompted.",
      },
      actionButton: {
        name: "Add-a-Ball (Pikachu vs. Raichu)",
        when: "During Pikachu vs. Raichu multiball, after completing BATTLE targets",
        desc: "During the <strong>Pikachu vs. Raichu story multiball</strong> (accessed by hitting the right orbit 3×), complete the BATTLE targets. When the action button blinks green, <strong>press it to add a ball</strong> back into play. This extends the multiball and gives you more time to collect jackpots and reach the Super Jackpot at the Pokédex captive ball. Keep an eye on the button indicator during this multiball — adding a ball mid-mode can be the difference between completing the mode or timing out.",
      },
      multiball: [
        { name: "Team Rocket Multiball", balls: 3,
          locks: "Complete BATTLE targets to lower the Meowth balloon. Center lane Super Skill Shot does it instantly every ball.",
          start: "Shoot the balloon 3 times (+2 per subsequent multiball), then shoot the lit lane below it.",
          jackpots: "Ramps and the balloon are lit for jackpots. Score 6 jackpots to light the Super Jackpot under the balloon. After SJ: outer ramps and orbits light for 15 seconds of unlimited Super Jackpots. This unlimited phase is the game's highest-value window.",
          tip: "Activate 2× Playfield (Berries) just before multiball starts to double all jackpots. The 15-second unlimited SJ phase combined with 2× Playfield is the peak scoring scenario — keep the ball alive and rip ramps as fast as possible." },
        { name: "Pikachu vs. Charizard (Mini-Wizard)", balls: 2,
          locks: "Complete all 4 story modes (Bulbasaur, Squirtle, Pikachu, Charmander) by hitting each ramp/orbit 3 times during single-ball play.",
          start: "Shoot the right ramp to start. If all 4 modes fully completed, this becomes a 6-ball multiball.",
          jackpots: "Hit all 4 ramps/orbits → captive ball for 5M × balls in play. Repeat to light center lane → SJ hurry-up up to 100M (200M with 2× Playfield).",
          tip: "Completing all 4 story modes for the 6-ball version is the big game goal. With 2× Playfield, the SJ cap is 200M — one of the highest single payouts in modern pinball." },
      ],
      goal: "<strong>Hit each ramp/orbit 3× for story modes → complete modes for shot multipliers → trigger Team Rocket Multiball → use 2× Playfield during the unlimited SJ phase → stack shot multipliers on your key shots throughout the ball.</strong>",
      phases: [
        {
          num: "Phase 1 · Early Game",
          title: "Story Modes + Berry Setup",
          body: "<strong>Choose one character and hit their ramp/orbit 3 times for a story mode.</strong> Complete it for a 2× shot multiplier — place it deliberately on the left ramp (your most-used shot). Hit left and right berry targets to build toward 2× Playfield. Use the center lane Super Skill Shot every ball to passively lower the Meowth balloon.",
        },
        {
          num: "Phase 2 · Team Rocket Multiball",
          title: "Lower the Balloon and Ignite the Jackpots",
          body: "<strong>The center lane Super Skill Shot instantly lowers the Meowth balloon</strong> — take it every ball. Once lowered, shoot the balloon 3× then the lane below for Team Rocket Multiball. <strong>Activate 2× Playfield (Berries) just before multiball.</strong> During the 15-second unlimited SJ phase, rip the ramps as fast as possible — this is your biggest scoring window.",
        },
        {
          num: "Phase 3 · Mode Completion + Shot Multipliers",
          title: "Stack Multipliers on Every Shot",
          body: "<strong>Each story mode completion earns a 2× multiplier — place it on your most-used shot.</strong> Complete all 4 story modes for Pikachu vs. Charizard. With all 4 shot multipliers placed on the four main ramps/orbits and 2× Playfield active, all playfield scoring is 4× base — the game's maximum efficiency. Catch Pokémon between modes for Rival Battles and bonus scoring.",
        },
      ],
      safeShots: [
        { name: "Left Ramp (Bulbasaur)", desc: "Your most reliable ramp. Feeds back cleanly to the left flipper. Drives story mode progress, catch sequences, and Team Rocket jackpots. Make this your default target and your first 2× multiplier placement." },
        { name: "Right Ramp (Charmander)", desc: "Second reliable ramp. Feeds back predictably. Needed for most story modes and Team Rocket jackpots. Safe partner to the left ramp for a two-ramp rhythm." },
      ],
      avoidShots: [
        { name: "Right scoop (Rival Battle) — without Pokémon caught", desc: "Starting a Rival Battle without catching the required Pokémon for the current biome results in failure and wasted time. Make sure you've met the catch requirement before shooting the right scoop." },
        { name: "Captive ball — outside discovery/catch", desc: "The Pokédex captive ball is for Catch! sequences. Shooting it randomly during story modes or multiball wastes the discover sequence. Only aim here when actively in the discovery/catch flow." },
      ],
      tips: [
        { head: "Berry timing matters", body: "2× Playfield lasts 20 seconds. The ideal moment to trigger it (final center berry hit) is just before Team Rocket Multiball starts. That combination — 2× Playfield + Team Rocket's unlimited SJ phase — is the highest-scoring window in the game." },
        { head: "Shot multiplier placement is strategic", body: "After a story mode, you earn a 2× multiplier on your next shot. Don't just shoot randomly — aim at the left ramp first (your most frequent shot). A 2× multiplier on the left ramp will be triggered many more times than on a rarely-used shot." },
        { head: "TEAM lanes for mystery", body: "Complete TEAM bottom lanes (via plunge skill shots and top-lane hits) for mystery awards — including occasional extra ball and Berry advancement. These are passive bonuses — use the skill shot lanes to accumulate them each ball." },
        { head: "Eevee combos happen naturally", body: "The easiest Eevee Evolution is Vaporeon (Left Ramp → Right Ramp → Battlefield targets) — it will happen as you naturally move between ramps. Worth 2.5M+ each. All 8 completed = 20M reset bonus." },
      ],
      mistakes: [
        "Not taking the center lane Super Skill Shot — it instantly lowers the Meowth balloon and completes BATTLE targets, effectively skipping several shots toward Team Rocket Multiball.",
        "Activating 2× Playfield and draining before using it — set up Berries, but save the final center berry press for just before a stable ball or multiball.",
        "Starting Rival Battles before catching enough Pokémon — you'll face stronger rivals than your team can handle.",
        "Placing shot multipliers on low-traffic shots — 2× at the left ramp is worth dramatically more than 2× at a rarely-used target.",
        "Ignoring TEAM bottom lanes — easy to hit via plunge and award useful mystery prizes including extra ball and Berry advancement.",
      ],
    },

    hotspots: [
      { x:18, y:22, type:"key",   label:"BU", name:"Left Ramp (Bulbasaur)",    body:"<strong>Your primary shot all game.</strong> Hit 3× for Bulbasaur's story mode. The Poké Ball catch shot. Team Rocket jackpot. Put your first 2× shot multiplier here after a story mode completes — it pays dividends all game." },
      { x:78, y:22, type:"safe",  label:"CH", name:"Right Ramp (Charmander)",  body:"Hit 3× for Charmander's story mode (100 spinner spins to complete). Team Rocket jackpots. Part of Eevee Evolution combos (Vaporeon: Left → Right Ramp → Battlefield). Reliable from left flipper." },
      { x:12, y:18, type:"safe",  label:"SQ", name:"Left Orbit (Squirtle)",    body:"Hit 3× for Squirtle's story mode (whirlpool jackpots via left ramp). Team Rocket jackpots. Part of Eevee combos. Safe from left flipper." },
      { x:82, y:18, type:"safe",  label:"PI", name:"Right Orbit (Pikachu)",    body:"Hit 3× for Pikachu vs. Raichu story multiball. Part of Eevee combos. Key shot for completing all 4 story modes toward Pikachu vs. Charizard 6-ball. Safe from left flipper." },
      { x:50, y:22, type:"key",   label:"TR", name:"Meowth Balloon (Team Rocket)", body:"<strong>Shoot 3× (once lowered) to light Team Rocket Multiball.</strong> Center lane Super Skill Shot lowers it instantly every ball. Jackpots at the balloon during multiball. Lane below the balloon starts the multiball and collects the Super Jackpot." },
      { x:50, y:42, type:"key",   label:"BE", name:"Berry Targets (2× Playfield)", body:"<strong>Left and right berries × 2 each, then center berry when flashing = 2× Playfield for 20 seconds.</strong> Extend with center berry while active. Stack with Team Rocket's unlimited SJ phase for the game's peak scoring window." },
      { x:65, y:48, type:"info",  label:"PD", name:"Pokédex Captive Ball",     body:"Scan a discovered Pokémon here to start the Catch! hurry-up. Also lit for the Pikachu vs. Raichu story multiball Super Jackpot and Pikachu vs. Charizard phase completions. Shoot only during active discovery/catch sequences." },
      { x:50, y:58, type:"info",  label:"SC", name:"Town Scoop (Mystery / Rival Battle)", body:"Complete TEAM lanes → light Mystery here for 2.5M, Poké Balls, Discover advance, or extra ball. Also starts Rival Battles after catching Pokémon. Shoot here when lit to swap Pokémon during Rival Battles." },
      { x:10, y:80, type:"avoid", label:"!",  name:"Left Outlane",             body:"Primary drain risk. Complete town targets to light outlane ball save. Keep shots centered and recover position after left-side shots." },
      { x:88, y:80, type:"avoid", label:"!",  name:"Right Outlane",            body:"Fast drain after right orbit returns. Always recover position after right orbit shots. Outlane ball save alternates sides with sling hits." },
    ],
  };
