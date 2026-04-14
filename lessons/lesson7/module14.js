window.Lessons.lesson7.modules[13] = {
    title: "14. Glowing Shadows",
    body: `<p>For the ultimate cyber effect, we need glow! We use <code>box-shadow</code> to add glow.</p>
    <p>Format: <code>box-shadow: 0px 0px 20px cyan;</code> (X-offset, Y-offset, spread, color).</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Type exactly: <code>box-shadow: 0px 0px 20px cyan;</code> inside the #badge braces.</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" style="background:#0f172a; border-radius:8px;">
    <rect x="70" y="40" width="100" height="70" fill="#1e293b" rx="15" stroke="#22d3ee" stroke-width="2">
        <animate attributeName="filter" values="drop-shadow(0 0 0px #22d3ee); drop-shadow(0 0 25px #22d3ee); drop-shadow(0 0 0px #22d3ee)" dur="3s" repeatCount="indefinite"/>
    </rect>
    <text x="120" y="80" fill="#22d3ee" font-family="monospace" font-size="14" text-anchor="middle">SHADOW</text>
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
    initialCode: `<style>\n  body {\n    background-color: black;\n  }\n  #badge {\n    background-color: #333;\n    padding: 20px;\n    border-radius: 15px;\n    border: 3px solid cyan;\n    text-align: center;\n  }\n  h1 {\n    color: cyan;\n    text-transform: uppercase;\n  }\n  .rank {\n    color: yellow;\n  }\n  .avatar {\n    font-size: 80px;\n  }\n  .action-btn {\n    background-color: cyan;\n    color: black;\n    padding: 10px 20px;\n    font-weight: bold;\n    cursor: pointer;\n  }\n  .action-btn:hover {\n    background-color: white;\n  }\n</style>`,
    preserveCode: true,
    progress: 100,
    validator: function(code) { return code.includes("#badge") && /box-shadow\s*:/i.test(code); }
};