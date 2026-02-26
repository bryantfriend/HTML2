window.Lessons.intro.modules[8] = {
  title: "9. The DOCTYPE 📜",
  body: `<p>Every professional HTML document starts with <code>&lt;!DOCTYPE HTML&gt;</code>. It tells the browser "Hey, I'm using the latest version of HTML!"</p>
            <p class="text-[var(--neon-cyan)] font-bold">Step 1: Hit the glowing F12 key to reveal the source code.</p>
            <p class="text-[var(--neon-cyan)] font-bold">Step 2: Type <code>&lt;!DOCTYPE HTML&gt;</code> in the editor to validate your code!</p>`,
  svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="120" y="85" fill="#00ff9d" font-family="monospace" font-size="20" font-weight="bold" text-anchor="middle">&lt;!DOCTYPE HTML&gt;</text></svg>`,
  widgetCode: `<!-- INTERACTIVE MODULE -->
<style>
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
</script>`,
  initialCode: `<div class="dev-game" id="dg">
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
</div>`,
  progress: 45,
  validator: function (code) {
    return code.includes("F12_PRESSED") && code.toUpperCase().includes("<!DOCTYPE HTML>");
  }
};