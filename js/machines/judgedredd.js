  /* ─── JUDGE DREDD (BALLY 1993) ───────────────────────────── */
MACHINES['judgedredd'] = {
    name: "Judge Dredd",  sub: "1993 · Bally · WPC (DCS)",
    tagline: "Spell JUDGE to light the Deadworld lock · four Dark Judge jackpots · nine Chain modes you pick with the fire buttons · Crime Scenes · Ultimate Challenge",
    image: "images/judge-dredd.webp",
    difficulty: "Hard", diffClass: "diff-hard", era: "DMD",

    /* ── QUICK GUIDE (30–90 s read) ───────────────────────────── */
    quick: {
      goal: "<strong>Multiball first:</strong> spell <strong>JUDGE</strong> at the drop targets to light the lock, lock three balls at the <strong>left ramp</strong>, then light jackpots at the left ramp and collect them in the <strong>Subway</strong>. The fourth jackpot (Death) starts <strong>Ultimate Challenge</strong>. In between, play the nine <strong>Chain modes</strong>.",
      steps: [
        { title: "JUDGE and multiball",
          body: "Hit the flashing <strong>JUDGE</strong> drop targets in order (the hole behind them spots letters): that lights the lock. Three <strong>left ramp</strong> shots start a 4-ball multiball. Each drop hit adds 1M to the jackpot. <strong>Left ramp</strong> lights it, the <strong>Subway</strong> (behind the D target) collects it. After the fourth Dark Judge, <strong>Ultimate Challenge</strong>: lost balls are relaunched and every Crime Scene scores big." },
        { title: "Chain modes",
          body: "The <strong>left ramp</strong> and <strong>Sniper Tower</strong> (alternating; only the Sniper Tower while lock is lit) start the next Chain mode. Pick it with the fire buttons. Best: <strong>Manhunt Millions</strong> (left ramp again and again) started from the left ramp, <strong>Sniper</strong> started from the Sniper Tower, Stake Out (right ramp). Hit the blue <strong>?</strong> target in a mode for its bonus." },
        { title: "Crime Scenes",
          body: "Left orbit, small loop, Sniper Tower, large loop and right ramp are Crime Scenes worth 1M–4M by level. The lit <strong>Advance Crime Level</strong> targets raise every lit scene one level: hit them before cashing scenes." },
      ],
      shots: [
        { name: "Left ramp", why: "Locks, jackpot lighting, modes." },
        { name: "Subway (behind D)", why: "Collects jackpots." },
        { name: "Sniper Tower", why: "Modes; Crime Scene." },
      ],
      avoid: [
        "Hard shots into the drops: the ball can jump onto the Air Raid ramp and drain left.",
        "After a left orbit shot, hold the upper-right mini flipper up so the ball doesn't fly out of the right orbit and drain left.",
      ],
      target: "Milestones (estimates): one multiball with a jackpot = baseline. Two or three Dark Judges and a few modes = good. Death jackpot and Ultimate Challenge = great.",
    },

    info: {
      stats: [
        { label: "Manufacturer", value: "Bally (Williams)" },
        { label: "Year",         value: "1993 (September)" },
        { label: "Design",       value: "John Trudeau" },
        { label: "Software",     value: "Jeff Johnson" },
        { label: "Art",          value: "Kevin O'Connor" },
        { label: "Platform",     value: "WPC (DCS sound)" },
        { label: "Production",   value: "6,990" },
      ],
      theme: "The 2000 AD comic hero: Mega-City One, the Deadworld planet with its magnet crane, the Dark Judges, a Sniper Tower and four flippers. The only game with a 2-credit SuperGame; competitions use the regular game.",
      features: [
        { name: "JUDGE drop targets", desc: "Five drops; the flashing one advances JUDGE. Completing JUDGE lights the lock. The wide D target covers the Subway hole; shooting the hole spots the next letter. Each drop hit adds 1M to the jackpot." },
        { name: "Multiball", desc: "Three left ramp shots with the lock lit (only the third ball goes to Deadworld on production games), then three more balls are autoplunged: 4-ball. Left ramp lights the jackpot, the Subway collects it: Mortis, Fire, Fear, then Death, each 5M more. Jackpot progress is lost when multiball ends; later multiballs need JUDGE for each lock (some letters given free)." },
        { name: "Chain modes", desc: "Pursuit, Blackout, Sniper, Battle Tank, Bad Impersonator, Meltdown, Safecracker, Manhunt Millions and Stake Out. The left ramp and Sniper Tower (alternating; only the Sniper Tower while lock is lit) build up and start the lit mode. The right fire button moves to the next unplayed mode, the left one to the previous." },
        { name: "Ultimate Challenge", desc: "Started by the Death jackpot (4 balls) or by finishing all nine modes (6 balls). Crime Scenes score 10M+ each; it ends when fewer than two balls remain." },
        { name: "Crime Scenes", desc: "Left orbit, small loop, Sniper Tower, large loop and right ramp: Warning 1M, Misdemeanor 2M, Felony 3M, Class X Felony 4M. The Advance Crime Level targets raise all lit scenes one level. When all are made, new ones light." },
        { name: "Air Raid", desc: "The Air Raid ramp feeds the left shooter lane; the drops reset and light one at a time; fire with the left button to hit the lit target for 5M." },
        { name: "Reactors", desc: "Three captive balls on the right. Getting the last ball to hit the back target scores 1M; the 2nd time also doubles the end-of-ball bonus (which holds mode and Ultimate Challenge points), the 4th adds 5M." },
      ],
      scoring: [
        { key: "Dark Judge jackpots", val: "20–25M base, +1M per drop hit, +5M each" },
        { key: "Crime Scene",         val: "1M–4M by level" },
        { key: "Ultimate Challenge",  val: "10M+ per Crime Scene" },
        { key: "Air Raid hit",        val: "5M" },
        { key: "Mode start",          val: "3M" },
      ],
      rules: [
        "The blue ? target during a mode: Pursuit two missiles, Blackout 3-ball play, Battle Tank and Manhunt Millions more time, Bad Impersonator an extra lit target, Meltdown finishes the mode, Stake Out doubles the shot value (5M → 10M).",
        "Mode and Ultimate Challenge points go into the end-of-ball bonus: a tilt loses them.",
        "Unlit ramps score more for each ramp shot on the ball (500K, 1M, 1.5M …); repeated loops build too.",
        "Skill shot: the plunge comes round to the upper left flipper; make the large loop (right orbit) from there.",
        "The left kickback lane is also the Air Raid launch lane; the drain shield (ball save) is short and starts only after a few switch hits.",
      ],
      benchmarks: [
        { score: "Death jackpot and Ultimate Challenge (estimate)", label: "Great game" },
        { score: "Two or three Dark Judges and a few modes",       label: "Good game" },
        { score: "One multiball with a jackpot",                   label: "Baseline" },
      ],
      resources: [
        { name: "Rulesheet (pinball.org archive)", url: "https://web.archive.org/web/2020/http://www.pinball.org/rules/judgedredd.html", icon: "📄" },
        { name: "Operations Manual (Planetary Pinball)", url: "https://www.planetarypinball.com/reference/gamemanuals/Judge_Dredd/files/assets/basic-html/toc.html", icon: "📘" },
        { name: "Pinside Game Page",          url: "https://pinside.com/pinball/machine/judge-dredd", icon: "🕹️" },
      ],
    },

    strategy: {
      skillShot: "The plunged ball comes round to the upper left flipper: shoot the large loop (right orbit) for the skill shot (5M).",
      multiball: [
        { name: "Deadworld Multiball", locks: "Spell JUDGE in order to light lock; three left ramp shots.", start: "The third lock (4 balls).", jackpots: "Left ramp lights, the Subway collects: Mortis, Fire, Fear, Death; Death starts Ultimate Challenge.", tip: "Raise the jackpot first by hitting drop targets (+1M each)." },
        { name: "Ultimate Challenge", locks: "Death jackpot, or all nine modes.", start: "Automatically (4 or 6 balls).", jackpots: "Every Crime Scene, 10M+.", tip: "Trap on the right flipper and repeat the Sniper Tower from the left: it feeds the left inlane." },
      ],
      goal: "<strong>JUDGE → three left ramp locks → left ramp / Subway jackpots to Death and Ultimate Challenge; pick good Chain modes with the fire buttons in between.</strong>",
      phases: [
        { num: "Phase 1", title: "JUDGE", body: "Flashing drop targets in order; the hole behind spots letters." },
        { num: "Phase 2", title: "Multiball", body: "Left ramp to light, Subway to collect; all four Dark Judges for Ultimate Challenge." },
        { num: "Phase 3", title: "Modes", body: "Manhunt Millions from the left ramp, Sniper from the Sniper Tower; play Stake Out on the right ramp." },
      ],
      safeShots: [
        { name: "Left ramp", desc: "Feeds the right inlane; locks, jackpots and modes." },
        { name: "Large loop from the upper flipper", desc: "Comes back to the same flipper; repeat for more." },
      ],
      avoidShots: [
        { name: "Reactor captive balls", desc: "A hard shot, but the 2nd back-target hit doubles the end-of-ball bonus (mode points included): worth it late in a big ball." },
        { name: "Hard drop-target shots", desc: "Can jump to the Air Raid ramp and drain left." },
      ],
      tips: [
        { head: "Start modes from the right shot", body: "Start Sniper from the Sniper Tower and Manhunt Millions from the left ramp (when lock isn't lit): the starting shot is also the scoring shot." },
        { head: "Meltdown", body: "Start it from the ramp and hit the ? target right away to finish it." },
        { head: "Blackout and Safecracker", body: "Save them for after the first multiball: flailing in Blackout or Subway shots in Safecracker relight JUDGE quickly." },
        { head: "Mini flipper", body: "Hold the upper-right mini flipper up after a left orbit shot so the ball doesn't fly out of the right orbit and drain left." },
      ],
      mistakes: [
        "Starting a mode from the wrong shot and wasting its timer.",
        "Cashing Crime Scenes at Warning level instead of advancing them first.",
      ],
    },

    hotspots: [
      { x: 43.5, y: 40.5, type: "key", label: "DT", name: "JUDGE Drop Targets", body: "Spell JUDGE to light the lock; +1M jackpot per hit." },
      { x: 42.5, y: 37,  type: "key",  label: "SW", name: "Subway (behind D)", body: "Collects jackpots; spots JUDGE letters." },
      { x: 25,  y: 45,  type: "key",   label: "LR", name: "Left Ramp", body: "Locks, jackpot lighting, Chain modes." },
      { x: 65,  y: 23,  type: "key",   label: "ST", name: "Sniper Tower", body: "Chain modes; Crime Scene; Sniper." },
      { x: 73,  y: 50,  type: "key",   label: "RR", name: "Right Ramp (Stake Out)", body: "Crime Scene; Stake Out." },
      { x: 36,  y: 22,  type: "info",  label: "DW", name: "Deadworld", body: "Ball lock planet." },
      { x: 76,  y: 25,  type: "info",  label: "AR", name: "Air Raid Ramp", body: "Fire at the lit drop target for 5M." },
      { x: 17,  y: 40,  type: "info",  label: "LO", name: "Left Orbit", body: "Crime Scene." },
      { x: 88,  y: 20,  type: "info",  label: "LL", name: "Large Loop (right orbit)", body: "Crime Scene; skill shot." },
      { x: 52,  y: 20,  type: "info",  label: "CR", name: "Center Ramp (approx.)", body: "Blackout jackpot; Battle Tank." },
      { x: 55,  y: 29,  type: "info",  label: "SL", name: "Small Loop (approx.)", body: "Crime Scene." },
      { x: 87,  y: 43,  type: "info",  label: "AC", name: "Advance Crime Level Targets (approx.)", body: "Raise every lit Crime Scene one level." },
      { x: 12.5, y: 33.5, type: "info", label: "?", name: "? Target (approx.)", body: "Mode bonus when lit." },
      { x: 81,  y: 50,  type: "info",  label: "RX", name: "Reactors (captive balls)", body: "Meltdown; 2× bonus." },
      { x: 21,  y: 47,  type: "info",  label: "EB", name: "Extra Ball Target", body: "Extra ball when lit (off in competition)." },
      { x: 15,  y: 53,  type: "info",  label: "UF", name: "Upper Left Flipper", body: "Large loop, Sniper Tower." },
      { x: 50,  y: 82,  type: "info",  label: "CL", name: "Crime Level Lights", body: "Warning → Class X Felony." },
      { x: 9,   y: 75,  type: "info",  label: "K",  name: "Left Kickback / Air Raid Lane", body: "Kicks the ball back out." },
    ],
  };
