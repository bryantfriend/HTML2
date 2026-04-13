window.Lessons.lesson7.modules[2] = {
    title: "3. Paint the Name",
    body: `<p>Now that the portal is open, let's style the <code>h1</code> element. We type the element name, followed by curly braces <code>{}</code>.</p>
    <p>Inside the braces, we write the CSS rules. E.g., <code>color: red;</code> (Don't forget the colon and semicolon!)</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Target h1 and change the <code>color</code> to your absolute favorite! (e.g. green, purple, orange, pink)</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" style="background:#0f172a; border-radius:8px;">
    <text x="120" y="85" fill="#f8fafc" font-family="sans-serif" font-size="32" font-weight="bold" text-anchor="middle">
        <animate attributeName="fill" values="#f8fafc;#22d3ee;#f8fafc" dur="3s" repeatCount="indefinite" />
        H1 COLOR
    </text>
    <circle cx="200" cy="40" r="15" fill="#22d3ee" opacity="0.3">
        <animate attributeName="r" values="15;25;15" dur="3s" repeatCount="indefinite" />
    </circle>
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