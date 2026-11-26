  /* ─── TRANSFORMERS: MORE THAN MEETS THE EYE (STERN 2026) ── */
MACHINES['transformers'] = {
    name: "Transformers: More Than Meets the Eye",  sub: "2026 · Stern · SPIKE 3 · Pro · code 0.98",
    tagline: "Missions at Megatron with a final blow · Stunt Loops up to 180M · Combiners and super features · Transformers, Combiner and Bumblebee multiballs · Bumblebee 2× · extra balls worth 15M in competition",
    image: "images/transformers.webp",
    difficulty: "Hard", diffClass: "diff-hard", era: "Modern",

    /* ── QUICK GUIDE (30–90 s read) ───────────────────────────── */
    quick: {
      goal: "Start <strong>missions</strong> at <strong>Megatron's scoop</strong> (behind his drop targets) and finish each with the <strong>final blow</strong>. Rip the <strong>spinner</strong> for Energon and <strong>Stunt Loops</strong> (up to 180M), build <strong>Combiners</strong> at the side ramp, and lock balls via <strong>Optimus</strong> for Transformers Multiball.",
      steps: [
        { title: "Missions",
          body: "Knock down the three <strong>Megatron drop targets</strong>, then shoot the <strong>scoop behind them</strong> (later missions need three scoop shots). Make the lit shots in 60 s, then the final blow at Megatron (20–50% of the mission; each Megatron hit during it adds 5%). Two missions light <strong>One Shall Fall</strong> at the right ramp. Playing all five lights <strong>Bumblebee Multiball</strong>; completing all five lights Rescue Optimus." },
        { title: "Spinner → Stunt Loops",
          body: "Spinner rips fill Energon cubes. After 3 (then 6) cubes, the next spinner shot starts 30 s of <strong>Stunt Loops</strong>: each spin +200K to a 5M jackpot (max 30M), each <strong>side ramp</strong> +1× (max 4×), then cash in at the captive ball or the <strong>space bridge</strong> (+2×): up to 180M. Best during 2×." },
        { title: "Multiballs and 2×",
          body: "Hit <strong>Optimus</strong> to light a lock, then the <strong>VUK</strong> locks a ball; three = Transformers Multiball (same shot three times = jackpot). Side ramp shots and tech specs build <strong>Combiners</strong> (3 = Combiner Multiball). Three lit captive-ball hits spell BUMBLEBEE: the next hit gives 30 s of 2×." },
      ],
      shots: [
        { name: "Megatron drops + scoop", why: "Missions and final blows." },
        { name: "Centre spinner", why: "Energon, Stunt Loops, Golden Lagoon." },
        { name: "Side ramp", why: "Combiner parts; Stunt Loops multiplier." },
      ],
      avoid: [
        "Cashing Stunt Loops at the captive ball when the space bridge (+2×) is makeable.",
        "Ignoring extra balls: 15M each in competition (6 Dino Jackpots or 5 cassette combos are instant).",
      ],
      target: "Milestones (estimates): a mission with its final blow = baseline. Two missions and a multiball = good. A big Stunt Loops cash-out plus One Shall Fall or Bumblebee Multiball = great.",
    },

    info: {
      stats: [
        { label: "Manufacturer", value: "Stern Pinball" },
        { label: "Year",         value: "2026 (June)" },
        { label: "Design",       value: "Elliot Eismin" },
        { label: "Code / rules", value: "Elizabeth Gieske" },
        { label: "Sound",        value: "Jerry Thompson" },
        { label: "Code version", value: "0.98.0 (19 Nov 2026), the latest" },
        { label: "Models",       value: "Pro (shown), Premium, LE (Premium/LE: Megatron cannon)" },
      ],
      theme: "The original G1 Transformers cartoon: Optimus Prime, Megatron, Grimlock and the Dinobots, Soundwave, Starscream and the Combiners.",
      features: [
        { name: "Missions (5)", desc: "Autobot Run, Microbots, Solar Needle, Prime Target, Golden Lagoon. Energon makes the next easier (less score); Cosmic Rust harder (more score). Final blow at Megatron. A failed mission keeps its progress but can only be resumed after all the others have been tried." },
        { name: "Dinobot missions (3)", desc: "Grimlock targets light the left orbit: War, Island (2-ball), S.O.S. Dino Jackpots are 2M base (3M in S.O.S.); three in a mission light Dinobot Desertion at the VUK; six in total give an extra ball." },
        { name: "Transformers Multiball", desc: "Optimus lights locks (more hits each time), VUK locks. Shots go purple → red → jackpot; jackpots × the number lit. Three jackpots light the super at the side ramp: 10M + the jackpots' base values + 5M per jackpot." },
        { name: "Combiners", desc: "Five parts each from side-ramp shots or three tech specs of one colour. Each finished Combiner runs a 40 s super feature (e.g. Superion: right ramp 10M, left ramp 6M). Three light Combiner Multiball at the space bridge." },
        { name: "Stunt Loops", desc: "30 s round. Spinner-built jackpot (5M → 30M; 90M cap on the second), side-ramp multiplier to 4×, space bridge +2×." },
        { name: "Bumblebee 2×", desc: "Lit captive-ball hits spell BUMBLEBEE; then 30 s of double scoring. 3× via the add-a-ball hold, or a mystery award while 2× runs." },
        { name: "Bumblebee Multiball (secret mission)", desc: "New in 0.98: play all five missions, then start it at Megatron like a mission. 3 balls: make the lit rescue shots (right side, then left) to light a Final Rescue jackpot; shots while it is lit raise its multiplier; each rescue needs more shots." },
        { name: "Hurry-up / Frenzy", desc: "After the Megatron drops: two lit left inlanes = Autobot Hurry-Up (left ramp, 15M+); two lit right inlanes = Starscream Frenzy (right orbit, 30 s)." },
        { name: "Tech specs", desc: "Standups light nearby shots for tech specs; 8 light an extra ball. The last one of a full set starts Tech Spec Mania (3-ball) if no other multiball or wizard mode runs. Cassette combos (left inlane → Cassette target, up to 3-way) light the action button for 15 s of all tech specs; 5 combos = extra ball." },
        { name: "Outlane saves", desc: "Left outlane save lit at game start. Each ball start, and then the left inlane, lights the Soundwave target for 30 s (later relights shorter) to relight it; 2 relights per ball. Last ball: Countdown to Extinction — 18 s to make the right ramp after a right-outlane drain." },
      ],
      scoring: [
        { key: "Stunt Loops",        val: "Up to 180M (540M second time)" },
        { key: "Final blow",         val: "20–50% of the mission (by mission), +10% first try, +5% per Megatron hit" },
        { key: "Autobot Hurry-Up",   val: "15M / 25M" },
        { key: "Combiner MB super",  val: "15M + 3M per jackpot + jackpot value" },
        { key: "Extra ball (competition)", val: "15M" },
        { key: "Transformers MB super", val: "10M + jackpots + 5M each" },
      ],
      rules: [
        "Missions and Dinobot missions can run together and carry into multiballs.",
        "Add-a-ball: once per game after the multiball ball save, the space bridge holds a ball for 10 s; the captive ball then starts 2×.",
        "Pro: no Megatron cannon.",
        "Mystery (bumper hits, collected at the space bridge) can add +1× playfield while 2× runs (3×).",
        "Rules from the pinballrulesheets.com rulesheet (code 0.98) and Stern's 0.98 release notes.",
      ],
      benchmarks: [
        { score: "Big Stunt Loops + One Shall Fall or Bumblebee MB (estimate)", label: "Great game" },
        { score: "2 missions + a multiball", label: "Good game" },
        { score: "1 mission + final blow", label: "Baseline" },
      ],
      resources: [
        { name: "Rulesheet (pinballrulesheets.com)", url: "https://pinballrulesheets.com/stern/transformers-more-than-meets-the-eye-rulesheet", icon: "📖" },
        { name: "Pro 0.98 Release Notes (Stern)",    url: "https://wp.sternpinball.com/wp-content/uploads/2026/11/pro_release_notes-2.txt", icon: "📄" },
        { name: "Stern Game Code",                   url: "https://sternpinball.com/support/game-code/", icon: "💾" },
      ],
    },

    strategy: {
      skillShot: "Short-plunge to the upper flipper, then shoot: Optimus/standup 500K (+5 s save), side ramp 5M (+8 s), space bridge 8M (+10 s). Secret: short-plunge to the lower right flipper, hit the left orbit (Grimlock), then one of those shots — up to 15M.",
      actionButton: { name: "Tech specs / Combiner select", when: "After a cassette combo / in Combiner MB", desc: "Lights all shots for tech specs (2× for 15 s); cycles Combiners in Combiner Multiball." },
      multiball: [
        { name: "Transformers Multiball", balls: 3, locks: "Optimus lights a lock; VUK locks.", start: "Third lock.", jackpots: "Same shot 3× = jackpot (× jackpots lit); super at the side ramp.", tip: "Extra Optimus hits with lock lit add 250K to the jackpot." },
        { name: "Combiner Multiball", balls: "2+", locks: "Complete 3 Combiners.", start: "Space bridge.", jackpots: "Pick a completed Combiner with the spinner/action button; jackpots 6M–10M; super at the side ramp / space bridge.", tip: "Landing on a Combiner you don't have resets the jackpot." },
        { name: "Bumblebee Multiball", balls: 3, locks: "Play all five missions.", start: "Megatron scoop (secret mission).", jackpots: "Rescue shots light the Final Rescue jackpot; shots while lit raise its multiplier.", tip: "New in 0.98; each later rescue needs more shots." },
        { name: "Tech Spec Mania", balls: 3, locks: "A full set of tech specs.", start: "Automatically, on the last tech spec of the set.", jackpots: "One of each colour lights the side-ramp super (25M+).", tip: "Captive-ball hits change shot colours." },
      ],
      goal: "<strong>Missions with final blows, the spinner for Stunt Loops, and Combiners / Optimus locks for multiballs.</strong> Run Bumblebee 2× and Combiner super features during big scoring.",
      phases: [
        { num: "Phase 1", title: "Missions", body: "Megatron drops + scoop; spinner for Energon." },
        { num: "Phase 2", title: "Multipliers", body: "Stunt Loops, Bumblebee 2×, Combiner super features." },
        { num: "Phase 3", title: "Multiballs", body: "Optimus locks, Combiner MB; One Shall Fall after two missions; Bumblebee MB after all five." },
      ],
      safeShots: [
        { name: "Centre spinner", desc: "Energon and Stunt Loops." },
      ],
      avoidShots: [
        { name: "Megatron with targets half down", desc: "Clear all three targets first, or aim for the 5M trick shot (all three up, or only the centre down)." },
      ],
      tips: [
        { head: "Backhands", body: "Many shots can be made from either flipper — try the backhand." },
        { head: "Optimus save", body: "Below 15 s in a mission, an Optimus hit resets the timer (15 s per the release notes, 20 s per the rulesheet), once per mission and only if the final blow isn't lit." },
        { head: "Energon vs Rust", body: "Rusted missions score more per shot: use them when you're shooting well." },
        { head: "Grow the final blow", body: "Each Megatron scoop hit during a mission (when it isn't lit) adds 5% to the final blow, with no cap." },
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
      { x: 29.5, y: 43.5, type: "key",   label: "C",  name: "Captive Ball (approx.)", body: "BUMBLEBEE 2×; Stunt Loops cash-out." },
      { x: 80.5, y: 46,   type: "info",  label: "UF", name: "Upper Right Flipper", body: "Skill shots; side ramp and space bridge." },
      { x: 34,   y: 40,   type: "key",   label: "SB", name: "Space Bridge", body: "Combiner MB; add-a-ball; mystery; extra balls; Stunt Loops +2×." },
      { x: 38,   y: 34.5, type: "info",  label: "SR", name: "Side Ramp (approx.)", body: "Combiner parts; Stunt Loops multiplier; supers." },
      { x: 23.5, y: 47.5, type: "info",  label: "LR", name: "Left Ramp (approx.)", body: "Autobot Hurry-Up; cassette combos." },
      { x: 6.5,  y: 60,   type: "info",  label: "G",  name: "Grimlock Targets / Left Orbit", body: "Dinobot missions." },
      { x: 70.5, y: 62,   type: "info",  label: "SW", name: "Soundwave / Cassette Target (approx.)", body: "Soundwave modes; relights the left outlane save." },
      { x: 39,   y: 21,   type: "info",  label: "L",  name: "Optimus VUK (Lock)", body: "Locks for Transformers Multiball." },
      { x: 75,   y: 28.5, type: "info",  label: "RR", name: "Right Ramp", body: "One Shall Fall; Countdown to Extinction save." },
      { x: 6.5,  y: 80,   type: "avoid", label: "!",  name: "Left Outlane", body: "Ball save when lit." },
      { x: 83,   y: 80,   type: "avoid", label: "!",  name: "Right Outlane", body: "Last ball: Countdown to Extinction." },
    ],
  };
