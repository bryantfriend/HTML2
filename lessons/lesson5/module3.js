window.Lessons.lesson5.modules[2] = {
    title: "3. Text Inputs",
    body: `<p>Inside the form, we can put boxes. The simplest is `<input>`. Notice it doesn't need a closing tag!</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Add an `<input>` tag inside the form.</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" style="background:#1e293b; border-radius:8px;">
        <rect x="40" y="50" width="160" height="30" fill="#3b82f6" opacity="0.5" rx="4"/>
        <text x="120" y="70" fill="white" font-family="sans-serif" font-size="16" text-anchor="middle">MODULE 3</text>
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
    initialCode: `<form>\n</form>`,
    progress: 15,
    validator: function(code) { return code.includes("<input>"); }
};