window.Lessons.lesson1.modules[2] = {
    title: "3. The First Line: DOCTYPE",
    body: `<p>Before any HTML tags, the browser needs to know you are sending it a modern HTML5 document. You do this with <code>&lt;!DOCTYPE html&gt;</code>.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Drag the missing DOCTYPE to the very top line of the code!</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="120" y="80" fill="#00ff9d" font-family="monospace" font-size="16" text-anchor="middle">&lt;!DOCTYPE html&gt;</text></svg>`,
    widgetCode: `<!-- INTERACTIVE MODULE -->
<style>
.editor-sim { background: #1e1e1e; color: #d4d4d4; font-family: 'Consolas', monospace; font-size: 14px; padding: 20px; border-radius: 8px; height: 350px; position: relative; user-select: none; }
.code-line { display: flex; align-items: center; min-height: 40px; margin-bottom: 5px; }
.line-num { color: #858585; width: 30px; text-align: right; margin-right: 15px; }
.tag { color: #569cd6; }
.angle { color: #808080; }

.drop-zone { flex: 1; height: 35px; border: 2px dashed transparent; border-radius: 4px; transition: 0.2s; display: flex; align-items: center; padding-left: 10px; }
.drop-zone.active { border-color: #3b82f6; background: rgba(59,130,246,0.1); }
.drop-zone.error { border-color: #ef4444; background: rgba(239,68,68,0.1); }

.draggable { cursor: grab; background: #252526; border: 1px solid #3c3c3c; padding: 8px 15px; border-radius: 4px; color: #4fc1ff; display: inline-block; box-shadow: 0 4px 6px rgba(0,0,0,0.3); z-index: 100; transition: transform 0.1s; }
.draggable:active { cursor: grabbing; transform: scale(1.05); }

.feedback { position: absolute; bottom: 20px; right: 20px; padding: 10px 20px; border-radius: 6px; font-weight: bold; font-family: sans-serif; opacity: 0; transition: 0.3s; z-index: 200; pointer-events: none;}
.feedback-err { background: #ef4444; color: white; }
.feedback-succ { background: #10b981; color: white; }

.pieces-bar { background: #0f172a; padding: 15px; border-radius: 8px; margin-bottom: 15px; display: flex; align-items: center; justify-content: center; border: 1px solid #334155; }
</style>
<script>
window.dragStart = function(e) {
    e.dataTransfer.setData("text/plain", "doctype");
}
window.allowDrop = function(e) {
    e.preventDefault();
    e.currentTarget.classList.add('active');
}
window.dragLeave = function(e) {
    e.currentTarget.classList.remove('active');
}
window.showMsg = function(text, isErr) {
    const msg = document.getElementById('msg');
    msg.innerText = text;
    msg.className = 'feedback ' + (isErr ? 'feedback-err' : 'feedback-succ');
    msg.style.opacity = '1';
    setTimeout(() => { msg.style.opacity = '0'; }, 3000);
}
window.drop = function(e, lineTarget) {
    e.preventDefault();
    e.currentTarget.classList.remove('active');
    const data = e.dataTransfer.getData("text/plain");
    
    if (data === 'doctype') {
        if (lineTarget === 1) {
            e.currentTarget.appendChild(document.getElementById('drag-piece'));
            document.getElementById('drag-piece').draggable = false;
            document.getElementById('drag-piece').style.cursor = 'default';
            window.showMsg('✔ CORRECT! DOCTYPE must be FIRST.', false);
            window.completeModule('DOCTYPE_PLACED');
        } else {
            e.currentTarget.classList.add('error');
            setTimeout(() => e.currentTarget.classList.remove('error'), 500);
            window.showMsg('❌ DOCTYPE must be FIRST!', true);
        }
    }
}
</script>`,
    initialCode: `<div style="display:flex; flex-direction:column; height: 100%;">
    <div class="pieces-bar">
        <span style="color:#94a3b8; font-family:sans-serif; font-size:12px; margin-right:15px; font-weight:bold;">MISSING PIECE:</span>
        <div id="drag-piece" class="draggable" draggable="true" ondragstart="window.dragStart(event)">&lt;!DOCTYPE html&gt;</div>
    </div>
    <div class="editor-sim">
        <div class="code-line">
            <div class="line-num">1</div>
            <div class="drop-zone" id="dz-1" ondragover="window.allowDrop(event)" ondragleave="window.dragLeave(event)" ondrop="window.drop(event, 1)"></div>
        </div>
        <div class="code-line">
            <div class="line-num">2</div>
            <div><span class="angle">&lt;</span><span class="tag">html</span><span class="angle">&gt;</span></div>
        </div>
        <div class="code-line">
            <div class="line-num">3</div>
            <div class="drop-zone" id="dz-3" ondragover="window.allowDrop(event)" ondragleave="window.dragLeave(event)" ondrop="window.drop(event, 3)"></div>
        </div>
        <div class="code-line" style="padding-left: 20px;">
            <div class="line-num">4</div>
            <div><span class="angle">&lt;</span><span class="tag">head</span><span class="angle">&gt;</span></div>
        </div>
        <div class="code-line">
            <div class="line-num">5</div>
            <div class="drop-zone" id="dz-5" ondragover="window.allowDrop(event)" ondragleave="window.dragLeave(event)" ondrop="window.drop(event, 5)"></div>
        </div>
        <div class="code-line" style="padding-left: 20px;">
            <div class="line-num">6</div>
            <div><span class="angle">&lt;</span><span class="tag">body</span><span class="angle">&gt;</span></div>
        </div>
        <div id="msg" class="feedback"></div>
    </div>
</div>`,
    progress: 15,
    validator: function (code) { return code.includes("DOCTYPE_PLACED"); }
};