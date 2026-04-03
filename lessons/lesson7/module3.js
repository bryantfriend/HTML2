window.Lessons.lesson7.modules[2] = {
    title: "3. Selecting Elements",
    body: `<p>In CSS, we have to tell the browser *what* we want to style. This is called a **Selector**. Let's select all \`<h1>\` tags.</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Type \`h1 { }\` inside the style tag.</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" style="background:#1e293b; border-radius:8px;">
        <rect x="40" y="40" width="160" height="70" fill="#ec4899" rx="10"/>
        <text x="120" y="80" fill="white" font-family="sans-serif" font-size="16" text-anchor="middle">MODULE 3</text>
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
    initialCode: `<style>\n</style>\n\n<h1>Hello</h1>`,
    progress: 15,
    validator: function(code) { return code.includes("h1") && code.includes("{") && code.includes("}"); }
};