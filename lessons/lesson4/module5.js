window.Lessons.lesson4.modules[4] = {
    title: "5. Broken Images",
    body: `<p>If you spell the file name wrong, the image breaks! Try spelling it 'cot.jpg' to see what happens.</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Make a broken image.</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" style="background:#1e293b; border-radius:8px;">
        <circle cx="120" cy="75" r="40" fill="#3b82f6" opacity="0.5"/>
        <text x="120" y="80" fill="white" font-family="sans-serif" font-size="20" text-anchor="middle">MODULE 5</text>
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
    progress: 25,
    validator: function(code) { return code.includes('cot.jpg'); }
};