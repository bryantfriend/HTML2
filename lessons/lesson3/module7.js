window.Lessons.lesson3.modules[6] = {
    title: "7. Numbered lists",
    body: `<p>Ordered lists are for things that MUST be in order! Think of a recipe or a morning routine.</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Create an <code>&lt;ol&gt;</code> and add 3 items: <strong>Wake up</strong>, <strong>Brush teeth</strong>, and <strong>Go to school</strong>. Type them exactly like that!</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" id="m7-svg" style="background:#1e293b; border-radius:8px;">
        <g id="m7-content"></g>
        
        <!-- Demo Overlay -->
        <g id="m7-demo-group" style="display:none;">
            <rect x="0" y="0" width="240" height="150" fill="black" opacity="0.6" />
            <text id="m7-demo-text1" x="20" y="40" fill="#10b981" font-family="monospace" font-size="14" font-weight="bold"></text>
            <text id="m7-demo-text2" x="20" y="65" fill="#10b981" font-family="monospace" font-size="14" font-weight="bold"></text>
            <text id="m7-demo-text3" x="20" y="90" fill="#10b981" font-family="monospace" font-size="14" font-weight="bold"></text>
            <text id="m7-demo-text4" x="20" y="115" fill="#10b981" font-family="monospace" font-size="14" font-weight="bold"></text>
            <text id="m7-demo-text5" x="20" y="140" fill="#10b981" font-family="monospace" font-size="14" font-weight="bold"></text>
        </g>

        <!-- Demo Button -->
        <g id="m7-demo-btn" cursor="pointer">
            <rect x="175" y="125" width="60" height="20" rx="4" fill="#3b82f6" />
            <text x="205" y="139" fill="white" font-family="sans-serif" font-size="12" text-anchor="middle" font-weight="bold">DEMO</text>
        </g>
    </svg>`,
    widgetCode: `<!-- INTERACTIVE MODULE -->
<style>
.m7-container { padding: 10px; background: #334155; border-radius: 8px; color: white; display: flex; flex-direction: column; gap: 8px; font-family: sans-serif; }
.m7-step { background: #475569; padding: 10px; border-radius: 4px; border-left: 4px solid #64748b; font-size: 14px; transition: all 0.2s; }
.m7-step.completed { border-left-color: #10b981; background: #064e3b; color: #10b981; }
</style>
<div class="m7-container" id="m7-ui">
    <div class="m7-step" id="m7-step-0">1. Wake up</div>
    <div class="m7-step" id="m7-step-1">2. Brush teeth</div>
    <div class="m7-step" id="m7-step-2">3. Go to school</div>
</div>
<script>
(function() {
    const editor = document.getElementById('code-editor');
    const demoBtn = document.getElementById('m7-demo-btn');
    const demoGroup = document.getElementById('m7-demo-group');
    
    function updateVisual(code) {
        const c = code.toLowerCase();
        const hasOl = /<ol>/i.test(c);
        const s1 = /<li>\\s*wake up\\s*<\\/li>/i.test(c);
        const s2 = /<li>\\s*brush teeth\\s*<\\/li>/i.test(c);
        const s3 = /<li>\\s*go to school\\s*<\\/li>/i.test(c);
        
        document.getElementById('m7-step-0').className = "m7-step" + (s1 ? " completed" : "");
        document.getElementById('m7-step-1').className = "m7-step" + (s2 ? " completed" : "");
        document.getElementById('m7-step-2').className = "m7-step" + (s3 ? " completed" : "");
    }

    if (demoBtn) {
        demoBtn.addEventListener('click', () => {
            demoGroup.style.display = 'block';
            const texts = [
                document.getElementById('m7-demo-text1'),
                document.getElementById('m7-demo-text2'),
                document.getElementById('m7-demo-text3'),
                document.getElementById('m7-demo-text4'),
                document.getElementById('m7-demo-text5')
            ];
            texts.forEach(t => t.textContent = "");
            const lines = ["<ol>", "  <li>Wake up</li>", "  <li>Brush teeth</li>", "  <li>Go to school</li>", "</ol>"];
            let lIdx = 0; let cIdx = 0;
            const typing = setInterval(() => {
                if (lIdx < lines.length) {
                    if (cIdx < lines[lIdx].length) {
                        texts[lIdx].textContent += lines[lIdx][cIdx];
                        cIdx++;
                    } else { lIdx++; cIdx = 0; }
                } else {
                    clearInterval(typing);
                    setTimeout(() => { demoGroup.style.display = 'none'; }, 2000);
                }
            }, 60);
        });
    }

    if (editor) {
        editor.readOnly = false;
        editor.style.opacity = '1';
        editor.addEventListener('input', (e) => updateVisual(e.target.value));
        updateVisual(editor.value);
    }
})();
</script>`,
    initialCode: "",
    validator: function (code) {
        if (!code) return false;
        const c = code.toLowerCase();
        const s1 = /<li>\s*wake up\s*<\/li>/i.test(c);
        const s2 = /<li>\s*brush teeth\s*<\/li>/i.test(c);
        const s3 = /<li>\s*go to school\s*<\/li>/i.test(c);
        return /<ol>/i.test(c) && /<\/ol>/i.test(c) && s1 && s2 && s3;
    }
};