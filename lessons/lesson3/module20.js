window.Lessons.lesson3.modules[19] = {
    title: "20. Challenge: 3 lists on one page",
    body: `<p><strong>Final Boss Challenge!</strong> Let's put everything together in one massive profile page.</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Create 3 sections! A Foods list <code>&lt;ul&gt;</code>, a Games list <code>&lt;ul&gt;</code>, and a Routine list <code>&lt;ol&gt;</code>. Make sure all of them have an <code>&lt;h2&gt;</code> title above them.</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" id="m20-svg" style="background:#1e293b; border-radius:8px;">
        <!-- Slots -->
        <rect id="m20-s1" x="20" y="20" width="60" height="100" rx="4" fill="#334155" />
        <text id="m20-t1" x="50" y="75" fill="#64748b" font-family="sans-serif" font-size="12" text-anchor="middle">Foods</text>
        
        <rect id="m20-s2" x="90" y="20" width="60" height="100" rx="4" fill="#334155" />
        <text id="m20-t2" x="120" y="75" fill="#64748b" font-family="sans-serif" font-size="12" text-anchor="middle">Games</text>
        
        <rect id="m20-s3" x="160" y="20" width="60" height="100" rx="4" fill="#334155" />
        <text id="m20-t3" x="190" y="75" fill="#64748b" font-family="sans-serif" font-size="12" text-anchor="middle">Routine</text>
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
    const editor = document.getElementById('code-editor');
    
    function validateSection(val) {
        const h2c = (val.match(/<h2>/gi) || []).length;
        const ulc = (val.match(/<ul>/gi) || []).length;
        const olc = (val.match(/<ol>/gi) || []).length;
        
        if (h2c > 0 && ulc > 0) {
            s1.setAttribute('fill', '#064e3b'); t1.setAttribute('fill', '#10b981'); t1.textContent = "Foods ✅";
        } else {
            s1.setAttribute('fill', '#334155'); t1.setAttribute('fill', '#64748b'); t1.textContent = "Foods";
        }
        
        if (h2c > 1 && ulc > 1) {
            s2.setAttribute('fill', '#064e3b'); t2.setAttribute('fill', '#10b981'); t2.textContent = "Games ✅";
        } else {
            s2.setAttribute('fill', '#334155'); t2.setAttribute('fill', '#64748b'); t2.textContent = "Games";
        }
        
        if (h2c > 2 && olc > 0) {
            s3.setAttribute('fill', '#064e3b'); t3.setAttribute('fill', '#10b981'); t3.textContent = "Routine ✅";
        } else {
            s3.setAttribute('fill', '#334155'); t3.setAttribute('fill', '#64748b'); t3.textContent = "Routine";
        }
    }
    
    if (editor) { editor.readOnly = false; editor.style.opacity = '1';
        editor.addEventListener('keyup', (e) => validateSection(e.target.value));
        validateSection(editor.value);
    }
})();
</script>`,
    initialCode: `<h2>Foods</h2>\n<ul>\n  <li>Pizza</li>\n  <li>Burger</li>\n</ul>\n\n<h2>Games</h2>\n<ul>\n  <!-- add games here -->\n</ul>\n\n<h2>Routine</h2>\n<ol>\n  <!-- add steps here -->\n</ol>`,
    progress: 100,
    validator: function (code) {
        return (code.match(/<ul>/gi) || []).length >= 2 &&
            (code.match(/<ol>/gi) || []).length >= 1 &&
            (code.match(/<h2>/gi) || []).length >= 3 &&
            (code.match(/<li>/gi) || []).length >= 6;
    }
};