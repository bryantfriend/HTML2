window.Lessons.lesson7.modules[7] = {
    title: "8. Text Alignment",
    body: `<p>Our text is stuck to the left side, which doesn't look very uniform for a badge.</p>
    <p>We can use <code>text-align: center;</code> to perfectly align all the text in the middle!</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Type exactly: <code>text-align: center;</code> inside the #badge braces.</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" style="background:#0f172a; border-radius:8px;">
    <rect x="20" y="30" width="100" height="15" fill="#38bdf8" rx="5">
        <animate attributeName="x" values="20;70;20" dur="3s" repeatCount="indefinite" />
    </rect>
    <rect x="20" y="65" width="160" height="15" fill="#a855f7" rx="5">
        <animate attributeName="x" values="20;40;20" dur="3s" repeatCount="indefinite" />
    </rect>
    <rect x="20" y="100" width="60" height="15" fill="#ec4899" rx="5">
        <animate attributeName="x" values="20;90;20" dur="3s" repeatCount="indefinite" />
    </rect>
</svg>`,
    widgetCode: `<!-- INTERACTIVE MODULE -->
<script>
(function() {
    const editor = document.getElementById('code-editor');
    if (editor) { editor.readOnly = false; editor.style.opacity = "1"; }
})();
</script>`,
    previewScaffold: `<div id="badge">\n  <div class="avatar" style="font-size: 50px;">👾</div>\n  <h1 id="hero-name">New Recruit</h1>\n  <p class="rank">Level 1 Hacker</p>\n  <button class="action-btn">Scan Network</button>\n</div>`,
    initialCode: `<style>\n  body {\n    background-color: black;\n  }\n  #badge {\n    background-color: #333;\n    padding: 20px;\n    border-radius: 15px;\n    border: 3px solid cyan;\n  }\n</style>`,
    preserveCode: true,
    progress: 58,
    validator: function(code) { return code.includes("#badge") && /text-align\s*:\s*center/i.test(code); }
};