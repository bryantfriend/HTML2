window.Lessons.lesson3.modules[20] = {
    title: "Bonus. How did you feel about this lesson?",
    body: "<p>We want to make sure these lessons are actually helpful!</p><p class='text-sm italic text-gray-400 mt-4'>Mission: Click the emoji that best represents how you feel right now.</p>",
    svg: `<svg width='240' height='150' viewBox='0 0 240 150' xmlns='http://www.w3.org/2000/svg' id="m21-svg" style="background:#1e293b; border-radius:8px;">
        <rect x="0" y="0" width="240" height="150" fill="none" />
        <text x="120" y="55" fill="#94a3b8" font-family="sans-serif" font-size="14" text-anchor="middle">You Selected:</text>
        <text id="m21-selected-emoji" x="120" y="110" fill="white" font-size="50" text-anchor="middle">🤔</text>
    </svg>`,
    widgetCode: `<!-- INTERACTIVE MODULE -->
<style>
.emoji-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 10px; padding: 20px; background: #0f172a; border-radius: 12px; }
.emoji-btn { background: #1e293b; border: 2px solid #334155; border-radius: 8px; font-size: 32px; padding: 10px; cursor: pointer; transition: 0.2s; border: none; }
.emoji-btn:hover { transform: scale(1.1); background: rgba(0,255,157,0.1); }
.emoji-btn:active { transform: scale(0.9); }
</style>
<div class='emoji-grid'>
  <button class='emoji-btn' data-emoji='🤯' type='button'>🤯</button>
  <button class='emoji-btn' data-emoji='🥱' type='button'>🥱</button>
  <button class='emoji-btn' data-emoji='😡' type='button'>😡</button>
  <button class='emoji-btn' data-emoji='😭' type='button'>😭</button>
  <button class='emoji-btn' data-emoji='🥵' type='button'>🥵</button>
  <button class='emoji-btn' data-emoji='🤩' type='button'>🤩</button>
  <button class='emoji-btn' data-emoji='😎' type='button'>😎</button>
  <button class='emoji-btn' data-emoji='🤓' type='button'>🤓</button>
  <button class='emoji-btn' data-emoji='🚀' type='button'>🚀</button>
  <button class='emoji-btn' data-emoji='🧠' type='button'>🧠</button>
</div>
<script>
(function() {
    const editor = document.getElementById('code-editor');
    if (editor) {
        editor.readOnly = true;
        editor.style.opacity = '0.7';
    }

    const emojiDisplay = document.getElementById('m21-selected-emoji');

    window.selectEmoji = function(emoji) {
        if (emojiDisplay) {
            emojiDisplay.textContent = emoji;
        }
        
        if (editor) {
            if (!editor.value.includes('EMOJI_SELECTED')) {
                editor.value = "<!-- You selected: " + emoji + " -->\\n<!-- EMOJI_SELECTED -->";
                editor.dispatchEvent(new Event('input', { bubbles: true }));
            } else {
                editor.value = "<!-- You selected: " + emoji + " -->\\n<!-- EMOJI_SELECTED -->";
            }
        }
    };

    document.querySelectorAll('.emoji-btn[data-emoji]').forEach(function(button) {
        button.addEventListener('click', function() {
            window.selectEmoji(button.dataset.emoji);
        });
    });
})();
</script>`,
    initialCode: `<!-- Click an emoji that represents your feeling! -->`,
    progress: 100,
    validator: function (code) { return code.includes("EMOJI_SELECTED"); }
};
