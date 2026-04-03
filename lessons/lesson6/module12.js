window.Lessons.lesson6.modules[11] = {
    title: "12. Build the Semantic Shell",
    body: `<section class="quest-body">
    <p class="quest-kicker">Mission Brief</p>
    <h3 class="quest-title">12. Build the Semantic Shell</h3>
    <p class="quest-summary">Now put the page shell together with a header, a main area, and a footer.</p>
    <div class="quest-step-grid">
      <div class="quest-step-card"><p class="quest-step-label">Watch</p><p class="quest-step-copy">The page shell has a top, middle, and bottom.</p></div>
      <div class="quest-step-card"><p class="quest-step-label">Play</p><p class="quest-step-copy">Tap the layout pieces in order.</p></div>
      <div class="quest-step-card"><p class="quest-step-label">Type</p><p class="quest-step-copy">Write <code>&lt;header&gt;</code>, <code>&lt;main&gt;</code>, and <code>&lt;footer&gt;</code> in order.</p></div>
    </div>
    <div class="quest-memory"><strong>Remember:</strong> Top, middle, bottom.</div>
    <p class="quest-mission">Mission: Build the semantic page shell.</p>
  </section>`,
    svg: ``,
    widgetCode: `<!-- INTERACTIVE MODULE -->
<style>
:root { --quest-accent:#fbbf24; --quest-accent-soft:#f59e0b; --quest-panel:rgba(67,20,7,0.82); --quest-panel-2:rgba(17,24,39,0.96); --quest-success:#4ade80; --quest-ink:#451a03; }
.quest-body { display:grid; gap:14px; margin-bottom:10px; padding:18px; border-radius:24px; background:linear-gradient(180deg, rgba(15,23,42,0.96), rgba(11,18,32,0.94)); border:1px solid rgba(148,163,184,0.14); box-shadow:0 16px 40px rgba(2,6,23,0.22); }
.quest-kicker,.quest-widget-kicker { margin:0; color:var(--quest-accent); font-size:11px; font-weight:800; letter-spacing:0.22em; text-transform:uppercase; }
.quest-title { margin:0; color:#f8fafc; font-size:24px; line-height:1.15; }
.quest-summary { margin:0; color:#dbeafe; font-size:15px; line-height:1.6; }
.quest-step-grid { display:grid; gap:10px; }
.quest-step-card { padding:12px 14px; border-radius:16px; background:rgba(15,23,42,0.66); border:1px solid rgba(148,163,184,0.12); }
.quest-step-label { margin:0 0 4px; color:var(--quest-accent); font-size:11px; letter-spacing:0.18em; text-transform:uppercase; font-weight:800; }
.quest-step-copy { margin:0; color:#dbeafe; font-size:14px; line-height:1.5; }
.quest-memory { padding:12px 14px; border-radius:16px; background:rgba(8,47,73,0.35); border:1px solid rgba(56,189,248,0.22); color:#e0f2fe; font-size:14px; line-height:1.55; }
.quest-mission { margin:0; color:#cbd5e1; font-size:14px; font-style:italic; }
.quest-hero { margin-bottom:12px; }
.quest-widget-shell { display:grid; gap:14px; padding:16px; border-radius:24px; background:linear-gradient(180deg, rgba(67,20,7,0.82), rgba(17,24,39,0.96)); border:1px solid rgba(148,163,184,0.14); color:#e2e8f0; box-shadow:0 16px 40px rgba(2,6,23,0.24); }
.quest-widget-top { display:flex; align-items:flex-start; justify-content:space-between; gap:12px; }
.quest-widget-title { margin:4px 0 0; color:white; font-size:16px; line-height:1.35; }
.quest-chip { display:inline-flex; align-items:center; justify-content:center; padding:6px 10px; min-height:28px; border-radius:999px; color:#ecfeff; background:rgba(8,47,73,0.66); border:1px solid rgba(34,211,238,0.22); font-size:10px; font-weight:800; text-transform:uppercase; letter-spacing:0.16em; white-space:nowrap; }
.quest-browser { display:flex; align-items:center; gap:10px; }
.quest-browser-dots { display:flex; gap:6px; }
.quest-browser-dots span { width:10px; height:10px; border-radius:999px; background:#fb7185; }
.quest-browser-dots span:nth-child(2) { background:#fbbf24; }
.quest-browser-dots span:nth-child(3) { background:#4ade80; }
.quest-browser-bar { flex:1; min-width:0; padding:8px 12px; border-radius:999px; background:rgba(15,23,42,0.9); border:1px solid rgba(148,163,184,0.16); color:#a5f3fc; font:700 11px/1.2 monospace; }
.quest-demo-grid { display:grid; gap:12px; }
.quest-demo-panel,.quest-toggle-panel,.quest-choice-scene { padding:14px; border-radius:18px; background:rgba(15,23,42,0.75); border:1px solid rgba(148,163,184,0.12); }
.quest-panel-label { margin:0 0 8px; color:var(--quest-accent); font-size:11px; letter-spacing:0.16em; text-transform:uppercase; }
.quest-demo-snippet { margin:0; min-height:76px; padding:12px; border-radius:14px; background:rgba(2,6,23,0.9); color:#f8fafc; font:700 13px/1.6 monospace; white-space:pre-wrap; opacity:0; transform:translateY(8px); transition:opacity 220ms ease, transform 220ms ease; }
.quest-demo-snippet.is-visible { opacity:1; transform:translateY(0); }
.quest-demo-preview { min-height:128px; display:grid; place-items:center; padding:12px; border-radius:16px; background:linear-gradient(180deg, rgba(30,41,59,0.98), rgba(15,23,42,0.98)); opacity:0; transform:scale(0.97); transition:opacity 240ms ease, transform 240ms ease; }
.quest-demo-preview.is-visible { opacity:1; transform:scale(1); }
.quest-caption-stack { position:relative; min-height:40px; }
.quest-caption { margin:0; position:absolute; inset:0; color:#cbd5e1; font-size:13px; opacity:0; transform:translateY(8px); transition:opacity 200ms ease, transform 200ms ease; }
.quest-caption.is-active { opacity:1; transform:translateY(0); }
.quest-replay,.quest-choice-btn,.quest-sequence-btn,.quest-toggle-btn { font:700 13px/1.2 inherit; cursor:pointer; transition:transform 140ms ease, box-shadow 140ms ease, border-color 140ms ease, background 140ms ease; }
.quest-replay { justify-self:start; padding:10px 14px; border:none; border-radius:999px; background:linear-gradient(90deg, var(--quest-accent), var(--quest-accent-soft)); color:var(--quest-ink); }
.quest-choice-prompt { margin:0; color:#e2e8f0; font-size:14px; line-height:1.55; }
.quest-choice-grid,.quest-sequence-buttons,.quest-toggle-tabs { display:grid; gap:10px; }
.quest-choice-grid-2 { grid-template-columns:repeat(2, minmax(0,1fr)); }
.quest-choice-grid-3 { grid-template-columns:repeat(3, minmax(0,1fr)); }
.quest-choice-btn,.quest-sequence-btn,.quest-toggle-btn { width:100%; text-align:left; padding:12px 14px; border-radius:16px; border:1px solid rgba(148,163,184,0.16); background:rgba(15,23,42,0.74); color:#f8fafc; }
.quest-choice-btn span { display:block; font-size:14px; font-weight:800; margin-bottom:4px; }
.quest-choice-btn small { display:block; color:#cbd5e1; font-size:12px; line-height:1.45; }
.quest-choice-btn.is-correct,.quest-sequence-btn.is-correct,.quest-widget-shell.is-complete { border-color:rgba(74,222,128,0.55); background:rgba(20,83,45,0.42); box-shadow:0 0 0 1px rgba(74,222,128,0.18), 0 0 20px rgba(74,222,128,0.12); }
.quest-choice-btn.is-wrong,.quest-sequence-btn.is-wrong { border-color:rgba(248,113,113,0.55); background:rgba(127,29,29,0.4); transform:translateY(1px); }
.quest-status { margin:0; padding:10px 12px; border-radius:14px; background:rgba(15,23,42,0.66); border:1px solid rgba(148,163,184,0.12); color:#bae6fd; font-size:13px; line-height:1.5; }
.quest-sequence-track { display:grid; grid-template-columns:repeat(auto-fit, minmax(44px, 1fr)); gap:10px; }
.quest-sequence-node { display:grid; place-items:center; min-height:44px; border-radius:999px; border:1px dashed rgba(148,163,184,0.35); color:#94a3b8; font-weight:800; }
.quest-sequence-node.is-current { border-style:solid; border-color:rgba(34,211,238,0.5); color:#a5f3fc; }
.quest-sequence-node.is-done { border-style:solid; border-color:rgba(74,222,128,0.6); background:rgba(20,83,45,0.42); color:#dcfce7; }
.quest-toggle-tabs { grid-template-columns:repeat(2, minmax(0,1fr)); }
.quest-toggle-btn.is-active { border-color:rgba(34,211,238,0.45); background:rgba(8,47,73,0.58); color:#cffafe; }
.quest-toggle-panel { display:none; color:#e2e8f0; }
.quest-toggle-panel.is-active { display:block; }
.quest-signal-note { color:#cbd5e1; font-size:12px; }
.quest-svg-stage { width:100%; height:auto; display:block; }
@media (min-width: 720px) { .quest-step-grid,.quest-demo-grid { grid-template-columns:repeat(3, minmax(0,1fr)); } .quest-demo-grid { grid-template-columns:1fr 1fr; } }
</style>
<div class="quest-hero"><svg class="quest-svg-stage" viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="10" y="10" width="300" height="130" rx="24" fill="#111827" stroke="rgba(148,163,184,0.22)"/>
    <rect x="34" y="28" width="252" height="20" rx="10" fill="#93c5fd"/>
    <rect x="34" y="56" width="252" height="16" rx="8" fill="#fde68a"/>
    <rect x="34" y="80" width="164" height="40" rx="16" fill="#bbf7d0"/>
    <rect x="206" y="80" width="80" height="40" rx="16" fill="#fecdd3"/>
    <text x="270" y="42" fill="#e0f2fe" font-size="12" font-family="Arial, sans-serif" text-anchor="end">Page shell</text>
  </svg></div>
<div class="quest-widget-shell quest-sequence-shell"
      data-quest-sequence="true"
      data-marker="SHELL_READY"
      data-success="Perfect. That is the page shell order."
      data-reset="Start at step 1 again."
      data-insertions=""
      data-order="header|main|footer">
    <div class="quest-widget-top">
      <div>
        <p class="quest-widget-kicker">Mini Game</p>
        <h4 class="quest-widget-title">Build the shell in order.</h4>
      </div>
      <span class="quest-chip">3 steps</span>
    </div>
    <div class="quest-sequence-track">
      <div class="quest-sequence-node is-current" data-node="header">1</div><div class="quest-sequence-node" data-node="main">2</div><div class="quest-sequence-node" data-node="footer">3</div>
    </div>
    <div class="quest-sequence-buttons">
      <button type="button" class="quest-sequence-btn" data-value="header">Header first</button><button type="button" class="quest-sequence-btn" data-value="main">Main second</button><button type="button" class="quest-sequence-btn" data-value="footer">Footer last</button>
    </div>
    <p class="quest-status" id="lesson6-12-status">Tap the buttons in the correct order.</p>
  </div>
<script>
(function() {
  const editor = document.getElementById('code-editor');
  if (editor) {
    editor.readOnly = false;
    editor.style.opacity = '1';
  }

  function markDone(root) {
    if (!root || root.dataset.done === 'true') return;
    root.dataset.done = 'true';
    root.classList.add('is-complete');
    const marker = root.dataset.marker;
    if (marker) window.completeModule(marker);
  }

  document.querySelectorAll('[data-quest-demo="true"]').forEach(function(root) {
    if (root.dataset.ready === 'true') return;
    root.dataset.ready = 'true';
    const snippet = root.querySelector('.quest-demo-snippet');
    const preview = root.querySelector('.quest-demo-preview');
    const captions = Array.from(root.querySelectorAll('.quest-caption'));
    const replay = root.querySelector('.quest-replay');
    let timers = [];

    function clearTimers() {
      timers.forEach(clearTimeout);
      timers = [];
    }

    function setCaption(index) {
      captions.forEach(function(caption, captionIndex) {
        caption.classList.toggle('is-active', captionIndex === index);
      });
    }

    function play() {
      clearTimers();
      if (snippet) snippet.classList.remove('is-visible');
      if (preview) preview.classList.remove('is-visible');
      setCaption(0);
      timers.push(setTimeout(function() { if (snippet) snippet.classList.add('is-visible'); }, 220));
      timers.push(setTimeout(function() { if (preview) preview.classList.add('is-visible'); setCaption(1); }, 1200));
      timers.push(setTimeout(function() { setCaption(2); }, 2800));
      timers.push(setTimeout(play, 5400));
    }

    if (replay) replay.addEventListener('click', play);
    play();
  });

  document.querySelectorAll('[data-quest-choice="true"]').forEach(function(root) {
    if (root.dataset.ready === 'true') return;
    root.dataset.ready = 'true';
    const correct = (root.dataset.correct || '').split('|').filter(Boolean);
    const isMulti = root.dataset.multi === 'true';
    const status = root.querySelector('.quest-status');
    const chosen = new Set();

    root.querySelectorAll('.quest-choice-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        const value = btn.dataset.value;
        const good = correct.includes(value);
        if (!isMulti) {
          root.querySelectorAll('.quest-choice-btn').forEach(function(other) {
            other.classList.remove('is-correct');
          });
          chosen.clear();
        }

        if (good) {
          chosen.add(value);
          btn.classList.remove('is-wrong');
          btn.classList.add('is-correct');
          if (status) {
            status.textContent = isMulti ? (chosen.size + ' / ' + correct.length + ' cards solved') : root.dataset.success;
          }
          const done = isMulti ? correct.every(function(entry) { return chosen.has(entry); }) : true;
          if (done) {
            if (status) status.textContent = root.dataset.success;
            markDone(root);
          }
        } else {
          btn.classList.remove('is-correct');
          btn.classList.add('is-wrong');
          setTimeout(function() { btn.classList.remove('is-wrong'); }, 450);
          if (status) status.textContent = root.dataset.retry;
        }
      });
    });
  });

  document.querySelectorAll('[data-quest-sequence="true"]').forEach(function(root) {
    if (root.dataset.ready === 'true') return;
    root.dataset.ready = 'true';
    const order = (root.dataset.order || '').split('|').filter(Boolean);
    const status = root.querySelector('.quest-status');
    const nodes = Array.from(root.querySelectorAll('.quest-sequence-node'));
    const insertions = root.dataset.insertions ? JSON.parse(root.dataset.insertions) : {};
    let step = 0;

    function refreshNodes() {
      nodes.forEach(function(node, index) {
        node.classList.toggle('is-current', index === step);
      });
    }

    root.querySelectorAll('.quest-sequence-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        const value = btn.dataset.value;
        if (value === order[step]) {
          btn.classList.remove('is-wrong');
          btn.classList.add('is-correct');
          if (editor && insertions[value]) {
            const addition = String(insertions[value]);
            if (addition.includes('__INSERT_BEFORE_FORM_CLOSE__')) {
              const snippet = addition.replace('__INSERT_BEFORE_FORM_CLOSE__', '');
              editor.value = editor.value.replace(/</form>/i, snippet + '
</form>');
            } else {
              editor.value = addition.includes('__CURRENT__')
                ? addition.replace('__CURRENT__', editor.value)
                : editor.value + addition;
            }
            window.IntentEngine.run(window.Intents.updatePreview, { code: editor.value });
          }
          if (nodes[step]) {
            nodes[step].classList.remove('is-current');
            nodes[step].classList.add('is-done');
          }
          step += 1;
          if (step >= order.length) {
            if (status) status.textContent = root.dataset.success;
            markDone(root);
            return;
          }
          refreshNodes();
          if (status) status.textContent = 'Nice. Keep going to step ' + (step + 1) + '.';
        } else {
          btn.classList.add('is-wrong');
          setTimeout(function() { btn.classList.remove('is-wrong'); }, 450);
          step = 0;
          root.querySelectorAll('.quest-sequence-btn').forEach(function(other) { other.classList.remove('is-correct'); });
          nodes.forEach(function(node) { node.classList.remove('is-done'); });
          refreshNodes();
          if (status) status.textContent = root.dataset.reset;
        }
      });
    });
  });

  document.querySelectorAll('[data-quest-toggle="true"]').forEach(function(root) {
    if (root.dataset.ready === 'true') return;
    root.dataset.ready = 'true';
    const buttons = Array.from(root.querySelectorAll('.quest-toggle-btn'));
    const panels = Array.from(root.querySelectorAll('.quest-toggle-panel'));
    const seen = new Set(buttons[0] ? [buttons[0].dataset.target] : []);
    buttons.forEach(function(button) {
      button.addEventListener('click', function() {
        const target = button.dataset.target;
        buttons.forEach(function(entry) { entry.classList.toggle('is-active', entry === button); });
        panels.forEach(function(panel) { panel.classList.toggle('is-active', panel.id === target); });
        seen.add(target);
        if (seen.size >= buttons.length) {
          markDone(root);
        }
      });
    });
  });
})();
</script>`,
    initialCode: ``,
    previewScaffold: `<style>\nbody { margin:0; padding:14px; background:linear-gradient(180deg,#020617,#0f172a); font-family:Arial, sans-serif; color:#e2e8f0; display:grid; gap:10px; }\nheader, nav, main, article, section, aside, footer { display:block; position:relative; padding:14px; border-radius:16px; border:1px solid #cbd5e1; background:white; min-height:18px; }\nheader { background:#dbeafe; }\nnav { background:#fef3c7; }\nmain { background:#dcfce7; }\narticle { background:#e9d5ff; }\nsection { background:#ede9fe; }\naside { background:#fee2e2; }\nfooter { background:#c7d2fe; }\nheader::before, nav::before, main::before, article::before, section::before, aside::before, footer::before {\n  display:block; margin-bottom:8px; font-size:11px; font-weight:800; text-transform:uppercase; letter-spacing:0.12em; color:#334155;\n}\nheader::before { content:'header'; }\nnav::before { content:'nav'; }\nmain::before { content:'main'; }\narticle::before { content:'article'; }\nsection::before { content:'section'; }\naside::before { content:'aside'; }\nfooter::before { content:'footer'; }\ntable { width:100%; border-collapse:collapse; background:white; border-radius:14px; overflow:hidden; }\ncaption { caption-side:top; padding-bottom:8px; font-weight:800; color:#0f172a; }\nth, td { border:1px solid #cbd5e1; padding:10px; text-align:left; }\nth { background:#e0f2fe; }\n</style>`,
    progress: 60,
    validator: function(code) { return code.includes("<!-- SHELL_READY -->") && /<\s*header\b/i.test(code) && /<\s*main\b/i.test(code) && /<\s*footer\b/i.test(code); }
};