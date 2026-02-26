window.Lessons.intro.modules[19] = {
            title: "20. Final Challenge: How did you feel?",
            body: `<p>You've completed the introductory overview of Web Design and HTML.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Select the emoji below that best represents how this lesson made you feel, then click FINISH!</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="120" y="80" fill="#00f2ff" font-family="monospace" font-size="18" text-anchor="middle">HELLO WORLD</text></svg>`,
            initialCode: `<!-- INTERACTIVE MODULE -->
<style>
.emoji-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 15px; margin-top: 10px; padding: 25px; background: #1e293b; border-radius: 12px; height: 300px; place-items: center; align-content: center; transition: 0.3s; }
.emoji-btn { font-size: 35px; background: #0f172a; border: 2px solid #334155; border-radius: 12px; cursor: pointer; transition: 0.2s; width: 60px; height: 60px; display:flex; justify-content:center; align-items:center; user-select: none; }
.emoji-btn:hover { transform: scale(1.15); border-color: #00f2ff; background: rgba(0,242,255,0.1); }
.emoji-btn.selected { background: #00ff9d; border-color: white; transform: scale(1.15); box-shadow: 0 0 20px #00ff9d; pointer-events: none; }
</style>
<div style="text-align:center;">
    <div class="emoji-grid" id="egrid">
        <div class="emoji-btn" onclick="window.selEmo(this, '😀')">😀</div>
        <div class="emoji-btn" onclick="window.selEmo(this, '😎')">😎</div>
        <div class="emoji-btn" onclick="window.selEmo(this, '🚀')">🚀</div>
        <div class="emoji-btn" onclick="window.selEmo(this, '🤯')">🤯</div>
        <div class="emoji-btn" onclick="window.selEmo(this, '🤔')">🤔</div>
        <div class="emoji-btn" onclick="window.selEmo(this, '😴')">😴</div>
        <div class="emoji-btn" onclick="window.selEmo(this, '💪')">💪</div>
        <div class="emoji-btn" onclick="window.selEmo(this, '🎉')">🎉</div>
        <div class="emoji-btn" onclick="window.selEmo(this, '🧠')">🧠</div>
        <div class="emoji-btn" onclick="window.selEmo(this, '💻')">💻</div>
    </div>
</div>
<script>
window.selEmo = function(btn, emoji) {
    document.querySelectorAll('.emoji-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    window.lessonEmoji = emoji; // Save globally so completion screen can read it
    document.getElementById('egrid').style.boxShadow = '0 0 20px rgba(0,255,157,0.3)';
    const editor = document.getElementById('code-editor');
    if(!editor.value.includes('EMOJI_S' + 'ELECTED')) {
        editor.value += '\\n<!-- ' + 'EMOJI_S' + 'ELECTED' + ' -->';
        editor.dispatchEvent(new Event('input', { bubbles: true }));
    }
}
</script>`,
            progress: 100,
            validator: function (code) { return code.includes("EMOJI_SELECTED"); }
        };