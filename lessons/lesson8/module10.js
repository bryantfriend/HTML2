window.Lessons.lesson8.modules[9] = {
    title: "10. Border Radius (Curves)",
    body: `<p>Sharp corners are so 1990s! Let's round the corners using \`border-radius\`.</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Add \`border-radius: 10px;\` to the button.</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" style="background:#1e293b; border-radius:8px;">
        <rect x="70" y="25" width="100" height="100" fill="none" stroke="#2dd4bf" stroke-width="6" stroke-dasharray="10,5"/>
        <text x="120" y="80" fill="#2dd4bf" font-family="sans-serif" font-size="16" text-anchor="middle">MOD 10</text>
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
    initialCode: `<style>\n  button {\n    background-color: #3b82f6;\n    color: white;\n    padding: 10px 20px;\n    border: none;\n  }\n</style>\n<button>Click Me</button>`,
    progress: 50,
    validator: function(code) { return code.includes("border-radius:") && code.includes("10px"); }
};