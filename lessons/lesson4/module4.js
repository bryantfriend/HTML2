window.Lessons.lesson4.modules[3] = {
    title: "4. Let's add a Cat!",
    body: `<p>Put it all together! Add an image tag with `src="https://placekitten.com/200/200"`</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Write the full image tag.</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" style="background:#1e293b; border-radius:8px;">
        <circle cx="120" cy="75" r="40" fill="#3b82f6" opacity="0.5"/>
        <text x="120" y="80" fill="white" font-family="sans-serif" font-size="20" text-anchor="middle">MODULE 4</text>
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
    progress: 20,
    validator: function(code) { return code.includes("<img") && code.includes("src="); }
};