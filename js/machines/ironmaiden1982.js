  /* ─── IRON MAIDEN (STERN 1982) ───────────────────────────── */
MACHINES['ironmaiden1982'] = {
    name: "Iron Maiden (1982)",  sub: "1982 · Stern Electronics · M-200 · Widebody, two levels",
    tagline: "Spell I-R-O-N M-A-I-D-E-N for a spinner up to 1,100 a spin (3,300 tripled) · two 5-banks build a carried bonus and 5× · timed bonus ball · skip the multiball",
    image: "images/iron-maiden-1982.webp",
    difficulty: "Medium-Hard", diffClass: "diff-medium-hard", era: "SS",

    /* ── QUICK GUIDE (30–90 s read) ───────────────────────────── */
    quick: {
      goal: "Light <strong>Iron Maiden letters</strong> to grow the <strong>left spinner</strong> (100 + 100 per letter, max <strong>1,100 a spin</strong>), and use the two <strong>5-bank drop targets</strong> for a bonus and multiplier that <strong>carry over</strong>. Don't start the multiball — it wipes your letters.",
      steps: [
        { title: "Letters → spinner",
          body: "Inlanes spot the Is and Ns; centre standups A-D-E; upper-playfield standups R-O-M; the back lower-right standup spots a whole word (IRON or MAIDEN, 20,000). The front lower-right standup, when lit, makes the <strong>next spinner shot 3×</strong> (up to 3,300 a spin)." },
        { title: "5-banks for bonus and 5×",
          body: "Every drop target in either 5-bank adds bonus (carried between balls). Completing a bank lights the <strong>#3 target in the other bank</strong> for a multiplier (max 5×, carried by default). Only one can be lit per bank — collect it before completing again." },
        { title: "Bonus ball time",
          body: "Clear the <strong>lower-left 3-bank</strong> fast after the first hit: within 3 s = 25 s of bonus ball, 5 s less per 3 s taken. You play this timed ball after your last ball, with unlimited ball save while the clock runs." },
      ],
      shots: [
        { name: "Left spinner", why: "Up to 1,100 a spin; 3,300 when tripled." },
        { name: "5-bank drop targets", why: "Carried bonus and 5×." },
        { name: "Lower-left 3-bank", why: "Bonus-ball seconds." },
      ],
      avoid: [
        "Starting multiball (3rd lock after spelling Iron Maiden): it unlights every letter and resets the spinner.",
        "The centre A-D-E standups: rebounds often go straight down the middle.",
      ],
      target: "Milestones: a 1,100 spinner and 3× = good game. 5× with a big carried bonus plus a long bonus ball = great.",
    },

    info: {
      stats: [
        { label: "Manufacturer", value: "Stern Electronics" },
        { label: "Year",         value: "1982 (produced from January; some sources say 1981)" },
        { label: "Design",       value: "Brian Poklacki" },
        { label: "Art",          value: "Keith Parkinson" },
        { label: "Production",   value: "≈1,200" },
        { label: "System",       value: "Stern M-200" },
        { label: "Format",       value: "Widebody with an upper playfield; not related to the band" },
      ],
      theme: "Sci-fi fantasy: scantily clad women in space, tethered by cables and breathing tubes to an ominous machine, painted by Keith Parkinson. A two-level playfield.",
      features: [
        { name: "Plunge", desc: "Full plunge circles under the upper playfield into the lower playfield. Two short-plunge lanes: 5,000 unlit; 10,000 + lock when lit." },
        { name: "Upper and lower 5-banks", desc: "500 + bonus advance per target. Clear = 5,000 and lights the other bank's #3 target for a multiplier. Cleared 1→5 lights the opposite #3 for an extra ball; 5→1 lights it for a special." },
        { name: "Left spinner", desc: "At the foot of the left ramp: 100 + 100 per lit letter (max 1,100). 3× Spinner (front lower-right standup, alternates on slings) triples the next shot only." },
        { name: "Letter targets", desc: "Inlanes (Is and Ns), centre A-D-E, upper R-O-M: 1,000 each. Back lower-right standup: 20,000 + spots IRON or MAIDEN (alternates on slings)." },
        { name: "Locks / multiball", desc: "Lit short-plunge lanes and the lit upper-right lane lock balls. A 3rd lock after Iron Maiden starts 3-ball multiball: no jackpots, and letters and spinner reset." },
        { name: "Lower-left 3-bank", desc: "500 each; first hit starts a ~15 s timer. Clear = 3,000 + bonus-ball seconds (25 s within 3 s, −5 s per 3 s). Bonus ball cap 30 or 50 s." },
        { name: "Inlanes / outlanes", desc: "Two inlanes per side, 1,000 each; outlanes 10,000. A right-outlane gate returns the ball to the shooter lane once when lit (front standup lit orange)." },
      ],
      scoring: [
        { key: "Left spinner",     val: "100 – 1,100 a spin (×3 once when lit)" },
        { key: "Word standup",     val: "20,000 + IRON or MAIDEN" },
        { key: "5-bank clear",     val: "5,000 + light multiplier" },
        { key: "Bonus",            val: "Carried; counts up to 100,000" },
        { key: "Short plunge (lit)", val: "10,000 + lock" },
      ],
      rules: [
        "Base bonus always carries over; the multiplier carries by default.",
        "5× lights the back lower-right standup for a special.",
        "The bonus ball is a timed ball after your last ball; the clock runs even in the shooter lane.",
        "Some machines (and the VPX table) sometimes count only the base bonus modulo 10,000/20,000.",
        "Specials: free game, extra ball, 100,000 or nothing. Extra balls are void with comp settings.",
        "Rules from The Pinball Primer; settings vary by machine.",
      ],
      benchmarks: [
        { score: "5× + big bonus + long bonus ball", label: "Great game" },
        { score: "1,100 spinner and 3×", label: "Good game" },
        { score: "Half the letters + 2×", label: "Baseline" },
      ],
      resources: [
        { name: "Rules (The Pinball Primer)", url: "https://pinballprimer.github.io/ironmaiden_G4yZN.html", icon: "📖" },
        { name: "IPDB Entry",                url: "https://www.ipdb.org/machine.cgi?id=1270", icon: "🎯" },
        { name: "Pinside Game Page",         url: "https://pinside.com/pinball/machine/iron-maiden", icon: "🕹️" },
      ],
    },

    strategy: {
      skillShot: "Short plunge into a lit lock lane: 10,000 and a lock (5,000 if unlit). A full plunge feeds the lower playfield.",
      multiball: [
        { name: "Multiball (avoid)", balls: 3,
          locks: "Lit short-plunge lanes or the lit upper-right lane.",
          start: "Third lock after spelling Iron Maiden.",
          jackpots: "None; lights an extra ball (void in comp).",
          tip: "It unlights all letters and resets the spinner — usually not worth starting." },
      ],
      goal: "<strong>Letters for a 1,100 spinner, drop targets for a carried bonus and 5×, and the 3-bank for bonus-ball time.</strong> Keep the letters by not starting multiball.",
      phases: [
        { num: "Phase 1", title: "Letters", body: "Inlanes, R-O-M upstairs, the word standup." },
        { num: "Phase 2", title: "Banks", body: "5-banks and the opposite #3 target for multipliers." },
        { num: "Phase 3", title: "Spin", body: "Rip the 1,100 spinner; triple it when the front standup is lit." },
      ],
      safeShots: [
        { name: "Left spinner", desc: "The main scoring shot once letters are lit." },
      ],
      avoidShots: [
        { name: "Centre A-D-E standups", desc: "Rebounds feed the centre drain." },
        { name: "3rd lock with letters complete", desc: "Starts multiball and resets everything." },
      ],
      tips: [
        { head: "Multiplier order", body: "Collect the lit #3 target before clearing the other bank again — lit multipliers don't stack." },
        { head: "Bonus ball", body: "Its timer starts in the shooter lane — plunge right away." },
        { head: "Word standup", body: "It alternates IRON / MAIDEN on slings — either fills many letters at once." },
      ],
      mistakes: [
        "Starting multiball and losing all letters.",
        "Spending the 3× spinner on a weak shot.",
      ],
    },

    hotspots: [
      { x: 16.2, y: 49.5, type: "key",   label: "S",  name: "Left Spinner", body: "100 + 100 per letter; ×3 when lit." },
      { x: 40,   y: 49,   type: "key",   label: "L5", name: "Lower 5-Bank", body: "Bonus; multiplier at the opposite #3." },
      { x: 27,   y: 8,    type: "key",   label: "U5", name: "Upper 5-Bank", body: "Bonus; multiplier at the opposite #3." },
      { x: 12.5, y: 58.5, type: "key",   label: "3",  name: "Lower-Left 3-Bank", body: "Bonus-ball time — clear it fast." },
      { x: 83.5, y: 57.5, type: "key",   label: "W",  name: "Back Standup (Word)", body: "20,000 + IRON or MAIDEN; special at 5×." },
      { x: 72,   y: 57.5, type: "key",   label: "3×", name: "Front Standup", body: "3× next spinner shot, or opens the outlane gate (when lit)." },
      { x: 57,   y: 41.5, type: "avoid", label: "ADE", name: "A-D-E Standups", body: "Letters; risky centre rebounds." },
      { x: 13,   y: 17,   type: "info",  label: "ROM", name: "R-O-M Standups", body: "Letters on the upper playfield." },
      { x: 55.5, y: 10.5, type: "info",  label: "L",  name: "Upper-Right Lock Lane", body: "10,000 + lock when lit." },
      { x: 87,   y: 26.5, type: "info",  label: "PL", name: "Short-Plunge Lock Lanes", body: "5,000; 10,000 + lock when lit (second lane lower at the shooter)." },
      { x: 16,   y: 77.5, type: "info",  label: "IN", name: "Left Inlanes", body: "I and N." },
      { x: 76,   y: 77.5, type: "info",  label: "IN", name: "Right Inlanes", body: "I and N." },
      { x: 6.5,  y: 79,   type: "avoid", label: "!",  name: "Left Outlane", body: "10,000." },
      { x: 86,   y: 79,   type: "avoid", label: "!",  name: "Right Outlane", body: "10,000; gate back to the shooter when lit." },
    ],
  };
