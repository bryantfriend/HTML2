window.Lessons.lesson3.modules[1] = {
    title: "2. List types overview",
    body: `<p>There are two main types of lists in HTML:</p>
    <ul class="list-disc ml-5 mb-4 text-gray-300">
        <li><strong>Unordered</strong> lists use bullet points.</li>
        <li><strong>Ordered</strong> lists use numbers.</li>
    </ul>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Click on both panels to see their code, then select the unordered list to proceed.</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="120" y="60" fill="white" font-size="20" text-anchor="middle">1. Ordered</text><text x="120" y="90" fill="white" font-size="20" text-anchor="middle">• Unordered</text></svg>`,
    widgetCode: `<!-- INTERACTIVE MODULE -->
<style>
.m2-container { display: flex; gap: 10px; height: 160px; }
.m2-panel { flex: 1; background: #1e293b; border: 2px solid #334155; border-radius: 8px; padding: 15px; cursor: pointer; transition: all 0.2s; display: flex; flex-direction: column; justify-content: center; }
.m2-panel:hover { border-color: #3b82f6; background: #2dd4bf22; }
.m2-panel.selected { border-color: #10b981; background: #064e3b; box-shadow: 0 0 15px #10b98155; }
.m2-title { text-align: center; color: #cbd5e1; font-weight: bold; margin-bottom: 10px; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; }
.m2-list { font-family: sans-serif; color: #f8fafc; font-size: 14px; line-height: 1.6; }
</style>
<div class="m2-container">
    <div class="m2-panel" id="m2-panel-a">
        <div class="m2-title">Panel A</div>
        <div class="m2-list">
            1. Wake up<br>
            2. Brush teeth<br>
            3. Go to school
        </div>
    </div>
    <div class="m2-panel" id="m2-panel-b">
        <div class="m2-title">Panel B</div>
        <div class="m2-list" style="margin-left: 10px;">
            • Pizza<br>
            • Sushi<br>
            • Burger
        </div>
    </div>
</div>
<script>
(function() {
    const panelA = document.getElementById('m2-panel-a');
    const panelB = document.getElementById('m2-panel-b');
    const editor = document.getElementById('code-editor');
    
    if (editor) {
        editor.readOnly = true;
        editor.style.opacity = "0.8";
    }

    panelA.addEventListener('click', () => {
        panelA.classList.add('selected');
        panelB.classList.remove('selected');
        if (editor) {
            editor.value = "<ol>\\n  <li>Wake up</li>\\n  <li>Brush teeth</li>\\n  <li>Go to school</li>\\n</ol>";
            editor.dispatchEvent(new Event('input', { bubbles: true }));
        }
    });

    panelB.addEventListener('click', () => {
        panelB.classList.add('selected');
        panelA.classList.remove('selected');
        if (editor) {
            editor.value = "<ul>\\n  <li>Pizza</li>\\n  <li>Sushi</li>\\n  <li>Burger</li>\\n</ul>\\n<!-- WIN_CONDITION -->";
            editor.dispatchEvent(new Event('input', { bubbles: true }));
        }
    });
})();
</script>`,
    initialCode: `<!-- Click a panel to see its HTML code here! -->`,
    progress: 10,
    validator: function (code) { return code.includes("WIN_CONDITION"); }
};