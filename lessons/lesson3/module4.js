window.Lessons.lesson3.modules[3] = {
    title: "4. Bullet points",
    body: `<p>Lists need two things: The list container (<code>&lt;ul&gt;</code>) and the list items (<code>&lt;li&gt;</code>).</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Turn the raw text into a proper unordered list with 3 list items.</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" id="m4-svg" style="background:#1e293b; border-radius:8px;">
        <g id="m4-lines">
            <rect x="30" y="40" width="120" height="10" rx="3" fill="#cbd5e1" />
            <rect x="30" y="70" width="100" height="10" rx="3" fill="#cbd5e1" />
            <rect x="30" y="100" width="130" height="10" rx="3" fill="#cbd5e1" />
        </g>
    </svg>`,
    widgetCode: `<!-- INTERACTIVE MODULE -->
<script>
(function() {
    const svg = document.getElementById('m4-svg');
    const lines = document.getElementById('m4-lines');
    
    function updateVisual(code) {
        if (!svg) return;
        const ulCount = (code.match(/<ul>/gi) || []).length;
        const liCount = (code.match(/<li>/gi) || []).length;
        
        let visualHtml = '';
        if (ulCount > 0) {
            visualHtml += '<rect x="20" y="20" width="200" height="110" rx="5" fill="#334155" />';
        }
        
        const bulletY = [40, 70, 100];
        const widths = [120, 100, 130];
        
        for (let i = 0; i < 3; i++) {
            if (i < liCount) {
                visualHtml += '<circle cx="35" cy="' + (bulletY[i] + 5) + '" r="4" fill="#10b981" />';
                visualHtml += '<rect x="50" y="' + bulletY[i] + '" width="' + widths[i] + '" height="10" rx="3" fill="#10b981" />';
            } else {
                visualHtml += '<rect x="30" y="' + bulletY[i] + '" width="' + widths[i] + '" height="10" rx="3" fill="#cbd5e1" />';
            }
        }
        
        if (ulCount > 0 && liCount >= 3) {
            visualHtml += '<text x="120" y="145" fill="#fcd34d" font-size="12" text-anchor="middle">Perfect List!</text>';
        }
        
        lines.innerHTML = visualHtml;
    }

    const editor = document.getElementById('code-editor');
    if (editor) { editor.readOnly = false; editor.style.opacity = '1';
        editor.addEventListener('input', (e) => updateVisual(e.target.value));
        updateVisual(editor.value);
    }
})();
</script>`,
    initialCode: `Pizza\nBurger\nSushi`,
    progress: 20,
    validator: function (code) {
        return code.toLowerCase().includes("<ul>") &&
            code.toLowerCase().includes("</ul>") &&
            (code.match(/<li>/gi) || []).length >= 3;
    }
};