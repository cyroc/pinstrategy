  /* ─── TALES FROM THE CRYPT (DATA EAST 1993) ──────────────── */
MACHINES['talesfromthecrypt'] = {
    name: "Tales from the Crypt",  sub: "1993 · Data East · Version 3 (DMD)",
    tagline: "12 Creature Feature modes on the clock · Crypt Multiball with jackpots and 50M+ Monster Jackpots · Frenzies in bonus · Crypt Jam wizard mode",
    image: "images/tales-from-the-crypt.webp",
    difficulty: "Medium-Hard", diffClass: "diff-medium-hard", era: "DMD",

    /* ── QUICK GUIDE (30–90 s read) ───────────────────────────── */
    quick: {
      goal: "Two engines: <strong>Crypt Multiball</strong> (spell CRYPT at the <strong>tombstone</strong>, then score jackpots at the ramps and 50M+ <strong>Monster Jackpots</strong>) and the <strong>12 Creature Feature modes</strong> started at the <strong>Electric Chair scoop</strong> (centre). Modes stack, and all 12 light <strong>Crypt Jam</strong>.",
      steps: [
        { title: "Crypt Multiball",
          body: "Hit the <strong>tombstone</strong> to spell CRYPT, then shoot the <strong>Crypt</strong> behind it, best from the <strong>upper right flipper</strong>: 3 balls. Crypt shots and the left spinner build the 25M jackpot; collect it at the <strong>left ramp</strong>, then the double jackpot at the <strong>right ramp</strong>. Then spell CRYPT again: <strong>Monster Jackpot</strong> = 50M + your double jackpot, +50M each time." },
        { title: "Creature Feature modes",
          body: "Shoot the lit <strong>spinner</strong> to light the <strong>scoop</strong> — a full <strong>right orbit</strong> runs through both orbit spinners and always lights it. Spins change the flashing mode; press the <strong>door-handle plunger</strong> to lock it. Best picks: Werewolf Countdown (30M hurry-up), Skull Cracking (captive-ball add-a-ball multiball, 5M–20M a hit), Frightmare and Psycho Pops (25M each)." },
        { title: "Ramps → Frenzies",
          body: "<strong>Left ramp</strong>: collect Rats, Bats, Ghosts, Goblins. <strong>Right ramp</strong>: lights the next Frenzy (15 s, 250K–1M a switch, paid in bonus). Start them during multiball when you can." },
      ],
      shots: [
        { name: "Tombstone / Crypt", why: "CRYPT letters, multiball, Monster Jackpots." },
        { name: "Right orbit", why: "Both orbit spinners: lights the scoop; 500K+ a shot." },
        { name: "Left and right ramps", why: "Jackpot and double jackpot; Frenzies." },
      ],
      avoid: [
        "Skipping the plunger lock: lock in a good mode before shooting the scoop.",
        "Shooting the tombstone from the lower right flipper: a weak angle. Use the upper right flipper.",
      ],
      target: "Milestones (estimates): a multiball jackpot and two modes = baseline. A double jackpot plus a Monster Jackpot = good. Several Monster Jackpots or Crypt Jam = great.",
    },

    info: {
      stats: [
        { label: "Manufacturer", value: "Data East" },
        { label: "Year",         value: "1993 (November)" },
        { label: "Design",       value: "John Borg" },
        { label: "Art",          value: "Kurt Andersen, Markus Rothkranz" },
        { label: "Platform",     value: "Data East Version 3 (128×32 DMD)" },
        { label: "Production",   value: "4,500 units" },
      ],
      theme: "HBO's Tales from the Crypt: the Crypt Keeper, a tombstone that sinks into the crypt, the Electric Chair scoop, the Guillotine drop targets and the door-handle plunger.",
      features: [
        { name: "Creature Feature modes (12)", desc: "Clock in the centre: Super Keeper Targets, Thunderstorm, Skull Cracking, Door Prize, Frightmare, Psycho Pops, Robbing the Crypt, Light Axe-tra Ball, Super Guillotine Targets, Werewolf Countdown, Super Crypt Kicker, Electric Chair. Modes stack (not the two multiball modes)." },
        { name: "Crypt Multiball", desc: "3 balls. Jackpot from 25M (+1M × balls per Crypt, +130K per left-spinner spin) at the left ramp; double jackpot at the right ramp (built at 2× by the right spinner and the Crypt); captive ball adds balls (max 6) until then. Monster Jackpots: 50M + the double jackpot, +50M each." },
        { name: "Crypt Jam", desc: "All 12 modes: 6-ball multiball, 25 s ball save, every switch 1M." },
        { name: "Frenzies", desc: "Living Dead, Chainsaw, Grave Digger, Play the Organ: 15 s, 250K/500K/750K/1M a switch, added to bonus ('Fast Goring')." },
        { name: "Left ramp features", desc: "Rats, Bats, Ghosts, Goblins (about 3M–5M each, depending on code); completing them starts or lights a Frenzy." },
        { name: "Keeper targets", desc: "6 eyeball standups: relight the kickback and raise bonus X (2×/4×/6×/8×); 1M each at 8×." },
        { name: "Guillotine drop targets (3)", desc: "Skill shot; completing them raises bonus X. Left inlane → drop target = Door Prize (1M–3M)." },
        { name: "Captive ball", desc: "Lower left: running count pays 5M at 5 hits, 10M at 10, 20M at 20 …" },
        { name: "Right orbit", desc: "500K, +500K per consecutive orbit (max 2.5M); loops out through the left spinner." },
        { name: "Upper right flipper", desc: "Fed by the centre-spinner kicker; the best angle for the Crypt, tombstone and scoop." },
      ],
      scoring: [
        { key: "Skill shot",      val: "4M, +1M each time (Primer; older code less)" },
        { key: "Jackpot",         val: "25M+ (double at the right ramp)" },
        { key: "Monster Jackpot", val: "50M + double jackpot, +50M each" },
        { key: "Werewolf Countdown", val: "30M → 13M" },
        { key: "Frightmare / Psycho Pops", val: "25M each" },
        { key: "Right outlane",   val: "3M" },
      ],
      rules: [
        "First multiball only: it can also start or restart at the centre spinner, and two CRYPT letters are spotted each ball (multiball is ready by ball 3 at the latest). A short first multiball without jackpots can restart within 12 s (setting).",
        "The scoop can't be relit during Skull Cracking or Electric Chair.",
        "Right inlane = Chop Pops (bumpers 1M for a few seconds).",
        "Extra balls reportedly score 50M in competition play (unconfirmed in the manual).",
        "Rules from The Pinball Primer.",
      ],
      benchmarks: [
        { score: "Several Monster Jackpots or Crypt Jam", label: "Great game" },
        { score: "Double jackpot + Monster Jackpot",      label: "Good game" },
        { score: "Multiball jackpot + two modes",         label: "Baseline" },
      ],
      resources: [
        { name: "Rules (The Pinball Primer)", url: "https://pinballprimer.github.io/talesfromthecrypt_GR6wO.html", icon: "📖" },
        { name: "IPDB Entry",                 url: "https://www.ipdb.org/machine.cgi?id=2493", icon: "🎯" },
        { name: "Pinside Game Page",          url: "https://pinside.com/pinball/machine/tales-from-the-crypt", icon: "🕹️" },
      ],
    },

    strategy: {
      skillShot: "A light moves across the three drop targets; plunge into the lit one: 4M (+1M each later skill shot). A miss scores a tenth.",
      actionButton: { name: "Door-handle plunger", when: "Any time", desc: "Locks the flashing Creature Feature mode so spinners stop changing it (not for Super Keeper Targets)." },
      multiball: [
        { name: "Crypt Multiball", balls: "3–6", locks: "Spell CRYPT at the tombstone.", start: "Shoot the Crypt behind the lowered tombstone, ideally from the upper right flipper (first time also the centre spinner).", jackpots: "Left ramp jackpot (25M+), right ramp double jackpot, then CRYPT again for Monster Jackpots.", tip: "Before the double jackpot, captive-ball hits add balls (max 6). Collecting it can also start a flashing Frenzy." },
        { name: "Skull Cracking", balls: "up to 6", locks: "Clock mode.", start: "Captive ball within 20 s.", jackpots: "Captive ball 5M rising to 20M a hit.", tip: "Every captive-ball hit adds a ball." },
        { name: "Electric Chair", balls: 6, locks: "Clock mode.", start: "Electric Chair scoop.", jackpots: "Scoop = 1M × balls in play.", tip: "Ball save until all 6 balls are out." },
      ],
      goal: "<strong>Crypt Multiball for jackpots and Monster Jackpots; stack Creature Feature modes in between.</strong> Start Frenzies during multiball.",
      phases: [
        { num: "Phase 1", title: "Multiball", body: "Tombstone hits (free letters help); first multiball by ball 3 at the latest." },
        { num: "Phase 2", title: "Modes", body: "Right orbit → scoop; lock a strong mode with the plunger." },
        { num: "Phase 3", title: "Monsters", body: "After the double jackpot, spell CRYPT again for 50M+ Monster Jackpots." },
      ],
      safeShots: [
        { name: "Right orbit", desc: "Lights the scoop; returns via the left orbit." },
        { name: "Left ramp", desc: "Ramp features and the jackpot." },
      ],
      avoidShots: [
        { name: "Tombstone from the lower right flipper", desc: "Weak angle, and it registers hits poorly. Use the upper right flipper." },
      ],
      tips: [
        { head: "Mode stacking", body: "Relight the scoop during a mode to run two at once (not with Skull Cracking or Electric Chair)." },
        { head: "Light Axe-tra Ball", body: "With extra balls off it may score 50M instead (setting), so it can be worth locking." },
        { head: "Super Crypt Kicker", body: "Keeps the left kickback lit for the whole ball: good early." },
      ],
      mistakes: [
        "Collecting jackpots before building them: Crypt shots and spinners raise the 25M first.",
        "Letting spinners change a good flashing mode just before the scoop.",
      ],
    },

    hotspots: [
      { x: 36,   y: 34,   type: "key",   label: "T",  name: "Tombstone / Crypt", body: "CRYPT letters; Crypt Multiball and Monster Jackpots." },
      { x: 44,   y: 43,   type: "info",  label: "CL", name: "CRYPT Letters", body: "Progress toward multiball." },
      { x: 36,   y: 44,   type: "key",   label: "SC", name: "Electric Chair / Centre Scoop", body: "Starts the flashing Creature Feature mode." },
      { x: 26,   y: 46,   type: "key",   label: "LR", name: "Left Ramp", body: "Jackpot; Rats, Bats, Ghosts, Goblins." },
      { x: 78,   y: 38,   type: "key",   label: "RR", name: "Right Ramp", body: "Double jackpot; lights Frenzies." },
      { x: 86,   y: 37.5, type: "key",   label: "RO", name: "Right Orbit / Spinner", body: "Both spinners: lights the scoop; 500K+." },
      { x: 15,   y: 45,   type: "info",  label: "LO", name: "Left Orbit / Spinner", body: "Werewolf Countdown; mode spins." },
      { x: 69.5, y: 31,   type: "info",  label: "S",  name: "Centre Spinner", body: "Collects a lit extra ball; starts the first multiball; feeds the upper flipper." },
      { x: 58,   y: 37,   type: "info",  label: "D",  name: "Guillotine Drop Targets (3)", body: "Skill shot; bonus X; Door Prize." },
      { x: 9.5,  y: 55,   type: "info",  label: "CB", name: "Captive Ball", body: "Skull Cracking; adds balls; hit-count awards." },
      { x: 8,    y: 63.5, type: "info",  label: "K",  name: "Keeper Targets (left)", body: "Kickback, bonus X." },
      { x: 80,   y: 67,   type: "info",  label: "K",  name: "Keeper Targets (right)", body: "Kickback, bonus X." },
      { x: 87.5, y: 53,   type: "info",  label: "UF", name: "Upper Right Flipper", body: "Best shot at the Crypt, tombstone and scoop." },
      { x: 45,   y: 75,   type: "info",  label: "C",  name: "Mode Clock", body: "12 modes; all = Crypt Jam." },
      { x: 7.5,  y: 79.5, type: "avoid", label: "!",  name: "Left Outlane", body: "Kickback when lit." },
      { x: 85.5, y: 79,   type: "avoid", label: "!",  name: "Right Outlane", body: "Scores 3M, but drains." },
    ],
  };
