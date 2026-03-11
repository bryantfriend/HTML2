window.Lessons.lesson7.modules[13] = {
    title: "14. IDs vs Classes",
    body: `<p>Classes can be used many times. IDs (`id="main"`) can only be used ONCE per page. In CSS, we select IDs with a hashtag: `#main`</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Style the ID `#title` to have `color: gold;`</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" style="background:#1e293b; border-radius:8px;">
        <rect x="40" y="40" width="160" height="70" fill="#ec4899" rx="10"/>
        <text x="120" y="80" fill="white" font-family="sans-serif" font-size="16" text-anchor="middle">MODULE 14</text>
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
    initialCode: `<style>\n</style>\n<h1 id="title">Golden</h1>`,
    progress: 70,
    validator: function(code) { return code.includes("#title") && code.includes("color:") && code.includes("gold"); }
};