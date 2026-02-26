window.Lessons.intro.modules[2] = {
    title: "3. How websites travel",
    body: `<p>When you type a web address, your Browser acts as a messenger. It travels across the internet to the Server, grabs the HTML file, and brings it back to your screen.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Click "FETCH WEBSITE" to send your character to the server!</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="80" y="20" width="80" height="110" rx="4" fill="none" stroke="#ff00e5" stroke-width="3"/><path d="M100 50 L140 50 M100 70 L140 70 M100 90 L120 90" stroke="#ff00e5" stroke-width="3"/></svg>`,
    widgetCode: `<!-- INTERACTIVE MODULE -->
<style>
.world { background: #0f172a; height: 200px; position: relative; border-radius: 12px; overflow: hidden; display: flex; align-items: center; justify-content: space-between; padding: 0 40px; }
.pc { font-size: 50px; z-index: 10; }
.server { font-size: 50px; z-index: 10; }
.character { position: absolute; left: 80px; font-size: 40px; transition: left 1.5s linear, transform 0.2s; z-index: 20; display:flex; align-items:center; transform: scaleX(-1); }
.packet { font-size: 20px; opacity: 0; transition: opacity 0.2s; margin-left: 10px; transform: scaleX(-1); }
</style>
<script>
window.fetchWebsite = function(btn) {
    btn.disabled = true; btn.innerText = 'TRAVELING...';
    const char = document.getElementById('char'); 
    const packet = document.getElementById('packet'); 
    const pc = document.getElementById('home-pc');
    char.style.left = 'calc(100% - 130px)';
    setTimeout(() => {
        packet.style.opacity = '1'; char.style.transform = 'scaleX(1)';
        setTimeout(() => {
            char.style.left = '80px';
            setTimeout(() => {
                packet.style.opacity = '0'; pc.innerText = '🖥️✨'; char.style.transform = 'scaleX(-1)';
                btn.innerText = 'WEBSITE LOADED!'; btn.style.background = '#00ff9d';
                window.completeModule('FETCHED_SITE');
            }, 1500);
        }, 500);
    }, 1500);
};
</script>`,
    initialCode: `<div style="background:#020617; padding:20px; border-radius:12px;">
    <div class="world">
        <div class="pc" id="home-pc">💻</div>
        <div id="char" class="character">🏃<span id="packet" class="packet">📄</span></div>
        <div class="server">🗄️</div>
    </div>
    <div style="text-align:center; margin-top:15px;">
        <button style="padding:10px 20px; background:#00f2ff; color:black; font-weight:bold; border-radius:8px; cursor:pointer;" onclick="window.fetchWebsite(this)">FETCH WEBSITE</button>
    </div>
</div>`,
    progress: 15,
    validator: function (code) { return code.includes("FETCHED_SITE"); }
};