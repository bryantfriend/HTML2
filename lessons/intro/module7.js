window.Lessons.intro.modules[6] = {
  title: "7. CSS vs HTML vs JavaScript",
  body: `<p>You have already started using <strong>HTML</strong> to build structure. Before we learn CSS or JavaScript in detail, here is the big picture of how they work together.</p><p><strong>HTML</strong> = The Structure<br><strong>CSS</strong> = The Style<br><strong>JavaScript</strong> = The Action</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Activate HTML, then CSS, then JavaScript to see how one webpage grows step by step.</p>`,
  svg: ``,
  widgetCode: `<!-- INTERACTIVE MODULE -->
<style>
.stack-lab { display: grid; grid-template-columns: 170px 1fr; gap: 18px; min-height: 300px; background: linear-gradient(180deg, #0f172a, #111827); border-radius: 14px; padding: 18px; color: white; }
.stack-controls { display: flex; flex-direction: column; gap: 10px; }
.stack-btn { border: 1px solid #334155; background: #1e293b; color: #e2e8f0; border-radius: 12px; padding: 12px; cursor: pointer; text-align: left; transition: 0.18s ease; }
.stack-btn:hover { border-color: #67e8f9; transform: translateY(-1px); }
.stack-btn.active { border-color: #10b981; background: rgba(16, 185, 129, 0.18); color: white; }
.stack-btn strong { display: block; margin-bottom: 4px; }
.stack-screen { position: relative; border-radius: 14px; background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(103, 232, 249, 0.18); overflow: hidden; }
.stack-browser-bar { display: flex; align-items: center; gap: 8px; padding: 10px 12px; background: rgba(2, 6, 23, 0.8); border-bottom: 1px solid rgba(255,255,255,0.06); }
.stack-dot { width: 10px; height: 10px; border-radius: 999px; background: #475569; }
.stack-preview { min-height: 236px; padding: 22px; display: flex; flex-direction: column; justify-content: center; gap: 14px; transition: 0.25s ease; }
.stack-card { padding: 18px; border-radius: 18px; border: 2px dashed #475569; color: #94a3b8; transition: 0.25s ease; }
.stack-title { font-size: 28px; font-weight: 800; margin: 0 0 6px; }
.stack-text { margin: 0; line-height: 1.5; }
.stack-button { margin-top: 8px; display: inline-flex; width: fit-content; padding: 10px 16px; border-radius: 999px; border: 1px solid #475569; color: #94a3b8; font-weight: 700; transition: 0.25s ease; }
.stack-preview.html-on .stack-card { border-style: solid; border-color: #64748b; color: white; }
.stack-preview.css-on { background: radial-gradient(circle at top, rgba(56, 189, 248, 0.14), transparent 45%); }
.stack-preview.css-on .stack-card { background: rgba(30, 41, 59, 0.95); border-color: rgba(103, 232, 249, 0.45); box-shadow: 0 18px 40px rgba(0,0,0,0.28); }
.stack-preview.css-on .stack-title { color: #67e8f9; }
.stack-preview.css-on .stack-button { background: #67e8f9; color: #082f49; border-color: transparent; }
.stack-preview.js-on .stack-button { animation: stack-pulse 1s ease-in-out infinite alternate; }
.stack-preview.js-on .stack-card { transform: translateY(-4px); }
.stack-status { margin-top: 12px; color: #67e8f9; font-weight: 700; font-size: 13px; }
@keyframes stack-pulse { from { transform: scale(1); box-shadow: 0 0 0 rgba(103,232,249,0.2); } to { transform: scale(1.05); box-shadow: 0 0 24px rgba(103,232,249,0.35); } }
</style>
<script>
window.webStackState = window.webStackState || { html: false, css: false, js: false };
window.activateWebStack = function(layer) {
  const order = ['html', 'css', 'js'];
  const currentIndex = order.indexOf(layer);
  const requiredPrevious = currentIndex === 0 ? true : window.webStackState[order[currentIndex - 1]];
  const status = document.getElementById('stack-status');
  if (!requiredPrevious) {
    if (status) status.textContent = 'Start with HTML first, then move forward.';
    return;
  }
  window.webStackState[layer] = true;
  document.querySelectorAll('.stack-btn').forEach(btn => {
    btn.classList.toggle('active', !!window.webStackState[btn.dataset.layer]);
  });
  const preview = document.getElementById('stack-preview');
  if (preview) {
    preview.classList.toggle('html-on', window.webStackState.html);
    preview.classList.toggle('css-on', window.webStackState.css);
    preview.classList.toggle('js-on', window.webStackState.js);
  }
  if (status) {
    if (!window.webStackState.css) status.textContent = 'HTML adds the structure first.';
    else if (!window.webStackState.js) status.textContent = 'CSS adds style on top of the structure.';
    else status.textContent = 'Perfect. HTML, CSS, and JavaScript each have a job.';
  }
  if (window.webStackState.html && window.webStackState.css && window.webStackState.js) {
    window.completeModule('STACK_SEEN');
  }
};
</script>
<div class="stack-lab">
  <div class="stack-controls">
    <button class="stack-btn" data-layer="html" onclick="window.activateWebStack('html')">
      <strong>1. HTML</strong>
      Add the structure.
    </button>
    <button class="stack-btn" data-layer="css" onclick="window.activateWebStack('css')">
      <strong>2. CSS</strong>
      Add color and style.
    </button>
    <button class="stack-btn" data-layer="js" onclick="window.activateWebStack('js')">
      <strong>3. JavaScript</strong>
      Add movement and action.
    </button>
    <div class="stack-status" id="stack-status">Click HTML to start building the page.</div>
  </div>
  <div class="stack-screen">
    <div class="stack-browser-bar">
      <div class="stack-dot"></div>
      <div class="stack-dot"></div>
      <div class="stack-dot"></div>
      <div style="margin-left:8px; font-size:11px; letter-spacing:0.14em; color:#94a3b8; text-transform:uppercase;">one webpage</div>
    </div>
    <div id="stack-preview" class="stack-preview">
      <div class="stack-card">
        <h3 class="stack-title">Starter Page</h3>
        <p class="stack-text">HTML creates the page parts. CSS styles them. JavaScript makes them do something.</p>
        <div class="stack-button">Launch</div>
      </div>
    </div>
  </div>
</div>`,
  initialCode: ``,
  progress: 35,
  validator: function (code) { return code.includes("STACK_SEEN"); }
};
