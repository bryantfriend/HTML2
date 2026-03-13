window.Lessons.lesson3.modules[16] = {
    title: "17. Check for missing tags",
    body: `<p>Oh no! A bug escaped and ate some of the tags in our code! 🐞</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Find the 3 missing tags and fix the broken code. Look at the <strong>Bug List</strong> for clues!</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" id="m17-svg" style="background:#1e293b; border-radius:8px;">
        <rect x="10" y="10" width="220" height="130" rx="4" fill="#0f172a" stroke="#334155" stroke-width="1" />
        <text x="120" y="30" fill="#94a3b8" font-family="sans-serif" font-size="12" text-anchor="middle" font-weight="bold">BUG DETECTIVE 🔍</text>
        
        <g id="m17-bug-list">
            <text id="m17-bug1" x="25" y="55" fill="#ef4444" font-family="sans-serif" font-size="10">🐞 Missing &lt;ol&gt; or &lt;/ol&gt;</text>
            <text id="m17-bug2" x="25" y="75" fill="#ef4444" font-family="sans-serif" font-size="10">🐞 Missing &lt;li&gt; on breakfast</text>
            <text id="m17-bug3" x="25" y="95" fill="#ef4444" font-family="sans-serif" font-size="10">🐞 Missing &lt;/li&gt; on school</text>
        </g>
        
        <text id="m17-status" x="120" y="130" fill="#ef4444" font-family="sans-serif" font-size="14" text-anchor="middle" font-weight="bold">3 BUGS DETECTED</text>
    </svg>`,
    widgetCode: `<!-- INTERACTIVE MODULE -->
<script>
(function() {
    const editor = document.getElementById('code-editor');
    const statusText = document.getElementById('m17-status');
    const bug1 = document.getElementById('m17-bug1');
    const bug2 = document.getElementById('m17-bug2');
    const bug3 = document.getElementById('m17-bug3');
    
    function checkBugs(code) {
        const c = code.toLowerCase();
        const hasOl = /<ol>/i.test(c);
        const hasCloseOl = /<\/ol>/i.test(c);
        const hasLiBreakfast = /<li>\s*eat breakfast\s*<\/li>/i.test(c);
        const hasLiSchool = /<li>\s*go to school\s*<\/li>/i.test(c);
        
        let bugCount = 0;
        
        if (hasOl && hasCloseOl) {
            bug1.setAttribute('fill', '#10b981');
            bug1.textContent = "✅ List tags fixed!";
        } else {
            bug1.setAttribute('fill', '#ef4444');
            bug1.textContent = "🐞 Missing <ol> or </ol>";
            bugCount++;
        }
        
        if (hasLiBreakfast) {
            bug2.setAttribute('fill', '#10b981');
            bug2.textContent = "✅ Breakfast fixed!";
        } else {
            bug2.setAttribute('fill', '#ef4444');
            bug2.textContent = "🐞 Missing <li> on breakfast";
            bugCount++;
        }
        
        if (hasLiSchool) {
            bug3.setAttribute('fill', '#10b981');
            bug3.textContent = "✅ School fixed!";
        } else {
            bug3.setAttribute('fill', '#ef4444');
            bug3.textContent = "🐞 Missing </li> on school";
            bugCount++;
        }
        
        if (bugCount === 0) {
            statusText.setAttribute('fill', '#10b981');
            statusText.textContent = "ALL BUGS SQUASHED! 🏆";
        } else {
            statusText.setAttribute('fill', '#ef4444');
            statusText.textContent = bugCount + " BUGS LEFT 🐞";
        }
    }
    
    if (editor) {
        editor.readOnly = false;
        editor.style.opacity = '1';
        editor.addEventListener('input', (e) => checkBugs(e.target.value));
        checkBugs(editor.value);
    }
})();
</script>`,
    initialCode: "eat breakfast</li>\n<li>go to school",
    validator: function (code) {
        if (!code) return false;
        const c = code.toLowerCase();
        return /<ol>/i.test(c) && /<\/ol>/i.test(c) && 
               /<li>\s*eat breakfast\s*<\/li>/i.test(c) && 
               /<li>\s*go to school\s*<\/li>/i.test(c);
    }
};