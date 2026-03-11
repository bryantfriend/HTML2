window.Lessons.lesson8.modules[15] = {
    title: "16. Review: Padding",
    body: `<p>To give text breathing room inside its box?</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Add 30px of padding.</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" style="background:#1e293b; border-radius:8px;">
        <rect x="70" y="25" width="100" height="100" fill="none" stroke="#2dd4bf" stroke-width="6" stroke-dasharray="10,5"/>
        <text x="120" y="80" fill="#2dd4bf" font-family="sans-serif" font-size="16" text-anchor="middle">MOD 16</text>
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
    initialCode: `<style>\n  .b { background: pink; }\n</style>\n<div class="b">Give me inner space</div>`,
    progress: 80,
    validator: function(code) { return code.includes("padding:") && code.includes("30px"); }
};