window.Lessons.lesson7.modules[6] = {
    title: "7. Using Hex Colors",
    body: `<p>Words like 'red' and 'blue' are boring. We can use specific Hex color codes like `#FF5733` (a nice orange)!</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Change the h1 color to `#FF5733;`</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" style="background:#1e293b; border-radius:8px;">
        <rect x="40" y="40" width="160" height="70" fill="#ec4899" rx="10"/>
        <text x="120" y="80" fill="white" font-family="sans-serif" font-size="16" text-anchor="middle">MODULE 7</text>
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
    initialCode: `<style>\n  h1 { color: red; }\n</style>\n<h1>Hello</h1>`,
    progress: 35,
    validator: function(code) { return code.toLowerCase().includes("#ff5733"); }
};