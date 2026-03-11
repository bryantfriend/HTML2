window.Lessons.lesson6.modules[4] = {
    title: "5. The <main> Tag",
    body: `<p>The core content of your webpage should be wrapped in the `<main>` tag. There should only be ONE `<main>` tag per page.</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Add an opening and closing `<main>` tag below the header.</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" style="background:#1e293b; border-radius:8px;">
        <rect x="40" y="30" width="160" height="90" fill="none" stroke="#fde047" stroke-width="4" rx="4"/>
        <text x="120" y="80" fill="#fde047" font-family="sans-serif" font-size="16" text-anchor="middle">MODULE 5</text>
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
    initialCode: `<header>\n  <nav><ul><li>Home</li></ul></nav>\n</header>\n\n`,
    progress: 25,
    validator: function(code) { return code.includes("<main>") && code.includes("</main>"); }
};