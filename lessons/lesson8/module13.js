window.Lessons.lesson8.modules[12] = {
    title: "13. Block vs Inline",
    body: `<p>\`&lt;div&gt;\`, \`&lt;h1&gt;\`, and \`&lt;p&gt;\` are BLOCK boxes (take up the whole line). \`&lt;a&gt;\`, \`&lt;span&gt;\`, and \`&lt;button&gt;\` are INLINE boxes (sit next to each other).</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Change the \`&lt;span&gt;\` to act like a block by adding \`display: block;\`</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" style="background:#1e293b; border-radius:8px;">
        <rect x="70" y="25" width="100" height="100" fill="none" stroke="#2dd4bf" stroke-width="6" stroke-dasharray="10,5"/>
        <text x="120" y="80" fill="#2dd4bf" font-family="sans-serif" font-size="16" text-anchor="middle">MOD 13</text>
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
    initialCode: `<style>\n  span {\n    background: yellow;\n  }\n</style>\n<span>I'm inline!</span><span>Me too!</span>`,
    progress: 65,
    validator: function(code) { return code.includes("display:") && code.includes("block"); }
};