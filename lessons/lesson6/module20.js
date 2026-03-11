window.Lessons.lesson6.modules[19] = {
    title: "20. Challenge: The Perfect Semantic Page",
    body: `<p>Ready to prove you're a master? Build a valid, semantic webpage shell.</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Create a page with a `<header>`, a `<nav>`, a `<main>`, an `<article>`, and a `<footer>`.</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" style="background:#1e293b; border-radius:8px;">
        <rect x="40" y="30" width="160" height="90" fill="none" stroke="#fde047" stroke-width="4" rx="4"/>
        <text x="120" y="80" fill="#fde047" font-family="sans-serif" font-size="16" text-anchor="middle">MODULE 20</text>
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
    initialCode: `<!-- Build the semantic shell! -->\n`,
    progress: 100,
    validator: function(code) { return code.includes("<header") && code.includes("<nav") && code.includes("<main") && code.includes("<article") && code.includes("<footer"); }
};