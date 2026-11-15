  /* ─── JAWS (STERN 2024) ──────────────────────────────────── */
MACHINES['jaws'] = {
    name: "Jaws",  sub: "2024 · Stern · SPIKE 2 · Pro rules (Premium/LE shown)",
    tagline: "Bounty hunts that never time out · Jaws Multiball from the chum line · close the beaches · sell your gear to Quint for up to 375M",
    image: "images/jaws.webp",
    difficulty: "Medium-Hard", diffClass: "diff-medium-hard", era: "Modern",

    /* ── QUICK GUIDE (30–90 s read) ───────────────────────────── */
    quick: {
      goal: "Keep three things moving: a <strong>bounty hunt</strong> (untimed, progress kept between balls), the <strong>chum line</strong> toward <strong>Jaws Multiball</strong>, and <strong>gear</strong> from quickshots. Big points come from bounty multiballs, Jaws Multiballs, beach-closed hurry-ups and <strong>selling gear to Quint</strong>.",
      steps: [
        { title: "Start a bounty hunt",
          body: "Spin the <strong>fishing reel</strong> (or shoot the right ramp) to light Bounty Hunt, then shoot the <strong>right ramp</strong> to pick a shark. Complete its shot list, then spin the reel for its multiball: green shot, then the boat, until the shark is captured." },
        { title: "Chum → Jaws Multiball",
          body: "Hit the <strong>chum bucket</strong> captive ball, then the moving <strong>red arrows</strong> fill the chum line (it sets the jackpot value). Then a yellow shot and the <strong>fin drop target</strong> attach a barrel. Start it at the harpoon lane, left orbit, centre or right ramp. MB 2–3 need Ready Barrel (left targets) and 2–3 barrels." },
        { title: "Gear and quickshots",
          body: "The lit harpoon lane (lit from the lane above the mini-flipper), then the <strong>fin</strong> = quickshot (multiplier to 7×, lights gear; 3 quickshots = extra ball, 15M with extra balls off). Collect gear at the <strong>right ramp</strong> (right flipper picks it). With all six, <strong>sell unused gear</strong> to Quint: up to 375M, and it lights the Great White hunt." },
      ],
      shots: [
        { name: "Right ramp", why: "Bounty hunts, gear, Quint's Shack." },
        { name: "Chum bucket + red arrows", why: "Jaws Multiball and its jackpot value." },
        { name: "Harpoon lane → fin", why: "Quickshots, multiplier, gear." },
      ],
      avoid: [
        "Waiting to sell gear: fully used pieces lower Quint's multiplier (×3 … ×25) — sell once you have all six.",
        "Missing the fin after a mode's last shot: the backup jackpot pays about half.",
      ],
      target: "Milestones: a captured bounty shark plus Jaws Multiball 1 = good game. A gear sale and Jaws Multiball 2–3 = great.",
    },

    info: {
      stats: [
        { label: "Manufacturer", value: "Stern Pinball" },
        { label: "Year",         value: "2024 (January)" },
        { label: "Design",       value: "Keith Elwin" },
        { label: "Code / rules", value: "Rick Naegele, Elizabeth Gieske" },
        { label: "Art",          value: "Michael Barnard" },
        { label: "Code",         value: "1.02.0 latest (Jul 2026, fixes); rules from the 1.01 rulesheet" },
        { label: "Models",       value: "Pro, Premium, LE, 50th Anniversary Premium (Premium/LE add the Orca upper playfield and shark bash toy)" },
      ],
      theme: "Steven Spielberg's Jaws: Amity Island, Quint's Orca, the shark tower, the chum line and the Great White.",
      features: [
        { name: "Shark Encounters (5 modes)", desc: "Lit by captive-ball (bash boat) hits, started at five beach shots. Make blue shots, then the fin for the encounter jackpot (+1× machete for the game). All five light 4th of July." },
        { name: "Bounty hunts", desc: "Mako, Thresher, Hammerhead, Tiger: untimed shot lists kept between balls; the reel starts the multiball. Each capture gives a permanent perk." },
        { name: "Jaws Multiballs (3)", desc: "Chum line → barrels on the fin → start. MB1 Reel Him In, MB2 The Chase, MB3 Cage Dive; then Smile, You Son of A… (wizard)." },
        { name: "Closing the beaches", desc: "Shark tower targets add beachgoers; three at a shot start a Beach Closed hurry-up (15M+) that boosts that shot. Five closed = Rescue or Search Multiball." },
        { name: "Gear", desc: "Six pieces lit by quickshots, skill shots, Pipit etc.; collect at the right ramp. Sell to Quint for 15M × up to 25 (unused gear) + 50M per Quint's Challenge knot." },
        { name: "Machetes", desc: "Shot multiplier (from 2×) on the next shot after a lit return lane; raised by completed encounters and captures." },
        { name: "Fish Finder", desc: "Pro: 3+ hits on the left target bank, then the lane above the mini-flipper, then a flashing target. Five awards light Super Cast 'n Catch." },
        { name: "Flip-Lock", desc: "In multiball, the action button holds a ball on the mini-flipper (20 s, once per ball)." },
        { name: "Life Ring", desc: "Light the target twice, then press the action button as the ball heads for the left outlane to save it." },
      ],
      scoring: [
        { key: "Gear sale",            val: "45M – 375M (+50M per knot)" },
        { key: "Beach Closed hurry-up", val: "15M + extras" },
        { key: "Quickshot",            val: "3M+ × up to 7×" },
        { key: "Jaws MB3 super",       val: "50M, multiplied" },
        { key: "Extra ball (disabled)", val: "15M" },
      ],
      rules: [
        "Bounty hunt progress is kept between balls; hunts run only in single-ball play.",
        "Capturing the Hammerhead keeps the beach-closed shot boosts for the whole game.",
        "Pro differences: no Orca upper playfield or wheel awards; the bash toy is replaced by an extra captive-ball shot.",
        "Rules from the Tilt Forums / pinballrulesheets.com rulesheet (code 1.01).",
      ],
      benchmarks: [
        { score: "Gear sale + Jaws MB 2–3", label: "Great game" },
        { score: "Bounty capture + Jaws MB 1", label: "Good game" },
        { score: "One shark encounter + one hurry-up", label: "Baseline" },
      ],
      resources: [
        { name: "Rulesheet (pinballrulesheets.com)", url: "http://pinballrulesheets.com/stern/jaws-rulesheet", icon: "📖" },
        { name: "Stern Game Code",                   url: "https://sternpinball.com/support/game-code/", icon: "💾" },
        { name: "Pinside (Pro)",                     url: "https://pinside.com/pinball/machine/jaws-pro", icon: "🕹️" },
      ],
    },

    strategy: {
      skillShot: "Up to three attempts per ball; the level advances once the previous one is scored: plunge into the pop bumper (5M); the lane above the mini-flipper (10M + gear); a flashing left target (15M + gear). Each adds 5 s of ball save. Secret: the chum bucket or captive ball with no other switch hits.",
      actionButton: { name: "Flip-Lock / Life Ring", when: "Multiball / left outlane", desc: "Holds a ball on the mini-flipper in multiball; fires the life-ring save when lit." },
      multiball: [
        { name: "Bounty Hunt Multiball", balls: "2–3", locks: "Complete the shark's shot list.", start: "Fishing reel spinner.", jackpots: "Green shot, then the boat to weaken the shark; final green shot + boat to capture (bounty + celebration multiball).", tip: "Hunts never time out — always have one running." },
        { name: "Jaws Multiball", balls: "2+", locks: "Chum line + barrels (1, 2, 3) on the fin.", start: "Harpoon lane, left orbit, centre or right ramp.", jackpots: "MB1 red shots then jackpot (up to 3×); MB2 switch-hit jackpots; MB3 hurry-ups then 50M fin supers.", tip: "Chum bucket hits add a ball during the multiball." },
        { name: "Rescue / Search Multiball", balls: "2+", locks: "Close all five beaches.", start: "After the fifth hurry-up.", jackpots: "Rescue: 1×–3× jackpots, then fin supers up to 30M. Search: fin jackpots, then shark jackpots × balls.", tip: "You alternate between the two after the first choice." },
      ],
      goal: "<strong>Bounty hunt always running, chum toward Jaws Multiball, quickshots for gear, and sell the gear to Quint.</strong> Use machetes on big shots (hurry-ups, encounter jackpots).",
      phases: [
        { num: "Phase 1", title: "Set up", body: "Start a bounty hunt; light an encounter at the bash boat; chum the water." },
        { num: "Phase 2", title: "Multiballs", body: "Jaws MB 1, bounty captures, beach closures toward Rescue/Search." },
        { num: "Phase 3", title: "Cash in", body: "Sell gear to Quint, play the Great White hunt and Jaws MB 2–3 → wizard." },
      ],
      safeShots: [
        { name: "Right ramp", desc: "Feeds the inlane; most progress runs through it." },
        { name: "Fishing reel spinner", desc: "Bounty progress and multiball starts." },
      ],
      avoidShots: [
        { name: "Missing the fin", desc: "Backup jackpots pay much less and give no machete." },
      ],
      tips: [
        { head: "Thresher first?", body: "Its perk doubles multiball scoring while flip-locked and gives two tries per Quint's knot." },
        { head: "Hammerhead", body: "Its perk holds the beach-closed shot boosts for the rest of the game." },
        { head: "Encounter boosts", body: "Extra captive-ball hits before starting a mode add time, gear and 2× scoring." },
      ],
      mistakes: [
        "Letting gear get used up before selling it.",
        "Ignoring the chum line — Jaws Multiball 1 is the easiest multiball.",
      ],
    },

    hotspots: [
      { x: 59,   y: 32,   type: "key",   label: "B",  name: "Bash Boat / Captive Ball", body: "Lights shark encounters; weakens sharks in bounty multiball." },
      { x: 36,   y: 32,   type: "key",   label: "C",  name: "Chum Bucket", body: "Starts the chum line; adds balls in Jaws MB." },
      { x: 76,   y: 25,   type: "key",   label: "R",  name: "Fishing Reel Spinner", body: "Bounty hunts and their multiballs." },
      { x: 87,   y: 36,   type: "key",   label: "RR", name: "Right Ramp", body: "Start bounty hunts; collect gear; Quint's Shack." },
      { x: 13,   y: 37,   type: "key",   label: "H",  name: "Harpoon Lane (approx.)", body: "Quickshot start (then the fin)." },
      { x: 59,   y: 55,   type: "key",   label: "F",  name: "Fin Drop Target", body: "Barrels, quickshots, encounter jackpots." },
      { x: 26,   y: 58,   type: "info",  label: "T",  name: "Left Target Bank", body: "Fish Finder, Pipit, machetes." },
      { x: 83,   y: 51,   type: "info",  label: "P",  name: "Pop Bumper", body: "Level-1 skill shot." },
      { x: 77,   y: 62,   type: "info",  label: "LR", name: "Life Ring Target (approx.)", body: "Lights the life-ring save." },
      { x: 30,   y: 16,   type: "info",  label: "O",  name: "Orca Upper Playfield (Prem/LE only)", body: "Not on the Pro." },
      { x: 9,    y: 83,   type: "avoid", label: "!",  name: "Left Outlane", body: "Life Ring can save it." },
      { x: 86,   y: 79,   type: "avoid", label: "!",  name: "Right Outlane", body: "Drain." },
    ],
  };
