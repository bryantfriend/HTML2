window.Lessons.lesson1.modules[18] = {
    title: "19. Blueprint vs Build 🏗️",
    body: `<p>HTML is the blueprint. The browser is the builder.</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Click all 3 items to inspect their code and see the build!</p>`,
    svg: ``,\
    widgetCode: `<!-- INTERACTIVE MODULE -->
<style>
.bp-game { background: #0f172a; height: 350px; width: 100%; border-radius: 12px; padding: 15px; display: flex; flex-direction: column; position: relative; overflow: hidden; }
.checklist { display: flex; flex-direction: column; gap: 10px; margin-top: 10px; }
.cl-item { background: #1e293b; padding: 12px 15px; border-radius: 8px; border-left: 4px solid #3b82f6; cursor: pointer; display: flex; align-items: center; justify-content: space-between; color: white; transition: 0.2s; font-family: sans-serif; font-size: 14px; }
.cl-item:hover { background: #334155; }
.cl-item.done { border-left-color: #10b981; }

.overlay { position: absolute; inset: 0; background: rgba(15,23,42,0.98); z-index: 20; display: none; flex-direction: column; padding: 15px; }
.modal-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; }
.modal-body { display: flex; gap: 10px; flex: 1; min-height: 0; }
.code-view, .vis-view { flex: 1; display: flex; flex-direction: column; gap: 5px; }
.code-content { background: #020617; color: #38bdf8; font-family: monospace; padding: 10px; border-radius: 6px; font-size: 12px; flex: 1; overflow: auto; }
.vis-content { background: white; border-radius: 6px; flex: 1; display: flex; align-items: center; justify-content: center; padding: 10px; }
.close-btn { background: #3b82f6; color: white; border: none; padding: 8px 20px; border-radius: 6px; font-weight: bold; cursor: pointer; }
</style>
<script>
(function() {
    window.bpState = [0,0,0];
    const bpData = {
        1: { code: '<nav>\\n <a href="/">Home</a>\\n <a href="/ab">About</a>\\n</nav>', vis: '<nav style="display:flex;gap:10px;color:blue;"><span>Home</span><span>About</span></nav>' },
        2: { code: '<button>\\n Click Me!\\n</button>', vis: '<button style="background:green;color:white;padding:10px;">Click Me!</button>' },
        3: { code: '<aside>\\n Note on HTML\\n</aside>', vis: '<aside style="background:#eee;padding:10px;border-left:5px solid #ccc;">Note on HTML</aside>' }
    };

    window.openBP = function(id) {
        document.getElementById('m-code').innerText = bpData[id].code;
        document.getElementById('m-vis').innerHTML = bpData[id].vis;
        document.getElementById('m-over').style.display = 'flex';
        document.getElementById('c' + id).classList.add('done');
        window.bpState[id-1] = 1;
        
        if(window.bpState.every(x => x === 1)) {
            setTimeout(() => {
                window.completeModule('BP_REVIEWED');
            }, 1000);
        }
    };
    window.closeBP = function() {
        document.getElementById('m-over').style.display = 'none';
    };
})();
</script>
<div class="bp-game">
    <div class="checklist">
        <div class="cl-item" id="c1" onclick="window.openBP(1)"><span>1. Navigation Bar</span><span>🔎</span></div>
        <div class="cl-item" id="c2" onclick="window.openBP(2)"><span>2. Hero Button</span><span>🔎</span></div>
        <div class="cl-item" id="c3" onclick="window.openBP(3)"><span>3. Side Note</span><span>🔎</span></div>
    </div>
    <div id="m-over" class="overlay">
        <div class="modal-header">
            <span style="color:#00f2ff; font-weight:bold; font-size:14px;">BLUEPRINT INSPECTOR</span>
            <button class="close-btn" onclick="window.closeBP()">CLOSE</button>
        </div>
        <div class="modal-body">
            <div class="code-view">
                <div style="font-size:10px; color:#94a3b8;">HTML CODE</div>
                <div class="code-content" id="m-code"></div>
            </div>
            <div class="vis-view">
                <div style="font-size:10px; color:#94a3b8;">RESULT</div>
                <div class="vis-content" id="m-vis"></div>
            </div>
        </div>
    </div>
</div>`,
    initialCode: ``,
    progress: 95,
    validator: function (code) { return code.includes("BP_REVIEWED"); }
};