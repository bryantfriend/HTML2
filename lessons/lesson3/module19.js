window.Lessons.lesson3.modules[18] = {
    title: "19. Mission Review: Lists",
    body: `<p>This checkpoint gives students one more quick round of list vocabulary before the exam.</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Answer all 3 list questions correctly.</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" style="background:#1e293b; border-radius:8px;"><text x="120" y="80" fill="#10b981" font-family="monospace" font-size="16" text-anchor="middle">LIST CHECK</text></svg>`,
    widgetCode: `<!-- INTERACTIVE MODULE -->
<style>
.review-shell { background: linear-gradient(180deg, #0f172a, #111827); border: 1px solid #1e3a5f; border-radius: 16px; padding: 16px; color: #e2e8f0; font-family: sans-serif; }
.review-kicker { font-size: 11px; text-transform: uppercase; letter-spacing: 0.24em; color: #67e8f9; margin-bottom: 8px; }
.review-card { background: rgba(15, 23, 42, 0.9); border: 1px solid rgba(103, 232, 249, 0.14); border-radius: 14px; padding: 12px; margin-top: 12px; }
.review-question { font-weight: 700; color: white; margin-bottom: 10px; }
.review-options { display: grid; gap: 8px; }
.review-option { width: 100%; text-align: left; border: 1px solid #334155; background: #1e293b; color: #e2e8f0; border-radius: 10px; padding: 10px 12px; cursor: pointer; transition: 0.18s ease; }
.review-option:hover { border-color: #67e8f9; transform: translateY(-1px); }
.review-option.correct { background: rgba(16, 185, 129, 0.2); border-color: #10b981; color: white; }
.review-option.wrong { background: rgba(239, 68, 68, 0.18); border-color: #ef4444; color: white; }
.review-progress { margin-top: 14px; font-weight: 700; color: #67e8f9; }
</style>
<div class="review-shell">
  <div class="review-kicker">Mission Review</div>
  <div>Students often remember the activity, but not the exact list tag names. This helps lock them in.</div>

  <div class="review-card">
    <div class="review-question">1. Which tag starts a bullet list?</div>
    <div class="review-options">
      <button class="review-option" data-correct="true">&lt;ul&gt;</button>
      <button class="review-option" data-correct="false">&lt;ol&gt;</button>
      <button class="review-option" data-correct="false">&lt;li&gt;</button>
    </div>
  </div>

  <div class="review-card">
    <div class="review-question">2. Which tag starts a numbered list?</div>
    <div class="review-options">
      <button class="review-option" data-correct="false">&lt;ul&gt;</button>
      <button class="review-option" data-correct="true">&lt;ol&gt;</button>
      <button class="review-option" data-correct="false">&lt;h1&gt;</button>
    </div>
  </div>

  <div class="review-card">
    <div class="review-question">3. Which tag is used for each item inside a list?</div>
    <div class="review-options">
      <button class="review-option" data-correct="false">&lt;p&gt;</button>
      <button class="review-option" data-correct="false">&lt;body&gt;</button>
      <button class="review-option" data-correct="true">&lt;li&gt;</button>
    </div>
  </div>

  <div id="lesson3-review-status" class="review-progress">0 / 3 correct</div>
</div>
<script>
(function() {
  const editor = document.getElementById('code-editor');
  if (editor) {
    editor.readOnly = true;
    editor.style.opacity = '0.75';
    editor.value = '<!-- Lesson 3 review checkpoint -->';
  }
  const solved = [false, false, false];
  const status = document.getElementById('lesson3-review-status');
  document.querySelectorAll('.review-card').forEach((card, cardIndex) => {
    card.querySelectorAll('.review-option').forEach(button => {
      button.addEventListener('click', () => {
        const correct = button.dataset.correct === 'true';
        card.querySelectorAll('.review-option').forEach(opt => opt.classList.remove('correct', 'wrong'));
        button.classList.add(correct ? 'correct' : 'wrong');
        if (correct) solved[cardIndex] = true;
        const total = solved.filter(Boolean).length;
        if (status) status.textContent = total + ' / 3 correct';
        if (total === 3 && editor && !editor.value.includes('LESSON3_REVIEW_READY')) {
          editor.value += '\\n<!-- LESSON3_REVIEW_READY -->';
          editor.dispatchEvent(new Event('input', { bubbles: true }));
        }
      });
    });
  });
})();
</script>`,
    initialCode: `<!-- Lesson 3 review checkpoint -->`,
    progress: 95,
    validator: function (code) { return code.includes("LESSON3_REVIEW_READY"); }
};
