window.Lessons.lesson7.modules[3] = {
    title: "4. Background Magic",
    body: `<p>Look what you just did! The text color changed instantly. From now on, your code is preserved between steps.</p>
    <p>Now let's style the entire background. The outermost tag on any webpage is the <code>body</code>.</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Type exactly: <code>body { background-color: black; }</code></p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" style="background:#0f172a; border-radius:8px;">
    <rect x="0" y="0" width="240" height="150" fill="#0f172a">
        <animate attributeName="fill" values="#0f172a;#1e1b4b;#0f172a" dur="4s" repeatCount="indefinite" />
    </rect>
    <g stroke="rgba(255,255,255,0.1)" stroke-width="1">
        <line x1="0" y1="50" x2="240" y2="50"/>
        <line x1="0" y1="100" x2="240" y2="100"/>
        <line x1="80" y1="0" x2="80" y2="150"/>
        <line x1="160" y1="0" x2="160" y2="150"/>
    </g>
    <text x="120" y="80" fill="#a855f7" font-family="monospace" font-size="20" text-anchor="middle">body { bg }</text>
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
    previewScaffold: `<div id="badge">
  <div class="avatar" style="font-size: 50px;">👾</div>
  <h1 id="hero-name">New Recruit</h1>
  <p class="rank">Level 1 Hacker</p>
  <button class="action-btn">Scan Network</button>
</div>`,
    initialCode: `<style>\n  body {\n    \n  }\n</style>`,
    preserveCode: true,
    progress: 22,
    validator: function(code) { return code.includes("body") && /background-color\s*:/i.test(code); }
};