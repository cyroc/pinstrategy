  /* ─── PARAGON ──────────────────────────────────────────── */
MACHINES['paragon'] = {
    name: "Paragon",  sub: "1979 · Bally · Widebody",
    tagline: "Fantasy widebody · bonus & multiplier marathon",
    image: "images/paragon.jpg",
    difficulty: "Hard", diffClass: "diff-hard", era: "SS",

    info: {
      stats: [
        { label: "Manufacturer", value: "Bally Mfg. Co." },
        { label: "Year",         value: "1979" },
        { label: "Type",         value: "Solid-State EMC" },
        { label: "Body",         value: "Widebody" },
        { label: "Flippers",     value: "4 (mini + scissor)" },
        { label: "Max Bonus",    value: "245,000 pts" },
      ],
      theme: "Fantasy / sword-and-sorcery. Named zones: Valley of Demons, Golden Cliffs, Beast's Lair, and the Waterfall. Bally's first widebody machine.",
      features: [
        { name: "Valley of Demons", desc: "Left-side inline drop targets — the single most important feature. Each hit advances bonus; completing the bank steps the multiplier 2× → 3×. Back saucer: <strong>first hit = 5× multiplier</strong>; <strong>second hit = Extra Ball</strong> (or 25K). Two separate rewards, two separate shots." },
        { name: "Golden Cliffs Saucer", desc: "Left saucer. Starts at 2,000 pts, +2,000 per visit up to 20,000. Value carries across balls. Only awards a bonus advance at its 20K maximum." },
        { name: "Paragon Saucer", desc: "Right saucer. Each visit awards one P-A-R-A-G-O-N letter + 1 bonus advance. Complete all 7 = 25,000 + Special." },
        { name: "Center Spinner", desc: "Each pass awards 3–4 bonus advances. Fastest way to build the base. Ball exits into unpredictable bumper cluster." },
        { name: "Right 3-Bank Drops", desc: "Value sequence: 10K → 15K → 20K → 25K → Special (50K). Hazardous return position — not a primary target." },
        { name: "Beast's Lair", desc: "Replaces the left outlane. Extremely punishing. The mini flipper and a hidden escape passage at the bottom are your only rescues." },
        { name: "Waterfall", desc: "Hidden shot behind the right drops. Earns a Special after drops are completed 5× across the game. Treat as a bonus, never a target." },
      ],
      scoring: [
        { key: "Bonus advance",          val: "1,000 pts" },
        { key: "Max base bonus",         val: "49,000 pts" },
        { key: "Max multiplier",         val: "5×" },
        { key: "Max bonus payout",       val: "245,000 pts" },
        { key: "Super bonus thresholds", val: "20K / 30K / 40K lock" },
        { key: "Golden Cliffs max",      val: "20,000 pts" },
        { key: "PARAGON complete",       val: "25,000 + Special" },
        { key: "Special value",          val: "50,000 pts" },
      ],
      rules: [
        "<strong>Never hit the center standup.</strong> Ball return is lethal on a widebody. No safe flipper angle exists.",
        "<strong>Scissor flipper trap:</strong> Holding upper-right AND lower-right flippers simultaneously creates a drain gap. Always use quick flips.",
        "<strong>Beast's Lair:</strong> Flipping the mini flipper too early on a low ball sends it straight down the middle.",
        "Bonus is collected <strong>only at end of ball</strong> — no mid-ball collect on Paragon.",
        "Right outlane entrance is positioned <strong>higher than usual</strong> — danger begins above flipper height.",
      ],
      benchmarks: [
        { score: "150,000+", label: "Commendable — everything went right" },
        { score: "50,000+",  label: "Respectable on a tough day" },
        { score: "< 50K",    label: "Most games land in five digits" },
      ],
      resources: [
        { name: "IPDB Entry",           url: "https://www.ipdb.org/machine.cgi?id=1755",                 icon: "🎯" },
        { name: "Kineticist Tutorial",  url: "https://www.kineticist.com/news/paragon-pinball-tutorial", icon: "📖" },
        { name: "Pinside Game Page",    url: "https://pinside.com/pinball/machine/paragon",              icon: "🕹️" },
      ],
    },

    strategy: {
      skillShot: "<strong>Depends on machine settings.</strong> If PARAGON letters are awarded <em>sequentially</em>, plunge for the <strong>Paragon saucer</strong> (right) — you'll get a predictable letter each time. If letters are <em>random</em> (scan mode), plunge for the <strong>Golden Cliffs saucer</strong> (left) — its value starts at 2K and builds toward 20K, carrying across all balls.",
      multiball: null,
      goal: "<strong>Reach 5× bonus multiplier via the Valley of Demons, lock in the 20K super bonus threshold as early as ball one, then survive long enough to collect a massive end-of-ball bonus.</strong> Repeat every ball. Paragon rewards patience and ball control — not aggression.",
      phases: [
        {
          num: "Phase 1 · Early Game",
          title: "Secure 5× and the Extra Ball",
          body: "<strong>Valley of Demons first.</strong> Shoot the left-side inline drops from the right lower flipper at mid-strength. Each hit advances bonus; completing the bank progresses toward 5×:<br><br>① 3 inline drops → 2× &nbsp; ② 4th drop → 3× &nbsp; ③ Back saucer (1st hit) → 5× &nbsp; ④ Back saucer (2nd hit) → Extra Ball (or 25K).<br><br><em>5× and the Extra Ball are two separate saucer shots.</em> Do not leave this area until 5× is locked. It is the safest shot on the table and the foundation of all your scoring.",
        },
        {
          num: "Phase 2 · Mid Game",
          title: "Build Bonus Base to 20,000",
          body: "<strong>Spinner and Golden Cliffs — avoid the center standup at all costs.</strong><br><br>With 5× locked, build base bonus toward 20K. The <strong>spinner</strong> is fastest (3–4 advances per rip). The <strong>Golden Cliffs saucer</strong> builds its value passively — hit it when the ball feeds cleanly.<br><br>Once you cross 20K base bonus it is <em>permanently locked</em> for all remaining balls. Push to 30K or 40K if the ball is under control, but 20K is the non-negotiable minimum.",
        },
        {
          num: "Phase 3 · Late Game",
          title: "Survive for the Bonus",
          body: "<strong>Keep the ball alive until end-of-ball collection.</strong><br><br>With 5× and 20K+ locked, your only job is to not drain. Every additional bonus advance adds 5,000 pts to your final payout (5 × 1,000). Continue the Valley and spinner. Shoot the Paragon saucer only when the ball naturally feeds a clean right-flipper shot.<br><br>Stay calm. Don't reach for risky shots. End-of-ball bonus on Paragon is everything.",
        },
      ],
      safeShots: [
        { name: "Valley of Demons (inline drops)", desc: "Safest and most important shot. Direct from right lower flipper, mid-strength. Wide target bank is forgiving. Shoot confidently throughout the game." },
        { name: "Golden Cliffs (left saucer)", desc: "Reliable from the right flipper. Ball exits cleanly — no nasty surprises. Best when you have a well-controlled ball." },
        { name: "Paragon Saucer (right saucer)", desc: "Moderate risk. Worth shooting opportunistically for bonus advances and letters. A lob or gentle shot lands more cleanly than a power shot." },
      ],
      avoidShots: [
        { name: "Center Standup", desc: "Completely off-limits. Ball return is unpredictable and lethal on a widebody. No safe flipper is positioned to catch it reliably." },
        { name: "Right 3-Bank Drop Targets", desc: "Returns frequently feed the right outlane or scissor flipper gap. Not worth targeting unless the ball naturally arrives there." },
        { name: "Waterfall", desc: "Treat as a bonus if it happens, never a target. Exit angle changes with ball speed — unpredictable." },
      ],
      tips: [
        { head: "Beast's Lair rescue (mini flipper)", body: "When a ball enters the Beast's Lair, immediately hold up the upper-left mini flipper as a diverter. Do NOT flip unless the ball comes in high — a low ball drains straight down. If the ball is high, flip decisively toward the left flipper. There is a hidden escape passage at the bottom too." },
        { head: "Scissor flipper — avoid simultaneous hold", body: "Holding both upper-right (scissor) and lower-right flippers simultaneously creates an uncovered drain gap. Use quick, decisive flips on the scissor — hold only as long as needed, then release." },
        { head: "Right outlane awareness", body: "The right outlane entrance is positioned higher than usual. A ball crossing the upper-right area can still catch the outlane. Stay alert when the ball is on the right side above flipper height." },
        { head: "Ball control over power", body: "Paragon punishes power shots. Let the ball roll to the flipper and settle. The wide body means balls travel farther and faster — slow everything down." },
        { head: "Golden Cliffs compounding", body: "The saucer value carries between balls. Hitting it 5–6 times over the game builds it to 20K where it starts awarding bonus advances. Don't neglect it early — you are investing in future advances." },
      ],
      mistakes: [
        "Shooting the center standup. Ever. Just don't.",
        "Holding the scissor and lower-right flipper simultaneously — draining through the gap.",
        "Draining without reaching the 20K super bonus threshold on ball one.",
        "Panicking in the Beast's Lair and flipping the mini flipper too early on a low ball.",
        "Playing aggressively on a widebody. Patience is the entire game.",
        "Ignoring the Golden Cliffs saucer because it starts at 2K — it compounds.",
      ],
    },

    /* Hotspot positions calibrated to "Overhead with Components" image.
       x, y = % of total image dimensions. Image has ~15% cabinet apron at bottom. */
    hotspots: [
      { x:19, y:46, type:"key",   label:"V", name:"Valley of Demons",             body:"<strong>Most important shot on the table.</strong> Hit inline drop targets from the right lower flipper, mid-strength. 3 drops → 2×, 4th drop → 3×, back saucer → 5× + Extra Ball. Wide and forgiving — your primary destination every ball." },
      { x:19, y:36, type:"key",   label:"S", name:"Valley Back Saucer",           body:"Behind the Valley of Demons drops. <strong>First hit = 5× multiplier only.</strong> <strong>Second hit = Extra Ball</strong> (or 25K). Two separate rewards — don't expect both on one shot. Do not leave the Valley area until you've hit this at least once." },
      { x:22, y:25, type:"safe",  label:"G", name:"Golden Cliffs Saucer",         body:"Left saucer. Starts at 2,000 pts, +2,000 per visit up to <strong>20,000</strong>. Value carries across balls. Only awards a bonus advance at maximum value. Hit every time the ball feeds cleanly." },
      { x:76, y:22, type:"safe",  label:"P", name:"Paragon Saucer",               body:"Right saucer. Each visit awards one <strong>P-A-R-A-G-O-N letter + 1 bonus advance</strong>. Complete all 7 = 25,000 + Special. Lob or gentle shot — power shots miss. Opportunistic only." },
      { x:50, y:44, type:"safe",  label:"~", name:"Center Spinner",               body:"Each pass awards <strong>3–4 bonus advances</strong>. Fastest bonus builder. Shoot from the right flipper with a controlled stroke. Ball exits into the bumper cluster — expect unpredictable returns." },
      { x:50, y:53, type:"avoid", label:"✕", name:"Center Standup",               body:"<strong>DO NOT AIM HERE — EVER.</strong> Ball return is completely unpredictable and lethal on a widebody. No safe flipper can catch it reliably. There is no scenario where targeting this is correct." },
      { x:75, y:46, type:"avoid", label:"D", name:"Right 3-Bank Drop Targets",    body:"Value sequence: 10K → 15K → 20K → 25K → Special (50K). Returns frequently feed the <strong>right outlane or scissor flipper gap</strong>. Not worth targeting deliberately." },
      { x:75, y:38, type:"info",  label:"W", name:"Waterfall",                    body:"Hidden shot behind the right drops. Final reward for completing right drops 5× total across the game. Exit angle varies with ball speed — <strong>unpredictable</strong>. Never a target, always a bonus if it happens." },
      { x:10, y:68, type:"avoid", label:"B", name:"Beast's Lair",                 body:"<strong>Replaces the left outlane.</strong> Hold up the upper-left mini flipper immediately as a diverter. Do NOT flip if the ball comes in low — it drains straight down. Watch for the hidden escape passage at the bottom." },
      { x:20, y:63, type:"info",  label:"M", name:"Mini Flipper (Upper-Left)",    body:"Your only tool to rescue Beast's Lair balls. <strong>Hold it up as a diverter</strong> when a ball enters. Only flip decisively if the ball is high enough to redirect toward the left flipper. A premature flip on a low ball is a guaranteed drain." },
      { x:77, y:63, type:"info",  label:"✂", name:"Scissor Flipper (Upper-Right)", body:"<strong>Holding the scissor AND the lower-right flipper simultaneously creates a drain gap.</strong> Always use quick decisive flips — hold only as long as needed, then release immediately." },
      { x:85, y:68, type:"avoid", label:"!", name:"Right Outlane",                body:"Entrance is positioned <strong>higher on the playfield than usual</strong>. A ball crossing the upper-right area can catch the outlane when you think it's safe. Stay alert above flipper height on the right side." },
      { x:50, y:18, type:"info",  label:"↑", name:"Pop Bumper Cluster",           body:"Top-center bumpers. The spinner exit feeds balls here — returns are <strong>unpredictable on the wide body</strong>. Be ready for anything. Bumpers also advance bonus passively with each hit." },
    ],
  };
