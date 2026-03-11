window.Lessons.lesson8.modules[17] = {
    title: "18. Shorthand Padding",
    body: `<p>\`padding: 10px 20px 30px 40px;\` sets TOP, RIGHT, BOTTOM, LEFT in that order (clockwise).</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Set padding to \`10px 20px;\` (10 top/bottom, 20 left/right)</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" style="background:#1e293b; border-radius:8px;">
        <rect x="70" y="25" width="100" height="100" fill="none" stroke="#2dd4bf" stroke-width="6" stroke-dasharray="10,5"/>
        <text x="120" y="80" fill="#2dd4bf" font-family="sans-serif" font-size="16" text-anchor="middle">MOD 18</text>
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
    initialCode: `<style>\n  .b { background: orange; }\n</style>\n<div class="b">Clockwise</div>`,
    progress: 90,
    validator: function(code) { return code.includes("padding:") && code.includes("10px 20px"); }
};