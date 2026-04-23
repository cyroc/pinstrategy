  /* ─── KING KONG: MYTH OF TERROR ISLAND ─────────────────── */
MACHINES['kingkong'] = {
    name: "King Kong: Myth of Terror Island",  sub: "2025 · Stern · Spike 2",
    tagline: "6 Objectives for 8th Wonder · Island Scenes & Spider Pit",
    image: "images/king-kong.webp",
    difficulty: "Hard", diffClass: "diff-hard", era: "Modern",

    info: {
      stats: [
        { label: "Manufacturer", value: "Stern Pinball" },
        { label: "Year",         value: "2025" },
        { label: "Designer",     value: "Keith Elwin" },
        { label: "Platform",     value: "Spike 2 / LCD" },
        { label: "Multiball",    value: "King Kong Multiball (3-ball) + Spider Pit Multiballs (4 tiers)" },
        { label: "Theme",        value: "Original 1930s King Kong novel — entirely original assets" },
      ],
      theme: "Keith Elwin's follow-up to Iron Maiden, King Kong was 35 years in the making (Data East planned one in the early '90s but it went unreleased). Uses entirely original assets based on the 1930s King Kong novel — no Hollywood tie-in. Players explore Terror Island with Ann Darrow, Jack Driscoll, and Carl Denham, completing 6 objectives to unlock the 8th Wonder wizard mode. Features 7+ skill shot variants, each adding a KING KONG letter.",
      features: [
        { name: "Island Scenes (5 Scenes via Gong)", desc: "Shoot the gong to light island scenes. 5 scenes: Save Ann, Cross the Chasm, Pterodactyl Attack, Stegosaurus Encounter, Escape the Swamp. Each has a 60-second timer. Completing all 5 qualifies Crash the Gate mini-wizard and contributes to the 8th Wonder wizard mode. Hitting the gong during a scene adds +15 seconds once per scene." },
        { name: "Climbing the Building", desc: "Shoot yellow-lit climb arrows to ascend the Empire State Building. 4 lit initially (25–100 ft per set). Awards at key heights: 100ft = 5M + map segment, 200ft = island lock + extra ball, 300ft = NYC Event 1, 400ft = KING KONG letter, 500ft = island lock, 600ft = NYC Event 2, 1000ft = NYC Event 3." },
        { name: "Biplane Attack", desc: "Make 3 side ramp shots to start a 30-second timed mode. The side ramp lights for a jackpot that grows with switch hits. Barrel Roll combo (left orbit → side ramp) adds +250k; Chandelle Maneuver (river → punchback → side ramp) adds +500k + 15 seconds. Destroy 5 biplanes for 8th Wonder." },
        { name: "Spell KING KONG (8 Letters)", desc: "Each unique skill shot adds a KING KONG letter. Also earned via switch hit progress, cliffs ramp shots, Pterodactyl Attack, climb milestones, and Super Sweeps. Spelling KING KONG lights T-Rex Battle mini-wizard mode." },
        { name: "King Kong Multiball (3-ball)", desc: "Complete drop targets to light Kong Lock at the center ramp (all 3 locks lit first time, 1 at a time after). Lock 3 balls → multiball. Jackpots: first round needs drop completion to light center spinner + punchback (1×) and cliffs ramp (2×). Shoot side ramp for Super Jackpot after any jackpot." },
        { name: "Spider Pit Multiballs (4 Tiers)", desc: "Hit pit targets to battle pit creatures. Three tiered multiballs: 2-Legged Lizard (3 pit shots → jackpot), Octopus Insect (standup targets → pit jackpot), Giant Spider (30 switch hits + 4 ramp shots up to 4× → up to 100M jackpot). After all 3: Spider Queen 3-ball multiball." },
        { name: "NYC Events (3 Modifiers)", desc: "Unlock NYC Events by climbing to 300ft, 600ft, and 1000ft. Start at the right orbit. Choose one modifier each: 3-ball multiball (1× scoring), limited flipper count (2× scoring), or single-ball timed (3× scoring). Each modifier used only once — choose single-ball timed first." },
        { name: "Cliffhanger Ball Save (Left Outlane)", desc: "When lit (via treasure awards or the 7-treasure perk), a ball draining down the left outlane grabs a ledge — you have a brief window to make the correct shot and save it. A crucial safety feature on a punishing machine." },
      ],
      scoring: [
        { key: "Mega Secret Skill Shot",            val: "1.75M × 2–3× + KING KONG letter + 8s ball save" },
        { key: "NYC Event (single-ball timed, 3×)", val: "All scoring × 3 for entire mode" },
        { key: "Giant Spider Pit SJP",              val: "Up to 25M × 4× = 100M maximum" },
        { key: "King Kong Multiball SJ",            val: "Multiplied by green arrow accumulation + prior ramp shots" },
        { key: "Island Scene final jackpot",        val: "Sum of all prior scene shots collected" },
        { key: "Biplane Attack jackpot",            val: "Builds with switch hits; boosted by Chandelle Maneuver" },
      ],
      rules: [
        "There are <strong>6 main objectives</strong> for the 8th Wonder wizard mode: complete all 5 Island Scenes, Spider Pit Multiballs, destroy 5 Biplanes, King Kong Multiball Super Jackpot, Climbing objective, and spell KING KONG.",
        "<strong>Each unique skill shot adds a KING KONG letter</strong> — attempt a different variant each ball (7+ total) to passively progress toward T-Rex Battle mini-wizard.",
        "Shoot the <strong>gong to light Island Scenes</strong> (Pro: collect blue arrows first). Hitting the gong during a scene adds +15 seconds, once per scene.",
        "<strong>NYC Events</strong> offer scoring multipliers — the single-ball timed modifier offers 3× all scoring. Always choose it first.",
        "<strong>Right inlane bounce</strong> before a pit shot doubles your Spider Pit progress — use it constantly to advance pit tiers faster.",
      ],
      benchmarks: [
        { score: "500M+",  label: "Excellent — Giant Spider SJP, NYC Events, Island Scenes complete" },
        { score: "150M+",  label: "Solid — 3 Island Scenes, KK Multiball, 2 Spider Pit tiers" },
        { score: "40M+",   label: "Getting started — first Island Scene and Biplane Attack" },
      ],
      resources: [
        { name: "IPDB Entry",            url: "https://www.ipdb.org/machine.cgi?id=6898",                             icon: "🎯" },
        { name: "Pinside Game Page",     url: "https://pinside.com/pinball/machine/king-kong-myth-of-terror-island",  icon: "🕹️" },
        { name: "Tilt Forums Rulesheet", url: "https://tiltforums.com/t/king-kong-myth-of-terror-island-rulesheet/9514", icon: "📖" },
      ],
    },

    strategy: {
      skillShot: {
        name: "Mega Secret Skill Shot (Upper Flipper → Cliffs Ramp)",
        value: "1.75M × 2–3× + KING KONG letter + 8 seconds ball save",
        desc: "Plunge the ball to the upper left flipper, then make a reflex shot to the cliffs ramp for the Mega Secret Skill Shot: 1.75M × 2× (follow up with biplane ramp) or × 3× (follow up with U-turn) + a KING KONG letter + 8 seconds ball save. This is the highest-value skill shot and also passively builds your KING KONG letters. If you can't reliably hit the upper flipper reflex shot, the Super Skill Shot (plunge into the river lane near the mini-flipper) is a solid alternative. Most importantly: attempt a <em>different</em> skill shot each ball — 7 unique variants each add a free KING KONG letter.",
      },
      actionButton: {
        name: "Log Bridge Diverter",
        when: "Press just before the ball enters the river lane shot",
        desc: "The Log Bridge is a <strong>hidden diverter near the river lane</strong>. Press the action button at the moment a ball is about to enter the river shot (either after shooting the right orbit or even off the initial plunge) to activate the diverter, routing the ball to the <strong>mini-flipper</strong>. From there you can pick off drop targets or shoot the cliffs ramp — shots that are otherwise hard to reach directly. You start each ball with <strong>2 Log Bridge uses</strong>. Earn more (up to 5) by completing the drop targets during the ball. Map 3 perk: start every ball with maximum uses. Timing is the key skill — press it just before the ball hits the lane entrance switch. Also: during <strong>T-Rex Battle</strong>, once arrows are hit and the pit holds the ball, the button activates pummel mode — rapidly press it for 100k + 2k per press over 10 seconds.",
      },
      multiball: [
        { name: "King Kong Multiball", balls: 3,
          locks: "Complete drop targets to light Kong Lock at the center ramp. All 3 locks light on the first multiball. Thereafter, one lock at a time via drop completions.",
          start: "Lock 3 balls at the center ramp (or right orbit on Pro) to start King Kong Multiball.",
          jackpots: "First jackpot round: complete drops during multiball to light center spinner + punchback (1×) and cliffs ramp (2×). Shoot the side ramp for Super Jackpot after any jackpot scored. Relock a ball (collect all green arrow awards → center ramp) to activate 2× jackpots for 20 seconds.",
          tip: "The side ramp is the Super Jackpot shot every time — score any jackpot then immediately rip the side ramp for the SJ. Build green arrow shot counts before the SJ for higher multipliers. The SJ combo (ramp → side ramp) is your bread-and-butter multiball sequence." },
        { name: "Spider Pit — Giant Spider (Tier 3)", balls: 2,
          locks: "Hit pit targets to advance — 4 shots to start Lizard, +2 each tier. Roll through the right inlane first for 2× progress on the next hit.",
          start: "Final pit shot starts each tier's multiball.",
          jackpots: "Giant Spider (3rd tier): 30 switch hits to light jackpot at the pit. Shoot all 4 ramps to build jackpot multiplier up to 4× (each ramp = +1×). Super Jackpot = up to 25M × 4× = 100M. Island Mystery adds a free ball the first time in each of tiers 1–3.",
          tip: "Giant Spider's 100M max jackpot is the highest single scoring event outside wizard mode. Hit all 4 ramps before the pit shot for maximum multiplier. Right inlane 2× progress makes advancing through all 3 tiers much faster." },
      ],
      goal: "<strong>Attempt a new skill shot each ball for KING KONG letters → shoot the gong for Island Scenes → start Biplane Attack via side ramp → build King Kong Multiball and Spider Pit tiers → choose 3× for NYC Events → complete all 6 objectives for 8th Wonder wizard mode.</strong>",
      phases: [
        {
          num: "Phase 1 · Early Game",
          title: "Skill Shot Variety + Gong + Island Scenes",
          body: "<strong>Attempt a different skill shot each ball</strong> — 7 unique variants each add a KING KONG letter passively toward T-Rex Battle. Shoot the gong to light your first Island Scene. Save Ann and Stegosaurus Encounter are the most approachable first scenes. Start Biplane Attack (3 side ramp shots) as soon as you have a controlled ball — 5 biplanes destroyed is one of the 6 objectives for 8th Wonder.",
        },
        {
          num: "Phase 2 · King Kong Multiball + Spider Pit",
          title: "Multiballs and Climb Shots",
          body: "<strong>Complete drop targets to light Kong Lock</strong>, then lock 3 balls at the center ramp for King Kong Multiball. Score jackpots (center spinner + cliffs ramp after drop completion), then rip the side ramp for the Super Jackpot. Simultaneously, use the right inlane before pit shots for 2× pit progress — advance through all 3 Spider Pit tiers toward Spider Queen. Shoot yellow climb arrows for building progress (200ft and 500ft = Island Locks).",
        },
        {
          num: "Phase 3 · NYC Events + Spider Queen",
          title: "3× Scoring and 8th Wonder",
          body: "<strong>When NYC Events light (at 300ft, 600ft, 1000ft), always choose the 3× single-ball timed modifier first</strong> — it triples ALL scoring for the entire mode. After completing all 3 Spider Pit tiers, Spider Queen 3-ball multiball is available for 5M+ Super Jackpots. Complete all 6 main objectives to unlock the 8th Wonder wizard mode. Cliffhanger ball save (left outlane) is your safety net — use it whenever available.",
        },
      ],
      safeShots: [
        { name: "Side Ramp", desc: "Your key scoring shot and Super Jackpot shot during King Kong Multiball. Starts Biplane Attack (3 shots), scores jackpots during the attack mode, and is always lit for SJ during multiball. Find the exact flipper angle and commit." },
        { name: "Center Spinner / Ramp", desc: "Medium-range center shot. Scores center spinner jackpots during King Kong Multiball (first jackpot round). Advances gong on some Island Scenes. Reliable from the left flipper — a consistent workhorse." },
        { name: "Left Orbit", desc: "Wide, clean orbit. Part of the Barrel Roll combo (left orbit → side ramp +250k). Scores during Island Scenes and climb sequences. Safe from the right flipper." },
      ],
      avoidShots: [
        { name: "Cliffs Ramp — uncontrolled", desc: "The cliffs ramp is the Mega Secret Skill Shot target and a key shot in Cross the Chasm. It's a tight shot — a miss can feed the left outlane area. Only shoot it when you have the ball well under control." },
        { name: "Kong Cave VUK — without it lit", desc: "The Kong Cave (right side VUK) is key in Pterodactyl Attack and Lost Temple sequences. Shooting it unlit returns the ball unpredictably through the upper flipper. Only aim here when specifically lit in a mode." },
      ],
      tips: [
        { head: "Skill shot variety = free KING KONG letters", body: "There are 7+ skill shot variants. You don't need dangerous ones — the Super Skill Shot (river lane plunge) is straightforward. Try a different one each ball and you'll collect most KING KONG letters passively, without spending in-game shots on switch accumulation." },
        { head: "Gong adds +15 seconds to Island Scenes", body: "Each Island Scene can be extended once by shooting the gong during it. On tighter scenes (Cross the Chasm requires 6 sailor rescues), this extension is often essential. Shoot the gong mid-scene as a time buffer, not as a last resort when you're already out of time." },
        { head: "NYC Event modifier selection", body: "Your first NYC Event: always choose the single-ball timed 3× modifier — it triples ALL scoring for the entire mode. Second: the limited flips 2× version. Third (and worst): the 3-ball multiball 1× version. Each modifier can only be chosen once." },
        { head: "Right inlane for Spider Pit acceleration", body: "Rolling through the right inlane briefly lights the pit for 2× progress on the next hit. Always route the ball through the right inlane before a pit shot — it halves the number of shots needed to advance each Spider Pit tier." },
      ],
      mistakes: [
        "Using the same skill shot every ball — each unique skill shot adds a KING KONG letter and extends ball save. Variety is actively rewarded by the game.",
        "Choosing the 3-ball 1× modifier for your first NYC Event — the single-ball 3× version is dramatically more valuable. Save the weakest option for last.",
        "Shooting the cliffs ramp without a controlled ball — it feeds toward the left outlane on a miss on one of the most outlane-punishing machines in the lineup.",
        "Ignoring the right inlane before pit shots — the 2× pit progress effectively halves the number of shots needed for each Spider Pit Multiball tier.",
        "Not using Island Locks — at 200ft and 500ft you earn Island Locks that upgrade a Scene to 2-ball multiball for Island Jackpot scoring. Use one on Save Ann or Stegosaurus Encounter (the most completable scenes).",
      ],
    },

    hotspots: [
      { x:50, y:22, type:"key",   label:"GO", name:"Gong",                    body:"<strong>Hit to light Island Scenes</strong> (Pro: collect blue arrows first). Hitting the gong during an active scene adds +15 seconds to the timer (once per scene). Also advances KING KONG letter progress. Your first action every ball." },
      { x:78, y:30, type:"key",   label:"SR", name:"Side Ramp",               body:"<strong>Your primary scoring shot.</strong> 3 shots = Biplane Attack. During King Kong Multiball this is the Super Jackpot shot. Barrel Roll combo (left orbit → side ramp +250k) and Chandelle Maneuver finisher (+500k, +15s to Biplane). Memorize the exact flipper angle." },
      { x:22, y:22, type:"key",   label:"CR", name:"Cliffs Ramp",             body:"<strong>Mega Secret Skill Shot target</strong> — plunge to upper flipper, reflex shot here for 1.75M × multiplier + KING KONG letter + 8s ball save. During Cross the Chasm, rescues sailors (combo from river lane required). Also scores cliffs shots for KING KONG letter progress. Shoot only with a controlled ball." },
      { x:50, y:35, type:"safe",  label:"CS", name:"Center Spinner / Ramp",   body:"Fast center shot. During King Kong Multiball (after drop completion), center spinner and punchback are 1× jackpot shots. Advances gong on some Island Scenes. Reliable from both flippers — your secondary default shot." },
      { x:50, y:55, type:"key",   label:"DT", name:"Drop Targets",            body:"<strong>Complete to light Kong Lock at the center ramp.</strong> All 3 locks lit on first multiball. During King Kong Multiball, complete drops to light the jackpot shots. Hit them whenever available — advancing toward multiball locks is always valuable." },
      { x:62, y:55, type:"key",   label:"PT", name:"Spider Pit",              body:"<strong>Hit to advance Spider Pit Multiball tiers.</strong> Roll through the right inlane first for 2× progress. 4 hits to start Lizard (tier 1), +2 each tier. Giant Spider tier 3: 30 switch hits + 4 ramps = up to 100M jackpot. Island Mystery gives add-a-ball free in tiers 1–3." },
      { x:80, y:48, type:"key",   label:"KC", name:"Kong Cave VUK",           body:"Key shot during <strong>Pterodactyl Attack</strong> scene — 2× or 3× cave awards, 3 shots to complete the scene. Second cave shot awards a KING KONG letter. Only aim here when specifically lit in a mode — unlit returns unpredictably through the upper flipper." },
      { x:78, y:18, type:"info",  label:"RO", name:"Right Orbit (NYC Events)", body:"At 300ft, 600ft, and 1000ft of climbing, the right orbit lights for <strong>NYC Events.</strong> Always choose the 3× single-ball timed modifier first. NYC Events cannot start during active Island Scenes or multiballs — plan for single-ball play." },
      { x:10, y:82, type:"key",   label:"CH", name:"Left Outlane (Cliffhanger)", body:"<strong>Cliffhanger ball save activates here when lit</strong> — a draining ball grabs the ledge and you have a brief window to make the correct shot to save it. Lit via treasure awards and the 7-treasure perk. Anti-Skill Shot (deliberate left outlane plunge) earns a sneak-in + possible KING KONG letter." },
      { x:88, y:82, type:"avoid", label:"!",  name:"Right Outlane",           body:"Right-side drain, especially dangerous after fast Kong Cave returns and side ramp misses. No ball save feature on this side. Keep shots controlled and center-biased during high-speed play." },
    ],
  };
