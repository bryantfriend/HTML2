window.Lessons.lesson4.modules[5] = {
    title: "6. The alt Attribute",
    body: `<p>If an image breaks, or someone using a screen-reader visits your site, the `alt` attribute tells them what the image is supposed to be.</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Add `alt="A cute cat"` to the image tag.</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" style="background:#1e293b; border-radius:8px;">
        <circle cx="120" cy="75" r="40" fill="#3b82f6" opacity="0.5"/>
        <text x="120" y="80" fill="white" font-family="sans-serif" font-size="20" text-anchor="middle">MODULE 6</text>
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
    progress: 30,
    validator: function(code) { return code.includes('alt='); }
};