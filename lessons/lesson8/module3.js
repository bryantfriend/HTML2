window.Lessons.lesson8.modules[2] = {
    title: "3. Height and Width",
    body: `<p>By default, a \`&lt;div&gt;\` stretches all the way across the screen! We can shrink it using \`width\` and \`height\`.</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Add \`width: 200px;\` and \`height: 100px;\`</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" style="background:#1e293b; border-radius:8px;">
        <rect x="70" y="25" width="100" height="100" fill="none" stroke="#2dd4bf" stroke-width="6" stroke-dasharray="10,5"/>
        <text x="120" y="80" fill="#2dd4bf" font-family="sans-serif" font-size="16" text-anchor="middle">MOD 3</text>
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
    initialCode: `<style>\n  div {\n    background-color: lightblue;\n  }\n</style>\n<div>Make me smaller!</div>`,
    progress: 15,
    validator: function(code) { return code.includes("width:") && code.includes("200px") && code.includes("height:") && code.includes("100px"); }
};