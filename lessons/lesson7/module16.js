window.Lessons.lesson7.modules[15] = {
    title: "16. Cinematic Spacing",
    body: `<p>To make our rank look like a movie poster, we can spread the letters apart.</p>
    <p>We use <code>letter-spacing</code> to add space between characters.</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Type exactly: <code>letter-spacing: 5px;</code> inside the .rank braces.</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" style="background:#0f172a; border-radius:8px;">
    <text x="120" y="85" fill="#a855f7" font-family="sans-serif" font-size="28" font-weight="bold" text-anchor="middle" letter-spacing="0">
        <animate attributeName="letter-spacing" values="0px; 15px; 0px" dur="4s" repeatCount="indefinite" />
        S P A C E
    </text>
</svg>`,
    widgetCode: `<!-- INTERACTIVE MODULE --><script>(function(){const editor=document.getElementById('code-editor');if(editor){editor.readOnly=false;editor.style.opacity="1";}})();</script>`,
    previewScaffold: `<div id="badge">
  <div class="avatar" style="font-size: 50px;">👾</div>
  <h1 id="hero-name">New Recruit</h1>
  <p class="rank">Level 1 Hacker</p>
  <button class="action-btn">Scan Network</button>
</div>`,
    initialCode: `<style>\n  body {\n    background-color: black;\n    font-family: monospace;\n  }\n  #badge {\n    background-color: #333;\n    padding: 20px;\n    border-radius: 15px;\n    border: 3px solid cyan;\n    text-align: center;\n    box-shadow: 0px 0px 20px cyan;\n  }\n  h1 {\n    color: cyan;\n    text-transform: uppercase;\n  }\n  .rank {\n    color: yellow;\n  }\n  .avatar {\n    font-size: 80px;\n  }\n  .action-btn {\n    background-color: cyan;\n    color: black;\n    padding: 10px 20px;\n    font-weight: bold;\n    cursor: pointer;\n  }\n  .action-btn:hover {\n    background-color: white;\n  }\n</style>`,
    preserveCode: true,
    progress: 80,
    validator: function(code) { return code.includes(".rank") && /letter-spacing\s*:/i.test(code.substring(code.indexOf(".rank"))); }
};
