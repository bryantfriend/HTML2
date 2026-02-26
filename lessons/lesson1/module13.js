window.Lessons.lesson1.modules[12] = {
    title: "13. Whack-a-Bug 🐛",
    body: `<p>A "bug" is just a mistake in the code. Fix the 3 bugs in the editor below!</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: 1. Fix "Mispelled Tab" to "My Tab". 2. Fix &lt;h1 bracket. 3. Fix "wobsit" to "website".</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="120" y="80" fill="#ef4444" font-size="40" text-anchor="middle">🐛🔨</text></svg>`,
    widgetCode: `<!-- INTERACTIVE MODULE -->
<style>
.bug-game { background: #0f172a; border-radius: 12px; height: 350px; padding: 20px; color: white; display: flex; flex-direction: column; font-family: monospace; position: relative;}
.hud { display: flex; justify-content: space-between; align-items: center; background: #1e293b; padding: 10px 15px; border-radius: 8px; margin-bottom: 15px;}
.timer { font-size: 24px; color: #ff00e5; font-weight: bold;}
.count { font-size: 16px; color: #00ff9d;}
.list { flex: 1; display: flex; flex-direction: column; gap: 8px;}
.item { background: rgba(239,68,68,0.1); border: 1px solid #ef4444; padding: 10px; border-radius: 8px; display: flex; justify-content: space-between; align-items: center; font-size: 13px;}
.item.fixed { background: rgba(16,185,129,0.1); border-color: #10b981; color: #00ff9d;}
.overlay { position: absolute; inset: 0; background: rgba(15,23,42,0.95); display: flex; flex-direction: column; align-items: center; justify-content: center; z-index: 10; border-radius: 12px; text-align: center; }
</style>
<script>
(function() {
    window.bt = 60;
    window.bi = null;
    window.bf = [0,0,0];
    window.ga = false;

    window.startBugs = function() {
        const start = document.getElementById('start-overlay');
        if (start) start.style.display = 'none';
        window.ga = true;
        
        const editor = document.getElementById('code-editor');
        if(editor) {
            editor.value = "<html>\\n<head>\\n    <title>Mispelled Tab</title>\\n</head>\\n<body>\\n    <h1Welcome</h1>\\n    <p>This is my wobsit.</p>\\n</body>\\n</html>";
            editor.dispatchEvent(new Event('input', { bubbles: true }));
        }
        
        window.bi = setInterval(() => {
            window.bt--;
            const t = document.getElementById('t-val');
            if(t) t.innerText = window.bt + 's';
            if(window.bt <= 0) window.stopBugs(false);
        }, 1000);
    };

    const checkInterval = setInterval(() => {
        if(!window.ga) return;
        const editor = document.getElementById('code-editor');
        if(!editor) return;
        const val = editor.value;
        
        if(val.includes('My Tab')) { window.bf[0] = 1; markBug('i1'); }
        if(val.includes('<h1>Welcome</h1>')) { window.bf[1] = 1; markBug('i2'); }
        if(val.includes('website')) { window.bf[2] = 1; markBug('i3'); }
        
        const total = window.bf[0] + window.bf[1] + window.bf[2];
        const cv = document.getElementById('c-val');
        if(cv) cv.innerText = 'Bugs: ' + (3 - total);
        if(total === 3) window.stopBugs(true);
    }, 500);

    function markBug(id) {
        const el = document.getElementById(id);
        if(el && !el.classList.contains('fixed')) {
            el.classList.add('fixed');
            el.lastElementChild.innerText = '✅';
        }
    }

    window.stopBugs = function(won) {
        window.ga = false;
        clearInterval(window.bi);
        clearInterval(checkInterval);
        const end = document.getElementById('end-overlay');
        if (end) {
            end.style.display = 'flex';
            const title = document.getElementById('end-title');
            if(won) {
                title.innerText = 'FIXED! 🎉';
                title.style.color = '#00ff9d';
                window.completeModule('BUGS_FIXED');
            } else {
                title.innerText = 'GAME OVER';
                title.style.color = '#ef4444';
            }
        }
    };
})();
</script>`,
    initialCode: `<div class="bug-game" id="game-root">
    <div id="start-overlay" class="overlay">
        <h2 style="color:#ef4444; margin:0; font-size: 24px;">Whack-a-Bug! 🐛</h2>
        <p style="color:#94a3b8; padding: 0 20px; font-size: 14px;">The code editor below has 3 bugs. Fix them in 60 seconds!</p>
        <button onclick="window.startBugs()" style="margin-top:15px; padding:12px 24px; background:#00ff9d; color:black; font-weight:bold; border:none; border-radius:8px; cursor:pointer;">START GAME</button>
    </div>
    <div id="end-overlay" class="overlay" style="display:none;">
        <h2 id="end-title" style="font-size: 30px;">Result</h2>
        <p id="end-msg" style="color:#94a3b8; font-size: 16px;"></p>
    </div>
    <div class="hud">
        <div class="timer" id="t-val">60s</div>
        <div class="count" id="c-val">Bugs: 3</div>
    </div>
    <div class="list">
        <div class="item" id="i1"><span>Title typo</span><span>🐛</span></div>
        <div class="item" id="i2"><span>Missing &lt;h1&gt; bracket</span><span>🐛</span></div>
        <div class="item" id="i3"><span>"wobsit" typo</span><span>🐛</span></div>
    </div>
</div>`,
    progress: 65,
    validator: function (code) { return code.includes("BUGS_FIXED"); }
};