window.Lessons.lesson8.modules[3] = {
    title: "4. Padding (Inner Space)",
    body: `<p>The text inside the box is touching the edges! We use \`padding\` to push the text *away* from the inside walls of the box.</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Add \`padding: 20px;\` to the div.</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" style="background:#1e293b; border-radius:8px;">
        <rect x="70" y="25" width="100" height="100" fill="none" stroke="#2dd4bf" stroke-width="6" stroke-dasharray="10,5"/>
        <text x="120" y="80" fill="#2dd4bf" font-family="sans-serif" font-size="16" text-anchor="middle">MOD 4</text>
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
    initialCode: `<style>\n  div {\n    background-color: salmon;\n    border: 2px solid black;\n  }\n</style>\n<div>Give me some space inside!</div>`,
    progress: 20,
    validator: function(code) { return code.includes("padding:") && code.includes("20px"); }
};