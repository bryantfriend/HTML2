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
        
        <!-- Demo Overlay -->
        <g id="m4-demo-group" style="display:none;">
            <rect x="0" y="0" width="240" height="150" fill="black" opacity="0.6" />
            <text id="m4-demo-text1" x="20" y="30" fill="#10b981" font-family="monospace" font-size="14" font-weight="bold"></text>
            <text id="m4-demo-text2" x="20" y="55" fill="#10b981" font-family="monospace" font-size="14" font-weight="bold"></text>
            <text id="m4-demo-text3" x="20" y="85" fill="#10b981" font-family="monospace" font-size="14" font-weight="bold"></text>
            <text id="m4-demo-text4" x="20" y="115" fill="#10b981" font-family="monospace" font-size="14" font-weight="bold"></text>
            <text id="m4-demo-text5" x="20" y="140" fill="#10b981" font-family="monospace" font-size="14" font-weight="bold"></text>
        </g>

        <!-- Demo Button -->
        <g id="m4-demo-btn" cursor="pointer">
            <rect x="175" y="125" width="60" height="20" rx="4" fill="#3b82f6" />
            <text x="205" y="139" fill="white" font-family="sans-serif" font-size="12" text-anchor="middle" font-weight="bold">DEMO</text>
        </g>
    </svg>`,
    widgetCode: `<!-- INTERACTIVE MODULE -->
<script>
(function() {
    const svg = document.getElementById('m4-svg');
    const lines = document.getElementById('m4-lines');
    const demoBtn = document.getElementById('m4-demo-btn');
    const demoGroup = document.getElementById('m4-demo-group');
    
    function updateVisual(code) {
        if (!svg) return;
        const ulCount = (code.match(/<ul>/gi) || []).length;
        const liCount = (code.match(/<li>/gi) || []).length;
        const hasUlTags = /<ul>/i.test(code) && /<\\/ul>/i.test(code);
        
        let visualHtml = '';
        if (ulCount > 0) {
            visualHtml += '<rect x="15" y="15" width="210" height="120" rx="5" fill="#334155" />';
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
        
        if (hasUlTags && liCount >= 3) {
            visualHtml += '<text x="120" y="145" fill="#fcd34d" font-size="14" text-anchor="middle">Perfect List!</text>';
        }
        
        lines.innerHTML = visualHtml;
    }

    if (demoBtn) {
        demoBtn.addEventListener('click', () => {
            demoGroup.style.display = 'block';
            const texts = [
                document.getElementById('m4-demo-text1'),
                document.getElementById('m4-demo-text2'),
                document.getElementById('m4-demo-text3'),
                document.getElementById('m4-demo-text4'),
                document.getElementById('m4-demo-text5')
            ];
            texts.forEach(t => t.textContent = "");
            
            const linesToType = [
                "<ul>",
                "  <li>Pizza</li>",
                "  <li>Burger</li>",
                "  <li>Sushi</li>",
                "</ul>"
            ];
            
            let lineIdx = 0;
            let charIdx = 0;
            
            const typing = setInterval(() => {
                if (lineIdx < linesToType.length) {
                    if (charIdx < linesToType[lineIdx].length) {
                        texts[lineIdx].textContent += linesToType[lineIdx][charIdx];
                        charIdx++;
                    } else {
                        lineIdx++;
                        charIdx = 0;
                    }
                } else {
                    clearInterval(typing);
                    setTimeout(() => {
                        demoGroup.style.display = 'none';
                    }, 2000);
                }
            }, 50);
        });
    }

    const editor = document.getElementById('code-editor');
    if (editor) { editor.readOnly = false; editor.style.opacity = '1';
        editor.addEventListener('input', (e) => updateVisual(e.target.value));
        updateVisual(editor.value);
    }
})();
</script>`,
    initialCode: "Pizza\nBurger\nSushi",
    validator: function (code) {
        if (!code) return false;
        const c = code.toLowerCase();
        return /<ul>/i.test(c) && /<\/ul>/i.test(c) && (code.match(/<li>/gi) || []).length >= 3;
    }
};