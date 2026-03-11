window.Lessons.lesson8.modules[7] = {
    title: "8. Margin vs Padding",
    body: `<p>Remember: Padding expands the inside (background grows). Margin expands the outside (pushes other stuff away).</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Give Box 1 \`margin: 20px;\` and Box 2 \`padding: 20px;\`</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" style="background:#1e293b; border-radius:8px;">
        <rect x="70" y="25" width="100" height="100" fill="none" stroke="#2dd4bf" stroke-width="6" stroke-dasharray="10,5"/>
        <text x="120" y="80" fill="#2dd4bf" font-family="sans-serif" font-size="16" text-anchor="middle">MOD 8</text>
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
    initialCode: `<style>\n  .b1 { background: red; }\n  .b2 { background: blue; color: white; }\n</style>\n<div class="b1">Box 1</div>\n<div class="b2">Box 2</div>`,
    progress: 40,
    validator: function(code) { return code.includes("margin: 20px") && code.includes("padding: 20px"); }
};