window.Lessons.lesson6.modules[8] = {
    title: "9. Sections vs Articles",
    body: `<p>A `<section>` groups related things together. An `<article>` makes sense all on its own. Often, an article contains multiple sections!</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Put two `<section>` tags inside the `<article>`.</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" style="background:#1e293b; border-radius:8px;">
        <rect x="40" y="30" width="160" height="90" fill="none" stroke="#fde047" stroke-width="4" rx="4"/>
        <text x="120" y="80" fill="#fde047" font-family="sans-serif" font-size="16" text-anchor="middle">MODULE 9</text>
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
    initialCode: `<article>\n  <h2>My Blog</h2>\n</article>`,
    progress: 45,
    validator: function(code) { return (code.match(/<section>/gi)||[]).length >= 2; }
};