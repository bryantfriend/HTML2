window.Lessons.lesson8.modules[19] = {
    title: "20. The Ultimate Box Challenge",
    body: `<p>Build a beautiful card! A centered box, with a solid border, rounded corners, inner padding, and margin to push it off the screen edges.</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Complete the \`.card\` classes CSS according to the instructions.</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" style="background:#1e293b; border-radius:8px;">
        <rect x="70" y="25" width="100" height="100" fill="none" stroke="#2dd4bf" stroke-width="6" stroke-dasharray="10,5"/>
        <text x="120" y="80" fill="#2dd4bf" font-family="sans-serif" font-size="16" text-anchor="middle">MOD 20</text>
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
    initialCode: `<style>\n  .card {\n    width: 300px;\n    background: #1e293b;\n    color: white;\n    /* add margin auto, 20px padding, 15px radius, 2px solid cyan border */\n  }\n</style>\n<div class="card"><h2>Profile</h2><p>I am a card.</p></div>`,
    progress: 100,
    validator: function(code) { return code.includes("margin:") && code.includes("auto") && code.includes("padding:") && code.includes("20px") && code.includes("radius:") && code.includes("border:"); }
};