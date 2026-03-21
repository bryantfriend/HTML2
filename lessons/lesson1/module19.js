window.Lessons.lesson1.modules[18] = {
    title: "19. Mission Review: Page Structure",
    body: `<p>This checkpoint turns the big ideas from Lesson 1 into quick recall practice so students are ready for the exam wording.</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Answer all 3 structure questions correctly.</p>`,
    svg: ``,
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
  <div>These are the same structure words students need to recognize later on Exam 1.</div>

  <div class="review-card" data-question="0">
    <div class="review-question">1. Which part holds page information like the title?</div>
    <div class="review-options">
      <button class="review-option" data-correct="true">&lt;head&gt;</button>
      <button class="review-option" data-correct="false">&lt;body&gt;</button>
      <button class="review-option" data-correct="false">&lt;footer&gt;</button>
    </div>
  </div>

  <div class="review-card" data-question="1">
    <div class="review-question">2. Which part holds the visible content students actually see?</div>
    <div class="review-options">
      <button class="review-option" data-correct="false">&lt;title&gt;</button>
      <button class="review-option" data-correct="true">&lt;body&gt;</button>
      <button class="review-option" data-correct="false">&lt;doctype&gt;</button>
    </div>
  </div>

  <div class="review-card" data-question="2">
    <div class="review-question">3. What tag changes the text on the browser tab?</div>
    <div class="review-options">
      <button class="review-option" data-correct="false">&lt;html&gt;</button>
      <button class="review-option" data-correct="true">&lt;title&gt;</button>
      <button class="review-option" data-correct="false">&lt;section&gt;</button>
    </div>
  </div>

  <div id="lesson1-review-status" class="review-progress">0 / 3 correct</div>
</div>
<script>
(function() {
  const editor = document.getElementById('code-editor');
  if (editor) {
    editor.readOnly = true;
    editor.style.opacity = '0.75';
    editor.value = '<!-- Lesson 1 review checkpoint -->';
  }

  const solved = [false, false, false];
  const status = document.getElementById('lesson1-review-status');
  document.querySelectorAll('.review-card').forEach((card, cardIndex) => {
    card.querySelectorAll('.review-option').forEach(button => {
      button.addEventListener('click', () => {
        const correct = button.dataset.correct === 'true';
        card.querySelectorAll('.review-option').forEach(opt => opt.classList.remove('correct', 'wrong'));
        button.classList.add(correct ? 'correct' : 'wrong');
        if (correct) solved[cardIndex] = true;
        const total = solved.filter(Boolean).length;
        if (status) status.textContent = total + ' / 3 correct';
        if (total === 3 && editor && !editor.value.includes('LESSON1_REVIEW_READY')) {
          editor.value += '\\n<!-- LESSON1_REVIEW_READY -->';
          editor.dispatchEvent(new Event('input', { bubbles: true }));
        }
      });
    });
  });
})();
</script>`,
    initialCode: `<!-- Lesson 1 review checkpoint -->`,
    progress: 95,
    validator: function (code) { return code.includes("LESSON1_REVIEW_READY"); }
};
