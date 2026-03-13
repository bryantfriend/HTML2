window.Lessons.lesson3.modules[18] = {
    title: "19. Mini design improvement",
    body: `<p>An <strong><code>&lt;h1&gt;</code></strong> is the most important heading on a page. It should be at the very top!</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Add an <code>&lt;h1&gt;</code> tag with the text "My Favorites" at the very top of the code.</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" id="m19-svg" style="background:#1e293b; border-radius:8px;">
        <rect id="m19-preview" x="10" y="10" width="220" height="130" rx="4" fill="#334155" />
        <text id="m19-title" x="120" y="40" fill="#94a3b8" font-family="sans-serif" font-size="16" font-weight="bold" text-anchor="middle">No &lt;h1&gt; yet...</text>
        <circle cx="90" cy="70" r="4" fill="#cbd5e1" />
        <rect x="105" y="65" width="40" height="10" rx="3" fill="#cbd5e1" />
        <circle cx="90" cy="90" r="4" fill="#cbd5e1" />
        <rect x="105" y="85" width="50" height="10" rx="3" fill="#cbd5e1" />

        <!-- Demo Overlay -->
        <g id="m19-demo-group" style="display:none;">
            <rect x="0" y="0" width="240" height="150" fill="black" opacity="0.6" />
            <text id="m19-demo-code" x="20" y="30" fill="#10b981" font-family="monospace" font-size="16" font-weight="bold"></text>
            <text x="20" y="60" fill="#64748b" font-family="monospace" font-size="14" opacity="0.5">&lt;ul&gt;</text>
        </g>

        <!-- Demo Button -->
        <g id="m19-demo-btn" cursor="pointer">
            <rect x="175" y="125" width="60" height="20" rx="4" fill="#3b82f6" />
            <text x="205" y="139" fill="white" font-family="sans-serif" font-size="12" text-anchor="middle" font-weight="bold">DEMO</text>
        </g>
    </svg>`,
    widgetCode: `<!-- INTERACTIVE MODULE -->
<style>
.m19-container { display: flex; gap: 10px; background: #1e293b; padding: 10px; border-radius: 8px; font-family: sans-serif; }
.m19-theme { flex: 1; padding: 10px; border-radius: 4px; text-align: center; cursor: pointer; border: 2px solid transparent; color: white; user-select: none; font-size: 12px; }
.m19-theme:hover { transform: scale(1.05); }
#t1 { background: #0f172a; }
#t2 { background: #7c2d12; }
#t3 { background: #14532d; }
</style>
<div class="m19-container">
    <div class="m19-theme" id="t1">Dark Blue</div>
    <div class="m19-theme" id="t2">Warm Red</div>
    <div class="m19-theme" id="t3">Forest Green</div>
</div>
<script>
(function() {
    const preview = document.getElementById('m19-preview');
    const headerText = document.getElementById('m19-title');
    const editor = document.getElementById('code-editor');
    const demoBtn = document.getElementById('m19-demo-btn');
    const demoGroup = document.getElementById('m19-demo-group');
    const demoCode = document.getElementById('m19-demo-code');
    
    document.getElementById('t1').onclick = () => preview.setAttribute('fill', '#0f172a');
    document.getElementById('t2').onclick = () => preview.setAttribute('fill', '#7c2d12');
    document.getElementById('t3').onclick = () => preview.setAttribute('fill', '#14532d');
    
    function updateVisual(val) {
        if (!headerText) return;
        const match = val.match(/<h1>(.*?)<\\/h1>/i);
        if (match) {
            headerText.setAttribute('fill', '#ffffff');
            headerText.textContent = (match[1] || "").trim() || "Empty Title";
        } else {
            headerText.setAttribute('fill', '#94a3b8');
            headerText.textContent = "No <h1> yet...";
        }
    }

    if (demoBtn) {
        demoBtn.addEventListener('click', () => {
            demoGroup.style.display = 'block';
            demoCode.textContent = "";
            const textToType = "<h1>My Favorites</h1>";
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
    initialCode: `<ul>\n  <li>Pizza</li>\n  <li>Burger</li>\n</ul>`,
    progress: 95,
    validator: function (code) {
        if (!code) return false;
        const c = code.toLowerCase();
        return /<h1>\s*my favorites\s*<\/h1>/i.test(c);
    }
};