  /* ─── VIKING ───────────────────────────────────────────── */
MACHINES['viking'] = {
    name: "Viking",  sub: "1979 · Bally · Standard Body",
    tagline: "Norse classic · spinner engine & mid-ball collects",
    image: "images/viking.jpg",
    difficulty: "Easy–Medium", diffClass: "diff-medium", era: "SS",

    info: {
      stats: [
        { label: "Manufacturer", value: "Bally Mfg. Co." },
        { label: "Year",         value: "1979" },
        { label: "Type",         value: "Solid-State EMC" },
        { label: "Body",         value: "Standard" },
        { label: "Production",   value: "~2,500 units" },
        { label: "Max Bonus",    value: "295,000 pts" },
      ],
      theme: "Norse mythology. Longship, runes, and warrior art. One of Bally's late solid-state classics.",
      features: [
        { name: "Center Spinner", desc: "Starts at 10 pts/spin, self-advances to 1,000 pts/spin. Every tenth spin also adds a bonus advance. Value resets if not re-hit before the warning signal." },
        { name: "Inline Drop Targets (Left)", desc: "Each target advances the bonus multiplier: 2× → 3× → 4× → 5×. Back standup scores a Special, then 50,000 on repeat hits — stays active the rest of the ball. Completing all drops also <strong>lights the Extra Ball rollover</strong> and <strong>lights both outlanes for 25K</strong>." },
        { name: "1-2-3 Memory Drops (Right)", desc: "Hit targets 1, 2, and 3 in sequential order for 10× the current lit value — up to 100,000 pts. Out-of-order hits count toward the bank but forfeit the jackpot." },
        { name: "Bonus Collect Saucer (Top-Left)", desc: "When lit, collects your full bonus (base × multiplier) mid-ball. Lit by shooting the <strong>right orbit</strong>. A strong orbit shot crosses the top of the playfield and drops straight into the saucer. Ball kicks to the top arch afterward. Shoot orbit again to re-light." },
        { name: "Right Orbit", desc: "The route to the bonus collect saucer. Shoot from the left flipper with solid strength. The ball arcs right, crosses the top, and either lights or collects the saucer. The heart of the game — repeatable mid-ball scoring loop." },
        { name: "Outlane Bounce-Back Gates", desc: "Gates on both outlanes can redirect a draining ball back to the inlane. A gentle nudge toward the gate can save the ball." },
      ],
      scoring: [
        { key: "Spinner start",          val: "10 pts/spin" },
        { key: "Spinner max",            val: "1,000 pts/spin" },
        { key: "Max multiplier",         val: "5×" },
        { key: "Max base bonus",         val: "59,000 pts" },
        { key: "Max bonus payout",       val: "295,000 pts" },
        { key: "Super bonus (20K lock)", val: "Persists all balls" },
        { key: "Super bonus (40K lock)", val: "Persists all balls" },
        { key: "1-2-3 sequential jackpot", val: "Up to 100,000 pts" },
        { key: "Back standup (Special)", val: "50,000 pts" },
      ],
      rules: [
        "The <strong>spinner value resets</strong> to 10 if not re-triggered before the warning signal. Keep hitting it. Every tenth spin adds a bonus advance.",
        "Bonus is collected at ball end <strong>OR</strong> by shooting the lit saucer — the saucer is the primary mid-ball scoring event.",
        "The collect saucer is lit by <strong>shooting the right orbit</strong>. Shoot orbit to light it, shoot orbit again strongly to enter the saucer and collect.",
        "Reaching <strong>20K or 40K bonus</strong> before draining locks that amount for subsequent balls.",
        "The 1-2-3 drops must be hit <strong>in sequential order</strong> (1 → 2 → 3) for the 10× jackpot.",
        "Completing all left inline drops <strong>lights the Extra Ball rollover</strong> and <strong>lights both outlanes for 25K</strong>.",
      ],
      benchmarks: [
        { score: "400,000+", label: "Excellent — multiple big saucer collects" },
        { score: "150,000+", label: "Solid — 5× with at least one collect" },
        { score: "50,000+",  label: "Decent — hitting the basic loop" },
      ],
      resources: [
        { name: "IPDB Entry",        url: "https://www.ipdb.org/machine.cgi?id=2737",   icon: "🎯" },
        { name: "Pinside Game Page", url: "https://pinside.com/pinball/machine/viking", icon: "🕹️" },
      ],
    },

    strategy: {
      skillShot: null,
      multiball: null,
      goal: "<strong>Build bonus to 20,000+, lock it with the super bonus threshold, hit the inline drops for 5× multiplier, then collect that bonus as many times as possible via the top-left saucer.</strong> The spinner is your engine — keep ripping it all game.",
      phases: [
        {
          num: "Phase 1 · Early Game",
          title: "Build Bonus Base & Multiplier",
          body: "<strong>Inline drops first, then spinner.</strong><br><br>Shoot the left inline drop targets to build the multiplier toward 5×. While working the drops, every pass through the spinner adds to your bonus base and climbs the spinner value toward 1,000 pts/spin.<br><br>Keep an eye on the spinner indicator. If you hear the reset warning, <strong>immediately re-hit the spinner</strong> — losing accumulated value wastes significant potential.",
        },
        {
          num: "Phase 2 · Mid Game",
          title: "Secure the 20K Super Bonus",
          body: "<strong>Reach 20,000 base bonus before ever shooting the collect saucer.</strong><br><br>Once at 5× multiplier, shift to building the base to at least 20K. This locks the value for future balls. The spinner is your fastest tool — every tenth spin also adds a bonus advance. <em>Do NOT shoot the saucer until you have crossed 20K base.</em><br><br>If you can push to <strong>40K base</strong> before collecting, do it — every future ball becomes a guaranteed massive payout.",
        },
        {
          num: "Phase 3 · Big Scoring",
          title: "Loop the S-Curve — Collect Repeatedly",
          body: "<strong>Shoot the right orbit repeatedly to loop the bonus collect saucer.</strong><br><br>With 5× and 20K+ locked, shoot the right orbit from the left flipper. A strong shot arcs to the top of the playfield and drops into the lit top-left saucer. Each collect pays base × multiplier and kicks the ball back for more bumper scoring. Shoot the orbit again to re-light the saucer and repeat.<br><br>At 5× × 59K = <strong>295,000 pts per collect</strong>. Multiple collects per ball stack to enormous totals.",
        },
      ],
      safeShots: [
        { name: "Center Spinner", desc: "Safest high-value shot on the table. A direct controlled hit from either flipper is reliable. Rip this as often as possible." },
        { name: "Left Inline Drops", desc: "Direct mid-strength shot from the right flipper. Wide and forgiving. Your multiplier builders." },
        { name: "Right Orbit (Saucer Collect)", desc: "Shoot from the left flipper with solid strength. The ball arcs right, crosses the top of the playfield, and drops into the lit saucer. Shoot to light, shoot again to collect. Once you know the angle this is a repeatable, high-value shot — the heart of the scoring engine." },
      ],
      avoidShots: [
        { name: "1-2-3 Memory Drops (aggressive pursuit)", desc: "The 100K jackpot is real but only pursue it with a well-controlled ball and high lit value. Otherwise treat it as a bonus if it happens." },
        { name: "Outlanes", desc: "If the ball heads toward an outlane, look for the bounce-back gate opportunity. A gentle nudge can redirect to the inlane." },
      ],
      tips: [
        { head: "Spinner reset warning", body: "If you hear the warning signal, immediately pivot to hitting the spinner again. Letting it reset to 10 wastes significant scoring potential." },
        { head: "Super bonus is your long game", body: "Locking in 20K or 40K bonus means every future ball starts strong. Treat the threshold as a priority equal to collecting." },
        { head: "Ball control after the saucer", body: "The saucer kicks the ball into the top arch area. Be ready — the ball can return fast via the pops. Don't let a frantic return erase a great collect." },
        { head: "Nudge the outlanes", body: "The bounce-back gates are genuinely useful. A timely nudge toward the gate can save a ball already in the gutter. Practice reading which direction to nudge." },
        { head: "Multiplier math", body: "At 5×: 20K = 100K, 30K = 150K, 40K = 200K, 59K = 295K. Each bonus increment is worth 5× as much — always worth one more spinner rip before collecting." },
        { head: "Completing inline drops unlocks extras", body: "Once all left inline drops are cleared, the Extra Ball rollover lights and both outlanes light for 25K each. Free rewards for something you are already doing every ball." },
      ],
      mistakes: [
        "Collecting the saucer before 5× multiplier and 20K base — leaving most of the value on the table.",
        "Letting the spinner value reset by ignoring the warning signal.",
        "Forgetting that the saucer is lit by the right orbit — shoot orbit to light it, shoot orbit again to collect.",
        "Going for the 1-2-3 sequential jackpot too aggressively and draining.",
        "Not nudging on outlane close calls — the bounce-back gate is a free save.",
      ],
    },

    /* Hotspot positions calibrated to "bally_viking_playfield_topview" image. */
    hotspots: [
      { x:48, y:40, type:"key",   label:"~", name:"Center Spinner",                body:"<strong>Your scoring engine.</strong> Starts at 10 pts/spin, self-advances to 1,000 pts/spin. Each pass advances the bonus base. Rip this as often as possible. Critical: if you hear the reset warning, immediately hit the spinner again or lose your accumulated value." },
      { x:24, y:47, type:"key",   label:"V", name:"Left Inline Drops",             body:"Hit all four targets to advance multiplier: <strong>2× → 3× → 4× → 5×</strong>. Direct mid-strength shot from the right flipper. Wide and forgiving. Hit these every ball before thinking about collecting." },
      { x:24, y:36, type:"key",   label:"S", name:"Back Standup (Behind Drops)",   body:"Behind the inline targets. <strong>Scores a Special (50,000) and then 50,000 on every subsequent hit.</strong> Very rewarding once the drops are cleared." },
      { x:18, y:17, type:"key",   label:"C", name:"Bonus Collect Saucer",          body:"<strong>The jackpot machine.</strong> When lit, collects your full bonus (base × multiplier) mid-ball. 5× × 59K = <strong>295,000 pts per collect</strong>. Lit by shooting the right orbit — shoot orbit to light, shoot orbit again strongly to enter the saucer. Ball kicks back to the top arch — be ready." },
      { x:47, y:11, type:"info",  label:"A", name:"A-B Top Rollover Lanes",        body:"Passed through naturally via bumper action. Contribute to end-of-ball bonus and specials. <em>Note: the collect saucer is lit by the right orbit, not by A-B lanes.</em> 2nd A-B completion lights return lane specials; 3rd+ scores a special each time." },
      { x:78, y:30, type:"key",   label:"→", name:"Right Orbit",                   body:"<strong>How you light and collect the saucer.</strong> Shoot from the left flipper with solid strength. The ball arcs right, crosses the top of the playfield, and drops into the lit top-left saucer. One orbit shot lights it; the next strong orbit shot collects. Repeatable high-value loop — the heart of the game." },
      { x:75, y:45, type:"info",  label:"3", name:"1-2-3 Memory Drops (Right)",    body:"Hit targets 1 → 2 → 3 <strong>in exact sequential order</strong> for 10× the current lit value — up to 100,000 pts. Out-of-order hits count toward the bank but forfeit the jackpot. Pursue only with a well-controlled ball." },
      { x:48, y:22, type:"info",  label:"↑", name:"Pop Bumpers",                   body:"Top-center bumpers. The saucer kicks the ball into these after each collect — expect fast, unpredictable returns. <strong>Be ready at the flippers immediately after every saucer collect.</strong>" },
      { x:13, y:73, type:"safe",  label:"←", name:"Left Outlane Bounce-Back Gate", body:"<strong>Free save mechanism.</strong> A gentle nudge toward the gate when the ball enters the left outlane can redirect it back to the inlane. Act immediately and confidently. Don't tilt — but don't give up early either." },
      { x:85, y:73, type:"safe",  label:"→", name:"Right Outlane Bounce-Back Gate", body:"<strong>Free save mechanism.</strong> Same as the left gate — nudge gently toward the gate when the ball enters the right outlane. Timing and direction matter." },
    ],
  };
