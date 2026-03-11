window.Lessons.lesson3.modules[16] = {
    title: "17. Check for missing tags",
    body: `<p>Oh no! A bug escaped and ate some of the tags in our code! 🐞</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Find the 3 missing tags and fix the broken code.</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" id="m17-svg" style="background:#1e293b; border-radius:8px;">
        <rect x="20" y="20" width="200" height="110" rx="4" fill="#334155" />
        <text id="m17-status" x="120" y="80" fill="#ef4444" font-family="sans-serif" font-size="24" text-anchor="middle" font-weight="bold">BUG DETECTED 🐞</text>
    </svg>`,
    widgetCode: `<!-- INTERACTIVE MODULE -->
<script>
(function() {
    const statusText = document.getElementById('m17-status');
    const editor = document.getElementById('code-editor');
    
    function checkBugs(code) {
        if (!statusText) return;
        const hasOl = code.toLowerCase().includes('<ol>') && code.toLowerCase().includes('</ol>');
        const liCount = (code.match(/<li>/gi) || []).length;
        const closingLiCount = (code.match(/<\\/li>/gi) || []).length;
        
        let missing = [];
        if (!hasOl) missing.push("List Tag");
        if (liCount < 3 || closingLiCount < 3) missing.push("Item Tags");
        
        if (missing.length === 0) {
            statusText.setAttribute('fill', '#10b981');
            statusText.textContent = "BUGS SQUASHED! 🐛🧹";
        } else {
            statusText.setAttribute('fill', '#ef4444');
            statusText.textContent = missing.length + " BUGS LEFT 🐞";
        }
    }
    
    if (editor) { editor.readOnly = false; editor.style.opacity = '1';
        editor.addEventListener('keyup', (e) => checkBugs(e.target.value));
        checkBugs(editor.value);
    }
})();
</script>`,
    initialCode: `<ol>\n  <li>Wake up</li>\n  Eat breakfast</li>\n  <li>Go to school\n<!-- Fix the missing tags! Make sure there's an opening and closing for the list and 3 items! -->`,
    progress: 85,
    validator: function (code) {
        return code.toLowerCase().includes("<ol>") && code.toLowerCase().includes("</ol>") && (code.match(/<li>/gi) || []).length >= 3 && (code.match(/<\/li>/gi) || []).length >= 3;
    }
};