  /* ─── ELVIRA'S HOUSE OF HORRORS (STERN 2019) ─────────────── */
MACHINES['elvirashouseofhorrors'] = {
    name: "Elvira's House of Horrors",  sub: "2019 · Stern · Spike 2 (LCD) · Premium/LE",
    tagline: "Haunts in the house · Garage and Trunk multiballs · Deadhead Crypt · Gappa Angry · Double Trouble · Wild Market Value",
    image: "images/elviras-house-of-horrors.webp",
    difficulty: "Medium-Hard", diffClass: "diff-medium-hard", era: "Modern",

    /* ── QUICK GUIDE (30–90 s read) ───────────────────────────── */
    quick: {
      goal: "Play <strong>Haunts</strong> at the house and finish them; each finish adds a <strong>Trailer Trash</strong> hurry-up. Three Haunts played light the <strong>House Party</strong> multiball. Stack multiballs under <strong>Double Trouble</strong> (2×, then 4×).",
      steps: [
        { title: "Haunts",
          body: "Shoot the <strong>house entrance</strong> until its light flashes purple, pick a window with the flippers, and shoot it again. 45 s to finish; the lit shots change by Haunt. Then shoot one or both ramps and the house for Trailer Trash (up to 100% of the Haunt again)." },
        { title: "Multiballs",
          body: "<strong>Garage</strong>: hit the gravestone drop target to light locks, lock 3 balls (Wild Women, Add-a-Zombie, Attic Attack). <strong>Trunk</strong>: complete the <strong>36-24-36</strong> targets, lock 2 on the <strong>left ramp</strong>. Garage multiballs can start during a Haunt." },
        { title: "Double Trouble",
          body: "Complete the 36-24-36 targets and the <strong>Hand of Fate</strong> targets, then roll a lit inlane: 2× scoring for 30 s. Do it again while running for 4×. Start it before a multiball or a Haunt finale." },
      ],
      shots: [
        { name: "House entrance", why: "Haunts, Trailer Trash, super jackpots." },
        { name: "Left ramp", why: "Trunk locks; Trailer Trash boost." },
        { name: "Garage", why: "Three lock multiballs." },
      ],
      avoid: [
        "The left outlane unless Hand of Fate is lit; the right one unless Return (ball save) is lit.",
        "Draining or timing out a Haunt: it can't be replayed until They Came From Space.",
      ],
      target: "Milestones (estimates): two Haunts and a Garage multiball = baseline. House Party = good. Gappa Angry Multiball or They Came From Space = great.",
    },

    info: {
      stats: [
        { label: "Manufacturer", value: "Stern Pinball" },
        { label: "Year",         value: "2019 (October)" },
        { label: "Design",       value: "Dennis Nordman" },
        { label: "Code",         value: "Lyman Sheats (before v1.00)" },
        { label: "Art",          value: "Greg Freres" },
        { label: "Platform",     value: "Stern Spike 2 (LCD)" },
        { label: "Models",       value: "Premium, LE (400), Signature (50), later Blood Red Kiss (500): same rules; no Pro" },
      ],
      theme: "Elvira's third pinball: she moves into a house haunted by characters from 26 B-movies (plus Deadheads and Gar-Goils from her earlier games) and must put them back in their films before selling the house.",
      features: [
        { name: "Haunts", desc: "Six main Haunts (Night of the Living Dead, Teenagers from Outer Space, The Brain That Wouldn't Die, The Manster, Manos, The Werewolf of Washington) plus four behind the locked window (Skeleton Key). 45 s each; shots start at 500K, final shot 2M, both rising. Two finished Haunts light an extra ball." },
        { name: "Trailer Trash and Director's Cut", desc: "Finishing a Haunt lights the house for 50% of its score again; one ramp first = 75%, both = 100%. Four finished Haunts light Director's Cut: replay each Haunt's value via the Cellar, then a 100M bonus." },
        { name: "House Party / They Came From Space", desc: "House Party: after 3 Haunts played; 4-ball, all shots jackpots (25K × shots made in the last 3 Haunts), house = Super Party Jackpot (all jackpots again); hit it while the turret eye faces you to add a ball. They Came From Space: after 6 Haunts; 6-ball, six phases of 5 jackpots + super jackpot, 100M for finishing." },
        { name: "Garage multiballs (3 locks)", desc: "Gravestone drop target lights locks (1 hit for all locks at first, then 1 per lock, then 2). Wild Women: 5 jackpots (350K+) then house super jackpot. Add-a-Zombie: 4 shots for 500K+, Garage adds a jackpot. Attic Attack: all shots, super jackpot at the house every 5." },
        { name: "Junk in the Trunk", desc: "36-24-36 targets pick and light a Junk item; the left ramp collects it and locks a ball. Skeleton Key (bonus Haunt), Lab Test (bigger jackpots), Dagger (Haunt bonus), Atomic Raygun (action button spots a shot). 2 locks = Trunk Multiball; all four items = Phone-A-Fiend Multiball." },
        { name: "Deadhead Family Crypt", desc: "Hit the crypt door to open it, enter, then hit the Deadhead toy and shoot the crypt to beat it. 1 = Return (right outlane save), 2 = extra ball, 3rd = Super Head Shot. Each beaten Deadhead is 250K in bonus." },
        { name: "Freak Fryer and Gappa Angry", desc: "1,000 switch hits fill the Freak Fryer (1M–3M per level). Gappa Angry at the house: hit the listed shots and lock a ball in each stage; five locks, then the Cellar (six stages) = Super Jackpot and 6-ball Gappa Angry Multiball. Draining early gives a smaller mode (Pool Party to 5-ball Run For Your Life)." },
        { name: "Wild Market Value (wizard)", desc: "Start Director's Cut, Super Head Shot, Phone-A-Fiend, Gappa Angry, Gar-Goils Gone Wild, Attic Attack and They Came From Space (each task 5M, +5M per task). Then the Cellar starts a 30 s hurry-up at the Wild Market Value target." },
      ],
      scoring: [
        { key: "They Came From Space complete", val: "100M" },
        { key: "Director's Cut complete",       val: "100M bonus" },
        { key: "Wild Market Value task",        val: "5M, +5M each" },
        { key: "Haunt final shot",              val: "2M+ (rises with shots)" },
        { key: "Back Door skill shot",          val: "1M (+250K each, max 2.5M)" },
        { key: "Hand of Fate wheel",            val: "2M / 5M / double bonus" },
        { key: "Deadhead (bonus)",              val: "250K each" },
      ],
      rules: [
        "Skill shots: a plunge into a Dead End lane = 250K (+25K) and +5× bonus; into the Back Door = 1M and qualifies (or starts) a Haunt.",
        "Haunt timer pauses in the bumpers; any lit shot under 15 s resets it to 15 s.",
        "Side modes: 5 ramp shots = Un-Happy Hour (ramps 350K+); 5 orbit shots = Drive Me Crazy (orbits 300K+). 30 s each.",
        "Gar-Goils Gone Wild: complete the four Gar-Goil targets until the gauge is full, then once more.",
        "Hand of Fate: right target bank lights the left outlane; stop the wheel with the action button for ball save, multiball extension, 2M, 5M, double bonus (later: extra ball, special). All collected = Manos Wheel.",
        "Extra balls (2 finished Haunts, 2 Deadheads, the Hand of Fate wheel) are off in competition.",
        "Values are from the community rulesheet for code 1.01; later code may differ (later updates added content such as a Pew Pew Pew Frenzy mode).",
      ],
      benchmarks: [
        { score: "Gappa Angry Multiball or They Came From Space (estimate)", label: "Great game" },
        { score: "House Party",                                             label: "Good game" },
        { score: "Two Haunts + a Garage multiball",                         label: "Baseline" },
      ],
      resources: [
        { name: "Rulesheet (Pinball Rule Sheets / Tilt Forums)", url: "https://pinballrulesheets.com/stern/elvira-s-house-of-horrors-rulesheet.html", icon: "📖" },
        { name: "SDPC Cheatsheet",                               url: "https://pinball.miraheze.org/wiki/Elvira%27s_House_of_Horrors", icon: "📄" },
        { name: "Feature Matrix (Stern)",                        url: "https://sternpinball.com/wp-content/uploads/2019/09/Elviras-House-of-Horrors-Pinball-Feature-Matrix.pdf", icon: "📄" },
        { name: "Pinside Game Page",                             url: "https://pinside.com/pinball/machine/elviras-house-of-horrors-premium", icon: "🕹️" },
      ],
    },

    strategy: {
      skillShot: "Soft plunge into the Back Door: 1M and a Haunt qualified (or started). Dead End lanes: 250K and +5× bonus.",
      multiball: [
        { name: "Wild Women → Add-a-Zombie → Attic Attack", balls: 3, locks: "Gravestone drop target lights the Garage locks.", start: "Third lock.", jackpots: "Wild Women: 5 jackpots then the house super jackpot. Add-a-Zombie: 4 shots; Garage adds one. Attic Attack: all shots, super jackpot at the house every 5.", tip: "Start them during a Haunt or Double Trouble." },
        { name: "Trunk Multiball", balls: 2, locks: "36-24-36 targets light the left ramp lock; 2 locks.", start: "Second lock.", jackpots: "Two random shots; trunk targets move them and light a left ramp super jackpot.", tip: "Can be carried into other modes." },
        { name: "House Party", balls: 4, locks: "Play 3 Haunts.", start: "House entrance.", jackpots: "All shots; house = Super Party Jackpot (all jackpots again).", tip: "Hit the super when the turret eye faces you for an extra ball." },
        { name: "Gappa Angry Multiball", balls: 6, locks: "Fill the Freak Fryer, then lock through six stages.", start: "Cellar after the last stage.", jackpots: "All shots; super jackpots by clearing them and shooting the house.", tip: "Back Door skill shots spot a shot in each stage." },
      ],
      goal: "<strong>Haunts (finish + Trailer Trash) → House Party → Garage and Trunk multiballs under Double Trouble → Deadheads → Gappa Angry → They Came From Space.</strong>",
      phases: [
        { num: "Phase 1", title: "First Haunts", body: "Back Door skill shot; finish Haunts and collect Trailer Trash with both ramps first." },
        { num: "Phase 2", title: "Multiballs", body: "Garage locks and trunk locks; light Double Trouble before starting them. Third Haunt: House Party." },
        { num: "Phase 3", title: "Wizard tasks", body: "Deadheads to Super Head Shot, Freak Fryer to Gappa Angry, Director's Cut after 4 finished Haunts, then They Came From Space and Wild Market Value." },
      ],
      safeShots: [
        { name: "Ramps", desc: "Both return to the flippers; they boost Trailer Trash and count for Un-Happy Hour." },
        { name: "Orbits", desc: "Drive Me Crazy progress; weak left orbits can fall into the Back Door for a spotted Haunt shot." },
      ],
      avoidShots: [
        { name: "Crypt door", desc: "Only needs hits to open (1, +1 per Deadhead beaten); otherwise the ball bounces back into play." },
      ],
      tips: [
        { head: "Choose Haunts", body: "Flippers change the window. The Werewolf rewards fast combos; Teenagers lets you build the final shot on the spinner." },
        { head: "Raygun", body: "The Atomic Raygun (Trunk junk) spots a shot in the latest mode: save it for a hard Haunt shot." },
        { head: "House Party value", body: "Its jackpots are 25K × shots made in the last three Haunts: make extra lit shots before each Haunt's final shot." },
        { head: "Gappa shortcut", body: "A ball already locked in the Trunk instantly completes a Gappa Angry stage when another lands there." },
        { head: "4× Double Trouble", body: "Complete a target bank again while 2× runs to extend it; qualify Double Trouble again for 4×." },
        { head: "Hand of Fate", body: "When lit, a left-outlane drain spins the wheel: hit the action button within 6 s." },
      ],
      mistakes: [
        "Collecting Trailer Trash without shooting a ramp first (only 50%).",
        "Letting Haunts time out: they're locked until They Came From Space.",
      ],
    },

    hotspots: [
      { x: 47, y: 29, type: "key",   label: "HE", name: "House Entrance (front door)", body: "Starts Haunts; Trailer Trash; super jackpots. Cellar is beneath it." },
      { x: 27, y: 37, type: "key",   label: "LR", name: "Left Ramp / Trunk", body: "Trunk locks and junk; Trailer Trash boost." },
      { x: 64, y: 38, type: "key",   label: "RR", name: "Right Ramp", body: "Trailer Trash boost; Un-Happy Hour." },
      { x: 35, y: 26, type: "key",   label: "GA", name: "Garage", body: "Gravestone drop target, then 3 locks." },
      { x: 77, y: 39, type: "key",   label: "CY", name: "Deadhead Family Crypt", body: "Open the door, beat Deadheads." },
      { x: 15, y: 41, type: "key",   label: "LO", name: "Left Orbit", body: "Drive Me Crazy; weak shots fall into the Back Door." },
      { x: 87, y: 42, type: "key",   label: "RO", name: "Right Orbit / Spinner", body: "Drive Me Crazy; spinner for Teenagers." },
      { x: 22, y: 4,  type: "info",  label: "BD", name: "Back Door", body: "Skill shot: 1M and a Haunt." },
      { x: 22, y: 62, type: "info",  label: "TT", name: "36-24-36 Trunk Targets", body: "Junk, trunk locks, Double Trouble." },
      { x: 82, y: 63, type: "info",  label: "HF", name: "Hand of Fate Targets", body: "Light the left outlane wheel; Double Trouble." },
      { x: 72, y: 64, type: "info",  label: "GG", name: "Gar-Goil Gauge", body: "Four Gar-Goil targets fill it." },
      { x: 45, y: 63, type: "info",  label: "FF", name: "Freak Fryer", body: "Switch hits; full = Gappa Angry." },
      { x: 73, y: 14, type: "info",  label: "PB", name: "Pop Bumpers", body: "Pause the Haunt timer; Pool Party." },
      { x: 6,  y: 82, type: "avoid", label: "!",  name: "Left Outlane", body: "Hand of Fate wheel when lit." },
      { x: 88, y: 82, type: "avoid", label: "!",  name: "Right Outlane", body: "Return (ball save) after a Deadhead." },
    ],
  };
