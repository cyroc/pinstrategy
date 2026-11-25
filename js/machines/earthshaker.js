  /* ─── EARTHSHAKER (WILLIAMS 1989) ────────────────────────── */
MACHINES['earthshaker'] = {
    name: "Earthshaker",  sub: "1989 · Williams · System 11B (alphanumeric)",
    tagline: "Earthquake Institute zones light locks · 3-ball multiball with one big jackpot · Quick Multiball Million · center ramp miles · Shelter Match-ups · the first shaker motor",
    image: "images/earthshaker.webp",
    difficulty: "Medium", diffClass: "diff-medium", era: "SS",

    /* ── QUICK GUIDE (30–90 s read) ───────────────────────────── */
    quick: {
      goal: "Collect the flashing <strong>zones</strong> shown on the Earthquake Institute to light locks, lock two balls and play <strong>3-ball multiball</strong>. Multiball has <strong>one jackpot</strong>: raise it with the <strong>drop targets</strong> first, light it at the <strong>center ramp</strong> and collect it at the <strong>Fault</strong> (side ramp). Center ramp <strong>miles</strong> build a bonus that lasts all game.",
      steps: [
        { title: "Zones and locks",
          body: "The flashing building numbers are the zones you need (4 at first, more later). The <strong>Fault</strong> and the <strong>captive ball</strong> spot the lowest one. Each completed set lights a lock and raises bonus X. Lock 1 at the Fault or the <strong>Shelter</strong> scoop, lock 2 only at the Fault; multiball starts with your next plunge." },
        { title: "Jackpot",
          body: "Every <strong>drop bank</strong> completion raises the jackpot: 500K → 1M → 1.25M → 1.5M → 1.5M → 2M → <strong>2.5M</strong>, then back to 500K. In multiball hit the drops to the value you want, then <strong>center ramp</strong> (lights it) → <strong>Fault</strong> (collects). Missed it? For about 15 s afterwards the Shelter starts a 2-ball <strong>Aftershock</strong>." },
        { title: "Miles and Quick Multiball",
          body: "Center ramp: 25K, 50K, then +10K to 100K, plus 1 mile (2 after the left inlane; the ramp feeds that inlane). Bonus = miles × 1K × bonus X + 20K per Fault trip, all game. A 250K captive ball or that Match-up award lights <strong>Quick Multiball</strong> at the zone 5 hole: the Fault scores <strong>1M</strong> once." },
      ],
      shots: [
        { name: "Center ramp", why: "Miles; lights the jackpot; captive ball value." },
        { name: "Fault (side ramp)", why: "Locks, jackpot, Million, spots zones." },
        { name: "Drop targets", why: "Raise the jackpot." },
      ],
      avoid: [
        "Collecting the jackpot at a low value: there's only one per multiball.",
        "Random plunges: medium is the 100K skill shot; at multiball start plunge full, for an early center ramp.",
      ],
      target: "Milestones (estimates): one multiball = baseline. A 2M+ jackpot = good. Two big jackpots and maxed miles = great.",
    },

    info: {
      stats: [
        { label: "Manufacturer", value: "Williams" },
        { label: "Year",         value: "1989 (February)" },
        { label: "Design",       value: "Pat Lawlor" },
        { label: "Platform",     value: "Williams System 11B (alphanumeric)" },
        { label: "Production",   value: "About 5,260" },
      ],
      theme: "A California earthquake: the Earthquake Institute, the Fault ramp, a Quake Shelter and a shaker motor (the first in pinball) that rocks the cabinet. Rules are similar to Whirlwind (1990).",
      features: [
        { name: "Zones", desc: "Nine zones: 1 left standup next to the zone 5 eject, 2 and 3 lower right standups, 4 standup right of the center ramp, 5 eject hole left of center, 6 upper loop from the upper flipper, 7 inner right inlane, 8 left inlane, 9 captive ball. First multiball: all needed zones lit at once; second: one building row at a time; third on: one zone at a time, in order." },
        { name: "Multiball and jackpot", desc: "3 balls. Center ramp lights the jackpot, Fault collects it; only one per multiball, then Fault shots score 250K. Drop completions raise the value (500K + special, 1M, 1.25M, 1.5M, 1.5M + extra ball, 2M, 2.5M, then back to 500K). No jackpot collected → Aftershock (2-ball restart) at the Shelter for about 15 s." },
        { name: "Quick Multiball", desc: "Lit by a Match-up or a 250K captive ball; start at the zone 5 hole. 2 balls; the Fault scores 1M once. With one ball locked, it lights lock 2 at the Fault, and locking it turns into normal multiball. Third Million in a game = extra ball." },
        { name: "Center ramp and miles", desc: "25K, 50K, +10K to 100K per ball; 1 mile (2 when lit by the left inlane). Max 99 miles; after that every center ramp is 200K (End of the Road). 12 and 60 miles light extra balls at the Shelter, 75 lights the outlane specials. Raises the captive ball (50K–250K, decays over time)." },
        { name: "Shelter and upper loop", desc: "Shelter Match-up: miles, 100K, spot zone, complete building, light Quick Multiball, Billboard 100K, Jet Bumpers On, rarely special or extra ball. Upper loop (either way) raises pop bumper values; once all three flash, each loop is 100K." },
      ],
      scoring: [
        { key: "Jackpot",               val: "500K → 2.5M" },
        { key: "Quick Multiball Million", val: "1M" },
        { key: "Captive ball (max)",    val: "250K + Quick Multiball" },
        { key: "End of the Road",       val: "200K per center ramp" },
        { key: "Skill shot",            val: "10K / 25K / 50K / 100K" },
        { key: "Drop bank",             val: "50K → 100K" },
      ],
      rules: [
        "Skill shot: the plunge runs a spiral at the back and can drop off at four points (10K, 25K, 50K, 100K); a full plunge all the way round is 25K and a mile and feeds the left inlane.",
        "Bonus X (2×–6×, raised by each lit lock) carries over between balls; miles and Fault trips count for the whole game.",
        "In competition, specials score 100K; extra balls are simply off.",
        "Tournaments may run a special ROM (Soren's) that heavily weakens the center-ramp-all-day strategy; check before relying on it.",
      ],
      benchmarks: [
        { score: "Two big jackpots + max miles (estimate)", label: "Great game" },
        { score: "A 2M+ jackpot",                            label: "Good game" },
        { score: "One multiball",                            label: "Baseline" },
      ],
      resources: [
        { name: "Strategy Guide (Pinball Primer)", url: "https://pinballprimer.github.io/earthshaker_GRw0r.html", icon: "📖" },
        { name: "Rulesheet (Pinball Archive)",     url: "https://web.archive.org/web/2010/http://www.pinball.org/rules/earthshaker.html", icon: "📄" },
        { name: "SDPC Cheatsheet",                 url: "https://pinball.miraheze.org/wiki/Earthshaker", icon: "📄" },
        { name: "Bowen Kerins Tutorial (YouTube)", url: "https://youtu.be/ZHWZa_CHnkA", icon: "🎥" },
        { name: "Pinside Game Page",               url: "https://pinside.com/pinball/machine/earthshaker", icon: "🕹️" },
      ],
    },

    strategy: {
      skillShot: "A medium plunge that drops off the spiral at the 100K point. A full plunge gives 25K and a mile and lights the center ramp for 2 miles.",
      multiball: [
        { name: "Multiball", balls: 3, locks: "Complete the building's zones; lock 1 at the Fault or Shelter, lock 2 at the Fault.", start: "Plunge after the second lock.", jackpots: "One jackpot: center ramp lights, Fault collects (500K–2.5M, set by the drops).", tip: "Drops first until the jackpot reads 2M or 2.5M, then ramp → Fault. The value also steps when the drops reset at the start of a ball, so check the backbox." },
        { name: "Aftershock", balls: 2, locks: "None.", start: "Shelter within about 15 s after a multiball with no jackpot.", jackpots: "Same jackpot rules; it must be relit at the center ramp.", tip: "Watch for it if multiball ends without a jackpot." },
        { name: "Quick Multiball", balls: 2, locks: "Lit by a Match-up or a 250K captive ball.", start: "Zone 5 eject hole.", jackpots: "Fault = 1M (once).", tip: "With one ball locked, lock the second at the Fault to turn it into full multiball." },
      ],
      goal: "<strong>Zones → locks → multiball with a 2M+ jackpot; center ramp miles and Quick Multiball Millions in between.</strong>",
      phases: [
        { num: "Phase 1", title: "Zones", body: "Flashing zones; the Fault and captive ball spot one." },
        { num: "Phase 2", title: "Multiball", body: "Drops to a big value, then center ramp → Fault." },
        { num: "Phase 3", title: "Miles", body: "Center ramp loops from the left flipper; Shelter Match-ups." },
      ],
      safeShots: [
        { name: "Center ramp", desc: "Returns to the left inlane, so it can be looped from the left flipper." },
        { name: "Fault from the upper left flipper", desc: "Spots zones; 3 miles; 20K bonus each." },
      ],
      avoidShots: [
        { name: "Fault with the jackpot lit at a low value", desc: "Raise it at the drops first." },
      ],
      tips: [
        { head: "Captive ball", body: "Center ramps raise it for a few seconds; hitting it at 250K lights Quick Multiball. Shelter shots raise its minimum." },
        { head: "Bonus carries", body: "Bonus X and miles count all game, so ball 1 miles are worth the most." },
        { head: "Match-up kickout", body: "The Shelter award spin varies in length: watch for the eject." },
      ],
      mistakes: [
        "Taking a 500K jackpot because it was lit.",
        "Ignoring the Aftershock after a missed jackpot.",
      ],
    },

    hotspots: [
      { x: 57, y: 40, type: "key",   label: "CR", name: "Center Ramp", body: "Miles; lights the jackpot; raises the captive ball." },
      { x: 74, y: 45, type: "key",   label: "F",  name: "Fault (side ramp)", body: "Locks; jackpot; Million; spots a zone." },
      { x: 42, y: 35, type: "key",   label: "DT", name: "Billboard Drop Targets", body: "Raise the jackpot." },
      { x: 73, y: 30, type: "key",   label: "SH", name: "Quake Shelter Scoop", body: "Match-up; lock 1; Aftershock." },
      { x: 74.5, y: 61, type: "key", label: "CB", name: "Captive Ball", body: "Spots a zone; 250K lights Quick Multiball." },
      { x: 30, y: 47, type: "info",  label: "5",  name: "Zone 5 Eject Hole", body: "Starts Quick Multiball." },
      { x: 63, y: 39, type: "info",  label: "4",  name: "Zone 4 Target", body: "Zone." },
      { x: 44, y: 25, type: "info",  label: "EI", name: "Earthquake Institute", body: "Shows the zones you need." },
      { x: 12, y: 45, type: "info",  label: "UL", name: "Upper Loop", body: "Pop bumper values; 100K loops." },
      { x: 15, y: 61, type: "info",  label: "UF", name: "Upper Left Flipper", body: "Fault; upper loop (zone 6)." },
      { x: 15, y: 10, type: "info",  label: "SK", name: "Skill Shot Spiral", body: "10K–100K drop-off points." },
      { x: 8,  y: 84, type: "avoid", label: "!",  name: "Left Outlane", body: "Drain." },
      { x: 85, y: 84, type: "avoid", label: "!",  name: "Right Outlane", body: "Drain." },
    ],
  };
