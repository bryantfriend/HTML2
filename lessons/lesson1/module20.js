window.Lessons.lesson1.modules[19] = {
    title: "20. Final Challenge: How did you feel?",
    body: `<p>You've completed the introductory overview of Web Design and HTML.</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Select the emoji below that best represents how this lesson made you feel, then click FINISH!</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="120" y="80" fill="#00f2ff" font-family="monospace" font-size="18" text-anchor="middle">MISSION COMPLETE</text></svg>`,
    widgetCode: `<!-- INTERACTIVE MODULE -->
<style>
.emoji-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 10px; margin-top: 10px; padding: 20px; background: #1e293b; border-radius: 12px;}
.emoji-btn { font-size: 30px; background: #0f172a; border: 2px solid #334155; border-radius: 8px; cursor: pointer; transition: 0.2s; height: 50px; display:flex; justify-content:center; align-items:center; }
.emoji-btn:hover { border-color: #00f2ff; transform: scale(1.1); }
.emoji-btn.selected { background: #00ff9d; border-color: white; transform: scale(1.1); box-shadow: 0 0 15px #00ff9d; }
</style>
<script>
(function() {
    window.setEmo = function(btn, emoji) {
        document.querySelectorAll('.emoji-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        window.parent.window.lessonEmoji = emoji;
        window.completeModule('EMOJI_SELECTED');
    };
})();
</script>
<div class="emoji-grid">
    <div class="emoji-btn" onclick="window.setEmo(this, '😀')">😀</div>
    <div class="emoji-btn" onclick="window.setEmo(this, '😎')">😎</div>
    <div class="emoji-btn" onclick="window.setEmo(this, '🚀')">🚀</div>
    <div class="emoji-btn" onclick="window.setEmo(this, '🤯')">🤯</div>
    <div class="emoji-btn" onclick="window.setEmo(this, '🎉')">🎉</div>
</div>`,
    initialCode: ``,
    progress: 100,
    validator: function (code) { return code.includes("EMOJI_SELECTED"); }
};