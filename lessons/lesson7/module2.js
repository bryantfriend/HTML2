window.Lessons.lesson7.modules[1] = {
    title: "2. The <style> Portal",
    body: `<p>To write CSS, we first have to open a portal in our HTML called the <code>&lt;style&gt;</code> tag.</p>
    <p>Everything you type *inside* this tag will be magically translated into beautiful designs by the browser!</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Create an opening &lt;style&gt; tag and a closing &lt;/style&gt; tag on separate lines.</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" style="background:#0f172a; border-radius:8px;">
    <g stroke="#a855f7" stroke-width="3" fill="none" transform="translate(40, 50)">
        <path d="M 30,0 L 0,25 L 30,50">
           <animate attributeName="stroke" values="#a855f7;#ec4899;#a855f7" dur="2s" repeatCount="indefinite"/>
        </path>
        <path d="M 130,0 L 160,25 L 130,50">
           <animate attributeName="stroke" values="#a855f7;#ec4899;#a855f7" dur="2s" repeatCount="indefinite"/>
        </path>
        <text x="35" y="32" fill="#e2e8f0" font-family="monospace" font-size="20" stroke="none">style</text>
    </g>
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
    initialCode: ``,
    preserveCode: false,
    progress: 10,
    validator: function(code) { return code.includes("<style>") && code.includes("</style>"); }
};