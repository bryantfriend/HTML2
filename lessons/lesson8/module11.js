window.Lessons.lesson8.modules[10] = {
    title: "11. Perfect Circles",
    body: `<p>If you have a square box (same width and height) and give it \`border-radius: 50%;\`, it becomes a perfect circle!</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Make the box a circle with \`border-radius: 50%;\`</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" style="background:#1e293b; border-radius:8px;">
        <rect x="70" y="25" width="100" height="100" fill="none" stroke="#2dd4bf" stroke-width="6" stroke-dasharray="10,5"/>
        <text x="120" y="80" fill="#2dd4bf" font-family="sans-serif" font-size="16" text-anchor="middle">MOD 11</text>
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
    initialCode: `<style>\n  .circle {\n    width: 100px;\n    height: 100px;\n    background-color: red;\n  }\n</style>\n<div class="circle"></div>`,
    progress: 55,
    validator: function(code) { return code.includes("border-radius:") && code.includes("50%"); }
};