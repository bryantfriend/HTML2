window.Lessons.intro.modules[18] = {
            title: "19. Quick preview of final project",
            body: `<p>By the end of module 6, you will have a styled website showcasing your portfolio piece!</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Interact with the simulated portfolio 3 times to unlock the final module.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="120" y="80" fill="#00ff9d" font-family="monospace" font-size="16" text-anchor="middle" class="pulse-cyan">YOUR PORTFOLIO</text></svg>`,
            initialCode: `<!-- INTERACTIVE MODULE -->
<style>
.portfolio { height: 300px; background: white; color: black; border-radius: 8px; font-family: sans-serif; position: relative; transition: 0.3s; display: flex; flex-direction: column; overflow: hidden; }
.p-nav { display: flex; justify-content: space-around; background: #e2e8f0; padding: 10px; border-bottom: 2px solid #cbd5e1; }
.p-btn { padding: 8px 16px; background: transparent; color: #475569; font-weight: bold; cursor: pointer; border-radius: 20px; font-size: 14px; transition: 0.2s; border: none; }
.p-btn:hover { background: #cbd5e1; color: #1e293b; }
.p-btn.active { background: #3b82f6; color: white; }
.p-page { flex: 1; padding: 20px; overflow-y: auto; display: none; flex-direction: column; align-items: center; text-align: center; }
.p-page.active-page { display: flex; animation: p-fade 0.3s; }
.p-success { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(16,185,129,0.95); color: white; display: none; flex-direction: column; align-items: center; justify-content: center; font-size: 24px; font-weight: bold; z-index: 20; animation: p-fade 0.5s; backdrop-filter: blur(5px); }
@keyframes p-fade { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
/* Card styling for projects page */
.p-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; width: 100%; margin-top: 15px; }
.p-card { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 15px; }
</style>
<div class="portfolio" id="pf">
    <div class="p-nav">
        <button class="p-btn active" onclick="window.navTo(this, 'pg-home')">Home</button>
        <button class="p-btn" onclick="window.navTo(this, 'pg-proj')">Projects</button>
        <button class="p-btn" onclick="window.navTo(this, 'pg-contact')">Contact</button>
    </div>
    
    <div id="pg-home" class="p-page active-page">
        <div style="font-size:60px; margin-bottom:10px;">👤</div>
        <h2 style="font-weight:bold; font-size:28px; color:#0f172a; margin:0;">Alex Coder</h2>
        <p style="color:#3b82f6; font-size:16px; font-weight:bold; margin-top:5px;">Future Web Developer</p>
        <p style="color:#64748b; margin-top:15px; font-size:14px;">Welcome to my website! I'm learning HTML to build the foundations of the internet.</p>
    </div>
    
    <div id="pg-proj" class="p-page">
        <h2 style="font-weight:bold; font-size:24px; color:#0f172a; margin:0 0 5px 0;">My Work</h2>
        <div class="p-grid">
            <div class="p-card"><div style="font-size:24px; margin-bottom:5px;">🎮</div><b>Game App</b><p style="font-size:12px; color:#64748b; margin-top:5px;">A simple JS game</p></div>
            <div class="p-card"><div style="font-size:24px; margin-bottom:5px;">📝</div><b>Blog UI</b><p style="font-size:12px; color:#64748b; margin-top:5px;">CSS styled blog</p></div>
            <div class="p-card"><div style="font-size:24px; margin-bottom:5px;">🛍️</div><b>Store App</b><p style="font-size:12px; color:#64748b; margin-top:5px;">Mock e-commerce</p></div>
            <div class="p-card"><div style="font-size:24px; margin-bottom:5px;">📱</div><b>Chat App</b><p style="font-size:12px; color:#64748b; margin-top:5px;">Firebase chat</p></div>
        </div>
    </div>
    
    <div id="pg-contact" class="p-page">
        <h2 style="font-weight:bold; font-size:24px; color:#0f172a; margin-bottom:15px;">Let's Connect!</h2>
        <div style="width:100%; max-width:250px; text-align:left; background:#f8fafc; padding:20px; border-radius:8px; border:1px solid #e2e8f0;">
            <p style="margin:5px 0; font-size:14px;"><b>Email:</b> alex@coder.com</p>
            <p style="margin:5px 0; font-size:14px;"><b>GitHub:</b> @alexcodes</p>
            <p style="margin:5px 0; font-size:14px;"><b>Twitter:</b> @alex_dev</p>
        </div>
        <button style="margin-top:20px; padding:10px 30px; background:#3b82f6; color:white; border:none; border-radius:30px; font-weight:bold; cursor:pointer;" onclick="this.innerText='Message Sent!'; this.style.background='#10b981';">Send Message</button>
    </div>

    <div class="p-success" id="p-success">
        <div style="font-size:60px; margin-bottom:10px;">🌟</div>
        <div style="text-shadow: 0 2px 4px rgba(0,0,0,0.3);">Portfolio Complete!</div>
    </div>
</div>
<script>
window.visitedPages = { 'pg-home': true };
window.navTo = function(btn, pageId) {
    // Update navigation buttons
    document.querySelectorAll('.p-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    // Swap pages
    document.querySelectorAll('.p-page').forEach(p => p.classList.remove('active-page'));
    document.getElementById(pageId).classList.add('active-page');
    
    // Track unique visited pages to unlock the mission
    window.visitedPages[pageId] = true;
    if(Object.keys(window.visitedPages).length >= 3) {
        setTimeout(() => {
            document.getElementById('p-success').style.display = 'flex';
            document.getElementById('pf').style.boxShadow = '0 0 30px #10b981';
            const editor = document.getElementById('code-editor');
            if(!editor.value.includes('PORTFOLIO' + '_REVIEWED')) {
                editor.value += '\\n<!-- ' + 'PORTFOLIO' + '_REVIEWED' + ' -->';
                editor.dispatchEvent(new Event('input', { bubbles: true }));
            }
        }, 800);
    }
}
</script>`,
            progress: 95,
            validator: function (code) { return code.includes("PORTFOLIO_REVIEWED"); }
        };