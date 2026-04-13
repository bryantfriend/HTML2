window.Lessons.lesson7.modules[12] = {
    title: "13. Magic Hover Action!",
    body: `<p>We can make CSS respond to our mouse! If we add <code>:hover</code> to a selector, the rules only apply when the mouse is over it.</p>
    <p>Example: <code>.action-btn:hover { background-color: white; }</code></p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Type exactly: <code>background-color: white;</code> inside the .action-btn:hover braces.</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" style="background:#0f172a; border-radius:8px;">
    <rect x="50" y="60" width="140" height="40" fill="#22d3ee" rx="8">
        <animate attributeName="fill" values="#22d3ee;#ffffff;#22d3ee" dur="3s" repeatCount="indefinite"/>
    </rect>
    <text x="120" y="85" fill="#0f172a" font-family="sans-serif" font-size="16" font-weight="bold" text-anchor="middle">HOVER ME</text>
    
    <g transform="translate(190, 120)">
        <animateTransform attributeName="transform" type="translate" values="0,0; -70,-35; 0,0" dur="3s" repeatCount="indefinite" />
        <path d="M0,0 L15,5 L10,12 L18,22 L14,25 L6,15 L0,22 Z" fill="white" stroke="black" stroke-width="1.5" />
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
    initialCode: `<style>\n  body {\n    background-color: black;\n  }\n  #badge {\n    background-color: #333;\n    padding: 20px;\n    border-radius: 15px;\n    border: 3px solid cyan;\n    text-align: center;\n  }\n  h1 {\n    color: cyan;\n    text-transform: uppercase;\n  }\n  .rank {\n    color: yellow;\n  }\n  .avatar {\n    font-size: 80px;\n  }\n  .action-btn {\n    background-color: cyan;\n    color: black;\n    padding: 10px 20px;\n    font-weight: bold;\n    cursor: pointer;\n  }\n  .action-btn:hover {\n    \n  }\n</style>`,
    preserveCode: true,
    progress: 93,
    validator: function(code) { return code.includes(".action-btn:hover") && code.includes("background-color"); }
};