window.Lessons.lesson3.modules[15] = {
    title: "16. Formatting for clarity",
    body: `<p>HTML doesn't care about spaces, but humans do! Good code is easy to read. We use <strong>indentation</strong> (spaces at the start of a line) to show when things are inside other things.</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Click the clean, indented code example to see why it's better, then fix your own code!</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" style="display:none;"></svg>`,
    widgetCode: `<!-- INTERACTIVE MODULE -->
<style>
.m16-container { display: flex; gap: 10px; background: #1e293b; padding: 10px; border-radius: 8px; font-family: monospace; font-size: 11px; }
.m16-panel { flex: 1; background: #334155; border: 2px solid transparent; border-radius: 6px; padding: 10px; cursor: pointer; transition: 0.2s; white-space: pre; color: #f8fafc; }
.m16-panel:hover { border-color: #3b82f6; }
.m16-panel.selected { border-color: #10b981; background: #064e3b; box-shadow: 0 0 10px #10b98155; }
.m16-title { font-family: sans-serif; font-size: 10px; color: #94a3b8; text-transform: uppercase; margin-bottom: 5px; }
</style>
<div class="m16-container">
    <div class="m16-panel" id="m16-messy">
<div class="m16-title">Messy Code</div>&lt;ul&gt;
&lt;li&gt;Pizza&lt;/li&gt;
&lt;li&gt;Burger&lt;/li&gt;
&lt;/ul&gt;
    </div>
    <div class="m16-panel" id="m16-clean">
<div class="m16-title">Clean Code</div>&lt;ul&gt;
  &lt;li&gt;Pizza&lt;/li&gt;
  &lt;li&gt;Burger&lt;/li&gt;
&lt;/ul&gt;
    </div>
</div>
<script>
(function() {
    const messy = document.getElementById('m16-messy');
    const clean = document.getElementById('m16-clean');
    const editor = document.getElementById('code-editor');
    
    clean.addEventListener('click', () => {
        clean.classList.add('selected');
        messy.classList.remove('selected');
        if (editor) { editor.readOnly = false; editor.style.opacity = '1';
            editor.value = "<ul>\\n  <li>Pizza</li>\\n  <li>Burger</li>\\n</ul>";
            editor.dispatchEvent(new Event('input', { bubbles: true }));
        }
    });

    messy.addEventListener('click', () => {
        messy.classList.add('selected');
        clean.classList.remove('selected');
        if (editor) {
            editor.value = "<ul>\\n<li>Pizza</li>\\n<li>Burger</li>\\n</ul>";
            editor.dispatchEvent(new Event('input', { bubbles: true }));
        }
    });
})();
</script>`,
    initialCode: `<ul>\n<li>Pizza</li>\n<li>Burger</li>\n</ul>`,
    progress: 80,
    validator: function (code) {
        return code.includes("  <li>") && code.includes("<ul>") && code.includes("</ul>");
    }
};