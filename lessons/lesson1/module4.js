window.Lessons.lesson1.modules[3] = {
    title: "4. The Russian Dolls of HTML",
    body: `<p>HTML tags are placed inside one another like Russian nesting dolls. We call this <strong>Nesting</strong>.</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Click each box to open it up and see what's inside!</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="60" y="30" width="120" height="90" fill="none" stroke="#3b82f6" stroke-width="2"/><rect x="80" y="50" width="80" height="50" fill="none" stroke="#00ff9d" stroke-width="2"/></svg>`,
    widgetCode: `<!-- INTERACTIVE MODULE -->
<style>
.doll-game { background: #0f172a; height: 350px; border-radius: 12px; display: flex; align-items: center; justify-content: center; padding: 20px; font-family: monospace; overflow: hidden; position: relative; }
.html-box { background: #1e3a8a; border: 3px solid #60a5fa; color: white; padding: 20px; border-radius: 12px; cursor: pointer; transition: 0.5s cubic-bezier(0.4, 0, 0.2, 1); min-width: 150px; text-align: center; font-size: 20px; font-weight: bold; position: relative; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
.html-box:hover { transform: translateY(-5px); box-shadow: 0 15px 40px rgba(0,0,0,0.6); border-color: #93c5fd; }

.html-box.opened { cursor: default; transform: none; min-width: 95%; height: 95%; background: #1e293b; border-color: #475569; display: flex; flex-direction: column; justify-content: space-between; text-align: left; padding: 15px; font-size: 14px; color: #94a3b8; }

.inner-container { display: none; flex: 1; flex-direction: column; gap: 15px; margin: 15px 0; justify-content: center; align-items: center; }
.opened > .inner-container { display: flex; animation: fade-in 0.5s; }

.head-box { background: #065f46; border: 3px solid #34d399; color: white; padding: 15px; border-radius: 8px; cursor: pointer; transition: 0.5s; width: 140px; text-align: center; font-size: 16px; font-weight: bold; }
.body-box { background: #86198f; border: 3px solid #d946ef; color: white; padding: 15px; border-radius: 8px; cursor: pointer; transition: 0.5s; width: 140px; text-align: center; font-size: 16px; font-weight: bold; }

.head-box.opened, .body-box.opened { cursor: default; transform: none; width: 100%; text-align: left; font-size: 12px; display: flex; flex-direction: column; justify-content: space-between; min-height: 80px; }
.head-box.opened { background: #064e3b; border-color: #059669; }
.body-box.opened { background: #701a75; border-color: #c026d3; }

.title-box, .h1-box, .p-box { display: none; padding: 8px; border-radius: 4px; color: white; text-align: center; font-size: 12px; margin: 5px 0; }
.title-box { background: #047857; border: 2px solid #10b981; }
.h1-box { background: #d946ef; border: 2px solid #f0abfc; }
.p-box { background: #b142c9; border: 2px solid #e879f9; }

.opened > .title-box, .opened > .h1-box, .opened > .p-box { display: block; animation: pop 0.4s forwards; }

@keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
@keyframes pop { 0% { transform: scale(0.5); opacity: 0; } 100% { transform: scale(1); opacity: 1; } }
.hint { font-size: 10px; opacity: 0.7; margin-top: 5px; }
</style>
<script>
window.initDolls = function() {
    const htmlNode = document.getElementById('html-node');
    const headNode = document.getElementById('head-node');
    const bodyNode = document.getElementById('body-node');
    let openedCount = 0;

    htmlNode.onclick = function(e) {
        if (!this.classList.contains('opened')) {
            this.classList.add('opened');
            e.stopPropagation();
        }
    };

    headNode.onclick = function(e) {
        if (!this.classList.contains('opened')) {
            this.classList.add('opened');
            openedCount++;
            if (openedCount >= 2) {
                setTimeout(() => window.completeModule('DOLLS_OPENED'), 1000);
            }
            e.stopPropagation();
        }
    };

    bodyNode.onclick = function(e) {
        if (!this.classList.contains('opened')) {
            this.classList.add('opened');
            openedCount++;
            if (openedCount >= 2) {
                setTimeout(() => window.completeModule('DOLLS_OPENED'), 1000);
            }
            e.stopPropagation();
        }
    };
};
</script>`,
    initialCode: `<div class="doll-game" id="doll-root">
    <div id="html-node" class="html-box">
        &lt;html&gt;
        <div class="hint">Click to open</div>
        <div class="inner-container">
            <div id="head-node" class="head-box">
                &lt;head&gt;
                <div class="hint">Click to open</div>
                <div class="title-box">&lt;title&gt;My Site&lt;/title&gt;</div>
            </div>
            <div id="body-node" class="body-box">
                &lt;body&gt;
                <div class="hint">Click to open</div>
                <div class="h1-box">&lt;h1&gt;Hello World!&lt;/h1&gt;</div>
                <div class="p-box">&lt;p&gt;Welcome to my site&lt;/p&gt;</div>
            </div>
        </div>
    </div>
    <script>window.initDolls();</script>
</div>`,
    progress: 20,
    validator: function (code) { return code.includes("DOLLS_OPENED"); }
};