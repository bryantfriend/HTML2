window.Lessons.lesson7.modules[2] = {
    title: "3. Paint the Shirt",
    body: `<p>We can use CSS to paint elements. Let's color the skeleton's shirt!</p>
    <p>Type the ID (<code>#shirt</code>), followed by curly braces <code>{}</code>.</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Type exactly: <code>#shirt { background-color: purple; }</code></p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" style="background:#0f172a; border-radius:8px;">
    <text x="120" y="85" fill="#f8fafc" font-family="sans-serif" font-size="32" font-weight="bold" text-anchor="middle">
        <animate attributeName="fill" values="#f8fafc;#22d3ee;#f8fafc" dur="3s" repeatCount="indefinite" />
        #SHIRT
    </text>
    <circle cx="200" cy="40" r="15" fill="#22d3ee" opacity="0.3">
        <animate attributeName="r" values="15;25;15" dur="3s" repeatCount="indefinite" />
    </circle>
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
    previewScaffold: `<div id="skeleton-box" style="text-align:center;">
  <div style="font-size: 50px; line-height: 1; margin-bottom:-5px;">💀</div>
  <div id="shirt" style="width: 70px; height: 60px; background: #64748b; border-radius: 8px; margin: 0 auto;"></div>
  <div id="pants" style="width: 50px; height: 60px; background: #475569; border-radius: 4px; margin: 5px auto 0;"></div>
</div>`,
    initialCode: `<style>\n  #shirt {\n    \n  }\n</style>`,
    preserveCode: true,
    progress: 15,
    validator: function(code) { return code.includes("#shirt") && /background-color\s*:\s*\w+;?/i.test(code); }
};