  /* ─── STRIKER XTREME (STERN 2000) ────────────────────────── */
MACHINES['strikerxtreme'] = {
    name: "Striker Xtreme",  sub: "2000 · Stern · Whitestar (DMD)",
    tagline: "Score goals past the goalie · beat 16 countries · Stadium and Celebration multiballs · Shootout hurry-ups · Xtreme rounds",
    image: "images/striker-xtreme.webp",
    difficulty: "Medium", diffClass: "diff-medium", era: "DMD",

    /* ── QUICK GUIDE (30–90 s read) ───────────────────────────── */
    quick: {
      goal: "Shoot <strong>goals</strong> past the defenders and the goalie to <strong>beat the 16 countries</strong>. Beating all of them starts <strong>Celebration Multiball</strong>. On the way, <strong>Stadium Multiball</strong> and the <strong>Shootout</strong> hurry-up are the big scorers.",
      steps: [
        { title: "Goal early",
          body: "Score a goal soon after each ball starts: beating a country lights <strong>Free Kick</strong> at the outlanes (you get the ball back). Knock down the defender drop targets to open the goal (in the first tier the flashing one spots the whole bank); with Beat Country lit, a goal defeats the flashing country." },
        { title: "Stadium Multiball",
          body: "The <strong>spinner</strong> lights locks; lock 2 balls at the lit ramps (the <strong>right ramp</strong> is the safer shot). In multiball the red arrows are jackpots and the side ramp is the super jackpot; one goal beats a country and relights all jackpots." },
        { title: "Shootout",
          body: "Shoot the <strong>left hole</strong> to spell SHOOTOUT, then a ramp collects the hurry-up (6M, then 7M, 8M…) and gives a free shot on goal for the same value. Feed the ball back to the left flipper and repeat." },
      ],
      shots: [
        { name: "Goal", why: "Beats countries; Free Kick; Xtreme rounds." },
        { name: "Right ramp", why: "Locks; Shootout collect; safer than the center ramp." },
        { name: "Left hole", why: "S-H-O-O-T-O-U-T; easy to hit." },
      ],
      avoid: [
        "Shots at the left side of the goal: many bounce straight back out.",
        "The side ramp on the fly: good shots are often rejected; aim low.",
      ],
      target: "Milestones (estimates): one Stadium Multiball and a tier of countries = baseline. Xtreme Everything = good. Celebration Multiball = great.",
    },

    info: {
      stats: [
        { label: "Manufacturer", value: "Stern Pinball" },
        { label: "Year",         value: "2000 (January)" },
        { label: "Design",       value: "Joe Balcer" },
        { label: "Software",     value: "Lonnie D. Ropp, Orin Day, Keith P. Johnson" },
        { label: "Platform",     value: "Sega/Stern Whitestar (DMD)" },
      ],
      theme: "An international soccer tournament: a goal with a moving goalie and a belly target, defender drop targets, three flippers and a corner kickback. Also sold as NFL (2001) with football art.",
      features: [
        { name: "Goals and countries", desc: "Get past the defenders and the goalie to collect the goal award (big points, Beat Country or an Xtreme round). Defeat the flashing country when Beat Country is lit. Completing groups gives extra awards; the 2nd country in a group lights Halftime." },
        { name: "Stadium Multiball", desc: "Spinner lights locks; lit ramps lock balls in the stadium. Red arrows = jackpots, side ramp = super jackpot. In multiball one goal defeats a country and relights all jackpots." },
        { name: "Shootout", desc: "Left hole spells SHOOTOUT; either ramp collects the hurry-up (6M; repeating the combo raises it to 7M, 8M…) and gives a free shot on goal." },
        { name: "Penalty Kick", desc: "Complete the 4 soccer ball targets: lights the side ramp and spots the defender return lane for a penalty kick." },
        { name: "Xtreme Everything", desc: "Beating the 2nd tier of countries: all shots lit for 3M × shots made in the time (not collectable if the tier is beaten in multiball)." },
        { name: "Celebration Multiball", desc: "All countries beaten: ramp shots 5M and lock balls; with all locked, goals are 25M (2 s per ball in play); Stern calls this a chance at a Super Shootout." },
        { name: "Fan Riot Multiball", desc: "Bonus 10×: all switches 100K, ramps 5M, goals 7M (and +50K switch value)." },
      ],
      scoring: [
        { key: "Celebration goal", val: "25M" },
        { key: "Shootout",         val: "6M, rising in a combo (+ goal for the same)" },
        { key: "Fan Riot goal",    val: "7M" },
        { key: "Xtreme Everything", val: "3M × shots" },
        { key: "Celebration ramp", val: "5M" },
      ],
      rules: [
        "Skill shot: time the plunge to pick one of the displayed awards.",
        "C-U-P lanes advance bonus X.",
        "Soccer balls (shots, targets, combos) light the Vendor mystery award.",
        "Free Kick ball save can disappear during some modes.",
        "Tournament play reportedly gives the Xtreme rounds in a fixed order (Xtreme extra ball, combos, multiball, goals, spinner, pops, goalie); unconfirmed.",
      ],
      benchmarks: [
        { score: "Celebration Multiball (estimate)", label: "Great game" },
        { score: "Xtreme Everything",               label: "Good game" },
        { score: "Stadium Multiball + a tier",      label: "Baseline" },
      ],
      resources: [
        { name: "Strategy Guide (Keith Elwin, Pinball Archive)", url: "https://pinball.org/rules/strikerxtreme.txt", icon: "📖" },
        { name: "Game Rules (Stern)",                            url: "https://www.sternpinball.com/game/striker-xtreme/", icon: "📄" },
        { name: "Pinside Game Page",                             url: "https://pinside.com/pinball/machine/striker-xtreme", icon: "🕹️" },
      ],
    },

    strategy: {
      skillShot: "Time the plunge to pick the award you want.",
      multiball: [
        { name: "Stadium Multiball", locks: "Spinner lights locks; lock at the lit ramps.", start: "Second lock.", jackpots: "Red arrows; side ramp super jackpot; goals beat a country and relight jackpots.", tip: "Goals are often worth more than the small jackpots: one goal beats a country." },
        { name: "Celebration Multiball (all balls)", locks: "Beat all 16 countries.", start: "Automatically.", jackpots: "Ramps 5M and lock; then goals 25M.", tip: "Lock every ball for the Super Shootout." },
        { name: "Fan Riot (multiball)", locks: "Reach bonus 10×.", start: "Automatically.", jackpots: "Switches 100K, ramps 5M, goals 7M.", tip: "C-U-P lanes build bonus X." },
      ],
      goal: "<strong>Early goal (Free Kick) → first tier of countries → Stadium Multiball → Shootouts → Celebration.</strong>",
      phases: [
        { num: "Phase 1", title: "First tier", body: "Finish the first tier of countries before multiball: hitting the lit drop target spots the whole bank." },
        { num: "Phase 2", title: "Multiball", body: "When countries get harder, go for Stadium Multiball and score goals in it." },
        { num: "Phase 3", title: "Points", body: "After Celebration: bonus X, the right loop (jet booster) and Shootouts." },
      ],
      safeShots: [
        { name: "Left hole", desc: "Easy to hit; kicks to the left return lane (to the upper flipper during Shootout)." },
        { name: "Right ramp", desc: "Easier and safer lock shot than the center ramp." },
      ],
      avoidShots: [
        { name: "Center ramp from the upper flipper", desc: "Usually no reason: hold the upper flipper up, let the ball bounce off the lower right flipper onto the left one, then shoot the right ramp." },
      ],
      tips: [
        { head: "Shootout loop", body: "From the left hole: right ramp (6M), goal (6M), then hold the upper flipper up so the ball drops to the left flipper; repeat for 7M, 8M…" },
        { head: "Weak goal shots", body: "Delay the shot slightly and shoot softly: the left side of the goal opens and fewer balls bounce out." },
        { head: "Multiball goals", body: "With two balls, shoot one right after the other at the same drop target to sneak one through. Jamming balls in the hole and then breaking the goal plane also counts as a goal." },
        { head: "Easy loop", body: "Left hole → left inlane → flipper pass to the right → repeat: lights Shootout and makes Xtreme Combo (6M) easy." },
      ],
      mistakes: [
        "Starting multiball before finishing the easy first tier of countries.",
        "Forgetting Free Kick can vanish during some modes.",
      ],
    },

    hotspots: [
      { x: 25, y: 17, type: "key",   label: "G",  name: "Goal and Goalie", body: "Goals: beat countries, Xtreme rounds, Shootout free kick." },
      { x: 27, y: 26, type: "key",   label: "D",  name: "Defender Drop Targets", body: "Open the goal; flashing one spots the bank." },
      { x: 57, y: 43, type: "key",   label: "CR", name: "Center (Stadium) Ramp", body: "Locks; Shootout collect; shot from the upper flipper." },
      { x: 71, y: 54, type: "key",   label: "RR", name: "Right Ramp", body: "Locks (safer); Shootout collect." },
      { x: 10.5, y: 37, type: "key",  label: "LH", name: "Left Hole", body: "Spells S-H-O-O-T-O-U-T." },
      { x: 71, y: 21, type: "info",  label: "P",  name: "Pop Bumpers", body: "Xtreme pops." },
      { x: 37, y: 66, type: "info",  label: "C",  name: "Countries", body: "16 countries to defeat." },
      { x: 5,  y: 88, type: "avoid", label: "!",  name: "Left Outlane", body: "Free Kick when lit." },
      { x: 70, y: 13.5, type: "info", label: "CUP", name: "C-U-P Lanes", body: "Advance bonus X (10× = Fan Riot)." },
      { x: 90, y: 88, type: "avoid", label: "!",  name: "Right Outlane", body: "Free Kick when lit." },
    ],
  };
