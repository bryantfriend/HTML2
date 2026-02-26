window.Lessons = window.Lessons || {};
window.Lessons.intro = {
    id: "intro",
    title: "00: INTRO LESSON — WHAT IS HTML?",
    description: "Understand the basics of Web Design and HTML. [20 MODULES]",
    modules: [
        {
            title: "1. Messy vs Structured 🏗️",
            body: `<p>Web design is about giving structure to chaos. HTML is the skeleton that organizes everything.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Click 'Apply Structure' to see how HTML fixes a messy page.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="20" width="160" height="30" fill="#3b82f6" rx="4"/><rect x="40" y="60" width="160" height="50" fill="#10b981" rx="4"/><rect x="40" y="120" width="160" height="20" fill="#ef4444" rx="4"/></svg>`,
            initialCode: `<!-- INTERACTIVE MODULE -->
<style>
.preview-window { height: 350px; background: white; border-radius: 12px; position: relative; overflow: hidden; font-family: sans-serif; transition: 0.5s ease-in-out; }
.el { position: absolute; transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1); }

/* Messy State */
.messy .header { top: 120px; left: 20px; font-size: 30px; transform: rotate(-15deg); color: #ef4444; font-weight: bold; }
.messy .hero-img { top: 40px; left: 100px; width: 150px; height: 100px; background: #3b82f6; transform: rotate(20deg); opacity: 0.8; border-radius: 10px; }
.messy .text-block { top: 200px; left: 50px; width: 200px; color: #475569; transform: rotate(5deg); }
.messy .footer { top: 50px; left: 250px; background: #10b981; color: white; padding: 5px; transform: rotate(-90deg); }

/* Structured State */
.structured { padding: 20px; display: flex; flex-direction: column; gap: 15px; }
.structured .el { position: relative; top: 0 !important; left: 0 !important; transform: none !important; margin: 0; }
.structured .header { font-size: 24px; color: #0f172a; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px; }
.structured .hero-img { width: 100%; height: 120px; background: #3b82f6; border-radius: 8px; opacity: 1; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; }
.structured .text-block { width: 100%; color: #475569; line-height: 1.5; font-size: 14px; }
.structured .footer { background: #1e293b; color: white; padding: 10px; text-align: center; border-radius: 6px; font-size: 12px; margin-top: auto; }

.action-bar { background: #0f172a; padding: 10px; display: flex; justify-content: center; border-top: 1px solid #334155; }
.btn-apply { background: #00ff9d; color: #0f172a; border: none; padding: 10px 20px; font-weight: bold; border-radius: 6px; cursor: pointer; transition: 0.2s; }
.btn-apply:hover { background: white; transform: scale(1.05); }
.btn-apply:active { transform: scale(0.95); }
</style>

<div style="display: flex; flex-direction: column; height: 100%;">
    <div id="pw" class="preview-window messy">
        <div class="el header">My Cool Site</div>
        <div class="el hero-img"></div>
        <div class="el text-block">Welcome to my very first website. Right now it looks a bit crazy, but we can fix it!</div>
        <div class="el footer">© 2026 WebSpace</div>
    </div>
    <div class="action-bar">
        <button class="btn-apply" onclick="
            document.getElementById('pw').className = 'preview-window structured';
            this.innerText = 'STRUCTURE APPLIED ✨';
            this.style.background = '#3b82f6';
            this.style.color = 'white';
            const editor = document.getElementById('code-editor');
            if(!editor.value.includes('STRUCTURE_APPLIED')) {
                editor.value += '\\n<!-- STRUCTURE_APPLIED -->';
                editor.dispatchEvent(new Event('input', { bubbles: true }));
            }
        ">Apply Structure</button>
    </div>
</div>`,
            progress: 5,
            validator: function (code) { return code.includes("STRUCTURE_APPLIED"); }
        },
        {
            title: "2. Build it Tag-by-Tag 🧱",
            body: `<p>A website is built layer by layer using tags. Let's add them one by one to see how the page takes shape!</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Click the buttons to add the essential HTML tags in order.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="60" y="30" width="120" height="40" fill="none" stroke="#ff00e5" stroke-width="2"/><text x="120" y="55" fill="#ff00e5" font-family="monospace" font-size="14" text-anchor="middle">&lt;tag&gt;</text></svg>`,
            initialCode: `<!-- INTERACTIVE MODULE -->
<style>
.tag-btn { background: #1e293b; color: #00f2ff; font-family: monospace; border: 1px solid #334155; padding: 8px 12px; border-radius: 6px; cursor: pointer; transition: 0.2s; font-size: 14px; text-align: left; position: relative; overflow: hidden; width: 100%; }
.tag-btn:hover:not(:disabled) { background: #334155; transform: translateY(-2px); }
.tag-btn:disabled { background: #0f172a; color: #475569; border-color: #1e293b; cursor: not-allowed; }
.tag-btn.added { background: #10b981; color: white; border-color: #10b981; }

.live-preview { flex: 1; background: white; border-radius: 8px; padding: 15px; font-family: sans-serif; position: relative; overflow: hidden; transition: 0.3s; display: flex; }
.blank-state { position: absolute; inset: 0; display: flex; justify-content: center; align-items: center; background: #f8fafc; color: #94a3b8; font-size: 24px; font-weight: bold; flex-direction: column; opacity: 1; transition: opacity 0.5s; z-index: 10; }

/* Injected Elements */
#lp-body { opacity: 0; transform: translateY(10px); transition: all 0.5s; width: 100%; }
#lp-body.visible { opacity: 1; transform: translateY(0); }
.browser-tab { background: #e2e8f0; padding: 5px 15px; font-size: 12px; color: #475569; border-radius: 6px 6px 0 0; display: inline-block; margin-bottom: 0px; opacity: 0; transition: 0.5s; }
.browser-tab.visible { opacity: 1; }

.frame-html { border: 4px dashed transparent; transition: 0.5s; margin-top: -4px; z-index: 5; }
.frame-html.visible { border-color: #3b82f6; }
</style>

<div style="display: flex; gap: 15px; height: 350px;">
    <!-- Controls Layout -->
    <div style="width: 140px; display: flex; flex-direction: column; gap: 10px; justify-content: center;">
        <button id="btn-html" class="tag-btn" onclick="window.addTag('html')">➕ &lt;html&gt;</button>
        <button id="btn-head" class="tag-btn" onclick="window.addTag('head')" disabled>➕ &lt;head&gt;</button>
        <button id="btn-title" class="tag-btn" onclick="window.addTag('title')" disabled>➕ &lt;title&gt;</button>
        <button id="btn-body" class="tag-btn" onclick="window.addTag('body')" disabled>➕ &lt;body&gt;</button>
    </div>

    <!-- Live Preview Layout -->
    <div style="flex: 1; display: flex; flex-direction: column; background: #cbd5e1; border-radius: 8px; padding: 10px 10px 0 10px; position: relative;">
        <div id="btab" class="browser-tab">New Tab</div>
        <div id="live" class="live-preview frame-html">
            <div id="blank" class="blank-state">
                <span style="font-size:40px;">❌</span>
                <span style="font-size:14px; margin-top:10px;">Invisible Page</span>
            </div>
            <div id="lp-body">
                <h1 style="color:#0f172a; margin-top:0;">Welcome!</h1>
                <p style="color:#475569; font-size:14px; line-height: 1.5;">The page is finally visible because the <b>&lt;body&gt;</b> tag is here!</p>
            </div>
        </div>
    </div>
</div>

<script>
window.addTag = function(tag) {
    document.getElementById('btn-' + tag).classList.add('added');
    document.getElementById('btn-' + tag).disabled = true;
    
    if (tag === 'html') {
        document.getElementById('live').classList.add('visible');
        document.getElementById('btn-head').disabled = false;
    } else if (tag === 'head') {
        document.getElementById('btn-title').disabled = false;
    } else if (tag === 'title') {
        document.getElementById('btab').innerText = 'My Awesome Page';
        document.getElementById('btab').classList.add('visible');
        document.getElementById('btn-body').disabled = false;
    } else if (tag === 'body') {
        document.getElementById('blank').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('blank').style.display = 'none';
            document.getElementById('lp-body').classList.add('visible');
            const editor = document.getElementById('code-editor');
            if(!editor.value.includes('ALL_TAGS_ADDED')) {
                editor.value += '\\n<!-- ALL_TAGS_ADDED -->';
                editor.dispatchEvent(new Event('input', { bubbles: true }));
            }
        }, 500);
    }
}
</script>`,
            progress: 10,
            validator: function (code) { return code.includes("ALL_TAGS_ADDED"); }
        },
        {
            title: "3. The First Line: DOCTYPE",
            body: `<p>Before any HTML tags, the browser needs to know you are sending it a modern HTML5 document. You do this with <code>&lt;!DOCTYPE html&gt;</code>.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Drag the missing DOCTYPE to the very top line of the code!</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="120" y="80" fill="#00ff9d" font-family="monospace" font-size="16" text-anchor="middle">&lt;!DOCTYPE html&gt;</text></svg>`,
            initialCode: `<!-- INTERACTIVE MODULE -->
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

/* The toolbar holding the piece */
.pieces-bar { background: #0f172a; padding: 15px; border-radius: 8px; margin-bottom: 15px; display: flex; align-items: center; justify-content: center; border: 1px solid #334155; }
</style>

<div style="display:flex; flex-direction:column; height: 100%;">
    <div class="pieces-bar">
        <span style="color:#94a3b8; font-family:sans-serif; font-size:12px; margin-right:15px; font-weight:bold;">MISSING PIECE:</span>
        <div id="drag-piece" class="draggable" draggable="true" ondragstart="window.dragStart(event)">&lt;!DOCTYPE html&gt;</div>
    </div>
    
    <div class="editor-sim">
        <!-- Line 1: Target dropzone -->
        <div class="code-line">
            <div class="line-num">1</div>
            <div class="drop-zone" id="dz-1" ondragover="window.allowDrop(event)" ondragleave="window.dragLeave(event)" ondrop="window.drop(event, 1)"></div>
        </div>
        
        <!-- Existing code -->
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
</div>

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
            
            const editor = document.getElementById('code-editor');
            if(!editor.value.includes('DOCTYPE_PLACED')) {
                editor.value += '\\n<!-- DOCTYPE_PLACED -->';
                editor.dispatchEvent(new Event('input', { bubbles: true }));
            }
        } else {
            e.currentTarget.classList.add('error');
            setTimeout(() => e.currentTarget.classList.remove('error'), 500);
            window.showMsg('❌ DOCTYPE must be FIRST!', true);
        }
    }
}
</script>`,
            progress: 15,
            validator: function (code) { return code.includes("DOCTYPE_PLACED"); }
        },
        {
            title: "4. The Russian Dolls of HTML",
            body: `<p>HTML tags are placed inside one another like Russian nesting dolls. We call this <strong>Nesting</strong>.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Click each box to open it up and see what's inside!</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="60" y="30" width="120" height="90" fill="none" stroke="#3b82f6" stroke-width="2"/><rect x="80" y="50" width="80" height="50" fill="none" stroke="#00ff9d" stroke-width="2"/></svg>`,
            initialCode: `<!-- INTERACTIVE MODULE -->
<style>
.doll-game { background: #0f172a; height: 350px; border-radius: 12px; display: flex; align-items: center; justify-content: center; padding: 20px; font-family: monospace; overflow: hidden; }
.html-box { background: #1e3a8a; border: 3px solid #60a5fa; color: white; padding: 20px; border-radius: 12px; cursor: pointer; transition: 0.5s cubic-bezier(0.4, 0, 0.2, 1); min-width: 150px; text-align: center; font-size: 20px; font-weight: bold; position: relative; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
.html-box:hover { transform: translateY(-5px); box-shadow: 0 15px 40px rgba(0,0,0,0.6); border-color: #93c5fd; }

/* The opened state */
.html-box.opened { cursor: default; transform: none; min-width: 90%; height: 90%; background: #1e293b; border-color: #475569; display: flex; flex-direction: column; justify-content: space-between; text-align: left; padding: 15px; font-size: 14px; color: #94a3b8; }
.html-box.opened:hover { transform: none; box-shadow: none; border-color: #475569; }

.inner-container { display: none; flex: 1; flex-direction: column; gap: 15px; margin: 15px 0; justify-content: center; align-items: center; }
.html-box.opened .inner-container { display: flex; animation: fade-in 0.5s; }

/* The Head Box */
.head-box { background: #065f46; border: 3px solid #34d399; color: white; padding: 15px; border-radius: 8px; cursor: pointer; transition: 0.5s; width: 150px; text-align: center; font-size: 18px; font-weight: bold; }
.head-box:hover { transform: translateY(-3px); box-shadow: 0 10px 20px rgba(0,0,0,0.5); }
.head-box.opened { cursor: default; transform: none; width: 100%; text-align: left; background: #064e3b; border-color: #059669; font-size: 12px; color: #a7f3d0; display: flex; flex-direction: column; justify-content: space-between; min-height: 80px; }

/* The Body Box */
.body-box { background: #86198f; border: 3px solid #d946ef; color: white; padding: 15px; border-radius: 8px; cursor: pointer; transition: 0.5s; width: 150px; text-align: center; font-size: 18px; font-weight: bold; }
.body-box:hover { transform: translateY(-3px); box-shadow: 0 10px 20px rgba(0,0,0,0.5); }
.body-box.opened { cursor: default; transform: none; width: 100%; flex: 1; text-align: left; background: #701a75; border-color: #c026d3; font-size: 12px; color: #fbcfe8; display: flex; flex-direction: column; justify-content: space-between; }

.title-box { display: none; background: #047857; padding: 10px; border-radius: 4px; border: 2px solid #10b981; color: white; text-align: center; font-size: 14px; transform: scale(0.9); transition: 0.3s; }
.head-box.opened .title-box { display: block; animation: pop 0.4s forwards; }

.h1-box { display: none; background: #d946ef; padding: 10px; border-radius: 4px; border: 2px solid #f0abfc; color: white; text-align: center; font-size: 16px; margin-bottom: 5px; }
.p-box { display: none; background: #b142c9; padding: 10px; border-radius: 4px; border: 2px solid #e879f9; color: white; text-align: center; font-size: 14px; }
.body-box.opened .h1-box, .body-box.opened .p-box { display: block; animation: pop 0.4s forwards; }

@keyframes fade-in { 0% { opacity: 0; } 100% { opacity: 1; } }
@keyframes pop { 0% { transform: scale(0.5); opacity: 0; } 80% { transform: scale(1.05); } 100% { transform: scale(1); opacity: 1; } }
.click-hint { font-size: 12px; font-weight: normal; opacity: 0.7; margin-top: 5px; pointer-events: none; }
</style>

<div class="doll-game">
    <div id="html-b" class="html-box" onclick="
        if(!this.classList.contains('opened')) {
            this.classList.add('opened');
            this.innerHTML = '&lt;html&gt;<div class=\\'inner-container\\'><div id=\\'head-b\\' class=\\'head-box\\' onclick=\\'window.openHead(event)\\'>&lt;head&gt;<div class=\\'click-hint\\'>Click to open</div></div><div id=\\'body-b\\' class=\\'body-box\\' onclick=\\'window.openBody(event)\\'>&lt;body&gt;<div class=\\'click-hint\\'>Click to open</div></div></div>&lt;/html&gt;';
        }
    ">
        &lt;html&gt;
        <div class="click-hint">Click to open</div>
    </div>
</div>

<script>
window.dollsOpened = 0;
window.openHead = function(e) {
    e.stopPropagation();
    const hb = document.getElementById('head-b');
    if(!hb.classList.contains('opened')) {
        hb.classList.add('opened');
        hb.innerHTML = '&lt;head&gt;<div class="title-box">&lt;title&gt;My Site&lt;/title&gt;</div>&lt;/head&gt;';
        window.dollsOpened++;
        window.checkDolls();
    }
}
window.openBody = function(e) {
    e.stopPropagation();
    const bb = document.getElementById('body-b');
    if(!bb.classList.contains('opened')) {
        bb.classList.add('opened');
        bb.innerHTML = '&lt;body&gt;<div class="h1-box">&lt;h1&gt;Hello World!&lt;/h1&gt;</div><div class="p-box">&lt;p&gt;Welcome to my nested page.&lt;/p&gt;</div>&lt;/body&gt;';
        window.dollsOpened++;
        window.checkDolls();
    }
}
window.checkDolls = function() {
    if(window.dollsOpened >= 2) {
        setTimeout(() => {
            const editor = document.getElementById('code-editor');
            if(!editor.value.includes('DOLLS_OPENED')) {
                editor.value += '\\n<!-- DOLLS_OPENED -->';
                editor.dispatchEvent(new Event('input', { bubbles: true }));
            }
        }, 1000);
    }
}
</script>`,
            progress: 20,
            validator: function (code) { return code.includes("DOLLS_OPENED"); }
        },
        {
            title: "5. What is HTML?",
            body: `<p>HTML stands for <strong>HyperText Markup Language</strong>. It's the standard language for documents designed to be displayed in a browser.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type "HTML".</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="120" y="85" fill="#00ff9d" font-family="monospace" font-size="40" font-weight="bold" text-anchor="middle" letter-spacing="5">HTML</text></svg>`,
            initialCode: "",
            progress: 25,
            validator: function (code) { return code.toUpperCase().includes("HTML"); }
        },
        {
            title: "6. HTML builds structure",
            body: `<p>HTML is like the skeleton of a house. It tells the browser "Here is a paragraph", "Here is an image", and "Here is a title".</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Select a piece to the left and click its matching spot on the blueprint to build the house!</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="20" width="140" height="110" fill="none" stroke="#ff00e5" stroke-width="2"/><line x1="50" y1="50" x2="190" y2="50" stroke="#ff00e5" stroke-width="2"/></svg>`,
            initialCode: `<!-- INTERACTIVE MODULE -->
<style>
.house-game { display: flex; gap: 20px; height: 300px; background: #0f172a; border-radius: 12px; padding: 20px; color: white; user-select: none; }
.pieces { display: flex; flex-direction: column; gap: 10px; width: 120px; }
.piece { background: #3b82f6; padding: 10px; border-radius: 8px; text-align: center; cursor: pointer; font-weight: bold; border: 2px solid transparent; font-size: 14px; transition: 0.2s; }
.piece.selected { border-color: #ff00e5; background: #2563eb; transform: scale(1.05); }
.piece.placed { opacity: 0; pointer-events: none; }
.blueprint { flex: 1; position: relative; border: 2px dashed #475569; border-radius: 8px; background: rgba(0,0,0,0.2); }
.dz { border: 2px dashed #00f2ff; background: rgba(0,242,255,0.1); position: absolute; display: flex; align-items: center; justify-content: center; color: #00f2ff; font-size: 12px; cursor: pointer; transition: 0.2s; text-align: center; }
.dz:hover { background: rgba(0,242,255,0.2); transform: scale(1.02); }
.dz-body { bottom: 10px; left: 50%; transform: translateX(-50%); width: 160px; height: 140px; z-index: 1; }
.dz-head { bottom: 155px; left: 50%; transform: translateX(-50%); width: 180px; height: 60px; clip-path: polygon(50% 0%, 0% 100%, 100% 100%); border: none; background: rgba(0,242,255,0.2); z-index: 1; align-items: flex-end; padding-bottom: 5px; }
.dz-h1 { bottom: 10px; left: 50%; transform: translateX(-50%); width: 40px; height: 60px; z-index: 2; }
.dz-p1 { bottom: 80px; left: 50%; transform: translateX(-60px); width: 40px; height: 40px; z-index: 2; }
.dz-p2 { bottom: 80px; left: 50%; transform: translateX(20px); width: 40px; height: 40px; z-index: 2; }
.filled { background: #00ff9d !important; border: 2px solid #00ff9d !important; color: black !important; font-weight: bold; font-size: 14px; }
.dz-head.filled { background: #00ff9d !important; border: none !important; color: black !important; }
</style>
<div class="house-game" id="hg" onclick="
   if(event.target.classList.contains('piece') && !event.target.classList.contains('placed')) {
       let targetType = event.target.dataset.type;
       let dzs = document.querySelectorAll('.dz');
       for(let dz of dzs) {
           if(dz.dataset.type === targetType && !dz.classList.contains('filled')) {
               dz.classList.add('filled');
               dz.innerHTML = event.target.innerHTML;
               event.target.classList.add('placed');
               if(!window.placedCount) window.placedCount = 0;
               window.placedCount++;
               if(window.placedCount >= 5) {
                   document.getElementById('hg').style.background = 'radial-gradient(circle, #00ff9d, #0f172a)';
                   const editor = document.getElementById('code-editor');
                   if(!editor.value.includes('HOUSE' + '_BUILT')) {
                       editor.value += '\\n<!-- ' + 'HOUSE' + '_BUILT' + ' -->';
                       editor.dispatchEvent(new Event('input', { bubbles: true }));
                   }
               }
               break;
           }
       }
   }
">
  <div class="pieces">
    <div class="piece" data-type="head">head</div>
    <div class="piece" data-type="body">body</div>
    <div class="piece" data-type="h1">&lt;h1&gt;&lt;/h1&gt;</div>
    <div class="piece" data-type="p">&lt;p&gt;&lt;/p&gt;</div>
    <div class="piece" data-type="p">&lt;p&gt;&lt;/p&gt;</div>
  </div>
  <div class="blueprint">
    <div class="dz dz-body" data-type="body">Square<br>(body)</div>
    <div class="dz dz-head" data-type="head">Roof (head)</div>
    <div class="dz dz-h1" data-type="h1">Door (h1)</div>
    <div class="dz dz-p1" data-type="p">Win (p)</div>
    <div class="dz dz-p2" data-type="p">Win (p)</div>
  </div>
</div>`,
            progress: 30,
            validator: function (code) { return code.includes("HOUSE_BUILT"); }
        },
        {
            title: "7. The Title Tag 🏷️",
            body: `<p>The <code>&lt;title&gt;</code> tag tells the browser what to display in the tab at the very top of the screen. It is invisible on the page itself, but crucial for visitors to know what site they are on!</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type exactly <code>&lt;title&gt;My Cat&lt;/title&gt;</code> into the editor below between the head tags.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="50" width="160" height="30" fill="#cbd5e1" rx="4"/><rect x="45" y="55" width="80" height="25" fill="white" rx="4"/><text x="85" y="72" fill="#475569" font-family="sans-serif" font-size="12" text-anchor="middle" font-weight="bold">My Cat x</text></svg>`,
            initialCode: `<html>\n<head>\n  \n</head>\n<body>\n  <h1>Welcome!</h1>\n</body>\n</html>`,
            progress: 35,
            validator: function (code) { return code.includes("<title>My Cat</title>"); }
        },
        {
            title: "8. Real website example",
            body: `<p>Every site you visit, from Google to YouTube, uses HTML at its core.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Click play on the video below.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="30" width="160" height="90" rx="6" fill="#161b33" stroke="#00f2ff" stroke-width="2"/><circle cx="120" cy="75" r="20" fill="red"/><polygon points="115,65 115,85 130,75" fill="white"/></svg>`,
            initialCode: `<!-- INTERACTIVE MODULE -->
<div style="background:#0f172a; border-radius:12px; height:300px; display:flex; flex-direction:column; justify-content:center; align-items:center; padding:10px;">
    <h3 id="vid-msg" style="color:#00f2ff; margin-bottom:10px; font-family:sans-serif; font-size:14px; text-transform:uppercase; letter-spacing:1px; animation: pulse-cyan 2s infinite;">Click Play to Complete!</h3>
    <div style="width:100%; max-width:400px; border-radius:8px; overflow:hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
        <iframe width="100%" height="225" src="https://www.youtube.com/embed/ok-plXXHlWw?enablejsapi=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen id="yt-player"></iframe>
    </div>
</div>
<script>
window.vtClicked = false;
window.ytCheck = setInterval(() => {
    if(!window.vtClicked && document.activeElement === document.getElementById('yt-player')) {
        window.vtClicked = true;
        document.getElementById('vid-msg').innerText = 'INITIALIZING... (10s)';
        let left = 10;
        window.vtTimer = setInterval(() => {
            left--;
            document.getElementById('vid-msg').innerText = 'WATCHING... (' + left + 's)';
            if(left <= 0) {
                clearInterval(window.vtTimer);
                clearInterval(window.ytCheck);
                document.getElementById('vid-msg').innerText = 'MISSION ACCOMPLISHED!';
                const editor = document.getElementById('code-editor');
                if(!editor.value.includes('VIDEO_' + 'PLAYED')) {
                    editor.value += '\\n<!-- ' + 'VIDEO_' + 'PLAYED' + ' -->';
                    editor.dispatchEvent(new Event('input', { bubbles: true }));
                }
            }
        }, 1000);
    }
}, 500);
</script>`,
            progress: 40,
            validator: function (code) { return code.includes("VIDEO_PLAYED"); }
        },
        {
            title: "9. Name Your Tab 🏷️",
            body: `<p>The <code>&lt;title&gt;</code> element determines the name on the browser tab.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Click a preset to rename the tab to 'Cat Kingdom', or type it yourself in the editor!</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="50" width="160" height="30" fill="#cbd5e1" rx="4"/><rect x="45" y="55" width="80" height="25" fill="white" rx="4"/><text x="85" y="72" fill="#475569" font-family="sans-serif" font-size="12" text-anchor="middle" font-weight="bold">Cat Kingdom x</text></svg>`,
            initialCode: `<!-- INTERACTIVE MODULE -->
<title>New Tab</title>
<style>
.browser-mc { background: linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%); height: 350px; border-radius: 12px; padding: 20px; display: flex; flex-direction: column; overflow: hidden; font-family: sans-serif; gap: 15px;}
.browser-window { background: white; flex: 1; border-radius: 8px; display: flex; flex-direction: column; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
.b-bar { background: #e2e8f0; padding: 8px 10px 0 10px; display: flex; align-items: flex-end; gap: 5px; }
.b-tab { background: white; padding: 6px 15px; border-radius: 8px 8px 0 0; font-size: 12px; color: #334155; font-weight: bold; display: flex; align-items: center; gap: 10px; min-width: 120px; box-shadow: 0 -2px 5px rgba(0,0,0,0.05); transition: 0.3s; }
.b-close { color: #94a3b8; font-size: 10px; }
.b-content { background: white; flex: 1; padding: 20px; color: black; border-top: 1px solid #cbd5e1; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; }

.presets { display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; margin-top: auto; background: #1e293b; padding: 15px; border-radius: 8px; border: 1px solid #334155;}
.preset-btn { background: #3b82f6; color: white; border: none; padding: 8px 12px; border-radius: 6px; font-size: 12px; font-weight: bold; cursor: pointer; transition: 0.2s; }
.preset-btn:hover { background: #60a5fa; transform: translateY(-2px); }
</style>

<div class="browser-mc">
    <div class="browser-window">
        <div class="b-bar">
            <div class="b-tab">
                <span id="tab-text">New Tab</span>
                <span class="b-close">✖</span>
            </div>
        </div>
        <div class="b-content">
            <h1 style="margin:0; font-size:24px; color:#0f172a;">Welcome to My Site</h1>
            <p style="color:#64748b; font-size:14px; margin-top:10px;">Watch the tab up top change!</p>
        </div>
    </div>

    <div class="presets">
        <span style="color:#94a3b8; font-size:12px; width:100%; text-align:center; font-weight:bold; margin-bottom:5px;">PRESETS:</span>
        <button class="preset-btn" onclick="window.applyTitle('Cat Kingdom 🐱')">Cat Kingdom</button>
        <button class="preset-btn" onclick="window.applyTitle('Gamer Zone 🎮')">Gamer Zone</button>
        <button class="preset-btn" onclick="window.applyTitle('Pizza Palace 🍕')">Pizza Palace</button>
        <button class="preset-btn" onclick="window.applyTitle('School News 📰')">School News</button>
    </div>
</div>

<script>
window.applyTitle = function(titleStr) {
    document.getElementById('tab-text').innerText = titleStr;
    try {
        const editor = window.parent.document.getElementById('code-editor');
        if(editor) {
            const val = editor.value;
            const newVal = val.replace(/<title>.*?<\\/title>/i, '<title>' + titleStr + '</title>');
            if(val !== newVal) {
                editor.value = newVal;
                editor.dispatchEvent(new Event('input', { bubbles: true }));
            } else if (!val.includes('<title>')) {
                editor.value = '<title>' + titleStr + '</title>\\n' + val;
                editor.dispatchEvent(new Event('input', { bubbles: true }));
            }
        }
    } catch(e) {}
}

// Auto-sync tab text from editor on load
try {
    const editor = window.parent.document.getElementById('code-editor');
    if (editor) {
        const match = editor.value.match(/<title>(.*?)<\\/title>/i);
        if (match && match[1]) {
            document.getElementById('tab-text').innerText = match[1];
        }
    }
} catch(e) {}
</script>`,
            progress: 45,
            validator: function (code) { return code.includes("Cat Kingdom"); }
        },
        {
            title: "10. Speed Build Challenge ⏱️",
            body: `<p>Time to test your knowledge! Professional developers build structure quickly and accurately.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Click START to begin. Click the tags in the correct nesting order to win 3 stars!</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><circle cx="120" cy="75" r="40" fill="none" stroke="#fcd34d" stroke-width="4" stroke-dasharray="20 10"/><text x="120" y="80" fill="#fcd34d" font-size="20" font-weight="bold" text-anchor="middle">60s</text></svg>`,
            initialCode: `<!-- INTERACTIVE MODULE -->
<style>
.sb-game { background: #0f172a; height: 350px; border-radius: 12px; display: flex; flex-direction: column; overflow: hidden; font-family: monospace; color: white; position: relative;}
.start-screen, .game-screen, .end-screen { position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; background: #0f172a; transition: 0.3s; z-index: 10;}
.game-screen { align-items: stretch; justify-content: flex-start; z-index: 5; padding: 20px;}
.end-screen { z-index: 2; }
.btn { background: #00ff9d; color: black; font-weight: bold; padding: 10px 20px; border: none; border-radius: 6px; cursor: pointer; font-size: 16px; margin-top: 15px;}
.btn:hover { background: white; }
.timer { font-size: 24px; color: #ff00e5; font-weight: bold; text-align: center; margin-bottom: 15px;}

.drop-area { flex: 1; border: 2px dashed #334155; border-radius: 8px; display: flex; flex-direction: column; gap: 5px; padding: 10px; overflow-y: auto;}
.slot { height: 30px; border: 1px dashed #475569; border-radius: 4px; display: flex; align-items: center; justify-content: center; color: #64748b; font-size: 14px;}

.inventory { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 15px; justify-content: center;}
.piece { background: #1e3a8a; padding: 8px 12px; border-radius: 6px; cursor: pointer; border: 1px solid #3b82f6; font-size: 14px; font-weight: bold; transition: 0.1s;}
.piece:active { transform: scale(0.9); }

.slot.filled { border: 1px solid #10b981; color: #00ff9d; background: rgba(16,185,129,0.1); justify-content: flex-start; padding-left: 10px; }
.slot.error { border: 1px solid #ef4444; color: #ef4444; background: rgba(239,68,68,0.1); }
</style>

<div class="sb-game">
    <div id="start" class="start-screen">
        <h2 style="color:#00ff9d; font-size:24px; margin:0;">Are you ready?</h2>
        <p style="color:#94a3b8; font-size:14px; text-align:center; max-width:80%; margin-top:10px;">Assemble the tags in the correct order before time runs out. Mistakes deduct stars!</p>
        <button class="btn" onclick="window.startGame()">START CHALLENGE</button>
    </div>
    
    <div id="game" class="game-screen" style="opacity:0; pointer-events:none;">
        <div class="timer" id="timer">60s</div>
        <div class="drop-area" id="dzs">
            <div class="slot" data-index="0">Slot 1</div>
            <div class="slot" data-index="1" style="margin-left:15px;">Slot 2</div>
            <div class="slot" data-index="2" style="margin-left:30px;">Slot 3</div>
            <div class="slot" data-index="3" style="margin-left:30px;">Slot 4</div>
            <div class="slot" data-index="4" style="margin-left:15px;">Slot 5</div>
            <div class="slot" data-index="5">Slot 6</div>
        </div>
        <div class="inventory" id="inv">
            <div class="piece" onclick="window.clickPiece(this, '&lt;html&gt;')">&lt;html&gt;</div>
            <div class="piece" onclick="window.clickPiece(this, '&lt;/h1&gt;')">&lt;/h1&gt;</div>
            <div class="piece" onclick="window.clickPiece(this, '&lt;h1&gt;')">&lt;h1&gt;</div>
            <div class="piece" onclick="window.clickPiece(this, '&lt;/body&gt;')">&lt;/body&gt;</div>
            <div class="piece" onclick="window.clickPiece(this, '&lt;/html&gt;')">&lt;/html&gt;</div>
            <div class="piece" onclick="window.clickPiece(this, '&lt;body&gt;')">&lt;body&gt;</div>
        </div>
    </div>
    
    <div id="end" class="end-screen" style="opacity:0; pointer-events:none;">
        <h2 id="end-title" style="font-size:28px; margin:0;">Times Up!</h2>
        <div id="stars" style="font-size:40px; margin:10px 0;">⭐⭐⭐</div>
        <p id="score-text" style="color:#94a3b8; font-size:14px;"></p>
        <button class="btn" id="retry-btn" style="display:none; font-size:12px;" onclick="window.resetGame()">RETRY CHALLENGE</button>
    </div>
</div>

<script>
window.timeLeft = 60;
window.timerInt = null;
window.currentSlot = 0;
window.errors = 0;
window.correctOrder = ['<html>', '<body>', '<h1>', '</h1>', '</body>', '</html>'];

window.startGame = function() {
    document.getElementById('start').style.opacity = '0';
    document.getElementById('start').style.pointerEvents = 'none';
    document.getElementById('game').style.opacity = '1';
    document.getElementById('game').style.pointerEvents = 'auto';
    
    window.timerInt = setInterval(() => {
        window.timeLeft--;
        document.getElementById('timer').innerText = window.timeLeft + 's';
        if(window.timeLeft <= 0) { window.endGame(false); }
    }, 1000);
}

window.resetGame = function() {
    window.timeLeft = 60;
    window.currentSlot = 0;
    window.errors = 0;
    document.getElementById('timer').innerText = '60s';
    
    document.getElementById('end').style.opacity = '0';
    document.getElementById('end').style.pointerEvents = 'none';
    document.getElementById('end').style.zIndex = '2';
    
    const slots = document.querySelectorAll('.slot');
    slots.forEach((s, idx) => {
        s.classList.remove('filled');
        s.innerText = 'Slot ' + (idx + 1);
    });
    
    const pieces = document.querySelectorAll('.piece');
    pieces.forEach(p => {
        p.style.opacity = '1';
        p.style.pointerEvents = 'auto';
    });
    
    window.startGame();
}

window.clickPiece = function(el, tag) {
    if(window.currentSlot >= 6) return;
    const slots = document.querySelectorAll('.slot');
    const slot = slots[window.currentSlot];
    
    // Unescape tag for comparison
    const rawTag = tag.replace(/&lt;/g, '<').replace(/&gt;/g, '>');
    
    if(window.correctOrder[window.currentSlot] === rawTag) {
        slot.classList.add('filled');
        slot.innerHTML = tag;
        el.style.opacity = '0.3';
        el.style.pointerEvents = 'none';
        window.currentSlot++;
        if(window.currentSlot >= 6) { window.endGame(true); }
    } else {
        slot.classList.add('error');
        window.errors++;
        setTimeout(() => slot.classList.remove('error'), 300);
    }
}

window.endGame = function(won) {
    clearInterval(window.timerInt);
    document.getElementById('game').style.opacity = '0';
    document.getElementById('game').style.pointerEvents = 'none';
    
    document.getElementById('end').style.opacity = '1';
    document.getElementById('end').style.pointerEvents = 'auto';
    document.getElementById('end').style.zIndex = '20';
    
    let timeSpent = 60 - window.timeLeft;
    let stars = 3;
    if(window.errors > 0) stars--;
    if(window.errors > 2) stars--;
    if(timeSpent > 30) stars--;
    if(!won) stars = 0;
    if(stars < 0) stars = 0;
    
    document.getElementById('end-title').innerText = won ? 'Challenge Complete!' : 'Out of Time!';
    document.getElementById('end-title').style.color = won ? '#00ff9d' : '#ef4444';
    document.getElementById('stars').innerText = '⭐'.repeat(stars) + '❌'.repeat(3 - stars);
    document.getElementById('score-text').innerText = 'Time: ' + timeSpent + 's | Mistakes: ' + window.errors;
    
    if(!won || stars === 0) {
        document.getElementById('retry-btn').style.display = 'block';
    } else {
        document.getElementById('retry-btn').style.display = 'none';
        setTimeout(() => {
            const editor = document.getElementById('code-editor');
            if(!editor.value.includes('SPEED_BUILT')) {
                editor.value += '\\n<!-- SPEED_BUILT -->';
                editor.dispatchEvent(new Event('input', { bubbles: true }));
            }
        }, 1000);
    }
}
</script>`,
            progress: 50,
            validator: function (code) { return code.includes("SPEED_BUILT"); }
        },
        {
            title: "11. The Magic Extension ✨",
            body: `<p>A file is just text until you name it <code>.html</code>. That extension tells the computer to open it in a Browser.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Change the filename in the code comment from <code>index.txt</code> to <code>index.html</code>, then double-click the file to launch it!</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="30" width="60" height="80" fill="white" stroke="#94a3b8" stroke-width="2"/><polygon points="120,30 150,30 150,60" fill="#e2e8f0"/><text x="120" y="130" fill="#00ff9d" font-family="monospace" font-size="14" text-anchor="middle">.html</text></svg>`,
            initialCode: `<!-- Filename: index.txt -->
<h1>My First Page</h1>

<!-- INTERACTIVE MODULE -->
<style>
.icon-desk { background: linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%); height: 350px; border-radius: 12px; position: relative; display: flex; align-items: center; justify-content: center; overflow: hidden; margin-top:20px;}
.file-icon { width: 100px; height: 120px; display: flex; flex-direction: column; align-items: center; cursor: pointer; transition: 0.2s; position: relative;}
.file-icon:hover { transform: scale(1.05); }
.file-icon:active { transform: scale(0.95); }
.doc-img { width: 64px; height: 80px; background: white; border-radius: 4px 12px 4px 4px; position: relative; box-shadow: 2px 4px 10px rgba(0,0,0,0.3); transition: 0.3s; display: flex; align-items: center; justify-content: center; font-size: 30px;}
.doc-img::after { content: ''; position: absolute; top: 0; right: 0; border-width: 0 16px 16px 0; border-style: solid; border-color: transparent transparent #cbd5e1 #cbd5e1; border-radius: 0 12px 0 0; }
.file-name { color: white; margin-top: 10px; font-family: sans-serif; font-size: 14px; text-shadow: 1px 1px 2px black; font-weight: bold; padding: 2px 8px; border-radius: 4px; }
.file-icon.selected .file-name { background: rgba(59,130,246,0.5); }

/* HTML Mode styles */
.html-mode .doc-img { background: #3b82f6; color: white; }
.html-mode .doc-img::after { border-color: transparent transparent #2563eb #2563eb; }

.browser-popup { position: absolute; inset: 20px; background: white; border-radius: 8px; box-shadow: 0 20px 50px rgba(0,0,0,0.8); display: none; flex-direction: column; overflow: hidden; transform: scale(0.5); opacity: 0; transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
.browser-popup.open { display: flex; transform: scale(1); opacity: 1; }
.bp-bar { background: #e2e8f0; padding: 10px; display: flex; align-items: center; gap: 8px; }
.bp-dot { width: 12px; height: 12px; border-radius: 50%; background: #94a3b8; }
.bp-content { flex: 1; display: flex; align-items: center; justify-content: center; flex-direction: column; color: black; font-family: sans-serif; }
</style>

<div class="icon-desk" id="desk" onclick="document.getElementById('file1').classList.remove('selected')">
    <div class="file-icon" id="file1" onclick="event.stopPropagation(); this.classList.add('selected')" ondblclick="window.openFile()">
        <div class="doc-img" id="dimg">📄</div>
        <div class="file-name" id="fname">index.txt</div>
    </div>
    
    <div id="bpop" class="browser-popup">
        <div class="bp-bar"><div class="bp-dot" style="background:#ef4444"></div><div class="bp-dot" style="background:#f59e0b"></div><div class="bp-dot" style="background:#10b981"></div></div>
        <div class="bp-content">
            <h1 style="margin:0; color:#3b82f6; font-size:32px;">It Works! 🎉</h1>
            <p style="color:#64748b; margin-top:10px;">You created a real webpage.</p>
        </div>
    </div>
</div>

<script>
window.isFileHtml = false;
try {
    const editor = window.parent.document.getElementById('code-editor');
    if (editor) {
        const val = editor.value;
        const match = val.match(/<!--\\s*Filename:\\s*(.+?)\\s*-->/i);
        if (match && match[1]) {
            const name = match[1].trim();
            document.getElementById('fname').innerText = name;
            if (name.toLowerCase().endsWith('.html')) {
                document.getElementById('file1').classList.add('html-mode');
                document.getElementById('dimg').innerText = '🌐';
                window.isFileHtml = true;
            }
        }
    }
} catch(e) {}

window.openFile = function() {
    if(window.isFileHtml) {
        document.getElementById('bpop').style.display = 'flex';
        setTimeout(() => document.getElementById('bpop').classList.add('open'), 10);
        setTimeout(() => {
            try {
                const editor = window.parent.document.getElementById('code-editor');
                if(editor && !editor.value.includes('FILE_OPENED')) {
                    editor.value += '\\n<!-- FILE_OPENED -->';
                    editor.dispatchEvent(new Event('input', { bubbles: true }));
                }
            } catch(e) {}
        }, 1000);
    } else {
        alert("Computers open .txt files in Notepad. Change the comment extension to .html to open in a browser!");
    }
}
</script>`,
            progress: 55,
            validator: function (code) { return code.includes("FILE_OPENED"); }
        },
        {
            title: "12. Launching Apps 🖱️",
            body: `<p>The extension tells the operating system which app to use when you double-click a file.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Double-click the <code>.html</code> file to open it in the Browser!</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="50" width="160" height="60" fill="none" stroke="#3b82f6" stroke-width="2" stroke-dasharray="5 5"/><text x="120" y="85" fill="#3b82f6" font-family="sans-serif" font-size="14" text-anchor="middle">.txt vs .html vs .jpg</text></svg>`,
            initialCode: `<!-- INTERACTIVE MODULE -->
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

<div class="multi-desk" id="mdesk" onclick="document.querySelectorAll('.f-icon').forEach(el=>el.classList.remove('sel'))">
    
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
    
    <!-- Notepad Window -->
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
    
    <!-- Image Viewer Window -->
    <div id="w-img" class="app-win">
        <div class="aw-bar">
            <div class="aw-dots"><div class="aw-dot"></div><div class="aw-dot"></div><div class="aw-dot"></div></div>
            <div class="aw-title">Photos - cat.jpg</div>
            <div class="aw-close" onclick="window.cl('w-img')">✖</div>
        </div>
        <div class="aw-body">🐱</div>
    </div>
    
    <!-- Browser Window -->
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

</div>

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
            try {
                const editor = window.parent.document.getElementById('code-editor');
                if(editor && !editor.value.includes('APP_LAUNCHED')) {
                    editor.value += '\\n<!-- APP_LAUNCHED -->';
                    editor.dispatchEvent(new Event('input', { bubbles: true }));
                }
            } catch(e) {}
        }, 1000);
    }
}
window.cl = function(wId) {
    const win = document.getElementById(wId);
    win.classList.remove('show');
    setTimeout(() => win.style.display = 'none', 300);
}
</script>`,
            progress: 60,
            validator: function (code) { return code.includes("APP_LAUNCHED"); }
        },
        {
            title: "13. Whack-a-Bug 🐛",
            body: `<p>A "bug" is just a mistake in the code. Some are typos, some are missing tags.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Find the 3 bugs in the code editor below and fix them before the timer runs out!</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="120" y="80" fill="#ef4444" font-size="40" text-anchor="middle">🐛🔨</text></svg>`,
            initialCode: `<!-- INTERACTIVE MODULE -->
<style>
.bug-game { background: #0f172a; border-radius: 12px; height: 350px; padding: 20px; color: white; display: flex; flex-direction: column; font-family: monospace;}
.bug-hud { display: flex; justify-content: space-between; align-items: center; background: #1e293b; padding: 15px; border-radius: 8px; margin-bottom: 20px;}
.timer { font-size: 24px; color: #ff00e5; font-weight: bold;}
.bugs-left { font-size: 18px; color: #00ff9d;}
.bug-list { flex: 1; display: flex; flex-direction: column; gap: 10px;}
.bug-item { background: rgba(239,68,68,0.2); border: 1px solid #ef4444; padding: 15px; border-radius: 8px; display: flex; justify-content: space-between; align-items: center;}
.bug-item.fixed { background: rgba(16,185,129,0.2); border-color: #10b981; color: #00ff9d;}
.start-overlay { position: absolute; inset: 0; background: rgba(15,23,42,0.95); display: flex; flex-direction: column; align-items: center; justify-content: center; z-index: 10; border-radius: 12px;}
</style>
<div class="bug-game" id="bg-game" style="position:relative;">
    <div id="start" class="start-overlay">
        <h2 style="color:#ef4444; margin:0 0 10px 0; font-size: 28px;">Whack-a-Bug! 🐛</h2>
        <p style="color:#94a3b8; text-align:center; max-width:80%; font-family: sans-serif;">The code editor below has 3 bugs. You have 60 seconds to find and fix them in the code!</p>
        <button onclick="window.startBugs()" style="margin-top:20px; padding:12px 24px; background:#00ff9d; color:black; font-weight:bold; border:none; border-radius:8px; cursor:pointer; font-size: 16px;">START GAME</button>
    </div>
    <div id="end" class="start-overlay" style="display:none;">
        <h2 id="end-title" style="margin:0 0 10px 0; font-size: 32px;">Result</h2>
        <p id="end-score" style="color:#94a3b8; font-family: sans-serif; font-size: 18px; text-align:center;"></p>
    </div>

    <div class="bug-hud">
        <div class="timer" id="b-timer">60s</div>
        <div class="bugs-left" id="b-count">Bugs Left: 3</div>
    </div>
    <div class="bug-list">
        <div class="bug-item" id="bug1">
            <span>1. Title says "Mispelled Tab" (Change to My Tab)</span>
            <span class="status">🐛</span>
        </div>
        <div class="bug-item" id="bug2">
            <span>2. Missing > bracket on &lt;h1</span>
            <span class="status">🐛</span>
        </div>
        <div class="bug-item" id="bug3">
            <span>3. Typo: "wobsit" (Change to website)</span>
            <span class="status">🐛</span>
        </div>
    </div>
</div>
<script>
window.bTime = 60;
window.bInt = null;
window.bugsFixed = [0,0,0];
window.gameActive = false;

window.startBugs = function() {
    document.getElementById('start').style.display = 'none';
    window.gameActive = true;
    try {
        const editor = window.parent.document.getElementById('code-editor');
        if(editor) {
            editor.value = "<html>\\n<head>\\n    <title>Mispelled Tab</title>\\n</head>\\n<body>\\n    <h1Welcome</h1>\\n    <p>This is my wobsit.</p>\\n</body>\\n</html>";
            editor.dispatchEvent(new Event('input', { bubbles: true }));
        }
    } catch(e) {}
    
    window.bInt = setInterval(() => {
        window.bTime--;
        document.getElementById('b-timer').innerText = window.bTime + 's';
        if(window.bTime <= 0) window.endBugs(false);
    }, 1000);
}

// Watch the editor for fixes
window.bugCheckInt = setInterval(() => {
    if(!window.gameActive) return;
    try {
        const editor = window.parent.document.getElementById('code-editor');
        if(!editor) return;
        const val = editor.value;
        
        // Bug 1: <title>My Tab</title>
        if(val.includes('<title>My Tab</title>')) {
            document.getElementById('bug1').classList.add('fixed');
            document.getElementById('bug1').querySelector('.status').innerText = '✅';
            window.bugsFixed[0] = 1;
        }
        
        // Bug 2: <h1>Welcome</h1>
        if(val.includes('<h1>Welcome</h1>') || val.includes('<h1>Welcome')) {
            document.getElementById('bug2').classList.add('fixed');
            document.getElementById('bug2').querySelector('.status').innerText = '✅';
            window.bugsFixed[1] = 1;
        }
        
        // Bug 3: website
        if(val.includes('website')) {
            document.getElementById('bug3').classList.add('fixed');
            document.getElementById('bug3').querySelector('.status').innerText = '✅';
            window.bugsFixed[2] = 1;
        }
        
        const total = window.bugsFixed[0] + window.bugsFixed[1] + window.bugsFixed[2];
        document.getElementById('b-count').innerText = 'Bugs Left: ' + (3 - total);
        
        if(total === 3) window.endBugs(true);
        
    } catch(e) {}
}, 500);

window.endBugs = function(won) {
    window.gameActive = false;
    clearInterval(window.bInt);
    document.getElementById('end').style.display = 'flex';
    if(won) {
        document.getElementById('end-title').innerText = 'BUGS SMASHED! 🎉';
        document.getElementById('end-title').style.color = '#00ff9d';
        let score = window.bTime * 10;
        document.getElementById('end-score').innerText = 'Score: ' + score + ' (Time Bonus!)';
        setTimeout(() => {
            try {
                const editor = window.parent.document.getElementById('code-editor');
                if(editor && !editor.value.includes('BUGS_FIXED')) {
                    editor.value += '\\n<!-- BUGS_FIXED -->';
                    editor.dispatchEvent(new Event('input', { bubbles: true }));
                }
            } catch(e) {}
        }, 1500);
    } else {
        document.getElementById('end-title').innerText = 'GAME OVER';
        document.getElementById('end-title').style.color = '#ef4444';
        document.getElementById('end-score').innerHTML = 'You ran out of time!<br><br><button onclick="window.location.reload()" style="padding:10px 20px; background:#ef4444; color:white; border:none; border-radius:6px; font-weight:bold; cursor:pointer; margin-top:20px;">TRY AGAIN</button>';
    }
}
</script>`,
            progress: 65,
            validator: function (code) { return code.includes("BUGS_FIXED"); }
        },
        {
            title: "14. Messy vs Clean Code 🧹",
            body: `<p>The browser ignores extra spaces and line breaks. But <strong>humans</strong> need them! Good code is beautifully indented.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Click 'MAKE IT READABLE' to format the crazy code block below.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg">
                <rect x="20" y="30" width="80" height="90" fill="#1e293b" rx="4"/>
                <path d="M25 40 L90 40 M25 50 L70 50 M25 60 L85 60 M25 70 L60 70 M25 80 L95 80" stroke="#ef4444" stroke-width="2"/>
                <text x="60" y="140" fill="#ef4444" font-size="12" text-anchor="middle" font-weight="bold">MESSY</text>
                
                <rect x="140" y="30" width="80" height="90" fill="#1e293b" rx="4"/>
                <path d="M145 40 L180 40 M155 50 L195 50 M155 60 L185 60 M145 70 L170 70" stroke="#00ff9d" stroke-width="2"/>
                <text x="180" y="140" fill="#00ff9d" font-size="12" text-anchor="middle" font-weight="bold">CLEAN</text>
            </svg>`,
            initialCode: `<!-- INTERACTIVE MODULE -->
<style>
.format-game { background: #0f172a; height: 350px; border-radius: 12px; display: flex; flex-direction: column; padding: 20px; align-items: center; justify-content: center; }
.code-box { background: #1e293b; border: 2px solid #334155; padding: 20px; border-radius: 8px; width: 100%; max-width: 400px; font-family: 'Consolas', monospace; font-size: 14px; color: #d4d4d4; transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1); white-space: pre-wrap; word-break: break-all; margin-bottom: 20px;}
.code-tag { color: #569cd6; }
.code-box.clean { white-space: pre; border-color: #00ff9d; box-shadow: 0 0 20px rgba(0,255,157,0.2); }
.clean-btn { background: #3b82f6; color: white; border: none; padding: 12px 24px; border-radius: 6px; font-weight: bold; cursor: pointer; transition: 0.2s; font-size: 16px; }
.clean-btn:hover { background: #60a5fa; transform: translateY(-2px); }
</style>
<div class="format-game">
    <div class="code-box" id="cbox">&lt;<span class="code-tag">html</span>&gt;&lt;<span class="code-tag">head</span>&gt;&lt;<span class="code-tag">title</span>&gt;My Site&lt;/<span class="code-tag">title</span>&gt;&lt;/<span class="code-tag">head</span>&gt;&lt;<span class="code-tag">body</span>&gt;&lt;<span class="code-tag">h1</span>&gt;Hello World&lt;/<span class="code-tag">h1</span>&gt;&lt;<span class="code-tag">p</span>&gt;Welcome!&lt;/<span class="code-tag">p</span>&gt;&lt;/<span class="code-tag">body</span>&gt;&lt;/<span class="code-tag">html</span>&gt;</div>
    <button class="clean-btn" id="cbtn" onclick="window.cleanCode()">🧹 MAKE IT READABLE</button>
</div>
<script>
window.cleanCode = function() {
    const box = document.getElementById('cbox');
    box.classList.add('clean');
    box.innerHTML = '&lt;<span class="code-tag">html</span>&gt;\\n  &lt;<span class="code-tag">head</span>&gt;\\n    &lt;<span class="code-tag">title</span>&gt;My Site&lt;/<span class="code-tag">title</span>&gt;\\n  &lt;/<span class="code-tag">head</span>&gt;\\n  &lt;<span class="code-tag">body</span>&gt;\\n    &lt;<span class="code-tag">h1</span>&gt;Hello World&lt;/<span class="code-tag">h1</span>&gt;\\n    &lt;<span class="code-tag">p</span>&gt;Welcome!&lt;/<span class="code-tag">p</span>&gt;\\n  &lt;/<span class="code-tag">body</span>&gt;\\n&lt;/<span class="code-tag">html</span>&gt;';
    
    document.getElementById('cbtn').innerText = 'Much Better! ✨';
    document.getElementById('cbtn').style.background = '#00ff9d';
    document.getElementById('cbtn').style.color = '#0f172a';
    
    setTimeout(() => {
        try {
            const editor = window.parent.document.getElementById('code-editor');
            if(editor && !editor.value.includes('FORMAT_CLEANED')) {
                editor.value += '\\n<!-- FORMAT_CLEANED -->';
                editor.dispatchEvent(new Event('input', { bubbles: true }));
            }
        } catch(e) {}
    }, 1000);
}
</script>`,
            progress: 70,
            validator: function (code) { return code.includes("FORMAT_CLEANED"); }
        },
        {
            title: "15. The Confused Robot 🤖",
            body: `<p>Browsers act like robots following your explicit instructions. If a tag is broken, the robot gets stuck and doesn't know where to go!</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Click the broken red tags to fix the structure so DOM the Robot can reach the flag!</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg">
                <circle cx="120" cy="75" r="40" fill="none" stroke="#ef4444" stroke-width="4" stroke-dasharray="10 5"/>
                <text x="120" y="82" fill="#ef4444" font-size="24" text-anchor="middle">🤖</text>
            </svg>`,
            initialCode: `<!-- INTERACTIVE MODULE -->
<style>
.robo-game { background: #0f172a; height: 350px; border-radius: 12px; padding: 20px; color: white; display: flex; flex-direction: column; align-items: center; position: relative;}
.path-container { display: flex; flex-direction: column; gap: 15px; align-items: center; width: 100%; margin-top: 10px; position: relative;}
.stone { background: #1e293b; padding: 10px 20px; border-radius: 8px; border: 2px solid #3b82f6; font-family: monospace; min-width: 150px; text-align: center; font-size: 16px; color: #93c5fd; position: relative; z-index: 2;}
.stone.broken { background: rgba(239,68,68,0.2); border-color: #ef4444; color: #fca5a5; cursor: pointer; border-style: dashed; animation: pulse-red 2s infinite;}
.stone.broken:hover { background: rgba(239,68,68,0.4); }
.stone.fixed { background: rgba(16,185,129,0.2); border-color: #10b981; color: #6ee7b7; border-style: solid; animation: none;}

.robot { font-size: 30px; position: absolute; left: 50%; transform: translateX(-50%); top: 5px; z-index: 5; transition: top 0.5s ease-in-out;}
.flag { font-size: 30px; margin-top: -5px; z-index: 2;}
.walk-line { position: absolute; top: 0; bottom: 0; left: 50%; width: 4px; background: #334155; transform: translateX(-50%); z-index: 1;}

@keyframes pulse-red { 0% { box-shadow: 0 0 0 0 rgba(239,68,68,0.4); } 70% { box-shadow: 0 0 0 10px rgba(239,68,68,0); } 100% { box-shadow: 0 0 0 0 rgba(239,68,68,0); } }
</style>

<div class="robo-game">
    <h3 style="margin:0; color:#00f2ff;">Help DOM the Robot!</h3>
    <p style="color:#94a3b8; font-size:14px; margin-top:5px;">Click the broken tags to fix the path.</p>
    
    <div class="path-container">
        <div class="walk-line"></div>
        <div class="robot" id="rob">🤖</div>
        
        <div class="stone" style="margin-top: 40px;">&lt;html&gt;</div>
        <div class="stone broken" id="s1" onclick="window.fixStone('s1', '&lt;head&gt;')">&lt;head</div>
        <div class="stone broken" id="s2" onclick="window.fixStone('s2', '&lt;body&gt;')">body&gt;</div>
        <div class="stone broken" id="s3" onclick="window.fixStone('s3', '&lt;/html&gt;')">&lt;html/&gt;</div>
        
        <div class="flag">🚩</div>
    </div>
</div>

<script>
window.robPos = 0;
window.stonesFixed = 0;

window.moveRobot = function() {
    const rob = document.getElementById('rob');
    if(window.stonesFixed === 1) rob.style.top = '95px';
    if(window.stonesFixed === 2) rob.style.top = '145px';
    if(window.stonesFixed === 3) {
        rob.style.top = '225px';
        setTimeout(() => {
            rob.innerText = '🤖🎉';
            try {
                const editor = window.parent.document.getElementById('code-editor');
                if(editor && !editor.value.includes('ROBOT_SAVED')) {
                    editor.value += '\\n<!-- ROBOT_SAVED -->';
                    editor.dispatchEvent(new Event('input', { bubbles: true }));
                }
            } catch(e) {}
        }, 600);
    }
}

window.fixStone = function(id, correctTag) {
    const el = document.getElementById(id);
    if(el.classList.contains('broken')) {
        if(id === 's1' && window.stonesFixed === 0) {
            el.classList.remove('broken');
            el.classList.add('fixed');
            el.innerText = correctTag;
            window.stonesFixed++;
            window.moveRobot();
        } else if(id === 's2' && window.stonesFixed === 1) {
            el.classList.remove('broken');
            el.classList.add('fixed');
            el.innerText = correctTag;
            window.stonesFixed++;
            window.moveRobot();
        } else if(id === 's3' && window.stonesFixed === 2) {
            el.classList.remove('broken');
            el.classList.add('fixed');
            el.innerText = correctTag;
            window.stonesFixed++;
            window.moveRobot();
        } else {
            el.style.transform = 'translateX(5px)';
            setTimeout(() => el.style.transform = 'translateX(-5px)', 50);
            setTimeout(() => el.style.transform = 'translateX(0)', 100);
        }
    }
}
setTimeout(() => { document.getElementById('rob').style.top = '45px'; }, 500);
</script>`,
            progress: 75,
            validator: function (code) { return code.includes("ROBOT_SAVED"); }
        },
        {
            title: "16. Head vs Body Sorting 🧠",
            body: `<p>The <code>&lt;head&gt;</code> is for invisible setup (like title and metadata). The <code>&lt;body&gt;</code> is for visible content that your users actually see.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Drag the tags from the tray into the correct bucket!</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg">
                <rect x="20" y="30" width="80" height="90" fill="none" stroke="#a855f7" stroke-width="2" stroke-dasharray="5 5" rx="8"/>
                <text x="60" y="80" fill="#a855f7" font-size="20" text-anchor="middle" font-weight="bold">HEAD</text>
                
                <rect x="140" y="30" width="80" height="90" fill="none" stroke="#eab308" stroke-width="2" stroke-dasharray="5 5" rx="8"/>
                <text x="180" y="80" fill="#eab308" font-size="20" text-anchor="middle" font-weight="bold">BODY</text>
            </svg>`,
            initialCode: `<!-- INTERACTIVE MODULE -->
<style>
.sort-game { background: #0f172a; height: 350px; border-radius: 12px; padding: 20px; display: flex; flex-direction: column; position: relative;}
.sg-top { display: flex; gap: 20px; flex: 1; align-items: stretch;}
.bucket { flex: 1; border: 2px dashed #475569; border-radius: 8px; display: flex; flex-direction: column; align-items: center; padding: 10px; transition: 0.2s;}
.bucket.head-b { border-color: #a855f7; background: rgba(168,85,247,0.1); }
.bucket.body-b { border-color: #eab308; background: rgba(234,179,8,0.1); }
.bucket.drag-over { background: rgba(255,255,255,0.1); transform: scale(1.02); }
.bucket h3 { margin: 0 0 10px 0; font-size: 16px; text-transform: uppercase;}
.head-b h3 { color: #a855f7; }
.body-b h3 { color: #eab308; }

.tray { height: 80px; background: #1e293b; border-radius: 8px; margin-top: 15px; display: flex; align-items: center; justify-content: center; gap: 10px; padding: 10px; flex-wrap: wrap;}
.drag-item { background: #3b82f6; color: white; padding: 8px 12px; border-radius: 6px; cursor: grab; font-family: monospace; font-size: 14px; font-weight: bold; user-select: none;}
.drag-item:active { cursor: grabbing; transform: scale(0.95); opacity: 0.8;}
.drag-item.correct { background: #10b981; cursor: default; margin-top: 5px;}
.drag-item.wrong { background: #ef4444; animation: shake 0.4s;}
@keyframes shake { 0%, 100% {transform: translateX(0);} 25% {transform: translateX(-5px);} 75% {transform: translateX(5px);} }
</style>

<div class="sort-game">
    <div class="sg-top">
        <div class="bucket head-b" id="b-head" data-target="head">
            <h3>&lt;head&gt;</h3>
            <p style="color:#cbd5e1; font-size:12px; margin:0 0 10px 0; text-align:center;">Invisible Setup</p>
        </div>
        <div class="bucket body-b" id="b-body" data-target="body">
            <h3>&lt;body&gt;</h3>
            <p style="color:#cbd5e1; font-size:12px; margin:0 0 10px 0; text-align:center;">Visible Content</p>
        </div>
    </div>
    
    <div class="tray" id="tray">
        <div class="drag-item" draggable="true" id="di1" data-type="head">&lt;title&gt;</div>
        <div class="drag-item" draggable="true" id="di2" data-type="body">&lt;p&gt; Paragraph</div>
        <div class="drag-item" draggable="true" id="di3" data-type="body">&lt;img&gt; Image</div>
        <div class="drag-item" draggable="true" id="di4" data-type="head">&lt;meta&gt; Data</div>
    </div>
</div>

<script>
window.sortCount = 0;
window.initDrag = function() {
    const items = document.querySelectorAll('.drag-item');
    const buckets = document.querySelectorAll('.bucket');

    items.forEach(i => {
        i.addEventListener('dragstart', e => {
            if(i.classList.contains('correct')) { e.preventDefault(); return; }
            e.dataTransfer.setData('text/plain', i.id);
            i.style.opacity = '0.5';
        });
        i.addEventListener('dragend', e => {
            i.style.opacity = '1';
        });
    });

    buckets.forEach(b => {
        b.addEventListener('dragover', e => {
            e.preventDefault();
            b.classList.add('drag-over');
        });
        b.addEventListener('dragleave', e => {
            b.classList.remove('drag-over');
        });
        b.addEventListener('drop', e => {
            e.preventDefault();
            b.classList.remove('drag-over');
            const id = e.dataTransfer.getData('text/plain');
            if(!id) return;
            const item = document.getElementById(id);
            if(!item) return;
            
            const targetType = b.getAttribute('data-target');
            const itemType = item.getAttribute('data-type');
            
            if(targetType === itemType) {
                item.classList.add('correct');
                item.draggable = false;
                b.appendChild(item);
                window.sortCount++;
                if(window.sortCount === 4) {
                    setTimeout(() => {
                        try {
                            const editor = window.parent.document.getElementById('code-editor');
                            if(editor && !editor.value.includes('SORTED_HEAD_BODY')) {
                                editor.value += '\\n<!-- SORTED_HEAD_BODY -->';
                                editor.dispatchEvent(new Event('input', { bubbles: true }));
                            }
                        } catch(err) {}
                    }, 500);
                }
            } else {
                item.classList.add('wrong');
                setTimeout(() => item.classList.remove('wrong'), 400);
            }
        });
    });
}
setTimeout(window.initDrag, 100);
</script>`,
            progress: 80,
            validator: function (code) { return code.includes("SORTED_HEAD_BODY"); }
        },
        {
            title: "17. Why people learn HTML",
            body: `<p>HTML is the absolute foundation for all websites, web games, mobile apps built on web tech, and even email templates!</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Click to build the web development foundation stack.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="100" width="160" height="20" fill="#00ff9d"/></svg>`,
            initialCode: `<!-- INTERACTIVE MODULE -->
<style>
.stack-game { height: 300px; position: relative; display: flex; flex-direction: column; justify-content: flex-end; align-items: center; gap: 5px; background: #0f172a; padding-bottom: 30px; border-radius: 12px; }
.block { width: 80%; height: 50px; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size:18px; opacity: 0; transform: translateY(-50px); transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
.b-html { background: #ef4444; color: white; cursor: pointer; opacity: 1; transform: translateY(0); box-shadow: 0 5px 0 #b91c1c; }
.b-css { background: #3b82f6; color: white; box-shadow: 0 5px 0 #1d4ed8; z-index: 2; pointer-events: none; margin-bottom: -5px; }
.b-js { background: #f59e0b; color: black; box-shadow: 0 5px 0 #b45309; z-index: 3; pointer-events: none; margin-bottom: -5px; }
</style>
<div class="stack-game" id="sg">
    <div class="block b-js" id="b-js">JavaScript (Interactivity)</div>
    <div class="block b-css" id="b-css">CSS (Styling)</div>
    <div class="block b-html" onclick="
        document.getElementById('b-css').style.opacity = '1';
        document.getElementById('b-css').style.transform = 'translateY(0)';
        setTimeout(() => {
            document.getElementById('b-js').style.opacity = '1';
            document.getElementById('b-js').style.transform = 'translateY(0)';
            document.getElementById('sg').style.background = 'radial-gradient(circle at bottom, rgba(16,185,129,0.2) 0%, #0f172a 70%)';
            setTimeout(() => {
                const editor = document.getElementById('code-editor');
                if(!editor.value.includes('FOUNDATI' + 'ON_BUILT')) {
                    editor.value += '\\n<!-- ' + 'FOUNDATI' + 'ON_BUILT' + ' -->';
                    editor.dispatchEvent(new Event('input', { bubbles: true }));
                }
            }, 1000);
        }, 800);
        this.innerText = 'HTML (Foundation)';
        this.style.background = '#10b981';
        this.style.boxShadow = '0 5px 0 #059669';
        this.onclick = null;
    ">Click to lay HTML Foundation</div>
</div>`,
            progress: 85,
            validator: function (code) { return code.includes("FOUNDATION_BUILT"); }
        },
        {
            title: "18. Drawing with HTML 🎨",
            body: `<p>HTML isn't just for text! You can even draw interactive shapes and animations using something called <strong>SVG</strong> (Scalable Vector Graphics).</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Click PLAY to draw a cool animated geometric logo!</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg">
                <circle cx="120" cy="75" r="40" fill="none" stroke="#ff00e5" stroke-width="4"/>
                <polygon points="110,60 110,90 135,75" fill="#00f2ff"/>
            </svg>`,
            initialCode: `<!-- INTERACTIVE MODULE -->
<style>
.svg-stage { background: #0f172a; height: 350px; border-radius: 12px; display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden; margin-top: 15px;}
.play-btn { background: #ff00e5; color: white; border: none; padding: 15px 30px; border-radius: 30px; font-size: 20px; font-weight: bold; cursor: pointer; box-shadow: 0 0 20px rgba(255,0,229,0.5); z-index: 10; transition: 0.3s; position: absolute;}
.play-btn:hover { transform: scale(1.1); box-shadow: 0 0 30px rgba(255,0,229,0.8); }

.svg-canvas { width: 100%; height: 100%; opacity: 0; transition: 1s; }
.shape { fill: none; stroke-width: 4; stroke-linecap: round; stroke-linejoin: round; }

/* Animations */
.draw-circle { stroke: #00ff9d; stroke-dasharray: 630; stroke-dashoffset: 630; }
.draw-poly { stroke: #3b82f6; stroke-dasharray: 400; stroke-dashoffset: 400; }
.draw-line { stroke: #ff00e5; stroke-dasharray: 200; stroke-dashoffset: 200; }

.animating .draw-circle { animation: draw-svg 2s forwards ease-in-out; }
.animating .draw-poly { animation: draw-svg 1.5s 1s forwards ease-in-out; }
.animating .draw-line { animation: draw-svg 1s 2s forwards ease-in-out; }
.animating .fill-in { animation: fillUp-svg 1s 3s forwards; }

@keyframes draw-svg { to { stroke-dashoffset: 0; } }
@keyframes fillUp-svg { to { fill: rgba(59,130,246,0.3); } }
@keyframes spin-svg { 100% { transform: rotate(360deg); } }
.animating .spin-group { transform-origin: center; animation: spin-svg 10s 3s linear infinite; }
</style>

<div class="svg-stage">
    <button class="play-btn" id="play-btn" onclick="window.playSVG()">▶ PLAY SVG</button>
    
    <svg class="svg-canvas" id="canvas" viewBox="0 0 400 350" xmlns="http://www.w3.org/2000/svg">
        <g class="spin-group" style="transform-origin: 200px 175px;">
            <circle cx="200" cy="175" r="100" class="shape draw-circle"/>
            <polygon points="200,75 286,225 114,225" class="shape draw-poly fill-in"/>
            <line x1="200" y1="75" x2="200" y2="275" class="shape draw-line"/>
            <line x1="100" y1="175" x2="300" y2="175" class="shape draw-line"/>
        </g>
    </svg>
</div>

<script>
window.playSVG = function() {
    document.getElementById('play-btn').style.opacity = '0';
    setTimeout(() => document.getElementById('play-btn').style.display = 'none', 300);
    
    const canvas = document.getElementById('canvas');
    canvas.style.opacity = '1';
    canvas.classList.add('animating');
    
    setTimeout(() => {
        try {
            const editor = window.parent.document.getElementById('code-editor');
            if(editor && !editor.value.includes('SVG_PLAYED')) {
                editor.value += '\\n<!-- SVG_PLAYED -->';
                editor.dispatchEvent(new Event('input', { bubbles: true }));
            }
        } catch(e) {}
    }, 4000);
}
</script>`,
            progress: 90,
            validator: function (code) { return code.includes("SVG_PLAYED"); }
        },
        {
            title: "19. Blueprint vs Build 🏗️",
            body: `<p>HTML is the blueprint. The browser is the builder. Let's look at a few common blueprints to see what they build.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Click all 3 items in the checklist to unlock the final challenge!</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg">
                <rect x="50" y="35" width="60" height="80" fill="none" stroke="#3b82f6" stroke-width="2" stroke-dasharray="4 2" rx="4"/>
                <line x1="60" y1="50" x2="100" y2="50" stroke="#3b82f6" stroke-width="2"/>
                <line x1="60" y1="65" x2="90" y2="65" stroke="#3b82f6" stroke-width="2"/>
                
                <text x="135" y="80" fill="#94a3b8" font-size="20">➡️</text>
                
                <rect x="160" y="35" width="60" height="80" fill="#3b82f6" rx="4" shadow="0 4 6 rgba(0,0,0,0.5)"/>
                <rect x="170" y="45" width="40" height="15" fill="#60a5fa" rx="2"/>
                <rect x="170" y="65" width="40" height="10" fill="#93c5fd" rx="2"/>
            </svg>`,
            initialCode: `<!-- INTERACTIVE MODULE -->
<style>
.bp-game { background: #0f172a; height: 350px; border-radius: 12px; padding: 20px; display: flex; flex-direction: column; position: relative; overflow: hidden; margin-top:20px;}
.bp-title { color: #00f2ff; margin: 0 0 15px 0; font-family: sans-serif; font-size: 20px;}
.checklist { display: flex; flex-direction: column; gap: 12px; }
.cl-item { background: #1e293b; padding: 15px 20px; border-radius: 8px; border-left: 4px solid #3b82f6; cursor: pointer; display: flex; align-items: center; justify-content: space-between; font-weight: bold; color: white; transition: 0.2s; font-family: sans-serif;}
.cl-item:hover { background: #334155; transform: translateX(5px); }
.cl-item.done { border-left-color: #10b981; color: #94a3b8; }
.cl-item.done .status { color: #10b981; }
.status { color: #64748b; font-size: 14px;}

.modal-overlay { position: absolute; inset: 0; background: rgba(15,23,42,0.95); z-index: 10; display: none; align-items: center; justify-content: center; backdrop-filter: blur(4px);}
.bp-modal { background: #1e293b; width: 90%; max-height: 90%; border-radius: 8px; box-shadow: 0 20px 50px rgba(0,0,0,0.8); display: flex; flex-direction: column; overflow: hidden; transform: scale(0.9); opacity: 0; transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);}
.bp-modal.open { transform: scale(1); opacity: 1; }
.bm-top { display: flex; align-items: stretch; background: #0f172a; flex: 1;}
.bm-col { flex: 1; padding: 20px; display: flex; flex-direction: column; gap: 10px;}
.bm-col:first-child { border-right: 2px solid #334155; }
.bm-label { font-size: 14px; color: #94a3b8; text-transform: uppercase; font-weight: bold; letter-spacing: 1px; font-family: sans-serif;}
.bm-code { background: #020617; color: #38bdf8; font-family: 'Consolas', monospace; padding: 15px; border-radius: 6px; font-size: 15px; white-space: pre-wrap; flex: 1; box-shadow: inset 0 0 10px rgba(0,0,0,0.5);}
.bm-visual { background: white; color: black; padding: 20px; border-radius: 6px; font-family: sans-serif; display: flex; align-items: center; justify-content: center; flex: 1; min-height: 100px; box-shadow: inset 0 0 10px rgba(0,0,0,0.1);}
.bm-close { padding: 15px; background: #3b82f6; color: white; text-align: center; font-weight: bold; cursor: pointer; transition: 0.2s; font-family: sans-serif; font-size: 16px;}
.bm-close:hover { background: #60a5fa; }
</style>

<div class="bp-game">
    <h3 class="bp-title">Architect's Checklist</h3>
    <div class="checklist">
        <div class="cl-item" id="cl1" onclick="window.openModal(1)">
            <span>1. Navigation Bar 🧭</span>
            <span class="status">Click to inspect</span>
        </div>
        <div class="cl-item" id="cl2" onclick="window.openModal(2)">
            <span>2. Call to Action Button 🔘</span>
            <span class="status">Click to inspect</span>
        </div>
        <div class="cl-item" id="cl3" onclick="window.openModal(3)">
            <span>3. Status Badge 🔴</span>
            <span class="status">Click to inspect</span>
        </div>
    </div>
    
    <div class="modal-overlay" id="mo">
        <div class="bp-modal" id="bm">
            <div class="bm-top">
                <div class="bm-col">
                    <div class="bm-label">Blueprint (HTML code)</div>
                    <div class="bm-code" id="bm-c"></div>
                </div>
                <div class="bm-col">
                    <div class="bm-label">Build (What users see)</div>
                    <div class="bm-visual" id="bm-v"></div>
                </div>
            </div>
            <div class="bm-close" onclick="window.closeModal()">CLOSE BLUEPRINT</div>
        </div>
    </div>
</div>

<script>
window.bpChecked = {1: false, 2: false, 3: false};
window.bpData = {
    1: { code: '&lt;nav&gt;\\n  &lt;a href="#"&gt;Home&lt;/a&gt;\\n  &lt;a href="#"&gt;About&lt;/a&gt;\\n  &lt;a href="#"&gt;Contact&lt;/a&gt;\\n&lt;/nav&gt;', vis: '<div style="display:flex;gap:20px;font-weight:bold;color:#3b82f6;font-size:18px;"><span>Home</span><span style="color:#94a3b8;">About</span><span style="color:#94a3b8;">Contact</span></div>' },
    2: { code: '&lt;button class="primary"&gt;\\n  Buy Now\\n&lt;/button&gt;', vis: '<button style="background:#10b981;color:white;padding:12px 24px;border:none;border-radius:6px;font-weight:bold;cursor:pointer;font-size:18px;box-shadow:0 4px 10px rgba(16,185,129,0.3);">Buy Now</button>' },
    3: { code: '&lt;span class="badge"&gt;\\n  3 New Messages\\n&lt;/span&gt;', vis: '<div style="background:#ef4444;color:white;padding:6px 12px;border-radius:20px;font-size:14px;font-weight:bold;box-shadow:0 4px 10px rgba(239,68,68,0.3);">3 New Messages</div>' }
};

window.openModal = function(id) {
    document.getElementById('bm-c').innerHTML = window.bpData[id].code;
    document.getElementById('bm-v').innerHTML = window.bpData[id].vis;
    document.getElementById('mo').style.display = 'flex';
    setTimeout(() => document.getElementById('bm').classList.add('open'), 10);
    
    document.getElementById('cl' + id).classList.add('done');
    document.getElementById('cl' + id).querySelector('.status').innerText = 'Checked ✅';
    window.bpChecked[id] = true;
    
    if(window.bpChecked[1] && window.bpChecked[2] && window.bpChecked[3]) {
        setTimeout(() => {
            try {
                const editor = window.parent.document.getElementById('code-editor');
                if(editor && !editor.value.includes('BP_REVIEWED')) {
                    editor.value += '\\n<!-- BP_REVIEWED -->';
                    editor.dispatchEvent(new Event('input', { bubbles: true }));
                }
            } catch(e) {}
        }, 800);
    }
}
window.closeModal = function() {
    document.getElementById('bm').classList.remove('open');
    setTimeout(() => document.getElementById('mo').style.display = 'none', 300);
}
</script>`,
            progress: 95,
            validator: function (code) { return code.includes("BP_REVIEWED"); }
        },
        {
            title: "20. Final Challenge: How did you feel?",
            body: `<p>You've completed the introductory overview of Web Design and HTML.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Select the emoji below that best represents how this lesson made you feel, then click FINISH!</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="120" y="80" fill="#00f2ff" font-family="monospace" font-size="18" text-anchor="middle">HELLO WORLD</text></svg>`,
            initialCode: `<!-- INTERACTIVE MODULE -->
<style>
.emoji-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 15px; margin-top: 10px; padding: 25px; background: #1e293b; border-radius: 12px; height: 300px; place-items: center; align-content: center; transition: 0.3s; }
.emoji-btn { font-size: 35px; background: #0f172a; border: 2px solid #334155; border-radius: 12px; cursor: pointer; transition: 0.2s; width: 60px; height: 60px; display:flex; justify-content:center; align-items:center; user-select: none; }
.emoji-btn:hover { transform: scale(1.15); border-color: #00f2ff; background: rgba(0,242,255,0.1); }
.emoji-btn.selected { background: #00ff9d; border-color: white; transform: scale(1.15); box-shadow: 0 0 20px #00ff9d; pointer-events: none; }
</style>
<div style="text-align:center;">
    <div class="emoji-grid" id="egrid">
        <div class="emoji-btn" onclick="window.selEmo(this, '😀')">😀</div>
        <div class="emoji-btn" onclick="window.selEmo(this, '😎')">😎</div>
        <div class="emoji-btn" onclick="window.selEmo(this, '🚀')">🚀</div>
        <div class="emoji-btn" onclick="window.selEmo(this, '🤯')">🤯</div>
        <div class="emoji-btn" onclick="window.selEmo(this, '🤔')">🤔</div>
        <div class="emoji-btn" onclick="window.selEmo(this, '😵')">😵</div>
        <div class="emoji-btn" onclick="window.selEmo(this, '😭')">😭</div>
        <div class="emoji-btn" onclick="window.selEmo(this, '😖')">😖</div>
        <div class="emoji-btn" onclick="window.selEmo(this, '🥵')">🥵</div>
        <div class="emoji-btn" onclick="window.selEmo(this, '🎉')">🎉</div>
    </div>
</div>
<script>
window.selEmo = function(btn, emoji) {
    document.querySelectorAll('.emoji-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    window.lessonEmoji = emoji; // Save globally so completion screen can read it
    document.getElementById('egrid').style.boxShadow = '0 0 20px rgba(0,255,157,0.3)';
    const editor = document.getElementById('code-editor');
    if(!editor.value.includes('EMOJI_S' + 'ELECTED')) {
        editor.value += '\\n<!-- ' + 'EMOJI_S' + 'ELECTED' + ' -->';
        editor.dispatchEvent(new Event('input', { bubbles: true }));
    }
}
</script>`,
            progress: 100,
            validator: function (code) { return code.includes("EMOJI_SELECTED"); }
        }
    ]
};
