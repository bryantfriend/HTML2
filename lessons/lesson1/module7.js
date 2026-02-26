window.Lessons.lesson1.modules[6] = {
    title: "7. The Title Tag 🏷️",
    body: `<p>The <code>&lt;title&gt;</code> tag tells the browser what to display in the tab at the very top of the screen. Watch the browser tab below as you change the code!</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Change the title to exactly <code>&lt;title&gt;My Cat&lt;/title&gt;</code>.</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="50" width="160" height="30" fill="#cbd5e1" rx="4"/><text x="120" y="70" fill="#475569" font-family="sans-serif" font-size="12" text-anchor="middle" font-weight="bold">Title Tab</text></svg>`,
    widgetCode: `<!-- INTERACTIVE MODULE -->
<style>
.browser-chrome { background: #e2e8f0; border-radius: 12px 12px 0 0; padding: 10px 15px 0; display: flex; align-items: flex-end; gap: 5px; border: 2px solid #cbd5e1; border-bottom: none;}
.tab { background: #f8fafc; padding: 8px 20px; border-radius: 8px 8px 0 0; border: 1px solid #cbd5e1; border-bottom: none; font-family: sans-serif; font-size: 12px; color: #475569; max-width: 150px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; position: relative; display: flex; align-items: center; gap: 8px; font-weight: bold; box-shadow: 0 -2px 5px rgba(0,0,0,0.05);}
.tab-icon { color: #3b82f6; font-size: 14px; }
.browser-content { background: white; border: 2px solid #cbd5e1; border-top: none; height: 250px; padding: 20px; font-family: sans-serif; overflow: auto; border-radius: 0 0 12px 12px;}
.address-bar { background: #f1f5f9; padding: 5px 15px; border-radius: 20px; font-size: 11px; color: #94a3b8; flex: 1; margin: 0 10px 10px; border: 1px solid #cbd5e1;}
</style>
<div class="browser-chrome">
    <div class="tab"><span class="tab-icon">🌐</span><span id="tab-title">New Tab</span></div>
    <div class="address-bar">https://www.mysite.com</div>
</div>
<div class="browser-content" id="web-content">
    <h1>My Website</h1>
</div>
<script>
(function() {
    const tabTitle = document.getElementById('tab-title');
    const webContent = document.getElementById('web-content');

    window.syncModule7 = function(code) {
        // Extract title
        const titleMatch = code.match(/<title>([\s\S]*?)<\/title>/i);
        if (titleMatch) {
            tabTitle.innerText = titleMatch[1] || "Empty Title";
            tabTitle.parentElement.style.background = "#fff";
            tabTitle.parentElement.style.borderColor = "#3b82f6";
            tabTitle.parentElement.style.color = "#1e293b";
        } else {
            tabTitle.innerText = "No Title Tag!";
            tabTitle.parentElement.style.background = "#fecaca";
            tabTitle.parentElement.style.borderColor = "#ef4444";
        }

        // Extract body content (simplified)
        const bodyMatch = code.match(/<body>([\s\S]*?)<\/body>/i);
        if (bodyMatch) {
            webContent.innerHTML = bodyMatch[1];
        } else {
            // If no body found yet, just show a placeholder or the whole code
            webContent.innerHTML = code.includes('<body') ? '<i>Nesting...</i>' : '<h1>My Website</h1>';
        }
    };
    
    // Initial sync
    const editor = document.getElementById('code-editor');
    if(editor) {
        editor.addEventListener('input', (e) => window.syncModule7(e.target.value));
        window.syncModule7(editor.value);
    }
})();
</script>`,
    initialCode: `<html>
<head>
  <title>New Tab</title>
</head>
<body>
  <h1>My Website</h1>
</body>
</html>`,
    progress: 35,
    validator: function (code) { return code.includes("<title>My Cat</title>"); }
};