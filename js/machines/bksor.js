  /* ─── BLACK KNIGHT: SWORD OF RAGE ──────────────────────── */
MACHINES['bksor'] = {
    name: "Black Knight: Sword of Rage",  sub: "2019 · Stern · Spike 2",
    tagline: "Monster Battles · Triple Knights Multiball & Magna-Save",
    image: "images/bksor.jpg",
    difficulty: "Hard", diffClass: "diff-hard", era: "Modern",

    info: {
      stats: [
        { label: "Manufacturer", value: "Stern Pinball" },
        { label: "Year",         value: "2019" },
        { label: "Designer",     value: "Steve Ritchie" },
        { label: "Platform",     value: "Spike 2 / LCD" },
        { label: "Multiball",    value: "Triple Knights Challenge (3-ball) + KNIGHT Multiball" },
        { label: "Theme",        value: "Sequel to Black Knight (1980) & BK 2000 (1989)" },
      ],
      theme: "Steve Ritchie's sequel to his classic Black Knight machines. Players battle the Black Knight's monster army across 5 Battle modes before the final Black Castle wizard mode. Features the Magna-Save magnet above the right outlane, a spinning mechanical flail, and the Black Knight's taunts throughout. Prem/LE adds a Catapult on an upper playfield.",
      features: [
        { name: "The Ramp", desc: "Your primary shot all game. Shoot the center shots (flail, center target, or shield) to qualify the ramp, then shoot the ramp to raise the Black Knight's shield and start a Battle behind it. Also the jackpot shot during Triple Knights Challenge." },
        { name: "Monster Battles (5 Battles)", desc: "Five Battle modes — Mud Bog (Hydra), Molten Fire (Magma Beast), Burning Sands (Sandworm), Wicked Cavern (Hell Hand), Deep Freeze (Lich). Complete all 5 to qualify Black Castle wizard mode. Each Battle assigns specific lit shots on the playfield." },
        { name: "Triple Knights Challenge (3-ball Multiball)", desc: "The main multiball on the Pro. Shoot the 'light lock' standup to light the lock at the saucer behind the Black Knight's shield. Lock 3 virtual balls for 3-ball multiball. Jackpots at the spinner lane, ramp, and shield saucer, then all shots for a Super Jackpot." },
        { name: "KNIGHT Letters & KNIGHT Multiball", desc: "Collect K-N-I-G-H-T letters by making shots during Battles, completing WAR Hurry-Ups, and getting the Triple Knights Super Jackpot. Completing KNIGHT → shoot left spinner for KNIGHT Multiball (playfield values × number of active balls, up to 3x)." },
        { name: "WAR Hurry-Up", desc: "Complete the top lanes (WAR lanes) to light all three center shots for a hurry-up (base 3M each, up to 25M each). Collect all three, then shoot the center target to complete the round and earn a KNIGHT letter. Top-lane completions also increase the bonus multiplier." },
        { name: "Magna-Save (Action Button)", desc: "The Black Knight series signature feature — a magnet above the right outlane. Press the action button when a ball is draining right to save it. Using Magna-Save also cashes out the Super Jackpot (all active Super Mode values). Relight it by completing the drop targets." },
        { name: "Sword of Rage (Center Target)", desc: "Fill the sword meter via right drop target hits and center target shots. When POWER is lit, collect it during a Battle to activate 2x scoring for the entire battle AND modify the battle to be easier. Very valuable — pursue it during difficult Battles." },
        { name: "Pop Bumpers / Super Modes", desc: "Enough right spinner spins light a random Super Mode at the center target (Lanes, Slings, Spinner, Orbits, Targets, Pops). Active Super Modes boost scoring for that switch type. Cash them all out via Magna-Save for a Super Jackpot." },
      ],
      scoring: [
        { key: "Ramp (Battle award)",             val: "Escalating per completed Battle (+200k base)" },
        { key: "Triple Knights jackpot",          val: "2M+ hurry-up, then all-shots jackpot" },
        { key: "WAR Hurry-Up (each shot)",        val: "3M base, up to 25M with bumper hits" },
        { key: "KNIGHT Multiball (per shot)",     val: "Playfield value × active ball count (up to 3x)" },
        { key: "Sword of Rage (POWER collect)",   val: "2x Battle scoring for entire Battle" },
      ],
      rules: [
        "<strong>The Ramp is your primary safe shot</strong> — qualify it with a center shot (flail/target/shield), then rip it to start and advance Battles.",
        "<strong>Triple Knights Challenge</strong> is the main Pro multiball — light the lock target, lock 3 virtual balls at the saucer, start 3-ball multiball, collect jackpots at spinner/ramp/shield, then Super Jackpot.",
        "The <strong>Magna-Save</strong> (action button) saves right-outlane drains AND cashes out the Super Jackpot — the most powerful move in the game. Relight it with drop target completions.",
        "Collect <strong>KNIGHT letters</strong> during Battles and WAR Hurry-Ups, then shoot the left spinner for KNIGHT Multiball (up to 3x playfield value).",
        "Use the <strong>Sword of Rage POWER</strong> during Battles — it grants 2x Battle scoring AND modifies the Battle to be easier. Fill the sword meter with drop target hits.",
      ],
      benchmarks: [
        { score: "3B+",    label: "Excellent — KNIGHT Multiball, WAR Hurry-Ups, multiple Battles" },
        { score: "800M+",  label: "Solid — completing Battles and Triple Knights jackpots" },
        { score: "200M+",  label: "Getting a feel for center shots → ramp flow" },
      ],
      resources: [
        { name: "IPDB Entry",        url: "https://www.ipdb.org/machine.cgi?id=6580",                          icon: "🎯" },
        { name: "Pinside Game Page", url: "https://pinside.com/pinball/machine/black-knight-sword-of-rage-le", icon: "🕹️" },
        { name: "Stern Rules Sheet", url: "https://www.sternpinball.com/games/black-knight-sword-of-rage/",    icon: "📖" },
      ],
    },

    strategy: {
      skillShot: {
        name: "Top Lane (Pro) / Catapult (Prem/LE)",
        value: "750k–1M + 250k per skill shot",
        desc: "Pro: Plunge into the lit top lane for 750k + 250k per skill shot. Hold the left flipper, then hit one of the three center shots (flail, target, shield) for the Super Skill Shot (1.5M + 500k per skill shot). Prem/LE: Shoot the light-lock target for 1M, or lock a ball in the upper catapult for 2M. The Super Skill Shot is very achievable and worth pursuing every ball.",
      },
      actionButton: {
        name: "Magna-Save",
        when: "Ball is rolling toward the right outlane",
        desc: "<strong>Press the action button the moment a ball threatens to drain down the right outlane</strong> to activate the magnet and save it. Timing matters — press it when the ball is directly above the outlane, not too early. Using Magna-Save also <strong>cashes out the Super Jackpot</strong> (the combined value of all currently active Super Modes) in one shot, so using it at the right moment is doubly rewarding. After each use, complete the drop targets to relight Magna-Save. Keep the drops cleared throughout the game so you always have Magna-Save available — it's one of the most powerful features in competitive pinball.",
      },
      multiball: [
        { name: "Triple Knights Challenge", balls: 3,
          locks: "Shoot the 'light lock' standup target to light lock at the saucer behind the Black Knight's shield. Lock a ball to re-light the target for the next lock.",
          start: "3 virtual locks at the saucer behind the shield start Triple Knights Challenge.",
          jackpots: "Phase 1: jackpots at left spinner lane, ramp, and shield saucer. Then ramp hurry-up (starts at 2M+). Phase 2 after hurry-up: all shots lit for jackpots, ramp for Super Jackpot (3× the jackpot value).",
          tip: "The ramp is your primary jackpot shot — it's the most reliable route during multiball chaos and scores the Super Jackpot. Keep at least one ball controlled for ramp shots." },
        { name: "KNIGHT Multiball", balls: 3,
          locks: "Collect KNIGHT letters by making shots during Battles, completing WAR Hurry-Ups, and getting the Triple Knights Super Jackpot.",
          start: "Complete KNIGHT (first time: 4 letters with K+N pre-lit; 6 letters thereafter), then shoot the left spinner lane.",
          jackpots: "All playfield values multiplied by the number of active balls (up to 3×). Pursue Super Modes before KNIGHT Multiball to boost their values further.",
          tip: "Don't start KNIGHT Multiball during a timed Battle — it will end both modes without compensation. Time it to start during open play." },
      ],
      goal: "<strong>Qualify the ramp with center shots, start and complete Monster Battles, collect KNIGHT letters, trigger Triple Knights Challenge for multiball jackpots, and use the Magna-Save to save right-outlane balls and cash out Super Jackpots.</strong> This is a punishing machine — discipline and shot selection are everything.",
      phases: [
        {
          num: "Phase 1 · Early Game",
          title: "Center Shots → Ramp → Battle",
          body: "<strong>Your first priority is the Battle start sequence: shoot any center shot to qualify the ramp, then shoot the ramp to raise the shield and start a Battle.</strong> Battles assign lit shots on the playfield — hit those targets to defeat each monster. Complete battles earn KNIGHT letters and light the extra ball at the saucer. Also build the Sword of Rage meter (drop targets + center target) — collecting POWER during a difficult Battle makes it much easier and doubles scoring.",
        },
        {
          num: "Phase 2 · Mid Game",
          title: "WAR Hurry-Ups + Triple Knights Lock",
          body: "<strong>Complete top lanes (WAR) between Battles</strong> to light all three center shots for a hurry-up (3M–25M each). Collect all three, then finish at the center target for a KNIGHT letter and bonus multiplier increase. Simultaneously, shoot the light-lock standup to build toward Triple Knights Challenge — lock 3 virtual balls at the saucer for 3-ball multiball. Stack a Battle with the multiball start if possible.",
        },
        {
          num: "Phase 3 · Triple Knights + KNIGHT Multiball",
          title: "Ramp Jackpots and Magna-Save",
          body: "<strong>During Triple Knights, focus on the ramp</strong> — it's Phase 1 jackpot target and scores the Super Jackpot. Keep at least one ball controlled. Once you collect KNIGHT letters, time KNIGHT Multiball for open play (not during a timed Battle) — the 3× playfield value multiplier during KNIGHT Multiball is the biggest scoring window in the game. Always be ready to use the Magna-Save on right-outlane saves — it also cashes out Super Jackpots.",
        },
      ],
      safeShots: [
        { name: "The Ramp", desc: "Your primary and safest shot all game. Qualify it with a center shot, then shoot the ramp to start or advance a Battle. During Triple Knights multiball, the ramp is where jackpots and the Super Jackpot are collected. Make this your default shot." },
        { name: "Left/Right Orbit", desc: "Clean, wide orbit shots. Advance Battle progress and contribute to U-Turn sequences (repeating orbits scores additional points and can light extra ball). Safe from the left flipper with a reliable return — good fallback when center shots feel risky." },
      ],
      avoidShots: [
        { name: "Spinning Flail (Center) — uncontrolled", desc: "The spinning flail can deflect the ball unpredictably. It must be hit to qualify the ramp on second and later Battles. Time your shot carefully — only shoot when you have the ball well-controlled. A poorly timed flail hit can feed the center drain or outlanes." },
        { name: "Starting KNIGHT Multiball during a timed Battle", desc: "KNIGHT Multiball ends any timed mode in progress without compensation. Never start KNIGHT Multiball while a Battle is running — save it for open play between Battles to maximize your scoring window." },
      ],
      tips: [
        { head: "Magna-Save timing", body: "The Magna-Save (action button) saves a ball draining down the RIGHT outlane. Press the button when the ball is about to enter the right outlane — the magnet above it will pull the ball back. After each use, complete the drop targets to relight it. Using the Magna-Save also cashes out the Super Jackpot — time it when Super Modes are running for maximum value." },
        { head: "Ramp angle", body: "The ramp is a tight shot that requires precise flipper angle. Find the exact position that reliably sends the ball up the ramp — a fractional degree matters. Lock that angle in during early play and trust it." },
        { head: "Outlane awareness", body: "Black Knight SoR is notorious for punishing outlane drains. Without post rubbers, outlanes are wide open. Any shot that misses and hugs the side wall is usually gone. Keep shots center-biased and don't spray toward the edges. Left outlane ball save can be lit by completing the two Add Time standup targets." },
        { head: "Sword of Rage during Battles", body: "Fill the sword meter (right drop target hits + center target shots), and when POWER lights at the center target, collect it during a difficult Battle — it grants 2x scoring for the whole Battle AND modifies the Battle to be easier (e.g., Burning Sands mode auto-lights all three center shots). This is a force multiplier worth pursuing every Battle." },
      ],
      mistakes: [
        "Not using the Magna-Save — it saves a right-outlane drain AND cashes out the Super Jackpot. Never waste a Magna-Save opportunity.",
        "Starting KNIGHT Multiball while a timed Battle is running — it ends the Battle without scoring. Plan KNIGHT Multiball for between-mode play.",
        "Playing aggressively toward the sides of the playfield — outlane drains are very likely in competition settings.",
        "Ignoring the Sword of Rage meter — collecting POWER during a Battle doubles scoring and makes the Battle easier. Always work toward it.",
        "Ignoring the Ramp in favour of flashier shots — it is your most reliable scoring route (Battle start, jackpots, Super Jackpot), period.",
      ],
    },

    hotspots: [
      { x:22, y:12, type:"key",   label:"LL", name:"Light Lock Standup Target",  body:"<strong>Shoot this to light the lock at the saucer behind the Black Knight's shield.</strong> One hit for the first Triple Knights Challenge; subsequent multiballs require more hits. Building toward Triple Knights is a key parallel objective alongside Battles — lock 3 virtual balls to start 3-ball multiball." },
      { x:45, y:15, type:"key",   label:"SH", name:"Shield Saucer (Lock / Battle Start)", body:"<strong>The saucer behind the Black Knight's shield is the hub of the game</strong> — it starts Battles, accepts multiball locks for Triple Knights Challenge, awards Extra Ball after a Battle win, and completes WAR Hurry-Ups. The ramp must be shot first to raise the shield and expose it." },
      { x:75, y:12, type:"safe",  label:"OR", name:"Left/Right Orbits",           body:"Wide orbit shots. Advance Battle progress and score U-Turn sequences (repeat orbits for extra points + possible extra ball). Reliable from the left flipper. <strong>Also the Magna-Save cash-out path</strong> — when Super Modes are running, saving via Magna-Save scores all their values as a Super Jackpot." },
      { x:18, y:28, type:"key",   label:"RA", name:"The Ramp",                    body:"<strong>Your primary shot all game.</strong> Qualify it by hitting a center shot (flail/target/shield), then shoot the ramp to raise the shield and start a Battle. During Triple Knights Multiball, the ramp scores Phase 1 jackpots and the Super Jackpot. Learn the exact flipper angle and trust it." },
      { x:50, y:35, type:"key",   label:"FL", name:"Spinning Flail (Center)",     body:"One of the three center shots that qualifies the ramp. The flail must be hit on certain Battles (Molten Fire, second Battles, etc.) to light the ramp. It spins and can deflect unpredictably — <strong>only shoot when ball is controlled</strong>. Also helps fill the Sword of Rage meter." },
      { x:38, y:42, type:"info",  label:"SW", name:"Sword of Rage Meter",         body:"Fill the meter via right drop target hits and center target shots. When <strong>POWER lights at the center target</strong>, collect it during a Battle to unlock 2× Battle scoring for the entire Battle AND modify the Battle to be easier. A high-value objective every Battle — don't ignore it." },
      { x:65, y:35, type:"info",  label:"↑",  name:"Pop Bumpers (Upper Right)",   body:"Upper-right bumper cluster. Right spinner spins light a random Super Mode at the center target (Slings, Spinner, Orbits, Targets, Pops, etc.). Active Super Modes boost scoring for that switch type. <strong>Cash them out via Magna-Save</strong> for the Super Jackpot." },
      { x:48, y:62, type:"info",  label:"KN", name:"KNIGHT Letters",              body:"Earn K-N-I-G-H-T letters during Battles, WAR Hurry-Ups, and Triple Knights Super Jackpot. First completion only needs 4 letters (K+N pre-lit). <strong>Complete KNIGHT → shoot left spinner</strong> for KNIGHT Multiball — all playfield values multiplied by active ball count (up to 3×)." },
      { x:10, y:82, type:"avoid", label:"!",  name:"Left Outlane",                body:"<strong>Very dangerous in competition settings — no post rubber.</strong> Left-side shots that go wide are gone. Left outlane ball save can be lit by completing the two Add Time standup targets. Keep shots center-biased and never spray toward the left wall." },
      { x:88, y:82, type:"key",   label:"MS", name:"Right Outlane (Magna-Save!)", body:"<strong>The Magna-Save magnet sits above this outlane.</strong> When a ball threatens to drain right, press the action button to activate the magnet and save the ball. Using Magna-Save also cashes out the Super Jackpot (all active Super Mode values). Relight Magna-Save by completing the drop targets. One of the most powerful features in the game — never skip it." },
    ],
  };
