window.Lessons.lesson7.modules[4] = {
    title: "5. Background Colors",
    body: `<p>We can also change the background behind the text using \`background-color\`.</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Add \`background-color: blue;\` inside the h1 selector.</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" style="background:#1e293b; border-radius:8px;">
        <rect x="40" y="40" width="160" height="70" fill="#ec4899" rx="10"/>
        <text x="120" y="80" fill="white" font-family="sans-serif" font-size="16" text-anchor="middle">MODULE 5</text>
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
    initialCode: `<style>\nh1 {\n  color: white;\n}\n</style>\n\n<h1>Hello</h1>`,
    progress: 25,
    validator: function(code) { return code.includes("background-color:") && code.includes("blue"); }
};