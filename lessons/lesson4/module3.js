window.Lessons.lesson4.modules[2] = {
    title: "3. The src Attribute",
    body: `<p>The computer needs to know *which* image to show. We use the `src` (source) attribute to tell it the URL or file name of the image.</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Type `src="cat.jpg"` inside the img tag.</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" style="background:#1e293b; border-radius:8px;">
        <circle cx="120" cy="75" r="40" fill="#3b82f6" opacity="0.5"/>
        <text x="120" y="80" fill="white" font-family="sans-serif" font-size="20" text-anchor="middle">MODULE 3</text>
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
    initialCode: `<img >`,
    progress: 15,
    validator: function(code) { return code.includes('src="cat.jpg"'); }
};