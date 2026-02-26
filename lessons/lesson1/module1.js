window.Lessons.lesson1.modules[0] = {
    title: "1. Messy vs Structured 🏗️",
    body: `<p>Web design is about giving structure to chaos. HTML is the skeleton that organizes everything.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Click 'Apply Structure' to see how HTML fixes a messy page.</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="20" width="160" height="30" fill="#3b82f6" rx="4"/><rect x="40" y="60" width="160" height="50" fill="#10b981" rx="4"/><rect x="40" y="120" width="160" height="20" fill="#ef4444" rx="4"/></svg>`,
    widgetCode: `<!-- INTERACTIVE MODULE -->
<style>
.preview-window { height: 350px; background: white; border-radius: 12px; position: relative; overflow: hidden; font-family: sans-serif; transition: 0.5s ease-in-out; }
.el { position: absolute; transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1); }

/* Messy State */
.messy .header { top: 120px; left: 20px; font-size: 30px; transform: rotate(-15deg); color: #ef4444; font-weight: bold; }
.messy .hero-img { top: 40px; left: 100px; width: 150px; height: 100px; background: #3b82f6; transform: rotate(20deg); opacity: 0.8; border-radius: 10px; }
.messy .text-block { top: 200px; left: 50px; width: 200px; color: #475569; transform: rotate(5deg); }
.messy .footer { top: 50px; left: 250px; background: #10b981; color: white; padding: 5px; transform: rotate(-90deg); }

/* Structured State */
.structured { padding: 20px; display: flex; flex-direction: column; gap: 15px; }
.structured .el { position: relative; top: 0 !important; left: 0 !important; transform: none !important; margin: 0; }
.structured .header { font-size: 24px; color: #0f172a; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px; }
.structured .hero-img { width: 100%; height: 120px; background: #3b82f6; border-radius: 8px; opacity: 1; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; }
.structured .text-block { width: 100%; color: #475569; line-height: 1.5; font-size: 14px; }
.structured .footer { background: #1e293b; color: white; padding: 10px; text-align: center; border-radius: 6px; font-size: 12px; margin-top: auto; }

.action-bar { background: #0f172a; padding: 10px; display: flex; justify-content: center; border-top: 1px solid #334155; }
.btn-apply { background: #00ff9d; color: #0f172a; border: none; padding: 10px 20px; font-weight: bold; border-radius: 6px; cursor: pointer; transition: 0.2s; }
.btn-apply:hover { background: white; transform: scale(1.05); }
.btn-apply:active { transform: scale(0.95); }
</style>
<script>
window.applyStructure = function(btn) {
    document.getElementById('pw').className = 'preview-window structured';
    btn.innerText = 'STRUCTURE APPLIED ✨';
    btn.style.background = '#3b82f6';
    btn.style.color = 'white';
    window.completeModule('STRUCTURE_APPLIED');
};
</script>`,
    initialCode: `<div style="display: flex; flex-direction: column; height: 100%;">
    <div id="pw" class="preview-window messy">
        <div class="el header">My Cool Site</div>
        <div class="el hero-img"></div>
        <div class="el text-block">Welcome to my very first website. Right now it looks a bit crazy, but we can fix it!</div>
        <div class="el footer">© 2026 WebSpace</div>
    </div>
    <div class="action-bar">
        <button class="btn-apply" onclick="window.applyStructure(this)">Apply Structure</button>
    </div>
</div>`,
    progress: 5,
    validator: function (code) { return code.includes("STRUCTURE_APPLIED"); }
};