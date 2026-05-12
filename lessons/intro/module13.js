window.Lessons.intro.modules[12] = {
            title: "13. Editing text live",
            body: `<p>In our editor below, what you type automatically becomes rendered by our mini-browser on the right.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Watch the quick demo, then change the word "Change" to "Changed".</p>`,
            svg: ``,
            widgetCode: `<!-- INTERACTIVE MODULE -->
<style>
.intro-edit-shell { padding: 14px; border-radius: 16px; background: linear-gradient(180deg, #10203a, #0f172a); border: 1px solid #1e3a5f; color: #dbeafe; }
.intro-edit-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; gap: 10px; }
.intro-edit-kicker { font-size: 11px; letter-spacing: 0.22em; text-transform: uppercase; color: #67e8f9; }
.intro-edit-replay { border: none; border-radius: 999px; padding: 7px 12px; background: #67e8f9; color: #082f49; font-weight: 700; cursor: pointer; }
.intro-edit-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
.intro-edit-panel { min-height: 120px; border-radius: 14px; background: rgba(15, 23, 42, 0.95); border: 1px solid rgba(103, 232, 249, 0.16); padding: 14px; }
.intro-edit-label { font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; color: #93c5fd; margin-bottom: 8px; }
.intro-edit-code { font: 700 15px/1.6 monospace; white-space: pre-wrap; color: white; }
.intro-edit-preview { display: flex; align-items: center; justify-content: center; color: white; font: 700 18px/1.4 sans-serif; }
.intro-edit-note { margin-top: 10px; color: #cbd5e1; font-size: 13px; }
</style>
<div class="intro-edit-shell">
  <div class="intro-edit-top">
    <div>
      <div class="intro-edit-kicker">Quick Demo</div>
      <div style="font-size:13px;">Tiny edits in code change the output right away.</div>
    </div>
    <button type="button" class="intro-edit-replay" id="intro-edit-demo-replay">Replay</button>
  </div>
  <div class="intro-edit-grid">
    <div class="intro-edit-panel">
      <div class="intro-edit-label">Editor</div>
      <div id="intro-edit-code" class="intro-edit-code"></div>
    </div>
    <div class="intro-edit-panel intro-edit-preview">
      <div id="intro-edit-preview">Change this text.</div>
    </div>
  </div>
  <div id="intro-edit-note" class="intro-edit-note">Demo loading...</div>
</div>
<script>
(function() {
  window.playIntroEditDemo = function() {
    const codeEl = document.getElementById('intro-edit-code');
    const previewEl = document.getElementById('intro-edit-preview');
    const noteEl = document.getElementById('intro-edit-note');
    if (!codeEl || !previewEl || !noteEl) return;
    const frames = ['<p>Change this text.</p>', '<p>Changed this text.</p>'];
    const previews = ['Change this text.', 'Changed this text.'];
    const notes = [
      'Start with the original sentence.',
      'Replace Change with Changed in the editor below.'
    ];
    let frame = 0;
    clearInterval(window.introEditDemoTimer);
    window.introEditDemoTimer = setInterval(function() {
      codeEl.textContent = frames[frame];
      previewEl.textContent = previews[frame];
      noteEl.textContent = notes[frame];
      if (frame === frames.length - 1) {
        clearInterval(window.introEditDemoTimer);
      }
      frame++;
    }, 1000);
  };
  const replayBtn = document.getElementById('intro-edit-demo-replay');
  if (replayBtn) replayBtn.addEventListener('click', window.playIntroEditDemo);
  const editor = document.getElementById('code-editor');
  if (editor) { editor.readOnly = false; editor.style.opacity = '1'; }
  window.playIntroEditDemo();
})();
</script>`,
            initialCode: "<p>Change this text.</p>",
            progress: 65,
            validator: function (code) { return code.toLowerCase().includes("changed"); }
        };
