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
    </svg>`,
    widgetCode: `<!-- INTERACTIVE MODULE -->
<script>
(function() {
    const headerBox = document.getElementById('m15-header');
    const headerText = document.getElementById('m15-text');
    const editor = document.getElementById('code-editor');
    
    function updateVisual(val) {
        if (!headerBox) return;
        const match = val.match(/<h2>(.*?)<\\/h2>/i);
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
    
    if (editor) { editor.readOnly = false; editor.style.opacity = '1';
        editor.addEventListener('input', (e) => updateVisual(e.target.value));
        updateVisual(editor.value);
    }
})();
</script>`,
    initialCode: `<ul>\n  <li>Pizza</li>\n  <li>Burger</li>\n</ul>`,
    progress: 75,
    validator: function (code) {
        return code.toLowerCase().includes("<h2>") && code.toLowerCase().includes("</h2>") && code.toLowerCase().includes("<ul>");
    }
};