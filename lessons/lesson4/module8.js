window.Lessons.lesson4.modules[7] = {
    title: "8. The width Attribute",
    body: `<p>Your cat might be too huge! Use the `width` attribute to set its size in pixels.</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Add `width="100"` to the img tag.</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" style="background:#1e293b; border-radius:8px;">
        <circle cx="120" cy="75" r="40" fill="#3b82f6" opacity="0.5"/>
        <text x="120" y="80" fill="white" font-family="sans-serif" font-size="20" text-anchor="middle">MODULE 8</text>
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
    initialCode: `<img src="cat.jpg">`,
    progress: 40,
    validator: function(code) { return code.includes('width="100"'); }
};