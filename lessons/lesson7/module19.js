window.Lessons.lesson7.modules[18] = {
    title: "19. The Important Flag",
    body: `<p>If something absolutely refuses to change color, you can force it by adding \`!important\` before the semicolon.</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Force the color: \`color: pink !important;\`</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" style="background:#1e293b; border-radius:8px;">
        <rect x="40" y="40" width="160" height="70" fill="#ec4899" rx="10"/>
        <text x="120" y="80" fill="white" font-family="sans-serif" font-size="16" text-anchor="middle">MODULE 19</text>
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
    initialCode: `<style>\n  h1 { color: black; }\n  .pink-text { color: pink; }\n</style>\n<h1 class="pink-text">Force me pink!</h1>`,
    progress: 95,
    validator: function(code) { return code.includes("!important"); }
};