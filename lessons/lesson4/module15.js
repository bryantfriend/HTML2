window.Lessons.lesson4.modules[14] = {
    title: "15. The controls Attribute",
    body: `<p>If you don't add the word `controls` inside the audio tag, the player will be invisible! This is a boolean attribute, it doesn't need an equals sign.</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Add `controls` inside the opening `<audio>` tag.</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" style="background:#1e293b; border-radius:8px;">
        <circle cx="120" cy="75" r="40" fill="#3b82f6" opacity="0.5"/>
        <text x="120" y="80" fill="white" font-family="sans-serif" font-size="20" text-anchor="middle">MODULE 15</text>
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
    initialCode: `<audio src="music.mp3">\n</audio>`,
    progress: 75,
    validator: function(code) { return code.includes('controls'); }
};