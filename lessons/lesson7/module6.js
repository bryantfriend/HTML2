window.Lessons.lesson7.modules[5] = {
    title: "6. Smooth Edges",
    body: `<p>A sharp square badge is cool, but a rounded badge looks sleek and futuristic!</p>
    <p>We use the <code>border-radius</code> property to round the corners of an element.</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Add a <code>border-radius</code> to <code>#badge</code>. Try 10px, or maybe even 50px!</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" style="background:#1e293b; border-radius:8px;">
        <rect x="40" y="40" width="160" height="70" fill="#ec4899" rx="10"/>
        <text x="120" y="80" fill="white" font-family="sans-serif" font-size="16" text-anchor="middle">MODULE 6</text>
    </svg>`,
    widgetCode: `<!-- INTERACTIVE MODULE -->
<script>
(function() {
    const editor = document.getElementById('code-editor');
    if (editor) { editor.readOnly = false; editor.style.opacity = "1"; }
})();
</script>`,
    previewScaffold: `<div id="badge">\n  <div class="avatar" style="font-size: 50px;">👾</div>\n  <h1 id="hero-name">New Recruit</h1>\n  <p class="rank">Level 1 Hacker</p>\n  <button class="action-btn">Scan Network</button>\n</div>`,
    initialCode: `<style>\n  body {\n    background-color: black;\n  }\n  #badge {\n    background-color: #333;\n    padding: 20px;\n    border-radius: 15px;\n  }\n  h1 {\n    color: cyan;\n  }\n</style>`,
    preserveCode: true,
    progress: 40,
    validator: function(code) { return code.includes("#badge") && /border-radius\s*:/i.test(code); }
};