window.Lessons.lesson7.modules[9] = {
    title: "10. Font Sizes",
    body: `<p>Our avatar is just a basic emoji wrapped in a div with <code>class="avatar"</code>.</p>
    <p>Want a massive avatar? You can use <code>font-size</code> to make the emoji gigantic, like <code>font-size: 80px;</code>.</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Type exactly: <code>font-size: 80px;</code> inside the .avatar braces.</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" style="background:#0f172a; border-radius:8px;">
    <g transform="translate(120, 75)">
        <text x="0" y="15" fill="#2dd4bf" font-family="sans-serif" font-size="20" text-anchor="middle">
            <animateTransform attributeName="transform" type="scale" values="1;3;1" dur="4s" repeatCount="indefinite" />
            👾
        </text>
    </g>
</svg>`,
    widgetCode: `<!-- INTERACTIVE MODULE -->
<script>
(function() {
    const editor = document.getElementById('code-editor');
    if (editor) { editor.readOnly = false; editor.style.opacity = "1"; }
})();
</script>`,
    previewScaffold: `<div id="badge">\n  <div class="avatar">👾</div>\n  <h1 id="hero-name">New Recruit</h1>\n  <p class="rank">Level 1 Hacker</p>\n  <button class="action-btn">Scan Network</button>\n</div>`,
    initialCode: `<style>\n  body {\n    background-color: black;\n  }\n  #badge {\n    background-color: #333;\n    padding: 20px;\n    border-radius: 15px;\n    border: 3px solid cyan;\n    text-align: center;\n  }\n  h1 {\n    color: cyan;\n  }\n  .rank {\n    color: yellow;\n  }\n  .avatar {\n    \n  }\n</style>`,
    preserveCode: true,
    progress: 72,
    validator: function(code) { return code.includes(".avatar") && /font-size\s*:/i.test(code.substring(code.indexOf(".avatar"))); }
};