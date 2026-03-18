window.Lessons.exam1.modules[29] = {
    title: "30. Exam Question 30",
    body: `<p class="text-gray-300">Pick the best answer based on what you learned in Lessons 0, 1, 2, and 3.</p><p class="text-sm italic text-gray-400 mt-4">Mission: Choose your best answer to save your guess and unlock the next question.</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="24" y="24" width="192" height="102" rx="18" fill="#0f172a" stroke="#67e8f9" stroke-width="2"/><text x="120" y="68" fill="#67e8f9" font-size="22" text-anchor="middle" font-family="monospace">Q30</text><text x="120" y="98" fill="#e2e8f0" font-size="12" text-anchor="middle" font-family="sans-serif">Exam 1 Checkpoint</text></svg>`,
    widgetCode: `<!-- INTERACTIVE MODULE -->
<style>
.exam1-shell { padding: 16px; border-radius: 18px; background: linear-gradient(180deg, #0f172a, #111827); color: #e2e8f0; border: 1px solid #1e3a5f; font-family: sans-serif; }
.exam1-kicker { margin: 0 0 8px; font-size: 11px; letter-spacing: 0.24em; text-transform: uppercase; color: #67e8f9; }
.exam1-question { margin: 0 0 14px; font-size: 18px; line-height: 1.45; color: white; }
.exam1-options { display: grid; gap: 10px; }
.exam1-option { display: flex; align-items: center; gap: 12px; width: 100%; padding: 12px 14px; border-radius: 14px; border: 1px solid #334155; background: #1e293b; color: #e2e8f0; text-align: left; cursor: pointer; transition: transform .18s ease, border-color .18s ease, background .18s ease; }
.exam1-option:hover { transform: translateY(-2px); border-color: #67e8f9; background: #22324a; }
.exam1-option.selected { border-color: #67e8f9; background: rgba(14, 165, 233, 0.16); }
.exam1-badge { width: 28px; height: 28px; border-radius: 999px; display: grid; place-items: center; background: #0f172a; color: #67e8f9; font: 700 12px/1 monospace; border: 1px solid rgba(103, 232, 249, 0.25); flex-shrink: 0; }
.exam1-inline-code { padding: 2px 8px; border-radius: 999px; background: rgba(15, 23, 42, 0.8); border: 1px solid rgba(103, 232, 249, 0.2); color: #dbeafe; font: 700 12px/1.6 monospace; }
.exam1-status { margin-top: 14px; min-height: 26px; font-weight: 700; color: #67e8f9; }
</style>
<div class="exam1-shell">
  <p class="exam1-kicker">Exam 1 Question 30 of 30</p>
  <p class="exam1-question">After finishing an interactive mission, when should the student move on?</p>
  <div class="exam1-options"><button type="button" class="exam1-option" data-choice="A" onclick="window.exam1Pick(30, 'A', true)"><span class="exam1-badge">A</span><span>When the next button unlocks</span></button><button type="button" class="exam1-option" data-choice="B" onclick="window.exam1Pick(30, 'B', false)"><span class="exam1-badge">B</span><span>After deleting the code</span></button><button type="button" class="exam1-option" data-choice="C" onclick="window.exam1Pick(30, 'C', false)"><span class="exam1-badge">C</span><span>After closing the browser</span></button><button type="button" class="exam1-option" data-choice="D" onclick="window.exam1Pick(30, 'D', false)"><span class="exam1-badge">D</span><span>After renaming the file</span></button></div>
  <div id="exam1-status-30" class="exam1-status">Choose the best answer.</div>
</div>
<script>
(function() {
  const editor = document.getElementById('code-editor');
  if (editor) {
    editor.readOnly = true;
    editor.style.opacity = '0.85';
  }

  window.exam1Answers = window.exam1Answers || {};
  window.exam1Pick = function(questionNumber, choice, isCorrect) {
    const options = Array.from(document.querySelectorAll('.exam1-option'));
    const status = document.getElementById('exam1-status-30');
    options.forEach(function(option) {
      option.classList.remove('selected');
      if (option.dataset.choice === choice) {
        option.classList.add('selected');
      }
    });

    window.exam1Answers[questionNumber] = { selected: choice, correct: !!isCorrect };

    if (status) {
      status.className = 'exam1-status';
      status.textContent = 'Answer saved. Move to the next question when ready.';
    }

    if (editor) {
      editor.value = '<!-- EXAM1_ANSWER:Q' + questionNumber + ':' + choice + ' -->';
      editor.dispatchEvent(new Event('input', { bubbles: true }));
    }
  };

  const previous = window.exam1Answers[30];
  if (previous) {
    window.exam1Pick(30, previous.selected, previous.correct);
  }
})();
</script>`,
    initialCode: `<!-- Pick the best answer for Question 30 -->`,
    progress: 97,
    validator: function(code) { return /EXAM1_ANSWER\s*:\s*Q30\s*:\s*[A-D]/i.test(code); }
};