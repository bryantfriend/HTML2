window.Lessons.lesson4.modules[19] = {
    title: "20. The Media Portfolio Challenge",
    body: `<p>Final boss! Let's combine an image, an audio player, and a video player into one page with headings for each.</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Create an `<h2>` for Image, Audio, and Video, and drop the three tags below them.</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" style="background:#1e293b; border-radius:8px;">
        <circle cx="120" cy="75" r="40" fill="#3b82f6" opacity="0.5"/>
        <text x="120" y="80" fill="white" font-family="sans-serif" font-size="20" text-anchor="middle">MODULE 20</text>
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
    initialCode: `<h2>My Image</h2>\n\n\n<h2>My Song</h2>\n\n\n<h2>My Movie</h2>\n`,
    progress: 100,
    validator: function(code) { return code.includes('<img') && code.includes('<audio') && code.includes('<video'); }
};