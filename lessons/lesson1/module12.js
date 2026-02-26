window.Lessons.lesson1.modules[11] = {
    title: "12. Launching Apps 🖱️",
    body: `<p>The extension tells the operating system which app to use when you double-click a file.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Double-click the <code>.html</code> file to open it in the Browser!</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="50" width="160" height="60" fill="none" stroke="#3b82f6" stroke-width="2" stroke-dasharray="5 5"/><text x="120" y="85" fill="#3b82f6" font-family="sans-serif" font-size="14" text-anchor="middle">.txt vs .html vs .jpg</text></svg>`,
    widgetCode: `<!-- INTERACTIVE MODULE -->
<style>
/* Desktop styling */
.multi-desk { background: linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%); height: 350px; border-radius: 12px; position: relative; display: flex; align-items: center; justify-content: center; gap: 30px; overflow: hidden; margin-top: 20px;}

/* Icons */
.f-icon { width: 80px; display: flex; flex-direction: column; align-items: center; cursor: pointer; transition: 0.2s;}
.f-icon:hover { transform: scale(1.05); }
.f-icon:active { transform: scale(0.95); }
.f-img { width: 60px; height: 75px; background: white; border-radius: 4px 10px 4px 4px; position: relative; box-shadow: 2px 4px 10px rgba(0,0,0,0.3); display: flex; align-items: center; justify-content: center; font-size: 24px;}
.f-img::after { content: ''; position: absolute; top: 0; right: 0; border-width: 0 14px 14px 0; border-style: solid; border-color: transparent transparent #cbd5e1 #cbd5e1; border-radius: 0 10px 0 0; }
.f-name { color: white; margin-top: 8px; font-family: sans-serif; font-size: 12px; text-shadow: 1px 1px 2px black; font-weight: bold; background: transparent; padding: 2px 6px; border-radius: 4px;}
.f-icon.sel .f-name { background: rgba(59,130,246,0.5); }

/* Types */
.type-html .f-img { background: #3b82f6; color: white;}
.type-html .f-img::after { border-color: transparent transparent #2563eb #2563eb; }
.type-img .f-img { background: #10b981; color: white;}
.type-img .f-img::after { border-color: transparent transparent #059669 #059669; }

/* Windows */
.app-win { position: absolute; inset: 20px; background: white; border-radius: 8px; box-shadow: 0 20px 50px rgba(0,0,0,0.8); display: none; flex-direction: column; overflow: hidden; transform: scale(0.5); opacity: 0; transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275); z-index: 10;}
.app-win.show { display: flex; transform: scale(1); opacity: 1; }
.aw-bar { background: #e2e8f0; padding: 10px; display: flex; align-items: center; justify-content: space-between; }
.aw-dots { display: flex; gap: 6px; }
.aw-dot { width: 12px; height: 12px; border-radius: 50%; background: #94a3b8; }
.aw-close { cursor: pointer; color: #ef4444; font-weight: bold; font-family: sans-serif; font-size: 14px; background: rgba(239,68,68,0.2); width: 20px; height: 20px; border-radius: 50%; display: flex; align-items: center; justify-content: center;}
.aw-close:hover { background: #ef4444; color: white; }
.aw-title { font-size: 12px; font-family: sans-serif; color: #64748b; font-weight: bold;}
.aw-body { flex: 1; display: flex; flex-direction: column; padding: 20px;}

/* Specific App Bodies */
#w-txt .aw-body { background: white; color: black; font-family: 'Consolas', monospace; font-size: 14px;}
#w-img .aw-body { background: #1e293b; color: white; align-items: center; justify-content: center; font-size: 60px;}
#w-bro .aw-body { background: white; color: black; font-family: sans-serif; align-items: center; justify-content: center; text-align: center; border-top: 1px solid #cbd5e1;}
</style>
<script>
window.sel = function(el) {
    document.querySelectorAll('.f-icon').forEach(e=>e.classList.remove('sel'));
    el.classList.add('sel');
}
window.op = function(wId) {
    document.querySelectorAll('.app-win').forEach(e=>{e.classList.remove('show'); e.style.display='none';});
    const win = document.getElementById(wId);
    win.style.display = 'flex';
    setTimeout(() => win.classList.add('show'), 10);
    
    if(wId === 'w-bro') {
        setTimeout(() => {
            window.completeModule('APP_LAUNCHED');
        }, 1000);
    }
}
window.cl = function(wId) {
    const win = document.getElementById(wId);
    win.classList.remove('show');
    setTimeout(() => win.style.display = 'none', 300);
}
</script>`,
    initialCode: `<div class="multi-desk" id="mdesk" onclick="document.querySelectorAll('.f-icon').forEach(el=>el.classList.remove('sel'))">
    <div class="f-icon" onclick="event.stopPropagation(); window.sel(this)" ondblclick="window.op('w-txt')">
        <div class="f-img">📄</div>
        <div class="f-name">notes.txt</div>
    </div>
    <div class="f-icon type-img" onclick="event.stopPropagation(); window.sel(this)" ondblclick="window.op('w-img')">
        <div class="f-img">🖼️</div>
        <div class="f-name">cat.jpg</div>
    </div>
    <div class="f-icon type-html" onclick="event.stopPropagation(); window.sel(this)" ondblclick="window.op('w-bro')">
        <div class="f-img">🌐</div>
        <div class="f-name">index.html</div>
    </div>
    
    <div id="w-txt" class="app-win">
        <div class="aw-bar">
            <div class="aw-dots"><div class="aw-dot"></div><div class="aw-dot"></div><div class="aw-dot"></div></div>
            <div class="aw-title">Notepad - notes.txt</div>
            <div class="aw-close" onclick="window.cl('w-txt')">✖</div>
        </div>
        <div class="aw-body">
            &lt;html&gt;<br>
            &nbsp;&nbsp;&lt;body&gt;Hello!&lt;/body&gt;<br>
            &lt;/html&gt;
        </div>
    </div>
    <div id="w-img" class="app-win">
        <div class="aw-bar">
            <div class="aw-dots"><div class="aw-dot"></div><div class="aw-dot"></div><div class="aw-dot"></div></div>
            <div class="aw-title">Photos - cat.jpg</div>
            <div class="aw-close" onclick="window.cl('w-img')">✖</div>
        </div>
        <div class="aw-body">🐱</div>
    </div>
    <div id="w-bro" class="app-win">
        <div class="aw-bar">
            <div class="aw-dots"><div class="aw-dot"></div><div class="aw-dot"></div><div class="aw-dot"></div></div>
            <div class="aw-title">Chrome - index.html</div>
            <div class="aw-close" onclick="window.cl('w-bro')">✖</div>
        </div>
        <div class="aw-body">
            <h1 style="color:#3b82f6; margin:0;">Hello!</h1>
            <p style="color:#64748b; margin-top:10px;">The browser rendered the code!</p>
        </div>
    </div>
</div>`,
    progress: 60,
    validator: function (code) { return code.includes("APP_LAUNCHED"); }
};