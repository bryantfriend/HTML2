window.Lessons.lesson7.modules[14] = {
    title: "15. Bold and Italic in CSS",
    body: `<p>We can make things bold using \`font-weight: bold;\` and italic using \`font-style: italic;\`</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Make the \`<p>\` bold.</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" style="background:#1e293b; border-radius:8px;">
        <rect x="40" y="40" width="160" height="70" fill="#ec4899" rx="10"/>
        <text x="120" y="80" fill="white" font-family="sans-serif" font-size="16" text-anchor="middle">MODULE 15</text>
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
    initialCode: `<style>\n  p { }\n</style>\n<p>Normal text</p>`,
    progress: 75,
    validator: function(code) { return code.includes("font-weight:") && code.includes("bold"); }
};