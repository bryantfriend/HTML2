window.Lessons.lesson7.modules[7] = {
    title: "8. Text Alignment",
    body: `<p>Our text is stuck to the left side, which doesn't look very uniform for a badge.</p>
    <p>We can use <code>text-align: center;</code> to perfectly align all the text in the middle!</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Add <code>text-align: center;</code> to the <code>#badge</code> block.</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" style="background:#1e293b; border-radius:8px;">
        <rect x="40" y="40" width="160" height="70" fill="#ec4899" rx="10"/>
        <text x="120" y="80" fill="white" font-family="sans-serif" font-size="16" text-anchor="middle">MODULE 8</text>
    </svg>`,
    widgetCode: `<!-- INTERACTIVE MODULE -->
<script>
(function() {
    const editor = document.getElementById('code-editor');
    if (editor) { editor.readOnly = false; editor.style.opacity = "1"; }
})();
</script>`,
    previewScaffold: `<div id="badge">\n  <div class="avatar" style="font-size: 50px;">👾</div>\n  <h1 id="hero-name">New Recruit</h1>\n  <p class="rank">Level 1 Hacker</p>\n  <button class="action-btn">Scan Network</button>\n</div>`,
    initialCode: `<style>\n  body {\n    background-color: black;\n  }\n  #badge {\n    background-color: #333;\n    padding: 20px;\n    border-radius: 15px;\n    border: 3px solid cyan;\n    text-align: center;\n  }\n  h1 {\n    color: cyan;\n  }\n</style>`,
    preserveCode: true,
    progress: 58,
    validator: function(code) { return code.includes("#badge") && /text-align\s*:\s*center/i.test(code); }
};