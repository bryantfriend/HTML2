window.Lessons.lesson7.modules[1] = {
    title: "2. The <style> Portal",
    body: `<p>To write CSS, we first have to open a portal in our HTML called the <code>&lt;style&gt;</code> tag.</p>
    <p>Everything you type *inside* this tag will be magically translated into beautiful designs by the browser!</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Create an opening &lt;style&gt; tag and a closing &lt;/style&gt; tag on separate lines.</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" style="background:#1e293b; border-radius:8px;">
        <rect x="40" y="40" width="160" height="70" fill="#ec4899" rx="10"/>
        <text x="120" y="80" fill="white" font-family="sans-serif" font-size="16" text-anchor="middle">MODULE 2</text>
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