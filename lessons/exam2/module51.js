window.Lessons.exam2.modules[50] = {
    title: "51. Finish Exam",
    body: `<section class="space-y-4 rounded-[24px] border border-cyan-400/15 bg-[linear-gradient(180deg,rgba(15,23,42,0.96),rgba(11,18,32,0.94))] p-5 shadow-[0_18px_40px_rgba(2,6,23,0.22)]">
  <p class="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[var(--neon-cyan)]">HTML Final Exam</p>
  <div class="flex flex-wrap items-center justify-between gap-3">
    <h3 class="heading-font text-2xl text-white">51. Finish Exam</h3>
    <span class="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.18em] text-cyan-100">Final Step</span>
  </div>
  <p class="text-[15px] leading-7 text-slate-200">Finish the test to reveal the student score.</p>
</section>`,
    svg: ``,
    widgetCode: `<!-- INTERACTIVE MODULE -->
<style>
.exam2-shell{display:grid;gap:14px;padding:18px;border-radius:24px;background:linear-gradient(180deg,rgba(8,47,73,.86),rgba(15,23,42,.98));border:1px solid rgba(148,163,184,.16);box-shadow:0 18px 40px rgba(2,6,23,.26);color:#e2e8f0}
.exam2-top{display:flex;justify-content:space-between;gap:12px;align-items:flex-start}
.exam2-kicker{margin:0;color:#67e8f9;font-size:11px;font-weight:800;letter-spacing:.22em;text-transform:uppercase}
.exam2-heading{margin:4px 0 0;color:#fff;font-size:18px;line-height:1.35}
.exam2-chip{display:inline-flex;align-items:center;justify-content:center;padding:7px 12px;border-radius:999px;background:rgba(15,23,42,.72);border:1px solid rgba(103,232,249,.22);color:#cffafe;font-size:10px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;white-space:nowrap}
.exam2-timer{display:inline-flex;align-items:center;justify-content:center;padding:7px 12px;border-radius:999px;background:rgba(6,78,59,.42);border:1px solid rgba(74,222,128,.28);color:#dcfce7;font-size:10px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;white-space:nowrap}
.exam2-prompt{margin:0;color:#dbeafe;font-size:14px;line-height:1.6}
.exam2-option-grid{display:grid;gap:10px}
.exam2-option{width:100%;text-align:left;padding:14px 16px;border-radius:16px;border:1px solid rgba(148,163,184,.16);background:rgba(15,23,42,.74);color:#f8fafc;cursor:pointer;transition:transform .14s ease,border-color .14s ease,background .14s ease,box-shadow .14s ease}
.exam2-option:hover{transform:translateY(-1px);border-color:rgba(103,232,249,.36)}
.exam2-option strong{display:block;margin-bottom:4px;color:#fff;font-size:14px}
.exam2-option span{display:block;color:#cbd5e1;font-size:12px;line-height:1.45}
.exam2-option.selected{border-color:rgba(103,232,249,.46);background:rgba(8,47,73,.62);box-shadow:0 0 0 1px rgba(103,232,249,.18)}
.exam2-status{margin:0;padding:11px 13px;border-radius:14px;background:rgba(15,23,42,.68);border:1px solid rgba(148,163,184,.12);color:#bae6fd;font-size:13px;line-height:1.5}
.exam2-shell.submitted .exam2-status{color:#dcfce7;border-color:rgba(74,222,128,.24);background:rgba(20,83,45,.34)}
@media(min-width:720px){.exam2-option-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
</style>
<div class="exam2-shell" id="exam2-finish">
  <div class="exam2-top">
    <div>
      <p class="exam2-kicker">Finish Exam</p>
      <h4 class="exam2-heading">You made it to the end of the HTML exam.</h4>
    </div>
    <div class="flex flex-wrap gap-2">
      <span class="exam2-chip">Final Step</span>
      <span class="exam2-timer" data-exam2-timer>Time Left 40:00</span>
    </div>
  </div>
  <p class="exam2-prompt">Pick one button to finish and reveal the score screen.</p>
  <div class="exam2-option-grid">
    <button type="button" class="exam2-option" data-emoji="😎"><strong>A. 😎 Confident</strong><span>Finish the test.</span></button>
    <button type="button" class="exam2-option" data-emoji="🧠"><strong>B. 🧠 Focused</strong><span>Finish the test.</span></button>
    <button type="button" class="exam2-option" data-emoji="🚀"><strong>C. 🚀 Ready</strong><span>Finish the test.</span></button>
    <button type="button" class="exam2-option" data-emoji="🙂"><strong>D. 🙂 Done</strong><span>Finish the test.</span></button>
  </div>
  <p class="exam2-status" data-exam2-status>Choose any finish button to complete the exam.</p>
</div>
<script>

(function() {
  const root = document.getElementById('exam2-finish');
  if (!root) return;
  const editor = document.getElementById('code-editor');
  const status = root.querySelector('[data-exam2-status]');
  window.exam2Answers = window.exam2Answers || {};
  window.exam2TotalQuestions = 50;
  window.exam2DurationMs = 40 * 60 * 1000;
  window.exam2SessionSeed = window.exam2SessionSeed || Date.now();
  window.exam2Started = true;

  function formatClock(ms) {
    const safe = Math.max(0, ms);
    const totalSeconds = Math.floor(safe / 1000);
    const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
    const seconds = String(totalSeconds % 60).padStart(2, '0');
    return minutes + ':' + seconds;
  }

  window.exam2RenderTimer = window.exam2RenderTimer || function() {
    const remaining = window.exam2DurationMs - (Date.now() - window.exam2SessionSeed);
    document.querySelectorAll('[data-exam2-timer]').forEach(function(node) {
      node.textContent = 'Time Left ' + formatClock(remaining);
    });
  };

  if (!window.exam2ClockInterval) {
    window.exam2ClockInterval = setInterval(window.exam2RenderTimer, 1000);
  }
  window.exam2RenderTimer();

  if (editor) {
    editor.readOnly = false;
    editor.style.opacity = '1';
  }

  function appendMarker(current, markerText) {
    const markerLine = '<!-- ' + markerText + ' -->';
    if (String(current || '').includes(markerLine)) return current;
    const joiner = current && !String(current).endsWith('\\n') ? '\\n' : '';
    return String(current || '') + joiner + markerLine;
  }

  function recordAnswer(correct, response) {
    if (root.dataset.submitted === 'true') return;
    root.dataset.submitted = 'true';
    root.classList.add('submitted');
    window.exam2Answers['finish'] = { correct: !!correct, response: response };
    if (status) status.textContent = 'Answer saved. Move to the next question when you are ready.';
    if (editor) {
      editor.value = appendMarker(editor.value, 'EX2_FINISHED');
      editor.dispatchEvent(new Event('input', { bubbles: true }));
    }
    root.querySelectorAll('button').forEach(function(button) {
      button.disabled = true;
    });
  }

  const buttons = Array.from(root.querySelectorAll('.exam2-option'));
  buttons.forEach(function(button) {
    button.addEventListener('click', function() {
      if (root.dataset.submitted === 'true') return;
      buttons.forEach(function(other) { other.classList.remove('selected'); });
      button.classList.add('selected');
      window.lessonEmoji = button.dataset.emoji;
      recordAnswer(true, button.dataset.emoji);
    });
  });
})();
</script>`,
    initialCode: "<!-- Finish Exam 2 -->",
    previewScaffold: `<style>
#preview-area { margin:0; padding:18px; background:linear-gradient(180deg,#eff6ff,#f8fafc); color:#0f172a; font-family:Arial,sans-serif; line-height:1.55; }
#preview-area body { margin:0; font-family:Arial,sans-serif; background:white; color:#0f172a; padding:18px; border-radius:18px; box-shadow:inset 0 0 0 1px rgba(148,163,184,0.22); }
#preview-area h1, #preview-area h2, #preview-area h3 { margin:0 0 12px; color:#0f172a; }
#preview-area p { margin:0 0 12px; }
#preview-area .exam-page { padding:20px; border-radius:16px; background:linear-gradient(180deg,#ffffff,#f8fafc); border:1px solid #dbeafe; }
#preview-area .exam-page strong { color:#0b57d0; }
</style>`,
    progress: 100,
    validator: function(code) { return /EX2_FINISHED/i.test(code); }
};
