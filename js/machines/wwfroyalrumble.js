  /* ─── WWF ROYAL RUMBLE (DATA EAST 1994) ──────────────────── */
MACHINES['wwfroyalrumble'] = {
    name: "WWF Royal Rumble",  sub: "1994 · Data East · Version 3 (DMD)",
    tagline: "Nine wrestling modes · collect 9 wrestlers for multiball · 100M super jackpots · Pandemonium · Royal Rumble wizard mode",
    image: "images/wwf-royal-rumble.webp",
    difficulty: "Medium", diffClass: "diff-medium", era: "DMD",

    /* ── QUICK GUIDE (30–90 s read) ───────────────────────────── */
    quick: {
      goal: "Collect <strong>9 wrestlers</strong> at the three wrestler shots for <strong>multiball</strong>, then 9 jackpots light the <strong>super jackpot</strong> (up to 100M) at the upper playfield's top hole. Between multiballs, play the <strong>nine modes</strong> toward the <strong>Royal Rumble</strong> wizard mode.",
      steps: [
        { title: "Wrestlers → multiball",
          body: "Wrestlers are collected at the <strong>left ramp</strong>, <strong>center ramp</strong> and <strong>right orbit</strong> (any order the first time). With all 9, shoot the <strong>Macho Man lane</strong> (lower right) up to the upper playfield (first multiball: the left ramp also works). Jackpots start at 20M, +5M each." },
        { title: "Super jackpot",
          body: "After all 9 wrestlers are recollected, complete the <strong>upper playfield drops</strong>, then the <strong>top hole</strong>: up to <strong>100M</strong>. Holding a flipper drains 10M a second from it, so don't cradle while it's lit." },
        { title: "Modes",
          body: "Wrestler shots move the flashing mode; start it at the <strong>left or center scoop</strong> (a center ramp relights them). Best: <strong>Pandemonium</strong> (add balls at the top hole; up to 2M a switch), Banzai (left ramp 5M–20M), Search for Doink (25M), Sleeper Hold (pops, 30M)." },
      ],
      shots: [
        { name: "Center ramp", why: "Wrestlers; relights mode scoops." },
        { name: "Left ramp", why: "Wrestlers, Banzai, to the upper playfield." },
        { name: "Top hole (upper playfield)", why: "Super jackpot; Pandemonium add-a-ball." },
      ],
      avoid: [
        "Tag Team Millions: the Tag standups are risky shots for modest points.",
        "Cradling while the super jackpot is lit: it loses 10M a second.",
      ],
      target: "Milestones (estimates): one multiball and three modes = baseline. A 100M super jackpot = good. Royal Rumble wizard mode = great.",
    },

    info: {
      stats: [
        { label: "Manufacturer", value: "Data East" },
        { label: "Year",         value: "1994" },
        { label: "Design",       value: "Tim Seckel" },
        { label: "Platform",     value: "Data East Version 3 (DMD)" },
      ],
      theme: "WWF wrestling: an upper-playfield ring with drop targets, Undertaker's coffin, Macho Man, the Bushwhackers, Doink the Clown and more.",
      features: [
        { name: "Skill shot", desc: "Press the Tag (plunge) button to pick one of three awards (tournament mode: 3× bonus, Pop Bonus or 10M), then use the flippers to steer the ball through the flashing top lane: 10M (20M after two)." },
        { name: "Nine modes", desc: "Left column: Light Extra Ball, No Holds Brawl (video, 10–28M), Pandemonium (frenzy 250K–2M per switch by balls in play; top hole adds balls and time). Center: Search for Doink (25M if found, 6M a miss), Sleeper Hold (15 pops = 30M), Raise the Undertaker (left drops 2M→10M). Right: Tag Team Millions (5M a target), Championship Belt (upper drops, 20M countdown, 3 belts), Banzai (left ramp 5/10/15/20M)." },
        { name: "Multiball", desc: "9 wrestlers (2nd multiball: one from each shot per level; 3rd+: left → center → right in order). Start at the Macho Man lane. Jackpots 20M +5M at the lit wrestler shot; upper drops +5M to all. After 9 wrestlers: super jackpot (≤100M) at the top hole. Restartable within 15 s if no jackpot was scored." },
        { name: "Royal Rumble (wizard)", desc: "After all 9 modes: a mode scoop, then all three wrestler shots, then 6-ball multiball. Eliminate 9 wrestlers (20 pops or the upper drops each), then jackpots return at the wrestler shots." },
        { name: "Macho Madness", desc: "Unlit ramps, Macho lane and top hole spell MACHO MAN (MACHO starts the flashing mode). Then 25 s to reach the upper playfield: 3 drop-target belts at 15M, then an upper Loop hurry-up from 20M." },
        { name: "RIP and Tag", desc: "Left drops spell R-I-P for a progressive RIP jackpot (from 15M). Tag targets light Tag Your Partner (Tag button 3× = 5M) and the captive ball (10M/20M/hold bonus)." },
      ],
      scoring: [
        { key: "Super jackpot",     val: "Up to 100M" },
        { key: "Multiball jackpot", val: "20M, +5M each" },
        { key: "Pandemonium",       val: "Up to 2M per switch" },
        { key: "Banzai",            val: "5M–20M per left ramp" },
        { key: "Search for Doink",  val: "25M" },
        { key: "Sleeper Hold",      val: "30M" },
        { key: "Skill shot",        val: "10M (20M later)" },
      ],
      rules: [
        "Five Loop shots behind the upper drops in one trip upstairs add 5M to all jackpots of the next multiball.",
        "Multiball: after 20 s with no jackpot a ball is added (no ball save); a restarted multiball has 2 balls. Sources differ on the jackpot base (15M or 20M) and Sleeper Hold (14 or 15 pops).",
        "Royal Rumble jackpots: 30M, +10M per completed set, max 90M.",
        "Starting multiball on ball 1 is worth a 10M bonus.",
        "Bonus: switch bonus × X (max 9×) + 1M per wrestler that ball; past 9× = hold bonus, then light extra ball.",
        "Get Back in the Ring / Chair Bashing (lane behind the left drops) are small side features.",
      ],
      benchmarks: [
        { score: "Royal Rumble wizard mode (estimate)", label: "Great game" },
        { score: "100M super jackpot",                 label: "Good game" },
        { score: "One multiball + three modes",        label: "Baseline" },
      ],
      resources: [
        { name: "Strategy Guide (Pinball Primer)", url: "https://pinballprimer.github.io/wwf_G57y6.html", icon: "📖" },
        { name: "Rulesheet (Pinball Archive)",     url: "https://pinball.org/rules/wwfroyalrumble.html", icon: "📄" },
        { name: "SDPC Cheatsheet",                 url: "https://pinball.miraheze.org/wiki/WWF_Royal_Rumble", icon: "📄" },
        { name: "Pinside Game Page",               url: "https://pinside.com/pinball/machine/wwf-royal-rumble", icon: "🕹️" },
      ],
    },

    strategy: {
      skillShot: "Pick 10 Million or 3× Mult (tournament options), then steer the ball through the flashing top lane for 10M more.",
      multiball: [
        { name: "Wrestler Multiball", balls: 3, locks: "Collect 9 wrestlers (left ramp, center ramp, right orbit).", start: "Macho Man lane (first multiball also the left ramp), or the upper Loop / Top Hole once upstairs.", jackpots: "Lit wrestler shot: 20M +5M each; then super jackpot (≤100M) at the top hole after upper drops.", tip: "Only the lit jackpot shot counts toward value; don't shoot unlit wrestler shots." },
        { name: "Pandemonium", balls: "1–6", locks: "A mode: start it at a scoop.", start: "Scoop.", jackpots: "Every switch 250K (1 ball) up to 2M (6 balls).", tip: "Get to the upper playfield and add balls at the top hole; value locks when the timer ends." },
        { name: "Royal Rumble", balls: 6, locks: "Play all 9 modes.", start: "Scoop, then the 3 wrestler shots.", jackpots: "Eliminate 9 wrestlers (pops/upper drops), then wrestler-shot jackpots.", tip: "Pops are the safest way to eliminate wrestlers." },
      ],
      goal: "<strong>Wrestlers → multiball → super jackpots; modes at the scoops between multiballs (Pandemonium, Banzai, Doink, Sleeper Hold).</strong>",
      phases: [
        { num: "Phase 1", title: "Skill shot + wrestlers", body: "10M skill shot, then loop the ramps for wrestlers." },
        { num: "Phase 2", title: "Multiball", body: "Lit jackpots, then upper drops and the top hole for 100M." },
        { num: "Phase 3", title: "Modes", body: "Start the valuable modes; avoid Tag Team Millions. All nine: Royal Rumble." },
      ],
      safeShots: [
        { name: "Center ramp", desc: "Can be looped to collect wrestlers and relight scoops." },
        { name: "Left ramp", desc: "Feeds the right inlane during Banzai: loop it." },
      ],
      avoidShots: [
        { name: "Tag standups", desc: "Low value for the risk." },
      ],
      tips: [
        { head: "Super jackpot value", body: "Flipping or letting the ball run raises it (+10M a second); holding a flipper lowers it." },
        { head: "Jackpot build", body: "5 upper-orbit loops in one trip = +5M on every jackpot next multiball." },
        { head: "Mode stacking", body: "Modes can stack, but starting Royal Rumble ends them all. Don't start multiball during Championship Belt." },
        { head: "Pandemonium", body: "Once the timer ends the value is locked: draining balls doesn't lower it." },
      ],
      mistakes: [
        "Collecting unlit wrestler jackpots: they use up wrestlers before the super.",
        "Cradling with the super jackpot lit.",
      ],
    },

    hotspots: [
      { x: 14, y: 29, type: "key",   label: "LR", name: "Left Ramp", body: "Wrestlers; Banzai; to the upper playfield." },
      { x: 47, y: 45, type: "key",   label: "CR", name: "Center Ramp", body: "Wrestlers; relights mode scoops." },
      { x: 77, y: 42, type: "key",   label: "RO", name: "Right Orbit", body: "Wrestlers." },
      { x: 35, y: 46, type: "key",   label: "CS", name: "Center Scoop", body: "Starts the flashing mode." },
      { x: 8,  y: 34, type: "key",   label: "LS", name: "Left Scoop", body: "Starts the flashing mode; extra ball." },
      { x: 81, y: 57, type: "key",   label: "MM", name: "Macho Man Lane", body: "Starts multiball; to the upper playfield." },
      { x: 59, y: 13, type: "key",   label: "TH", name: "Top Hole", body: "Super jackpot; Pandemonium add-a-ball." },
      { x: 69, y: 13, type: "info",  label: "UD", name: "Upper Playfield Drops", body: "Bonus X, jackpot +5M, light the super." },
      { x: 16, y: 55, type: "info",  label: "RIP", name: "Left Drop Targets", body: "R-I-P jackpot; Raise the Undertaker." },
      { x: 34, y: 28, type: "info",  label: "P",  name: "Pop Bumpers", body: "Sleeper Hold; Royal Rumble eliminations." },
      { x: 45, y: 88, type: "info",  label: "M",  name: "Mode Grid", body: "Nine modes, three columns." },
      { x: 9,  y: 77, type: "avoid", label: "!",  name: "Left Outlane", body: "Drain." },
      { x: 82, y: 78, type: "avoid", label: "!",  name: "Right Outlane", body: "Drain." },
    ],
  };
