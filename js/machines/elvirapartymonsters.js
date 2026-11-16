  /* ─── ELVIRA AND THE PARTY MONSTERS (BALLY 1989) ─────────── */
MACHINES['elvirapartymonsters'] = {
    name: "Elvira and the Party Monsters",  sub: "1989 · Bally · System 11B (alphanumeric)",
    tagline: "Skull lock multiball · two-ramp jackpot up to 4M · spell E-L-V-I-R-A for 3M · million shots · dancing Boogie Men",
    image: "images/elvira-and-the-party-monsters.webp",
    difficulty: "Medium", diffClass: "diff-medium", era: "SS",

    /* ── QUICK GUIDE (30–90 s read) ───────────────────────────── */
    quick: {
      goal: "Lock 3 balls in the <strong>Skull</strong> for <strong>Multiball</strong> and shoot <strong>both ramps</strong> for the jackpot (a fixed 4M in contest mode, otherwise 1M–4M). Between multiballs, spell <strong>E-L-V-I-R-A</strong> on the Monster Slide for the <strong>3M Skull shot</strong> and collect million shots.",
      steps: [
        { title: "Light and lock",
          body: "Complete the <strong>B-A-T</strong> top lanes or the <strong>J-A-M</strong> drop targets to light the <strong>Skull lock</strong> (the left orbit-style shot). Three locks start Multiball." },
        { title: "Multiball jackpot",
          body: "Shoot the <strong>Monster Slide</strong> (left ramp) and the <strong>Party Punch</strong> (right ramp): both are needed for the jackpot. After it, each ramp is 250K; two balls up the Monster Slide quickly = 500K." },
        { title: "E-L-V-I-R-A and millions",
          body: "B-A-T, J-A-M or <strong>Wake the Dead Heads</strong> light the Monster Slide for a letter. Six letters light the Skull for <strong>3M</strong> (20 s). Wake the Dead Heads 3 times on one ball lights the <strong>center eject hole for 1M</strong>; 4 consecutive Monster Slides light the Monster Slide itself for 1M (timed)." },
      ],
      shots: [
        { name: "Monster Slide (left ramp)", why: "Letters, million, jackpot half." },
        { name: "Skull lock", why: "Locks; 3M after E-L-V-I-R-A." },
        { name: "Party Punch (right ramp)", why: "Jackpot half; builds to the extra ball." },
      ],
      avoid: [
        "The center lane: weak Skull kick-outs land there and drain straight down the middle.",
        "Both outlanes; the bonus is small, so a lost ball costs more than it gives back.",
      ],
      target: "Milestones (estimates): one Multiball = baseline. Jackpot + E-L-V-I-R-A 3M = good. Several jackpots and million shots = great.",
    },

    info: {
      stats: [
        { label: "Manufacturer", value: "Bally (Midway / Williams)" },
        { label: "Year",         value: "1989" },
        { label: "Design",       value: "Dennis Nordman, Jim Patla" },
        { label: "Art",          value: "Greg Freres" },
        { label: "Software",     value: "Mark Penacho" },
        { label: "Platform",     value: "Williams System 11B (alphanumeric)" },
      ],
      theme: "Elvira throws a monster party: a Skull lock, a Monster Slide ramp, a Party Punch ramp, barbecue coffins, Thumper bumpers that jump up and down and two dancing Boogie Men.",
      features: [
        { name: "Multiball (3 balls)", desc: "B-A-T or J-A-M lights the Skull lock. Lock 3 balls; all are kicked into the bumpers. Shoot both ramps for the Party Monster jackpot: progressive from 1M (all regular points in multiball add to it, max 4M, carried game to game) or fixed at 4M (contest mode)." },
        { name: "E-L-V-I-R-A", desc: "Complete B-A-T, J-A-M or Wake the Dead Heads, or collect the Monster Slide million, to light the Monster Slide for a letter (timed). Six letters: Skull lit for 3M for 20 s. Miss it and you go back to E-L-V-I." },
        { name: "Wake the Dead Heads", desc: "Four standups on the left wall: 20K, 40K, 50K … 80K, then 200K per completion. 3rd completion on a ball: center eject hole lit for 1M (untimed, this ball). 6th: lights the special." },
        { name: "Monster Slide ramp", desc: "50K–300K (+25K a shot). 2 consecutive: Hold Bonus at the eject hole. 4 consecutive: ramp lit for 1M (timed; one more shot needed each time, up to 11)." },
        { name: "Party Punch ramp", desc: "175K, 200K, 225K (light extra ball), 250K + extra ball; the value is shown on the potion bottles. Keeps its values in multiball." },
        { name: "Center eject hole", desc: "Barbecue Bonus (open both coffins: random extra ball, bonus X, letter, points or special), Boogie Bonus (J-A-M; bumpers add 1K a hit, max 255K), 1M and Hold Bonus." },
        { name: "Pizza Passage", desc: "Gravestone-Pizza targets light Headcheese, Eye of Newt, Lizard Tongue: the right orbit pays 50K, 100K, 150K." },
      ],
      scoring: [
        { key: "Multiball jackpot", val: "1M–4M (4M fixed in contest mode)" },
        { key: "E-L-V-I-R-A Skull shot", val: "3M" },
        { key: "Million shots",     val: "1M (eject hole or Monster Slide)" },
        { key: "Double Slide",      val: "500K" },
        { key: "Party Ramps (after jackpot)", val: "250K each" },
        { key: "Wake the Dead Heads", val: "20K–80K, then 200K" },
        { key: "Bonus",             val: "Max 99K × up to 5×" },
      ],
      rules: [
        "Plunge: no skill shot; the ball goes to the B-A-T lanes.",
        "B-A-T: bonus multiplier 2×–5×, lights the lock and a letter; after 5× it scores 70K–150K.",
        "Letters carry over game to game by default (an operator setting; not in contest mode, which also fixes the jackpot at 4M and doesn't save locks).",
        "Locks can be stolen in multiplayer: one player's locked balls let another start Multiball.",
        "A 'pity' extra ball can light on the Party Punch at the start of ball 3; extra balls are off in competition.",
      ],
      benchmarks: [
        { score: "Several jackpots + million shots (estimate)", label: "Great game" },
        { score: "Jackpot + E-L-V-I-R-A 3M",                    label: "Good game" },
        { score: "One Multiball",                               label: "Baseline" },
      ],
      resources: [
        { name: "Rulesheet (Pinball Archive)",  url: "https://pinball.org/rules/elvira.html", icon: "📖" },
        { name: "Pinside Game Page",            url: "https://pinside.com/pinball/machine/elvira-and-the-party-monsters", icon: "🕹️" },
      ],
    },

    strategy: {
      skillShot: "None: any plunge goes to the B-A-T lanes. Move nothing; just let it play.",
      multiball: [
        { name: "Party Monster Multiball", balls: 3, locks: "B-A-T or J-A-M lights the Skull lock (not stackable).", start: "Third lock.", jackpots: "Both ramps → jackpot (1M–4M). Then ramps 250K each; Double Slide 500K.", tip: "Park balls in the bumpers via the Skull, eject hole or Pizza Passage while you aim at the ramps." },
      ],
      goal: "<strong>B-A-T/J-A-M → lock 3 → both ramps for the jackpot.</strong> Between multiballs: letters on the Monster Slide → 3M Skull, and the million shots.",
      phases: [
        { num: "Phase 1", title: "Locks", body: "Plunges and the eject hole feed B-A-T; J-A-M is a direct shot. Each completion lights the lock and a letter." },
        { num: "Phase 2", title: "Multiball", body: "Monster Slide + Party Punch for the jackpot; keep shooting ramps for 250K." },
        { num: "Phase 3", title: "Millions", body: "Wake the Dead Heads 3× for the 1M eject hole; chain Monster Slides for the 1M ramp; finish E-L-V-I-R-A for 3M." },
      ],
      safeShots: [
        { name: "Monster Slide", desc: "Returns to the right inlane for another try." },
        { name: "Party Punch", desc: "Popper returns the ball to the left inlane." },
      ],
      avoidShots: [
        { name: "Center eject hole when unlit", desc: "Little value, and the kick-out can be unpredictable." },
      ],
      tips: [
        { head: "Chain the slide", body: "Consecutive Monster Slides build the 1M; the requirement grows each time. After the million, each further consecutive slide gives a letter + 250K, so keep the chain going." },
        { head: "Letters", body: "B-A-T, J-A-M and Wake the Dead Heads each light a letter: collect it before its timer ends." },
        { head: "Weak Skull kicks", body: "On many machines the Skull kicks balls into the center lane; be ready to flip." },
      ],
      mistakes: [
        "Shooting only one ramp in Multiball: the jackpot needs both.",
        "Ignoring the 3M Skull timer (20 s) after spelling E-L-V-I-R-A.",
      ],
    },

    hotspots: [
      { x: 26, y: 48, type: "key",   label: "MS", name: "Monster Slide (left ramp)", body: "Letters, 1M, jackpot half; returns to the right inlane." },
      { x: 16, y: 49, type: "key",   label: "SK", name: "Skull Lock", body: "Locks; 3M after E-L-V-I-R-A." },
      { x: 74, y: 49, type: "key",   label: "PP", name: "Party Punch (right ramp)", body: "Jackpot half; builds to the extra ball." },
      { x: 50, y: 20, type: "key",   label: "EH", name: "Center Eject Hole", body: "Barbecue and Boogie bonus, 1M, Hold Bonus." },
      { x: 55, y: 48, type: "key",   label: "JAM", name: "J-A-M Drop Targets", body: "Light lock, Boogie Bonus and a letter." },
      { x: 72, y: 17, type: "info",  label: "BAT", name: "B-A-T Lanes", body: "Bonus X, lock and a letter." },
      { x: 35, y: 36, type: "info",  label: "BB", name: "Barbecue Targets", body: "Open both coffins: Barbecue Bonus at the eject hole." },
      { x: 18, y: 65, type: "info",  label: "WD", name: "Wake the Dead Heads", body: "3 completions on a ball: 1M at the eject hole." },
      { x: 90, y: 53, type: "info",  label: "PZ", name: "Pizza Passage", body: "Right orbit to the B-A-T lanes; 50K–150K when lit." },
      { x: 89, y: 64, type: "info",  label: "GP", name: "Gravestone-Pizza Targets", body: "Light the Pizza Passage awards." },
      { x: 62, y: 28, type: "info",  label: "TB", name: "Thumper Bumpers", body: "Build Boogie Bonus; safe place to park balls in multiball." },
      { x: 50, y: 74, type: "info",  label: "EL", name: "E-L-V-I-R-A Letters", body: "All six: Skull lit for 3M." },
      { x: 7,  y: 85, type: "avoid", label: "!",  name: "Left Outlane", body: "Special when lit; otherwise just a drain." },
      { x: 84, y: 85, type: "avoid", label: "!",  name: "Right Outlane", body: "Special when lit; otherwise just a drain." },
    ],
  };
