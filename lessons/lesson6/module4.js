window.Lessons.lesson6.modules[3] = {
    title: "4. Building the Menu",
    body: `<p>To make a real menu, we combine `<nav>` with the unordered list `<ul>` we learned earlier!</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Add a `<ul>` with two `<li>` items inside the `<nav>`.</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" style="background:#1e293b; border-radius:8px;">
        <rect x="40" y="30" width="160" height="90" fill="none" stroke="#fde047" stroke-width="4" rx="4"/>
        <text x="120" y="80" fill="#fde047" font-family="sans-serif" font-size="16" text-anchor="middle">MODULE 4</text>
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
    initialCode: `<header>\n  <nav>\n  </nav>\n</header>`,
    progress: 20,
    validator: function(code) { return code.includes("<ul>") && (code.match(/<li>/gi)||[]).length >= 2; }
};