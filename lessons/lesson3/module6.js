window.Lessons.lesson3.modules[5] = {
    title: "6. Ordered lists <ol>",
    body: `<p>A <strong><code>&lt;ul&gt;</code></strong> (Unordered List) uses bullets. An <strong><code>&lt;ol&gt;</code></strong> (Ordered List) uses numbers (1, 2, 3...).</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Change the <code>&lt;ul&gt;</code> tags into <code>&lt;ol&gt;</code> tags to number the steps.</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" id="m6-svg" style="background:#1e293b; border-radius:8px;">
        <text id="m6-n1" x="40" y="55" fill="#64748b" font-family="sans-serif" font-size="16" font-weight="bold">•</text>
        <rect x="60" y="45" width="120" height="10" rx="3" fill="#cbd5e1" />
        
        <text id="m6-n2" x="40" y="85" fill="#64748b" font-family="sans-serif" font-size="16" font-weight="bold">•</text>
        <rect x="60" y="75" width="100" height="10" rx="3" fill="#cbd5e1" />
        
        <text id="m6-n3" x="40" y="115" fill="#64748b" font-family="sans-serif" font-size="16" font-weight="bold">•</text>
        <rect x="60" y="105" width="140" height="10" rx="3" fill="#cbd5e1" />

        <!-- Demo Overlay -->
        <g id="m6-demo-group" style="display:none;">
            <rect x="0" y="0" width="240" height="150" fill="black" opacity="0.6" />
            <text id="m6-demo-code1" x="20" y="40" fill="#10b981" font-family="monospace" font-size="16" font-weight="bold">&lt;ul&gt;</text>
            <text id="m6-demo-code2" x="20" y="125" fill="#10b981" font-family="monospace" font-size="16" font-weight="bold">&lt;/ul&gt;</text>
            <text x="120" y="85" fill="white" font-family="sans-serif" font-size="14" text-anchor="middle" font-weight="bold" id="m6-demo-hint">CHANGE TO ol</text>
        </g>

        <!-- Demo Button -->
        <g id="m6-demo-btn" cursor="pointer">
            <rect x="175" y="125" width="60" height="20" rx="4" fill="#3b82f6" />
            <text x="205" y="139" fill="white" font-family="sans-serif" font-size="12" text-anchor="middle" font-weight="bold">DEMO</text>
        </g>
    </svg>`,
    widgetCode: `<!-- INTERACTIVE MODULE -->
<script>
(function() {
    const n1 = document.getElementById('m6-n1');
    const n2 = document.getElementById('m6-n2');
    const n3 = document.getElementById('m6-n3');
    const demoBtn = document.getElementById('m6-demo-btn');
    const demoGroup = document.getElementById('m6-demo-group');
    const demoCode1 = document.getElementById('m6-demo-code1');
    const demoCode2 = document.getElementById('m6-demo-code2');
    const demoHint = document.getElementById('m6-demo-hint');
    
    function updateVisual(code) {
        if (!n1) return;
        const hasOl = /<ol>/i.test(code) && /<\/ol>/i.test(code);
        if (hasOl) {
            n1.textContent = "1."; n1.setAttribute('fill', '#fde047');
            n2.textContent = "2."; n2.setAttribute('fill', '#fde047');
            n3.textContent = "3."; n3.setAttribute('fill', '#fde047');
        } else {
            n1.textContent = "•"; n1.setAttribute('fill', '#64748b');
            n2.textContent = "•"; n2.setAttribute('fill', '#64748b');
            n3.textContent = "•"; n3.setAttribute('fill', '#64748b');
        }
    }

    if (demoBtn) {
        demoBtn.addEventListener('click', () => {
            demoGroup.style.display = 'block';
            demoCode1.textContent = "<ul>";
            demoCode2.textContent = "</ul>";
            demoHint.textContent = "CHANGE TO ol";
            
            setTimeout(() => {
                demoCode1.textContent = "<ol>";
                demoCode2.textContent = "</ol>";
                demoHint.textContent = "NUMBERS!";
                setTimeout(() => {
                    demoGroup.style.display = 'none';
                }, 2000);
            }, 1500);
        });
    }

    const editor = document.getElementById('code-editor');
    if (editor) { editor.readOnly = false; editor.style.opacity = '1';
        editor.addEventListener('input', (e) => updateVisual(e.target.value));
        updateVisual(editor.value);
    }
})();
</script>`,
    initialCode: "<ul>\n  <li>Wake up</li>\n  <li>Brush teeth</li>\n  <li>Go to school</li>\n</ul>",
    validator: function (code) {
        if (!code) return false;
        const c = code.toLowerCase();
        return /<ol>/i.test(c) && /<\/ol>/i.test(c);
    }
};