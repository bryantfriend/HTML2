window.Lessons.lesson1.modules[1] = {
    title: "2. Build it Tag-by-Tag 🧱",
    body: `<p>A website is built layer by layer using tags. Let's add them one by one to see how the page takes shape!</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Click the buttons to add the essential HTML tags in order.</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="60" y="30" width="120" height="40" fill="none" stroke="#ff00e5" stroke-width="2"/><text x="120" y="55" fill="#ff00e5" font-family="monospace" font-size="14" text-anchor="middle">&lt;tag&gt;</text></svg>`,
    widgetCode: `<!-- INTERACTIVE MODULE -->
<style>
.tag-btn { background: #1e293b; color: #00f2ff; font-family: monospace; border: 1px solid #334155; padding: 8px 12px; border-radius: 6px; cursor: pointer; transition: 0.2s; font-size: 14px; text-align: left; position: relative; overflow: hidden; width: 100%; }
.tag-btn:hover:not(:disabled) { background: #334155; transform: translateY(-2px); }
.tag-btn:disabled { background: #0f172a; color: #475569; border-color: #1e293b; cursor: not-allowed; }
.tag-btn.added { background: #10b981; color: white; border-color: #10b981; }

.live-preview { flex: 1; background: white; border-radius: 8px; padding: 15px; font-family: sans-serif; position: relative; overflow: hidden; transition: 0.3s; display: flex; }
.blank-state { position: absolute; inset: 0; display: flex; justify-content: center; align-items: center; background: #f8fafc; color: #94a3b8; font-size: 24px; font-weight: bold; flex-direction: column; opacity: 1; transition: opacity 0.5s; z-index: 10; }

#lp-body { opacity: 0; transform: translateY(10px); transition: all 0.5s; width: 100%; }
#lp-body.visible { opacity: 1; transform: translateY(0); }
.browser-tab { background: #e2e8f0; padding: 5px 15px; font-size: 12px; color: #475569; border-radius: 6px 6px 0 0; display: inline-block; margin-bottom: 0px; opacity: 0; transition: 0.5s; }
.browser-tab.visible { opacity: 1; }

.frame-html { border: 4px dashed transparent; transition: 0.5s; margin-top: -4px; z-index: 5; }
.frame-html.visible { border-color: #3b82f6; }
</style>
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
            window.completeModule('ALL_TAGS_ADDED');
        }, 500);
    }
}
</script>
<div style="display: flex; gap: 15px; height: 350px;">
    <div style="width: 140px; display: flex; flex-direction: column; gap: 10px; justify-content: center;">
        <button id="btn-html" class="tag-btn" onclick="window.addTag('html')">➕ &lt;html&gt;</button>
        <button id="btn-head" class="tag-btn" onclick="window.addTag('head')" disabled>➕ &lt;head&gt;</button>
        <button id="btn-title" class="tag-btn" onclick="window.addTag('title')" disabled>➕ &lt;title&gt;</button>
        <button id="btn-body" class="tag-btn" onclick="window.addTag('body')" disabled>➕ &lt;body&gt;</button>
    </div>
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
</div>`,
    initialCode: ``,
    progress: 10,
    validator: function (code) { return code.includes("ALL_TAGS_ADDED"); }
};