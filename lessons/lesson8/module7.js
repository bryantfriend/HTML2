window.Lessons.lesson8.modules[6] = {
    title: "7. Centering a Box",
    body: `<p>A magic trick to center a box in the middle of the screen is giving it a \`width\`, and then using \`margin: 0 auto;\` (which splits the left and right margin equally!).</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Center the box by adding \`margin: 0 auto;\`</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" style="background:#1e293b; border-radius:8px;">
        <rect x="70" y="25" width="100" height="100" fill="none" stroke="#2dd4bf" stroke-width="6" stroke-dasharray="10,5"/>
        <text x="120" y="80" fill="#2dd4bf" font-family="sans-serif" font-size="16" text-anchor="middle">MOD 7</text>
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
    initialCode: `<style>\n  .box {\n    width: 300px;\n    background-color: pink;\n    padding: 20px;\n  }\n</style>\n<div class="box">Center me!</div>`,
    progress: 35,
    validator: function(code) { return code.includes("margin:") && code.includes("0 auto"); }
};