window.Lessons.lesson8.modules[13] = {
    title: "14. Inline-Block",
    body: `<p>If you want boxes to sit next to each other but still have width and height, use \`display: inline-block;\`</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Give the boxes \`display: inline-block;\` and \`width: 100px;\`</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" style="background:#1e293b; border-radius:8px;">
        <rect x="70" y="25" width="100" height="100" fill="none" stroke="#2dd4bf" stroke-width="6" stroke-dasharray="10,5"/>
        <text x="120" y="80" fill="#2dd4bf" font-family="sans-serif" font-size="16" text-anchor="middle">MOD 14</text>
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
    initialCode: `<style>\n  .box {\n    background: lightgreen;\n    height: 100px;\n    border: 2px solid black;\n  }\n</style>\n<div class="box">1</div>\n<div class="box">2</div>`,
    progress: 70,
    validator: function(code) { return code.includes("display:") && code.includes("inline-block") && code.includes("width:") && code.includes("100px"); }
};