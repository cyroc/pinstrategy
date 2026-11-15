  /* ─── THE LORD OF THE RINGS (STERN 2003) ─────────────────── */
MACHINES['lordoftherings'] = {
    name: "The Lord of the Rings",  sub: "2003 · Stern · Whitestar (DMD)",
    tagline: "Collect Elf, Dwarf and Man rings · three movie multiballs (Two Towers jackpots up to 21×) · Gollum Multiball doubles/halves scoring · Destroy the Ring",
    image: "images/lord-of-the-rings.webp",
    difficulty: "Hard", diffClass: "diff-hard", era: "DMD",

    /* ── QUICK GUIDE (30–90 s read) ───────────────────────────── */
    quick: {
      goal: "Qualify the three <strong>movie multiballs</strong> — the big scorer is <strong>The Two Towers</strong>, whose jackpots multiply up to 21× — and feed them with <strong>Ring modes</strong> and <strong>Gollum Multiball</strong>. All three played light <strong>Destroy the Ring</strong>.",
      steps: [
        { title: "Rings",
          body: "The left ramp, inner orbit, right ramp and right orbit each show a lit ring type; a shot collects it and lights a short combo for two more. <strong>3 Elf</strong> = Mode Start at the Ring; <strong>7 Dwarf</strong> = Mystery at the Shire; <strong>9 Man</strong> = Gollum Multiball at Gollum's Cave." },
        { title: "Two Towers Multiball",
          body: "Spell <strong>K-E-E-P</strong> at the inlanes/outlanes to light locks; lock three balls on the <strong>sword (right) ramp</strong>. In multiball, take jackpots one after another within 3 s: the count climbs to 7, × 2 (3 balls) or × 3 (4 balls). Finish the battle for the Ring super jackpots." },
        { title: "Other multiballs",
          body: "<strong>Fellowship</strong>: collect all members (flashing shots), start at <strong>Barad-Dûr</strong>. <strong>Return of the King</strong>: 5,000 souls from the Paths of the Dead (balls into Orthanc). <strong>Gollum</strong> adds a ball to anything and flips scoring 2× / 0.5× every 7 s — aim big shots at Sméagol." },
      ],
      shots: [
        { name: "Sword (right) ramp", why: "Two Towers locks and jackpots." },
        { name: "Ring ramp → the Ring", why: "Ring modes, Ring bonus, supers." },
        { name: "Left orbit → Barad-Dûr", why: "Fellowship start, Elf gifts, Palantír relight." },
      ],
      avoid: [
        "Shooting the Shire when Mystery is lit if you're not ready — it often starts a nearly-qualified multiball.",
        "Hitting the Balrog's side posts: only firm centre hits count.",
      ],
      target: "Milestones: Two Towers jackpots in sequence plus a Ring mode = good game. All three multiballs and Destroy the Ring = great.",
    },

    info: {
      stats: [
        { label: "Manufacturer", value: "Stern Pinball" },
        { label: "Year",         value: "2003 (November); Limited Edition 2009" },
        { label: "Design",       value: "George Gomez" },
        { label: "Software",     value: "Keith Johnson, Dwight Sullivan" },
        { label: "System",       value: "Stern Whitestar, dot-matrix display" },
        { label: "Code",         value: "10.02 (final; the 2009 LE shipped on it)" },
      ],
      theme: "Peter Jackson's Lord of the Rings trilogy: the One Ring, the Fellowship, Helm's Deep, the Balrog, Gollum, Barad-Dûr and Orthanc.",
      features: [
        { name: "Rings", desc: "Elf (3) → Mode Start; Dwarf (7) → Mystery at the Shire; Man (9) → Gollum Multiball. All three sets → Ring Frenzy hurry-up." },
        { name: "Ring modes (6)", desc: "Escape the Ringwraiths, Gandalf vs Saruman, Warg Battle, War of the Ents, Attack of Shelob, Kill the Witchking; flippers pick. All six → There and Back Again." },
        { name: "Fellowship Multiball", desc: "Collect the flashing Fellowship members, start at Barad-Dûr. Balrog: hit the Balrog, then a ramp, ×8; Gandalf's ninth hit kills it (5M)." },
        { name: "Two Towers Multiball", desc: "KEEP lanes → sword-ramp locks (physical). Jackpots × balls (2×/3×) × sequence number (1–7); battle stages, then Ring and paired supers." },
        { name: "Return of the King Multiball", desc: "5,000 souls from the Paths of the Dead (Orthanc VUK; white targets raise soul values). Seven levels of four jackpots — collect them in order to raise the multipliers." },
        { name: "Gollum Multiball", desc: "Adds a ball to anything; scoring alternates Gollum ½× and Sméagol 2× every 7 s." },
        { name: "Gifts of the Elves", desc: "Earned by completing modes/multiballs; lit at the left orbit, collected at Barad-Dûr: extra ball, Ring Multiball, special, 5M, 2× scoring (60 s), Super Ring Frenzy." },
        { name: "Palantír", desc: "Relit by Barad-Dûr; helpful awards, often add-a-ball in multiball." },
        { name: "Gollum's Cave", desc: "Counted shots give Super Spinner, Pops, Ramps, Loops, Everything." },
      ],
      scoring: [
        { key: "Two Towers jackpot", val: "100K–137.5K base × 1–3 (balls) × 1–7" },
        { key: "Balrog kill",        val: "5M" },
        { key: "Destroy the Ring",   val: "1M–2.5M shots, 3M, then 5M" },
        { key: "Victory laps",       val: "500K +50K" },
        { key: "Big Points gift",    val: "5M" },
      ],
      rules: [
        "Modes are exclusive but stack with a movie multiball if started first, and with Gollum Multiball any time.",
        "Gollum Multiball can resurrect a movie multiball if started within ~5 s of it ending.",
        "The max Two Towers jackpot multiplier is 84× (triple 7 in Sméagol with 2× scoring).",
        "Rules from Larry Scott's rulesheet (ROM 5.01, updated for 8.0); later changes up to 10.02 are undocumented.",
      ],
      benchmarks: [
        { score: "Destroy the Ring", label: "Great game" },
        { score: "Two Towers sequence + Ring mode", label: "Good game" },
        { score: "One movie multiball", label: "Baseline" },
      ],
      resources: [
        { name: "Rulesheet (Larry Scott, via Pinball Nirvana)", url: "https://pinballnirvana.com/forums/resources/lord-of-the-rings-stern-2003-vp8.2993", icon: "📖" },
        { name: "Stern Manual (PDF)",                           url: "https://sternpinball.com/wp-content/uploads/2022/01/Lord_of_the_Rings_Manual.pdf", icon: "📘" },
        { name: "IPDB Entry",                                   url: "https://www.ipdb.org/machine.cgi?id=4858", icon: "🎯" },
      ],
    },

    strategy: {
      skillShot: "Lane: soft plunge into the flashing O-R-C lane = +5× bonus (flippers move it). Tower: a bit stronger into Orthanc = 250K and a trip to the Paths of the Dead. Flipper: full plunge around the left orbit, then the right orbit = 1.25M.",
      multiball: [
        { name: "The Two Towers", balls: 3, locks: "KEEP lanes light locks; lock on the sword ramp.", start: "Third lock.", jackpots: "Consecutive jackpots within 3 s raise the number to 7; ×2/×3 with 3/4 balls.", tip: "Add Gollum (Sméagol 2×) and the 2× gift for monster jackpots." },
        { name: "Fellowship of the Ring", balls: 3, locks: "Collect all flashing members.", start: "Barad-Dûr.", jackpots: "Balrog, then ramp, ×8; Balrog kill 5M.", tip: "Only firm centre Balrog hits count." },
        { name: "Return of the King", balls: 3, locks: "5,000 souls.", start: "Orthanc, Barad-Dûr or Gollum's Cave.", jackpots: "Seven levels; in-order collection raises multipliers; 1M × supers.", tip: "Hit white targets to max the soul lights before Orthanc trips." },
        { name: "Gollum Multiball", balls: "+1", locks: "9 Man rings.", start: "Gollum's Cave.", jackpots: "None — 2× / ½× scoring every 7 s.", tip: "Start it before a movie multiball — it can't be started during one." },
      ],
      goal: "<strong>Rings for modes and Gollum, KEEP and the sword ramp for Two Towers, and stacking modes and Gollum into movie multiballs.</strong> All three movie multiballs light Destroy the Ring.",
      phases: [
        { num: "Phase 1", title: "Rings", body: "Ring shots and combos; first Ring mode." },
        { num: "Phase 2", title: "Two Towers", body: "KEEP, sword locks; start a mode first, then the multiball." },
        { num: "Phase 3", title: "Finish", body: "Fellowship and RotK, then Destroy the Ring." },
      ],
      safeShots: [
        { name: "Sword ramp", desc: "Feeds the right inlane; locks and jackpots." },
        { name: "Left orbit", desc: "Around to Barad-Dûr." },
      ],
      avoidShots: [
        { name: "Palantír from the left flipper", desc: "Rebounds straight down the middle." },
      ],
      tips: [
        { head: "Sméagol timing", body: "In Gollum Multiball, wait for Sméagol (2×) before big shots." },
        { head: "War of the Ents", body: "Every Orthanc shot feeds the Paths of the Dead — great for souls." },
        { head: "Sword releases", body: "With locked balls held and lock unlit, a sword-ramp shot releases one — be ready." },
      ],
      mistakes: [
        "Starting a movie multiball before the Ring mode you want to stack.",
        "Pausing between Two Towers jackpots — over 3 s resets the number to 1.",
      ],
    },

    hotspots: [
      { x: 40,   y: 6,    type: "key",   label: "R",  name: "The Ring (approx.)", body: "Modes, Ring bonus, supers, Destroy the Ring." },
      { x: 40,   y: 33,   type: "key",   label: "RR", name: "Ring Ramp + Spinner", body: "Jump the ramp into the Ring." },
      { x: 70,   y: 45,   type: "key",   label: "S",  name: "Sword (Right) Ramp", body: "Two Towers locks and jackpots." },
      { x: 86,   y: 16,   type: "key",   label: "BD", name: "Barad-Dûr", body: "Fellowship start; Elf gifts; Palantír relight." },
      { x: 63,   y: 41,   type: "key",   label: "G",  name: "Gollum's Cave", body: "Gollum Multiball; super awards." },
      { x: 54,   y: 32,   type: "info",  label: "B",  name: "Balrog", body: "Fellowship Multiball hits." },
      { x: 52,   y: 42,   type: "info",  label: "P",  name: "Palantír", body: "Helpful awards; add-a-ball." },
      { x: 12,   y: 24,   type: "info",  label: "PD", name: "Paths of the Dead", body: "Souls for Return of the King." },
      { x: 7,    y: 40,   type: "info",  label: "SH", name: "The Shire", body: "Mystery (7 Dwarf rings)." },
      { x: 65,   y: 22,   type: "info",  label: "ORC", name: "O-R-C Lanes", body: "Bonus X; lane skill shot." },
      { x: 29,   y: 10,   type: "info",  label: "OT", name: "Orthanc", body: "VUK to the Paths of the Dead." },
      { x: 13,   y: 45,   type: "info",  label: "LO", name: "Left Orbit", body: "To Barad-Dûr; Elf gifts lit here." },
      { x: 22,   y: 37,   type: "info",  label: "LR", name: "Left Ramp", body: "Rings; Legolas." },
      { x: 31,   y: 32,   type: "info",  label: "IO", name: "Inner Orbit", body: "Rings; Gandalf." },
      { x: 82,   y: 46,   type: "info",  label: "RO", name: "Right Orbit", body: "Rings; Merry." },
      { x: 8,    y: 82,   type: "avoid", label: "!",  name: "Left Outlane", body: "K of KEEP." },
      { x: 82,   y: 81,   type: "avoid", label: "!",  name: "Right Outlane", body: "P of KEEP." },
    ],
  };
