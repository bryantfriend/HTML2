window.Lessons.lesson7.modules[16] = {
    title: "17. Letter Spacing",
    body: `<p>Spread your letters out with `letter-spacing: 5px;`</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Give the h1 5px of letter spacing.</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" style="background:#1e293b; border-radius:8px;">
        <rect x="40" y="40" width="160" height="70" fill="#ec4899" rx="10"/>
        <text x="120" y="80" fill="white" font-family="sans-serif" font-size="16" text-anchor="middle">MODULE 17</text>
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
    initialCode: `<style>\n  h1 { }\n</style>\n<h1>WIDE</h1>`,
    progress: 85,
    validator: function(code) { return code.includes("letter-spacing:") && code.includes("5px"); }
};