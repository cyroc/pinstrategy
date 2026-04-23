  /* ─── FISH TALES ──────────────────────────────────────────── */
MACHINES['fishtales'] = {
    name: "Fish Tales",  sub: "1992 · Williams · WPC",
    tagline: "Fast Cast every launch · Caster Club Multiball · LIE rollovers for bonus multiplier",
    image: "images/fish-tales.webp",
    difficulty: "Medium", diffClass: "diff-medium", era: "DMD",

    info: {
      stats: [
        { label: "Manufacturer", value: "Williams Electronics" },
        { label: "Year",         value: "1992" },
        { label: "Designer",     value: "Pat Lawlor" },
        { label: "Platform",     value: "WPC" },
        { label: "Multiball",    value: "3-ball" },
        { label: "Theme",        value: "Fishing / Tall Tales" },
      ],
      theme: "Humorous fishing theme full of tall-tale braggadocio. The player casts for the legendary 'Big One' — a giant mechanical fish on the playfield. Designed by Pat Lawlor, the creator of The Addams Family and Twilight Zone.",
      features: [
        { name: "Fast Cast (Caster Club on launch)", desc: "The most important recurring action. The moment a ball is launched, hit the Caster Club (7) for Fast Cast: 2M first time, +1M each subsequent (caps at 10M). Never miss this on any launch." },
        { name: "Caster Club Multiball (3-ball)", desc: "All 3 lock lamps are lit at game start. Shoot Caster Club 3 times to lock balls and start multiball immediately. Jackpot sequence: Caster Club starts 15-sec timer → Left Orbit to Eject Hole = jackpot (Tropical 20M → Fresh Water 30M → Deep Sea 40M). After 3 jackpots: Super Jackpot (100M base) at Captive Ball. Grows to 600M+ on 3rd multiball." },
        { name: "Captive Ball — Hold Bonus 1M", desc: "The Captive Ball cycles through awards. The most valuable is 'Hold Bonus 1M' — carries your Bonus Multiplier and bonus to the next ball. Collect this before 'Instant Multiball' whenever possible." },
        { name: "LIE Rollovers (Bonus Multiplier)", desc: "Above the bumpers. Complete L-I-E to add +1× Bonus Multiplier. Each completion also removes lowest Stretch the Truth value. Push toward 7× over the game." },
        { name: "Tales Told / Rock the Boat", desc: "Catch 4 fish (hit target banks, then Left Orbit within 15 sec = Stretch the Truth = 1 Tale Told). All 4 Tales Told = Rock the Boat (10M per shot for 30 sec on Starboard Ramp, Port Ramp, and Captive Ball)." },
      ],
      scoring: [
        { key: "Fast Cast",              val: "2M → 10M per launch (cumulative)" },
        { key: "Caster Club Jackpot",    val: "20M → 30M → 40M; Super Jackpot 100M+" },
        { key: "Super Jackpot (3rd MB+)", val: "Up to 600M base" },
        { key: "Rock the Boat",          val: "10M per shot × 30 seconds" },
        { key: "Hold Bonus 1M (Captive)", val: "Carries multiplier to next ball" },
      ],
      rules: [
        "<strong>Fast Cast every launch</strong> — hit Caster Club immediately for 2M–10M. This is the single most important recurring action.",
        "<strong>Lock lamps are lit at game start</strong> — Caster Club 3× starts Multiball immediately. No setup required.",
        "During Multiball: <strong>Caster Club → Left Orbit (Eject Hole)</strong> for jackpot within 15-second timer. Double Jackpot if both balls hit Caster Club before Eject Hole collect.",
        "LIE rollovers above bumpers = <strong>+1× Bonus Multiplier</strong> per completion. Use flipper buttons to cycle unlit rollovers.",
        "'Hold Bonus 1M' from Captive Ball carries Bonus Multiplier to next ball — priority collect before 'Instant Multiball'.",
      ],
      benchmarks: [
        { score: "1B+",    label: "Excellent — Super Jackpot 3rd+ multiball + Rock the Boat" },
        { score: "300M+",  label: "Solid — first multiball Super Jackpot + consistent Fast Cast" },
        { score: "100M+",  label: "Decent — Fast Cast landing and multiball reached" },
      ],
      resources: [
        { name: "IPDB Entry",        url: "https://www.ipdb.org/machine.cgi?id=818",       icon: "🎯" },
        { name: "Pinside Game Page", url: "https://pinside.com/pinball/machine/fish-tales", icon: "🕹️" },
      ],
    },

    strategy: {
      skillShot: "No traditional skill shot. Instead: <strong>Fast Cast every launch</strong> — the moment the ball is live, shoot the Caster Club (7) for 2M–10M immediately. This is the most reliable opener on the table and scales across the entire game.",
      multiball: [
        { name: "Caster Club Multiball", balls: 3,
          locks: "All 3 lock lamps are lit at game start. Shoot Caster Club (7) 3 times for 100K each — locks immediately, no extra setup needed.",
          start: "Lock 3 balls → 3-ball Caster Club Multiball begins.",
          jackpots: "Caster Club starts a 15-second timer → shoot Left Orbit with enough power to reach the Eject Hole (10) → jackpot collected. Tropical 20M → Fresh Water 30M → Deep Sea 40M. After 3 jackpots: Captive Ball lights for Super Jackpot (100M base). Each successive multiball increases base values — 3rd multiball Super Jackpot can reach 600M.",
          tip: "Double Jackpot: if a second ball enters the Caster Club before you collect the jackpot, the Eject Hole gives Double Jackpot. Watch for this naturally during multiball chaos." },
      ],
      goal: "<strong>Fast Cast every launch (2M–10M). Lock balls via Caster Club 3× for multiball immediately. Catch fish and earn Tales Told for Rock the Boat (10M per shot). Collect 'Hold Bonus 1M' from Captive Ball to carry the Bonus Multiplier forward. The Super Jackpot grows to 600M+ by the 3rd multiball.</strong>",
      phases: [
        { num: "Phase 1 · Every Launch", title: "Fast Cast + LIE Rollovers + First Multiball", body: "<strong>Fast Cast on every new ball launch</strong> — Caster Club immediately for 2M–10M. Then complete LIE rollovers above bumpers for +1× Bonus Multiplier per completion. Hit target banks to catch fish. Shoot Caster Club 3× to lock balls and start multiball — lock lamps are lit from game start." },
        { num: "Phase 2 · Multiball Jackpot Run", title: "Caster Club → Left Orbit → Eject Hole", body: "<strong>During multiball:</strong> Caster Club starts the 15-second jackpot timer. Power-shoot Left Orbit to reach the Eject Hole. Collect jackpot (20M → 30M → 40M). After 3 jackpots, hit Captive Ball hard for the Super Jackpot (100M+). If both balls hit Caster Club before you collect, the Eject Hole gives Double Jackpot." },
        { num: "Phase 3 · Late Game", title: "Rock the Boat + Growing Super Jackpot", body: "4 Tales Told lights <strong>Rock the Boat</strong> (Starboard Ramp, Port Ramp, Captive Ball = 10M each for 30 seconds). Keep relocking for multiball — each successive multiball grows base jackpot values. Collect 'Hold Bonus 1M' from Captive Ball to carry your multiplier to the next ball." },
      ],
      safeShots: [
        { name: "Caster Club (7)", desc: "Direct left-flipper shot. The foundation of all scoring — Fast Cast opener and multiball lock. Ball returns cleanly." },
        { name: "Left Orbit (2)", desc: "Critical for Stretch the Truth (Eject Hole) within 15 seconds of catching a fish, and for jackpot collection during multiball. Strong left-flipper power shot." },
        { name: "Port Ramp / Starboard Ramp", desc: "Clean ramp shots that return predictably. Primary shots during Rock the Boat (10M each). Light up with inlane rollovers." },
      ],
      avoidShots: [
        { name: "Left Orbit at wrong power during multiball", desc: "If you don't shoot the Left Orbit hard enough to reach the Eject Hole, you won't collect the jackpot — and lose precious timer time. Practice the exact power needed." },
        { name: "Captive Ball before 'Hold Bonus 1M'", desc: "The Captive Ball cycles through awards. Collecting 'Instant Multiball' before you've collected 'Hold Bonus 1M' means you lose the carry-over benefit. Collect them in the correct order." },
      ],
      tips: [
        { head: "Fast Cast scales across the whole game", body: "By ball 3, if you've hit Fast Cast every ball, you open with 4M–10M instantly. This is one of the highest reliable per-ball openers of any Williams table — never miss it." },
        { head: "Stretch the Truth timing", body: "You have exactly 15 seconds after catching a fish to shoot the Left Orbit to the Eject Hole. Keep the ball controlled after a fish catch and aim immediately. Complete LIE rollovers to eliminate low-value options so your spinner always hits 2×, 3×, or 5×." },
        { head: "'Hold Bonus 1M' is the most valuable Captive Ball award", body: "It carries the Bonus Multiplier (and 1M bonus) to the next ball. If your multiplier is at 5× or 7× on ball 2, this makes ball 3 enormously valuable. Collect it before 'Instant Multiball'." },
        { head: "Double Jackpot during multiball", body: "If both balls happen to enter the Caster Club before you collect a jackpot, the timer resets and the Eject Hole gives double jackpot. This can happen naturally — watch for the double jackpot lamp." },
      ],
      mistakes: [
        "Missing the Fast Cast on ball launch — the most reliable 2M–10M opener on the table, every ball.",
        "Not immediately shooting the Left Orbit after catching a fish — the 15-second Stretch the Truth window closes fast.",
        "During multiball, not hitting the Left Orbit hard enough to reach the Eject Hole — jackpot not collected, timer wasted.",
        "Collecting 'Instant Multiball' from Captive Ball before 'Hold Bonus 1M' — losing the critical carry-over.",
        "Draining while forcing the Left Orbit to the Eject Hole with poor ball control.",
        "Ignoring LIE rollover completions and accepting 'Total Lie' (zero multiplier) from Stretch the Truth.",
      ],
    },

    hotspots: [
      { x:32, y:55, type:"key",   label:"CC", name:"Caster Club (7)",           body:"<strong>The most important shot on the table.</strong> Fast Cast on every launch (2M–10M). Also the ball lock for 3-ball multiball — all 3 lock lamps lit from game start. Shoot Caster Club 3× during multiball to start the 15-second jackpot timer. Direct left-flipper shot." },
      { x:18, y:30, type:"key",   label:"LO", name:"Left Orbit → Eject Hole (2/10)", body:"<strong>Jackpot collection during multiball.</strong> After Caster Club starts the 15-second timer, power-shoot Left Orbit hard enough to reach the Eject Hole (10). Jackpots: Tropical 20M → Fresh Water 30M → Deep Sea 40M. Also Stretch the Truth: within 15 seconds of catching a fish, shoot Left Orbit to Eject Hole to multiply your fish value." },
      { x:60, y:45, type:"key",   label:"CB", name:"Captive Ball",              body:"Cycles through awards. Priority collect: <strong>'Hold Bonus 1M'</strong> (carries Bonus Multiplier to next ball) then 'Instant Multiball'. After 3 multiball jackpots: lights for Super Jackpot (100M+ base, grows to 600M by 3rd multiball). Hit hard to collect." },
      { x:22, y:38, type:"safe",  label:"PR", name:"Port Ramp (3)",             body:"Lit by right inlane rollover. Returns via right side. Scores up to 3M and advances School of Fish lamps. Primary scoring during Rock the Boat (10M per shot × 30 seconds when all 4 Tales Told)." },
      { x:72, y:35, type:"safe",  label:"SR", name:"Starboard Ramp (5)",        body:"Lit by left inlane. Mirror of Port Ramp. Primary scoring during Rock the Boat. Alternates with Port Ramp — both pay 10M each during the mode." },
      { x:52, y:15, type:"info",  label:"LI", name:"LIE Rollovers (above bumpers)", body:"Complete L-I-E for <strong>+1× Bonus Multiplier</strong> per completion (max 7×). Also removes lowest Stretch the Truth value — repeated completions mean your spinner always hits 2×, 3×, or 5× on caught fish. Use flipper buttons to cycle unlit rollovers." },
      { x:75, y:18, type:"info",  label:"ET", name:"Eject Hole (10)",           body:"The jackpot collection hole. Only accessible via a hard Left Orbit shot. During multiball: collect jackpot here within 15 seconds of Caster Club hit. During single-ball: Stretch the Truth (fish multiplier) collected here within 15 seconds of catching a fish." },
      { x:12, y:80, type:"avoid", label:"!",  name:"Left Outlane",             body:"Open outlane in strict settings. Left Orbit power shots that undershoot can feed here. Controlled power on Left Orbit — especially when timing Stretch the Truth after a fish catch." },
      { x:87, y:80, type:"avoid", label:"!",  name:"Right Outlane",            body:"Right outlane drains are often unrecoverable. The right side of the playfield is less controlled — always be positioned on the right flipper after any right-side returns." },
    ],
  };
