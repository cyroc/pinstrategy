  /* ─── METALLICA PRO (STERN 2013) ─────────────────────────── */
MACHINES['metallica'] = {
    name: "Metallica",  sub: "2013 · Stern · SAM (DMD) · Pro · code 1.80",
    tagline: "Collect Grave Markers, Electric Chairs, Coffins and Snakes for Crank It Up · four feature multiballs · Fuel and Snake 2× playfield · End of the Line wizard mode",
    image: "images/metallica.webp",
    difficulty: "Medium-Hard", diffClass: "diff-medium-hard", era: "DMD",

    /* ── QUICK GUIDE (30–90 s read) ───────────────────────────── */
    quick: {
      goal: "<strong>Collect 12 of each item</strong> (Grave Markers, Electric Chairs, Coffins, Snakes) to light <strong>Crank It Up</strong> at the lower right scoop. Crank It Up song modes are where the big points are: build the value, then <strong>cash out</strong> with 2× playfield running. Multiballs are the fast way to collect items.",
      steps: [
        { title: "Items",
          body: "Each item comes from its own feature: <strong>inline drop targets</strong> (Grave Markers), <strong>Sparky</strong> (Electric Chairs), the <strong>captive ball</strong> (Coffins; 2 hits right after a left inlane) and the <strong>Snake</strong> hole (Snakes). Each hit also lights that item at the red-spider shot; shoot lit inserts for free items." },
        { title: "Multiballs",
          body: "Shoot one feature repeatedly for its multiball: Sparky 10 hits (Electric Chair, the easiest; super jackpot at Sparky), drops then the grave marker (Grave Marker), 3 captive-ball locks (Coffin, 4 balls, stackable), spell SNAKE (Snake). In any multiball, hit the 4 <strong>guitar pick</strong> targets, then the Snake: 20 s of 2× playfield and a one-time add-a-ball." },
        { title: "Crank It Up",
          body: "Pick <strong>For Whom the Bell Tolls</strong> first on a Pro (hit all five major shots three times). Collect one more of each item <strong>directly at its feature</strong> (lit inserts don't count) to light the scoop, then complete <strong>FUEL</strong>, shoot the Piston lane behind it and cash out while 2× runs: the cash-out is doubled too." },
      ],
      shots: [
        { name: "Sparky", why: "Electric Chairs; the easiest multiball." },
        { name: "Lower right scoop", why: "Crank It Up, cash-outs, Mystery." },
        { name: "Piston lane (after FUEL)", why: "2× playfield for 20 s." },
      ],
      avoid: [
        "Taking the points instead of a Crank It Up mode.",
        "Collecting the fifth Coffin Hurry-Up: Seek and Destroy turns off all your lit item inserts when it ends.",
      ],
      target: "Milestones (estimates): a multiball and Crank It Up lit = baseline. A Crank It Up cashed out at 2× = good. Several Crank It Ups or End of the Line = great.",
    },

    info: {
      stats: [
        { label: "Manufacturer", value: "Stern" },
        { label: "Year",         value: "2013" },
        { label: "Design",       value: "John Borg" },
        { label: "Software",     value: "Lyman F. Sheats Jr." },
        { label: "Art",          value: "\"Dirty Donny\" Gillies" },
        { label: "Platform",     value: "Stern SAM (DMD)" },
      ],
      theme: "The heavy metal band: Sparky in the electric chair, a coffin with a captive ball, a snake head and grave markers, with songs by the band. The Pro has no spinners on the orbits, virtual Coffin locks and a Snake that kicks the ball straight back. The image shows the Premium (VPX), which has the same shot layout.",
      features: [
        { name: "Items", desc: "Grave Markers (inline drops), Electric Chairs (Sparky), Coffins (captive ball only; 2 hits after a left inlane), Snakes (Snake hole). The red spider lights the last item you collected at the shot you just made; lit item inserts at a major shot are collected when you make it." },
        { name: "Coffin Hurry-Up", desc: "Light all three item inserts at one major shot and shoot it: a hurry-up (roughly 1M+) collected at the captive ball. Collecting one for all five major shots starts Seek and Destroy." },
        { name: "Electric Chair Multiball", desc: "Sparky 10 hits (+2 each time; the center target counts 2). 3 balls: orbits and Sparky are jackpots (275K+); fill the meter for a 1.5M+ super jackpot at Sparky. Seven super jackpots in a game make all later Electric Chair Multiballs 2M jackpots everywhere." },
        { name: "Grave Marker Multiball", desc: "Clear the three inline drops, then hit the grave marker behind them (+1 hit each time). 2 balls: flashing grave-marker shots are jackpots (~216K, rising). After five, the inline lane is a double jackpot that holds a ball on the magnet; knock it off with another ball for the super jackpot (1M + the jackpot value)." },
        { name: "Coffin Multiball", desc: "Captive ball: 5 hits for the first lock, 10 for each one after (virtual on the Pro). Third lock = 4 balls; jackpots alternate between the captive ball and the major shots, and every fifth captive-ball jackpot is a super jackpot. You can start one other multiball during it." },
        { name: "Snake Multiball", desc: "Spell SNAKE at the Snake hole (relight it with shots that have a lit Snake insert). 2 balls: every shot is a jackpot; jackpots build the Snake combo (up to 3×), collected by a quick shot into the Snake." },
        { name: "Crank It Up", desc: "12 of each item (+1 each time) lights the lower right scoop. Song modes of 5–7 minutes: For Whom the Bell Tolls, Fade to Black, Battery, Enter Sandman. Completion = 15M and a party phase. Collect one more of each item directly at its feature (lit inserts don't count) to cash out the whole mode total. All four played → End of the Line." },
        { name: "Side modes", desc: "FUEL (fill the gauge with FUEL completions: frenzy), Lady Justice (9 ramp shots spell METALLICA; alternate sides), Seek and Destroy (5 Coffin Hurry-Ups), Blackened (band members from pick-target sets). They stack with multiballs and Crank It Up." },
      ],
      scoring: [
        { key: "Crank It Up cash-out", val: "The whole mode total (×2 at 2× playfield)" },
        { key: "Crank It Up completion", val: "15M" },
        { key: "Electric Chair super jackpot", val: "1.5M+ (2M jackpots after 7 supers)" },
        { key: "End of the Line super jackpots", val: "Your Crank It Up totals, added up" },
        { key: "Skill shot", val: "About 200–250K (2× through the right lane)" },
      ],
      rules: [
        "2× playfield: FUEL completion lights the Piston lane (dead end lane) behind the FUEL targets (20 s); the Snake add-a-ball gives another 2× during multiball. They stack to 4× and apply to Crank It Up cash-outs, but not to the end-of-ball bonus.",
        "Super skill shot: hold the left flipper on the plunge, then shoot the lit shot (Coffin Hurry-Up there; always the left orbit in competition mode), the scoop (Mystery) or the Piston lane (2×).",
        "Mystery: light the 5 lanes (3 inlanes, 2 top lanes; lane change with the flippers) to light the scoop. During Crank It Up it always spots the next shot.",
        "After a cash-out, making all five major shots lights the scoop for 25% of the cash-out again, until the ball ends or Crank It Up is lit again.",
        "End of the Line: 2-ball multiball; each super jackpot adds the next Crank It Up total, so the modes you play first count most.",
      ],
      benchmarks: [
        { score: "Several Crank It Ups or End of the Line (estimate)", label: "Great game" },
        { score: "A Crank It Up cashed out at 2× playfield",           label: "Good game" },
        { score: "A multiball and Crank It Up lit",                    label: "Baseline" },
      ],
      resources: [
        { name: "Strategy Guide (Pinball Primer)", url: "https://pinballprimer.github.io/metallica_GRBE4.html", icon: "📖" },
        { name: "Rulesheet (pinballrulesheets.com)", url: "https://pinballrulesheets.com/stern/metallica-rulesheet.html", icon: "📄" },
        { name: "Stern Game Code (Pro 1.80)",     url: "https://sternpinball.com/support/game-code/", icon: "🏭" },
      ],
    },

    strategy: {
      skillShot: "Plunge and lane-change the flashing light to the lane the ball goes through (about 200–250K, rising each time; 2× through the right lane). Super skill shot: hold the left flipper, then the lit shot (Coffin Hurry-Up), the scoop (Mystery) or the Piston lane (2× playfield).",
      multiball: [
        { name: "Electric Chair Multiball", locks: "Sparky 10 hits (+2 each time).", start: "The last Sparky hit.", jackpots: "Orbits and Sparky; fill the meter for the Sparky super jackpot (1.5M+).", tip: "The easiest multiball; watch for balls coming straight down the middle off Sparky." },
        { name: "Grave Marker Multiball", locks: "Clear the inline drops.", start: "The grave marker behind them.", jackpots: "Flashing grave-marker shots; after five, a double jackpot holds a ball on the magnet for the super jackpot.", tip: "Knock the held ball off with a second ball to collect the super." },
        { name: "Coffin Multiball", locks: "Captive ball hits: 5, then 10 per lock (virtual on the Pro).", start: "Third lock.", jackpots: "Alternate captive ball and major shots; every fifth captive-ball jackpot is a super.", tip: "4 balls: start Electric Chair inside it to stack two multiballs." },
        { name: "Snake Multiball", locks: "Spell SNAKE at the Snake hole.", start: "The fifth letter.", jackpots: "Every shot; Snake combo up to 3× at the Snake hole.", tip: "Build the combo, then shoot the Snake quickly." },
      ],
      goal: "<strong>Items → Crank It Up (For Whom the Bell Tolls first) → FUEL 2× → cash out; multiballs to collect items faster.</strong>",
      phases: [
        { num: "Phase 1", title: "Items", body: "Sparky for Electric Chair Multiball; drops, captive ball and Snake for items." },
        { num: "Phase 2", title: "Crank It Up", body: "Lower right scoop; play the mode, complete FUEL for 2×." },
        { num: "Phase 3", title: "Cash out", body: "One more of each item from its feature lights the scoop; FUEL 2×, then cash out." },
      ],
      safeShots: [
        { name: "Orbits", desc: "The ball goes up to the pop bumpers; Electric Chair jackpots." },
        { name: "Lower right scoop", desc: "Crank It Up, Mystery and cash-outs." },
      ],
      avoidShots: [
        { name: "Sparky with a fast ball", desc: "Rebounds can go straight down the middle." },
      ],
      tips: [
        { head: "Mode order", body: "The first Crank It Ups count most in End of the Line, and few games reach more than one or two: play your best mode first. On a Pro that is usually For Whom the Bell Tolls." },
        { head: "Double cash-out", body: "Complete FUEL just before cashing out: the 2× applies to the whole cash-out." },
        { head: "Coffin stacking", body: "Start Coffin Multiball first, then another multiball inside it: 4 balls and two sets of jackpots." },
      ],
      mistakes: [
        "Taking the points instead of a Crank It Up mode.",
        "Cashing out without 2× playfield running.",
      ],
    },

    hotspots: [
      { x: 43,  y: 26,  type: "key",   label: "SP", name: "Sparky (Electric Chair)", body: "Electric Chairs; multiball in 10 hits." },
      { x: 84,  y: 68,  type: "key",   label: "S",  name: "Lower Right Scoop", body: "Crank It Up, cash-out, Mystery." },
      { x: 50,  y: 51,  type: "key",   label: "CB", name: "Captive Ball (Coffin)", body: "Coffins; Coffin locks; hurry-ups." },
      { x: 62,  y: 48,  type: "key",   label: "SN", name: "Snake Hole", body: "Snakes; SNAKE letters; 2× in multiball." },
      { x: 25,  y: 44,  type: "key",   label: "DT", name: "Inline Drop Targets", body: "Grave Markers; bonus X." },
      { x: 17,  y: 31,  type: "info",  label: "GM", name: "Grave Marker Target", body: "Starts Grave Marker Multiball." },
      { x: 17,  y: 61,  type: "key",   label: "F",  name: "FUEL Targets (approx.)", body: "Complete FUEL to light 2×." },
      { x: 13,  y: 56,  type: "key",   label: "2×", name: "Piston Lane (approx.)", body: "2× playfield for 20 s after FUEL." },
      { x: 21,  y: 47,  type: "info",  label: "GP", name: "Guitar Pick Targets", body: "Four picks (two by the drops, two by the right ramp): Snake 2× in multiball; band members." },
      { x: 10,  y: 38,  type: "info",  label: "LO", name: "Left Orbit", body: "Electric Chair jackpots." },
      { x: 31,  y: 37,  type: "info",  label: "LR", name: "Left Ramp", body: "METALLICA letters (Lady Justice)." },
      { x: 70,  y: 48,  type: "info",  label: "RR", name: "Right Ramp", body: "METALLICA letters (Lady Justice)." },
      { x: 88,  y: 38,  type: "info",  label: "RO", name: "Right Orbit", body: "Electric Chair jackpots." },
      { x: 67,  y: 30,  type: "info",  label: "P",  name: "Pop Bumpers", body: "Blown Pistons." },
      { x: 71,  y: 21,  type: "info",  label: "TL", name: "Top Lanes", body: "Skill shot; Mystery lanes." },
      { x: 9,   y: 84,  type: "avoid", label: "!",  name: "Left Outlane", body: "Drain." },
      { x: 83,  y: 84,  type: "avoid", label: "!",  name: "Right Outlane", body: "Drain." },
    ],
  };
