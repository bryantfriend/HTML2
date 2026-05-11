window.Lessons.exam2.modules[19] = {
    title: "20. Finish and Reflect",
    body: "<section class=\"quest-body\"><p class=\"quest-kicker\">Final Mission</p><h3 class=\"quest-title\">You made it to the end.</h3><p class=\"quest-summary\">Pick the emoji that matches how this HTML final felt. Finishing every mission gives full marks.</p><div class=\"quest-memory\"><strong>Remember:</strong> This exam is designed to teach while students finish it, so completing all missions means a perfect score.</div><p class=\"quest-mission\">Mission: Tap one emoji to finish the exam.</p></section>",
    svg: ``,
    widgetCode: `<!-- INTERACTIVE MODULE -->
<style>
.exam2-emoji-wrap{display:grid;gap:14px;padding:18px;border-radius:24px;background:linear-gradient(180deg,rgba(15,23,42,.96),rgba(11,18,32,.94));border:1px solid rgba(148,163,184,.14);box-shadow:0 16px 40px rgba(2,6,23,.24)}
.exam2-emoji-grid{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:10px}
.exam2-emoji-btn{border:none;border-radius:18px;padding:14px;background:rgba(15,23,42,.74);color:white;font-size:32px;cursor:pointer;transition:transform .15s ease, background .15s ease, box-shadow .15s ease}
.exam2-emoji-btn:hover{transform:translateY(-2px) scale(1.03);background:rgba(8,47,73,.82);box-shadow:0 0 18px rgba(103,232,249,.16)}
.exam2-emoji-status{margin:0;padding:10px 12px;border-radius:14px;background:rgba(15,23,42,.66);border:1px solid rgba(148,163,184,.12);color:#bae6fd;font-size:13px;line-height:1.5;text-align:center}
@media(max-width:720px){.exam2-emoji-grid{grid-template-columns:repeat(3,minmax(0,1fr))}}
</style>
<div class="exam2-emoji-wrap">
  <div class="exam2-emoji-grid">
    <button type="button" class="exam2-emoji-btn" data-emoji="🤩">🤩</button>
    <button type="button" class="exam2-emoji-btn" data-emoji="😎">😎</button>
    <button type="button" class="exam2-emoji-btn" data-emoji="🧠">🧠</button>
    <button type="button" class="exam2-emoji-btn" data-emoji="🚀">🚀</button>
    <button type="button" class="exam2-emoji-btn" data-emoji="🔥">🔥</button>
  </div>
  <p class="exam2-emoji-status">Pick one emoji to finish your HTML victory mission.</p>
</div>
<script>
(function() {
  const editor = document.getElementById('code-editor');
  const buttons = Array.from(document.querySelectorAll('.exam2-emoji-btn'));
  const status = document.querySelector('.exam2-emoji-status');
  if (editor) {
    editor.readOnly = true;
    editor.style.opacity = '0.7';
  }
  buttons.forEach(function(button) {
    button.addEventListener('click', function() {
      const emoji = button.dataset.emoji;
      window.lessonEmoji = emoji;
      buttons.forEach(function(other) { other.style.background = 'rgba(15,23,42,.74)'; });
      button.style.background = 'rgba(20,83,45,.6)';
      if (status) status.textContent = 'Perfect. Full marks unlocked.';
      if (editor) {
        editor.value = '<!-- EXAM2_FULL_MARKS -->\n<!-- EMOJI_SELECTED -->';
        editor.dispatchEvent(new Event('input', { bubbles: true }));
      }
    });
  });
})();
</script>`,
    initialCode: `<!-- Pick an emoji to finish your HTML final -->`,
    previewScaffold: `<style>\n#preview-area { margin:0; padding:18px; background:linear-gradient(180deg,#eff6ff,#f8fafc); color:#0f172a; font-family:Arial,sans-serif; line-height:1.55; }\n#preview-area body { margin:0; font-family:Arial,sans-serif; background:white; color:#0f172a; padding:18px; border-radius:18px; box-shadow:inset 0 0 0 1px rgba(148,163,184,0.22); }\n#preview-area h1, #preview-area h2 { margin:0 0 12px; color:#0f172a; }\n#preview-area p { margin:0 0 12px; }\n#preview-area strong, #preview-area b { color:#0b57d0; }\n#preview-area em, #preview-area i { color:#c026d3; }\n#preview-area ul, #preview-area ol { padding-left:24px; margin:0 0 12px; }\n#preview-area li { margin-bottom:6px; }\n#preview-area img { display:block; max-width:180px; border-radius:16px; border:3px solid #bae6fd; background:#e0f2fe; padding:6px; margin:10px 0; }\n#preview-area form, #preview-area header, #preview-area nav, #preview-area main, #preview-area article, #preview-area footer { display:block; padding:14px; border-radius:16px; margin-bottom:12px; }\n#preview-area form { border:2px dashed #38bdf8; background:#f0f9ff; }\n#preview-area label { display:block; font-weight:700; margin-bottom:6px; }\n#preview-area input, #preview-area button { padding:10px 12px; border-radius:12px; border:1px solid #94a3b8; font:600 14px/1.2 Arial,sans-serif; }\n#preview-area button { background:#38bdf8; color:#082f49; border-color:#0ea5e9; }\n#preview-area header { background:#dbeafe; }\n#preview-area nav { background:#fef3c7; }\n#preview-area main { background:#dcfce7; }\n#preview-area article { background:#ede9fe; }\n#preview-area footer { background:#fee2e2; }\n</style>`,
    progress: 100,
    validator: function(code) { return /EXAM2_FULL_MARKS/i.test(code) && /EMOJI_SELECTED/i.test(code); }
  };