  /* ─── THE MANDALORIAN PRO (STERN 2021) ───────────────────── */
MACHINES['themandalorian'] = {
    name: "The Mandalorian",  sub: "2021 · Stern · Spike 2 (LCD) · Pro · code 1.45",
    tagline: "Playfield multipliers up to 6× · Flamethrower 2× shots · three Razor Crest multiballs · Missions · Hunter, Scope and Beskar · This Is The Way",
    image: "images/the-mandalorian.webp",
    difficulty: "Medium-Hard", diffClass: "diff-medium-hard", era: "Modern",

    /* ── QUICK GUIDE (30–90 s read) ───────────────────────────── */
    quick: {
      goal: "Stack the three <strong>+1× playfield multipliers</strong> (Hunter, Scope, Boba Fett targets: all three = <strong>6×</strong>), then start a <strong>Razor Crest Multiball</strong> and use the <strong>Flamethrower</strong> to double the lit shots. Missions and Encounters lead to the wizard modes.",
      steps: [
        { title: "Multipliers first",
          body: "<strong>Hunter</strong>: complete the left standups, roll through the lit inlane, then shoot the flashing orbit and the opposite one (+1×, 75 s, and Beskar). <strong>Scope</strong>: make the three blue shots (U-turn, left 2× target, right ramp), then roll through the left inlane and hit one of those shots within 5 s (+1×, 75 s, plus an award). <strong>Boba Fett</strong> targets: +1× for 30 s." },
        { title: "Razor Crest Multiball",
          body: "Hit the <strong>center Razor Crest target</strong> until lit, then shoot the center shot all the way round. Ice Spider and Pirates multiballs light shots for jackpots; Jetpack builds a Super Jackpot (max 50M base) that you collect at the U-turn <em>after</em> multiball. With 6× running, hold the action button for the Flamethrower: lit shots score 12×." },
        { title: "Missions and Encounters",
          body: "Both ramps light a <strong>Mission</strong> at the left scoop (60 s; start one before multiball to stack). The <strong>left ramp</strong> lights Encounters on the helmet mini-playfield. Beskar from Hunter/Scope buys items at the <strong>Foundry</strong> (scoop), including +1× (500)." },
      ],
      shots: [
        { name: "Center Razor Crest", why: "Multiballs and hurry-ups." },
        { name: "Orbits", why: "Hunter shots; The Child mystery (not in Competition mode)." },
        { name: "Left scoop", why: "Missions and the Foundry." },
      ],
      avoid: [
        "Wasting the Flamethrower on one low shot: save it for a big Super Jackpot or many lit jackpots at 6×.",
        "Starting the Boba Fett multiplier before multiball: it's the only +1× you can start during multiball, so start it after the Razor Crest.",
      ],
      target: "Milestones (estimates): a Razor Crest Multiball and a Mission = baseline. A multiball played at 4×–6× = good. A mini-wizard mode or a flamed 6× Super Jackpot = great.",
    },

    info: {
      stats: [
        { label: "Manufacturer", value: "Stern" },
        { label: "Year",         value: "2021 (May)" },
        { label: "Design",       value: "Brian Eddy" },
        { label: "Software",     value: "Dwight Sullivan" },
        { label: "Art",          value: "Randy Martinez" },
        { label: "Platform",     value: "Stern Spike 2 (LCD)" },
      ],
      theme: "The Disney+ series: Grogu, the Razor Crest ship over the center shot, and a Mandalorian-helmet mini-playfield. The Pro has a single-flipper fixed mini-playfield and a U-turn shot; the Premium/LE has a tilting two-flipper mini-playfield and a right scoop.",
      features: [
        { name: "Playfield multipliers", desc: "Hunter (orange, 75 s), Scope (blue, 75 s), Boba Fett targets (green, 30 s; later ones need more hits and start shorter). Each +1×; all three together = 6×. They share one timer. The Foundry (500 Beskar), Ambush and some Child mystery awards (not in Competition mode) can also give one." },
        { name: "Razor Crest Multiballs", desc: "Ice Spider (all purple shots → timed Super Jackpot at the U-turn), Jetpack (all shots, mini-playfield targets; Super Jackpot collected at the U-turn after multiball, base up to 50M), Pirates (waves of shots → Super Jackpot). Boba/Fett targets change which is next. Afterwards a Hunter completion (or your next ball) relights the Razor Crest for a Hurry-Up, then the next multiball." },
        { name: "Missions", desc: "Five 60-second modes lit by both ramps (the scoop spots ramps for the first two). Finish with the scoop for 225K × seconds left; +2.5M end-of-ball bonus each. The 2× targets beside the right ramp change which mission is lit. All five → I Like Those Odds." },
        { name: "Encounters", desc: "Left ramp lights them (1 ramp at first, more for later ones); played on the helmet mini-playfield in three waves, then a timed bonus level. All three → You Have What I Want." },
        { name: "Equipment and Foundry", desc: "Flamethrower (one at the start of each game, more from the Foundry, Scope or Ambush: hold the action button, and the next shot to each lit arrow scores 2×), Amban Rifle (add-a-ball), Whistling Birds (collect lit mission shots/jackpots), Rising Phoenix (complete an Encounter wave), Armor (longer ball save). Beskar from Hunter (250+), Scope and The Child (not in Competition mode) buys items at the Foundry; prices rise 50% per purchase." },
        { name: "Wizard modes", desc: "Precious Cargo (all 3 Razor Crest multiballs), I Like Those Odds (all 5 missions), You Have What I Want (all 3 Encounters), then This Is The Way: three rounds of single-ball and multiball phases; win = 10M, your Signet and a permanent +1×." },
      ],
      scoring: [
        { key: "Max playfield multiplier", val: "6× (7× after the Signet; 12× on a flamed shot)" },
        { key: "Jetpack Super Jackpot",   val: "Up to 50M base (600M at 6× + Flamethrower)" },
        { key: "Ambush (max)",            val: "15M base final shot; up to 720M with all multipliers" },
        { key: "Mission timer bonus",     val: "225K × seconds left" },
        { key: "Skill shot",              val: "1M (+1M each) + awards" },
      ],
      rules: [
        "Skill shot: plunge through a cycling lit CHILD lane: +2 bonus X, light The Child, +1 super pop. Super skill shot (hold left flipper): U-turn → right ramp → scoop (Mission), left ramp (Encounter) or center (Razor Crest).",
        "Ambush: with no mode running, a U-turn shot can start Try To Escape: six shots light for a few seconds and two of them start Ambush (each failed try lights one fewer; in Competition mode the 2nd try always starts it). White phase: the value counts down; white shots build it and the red Ambush shot locks it in. Blue phase: the red shot cashes out, a blue shot builds more and returns to white. 2nd lock-in = Flamethrower, 3rd–5th = +1× each (they continue after the mode only if you cash out). Timed.",
        "The Child mystery: orbits divert to the CHILD lanes; awards include equipment, Beskar, +1×, super pops/spinner.",
        "Competition mode: randomness removed, extra balls off, The Child mystery and the Foundry '?' disabled; the Razor Crest only relights after a Hunter completion or a drain; Try To Escape needs a 2nd try to start Ambush.",
        "End-of-ball bonus: switches + 2.5M per Super Jackpot and per completed Mission, × bonus X (CHILD lanes +1, skill shot +2).",
      ],
      benchmarks: [
        { score: "Mini-wizard or a flamed 6× Super Jackpot (estimate)", label: "Great game" },
        { score: "A multiball played at 4×–6×",                          label: "Good game" },
        { score: "Razor Crest Multiball + a Mission",                     label: "Baseline" },
      ],
      resources: [
        { name: "Rulesheet (pinballrulesheets.com, code 1.42)", url: "https://pinballrulesheets.com/stern/the-mandalorian-rulesheet.html", icon: "📄" },
        { name: "SDPC Cheatsheet",              url: "https://pinball.miraheze.org/wiki/The_Mandalorian", icon: "📄" },
        { name: "Stern Game Page (Pro)",        url: "https://www.sternpinball.com/game/the-mandalorian/pro/", icon: "🏭" },
      ],
    },

    strategy: {
      skillShot: "Plunge through one of the two cycling lit CHILD lanes (a full plunge always drops through C): 1M+, +2 bonus X, light The Child. Or hold the left flipper for the super skill shot: U-turn, right ramp, then scoop/left ramp/center to start a Mission, Encounter or Razor Crest.",
      multiball: [
        { name: "Ice Spider Multiball", locks: "Razor Crest target hits, then the center shot.", start: "Center shot around the Razor Crest.", jackpots: "All purple shots → timed Super Jackpot at the U-turn (20 s, +5 s per mini-playfield target).", tip: "Flamethrower on the lit purple shots with multipliers running." },
        { name: "Jetpack Multiball", locks: "Same.", start: "Same.", jackpots: "Every shot and mini-playfield target builds the Super Jackpot (max 50M base), collected at the U-turn after multiball.", tip: "Keep the multipliers alive, flame the U-turn, then collect: up to 600M." },
        { name: "Pirates Multiball", locks: "Same.", start: "Same.", jackpots: "Waves of lit shots (one more per wave); after wave 3, Super Jackpot at the U-turn.", tip: "Spinner and switch hits keep the rhydonium stable." },
      ],
      goal: "<strong>Hunter + Scope (+ Boba Fett) → Razor Crest Multiball at 6× → Flamethrower → Missions and Encounters toward the wizard modes.</strong>",
      phases: [
        { num: "Phase 1", title: "Build multipliers", body: "Complete Scope, start and finish Hunter; light Razor Crest but don't start it yet." },
        { num: "Phase 2", title: "Multiball", body: "Start a Mission, then the Razor Crest; Boba Fett +1× during multiball; Flamethrower at 6×." },
        { num: "Phase 3", title: "Progress", body: "Missions at the scoop, Encounters via the left ramp, Foundry purchases." },
      ],
      safeShots: [
        { name: "Orbits", desc: "Hunter shots (and The Child outside Competition mode); the ball comes back around." },
        { name: "Right ramp", desc: "Scope and Missions." },
      ],
      avoidShots: [
        { name: "Razor Crest without multipliers", desc: "You can start multiball any time; waiting for 4×–6× pays far more." },
      ],
      tips: [
        { head: "The Fire Triangle", body: "Scope completed and Hunter at least started before the multiball, Boba Fett targets once it's running, then the Flamethrower." },
        { head: "Mission stacking", body: "A Mission stacked with a Razor Crest Multiball is quick, safe points." },
        { head: "Choosing the multiball", body: "Boba/Fett targets choose the next multiball: if you can't keep the multipliers running, Ice Spider or Pirates are safer than Jetpack." },
        { head: "Foundry", body: "Spend Beskar on +1× (500) or Flamethrowers. (The random '?' item is not available in Competition mode.)" },
        { head: "Ambush", body: "Each lock-in (red shot in the white phase) after the first gives a reward: Flamethrower, then +1×. In the blue phase, cash out with the red shot rather than risk the timer." },
      ],
      mistakes: [
        "Starting Razor Crest Multiball with no multipliers running.",
        "Collecting the Jetpack Super Jackpot without the multipliers running and without flaming it first.",
      ],
    },

    hotspots: [
      { x: 50, y: 42, type: "key",   label: "RC", name: "Razor Crest (center)", body: "Target hits light multiball; center shot starts it." },
      { x: 17, y: 41, type: "key",   label: "LO", name: "Left Orbit", body: "Hunter; The Child; super spinner." },
      { x: 86, y: 38, type: "key",   label: "RO", name: "Right Orbit", body: "Hunter; The Child." },
      { x: 28, y: 44, type: "key",   label: "LS", name: "Left Scoop", body: "Missions; Foundry." },
      { x: 42, y: 47, type: "key",   label: "LR", name: "Left Ramp", body: "Lights Encounters; to the mini-playfield." },
      { x: 63, y: 40, type: "key",   label: "UT", name: "U-Turn", body: "Super Jackpots; Scope; Ambush." },
      { x: 70, y: 45, type: "key",   label: "RR", name: "Right Ramp", body: "Missions; Scope." },
      { x: 72, y: 22, type: "info",  label: "MP", name: "Helmet Mini-Playfield", body: "Encounters." },
      { x: 30, y: 22, type: "info",  label: "CH", name: "CHILD Lanes", body: "Skill shot; bonus X; mystery awards." },
      { x: 22, y: 59, type: "info",  label: "HT", name: "Hunter Targets", body: "Light Hunter at an inlane." },
      { x: 74, y: 59.5, type: "info",  label: "BF", name: "Boba Fett Targets", body: "+1× for 30 s; change the next multiball." },
      { x: 66, y: 65, type: "info",  label: "×",  name: "Playfield Multiplier Lights", body: "Three +1× = 6×." },
      { x: 8,  y: 81, type: "avoid", label: "!",  name: "Left Outlane", body: "Heal ball saver when lit." },
      { x: 84, y: 81, type: "avoid", label: "!",  name: "Right Outlane", body: "Heal ball saver when lit." },
    ],
  };
