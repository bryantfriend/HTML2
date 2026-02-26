window.Lessons.intro.modules[0] = {
    title: "1. Welcome to Web Design 🌐",
    body: `<p>Welcome to Web Design! This is where you learn to build the digital world.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Click and hold the READY button for 5 seconds.</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="120" y="80" fill="#00f2ff" font-family="monospace" font-size="18" text-anchor="middle" class="pulse-cyan">WEB DESIGN</text></svg>`,
    widgetCode: `<!-- INTERACTIVE MODULE -->
<style>
@keyframes intense-shake {
  0% { transform: translate(2px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(0px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(2px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(2px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
}
.shaking { animation: intense-shake 0.5s infinite; background-color: #ef4444 !important; box-shadow: 0 0 30px #ef4444; }
.fireworks-bg { background: radial-gradient(circle, #ff00e5 0%, #0f172a 100%) !important; }
.progress-container { width: 100%; height: 10px; background: rgba(255,255,255,0.2); border-radius: 5px; margin-top: 15px; overflow: hidden; opacity: 0; transition: opacity 0.3s; }
.progress-bar { height: 100%; background: #00ff9d; width: 0%; transition: width 0.1s linear; }
</style>
<script>
window.startReadyGame = function(btn) {
    btn.classList.add('shaking');
    btn.innerText = 'HOLDING...';
    document.getElementById('prog-cont').style.opacity = '1';
    window.readyStartTime = Date.now();
    window.readyTimer = setInterval(() => {
        let elapsed = Date.now() - window.readyStartTime;
        let pct = Math.min((elapsed / 5000) * 100, 100);
        document.getElementById('prog-bar').style.width = pct + '%';
        if(pct >= 100) {
            clearInterval(window.readyTimer);
            btn.style.display = 'none';
            document.getElementById('prog-cont').style.display = 'none';
            document.getElementById('game-container').classList.add('fireworks-bg');
            document.getElementById('game-container').innerHTML = '<h1 style="color:white; font-size:40px; text-align:center;">🎉 BOOM! READY! 🎉</h1>';
            window.completeModule('MISSION_COMPLETE');
        }
    }, 50);
};
window.stopReadyGame = function(btn) {
    clearInterval(window.readyTimer); 
    btn.classList.remove('shaking'); 
    btn.innerText = 'READY'; 
    document.getElementById('prog-bar').style.width = '0%'; 
    document.getElementById('prog-cont').style.opacity = '0';
};
</script>`,
    initialCode: `<div id="game-container" style="display:flex; flex-direction:column; justify-content:center; align-items:center; height:300px; background:#0f172a; border-radius:12px; transition: background 0.5s;">
    <button id="ready-btn" style="padding:20px 40px; font-size:24px; font-weight:bold; background:#3b82f6; color:white; border:none; border-radius:8px; cursor:pointer; transition:background 0.3s;"
        onmousedown="window.startReadyGame(this)"
        onmouseup="window.stopReadyGame(this)"
        onmouseleave="window.stopReadyGame(this)"
        ontouchstart="this.onmousedown()"
        ontouchend="this.onmouseup()"
    >READY</button>
    <div id="prog-cont" class="progress-container" style="width: 80%;"><div id="prog-bar" class="progress-bar"></div></div>
</div>`,
    progress: 5,
    validator: function (code) { return code.includes("MISSION_COMPLETE"); }
};