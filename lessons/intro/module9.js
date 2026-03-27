window.Lessons.intro.modules[8] = {
  title: "9. The DOCTYPE 📜",
  body: `<p>Every professional HTML document starts with <code>&lt;!DOCTYPE HTML&gt;</code>. It tells the browser "Hey, I'm using the latest version of HTML!"</p>
            <p class="text-[var(--neon-cyan)] font-bold">Step 1: Choose the correct opening line for the document scanner.</p>
            <p class="text-[var(--neon-cyan)] font-bold">Step 2: Type <code>&lt;!DOCTYPE HTML&gt;</code> in the editor to launch the page in standards mode.</p>`,
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
.intro-demo-code { min-height: 54px; font: 700 15px/1.6 monospace; white-space: pre-wrap; color: white; }
.intro-demo-preview { display: flex; align-items: center; justify-content: center; color: #67e8f9; font: 700 13px/1.5 sans-serif; text-align: center; }
.intro-demo-status { color: #cbd5e1; font-size: 13px; }
.doctype-lab { background: linear-gradient(180deg, #0f172a, #111827); border-radius: 14px; padding: 16px; color: white; min-height: 300px; }
.doctype-options { display: grid; gap: 10px; margin-top: 14px; }
.doctype-choice { border: 1px solid #334155; background: #1e293b; color: #e2e8f0; border-radius: 12px; padding: 12px 14px; font: 700 14px/1.5 monospace; cursor: pointer; text-align: left; transition: 0.18s ease; }
.doctype-choice:hover { border-color: #67e8f9; transform: translateY(-1px); }
.doctype-choice.correct { border-color: #10b981; background: rgba(16, 185, 129, 0.18); }
.doctype-choice.wrong { border-color: #ef4444; background: rgba(239, 68, 68, 0.18); }
.doctype-screen { margin-top: 14px; border-radius: 14px; border: 1px solid rgba(103, 232, 249, 0.14); background: rgba(15, 23, 42, 0.85); padding: 14px; min-height: 120px; display: flex; flex-direction: column; justify-content: center; }
.doctype-status { color: #67e8f9; font-weight: 700; font-size: 13px; }
.doctype-boot { margin-top: 8px; color: #cbd5e1; font-size: 13px; line-height: 1.5; }
</style>
<script>
window.playIntroDoctypeDemo = function() {
  const codeEl = document.getElementById('intro-doctype-demo-code');
  const previewEl = document.getElementById('intro-doctype-demo-preview');
  const statusEl = document.getElementById('intro-doctype-demo-status');
  if (!codeEl || !previewEl || !statusEl) return;
  const frames = ['', '<!DOCTYPE', '<!DOCTYPE HTML>'];
  const statuses = [
    'Start with the special declaration.',
    'Finish the word DOCTYPE.',
    'Now type the full line in the editor.'
  ];
  let frame = 0;
  clearInterval(window.introDoctypeDemoTimer);
  codeEl.textContent = '';
  previewEl.textContent = 'This line tells the browser to use modern HTML.';
  statusEl.textContent = statuses[0];
  window.introDoctypeDemoTimer = setInterval(function() {
    codeEl.textContent = frames[frame];
    statusEl.textContent = statuses[Math.min(frame, statuses.length - 1)];
    if (frame === 2) {
      previewEl.textContent = 'DOCTYPE confirmed.';
      clearInterval(window.introDoctypeDemoTimer);
    }
    frame++;
  }, 800);
};
window.pickDoctypeLine = function(button, isCorrect) {
  const status = document.getElementById('doctype-status');
  const boot = document.getElementById('doctype-boot');
  document.querySelectorAll('.doctype-choice').forEach(choice => choice.classList.remove('correct', 'wrong'));
  button.classList.add(isCorrect ? 'correct' : 'wrong');
  if (isCorrect) {
    if (status) status.textContent = 'Correct first line found.';
    if (boot) boot.textContent = 'Nice. Now type <!DOCTYPE HTML> in the editor so the document launches in standards mode.';
    window.completeModule('DOCTYPE_PICKED');
  } else {
    if (status) status.textContent = 'Not quite. The DOCTYPE line must come first.';
    if (boot) boot.textContent = 'Try again. We want the special line that tells the browser this is an HTML document.';
  }
};
(function() {
  const introDoctypeEditor = document.getElementById('code-editor');
  if (introDoctypeEditor) {
    introDoctypeEditor.readOnly = false;
    introDoctypeEditor.style.opacity = '1';
  }
})();
</script>
<div class="intro-demo-shell">
  <div class="intro-demo-top">
    <div>
      <div class="intro-demo-kicker">Quick Demo</div>
      <div style="font-size:13px;">Watch the first line appear, then type that same line below.</div>
    </div>
    <button type="button" class="intro-demo-replay" onclick="window.playIntroDoctypeDemo()">Replay</button>
  </div>
  <div class="intro-demo-stage">
    <div class="intro-demo-panel">
      <div class="intro-demo-label">Type This</div>
      <div id="intro-doctype-demo-code" class="intro-demo-code"></div>
    </div>
    <div id="intro-doctype-demo-preview" class="intro-demo-panel intro-demo-preview">This line tells the browser to use modern HTML.</div>
  </div>
  <div id="intro-doctype-demo-status" class="intro-demo-status">Demo loading...</div>
</div>
<div class="doctype-lab">
  <div style="font-size:11px; text-transform:uppercase; letter-spacing:0.24em; color:#67e8f9;">Document Scanner</div>
  <div style="margin-top:6px; color:#cbd5e1; font-size:13px;">Choose the correct first line to help the browser understand what kind of file this is.</div>
  <div class="doctype-options">
    <button class="doctype-choice" onclick="window.pickDoctypeLine(this, true)">&lt;!DOCTYPE HTML&gt;</button>
    <button class="doctype-choice" onclick="window.pickDoctypeLine(this, false)">&lt;body&gt;</button>
    <button class="doctype-choice" onclick="window.pickDoctypeLine(this, false)">&lt;title&gt;My Page&lt;/title&gt;</button>
  </div>
  <div class="doctype-screen">
    <div id="doctype-status" class="doctype-status">Pick the correct opening line.</div>
    <div id="doctype-boot" class="doctype-boot">Once you find it here, type the full line in the editor to finish the mission.</div>
  </div>
</div>
<script>window.playIntroDoctypeDemo();</script>`,
  initialCode: ``,
  progress: 45,
  validator: function (code) {
    return code.includes("DOCTYPE_PICKED") && code.toUpperCase().includes("<!DOCTYPE HTML>");
  }
};
