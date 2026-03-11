window.Lessons.lesson4.modules[10] = {
    title: "11. Image Formats",
    body: `<p>Images come in different types like `.jpg`, `.png`, and `.gif`. GIFs can be animated!</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Change the src from cat.jpg to dance.gif</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" style="background:#1e293b; border-radius:8px;">
        <circle cx="120" cy="75" r="40" fill="#3b82f6" opacity="0.5"/>
        <text x="120" y="80" fill="white" font-family="sans-serif" font-size="20" text-anchor="middle">MODULE 11</text>
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
    progress: 55,
    validator: function(code) { return code.includes('dance.gif'); }
};