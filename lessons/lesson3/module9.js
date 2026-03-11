window.Lessons.lesson3.modules[8] = {
    title: "9. Lists for steps",
    body: `<p>Numbered lists are perfect for step-by-step instructions. Let's write the steps to make a sandwich!</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Code an ordered list (<code>&lt;ol&gt;</code>) for the three steps. Or click the steps in the builder to generate the code.</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" id="m9-svg" style="background:#1e293b; border-radius:8px; display:none;"></svg>`,
    widgetCode: `<!-- INTERACTIVE MODULE -->
<style>
.m9-container { display: flex; gap: 10px; background: #334155; padding: 10px; border-radius: 8px; font-family: sans-serif; color: white; min-height: 120px; }
.m9-steps { flex: 1; display: flex; flex-direction: column; gap: 8px; }
.m9-step { background: #475569; padding: 8px; border-radius: 4px; cursor: pointer; text-align: center; font-size: 12px; border: 2px solid transparent; }
.m9-step:hover { border-color: #3b82f6; }
.m9-step.done { opacity: 0.5; cursor: default; }
.m9-sandwich { flex: 1; background: #1e293b; border-radius: 8px; display: flex; flex-direction: column-reverse; align-items: center; justify-content: flex-start; padding: 10px; gap: 2px; }
.m9-bread { width: 80px; height: 15px; background: #fcd34d; border-radius: 4px; border: 1px solid #b45309; }
.m9-meat { width: 70px; height: 10px; background: #ef4444; border-radius: 4px; }
.m9-cheese { width: 75px; height: 8px; background: #fde047; border-radius: 2px; }
</style>
<div class="m9-container">
    <div class="m9-steps" id="m9-steps">
        <div class="m9-step" id="s1" onclick="window.m9Add(1)">Get bread</div>
        <div class="m9-step" id="s2" onclick="window.m9Add(2)">Add filling</div>
        <div class="m9-step" id="s3" onclick="window.m9Add(3)">Close sandwich</div>
    </div>
    <div class="m9-sandwich" id="m9-sandwich">
        <div style="opacity:0.3; font-size:10px; color:#64748b; margin-top: auto;">Plate</div>
        <div style="width:100px; height:4px; background:#64748b; border-radius:100%;"></div>
    </div>
</div>
<script>
(function() {
    let stepCount = 0;
    const sandwich = document.getElementById('m9-sandwich');
    const editor = document.getElementById('code-editor');
    let codeStr = "<ol>\\n";
    
    window.m9Add = function(step) {
        if (stepCount !== step - 1) return; // must be in order
        const btn = document.getElementById('s' + step);
        btn.classList.add('done');
        
        let ingredient = "";
        if (step === 1) ingredient = '<div class="m9-bread hide-new"></div>';
        if (step === 2) ingredient = '<div class="m9-meat hide-new"></div><div class="m9-cheese hide-new"></div>';
        if (step === 3) ingredient = '<div class="m9-bread hide-new"></div>';
        
        sandwich.insertAdjacentHTML('afterbegin', ingredient);
        
        codeStr += "  <li>" + btn.innerText + "</li>\\n";
        stepCount++;
        
        if (step === 3) codeStr += "</ol>";
        
        if (editor) { editor.readOnly = false; editor.style.opacity = '1';
            editor.value = step === 3 ? codeStr : codeStr + "</ol>";
            editor.dispatchEvent(new Event('input', { bubbles: true }));
        }
    };
    
    if (editor) {
        editor.addEventListener('keyup', (e) => {
            const val = e.target.value.toLowerCase();
            if (val.includes("<ol>") && val.match(/<li>/g) && val.match(/<li>/g).length >= 3) {
                sandwich.innerHTML = '<div class="m9-bread"></div><div class="m9-meat"></div><div class="m9-cheese"></div><div class="m9-bread"></div><div style="width:100px; height:4px; background:#64748b; border-radius:100%; margin-top:5px;"></div>';
            }
        });
    }
})();
</script>`,
    initialCode: ``,
    progress: 45,
    validator: function (code) {
        return code.toLowerCase().includes("<ol>") && code.toLowerCase().includes("</ol>") && (code.match(/<li>/gi) || []).length >= 3;
    }
};