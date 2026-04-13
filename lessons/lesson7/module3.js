window.Lessons.lesson7.modules[2] = {
    title: "3. Paint the Name",
    body: `<p>Now that the portal is open, let's style the <code>h1</code> element. We type the element name, followed by curly braces <code>{}</code>.</p>
    <p>Inside the braces, we write the CSS rules. E.g., <code>color: red;</code> (Don't forget the colon and semicolon!)</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Target h1 and change the <code>color</code> to your absolute favorite! (e.g. green, purple, orange, pink)</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" style="background:#1e293b; border-radius:8px;">
        <rect x="40" y="40" width="160" height="70" fill="#ec4899" rx="10"/>
        <text x="120" y="80" fill="white" font-family="sans-serif" font-size="16" text-anchor="middle">MODULE 3</text>
    </svg>`,
    widgetCode: `<!-- INTERACTIVE MODULE -->
<script>
(function() {
    const editor = document.getElementById('code-editor');
    if (editor) {
        editor.readOnly = false;
        editor.style.opacity = "1";
    }
})();
</script>`,
    previewScaffold: `<div id="badge">\n  <div class="avatar" style="font-size: 50px;">👾</div>\n  <h1 id="hero-name">New Recruit</h1>\n  <p class="rank">Level 1 Hacker</p>\n  <button class="action-btn">Scan Network</button>\n</div>`,
    initialCode: `<style>\n  h1 {\n    \n  }\n</style>`,
    preserveCode: true,
    progress: 15,
    validator: function(code) { return code.includes("h1") && /color\s*:\s*\w+;?/i.test(code); }
};