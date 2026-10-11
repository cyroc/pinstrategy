  /* ─── RACK 'EM UP! ─────────────────────────────────────────── */
MACHINES['rackemup'] = {
    name: "Rack 'Em Up!",  sub: "1983 · Gottlieb (Mylstar) · System 80A",
    tagline: "Pool theme · fill the rack with solids and stripes · lane change · spinner · Special at the left outlane",
    image: "images/rack-em-up.jpg",
    difficulty: "Medium", diffClass: "diff-medium", era: "SS",

    /* ── QUICK GUIDE (30–90 s read) ───────────────────────────── */
    quick: {
      goal: "<strong>Fill the rack</strong>: a pool ball goes into the rack when you hit its target or rollover while its light is <strong>flashing</strong>. Use the <strong>lane change</strong> (and the spinner) to put flashing balls on shots you can make. A full rack lights the <strong>Special</strong> at the lower left outlane.",
      steps: [
        { title: "Lane change",
          body: "When a new ball is launched, or after each <strong>corner pocket</strong> shot (upper left), the <strong>right flipper button</strong> rotates the solid and stripe lights. Line them up with your best shots." },
        { title: "Fill the rack",
          body: "Hit the drop target (left 4-bank, right 3-bank) or top lane whose ball light is <strong>flashing</strong>. The <strong>8-ball</strong> is reportedly the last ball of the rack." },
        { title: "Spinner",
          body: "Owners report the <strong>spinner</strong> changes which balls are lit and scores well once lit (via the spot-target award 'Lights Spinner') — single source." },
        { title: "Special",
          body: "A complete rack lights Special at the <strong>lower left outlane</strong> — usually points or nothing in competition." },
      ],
      shots: [
        { name: "Flashing drop targets", why: "Fill the rack." },
        { name: "Corner pocket (upper left)", why: "Another lane change." },
        { name: "Spinner", why: "Changes the lit balls; points when lit (single source)." },
      ],
      avoid: [
        "Don't shoot unlit balls when a flashing one is makeable — only flashing targets fill the rack.",
        "Don't forget the lane change on the plunge — it's the easiest moment to line up the lights.",
      ],
      target: "Milestones: a completed rack = good game. Several racks = great. (No scoring values are published.)",
    },

    info: {
      stats: [
        { label: "Manufacturer", value: "Gottlieb (Mylstar Electronics)" },
        { label: "Year",         value: "1983 (Oct/Nov — sources differ)" },
        { label: "Design / Software", value: "John Buras" },
        { label: "Art / Sound",  value: "David Moore · Craig Beierwaltes" },
        { label: "Platform",     value: "System 80A" },
        { label: "Production",   value: "≈1,762 units" },
      ],
      theme: "A pool hall: solids and stripes, a corner pocket and the 8-ball. The rack between the flippers shows the balls you've potted.",
      features: [
        { name: "Drop targets", desc: "A 4-bank on the left and a 3-bank on the right; the numbered ball lights in front show which balls they fill." },
        { name: "Top lanes", desc: "Rollovers that also fill the rack when their ball is flashing." },
        { name: "Corner pocket", desc: "Upper-left kickback lane: activates the lane change." },
        { name: "8-ball", desc: "Upper left beside the corner pocket; reportedly the last ball of the rack." },
        { name: "Spinner", desc: "Roll-under spinner; changes the lit balls (owner reports)." },
        { name: "Spot target", desc: "Lights randomly for Extra Ball (card); its other inserts read Lights Spinner, Add One Solid, Add One Stripe (unverified)." },
        { name: "Other", desc: "3 pop bumpers; multiplier lights (3× / 5× / 10×) whose advancement isn't documented." },
      ],
      scoring: [
        { key: "Completed rack",  val: "Lights Special (lower left outlane)" },
        { key: "Extra ball",      val: "Spot target when lit" },
        { key: "Point values",    val: "Not published" },
      ],
      rules: [
        "<strong>Racks:</strong> fill the pool balls in the rack by hitting the corresponding targets or rollovers when flashing (instruction card).",
        "<strong>Lane change:</strong> rotate the solid and stripe lights with the right flipper button when a new ball is launched or after each corner pocket shot (card).",
        "<strong>Special:</strong> a completed rack lights Special; the lower left outlane scores it (card).",
        "<strong>Extra ball:</strong> the spot target lights randomly; hitting it then scores the extra ball (void under comp settings).",
        "No rulesheet or manual is published; spinner and 8-ball behaviour comes from owner reports.",
      ],
      benchmarks: [
        { score: "Several racks",      label: "Great game" },
        { score: "One rack completed", label: "Good game" },
        { score: "Half a rack",        label: "Baseline" },
      ],
      resources: [
        { name: "IPDB Entry",        url: "https://www.ipdb.org/machine.cgi?id=1902", icon: "🎯" },
        { name: "Pinside Game Page", url: "https://pinside.com/pinball/machine/rack-em-up", icon: "🕹️" },
        { name: "Kineticist",        url: "https://www.kineticist.com/pinball-machines/rack-em-up-1983", icon: "🎓" },
      ],
    },

    strategy: {
      skillShot: null,
      multiball: [],
      goal: "<strong>Line up the solid/stripe lights with your best shots, hit only flashing balls to fill the rack, and finish it for the Special.</strong>",
      phases: [
        { num: "Phase 1", title: "Lane change", body: "On the plunge, rotate the lights so flashing balls sit on shots you can make." },
        { num: "Phase 2", title: "Fill the rack", body: "Flashing drop targets and top lanes; corner pocket or spinner to refresh the lit balls." },
        { num: "Phase 3", title: "Special", body: "Complete rack → Special at the lower left outlane." },
      ],
      safeShots: [
        { name: "Drop target banks", desc: "Main way to pot balls." },
      ],
      avoidShots: [],
      tips: [
        { head: "Corner pocket", body: "Each corner pocket shot gives another lane change — use it when the flashing balls are in awkward places." },
        { head: "Spinner / 8-ball pocket", body: "Owners keep hitting these to get more options on the lit balls (single source)." },
      ],
      mistakes: [
        "Ignoring the lane change and chasing hard-to-reach flashing targets.",
      ],
    },

    hotspots: [
      { x: 18,   y: 26,   type: "key",   label: "LD", name: "Left Drop Targets (4-bank)", body: "Fill the rack when the ball light is flashing." },
      { x: 73,   y: 45,   type: "key",   label: "RD", name: "Right Drop Targets (3-bank)", body: "Fill the rack when the ball light is flashing." },
      { x: 55,   y: 13,   type: "key",   label: "TL", name: "Top Lanes", body: "Rollovers; fill the rack when flashing." },
      { x: 66,   y: 33,   type: "key",   label: "S",  name: "Spinner", body: "Changes the lit balls; scores when lit (owner reports)." },
      { x: 12,   y: 22,   type: "safe",  label: "CP", name: "Corner Pocket", body: "Activates the lane change (approx. position)." },
      { x: 27,   y: 21,   type: "info",  label: "8",  name: "8-Ball", body: "Reportedly the last ball of the rack." },
      { x: 16,   y: 48,   type: "info",  label: "ST", name: "Spot Target", body: "Extra Ball when lit; other awards unverified." },
      { x: 43,   y: 54,   type: "info",  label: "X",  name: "Multiplier Lights", body: "3× / 5× / 10× — advancement undocumented." },
      { x: 45,   y: 70,   type: "info",  label: "R",  name: "The Rack", body: "Shows potted balls; full rack lights Special." },
      { x: 6,    y: 66,   type: "avoid", label: "SP", name: "Left Outlane (Special)", body: "Scores Special when lit." },
      { x: 84,   y: 65,   type: "avoid", label: "!",  name: "Right Outlane", body: "Open under comp settings." },
    ],
  };
