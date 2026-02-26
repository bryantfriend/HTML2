window.Lessons.lesson1.modules[8] = {
    title: "9. Name Your Tab 🏷️",
    body: `<p>The <code>&lt;title&gt;</code> element determines the name on the browser tab.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Click a preset to rename the tab to 'Cat Kingdom', or type it yourself in the editor!</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="50" width="160" height="30" fill="#cbd5e1" rx="4"/><rect x="45" y="55" width="80" height="25" fill="white" rx="4"/><text x="85" y="72" fill="#475569" font-family="sans-serif" font-size="12" text-anchor="middle" font-weight="bold">Cat Kingdom x</text></svg>`,
    widgetCode: `<!-- INTERACTIVE MODULE -->
<style>
.browser-mc { background: linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%); height: 350px; border-radius: 12px; padding: 20px; display: flex; flex-direction: column; overflow: hidden; font-family: sans-serif; gap: 15px;}
.browser-window { background: white; flex: 1; border-radius: 8px; display: flex; flex-direction: column; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
.b-bar { background: #e2e8f0; padding: 8px 10px 0 10px; display: flex; align-items: flex-end; gap: 5px; }
.b-tab { background: white; padding: 6px 15px; border-radius: 8px 8px 0 0; font-size: 12px; color: #334155; font-weight: bold; display: flex; align-items: center; gap: 10px; min-width: 120px; box-shadow: 0 -2px 5px rgba(0,0,0,0.05); transition: 0.3s; }
.b-close { color: #94a3b8; font-size: 10px; }
.b-content { background: white; flex: 1; padding: 20px; color: black; border-top: 1px solid #cbd5e1; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; }

.presets { display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; margin-top: auto; background: #1e293b; padding: 15px; border-radius: 8px; border: 1px solid #334155;}
.preset-btn { background: #3b82f6; color: white; border: none; padding: 8px 12px; border-radius: 6px; font-size: 12px; font-weight: bold; cursor: pointer; transition: 0.2s; }
.preset-btn:hover { background: #60a5fa; transform: translateY(-2px); }
</style>
<div class="browser-mc">
    <div class="browser-window">
        <div class="b-bar">
            <div class="b-tab">
                <span id="tab-text">New Tab</span>
                <span class="b-close">✖</span>
            </div>
        </div>
        <div class="b-content">
            <h1 style="margin:0; font-size:24px; color:#0f172a;">Welcome to My Site</h1>
            <p style="color:#64748b; font-size:14px; margin-top:10px;">Watch the tab up top change!</p>
        </div>
    </div>

    <div class="presets">
        <span style="color:#94a3b8; font-size:12px; width:100%; text-align:center; font-weight:bold; margin-bottom:5px;">PRESETS:</span>
        <button class="preset-btn" onclick="window.applyTitle('Cat Kingdom 🐱')">Cat Kingdom</button>
        <button class="preset-btn" onclick="window.applyTitle('Gamer Zone 🎮')">Gamer Zone</button>
        <button class="preset-btn" onclick="window.applyTitle('Pizza Palace 🍕')">Pizza Palace</button>
        <button class="preset-btn" onclick="window.applyTitle('School News 📰')">School News</button>
    </div>
</div>
<script>
window.applyTitle = function(titleStr) {
    document.getElementById('tab-text').innerText = titleStr;
    const editor = document.getElementById('code-editor');
    if(editor) {
        const val = editor.value;
        const newVal = val.replace(/<title>.*?<\\/title>/i, '<title>' + titleStr + '</title>');
        if(val !== newVal) {
            editor.value = newVal;
            editor.dispatchEvent(new Event('input', { bubbles: true }));
        } else if (!val.includes('<title>')) {
            editor.value = '<title>' + titleStr + '</title>\\n' + val;
            editor.dispatchEvent(new Event('input', { bubbles: true }));
        }
    }
}

// Auto-sync tab text from editor on load
const editor = document.getElementById('code-editor');
if (editor) {
    const updateTab = (code) => {
        const match = code.match(/<title>(.*?)<\\/title>/i);
        if (match && match[1]) {
            document.getElementById('tab-text').innerText = match[1];
        }
    };
    editor.addEventListener('input', (e) => updateTab(e.target.value));
    updateTab(editor.value);
}
</script>`,
    initialCode: `<title>New Tab</title>`,
    progress: 45,
    validator: function (code) { return code.includes("Cat Kingdom"); }
};