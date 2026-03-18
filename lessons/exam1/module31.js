window.Lessons.exam1.modules[30] = {
    title: "31. Exam Reflection",
    body: `<p>You made it through Exam 1. Pick the emoji that best matches how the exam felt, then your score code will appear on the final screen.</p><p class="text-sm italic text-gray-400 mt-4">Mission: Choose one emoji to finish the exam.</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="24" y="24" width="192" height="102" rx="18" fill="#0f172a" stroke="#ff5fc4" stroke-width="2"/><text x="120" y="78" fill="#ff5fc4" font-size="20" text-anchor="middle" font-family="monospace">REFLECT</text><text x="120" y="104" fill="#e2e8f0" font-size="12" text-anchor="middle" font-family="sans-serif">Emoji + score code</text></svg>`,
    widgetCode: `<!-- INTERACTIVE MODULE -->
<style>
.exam1-emoji-shell { padding: 18px; border-radius: 18px; background: linear-gradient(180deg, #0f172a, #111827); border: 1px solid #1e3a5f; color: white; }
.exam1-scoreline { margin: 0 0 14px; color: #67e8f9; font-weight: 700; }
.exam1-emoji-grid { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 10px; }
.exam1-emoji-btn { font-size: 30px; padding: 10px; border-radius: 12px; border: none; background: #1e293b; cursor: pointer; transition: transform .15s ease, background .15s ease; }
.exam1-emoji-btn:hover { transform: scale(1.08); background: rgba(103, 232, 249, 0.14); }
</style>
<div class="exam1-emoji-shell">
  <p id="exam1-scoreline" class="exam1-scoreline">Current score: 0 / 30</p>
  <p class="mb-4">How did the exam feel?</p>
  <div class="exam1-emoji-grid">
    <button class="exam1-emoji-btn" onclick="window.exam1PickEmoji('🤯')">🤯</button>
    <button class="exam1-emoji-btn" onclick="window.exam1PickEmoji('😅')">😅</button>
    <button class="exam1-emoji-btn" onclick="window.exam1PickEmoji('😌')">😌</button>
    <button class="exam1-emoji-btn" onclick="window.exam1PickEmoji('😎')">😎</button>
    <button class="exam1-emoji-btn" onclick="window.exam1PickEmoji('🚀')">🚀</button>
  </div>
</div>
<script>
(function() {
  const editor = document.getElementById('code-editor');
  if (editor) {
    editor.readOnly = true;
    editor.style.opacity = '0.85';
  }
  const score = Object.values(window.exam1Answers || {}).filter(entry => entry && entry.correct).length;
  const scoreline = document.getElementById('exam1-scoreline');
  if (scoreline) {
    scoreline.textContent = 'Current score: ' + score + ' / 30';
  }
  window.exam1PickEmoji = function(emoji) {
    window.lessonEmoji = emoji;
    if (editor) {
      editor.value = '<!-- EXAM1_EMOJI:' + emoji + ' -->\\n<!-- EMOJI_SELECTED -->';
      editor.dispatchEvent(new Event('input', { bubbles: true }));
    }
  };
})();
</script>`,
    initialCode: `<!-- Choose an emoji to finish Exam 1 -->`,
    progress: 100,
    validator: function(code) { return /EMOJI_SELECTED/i.test(code); }
};