window.Lessons.exam2.modules[8] = {
    title: "9. Which tag makes a numbered list?",
    body: `<section class="space-y-4 rounded-[24px] border border-cyan-400/15 bg-[linear-gradient(180deg,rgba(15,23,42,0.96),rgba(11,18,32,0.94))] p-5 shadow-[0_18px_40px_rgba(2,6,23,0.22)]">
  <p class="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[var(--neon-cyan)]">HTML Final Exam</p>
  <div class="flex flex-wrap items-center justify-between gap-3">
    <h3 class="heading-font text-2xl text-white">9. Which tag makes a numbered list?</h3>
    <span class="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.18em] text-cyan-100">Question 9 of 50</span>
  </div>
  <p class="text-[15px] leading-7 text-slate-200">Pick one answer. Your score appears only at the end.</p>
  <div class="grid gap-3 md:grid-cols-3">
    <div class="rounded-2xl border border-slate-400/10 bg-slate-900/60 p-3 text-sm text-slate-200"><strong class="block text-[11px] uppercase tracking-[0.18em] text-cyan-300">Format</strong>4-answer multiple choice.</div>
    <div class="rounded-2xl border border-slate-400/10 bg-slate-900/60 p-3 text-sm text-slate-200"><strong class="block text-[11px] uppercase tracking-[0.18em] text-cyan-300">Pace</strong>40-minute exam. Work through all 50 questions.</div>
    <div class="rounded-2xl border border-slate-400/10 bg-slate-900/60 p-3 text-sm text-slate-200"><strong class="block text-[11px] uppercase tracking-[0.18em] text-cyan-300">Rule</strong>You will not see right or wrong until the end.</div>
  </div>
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
<div class="exam2-shell" id="exam2-q9">
  <div class="exam2-top">
    <div>
      <p class="exam2-kicker">Record One Answer</p>
      <h4 class="exam2-heading">Which tag makes a numbered list?</h4>
    </div>
    <div class="flex flex-wrap gap-2">
      <span class="exam2-chip">Multiple Choice</span>
      <span class="exam2-timer" data-exam2-timer>Time Left 40:00</span>
    </div>
  </div>
  <p class="exam2-prompt">Choose the best answer.</p>
  <div class="exam2-option-grid"><button type="button" class="exam2-option" data-value="wrong2" data-correct="false"><strong>A. &lt;li&gt;</strong><span>Not the best answer</span></button><button type="button" class="exam2-option" data-value="wrong3" data-correct="false"><strong>B. &lt;dl&gt;</strong><span>Not the best answer</span></button><button type="button" class="exam2-option" data-value="correct" data-correct="true"><strong>C. &lt;ol&gt;</strong><span>Best answer</span></button><button type="button" class="exam2-option" data-value="wrong1" data-correct="false"><strong>D. &lt;ul&gt;</strong><span>Not the best answer</span></button></div>
  <p class="exam2-status" data-exam2-status>Choose one answer to save it.</p>
</div>
<script>

(function() {
  const root = document.getElementById('exam2-q9');
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
    window.exam2Answers['q9'] = { correct: !!correct, response: response };
    if (status) status.textContent = 'Answer saved. Move to the next question when you are ready.';
    if (editor) {
      editor.value = appendMarker(editor.value, 'EX2_Q9_SUBMITTED');
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
      recordAnswer(button.dataset.correct === 'true', button.dataset.value);
    });
  });
})();
</script>`,
    initialCode: "<!-- Question 9: click one answer on the left to save it. -->",
    previewScaffold: `<style>
#preview-area { margin:0; padding:18px; background:linear-gradient(180deg,#eff6ff,#f8fafc); color:#0f172a; font-family:Arial,sans-serif; line-height:1.55; }
#preview-area body { margin:0; font-family:Arial,sans-serif; background:white; color:#0f172a; padding:18px; border-radius:18px; box-shadow:inset 0 0 0 1px rgba(148,163,184,0.22); }
#preview-area h1, #preview-area h2, #preview-area h3 { margin:0 0 12px; color:#0f172a; }
#preview-area p { margin:0 0 12px; }
#preview-area .exam-page { padding:20px; border-radius:16px; background:linear-gradient(180deg,#ffffff,#f8fafc); border:1px solid #dbeafe; }
#preview-area .exam-page strong { color:#0b57d0; }
</style>`,
    progress: 18,
    validator: function(code) { return /EX2_Q9_SUBMITTED/i.test(code); }
};
