window.Lessons.lesson7.modules[11] = {
    title: "12. Styling the Button",
    body: `<p>Our <code>Scan Network</code> button looks plain. Let's make it look clickable!</p>
    <p>Target the <code>.action-btn</code> class and give it a cool background color and some padding!</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Type exactly: <code>background-color: #333;</code> inside the .action-btn braces.</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" style="background:#0f172a; border-radius:8px;">
    <rect x="60" y="55" width="120" height="40" fill="#334155" rx="20">
        <animate attributeName="fill" values="#334155;#22d3ee;#334155" dur="3s" repeatCount="indefinite"/>
    </rect>
    <text x="120" y="80" fill="#0f172a" font-family="sans-serif" font-size="16" font-weight="bold" text-anchor="middle">BUTTON</text>
</svg>`,
    widgetCode: `<!-- INTERACTIVE MODULE -->
<script>
(function() {
    const editor = document.getElementById('code-editor');
    if (editor) { editor.readOnly = false; editor.style.opacity = "1"; }
})();
</script>`,
    previewScaffold: `<div id="badge">\n  <div class="avatar">👾</div>\n  <h1 id="hero-name">New Recruit</h1>\n  <p class="rank">Level 1 Hacker</p>\n  <button class="action-btn">Scan Network</button>\n</div>`,
    initialCode: `<style>\n  body {\n    background-color: black;\n  }\n  #badge {\n    background-color: #333;\n    padding: 20px;\n    border-radius: 15px;\n    border: 3px solid cyan;\n    text-align: center;\n  }\n  h1 {\n    color: cyan;\n    text-transform: uppercase;\n  }\n  .rank {\n    color: yellow;\n  }\n  .avatar {\n    font-size: 80px;\n  }\n  .action-btn {\n    \n  }\n</style>`,
    preserveCode: true,
    progress: 86,
    validator: function(code) { return code.includes(".action-btn") && /background-color\s*:/i.test(code.substring(code.indexOf(".action-btn"))); }
};