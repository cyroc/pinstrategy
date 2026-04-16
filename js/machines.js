const MACHINES = {

  /* ─── PARAGON ──────────────────────────────────────────── */
  paragon: {
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
        { name: "Valley of Demons", desc: "Left-side inline drop targets — the single most important feature. Each hit advances bonus; completing the bank steps the multiplier 2× → 3×. Back saucer = 5× + Extra Ball." },
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
      skillShot: null,
      multiball: null,
      goal: "<strong>Reach 5× bonus multiplier via the Valley of Demons, lock in the 20K super bonus threshold as early as ball one, then survive long enough to collect a massive end-of-ball bonus.</strong> Repeat every ball. Paragon rewards patience and ball control — not aggression.",
      phases: [
        {
          num: "Phase 1 · Early Game",
          title: "Secure 5× and the Extra Ball",
          body: "<strong>Valley of Demons first.</strong> Shoot the left-side inline drops from the right lower flipper at mid-strength. Each hit advances bonus; completing the bank progresses toward 5×:<br><br>① 3 inline drops → 2× &nbsp; ② 4th drop → 3× &nbsp; ③ Back saucer → 5× (+ Extra Ball or 25K).<br><br>Do not leave this area until 5× is locked. It is the safest shot on the table and the foundation of all your scoring.",
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
      { x:19, y:36, type:"key",   label:"S", name:"Valley Back Saucer",           body:"Behind the Valley of Demons drops. <strong>First hit = 5× multiplier + Extra Ball (or 25K).</strong> Do not leave the Valley area until you've hit this." },
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
  },

  /* ─── VIKING ───────────────────────────────────────────── */
  viking: {
    name: "Viking",  sub: "1980 · Bally · Standard Body",
    tagline: "Norse classic · spinner engine & mid-ball collects",
    image: "images/viking.jpg",
    difficulty: "Easy–Medium", diffClass: "diff-medium", era: "SS",

    info: {
      stats: [
        { label: "Manufacturer", value: "Bally Mfg. Co." },
        { label: "Year",         value: "1980" },
        { label: "Type",         value: "Solid-State EMC" },
        { label: "Body",         value: "Standard" },
        { label: "Production",   value: "~2,500 units" },
        { label: "Max Bonus",    value: "245,000 pts" },
      ],
      theme: "Norse mythology. Longship, runes, and warrior art. One of Bally's late solid-state classics.",
      features: [
        { name: "Center Spinner", desc: "Starts at 10 pts/spin, self-advances to 1,000 pts/spin. Each pass also advances the bonus. Value resets if not re-hit before the warning signal." },
        { name: "Inline Drop Targets (Left)", desc: "Each target advances the bonus multiplier: 2× → 3× → 4× → 5×. Back standup scores a Special, then 50,000 on repeat hits." },
        { name: "1-2-3 Memory Drops (Right)", desc: "Hit targets 1, 2, and 3 in sequential order for 10× the current lit value — up to 100,000 pts. Out-of-order hits count toward the bank but forfeit the jackpot." },
        { name: "A-B Top Rollover Lanes", desc: "Completing A-B 1st time lights the bonus collect saucer. 2nd time lights specials. 3rd+ scores a special each completion." },
        { name: "Bonus Collect Saucer (Top-Left)", desc: "When lit, collects your full bonus (base × multiplier) mid-ball. Reached via the right S-curve loop. Ball kicks to the top arch afterward." },
        { name: "Right S-Curve Loop", desc: "The route to the bonus collect saucer. Shoot with medium strength. Repeatable mid-ball scoring loop — the heart of the game." },
        { name: "Outlane Bounce-Back Gates", desc: "Gates on both outlanes can redirect a draining ball back to the inlane. A gentle nudge toward the gate can save the ball." },
      ],
      scoring: [
        { key: "Spinner start",          val: "10 pts/spin" },
        { key: "Spinner max",            val: "1,000 pts/spin" },
        { key: "Max multiplier",         val: "5×" },
        { key: "Max base bonus",         val: "49,000 pts" },
        { key: "Max bonus payout",       val: "245,000 pts" },
        { key: "Super bonus (20K lock)", val: "Persists all balls" },
        { key: "Super bonus (40K lock)", val: "Persists all balls" },
        { key: "1-2-3 sequential jackpot", val: "Up to 100,000 pts" },
        { key: "Back standup (Special)", val: "50,000 pts" },
      ],
      rules: [
        "The <strong>spinner value resets</strong> to 10 if not re-triggered before the warning signal. Keep hitting it.",
        "Bonus is collected at ball end <strong>OR</strong> by shooting the lit saucer — the saucer is the primary mid-ball scoring event.",
        "Reaching <strong>20K or 40K bonus</strong> before draining locks that amount for subsequent balls.",
        "The 1-2-3 drops must be hit <strong>in sequential order</strong> (1 → 2 → 3) for the 10× jackpot.",
      ],
      benchmarks: [
        { score: "400,000+", label: "Excellent — multiple big saucer collects" },
        { score: "150,000+", label: "Solid — 5× with at least one collect" },
        { score: "50,000+",  label: "Decent — hitting the basic loop" },
      ],
      resources: [
        { name: "IPDB Entry",        url: "https://www.ipdb.org/machine.cgi?id=2737",   icon: "🎯" },
        { name: "Pinside Game Page", url: "https://pinside.com/pinball/machine/viking", icon: "🕹️" },
      ],
    },

    strategy: {
      skillShot: null,
      multiball: null,
      goal: "<strong>Build bonus to 20,000+, lock it with the super bonus threshold, hit the inline drops for 5× multiplier, then collect that bonus as many times as possible via the top-left saucer.</strong> The spinner is your engine — keep ripping it all game.",
      phases: [
        {
          num: "Phase 1 · Early Game",
          title: "Build Bonus Base & Multiplier",
          body: "<strong>Inline drops first, then spinner.</strong><br><br>Shoot the left inline drop targets to build the multiplier toward 5×. While working the drops, every pass through the spinner adds to your bonus base and climbs the spinner value toward 1,000 pts/spin.<br><br>Keep an eye on the spinner indicator. If you hear the reset warning, <strong>immediately re-hit the spinner</strong> — losing accumulated value wastes significant potential.",
        },
        {
          num: "Phase 2 · Mid Game",
          title: "Secure the 20K Super Bonus",
          body: "<strong>Reach 20,000 base bonus before ever shooting the collect saucer.</strong><br><br>Once at 5× multiplier, shift to building the base to at least 20K. This locks the value for future balls. Work the <strong>A-B top lanes</strong> (they light naturally via bumper action after saucer kicks). Completing them once lights the collect saucer. <em>Do NOT shoot the saucer until you have crossed 20K base.</em><br><br>If you can push to <strong>40K base</strong> before collecting, do it — every future ball becomes a guaranteed massive payout.",
        },
        {
          num: "Phase 3 · Big Scoring",
          title: "Loop the S-Curve — Collect Repeatedly",
          body: "<strong>Shoot the right S-curve repeatedly to loop the bonus collect saucer.</strong><br><br>With 5× and 20K+ locked, shoot the S-curve to send the ball into the top-left saucer. Each collect pays base × multiplier and kicks the ball back for more bumper scoring and another shot at the loop.<br><br>At 5× × 49K = <strong>245,000 pts per collect</strong>. Multiple collects per ball stack to enormous totals.",
        },
      ],
      safeShots: [
        { name: "Center Spinner", desc: "Safest high-value shot on the table. A direct controlled hit from either flipper is reliable. Rip this as often as possible." },
        { name: "Left Inline Drops", desc: "Direct mid-strength shot from the right flipper. Wide and forgiving. Your multiplier builders." },
        { name: "Right S-Curve / Saucer Loop", desc: "Medium strength. Once you know the angle, this is a repeatable, high-value shot. The heart of the scoring engine." },
      ],
      avoidShots: [
        { name: "1-2-3 Memory Drops (aggressive pursuit)", desc: "The 100K jackpot is real but only pursue it with a well-controlled ball and high lit value. Otherwise treat it as a bonus if it happens." },
        { name: "Outlanes", desc: "If the ball heads toward an outlane, look for the bounce-back gate opportunity. A gentle nudge can redirect to the inlane." },
      ],
      tips: [
        { head: "Spinner reset warning", body: "If you hear the warning signal, immediately pivot to hitting the spinner again. Letting it reset to 10 wastes significant scoring potential." },
        { head: "Super bonus is your long game", body: "Locking in 20K or 40K bonus means every future ball starts strong. Treat the threshold as a priority equal to collecting." },
        { head: "Ball control after the saucer", body: "The saucer kicks the ball into the top arch area. Be ready — the ball can return fast via the pops. Don't let a frantic return erase a great collect." },
        { head: "Nudge the outlanes", body: "The bounce-back gates are genuinely useful. A timely nudge toward the gate can save a ball already in the gutter. Practice reading which direction to nudge." },
        { head: "Multiplier math", body: "At 5×: 20K = 100K, 30K = 150K, 40K = 200K, 49K = 245K. Each bonus increment is worth 5× as much — always worth one more spinner rip before collecting." },
      ],
      mistakes: [
        "Collecting the saucer before 5× multiplier and 20K base — leaving most of the value on the table.",
        "Letting the spinner value reset by ignoring the warning signal.",
        "Ignoring the A-B lanes and never lighting the saucer.",
        "Going for the 1-2-3 sequential jackpot too aggressively and draining.",
        "Not nudging on outlane close calls — the bounce-back gate is a free save.",
      ],
    },

    /* Hotspot positions calibrated to "bally_viking_playfield_topview" image. */
    hotspots: [
      { x:48, y:40, type:"key",   label:"~", name:"Center Spinner",                body:"<strong>Your scoring engine.</strong> Starts at 10 pts/spin, self-advances to 1,000 pts/spin. Each pass advances the bonus base. Rip this as often as possible. Critical: if you hear the reset warning, immediately hit the spinner again or lose your accumulated value." },
      { x:24, y:47, type:"key",   label:"V", name:"Left Inline Drops",             body:"Hit all four targets to advance multiplier: <strong>2× → 3× → 4× → 5×</strong>. Direct mid-strength shot from the right flipper. Wide and forgiving. Hit these every ball before thinking about collecting." },
      { x:24, y:36, type:"key",   label:"S", name:"Back Standup (Behind Drops)",   body:"Behind the inline targets. <strong>Scores a Special (50,000) and then 50,000 on every subsequent hit.</strong> Very rewarding once the drops are cleared." },
      { x:18, y:17, type:"key",   label:"C", name:"Bonus Collect Saucer",          body:"<strong>The jackpot machine.</strong> When lit, collects your full bonus (base × multiplier) mid-ball. 5× × 49K = 245,000 pts per collect. Reached via the right S-curve loop. Ball kicks back to the top arch — be ready." },
      { x:47, y:11, type:"info",  label:"A", name:"A-B Top Rollover Lanes",        body:"Completing A and B rollover lanes <strong>lights the bonus collect saucer</strong>. Complete naturally via bumper action after saucer kicks. 2nd completion lights return lane specials; 3rd+ scores a special each time." },
      { x:78, y:30, type:"safe",  label:"→", name:"Right S-Curve Loop",            body:"<strong>The route to the collect saucer.</strong> Shoot with medium strength from the left flipper. The ball follows the S-curve to the top-left saucer. A repeatable, high-value shot once you know the angle." },
      { x:75, y:45, type:"info",  label:"3", name:"1-2-3 Memory Drops (Right)",    body:"Hit targets 1 → 2 → 3 <strong>in exact sequential order</strong> for 10× the current lit value — up to 100,000 pts. Out-of-order hits count toward the bank but forfeit the jackpot. Pursue only with a well-controlled ball." },
      { x:48, y:22, type:"info",  label:"↑", name:"Pop Bumpers",                   body:"Top-center bumpers. The saucer kicks the ball into these after each collect — expect fast, unpredictable returns. <strong>Be ready at the flippers immediately after every saucer collect.</strong>" },
      { x:13, y:73, type:"safe",  label:"←", name:"Left Outlane Bounce-Back Gate", body:"<strong>Free save mechanism.</strong> A gentle nudge toward the gate when the ball enters the left outlane can redirect it back to the inlane. Act immediately and confidently. Don't tilt — but don't give up early either." },
      { x:85, y:73, type:"safe",  label:"→", name:"Right Outlane Bounce-Back Gate", body:"<strong>Free save mechanism.</strong> Same as the left gate — nudge gently toward the gate when the ball enters the right outlane. Timing and direction matter." },
    ],
  },

  /* ─── JOHNNY MNEMONIC ─────────────────────────────────── */
  jm: {
    name: "Johnny Mnemonic",  sub: "1995 · Williams · WPC",
    tagline: "Cyberpunk classic · spinner millions & multiball",
    image: "images/johnny-mnemonic.jpg",
    difficulty: "Medium", diffClass: "diff-medium", era: "DMD",

    info: {
      stats: [
        { label: "Manufacturer", value: "Williams Electronics" },
        { label: "Year",         value: "1995" },
        { label: "Designer",     value: "George Gomez" },
        { label: "Platform",     value: "WPC-S" },
        { label: "Multiball",    value: "Up to 4-ball" },
        { label: "Top Score",    value: "5–10 billion+" },
      ],
      theme: "Based on the 1995 cyberpunk film. Johnny is a data courier with a cybernetic memory implant carrying stolen corporate data. Features the Magnetic Data Glove, the Cyber Matrix ball lock system, Yakuza assassins, and Crazy Bob's underground safe house.",
      features: [
        { name: "Magnetic Data Glove (The Hand)", desc: "A player-controlled magnetic glove on the upper playfield. When Cyber Locks are lit, the center VUK feeds the ball to the glove. The player steers the glove via flipper buttons across a 9-spot Cyber Matrix to deposit balls into award/lock slots. When deactivated, the glove stays at rest and the center VUK feeds balls to the bumpers instead." },
        { name: "Cyber Matrix (9-spot grid)", desc: "Ball lock and award system. Each spot holds a random award (Bonus ×, Hold Bonus, Video Mode, Super Loops, Extra Ball, 50 GB, etc.). Lock 3 balls to start Cyberspace Multiball. Locking 3 balls in a row or column triples all multiball jackpots." },
        { name: "Left Loop (JOHNNY)", desc: "Shooting this loop spells J-O-H-N-N-Y. Completing JOHNNY advances the mode level and is the primary mode trigger." },
        { name: "Right Loop (MNEMONIC)", desc: "Completes M-N-E-M-O-N-I-C letters. Works alongside JOHNNY for mode advancement." },
        { name: "Left Ramp (Juke Joint)", desc: "Core Throwing Spike setup shot. Advances Yakuza Strike progress. Feeds the right orbit/ramp combo sequence." },
        { name: "Right Ramp", desc: "Pairs with the left ramp for Throwing Spike awards. Also advances Yakuza Strike. The 3rd ramp hit starts Yakuza Strike — use the right orbit instead to collect awards without triggering it early." },
        { name: "Spinner", desc: "10M points per spin awarded during end-of-ball bonus, multiplied by bonus ×. The most powerful sustained scoring mechanism in the game. Best hit from the left flipper in a controlled cradle." },
        { name: "Crazy Bob's (Saucer)", desc: "Upper-left saucer. Lights Cyber Locks, reveals matrix award positions, unlocks Power Items. Essential for setting up big multiball jackpots." },
        { name: "Top Lanes", desc: "Completing top lanes advances the bonus multiplier (max 4×). Completing them during Access Code 2 (Riot) mode is especially valuable since bumpers score 5M × bonus ×." },
        { name: "Yakuza Strike", desc: "Started after 3 ramp shots. All shots on the playfield light up for a hurry-up starting at 60M, decreasing to 25M. High risk/high reward — requires very fast reactions. Recovery from the spinner exit can be vicious." },
      ],
      scoring: [
        { key: "Skill shot",              val: "25M × skill shots + 5 GB" },
        { key: "Bumpers (Access Code 2)", val: "5M × bonus multiplier" },
        { key: "Power items",             val: "100M × items obtained" },
        { key: "Power Down shots",        val: "100M × lit shots (max 700M)" },
        { key: "Yakuza Strike hurry-up",  val: "60M → 25M" },
        { key: "Spinner Millions (bonus)", val: "10M per spin × bonus ×" },
        { key: "Multiball jackpot (base)", val: "30M (1st–3rd), +10M each" },
        { key: "Multiball 3× jackpot",    val: "Row/column line-up in matrix" },
        { key: "Quick Multiball jackpots", val: "50M per ramp (2-ball)" },
      ],
      rules: [
        "<strong>Spinner Millions</strong> is multiplied by bonus × at end-of-ball — building bonus × via top lanes is crucial before going for spinner value.",
        "<strong>Hold Bonus</strong> carries the spinner millions value to the next ball. Securing it before end-of-ball is a top priority.",
        "The Throwing Spikes sequence (6 awards) must be completed in order: GB → Big Points → <strong>Light Spinner Millions</strong> → Quick Multiball → Hold Bonus → Light Extra Ball.",
        "Once all 6 Throwing Spike awards are collected in one ball, the sequence cannot restart until the next ball (via Yakuza Strike).",
        "<strong>With Hand deactivated:</strong> The Cyber Matrix cannot be used for ball locking. Cyberspace 3-ball Multiball is unavailable. Quick Multiball (2-ball, Throwing Spikes award #4) remains available. Center VUK feeds bumpers instead of the glove.",
        "\"Mnemonic Recovery\" ball save lights at the left outlane after hitting a specific right-side target; automatically lit at the start of ball 1.",
      ],
      benchmarks: [
        { score: "5–10 billion", label: "Competitive — solid multiball + spinner exploitation" },
        { score: "500M–2B",      label: "Strong — 4× bonus + good spinner value" },
        { score: "Under 500M",   label: "Learning the machine — focus on bonus first" },
      ],
      resources: [
        { name: "Kineticist Tutorial",   url: "https://www.kineticist.com/post/johnny-mnemonic-tutorial",    icon: "📖" },
        { name: "IPDB Entry",            url: "https://www.ipdb.org/machine.cgi?id=3683",                    icon: "🎯" },
        { name: "Pinside Game Page",     url: "https://pinside.com/pinball/machine/johnny-mnemonic",         icon: "🕹️" },
        { name: "Pinball Archive Rules", url: "http://pinball.org/rules/johnnymnemonic.html",                icon: "📋" },
      ],
    },

    strategy: {
      skillShot: {
        name: "Skill Shot Lane",
        value: "25M × skill shots made + 5 GB",
        desc: "Plunge with precise timing to land the ball in the dedicated skill shot lane at the top of the playfield. Each successful skill shot scores <strong>25 million × the total number of skill shots made</strong> this game, plus <strong>5 GB</strong> of data. Ball 1 = 25M, Ball 2 (if ball 1 was collected) = 50M, Ball 3 = 75M — it scales massively. <strong>Aim for the skill shot every single ball.</strong> The consistent GB income also advances the Throwing Spikes sequence.",
      },
      multiball: [
        {
          name: "Quick Multiball",
          balls: 2,
          locks: "Work through the <strong>Throwing Spikes sequence</strong> by alternating left ramp and right orbit shots (use right orbit, not right ramp — it collects the award without advancing Yakuza Strike). Award #4 is <strong>Light Quick Multiball</strong>. Collect it and the lower cup will be ready for locking.",
          start: "After Light Quick Multiball is collected, shoot the <strong>lower center cup</strong> to lock one ball. The second ball is immediately released — 2-ball Quick Multiball is now active.",
          jackpots: "Every <strong>ramp shot</strong> during Quick Multiball scores <strong>50 million points</strong>. Shoot both ramps alternately as fast as possible for maximum payout. The multiball runs until one ball drains.",
          tip: "Quick Multiball is your only multiball source with the Hand deactivated. Time it carefully — if Yakuza Strike is active simultaneously, every ramp shot earns both the 50M Quick Multiball jackpot AND the hurry-up value. Stack them for your biggest scoring moments.",
        },
      ],
      goal: "<strong>Build bonus × to 4×, secure Hold Bonus, then accumulate Spinner Millions across multiple balls.</strong> With the Hand deactivated, Cyberspace Multiball is not available — pivot entirely to Throwing Spikes, Yakuza Strike, and Quick Multiball for big scoring.",
      phases: [
        {
          num: "Phase 1 · Early Game",
          title: "Start Modes & Build Bonus ×",
          body: "<strong>Access Code 2 (Riot) is your highest-priority mode.</strong><br><br>Spell JOHNNY/MNEMONIC via the loop shots to advance mode level and start modes. Access Code 2 sends balls to the bumpers for every mode shot — and bumpers score <strong>5M × bonus multiplier</strong>. Also complete the top lanes in this phase to advance the bonus × to 4×. This multiplier is what makes Spinner Millions explosive later.<br><br>Also grab the skill shot on ball start — consistently shooting the right spot scores 25M × number of skill shots made.",
        },
        {
          num: "Phase 2 · Mid Game",
          title: "Throwing Spikes Sequence — Get Spinner Millions + Hold Bonus",
          body: "<strong>Execute the left ramp → right orbit/ramp combos to collect Throwing Spike awards in order.</strong><br><br>The 6 awards in order: 10 GB → Big Points (100M) → <strong>Light Spinner Millions</strong> → Quick Multiball → Hold Bonus → Light Extra Ball.<br><br>Key tactic: use the <strong>right orbit</strong> instead of the right ramp when possible — the orbit collects Throwing Spike awards but does NOT advance the Yakuza Strike counter. This prevents Yakuza Strike from starting at a bad time.<br><br>Priority stops: Award #3 (Spinner Millions) and Award #5 (Hold Bonus). These are the two game-changing pickups.",
        },
        {
          num: "Phase 3 · Big Scoring",
          title: "Rip the Spinner + Quick Multiball Jackpots",
          body: "<strong>Once Spinner Millions is lit, rip the spinner as many times as possible before end-of-ball.</strong><br><br>Each spin scores 10M during end-of-ball bonus, multiplied by your bonus × (up to 4×). 150–200 spins per trip is realistic at a strong hit. With 4× bonus, 200 spins = <strong>8 billion</strong> in end-of-ball bonus alone.<br><br>Also collect <strong>Quick Multiball</strong> (Award #4): 2-ball multiball where every ramp shot scores 50M. Stack this with Yakuza Strike for simultaneous big payouts.<br><br>If Hold Bonus is secured, these spinner values carry to the next ball — every ball starts with a pre-loaded scoring engine.",
        },
      ],
      safeShots: [
        { name: "Left Orbit", desc: "Fast, consistent return. Collects loop letters for JOHNNY. Does not advance Yakuza Strike — safe to use throughout the game." },
        { name: "Spinner", desc: "The most important sustained scoring shot. Hit from left flipper cradle for maximum spin count. Rip early and often once Spinner Millions is lit." },
        { name: "Left Ramp (Juke Joint)", desc: "Core Throwing Spike setup shot. Reliable and high-value. Aim for this first in the Throwing Spikes sequence." },
      ],
      avoidShots: [
        { name: "Right Ramp (before ready for Yakuza Strike)", desc: "Three right ramp shots start Yakuza Strike. Use the right orbit instead to collect Throwing Spike awards while keeping Yakuza Strike under your control." },
        { name: "Center VUK (with Hand off)", desc: "With the glove disabled, VUK shots feed bumpers. The bumper exit on JM is notoriously vicious. Only use VUK shots deliberately during Access Code 2 or NAS Cure modes." },
      ],
      tips: [
        { head: "Bonus × before spinner", body: "Spinner Millions is worthless without bonus ×. Always build bonus × to 4× (via top lanes and Access Code 2) before chasing spinner value. A 4× bonus turns 200 spins into 8B — a 1× bonus turns it into 2B." },
        { head: "Right orbit over right ramp", body: "Both shots can collect Throwing Spike awards, but the right ramp also advances the Yakuza Strike counter. Right orbit is the cleaner option: same award, no risk of accidentally starting Yakuza Strike at the wrong time." },
        { head: "Hold Bonus is a force multiplier", body: "If you secure Hold Bonus before end-of-ball, your spinner millions value carries into the next ball. Every subsequent ball starts with an active scoring engine. Treat Hold Bonus (Award #5) as a top priority alongside Spinner Millions (Award #3)." },
        { head: "Yakuza Strike timing", body: "Yakuza Strike lights all shots for a hurry-up from 60M to 25M. It's valuable but requires very fast reactions. Trigger it intentionally when the ball is under control and your positioning is good — not as an accident from unplanned ramp shots." },
        { head: "Quick Multiball stack", body: "Quick Multiball (2-ball, 50M per ramp) can be combined with Yakuza Strike for simultaneous payouts. If you collect Award #3 and Award #4 in the same trip, you can stack both modes — plan the timing carefully." },
      ],
      mistakes: [
        "Building spinner value without 4× bonus multiplier — you're leaving 3× of the value on the table.",
        "Not securing Hold Bonus: spinner millions resets to zero at ball drain without it.",
        "Accidentally starting Yakuza Strike from unplanned ramp shots before the ball is under control.",
        "Shooting the center VUK randomly with the hand off — the bumper exit is unpredictable and can easily drain.",
        "Trying to pursue Cyberspace Multiball (3-ball) with the hand disabled — it's not available.",
        "Ignoring the skill shot — it's repeatable and scales with each successful shot (25M × number made).",
      ],
    },

    /* Hotspot positions calibrated to JM_VPW_playfield.png (1100×2172 portrait).
       The image shows the physical playfield with all components lit. */
    hotspots: [
      { x:42, y: 9, type:"info",  label:"JM", name:"Top Lanes (JOHNNY/MNEMONIC)", body:"Rollover lanes at the very top of the playfield. Completing them <strong>advances bonus × (max 4×)</strong>. They light naturally as the ball rolls through after bumper/saucer kicks — let the machine do the work. At 4× bonus, Spinner Millions yields 40M per spin in end-of-ball bonus." },
      { x:55, y:15, type:"info",  label:"★",  name:"Cyber Matrix & Data Glove",   body:"The 9-spot ball lock and award grid at the top center. <strong>With the Hand deactivated, ball locking via the glove is unavailable.</strong> When active, the player steers the magnetic glove with the flipper buttons to deposit balls into matrix spots. Row or column of 3 = triple jackpots during Cyberspace Multiball." },
      { x:20, y:22, type:"info",  label:"↑",  name:"Pop Bumpers",                 body:"Upper-left bumper cluster. When the glove is deactivated, center VUK shots feed balls here. <strong>Bumpers score 5M × bonus × during Access Code 2 (Riot) mode</strong> — extremely valuable. The pop bumper exit can be vicious; always be ready at the flippers after bumper action." },
      { x:10, y:38, type:"safe",  label:"←",  name:"Left Orbit (JOHNNY loop)",    body:"Fast lane around the left side of the playfield that spells J-O-H-N-N-Y. <strong>Does not advance the Yakuza Strike counter</strong> — safe to use throughout the game. Also collects Throwing Spike awards when lit, making it preferable to the right ramp for mid-game award collecting." },
      { x:20, y:36, type:"key",   label:"JK", name:"Left Ramp (Juke Joint)",      body:"<strong>Core Throwing Spike setup shot.</strong> The left ramp starts the ramp combo sequence and advances the mode level. Reliable and repeatable. Advances Yakuza Strike counter — 3 ramp hits total (left + right combos) starts Yakuza Strike." },
      { x:28, y:46, type:"key",   label:"CB", name:"Crazy Bob's (Saucer)",        body:"Left-side saucer behind the pop bumpers. <strong>Lights Cyber Locks, reveals matrix award positions, and unlocks Power Items.</strong> Visit early to learn which matrix spots hold Hold Bonus and Award Bonus. Essential for planning multiball setup even with the hand disabled." },
      { x:50, y:42, type:"info",  label:"↕",  name:"Center VUK",                 body:"Vertical up-kicker in the center of the playfield. Normally feeds the Data Glove when Cyber Locks are lit. <strong>With the Hand deactivated, the VUK feeds balls to the bumpers instead.</strong> During Access Code 2 and NAS Cure modes, deliberate VUK shots are intentional and high-scoring." },
      { x:47, y:53, type:"key",   label:"Sp", name:"Spinner",                     body:"<strong>The most important sustained scoring shot in the game.</strong> Each spin scores 10M during end-of-ball bonus, multiplied by your bonus × (max 4× = 40M per spin). Best hit from a left flipper cradle for maximum spin count. At 4× with ~200 spins = 8 billion in bonus alone." },
      { x:76, y:36, type:"avoid", label:"→",  name:"Right Ramp",                 body:"Pairs with the left ramp for Throwing Spike awards. <strong>Warning: each right ramp hit advances the Yakuza Strike counter.</strong> Use the right orbit instead when collecting Throwing Spike awards to avoid accidentally starting Yakuza Strike at the wrong moment." },
      { x:88, y:38, type:"safe",  label:"→",  name:"Right Orbit (MNEMONIC loop)", body:"Fast lane around the right side that spells M-N-E-M-O-N-I-C. <strong>Collects Throwing Spike awards when lit — without advancing the Yakuza Strike counter.</strong> Preferred over the right ramp for safe mid-game award collecting. Fast return requires ready flippers." },
      { x:10, y:83, type:"info",  label:"MR", name:"Mnemonic Recovery (Left Outlane)", body:"Ball save zone on the left outlane. <strong>Lit automatically at ball 1 start.</strong> Can be re-lit by hitting a specific right-side target enough times. When lit, balls draining here are saved and returned. Learn which shot re-lights it — it can rescue the ball several times per game." },
    ],
  },

  /* ─── WHIRLWIND ────────────────────────────────────── */
  whirlwind: {
    name: "Whirlwind",  sub: "1990 · Williams · WPC", era: "SS",
    tagline: "Tornado thriller · lock balls, collect Million Plus jackpots",
    image: 'images/whirlwind.jpg',
    difficulty: "Medium–Hard", diffClass: "diff-hard",

    info: {
      stats: [
        { label: "Manufacturer", value: "Williams Electronics" },
        { label: "Year",         value: "1990" },
        { label: "Designer",     value: "Pat Lawlor" },
        { label: "Platform",     value: "WPC" },
        { label: "Multiball",    value: "3 types (3-ball max)" },
        { label: "Top Score",    value: "50–150 million+" },
      ],
      theme: "A twister-themed machine set around a Midwestern tornado. Features a large spinning disc (the Whirlwind) mounted center-playfield, a real fan that blows air at the player, a compass rose target system (N/S/E/W arrows), and the iconic 'Feel the Power of the Wind' fanfare. Designed by Pat Lawlor (later of Addams Family fame).",
      features: [
        { name: "FEEL THE POWER Drop Targets", desc: "Three drop targets at the top used for the skill shot. Each target lights independently: POWER (100K), THE (200K), FEEL (300K). All three = 600K total. Also progress toward directional target completion." },
        { name: "Compass / Directional Targets (N/S/E/W)", desc: "Four directional targets scattered around the playfield. Completing all four lights the ball lock lane. Each direction can be relit. This is the primary lock-lighting mechanism for Feel the Power Multiball." },
        { name: "Ball Lock Lane (Left Side)", desc: "Locks balls for Feel the Power Multiball. Each ball locked also advances the bonus multiplier one step: 2× → 3× → 4× → 5× → 6× (max). Double benefit — starts multiball AND raises multiplier." },
        { name: "3-Toll Ramp (Center)", desc: "The primary jackpot shot during multiball. Starts the Million Plus jackpot sequence at 1 million, increasing by 1M per collect up to 10M. Also shoots 3 toll collectibles during normal play." },
        { name: "Super Cellar Door", desc: "Lower-right entry point to a rotating award chamber. Cycles through 7 awards: 500K score, Extra Ball, Quick Multiball, Million lit, jet bumper max, drop target max, and Skyway Toll advances. Collecting all 7 lights the Mega Door Bonus (all 7 + 2M + Special)." },
        { name: "Tornado Drop Target", desc: "Center standup that lights Quick Multiball when hit. Also advances the bonus and feeds the bumpers." },
        { name: "Skyway Tolls", desc: "A toll counter (max 99 tolls) that awards 2K × bonus multiplier per toll at end-of-ball. Built by shooting ramps and loops during normal play." },
        { name: "Spinning Disc (Center)", desc: "The signature toy — a motorized spinning disc that deflects the ball in unpredictable directions. Adds chaos to center-playfield shots but also scores with each deflection." },
      ],
      scoring: [
        { key: "Skill shot max (all 3 targets)", val: "600,000 pts" },
        { key: "Million Plus (1st collect)",     val: "1,000,000 pts" },
        { key: "Million Plus (max, 10th)",       val: "10,000,000 pts" },
        { key: "Bonus multiplier (max)",         val: "6× (via ball locks)" },
        { key: "Skyway Tolls (max)",             val: "99 × 2K × bonus ×" },
        { key: "Super Cellar Door award",        val: "500,000 pts (base)" },
        { key: "Mega Door Bonus",                val: "2,000,000 + Special" },
      ],
      rules: [
        "Each ball locked in the lock lane advances the bonus multiplier by 1 step — <strong>locking balls both starts multiball AND raises your multiplier</strong>. Never skip a lock opportunity.",
        "The <strong>Million Plus jackpot</strong> starts at 1M, increases by 1M each time you collect it during multiball, and maxes at 10M. It resets if you let multiball end without collecting.",
        "If no Million Plus is collected during Feel the Power Multiball, <strong>Cellar Multiball</strong> (2-ball) automatically starts as a consolation round.",
        "The <strong>Super Cellar Door</strong> cycles through 7 awards. Collect all 7 to light the Mega Door Bonus (all 7 awards simultaneously + 2M + Special).",
        "<strong>No Extra Balls</strong> in competition settings — Extra Ball awards convert to 1M points.",
      ],
      benchmarks: [
        { score: "50M+",   label: "Excellent — multiple Million Plus collects" },
        { score: "15–25M", label: "Solid — completed at least one multiball" },
        { score: "5–10M",  label: "Decent — learning the lock system" },
      ],
      resources: [
        { name: "IPDB Entry",        url: "https://www.ipdb.org/machine.cgi?id=2765",      icon: "🎯" },
        { name: "Pinside Game Page", url: "https://pinside.com/pinball/machine/whirlwind", icon: "🕹️" },
      ],
    },

    strategy: {
      skillShot: {
        name: "FEEL THE POWER",
        value: "Up to 600,000 points",
        desc: "The plunger sends the ball toward three drop targets labeled <strong>POWER, THE, FEEL</strong>. Each target lit scores independently:<br><br>● <strong>POWER</strong> = 100,000 pts &nbsp;● <strong>THE</strong> = 200,000 pts &nbsp;● <strong>FEEL</strong> = 300,000 pts<br><br>All three = <strong>600,000 total</strong>. The scoring is additive — you get points for every target hit regardless of order. A full clean plunge is a massive early-game boost. Aim for all three every ball.",
      },
      multiball: [
        {
          name: "Feel the Power Multiball",
          balls: 3,
          locks: "Hit the <strong>four directional targets</strong> (N, S, E, W compass arrows scattered around the playfield) to light the lock lane. Completing all four directions lights the <strong>left-side ball lock lane</strong>. Each ball successfully locked advances the bonus multiplier one step: 2× → 3× → 4× → 5× → 6× max. <strong>Lock 2 balls before attempting to start multiball.</strong>",
          start: "After locking 2 balls, shoot the <strong>3-Toll Ramp</strong> to release all locked balls and start 3-ball Feel the Power Multiball. Alternatively, locking a <strong>3rd ball</strong> in the lock lane also triggers multiball launch.",
          jackpots: "Shoot the <strong>3-Toll Ramp</strong> repeatedly during multiball to collect <strong>Million Plus</strong>. Starts at 1M, increases by 1M each collect, max 10M. Collect 5+ times in a single multiball for 1M + 2M + 3M + 4M + 5M = <strong>15M total</strong>. If no Million Plus collected when multiball ends, Cellar Multiball starts automatically.",
          tip: "Locking balls is a double win — each lock raises your bonus multiplier AND builds toward multiball. Never miss a lit lock. During multiball, ignore everything except the 3-Toll Ramp. Keep hammering it until a ball drains.",
        },
        {
          name: "Quick Multiball",
          balls: 2,
          locks: "Light Quick Multiball by hitting the <strong>Tornado Drop Target</strong> (center standup) or by collecting it as a <strong>Super Cellar Door award</strong>.",
          start: "Once Quick Multiball is lit, shoot the ball into the <strong>center cup</strong>. The second ball is released immediately, starting 2-ball Quick Multiball.",
          jackpots: "Standard 2-ball play with all shots scoring normally. The bonus multiplier (built from Feel the Power locks) amplifies all scoring during Quick Multiball. Focus on lanes and ramps to maintain toll and multiplier progress.",
          tip: "Use Quick Multiball as a backup or gap-filler between Feel the Power setups. The Super Cellar Door is also worth visiting during Quick Multiball to cycle through its 7 awards.",
        },
        {
          name: "Cellar Multiball",
          balls: 2,
          locks: "No lock setup required — this multiball activates automatically.",
          start: "<strong>Auto-starts</strong> at the end of a Feel the Power Multiball where no Million Plus jackpot was collected. No player action needed.",
          jackpots: "Standard 2-ball scoring. Less powerful than Feel the Power jackpots. Treat it as a second chance to score — shoot ramps and maintain composure.",
          tip: "Cellar Multiball is a consolation prize, not a goal. If you get it, play steadily and shoot the 3-Toll Ramp to prime the Million Plus counter for the next Feel the Power Multiball.",
        },
      ],
      goal: "<strong>Lock balls via compass targets to start Feel the Power Multiball and collect escalating Million Plus jackpots on the 3-Toll Ramp.</strong> Each ball locked also raises your bonus multiplier (up to 6×), making the lock lane doubly valuable. Build Skyway Tolls for end-of-ball bonuses.",
      phases: [
        {
          num: "Phase 1 · Early Game",
          title: "Skill Shot → Compass Targets → Light the Lock",
          body: "<strong>Start every ball with the FEEL THE POWER skill shot</strong> — aim for all 3 drop targets for 600K.<br><br>Then immediately begin hunting the <strong>four directional compass targets</strong> (N, S, E, W). These are visible arrows/standups around the playfield. Hit all four to light the lock lane. The compass targets are wide and can be approached from both flippers — they are your Phase 1 safe shots.<br><br>Avoid the spinning disc area until the lock is lit — the disc deflections are unpredictable.",
        },
        {
          num: "Phase 2 · Mid Game",
          title: "Lock 2 Balls, Build Multiplier",
          body: "<strong>Shoot the lit lock lane on the left side</strong> to lock balls. Each successful lock advances your bonus multiplier (2× → 3× → ... → 6×).<br><br>After each lock, the compass targets reset — hit all four again to light the next lock. Lock a second ball to set up multiball launch.<br><br>While resetting compass targets, also shoot the <strong>Super Cellar Door</strong> when the ball is on the right side. Cycling its 7 awards is a great secondary task between lock setups.",
        },
        {
          num: "Phase 3 · Multiball",
          title: "Hammer the 3-Toll Ramp for Million Plus",
          body: "<strong>Once Feel the Power Multiball starts, ignore everything except the 3-Toll Ramp.</strong><br><br>Each successful ramp shot collects a Million Plus jackpot: 1M, 2M, 3M, 4M, 5M... up to 10M per hit. With your bonus multiplier at 5–6×, even end-of-ball tolls compound significantly.<br><br>Keep both balls in play as long as possible. If you lose a ball, the surviving ball continues single-ball play — steer it back toward the ramp and lock lane to reset for the next multiball.",
        },
      ],
      safeShots: [
        { name: "Compass / Directional Targets", desc: "Wide standup targets visible around the playfield. Your primary Phase 1 and Phase 2 targets. Approachable from both flippers with moderate force." },
        { name: "Left Loop", desc: "Consistent return that loops back to the right flipper area. Advance Skyway Tolls and lane progress without engaging the spinning disc." },
        { name: "Super Cellar Door (Lower Right)", desc: "Lower-right entrance that cycles 7 awards including Extra Ball, Quick Multiball, and 500K. A safe detour between lock setups." },
      ],
      avoidShots: [
        { name: "Spinning Disc (Center)", desc: "The deflections are genuinely unpredictable — a ball hitting the disc can go anywhere. Never aim directly at it. Let the ball pass around the disc, not through it." },
        { name: "Tornado Drop Target (unplanned)", desc: "Hitting it lights Quick Multiball, which can disrupt your lock setup timing. Only aim for it deliberately when you want Quick Multiball as a backup." },
      ],
      tips: [
        { head: "Lock = multiplier", body: "Every ball you lock is +1 bonus multiplier. Two locks = 4× or 5× bonus, three locks = 5× or 6×. The multiplier raises your Skyway Toll end-of-ball bonus significantly. Never skip a lit lock." },
        { head: "Million Plus compounds fast", body: "1M + 2M + 3M + 4M + 5M across 5 ramp shots = 15M in one multiball. If you manage 6–7 shots before losing a ball, you can score 21–28M in one multiball session. The escalation is worth protecting." },
        { head: "Compass targets reset, that's OK", body: "After each lock, you need to re-complete compass targets. This is normal. Think of it as a defined two-step loop: compass targets → lock → compass targets → lock → multiball." },
        { head: "Cellar Door awards rotate", body: "Each visit to the Super Cellar Door cycles to the next award. Plan your visits to time it for the award you want most — Quick Multiball and Extra Ball are the top prizes." },
        { head: "Skyway Tolls are the long game", body: "With 6× multiplier and 80+ tolls banked, your end-of-ball bonus can be 1M+. Shoot ramps and loops consistently between multiball setups to keep the toll count rising." },
      ],
      mistakes: [
        "Missing the 3-Toll Ramp during multiball and chasing other targets — Million Plus is the entire point of multiball.",
        "Ignoring the compass targets after a lock and wondering why the lock lane isn't lit again.",
        "Shooting the spinning disc deliberately — its deflections are uncontrolled and dangerous.",
        "Failing to lock 2 balls before attempting multiball start — wasting early-game energy.",
        "Neglecting the Super Cellar Door and missing the Quick Multiball / Mega Door Bonus cycles.",
      ],
    },

    hotspots: [
      { x:35, y:10, type:"key",   label:"FP", name:"FEEL THE POWER (Skill Shot)", body:"Three drop targets at the top of the playfield: <strong>POWER (100K) · THE (200K) · FEEL (300K)</strong>. Hit all three on the plunge for 600K total. Additive — each hit scores individually. <strong>Your most reliable early-game points.</strong>" },
      { x:28, y:22, type:"key",   label:"N",  name:"North Compass Target",         body:"One of four directional targets (N/S/E/W) that must all be completed to <strong>light the ball lock lane</strong>. Wide standup — approachable from either flipper. Complete all four to set up Feel the Power Multiball." },
      { x:70, y:22, type:"key",   label:"E",  name:"East Compass Target",          body:"Part of the compass target system. All four directions (N/S/E/W) must be hit to light the lock lane. <strong>After each ball lock, compass targets reset</strong> — repeat the process to light the next lock." },
      { x:20, y:40, type:"key",   label:"W",  name:"West Compass Target",          body:"Part of the compass target system. Aim from the right flipper with moderate force. Completing all four compass targets is your primary mid-game task between lock shots." },
      { x:50, y:32, type:"info",  label:"🌀", name:"Whirlwind Spinning Disc",      body:"The signature feature — a motorized spinning disc that <strong>deflects the ball unpredictably</strong>. Scores with each deflection, but never aim directly at it. Let the ball travel around the disc, not into it." },
      { x:18, y:50, type:"key",   label:"🔒", name:"Ball Lock Lane (Left)",        body:"<strong>Lock balls here for Feel the Power Multiball.</strong> Each ball locked advances your bonus multiplier by 1 step (up to 6×). Lock 2 balls, then shoot the 3-Toll Ramp (or lock a 3rd ball) to start multiball. Never miss a lit lock." },
      { x:45, y:47, type:"key",   label:"3T", name:"3-Toll Ramp",                  body:"<strong>The primary multiball jackpot shot.</strong> During Feel the Power Multiball, each ramp shot collects a Million Plus: 1M → 2M → 3M → ... → 10M. Collect 5 hits = 15M total. This is the only shot you should be focused on during multiball." },
      { x:72, y:58, type:"safe",  label:"CD", name:"Super Cellar Door",            body:"Lower-right entry to the rotating award chamber. Cycles 7 awards: 500K, Extra Ball, Quick Multiball, Million lit, jet max, drop max, Skyway advances. Collect all 7 for <strong>Mega Door Bonus (all 7 + 2M + Special)</strong>. Great secondary target between lock setups." },
      { x:48, y:62, type:"info",  label:"TO", name:"Tornado Drop Target",          body:"Hitting this lights <strong>Quick Multiball</strong>. Also available as a Super Cellar Door award. Only aim for it deliberately when you want Quick Multiball as a backup mode." },
      { x:50, y:22, type:"info",  label:"↑",  name:"Pop Bumpers",                  body:"Top bumpers. Feed balls from the plunge area into the playfield. The bumper area also factors into Skyway Toll accumulation during normal play." },
      { x:12, y:75, type:"avoid", label:"!",  name:"Left Outlane (No Post)",       body:"<strong>No outlane post rubber in competition settings</strong> — the ball drains directly. The left side is particularly exposed when the ball kicks off the disc or bumpers unexpectedly. Stay alert on the left side." },
      { x:88, y:75, type:"avoid", label:"!",  name:"Right Outlane (No Post)",      body:"<strong>No outlane post rubber in competition settings</strong> — straight drain. Right-side shots that miss their target can feed the outlane. Be conservative with power on right-side shots." },
    ],
  },

  /* ─── CENTAUR ──────────────────────────────────────── */
  centaur: {
    name: "Centaur",  sub: "1981 · Bally · Standard Body", era: "SS",
    tagline: "Sci-fi gothic · ORBS multiball & captive ball points",
    image: 'images/centaur.jpg',
    difficulty: "Medium", diffClass: "diff-medium",

    info: {
      stats: [
        { label: "Manufacturer", value: "Bally Mfg. Co." },
        { label: "Year",         value: "1981" },
        { label: "Designer",     value: "Jim Patla" },
        { label: "Type",         value: "Solid-State EMC" },
        { label: "Body",         value: "Standard" },
        { label: "Multiball",    value: "2-ball (ORBS + Lane)" },
      ],
      theme: "Black-and-white science fiction/horror hybrid. A half-human, half-machine Centaur warrior overlooks a stark monochrome playfield with neon red and yellow accents. One of the most visually distinctive early 1980s machines — minimal ornamentation, maximum atmosphere.",
      features: [
        { name: "ORBS Drop Targets", desc: "Four drop targets (O, R, B, S) on the left-center playfield. Must be hit in sequential order (O → R → B → S) for multiball. An out-of-order hit knocks down the target but does not count toward the sequence. Completing in order starts 2-ball multiball immediately and adds a virtual lock (amber light above flipper). Up to 4 virtual locks can be accumulated across multiple completions." },
        { name: "Queen's Chamber (Left Saucer)", desc: "The primary scoring destination. A saucer on the left side of the playfield. The main jackpot target during multiball. Aim here whenever the ball feeds the left side cleanly." },
        { name: "Left Arc Star Rollovers", desc: "A series of star rollover buttons arranged in a left-side arc. Passing through them lights a 'double points' state that doubles the value of the next captive ball hit. Always shoot the star rollovers before targeting the captive ball." },
        { name: "Captive Ball (Right Side)", desc: "A ball held captive behind a post on the right side of the playfield. Striking the captive ball post awards escalating points: 10K → 20K → 30K → 40K → 50K. Doubles to 20K–100K if star rollovers were hit first. Progressive — value resets each ball." },
        { name: "1-2-3-4 Sequential Drop Targets (Right)", desc: "Four drop targets on the right side that must be hit in order: #1 = 10K, #2 = 20K, #3 = 40K, #4 = 80K. Each hit in order also advances the bonus. Out-of-order hits score a flat value but don't advance the sequence. Completing all four in order releases any locked balls." },
        { name: "Return/Outlane Lanes (4 total)", desc: "Two return lanes and two outlane lanes (left and right sides). Completing all four starts a 2-ball multiball. This can only happen once per ball — complete them as early as possible. (Note: outlane post rubbers are removed in competition settings.)" },
        { name: "Pop Bumpers", desc: "Upper bumper cluster. Each hit advances the bonus. High-speed bumper action naturally feeds balls to the top lanes and back to the flippers." },
      ],
      scoring: [
        { key: "Captive ball (max)",            val: "50,000 pts" },
        { key: "Captive ball × star rollovers", val: "100,000 pts (doubled)" },
        { key: "1-2-3-4 drops in order",        val: "10K + 20K + 40K + 80K" },
        { key: "ORBS completion",               val: "2-ball multiball + virtual lock" },
        { key: "Lane completion (4 lanes)",     val: "2-ball multiball (once/ball)" },
        { key: "Virtual locks max",             val: "4 (amber indicators)" },
        { key: "Queen's Chamber jackpot",       val: "Primary multiball target" },
      ],
      rules: [
        "ORBS must be hit <strong>in exact order O → R → B → S</strong>. Any out-of-order hit knocks down the target but breaks the sequence. The targets reset after a sequence failure.",
        "Completing ORBS in order starts 2-ball multiball <strong>immediately</strong> — no separate lock shot required. A virtual lock (amber light) is also added.",
        "The <strong>1-2-3-4 right-side drops in order</strong> release any accumulated locked balls when all four are completed sequentially.",
        "Lane Multiball (all 4 return/outlane lanes) can only start <strong>once per ball</strong>. Complete lanes early.",
        "<strong>No skill shot and no Extra Balls</strong> in competition settings. No outlane post rubbers — the outlanes are fully open.",
      ],
      benchmarks: [
        { score: "1,000,000+", label: "Excellent — multiple ORBS completions + Queen's Chamber" },
        { score: "500,000+",   label: "Solid — at least one multiball with good scoring" },
        { score: "200,000+",   label: "Respectable — good drop target and lane work" },
      ],
      resources: [
        { name: "IPDB Entry",        url: "https://www.ipdb.org/machine.cgi?id=476",     icon: "🎯" },
        { name: "Pinside Game Page", url: "https://pinside.com/pinball/machine/centaur", icon: "🕹️" },
      ],
    },

    strategy: {
      skillShot: null,
      multiball: [
        {
          name: "ORBS Multiball",
          balls: 2,
          locks: "Hit the <strong>ORBS drop targets in strict sequential order: O → R → B → S</strong>. The targets are on the left-center playfield. An out-of-order hit knocks the target down but breaks the sequence — all targets reset. Focus on one target at a time. Each completion also awards a <strong>virtual lock</strong> (amber indicator light above the flipper), up to 4 virtual locks total.",
          start: "<strong>Multiball starts immediately</strong> upon completing O→R→B→S in sequence — no additional lock shot required. A second ball is released directly into play. No waiting. The more virtual locks accumulated from previous ORBS completions, the more balls in reserve for future sequences.",
          jackpots: "The <strong>Queen's Chamber</strong> (left saucer) is the primary jackpot target during multiball — aim there whenever the ball is on the left side. Also use multiball time to work the <strong>1-2-3-4 right-side drops in order</strong>: completing all four releases locked balls and awards 10K + 20K + 40K + 80K in bonus advances.",
          tip: "ORBS is repeatable every ball — each completion gives another multiball entry. The more you can chain ORBS sequences within a ball, the more multiball time you accumulate. Patience with the sequential targeting is the key skill on Centaur.",
        },
        {
          name: "Lane Multiball",
          balls: 2,
          locks: "Complete all <strong>4 return/outlane lanes</strong> (2 return lanes + 2 outlane lanes) by rolling over them. They light individually as you pass through. No directional requirement — hit all four in any order. <strong>WARNING:</strong> In competition settings, outlane post rubbers are removed, making the outlane lanes more dangerous to trigger.",
          start: "Once all 4 lanes are lit, 2-ball multiball starts automatically. <strong>This can only happen once per ball</strong>, so complete the lanes as early in the ball as possible. Lane completions happen naturally during normal play — don't force them.",
          jackpots: "Same as ORBS Multiball — <strong>Queen's Chamber</strong> for primary scoring. The captive ball (with star rollover setup) also scores well during multiball since you have more time to set up the star rollover → captive ball combo.",
          tip: "Let lane completions happen organically as a byproduct of regular play. Don't sacrifice safe shots trying to hit outlane lanes intentionally — especially with no post rubbers in competition. The Lane Multiball is a bonus, not a plan.",
        },
      ],
      goal: "<strong>Complete ORBS drop targets in sequential order to trigger 2-ball multiball repeatedly, then collect Queen's Chamber jackpots during multiball.</strong> Between multiballs, hit left arc star rollovers before the captive ball for doubled points (up to 100K per hit). The 1-2-3-4 sequential drops build bonus for end-of-ball collection.",
      phases: [
        {
          num: "Phase 1 · Early Game",
          title: "Star Rollovers → Captive Ball + Start ORBS",
          body: "<strong>First priority: left arc star rollovers.</strong> Pass through the left-side arc to light the double-points state, then immediately shoot the <strong>captive ball</strong> on the right side. With star rollovers active, the captive ball pays double: 20K → 40K → 60K → 80K → 100K. This is excellent early-game value with controlled risk.<br><br>While working the captive ball and rollovers, begin identifying the ORBS targets and start working O → R → B → S whenever the ball feeds the left-center area.",
        },
        {
          num: "Phase 2 · ORBS Sequence",
          title: "Work Through O → R → B → S",
          body: "<strong>Focus on the ORBS drop targets in order.</strong> Do not rush — wait for the ball to feed a clean shot at each target in turn. O is typically the easiest to reach from the right flipper. Work through R → B → S methodically.<br><br>If you break the sequence with an out-of-order hit, let the targets reset and start again. Multiball starts <strong>immediately</strong> on completing S — no lock shot needed. Each completion also banks a virtual lock (amber light above flipper).",
        },
        {
          num: "Phase 3 · Multiball",
          title: "Queen's Chamber All Day",
          body: "<strong>During multiball, aim exclusively for the Queen's Chamber</strong> (left saucer). Every successful hit during multiball is your jackpot. Keep both balls in play and feed the left saucer repeatedly.<br><br>When ball time allows, use multiball to also complete the <strong>1-2-3-4 right-side drops in order</strong> — completing all four releases locked balls and earns 150K in bonus advances (10K + 20K + 40K + 80K).<br><br>After multiball ends, immediately start working ORBS again for the next entry.",
        },
      ],
      safeShots: [
        { name: "Left Arc Star Rollovers", desc: "Safe, repeatable pass through the left arc. Always shoot these before targeting the captive ball to double the payout. Low risk, high reward when combined correctly." },
        { name: "Captive Ball (Right)", desc: "A controlled shot from the left flipper. The ball stays captive — no risk of drain. Progressive value 10K→50K (or doubled to 100K with star rollovers). One of the safest high-value shots on the machine." },
        { name: "Queen's Chamber (Left Saucer)", desc: "Left side saucer — your primary jackpot location. Safe ball exit, consistent return to the flippers. The main focus during multiball." },
      ],
      avoidShots: [
        { name: "Outlane Areas (No Post Rubbers)", desc: "In competition settings, outlane post rubbers are absent — balls heading toward the outlanes drain directly. Play conservatively on the sides, especially with a fast-moving ball." },
        { name: "ORBS Out of Order", desc: "Don't rush ORBS. An out-of-order hit resets the entire sequence. Wait for a clean shot at each target in sequence rather than risking a reset that wastes your progress." },
      ],
      tips: [
        { head: "Star rollovers before captive ball — always", body: "The star rollover double is only active for the next captive ball hit. Establish this as a habit: arc first, then captive ball. The difference is 10K→50K vs 20K→100K — effectively doubling your captive ball income every time." },
        { head: "ORBS patience is the skill", body: "The sequential order requirement is strict. Wait for the ball to feed near the correct target before shooting. A rushed out-of-order hit costs you the entire sequence. Take your time with each letter." },
        { head: "Virtual locks are progress banked", body: "Each ORBS completion banks a virtual lock (amber light). More completions across a ball = more multiball entries reserved. Even if a multiball ends quickly, the next ORBS completion immediately triggers another." },
        { head: "1-2-3-4 drops in order = big bonus", body: "Completing all four right-side drops in sequence earns 150K in bonus advances (10K + 20K + 40K + 80K). With no extra balls available, maximizing bonus advance is how you build long-game scores across balls." },
        { head: "Let lanes complete naturally", body: "The 4 return/outlane lanes for Lane Multiball complete themselves during normal play. Don't adjust your shot selection to force lane completions — especially dangerous with no post rubbers on the outlanes." },
      ],
      mistakes: [
        "Hitting ORBS out of order and resetting the sequence — patience is everything.",
        "Forgetting to hit star rollovers before the captive ball and leaving the double-points state unused.",
        "Not shooting the Queen's Chamber during multiball — it's the entire point of multiball on Centaur.",
        "Deliberately aiming for outlane lanes with no post rubbers — the risk is not worth it.",
        "Ignoring virtual lock accumulation — each ORBS completion is a future multiball entry banked.",
      ],
    },

    hotspots: [
      { x:32, y:35, type:"key",   label:"O",  name:"ORBS — 'O' Target",           body:"<strong>First target in the ORBS sequence.</strong> Hit O first, then R → B → S in order. Reachable from the right flipper with a mid-strength left-center shot. If you hit any other ORBS target before O, the sequence resets." },
      { x:28, y:43, type:"key",   label:"R",  name:"ORBS — 'R' Target",           body:"Second in the ORBS sequence (O → <strong>R</strong> → B → S). Only attempt this after lighting O. Same approach angle as O — right flipper, mid-strength. Stay methodical." },
      { x:32, y:51, type:"key",   label:"B",  name:"ORBS — 'B' Target",           body:"Third in the ORBS sequence (O → R → <strong>B</strong> → S). Be patient — wait for a clean ball position before shooting. Don't rush and risk an out-of-order hit." },
      { x:38, y:46, type:"key",   label:"S",  name:"ORBS — 'S' Target (Start!)",  body:"Fourth and final target (O → R → B → <strong>S</strong>). <strong>Completing S immediately starts 2-ball multiball</strong> and banks a virtual lock (amber light). No additional lock shot needed — multiball starts on contact." },
      { x:18, y:30, type:"key",   label:"QC", name:"Queen's Chamber (Left Saucer)", body:"<strong>Your primary jackpot target.</strong> During multiball, aim here exclusively. Safe saucer exit that feeds the ball back to the flippers. Also scores well in single-ball play. The entire multiball strategy is: get here as often as possible." },
      { x:22, y:55, type:"safe",  label:"★",  name:"Left Arc Star Rollovers",      body:"Roll through this left-side arc to activate <strong>double-points mode</strong> for the next captive ball hit. Always do this before shooting the captive ball. Progressive value: 20K → 40K → 60K → 80K → 100K (vs 10K→50K without star rollovers)." },
      { x:75, y:45, type:"safe",  label:"CB", name:"Captive Ball (Right Side)",    body:"A ball held captive behind a post. <strong>Hit it after star rollovers for doubled points</strong> (up to 100K). Progressive value that resets each ball. Shoot from the left flipper — the captive ball can't drain. One of the safest high-value shots on the machine." },
      { x:68, y:53, type:"info",  label:"1",  name:"1-2-3-4 Sequential Drops (#1)", body:"Right-side drop targets that must be hit in order. <strong>#1 scores 10K</strong> and begins the sequence. All four in order (10K + 20K + 40K + 80K = 150K) releases any locked balls. Only hit in order — out-of-sequence hits don't advance the sequence." },
      { x:72, y:59, type:"info",  label:"4",  name:"1-2-3-4 Sequential Drops (#4)", body:"Completing <strong>#4 (80K)</strong> finishes the 1-2-3-4 sequence, releasing all locked balls and awarding the full bonus advances. During multiball this is your secondary jackpot source after the Queen's Chamber." },
      { x:50, y:18, type:"info",  label:"↑",  name:"Pop Bumpers",                  body:"Upper bumper cluster. Each hit advances the bonus. The bumpers also feed balls to the top lanes and back down — expect fast, unpredictable ball returns. Always be ready at the flippers after bumper action." },
      { x:12, y:78, type:"avoid", label:"!",  name:"Left Outlane (No Post)",       body:"<strong>No outlane post rubber in competition settings</strong> — straight drain. Play conservatively when the ball is on the left side. Even though the left outlane lane completes toward Lane Multiball, it's rarely worth the drain risk to target it intentionally." },
      { x:88, y:78, type:"avoid", label:"!",  name:"Right Outlane (No Post)",      body:"<strong>No outlane post rubber in competition settings</strong> — straight drain. Right-side shots that miss can feed here. Keep right-side shots controlled and moderate-strength." },
    ],
  },

  /* ─── FISH TALES ──────────────────────────────────────────── */
  fishtales: {
    name: "Fish Tales",  sub: "1992 · Williams · WPC",
    tagline: "Fishing frenzy · reel spinner & multiball jackpots",
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
        { name: "The Reel (Center Spinner)", desc: "The most important scoring feature. Each spin scores points and advances the Reel Value. Hitting the Reel repeatedly builds enormous point totals. Value advances through multiple levels." },
        { name: "Fishin' Hole (Left Ramp)", desc: "Primary path to the Reel. A controlled shot sends the ball up the ramp and past the spinner. Feeds cleanly back to the left flipper on a good ramp shot." },
        { name: "Lock & Multiball", desc: "Lock balls via the dedicated lock shot. 3 locked balls starts 3-ball multiball. Jackpots are collected at the Fishin' Hole ramp during multiball." },
        { name: "Cat Tail (Right Loop)", desc: "Right-side loop shot. Completes 'C-A-T' letters for awards. Fast ball return — be ready." },
        { name: "Worm Award (Top Lanes)", desc: "Completing top lanes cycles through Worm awards (extra ball, special, millions, etc.). Bump with flipper buttons to position the lit lane." },
      ],
      scoring: [
        { key: "Reel value",         val: "Builds per spin" },
        { key: "Jackpot (multiball)", val: "Millions range" },
        { key: "Worm awards",        val: "Varies (Extra Ball, Millions)" },
        { key: "CAT completion",     val: "Award per completion" },
      ],
      rules: [
        "The <strong>Reel spinner</strong> is the engine of the game — every strategy flows through it.",
        "Lock balls early to enable multiball; jackpots during multiball are massive.",
        "Completing top <strong>Worm lanes</strong> can light Extra Ball — prioritize if offered.",
      ],
      benchmarks: [
        { score: "500M+",  label: "Excellent — strong multiball and reel play" },
        { score: "150M+",  label: "Solid — hitting the main loops consistently" },
        { score: "50M+",   label: "Decent start — getting the feel" },
      ],
      resources: [
        { name: "IPDB Entry",        url: "https://www.ipdb.org/machine.cgi?id=818",       icon: "🎯" },
        { name: "Pinside Game Page", url: "https://pinside.com/pinball/machine/fish-tales", icon: "🕹️" },
      ],
    },

    strategy: {
      skillShot: null,
      multiball: [
        { name: "Fish Tales Multiball", balls: 3,
          locks: "Shoot the dedicated lock shot to lock balls. The lock entrance is on the left side of the playfield.",
          start: "Lock 3 balls to release the 3-ball multiball.",
          jackpots: "Shoot the Fishin' Hole ramp to collect jackpots. Jackpot value builds with reel hits before multiball.",
          tip: "Build the Reel value high before starting multiball so jackpots are worth more." },
      ],
      goal: "<strong>Build Reel value via the Fishin' Hole ramp and center spinner, then cash in with a 3-ball multiball jackpot run.</strong> The spinner is everything on Fish Tales — keep ripping it.",
      phases: [
        { num: "Phase 1 · Early Game", title: "Build the Reel", body: "<strong>Shoot the Fishin' Hole ramp repeatedly.</strong> Each pass through the center Reel spinner adds value and progresses your scoring potential. The ramp feeds back cleanly — it's your primary loop all game." },
        { num: "Phase 2 · Mid Game", title: "Lock Balls & Get Worm Awards", body: "<strong>Lock balls when the lock shot opens up.</strong> While working toward multiball, watch the top Worm lanes — completing them gives valuable awards including Extra Ball. Use flipper buttons to position the lit lane." },
        { num: "Phase 3 · Multiball", title: "Jackpot Frenzy", body: "<strong>During 3-ball multiball, funnel balls back to the Fishin' Hole ramp.</strong> Each ramp shot collects a jackpot. Stay controlled — panicking during multiball leads to fast drains. Focus on one ball at a time." },
      ],
      safeShots: [
        { name: "Fishin' Hole Ramp (Left)", desc: "The primary loop shot. Controlled and rewarding — feeds back to the left flipper. Your default destination every ball." },
        { name: "Top Lanes (Worm)", desc: "Passive scoring via bumpers and lane completions. Use flipper buttons to position the lit lane when you can." },
      ],
      avoidShots: [
        { name: "Cat Tail Loop (Right)", desc: "Fast return angle can be difficult to handle. Only shoot when the ball is well-controlled on the right flipper." },
      ],
      tips: [
        { head: "Reel first, always", body: "Every shot to the Fishin' Hole ramp passes the Reel spinner. Never pass up a clean ramp shot — it builds your scoring foundation." },
        { head: "Pre-build Reel before multiball", body: "The more Reel value you've built before multiball starts, the bigger your jackpots. Don't rush into locking balls — build the Reel first." },
      ],
      mistakes: [
        "Starting multiball with a low Reel value — jackpots are weak if you haven't spun the Reel enough.",
        "Panicking during multiball and losing all balls quickly without collecting jackpots.",
        "Ignoring the Worm top lanes when Extra Ball is available.",
      ],
    },

    hotspots: [
      { x:22, y:28, type:"key",   label:"R",  name:"Fishin' Hole Ramp",        body:"<strong>Your primary shot all game.</strong> This left ramp sends the ball through the Reel spinner. Every pass builds Reel value and earns Wet Willie awards. Find a comfortable shooting angle and loop it repeatedly." },
      { x:50, y:43, type:"key",   label:"~",  name:"The Reel (Center Spinner)", body:"<strong>The engine of Fish Tales.</strong> Activated by the Fishin' Hole ramp. Each spin scores points and advances the Reel Value through multiple levels. The more you hit the ramp, the more each spin is worth. Pre-build Reel value before starting multiball for bigger jackpots." },
      { x:32, y:38, type:"key",   label:"L",  name:"Ball Lock",                body:"<strong>Lock balls here to start 3-ball multiball.</strong> Once multiball is running, return to the Fishin' Hole ramp to collect jackpots. Jackpots scale with Reel value — build the Reel first, then lock." },
      { x:76, y:20, type:"safe",  label:"C",  name:"Cat Tail Loop (Right)",    body:"Right-side loop that completes C-A-T letters for awards. A fast, satisfying shot but the ball return is quick — be ready to catch it. Good secondary shot when the Fishin' Hole is blocked." },
      { x:83, y:32, type:"info",  label:"W",  name:"Worm Award Lights",        body:"These lights track which Worm awards are lit. Completing the top lanes cycles through awards including <strong>Extra Ball and Millions</strong>. Use the flipper buttons to position the lit lane when the ball is in the bumpers." },
      { x:52, y:17, type:"info",  label:"↑",  name:"Pop Bumpers",              body:"Upper bumper cluster. Feeds the top lanes — useful for passively completing them. Ball returns from the bumpers can be fast and unpredictable. Be ready on both flippers." },
      { x:50, y:6,  type:"safe",  label:"T",  name:"Top Lanes (WILLIE)",       body:"Seven top lanes spell W-I-L-L-I-E. Completing all lanes advances Worm awards including Extra Ball. Use the flipper buttons to shift the lit lane while the ball is in the bumpers." },
      { x:50, y:58, type:"info",  label:"BF", name:"Big One Target",           body:"The Big Fish target in the lower playfield. Part of the Fishin' Holes story progression. Not a primary scoring shot but advances certain mode awards. Hit when the ball arrives naturally." },
      { x:12, y:80, type:"avoid", label:"!",  name:"Left Outlane",             body:"Standard outlane — no post rubber in strict settings. Left side shots that miss the ramp entrance can trickle down here. Stay controlled on left-side shots and don't over-power." },
      { x:87, y:80, type:"avoid", label:"!",  name:"Right Outlane",            body:"Right outlane drains are often unrecoverable. The Cat Tail loop returns fast — always be positioned to catch the ball before it reaches the outlane." },
    ],
  },

  /* ─── FLASH GORDON ─────────────────────────────────────────── */
  flashgordon: {
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
  },

  /* ─── LETHAL WEAPON 3 ──────────────────────────────────────── */
  lw3: {
    name: "Lethal Weapon 3",  sub: "1992 · Data East · Solid-State",
    tagline: "Action movie theme · ramp combos & multiball madness",
    image: "images/lethal-weapon-3.webp",
    difficulty: "Medium", diffClass: "diff-medium", era: "DMD",

    info: {
      stats: [
        { label: "Manufacturer", value: "Data East Pinball" },
        { label: "Year",         value: "1992" },
        { label: "Type",         value: "Solid-State" },
        { label: "Multiball",    value: "3-ball" },
        { label: "Theme",        value: "Lethal Weapon film series" },
        { label: "Voices",       value: "Mel Gibson & Danny Glover" },
      ],
      theme: "Based on the Lethal Weapon film series featuring Riggs and Murtaugh. One of Data East's most successful licensed titles, featuring digitized speech from the movie actors.",
      features: [
        { name: "Left & Right Ramps", desc: "Primary scoring features. Completing both ramps builds toward Ricochet ramp awards. Ramp combo shots score increasing values." },
        { name: "Police Station (Center Saucer)", desc: "Advances modes and awards points. Key for lighting multiball and collecting awards." },
        { name: "Multiball", desc: "3-ball multiball with jackpots at the ramps. Start by locking balls via the designated lock shots." },
        { name: "Extra Ball Lanes", desc: "Top lanes spell E-X-T-R-A or similar — completing awards Extra Ball." },
        { name: "Ramp Combos (Ricochet)", desc: "Hitting both ramps quickly in sequence awards Ricochet bonus — a significant points multiplier." },
      ],
      scoring: [
        { key: "Ramp shot",         val: "Millions range per ramp" },
        { key: "Ricochet combo",    val: "Bonus for quick ramp-to-ramp" },
        { key: "Multiball jackpot", val: "Super Jackpot at ramps" },
        { key: "Mode awards",       val: "Varies by mode" },
      ],
      rules: [
        "Ramp combo (Ricochet) shots reward fast sequential ramp hits with a <strong>multiplied bonus</strong>.",
        "<strong>Lock balls</strong> via the center to trigger 3-ball multiball — jackpots are your biggest scoring opportunities.",
        "Mode stacking can multiply scoring significantly — try to time mode starts with multiball.",
      ],
      benchmarks: [
        { score: "1B+",    label: "Excellent — strong multiball and combos" },
        { score: "300M+",  label: "Solid play" },
        { score: "100M+",  label: "Getting the flow" },
      ],
      resources: [
        { name: "IPDB Entry",        url: "https://www.ipdb.org/machine.cgi?id=1451",            icon: "🎯" },
        { name: "Pinside Game Page", url: "https://pinside.com/pinball/machine/lethal-weapon-3", icon: "🕹️" },
      ],
    },

    strategy: {
      skillShot: null,
      multiball: [
        { name: "LW3 Multiball", balls: 3,
          locks: "Shoot the ball lock shot (center or dedicated lock area) to lock balls one at a time.",
          start: "Lock 3 balls to start 3-ball multiball.",
          jackpots: "Jackpots are collected at the ramps during multiball. Super Jackpot resets after collection.",
          tip: "Keep both ramps in play during multiball — alternate sides to collect jackpots efficiently." },
      ],
      goal: "<strong>Run the left and right ramps for Ricochet combos, lock balls for multiball, and collect ramp jackpots during 3-ball play.</strong> The ramps are your best friends — flow between them all game.",
      phases: [
        { num: "Phase 1 · Early Game", title: "Establish Ramp Flow", body: "<strong>Build ramp muscle memory early.</strong> The left and right ramps are your primary targets. Each ramp completion scores well, and hitting them back-to-back awards a Ricochet combo bonus. Find a comfortable shooting angle and stick with it." },
        { num: "Phase 2 · Mid Game", title: "Lock Balls for Multiball", body: "<strong>Work in lock shots alongside ramp play.</strong> Getting multiball started is the biggest priority once ramp flow is established. Don't sacrifice good ball position trying to force a lock shot — wait for natural opportunities." },
        { num: "Phase 3 · Multiball", title: "Ramp Jackpots", body: "<strong>During 3-ball multiball, focus on ramp shots for jackpots.</strong> Keep as many balls in play as possible. Protect the left flipper and use it to feed ramps repeatedly." },
      ],
      safeShots: [
        { name: "Left Ramp", desc: "Feeds back smoothly. One of the safest high-value shots on the machine. Make it your primary route." },
        { name: "Right Ramp", desc: "Slightly trickier angle but very rewarding. Completing both ramps unlocks Ricochet combos." },
      ],
      avoidShots: [
        { name: "Center drop/standup area", desc: "Can feed dangerous exits. Only shoot when you have full control of the ball." },
      ],
      tips: [
        { head: "Ricochet timing", body: "After a ramp shot returns the ball to the flipper, immediately shoot the opposite ramp. The window for a Ricochet combo is generous — you don't need to rush, but don't wait too long." },
        { head: "Protect your multiball", body: "During 3-ball play, resist chasing both outlane balls. Trap one ball and keep shooting the ramp with it — one ball under control is worth more than two wild balls." },
      ],
      mistakes: [
        "Losing ball lock shots to outlane drains — be patient waiting for clean lock shot opportunities.",
        "Ignoring the Ricochet combo and treating ramps as single shots instead of pairs.",
        "Panicking during multiball and losing all three balls within seconds without collecting jackpots.",
      ],
    },

    hotspots: [
      { x:18, y:12, type:"key",   label:"LR", name:"Left Ramp",                  body:"<strong>Your primary safe shot all game.</strong> Feeds back smoothly to the left flipper. Ramp combos (left → right quickly) award the Ricochet bonus. Default to the left ramp whenever you have a clean shot." },
      { x:78, y:13, type:"key",   label:"RR", name:"Right Ramp",                 body:"<strong>Pairs with the left ramp for Ricochet combos.</strong> After a left ramp return, immediately shoot the right ramp for bonus scoring. Also advances Yakuza Strike progress. <em>Note:</em> the 3rd ramp shot triggers Yakuza Strike — use the right orbit after two ramp shots to collect awards without starting it early." },
      { x:46, y:20, type:"key",   label:"LK", name:"Ball Lock / Upper Area",     body:"<strong>Lock balls here to start 3-ball multiball.</strong> The lock entrance is accessed through the upper playfield. During multiball, jackpots are collected at the ramps. Pre-build your ramp flow before triggering multiball." },
      { x:50, y:7,  type:"safe",  label:"T",  name:"Top Lanes",                  body:"Completing the top lanes advances the <strong>bonus multiplier</strong>. Bumpers passively complete lanes during play. Use flipper buttons to position the lit lane when the ball is in the bumper area." },
      { x:55, y:18, type:"info",  label:"↑",  name:"Pop Bumpers",                body:"Upper bumper cluster. Each hit advances bonus. Bumper action after a ramp shot or lock exit feeds the top lanes. Returns can be unpredictable — stay on both flippers." },
      { x:35, y:45, type:"info",  label:"PS", name:"Police Station (Center)",    body:"The central saucer area. Key for advancing modes and lighting features. Shooting here unlocks certain awards and contributes to Police Badge progress. Not a primary scoring route but important for mode progression." },
      { x:12, y:82, type:"avoid", label:"!",  name:"Left Outlane",               body:"Direct drain in competition settings. Left-side shots that miss the ramp entrance can trickle down here. Don't overshoot the left ramp." },
      { x:88, y:82, type:"avoid", label:"!",  name:"Right Outlane",              body:"Right outlane catches fast right-ramp returns that aren't caught cleanly. Always be positioned before the ball comes back from the upper playfield." },
    ],
  },

  /* ─── MEDIEVAL MADNESS ─────────────────────────────────────── */
  mm: {
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
        { label: "Multiball",    value: "2-ball & 6-ball" },
        { label: "Theme",        value: "Medieval / comedy" },
      ],
      theme: "Comedic medieval theme with a fully functional drawbridge and castle that can be destroyed. Players attack a royal castle, battle trolls, and interact with Merlin. Considered one of the greatest pinball machines ever made.",
      features: [
        { name: "Castle (Center)", desc: "The central feature — shoot the castle gate to lower the drawbridge, then shoot through to score. Destroying the castle (multiple hits) awards major points and starts modes." },
        { name: "Left & Right Ramps (Jousting)", desc: "Ramp shots award Joust awards and help build toward multiball. Clean, flowing shots that feed back to the flippers." },
        { name: "Siege Multiball", desc: "Lock balls via the castle locks. 2-ball siege multiball leads to full 6-ball Castle Siege Multiball — the biggest scoring event on the machine." },
        { name: "Trolls (Pop Bumpers)", desc: "Four pop bumpers in the upper playfield. Troll bumper hits advance toward troll-related awards." },
        { name: "Damsel / Merlin Lanes", desc: "Top lanes spell D-A-M-S-E-L. Completing awards bonus multiplier increases and Merlin awards." },
        { name: "King of the Realm", desc: "Accumulate enough castle hits across the game to become King. Huge scoring award — the grand achievement of the game." },
      ],
      scoring: [
        { key: "Castle hit value",       val: "Increases with each hit" },
        { key: "Siege Multiball jackpot", val: "Millions per jackpot" },
        { key: "Castle destruction",     val: "Major bonus + mode start" },
        { key: "King of Realm",          val: "Grand scoring milestone" },
      ],
      rules: [
        "The <strong>castle gate</strong> must be opened (drawbridge down) before you can shoot through it. Lower it with a direct gate hit.",
        "<strong>Castle Siege Multiball</strong> (6-ball) is the biggest scoring event — save your best play for when it starts.",
        "Completing <strong>DAMSEL</strong> top lanes advances the bonus multiplier.",
        "Each <strong>castle destruction</strong> resets the castle but awards progressive mode bonuses.",
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
      skillShot: null,
      multiball: [
        { name: "Siege Multiball", balls: 6,
          locks: "Shoot the ball through the open castle gate to lock balls. The drawbridge must be lowered first — hit the gate to open it.",
          start: "Lock enough balls to trigger Siege Multiball. Starts as 2-ball, escalates to full 6-ball Castle Siege Multiball.",
          jackpots: "Shoot the castle during multiball for jackpots. The super jackpot requires a castle shot after regular jackpots are collected.",
          tip: "During 6-ball multiball, don't panic — control one ball at a time and keep feeding the castle." },
      ],
      goal: "<strong>Open the castle gate repeatedly, lock balls for Siege Multiball, and collect massive jackpots during Castle Siege Multiball.</strong> Every good game on Medieval Madness flows through the castle.",
      phases: [
        { num: "Phase 1 · Early Game", title: "Lower the Drawbridge", body: "<strong>Shoot the castle gate to lower the drawbridge.</strong> This is your entry point to everything. Once the drawbridge is down, shoot through the castle to begin accumulating hits and working toward ball locks." },
        { num: "Phase 2 · Mid Game", title: "Lock Balls for Siege", body: "<strong>With the drawbridge open, funnel balls into the castle lock.</strong> The ramps also contribute to Joust progress and multiball setup. Shoot ramps when the castle isn't open — they feed back cleanly and keep the scoring going." },
        { num: "Phase 3 · Siege Multiball", title: "Castle Jackpot Frenzy", body: "<strong>During Siege Multiball, keep targeting the castle.</strong> Regular jackpots build to a super jackpot. In 6-ball chaos, pick your best lane and stay disciplined. One controlled ball collecting castle jackpots beats six wild balls draining instantly." },
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
        { head: "Drawbridge first", body: "Before every castle shot attempt, verify the drawbridge status. A shot at a closed gate often results in a dangerous return. Open it first with a gate hit, then go through." },
        { head: "Ramp when in doubt", body: "If the castle is closed and you don't have a clean approach, shoot a ramp. They score well, feed back cleanly, and advance Joust progress." },
        { head: "6-ball multiball discipline", body: "When 6-ball multiball starts, the natural reaction is to flail. Resist this. Hold one ball, let the others drain if needed, and focus on castle jackpots with the ball you control. Quality beats quantity." },
      ],
      mistakes: [
        "Shooting the closed castle gate and taking a dangerous return without the drawbridge open.",
        "Panicking during 6-ball Siege Multiball and losing everything instantly.",
        "Ignoring the DAMSEL top lanes — bonus multiplier is meaningful on longer balls.",
        "Treating the ramps as secondary — they are excellent safe scoring all game.",
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
  },

  /* ─── RACK EM UP ───────────────────────────────────────────── */
  rackemup: {
    name: "Rack Em Up",  sub: "1983 · Bally · Solid-State",
    tagline: "Pool hall theme · sequential targets & bonus build",
    image: "images/rack-em-up.jpg",
    difficulty: "Medium", diffClass: "diff-medium", era: "SS",

    info: {
      stats: [
        { label: "Manufacturer", value: "Bally Mfg. Co." },
        { label: "Year",         value: "1983" },
        { label: "Type",         value: "Solid-State" },
        { label: "Body",         value: "Standard" },
        { label: "Theme",        value: "Pool / billiards" },
      ],
      theme: "Pool hall theme with billiard ball motif. Players pot numbered balls in sequence just like 8-ball pool. A late Bally solid-state title with sequential target play at its core.",
      features: [
        { name: "Numbered Drop Targets (1–8)", desc: "The central feature. Hit drop targets numbered 1 through 8 in sequence — like potting pool balls in order. Sequential completion awards major points." },
        { name: "8-Ball Target", desc: "The final and most valuable target. Hitting 8 last (after 1–7) completes the rack and awards the largest single bonus." },
        { name: "Bonus Multiplier Lanes", desc: "Top and side lanes advance the bonus multiplier. Higher multiplier makes each rack completion significantly more valuable." },
        { name: "Saucer / Kickout", desc: "Awards points and can advance multiplier or light features." },
      ],
      scoring: [
        { key: "Sequential 1–8 completion", val: "Major rack bonus" },
        { key: "Bonus multiplier",           val: "Up to 5×" },
        { key: "End-of-ball bonus",          val: "Primary scoring event" },
      ],
      rules: [
        "Drop targets must be hit in <strong>sequential order</strong> (1 → 2 → 3 ... → 8). Out-of-order hits do not advance the sequence.",
        "End-of-ball <strong>bonus is the primary payout</strong> — build it each ball and protect it.",
        "Higher bonus multiplier dramatically increases the end-of-ball bonus collect.",
      ],
      benchmarks: [
        { score: "300,000+", label: "Excellent — completing multiple racks with high multiplier" },
        { score: "100,000+", label: "Solid play" },
        { score: "40,000+",  label: "Getting comfortable with the sequence" },
      ],
      resources: [
        { name: "IPDB Entry",        url: "https://www.ipdb.org/machine.cgi?id=1913",        icon: "🎯" },
        { name: "Pinside Game Page", url: "https://pinside.com/pinball/machine/rack-em-up",  icon: "🕹️" },
      ],
    },

    strategy: {
      skillShot: null,
      multiball: null,
      goal: "<strong>Hit drop targets 1 through 8 in sequential order to rack up bonus, advance the multiplier via lane rollovers, and collect a large end-of-ball bonus every ball.</strong> Patience and sequence discipline win on this machine.",
      phases: [
        { num: "Phase 1 · Early Game", title: "Advance the Multiplier", body: "<strong>Complete the top and side lanes to build the bonus multiplier before working the numbered targets.</strong> Higher multiplier means every subsequent rack completion pays more. Aim for at least 3× before committing to the drop target sequence." },
        { num: "Phase 2 · Mid Game", title: "Run the Sequence (1–8)", body: "<strong>Hit targets 1 through 8 in strict order.</strong> Wait for the ball to settle on the flipper before each shot. If you're forced out of sequence, wait for the next opportunity rather than scrambling and hitting the wrong target." },
        { num: "Phase 3 · Late Game", title: "Survive for the Bonus Collect", body: "<strong>Once the rack is complete or near-complete, focus on keeping the ball alive.</strong> The end-of-ball bonus is your biggest payout — every second of survival is more bonus accruing." },
      ],
      safeShots: [
        { name: "Next sequential target (1–8)", desc: "Always your primary target. Hit the next number in sequence from a controlled flipper position. Methodical, not rushed." },
        { name: "Top lanes (multiplier)", desc: "Reliable shots that advance the multiplier. Safe approach from either flipper." },
      ],
      avoidShots: [
        { name: "Out-of-sequence targets", desc: "Hitting the wrong numbered target resets your position in the sequence — a waste of a shot. If the ball won't land on the right target, hold and wait." },
      ],
      tips: [
        { head: "Trap before every target shot", body: "Rack Em Up rewards deliberate play. Trap the ball, identify the next sequential target, then shoot. Don't react — plan each shot." },
        { head: "Multiplier is king", body: "At 5× multiplier, a full rack completion pays five times what it does at 1×. Invest your early game in multiplier lanes — it pays dividends all game." },
      ],
      mistakes: [
        "Hitting out-of-sequence drop targets and resetting your progress.",
        "Neglecting the multiplier lanes early and completing racks at 1× or 2× value.",
        "Playing aggressively and draining before the end-of-ball bonus payout.",
        "Rushing shots instead of trapping and aiming — this machine punishes impatience.",
      ],
    },

    hotspots: [
      { x:48, y:12, type:"key",   label:"T1", name:"Top Saucer #1 (Left)",      body:"<strong>One of three top saucers that award points and advance the bonus multiplier.</strong> Hit any top saucer to score — they build in value as you hit them. These are your most reliable bonus-building shots." },
      { x:65, y:12, type:"key",   label:"T2", name:"Top Saucer #2 (Right)",     body:"Second top saucer. All three top saucers award escalating point values and advance the multiplier. Shoot from whichever flipper gives you the cleanest angle — they're wide targets, very forgiving." },
      { x:38, y:30, type:"info",  label:"↑",  name:"Pop Bumpers",               body:"Upper bumper cluster. Each hit advances bonus. Feeds the top lanes and top saucers passively. Returns are unpredictable — always be ready." },
      { x:22, y:40, type:"key",   label:"1",  name:"Numbered Targets (Left)",   body:"<strong>Hit these targets in strict sequential order (1 → 2 → 3 ... → 8).</strong> Each hit in sequence scores and advances the rack. An out-of-order hit does not advance the sequence. Trap the ball and aim deliberately before each shot." },
      { x:72, y:40, type:"key",   label:"8",  name:"Numbered Targets (Right)",  body:"<strong>Right side of the numbered target sequence.</strong> Completing 1 through 8 in order earns the full rack bonus — your primary scoring event. Always know which number is next before you shoot. Patience over speed." },
      { x:50, y:55, type:"key",   label:"🎱", name:"Pool Ball Triangle",        body:"<strong>The pool rack layout of bonus targets in the center.</strong> These accumulate bonus base as you complete sequences. Building a large base bonus combined with a high multiplier is how big scores happen. Every sequence completion adds to your end-of-ball payout." },
      { x:50, y:7,  type:"safe",  label:"TL", name:"Top Rollover Lanes",        body:"Top lane rollovers advance the bonus multiplier. Completing them multiple times can light Extra Ball or Special. Pass through both lanes in a single ball for maximum effect." },
      { x:12, y:82, type:"avoid", label:"!",  name:"Left Outlane",              body:"Drain hazard. Protect the left side — a ball that goes wide on any left-flipper target shot can trickle toward the outlane. Trap first, then aim." },
      { x:88, y:82, type:"avoid", label:"!",  name:"Right Outlane",             body:"Right outlane is particularly dangerous on missed right-side shots. Only shoot right-side targets from a controlled, trapped position." },
    ],
  },

  /* ─── WHITE WATER ──────────────────────────────────────────── */
  whitewater: {
    name: "White Water",  sub: "1993 · Williams · WPC",
    tagline: "Whitewater rafting · big foot & ricochet ramps",
    image: "images/white-water.jpg",
    difficulty: "Medium", diffClass: "diff-medium", era: "DMD",

    info: {
      stats: [
        { label: "Manufacturer", value: "Williams Electronics" },
        { label: "Year",         value: "1993" },
        { label: "Designer",     value: "Pat Lawlor" },
        { label: "Platform",     value: "WPC" },
        { label: "Multiball",    value: "3-ball" },
        { label: "Theme",        value: "Whitewater rafting / Big Foot" },
      ],
      theme: "Whitewater river rafting adventure featuring Big Foot the yeti as the villain. Pat Lawlor design with a fast, flowing playfield emphasizing ramp combos and the unique 'Wet Willie's Waterfall' feature. Famous for its ramp shot satisfaction.",
      features: [
        { name: "Wet Willie's Waterfall (Left Ramp)", desc: "The signature shot. Ball travels up the ramp and falls down a waterfall back to the playfield. Counts toward Wet Willie awards and building toward multiball. Extremely satisfying and the primary loop shot." },
        { name: "Disaster Drop (Center Ramp)", desc: "Center ramp leads to a free-fall drop. One of the more dramatic ramp shots in pinball. Advances modes and scoring." },
        { name: "Right Ramp (Riverboat)", desc: "Standard ramp on the right side. Completes ramp combo sequences with the other ramps." },
        { name: "Big Foot Multiball", desc: "Lock balls to trigger 3-ball multiball. Jackpots are collected at the ramps during multiball." },
        { name: "Whirlpool (Spinning Disk)", desc: "Spinning disk on the playfield that redirects the ball unpredictably. Both a hazard and a source of passive scoring." },
        { name: "Boulders (Drop Targets)", desc: "Drop targets that block shots. Clear them to open up routes to key shots." },
      ],
      scoring: [
        { key: "Wet Willie's ramp",       val: "Builds Wet Willie award" },
        { key: "Multiball jackpots",      val: "Millions range" },
        { key: "Ramp combo awards",       val: "Bonus for sequential ramps" },
        { key: "Wet Willie Grand Prix",   val: "Accumulated ramp scoring" },
      ],
      rules: [
        "The <strong>Wet Willie's Waterfall</strong> ramp is the primary shot — all roads lead back to it.",
        "Lock balls via the designated lock area to start 3-ball multiball. <strong>Jackpots are at the ramps</strong>.",
        "The <strong>Whirlpool disk</strong> deflects ball direction — always be ready for an unusual bounce off it.",
        "Clearing <strong>Boulder drop targets</strong> opens shot lanes — complete them when they're blocking key routes.",
      ],
      benchmarks: [
        { score: "1B+",    label: "Excellent — strong multiball and ramp combos" },
        { score: "300M+",  label: "Solid play" },
        { score: "100M+",  label: "Getting the ramp flow" },
      ],
      resources: [
        { name: "IPDB Entry",        url: "https://www.ipdb.org/machine.cgi?id=2768",         icon: "🎯" },
        { name: "Pinside Game Page", url: "https://pinside.com/pinball/machine/white-water",  icon: "🕹️" },
      ],
    },

    strategy: {
      skillShot: null,
      multiball: [
        { name: "Big Foot Multiball", balls: 3,
          locks: "Lock balls via the designated lock shot. The lock is typically accessible from a ramp or saucer shot.",
          start: "Lock 3 balls to start Big Foot Multiball.",
          jackpots: "Jackpots collected at the main ramps during multiball. Super jackpot requires hitting all ramps in sequence.",
          tip: "Pre-build ramp combos before multiball so you know the routes. Muscle memory during multiball chaos is everything." },
      ],
      goal: "<strong>Loop the Wet Willie's Waterfall ramp as your primary scoring engine, lock balls for Big Foot Multiball, and collect jackpots at the ramps.</strong> White Water rewards ramp flow — find your groove and stay in it.",
      phases: [
        { num: "Phase 1 · Early Game", title: "Find the Waterfall Rhythm", body: "<strong>Establish your Wet Willie's Waterfall ramp shot early.</strong> This left ramp is the heart of the game. Work out the angle from your left flipper, hit it repeatedly, and build Wet Willie awards while advancing toward multiball locks." },
        { num: "Phase 2 · Mid Game", title: "Integrate All Three Ramps", body: "<strong>Once comfortable with the Waterfall, start incorporating the Disaster Drop and Riverboat ramps.</strong> Ramp combos award bonuses. Clear Boulder drop targets when they block key shots. Lock balls when the opportunity arises without sacrificing good ball position." },
        { num: "Phase 3 · Multiball", title: "Ramp Jackpot Flow", body: "<strong>During 3-ball multiball, target the ramps for jackpots.</strong> The Waterfall is your safest and most reliable jackpot route. Let balls feed naturally and keep the Waterfall ramp looping. Don't chase outlane balls." },
      ],
      safeShots: [
        { name: "Wet Willie's Waterfall (Left Ramp)", desc: "Your primary destination every ball. Safe approach from the left flipper, satisfying return, high value. Default to this shot all game." },
        { name: "Right Ramp (Riverboat)", desc: "Reliable ramp shot, feeds back cleanly. Good secondary option when the Waterfall is blocked." },
      ],
      avoidShots: [
        { name: "Whirlpool Disk (direct)", desc: "Don't aim for the spinning disk — deflections are unpredictable and can feed outlanes. Let it score passively when the ball passes through." },
        { name: "Disaster Drop (under pressure)", desc: "The center ramp has a dramatic ball drop that can be hard to recover. Only shoot it when you have good ball control." },
      ],
      tips: [
        { head: "Waterfall timing", body: "The Wet Willie's Waterfall ramp return drops the ball in a predictable zone. Learn exactly where it lands and pre-position your flipper for a clean catch — this enables you to loop the ramp repeatedly." },
        { head: "Boulder management", body: "Clear Boulder drop targets when they block the Waterfall route. An open Waterfall path is worth the few shots needed to clear the Boulders." },
        { head: "Whirlpool awareness", body: "When the ball enters the Whirlpool disk area, watch closely — the redirection can be surprising. Stay on both flippers and be ready for either side." },
      ],
      mistakes: [
        "Neglecting the Wet Willie's Waterfall and trying to score from other shots — it's the primary engine.",
        "Chasing balls into the Whirlpool without being prepared for random deflections.",
        "Locking balls before establishing comfortable ramp flow — know your shots before multiball starts.",
        "Letting Boulder drop targets block the Waterfall route without clearing them.",
      ],
    },

    hotspots: [
      { x:16, y:25, type:"key",   label:"WW", name:"Wet Willie's Waterfall (Left Ramp)", body:"<strong>Your primary shot all game.</strong> The left ramp sends the ball up and over the waterfall, feeding back to a predictable landing zone. Learn that landing spot and pre-position your flipper to loop it repeatedly. The more you loop it, the more Wet Willie awards you accumulate." },
      { x:50, y:10, type:"key",   label:"BF", name:"Big Foot / Lock Area",      body:"<strong>Lock balls here to start Big Foot Multiball.</strong> Big Foot guards the lock in the upper playfield. Locking all required balls releases the 3-ball multiball. Build ramp flow first — during multiball, muscle memory on the Waterfall ramp is everything." },
      { x:80, y:20, type:"safe",  label:"RP", name:"Right Ramp (Riverboat)",    body:"The right-side ramp. Reliable return to the right flipper. Good secondary shot when the Waterfall is blocked or the ball is on the right side. Also part of ramp combo sequences." },
      { x:52, y:22, type:"safe",  label:"DD", name:"Disaster Drop (Center Ramp)", body:"Center ramp with a dramatic free-fall drop on the exit. Scores well and advances modes. <strong>Only shoot from a well-controlled position</strong> — the post-drop ball path can be hard to track under pressure. Don't force it during close moments." },
      { x:22, y:40, type:"safe",  label:"CB", name:"Crazy Bob's Saucer (Left)", body:"Upper-left saucer. Advances features and unlocks mode awards. A safe destination when the ball arrives on the left flipper without a clean ramp angle. Feeds back to the flipper area after scoring." },
      { x:45, y:52, type:"avoid", label:"WP", name:"Whirlpool Spinning Disk",   body:"<strong>Do NOT aim for the Whirlpool — it deflects the ball randomly.</strong> The disk is passive scoring only. When the ball enters this zone, watch carefully and be ready on both flippers. The exit direction can surprise you. Never target it deliberately." },
      { x:58, y:42, type:"info",  label:"BO", name:"Boulder Drop Targets",      body:"Drop targets that can block the Waterfall ramp entrance when standing. <strong>Clear them when they're in your way</strong> — a clear path to the Waterfall is worth the few shots to knock them down. After clearing, they stay down until the next ball." },
      { x:10, y:80, type:"avoid", label:"!",  name:"Left Outlane",              body:"Direct drain. The left outlane is most dangerous after Crazy Bob's saucer ejects — the ball can bounce sideways toward the outlane. Be positioned and ready after every saucer kick." },
      { x:88, y:80, type:"avoid", label:"!",  name:"Right Outlane",             body:"Right outlane can catch fast right-ramp returns that aren't caught cleanly. After a Riverboat ramp shot, be in position before the ball clears the upper playfield." },
    ],
  },

  /* ─── DEADPOOL ─────────────────────────────────────────── */
  deadpool: {
    name: "Deadpool",  sub: "2018 · Stern · Spike 2",
    tagline: "Merc with a mouth · Chimichangas & katana ramp combos",
    image: "images/deadpool.jpg",
    difficulty: "Medium", diffClass: "diff-medium", era: "Modern",

    info: {
      stats: [
        { label: "Manufacturer", value: "Stern Pinball" },
        { label: "Year",         value: "2018" },
        { label: "Designer",     value: "George Gomez" },
        { label: "Platform",     value: "Spike 2 / LCD" },
        { label: "Multiball",    value: "Multiple (Ninja, Disco, Mechsuit, Lil' DP)" },
        { label: "Theme",        value: "Marvel Comics — Deadpool" },
      ],
      theme: "Based on the Marvel Comics antihero Deadpool (Wade Wilson). Full of fourth-wall-breaking humor, chimichangas, and time-travel adventure. Designed by George Gomez — widely praised for humor, flow, and depth.",
      features: [
        { name: "Left Ramp (Katana)", desc: "The primary ramp shot — fast, smooth, feeds back to the left flipper. Advances Battles/Quests and is the backbone of your game plan. Very reliable with good flipper technique." },
        { name: "Chimichangas", desc: "Shoot the right orbit to advance the Chimichanga Truck, which lights orange shots at major targets. Collecting chimichangas builds the Quest punch card. Completing Quests scores a large Mode Jackpot bonus. Progress carries across balls." },
        { name: "Left Spinner (Disco)", desc: "Left-side spinner. Ripping it accumulates spins toward Disco Multiball (60 spins). Each spin scores points. One of the most satisfying shots on the table — and the engine for Disco Multiball." },
        { name: "Right Ramp (Katana Ramp)", desc: "Right ramp is the lock for Ninja Multiball — lock 3 balls here to start. Also scores the Super Skill Shot and Ninjapocalypse combo with the right orbit." },
        { name: "U-Turn / Colossal Jackpot", desc: "Shooting the U-turn loop twice qualifies the Colossal Jackpot target at the end of the loop. Value built by switch hits — a big, satisfying cash-out opportunity." },
        { name: "OOF / DEAD / POOL Drop Targets", desc: "OOF drop targets expose the Lil' Deadpool standup. DEAD targets light Battle at the scoop. POOL targets light a Ninja Multiball lock. Completing DEADPOOL (all targets) lights Mystery." },
        { name: "Pop Bumpers (Upper)", desc: "Upper bumper cluster accessed after ramp exits. Passive scoring — bumper hits light major shots in blue to collect Ninja Stars, which raise Ninja Multiball jackpot values." },
        { name: "Battles & Quests", desc: "Start Battles (vs. Juggernaut, Mystique, Sabretooth) at the scoop after completing DEAD. Start Quests (T-Rex Quest, Megalodon Quest) by collecting chimichangas then shooting the scoop. Completing all Battles and Quests leads to the wizard modes." },
      ],
      scoring: [
        { key: "Quest Mode Jackpot",        val: "% of all pts scored during quest" },
        { key: "Ninja Multiball jackpot",   val: "Based on Ninja Stars collected" },
        { key: "Mechsuit Multiball jackpot",val: "5M base, +100k per subsequent jackpot" },
        { key: "Disco Multiball jackpot",   val: "Built by switch hits" },
        { key: "Colossal Jackpot",          val: "Built by switch hits, doubled with strong shot" },
      ],
      rules: [
        "<strong>Chimichangas progress carries between balls</strong> — shoot the right orbit to advance the truck, then hit orange shots to fill the punch card and start Quests.",
        "The left Katana ramp is your <strong>primary safe shot</strong> all game — it feeds back cleanly and advances Battles/Quests.",
        "<strong>Stack modes with multiball</strong> whenever possible — Ninja Multiball can stack into Battles and Quests.",
        "Complete DEAD targets to light a Battle at the scoop; complete POOL targets to relight a Ninja Multiball lock.",
        "The <strong>left spinner</strong> rewards aggressive play — spin it 60 times to light Disco Multiball. Ripping it on a controlled ball is very efficient scoring.",
      ],
      benchmarks: [
        { score: "2B+",    label: "Excellent — strong Chimichanga runs + multiball" },
        { score: "500M+",  label: "Solid — completing modes and looping ramps" },
        { score: "150M+",  label: "Getting the flow" },
      ],
      resources: [
        { name: "IPDB Entry",        url: "https://www.ipdb.org/machine.cgi?id=6567",       icon: "🎯" },
        { name: "Pinside Game Page", url: "https://pinside.com/pinball/machine/deadpool-le", icon: "🕹️" },
        { name: "Stern Rules Sheet", url: "https://www.sternpinball.com/games/deadpool/",    icon: "📖" },
      ],
    },

    strategy: {
      skillShot: {
        name: "Lane Skill Shot (BAM! top lane)",
        value: "2.5M + 250k per skill shot",
        desc: "Plunge into the flashing BAM! top lane for the Lane Skill Shot. You can change the flashing lane before launch. For more value: hold the left flipper and shoot up the right ramp for the Super Skill Shot (5M). The 'MXV' combo (right orbit → right ramp) scores 12.5M. Always attempt at minimum the basic lane skill shot.",
      },
      multiball: [
        { name: "Ninja Multiball", balls: 3,
          locks: "Lock 3 balls at the right Katana ramp. Locks are lit by default; relight by completing POOL targets after first Ninja Multiball.",
          start: "Lock 3 balls at the right ramp — Ninja Multiball starts automatically.",
          jackpots: "Jackpots at all major shots based on Ninja Stars collected. Super Jackpot at the right ramp = sum of all jackpots collected. Stacks into Battles and Quests.",
          tip: "Build Ninja Stars first via bumper hits before starting Ninja Multiball — higher stars = higher jackpots." },
        { name: "Disco Multiball", balls: 2,
          locks: "Spin the left spinner 60 times (then 120, 180, etc.) to light Disco Multiball.",
          start: "Shoot the left spinner until Disco Multiball lights, then start it (cannot be started during other modes).",
          jackpots: "Shoot lit shots for Disco Jackpots built by switch hits. A random shot starts the Super Jackpot round — left ramp collects it, left spinner raises its value.",
          tip: "The left spinner is a natural shot from the right flipper — ripping it during regular play passively builds toward Disco Multiball." },
        { name: "Mechsuit Multiball", balls: 4,
          locks: "Cash out 45 weapons (shoot white shots, then scoop) to light Mechsuit Multiball at the scoop.",
          start: "Shoot the scoop with no other modes running after cashing 45 weapons.",
          jackpots: "All shots lit for jackpots (5M base, +100k each). After 5 jackpots a Super Jackpot lights at the scoop (15M + 250k × jackpots collected).",
          tip: "The scoop is the Super Jackpot location — after collecting a few jackpots on the playfield, return to the scoop for the big payout." },
      ],
      goal: "<strong>Loop the Katana ramp to advance Battles and collect chimichangas via the right orbit, lock 3 balls at the right ramp for Ninja Multiball, and stack an active Battle with multiball for the biggest scoring windows.</strong> The left ramp and right orbit are your engines all game.",
      phases: [
        {
          num: "Phase 1 · Early Game",
          title: "Establish Left Ramp Flow + Chimichanga Truck",
          body: "<strong>The left Katana ramp is your home base.</strong> From the right flipper, shoot the left ramp repeatedly to advance the current Battle or Quest. Also shoot the right orbit to advance the Chimichanga Truck — this lights orange shots at major targets. Collect chimichangas along the way to fill your Quest punch card.",
        },
        {
          num: "Phase 2 · Mid Game",
          title: "Battles, Quests & Ninja Multiball",
          body: "<strong>Start Battles at the scoop after completing DEAD targets</strong> (or from ball 1). Shoot Juggernaut, Mystique, or Sabretooth using the flashing shots assigned by each Battle. Simultaneously build toward Ninja Multiball by locking 3 balls at the right ramp. <strong>Ninja Multiball stacks into Battles</strong> — this is your best scoring window.",
        },
        {
          num: "Phase 3 · Multiball",
          title: "Stack Multiball with an Active Battle",
          body: "<strong>When Ninja Multiball starts, keep ripping the left ramp and right ramp for jackpots.</strong> If a Battle is running simultaneously, every jackpot also scores Battle damage — the stacking is where the big scores come from. Don't panic — trap one ball on the left flipper and continue shooting the ramps with the other. Controlled multiball play vastly outscores frantic ball-chasing.",
        },
      ],
      safeShots: [
        { name: "Left Ramp (Katana)", desc: "Your primary and safest shot all game. Clean feed back to the left flipper. Advance Battles/Quests and build combos — this ramp does it all." },
        { name: "Left Spinner", desc: "Ripping the spinner from the right flipper is safe and fast-scoring. Passively builds toward Disco Multiball (60 spins). Very satisfying shot with a reliable return." },
        { name: "Right Orbit", desc: "Key shot to advance the Chimichanga Truck. Shoot it to light orange chimichanga collection shots at major targets. Also used in the MXV and Ninjapocalypse combos for big points." },
      ],
      avoidShots: [
        { name: "Inner Loop (under pressure)", desc: "The inner loop is fast and the ball return is quick. Only attempt it when you're settled and have a controlled ball — not during multiball chaos or after a bumper eject." },
        { name: "Risky mode-specific shots", desc: "Some story modes assign difficult standup or combo shots as their objectives. If the assigned shot is too risky, keep shooting the Katana ramp anyway — partial mode progress is still valuable." },
      ],
      tips: [
        { head: "Chimichanga progress is persistent", body: "Chimichanga progress (punch card) carries between balls. Every chimichanga you collect now still counts on your next ball. Shoot the right orbit to advance the truck, then hit the lit orange shots — each one fills the punch card toward Quest start." },
        { head: "Complete DEAD every ball", body: "Hitting all four DEAD standup targets lights a Battle at the scoop. Battles are your primary mode-based scoring — completing Juggernaut, Mystique, and Sabretooth unlocks Sauron Multiball." },
        { head: "Spinner lane trapping", body: "After a left ramp, the ball can be caught with a right-flipper trap. From there, shoot the left spinner lane for a controlled, high-value burst. Every spin builds toward Disco Multiball at 60 spins." },
        { head: "Stack Ninja Multiball with a Battle", body: "Ninja Multiball explicitly stacks into Battles and Quests. Try to lock the first Ninja ball while a Battle is running — the combined window of multiball jackpots + Battle damage is the biggest scoring opportunity in the game." },
      ],
      mistakes: [
        "Not shooting the right orbit to advance the Chimichanga Truck — Quest progress is persistent and compounds across balls.",
        "Forgetting to hit DEAD targets — Battles won't start at the scoop unless DEAD is completed or a Battle is already lit.",
        "Playing the U-turn / inner loop recklessly — the ball returns fast and a mishit can feed the center drain.",
        "Panicking during multiball and losing all balls without collecting jackpots — trap one ball and shoot calmly.",
        "Tilting when a ball drains during an active Quest — chimichanga progress carries, so keep calm and continue next ball.",
      ],
    },

    hotspots: [
      { x:20, y:15, type:"key",   label:"KR", name:"Katana Ramp (Left)",          body:"<strong>Your primary shot all game.</strong> Smooth, fast, feeds cleanly back to the left flipper. Every ramp shot advances the current Battle or Quest. Loop this relentlessly." },
      { x:73, y:20, type:"key",   label:"RR", name:"Right Ramp (Ninja Lock)",     body:"<strong>Lock 3 balls here for Ninja Multiball.</strong> Locks are lit by default at game start; relight by completing POOL targets. Also the target for the Super Skill Shot (hold left flipper, shoot right ramp for 5M+). Jackpots here during Ninja Multiball." },
      { x:16, y:34, type:"key",   label:"~",  name:"Left Spinner (Disco)",        body:"Left-side spinner. <strong>Ripping it builds toward Disco Multiball</strong> (60 spins). On a controlled ball from the right flipper, aim left-center to rip the spinner. One of the best points-per-shot opportunities on the machine." },
      { x:75, y:35, type:"key",   label:"RO", name:"Right Orbit (Chimichanga Truck)", body:"<strong>Shoot this to advance the Chimichanga Truck</strong>, which lights orange chimichanga shots at major targets. Collect chimichangas to fill your Quest punch card. Also part of the MXV combo (right orbit → right ramp) for 12.5M+." },
      { x:50, y:20, type:"safe",  label:"IL", name:"U-Turn / Inner Loop",         body:"Loop shot through the upper center. Can score the Colossal Jackpot (2 u-turn shots qualify it at the target). <strong>Ball returns very fast</strong> — only attempt from a controlled position. Don't force it during chaotic play." },
      { x:42, y:52, type:"key",   label:"OOF", name:"OOF / DEAD / POOL Drop Targets", body:"<strong>OOF drops expose the Lil' Deadpool standup target.</strong> DEAD targets (left side) light a Battle at the scoop. POOL targets (right side) relight a Ninja Multiball lock. Complete all of DEADPOOL to light Mystery at the scoop." },
      { x:55, y:20, type:"info",  label:"↑",  name:"Pop Bumpers",                 body:"Upper bumper cluster. Passive scoring — every hit lights major shots blue for a Ninja Star. Ninja Stars increase Ninja Multiball jackpot values. Ramp exits feed here; returns can be unpredictable." },
      { x:12, y:80, type:"avoid", label:"!",  name:"Left Outlane",                body:"Direct drain. Left-side shots that go wide of the ramp entrance can trickle here. Always confirm you have the left ramp angle locked in before shooting — don't spray." },
      { x:87, y:80, type:"avoid", label:"!",  name:"Right Outlane",               body:"Right outlane catches fast returns from the right ramp and U-turn. After any right-side shot, be positioned and ready before the ball comes back down. The left outlane also qualifies Regeneration ball save every 3 DEADPOOL target completions." },
    ],
  },

  /* ─── TMNT ─────────────────────────────────────────────── */
  tmnt: {
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
  },

  /* ─── BLACK KNIGHT: SWORD OF RAGE ──────────────────────── */
  bksor: {
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
  },


  /* ─── IRON MAIDEN: LEGACY OF THE BEAST ─────────────────── */
  ironmaiden: {
    name: "Iron Maiden: Legacy of the Beast",  sub: "2018 · Stern · Spike 2",
    tagline: "Eddie Battles · Soul Shards & Power Features",
    image: "images/iron-maiden.png",
    difficulty: "Medium", diffClass: "diff-medium", era: "Modern",

    info: {
      stats: [
        { label: "Manufacturer", value: "Stern Pinball" },
        { label: "Year",         value: "2018" },
        { label: "Designer",     value: "Keith Elwin" },
        { label: "Platform",     value: "Spike 2 / LCD" },
        { label: "Multiball",    value: "Trooper (3-ball), Mummy, Cyborg" },
        { label: "Theme",        value: "Iron Maiden band / Legacy of the Beast mobile game" },
      ],
      theme: "Keith Elwin's debut design for Stern. Players battle as Eddie through 5 themed modes — Aces High, Fear of the Dark, Rime of the Ancient Mariner, Hallowed Be Thy Name, and Flight of Icarus — then face 2 Minutes to Midnight and the Number of the Beast wizard mode. Features three multiballs, Soul Shards, Eddie Cards, and the Run to the Hills 6-ball super wizard.",
      features: [
        { name: "Eddie Battles (5 Modes)", desc: "Spell E-D-D-I-E at white arrow shots to qualify a Battle at the Pharaoh center ramp. 5 battles: Aces High (2-ball), Fear of the Dark, Rime of the Ancient Mariner (2-ball), Hallowed Be Thy Name, Flight of Icarus. Complete all 5 to unlock the 6th: 2 Minutes to Midnight." },
        { name: "Soul Shards", desc: "Win any Eddie Battle and the bullseye target lights for 10 seconds to collect a Soul Shard — a hurry-up worth 20% of battle score × 2 or 3 based on position. Missing the 10-second window loses the shard entirely." },
        { name: "Power Features", desc: "Make shots repeatedly to activate Power Features (Spinners, Orbits, Ramps, Targets, Bumpers). Complete all 5 to qualify Cyborg Multiball. Each completed feature builds the Power Jackpot at the Orb target." },
        { name: "Trooper Multiball (3-ball)", desc: "Complete drop targets twice to light lock, then lock 3 balls at the orbits (left orbit + right loop) for 3-ball multiball. All shots lit for jackpots. Collect 3 jackpots → Super Jackpot. Complete drops during multiball → bullseye cannon shot for bonus jackpots + add-a-ball." },
        { name: "Mummy Multiball", desc: "Hit the Sarcophagus captive ball twice to light the Mummy Lock. Lock a ball, then spell MUMMY (5 more captive ball hits) to start multiball. Jackpots via switch hit accumulation at the captive ball. Spelling MUMMY again → Super Jackpot at bullseye." },
        { name: "Eddie Cards (4 Cards)", desc: "Earn Eddie Cards from Mummy, Cyborg, Trooper multiballs, and 2 Minutes to Midnight. Collect all 4 to qualify Number of the Beast wizard mode. Level 2 cards (harder to earn) are retained after failed NoBeast attempts." },
        { name: "Tomb Treasures", desc: "10 objectives light the Tomb (right loop on Pro) for a cumulative award sequence: points, super slings, Power Jackpot boosts, extra ball, revive. Collecting all 10 starts Run to the Hills — the 6-ball super wizard mode." },
        { name: "Left Spinner (Fear of the Dark)", desc: "During the Fear of the Dark Eddie Battle, a spinner rip scores massive points based on the lit shot value. Also advances Power Spinner feature. Rip aggressively when controlled." },
      ],
      scoring: [
        { key: "Skill Shot (soft plunge)",     val: "1M + 1 EDDIE letter + 5s ball save" },
        { key: "Super Skill Shot",             val: "5M + Playfield X multiplier + 10s ball save" },
        { key: "Soul Shard hurry-up",          val: "20% of battle score × 2 or 3" },
        { key: "Power Jackpot (Orb target)",   val: "Built by Power Features + Eddie Cards + Mystery awards" },
        { key: "Trooper Super Jackpot",        val: "Escalates per jackpot multiplier round (1×–5×)" },
        { key: "2 Minutes to Midnight SJ",     val: "Sum of all 5 mode shots (up to 2× multiplier)" },
      ],
      rules: [
        "<strong>Spell EDDIE at white arrow shots</strong> to qualify a Battle at the Pharaoh center ramp — you're spotted 2 free EDDIE letters toward your first mode.",
        "After winning a Battle, <strong>shoot the bullseye within 10 seconds</strong> for the Soul Shard hurry-up. Missing it wastes a major scoring opportunity.",
        "Stack single-ball Eddie Battles with <strong>Trooper or Mummy Multiball</strong> for maximum combined scoring — 2-ball modes cannot be stacked.",
        "<strong>Super Skill Shot:</strong> hold left flipper, inner orbit back to upper flipper, shoot the Super Jackpot target = 5M + Playfield X.",
        "<strong>Power Jackpot</strong> at the Orb target is the biggest non-mode score available. Build it with Power Features and Eddie Cards, then cash out with Playfield X active.",
      ],
      benchmarks: [
        { score: "500M+",  label: "Excellent — multiple Battles, multiballs, Soul Shards collected" },
        { score: "150M+",  label: "Solid — 2–3 Battles completed with Soul Shards" },
        { score: "40M+",   label: "Getting started — consistent Battle qualification" },
      ],
      resources: [
        { name: "IPDB Entry",            url: "https://www.ipdb.org/machine.cgi?id=6534",                            icon: "🎯" },
        { name: "Pinside Game Page",     url: "https://pinside.com/pinball/machine/iron-maiden-le",                  icon: "🕹️" },
        { name: "Tilt Forums Rulesheet", url: "https://tiltforums.com/t/iron-maiden-pinball-rulesheet/3787",          icon: "📖" },
      ],
    },

    strategy: {
      skillShot: {
        name: "Super Skill Shot (5M + Playfield X)",
        value: "5M + Playfield X multiplier + 10s ball save",
        desc: "Hold the left flipper before plunging and let the ball travel the inner orbit back down to the upper flipper. Then shoot the Super Jackpot target for 5M + a Playfield X multiplier + 10 seconds of ball save. Very reliable once you identify the target, and Playfield X boosts your first shots significantly. The basic soft plunge (1M + 1 EDDIE letter + 5s ball save) is a fine alternative — a free EDDIE letter is never wasted.",
      },
      multiball: [
        { name: "Trooper Multiball", balls: 3,
          locks: "Complete the drop targets twice to light lock. Then shoot the green arrow orbit shots (left orbit and right loop) to virtually lock 3 balls.",
          start: "Lock 3 balls at the orbits to start Trooper Multiball.",
          jackpots: "All shots lit blue for 1× jackpots. Collect 3 jackpots → Super Jackpot at the Super Jackpot target. Each SJ relights jackpots at +1× (green, yellow, orange, red progression). Complete drops during multiball to light the bullseye cannon for bonus jackpots + add-a-ball.",
          tip: "Trooper is your most consistently attainable multiball. Stack a single-ball Eddie Battle inside Trooper for the biggest scoring window — Battle mode jackpots carry the Trooper multiplier." },
        { name: "Mummy Multiball", balls: 2,
          locks: "Hit the captive ball (Sarcophagus) twice to light the Mummy Lock at the center ramp (Pro). Lock a ball, then hit the captive ball 5 more times to spell MUMMY.",
          start: "Captive ball hit after MUMMY is spelled starts Mummy Multiball.",
          jackpots: "Jackpots at the captive ball via switch hit accumulation (10 hits per jackpot). Each jackpot spots a MUMMY letter. Spell MUMMY → Super Jackpot at the bullseye (× 2 or 3 based on target position hit).",
          tip: "Build MUMMY with casual captive ball hits throughout the game. Once the lock lights, prioritize it. Stacks freely with single-ball Eddie Battles." },
      ],
      goal: "<strong>Spell EDDIE at white arrows → start Eddie Battles at the Pharaoh ramp → win battles for Soul Shards (bullseye within 10 sec) → stack with Trooper Multiball → build Power Features for the Power Jackpot.</strong> Every completed Battle brings you closer to 2 Minutes to Midnight and the Number of the Beast wizard mode.",
      phases: [
        {
          num: "Phase 1 · Early Game",
          title: "Earn EDDIE Letters + Qualify First Battle",
          body: "<strong>Start with the Super Skill Shot for Playfield X and 5M.</strong> Then shoot white arrow shots to spell EDDIE — you're spotted 2 free letters. Left ramp, orbits, and right loop are your targets. When EDDIE is spelled, the Pharaoh center ramp lights — shoot it to start your first Battle. Use the left spinner before EDDIE is fully spelled to change the upcoming Battle if needed.",
        },
        {
          num: "Phase 2 · Battles + Trooper Multiball",
          title: "Win Battles and Collect Soul Shards",
          body: "<strong>Work through Eddie Battles while building toward Trooper Multiball</strong> (complete drop targets twice, then lock 3 orbit shots). Stack single-ball Battles inside Trooper for big combined scoring. After each Battle win, immediately shoot the bullseye for the Soul Shard — don't miss the 10-second window.",
        },
        {
          num: "Phase 3 · Power Features + Eddie Cards",
          title: "Power Jackpot and Number of the Beast",
          body: "<strong>Build all 5 Power Features</strong> to qualify Cyborg Multiball. Each completed Feature adds to the Power Jackpot — cash it out at the Orb with Playfield X active. Collect Eddie Cards from all 4 sources (Mummy, Cyborg, Trooper, 2MTM) for the Number of the Beast wizard mode (100M). 10 Tomb Treasures → Run to the Hills 6-ball super wizard.",
        },
      ],
      safeShots: [
        { name: "Left Ramp", desc: "Most consistent shot on the table. Feeds back to the left flipper cleanly. Advances Power Features, contributes to EDDIE progress, and is a jackpot shot during Trooper. Make this your default." },
        { name: "Right Loop (Tomb on Pro)", desc: "Reliable orbit shot that collects Tomb Treasures on Pro. Also a Trooper lock shot and loop jackpot target. Safe from the right flipper with a clean return." },
        { name: "Left/Right Orbits", desc: "Wide orbit shots that are Trooper lock shots. Contribute to Power Features and EDDIE letters. Reliable from both flippers." },
      ],
      avoidShots: [
        { name: "Captive ball — rushed", desc: "The Sarcophagus captive ball can rebound unpredictably off-center. Build MUMMY slowly and deliberately — don't rush it during risky game states." },
        { name: "Shooting for the Bullseye outside key windows", desc: "The bullseye is your Soul Shard shot (10s after a Battle win), Trooper cannon shot, and Mummy SJP. Outside these windows it scores minor points. Focus on EDDIE letters and ramps instead." },
      ],
      tips: [
        { head: "Soul Shard timing is everything", body: "Winning a Battle lights the bullseye for exactly 10 seconds. This is worth 20–40% of your Battle score. Don't get distracted — immediately aim for the bullseye when the Battle ends. Missing it is one of the costliest mistakes on this table." },
        { head: "Playfield X multiplier", body: "Activate Playfield X (Super Skill Shot, or via WAR lane completions in the menu) then cash out the Power Jackpot at the Orb. Playfield X applies to ALL scoring including jackpots — activate it before any major cash-out." },
        { head: "Stack Battles with Trooper", body: "Trooper Multiball can stack with any single-ball Eddie Battle. Start the Battle first, then drop into Trooper while the Battle is active. Battle mode jackpots benefit from Trooper's escalating multipliers." },
        { head: "EDDIE letters and white arrows", body: "White arrows change position after each hit. Getting harder each Battle (fewer arrows lit, no spotted letters after first mode). Prioritize the easiest-to-hit lit white arrow each time to spell EDDIE as quickly as possible." },
      ],
      mistakes: [
        "Missing the Soul Shard window (10s after a Battle win) — one of the highest-value opportunities in the game.",
        "Ignoring the Super Skill Shot — 5M and a Playfield X at the start of every ball is free money worth pursuing reliably.",
        "Starting a 2-ball Eddie Battle (Aces High or Rime of the Ancient Mariner) while Trooper or Mummy Multiball is running — these cannot be stacked.",
        "Letting the Power Jackpot sit uncollected at the Orb — always cash it out with Playfield X active for maximum return.",
        "Neglecting drop targets — they're the gateway to Trooper Multiball. Work them passively alongside your other shot priorities.",
      ],
    },

    hotspots: [
      { x:18, y:22, type:"key",   label:"LR", name:"Left Ramp",               body:"<strong>Your primary safe shot all game.</strong> Advances EDDIE letters at white arrows, Power Features, and is the jackpot shot during Trooper and Mummy Multiball. Feeds back cleanly to the left flipper. Learn this shot and trust it." },
      { x:50, y:18, type:"key",   label:"PH", name:"Pharaoh Center Ramp (Battle Start)", body:"<strong>Shoot when EDDIE is fully spelled to start an Eddie Battle.</strong> Also the Mummy Lock on the Pro. During 2 Minutes to Midnight, all 5 mode shots must be completed before this shot opens for the Super Jackpot. Your most critical mode-start shot." },
      { x:80, y:18, type:"safe",  label:"RL", name:"Right Loop (Tomb on Pro)", body:"Wide loop shot. On Pro, this is the <strong>Tomb Treasure collection shot</strong>. Also a Trooper lock target and loop jackpot location. Reliable from the right flipper." },
      { x:15, y:32, type:"key",   label:"SP", name:"Left Spinner",             body:"<strong>Critical during Fear of the Dark Eddie Battle</strong> — a lit spinner rip scores massive points. Also advances Power Spinner feature and changes the upcoming Eddie Battle before EDDIE is fully spelled. Rip aggressively when controlled." },
      { x:50, y:38, type:"key",   label:"BU", name:"Bullseye Target",          body:"<strong>The Soul Shard shot</strong> — lights for 10 seconds after every Eddie Battle win. Worth 20–40% of your battle score × 2 or 3. Also the Trooper cannon (after completing drops in multiball) and Mummy Super Jackpot. <strong>Never miss the 10-second window.</strong>" },
      { x:68, y:48, type:"info",  label:"CB", name:"Sarcophagus Captive Ball", body:"Hit twice to light Mummy Lock, then spell MUMMY (5 more hits) to qualify Mummy Multiball. During multiball, jackpots are earned here via switch accumulation (10 hits per jackpot). Spell MUMMY again for the Super Jackpot at the bullseye." },
      { x:42, y:55, type:"info",  label:"DT", name:"Drop Targets",             body:"Complete twice to light Trooper lock. Complete during Trooper Multiball for the cannon shot (bullseye → bonus jackpots + add-a-ball). Always hit opportunistically — they reset when lit." },
      { x:70, y:22, type:"info",  label:"↑",  name:"Pop Bumpers (Upper Right)", body:"Passive bumper scoring. Contributes to Power Bumpers feature. Also scores during Aces High — Mystery Award during Aces High can add a ball." },
      { x:10, y:82, type:"avoid", label:"!",  name:"Left Outlane",             body:"<strong>Primary drain risk.</strong> Left-side shots that go wide are gone. Always be on the left flipper to catch after a ramp or orbit shot that doesn't make it up cleanly." },
      { x:88, y:82, type:"avoid", label:"!",  name:"Right Outlane",            body:"Fast right-side drains after right loop returns. Be positioned to recover. Revive feature (Tomb Treasure #6) saves the ball once — don't waste it prematurely." },
    ],
  },

  /* ─── THE UNCANNY X-MEN ────────────────────────────────── */
  xmen: {
    name: "The Uncanny X-Men",  sub: "2024 · Stern · Spike 2",
    tagline: "Days of Future Past · Missions, Sentinels & Berzerker",
    image: "images/uncanny-x-men.webp",
    difficulty: "Hard", diffClass: "diff-hard", era: "Modern",

    info: {
      stats: [
        { label: "Manufacturer", value: "Stern Pinball" },
        { label: "Year",         value: "2024" },
        { label: "Designer",     value: "Jack Danger" },
        { label: "Platform",     value: "Spike 2 / LCD" },
        { label: "Multiball",    value: "Sentinel, Save the City, To Me My X-Men, Berzerker" },
        { label: "Theme",        value: "Marvel Comics — Days of Future Past story arc" },
      ],
      theme: "Jack Danger's third retail design, based on the iconic 'Days of Future Past' X-Men comics arc. Players complete 8 missions, escape to the future by defeating Sentinels, and earn character perks. Features the Danger Room training system, 4 multiballs (including the Berzerker endgame multiball), and Bishop's action-button assist mechanic.",
      features: [
        { name: "Missions (8 Total)", desc: "Hit white shots to qualify missions, then shoot a blue ramp (midtown center ramp or subway right loop) to start one. 4 easy missions (Bishop, Wolverine, Gambit, Professor X) and 4 challenging ones (Rogue, Storm, Colossus, Magneto). Completing a mission triggers The Future." },
        { name: "The Future (Sentinel Mode / Escape Nimrod)", desc: "After any mission, enter The Future. Easy missions: defeat 6 Sentinels at spawned shots within 40 seconds. Challenging missions (Escape Nimrod): make 3 red shots then escape via center or right loop within 35 seconds. Escaping awards a character perk." },
        { name: "Danger Room Training", desc: "During single-ball, non-mode play: hit the spinner, standup targets, bumpers, and danger room exit ramp to advance Danger Room levels. Level 1 (green) doubles ALL mission scoring for the rest of the game. Levels 2–3 make The Future easier. Progress carries ball-to-ball until Level 1." },
        { name: "Sentinel Multiball", desc: "Hit the giant Sentinel head 3 times (+2 per multiball) to spawn it, then deplete its health to open its mouth. Defeat it to start multiball. All shots lit for jackpots. Danger room exit ramp upgrades jackpots to 2× (orange) then 3× (red). 4 jackpots → Super Jackpot at the Sentinel head." },
        { name: "Save the City Multiball", desc: "Hit each of 6 primary ramp/loop shots 3 times to qualify. During: 5 city areas lit for jackpots via their specific switch types. Collect all 5 → X-Jet ramp → danger room spinner for Super Jackpot (1M per spin × 15 seconds)." },
        { name: "To Me, My X-Men Multiball", desc: "Use Cerebro skill shots or hit Nightcrawler targets 5 times to light Cerebro manually. Advance it 3 times by shooting uptown or highway ramp while lit. During: 6 blue shots for jackpots → Super Jackpot at left ramp (min ~5M). 2× SJ at danger room exit ramp." },
        { name: "Berzerker Multiball", desc: "Defeat 35 total Sentinels (across Sentinel Multiball, The Future, and mission shots) to light the uptown ramp. 3-ball multiball where all shots score jackpots at 5M. Every 5 jackpots → X-Jet ramp for Super Jackpot (sum of those 5 jackpots, increasing per SJ)." },
        { name: "Bishop Action Button", desc: "Hit Bishop's bumper (left lower bumper) enough times to charge the action button. Press it during a mission to spot the most valuable unlit shot. An enormous shortcut — especially for challenging missions. Bishop's perk from completing his mission reduces the recharge requirement." },
      ],
      scoring: [
        { key: "Danger Room Level 1 (green)",    val: "Doubles ALL mission shot scoring permanently" },
        { key: "Sentinel Multiball SJ",          val: "Total of all jackpots in current wave (2× at open mouth)" },
        { key: "Save the City spinner SJ",       val: "1M per spin × 15 seconds (can reach 50M+)" },
        { key: "To Me My X-Men SJ",              val: "~5M+ (total of 6 jackpots), 2× at danger room ramp" },
        { key: "Berzerker SJ",                   val: "Sum of 5 jackpots (5M base each, increases per SJ)" },
        { key: "Bishop action button",           val: "Spots the most valuable shot during any active mission" },
      ],
      rules: [
        "Hit white shots to qualify missions, then start one at the <strong>midtown (center) or subway (right loop) ramp</strong>. Use flippers to cycle the mission selection.",
        "<strong>Get Danger Room to Level 1 (green) BEFORE starting your first mission</strong> — it doubles all mission scoring for the rest of the game.",
        "After each mission, enter <strong>The Future</strong> — defeat 6 Sentinels (easy) or make 3 red shots and escape (challenging) to earn a character perk.",
        "<strong>Bishop's action button</strong> spots the most valuable mission shot — charge it between missions by hitting Bishop's bumper and save it for the hardest shot in any mode.",
        "Defeat 35 total Sentinels across all modes to light the uptown ramp for <strong>Berzerker Multiball</strong> — the highest-value multiball on the table.",
      ],
      benchmarks: [
        { score: "500M+",  label: "Excellent — Berzerker, 6+ missions, Danger Room Level 3" },
        { score: "150M+",  label: "Solid — 3–4 missions, Sentinel Multiball, Danger Room Level 1" },
        { score: "40M+",   label: "Getting started — first mission + Future escape" },
      ],
      resources: [
        { name: "IPDB Entry",            url: "https://www.ipdb.org/machine.cgi?id=6779",                         icon: "🎯" },
        { name: "Pinside Game Page",     url: "https://pinside.com/pinball/machine/the-uncanny-x-men-le",         icon: "🕹️" },
        { name: "Tilt Forums Rulesheet", url: "https://tiltforums.com/t/the-uncanny-x-men-rulesheet/9100",        icon: "📖" },
      ],
    },

    strategy: {
      skillShot: {
        name: "Cerebro Skill Shot (left ramp)",
        value: "One free step toward To Me My X-Men Multiball + bonus X",
        desc: "There are 4 skill shots. The best is the Cerebro skill shot — shoot the left ramp off the plunge to spot one advancement toward To Me, My X-Men Multiball. With 3 Cerebro advances needed to start the multiball, taking this skill shot every ball means you qualify To Me My X-Men after just 3 balls of skill shots, for free. Alternatively: shoot the X-Jet into the X-Mansion ramp for +3 bonus X; repeat the downtown shot up to 5 times for +15 seconds of ball save; or soft plunge into the lane near the highway ramp for 200k + 1 bonus X.",
      },
      actionButton: {
        name: "Bishop — Spot the Most Valuable Shot",
        when: "Action button flashes red during any active mission",
        desc: "Hit the <strong>left pop bumper</strong> to charge Bishop's power (up to 3 uses can be stacked). When the button flashes red during a mission, <strong>press it to instantly spot the most valuable lit shot</strong> on the playfield — an enormous shortcut for completing hard missions. Note: Bishop never spots the Sentinel head shot or any Danger Room shot, and is <strong>disabled during Escape Nimrod</strong>. During multiball, bumper hits required to charge Bishop are doubled (unless you've earned Bishop's perk from completing Rescue the Innocent + Future escape, which reduces the requirement). <strong>Rogue perk (hold the button, green flash):</strong> After earning Rogue's perk from Sentinel Facility Raid + Future escape, you can hold the action button during any multiball to add a ball — once per ball.",
      },
      multiball: [
        { name: "Sentinel Multiball", balls: 3,
          locks: "Hit the giant Sentinel head 3 times (+2 per multiball) to spawn it. Deplete health with more head shots to open its mouth, then defeat it.",
          start: "Defeat the giant Sentinel. A Fastball Special combo (two-shot sequence) advances the Sentinel to its next stage immediately.",
          jackpots: "All shots lit yellow for 1× jackpots. Danger room exit ramp → 2× (orange) → 3× (red). After 4 jackpots: SJ at Sentinel head (2× with shot to open mouth). Each wave requires 2 more jackpots than before, up to 6 max.",
          tip: "Shoot the Danger Room exit ramp early in multiball to upgrade jackpots to 2× before cashing in. Unlocked shots without jackpots kill a Sentinel toward Berzerker." },
        { name: "To Me, My X-Men Multiball", balls: 3,
          locks: "Take the Cerebro skill shot each ball (or hit Nightcrawler targets 5 times manually). Advance Cerebro 3 times by shooting uptown or highway ramp while lit.",
          start: "Third Cerebro advance starts the multiball. Three Cerebro skill shots across 3 balls qualify it automatically.",
          jackpots: "Hit 6 blue shots for jackpots (same shot can't repeat consecutively). Every 6th jackpot → SJ at left ramp (min ~5M). 2× SJ at danger room exit ramp. Bonus for summoning all 12 X-Men before a SJ.",
          tip: "The most consistently attainable multiball — three Cerebro skill shots qualify it with no extra effort. Stack it with a mission for massive combined value. Danger room exit ramp 2× SJ is the highest single shot in this multiball." },
      ],
      goal: "<strong>Get Danger Room to Level 1 before any mission → complete easy missions first → escape The Future for perks → stack multiballs with missions → accumulate 35 Sentinel kills for Berzerker Multiball.</strong> Bishop's action button is your most powerful in-game tool — always keep it charged.",
      phases: [
        {
          num: "Phase 1 · Early Game",
          title: "Danger Room First — Always",
          body: "<strong>Before starting any mission, advance Danger Room to Level 1 (green).</strong> During single-ball play between missions, hit the danger room spinner, standup targets, bumpers, and the exit ramp until the green light activates. This doubles ALL mission scoring for the rest of the game. Danger Room progress carries ball-to-ball. Take the Cerebro skill shot every ball to passively bank To Me My X-Men progress.",
        },
        {
          num: "Phase 2 · Easy Missions + Future Escapes",
          title: "Safe Perks from Easy Missions",
          body: "<strong>Start with easy missions (Bishop, Wolverine, Gambit, Prof. X) for reliable perks.</strong> Bishop's perks reduce bumper requirements; Wolverine's extend all ball saves; Gambit's bumper gives 3× mode shot value. After each mission, enter The Future — defeat 6 Sentinels to escape and collect the perk. Every Sentinel killed in The Future counts toward Berzerker (35 total).",
        },
        {
          num: "Phase 3 · Multiballs + Berzerker",
          title: "Stack Multiballs with Missions",
          body: "<strong>Multiballs stack with missions if the mission starts first.</strong> Sentinel Multiball's danger room ramp 3× jackpots combined with Danger Room Level 1 doubled mission scoring is enormous. Build toward 35 Sentinel kills throughout play for Berzerker Multiball — the table's best at 5M per jackpot base with escalating Super Jackpots.",
        },
      ],
      safeShots: [
        { name: "Midtown Center Ramp", desc: "One of two mission start ramps. Also a jackpot shot in all multiballs. Clean, reliable from left flipper — the backbone of your game. Use this as your primary safe shot in all game states." },
        { name: "Downtown Left Loop", desc: "Left-side loop shot. Scores in missions and multiball jackpots. Fast and reliable from the right flipper. Part of the Time Loop combo skill shot (5× for +15s ball save)." },
        { name: "Uptown Left Ramp", desc: "Super Jackpot shot during To Me My X-Men and Berzerker. Advances Cerebro when lit. Reliable from right flipper — the highest-value shot in Berzerker Multiball." },
      ],
      avoidShots: [
        { name: "Challenging Missions without Bishop charged", desc: "Challenging missions (Rogue, Storm, Colossus, Magneto) have strict moving or timed shot requirements. Without Bishop's action button charged, missing their targets is very costly. Only start challenging missions if Bishop is ready or Danger Room is at Level 2+." },
        { name: "Starting missions before Danger Room Level 1", desc: "Without Danger Room Level 1, mission scoring is at base value. Spending 2–3 shots pre-mission to activate it nearly doubles all subsequent mission output — skip this and you leave enormous points on the table." },
      ],
      tips: [
        { head: "Danger Room — first, every game", body: "Danger Room Level 1 doubles all mission shot scoring permanently. It needs spinner, standup targets, bumpers, and exit ramp hits during single-ball non-mode play. It's the most important 30 seconds at the start of any game of X-Men. Don't skip it, ever." },
        { head: "Bishop's action button", body: "Hit Bishop's bumper (lower-left) to charge the action button. When it flashes green during a mission, pressing it spots the most valuable unlit shot. Save it for challenging missions or for the hardest shot in any mode. Bishop mission perk reduces the recharge requirement." },
        { head: "Danger Room exit ramp in Sentinel Multiball", body: "During Sentinel Multiball, the danger room exit ramp upgrades jackpots from 1× to 2× to 3×. Always shoot it early — before collecting jackpots. Tripling jackpot values is the single best move during Sentinel Multiball." },
        { head: "Berzerker progress is passive", body: "Every Sentinel killed in The Future, Sentinel Multiball, and the Sentinel Facility Raid mission counts toward the 35 for Berzerker. Play your missions and multiballs normally and it will arrive mid-game without dedicated effort." },
      ],
      mistakes: [
        "Starting missions before Danger Room Level 1 — base mission scoring is roughly half what it would be with Level 1 active.",
        "Wasting Bishop's action button on easy shots — save it for the hardest shot in challenging missions (Genosha's green Toad shots, Mayhem in Midtown's flanking shots).",
        "Not escaping The Future — failing to defeat 6 Sentinels wastes the perk and leaves you in single-ball with no reward. Know your mode's escape conditions before starting.",
        "Ignoring the Danger Room exit ramp in Sentinel Multiball — collecting jackpots at 1× instead of 2× or 3× is a massive efficiency loss.",
        "Starting Save the City Multiball without knowing the switch types — each city jackpot only activates via specific switches (bumpers for Highway, spinner for Subway, targets for Midtown, etc.).",
      ],
    },

    hotspots: [
      { x:78, y:20, type:"key",   label:"XJ", name:"X-Jet Ramp",              body:"<strong>Major jackpot shot in Save the City and Berzerker Multiball.</strong> One of 6 shots that must be hit 3× to qualify Save the City. Skill shot sequence: X-Jet → X-Mansion ramp = +3 bonus X. Reliable from the left flipper." },
      { x:12, y:20, type:"safe",  label:"DT", name:"Downtown Left Loop",      body:"Wide left-side loop. One of 6 Save the City qualifying shots. Fast and reliable from the right flipper. Part of the Time Loop Combo skill shot (5× for +15s ball save)." },
      { x:20, y:25, type:"key",   label:"UP", name:"Uptown Left Ramp",        body:"<strong>Super Jackpot shot in To Me My X-Men and Berzerker Multiball.</strong> Advances Cerebro when lit. The highest-value shot during Berzerker — shoot it for every Super Jackpot. One of 6 Save the City qualifying shots." },
      { x:48, y:20, type:"key",   label:"MT", name:"Midtown Center Ramp",     body:"<strong>One of two mission start ramps (blue arrow = choose mission here).</strong> Save the City qualifying shot. Jackpot in all multiballs. Your primary safe shot — always active and reliable." },
      { x:78, y:18, type:"safe",  label:"SB", name:"Subway Right Loop",       body:"Second mission start ramp (blue arrow). One of 6 Save the City qualifying shots. Also Escape Nimrod completion target. Fast loop from the left flipper." },
      { x:50, y:15, type:"key",   label:"SN", name:"Giant Sentinel Head",     body:"<strong>Hit 3× to spawn the giant Sentinel, then deplete health to start Sentinel Multiball.</strong> Super Jackpot scored here during multiball (2× into open mouth). Each hit also counts toward the 35-Sentinel Berzerker threshold." },
      { x:28, y:30, type:"key",   label:"DR", name:"Danger Room Exit Ramp",   body:"<strong>The most important shot during Sentinel Multiball</strong> — shoot it to upgrade jackpots from 1× to 2× (orange) then 3× (red). During single-ball, advances the Danger Room level (Level 1 doubles all mission scoring). Always hit this early in Sentinel Multiball." },
      { x:65, y:35, type:"info",  label:"BP", name:"Bishop Bumper",           body:"Hit enough to charge the action button. Pressing it during a mission <strong>spots the most valuable unlit shot.</strong> Bishop's perk (after completing Rescue the Innocent + Future escape) reduces hits required. Charge it between every mission." },
      { x:72, y:40, type:"info",  label:"GM", name:"Gambit Bumper",           body:"Hit 3× (or alley pass via right inlane) to activate <strong>2× on your next mode shot value.</strong> Gambit perk (after Smuggled Cargo + Future) upgrades to 3×. Activate before every mission start — it's a free score multiplier." },
      { x:10, y:82, type:"avoid", label:"!",  name:"Left Outlane",            body:"Left outlane drain. Hit the X-Mansion ball save targets near the outlane to light an outlane save (10 hits = Jean Grey perk). Keep shots centered and use controlled flipper technique." },
    ],
  },

  /* ─── DUNGEONS & DRAGONS: THE TYRANT'S EYE ─────────────── */
  dnd: {
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
  },

  /* ─── KING KONG: MYTH OF TERROR ISLAND ─────────────────── */
  kingkong: {
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
  },

  /* ─── POKÉMON ───────────────────────────────────────────── */
  pokemon: {
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
  },

};
