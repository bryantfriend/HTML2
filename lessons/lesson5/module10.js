window.Lessons.lesson5.modules[9] = {
    title: "10. Linking Labels",
    body: `<p>To connect a label to an input, give the input an `id`, and the label a `for` attribute that matches!</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Add `id="user"` to the input, and `for="user"` to the label.</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" style="background:#1e293b; border-radius:8px;">
        <rect x="40" y="50" width="160" height="30" fill="#3b82f6" opacity="0.5" rx="4"/>
        <text x="120" y="70" fill="white" font-family="sans-serif" font-size="16" text-anchor="middle">MODULE 10</text>
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
    initialCode: `<form>\n  <label>Username:</label>\n  <input type="text">\n</form>`,
    progress: 50,
    validator: function(code) { return code.includes('id="user"') && code.includes('for="user"'); }
};