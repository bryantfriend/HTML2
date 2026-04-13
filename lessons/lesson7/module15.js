window.Lessons.lesson7.modules[14] = {
    title: "15. Hacker Fonts",
    body: `<p>A cyber badge needs a proper terminal font.</p>
    <p>By changing the <code>font-family</code>, we can make our text look like code!</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Type exactly: <code>font-family: monospace;</code> inside the body braces.</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" style="background:#0f172a; border-radius:8px;">
    <text x="120" y="85" fill="#f472b6" font-family="serif" font-size="30" font-weight="bold" text-anchor="middle">
        <animate attributeName="font-family" values="serif;sans-serif;monospace;serif" dur="4s" repeatCount="indefinite" calcMode="discrete"/>
        FONT STYLE
    </text>
</svg>`,
    widgetCode: `<!-- INTERACTIVE MODULE --><script>(function(){const editor=document.getElementById('code-editor');if(editor){editor.readOnly=false;editor.style.opacity="1";}})();</script>`,
    previewScaffold: `<div id="badge">\n  <div class="avatar">👾</div>\n  <h1 id="hero-name">New Recruit</h1>\n  <p class="rank">Level 1 Hacker</p>\n  <button class="action-btn">Scan Network</button>\n</div>`,
    initialCode: `<style>\n  body {\n    background-color: black;\n  }\n  #badge {\n    background-color: #333;\n    padding: 20px;\n    border-radius: 15px;\n    border: 3px solid cyan;\n    text-align: center;\n    box-shadow: 0px 0px 20px cyan;\n  }\n  h1 {\n    color: cyan;\n    text-transform: uppercase;\n  }\n  .rank {\n    color: yellow;\n  }\n  .avatar {\n    font-size: 80px;\n  }\n  .action-btn {\n    background-color: cyan;\n    color: black;\n    padding: 10px 20px;\n    font-weight: bold;\n    cursor: pointer;\n  }\n  .action-btn:hover {\n    background-color: white;\n  }\n</style>`,
    preserveCode: true,
    progress: 75,
    validator: function(code) { return code.includes("body") && /font-family\s*:\s*monospace/i.test(code); }
};
