window.Lessons.lesson6.modules[16] = {
    title: "17. A Full Table",
    body: `<p>Let's make a two-row table. Row 1: Headers. Row 2: Data.</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Add another `<tr>` with two `<td>` elements.</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" style="background:#1e293b; border-radius:8px;">
        <rect x="40" y="30" width="160" height="90" fill="none" stroke="#fde047" stroke-width="4" rx="4"/>
        <text x="120" y="80" fill="#fde047" font-family="sans-serif" font-size="16" text-anchor="middle">MODULE 17</text>
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
    initialCode: `<table>\n  <tr>\n    <th>Hero</th>\n    <th>Power</th>\n  </tr>\n</table>`,
    progress: 85,
    validator: function(code) { return (code.match(/<tr>/gi)||[]).length >= 2 && code.includes("<td>"); }
};