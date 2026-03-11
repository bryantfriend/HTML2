window.Lessons.lesson3.modules[4] = {
    title: "5. List items <li>",
    body: `<p>The <code>&lt;li&gt;</code> tag stands for <strong>List Item</strong>. Every item inside a list must be wrapped in its own <code>&lt;li&gt;</code> and <code>&lt;/li&gt;</code> tags.</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Add <code>&lt;li&gt;</code> around each word, or click the foods to move them into the list slots.</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" style="display:none;"></svg>`,
    widgetCode: `<!-- INTERACTIVE MODULE -->
<style>
.m5-container { padding: 10px; background: #1e293b; color: white; border-radius: 8px; font-family: sans-serif; display: flex; gap: 10px; }
.m5-foods { flex: 1; display: flex; flex-direction: column; gap: 8px; }
.m5-slots { flex: 1; display: flex; flex-direction: column; gap: 8px; border-left: 2px solid #334155; padding-left: 10px; }
.m5-item { background: #475569; padding: 8px; border-radius: 4px; cursor: pointer; text-align: center; }
.m5-item:hover { background: #3b82f6; }
.m5-slot { background: #0f172a; border: 2px dashed #64748b; border-radius: 4px; padding: 8px; text-align: center; color: #64748b; font-size: 12px; }
.m5-slot.filled { background: #064e3b; border-style: solid; border-color: #10b981; color: white; cursor: pointer; font-size: 14px; }
</style>
<div class="m5-container">
    <div class="m5-foods" id="m5-foods"></div>
    <div class="m5-slots" id="m5-slots"></div>
</div>
<script>
(function() {
    const foodsCont = document.getElementById('m5-foods');
    const slotsCont = document.getElementById('m5-slots');
    const editor = document.getElementById('code-editor');
    
    let items = ["Pizza", "Burger", "Sushi"];
    let slots = [null, null, null];
    
    function render() {
        foodsCont.innerHTML = "";
        items.forEach((item, i) => {
            let div = document.createElement('div');
            div.className = "m5-item";
            div.innerText = item;
            div.onclick = () => moveToSlot(i);
            foodsCont.appendChild(div);
        });
        
        slotsCont.innerHTML = "";
        slots.forEach((slot, i) => {
            let div = document.createElement('div');
            if (slot) {
                div.className = "m5-slot filled";
                div.innerText = "<li>" + slot + "</li>";
                div.onclick = () => moveBack(i);
            } else {
                div.className = "m5-slot";
                div.innerText = "Click food to fill";
            }
            slotsCont.appendChild(div);
        });
        
        if (editor) { editor.readOnly = false; editor.style.opacity = '1';
            let rawLines = ["Pizza", "Burger", "Sushi"];
            let code = "<ul>\\n";
            rawLines.forEach((line) => {
                if (slots.includes(line)) {
                    code += "  <li>" + line + "</li>\\n";
                } else {
                    code += "  " + line + "\\n";
                }
            });
            code += "</ul>";
            if (editor.value !== code) {
                editor.value = code;
                editor.dispatchEvent(new Event('input', { bubbles: true }));
            }
        }
    }
    
    function moveToSlot(foodIdx) {
        let emptySlotIdx = slots.indexOf(null);
        if (emptySlotIdx !== -1) {
            slots[emptySlotIdx] = items[foodIdx];
            items.splice(foodIdx, 1);
            render();
        }
    }
    
    function moveBack(slotIdx) {
        items.push(slots[slotIdx]);
        slots[slotIdx] = null;
        render();
    }
    
    if (editor) {
        editor.addEventListener('keyup', (e) => {
            let code = e.target.value;
            slots = [null, null, null];
            items = ["Pizza", "Burger", "Sushi"];
            let m = code.match(/<li>(.*?)<\\/li>/gi);
            if (m) {
                m.forEach((str, i) => {
                    if (i < 3) {
                         let val = str.replace(/<\\/?li>/gi, '').trim();
                         slots[i] = val;
                         let idx = items.indexOf(val);
                         if (idx !== -1) items.splice(idx, 1);
                    }
                });
            }
            foodsCont.innerHTML = "";
            items.forEach((item, i) => {
                let div = document.createElement('div');
                div.className = "m5-item";
                div.innerText = item;
                foodsCont.appendChild(div);
            });
            slotsCont.innerHTML = "";
            slots.forEach((slot, i) => {
                let div = document.createElement('div');
                if (slot) {
                    div.className = "m5-slot filled";
                    div.innerText = "<li>" + slot + "</li>";
                } else {
                    div.className = "m5-slot";
                    div.innerText = "Missing <li>";
                }
                slotsCont.appendChild(div);
            });
        });
    }
    
    render();
})();
</script>`,
    initialCode: `<ul>\n  Pizza\n  Burger\n  Sushi\n</ul>`,
    progress: 25,
    validator: function (code) {
        return (code.match(/<li>/gi) || []).length >= 3 && code.includes("<ul>") && code.includes("</ul>");
    }
};