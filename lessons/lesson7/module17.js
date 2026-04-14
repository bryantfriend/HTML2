window.Lessons.lesson7.modules[16] = {
    title: "17. Bold Statements",
    body: `<p>Our rank is spaced out, but the lines are too thin!</p>
    <p>Using <code>font-weight</code> we can control how thick the words are.</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Type exactly: <code>font-weight: bold;</code> inside the .action-btn braces.</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" style="background:#0f172a; border-radius:8px;">
    <text x="120" y="85" fill="#fbbf24" font-family="sans-serif" font-size="32" stroke="#fbbf24" stroke-width="0" text-anchor="middle">
        <animate attributeName="stroke-width" values="0;4;0" dur="2s" repeatCount="indefinite" />
        BOLD
    </text>
</svg>`,
    widgetCode: `<!-- INTERACTIVE MODULE --><script>(function(){const editor=document.getElementById('code-editor');if(editor){editor.readOnly=false;editor.style.opacity="1";}})();</script>`,
    previewScaffold: `<div id="badge">
  <div class="avatar" style="font-size: 50px;">👾</div>
  <h1 id="hero-name">New Recruit</h1>
  <p class="rank">Level 1 Hacker</p>
  <button class="action-btn">Scan Network</button>
</div>`,
    initialCode: `<style>\n  body {\n    background-color: black;\n    font-family: monospace;\n  }\n  #badge {\n    background-color: #333;\n    padding: 20px;\n    border-radius: 15px;\n    border: 3px solid cyan;\n    text-align: center;\n    box-shadow: 0px 0px 20px cyan;\n  }\n  h1 {\n    color: cyan;\n    text-transform: uppercase;\n  }\n  .rank {\n    color: yellow;\n    letter-spacing: 5px;\n  }\n  .avatar {\n    font-size: 80px;\n  }\n  .action-btn {\n    background-color: cyan;\n    color: black;\n    padding: 10px 20px;\n    font-weight: bold;\n    cursor: pointer;\n  }\n  .action-btn:hover {\n    background-color: white;\n  }\n</style>`,
    preserveCode: true,
    progress: 85,
    validator: function(code) { return code.includes(".rank") && /font-weight\s*:\s*bold/i.test(code.substring(code.indexOf(".rank"))); }
};
