window.Lessons.lesson8.modules[1] = {
    title: "2. Visualizing the Box",
    body: `<p>Let's put a border on a \`&lt;div&gt;\` so we can see it! We use the \`border\` property.</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Add \`border: 2px solid red;\` to the div.</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" style="background:#1e293b; border-radius:8px;">
        <rect x="70" y="25" width="100" height="100" fill="none" stroke="#2dd4bf" stroke-width="6" stroke-dasharray="10,5"/>
        <text x="120" y="80" fill="#2dd4bf" font-family="sans-serif" font-size="16" text-anchor="middle">MOD 2</text>
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
    initialCode: `<style>\n  div {\n    background-color: yellow;\n  }\n</style>\n<div>I am a box!</div>`,
    progress: 10,
    validator: function(code) { return code.includes("border:") && code.includes("2px solid red"); }
};