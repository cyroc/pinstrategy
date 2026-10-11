  /* ─── SAFE CRACKER ───────────────────────────────────────── */
MACHINES['safecracker'] = {
    name: "Safe Cracker", sub: "1996 · Bally (Williams) · WPC-95",
    tagline: "Timed game · break into the bank · board game to the Vault · Vault & Token Multiball",
    image: "images/safe-cracker.png",
    difficulty: "Medium", diffClass: "diff-medium", era: "DMD",

    /* ── QUICK GUIDE (30–90 s read) ───────────────────────────── */
    quick: {
      goal: "A <strong>timed</strong> game (no fixed balls): drains are returned while time remains, then <strong>Sudden Death</strong>. Get into the bank, move around the <strong>board game</strong> to the <strong>Vault</strong>, and cash your stash in <strong>Vault Multiball</strong> (ramp jackpots). Spell VAULT first for <strong>Token Multiball</strong> (letters carry over between games — check the display).",
      steps: [
        { title: "Light the lock",
          body: "Complete the <strong>flashing drop target sets</strong> by the pop bumpers to light LOCK. The yellow drops and the Bob's Getaway kicker each spot one flashing target." },
        { title: "Lock → open the bank",
          body: "<strong>Ramp</strong> when LOCK is lit: each lock opens a gate to the Vault and lights bank entrances. Lock both before entering — each lock opens another gate, so the route is shorter. Enter at the <strong>Main</strong> (bank scoop), <strong>Roof</strong> (top lane B scoop) or <strong>Cellar</strong> (behind the moving target)." },
        { title: "Board game",
          body: "Stop the dial with a flipper to move 1–5 spaces; collect your stash and dodge the guard, dog, alarms and laser. Items help: dog biscuit, skeleton key, donuts (bribes), ATM card, note to teller." },
        { title: "Vault Multiball",
          body: "Reach the Vault: +$75K and 3-ball <strong>Vault Multiball</strong>. Ramp = Jackpot (your stash, +10 s); the <strong>spinning disc</strong> relights it. With VAULT spelled: 4-ball Token Multiball." },
        { title: "Keep the clock alive",
          body: "A <strong>lit</strong> 'Extra Time' outlane gives +20 s even in Sudden Death (light it via the Cellar award or the Teller). A-B-C lanes add time (a donut in Sudden Death); disc spins, jackpots and TNT Multiball add time too." },
      ],
      shots: [
        { name: "Ramp", why: "Locks; Vault Multiball jackpots; donuts." },
        { name: "Bank entrances", why: "Main scoop, roof (lane B), cellar (moving target)." },
        { name: "Spinning disc", why: "Wheel awards, time, relights the jackpot." },
      ],
      avoid: [
        "After a Guard Dog or Alarm kick-out, shoot back in (Dog: any entrance; Alarm: Cellar only) before the timer ends — the ramp starts TNT and ends the board game, and a drain loses the stash.",
        "Tilting in timed play takes all your time away.",
      ],
      target: "Milestones: reaching the Vault = good game. Token Multiball (VAULT spelled) = great.",
    },

    info: {
      stats: [
        { label: "Manufacturer", value: "Williams (Bally label)" },
        { label: "Year",         value: "1996 (March)" },
        { label: "Design",       value: "Pat Lawlor" },
        { label: "Software",     value: "Matt Coriale, Dean Grover" },
        { label: "Platform",     value: "WPC-95 (DMD)" },
        { label: "Production",   value: "≈1,148 units" },
      ],
      theme: "A bank heist on a compact, timed playfield that pays out tokens. The pinball half gets you into the bank; a board game on the display takes you round the loop to the Vault while a guard chases you. Tokens buy 'Assault on the Vault' games.",
      features: [
        { name: "Bank entrances", desc: "Main (scoop under the plastic bank), Roof (via top lane B), Cellar (hole behind the moving target)." },
        { name: "Drop targets", desc: "White, red and orange sets by the pops light LOCK and advance their jet; the yellow set (in front of Bob's Getaway) spots targets and opens extra bank entrances." },
        { name: "Ramp", desc: "Locks, jackpots, 2 donuts when lit; normally returns to the left inlane." },
        { name: "Spinning disc", desc: "Spins the wheel award (Light Lock, Call Guard, Deposit Window, Disable Computer); adds time." },
        { name: "Bob's Getaway", desc: "Kicker above the left lanes ($5K–10K, rising)." },
        { name: "ALARM targets", desc: "A-L-A-R-M letters spread around the playfield; each completion disables a board-game alarm." },
        { name: "Teller", desc: "Left inlane lights a teller visit at the main entrance: time, TNT Multiball, lock, entrance, money, tokens." },
      ],
      scoring: [
        { key: "Vault",            val: "+$75K to the stash; Vault Multiball" },
        { key: "Vault Jackpot",    val: "Your stash value (+10 s)" },
        { key: "Big Find (#)",     val: "$100K to the stash" },
        { key: "ATM ($)",          val: "$20K ($40K with an ATM card)" },
        { key: "Explosives",       val: "$5K per switch (timed)" },
        { key: "Bonus",            val: "Donuts $5K each, ATM visits $10K; × bank break-ins" },
      ],
      rules: [
        "<strong>Timed play:</strong> drains are returned while time remains; switch hits add a little time. Each board game makes the clock run faster. In Sudden Death a drain ends the game.",
        "<strong>Board-game spots:</strong> ATM, ? (random award), bribe, Candy 2000 (codes), guard dog (20 s to re-enter any entrance), alarms (cellar to re-enter), teller (money bomb unless you carry a note), run 'n hide, big find, laser beam (out), gates (skeleton key).",
        "<strong>Cellar awards:</strong> ATM card, note to teller, Explosives, a VAULT letter, light an outlane.",
        "<strong>TNT Multiball:</strong> from a board-game kick-out (ramp), the '?' spot, Candy 2000 or the teller.",
        "<strong>Assault on the Vault</strong> (token game): 90 s unlimited-ball multiball; drop targets move the three paths; ramp = Vault Jackpot ($50K, +$10K per disc hit).",
        "Rules from Mike Morrey's v2.1 sheet (ROM 1.8); many values are operator settings. The 3-ball comp settings don't apply — the game is timed.",
      ],
      benchmarks: [
        { score: "Token Multiball",  label: "Great game" },
        { score: "Vault reached",    label: "Good game" },
        { score: "Board game entered", label: "Baseline" },
      ],
      resources: [
        { name: "Rulesheet (Mike Morrey)", url: "https://www.pinball.org/rules/safecracker2.html", icon: "📖" },
        { name: "IPDB Entry",              url: "https://www.ipdb.org/machine.cgi?id=3782", icon: "🎯" },
        { name: "Pinside Game Page",       url: "https://pinside.com/pinball/machine/safe-cracker", icon: "🕹️" },
      ],
    },

    strategy: {
      skillShot: null,
      multiball: [
        { name: "Vault Multiball", balls: 3,
          locks: "Reach the Vault in the board game.",
          start: "Automatic on entering the Vault.",
          jackpots: "Ramp = Jackpot worth your stash (+10 s); spinning disc relights it.",
          tip: "With V-A-U-L-T spelled, it becomes 4-ball Token Multiball (ramp dispenses tokens)." },
        { name: "TNT Multiball", balls: null,
          locks: "Board-game kick-out (shoot the ramp), '?' spot, Candy 2000 code or teller.",
          start: "Immediately.",
          jackpots: "Hit the required targets: $5K and +5 s.",
          tip: "A way to regain time." },
      ],
      goal: "<strong>Light and make locks to open gates, enter the bank, and ride the board game to the Vault for Vault Multiball.</strong> Collect helpful items in the pinball half and protect your time.",
      phases: [
        { num: "Phase 1", title: "Locks + items", body: "Flashing drop sets for LOCK; ramp to lock (opens gates); cellar for items." },
        { num: "Phase 2", title: "Board game", body: "Enter the bank; stop the dial carefully; use donuts, keys and biscuits." },
        { num: "Phase 3", title: "Vault", body: "Vault Multiball: ramp jackpots, disc to relight." },
      ],
      safeShots: [
        { name: "Ramp", desc: "Returns to the left inlane when nothing is lit." },
      ],
      avoidShots: [],
      tips: [
        { head: "Disable Computer", body: "Wheel award: the timer is suspended for 20 s and target hits add time." },
        { head: "Guard dog", body: "Carry a dog biscuit to skip the 20 s re-entry and keep your stash." },
      ],
      mistakes: [
        "Running out the clock in timed play instead of using it to set up locks and items.",
        "Ignoring the ALARM targets — disabled alarms keep you in the board game.",
      ],
    },

    hotspots: [
      { x: 37,   y: 27, type: "key",   label: "RP", name: "Ramp", body: "Locks; Vault jackpots; donuts." },
      { x: 51,   y: 38,   type: "key",   label: "MB", name: "Main Bank Entrance (Teller)", body: "Board game entry; teller visits; wheel awards." },
      { x: 60,   y: 12.5,   type: "key",   label: "RF", name: "Roof Entrance", body: "Via the B top lane scoop when lit." },
      { x: 25,   y: 29.5,   type: "key",   label: "CE", name: "Cellar Entrance (moving target)", body: "Cellar awards; bank entry." },
      { x: 21,   y: 41.5,   type: "key",   label: "DS", name: "Spinning Disc", body: "Wheel awards; time; relights the Vault jackpot." },
      { x: 25,   y: 51.5, type: "info",  label: "YD", name: "Yellow Drop Targets", body: "Spot a lock target; open a bank entry when LOCK is lit." },
      { x: 17.5, y: 55,   type: "info",  label: "BG", name: "Bob's Getaway", body: "Kicker; $5K–10K rising." },
      { x: 54.5, y: 21.5, type: "info",  label: "D1", name: "Drop Targets (left of pops)", body: "Light LOCK when flashing; advance a jet." },
      { x: 74.5, y: 18,   type: "info",  label: "D2", name: "Drop Targets (right of pops)", body: "Light LOCK when flashing; advance a jet." },
      { x: 66.5, y: 37, type: "info",  label: "D3", name: "Drop Targets (lower right)", body: "Light LOCK when flashing; advance a jet." },
      { x: 60,   y: 4.5,  type: "info",  label: "TL", name: "A-B-C Top Lanes", body: "Add time; B leads to the roof." },
      { x: 64,   y: 46,   type: "info",  label: "AL", name: "ALARM Targets (A-L-A-R-M)", body: "Spread around the playfield (A, L on the left; A, R, M here); disable board-game alarms." },
      { x: 10,   y: 69,   type: "avoid", label: "!",  name: "Left Outlane", body: "+20 s when 'Extra Time' is lit (Cellar award or Teller)." },
      { x: 79,   y: 68,   type: "avoid", label: "!",  name: "Right Outlane", body: "+20 s when 'Extra Time' is lit (Cellar award or Teller)." },
    ],
  };
