window.Lessons.lesson7.modules[5] = {
    title: "6. Styling the Whole Page",
    body: `<p>What if we want the entire page's background to change? We select the `<body>` tag!</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Add a new selector `body { }` and give it a `background-color: black;`</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" style="background:#1e293b; border-radius:8px;">
        <rect x="40" y="40" width="160" height="70" fill="#ec4899" rx="10"/>
        <text x="120" y="80" fill="white" font-family="sans-serif" font-size="16" text-anchor="middle">MODULE 6</text>
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
    initialCode: `<style>\n  /* add body style here */\n  h1 { color: red; }\n</style>\n\n<h1>Hello</h1>`,
    progress: 30,
    validator: function(code) { return code.includes("body") && code.includes("background-color:") && code.includes("black"); }
};