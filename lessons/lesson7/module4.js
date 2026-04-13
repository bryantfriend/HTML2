window.Lessons.lesson7.modules[3] = {
    title: "4. Background Magic",
    body: `<p>Look what you just did! The text color changed instantly. From now on, your code is preserved between steps.</p>
    <p>Now let's style the entire background. The outermost tag on any webpage is the <code>body</code>.</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Target the <code>body</code> tag and give it a <code>background-color</code> of black or darkgray.</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" style="background:#1e293b; border-radius:8px;">
        <rect x="40" y="40" width="160" height="70" fill="#ec4899" rx="10"/>
        <text x="120" y="80" fill="white" font-family="sans-serif" font-size="16" text-anchor="middle">MODULE 4</text>
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
    initialCode: `<style>\n  body {\n    \n  }\n  h1 {\n    color: cyan;\n  }\n</style>`,
    preserveCode: true,
    progress: 22,
    validator: function(code) { return code.includes("body") && /background-color\s*:/i.test(code); }
};