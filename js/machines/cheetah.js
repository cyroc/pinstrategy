  /* ─── CHEETAH ────────────────────────────────────────────── */
MACHINES['cheetah'] = {
    name: "Cheetah",  sub: "1980 · Stern Electronics · Widebody",
    tagline: "10,000 per bonus advance · up to 100K × 5 · 1-2-3-4-5 twice lights a repeatable bonus collect at the left orbit",
    image: "images/cheetah.webp",
    difficulty: "Medium", diffClass: "diff-medium", era: "SS",

    /* ── QUICK GUIDE (30–90 s read) ───────────────────────────── */
    quick: {
      goal: "Every bonus advance is worth <strong>10,000</strong>. Build bonus and multiplier, light the <strong>left orbit Collect Bonus</strong> (two 1-2-3-4-5 sets), then shoot that orbit over and over — it pays the full bonus <strong>without resetting it</strong> (up to 500,000 a shot).",
      steps: [
        { title: "Middle-right 3-bank",
          body: "Each target = 1,000 + a bonus advance (10,000). The 2nd completion and every later one also <strong>advance the multiplier</strong> (max 5×). The safest way to grow both." },
        { title: "1-2-3-4-5 twice",
          body: "Hit the <strong>lit number</strong> on the 5-bank; the left orbit, the right kickback lane and the near inlanes spot it too. 1st set 10,000; <strong>2nd set lights Collect Bonus</strong> at the left orbit for the rest of the game; 3rd set maxes base bonus at 100,000. In competition play the 4th and 5th sets and the 3rd middle-right clear also light 100,000 awards." },
        { title: "Shoot the left orbit",
          body: "Once lit, each left orbit shot collects bonus × multiplier and keeps both. When bonus × multiplier is over 100,000 this is the best shot in the game." },
      ],
      shots: [
        { name: "Middle-right 3-bank", why: "Bonus advances and multiplier." },
        { name: "Lit number on the 5-bank", why: "Sets toward Collect Bonus and max bonus." },
        { name: "Left orbit", why: "10,000 + spot; Collect Bonus when lit." },
      ],
      avoid: [
        "Base bonus never carries to the next ball (multiplier only by setting) — collect it before you drain.",
        "Star-colour lines (40,000) are a side bet: colours rotate and lock when hit — hard to time. Orange = extra ball, red = kickback special (100,000 each in competition play); yellow/blue only light 3,000-a-spin spinners.",
      ],
      target: "Milestones: Collect Bonus lit on ball 1–2 = good game. 100K base at 5× with several collects = great.",
    },

    info: {
      stats: [
        { label: "Manufacturer", value: "Stern Electronics" },
        { label: "Year",         value: "1980 (June)" },
        { label: "Design",       value: "Harry Williams" },
        { label: "Production",   value: "1,223" },
        { label: "Format",       value: "Widebody, two inlanes per side" },
        { label: "Max bonus",    value: "100,000 × 5 = 500,000" },
      ],
      theme: "Jungle: cheetahs and a jungle heroine on red and green foliage art.",
      features: [
        { name: "Middle-right 3-bank", desc: "1,000 + bonus advance per target. 2nd completion 15,000 + multiplier; 3rd 40,000 + multiplier + lights the extra-ball standup; later 40,000 + multiplier." },
        { name: "1-2-3-4-5 drop targets", desc: "Hit the lit number. Sets: 10K; 20K + light Collect Bonus; 30K + max base bonus; 40K + inlane extra ball; 50K + outlane specials." },
        { name: "Left orbit", desc: "10,000 + spots a number; Collect Bonus after two sets (stays lit all game; bonus is not reset)." },
        { name: "Top 3-bank", desc: "500 per target. First completion at 1× scores 5,000 (or gives 2× if set); otherwise a completion advances the multiplier and scores 5,000 × the new multiplier." },
        { name: "Upper right star targets", desc: "2,000 each. Two matching colours = 20,000; three = 40,000 plus: red = kickback special, yellow = right spinner 3,000, blue = left spinner 3,000, orange = horseshoe extra ball." },
        { name: "Horseshoe spinner", desc: "Behind the star targets; always 3,000 a spin." },
        { name: "Right kickback lane", desc: "25,000 + spots a number. Not shootable; kicks back toward the #5 target." },
        { name: "Inlanes / outlanes", desc: "Far inlanes 5,000 + advance; near inlanes 10,000 + spot a number; outlanes 25,000 + 3 advances." },
      ],
      scoring: [
        { key: "Bonus advance",          val: "10,000 each (base max 100,000)" },
        { key: "Collect Bonus (orbit)",  val: "Base × multiplier, up to 500,000, no reset" },
        { key: "1-2-3-4-5 sets",         val: "10K, 20K, 30K, 40K, 50K" },
        { key: "Middle-right bank",      val: "15,000 / 40,000 + multiplier" },
        { key: "Star line",              val: "20,000 (two) / 40,000 (three)" },
        { key: "Kickback lane",          val: "25,000" },
      ],
      rules: [
        "Base bonus never carries over; the multiplier carries only if set.",
        "In competition/novelty play, extra balls and specials score 100,000 each.",
        "Setting: the 1st set can light Collect Bonus (instead of the 2nd).",
        "Setting: the top bank can give 2× on its first completion.",
        "Rules from The Pinball Primer; settings vary by machine.",
      ],
      benchmarks: [
        { score: "100K base at 5× + repeated collects", label: "Great game" },
        { score: "Collect Bonus lit early", label: "Good game" },
        { score: "One 1-2-3-4-5 set + 2×", label: "Baseline" },
      ],
      resources: [
        { name: "Rules (The Pinball Primer)", url: "https://pinballprimer.github.io/cheetah_GR6kW.html", icon: "📖" },
        { name: "IPDB Entry",                url: "https://www.ipdb.org/machine.cgi?id=500", icon: "🎯" },
        { name: "Pinside Game Page",         url: "https://pinside.com/pinball/machine/cheetah", icon: "🕹️" },
      ],
    },

    strategy: {
      skillShot: "None.",
      multiball: [],
      goal: "<strong>Light the repeatable Collect Bonus at the left orbit, then build bonus and multiplier and collect again and again.</strong> The collect does not reset the bonus, so each shot pays the full value.",
      phases: [
        { num: "Phase 1", title: "Light collect", body: "Two 1-2-3-4-5 sets (lit numbers, orbit and inlane spots)." },
        { num: "Phase 2", title: "Build", body: "Middle-right bank for advances and multiplier; 3rd set maxes base bonus." },
        { num: "Phase 3", title: "Collect", body: "Left orbit repeatedly; keep growing the multiplier." },
      ],
      safeShots: [
        { name: "Middle-right 3-bank", desc: "The safest source of bonus and multiplier." },
        { name: "Left orbit", desc: "Always useful: 10,000 + spot, later Collect Bonus." },
      ],
      avoidShots: [
        { name: "Star targets for colour lines", desc: "Colours rotate and lock when hit — hard to time; 40,000 (+100,000 for red/orange) is a bonus, not the main plan." },
      ],
      tips: [
        { head: "Spots count", body: "Orbit, kickback lane and near inlanes spot the lit number — every one shortens the set." },
        { head: "Kickback", body: "A ball in the kickback lane is fired back, usually straight at the #5 target — be ready for the rebound." },
      ],
      mistakes: [
        "Shooting the 5-bank randomly — only the lit number advances the set.",
        "Spending shots on the star bank before Collect Bonus is lit.",
      ],
    },

    hotspots: [
      { x: 79.5, y: 50,   type: "key",   label: "MR", name: "Middle-Right 3-Bank", body: "Bonus advances; multiplier from the 2nd completion." },
      { x: 33,   y: 36,   type: "key",   label: "5",  name: "1-2-3-4-5 Drop Targets", body: "Hit the lit number." },
      { x: 7,    y: 27,   type: "key",   label: "C",  name: "Left Orbit (Collect Bonus)", body: "10,000 + spot; Collect Bonus after two sets." },
      { x: 38,   y: 4.5,  type: "info",  label: "T",  name: "Top 3-Bank", body: "Multiplier advance; 5,000 × multiplier." },
      { x: 65,   y: 18,   type: "info",  label: "★",  name: "Star Drop Targets", body: "Colour lines: 20,000 / 40,000 + award." },
      { x: 70,   y: 13,   type: "info",  label: "H",  name: "Horseshoe Spinner", body: "3,000 a spin." },
      { x: 16.5, y: 39.5, type: "info",  label: "LS", name: "Left Spinner", body: "3,000 a spin after a blue line." },
      { x: 88,   y: 50,   type: "info",  label: "K",  name: "Right Kickback Lane", body: "25,000 + spot a number." },
      { x: 27,   y: 17,   type: "info",  label: "B",  name: "Pop Bumpers", body: "Can bounce balls into the kickback lane." },
      { x: 5.5,  y: 78,   type: "avoid", label: "!",  name: "Left Outlane", body: "25,000 + 3 advances." },
      { x: 88,   y: 78,   type: "avoid", label: "!",  name: "Right Outlane", body: "25,000 + 3 advances." },
    ],
  };
