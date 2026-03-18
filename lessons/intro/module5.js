window.Lessons.intro.modules[4] = {
    title: "5. Typing Tags: <html></html>",
    body: `<p>HTML stands for <strong>HyperText Markup Language</strong>. Tags usually come in pairs: an <strong>opening tag</strong> <code>&lt;html&gt;</code> and a <strong>closing tag</strong> <code>&lt;/html&gt;</code>.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Watch the quick demo, then type both html tags: <code>&lt;html&gt;&lt;/html&gt;</code></p>`,
    svg: ``,
    widgetCode: `<!-- INTERACTIVE MODULE -->
<style>
.intro-demo-shell { padding: 14px; border-radius: 16px; background: linear-gradient(180deg, #10203a, #0f172a); border: 1px solid #1e3a5f; color: #dbeafe; }
.intro-demo-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; gap: 10px; }
.intro-demo-kicker { font-size: 11px; letter-spacing: 0.22em; text-transform: uppercase; color: #67e8f9; }
.intro-demo-replay { border: none; border-radius: 999px; padding: 7px 12px; background: #67e8f9; color: #082f49; font-weight: 700; cursor: pointer; }
.intro-demo-stage { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; background: rgba(15, 23, 42, 0.7); border-radius: 14px; padding: 12px; }
.intro-demo-panel { min-height: 120px; border-radius: 12px; border: 1px solid rgba(103, 232, 249, 0.16); background: rgba(15, 23, 42, 0.95); padding: 12px; }
.intro-demo-label { font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; color: #93c5fd; margin-bottom: 8px; }
.intro-demo-code { min-height: 72px; font: 700 16px/1.7 monospace; white-space: pre-wrap; color: white; }
.intro-demo-preview { display: flex; align-items: center; justify-content: center; color: #67e8f9; font: 700 13px/1.5 sans-serif; text-align: center; }
.intro-demo-status { margin-top: 10px; color: #cbd5e1; font-size: 13px; }
</style>
<div class="intro-demo-shell">
  <div class="intro-demo-top">
    <div>
      <div class="intro-demo-kicker">Quick Demo</div>
      <div style="font-size:13px;">Watch the tag pair appear, then type the same thing below.</div>
    </div>
    <button type="button" class="intro-demo-replay" onclick="window.playIntroHtmlDemo()">Replay</button>
  </div>
  <div class="intro-demo-stage">
    <div class="intro-demo-panel">
      <div class="intro-demo-label">What to Type</div>
      <div id="intro-html-demo-code" class="intro-demo-code"></div>
    </div>
    <div class="intro-demo-panel intro-demo-preview">
      <div id="intro-html-demo-preview">The page container locks in when both tags are present.</div>
    </div>
  </div>
  <div id="intro-html-demo-status" class="intro-demo-status">Demo loading...</div>
</div>
<script>
(function() {
  function runDemo() {
    const codeEl = document.getElementById('intro-html-demo-code');
    const previewEl = document.getElementById('intro-html-demo-preview');
    const statusEl = document.getElementById('intro-html-demo-status');
    if (!codeEl || !previewEl || !statusEl) return;
    const frames = ['', '<html>', '<html>\\n</html>'];
    const statuses = [
      'First type the opening tag.',
      'Now add the closing tag to complete the pair.',
      'Perfect. Type this exact pair in the editor.'
    ];
    let frame = 0;
    codeEl.textContent = '';
    previewEl.textContent = 'The page container locks in when both tags are present.';
    statusEl.textContent = statuses[0];
    clearInterval(window.introHtmlDemoTimer);
    window.introHtmlDemoTimer = setInterval(function() {
      codeEl.textContent = frames[frame];
      statusEl.textContent = statuses[Math.min(frame, statuses.length - 1)];
      if (frame === 1) previewEl.textContent = 'Opening tag started.';
      if (frame === 2) {
        previewEl.textContent = 'HTML shell complete.';
        clearInterval(window.introHtmlDemoTimer);
      }
      frame++;
    }, 900);
  }
  window.playIntroHtmlDemo = runDemo;
  const editor = document.getElementById('code-editor');
  if (editor) { editor.readOnly = false; editor.style.opacity = '1'; }
  runDemo();
})();
</script>`,
    initialCode: "",
    progress: 25,
    validator: function (code) {
        const clean = code.replace(/\s/g, '').toLowerCase();
        return clean.includes("<html></html>");
    }
};
