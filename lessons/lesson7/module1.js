window.Lessons.lesson7.modules[0] = {
    title: "1. The Power of CSS",
    body: `<p>HTML is the skeleton. CSS (Cascading Style Sheets) is the skin and clothes! Without CSS, the web is just boring black and white text.</p>
    <p>We are going to use CSS to build and design our very own <strong>Cyber Badge</strong>.</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Type READY to log into the designer console.</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" style="background:#0f172a; border-radius:8px;">
    <text x="120" y="80" fill="#67e8f9" font-family="monospace" font-size="28" font-weight="bold" text-anchor="middle">CSS</text>
    <rect x="165" y="55" width="15" height="30" fill="#ec4899">
        <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" />
    </rect>
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
    initialCode: `<!-- Type your response below -->\n\n`,
    preserveCode: false,
    progress: 5,
    validator: function(code) { return code.toUpperCase().includes("READY"); }
};