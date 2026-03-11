window.Lessons.lesson3.modules[0] = {
    title: "1. Why lists are useful",
    body: `<p>Lists help organize information beautifully. Instead of a messy pile, we can group things logically!</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Click at least 3 items to organize them into the "List Box".</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="60" y="30" width="120" height="10" fill="#00ff9d" rx="2"/><rect x="60" y="50" width="100" height="10" fill="#00ff9d" rx="2"/><rect x="60" y="70" width="140" height="10" fill="#00ff9d" rx="2"/></svg>`,
    widgetCode: `<!-- INTERACTIVE MODULE -->
<style>
.m1-container { display: flex; flex-direction: column; gap: 10px; padding: 10px; background: #1e293b; color: white; border-radius: 8px; font-family: sans-serif; }
.m1-scattered { display: flex; flex-wrap: wrap; gap: 8px; min-height: 50px; padding: 10px; background: #334155; border-radius: 8px; }
.m1-item { background: #475569; padding: 6px 12px; border-radius: 20px; cursor: pointer; user-select: none; transition: transform 0.2s; }
.m1-item:hover { transform: scale(1.1); background: #3b82f6; }
.m1-listbox { min-height: 100px; border: 2px dashed #64748b; border-radius: 8px; padding: 10px; display: flex; flex-direction: column; gap: 5px; }
.m1-listbox.active { border-color: #10b981; background: #064e3b; }
.m1-bullet { display: flex; align-items: center; gap: 8px; animation: slideIn 0.3s ease-out; cursor: pointer; }
.m1-bullet::before { content: "•"; color: #10b981; font-weight: bold; font-size: 1.2em; }
@keyframes slideIn { from { transform: translateX(-10px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
</style>
<div class="m1-container">
    <div class="text-xs text-gray-400 uppercase tracking-wider mb-1">Scattered Items (Click to move)</div>
    <div class="m1-scattered" id="m1-scattered">
        <div class="m1-item" data-val="Pizza">🍕 Pizza</div>
        <div class="m1-item" data-val="Video Games">🎮 Video Games</div>
        <div class="m1-item" data-val="Car">🚗 Car</div>
        <div class="m1-item" data-val="Burger">🍔 Burger</div>
        <div class="m1-item" data-val="Movies">🎬 Movies</div>
    </div>
    <div class="text-xs text-gray-400 uppercase tracking-wider mt-2 mb-1">List Box <span id="m1-count" class="text-green-400">0/3</span></div>
    <div class="m1-listbox" id="m1-listbox"></div>
</div>
<script>
(function() {
    const scattered = document.getElementById('m1-scattered');
    const listbox = document.getElementById('m1-listbox');
    const countSpan = document.getElementById('m1-count');
    const editor = document.getElementById('code-editor');
    let count = 0;
    
    if (editor) {
        editor.readOnly = true;
        editor.style.opacity = "0.8";
    }

    function updateCode() {
        if (!editor) return;
        const items = Array.from(listbox.children).map(c => c.dataset.val);
        if (items.length === 0) {
            editor.value = "<ul>\\n\\n</ul>";
        } else {
            let code = "<ul>\\n";
            items.forEach(item => code += "  <li>" + item + "</li>\\n");
            code += "</ul>";
            editor.value = code;
        }
        editor.dispatchEvent(new Event('input', { bubbles: true }));
    }

    scattered.addEventListener('click', (e) => {
        if (e.target.classList.contains('m1-item')) {
            const el = e.target;
            el.classList.remove('m1-item');
            el.classList.add('m1-bullet');
            listbox.appendChild(el);
            count++;
            countSpan.innerText = count >= 3 ? "Done! 🎉" : count + "/3";
            if (count >= 3) {
                listbox.classList.add('active');
            }
            updateCode();
        }
    });
    
    listbox.addEventListener('click', (e) => {
        if (e.target.classList.contains('m1-bullet')) {
            const el = e.target;
            el.classList.remove('m1-bullet');
            el.classList.add('m1-item');
            scattered.appendChild(el);
            count--;
            countSpan.innerText = count >= 3 ? "Done! 🎉" : count + "/3";
            if (count < 3) listbox.classList.remove('active');
            updateCode();
        }
    });
    updateCode();
})();
</script>`,
    initialCode: `<ul>\n\n</ul>`,
    progress: 5,
    validator: function (code) {
        return code.includes("<li>") && code.match(/<li>/g).length >= 3;
    }
};