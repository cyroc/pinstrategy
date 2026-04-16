let currentTab = 'info';

/* ═══════════════════════════════════════════════════════════
   FILTER / SORT STATE
═══════════════════════════════════════════════════════════ */
let filterEra  = 'all';
let sortMode   = 'az';
let searchQ    = '';

const DIFF_ORDER = { 'diff-easy': 0, 'diff-medium': 1, 'diff-hard': 2 };

/* Era order for chip display — extend as new eras are added */
const ERA_ORDER = ['EM', 'SS', 'DMD', 'Modern'];

function buildEraChips() {
  const eras = [...new Set(
    Object.values(MACHINES)
      .map(m => m.era)
      .filter(Boolean)
  )].sort((a, b) => {
    const ai = ERA_ORDER.indexOf(a), bi = ERA_ORDER.indexOf(b);
    return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi);
  });

  const container = document.getElementById('chip-era');
  const allBtn = `<button class="chip active" data-era="all" onclick="setEra('all',this)">All</button>`;
  const eraBtns = eras.map(e =>
    `<button class="chip" data-era="${e}" onclick="setEra('${e}',this)">${e}</button>`
  ).join('');
  container.innerHTML = allBtn + eraBtns;
}

function setEra(val, el) {
  filterEra = val;
  document.querySelectorAll('#chip-era .chip').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  applyFilters();
}

function setSort(val, el) {
  sortMode = val;
  document.querySelectorAll('#chip-sort .chip').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  applyFilters();
}

function clearSearch() {
  document.getElementById('search-input').value = '';
  searchQ = '';
  document.getElementById('search-clear').classList.add('hidden');
  applyFilters();
}

function applyFilters() {
  searchQ = document.getElementById('search-input').value.toLowerCase().trim();
  document.getElementById('search-clear').classList.toggle('hidden', !searchQ);
  renderHome();
}

/* ═══════════════════════════════════════════════════════════
   HOME — Render machine cards dynamically
═══════════════════════════════════════════════════════════ */
function renderHome() {
  // 1. Filter
  let entries = Object.entries(MACHINES);

  if (searchQ) {
    entries = entries.filter(([, m]) =>
      m.name.toLowerCase().includes(searchQ) ||
      m.tagline.toLowerCase().includes(searchQ) ||
      m.sub.toLowerCase().includes(searchQ));
  }
  if (filterEra !== 'all') {
    entries = entries.filter(([, m]) => m.era === filterEra);
  }

  // 2. Sort
  entries.sort(([, a], [, b]) => {
    if (sortMode === 'az')
      return a.name.localeCompare(b.name);
    if (sortMode === 'year-asc')
      return parseInt(a.sub) - parseInt(b.sub);
    if (sortMode === 'year-desc')
      return parseInt(b.sub) - parseInt(a.sub);
    if (sortMode === 'difficulty')
      return (DIFF_ORDER[a.diffClass] ?? 1) - (DIFF_ORDER[b.diffClass] ?? 1);
    return 0;
  });

  // 3. Update result count
  const total = Object.keys(MACHINES).length;
  const countEl = document.getElementById('filter-results');
  countEl.textContent = entries.length < total ? `${entries.length} of ${total}` : `${total} machines`;

  // 4. Render cards (or empty state)
  const container = document.getElementById('home-cards');
  if (entries.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">🎱</div>
        <div class="empty-state-title">No machines found</div>
        <div class="empty-state-sub">Try a different search or clear the filters.</div>
      </div>`;
    return;
  }

  container.innerHTML = entries.map(([id, m]) => {
    const imgHtml = m.image
      ? `<img class="machine-card-img" src="${m.image}" alt="${m.name} playfield" />`
      : `<div class="card-placeholder">
           <div class="card-placeholder-grid"></div>
           <div class="card-placeholder-glow"></div>
           <div class="card-placeholder-text">${m.name.replace(' ', '<br>')}</div>
         </div>`;
    return `
      <div class="machine-card" onclick="openMachine('${id}')" style="margin-bottom:16px">
        ${imgHtml}
        <div class="machine-card-body">
          <div class="card-meta">
            <span class="card-year">${m.sub.split('·')[0].trim()}</span>
            <span class="card-mfr">· ${m.sub.split('·')[1].trim()}</span>
          </div>
          <div class="machine-card-name">${m.name}</div>
          <div class="machine-card-tagline">${m.tagline}</div>
          <div class="card-footer">
            <span class="difficulty-badge ${m.diffClass}">● ${m.difficulty}</span>
            <span class="card-arrow">›</span>
          </div>
        </div>
      </div>`;
  }).join('');
}

/* ═══════════════════════════════════════════════════════════
   NAVIGATION
═══════════════════════════════════════════════════════════ */
function openMachine(id) {
  currentMachine = id;
  currentTab = 'info';
  const m = MACHINES[id];

  document.getElementById('mv-name').textContent = m.name;
  document.getElementById('mv-sub').textContent  = m.sub;

  renderInfo(m);
  renderStrategy(m);
  renderPlayfield(m);

  document.querySelectorAll('.tab-btn').forEach(b => b.classList.toggle('active', b.dataset.tab === 'info'));
  document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
  document.getElementById('pane-info').classList.add('active');

  document.getElementById('home').classList.add('hidden');
  document.getElementById('machine-view').classList.remove('hidden');
  window.scrollTo(0, 0);
}

function goHome() {
  resetZoom();
  document.getElementById('machine-view').classList.add('hidden');
  document.getElementById('home').classList.remove('hidden');
  window.scrollTo(0, 0);
}

function switchTab(tab) {
  if (tab !== 'playfield') resetZoom();
  currentTab = tab;
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.toggle('active', b.dataset.tab === tab));
  document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
  document.getElementById('pane-' + tab).classList.add('active');
  document.querySelector('.mv-content').scrollTop = 0;
}

/* ═══════════════════════════════════════════════════════════
   RENDER — INFO
═══════════════════════════════════════════════════════════ */
function renderInfo(m) {
  const info = m.info;
  let html = '';

  html += '<div class="stat-grid">';
  info.stats.forEach(s => { html += `<div class="stat-card"><div class="stat-label">${s.label}</div><div class="stat-value">${s.value}</div></div>`; });
  html += '</div>';

  html += sec('Theme & Story');
  html += `<div class="feature-card"><div class="feature-desc">${info.theme}</div></div>`;

  html += sec('Key Features');
  info.features.forEach(f => { html += `<div class="feature-card"><div class="feature-name">${f.name}</div><div class="feature-desc">${f.desc}</div></div>`; });

  html += sec('Scoring Reference');
  html += '<div class="score-table">';
  info.scoring.forEach(s => { html += `<div class="score-row"><span class="score-key">${s.key}</span><span class="score-val">${s.val}</span></div>`; });
  html += '</div>';

  html += sec('Important Rules');
  info.rules.forEach(r => { html += `<div class="rule-card"><p>${r}</p></div>`; });

  html += sec('Benchmark Scores');
  info.benchmarks.forEach(b => { html += `<div class="benchmark-row"><div class="bm-score">${b.score}</div><div class="bm-label">${b.label}</div></div>`; });

  html += sec('Resources');
  info.resources.forEach(r => {
    html += `<a class="resource-link" href="${r.url}" target="_blank" rel="noopener">
      <span class="resource-icon">${r.icon}</span>
      <div><div class="resource-name">${r.name}</div><div class="resource-url">${r.url.replace('https://','').replace('http://','')}</div></div>
    </a>`;
  });

  document.getElementById('info-content').innerHTML = html;
}

/* ═══════════════════════════════════════════════════════════
   RENDER — STRATEGY
═══════════════════════════════════════════════════════════ */
function renderStrategy(m) {
  const s = m.strategy;
  let html = '';

  html += `<div class="goal-card"><div class="goal-label">🎯 Goal</div><div class="goal-text">${s.goal}</div></div>`;

  // ── SKILL SHOT ──
  html += sec('Skill Shot');
  if (s.skillShot) {
    html += `<div class="skill-shot-card">
      <div class="skill-shot-title">${s.skillShot.name}${s.skillShot.value ? ' — ' + s.skillShot.value : ''}</div>
      <div class="skill-shot-body">${s.skillShot.desc}</div>
    </div>`;
  } else {
    html += `<div class="feature-card"><div class="feature-desc" style="font-style:italic">No formal skill shot on this machine.</div></div>`;
  }

  // ── ACTION BUTTON ──
  if (s.actionButton) {
    html += sec('Action Button');
    html += `<div class="action-btn-card">
      <div class="action-btn-title">🔴 ${s.actionButton.name}</div>
      ${s.actionButton.when ? `<div class="action-btn-when">When: ${s.actionButton.when}</div>` : ''}
      <div class="action-btn-body">${s.actionButton.desc}</div>
    </div>`;
  }

  // ── MULTIBALL ──
  html += sec('Multiball');
  if (s.multiball && s.multiball.length) {
    s.multiball.forEach(mb => {
      html += `<div class="mb-card">
        <div class="mb-name">🎱 ${mb.name}${mb.balls ? ` (${mb.balls}-ball)` : ''}</div>
        <div class="mb-label">Activate Locks</div>
        <div class="mb-body">${mb.locks}</div>
        <div class="mb-label">Start Multiball</div>
        <div class="mb-body">${mb.start}</div>
        <div class="mb-label">Jackpots</div>
        <div class="mb-body">${mb.jackpots}</div>
        ${mb.tip ? `<div class="mb-label">Strategy Tip</div><div class="mb-body">${mb.tip}</div>` : ''}
      </div>`;
    });
  } else {
    html += `<div class="feature-card"><div class="feature-desc" style="font-style:italic">No multiball on this machine.</div></div>`;
  }

  html += sec('Game Plan');
  s.phases.forEach(p => {
    html += `<div class="phase-card">
      <div class="phase-num">${p.num}</div>
      <div class="phase-title">${p.title}</div>
      <div class="phase-body">${p.body}</div>
    </div>`;
  });

  html += sec('Safe Shots');
  s.safeShots.forEach(sh => { html += `<div class="shot-item safe"><div class="shot-dot safe"></div><div><div class="shot-name">${sh.name}</div><div class="shot-desc">${sh.desc}</div></div></div>`; });

  html += sec('Shots to Avoid');
  s.avoidShots.forEach(sh => { html += `<div class="shot-item avoid"><div class="shot-dot avoid"></div><div><div class="shot-name">${sh.name}</div><div class="shot-desc">${sh.desc}</div></div></div>`; });

  html += sec('Tips & Tricks');
  s.tips.forEach(t => { html += `<div class="tip-card"><div class="tip-head">${t.head}</div><div class="tip-body">${t.body}</div></div>`; });

  html += sec('Common Mistakes');
  s.mistakes.forEach(mt => { html += `<div class="mistake-row"><div class="mistake-x">✕</div><div class="mistake-text">${mt}</div></div>`; });

  document.getElementById('strat-content').innerHTML = html;
}

/* ═══════════════════════════════════════════════════════════
   RENDER — PLAYFIELD
═══════════════════════════════════════════════════════════ */
function renderPlayfield(m) {
  const container = document.getElementById('pf-container');
  container.innerHTML = '';
  container.style.transform = '';

  if (!m.image) {
    // No image available
    document.getElementById('pf-zoom-wrapper').style.display = 'none';
    const pane = document.getElementById('pane-playfield');
    // Remove old no-img block if any
    const old = pane.querySelector('.pf-noimg');
    if (old) old.remove();
    const noImg = document.createElement('div');
    noImg.className = 'pf-noimg';
    noImg.innerHTML = `
      <div class="pf-noimg-icon">📷</div>
      <div class="pf-noimg-title">No Playfield Image Yet</div>
      <div class="pf-noimg-desc">
        Add a playfield image as <code>images/johnny-mnemonic.jpg</code> to the project folder to enable the interactive playfield with hotspot markers.<br><br>
        A good source is the IPDB or Pinside image gallery for this machine.
      </div>`;
    pane.appendChild(noImg);
    return;
  }

  // Restore zoom wrapper
  document.getElementById('pf-zoom-wrapper').style.display = '';
  const pane = document.getElementById('pane-playfield');
  const old = pane.querySelector('.pf-noimg');
  if (old) old.remove();

  // Image
  const img = document.createElement('img');
  img.className = 'pf-img';
  img.src = m.image;
  img.alt = m.name + ' playfield';
  container.appendChild(img);

  // Hotspots
  m.hotspots.forEach((hs, i) => {
    const el = document.createElement('div');
    el.className = 'hs';
    el.style.left = hs.x + '%';
    el.style.top  = hs.y + '%';
    el.innerHTML = `<div class="hs-ring ${hs.type}" style="animation-delay:${(i*0.2).toFixed(1)}s"></div>
                    <div class="hs-dot ${hs.type}">${hs.label}</div>`;
    el.addEventListener('click', () => openSheet(hs));
    container.appendChild(el);
  });

  // Zoom hint
  const hint = document.createElement('div');
  hint.className = 'zoom-hint';
  hint.textContent = 'Scroll to explore  ·  Pinch to zoom  ·  Double-tap to reset';
  document.getElementById('pf-zoom-wrapper').appendChild(hint);
  setTimeout(() => { if (hint.parentNode) hint.parentNode.removeChild(hint); }, 4200);
}

/* ═══════════════════════════════════════════════════════════
   PINCH-TO-ZOOM
═══════════════════════════════════════════════════════════ */
let zoomState = { scale: 1, tx: 0, ty: 0 };

/* Switch touch-action so at scale=1 the view scrolls normally,
   at scale>1 JS handles all touch for panning. */
function updateTouchAction(scale) {
  const wrapper = document.getElementById('pf-zoom-wrapper');
  if (wrapper) wrapper.style.touchAction = scale > 1.05 ? 'none' : 'pan-y';
}

function resetZoom(animate) {
  zoomState = { scale: 1, tx: 0, ty: 0 };
  const c = document.getElementById('pf-container');
  if (animate) {
    c.style.transition = 'transform .25s ease';
    setTimeout(() => c.style.transition = '', 260);
  } else {
    c.style.transition = '';
  }
  c.style.transform = '';
  updateZoomBadge(1);
  updateTouchAction(1);
}

function updateZoomBadge(scale) {
  const badge = document.getElementById('zoom-badge');
  if (!badge) return;
  if (scale > 1.05) {
    badge.textContent = scale.toFixed(1) + '×';
    badge.style.opacity = '1';
  } else {
    badge.style.opacity = '0';
  }
}

function applyZoom(animate) {
  const c = document.getElementById('pf-container');
  const { scale, tx, ty } = zoomState;
  if (animate) {
    c.style.transition = 'transform .25s ease';
    setTimeout(() => c.style.transition = '', 260);
  } else {
    c.style.transition = '';
  }
  c.style.transformOrigin = '0 0';
  c.style.transform = `translate(${tx}px, ${ty}px) scale(${scale})`;
  updateZoomBadge(scale);
  updateTouchAction(scale);
}

function clampZoom(scale, tx, ty) {
  const wrapper = document.getElementById('pf-zoom-wrapper');
  const container = document.getElementById('pf-container');
  const wW = wrapper.clientWidth;
  const wH = wrapper.clientHeight || container.clientHeight;
  const cW = container.clientWidth;
  const cH = container.clientHeight;
  const scaledW = cW * scale;
  const scaledH = cH * scale;
  const maxTx = 0;
  const minTx = Math.min(0, wW - scaledW);
  const maxTy = 0;
  const minTy = Math.min(0, wH - scaledH);
  return {
    scale,
    tx: Math.max(minTx, Math.min(maxTx, tx)),
    ty: Math.max(minTy, Math.min(maxTy, ty)),
  };
}

function initZoom() {
  const wrapper = document.getElementById('pf-zoom-wrapper');

  let gesture   = null;   // pinch state
  let singlePan = null;   // single-finger pan state
  let lastTap   = 0;
  let touchMoved = false;

  function dist(a, b) { return Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY); }

  wrapper.addEventListener('touchstart', (e) => {
    touchMoved = false;
    const now = Date.now();

    if (e.touches.length === 1) {
      // Double-tap to reset
      if (now - lastTap < 280 && zoomState.scale > 1.05) {
        resetZoom(true);
        lastTap = 0;
        return;
      }
      lastTap = now;
      singlePan = { sx: e.touches[0].clientX, sy: e.touches[0].clientY, stx: zoomState.tx, sty: zoomState.ty };
      gesture = null;

    } else if (e.touches.length === 2) {
      wrapper.style.touchAction = 'none'; // disable scroll immediately on pinch start
      const rect = wrapper.getBoundingClientRect();
      gesture = {
        startDist:  dist(e.touches[0], e.touches[1]),
        startScale: zoomState.scale,
        startTx:    zoomState.tx,
        startTy:    zoomState.ty,
        midX: (e.touches[0].clientX + e.touches[1].clientX) / 2 - rect.left,
        midY: (e.touches[0].clientY + e.touches[1].clientY) / 2 - rect.top,
      };
      singlePan = null;
    }
  }, { passive: true });

  wrapper.addEventListener('touchmove', (e) => {
    if (e.touches.length === 2 && gesture) {
      e.preventDefault();
      touchMoved = true;
      const rect     = wrapper.getBoundingClientRect();
      const curDist  = dist(e.touches[0], e.touches[1]);
      const curMidX  = (e.touches[0].clientX + e.touches[1].clientX) / 2 - rect.left;
      const curMidY  = (e.touches[0].clientY + e.touches[1].clientY) / 2 - rect.top;
      const rawScale = gesture.startScale * (curDist / gesture.startDist);
      const newScale = Math.max(1, Math.min(4, rawScale));

      // Keep the element point under the initial finger midpoint pinned to the current midpoint
      const pinX = (gesture.midX - gesture.startTx) / gesture.startScale; // element-space coords
      const pinY = (gesture.midY - gesture.startTy) / gesture.startScale;
      const newTx = curMidX - pinX * newScale;
      const newTy = curMidY - pinY * newScale;

      zoomState = clampZoom(newScale, newTx, newTy);
      applyZoom(false);

    } else if (e.touches.length === 1 && singlePan && zoomState.scale > 1.05) {
      const dx = e.touches[0].clientX - singlePan.sx;
      const dy = e.touches[0].clientY - singlePan.sy;
      if (!touchMoved && Math.hypot(dx, dy) < 6) return;
      e.preventDefault();
      touchMoved = true;
      const clamped = clampZoom(zoomState.scale, singlePan.stx + dx, singlePan.sty + dy);
      zoomState = clamped;
      applyZoom(false);
    }
  }, { passive: false });

  wrapper.addEventListener('touchend', (e) => {
    if (e.touches.length < 2) gesture = null;
    if (e.touches.length === 0) {
      singlePan = null;
      if (zoomState.scale < 1.05) resetZoom(true);
    }
  }, { passive: true });
}

/* ═══════════════════════════════════════════════════════════
   BOTTOM SHEET
═══════════════════════════════════════════════════════════ */
function openSheet(hs) {
  const labels = { key: 'Key Feature', safe: 'Safe Shot', avoid: 'Avoid', info: 'Danger Zone' };
  const badge = document.getElementById('sheet-badge');
  badge.className = 'sheet-badge ' + hs.type;
  badge.textContent = labels[hs.type] || hs.type;
  document.getElementById('sheet-title').textContent = hs.name;
  document.getElementById('sheet-body').innerHTML    = hs.body;
  document.getElementById('overlay').classList.add('open');
  document.getElementById('sheet').classList.add('open');
}

function closeSheet() {
  document.getElementById('overlay').classList.remove('open');
  document.getElementById('sheet').classList.remove('open');
}

/* ═══════════════════════════════════════════════════════════
   HELPERS
═══════════════════════════════════════════════════════════ */
function sec(t) {
  return `<div class="section-hd"><span class="section-hd-text">${t}</span><div class="section-hd-line"></div></div>`;
}

/* ═══════════════════════════════════════════════════════════
   INIT
═══════════════════════════════════════════════════════════ */
buildEraChips();
renderHome();
initZoom();
