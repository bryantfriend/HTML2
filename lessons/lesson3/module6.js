window.Lessons.lesson3.modules[5] = {
    title: "6. Ordered lists <ol>",
    body: `<p>Remember how <code>&lt;ul&gt;</code> makes a bullet list? The <code>&lt;ol&gt;</code> tag makes an <strong>Ordered List</strong> (a numbered list!).</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Change the <code>&lt;ul&gt;</code> tags into <code>&lt;ol&gt;</code> tags to number the steps.</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" id="m6-svg" style="background:#1e293b; border-radius:8px;">
        <text id="m6-n1" x="40" y="55" fill="#64748b" font-family="sans-serif" font-size="16" font-weight="bold">•</text>
        <rect x="60" y="45" width="120" height="10" rx="3" fill="#cbd5e1" />
        
        <text id="m6-n2" x="40" y="85" fill="#64748b" font-family="sans-serif" font-size="16" font-weight="bold">•</text>
        <rect x="60" y="75" width="100" height="10" rx="3" fill="#cbd5e1" />
        
        <text id="m6-n3" x="40" y="115" fill="#64748b" font-family="sans-serif" font-size="16" font-weight="bold">•</text>
        <rect x="60" y="105" width="140" height="10" rx="3" fill="#cbd5e1" />
    </svg>`,
    widgetCode: `<!-- INTERACTIVE MODULE -->
<script>
(function() {
    const n1 = document.getElementById('m6-n1');
    const n2 = document.getElementById('m6-n2');
    const n3 = document.getElementById('m6-n3');
    const targetCode = "<ol>";
    
    function updateVisual(code) {
        if (!n1) return;
        const hasOl = code.toLowerCase().includes('<ol>') && code.toLowerCase().includes('</ol>');
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

    const editor = document.getElementById('code-editor');
    if (editor) { editor.readOnly = false; editor.style.opacity = '1';
        editor.addEventListener('input', (e) => updateVisual(e.target.value));
        updateVisual(editor.value);
    }
})();
</script>`,
    initialCode: `<ul>\n  <li>Wake up</li>\n  <li>Eat breakfast</li>\n  <li>Go to school</li>\n</ul>`,
    progress: 30,
    validator: function (code) {
        return code.toLowerCase().includes("<ol>") && code.toLowerCase().includes("</ol>");
    }
};