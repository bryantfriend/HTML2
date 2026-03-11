window.Lessons.lesson3.modules[13] = {
    title: "14. Daily routine list",
    body: `<p>We use <strong>Ordered Lists</strong> (<code>&lt;ol&gt;</code>) when the sequence of events matters, like a timeline!</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Create a numbered timeline of your daily routine (Morning, Afternoon, Night).</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" style="display:none;"></svg>`,
    widgetCode: `<!-- INTERACTIVE MODULE -->
<style>
.m14-container { background: #1e293b; color: white; padding: 15px; border-radius: 8px; font-family: sans-serif; display: flex; flex-direction: column; gap: 10px; }
.m14-timeline { display: flex; justify-content: space-between; position: relative; padding: 10px 0; }
.m14-line { position: absolute; top: 15px; left: 10px; right: 10px; height: 4px; background: #475569; z-index: 1; }
.m14-point { width: 14px; height: 14px; background: #94a3b8; border-radius: 50%; z-index: 2; position: relative; margin: 0 auto 5px; cursor: pointer; border: 2px solid #1e293b; transition: 0.2s; }
.m14-step { flex: 1; text-align: center; font-size: 11px; color: #cbd5e1; }
.m14-point:hover { transform: scale(1.5); background: #3b82f6; }
.m14-point.active { background: #fcd34d; border-color: #fde047; box-shadow: 0 0 10px #fcd34d; }
</style>
<div class="m14-container">
    <div style="font-size:12px; font-weight:bold; color:#f8fafc; text-align:center;">Click to add to timeline</div>
    <div class="m14-timeline">
        <div class="m14-line"></div>
        <div class="m14-step">
            <div class="m14-point" data-val="Morning"></div>
            ☀️<br>Morning
        </div>
        <div class="m14-step">
            <div class="m14-point" data-val="Afternoon"></div>
            🌤️<br>Afternoon
        </div>
        <div class="m14-step">
            <div class="m14-point" data-val="Night"></div>
            🌙<br>Night
        </div>
    </div>
</div>
<script>
(function() {
    let routine = [];
    const points = document.querySelectorAll('.m14-point');
    const editor = document.getElementById('code-editor');
    
    points.forEach(p => {
        p.addEventListener('click', () => {
            const val = p.dataset.val;
            if (routine.includes(val)) {
                routine = routine.filter(r => r !== val);
                p.classList.remove('active');
            } else if (routine.length < 3) {
                routine.push(val);
                p.classList.add('active');
            }
            
            if (editor) { editor.readOnly = false; editor.style.opacity = '1';
                let code = "<ol>\\n";
                routine.forEach(r => code += "  <li>" + r + "</li>\\n");
                code += "</ol>";
                editor.value = code;
                editor.dispatchEvent(new Event('input', { bubbles: true }));
            }
        });
    });
})();
</script>`,
    initialCode: ``,
    progress: 70,
    validator: function (code) {
        return code.toLowerCase().includes("<ol>") && code.toLowerCase().includes("</ol>") && (code.match(/<li>/gi) || []).length >= 3;
    }
};