window.Lessons.lesson3.modules[14] = {
    title: "15. Mixing lists + headings",
    body: `<p>A list alone is okay, but giving it a <strong>Heading</strong> makes your page structure much better!</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Add an <code>&lt;h2&gt;</code> heading with the text "My Favorite Foods" right above the list.</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" id="m15-svg" style="background:#1e293b; border-radius:8px;">
        <rect id="m15-header" x="20" y="30" width="160" height="20" rx="3" fill="#334155" />
        <text id="m15-text" x="25" y="45" fill="#94a3b8" font-family="sans-serif" font-size="12" font-weight="bold">Missing &lt;h2&gt; Heading...</text>
        <circle cx="30" cy="70" r="4" fill="#cbd5e1" />
        <rect x="45" y="65" width="80" height="10" rx="3" fill="#cbd5e1" />
        <circle cx="30" cy="90" r="4" fill="#cbd5e1" />
        <rect x="45" y="85" width="60" height="10" rx="3" fill="#cbd5e1" />

        <!-- Demo Overlay -->
        <g id="m15-demo-group" style="display:none;">
            <rect x="0" y="0" width="240" height="150" fill="black" opacity="0.6" />
            <text id="m15-demo-code" x="20" y="25" fill="#10b981" font-family="monospace" font-size="16" font-weight="bold"></text>
            <text id="m15-demo-ul" x="20" y="55" fill="#64748b" font-family="monospace" font-size="14" opacity="0.5">&lt;ul&gt;</text>
        </g>

        <!-- Demo Button -->
        <g id="m15-demo-btn" cursor="pointer">
            <rect x="175" y="125" width="60" height="20" rx="4" fill="#3b82f6" />
            <text x="205" y="139" fill="white" font-family="sans-serif" font-size="12" text-anchor="middle" font-weight="bold">DEMO</text>
        </g>
    </svg>`,
    widgetCode: `<!-- INTERACTIVE MODULE -->
<script>
(function() {
    const headerBox = document.getElementById('m15-header');
    const headerText = document.getElementById('m15-text');
    const editor = document.getElementById('code-editor');
    const demoBtn = document.getElementById('m15-demo-btn');
    const demoGroup = document.getElementById('m15-demo-group');
    const demoCode = document.getElementById('m15-demo-code');
    
    function updateVisual(val) {
        if (!headerBox) return;
        const match = val.match(/<h2>\s*(.*?)\s*<\/h2>/i);
        if (match) {
            headerBox.setAttribute('fill', '#3b82f6');
            headerBox.setAttribute('width', '200');
            headerText.setAttribute('fill', '#ffffff');
            headerText.textContent = match[1] || "Empty Heading";
            headerText.setAttribute('font-size', '16');
        } else {
            headerBox.setAttribute('fill', '#334155');
            headerBox.setAttribute('width', '160');
            headerText.setAttribute('fill', '#94a3b8');
            headerText.textContent = "Missing <h2> Heading...";
            headerText.setAttribute('font-size', '12');
        }
    }

    if (demoBtn) {
        demoBtn.addEventListener('click', () => {
            demoGroup.style.display = 'block';
            demoCode.textContent = "";
            const textToType = "<h2>My Favorite Foods</h2>";
            let idx = 0;
            const typing = setInterval(() => {
                if (idx < textToType.length) {
                    demoCode.textContent += textToType[idx];
                    idx++;
                } else {
                    clearInterval(typing);
                    setTimeout(() => { demoGroup.style.display = 'none'; }, 2000);
                }
            }, 60);
        });
    }
    
    if (editor) { editor.readOnly = false; editor.style.opacity = '1';
        editor.addEventListener('input', (e) => updateVisual(e.target.value));
        updateVisual(editor.value);
    }
})();
</script>`,
    initialCode: "<ul>\n  <li>Pizza</li>\n  <li>Burger</li>\n</ul>",
    validator: function (code) {
        if (!code) return false;
        const c = code.toLowerCase();
        return /<h2>\s*.*?\s*<\/h2>/i.test(c) && /<ul>/i.test(c);
    }
};