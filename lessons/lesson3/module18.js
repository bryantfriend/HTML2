window.Lessons.lesson3.modules[17] = {
    title: "18. Make page neat",
    body: `<p>A neat page is a happy page. In the real world, developers use auto-formatters to clean up their code!</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Fix the indentation so the list items (<code>&lt;li&gt;</code>) are spaced correctly, or click the Magic Format button!</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" id="m18-svg" style="background:#1e293b; border-radius:8px;">
        <rect id="m18-btn" x="60" y="55" width="120" height="40" rx="8" fill="#3b82f6" cursor="pointer" />
        <text x="120" y="80" fill="#ffffff" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle" pointer-events="none">✨ Magic Format</text>
    </svg>`,
    widgetCode: `<!-- INTERACTIVE MODULE -->
<script>
(function() {
    const btn = document.getElementById('m18-btn');
    const editor = document.getElementById('code-editor');
    
    if (btn) {
        btn.addEventListener('click', () => {
            btn.setAttribute('fill', '#10b981');
            if (editor) { editor.readOnly = false; editor.style.opacity = '1';
                editor.value = "<ol>\\n  <li>Wake up</li>\\n  <li>Eat breakfast</li>\\n  <li>Go to school</li>\\n</ol>";
                editor.dispatchEvent(new Event('input', { bubbles: true }));
            }
            setTimeout(() => {
                btn.setAttribute('fill', '#3b82f6');
            }, 1000);
        });
    }
})();
</script>`,
    initialCode: `<ol>\n<li>Wake up</li>\n<li>Eat breakfast</li>\n<li>Go to school</li>\n</ol>`,
    progress: 90,
    validator: function (code) {
        return code.includes("  <li>") && code.includes("<ol>");
    }
};