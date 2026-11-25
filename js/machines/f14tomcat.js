  /* ─── F-14 TOMCAT (WILLIAMS 1987) ────────────────────────── */
MACHINES['f14tomcat'] = {
    name: "F-14 Tomcat",  sub: "1987 · Williams · System 11A (alphanumeric)",
    tagline: "Spell TOMCAT for locks · 4-ball multiball · three Landings for the Fighter Jackpot · Yagov kicker · Launch Bonus combo · Hot Streak",
    image: "images/f14-tomcat.webp",
    difficulty: "Medium-Hard", diffClass: "diff-medium-hard", era: "SS",

    /* ── QUICK GUIDE (30–90 s read) ───────────────────────────── */
    quick: {
      goal: "Spell <strong>TOMCAT</strong> to light locks at the <strong>Launch ramp</strong> (right lane up-kicker), lock three balls and start <strong>4-ball multiball</strong>. In multiball, shoot the Launch ramp for <strong>Landings</strong>: 150K, 250K, then the <strong>Fighter Jackpot</strong> (about 704K). Between multiballs, the <strong>left inlane → Launch ramp</strong> combo pays up to 250K.",
      steps: [
        { title: "TOMCAT and locks",
          body: "Red standups spell TOM and blue ones CAT, in any order: one set sits between the <strong>upper flippers</strong>, the other low on the sides. Each TOMCAT lights a lock (how many depends on settings, and it gets harder each multiball). The Launch ramp locks; a lit lock is also filled by your next plunge. With 3 balls locked, a lit <strong>Release</strong> at the Launch ramp starts multiball." },
        { title: "Multiball",
          body: "Every Launch ramp shot is a <strong>Landing</strong>: 150K, 250K, then the Fighter Jackpot. Progress carries over to the next multiball." },
        { title: "Single-ball points",
          body: "<strong>Left inlane → Launch ramp</strong> = Launch Bonus (50K, +50K each, max 250K). The upper <strong>Flyby loop</strong> raises bonus X when lit by an inlane or a loop (max 8×; bonus can reach about 1M) and starts <strong>Hot Streak</strong>: upper TOMCAT hits right after a loop score 10K more each, up to 150K." },
      ],
      shots: [
        { name: "Launch ramp (right lane, up-kicker)", why: "Locks, Release, Landings, Launch Bonus." },
        { name: "Upper TOMCAT targets", why: "Locks; Hot Streak." },
        { name: "Flyby loop", why: "Bonus X; Hot Streak." },
      ],
      avoid: [
        "The center Kill/Rescue targets hit straight on: the ball comes straight down the middle. Clip their edges.",
        "The left orbit (Yagov kicker) unprepared: it fires the ball back at the left flipper very fast, and tournaments often turn off Flight Insurance.",
      ],
      target: "Milestones (estimates): one multiball = baseline. A Fighter Jackpot = good. Two jackpots plus 8× bonus = great.",
    },

    info: {
      stats: [
        { label: "Manufacturer", value: "Williams" },
        { label: "Year",         value: "1987" },
        { label: "Design",       value: "Steve Ritchie" },
        { label: "Software",     value: "Eugene Jarvis (with Ed Boon)" },
        { label: "Art",          value: "Doug Watson" },
        { label: "Sound",        value: "Bill Parod, Chris Granner" },
        { label: "Platform",     value: "Williams System 11A (alphanumeric)" },
        { label: "Production",   value: "About 14,500" },
      ],
      theme: "Navy fighter combat: you fly an F-14 against the taunting General Yagov and his squadron, with spinning backbox beacons when multiball is ready.",
      features: [
        { name: "TOMCAT and locks", desc: "Upper TOMCAT bank between the upper flippers, plus TOM (left) and CAT (right) lower banks; letters combine in any order. Lock lighting depends on difficulty: Easy (first TOMCAT lights 2 locks), Medium (1 lock each, 2 on the last ball), Hard (1 each), Very/Extremely Hard (an extra TOMCAT to light Release; Extremely Hard needs 2 for the first lock). The Launch ramp spots a letter when it isn't lit for Lock or Release (setting)." },
        { name: "Multiball", desc: "4 balls. Start at the Launch ramp when Release is lit, or at the left orbit when Ripoff is lit (one more TOMCAT after Release is lit). Landings: 150K, 250K, Fighter Jackpot (703,850 at the start of a game; it grows between games up to about 1.02M). Landing progress carries over between multiballs." },
        { name: "Kills and Yagov", desc: "Each left orbit shot is a Kill (Alpha to Golf); the 8th kills General Yagov for 250K and an extra ball. A lit center target after an inlane also scores a Kill (only until the first Yagov kill on default settings)." },
        { name: "Flyby loop and Hot Streak", desc: "The upper loop, made from the upper or lower flippers, raises bonus X when lit (by an inlane or by a loop). Upper TOMCAT hits right after a loop start Hot Streak: +10K each, max 150K. The lit 1-6 target lights both Flyby inserts and the right spinner (1,000–2,000 a spin by source; not worth chasing)." },
        { name: "Launch Bonus and Rescue", desc: "Left inlane → Launch ramp: 50K, +50K each, max 250K. The left outlane kickback (Rescue) is on at the start of each ball; relight it at the center target that is lit orange." },
      ],
      scoring: [
        { key: "Fighter Jackpot",  val: "About 704K (up to about 1.02M)" },
        { key: "Landings 1 and 2", val: "150K, 250K" },
        { key: "Launch Bonus",     val: "50K → 250K" },
        { key: "General Yagov",    val: "250K" },
        { key: "Hot Streak",       val: "Up to 150K a hit" },
        { key: "Max bonus",        val: "127K × 8 ≈ 1M" },
      ],
      rules: [
        "The Fighter Jackpot value carries over between games: it starts at 703,850 and rises 77,930 per game it isn't won (max after 5 games), then resets.",
        "Bonus X resets every ball; TOMCAT letters and Kills carry over (default settings).",
        "Extra balls (Yagov, 8× bonus) are off in competition play; no source says what they score instead.",
        "Flight Insurance (a ball save after a left-orbit kickout) is often disabled for tournaments; the display may still say you are insured.",
      ],
      benchmarks: [
        { score: "Two Fighter Jackpots + 8× bonus (estimate)", label: "Great game" },
        { score: "A Fighter Jackpot",                          label: "Good game" },
        { score: "One multiball",                              label: "Baseline" },
      ],
      resources: [
        { name: "Strategy Guide (Pinball Primer)", url: "https://pinballprimer.github.io/f14_GRY2O.html", icon: "📖" },
        { name: "Rulesheet (Pinball Archive)",     url: "https://web.archive.org/web/2010/http://www.pinball.org/rules/f14tomcat.html", icon: "📄" },
        { name: "SDPC Cheatsheet",                 url: "https://pinball.miraheze.org/wiki/F-14_Tomcat", icon: "📄" },
        { name: "Pinside Game Page",               url: "https://pinside.com/pinball/machine/f-14-tomcat", icon: "🕹️" },
      ],
    },

    strategy: {
      skillShot: "None. When locks are lit, plunged balls fill them before a ball is put into play.",
      multiball: [
        { name: "Multiball", balls: 4, locks: "Each TOMCAT lights a lock (settings); shoot the Launch ramp (right lane, up-kicker).", start: "Launch ramp when Release is lit (or the left orbit when Ripoff is lit).", jackpots: "Launch ramp Landings: 150K, 250K, Fighter Jackpot (about 704K); progress carries over.", tip: "Trap up and aim the Launch ramp from the left flipper; the left inlane feed also scores the Launch Bonus." },
      ],
      goal: "<strong>TOMCAT → locks → multiball → three Landings; Launch Bonus combos and 8× bonus in between.</strong>",
      phases: [
        { num: "Phase 1", title: "Locks", body: "Upper TOMCAT from the upper flippers; Launch ramp for each lit lock." },
        { num: "Phase 2", title: "Multiball", body: "Launch ramp repeatedly for Landings and the jackpot." },
        { num: "Phase 3", title: "Between", body: "Left inlane → Launch ramp combos, Flyby loop for bonus X, Hot Streak." },
      ],
      safeShots: [
        { name: "Launch ramp (right lane, up-kicker)", desc: "Locks, Landings, Launch Bonus; the main scoring shot." },
        { name: "Upper TOMCAT targets", desc: "From the upper flippers; letters and Hot Streak." },
      ],
      avoidShots: [
        { name: "Center targets straight on", desc: "Hit their edges; straight hits rebound down the middle." },
        { name: "Left orbit (Yagov)", desc: "Very fast kickout to the left flipper; only shoot it when you're ready." },
      ],
      tips: [
        { head: "Rescue", body: "Keep the left kickback lit by hitting the orange-lit center target (clip it from the side)." },
        { head: "Jackpot carry-over", body: "If multiball ends after two Landings, the next multiball's first Landing is the jackpot." },
        { head: "Big bonus", body: "At 8× the bonus can be worth about 1M: don't tilt late in a long ball." },
      ],
      mistakes: [
        "Chasing Kills for an extra ball that competition settings turn off.",
        "Flipping at the Yagov kickout instead of holding the flipper up to catch it.",
      ],
    },

    hotspots: [
      { x: 77, y: 42, type: "key",   label: "LR", name: "Launch Ramp (right lane, up-kicker)", body: "Locks; Release; Landings; Launch Bonus." },
      { x: 50, y: 25, type: "key",   label: "UT", name: "Upper TOMCAT Targets", body: "Locks; Hot Streak." },
      { x: 70, y: 27, type: "key",   label: "FB", name: "Flyby Loop", body: "Bonus X; starts Hot Streak." },
      { x: 21, y: 45, type: "info",  label: "Y",  name: "Yagov Kicker (left orbit)", body: "Kills; Ripoff. Very fast kickout." },
      { x: 23, y: 33, type: "info",  label: "UL", name: "Upper Left Flipper", body: "Upper TOMCAT and Flyby." },
      { x: 73, y: 33, type: "info",  label: "UR", name: "Upper Right Flipper", body: "Upper TOMCAT and Flyby." },
      { x: 21, y: 60, type: "info",  label: "TOM", name: "Lower TOM Targets", body: "Letters." },
      { x: 75, y: 59, type: "info",  label: "CAT", name: "Lower CAT Targets", body: "Letters." },
      { x: 36, y: 50, type: "info",  label: "16", name: "1-6 Targets", body: "Lit target lights Flyby bonus X and the spinner." },
      { x: 48, y: 51, type: "avoid", label: "CT", name: "Center Kill/Rescue Targets", body: "Relight the kickback; hit the edges, not straight on." },
      { x: 11, y: 80, type: "info",  label: "KB", name: "Rescue Kickback", body: "Left outlane; relit at the center target." },
      { x: 88, y: 77, type: "avoid", label: "!",  name: "Right Outlane", body: "Drain." },
    ],
  };
