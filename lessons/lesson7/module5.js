window.Lessons.lesson7.modules[4] = {
    title: "5. Styling the Badge",
    body: `<p>To be more specific, HTML tags can have an <code>id</code>. Our badge wrapper has <code>id="badge"</code>.</p>
    <p>In CSS, we select an ID by putting a hashtag (<code>#</code>) in front of its name: <code>#badge</code>.</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Type exactly: <code>#badge { background-color: #333; padding: 20px; }</code></p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" style="background:#0f172a; border-radius:8px;">
    <rect x="40" y="30" width="160" height="90" fill="#1e293b" rx="5" stroke="#334155" stroke-width="2">
        <animate attributeName="fill" values="#1e293b;#334155;#1e293b" dur="2s" repeatCount="indefinite" />
    </rect>
    <text x="120" y="80" fill="#cbd5e1" font-family="monospace" font-size="20" text-anchor="middle">#badge</text>
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
    initialCode: `<style>\n  body {\n    background-color: black;\n  }\n  #badge {\n    \n  }\n</style>`,
    preserveCode: true,
    progress: 30,
    validator: function(code) { return code.includes("#badge") && /background-color\s*:/i.test(code); }
};