window.Lessons.lesson7.modules[19] = {
    title: "20. The Master Stylist",
    body: `<p>Final challenge! Create a style block. Make the `body` background dark. Make the `h1` centered and green. Make the `.bio` class italic and white.</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Write the full CSS for body, h1, and .bio.</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" style="background:#1e293b; border-radius:8px;">
        <rect x="40" y="40" width="160" height="70" fill="#ec4899" rx="10"/>
        <text x="120" y="80" fill="white" font-family="sans-serif" font-size="16" text-anchor="middle">MODULE 20</text>
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
    initialCode: `<style>\n</style>\n\n<h1>My Profile</h1>\n<p class="bio">I love coding.</p>`,
    progress: 100,
    validator: function(code) { return code.includes("body") && code.includes("h1") && code.includes(".bio") && code.includes("italic"); }
};