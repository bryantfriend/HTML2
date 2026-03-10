window.Lessons.intro.modules[3] = {
    title: "4. The Browser",
    body: `<p>A web browser (like Chrome, Safari, or Edge) is the software that translates HTML code into the visual page you interact with.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Click the Browser icon on the simulated desktop.</p>`,
    svg: ``,
    widgetCode: `<!-- INTERACTIVE MODULE -->
<style>
.desktop { background: url('https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=1000&auto=format&fit=crop') center/cover no-repeat, linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%); height: 300px; width: 100%; border-radius: 12px; position: relative; overflow: hidden; display: flex; flex-direction: column; }
.desktop-area { flex: 1; position: relative; }
.taskbar { height: 40px; background: rgba(0,0,0,0.6); backdrop-filter: blur(10px); display: flex; align-items: center; padding: 0 10px; border-top: 1px solid rgba(255,255,255,0.1); }
.start-btn { width: 30px; height: 30px; border-radius: 4px; background: rgba(255,255,255,0.2); margin-right: 15px; }
.icon { width: 70px; height: 75px; position: absolute; top: 20px; left: 20px; display: flex; flex-direction: column; align-items: center; justify-content: center; cursor: pointer; color: white; text-shadow: 1px 1px 2px black; font-family: sans-serif; font-size: 12px; font-weight: bold; }
.icon:hover { background: rgba(255,255,255,0.2); border-radius: 8px; border: 1px solid rgba(255,255,255,0.3); }
.browser-window { position: absolute; top: 5%; left: 5%; width: 90%; height: 85%; background: white; border-radius: 8px; box-shadow: 0 10px 30px rgba(0,0,0,0.5); display: none; flex-direction: column; overflow: hidden; transform: scale(0.5); opacity: 0; transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275); z-index: 10; }
.browser-window.open { display: flex; transform: scale(1); opacity: 1; }
.browser-bar { background: #e2e8f0; padding: 10px; display: flex; align-items: center; gap: 10px; border-bottom: 1px solid #cbd5e1; }
.browser-dots { display: flex; gap: 5px; } .dot { width: 12px; height: 12px; border-radius: 50%; }
.dot-red { background: #ef4444; } .dot-yellow { background: #eab308; } .dot-green { background: #22c55e; }
.search-bar { background: white; border-radius: 20px; padding: 5px 15px; flex: 1; font-family: sans-serif; font-size: 14px; color: #64748b; border: 1px solid #cbd5e1; display: flex; align-items: center; gap: 5px; }
.browser-content { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; color: black; font-family: sans-serif; background: white; }
.logo-text { font-size: 40px; font-weight: bold; margin-bottom: 20px; }
.logo-g { color: #4285F4; } .logo-o1 { color: #EA4335; } .logo-o2 { color: #FBBC05; } .logo-l { color: #4285F4; } .logo-e { color: #34A853; }
.fake-search { width: 80%; height: 40px; border-radius: 20px; border: 1px solid #dfe1e5; background: #fff; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
</style>
<script>
window.openBrowser = function() {
    const win = document.getElementById('browser-win');
    win.style.display = 'flex';
    setTimeout(() => win.classList.add('open'), 10);
    window.completeModule('BROWSER_OPENED');
};
</script>
<div class="desktop">
    <div class="desktop-area">
        <div class="icon" onclick="window.openBrowser()">
            <svg viewBox="0 0 24 24" fill="#4285F4" style="width:40px; height:40px; margin-bottom:5px; filter: drop-shadow(0px 2px 2px rgba(0,0,0,0.5));">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM12 10.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zm-5.7 3c.64-2.8 3.16-4.9 6.2-4.9 1.13 0 2.21.3 3.16.82l-1.9 3.28C13.2 11.83 12.63 11.5 12 11.5c-1.38 0-2.5 1.12-2.5 2.5 0 .38.09.73.23 1.05l-3.43 5.95c-.38-.89-.6-1.89-.6-2.95zm6.2 6c-1.12 0-2.18-.3-3.13-.82l1.9-3.28c.55.87 1.15 1.2 1.76 1.2 1.38 0 2.5-1.12 2.5-2.5 0-.4-.1-.76-.25-1.09l3.43-5.94c.38.89.59 1.88.59 2.93 0 2.82-2.5 4.93-5.54 4.93z" fill="#fff"/>
            </svg>
            Browser
        </div>
        <div id="browser-win" class="browser-window">
            <div class="browser-bar"><div class="browser-dots"><div class="dot dot-red"></div><div class="dot dot-yellow"></div><div class="dot dot-green"></div></div><div class="search-bar">🔍 Search or type URL</div></div>
            <div class="browser-content"><div class="logo-text"><span class="logo-g">S</span><span class="logo-o1">e</span><span class="logo-o2">a</span><span class="logo-g">r</span><span class="logo-l">c</span><span class="logo-e">h</span></div><div class="fake-search"></div></div>
        </div>
    </div>
    <div class="taskbar">
        <div class="start-btn"></div>
    </div>
</div>`,
    initialCode: ``,
    progress: 20,
    validator: function (code) { return code.includes("BROWSER_OPENED"); }
};