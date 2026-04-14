window.Lessons.lesson7.modules[6] = {
    title: "7. Neon Borders",
    body: `<p>Let's make our badge pop by adding a solid border. The <code>border</code> property takes three values: thickness, style, and color.</p>
    <p>Example: <code>border: 5px solid red;</code></p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Type exactly: <code>border: 5px solid red;</code> inside the #badge braces.</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" style="background:#0f172a; border-radius:8px;">
    <rect x="50" y="40" width="140" height="70" fill="#1e293b" rx="10" stroke="#facc15" stroke-width="4" stroke-dasharray="10 10">
        <animate attributeName="stroke-dashoffset" values="0;40" dur="2s" repeatCount="indefinite" linear="linear" />
    </rect>
    <text x="120" y="80" fill="#facc15" font-family="sans-serif" font-size="18" text-anchor="middle" font-weight="bold">BORDER</text>
</svg>`,
    widgetCode: `<!-- INTERACTIVE MODULE -->
<script>
(function() {
    const editor = document.getElementById('code-editor');
    if (editor) { editor.readOnly = false; editor.style.opacity = "1"; }
})();
</script>`,
    previewScaffold: `<div id="badge">
  <div class="avatar" style="font-size: 50px;">👾</div>
  <h1 id="hero-name">New Recruit</h1>
  <p class="rank">Level 1 Hacker</p>
  <button class="action-btn">Scan Network</button>
</div>`,
    initialCode: `<style>\n  body {\n    background-color: black;\n  }\n  #badge {\n    background-color: #333;\n    padding: 20px;\n    border-radius: 15px;\n    border: 3px solid cyan;\n  }\n  h1 {\n    color: cyan;\n  }\n</style>`,
    preserveCode: true,
    progress: 50,
    validator: function(code) { return code.includes("#badge") && /border\s*:/i.test(code); }
};