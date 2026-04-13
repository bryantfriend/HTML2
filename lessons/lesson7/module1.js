window.Lessons.lesson7.modules[0] = {
    title: "1. The Power of CSS",
    body: `<p>HTML is the skeleton. CSS (Cascading Style Sheets) is the skin and clothes! Without CSS, the web is just boring black and white text.</p>
    <p>We are going to use CSS to build and design our very own <strong>Cyber Badge</strong>.</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Type READY to log into the designer console.</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" style="background:#1e293b; border-radius:8px;">
        <rect x="40" y="40" width="160" height="70" fill="#ec4899" rx="10"/>
        <text x="120" y="80" fill="white" font-family="sans-serif" font-size="16" text-anchor="middle">MODULE 1</text>
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