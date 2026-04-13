window.Lessons.lesson7.modules[10] = {
    title: "11. Text Transformations",
    body: `<p>A cyber badge's name should look authoritative.</p>
    <p>Using <code>text-transform: uppercase;</code> forces all letters to be capitalized, no matter how they were typed in the HTML!</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Target <code>#hero-name</code> and set its <code>text-transform</code> to <code>uppercase</code>.</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" style="background:#1e293b; border-radius:8px;">
        <rect x="40" y="40" width="160" height="70" fill="#ec4899" rx="10"/>
        <text x="120" y="80" fill="white" font-family="sans-serif" font-size="16" text-anchor="middle">MODULE 11</text>
    </svg>`,
    widgetCode: `<!-- INTERACTIVE MODULE -->
<script>
(function() {
    const editor = document.getElementById('code-editor');
    if (editor) { editor.readOnly = false; editor.style.opacity = "1"; }
})();
</script>`,
    previewScaffold: `<div id="badge">\n  <div class="avatar">👾</div>\n  <h1 id="hero-name">New Recruit</h1>\n  <p class="rank">Level 1 Hacker</p>\n  <button class="action-btn">Scan Network</button>\n</div>`,
    initialCode: `<style>\n  body {\n    background-color: black;\n  }\n  #badge {\n    background-color: #333;\n    padding: 20px;\n    border-radius: 15px;\n    border: 3px solid cyan;\n    text-align: center;\n  }\n  h1 {\n    color: cyan;\n  }\n  .rank {\n    color: yellow;\n  }\n  .avatar {\n    font-size: 80px;\n  }\n  #hero-name {\n    \n  }\n</style>`,
    preserveCode: true,
    progress: 79,
    validator: function(code) { return code.includes("#hero-name") && /text-transform\s*:\s*uppercase/i.test(code); }
};