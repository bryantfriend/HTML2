window.Lessons.intro.modules[13] = {
    title: "14. Save → Refresh cycle 🔄",
    body: `<p>When building on a real computer, you change code, <strong>save the file</strong>, and <strong>refresh the browser</strong>.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Change the text in the code editor to include the word "Hola", then click Refresh below!</p>`,
    svg: ``,
    widgetCode: `<style>
.intro-refresh-shell { margin-bottom: 12px; padding: 14px; border-radius: 16px; background: linear-gradient(180deg, #10203a, #0f172a); border: 1px solid #1e3a5f; color: #dbeafe; }
.intro-refresh-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; gap: 10px; }
.intro-refresh-kicker { font-size: 11px; letter-spacing: 0.22em; text-transform: uppercase; color: #67e8f9; }
.intro-refresh-replay { border: none; border-radius: 999px; padding: 7px 12px; background: #67e8f9; color: #082f49; font-weight: 700; cursor: pointer; }
.intro-refresh-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
.intro-refresh-panel { min-height: 110px; border-radius: 14px; background: rgba(15, 23, 42, 0.95); border: 1px solid rgba(103, 232, 249, 0.16); padding: 14px; }
.intro-refresh-label { font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; color: #93c5fd; margin-bottom: 8px; }
.intro-refresh-code { font: 700 15px/1.6 monospace; white-space: pre-wrap; color: white; }
.intro-refresh-preview { display: flex; align-items: center; justify-content: center; color: white; font: 700 18px/1.4 sans-serif; }
.intro-refresh-note { margin-top: 10px; color: #cbd5e1; font-size: 13px; }
</style>
<script>
window.playIntroRefreshDemo = function() {
  const codeEl = document.getElementById('intro-refresh-code');
  const previewEl = document.getElementById('intro-refresh-preview');
  const noteEl = document.getElementById('intro-refresh-note');
  if (!codeEl || !previewEl || !noteEl) return;
  const frames = ['<h2>Welcome</h2>', '<h2>Hola</h2>'];
  const notes = [
    'Edit the code first.',
    'Then click Refresh so the browser shows Hola.'
  ];
  let frame = 0;
  clearInterval(window.introRefreshDemoTimer);
  window.introRefreshDemoTimer = setInterval(function() {
    codeEl.textContent = frames[frame];
    previewEl.textContent = frame === 0 ? 'Welcome' : 'Hola';
    noteEl.textContent = notes[frame];
    if (frame === frames.length - 1) {
      clearInterval(window.introRefreshDemoTimer);
    }
    frame++;
  }, 1000);
};
const introRefreshEditor = document.getElementById('code-editor');
if (introRefreshEditor) { introRefreshEditor.readOnly = false; introRefreshEditor.style.opacity = '1'; }
</script>
<div class="intro-refresh-shell">
  <div class="intro-refresh-top">
    <div>
      <div class="intro-refresh-kicker">Quick Demo</div>
      <div style="font-size:13px;">Change the word first, then use the refresh button.</div>
    </div>
    <button type="button" class="intro-refresh-replay" onclick="window.playIntroRefreshDemo()">Replay</button>
  </div>
  <div class="intro-refresh-grid">
    <div class="intro-refresh-panel">
      <div class="intro-refresh-label">Editor</div>
      <div id="intro-refresh-code" class="intro-refresh-code"></div>
    </div>
    <div class="intro-refresh-panel intro-refresh-preview">
      <div id="intro-refresh-preview">Welcome</div>
    </div>
  </div>
  <div id="intro-refresh-note" class="intro-refresh-note">Demo loading...</div>
</div>
<div style="background:white; border-radius:8px; padding:20px; color:black; font-family:sans-serif; text-align:center; height:150px; display:flex; flex-direction:column; justify-content:center;">
   <div id="sim-bro" style="border:2px solid #e2e8f0; border-radius:4px; padding:10px; margin-bottom:10px; min-height:40px; display:flex; align-items:center; justify-content:center; font-size:20px; font-weight:bold;">Welcome</div>
   <button onclick="
      const editor = document.getElementById('code-editor');
      if(editor.value.includes('Ho' + 'la') || editor.value.includes('ho' + 'la') || editor.value.includes('HO' + 'LA')) {
         document.getElementById('sim-bro').innerText = 'Hola';
         this.innerText = 'Refreshed! Mission Complete!';
         this.style.background = '#00ff9d';
         this.style.color = 'black';
         if(!editor.value.includes('REFR' + 'ESHED')) {
             editor.value += '\\n<!-- ' + 'REFR' + 'ESHED' + ' -->';
             editor.dispatchEvent(new Event('input', { bubbles: true }));
         }
      } else {
         alert('Please change the code below to include Hola first!');
      }
   " style="padding:5px 10px; background:#3b82f6; color:white; border:none; border-radius:4px; font-weight:bold; cursor:pointer; font-size:12px; transition:0.3s;">↻ REFRESH BROWSER</button>
</div>
<script>window.playIntroRefreshDemo();</script>`,
    initialCode: `<h2>Welcome</h2>`,
    progress: 70,
    validator: function (code) { return code.includes("REFRESHED"); }
};
