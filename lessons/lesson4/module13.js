window.Lessons.lesson4.modules[12] = {
    title: "13. What about Sound?",
    body: `<p>We can add music or voice clips using the `<audio>` tag. Unlike images, audio tags have an opening and a closing tag.</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Type `<audio>` and `</audio>`.</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" style="background:#1e293b; border-radius:8px;">
        <circle cx="120" cy="75" r="40" fill="#3b82f6" opacity="0.5"/>
        <text x="120" y="80" fill="white" font-family="sans-serif" font-size="20" text-anchor="middle">MODULE 13</text>
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
    progress: 65,
    validator: function(code) { return code.includes('<audio>') && code.includes('</audio>'); }
};