window.Lessons.lesson6.modules[5] = {
    title: "6. The <article> Tag",
    body: `<p>Inside the `<main>` area, you might have a blog post, a news story, or a product. This independent piece of content is an `<article>`.</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Put an `<article>` tag inside `<main>`.</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" style="background:#1e293b; border-radius:8px;">
        <rect x="40" y="30" width="160" height="90" fill="none" stroke="#fde047" stroke-width="4" rx="4"/>
        <text x="120" y="80" fill="#fde047" font-family="sans-serif" font-size="16" text-anchor="middle">MODULE 6</text>
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
    initialCode: `<main>\n</main>`,
    progress: 30,
    validator: function(code) { return code.includes("<article>"); }
};