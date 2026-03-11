window.Lessons.lesson6.modules[18] = {
    title: "19. Grouping Table Sections",
    body: `<p>Just like a whole page, tables have `<thead>`, `<tbody>`, and `<tfoot>` to group rows together semantically.</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Wrap the first row in `<thead>` and the second in `<tbody>`.</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" style="background:#1e293b; border-radius:8px;">
        <rect x="40" y="30" width="160" height="90" fill="none" stroke="#fde047" stroke-width="4" rx="4"/>
        <text x="120" y="80" fill="#fde047" font-family="sans-serif" font-size="16" text-anchor="middle">MODULE 19</text>
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
    initialCode: `<table>\n  <tr><th>Hero</th></tr>\n  <tr><td>Batman</td></tr>\n</table>`,
    progress: 95,
    validator: function(code) { return code.includes("<thead>") && code.includes("<tbody>"); }
};