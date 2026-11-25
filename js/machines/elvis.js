  /* ─── ELVIS (STERN 2004) ─────────────────────────────────── */
MACHINES['elvis'] = {
    name: "Elvis",  sub: "2004 · Stern · Whitestar (DMD)",
    tagline: "Five Featured Hits · Gifts from E-L-V-I-S · Top 10 Countdown · TCB double scoring · Jailhouse Rock and Heartbreak Hotel multiballs · Graceland",
    image: "images/elvis.webp",
    difficulty: "Medium", diffClass: "diff-medium", era: "DMD",

    /* ── QUICK GUIDE (30–90 s read) ───────────────────────────── */
    quick: {
      goal: "Complete three tasks to light <strong>Graceland</strong> at the top saucer: start all five <strong>Featured Hits</strong> (song modes), collect all five <strong>Gifts from E-L-V-I-S</strong>, and finish the <strong>Top 10 Countdown</strong>. Use <strong>TCB</strong> double scoring on the big moments.",
      steps: [
        { title: "Featured Hits",
          body: "<strong>Jailhouse Rock</strong> (saucer left of the right ramp, multiball; J-A-I-L-B-R-E-A-K lights a ~10M super), <strong>Heartbreak Hotel</strong> (left ramp to the upper playfield, lock in the hotel; multiball), <strong>Hound Dog</strong> (hit the dog: switch frenzy), <strong>All Shook Up</strong> (left loop, left ramp, right ramp) and <strong>Blue Suede Shoes</strong> (inner loop from the upper right flipper)." },
        { title: "Gifts and Top 10",
          body: "Clear the <strong>E-L-V-I-S drop targets</strong>, then shoot the <strong>right loop into the top saucer</strong> for the gift (video mode, Gold Records, King of Rock and Roll, Light Extra Ball, ENCORE letter). Clear all lit blue notes at the five major shots to move up one place in the <strong>Top 10</strong>; the white standup spots one." },
        { title: "TCB and Scarf",
          body: "Complete <strong>T-C-B</strong> (possibly more than once; progress carries over) for 20 s of <strong>double scoring</strong>: start All Shook Up or a multiball inside it. K-I-N-G relights the <strong>Scarf</strong> target: add-a-ball in multiball, more time in modes, otherwise a note or a gift." },
      ],
      shots: [
        { name: "Right loop → top saucer", why: "Gifts, Graceland." },
        { name: "Jailhouse Rock saucer", why: "Multiball, jackpots, super." },
        { name: "Left ramp", why: "Heartbreak Hotel; Shook; notes." },
      ],
      avoid: [
        "Starting All Shook Up alone: if you can, leave the last of ALL/SHOOK/UP for when TCB or a multiball runs (the game spots UP on ball 2).",
        "The E-L-V-I-S drop skill shot: it often goes down the left outlane.",
      ],
      target: "Milestones (estimates): two Featured Hits and a gift = baseline. Both multiballs and a Jailbreak super = good. Graceland = great.",
    },

    info: {
      stats: [
        { label: "Manufacturer", value: "Stern" },
        { label: "Year",         value: "2004 (August)" },
        { label: "Design",       value: "Steve Ritchie" },
        { label: "Art",          value: "Jerry Vanderstelt, Kevin O'Connor" },
        { label: "Platform",     value: "Whitestar (DMD)" },
      ],
      theme: "Elvis Presley: a dancing Elvis figure, the Hound Dog that jumps, a jailhouse, a clear upper playfield with Heartbreak Hotel, and seven real Elvis recordings.",
      features: [
        { name: "Featured Hits", desc: "Hound Dog (about 6 dog hits, single-ball; 30 s frenzy from 50K a switch), Blue Suede Shoes (2, then 3… qualifying inner loops; 400K +50K per loop for 30 s), Heartbreak Hotel (1 lock first, then 3; 3-ball; hotel 2M +2M), Jailhouse Rock (saucer; 2 locks first; 3-ball; saucer jackpots 1M +1M; J-A-I-L-B-R-E-A-K → ~10M super), All Shook Up (left loop/left ramp/right ramp; 500K +100K for 30 s). Starting all five completes the task." },
        { name: "Gifts from E-L-V-I-S", desc: "Drop bank lights a gift at the top saucer (via the right loop): Flip Flip Dance Dance (rhythm video mode), Gold Records (2M +1M), The King of Rock and Roll (K-I-N-G targets 150K +50K), Light Extra Ball, ENCORE letter. Gifts come in a fixed order (left to right on the gift board) and can stack." },
        { name: "Top 10 Countdown", desc: "Blue notes lit at the five major shots; clearing them moves you up a place; reach No. 1 to complete. The white standup above the right outlane spots a note (lit at the start of each ball; the left ramp can relight it)." },
        { name: "TCB and Scarf", desc: "T-C-B = 20 s of double scoring (flasher on the backboard). K-I-N-G relights the Scarf target, whose award fits the moment (add-a-ball in multiball, more time in a mode, otherwise a note, a gift or an extra ball where enabled)." },
        { name: "Graceland and ENCORE", desc: "With all three tasks done and no mode running, the top saucer starts Graceland: shoot all five major shots for jackpots through the mansion rooms (Jungle, Pool, Music, TV and Trophy Room). ENCORE (letters from gifts and the mystery award) gives 30 s of 4-ball multiball after your game ends." },
      ],
      scoring: [
        { key: "Jailbreak super jackpot", val: "About 10M" },
        { key: "Heartbreak award",        val: "2M, +2M each" },
        { key: "Gold Records",            val: "2M +1M (max 10M)" },
        { key: "All Shook Up",            val: "500K +100K" },
        { key: "Skill shot",              val: "250K +50K (hands-free 2×)" },
      ],
      rules: [
        "Skill shot: plunge through the flashing WLVS lane (hands-free = double); the other is the lit E-L-V-I-S drop target (risky). The game also has super and secret skill shots (details unknown).",
        "WLVS lanes advance bonus X (up to 8×). Right ramp shots are Screaming Fans (2 after the left inlane); fans pay in the bonus.",
        "Right inlane lights the left loop to set up Blue Suede Shoes; the right-loop magnet holds the ball for the upper right flipper (on factory settings only while Blue Suede Shoes loops count).",
        "Bonus can be big (top 10 hits, fans, gold records × X): avoid tilt warnings late in a ball.",
        "Rule details here come from a 2004 review of prototype software and a cheatsheet; final values may differ.",
      ],
      benchmarks: [
        { score: "Graceland (estimate)",                  label: "Great game" },
        { score: "Both multiballs + Jailbreak super",     label: "Good game" },
        { score: "Two Featured Hits + a gift",            label: "Baseline" },
      ],
      resources: [
        { name: "Game Review: Playfield (Pinball News)", url: "https://www.pinballnews.com/games/elvis/index4.html", icon: "📰" },
        { name: "Game Review: Rules (Pinball News)", url: "https://www.pinballnews.com/games/elvis/index5.html", icon: "📰" },
        { name: "SDPC Cheatsheet",            url: "https://pinball.miraheze.org/wiki/Elvis", icon: "📄" },
        { name: "Stern Manual (PDF)",         url: "https://sternpinball.com/wp-content/uploads/2018/12/Elvis_Manual.pdf", icon: "📄" },
        { name: "Pinside Game Page",          url: "https://pinside.com/pinball/machine/elvis", icon: "🕹️" },
      ],
    },

    strategy: {
      skillShot: "Plunge through the flashing WLVS lane without changing it (hands-free = 2×). The drop-target skill shot is risky.",
      multiball: [
        { name: "Jailhouse Rock", balls: 3, locks: "Saucer left of the right ramp (2 locks first time).", start: "Last lock.", jackpots: "Saucer 1M +1M; loops/ramps spell JAILBREAK → ~10M super at the saucer.", tip: "In multiball, balls rolling in from the pops still collect the jackpot; for locks only direct shots from the front count (factory setting)." },
        { name: "Heartbreak Hotel", balls: 3, locks: "Left ramp → upper left flipper → shoot through the hotel door (open on factory settings; harder settings make you hit the hotel targets first). 1 lock the first time, then 3.", start: "Last lock.", jackpots: "Ball into the hotel: 2M +2M.", tip: "The door closes if the ball leaves the upper playfield." },
        { name: "ENCORE", balls: 4, locks: "Six ENCORE letters (gifts).", start: "After the game ends.", jackpots: "30 s of multiball.", tip: "Free points after your last ball." },
      ],
      goal: "<strong>Gifts (drops → right loop) → Featured Hits (stack with TCB) → Top 10 notes → Graceland.</strong>",
      phases: [
        { num: "Phase 1", title: "Gifts", body: "E-L-V-I-S drops, then the right loop to the top saucer." },
        { num: "Phase 2", title: "Featured Hits", body: "Both multiballs; All Shook Up and Hound Dog under TCB." },
        { num: "Phase 3", title: "Graceland", body: "Finish the Top 10 and start Graceland at the top saucer." },
      ],
      safeShots: [
        { name: "Right ramp", desc: "Feeds the right inlane; Screaming Fans." },
        { name: "Left ramp", desc: "Upper playfield; feeds the left inlane if you don't flip." },
      ],
      avoidShots: [
        { name: "Jailhouse saucer under pressure", desc: "The opening is barely wider than the ball; in multiball you can feed the pops instead." },
      ],
      tips: [
        { head: "Stack under TCB", body: "Double scoring applies to every mode and multiball." },
        { head: "Blue Suede Shoes", body: "Right inlane, then the left loop qualifies the inner loop; the magnet then holds the ball for the upper right flipper." },
        { head: "Video mode", body: "Flip Flip Dance Dance is skill-based and speeds up each time you play it: learn the timing." },
      ],
      mistakes: [
        "Ignoring the top saucer gifts: they are one of the three Graceland tasks.",
        "Tilting a big end-of-ball bonus.",
      ],
    },

    hotspots: [
      { x: 81, y: 17, type: "key",   label: "TS", name: "Top Saucer", body: "Gifts; Graceland." },
      { x: 78, y: 52, type: "key",   label: "RL", name: "Right Loop", body: "To the top saucer; blue notes." },
      { x: 63.5, y: 47.5, type: "key", label: "JR", name: "Jailhouse Rock Saucer", body: "Multiball; jackpots; super." },
      { x: 31, y: 51, type: "key",   label: "LR", name: "Left Ramp", body: "Heartbreak Hotel; Shook; notes." },
      { x: 72, y: 49.5, type: "key", label: "RR", name: "Right Ramp", body: "Up; Screaming Fans; notes." },
      { x: 22, y: 50, type: "key",   label: "LL", name: "Left Loop", body: "All; Blue Suede Shoes setup; notes." },
      { x: 18, y: 64, type: "key",   label: "DT", name: "E-L-V-I-S Drop Targets", body: "Light a Gift at the top saucer." },
      { x: 68, y: 15, type: "info",  label: "HH", name: "Heartbreak Hotel", body: "Locks and jackpots on the upper playfield." },
      { x: 36, y: 46, type: "info",  label: "HD", name: "Hound Dog", body: "Starts Hound Dog." },
      { x: 47, y: 32, type: "info",  label: "TCB", name: "T-C-B Targets", body: "20 s double scoring." },
      { x: 81, y: 59, type: "info",  label: "UF", name: "Upper Right Flipper", body: "Inner loop for Blue Suede Shoes." },
      { x: 57, y: 47, type: "info",  label: "SC", name: "Scarf Target", body: "Add-a-ball, more time, notes, gifts." },
      { x: 79, y: 71.5, type: "info", label: "N",  name: "Spot Note Standup", body: "Spots a blue note." },
      { x: 52, y: 41, type: "info",  label: "K",  name: "K-I-N-G Targets", body: "Relight the Scarf; King of Rock and Roll." },
      { x: 58, y: 22, type: "info",  label: "W",  name: "WLVS Lanes", body: "Skill shot; bonus X." },
      { x: 10, y: 84, type: "avoid", label: "!",  name: "Left Outlane", body: "Drain." },
      { x: 80, y: 84, type: "avoid", label: "!",  name: "Right Outlane", body: "Drain." },
    ],
  };
