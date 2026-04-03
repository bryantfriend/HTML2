window.Lessons.lesson7.modules[11] = {
    title: "12. Classes!",
    body: `<p>If we only want ONE paragraph to be green, we give it a class: \`<p class="special">\`. In CSS, we select classes using a dot: \`.special\`</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Add \`class="urgent"\` to the first paragraph.</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" style="background:#1e293b; border-radius:8px;">
        <rect x="40" y="40" width="160" height="70" fill="#ec4899" rx="10"/>
        <text x="120" y="80" fill="white" font-family="sans-serif" font-size="16" text-anchor="middle">MODULE 12</text>
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
    initialCode: `<style>\n  .urgent { color: red; }\n</style>\n<p>Make me red!</p>\n<p>Leave me alone.</p>`,
    progress: 60,
    validator: function(code) { return code.includes('class="urgent"'); }
};