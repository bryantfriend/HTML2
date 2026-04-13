window.Lessons.lesson7.modules[8] = {
    title: "9. Classes: The Rank",
    body: `<p>We learned how to target HTML kinds (like <code>body</code>) and IDs (like <code>#badge</code>). Now let's try classes!</p>
    <p>Our paragraph has <code>class="rank"</code>. To target it in CSS, we use a period (<code>.</code>): <code>.rank { }</code>.</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Type exactly: <code>color: yellow;</code> inside the .rank braces.</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" style="background:#0f172a; border-radius:8px;">
    <polygon points="120,20 150,110 50,50 190,50 90,110" fill="none" stroke="#64748b" stroke-width="3">
        <animate attributeName="fill" values="none;#fbbf24;none" dur="3s" repeatCount="indefinite"/>
        <animate attributeName="stroke" values="#64748b;#fbbf24;#64748b" dur="3s" repeatCount="indefinite"/>
    </polygon>
    <text x="120" y="140" fill="#94a3b8" font-family="monospace" font-size="14" text-anchor="middle">.rank</text>
</svg>`,
    widgetCode: `<!-- INTERACTIVE MODULE -->
<script>
(function() {
    const editor = document.getElementById('code-editor');
    if (editor) { editor.readOnly = false; editor.style.opacity = "1"; }
})();
</script>`,
    previewScaffold: `<div id="badge">\n  <div class="avatar" style="font-size: 50px;">👾</div>\n  <h1 id="hero-name">New Recruit</h1>\n  <p class="rank">Level 1 Hacker</p>\n  <button class="action-btn">Scan Network</button>\n</div>`,
    initialCode: `<style>\n  body {\n    background-color: black;\n  }\n  #badge {\n    background-color: #333;\n    padding: 20px;\n    border-radius: 15px;\n    border: 3px solid cyan;\n    text-align: center;\n  }\n  h1 {\n    color: cyan;\n  }\n  .rank {\n    \n  }\n</style>`,
    preserveCode: true,
    progress: 65,
    validator: function(code) { return code.includes(".rank") && /color\s*:/i.test(code.substring(code.indexOf(".rank"))); }
};