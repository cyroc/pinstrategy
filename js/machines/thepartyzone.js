  /* ─── THE PARTY ZONE ─────────────────────────────────────── */
MACHINES['thepartyzone'] = {
    name: "The Party Zone",
    sub: "1991 · Bally (Williams) · WPC",
    tagline: "Happy Hour Multiball → Rocket Fuel jackpots & the Big Bang · W-O-O-C payoff lane (10× playfield) · Robotic Comic",
    image: "images/party-zone.jpg",
    difficulty: "Medium", diffClass: "diff-medium", era: "DMD",

    /* ── QUICK GUIDE (30–90 s read) ───────────────────────────── */
    quick: {
      goal: "<strong>Happy Hour</strong> (2-ball multiball) is where the <strong>Big Bang</strong> lives: build Rocket Fuel, then two <strong>ramp</strong> shots for 10M and the Big Bang (20M+, a flat 20M in tournament mode). Between multiballs, the <strong>W-O-O-C payoff lane</strong> pays 1M–10M — and up to 10× playfield.",
      steps: [
        { title: "Skill shot (Door Prize)",
          body: "Plunge into the '?' rollover right of the B-O-P lanes: 1M, then +1M each time." },
        { title: "Happy Hour Multiball",
          body: "Make 3 <strong>Cosmic Cottage</strong> shots (Party Animals → Monsters → Dudes). 2nd multiball: make one Request at the <strong>DJ (centre) eject</strong> first; from the 3rd, a Request before every Cottage shot. A lit <strong>Comic</strong> can also award it as 'Surprise'." },
        { title: "Rocket Fuel → Big Bang",
          body: "In Happy Hour the <strong>ramp</strong> pays the Rocket Fuel value (1M–7M); the <strong>Comic eject</strong> and Back-2-Bop add 1M fuel. Fuel starts at 5 (1 in tournament mode); Big Bang lights after ~3 fuel shots: ramp = 10M (holds a ball), then the other ball up the ramp = Big Bang. When multiball ends, 2× playfield for the rest of the ball." },
        { title: "W-O-O-C payoff",
          body: "The <strong>payoff lane</strong> (behind the four W-O-O-C targets) pays 1M rising to 10M. Completing the targets lights 5M → Millions per Bop → <strong>10× playfield</strong> → Special. Pair 10× with Bop Millions or the payoff lane." },
      ],
      shots: [
        { name: "Rocket ramp", why: "Rocket Fuel jackpots; Big Bang; Eat; Ozone bonus." },
        { name: "W-O-O-C payoff lane", why: "1M–10M; 10× playfield." },
        { name: "Comic eject", why: "Comic awards (Surprise multiball); Drink; fuel." },
      ],
      avoid: [
        "The Door / skill-shot area can feed the ball back down Back-2-Bop toward the centre drain.",
      ],
      target: "Milestones: a Big Bang = good game. Big Bang plus a 10× payoff lane run = great.",
    },

    info: {
      stats: [
        { label: "Manufacturer", value: "Williams (Bally label)" },
        { label: "Year",         value: "1991 (August; some sources say September)" },
        { label: "Design",       value: "Dennis Nordman" },
        { label: "Software",     value: "Jim Strompolis" },
        { label: "Art",          value: "Greg Freres" },
        { label: "Production",   value: "3,862 (Wikipedia; Pinside 4,000)" },
      ],
      theme: "Captain B. Zarre's radio party: a spinning DJ head that watches the ball, a dancing dummy, a robotic stand-up comic, the Cosmic Cottage and a rocket ramp. You request songs, eat, drink and be merry.",
      features: [
        { name: "Rocket ramp", desc: "Ozone bonus (100K–2M), Eat, extra ball, Rocket Fuel jackpots and the Big Bang." },
        { name: "Cosmic Cottage", desc: "Right lane into the Comic saucer: three party groups start Happy Hour (Request passes needed from the 2nd multiball)." },
        { name: "DJ eject (Captain B. Zarre)", desc: "Request Time (250K + song choice), Party Saver (5M, +5M), B. Merry." },
        { name: "Comic eject + HA-HA-HA", desc: "Lit Comic: bonus X, Laff Attack (100K targets) or Surprise multiball; Drink." },
        { name: "W-O-O-C targets + payoff lane", desc: "Awards in order: 5M, Millions per Bop, 10× playfield, Special." },
        { name: "B-O-P lanes + Boppers", desc: "Bonus X up to 8×; Dance Contest via Back-2-Bop." },
        { name: "Eat, Drink & B. Merry", desc: "5 green targets → Eat (ramp 1M) → Drink (Comic 2M) → B. Merry (DJ 3M)." },
      ],
      scoring: [
        { key: "Big Bang",           val: "20M–99.99M (fixed 20M in tournament mode)" },
        { key: "Rocket Fuel jackpot", val: "1M–7M (ramp in Happy Hour)" },
        { key: "W-O-O-C payoff lane", val: "1M → 10M (+1M each)" },
        { key: "10× playfield",      val: "~10 s (adjustable)" },
        { key: "Door Prize",         val: "1M, +1M each" },
        { key: "Party Saver",        val: "5M, +5M each" },
        { key: "End Zone bonus",     val: "+100K per lit target hit; paid on an outlane drain" },
      ],
      rules: [
        "<strong>Tournament mode:</strong> the Comic awards in a fixed order (100K, Laff Attack, bonus X, Surprise…), the EB is at 9 ramps, Rocket Fuel starts at 1M and the Big Bang is a flat 20M.",
        "<strong>Big Bang</strong> also starts a 250K-per-switch frenzy until a ball drains.",
        "After the 1st Happy Hour, Request Time is lit to relight the Cottage passes; after the 2nd it must be relit.",
        "The W-O-O-C Special is swapped for another award if not collected on that ball.",
        "Rules from Colin McHale (v1.07) and Mario Moeller (1994); final ROMs L-3 / F-4. Extra balls are void under comp settings; the W-O-O-C Special normally awards points (up to 50M, depending on settings).",
      ],
      benchmarks: [
        { score: "Big Bang + 10× payoff", label: "Great game" },
        { score: "Big Bang",              label: "Good game" },
        { score: "Happy Hour started",    label: "Baseline" },
      ],
      resources: [
        { name: "Rulesheet (Mario Moeller)", url: "https://www.pinball.org/rules/partyzone2.html", icon: "📖" },
        { name: "Rulesheet (Colin McHale)",  url: "https://www.pinball.org/rules/partyzone.html", icon: "📋" },
        { name: "IPDB Entry",                url: "https://www.ipdb.org/machine.cgi?id=1764", icon: "🎯" },
      ],
    },

    strategy: {
      skillShot: "Manual plunge into the '?' Door rollover right of the B-O-P lanes: the Door Prize, 1M and +1M each time.",
      multiball: [
        { name: "Happy Hour", balls: 2,
          locks: "Three Cosmic Cottage shots (Request passes needed from the 2nd multiball); or Surprise from a lit Comic.",
          start: "Third Cottage shot.",
          jackpots: "Ramp = Rocket Fuel (1M–7M); Comic and Back-2-Bop add fuel. Big Bang lit: ramp 10M + lock, then the other ball up the ramp = Big Bang.",
          tip: "2× playfield for the rest of the ball once a ball drains." },
      ],
      goal: "<strong>Happy Hour for the Big Bang, and the W-O-O-C payoff lane (ideally under 10× playfield) for millions.</strong>",
      phases: [
        { num: "Phase 1", title: "Payoff + Comic", body: "Payoff lane toward 10M; Comic awards; Cottage locks." },
        { num: "Phase 2", title: "Happy Hour", body: "Fuel up via the Comic, then two ramp shots for the Big Bang." },
        { num: "Phase 3", title: "10× playfield", body: "W-O-O-C awards: Millions per Bop and 10× playfield together." },
      ],
      safeShots: [
        { name: "Comic eject", desc: "Holds the ball a few seconds in multiball; adds fuel." },
        { name: "Rocket ramp", desc: "Alternate with the Comic for Comic awards (Surprise multiball)." },
      ],
      avoidShots: [
        { name: "Ball falling out of the pops", desc: "After a Door plunge or Back-2-Bop the ball can drop out of the pops down the middle — be ready (Back-2-Bop is still a fuel shot in multiball)." },
      ],
      tips: [
        { head: "Drink vs Comic", body: "With Drink and the Comic both lit, letting Drink time out keeps the Comic award." },
        { head: "Bonus X ≥ 6×", body: "Once bonus X is 6× or more, the Comic stops awarding bonus X — better odds of Surprise multiball." },
        { head: "Cottage miss", body: "A half-made Cottage shot that rolls out still counts if you hit the Comic quickly." },
      ],
      mistakes: [
        "Hitting the W-O-O-C targets again before collecting the lit award (wasted).",
        "Collecting 10× playfield without anything big to shoot at.",
      ],
    },

    hotspots: [
      { x: 14.5, y: 42, type: "key",   label: "RR", name: "Rocket Ramp", body: "Fuel jackpots; Big Bang; Eat; Ozone bonus." },
      { x: 77,   y: 37.5,   type: "key",   label: "CC", name: "Cosmic Cottage", body: "Happy Hour locks." },
      { x: 67,   y: 22.5,   type: "key",   label: "CE", name: "Comic Eject", body: "Comic awards; Drink; Rocket Fuel." },
      { x: 77.5, y: 57, type: "key",   label: "PO", name: "W-O-O-C Payoff Lane", body: "1M–10M; lit W-O-O-C awards." },
      { x: 73.5, y: 54.5, type: "info",  label: "WO", name: "W-O-O-C Targets", body: "Light the next payoff award." },
      { x: 44,   y: 44.3,   type: "info",  label: "DJ", name: "DJ (Centre) Eject", body: "Request Time; Party Saver; B. Merry; Cottage passes." },
      { x: 39.5, y: 44,   type: "info",  label: "R1", name: "Request Target", body: "Light Request Time (both targets)." },
      { x: 50,   y: 43.5, type: "info",  label: "R2", name: "Time Target", body: "Light Request Time (both targets)." },
      { x: 68.5, y: 30,   type: "info",  label: "HA", name: "HA-HA-HA Targets", body: "Light the Comic." },
      { x: 24,   y: 33,   type: "info",  label: "BB", name: "Back-2-Bop Lane", body: "Dance Contest; fuel in Happy Hour." },
      { x: 44,   y: 15.5, type: "info",  label: "BP", name: "B-O-P Lanes", body: "Bonus X; Door Prize lane to their right." },
      { x: 16.3, y: 58.5,   type: "info",  label: "ED", name: "Eat, Drink & B. Merry Targets", body: "Light Eat at the ramp." },
      { x: 8,    y: 82,   type: "avoid", label: "!",  name: "Left Outlane", body: "Pays the End Zone bonus; drain." },
      { x: 83,   y: 81.5,   type: "avoid", label: "!",  name: "Right Outlane", body: "Pays the End Zone bonus; drain." },
    ],
  };
