window.Lessons.lesson4.modules[20] = {
    title: "21. Media Master Quiz",
    body: `<p>Finish Lesson 4 with a short five-question checkpoint. Students choose answers with buttons, and the mission unlocks after all five are answered.
<div class="lesson-demo-shell">
  <div class="lesson-demo-shell-header">
    <div>
      <p class="lesson-demo-eyebrow">Quick Demo</p>
      <p class="lesson-demo-heading">This quick quiz reviews the biggest ideas from images, audio, and video.</p>
    </div>
    <span class="lesson-demo-chip">5-question quiz</span>
  </div>
  <div class="lesson-demo-shell-body">
    <div class="lesson-demo-video" data-demo-video="lesson4-module21">
      <div class="lesson-demo-browser">
        <div class="lesson-demo-dots"><span></span><span></span><span></span></div>
        <div class="lesson-demo-address">media-master-quiz.html</div>
      </div>
      <div class="lesson-demo-grid">
        <div class="lesson-demo-panel">
          <p class="lesson-demo-label">Code</p>
          <pre class="lesson-demo-snippet">Question 1\nA B C D</pre>
        </div>
        <div class="lesson-demo-panel">
          <p class="lesson-demo-label">Preview</p>
          <div class="lesson-demo-preview-frame"><div class="lesson-demo-badges"><span class="lesson-demo-badge">images</span><span class="lesson-demo-badge">alt text</span><span class="lesson-demo-badge">audio</span><span class="lesson-demo-badge">video</span><span class="lesson-demo-badge">autoplay</span></div></div>
        </div>
      </div>
      <div class="lesson-demo-captions"><div class="lesson-demo-caption active">1. Pick one answer for each question.</div><div class="lesson-demo-caption">2. Your choices save as you go.</div><div class="lesson-demo-caption">3. Answer all five to finish the lesson.</div></div>
      <div class="lesson-demo-footer"><div class="lesson-demo-tip"><p class="lesson-demo-tip-title">Read</p><p class="lesson-demo-tip-copy">Take one question at a time.</p></div><div class="lesson-demo-tip"><p class="lesson-demo-tip-title">Pick</p><p class="lesson-demo-tip-copy">Tap one answer button for each question.</p></div><div class="lesson-demo-tip"><p class="lesson-demo-tip-title">Finish</p><p class="lesson-demo-tip-copy">The lesson unlocks after all five have an answer.</p></div><button type="button" class="lesson-demo-replay">Replay demo</button></div>
    </div>
  </div>
</div></p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Answer all 5 multiple-choice questions. You do not need every answer to be correct to finish the module, but every question must have one choice selected.</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"></svg>`,
    widgetCode: `<!-- INTERACTIVE MODULE -->
<style>
.lesson-demo-shell { margin-top: 18px; border-radius: 22px; overflow: hidden; border: 1px solid rgba(34,211,238,0.24); background: linear-gradient(180deg, rgba(2,6,23,0.85), rgba(15,23,42,0.96)); box-shadow: 0 0 30px rgba(34,211,238,0.1); }
.lesson-demo-shell-header { display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 14px 16px; border-bottom: 1px solid rgba(34,211,238,0.16); }
.lesson-demo-eyebrow { margin: 0 0 4px; font-size: 11px; letter-spacing: 0.26em; text-transform: uppercase; color: #67e8f9; }
.lesson-demo-heading { margin: 0; font-size: 13px; color: #cbd5e1; }
.lesson-demo-chip { padding: 5px 10px; border-radius: 999px; border: 1px solid rgba(34,211,238,0.2); background: rgba(8,47,73,0.5); color: #bae6fd; font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase; white-space: nowrap; }
.lesson-demo-shell-body { padding: 16px; }
.lesson-demo-browser { display: flex; align-items: center; gap: 10px; margin-bottom: 14px; }
.lesson-demo-dots { display: flex; gap: 6px; }
.lesson-demo-dots span { width: 10px; height: 10px; border-radius: 999px; background: #fb7185; }
.lesson-demo-dots span:nth-child(2) { background: #fbbf24; }
.lesson-demo-dots span:nth-child(3) { background: #4ade80; }
.lesson-demo-address { flex: 1; min-width: 0; padding: 8px 12px; border-radius: 999px; border: 1px solid rgba(148,163,184,0.2); background: rgba(15,23,42,0.9); font: 600 11px/1.2 monospace; color: #67e8f9; }
.lesson-demo-grid { display: grid; gap: 14px; }
.lesson-demo-panel { padding: 14px; border-radius: 18px; background: rgba(15,23,42,0.76); border: 1px solid rgba(148,163,184,0.14); }
.lesson-demo-label { margin: 0 0 10px; font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; color: #67e8f9; }
.lesson-demo-snippet { margin: 0; min-height: 76px; padding: 14px; border-radius: 14px; background: rgba(2,6,23,0.92); color: #f8fafc; font: 600 13px/1.55 monospace; white-space: pre-wrap; opacity: 0; transform: translateY(10px); transition: opacity 240ms ease, transform 240ms ease; }
.lesson-demo-snippet.visible { opacity: 1; transform: translateY(0); }
.lesson-demo-preview-frame { min-height: 128px; padding: 12px; border-radius: 16px; background: linear-gradient(180deg, rgba(30,41,59,0.95), rgba(15,23,42,0.95)); border: 1px solid rgba(148,163,184,0.12); opacity: 0; transform: scale(0.96); transition: opacity 260ms ease, transform 260ms ease; }
.lesson-demo-preview-frame.visible { opacity: 1; transform: scale(1); }
.lesson-demo-photo { position: relative; min-height: 120px; border-radius: 18px; overflow: hidden; background: linear-gradient(180deg, #7dd3fc 0%, #bfdbfe 52%, #86efac 52%, #4ade80 100%); }
.lesson-demo-sun { position: absolute; top: 16px; right: 22px; width: 28px; height: 28px; border-radius: 999px; background: #fde68a; box-shadow: 0 0 18px rgba(253,230,138,0.7); }
.lesson-demo-cat { position: absolute; left: 50%; bottom: 18px; width: 76px; height: 58px; transform: translateX(-50%); border-radius: 36px 36px 28px 28px; background: #1f2937; }
.lesson-demo-ear { position: absolute; top: -12px; width: 20px; height: 20px; background: #1f2937; transform: rotate(45deg); }
.lesson-demo-ear.left { left: 12px; }
.lesson-demo-ear.right { right: 12px; }
.lesson-demo-face { position: absolute; inset: 18px 18px auto 18px; height: 16px; }
.lesson-demo-face::before, .lesson-demo-face::after { content: ""; position: absolute; top: 0; width: 8px; height: 8px; border-radius: 999px; background: #f8fafc; }
.lesson-demo-face::before { left: 6px; }
.lesson-demo-face::after { right: 6px; }
.lesson-demo-face-smile { position: absolute; left: 50%; bottom: 12px; width: 18px; height: 8px; margin-left: -9px; border-bottom: 3px solid #fda4af; border-radius: 0 0 12px 12px; }
.lesson-demo-broken { position: relative; min-height: 120px; border-radius: 18px; background: repeating-linear-gradient(45deg, rgba(30,41,59,0.9), rgba(30,41,59,0.9) 12px, rgba(51,65,85,0.9) 12px, rgba(51,65,85,0.9) 24px); }
.lesson-demo-broken::before { content: "!"; position: absolute; left: 50%; top: 50%; width: 40px; height: 40px; margin: -20px 0 0 -20px; border-radius: 999px; display: grid; place-items: center; background: rgba(248,113,113,0.2); border: 1px solid rgba(248,113,113,0.4); color: #fecaca; font: 700 24px/1 monospace; }
.lesson-demo-altcard { min-height: 120px; border-radius: 18px; display: grid; place-items: center; padding: 16px; text-align: center; background: rgba(15,23,42,0.88); border: 1px dashed rgba(34,211,238,0.34); color: #e2e8f0; font-size: 14px; }
.lesson-demo-resize { min-height: 120px; display: flex; align-items: flex-end; gap: 14px; padding: 6px; }
.lesson-demo-size-box { flex: 1; border-radius: 16px 16px 10px 10px; background: linear-gradient(180deg, rgba(125,211,252,0.95), rgba(59,130,246,0.9)); position: relative; overflow: hidden; }
.lesson-demo-size-box::after { content: attr(data-size); position: absolute; left: 10px; bottom: 8px; font: 700 10px/1 monospace; color: rgba(255,255,255,0.92); }
.lesson-demo-size-box.small { height: 48px; }
.lesson-demo-size-box.medium { height: 80px; }
.lesson-demo-size-box.tall { height: 108px; }
.lesson-demo-size-box.squish { height: 24px; }
.lesson-demo-badges { display: flex; flex-wrap: wrap; gap: 8px; }
.lesson-demo-badge { padding: 7px 10px; border-radius: 999px; font: 700 10px/1 monospace; letter-spacing: 0.08em; text-transform: uppercase; border: 1px solid rgba(34,211,238,0.2); background: rgba(8,47,73,0.55); color: #cffafe; }
.lesson-demo-player { min-height: 120px; padding: 14px; border-radius: 18px; background: linear-gradient(180deg, rgba(30,41,59,0.96), rgba(15,23,42,0.96)); }
.lesson-demo-wave { display: flex; align-items: flex-end; gap: 6px; height: 54px; margin-bottom: 16px; }
.lesson-demo-wave span { flex: 1; border-radius: 999px 999px 0 0; background: linear-gradient(180deg, #22d3ee, #0ea5e9); animation: lessonWave 1.4s ease-in-out infinite; }
.lesson-demo-wave span:nth-child(2) { height: 36px; animation-delay: 0.1s; }
.lesson-demo-wave span:nth-child(1), .lesson-demo-wave span:nth-child(5) { height: 20px; }
.lesson-demo-wave span:nth-child(3) { height: 52px; animation-delay: 0.2s; }
.lesson-demo-wave span:nth-child(4) { height: 28px; animation-delay: 0.3s; }
.lesson-demo-audio-bar { display: flex; align-items: center; gap: 12px; }
.lesson-demo-play { width: 36px; height: 36px; border-radius: 999px; display: grid; place-items: center; background: rgba(34,211,238,0.2); color: #cffafe; font-size: 14px; }
.lesson-demo-track { flex: 1; height: 6px; border-radius: 999px; background: rgba(148,163,184,0.24); position: relative; overflow: hidden; }
.lesson-demo-track::after { content: ""; position: absolute; inset: 0; width: 58%; border-radius: inherit; background: linear-gradient(90deg, #22d3ee, #3b82f6); }
.lesson-demo-video-player { min-height: 120px; overflow: hidden; border-radius: 18px; background: linear-gradient(180deg, #0f172a 0%, #1e293b 100%); }
.lesson-demo-screen { position: relative; min-height: 92px; background: linear-gradient(180deg, rgba(125,211,252,0.32), rgba(59,130,246,0.16)), radial-gradient(circle at 20% 20%, rgba(250,204,21,0.35), transparent 28%); }
.lesson-demo-screen::before { content: ""; position: absolute; inset: 14px 18px auto auto; width: 26px; height: 26px; border-radius: 999px; background: rgba(253,230,138,0.9); }
.lesson-demo-clapper { position: absolute; left: 18px; bottom: 16px; width: 64px; height: 40px; border-radius: 10px; background: rgba(15,23,42,0.86); border: 1px solid rgba(255,255,255,0.12); }
.lesson-demo-clapper::before { content: ""; position: absolute; left: 0; right: 0; top: -10px; height: 12px; border-radius: 10px 10px 0 0; background: repeating-linear-gradient(135deg, #f8fafc, #f8fafc 8px, #0f172a 8px, #0f172a 16px); }
.lesson-demo-controls { display: flex; align-items: center; gap: 10px; padding: 12px 14px; border-top: 1px solid rgba(255,255,255,0.08); }
.lesson-demo-portfolio { display: grid; gap: 10px; }
.lesson-demo-section { padding: 10px 12px; border-radius: 14px; border: 1px solid rgba(148,163,184,0.14); background: rgba(15,23,42,0.7); }
.lesson-demo-section h4 { margin: 0 0 8px; font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase; color: #67e8f9; }
.lesson-demo-section .lesson-demo-badges { gap: 6px; }
.lesson-demo-captions { position: relative; min-height: 32px; margin-top: 14px; }
.lesson-demo-caption { position: absolute; inset: 0; margin: 0; opacity: 0; transform: translateY(8px); color: #cbd5e1; font-size: 13px; transition: opacity 220ms ease, transform 220ms ease; }
.lesson-demo-caption.active { opacity: 1; transform: translateY(0); }
.lesson-demo-footer { display: grid; gap: 10px; margin-top: 14px; }
.lesson-demo-tip { padding: 12px; border-radius: 16px; background: rgba(15,23,42,0.65); border: 1px solid rgba(148,163,184,0.12); }
.lesson-demo-tip-title { margin: 0 0 4px; color: #67e8f9; font-weight: 700; }
.lesson-demo-tip-copy { margin: 0; color: #cbd5e1; font-size: 13px; }
.lesson-demo-replay { justify-self: start; padding: 10px 14px; border-radius: 999px; border: 1px solid rgba(34,211,238,0.24); background: rgba(8,47,73,0.6); color: #cffafe; font: 700 11px/1 monospace; letter-spacing: 0.16em; text-transform: uppercase; }
@keyframes lessonWave { 0%, 100% { transform: scaleY(0.7); } 50% { transform: scaleY(1); } }
@media (min-width: 700px) { .lesson-demo-grid { grid-template-columns: 1.02fr 0.98fr; } .lesson-demo-footer { grid-template-columns: repeat(3, minmax(0, 1fr)); } }
</style>
<script>
(function() {
  const editor = document.getElementById('code-editor');
  if (editor) { editor.readOnly = false; editor.style.opacity = '1'; }
  Array.from(document.querySelectorAll('.lesson-demo-video')).forEach(function(root) {
    if (root.dataset.initialized === 'true') return;
    root.dataset.initialized = 'true';
    const snippet = root.querySelector('.lesson-demo-snippet');
    const preview = root.querySelector('.lesson-demo-preview-frame');
    const captions = Array.from(root.querySelectorAll('.lesson-demo-caption'));
    const replayButton = root.querySelector('.lesson-demo-replay');
    let timers = [];
    function clearTimers() { timers.forEach(function(timer) { clearTimeout(timer); }); timers = []; }
    function setCaption(index) { captions.forEach(function(caption, captionIndex) { caption.classList.toggle('active', captionIndex === index); }); }
    function playDemo() {
      clearTimers();
      if (snippet) snippet.classList.remove('visible');
      if (preview) preview.classList.remove('visible');
      setCaption(0);
      timers.push(setTimeout(function() { if (snippet) snippet.classList.add('visible'); setCaption(0); }, 220));
      timers.push(setTimeout(function() { if (preview) preview.classList.add('visible'); setCaption(1); }, 1500));
      timers.push(setTimeout(function() { setCaption(2); }, 3600));
      timers.push(setTimeout(playDemo, 6500));
    }
    if (replayButton) replayButton.addEventListener('click', playDemo);
    playDemo();
  });
})();
</script>`,
    hiddenWidgetCode: true,
    previewScaffold: `<style>.lesson4-quiz{padding:16px;border-radius:18px;background:linear-gradient(180deg,#0f172a,#111827);border:1px solid #1e3a5f;color:#e2e8f0;margin-bottom:14px}.lesson4-quiz h4{margin:0 0 12px;color:#67e8f9;text-transform:uppercase;letter-spacing:.16em;font-size:11px}.lesson4-quiz-card{padding:12px;border-radius:14px;background:#111827;border:1px solid #334155;margin-top:10px}.lesson4-quiz-card p{margin:0 0 10px;font-weight:700}.lesson4-quiz-options{display:grid;gap:8px}.lesson4-quiz-option{display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:12px;border:1px solid #334155;background:#1e293b;color:#e2e8f0;cursor:pointer;text-align:left}.lesson4-quiz-option.selected{border-color:#22d3ee;background:rgba(34,211,238,.12)}.lesson4-quiz-dot{width:26px;height:26px;border-radius:999px;display:grid;place-items:center;background:#0f172a;color:#67e8f9;font:700 12px/1 monospace}.lesson4-quiz-status{margin-top:12px;color:#93c5fd;font-weight:700}</style>\n<div class="lesson4-quiz"><h4>Media Master Checkpoint</h4><div class="lesson4-quiz-card"><p>1. Which attribute tells the browser which image file to show?</p><div class="lesson4-quiz-options"><button type="button" class="lesson4-quiz-option" data-q="1" data-a="A"><span class="lesson4-quiz-dot">A</span><span>src</span></button><button type="button" class="lesson4-quiz-option" data-q="1" data-a="B"><span class="lesson4-quiz-dot">B</span><span>alt</span></button><button type="button" class="lesson4-quiz-option" data-q="1" data-a="C"><span class="lesson4-quiz-dot">C</span><span>width</span></button></div></div><div class="lesson4-quiz-card"><p>2. What does alt text do when an image does not load?</p><div class="lesson4-quiz-options"><button type="button" class="lesson4-quiz-option" data-q="2" data-a="A"><span class="lesson4-quiz-dot">A</span><span>It changes the image size</span></button><button type="button" class="lesson4-quiz-option" data-q="2" data-a="B"><span class="lesson4-quiz-dot">B</span><span>It gives a helpful description</span></button><button type="button" class="lesson4-quiz-option" data-q="2" data-a="C"><span class="lesson4-quiz-dot">C</span><span>It turns the image into a GIF</span></button></div></div><div class="lesson4-quiz-card"><p>3. Which tag wraps a sound player?</p><div class="lesson4-quiz-options"><button type="button" class="lesson4-quiz-option" data-q="3" data-a="A"><span class="lesson4-quiz-dot">A</span><span>&lt;img&gt;</span></button><button type="button" class="lesson4-quiz-option" data-q="3" data-a="B"><span class="lesson4-quiz-dot">B</span><span>&lt;audio&gt;</span></button><button type="button" class="lesson4-quiz-option" data-q="3" data-a="C"><span class="lesson4-quiz-dot">C</span><span>&lt;video&gt;</span></button></div></div><div class="lesson4-quiz-card"><p>4. Which boolean attribute makes player buttons appear?</p><div class="lesson4-quiz-options"><button type="button" class="lesson4-quiz-option" data-q="4" data-a="A"><span class="lesson4-quiz-dot">A</span><span>controls</span></button><button type="button" class="lesson4-quiz-option" data-q="4" data-a="B"><span class="lesson4-quiz-dot">B</span><span>height</span></button><button type="button" class="lesson4-quiz-option" data-q="4" data-a="C"><span class="lesson4-quiz-dot">C</span><span>poster</span></button></div></div><div class="lesson4-quiz-card"><p>5. Which word tells a video to try to start by itself?</p><div class="lesson4-quiz-options"><button type="button" class="lesson4-quiz-option" data-q="5" data-a="A"><span class="lesson4-quiz-dot">A</span><span>autoplay</span></button><button type="button" class="lesson4-quiz-option" data-q="5" data-a="B"><span class="lesson4-quiz-dot">B</span><span>preview</span></button><button type="button" class="lesson4-quiz-option" data-q="5" data-a="C"><span class="lesson4-quiz-dot">C</span><span>caption</span></button></div></div><div id="lesson4-quiz-status" class="lesson4-quiz-status">Answer all 5 questions to unlock the next button.</div></div>\n<script>(function(){const editor=document.getElementById('code-editor');const status=document.getElementById('lesson4-quiz-status');const buttons=Array.from(document.querySelectorAll('.lesson4-quiz-option'));if(!editor||!status||!buttons.length)return;editor.readOnly=true;editor.style.opacity='0.85';window.lesson4QuizAnswers=window.lesson4QuizAnswers||{};function paint(){buttons.forEach(function(button){button.classList.toggle('selected',window.lesson4QuizAnswers[button.dataset.q]===button.dataset.a);});const answered=Object.keys(window.lesson4QuizAnswers).filter(function(key){return window.lesson4QuizAnswers[key];}).length;status.textContent=answered===5?'All 5 answers are saved. You can go to the next module.':'Answer all 5 questions to unlock the next button. ('+answered+'/5 answered)';if(answered===5){editor.value='<!-- LESSON4_QUIZ:'+['1','2','3','4','5'].map(function(key){return window.lesson4QuizAnswers[key];}).join('')+' -->';editor.dispatchEvent(new Event('input',{bubbles:true}));}}buttons.forEach(function(button){button.addEventListener('click',function(){window.lesson4QuizAnswers[button.dataset.q]=button.dataset.a;paint();});});paint();})();</script>`,
    initialCode: `<!-- Answer all 5 quiz questions -->`,
    hideVisualPanel: true,
    progress: 100,
    validator: function(code) { return /LESSON4_QUIZ\s*:\s*[A-C]{5}/i.test(code); }
};