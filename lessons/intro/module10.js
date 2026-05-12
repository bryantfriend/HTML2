window.Lessons.intro.modules[9] = {
            title: "10. Tags = building blocks 🧱",
            body: `<p>HTML is built with <strong>Tags</strong>. Tags are special keywords wrapped in angle brackets.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Watch the quick demo, then type a left angle bracket <code>&lt;</code> and right angle bracket <code>&gt;</code>.</p>`,
            svg: ``,
            widgetCode: `<!-- INTERACTIVE MODULE -->
<style>
.intro-symbol-shell { padding: 14px; border-radius: 16px; background: linear-gradient(180deg, #10203a, #0f172a); border: 1px solid #1e3a5f; color: #dbeafe; }
.intro-symbol-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; gap: 10px; }
.intro-symbol-kicker { font-size: 11px; letter-spacing: 0.22em; text-transform: uppercase; color: #67e8f9; }
.intro-symbol-replay { border: none; border-radius: 999px; padding: 7px 12px; background: #67e8f9; color: #082f49; font-weight: 700; cursor: pointer; }
.intro-symbol-frame { min-height: 132px; border-radius: 14px; background: rgba(15, 23, 42, 0.95); border: 1px solid rgba(103, 232, 249, 0.16); padding: 16px; display: flex; flex-direction: column; justify-content: center; gap: 10px; }
.intro-symbol-code { font: 700 28px/1.2 monospace; color: white; text-align: center; }
.intro-symbol-tip { color: #cbd5e1; font-size: 13px; text-align: center; }
</style>
<div class="intro-symbol-shell">
  <div class="intro-symbol-head">
    <div>
      <div class="intro-symbol-kicker">Quick Demo</div>
      <div style="font-size:13px;">Tags begin with <code>&lt;</code> and end with <code>&gt;</code>.</div>
    </div>
    <button type="button" class="intro-symbol-replay" id="intro-bracket-demo-replay">Replay</button>
  </div>
  <div class="intro-symbol-frame">
    <div id="intro-bracket-demo" class="intro-symbol-code"></div>
    <div id="intro-bracket-tip" class="intro-symbol-tip">Demo loading...</div>
  </div>
</div>
<script>
(function() {
  window.playIntroBracketDemo = function() {
    const codeEl = document.getElementById('intro-bracket-demo');
    const tipEl = document.getElementById('intro-bracket-tip');
    if (!codeEl || !tipEl) return;
    const frames = ['', '<', '< >', '<tag>'];
    const tips = [
      'First type the opening bracket.',
      'Now add the closing bracket.',
      'Together they can wrap a tag name.',
      'Your turn in the editor below.'
    ];
    let frame = 0;
    clearInterval(window.introBracketDemoTimer);
    window.introBracketDemoTimer = setInterval(function() {
      codeEl.textContent = frames[frame];
      tipEl.textContent = tips[frame];
      if (frame === frames.length - 1) {
        clearInterval(window.introBracketDemoTimer);
      }
      frame++;
    }, 700);
  };
  const replayBtn = document.getElementById('intro-bracket-demo-replay');
  if (replayBtn) replayBtn.addEventListener('click', window.playIntroBracketDemo);
  const editor = document.getElementById('code-editor');
  if (editor) { editor.readOnly = false; editor.style.opacity = '1'; }
  window.playIntroBracketDemo();
})();
</script>`,
            initialCode: "",
            progress: 50,
            validator: function (code) { return code.includes("<") && code.includes(">"); }
        };
