window.Lessons.lesson3.modules[11] = {
    title: "12. Favorite foods list 🍕",
    body: `<p>Time to show off what you learned! Make a list of your top 3 favorite foods.</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Create a complete bullet list (<code>&lt;ul&gt;</code>) with 3 foods. You can drag foods to help write the code!</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" style="display:none;"></svg>`,
    widgetCode: `<!-- INTERACTIVE MODULE -->
<style>
.m12-container { padding: 10px; background: #1e293b; color: white; border-radius: 8px; font-family: sans-serif; display: flex; gap: 10px; }
.m12-foods { flex: 1; display: flex; flex-direction: column; gap: 5px; }
.m12-item { background: #334155; padding: 6px; border-radius: 4px; cursor: pointer; text-align: center; }
.m12-item:hover { background: #3b82f6; }
.m12-preview { flex: 1; border-left: 2px solid #334155; padding-left: 10px; display: flex; flex-direction: column; gap: 5px; }
.m12-preview-title { font-size: 10px; color: #94a3b8; text-transform: uppercase; }
.m12-plate { min-height: 80px; border: 2px dashed #64748b; border-radius: 4px; padding: 5px; }
</style>
<div class="m12-container">
    <div class="m12-foods" id="m12-foods">
        <div class="m12-item" onclick="window.m12Pick('Pizza')">🍕 Pizza</div>
        <div class="m12-item" onclick="window.m12Pick('Fries')">🍟 Fries</div>
        <div class="m12-item" onclick="window.m12Pick('Tacos')">🌮 Tacos</div>
        <div class="m12-item" onclick="window.m12Pick('Sushi')">🍣 Sushi</div>
    </div>
    <div class="m12-preview">
        <div class="m12-preview-title">Plate Preview</div>
        <div class="m12-plate" id="m12-plate"></div>
    </div>
</div>
<script>
(function() {
    let plates = [];
    const plateDiv = document.getElementById('m12-plate');
    const editor = document.getElementById('code-editor');
    
    window.m12Pick = function(food) {
        if (plates.length < 3 && !plates.includes(food)) {
            plates.push(food);
            render();
            updateCode();
        }
    };
    
    function render() {
        plateDiv.innerHTML = '';
        plates.forEach(p => {
            let div = document.createElement('div');
            div.innerText = "• " + p;
            plateDiv.appendChild(div);
        });
    }
    
    function updateCode() {
        if (!editor) return;
        let c = "<ul>\\n";
        plates.forEach(p => c += "  <li>" + p + "</li>\\n");
        c += "</ul>";
        editor.value = c;
        editor.dispatchEvent(new Event('input', { bubbles: true }));
    }
})();
</script>`,
    initialCode: ``,
    progress: 60,
    validator: function (code) {
        return code.toLowerCase().includes("<ul>") && code.toLowerCase().includes("</ul>") && (code.match(/<li>/gi) || []).length >= 3;
    }
};