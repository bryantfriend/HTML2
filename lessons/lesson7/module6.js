window.Lessons.lesson7.modules[5] = {
    title: "6. Smooth Edges",
    body: `<p>A sharp square badge is cool, but a rounded badge looks sleek and futuristic!</p>
    <p>We use the <code>border-radius</code> property to round the corners of an element.</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Type exactly: <code>border-radius: 50px;</code> inside the #badge braces.</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" style="background:#0f172a; border-radius:8px;">
    <rect x="70" y="25" width="100" height="100" fill="none" stroke="#22d3ee" stroke-width="4">
        <animate attributeName="rx" values="0;50;0" dur="4s" repeatCount="indefinite" />
        <animate attributeName="stroke" values="#22d3ee;#ec4899;#22d3ee" dur="4s" repeatCount="indefinite" />
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
    initialCode: `<style>\n  body {\n    background-color: black;\n  }\n  #badge {\n    background-color: #333;\n    padding: 20px;\n    border-radius: 15px;\n  }\n</style>`,
    preserveCode: true,
    progress: 40,
    validator: function(code) { return code.includes("#badge") && /border-radius\s*:/i.test(code); }
};