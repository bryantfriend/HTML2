window.Lessons.lesson7.modules[9] = {
    title: "10. Text Align",
    body: `<p>To center text, use `text-align: center;`</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Center the h1.</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" style="background:#1e293b; border-radius:8px;">
        <rect x="40" y="40" width="160" height="70" fill="#ec4899" rx="10"/>
        <text x="120" y="80" fill="white" font-family="sans-serif" font-size="16" text-anchor="middle">MODULE 10</text>
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
    initialCode: `<style>\n  h1 { }\n</style>\n<h1>Left Side</h1>`,
    progress: 50,
    validator: function(code) { return code.includes("text-align:") && code.includes("center"); }
};