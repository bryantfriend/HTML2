window.Lessons.intro.modules[5] = {
  title: "6. HTML builds structure",
  body: `<p>HTML is like the skeleton of a house. It tells the browser "Here is a paragraph", "Here is an image", and "Here is a title".</p>
            <p class="text-[var(--neon-pink)] font-bold">Step 1: Build the house by matching pieces.</p>
            <p class="text-[var(--neon-pink)] font-bold">Step 2: Type <code>&lt;body&gt;&lt;/body&gt;</code> in the editor to finalize the foundation!</p>`,
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
.house-game { display: flex; gap: 80px; height: 300px; background: #0f172a; border-radius: 12px; padding: 20px 40px; color: white; user-select: none; }
.pieces { display: flex; flex-direction: column; gap: 10px; width: 140px; }
.piece { background: #3b82f6; padding: 10px; border-radius: 8px; text-align: center; cursor: pointer; font-weight: bold; border: 2px solid transparent; font-size: 14px; transition: 0.2s; }
.piece.selected { border-color: #ff00e5; background: #2563eb; transform: scale(1.05); }
.piece.placed { opacity: 0; pointer-events: none; }
.blueprint { flex: 1; position: relative; border: 2px dashed #475569; border-radius: 8px; background: rgba(0,0,0,0.2); }
.dz { border: 2px dashed #00f2ff; background: rgba(0,242,255,0.1); position: absolute; display: flex; align-items: center; justify-content: center; color: #00f2ff; font-size: 12px; cursor: pointer; transition: 0.2s; text-align: center; }
.dz:hover { background: rgba(0,242,255,0.2); transform: scale(1.02); }
.dz-body { bottom: 20px; left: 50%; transform: translateX(-50%); width: 180px; height: 160px; z-index: 1; align-items: flex-start; padding-top: 10px; }
.dz-head { bottom: 185px; left: 50%; transform: translateX(-50%); width: 220px; height: 70px; clip-path: polygon(50% 0%, 0% 100%, 100% 100%); border: none; background: rgba(0,242,255,0.2); z-index: 1; align-items: flex-end; padding-bottom: 5px; }
.dz-h1 { bottom: 20px; left: 50%; transform: translateX(-50%); width: 50px; height: 70px; z-index: 2; }
.dz-p1 { bottom: 100px; left: 50%; transform: translateX(-70px); width: 50px; height: 50px; z-index: 2; }
.dz-p2 { bottom: 100px; left: 50%; transform: translateX(20px); width: 50px; height: 50px; z-index: 2; }
.filled { background: #00ff9d !important; border: 2px solid #00ff9d !important; color: black !important; font-weight: bold; font-size: 14px; align-items: center !important; justify-content: center !important; padding: 0 !important; }
.dz-head.filled { background: #00ff9d !important; border: none !important; color: black !important; align-items: flex-end !important; padding-bottom: 10px !important; }
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
window.handleHouseClick = function(target) {
    if(target.classList.contains('piece') && !target.classList.contains('placed')) {
       let targetType = target.dataset.type;
       let dzs = document.querySelectorAll('.dz');
       for(let dz of dzs) {
           if(dz.dataset.type === targetType && !dz.classList.contains('filled')) {
               dz.classList.add('filled');
               dz.innerHTML = target.innerHTML;
               target.classList.add('placed');
               if(!window.placedCount) window.placedCount = 0;
               window.placedCount++;
               if(window.placedCount >= 5) {
                   document.getElementById('hg').style.background = 'radial-gradient(circle, #00ff9d, #0f172a)';
                   window.completeModule('HOUSE_BUILT');
                   // Manually trigger input so the validator runs immediately if they already typed body tags
                   document.getElementById('code-editor').dispatchEvent(new Event('input', { bubbles: true }));
               }
               break;
           }
       }
   }
};
const introBodyEditor = document.getElementById('code-editor');
if (introBodyEditor) { introBodyEditor.readOnly = false; introBodyEditor.style.opacity = '1'; }
</script>
<div class="intro-demo-shell">
  <div class="intro-demo-top">
    <div>
      <div class="intro-demo-kicker">Quick Demo</div>
      <div style="font-size:13px;">Watch the body tag appear, then type it while you build the house.</div>
    </div>
    <button type="button" class="intro-demo-replay" onclick="window.playIntroBodyDemo()">Replay</button>
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
<div class="house-game" id="hg" onclick="window.handleHouseClick(event.target)">
  <div class="pieces">
    <div class="piece" data-type="head">head</div>
    <div class="piece" data-type="body">body</div>
    <div class="piece" data-type="h1">&lt;h1&gt;&lt;/h1&gt;</div>
    <div class="piece" data-type="p">&lt;p&gt;&lt;/p&gt;</div>
    <div class="piece" data-type="p">&lt;p&gt;&lt;/p&gt;</div>
  </div>
  <div class="blueprint">
    <div class="dz dz-body" data-type="body">body</div>
    <div class="dz dz-head" data-type="head">head</div>
    <div class="dz dz-h1" data-type="h1">h1</div>
    <div class="dz dz-p1" data-type="p">p</div>
    <div class="dz dz-p2" data-type="p">p</div>
  </div>
</div>
<script>window.playIntroBodyDemo();</script>`,
  initialCode: ``,
  progress: 30,
  validator: function (code) {
    const clean = code.replace(/\s/g, '').toLowerCase();
    return (window.placedCount >= 5 || code.includes("HOUSE_BUILT")) && clean.includes("<body></body>");
  }
};
