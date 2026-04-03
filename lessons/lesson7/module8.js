window.Lessons.lesson7.modules[7] = {
    title: "8. Font Size",
    body: `<p>Let's make text huge! We use the \`font-size\` property, usually measured in pixels (\`px\`).</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Set the \`font-size\` of the h1 to \`50px;\`</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" style="background:#1e293b; border-radius:8px;">
        <rect x="40" y="40" width="160" height="70" fill="#ec4899" rx="10"/>
        <text x="120" y="80" fill="white" font-family="sans-serif" font-size="16" text-anchor="middle">MODULE 8</text>
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
    initialCode: `<style>\n  h1 {\n    color: blue;\n  }\n</style>\n<h1>Small</h1>`,
    progress: 40,
    validator: function(code) { return code.includes("font-size:") && code.includes("50px"); }
};