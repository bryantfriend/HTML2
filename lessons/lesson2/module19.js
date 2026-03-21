window.Lessons.lesson2.modules[18] = {
    title: "19. Mission Review: Text Tags",
    body: `<p>This checkpoint helps students practice the text tags by name, which is the part many of them miss on the exam.</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Answer all 3 text questions correctly.</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="120" y="80" fill="#00f2ff" font-family="monospace" font-size="16" text-anchor="middle">TEXT CHECK</text></svg>`,
    initialCode: `<!-- Lesson 2 review checkpoint -->`,
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
  <div>Students need to know not just how the tags look, but what each one is called and when to use it.</div>

  <div class="review-card">
    <div class="review-question">1. Which tag makes a paragraph?</div>
    <div class="review-options">
      <button class="review-option" data-correct="true">&lt;p&gt;</button>
      <button class="review-option" data-correct="false">&lt;h1&gt;</button>
      <button class="review-option" data-correct="false">&lt;br&gt;</button>
    </div>
  </div>

  <div class="review-card">
    <div class="review-question">2. Which tag is best for the biggest heading?</div>
    <div class="review-options">
      <button class="review-option" data-correct="false">&lt;p&gt;</button>
      <button class="review-option" data-correct="true">&lt;h1&gt;</button>
      <button class="review-option" data-correct="false">&lt;strong&gt;</button>
    </div>
  </div>

  <div class="review-card">
    <div class="review-question">3. Which tag means important or strong text?</div>
    <div class="review-options">
      <button class="review-option" data-correct="false">&lt;em&gt;</button>
      <button class="review-option" data-correct="false">&lt;li&gt;</button>
      <button class="review-option" data-correct="true">&lt;strong&gt;</button>
    </div>
  </div>

  <div id="lesson2-review-status" class="review-progress">0 / 3 correct</div>
</div>
<script>
(function() {
  const editor = document.getElementById('code-editor');
  if (editor) {
    editor.readOnly = true;
    editor.style.opacity = '0.75';
  }
  const solved = [false, false, false];
  const cards = document.querySelectorAll('.review-card');
  const status = document.getElementById('lesson2-review-status');
  cards.forEach((card, cardIndex) => {
    card.querySelectorAll('.review-option').forEach(button => {
      button.addEventListener('click', () => {
        const correct = button.dataset.correct === 'true';
        card.querySelectorAll('.review-option').forEach(opt => opt.classList.remove('correct', 'wrong'));
        button.classList.add(correct ? 'correct' : 'wrong');
        if (correct) solved[cardIndex] = true;
        const total = solved.filter(Boolean).length;
        if (status) status.textContent = total + ' / 3 correct';
        if (total === 3 && editor && !editor.value.includes('LESSON2_REVIEW_READY')) {
          editor.value += '\\n<!-- LESSON2_REVIEW_READY -->';
          editor.dispatchEvent(new Event('input', { bubbles: true }));
        }
      });
    });
  });
})();
</script>`,
    progress: 95,
    validator: function (code) { return code.includes("LESSON2_REVIEW_READY"); }
};
