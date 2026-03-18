window.Lessons.intro.modules[8] = {
  title: "9. The DOCTYPE 📜",
  body: `<p>Every professional HTML document starts with <code>&lt;!DOCTYPE HTML&gt;</code>. It tells the browser "Hey, I'm using the latest version of HTML!"</p>
            <p class="text-[var(--neon-cyan)] font-bold">Step 1: Hit the glowing F12 key to reveal the source code.</p>
            <p class="text-[var(--neon-cyan)] font-bold">Step 2: Type <code>&lt;!DOCTYPE HTML&gt;</code> in the editor to validate your code!</p>`,
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
.dev-game { display: flex; flex-direction: column; height: 300px; background: #0f172a; border-radius: 12px; overflow: hidden; user-select: none; }
.fake-site { flex: 1; background: white; color: black; padding: 20px; font-family: sans-serif; position: relative; }
.site-header { font-size: 24px; font-weight: bold; color: #3b82f6; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px; }
.site-body { margin-top: 10px; color: #475569; font-size: 14px; }
.hero-img { width: 100%; height: 80px; background: linear-gradient(45deg, #10b981, #3b82f6); border-radius: 8px; margin-top: 15px; color: white; display: flex; align-items: center; justify-content: center; font-weight: bold; }
.source-view { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: #1e1e1e; color: #d4d4d4; padding: 20px; font-family: 'Consolas', monospace; font-size: 13px; display: none; overflow: auto; line-height: 1.5; }
.code-tag { color: #569cd6; }
.code-str { color: #ce9178; }
.code-cmt { color: #6a9955; }
.keyboard-area { height: 70px; background: #1e293b; border-top: 4px solid #334155; display: flex; justify-content: center; align-items: center; gap: 8px; padding: 10px; }
.key { background: #0f172a; border: 2px solid #475569; border-radius: 6px; color: #94a3b8; padding: 10px 15px; font-family: monospace; font-size: 14px; font-weight: bold; box-shadow: 0 4px 0 #020617; }
.key-f12 { border-color: #ff00e5; color: white; box-shadow: 0 0 15px #ff00e5, 0 4px 0 #86007b; animation: pulse-pink 1.5s infinite; cursor: pointer; transition: 0.1s; }
.key-f12:active { transform: translateY(4px); box-shadow: 0 0 15px #ff00e5, 0 0px 0 #86007b; }
@keyframes pulse-pink { 0% { box-shadow: 0 0 5px #ff00e5, 0 4px 0 #86007b; } 50% { box-shadow: 0 0 20px #ff00e5, 0 4px 0 #86007b; } 100% { box-shadow: 0 0 5px #ff00e5, 0 4px 0 #86007b; } }
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
window.triggerF12 = function() {
  document.getElementById('src-view').style.display = 'block';
  document.getElementById('dg').style.boxShadow = '0 0 20px #00ff9d';
  window.completeModule('F12_PRESSED');
};
window.f12Listener = function(e) {
  if (e.key === 'F12' && document.getElementById('src-view')) {
    e.preventDefault();
    window.triggerF12();
  }
};
document.addEventListener('keydown', window.f12Listener);
const introDoctypeEditor = document.getElementById('code-editor');
if (introDoctypeEditor) { introDoctypeEditor.readOnly = false; introDoctypeEditor.style.opacity = '1'; }
</script>
<div class="intro-demo-shell">
  <div class="intro-demo-top">
    <div>
      <div class="intro-demo-kicker">Quick Demo</div>
      <div style="font-size:13px;">Press F12 here, then copy the DOCTYPE line into the editor.</div>
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
<div class="dev-game" id="dg">
  <div class="fake-site">
    <div class="site-header">WebSpace ✨</div>
    <div class="site-body">Welcome to the best website ever! Click F12 below to see how I built this.</div>
    <div class="hero-img">Super Cool Image</div>
    <div id="src-view" class="source-view">
      <span class="code-cmt">&lt;!-- Developer Tools --&gt;</span><br>
      &lt;<span class="code-tag">html</span>&gt;<br>
      &nbsp;&lt;<span class="code-tag">body</span>&gt;<br>
      &nbsp;&nbsp;&lt;<span class="code-tag">div</span> class=<span class="code-str">"header"</span>&gt;WebSpace ✨&lt;/<span class="code-tag">div</span>&gt;<br>
      &nbsp;&nbsp;&lt;<span class="code-tag">div</span> class=<span class="code-str">"body"</span>&gt;Welcome to the best website ever!&lt;/<span class="code-tag">div</span>&gt;<br>
      &nbsp;&nbsp;&lt;<span class="code-tag">div</span> class=<span class="code-str">"hero"</span>&gt;Super Cool Image&lt;/<span class="code-tag">div</span>&gt;<br>
      &nbsp;&lt;/<span class="code-tag">body</span>&gt;<br>
      &lt;/<span class="code-tag">html</span>&gt;
    </div>
  </div>
  <div class="keyboard-area text-[10px] md:text-sm">
    <div class="key">F10</div>
    <div class="key">F11</div>
    <div class="key key-f12" id="f12-btn" onclick="window.triggerF12()">F12</div>
    <div class="key" style="margin-left:20px;">PrtSc</div>
  </div>
</div>
<script>window.playIntroDoctypeDemo();</script>`,
  initialCode: ``,
  progress: 45,
  validator: function (code) {
    return code.includes("F12_PRESSED") && code.toUpperCase().includes("<!DOCTYPE HTML>");
  }
};
