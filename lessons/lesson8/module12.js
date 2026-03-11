window.Lessons.lesson8.modules[11] = {
    title: "12. The Box Sizing Bug",
    body: `<p>Normally, adding padding makes a box wider than its \`width\`! To fix this, we tell the browser to include padding in the width by using \`box-sizing: border-box;\`</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Add \`box-sizing: border-box;\` to the div.</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" style="background:#1e293b; border-radius:8px;">
        <rect x="70" y="25" width="100" height="100" fill="none" stroke="#2dd4bf" stroke-width="6" stroke-dasharray="10,5"/>
        <text x="120" y="80" fill="#2dd4bf" font-family="sans-serif" font-size="16" text-anchor="middle">MOD 12</text>
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
    initialCode: `<style>\n  div {\n    width: 200px;\n    padding: 50px;\n    background: purple;\n    color: white;\n  }\n</style>\n<div>No stretching!</div>`,
    progress: 60,
    validator: function(code) { return code.includes("box-sizing:") && code.includes("border-box"); }
};