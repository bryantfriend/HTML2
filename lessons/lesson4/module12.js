window.Lessons.lesson4.modules[11] = {
    title: "12. The Ultimate Image Tag",
    body: `<p>Let's put everything together. An image with a source, alt text, and a width.</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Create an img tag with src, alt, and width.</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" style="background:#1e293b; border-radius:8px;">
        <circle cx="120" cy="75" r="40" fill="#3b82f6" opacity="0.5"/>
        <text x="120" y="80" fill="white" font-family="sans-serif" font-size="20" text-anchor="middle">MODULE 12</text>
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
    initialCode: ``,
    progress: 60,
    validator: function(code) { return code.includes('<img') && code.includes('src=') && code.includes('alt=') && code.includes('width='); }
};