window.Lessons.lesson3.modules[19] = {
    title: "20. Challenge: 3 lists on one page",
    body: `<p><strong>Final Boss Challenge!</strong> Let's put everything together. You need 3 sections: Foods, Games, and Routine.</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Create 3 sections. Each needs an <code>&lt;h2&gt;</code> title and a list (<code>&lt;ul&gt;</code> for Foods/Games, <code>&lt;ol&gt;</code> for Routine). Add 2 items to each list!</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" id="m20-svg" style="background:#1e293b; border-radius:8px;">
        <!-- Slots -->
        <rect id="m20-s1" x="20" y="20" width="60" height="100" rx="4" fill="#334155" />
        <text id="m20-t1" x="50" y="75" fill="#64748b" font-family="sans-serif" font-size="10" text-anchor="middle">Foods</text>
        
        <rect id="m20-s2" x="90" y="20" width="60" height="100" rx="4" fill="#334155" />
        <text id="m20-t2" x="120" y="75" fill="#64748b" font-family="sans-serif" font-size="10" text-anchor="middle">Games</text>
        
        <rect id="m20-s3" x="160" y="20" width="60" height="100" rx="4" fill="#334155" />
        <text id="m20-t3" x="190" y="75" fill="#64748b" font-family="sans-serif" font-size="10" text-anchor="middle">Routine</text>

        <!-- Demo Overlay -->
        <g id="m20-demo-group" style="display:none;">
            <rect x="0" y="0" width="240" height="150" fill="black" opacity="0.9" />
            <text id="m20-demo-line1" x="10" y="30" fill="#10b981" font-family="monospace" font-size="12" font-weight="bold"></text>
            <text id="m20-demo-line2" x="10" y="48" fill="#10b981" font-family="monospace" font-size="12" font-weight="bold"></text>
            <text id="m20-demo-line3" x="10" y="66" fill="#3b82f6" font-family="monospace" font-size="12" font-weight="bold"></text>
            <text id="m20-demo-line4" x="10" y="84" fill="#3b82f6" font-family="monospace" font-size="12" font-weight="bold"></text>
            <text id="m20-demo-line5" x="10" y="102" fill="#fcd34d" font-family="monospace" font-size="12" font-weight="bold"></text>
            <text id="m20-demo-line6" x="10" y="120" fill="#fcd34d" font-family="monospace" font-size="12" font-weight="bold"></text>
            <text x="120" y="142" fill="white" font-family="sans-serif" font-size="12" text-anchor="middle">Build all three sections!</text>
        </g>

        <!-- Demo Button -->
        <g id="m20-demo-btn" cursor="pointer">
            <rect x="175" y="125" width="60" height="20" rx="4" fill="#3b82f6" />
            <text x="205" y="139" fill="white" font-family="sans-serif" font-size="12" text-anchor="middle" font-weight="bold">DEMO</text>
        </g>
    </svg>`,
    widgetCode: `<!-- INTERACTIVE MODULE -->
<script>
(function() {
    const s1 = document.getElementById('m20-s1');
    const s2 = document.getElementById('m20-s2');
    const s3 = document.getElementById('m20-s3');
    const t1 = document.getElementById('m20-t1');
    const t2 = document.getElementById('m20-t2');
    const t3 = document.getElementById('m20-t3');
    const demoBtn = document.getElementById('m20-demo-btn');
    const demoGroup = document.getElementById('m20-demo-group');
    const editor = document.getElementById('code-editor');
    
    function validateSection(val) {
        const c = val.toLowerCase();
        
        // Detailed checks for each section
        const hasFoods = new RegExp("<h2>\\\\s*foods\\\\s*<\\\\/h2>\\\\s*<ul>\\\\s*<li>\\\\s*.*?\\\\s*<\\\\/li>\\\\s*<li>\\\\s*.*?\\\\s*<\\\\/li>\\\\s*<\\\\/ul>", "is").test(c);
        const hasGames = new RegExp("<h2>\\\\s*games\\\\s*<\\\\/h2>\\\\s*<ul>\\\\s*<li>\\\\s*.*?\\\\s*<\\\\/li>\\\\s*<li>\\\\s*.*?\\\\s*<\\\\/li>\\\\s*<\\\\/ul>", "is").test(c);
        const hasRoutine = new RegExp("<h2>\\\\s*routine\\\\s*<\\\\/h2>\\\\s*<ol>\\\\s*<li>\\\\s*.*?\\\\s*<\\\\/li>\\\\s*<li>\\\\s*.*?\\\\s*<\\\\/li>\\\\s*<\\\\/ol>", "is").test(c);
        
        if (hasFoods) {
            s1.setAttribute('fill', '#064e3b'); t1.setAttribute('fill', '#10b981'); t1.textContent = "Foods ✅";
        } else {
            s1.setAttribute('fill', '#334155'); t1.setAttribute('fill', '#64748b'); t1.textContent = "Foods";
        }
        
        if (hasGames) {
            s2.setAttribute('fill', '#064e3b'); t2.setAttribute('fill', '#10b981'); t2.textContent = "Games ✅";
        } else {
            s2.setAttribute('fill', '#334155'); t2.setAttribute('fill', '#64748b'); t2.textContent = "Games";
        }
        
        if (hasRoutine) {
            s3.setAttribute('fill', '#064e3b'); t3.setAttribute('fill', '#10b981'); t3.textContent = "Routine ✅";
        } else {
            s3.setAttribute('fill', '#334155'); t3.setAttribute('fill', '#64748b'); t3.textContent = "Routine";
        }
    }

    if (demoBtn) {
        demoBtn.addEventListener('click', () => {
            demoGroup.style.display = 'block';
            const linesTexts = [
                document.getElementById('m20-demo-line1'),
                document.getElementById('m20-demo-line2'),
                document.getElementById('m20-demo-line3'),
                document.getElementById('m20-demo-line4'),
                document.getElementById('m20-demo-line5'),
                document.getElementById('m20-demo-line6')
            ];
            linesTexts.forEach(t => t.textContent = "");
            
            const linesToType = [
                "<h2>Foods</h2>",
                "<ul><li>Pizza</li></ul>",
                "<h2>Games</h2>",
                "<ul><li>Tag</li></ul>",
                "<h2>Routine</h2>",
                "<ol><li>Run</li></ol>"
            ];
            
            let lIdx = 0; let cIdx = 0;
            const typing = setInterval(() => {
                if (lIdx < linesToType.length) {
                    if (cIdx < linesToType[lIdx].length) {
                        linesTexts[lIdx].textContent += linesToType[lIdx][cIdx];
                        cIdx++;
                    } else { lIdx++; cIdx = 0; }
                } else {
                    clearInterval(typing);
                    setTimeout(() => { demoGroup.style.display = 'none'; }, 2000);
                }
            }, 40);
        });
    }
    
    if (editor) { editor.readOnly = false; editor.style.opacity = '1';
        editor.addEventListener('input', (e) => validateSection(e.target.value));
        validateSection(editor.value);
    }
})();
</script>`,
    initialCode: `<h2>Foods</h2>\n<ul>\n  <li>Pizza</li>\n  <li>Burger</li>\n</ul>\n\n<h2>Games</h2>\n\n\n<h2>Routine</h2>`,
    progress: 100,
    validator: function (code) {
        if (!code) return false;
        const c = code.toLowerCase();
        const hasFoods = new RegExp("<h2>\\\\s*foods\\\\s*<\\\\/h2>\\\\s*<ul>\\\\s*<li>\\\\s*.*?\\\\s*<\\\\/li>\\\\s*<li>\\\\s*.*?\\\\s*<\\\\/li>\\\\s*<\\\\/ul>", "is").test(c);
        const hasGames = new RegExp("<h2>\\\\s*games\\\\s*<\\\\/h2>\\\\s*<ul>\\\\s*<li>\\\\s*.*?\\\\s*<\\\\/li>\\\\s*<li>\\\\s*.*?\\\\s*<\\\\/li>\\\\s*<\\\\/ul>", "is").test(c);
        const hasRoutine = new RegExp("<h2>\\\\s*routine\\\\s*<\\\\/h2>\\\\s*<ol>\\\\s*<li>\\\\s*.*?\\\\s*<\\\\/li>\\\\s*<li>\\\\s*.*?\\\\s*<\\\\/li>\\\\s*<\\\\/ol>", "is").test(c);
        return hasFoods && hasGames && hasRoutine;
    }
};