window.Lessons.lesson7.modules[4] = {
    title: "5. Styling the Badge",
    body: `<p>To be more specific, HTML tags can have an <code>id</code>. Our badge wrapper has <code>id="badge"</code>.</p>
    <p>In CSS, we select an ID by putting a hashtag (<code>#</code>) in front of its name: <code>#badge</code>.</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Target <code>#badge</code> and give it a different <code>background-color</code>! Also try adding <code>padding: 20px;</code> so it has space inside.</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" style="background:#1e293b; border-radius:8px;">
        <rect x="40" y="40" width="160" height="70" fill="#ec4899" rx="10"/>
        <text x="120" y="80" fill="white" font-family="sans-serif" font-size="16" text-anchor="middle">MODULE 5</text>
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
    initialCode: `<style>\n  body {\n    background-color: black;\n  }\n  #badge {\n    \n  }\n  h1 {\n    color: cyan;\n  }\n</style>`,
    preserveCode: true,
    progress: 30,
    validator: function(code) { return code.includes("#badge") && /background-color\s*:/i.test(code); }
};