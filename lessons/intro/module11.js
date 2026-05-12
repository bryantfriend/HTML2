window.Lessons.intro.modules[10] = {
            title: "11. Opening vs closing tags",
            body: `<p>Most tags come in pairs. An opening tag creates the start, and the closing tag (with a forward slash) marks the end.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Watch the quick demo, then type a forward slash / to unlock the Tag Matcher Mini-Game!</p>`,
            svg: ``,
            widgetCode: `<!-- INTERACTIVE MODULE -->
<style>
.intro-slash-shell { padding: 14px; border-radius: 16px; background: linear-gradient(180deg, #10203a, #0f172a); border: 1px solid #1e3a5f; color: #dbeafe; }
.intro-slash-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; gap: 10px; }
.intro-slash-kicker { font-size: 11px; letter-spacing: 0.22em; text-transform: uppercase; color: #67e8f9; }
.intro-slash-replay { border: none; border-radius: 999px; padding: 7px 12px; background: #67e8f9; color: #082f49; font-weight: 700; cursor: pointer; }
.intro-slash-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
.intro-slash-panel { min-height: 120px; border-radius: 14px; background: rgba(15, 23, 42, 0.95); border: 1px solid rgba(103, 232, 249, 0.16); padding: 14px; }
.intro-slash-label { font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; color: #93c5fd; margin-bottom: 8px; }
.intro-slash-code { font: 700 24px/1.4 monospace; color: white; text-align: center; margin-top: 18px; }
.intro-slash-note { font-size: 13px; color: #cbd5e1; margin-top: 10px; }
</style>
<div class="intro-slash-shell">
  <div class="intro-slash-top">
    <div>
      <div class="intro-slash-kicker">Quick Demo</div>
      <div style="font-size:13px;">The slash turns an opening tag into a closing tag.</div>
    </div>
    <button type="button" class="intro-slash-replay" id="intro-slash-demo-replay">Replay</button>
  </div>
  <div class="intro-slash-grid">
    <div class="intro-slash-panel">
      <div class="intro-slash-label">Opening</div>
      <div class="intro-slash-code">&lt;p&gt;</div>
    </div>
    <div class="intro-slash-panel">
      <div class="intro-slash-label">Closing</div>
      <div id="intro-slash-close" class="intro-slash-code">&lt;p&gt;</div>
    </div>
  </div>
  <div id="intro-slash-note" class="intro-slash-note">Demo loading...</div>
</div>
<script>
(function() {
  window.playIntroSlashDemo = function() {
    const closeEl = document.getElementById('intro-slash-close');
    const noteEl = document.getElementById('intro-slash-note');
    if (!closeEl || !noteEl) return;
    const frames = ['<p>', '</p>'];
    const notes = [
      'Opening tag on the left.',
      'Add / to make the closing tag on the right, then type / below.'
    ];
    let frame = 0;
    clearInterval(window.introSlashDemoTimer);
    window.introSlashDemoTimer = setInterval(function() {
      closeEl.textContent = frames[Math.min(frame, frames.length - 1)];
      noteEl.textContent = notes[Math.min(frame, notes.length - 1)];
      if (frame === frames.length - 1) {
        clearInterval(window.introSlashDemoTimer);
      }
      frame++;
    }, 900);
  };
  const replayBtn = document.getElementById('intro-slash-demo-replay');
  if (replayBtn) replayBtn.addEventListener('click', window.playIntroSlashDemo);
  const editor = document.getElementById('code-editor');
  if (editor) { editor.readOnly = false; editor.style.opacity = '1'; }
  window.playIntroSlashDemo();
})();
</script>`,
            initialCode: "",
            progress: 55,
            validator: function (code) { return code.includes("/"); }
        };
