window.Lessons.lesson5.modules[19] = {
    title: "20. The Contact Form Challenge",
    body: `<p>Final boss! Build a contact form.</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Create a `<form>` containing a text input for name, a `<textarea>` for the message, and a `<button>`.</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" style="background:#1e293b; border-radius:8px;">
        <rect x="40" y="50" width="160" height="30" fill="#3b82f6" opacity="0.5" rx="4"/>
        <text x="120" y="70" fill="white" font-family="sans-serif" font-size="16" text-anchor="middle">MODULE 20</text>
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
    initialCode: `<h2>Contact Me</h2>\n\n`,
    progress: 100,
    validator: function(code) { return code.includes('<form') && code.includes('<input') && code.includes('<textarea'); }
};