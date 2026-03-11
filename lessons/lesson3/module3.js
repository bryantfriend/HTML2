window.Lessons.lesson3.modules[2] = {
    title: "3. Unordered lists <ul>",
    body: `<p>The <code>&lt;ul&gt;</code> tag stands for <strong>Unordered List</strong>. It tells the browser: "I am starting a list, use bullet points!"</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Add an opening <code>&lt;ul&gt;</code> before the items, and a closing <code>&lt;/ul&gt;</code> after them.</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" id="m3-svg" style="background:#1e293b; border-radius:8px;">
        <rect id="m3-box" x="40" y="30" width="160" height="90" rx="4" fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="5,5" transition="all 0.5s"/>
        <text id="m3-item1" x="60" y="55" fill="#f8fafc" font-family="sans-serif" font-size="14" transition="all 0.3s">Pizza</text>
        <text id="m3-item2" x="60" y="80" fill="#f8fafc" font-family="sans-serif" font-size="14" transition="all 0.3s">Burger</text>
        <text id="m3-item3" x="60" y="105" fill="#f8fafc" font-family="sans-serif" font-size="14" transition="all 0.3s">Sushi</text>
    </svg>`,
    widgetCode: `<!-- INTERACTIVE MODULE -->
<script>
(function() {
    const box = document.getElementById('m3-box');
    const items = [
        document.getElementById('m3-item1'),
        document.getElementById('m3-item2'),
        document.getElementById('m3-item3')
    ];
    
    function updateVisual(code) {
        if (!box) return;
        const hasUl = code.toLowerCase().includes('<ul>') && code.toLowerCase().includes('</ul>');
        if (hasUl) {
            box.setAttribute('stroke', '#10b981');
            box.setAttribute('stroke-dasharray', '0');
            box.setAttribute('fill', '#064e3b');
            items.forEach((item, i) => {
                item.setAttribute('x', '75');
            });
        } else {
            box.setAttribute('stroke', '#64748b');
            box.setAttribute('stroke-dasharray', '5,5');
            box.setAttribute('fill', 'none');
            items.forEach((item, i) => {
                item.setAttribute('x', '60');
            });
        }
    }

    const editor = document.getElementById('code-editor');
    if (editor) { editor.readOnly = false; editor.style.opacity = '1';
        editor.addEventListener('input', (e) => updateVisual(e.target.value));
        updateVisual(editor.value);
    }
})();
</script>`,
    initialCode: `<li>Pizza</li>\n<li>Burger</li>\n<li>Sushi</li>`,
    progress: 15,
    validator: function (code) {
        return code.toLowerCase().includes("<ul>") && code.toLowerCase().includes("</ul>");
    }
};