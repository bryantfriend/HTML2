window.Lessons.lesson7.modules[19] = {
    title: "20. Master Stylist",
    body: `<p>You have styled a complete interactive character badge using sheer CSS power! ✨</p>
    <p>Before you ship this, add one final personal touch. Once you are happy with the Masterpiece, you can deploy it.</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Add one last rule anywhere (like color, background, font-size, etc.) and type <strong class="text-pink-400">DEPLOY</strong> somewhere in your code as a comment to finish!</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" style="background:#1e293b; border-radius:8px;">
        <rect x="40" y="40" width="160" height="70" fill="#ec4899" rx="10"/>
        <text x="120" y="80" fill="white" font-family="sans-serif" font-size="16" text-anchor="middle">MODULE 20</text>
    </svg>`,
    widgetCode: `<!-- INTERACTIVE MODULE --><script>(function(){const editor=document.getElementById('code-editor');if(editor){editor.readOnly=false;editor.style.opacity="1";}})();</script>`,
    previewScaffold: `<div id="badge">\n  <div class="avatar">👾</div>\n  <h1 id="hero-name">New Recruit</h1>\n  <p class="rank">Level 1 Hacker</p>\n  <button class="action-btn">Scan Network</button>\n</div>`,
    initialCode: `<style>\n  body {\n    background-color: black;\n    font-family: monospace;\n  }\n  #badge {\n    background-color: #333;\n    padding: 20px;\n    border-radius: 15px;\n    border: 3px solid cyan;\n    text-align: center;\n    box-shadow: 0px 0px 20px cyan;\n    margin-top: 40px;\n  }\n  h1 {\n    color: cyan;\n    text-transform: uppercase;\n    font-style: italic;\n  }\n  .rank {\n    color: yellow;\n    letter-spacing: 5px;\n    font-weight: bold;\n  }\n  .avatar {\n    font-size: 80px;\n  }\n  .action-btn {\n    background-color: cyan;\n    color: black;\n    padding: 10px 20px;\n    font-weight: bold;\n    cursor: pointer;\n  }\n  .action-btn:hover {\n    background-color: white;\n  }\n</style>`,
    preserveCode: true,
    progress: 100,
    validator: function(code) { return code.toUpperCase().includes("DEPLOY"); }
};
