window.Lessons.lesson1.modules[9] = {
    title: "10. Speed Build Challenge ⏱️",
    body: `<p>Time to test your knowledge! Click the tags in the correct nesting order to win!</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: 1. Click html, 2. Click body, 3. Click h1, 4. Click /h1, 5. Click /body, 6. Click /html.</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><circle cx="120" cy="75" r="40" fill="none" stroke="#fcd34d" stroke-width="4"/><text x="120" y="80" fill="#fcd34d" font-size="20" font-weight="bold" text-anchor="middle">FAST</text></svg>`,
    widgetCode: `<!-- INTERACTIVE MODULE -->
<style>
.sb-game { background: #0f172a; height: 350px; border-radius: 12px; display: flex; flex-direction: column; overflow: hidden; font-family: 'Courier New', Courier, monospace; color: white; position: relative;}
.screen { position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; background: #0f172a; transition: 0.3s; padding: 20px; }
.game-screen { align-items: stretch; justify-content: flex-start; visibility: hidden; opacity: 0; }
.end-screen { visibility: hidden; opacity: 0; text-align: center; }

.btn { background: #00ff9d; color: black; font-weight: bold; padding: 12px 24px; border: none; border-radius: 8px; cursor: pointer; font-size: 18px; transition: 0.2s;}
.btn:hover { background: white; transform: scale(1.05); }

.timer { font-size: 32px; color: #ff00e5; font-weight: bold; text-shadow: 0 0 10px rgba(255,0,229,0.5); margin-bottom: 10px; text-align: center;}

.drop-area { flex: 1; border: 2px solid #334155; background: rgba(30,41,59,0.5); border-radius: 8px; display: flex; flex-direction: column; gap: 4px; padding: 8px; overflow-y: auto;}
.slot { height: 32px; border: 1px dashed #475569; border-radius: 4px; display: flex; align-items: center; justify-content: flex-start; padding-left: 10px; color: #64748b; font-size: 14px; transition: 0.2s;}
.slot.filled { border: 2px solid #00ff9d; color: #00ff9d; background: rgba(0,255,157,0.1); font-weight: bold; }
.slot.error { border: 2px solid #ef4444; background: rgba(239,68,68,0.2); }

.inventory { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 12px; justify-content: center;}
.piece { background: #1e40af; color: white; padding: 10px 15px; border-radius: 6px; cursor: pointer; border: 2px solid #3b82f6; font-size: 16px; font-weight: bold; transition: 0.1s; box-shadow: 0 4px 0 #1e3a8a;}
.piece:hover { background: #2563eb; transform: translateY(-2px); box-shadow: 0 6px 0 #1e3a8a;}
.piece:active { transform: translateY(2px); box-shadow: none; }
.piece.used { opacity: 0.2; pointer-events: none; filter: grayscale(1); }
</style>
<script>
(function() {
    window.seconds = 60;
    window.step = 0;
    window.fails = 0;
    window.order = ['<html>', '<body>', '<h1>', '</h1>', '</body>', '</html>'];
    window.tmr = null;

    window.startGame = function() {
        document.getElementById('start-scr').style.visibility = 'hidden';
        document.getElementById('game-scr').style.visibility = 'visible';
        document.getElementById('game-scr').style.opacity = '1';
        
        window.tmr = setInterval(() => {
            window.seconds--;
            document.getElementById('timer-val').innerText = window.seconds + 's';
            if(window.seconds <= 0) window.finish(false);
        }, 1000);
    };

    window.pick = function(tag, el) {
        const slots = document.querySelectorAll('.slot');
        const current = slots[window.step];
        const raw = tag.replace(/&lt;/g, '<').replace(/&gt;/g, '>');
        
        if(window.order[window.step] === raw) {
            current.classList.add('filled');
            current.innerText = (window.step + 1) + '. ' + raw;
            el.classList.add('used');
            window.step++;
            if(window.step >= 6) window.finish(true);
        } else {
            window.fails++;
            current.classList.add('error');
            setTimeout(() => current.classList.remove('error'), 300);
        }
    };

    window.finish = function(won) {
        clearInterval(window.tmr);
        const end = document.getElementById('end-scr');
        end.style.visibility = 'visible';
        end.style.opacity = '1';
        
        const title = document.getElementById('result-title');
        const stars = document.getElementById('stars-row');
        const info = document.getElementById('result-info');
        
        if(won) {
            title.innerText = 'CHALLENGE WON! 🎉';
            title.style.color = '#00ff9d';
            let s = 3;
            if(window.fails > 0) s = 2;
            if(window.fails > 3) s = 1;
            stars.innerText = '⭐'.repeat(s);
            info.innerText = 'Mistakes: ' + window.fails;
            window.completeModule('SPEED_BUILT');
        } else {
            title.innerText = 'OUT OF TIME';
            title.style.color = '#ef4444';
            stars.innerText = '❌';
            info.innerText = 'Keep practicing!';
        }
    };
})();
</script>`,
    initialCode: `<div class="sb-game">
    <div id="start-scr" class="screen">
        <h2 style="color:#00ff9d; font-size:28px; margin:0;">Speed Build! ⚡</h2>
        <p style="color:#94a3b8; text-align:center; margin-top:10px;">Assemble the tags in 60s.</p>
        <button class="btn" onclick="window.startGame()">START CHALLENGE</button>
    </div>
    
    <div id="game-scr" class="screen game-screen">
        <div class="timer" id="timer-val">60s</div>
        <div class="drop-area" id="slots-cont">
            <div class="slot">1. &lt;html&gt;</div>
            <div class="slot" style="margin-left:20px;">2. &lt;body&gt;</div>
            <div class="slot" style="margin-left:40px;">3. &lt;h1&gt;</div>
            <div class="slot" style="margin-left:40px;">4. &lt;/h1&gt;</div>
            <div class="slot" style="margin-left:20px;">5. &lt;/body&gt;</div>
            <div class="slot">6. &lt;/html&gt;</div>
        </div>
        <div class="inventory">
            <div class="piece" onclick="window.pick('&lt;html&gt;', this)">&lt;html&gt;</div>
            <div class="piece" onclick="window.pick('&lt;/h1&gt;', this)">&lt;/h1&gt;</div>
            <div class="piece" onclick="window.pick('&lt;h1&gt;', this)">&lt;h1&gt;</div>
            <div class="piece" onclick="window.pick('&lt;/body&gt;', this)">&lt;/body&gt;</div>
            <div class="piece" onclick="window.pick('&lt;/html&gt;', this)">&lt;/html&gt;</div>
            <div class="piece" onclick="window.pick('&lt;body&gt;', this)">&lt;body&gt;</div>
        </div>
    </div>
    
    <div id="end-scr" class="screen end-screen">
        <h2 id="result-title" style="font-size:32px;">Result</h2>
        <div id="stars-row" style="font-size:48px; margin:10px 0;">⭐⭐⭐</div>
        <p id="result-info" style="color:#94a3b8; font-size:18px;"></p>
        <button class="btn" onclick="window.location.reload()">RETRY</button>
    </div>
</div>`,
    progress: 50,
    validator: function (code) { return code.includes("SPEED_BUILT"); }
};