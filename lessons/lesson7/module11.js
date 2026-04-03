window.Lessons.lesson7.modules[10] = {
    title: "11. Selecting Multiple Things",
    body: `<p>What if we have multiple paragraphs? \`p { color: green; }\` will turn ALL \`<p>\` tags green!</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Make all \`<p>\` tags green.</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" style="background:#1e293b; border-radius:8px;">
        <rect x="40" y="40" width="160" height="70" fill="#ec4899" rx="10"/>
        <text x="120" y="80" fill="white" font-family="sans-serif" font-size="16" text-anchor="middle">MODULE 11</text>
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
    initialCode: `<style>\n</style>\n<p>One</p>\n<p>Two</p>`,
    progress: 55,
    validator: function(code) { return code.includes("p {") && code.includes("color:") && code.includes("green"); }
};