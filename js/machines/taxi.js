  /* ─── TAXI (WILLIAMS 1988) ───────────────────────────────── */
MACHINES['taxi'] = {
    name: "Taxi",  sub: "1988 · Williams · System 11B (alphanumeric)",
    tagline: "Pick up five passengers to light the Jackpot · easy 2-ball multiball with the 300K Express Lane · Spinout skill shot · Airport rides to the Million",
    image: "images/taxi.webp",
    difficulty: "Medium", diffClass: "diff-medium", era: "SS",

    /* ── QUICK GUIDE (30–90 s read) ───────────────────────────── */
    quick: {
      goal: "<strong>Multiball all day</strong>: lock at the right <strong>lock hole</strong>, start multiball at the <strong>left ramp</strong>, and in multiball score the <strong>Express Lane</strong> (300K, then 100K ramps). Meanwhile pick up all five <strong>passengers</strong> to light the <strong>Jackpot</strong> (500K and up) for a few seconds.",
      steps: [
        { title: "Spinout",
          body: "The plunge spins the ball in the <strong>Spinout</strong> cup: 1K, 5K, 10K, <strong>25K + a passenger</strong>, 50K, 75K, 100K, then it wraps to 1K, so miss short rather than long. On default settings the value is multiplied by the ball number: take the passenger early, 100K later." },
        { title: "Multiball",
          body: "Lock a ball in the <strong>right lock hole</strong> (lit at the start; after that, picking up any passenger relights it), then shoot the <strong>left ramp</strong>. In multiball, lock again in the right hole (<strong>Express Lane 1</strong>), then within about 15 s shoot the <strong>Drac hole</strong> on the left (<strong>Express Lane 2</strong>): 300K, and both ramps are 100K for the rest of multiball. Locks can be stolen from the previous player." },
        { title: "Passengers and Jackpot",
          body: "Gorbie and Pinbot start lit; each pickup (20K) lights the next: Drac (left hole), Lola/Marilyn (center drops), Santa (Joyride hole from below). Gorbie is the right semi-orbit into the Joyride hole, Pinbot the right drops. All five light the Jackpot at the <strong>Gorbie</strong> shot for about 15 s. The <strong>Carry Passengers</strong> target (lit by a drop bank) keeps them for the next ball." },
      ],
      shots: [
        { name: "Right lock hole", why: "Lock; Express Lane 1." },
        { name: "Left ramp", why: "Starts multiball; Airport rides." },
        { name: "Gorbie (right semi-orbit)", why: "Passenger; collects the Jackpot." },
      ],
      avoid: [
        "Weak ramp shots: both ramps are long, and rejects come back down very fast.",
        "Overplunging past 100K: the Spinout wraps back to 1K.",
      ],
      target: "Milestones (estimates): two multiballs with Express Lane = baseline. A Jackpot = good. Two Jackpots or the Airport Million on top = great.",
    },

    info: {
      stats: [
        { label: "Manufacturer", value: "Williams" },
        { label: "Year",         value: "1988 (August)" },
        { label: "Design",       value: "Mark Ritchie" },
        { label: "Art",          value: "Python Anghelo" },
        { label: "Platform",     value: "Williams System 11B (alphanumeric)" },
        { label: "Production",   value: "About 7,300" },
      ],
      theme: "A New York cab picking up celebrity passengers: Dracula, Santa Claus, Gorbachev (Gorbie), PinBot and Lola (Marilyn Monroe on the early sample games).",
      features: [
        { name: "Passengers", desc: "First sequence: Gorbie and Pinbot lit, then Drac, Lola/Marilyn, Santa (two lit at a time); 20K each plus 20K in the bonus. Fifth pickup lights the Jackpot at the Gorbie shot for about 15 s; a miss means Lola/Marilyn must be picked up again. After a Jackpot, passengers come one at a time (Santa, Pinbot, Drac, Lola/Marilyn, Gorbie); a second Jackpot lights an outlane special." },
        { name: "Jackpot", desc: "Starts at 500K, max 4M. Completing the C-A-B lanes lights Raise Jackpot for 10 s (each switch +2K, pops +4K). The value carries over between players, balls and games until won. Tournament ROMs may fix it at 1M." },
        { name: "Multiball", desc: "2 balls: lock at the right hole, start at the left ramp. Express Lane: right hole, then the Drac hole within about 15 s = 300K and 100K ramps for the rest of multiball. Passengers and Airport rides still count in multiball." },
        { name: "Airport", desc: "An inlane lights the opposite ramp: 20K, 40K, 60K, 80K, 100K; the 100K lights the Airport Million at the Joyride hole (timed on harder settings). Resets each ball." },
        { name: "Joyride and C-A-B", desc: "Right inlane lights the Joyride hole for about 10 s: 10K, spot passenger, mystery (60K–290K), extra ball or special. C-A-B raises bonus X (max 5×, then 50K) and lights Raise Jackpot." },
      ],
      scoring: [
        { key: "Jackpot",        val: "500K → 4M" },
        { key: "Airport Million", val: "1M" },
        { key: "Express Lane",   val: "300K + 100K ramps" },
        { key: "Spinout",        val: "Up to 100K × ball number" },
        { key: "Passenger",      val: "20K + 20K bonus" },
      ],
      rules: [
        "The Lola/Marilyn drops must be finished within 10 s and the Pinbot drops within 15 s, or they reset.",
        "The Drac hole's catapult throws the ball up a habitrail onto the left ramp (Departures); it counts a left-ramp Airport ride when that ramp is lit (not when the shot collects Drac).",
        "Extra balls can't be set to a point value, so they're usually just off in competition; specials score 50K.",
        "Bonus (max 99K × 5 + 20K per passenger) and bonus X reset every ball.",
      ],
      benchmarks: [
        { score: "Two Jackpots or the Airport Million (estimate)", label: "Great game" },
        { score: "A Jackpot",                                      label: "Good game" },
        { score: "Two multiballs with Express Lane",               label: "Baseline" },
      ],
      resources: [
        { name: "Strategy Guide (Pinball Primer)", url: "https://pinballprimer.github.io/taxi_GrN90.html", icon: "📖" },
        { name: "Rulesheet (Pinball Archive)",     url: "https://web.archive.org/web/2010/http://www.pinball.org/rules/taxi.html", icon: "📄" },
        { name: "SDPC Cheatsheet",                 url: "https://pinball.miraheze.org/wiki/Taxi", icon: "📄" },
        { name: "Bowen Kerins Tutorial (YouTube)", url: "https://www.youtube.com/watch?v=Ul5Zp5z4mpU", icon: "🎥" },
        { name: "Pinside Game Page",               url: "https://pinside.com/pinball/machine/taxi", icon: "🕹️" },
      ],
    },

    strategy: {
      skillShot: "Spinout: 25K + a passenger early in the game; 100K (× ball number on default settings) later. Miss short rather than long.",
      multiball: [
        { name: "Multiball", balls: 2, locks: "Right lock hole (relit by any passenger after the first multiball).", start: "Left ramp with a ball locked.", jackpots: "Express Lane: right hole, then the Drac hole within about 15 s = 300K; ramps 100K for the rest of multiball. The passenger Jackpot also counts.", tip: "Make the Express Lane first; then pick up passengers with two balls in play." },
      ],
      goal: "<strong>Lock → left ramp → Express Lane; passengers to the Jackpot; Airport rides when the ramps are on.</strong>",
      phases: [
        { num: "Phase 1", title: "Multiball", body: "Lock, left ramp, Express Lane." },
        { num: "Phase 2", title: "Passengers", body: "Follow the lit passengers; hit Carry Passengers when it's lit." },
        { num: "Phase 3", title: "Jackpot", body: "Gorbie shot within about 15 s of the fifth pickup." },
      ],
      safeShots: [
        { name: "Right lock hole", desc: "A simple shot; lock or Express Lane." },
        { name: "Drac hole", desc: "Passenger; Express Lane 2; feeds the left ramp." },
      ],
      avoidShots: [
        { name: "Ramps with tired flippers", desc: "Long ramps; weak shots return fast." },
      ],
      tips: [
        { head: "Leave Drac", body: "If you can't reach the Jackpot this multiball, save Drac: picking him up after multiball relights the lock." },
        { head: "Carry Passengers", body: "Best hit with a left-flipper backhand right after a drop bank." },
        { head: "Raise Jackpot", body: "Complete C-A-B and let the pops run for 10 s." },
      ],
      mistakes: [
        "Skipping the Express Lane in multiball.",
        "Not stealing a lock another player left you.",
      ],
    },

    hotspots: [
      { x: 76, y: 54, type: "key",   label: "LK", name: "Lock Hole (Express Lane 1)", body: "Lock; Express Lane 1." },
      { x: 21, y: 46, type: "key",   label: "LR", name: "Left Ramp (Departures)", body: "Starts multiball; Airport." },
      { x: 62, y: 36, type: "key",   label: "GB", name: "Gorbie (right semi-orbit)", body: "Passenger; Jackpot." },
      { x: 18, y: 57, type: "key",   label: "DR", name: "Drac Hole (Express Lane 2)", body: "Passenger; Express Lane 2; extra ball." },
      { x: 70, y: 44, type: "info",  label: "RR", name: "Right Ramp (Arrivals)", body: "Airport." },
      { x: 46, y: 44, type: "info",  label: "LD", name: "Lola/Marilyn Drop Targets", body: "Passenger; Carry Passengers." },
      { x: 79, y: 60, type: "info",  label: "PB", name: "Pinbot Drop Targets", body: "Passenger; Carry Passengers." },
      { x: 30, y: 21, type: "info",  label: "JR", name: "Joyride Hole", body: "Santa (from below); Gorbie/Jackpot (from above); Airport Million." },
      { x: 48, y: 20, type: "info",  label: "CAB", name: "C-A-B Lanes", body: "Bonus X; Raise Jackpot." },
      { x: 79, y: 10, type: "info",  label: "SO", name: "Spinout", body: "Skill shot." },
      { x: 9,  y: 78, type: "avoid", label: "!",  name: "Left Outlane", body: "Drain." },
      { x: 82, y: 77, type: "avoid", label: "!",  name: "Right Outlane", body: "Drain." },
    ],
  };
