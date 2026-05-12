window.Lessons.intro.modules[11] = {
            title: "12. Example tag: <p>",
            body: `<p>The <code>&lt;p&gt;</code> tag creates a paragraph of text. Everything between <code>&lt;p&gt;</code> and <code>&lt;/p&gt;</code> is part of that paragraph.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Watch the quick demo, then write a &lt;p&gt;Hello&lt;/p&gt; element.</p>`,
            svg: ``,
            widgetCode: `<!-- INTERACTIVE MODULE -->
<style>
.intro-p-shell { padding: 14px; border-radius: 16px; background: linear-gradient(180deg, #10203a, #0f172a); border: 1px solid #1e3a5f; color: #dbeafe; }
.intro-p-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; gap: 10px; }
.intro-p-kicker { font-size: 11px; letter-spacing: 0.22em; text-transform: uppercase; color: #67e8f9; }
.intro-p-replay { border: none; border-radius: 999px; padding: 7px 12px; background: #67e8f9; color: #082f49; font-weight: 700; cursor: pointer; }
.intro-p-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
.intro-p-panel { min-height: 120px; border-radius: 14px; background: rgba(15, 23, 42, 0.95); border: 1px solid rgba(103, 232, 249, 0.16); padding: 14px; }
.intro-p-label { font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; color: #93c5fd; margin-bottom: 8px; }
.intro-p-code { font: 700 16px/1.6 monospace; white-space: pre-wrap; color: white; }
.intro-p-preview { display: flex; align-items: center; justify-content: center; color: white; font: 700 18px/1.4 sans-serif; }
.intro-p-note { margin-top: 10px; color: #cbd5e1; font-size: 13px; }
</style>
<div class="intro-p-shell">
  <div class="intro-p-top">
    <div>
      <div class="intro-p-kicker">Quick Demo</div>
      <div style="font-size:13px;">Paragraph tags wrap readable text.</div>
    </div>
    <button type="button" class="intro-p-replay" id="intro-paragraph-demo-replay">Replay</button>
  </div>
  <div class="intro-p-grid">
    <div class="intro-p-panel">
      <div class="intro-p-label">Code</div>
      <div id="intro-p-code" class="intro-p-code"></div>
    </div>
    <div class="intro-p-panel intro-p-preview">
      <div id="intro-p-preview">Paragraph preview waiting...</div>
    </div>
  </div>
  <div id="intro-p-note" class="intro-p-note">Demo loading...</div>
</div>
<script>
(function() {
  window.playIntroParagraphDemo = function() {
    const codeEl = document.getElementById('intro-p-code');
    const previewEl = document.getElementById('intro-p-preview');
    const noteEl = document.getElementById('intro-p-note');
    if (!codeEl || !previewEl || !noteEl) return;
    const frames = ['', '<p>Hello', '<p>Hello</p>'];
    const previews = ['Waiting for text...', 'Hello', 'Hello'];
    const notes = [
      'Start the paragraph tag.',
      'Add the text you want inside it.',
      'Close the paragraph tag to finish the element.'
    ];
    let frame = 0;
    clearInterval(window.introParagraphDemoTimer);
    window.introParagraphDemoTimer = setInterval(function() {
      codeEl.textContent = frames[frame];
      previewEl.textContent = previews[frame];
      noteEl.textContent = notes[frame];
      if (frame === frames.length - 1) {
        clearInterval(window.introParagraphDemoTimer);
      }
      frame++;
    }, 850);
  };
  const replayBtn = document.getElementById('intro-paragraph-demo-replay');
  if (replayBtn) replayBtn.addEventListener('click', window.playIntroParagraphDemo);
  const editor = document.getElementById('code-editor');
  if (editor) { editor.readOnly = false; editor.style.opacity = '1'; }
  window.playIntroParagraphDemo();
})();
</script>`,
            initialCode: "",
            progress: 60,
            validator: function (code) { return code.toLowerCase().includes("<p>") && code.toLowerCase().includes("</p>"); }
        };
