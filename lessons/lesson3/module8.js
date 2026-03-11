window.Lessons.lesson3.modules[7] = {
    title: "8. Nested lists",
    body: `<p>You can put a list <em>inside</em> another list! This is called a <strong>Nested List</strong>.</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Add an unordered list of fruits (Apple, Banana) inside the "Food" list item.</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" id="m8-svg" style="background:#1e293b; border-radius:8px;"></svg>`,
    widgetCode: `<!-- INTERACTIVE MODULE -->
<style>
.m8-container { padding: 10px; display: flex; gap: 10px; font-family: sans-serif; }
.m8-pool { display: flex; flex-direction: column; gap: 5px; background: #334155; padding: 10px; border-radius: 8px; flex: 1; }
.m8-tree { flex: 1; background: #1e293b; border-radius: 8px; padding: 10px; color: white; border: 2px solid #475569; }
.m8-item { background: #475569; color: white; padding: 5px 10px; border-radius: 4px; cursor: pointer; text-align: center; font-size: 12px; }
.m8-item:hover { background: #3b82f6; }
.m8-slot { margin-left: 20px; border-left: 2px dashed #64748b; padding-left: 10px; min-height: 40px; display: flex; flex-direction: column; gap: 5px; }
</style>
<div class="m8-container">
    <div class="m8-pool" id="m8-pool">
        <div class="m8-item" onclick="window.m8Move('Apple')">🍎 Apple</div>
        <div class="m8-item" onclick="window.m8Move('Banana')">🍌 Banana</div>
    </div>
    <div class="m8-tree" id="m8-tree">
        <div>• Food</div>
        <div class="m8-slot" id="m8-slot"></div>
        <div>• Games</div>
    </div>
</div>
<script>
(function() {
    let inserted = [];
    const pool = document.getElementById('m8-pool');
    const slot = document.getElementById('m8-slot');
    const editor = document.getElementById('code-editor');
    
    window.m8Move = function(fruit) {
        if (!inserted.includes(fruit)) {
            inserted.push(fruit);
            // remove from pool
            Array.from(pool.children).forEach(c => {
                if (c.innerText.includes(fruit)) c.style.display = 'none';
            });
            // add to slot
            let div = document.createElement('div');
            div.innerText = "○ " + fruit;
            div.style.color = "#a7f3d0";
            div.style.fontSize = "12px";
            slot.appendChild(div);
            
            updateCode();
        }
    };
    
    function updateCode() {
        if (!editor) return;
        let c = "<ul>\\n  <li>Food\\n";
        if (inserted.length > 0) {
            c += "    <ul>\\n";
            inserted.forEach(f => c += "      <li>" + f + "</li>\\n");
            c += "    </ul>\\n";
        }
        c += "  </li>\\n  <li>Games</li>\\n</ul>";
        editor.value = c;
        editor.dispatchEvent(new Event('input', { bubbles: true }));
    }
    
    if (editor) { editor.readOnly = false; editor.style.opacity = '1';
        editor.addEventListener('keyup', (e) => {
            const val = e.target.value;
            if (val.includes("<ul>") && val.match(/<ul>/g).length > 1 && val.includes("Apple")) {
                slot.innerHTML = '<div style="color:#a7f3d0;font-size:12px;">○ Apple</div><div style="color:#a7f3d0;font-size:12px;">○ Banana</div>';
                pool.innerHTML = '';
            }
        });
    }
})();
</script>`,
    initialCode: `<ul>\n  <li>Food</li>\n  <li>Games</li>\n</ul>`,
    progress: 40,
    validator: function (code) {
        return (code.match(/<ul>/gi) || []).length >= 2 && code.includes("Apple");
    }
};