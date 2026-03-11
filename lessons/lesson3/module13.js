window.Lessons.lesson3.modules[12] = {
    title: "13. Favorite games list 🎮",
    body: `<p>Awesome! Let's do another one. What are your favorite games?</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Create an unordered list (<code>&lt;ul&gt;</code>) of your top 3 favorite games.</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" style="display:none;"></svg>`,
    widgetCode: `<!-- INTERACTIVE MODULE -->
<style>
.m13-container { padding: 10px; background: #334155; color: white; border-radius: 8px; font-family: sans-serif; display: flex; gap: 10px; }
.m13-games { flex: 1; display: flex; flex-direction: column; gap: 8px; }
.m13-item { background: #1e293b; padding: 10px; border-radius: 4px; cursor: pointer; text-align: center; font-size: 14px; border: 2px solid #475569; transition: all 0.2s; }
.m13-item:hover { transform: scale(1.05); border-color: #3b82f6; }
.m13-picked { background: #064e3b; border-color: #10b981; }
</style>
<div class="m13-container">
    <div class="m13-games" id="m13-games">
        <div class="m13-item" data-game="Minecraft">⛏️ Minecraft</div>
        <div class="m13-item" data-game="Roblox">🧱 Roblox</div>
        <div class="m13-item" data-game="Fortnite">🪂 Fortnite</div>
    </div>
</div>
<script>
(function() {
    let picked = [];
    const games = document.querySelectorAll('.m13-item');
    const editor = document.getElementById('code-editor');
    
    games.forEach(g => {
        g.addEventListener('click', () => {
            const game = g.dataset.game;
            if (picked.includes(game)) {
                picked = picked.filter(p => p !== game);
                g.classList.remove('m13-picked');
            } else if (picked.length < 3) {
                picked.push(game);
                g.classList.add('m13-picked');
            }
            
            if (editor) { editor.readOnly = false; editor.style.opacity = '1';
                let code = "<ul>\\n";
                picked.forEach(p => code += "  <li>" + p + "</li>\\n");
                code += "</ul>";
                editor.value = code;
                editor.dispatchEvent(new Event('input', { bubbles: true }));
            }
        });
    });
})();
</script>`,
    initialCode: ``,
    progress: 65,
    validator: function (code) {
        return code.toLowerCase().includes("<ul>") && code.toLowerCase().includes("</ul>") && (code.match(/<li>/gi) || []).length >= 3;
    }
};