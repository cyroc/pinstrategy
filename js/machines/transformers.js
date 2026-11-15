  /* ─── TRANSFORMERS: MORE THAN MEETS THE EYE (STERN 2026) ── */
MACHINES['transformers'] = {
    name: "Transformers: More Than Meets the Eye",  sub: "2026 · Stern · SPIKE 3 · Pro · early code",
    tagline: "Missions at Megatron with a final blow · Stunt Loops up to 180M · Combiners and super features · Transformers and Combiner multiballs · Bumblebee 2×",
    image: "images/transformers.webp",
    difficulty: "Hard", diffClass: "diff-hard", era: "Modern",

    /* ── QUICK GUIDE (30–90 s read) ───────────────────────────── */
    quick: {
      goal: "Start <strong>missions</strong> at <strong>Megatron's scoop</strong> (behind his drop targets) and finish each with the <strong>final blow</strong>. Meanwhile, rip the <strong>spinner</strong> for Energon and <strong>Stunt Loops</strong> (up to 180M), build <strong>Combiners</strong> at the side ramp, and lock balls via <strong>Optimus</strong> for Transformers Multiball.",
      steps: [
        { title: "Missions",
          body: "Knock down the three <strong>Megatron drop targets</strong>, then shoot the <strong>scoop behind them</strong> (later missions need three scoop shots). Make the lit shots in 60 s, then the final blow at Megatron (35% of the mode). Two missions light <strong>One Shall Fall</strong> at the right ramp (you can wait — it grows); playing all five lights Rescue Optimus." },
        { title: "Spinner → Stunt Loops",
          body: "Spinner rips fill Energon cubes. After 3 (then 6) cubes, the next spinner shot starts <strong>Stunt Loops</strong>: each spin +200K to a 5M jackpot (max 30M), the <strong>side ramp</strong> adds up to 4×, then cash at the captive ball or the <strong>space bridge</strong> (+2×) — up to 180M." },
        { title: "Multiballs and 2×",
          body: "Hit <strong>Optimus</strong> to light a lock, then the <strong>VUK</strong> locks a ball; three = Transformers Multiball (same shot three times = jackpot). Side ramp shots and tech specs build <strong>Combiners</strong> (3 = Combiner Multiball). Three lit captive-ball hits spell BUMBLEBEE: the next hit gives 30 s of 2×." },
      ],
      shots: [
        { name: "Megatron drops + scoop", why: "Missions and final blows." },
        { name: "Centre spinner", why: "Energon, Stunt Loops, Golden Lagoon." },
        { name: "Side ramp", why: "Combiner parts; Stunt Loops multiplier." },
      ],
      avoid: [
        "Collecting Stunt Loops at the captive ball when the space bridge (+2×) is makeable.",
        "Ignoring the upper flipper — many shots (space bridge, side ramp) come from it.",
      ],
      target: "Milestones: two missions and one multiball = good game. A big Stunt Loops cash-out and One Shall Fall = great.",
    },

    info: {
      stats: [
        { label: "Manufacturer", value: "Stern Pinball" },
        { label: "Year",         value: "2026 (June)" },
        { label: "Design",       value: "Elliot Eismin" },
        { label: "Code / rules", value: "Elizabeth Gieske" },
        { label: "Sound",        value: "Jerry Thompson" },
        { label: "Code version", value: "0.96 rulesheet basis (launch 0.85, Jul 2026); early code" },
        { label: "Models",       value: "Pro (shown), Premium, LE of 750 (Premium/LE: animatronic Megatron with firing cannon, Soundwave cassette locks, Grimlock sculpt)" },
      ],
      theme: "The original G1 Transformers cartoon: Optimus Prime, Megatron, Grimlock and the Dinobots, Soundwave, Starscream and the Combiners.",
      features: [
        { name: "Missions (5)", desc: "Autobot Run, Microbots, Solar Needle, Prime Target, Golden Lagoon. Energon makes the next easier (less score); Cosmic Rust harder (more score). Final blow at Megatron." },
        { name: "Dinobot missions (3)", desc: "Grimlock targets light the left orbit: War, Island (2-ball), S.O.S. Three Dino Jackpots light Dinobot Desertion." },
        { name: "Transformers Multiball", desc: "Optimus lights locks (more hits each time), VUK locks. Shots go purple → red → jackpot; jackpots × the number lit; super at the side ramp." },
        { name: "Combiners", desc: "Five parts each from side-ramp shots or three tech specs of one colour. Each finished Combiner runs a 40 s super feature (e.g. Superion: ramps 10M). Three light Combiner Multiball at the space bridge." },
        { name: "Stunt Loops", desc: "Spinner-built jackpot (5M → 30M; 90M cap on the second), side-ramp multiplier to 4×, space bridge +2×." },
        { name: "Bumblebee 2×", desc: "Lit captive-ball hits spell BUMBLEBEE; then 30 s of double scoring (3× via the add-a-ball hold)." },
        { name: "Hurry-up / Frenzy", desc: "After the Megatron drops: two lit left inlanes = Autobot Hurry-Up (left ramp, 15M+); two lit right inlanes = Starscream Frenzy (right orbit, 30 s)." },
        { name: "Tech specs", desc: "Standups light nearby shots for tech specs; 15 = extra ball; 3 of each colour = Tech Spec Mania (3-ball)." },
        { name: "Outlane saves", desc: "Left outlane save lit at game start (relit by the Soundwave target). Last ball: Countdown to Extinction — 18 s to make the right ramp after a right-outlane drain." },
      ],
      scoring: [
        { key: "Stunt Loops",        val: "Up to 180M (540M second time)" },
        { key: "Final blow",         val: "35% of the mission (20% energized, 50% rusted)" },
        { key: "Autobot Hurry-Up",   val: "15M / 25M" },
        { key: "Combiner MB super",  val: "15M + 3M × jackpots" },
        { key: "Extra ball (disabled)", val: "15M" },
      ],
      rules: [
        "Missions and Dinobot missions can run together and carry into multiballs.",
        "Add-a-ball: once per game after the multiball ball save, the space bridge holds a ball for 10 s; the captive ball then starts 2×.",
        "Pro: no Megatron cannon. Early code (0.96): The Ultimate Doom is still being documented.",
        "Rules from the pinballrulesheets.com rulesheet.",
      ],
      benchmarks: [
        { score: "Big Stunt Loops + One Shall Fall", label: "Great game" },
        { score: "2 missions + a multiball", label: "Good game" },
        { score: "1 mission + final blow", label: "Baseline" },
      ],
      resources: [
        { name: "Rulesheet (pinballrulesheets.com)", url: "http://pinballrulesheets.com/stern/transformers-more-than-meets-the-eye-rulesheet", icon: "📖" },
        { name: "Stern Game Code",                   url: "https://sternpinball.com/support/game-code/", icon: "💾" },
      ],
    },

    strategy: {
      skillShot: "Short-plunge to the upper flipper, then shoot: Optimus/standup 500K (+5 s save), side ramp 5M (+8 s), space bridge 8M (+10 s). Secret: short-plunge to the lower right flipper, hit the left orbit (Grimlock), then one of those shots — up to 15M.",
      actionButton: { name: "Tech specs / Combiner select", when: "After a cassette combo / in Combiner MB", desc: "Lights all shots for tech specs (2× for 15 s); cycles Combiners in Combiner Multiball." },
      multiball: [
        { name: "Transformers Multiball", balls: 3, locks: "Optimus lights a lock; VUK locks.", start: "Third lock.", jackpots: "Same shot 3× = jackpot (× jackpots lit); super at the side ramp.", tip: "Extra Optimus hits with lock lit add 250K to the jackpot." },
        { name: "Combiner Multiball", balls: "2+", locks: "Complete 3 Combiners.", start: "Space bridge.", jackpots: "Pick a completed Combiner with the spinner/action button; jackpots 6M–10M; super at the side ramp / space bridge.", tip: "Landing on a Combiner you don't have resets the jackpot." },
        { name: "Tech Spec Mania", balls: 3, locks: "3 tech specs of each colour.", start: "Automatically.", jackpots: "One of each colour lights the side-ramp super (25M+).", tip: "Captive-ball hits change shot colours." },
      ],
      goal: "<strong>Missions with final blows, the spinner for Stunt Loops, and Combiners / Optimus locks for multiballs.</strong> Run Bumblebee 2× and Combiner super features during big scoring.",
      phases: [
        { num: "Phase 1", title: "Missions", body: "Megatron drops + scoop; spinner for Energon." },
        { num: "Phase 2", title: "Multipliers", body: "Stunt Loops, Bumblebee 2×, Combiner super features." },
        { num: "Phase 3", title: "Multiballs", body: "Optimus locks, Combiner MB; One Shall Fall after two missions." },
      ],
      safeShots: [
        { name: "Centre spinner", desc: "Energon and Stunt Loops." },
      ],
      avoidShots: [
        { name: "Megatron with targets half down", desc: "Clear all three targets first, or aim for the 5M trick shot (all three up, or only the centre down)." },
      ],
      tips: [
        { head: "Backhands", body: "Many shots can be made from either flipper — try the backhand." },
        { head: "Optimus save", body: "Below 15 s in a mission, an Optimus hit resets the timer to 20 s (once per mode)." },
        { head: "Energon vs Rust", body: "Rusted missions score 50% final blows — use them when you're shooting well." },
      ],
      mistakes: [
        "Draining in a mission without the final blow (progress is saved, but the bonus is lost).",
        "Starting Combiner Multiball with too few Combiners — the action button can delay it.",
      ],
    },

    hotspots: [
      { x: 62,   y: 27,   type: "key",   label: "M",  name: "Megatron Drop Targets", body: "Clear them to reach the mission scoop." },
      { x: 64,   y: 19,   type: "key",   label: "MS", name: "Megatron Scoop", body: "Start missions; final blow." },
      { x: 26,   y: 15,   type: "key",   label: "O",  name: "Optimus Prime", body: "Lights locks; mission timer save." },
      { x: 50,   y: 22,   type: "key",   label: "S",  name: "Centre Spinner", body: "Energon; Stunt Loops." },
      { x: 80.5, y: 61.5, type: "key",   label: "C",  name: "Captive Ball (approx.)", body: "BUMBLEBEE 2×; Stunt Loops cash-out." },
      { x: 33,   y: 40,   type: "info",  label: "UF", name: "Upper Flipper (approx.)", body: "Skill shots; side ramp and space bridge." },
      { x: 8,    y: 58,   type: "info",  label: "G",  name: "Grimlock Targets / Left Orbit", body: "Dinobot missions." },
      { x: 70.5, y: 62,   type: "info",  label: "SW", name: "Soundwave / Cassette Target (approx.)", body: "Soundwave modes; relights the left outlane save." },
      { x: 39,   y: 21,   type: "info",  label: "L",  name: "Optimus VUK (Lock)", body: "Locks for Transformers Multiball." },
      { x: 75,   y: 28.5, type: "info",  label: "RR", name: "Right Ramp", body: "One Shall Fall; Countdown to Extinction save." },
      { x: 6.5,  y: 80,   type: "avoid", label: "!",  name: "Left Outlane", body: "Ball save when lit." },
      { x: 83,   y: 80,   type: "avoid", label: "!",  name: "Right Outlane", body: "Last ball: Countdown to Extinction." },
    ],
  };
