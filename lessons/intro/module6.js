window.Lessons.intro.modules[5] = {
  title: "6. HTML builds structure",
  body: `<p>HTML is like a <strong>skeleton</strong>. It gives a website its shape and tells the browser where the important parts should go.</p>
            <p class="text-[var(--neon-pink)] font-bold">Step 1: Build the digital skeleton by placing the missing bones.</p>
            <p class="text-[var(--neon-pink)] font-bold">Step 2: Type <code>&lt;body&gt;&lt;/body&gt;</code> in the editor to give the page a real body.</p>`,
  svg: ``,
  widgetCode: `<!-- INTERACTIVE MODULE -->
<style>
.intro-demo-shell { margin-bottom: 12px; padding: 14px; border-radius: 16px; background: linear-gradient(180deg, #10203a, #0f172a); border: 1px solid #1e3a5f; color: #dbeafe; }
.intro-demo-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; gap: 10px; }
.intro-demo-kicker { font-size: 11px; letter-spacing: 0.22em; text-transform: uppercase; color: #67e8f9; }
.intro-demo-replay { border: none; border-radius: 999px; padding: 7px 12px; background: #67e8f9; color: #082f49; font-weight: 700; cursor: pointer; }
.intro-demo-stage { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; background: rgba(15, 23, 42, 0.7); border-radius: 14px; padding: 12px; margin-bottom: 10px; }
.intro-demo-panel { min-height: 96px; border-radius: 12px; border: 1px solid rgba(103, 232, 249, 0.16); background: rgba(15, 23, 42, 0.95); padding: 12px; }
.intro-demo-label { font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; color: #93c5fd; margin-bottom: 8px; }
.intro-demo-code { min-height: 54px; font: 700 16px/1.6 monospace; white-space: pre-wrap; color: white; }
.intro-demo-preview { display: flex; align-items: center; justify-content: center; color: #67e8f9; font: 700 13px/1.5 sans-serif; text-align: center; }
.intro-demo-status { color: #cbd5e1; font-size: 13px; }
.skeleton-game { display: grid; grid-template-columns: 140px 1fr; gap: 18px; min-height: 300px; background: radial-gradient(circle at top, rgba(15, 23, 42, 0.95), #0f172a); border-radius: 16px; padding: 18px; color: white; user-select: none; }
.bone-pile { display: flex; flex-direction: column; gap: 10px; }
.bone-piece { background: linear-gradient(180deg, #38bdf8, #2563eb); padding: 10px 12px; border-radius: 10px; text-align: center; cursor: pointer; font-weight: 700; border: 2px solid transparent; font-size: 13px; transition: 0.18s ease; box-shadow: 0 8px 18px rgba(0, 0, 0, 0.2); }
.bone-piece:hover { transform: translateY(-2px); border-color: #67e8f9; }
.bone-piece.placed { opacity: 0.25; pointer-events: none; }
.skeleton-lab { position: relative; border: 2px dashed rgba(103, 232, 249, 0.25); border-radius: 14px; background: rgba(15, 23, 42, 0.65); overflow: hidden; }
.scan-lines { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0) 16%, rgba(255,255,255,0.04) 33%, rgba(255,255,255,0) 50%, rgba(255,255,255,0.04) 66%, rgba(255,255,255,0) 83%, rgba(255,255,255,0.04) 100%); opacity: 0.25; pointer-events: none; }
.skeleton-stage { position: relative; height: 100%; min-height: 260px; }
.skeleton-part { position: absolute; left: 50%; transform: translateX(-50%); border: 2px dashed #67e8f9; color: #67e8f9; border-radius: 999px; display: flex; align-items: center; justify-content: center; font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; transition: 0.2s ease; }
.part-skull { top: 16px; width: 82px; height: 82px; }
.part-spine { top: 96px; width: 20px; height: 88px; border-radius: 18px; }
.part-ribs { top: 104px; width: 140px; height: 70px; }
.part-legs { top: 188px; width: 90px; height: 60px; }
.skeleton-part.filled { border-style: solid; border-color: #10b981; background: rgba(16, 185, 129, 0.18); color: white; box-shadow: 0 0 18px rgba(16, 185, 129, 0.28); }
.skeleton-part.filled.part-skull::before { content: '💀'; font-size: 34px; letter-spacing: normal; }
.skeleton-part.filled.part-spine::before { content: '🦴'; font-size: 28px; letter-spacing: normal; }
.skeleton-part.filled.part-ribs::before { content: '🫁'; font-size: 34px; letter-spacing: normal; }
.skeleton-part.filled.part-legs::before { content: '🦿'; font-size: 34px; letter-spacing: normal; }
.skeleton-part.filled span { opacity: 0; }
.skeleton-status { margin-top: 12px; color: #67e8f9; font-weight: 700; font-size: 13px; }
.skeleton-complete { box-shadow: 0 0 30px rgba(16, 185, 129, 0.35); border-color: rgba(16, 185, 129, 0.55); }
</style>
<script>
window.playIntroBodyDemo = function() {
    const codeEl = document.getElementById('intro-body-demo-code');
    const previewEl = document.getElementById('intro-body-demo-preview');
    const statusEl = document.getElementById('intro-body-demo-status');
    if (!codeEl || !previewEl || !statusEl) return;
    const frames = ['', '<body>', '<body>\\n</body>'];
    const statuses = [
        'Step 1: start the body tag.',
        'Step 2: close the body tag.',
        'Now build the same tag pair in the editor.'
    ];
    let frame = 0;
    clearInterval(window.introBodyDemoTimer);
    codeEl.textContent = '';
    previewEl.textContent = 'The body is where visible page content lives.';
    statusEl.textContent = statuses[0];
    window.introBodyDemoTimer = setInterval(function() {
        codeEl.textContent = frames[frame];
        statusEl.textContent = statuses[Math.min(frame, statuses.length - 1)];
        if (frame === 1) previewEl.textContent = 'Body opening...';
        if (frame === 2) {
            previewEl.textContent = 'Body ready for headings and paragraphs.';
            clearInterval(window.introBodyDemoTimer);
        }
        frame++;
    }, 850);
};
window.placedCount = 0;
window.placeBone = function(target) {
    if (!target.classList.contains('bone-piece') || target.classList.contains('placed')) return;
    const part = document.querySelector('.skeleton-part[data-type=\"' + target.dataset.type + '\"]');
    if (!part || part.classList.contains('filled')) return;
    part.classList.add('filled');
    target.classList.add('placed');
    window.placedCount++;
    const status = document.getElementById('skeleton-status');
    if (status) {
        status.textContent = window.placedCount + ' / 4 bones placed';
    }
    if (window.placedCount >= 4) {
        const game = document.getElementById('skeleton-game');
        if (game) game.classList.add('skeleton-complete');
        if (status) status.textContent = 'Skeleton assembled. Now type <body></body> below.';
        window.completeModule('SKELETON_BUILT');
        document.getElementById('code-editor').dispatchEvent(new Event('input', { bubbles: true }));
    }
};
const introBodyEditor = document.getElementById('code-editor');
if (introBodyEditor) { introBodyEditor.readOnly = false; introBodyEditor.style.opacity = '1'; }
</script>
<div class="intro-demo-shell">
  <div class="intro-demo-top">
    <div>
      <div class="intro-demo-kicker">Quick Demo</div>
      <div style="font-size:13px;">Watch the body tag appear, then type it while you finish the skeleton.</div>
    </div>
    <button type="button" class="intro-demo-replay" id="intro-body-demo-replay">Replay</button>
  </div>
  <div class="intro-demo-stage">
    <div class="intro-demo-panel">
      <div class="intro-demo-label">Type This</div>
      <div id="intro-body-demo-code" class="intro-demo-code"></div>
    </div>
    <div id="intro-body-demo-preview" class="intro-demo-panel intro-demo-preview">The body is where visible page content lives.</div>
  </div>
  <div id="intro-body-demo-status" class="intro-demo-status">Demo loading...</div>
</div>
<div class="skeleton-game" id="skeleton-game" onclick="window.placeBone(event.target)">
  <div class="bone-pile">
    <div class="bone-piece" data-type="skull">Skull</div>
    <div class="bone-piece" data-type="spine">Spine</div>
    <div class="bone-piece" data-type="ribs">Ribs</div>
    <div class="bone-piece" data-type="legs">Leg Bones</div>
    <div class="skeleton-status" id="skeleton-status">0 / 4 bones placed</div>
  </div>
  <div class="skeleton-lab">
    <div class="scan-lines"></div>
    <div class="skeleton-stage">
      <div class="skeleton-part part-skull" data-type="skull"><span>Skull</span></div>
      <div class="skeleton-part part-spine" data-type="spine"><span>Spine</span></div>
      <div class="skeleton-part part-ribs" data-type="ribs"><span>Ribs</span></div>
      <div class="skeleton-part part-legs" data-type="legs"><span>Legs</span></div>
    </div>
  </div>
</div>
<script>
(function() {
  const replayBtn = document.getElementById('intro-body-demo-replay');
  if (replayBtn) replayBtn.addEventListener('click', window.playIntroBodyDemo);
  window.playIntroBodyDemo();
})();
</script>`,
  initialCode: ``,
  progress: 30,
  validator: function (code) {
    const clean = code.replace(/\s/g, '').toLowerCase();
    return (window.placedCount >= 4 || code.includes("SKELETON_BUILT")) && clean.includes("<body></body>");
  }
};
