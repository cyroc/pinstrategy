  /* ─── PIN·BOT (WILLIAMS 1986) ───────────────────────────── */
MACHINES['pinbot'] = {
    name: "PinBot",  sub: "1986 · Williams · System 11A (alphanumeric)",
    tagline: "Open the visor · 2-ball multiball with double scoring · Solar Value jackpot up to 5M · planets to the Sun · Vortex skill shot",
    image: "images/pinbot.webp",
    difficulty: "Medium", diffClass: "diff-medium", era: "SS",

    /* ── QUICK GUIDE (30–90 s read) ───────────────────────────── */
    quick: {
      goal: "Build the <strong>Solar Value</strong> with ramp shots, open PinBot's <strong>visor</strong> via the rainbow targets, lock two balls in its eyes for <strong>2-ball multiball</strong>, then relock a ball and shoot the <strong>ramp</strong> to collect the Solar Value (100K up to 5M, carried between balls).",
      steps: [
        { title: "Ramp and skill shot",
          body: "Plunge into the <strong>Vortex</strong>: the middle hole (100K) is the skill shot, and its multiplier grows each plunge on a ball (max 10×). In single ball play, every full <strong>ramp</strong> shot adds a bonus X (max 5×) and 50K to the Solar Value. The ball lands on the upper pegboard, which can return it to the plunger for another skill shot." },
        { title: "Open the visor",
          body: "At the start, a flashing row or column on the rainbow grid can be hit directly with the matching <strong>front or side target</strong> to open the visor in one shot. Otherwise each target lights 2 squares; fill the grid. Lock a ball in each eye to start multiball." },
        { title: "Solar Value jackpot",
          body: "Multiball doubles all scoring. <strong>Relock one ball in an eye</strong>, then make the ramp with the other within about 15–20 s for the Solar Value. Later jackpots in the same multiball are only 100K. No ball save, so play the kickouts carefully." },
      ],
      shots: [
        { name: "Ramp", why: "Bonus X, Solar Value build, jackpot." },
        { name: "Rainbow targets / visor", why: "Opens the visor; locks; multiball." },
        { name: "Left drop targets", why: "Planets (bonus held between balls)." },
      ],
      avoid: [
        "Reaching the Sun early: it erases the planets' 20K-each bonus.",
        "Plunging hard into the pops at the start of a ball: there's no ball save.",
      ],
      target: "Milestones (estimates): one multiball = baseline. A 1M+ Solar Value collect = good. Several big Solar Value jackpots = great.",
    },

    info: {
      stats: [
        { label: "Manufacturer", value: "Williams" },
        { label: "Year",         value: "1986 (October)" },
        { label: "Design",       value: "Python Anghelo, Barry Oursler" },
        { label: "Platform",     value: "Williams System 11A (alphanumeric)" },
        { label: "Production",   value: "12,001" },
      ],
      theme: "A talking robot whose visor opens to reveal eyes that lock balls; a solar system runs from Pluto to the Sun on the lower playfield.",
      features: [
        { name: "Vortex skill shot", desc: "Three holes: lower 5K, middle 100K, top 20K, times a plunge multiplier that rises with every plunge on a ball (max 10×; reset on drain)." },
        { name: "Ramp and pegboard", desc: "The ball must reach the end switch and land on the upper pegboard. Single ball: bonus X (max 5×) and +50K Solar Value. The pegboard drops the ball to the left, to the right inlane, back to the plunger (another skill shot) or into the pops." },
        { name: "Visor and rainbow grid", desc: "Flashing row/column: hit its target to open the visor at once. Otherwise each front/side target lights 2 squares; full grid opens it. Completing the grid again before multiball lights an extra ball. In multiplayer, a locked ball can be stolen." },
        { name: "Multiball", desc: "2 balls, all scores doubled, no ball save or restart. Relock a ball in an eye and make the ramp within ~15–20 s for the Solar Value (100K–5M, carried over until collected); later jackpots that multiball are 100K." },
        { name: "Planets", desc: "Left drop bank (complete within ~15 s): 25K and the next planet (20K of bonus each, kept between balls). Jupiter = special; the Sun = 200K and a special at the right standup, but clears all planets." },
        { name: "Energy Value", desc: "Flashing left drop target raises the ramp ~15 s; hit the standup underneath for Energy Value (50K +2K per pop, max 500K)." },
      ],
      scoring: [
        { key: "Solar Value",       val: "100K–5M" },
        { key: "Energy Value",      val: "50K–500K" },
        { key: "Vortex skill shot", val: "100K × plunge multiplier" },
        { key: "The Sun",           val: "200K" },
        { key: "Upper left lane",   val: "10K, or 25K/50K/75K flashing" },
        { key: "Special (competition)", val: "100K" },
      ],
      rules: [
        "Bonus = base (max 99K) × X (max 5×) + 20K per planet; only planets carry over.",
        "Upper left lane saucer: 10K, or the flashing award (the right inlane advances it); its kickout often heads for the center post.",
        "Left inlane briefly lights the right standup to spot a planet.",
        "No ball save at all, on plunges or in multiball.",
        "Specials score 100K in competition; extra balls have no point setting.",
      ],
      benchmarks: [
        { score: "Several big Solar Value jackpots (estimate)", label: "Great game" },
        { score: "1M+ Solar Value",                             label: "Good game" },
        { score: "One multiball",                               label: "Baseline" },
      ],
      resources: [
        { name: "Strategy Guide (Pinball Primer)", url: "https://pinballprimer.github.io/pinbot_G41Z8.html", icon: "📖" },
        { name: "SDPC Cheatsheet",                 url: "https://pinball.miraheze.org/wiki/Pinbot", icon: "📄" },
        { name: "Pinside Game Page",               url: "https://pinside.com/pinball/machine/pin-bot", icon: "🕹️" },
      ],
    },

    strategy: {
      skillShot: "Middle Vortex hole: 100K × the plunge multiplier, which rises by 1 with each plunge on the same ball, including pegboard returns (max 10×). On the first plunge of a ball (only 1×) a soft plunge that avoids the pops is safer; go for the Vortex on replunges.",
      multiball: [
        { name: "PinBot Multiball", balls: 2, locks: "Open the visor (rainbow grid), then lock a ball in each eye.", start: "Second lock.", jackpots: "All scoring doubled; relock a ball and make the ramp within ~15–20 s: Solar Value (later ones 100K).", tip: "Build the Solar Value with ramps before starting; there's no ball save, so catch one ball on a flipper, shoot the other into an eye, then hit the ramp with the held ball." },
      ],
      goal: "<strong>Ramps (bonus X, Solar Value) → visor → multiball → relock + ramp for the Solar Value.</strong>",
      phases: [
        { num: "Phase 1", title: "Build", body: "Skill shot, then ramp shots for bonus X and Solar Value." },
        { num: "Phase 2", title: "Visor", body: "Instant-open if a row/column flashes; otherwise fill the grid." },
        { num: "Phase 3", title: "Multiball", body: "Relock, ramp, collect; then keep both balls for doubled scoring." },
      ],
      safeShots: [
        { name: "Ramp", desc: "Always useful: bonus X, Solar Value, and it can return the ball to the plunger." },
      ],
      avoidShots: [
        { name: "Upper left lane saucer (no award flashing)", desc: "The kickout is often aimed at the center post; be ready for it." },
      ],
      tips: [
        { head: "Planets", body: "Keep collecting planets (20K of kept bonus each; Jupiter also scores a 100K special). After Mercury, the next one is the Sun, which wipes up to 180K of bonus: save it for the last ball." },
        { head: "Energy Value", body: "Pops build it; collect it when it's high by hitting the flashing drop and then the standup under the raised ramp." },
        { head: "Solar Value carries over", body: "It stays between balls and games until collected, so a high value on the display is worth a multiball." },
      ],
      mistakes: [
        "Starting multiball before building the Solar Value with ramps: later jackpots are only 100K.",
        "Letting a multiball kickout run straight down the middle.",
      ],
    },

    hotspots: [
      { x: 16, y: 38, type: "key",   label: "R",  name: "Ramp", body: "Bonus X, Solar Value, jackpot in multiball." },
      { x: 45, y: 14, type: "key",   label: "V",  name: "Visor (eye locks)", body: "Lock two balls for multiball; relock for the jackpot." },
      { x: 47, y: 24, type: "key",   label: "FT", name: "Front Rainbow Targets", body: "Light the grid; instant-open when flashing." },
      { x: 60, y: 38, type: "info",  label: "ST", name: "Side Rainbow Targets", body: "Light the grid rows." },
      { x: 70, y: 12, type: "key",   label: "VX", name: "Vortex", body: "Skill shot: middle hole 100K × multiplier." },
      { x: 16.5, y: 50, type: "key",  label: "DT", name: "Left Drop Targets", body: "Planets; flashing drop raises the ramp." },
      { x: 22, y: 14, type: "info",  label: "UL", name: "Upper Left Lane Saucer", body: "10K, or the flashing award (25K/50K/75K/light extra ball); the right inlane advances it." },
      { x: 78, y: 33, type: "info",  label: "PB", name: "Upper Pegboard", body: "Ramp landing; can return the ball to the plunger." },
      { x: 80, y: 44, type: "info",  label: "P",  name: "Pop Bumpers", body: "Build the Energy Value." },
      { x: 45, y: 66, type: "info",  label: "PL", name: "Planets", body: "20K bonus each, kept between balls." },
      { x: 5,  y: 72, type: "avoid", label: "!",  name: "Left Outlane", body: "Drain." },
      { x: 86, y: 72, type: "avoid", label: "!",  name: "Right Outlane", body: "Drain." },
    ],
  };
