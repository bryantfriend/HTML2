window.Lessons.lesson3.modules[6] = {
    title: "7. Numbered lists",
    body: `<p>Ordered lists are great for instructions, recipes, or top 10 lists where order matters.</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Write a full ordered list (<code>&lt;ol&gt;</code>) with 3 list items (<code>&lt;li&gt;</code>) in the correct order: Wake up, Brush teeth, Go to school.</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" id="m7-svg" style="background:#1e293b; border-radius:8px;">
        <g id="m7-content"></g>
    </svg>`,
    widgetCode: `<!-- INTERACTIVE MODULE -->
<style>
.m7-container { padding: 10px; background: #334155; border-radius: 8px; color: white; display: flex; flex-direction: column; gap: 8px; font-family: sans-serif; }
.m7-step { background: #475569; padding: 10px; border-radius: 4px; border-left: 4px solid #64748b; font-size: 14px; cursor: pointer; transition: all 0.2s; }
.m7-step.ordered { border-left-color: #10b981; background: #064e3b; }
</style>
<div class="m7-container" id="m7-ui">
    <div class="m7-step" data-idx="2">3. Go to school</div>
    <div class="m7-step" data-idx="0">1. Wake up</div>
    <div class="m7-step" data-idx="1">2. Brush teeth</div>
</div>
<script>
(function() {
    const editor = document.getElementById('code-editor');
    const container = document.getElementById('m7-ui');
    let steps = [
        { text: "Go to school", id: 2 },
        { text: "Wake up", id: 0 },
        { text: "Brush teeth", id: 1 }
    ];
    
    function render() {
        container.innerHTML = "";
        let inOrder = true;
        steps.forEach((step, i) => {
            if (step.id !== i) inOrder = false;
        });
        
        steps.forEach((step, i) => {
            let div = document.createElement('div');
            div.className = "m7-step" + (inOrder ? " ordered" : "");
            div.innerText = (step.id + 1) + ". " + step.text;
            div.onclick = () => {
                if (i > 0) {
                    let temp = steps[i];
                    steps[i] = steps[i-1];
                    steps[i-1] = temp;
                    render();
                }
            };
            container.appendChild(div);
        });
        
        if (editor) { editor.readOnly = false; editor.style.opacity = '1';
            if (inOrder) {
                let code = "<ol>\\n  <li>Wake up</li>\\n  <li>Brush teeth</li>\\n  <li>Go to school</li>\\n</ol>";
                if (editor.value !== code) {
                    editor.value = code;
                    editor.dispatchEvent(new Event('input', { bubbles: true }));
                }
            } else {
                editor.value = "<!-- Arrange the steps correctly to generate code or type it out -->";
            }
        }
    }
    
    render();
    
    if (editor) {
        editor.addEventListener('keyup', (e) => {
            const val = e.target.value.toLowerCase();
            if (val.includes("<ol>") && val.includes("wake up") && val.includes("brush") && val.includes("school")) {
                steps = [
                    { text: "Wake up", id: 0 },
                    { text: "Brush teeth", id: 1 },
                    { text: "Go to school", id: 2 }
                ];
                container.innerHTML = "";
                steps.forEach(step => {
                    let div = document.createElement('div');
                    div.className = "m7-step ordered";
                    div.innerText = (step.id + 1) + ". " + step.text;
                    container.appendChild(div);
                });
            }
        });
    }
})();
</script>`,
    initialCode: ``,
    progress: 35,
    validator: function (code) {
        return code.toLowerCase().includes("<ol>") && code.toLowerCase().includes("</ol>") && (code.match(/<li>/gi) || []).length >= 3;
    }
};