window.Lessons.intro.modules[1] = {
    title: "2. The Servers",
    body: `<p>A website is just a bunch of files. A server is a powerful computer that stays on 24/7 to serve those files to visitors.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Click the switch to power on the servers.</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="30" width="160" height="90" fill="none" stroke="#00ff9d" stroke-width="2"/><text x="120" y="80" fill="#00ff9d" font-family="sans-serif" font-size="14" text-anchor="middle">www.web.com</text></svg>`,
    widgetCode: `<!-- INTERACTIVE MODULE -->
<style>
.server-rack { width: 200px; height: 150px; background: #1e293b; border: 4px solid #334155; border-radius: 8px; margin: 0 auto; display: flex; flex-direction: column; padding: 10px; gap: 10px; }
.server-blade { flex: 1; background: #0f172a; border: 2px solid #475569; border-radius: 4px; position: relative; }
.light { width: 12px; height: 12px; border-radius: 50%; background: #334155; position: absolute; right: 10px; top: 10px; }
.server-on .light { animation: blink-light 0.5s infinite alternate; }
.server-on .blade-1 .light { animation: blink-light 0.41s infinite; background: #00ff9d; box-shadow: 0 0 10px #00ff9d; }
.server-on .blade-2 .light { animation: blink-light 0.37s infinite; background: #00f2ff; box-shadow: 0 0 10px #00f2ff;}
.server-on .blade-3 .light { animation: blink-light 0.53s infinite; background: #ff00e5; box-shadow: 0 0 10px #ff00e5;}
@keyframes blink-light { 0%, 30% { opacity: 0.1; } 31%, 100% { opacity: 1; } }
.switch-container { text-align: center; margin-top: 20px; }
.switch { width: 60px; height: 30px; background: #ef4444; border-radius: 15px; display: inline-block; position: relative; cursor: pointer; transition: background 0.3s; }
.switch::after { content: ''; position: absolute; width: 26px; height: 26px; background: white; border-radius: 50%; top: 2px; left: 2px; transition: transform 0.3s; }
.switch.on { background: #10b981; }
.switch.on::after { transform: translateX(30px); }
</style>
<script>
window.togglePower = function(sw) {
    sw.classList.toggle('on');
    document.getElementById('rack').classList.toggle('server-on');
    if(sw.classList.contains('on')) {
        window.completeModule('SERVER_ON');
    }
};
</script>`,
    initialCode: `<div style="background:#020617; padding:40px 20px; border-radius:12px;">
    <div id="rack" class="server-rack">
        <div class="server-blade blade-1"><div class="light"></div></div>
        <div class="server-blade blade-2"><div class="light"></div></div>
        <div class="server-blade blade-3"><div class="light"></div></div>
    </div>
    <div class="switch-container">
        <div class="switch" onclick="window.togglePower(this)"></div>
        <p style="color:white; margin-top:10px; font-family:monospace;">MAIN POWER</p>
    </div>
</div>`,
    progress: 10,
    validator: function (code) { return code.includes("SERVER_ON"); }
};