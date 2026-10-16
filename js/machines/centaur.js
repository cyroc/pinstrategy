  /* ─── CENTAUR ────────────────────────────────────────────── */
MACHINES['centaur'] = {
    name: "Centaur", sub: "1981 · Bally · AS-2518-35", era: "SS",
    tagline: "O-R-B-S power orbs · unlimited multiball releases · 1-2-3-4 in order + 5X bonus collect",
    image: "images/centaur.webp",
    difficulty: "Medium", diffClass: "diff-medium",

    /* ── QUICK GUIDE (30–90 s read) ───────────────────────────── */
    quick: {
      goal: "Centaur's multiball has no ball limit: you <strong>bank 'power orbs'</strong> (virtual locks, amber lights above the flippers) and <strong>release them all</strong> for up to 5 balls. Points come from the 1-2-3-4 drops in order and a <strong>timed bonus collect at up to 5X</strong>.",
      steps: [
        { title: "O-R-B-S in order",
          body: "Knock down the 4 <strong>ORBS drop targets</strong> (below the bumpers): in order (left to right) releases a ball for an instant 2-ball multiball; out of order lights the next power orb (max 4)." },
        { title: "Release all orbs",
          body: "Hit a lit <strong>release target</strong>: the far upper-right target (lit by 1-2-3-4 in order) or the <strong>Chamber</strong> target behind the left inline drops. All banked balls come out. During multiball: ORBS again, 1-2-3-4 in order, and the left arc." },
        { title: "Guardians: free release",
          body: "Light all 4 <strong>inlanes/outlanes</strong> (left flipper moves the left pair, right flipper the right pair) → releases one banked ball (needs an orb lit; once per ball on factory settings)." },
        { title: "1-2-3-4 + bonus collect",
          body: "Right <strong>1-2-3-4 drops in order</strong>: 10K/20K/40K/80K + bonus advances, lights the top-right target. Time that shot with the 2X–5X lights in the right lane for a <strong>5X</strong> bonus collect." },
      ],
      shots: [
        { name: "O-R-B-S drop targets", why: "Multiball start and power orbs." },
        { name: "Far upper-right target", why: "Release all orbs; timed bonus collect (up to 5X)." },
        { name: "1-2-3-4 drop targets (right)", why: "In order: big bonus advances + lights the release/collect target." },
        { name: "Left arc → captive ball", why: "10K–50K + bonus advances, doubled via the arc stars. Great multiball shot." },
      ],
      avoid: [
        "Side-to-side shots are risky (narrow centre gap): aim drop/captive-ball shots so rebounds go up and down.",
        "Without outlane rubbers (comp setup) you must nudge to save balls from the outlanes.",
      ],
      target: "Milestones: a 4–5 ball release = good game. Repeated 5X collects = great.",
    },

    info: {
      stats: [
        { label: "Manufacturer", value: "Bally" },
        { label: "Year",         value: "1981 (October)" },
        { label: "Design",       value: "Jim Patla" },
        { label: "Art / Mechanics", value: "Paul Faris / Irv Grabel" },
        { label: "Platform",     value: "Bally AS-2518-35" },
        { label: "Production",   value: "≈3,700 units" },
      ],
      theme: "Black-and-white fantasy art of a centaur on a motorcycle, with a talking ('Bad move, human') reverb voice. Re-released as Centaur II in 1983.",
      features: [
        { name: "O-R-B-S drop targets", desc: "4 drops below the pop bumpers. In order releases a ball (instant 2-ball multiball); out of order lights the next orb." },
        { name: "Power orb lights (1–4)", desc: "Amber lights between/above the flippers show banked balls (virtual locks)." },
        { name: "Release targets", desc: "Far upper-right target (above the shooter path) and the Chamber target behind the left inline drops release all banked balls." },
        { name: "1-2-3-4 drop targets (right)", desc: "Any order lights the far top-right target for bonus collect; in order adds 10K/20K/40K/80K, 1/2/4/8 bonus advances and also lights release." },
        { name: "Left arc + captive ball", desc: "Captive-ball shots that drop the inline targets: 10K–50K with growing bonus advances (kept between balls on some DIP settings). Rolling over the two arc stars first doubles it." },
        { name: "Guardian lanes", desc: "4 inlanes/outlanes; all lit = release one ball (once per ball)." },
        { name: "Green standups", desc: "Left green target resets the 1-4 drops; top green target spots the next 1-4 target." },
      ],
      scoring: [
        { key: "Base bonus",          val: "Max 79K" },
        { key: "Bonus multiplier",    val: "Up to 5X (top lanes) → 395K" },
        { key: "1-2-3-4 in order",    val: "10K / 20K / 40K / 80K + 1/2/4/8 bonus advances" },
        { key: "Captive ball",        val: "10K → 50K (×2 via the arc stars)" },
        { key: "Bonus collect",       val: "Timed shot multiplier — aim for 5X" },
      ],
      rules: [
        "<strong>Multiball:</strong> ball count is only limited by banked orbs (up to 4 + the ball in play). More orbs can be earned during multiball (ORBS again) and released.",
        "<strong>Drain save:</strong> with 3 guardian lanes lit and a ball banked, draining down the fourth lane starts multiball.",
        "<strong>Ball 3:</strong> a 'pity' timed release can light at the upper-right target.",
        "<strong>Top lanes:</strong> both flipper buttons move the lit lanes (in opposite directions); completions raise bonus X up to 5X.",
        "Base bonus is held at 20K/40K/60K steps between balls (operator setting); the multiplier resets.",
        "Several features depend on DIP switches: orb memory (15), guardian release count (16), last-ball release (21), release target memory (24), bonus X hold (6), inline value memory (14).",
      ],
      benchmarks: [
        { score: "5-ball release", label: "Great game" },
        { score: "5X collect",     label: "Strong ball" },
        { score: "ORBS in order",  label: "Baseline" },
      ],
      resources: [
        { name: "Rules (silverballmania)", url: "https://rules.silverballmania.com/rules/GrX7q-MLWkn", icon: "📖" },
        { name: "Rules notes (pinball.org)", url: "https://www.pinball.org/rules/centaur.txt", icon: "📄" },
        { name: "IPDB Entry",              url: "https://www.ipdb.org/machine.cgi?id=476", icon: "🎯" },
      ],
    },

    strategy: {
      skillShot: null,
      multiball: [
        { name: "Power Orb Multiball", balls: 5,
          locks: "Bank orbs: O-R-B-S out of order lights the next orb (up to 4 lit).",
          start: "O-R-B-S in order (releases a ball), a lit release target (all orbs), or the guardian lanes (one banked ball).",
          jackpots: "No jackpot: multiball is time to complete 1-2-3-4 in order, the captive ball and more orbs.",
          tip: "Bank several orbs first, then release them all at once." },
      ],
      goal: "<strong>Bank power orbs with O-R-B-S, then release them all</strong> at the upper-right target. Complete the right 1-2-3-4 drops in order and time the bonus collect at 5X.",
      phases: [
        { num: "Phase 1", title: "Bank orbs", body: "O-R-B-S drops; guardian lanes with lane change." },
        { num: "Phase 2", title: "Release", body: "1-2-3-4 in order to light the far top-right target; shoot it to release all orbs." },
        { num: "Phase 3", title: "Collect", body: "Build bonus and X, then time the collect shot for 5X." },
      ],
      safeShots: [
        { name: "Up-and-down shots", desc: "Shots whose rebounds come straight back are safer than cross-table ones." },
      ],
      avoidShots: [
        { name: "Bumper exits", desc: "Balls grazing the side walls after the bumpers are dangerous." },
      ],
      tips: [
        { head: "Out-of-order fix", body: "Messed up 1-2-3-4? The left green target resets them." },
        { head: "Captive ball double", body: "Roll over the two left-arc stars before the captive ball for double value." },
      ],
      mistakes: [
        "Shooting a release target with only one orb banked when more could be banked first.",
        "Shooting ORBS out of order (no instant multiball).",
      ],
    },

    hotspots: [
      { x: 48,   y: 33,   type: "key",   label: "ORBS", name: "O-R-B-S Drop Targets",
        body: "Left to right in order: instant 2-ball multiball + a banked orb." },
      { x: 82,   y: 8,   type: "key",   label: "RT", name: "Right Lane → Release / Collect Target",
        body: "Far upper-right target: release all orbs when lit; timed bonus collect (aim for 5X)." },
      { x: 82,   y: 44.5, type: "key",   label: "1-4", name: "1-2-3-4 Drop Targets",
        body: "In order: 10K–80K, bonus advances, lights release + collect." },
      { x: 12.5, y: 10,   type: "info",  label: "CH", name: "Inline Drops / Chamber Release",
        body: "Clear the inline drops behind the captive ball to reach the Chamber release target." },
      { x: 13.5, y: 31.5, type: "info",  label: "CB", name: "Left Arc / Captive Ball",
        body: "10K–50K value (doubled via the arc stars)." },
      { x: 15.5, y: 42.5, type: "info",  label: "RS", name: "Reset 1-4 Target", body: "Resets the 1-2-3-4 drops if you hit them out of order." },
      { x: 72,   y: 16,   type: "info",  label: "SP", name: "Spot 1-4 Target", body: "Spots the next 1-2-3-4 target." },
      { x: 50,   y: 18,   type: "info",  label: "PB", name: "Pop Bumpers", body: "Exits can graze the walls toward the outlanes." },
      { x: 6.5,  y: 70,   type: "avoid", label: "!",  name: "Left Outlane / Guardian", body: "Guardian lane. Nudge — comp setups remove the outlane bounce-back rubber." },
      { x: 84,   y: 70,   type: "avoid", label: "!",  name: "Right Outlane / Guardian", body: "Guardian lane. Nudge — comp setups remove the outlane bounce-back rubber." },
    ],
  };
