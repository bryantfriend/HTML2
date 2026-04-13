window.Lessons.lesson7.modules[18] = {
    title: "19. Breathing Space",
    body: `<p>Our badge looks great, but let's push it down a bit from the top of the screen.</p>
    <p>Using <code>margin-top</code>, we can add invisible space *outside* our element to push it around.</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Type exactly: <code>margin-top: 50px;</code> inside the #badge braces.</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" style="background:#0f172a; border-radius:8px;">
    <line x1="40" y1="20" x2="200" y2="20" stroke="#475569" stroke-width="4" stroke-dasharray="5 5" />
    <rect x="70" y="20" width="100" height="60" fill="#ec4899" rx="10">
        <animate attributeName="y" values="20; 60; 20" dur="4s" repeatCount="indefinite" />
    </rect>
    <path d="M 120,25 L 120,50 L 110,40 M 120,50 L 130,40" stroke="#f8fafc" stroke-width="3" fill="none">
        <animate attributeName="opacity" values="0; 1; 0" dur="4s" repeatCount="indefinite" />
    </path>
</svg>`,
    widgetCode: `<!-- INTERACTIVE MODULE --><script>(function(){const editor=document.getElementById('code-editor');if(editor){editor.readOnly=false;editor.style.opacity="1";}})();</script>`,
    previewScaffold: `<div id="badge">\n  <div class="avatar">👾</div>\n  <h1 id="hero-name">New Recruit</h1>\n  <p class="rank">Level 1 Hacker</p>\n  <button class="action-btn">Scan Network</button>\n</div>`,
    initialCode: `<style>\n  body {\n    background-color: black;\n    font-family: monospace;\n  }\n  #badge {\n    background-color: #333;\n    padding: 20px;\n    border-radius: 15px;\n    border: 3px solid cyan;\n    text-align: center;\n    box-shadow: 0px 0px 20px cyan;\n  }\n  h1 {\n    color: cyan;\n    text-transform: uppercase;\n    font-style: italic;\n  }\n  .rank {\n    color: yellow;\n    letter-spacing: 5px;\n    font-weight: bold;\n  }\n  .avatar {\n    font-size: 80px;\n  }\n  .action-btn {\n    background-color: cyan;\n    color: black;\n    padding: 10px 20px;\n    font-weight: bold;\n    cursor: pointer;\n  }\n  .action-btn:hover {\n    background-color: white;\n  }\n</style>`,
    preserveCode: true,
    progress: 95,
    validator: function(code) { return code.includes("#badge") && /margin-top\s*:/i.test(code.substring(code.indexOf("#badge"))); }
};
