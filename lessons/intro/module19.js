window.Lessons.intro.modules[18] = {
    title: "19. Mission Review: HTML Basics",
    body: `<p>This checkpoint is here to help students <strong>remember</strong> the key words before the exam, not just copy code from a demo.</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Answer all 3 review checks correctly to unlock the final module.</p>`,
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
  <div class="review-kicker">Memory Booster</div>
  <div>Students do better on the exam when they practice naming the idea, not just performing the action.</div>

  <div class="review-card" data-question="0">
    <div class="review-question">1. Which tag wraps the whole HTML page?</div>
    <div class="review-options">
      <button class="review-option" data-correct="false">&lt;body&gt;</button>
      <button class="review-option" data-correct="true">&lt;html&gt;</button>
      <button class="review-option" data-correct="false">&lt;title&gt;</button>
    </div>
  </div>

  <div class="review-card" data-question="1">
    <div class="review-question">2. Where does most of the visible page content go?</div>
    <div class="review-options">
      <button class="review-option" data-correct="false">&lt;head&gt;</button>
      <button class="review-option" data-correct="true">&lt;body&gt;</button>
      <button class="review-option" data-correct="false">&lt;doctype&gt;</button>
    </div>
  </div>

  <div class="review-card" data-question="2">
    <div class="review-question">3. What line tells the browser to use modern HTML?</div>
    <div class="review-options">
      <button class="review-option" data-correct="true">&lt;!DOCTYPE HTML&gt;</button>
      <button class="review-option" data-correct="false">&lt;HEAD&gt;</button>
      <button class="review-option" data-correct="false">&lt;TITLE&gt;</button>
    </div>
  </div>

  <div id="intro-review-status" class="review-progress">0 / 3 correct</div>
</div>
<script>
(function() {
  const editor = document.getElementById('code-editor');
  if (editor) {
    editor.readOnly = true;
    editor.style.opacity = '0.75';
    editor.value = '<!-- Intro review checkpoint -->';
  }

  const solved = [false, false, false];
  const cards = document.querySelectorAll('.review-card');
  const status = document.getElementById('intro-review-status');

  function syncStatus() {
    const total = solved.filter(Boolean).length;
    if (status) {
      status.textContent = total + ' / 3 correct';
    }
    if (total === 3 && editor && !editor.value.includes('INTRO_REVIEW_READY')) {
      editor.value += '\\n<!-- INTRO_REVIEW_READY -->';
      editor.dispatchEvent(new Event('input', { bubbles: true }));
    }
  }

  cards.forEach((card, cardIndex) => {
    card.querySelectorAll('.review-option').forEach(button => {
      button.addEventListener('click', () => {
        const correct = button.dataset.correct === 'true';
        card.querySelectorAll('.review-option').forEach(opt => {
          opt.classList.remove('correct', 'wrong');
        });
        button.classList.add(correct ? 'correct' : 'wrong');
        if (correct) {
          solved[cardIndex] = true;
        }
        syncStatus();
      });
    });
  });

  syncStatus();
})();
</script>`,
    initialCode: `<!-- Intro review checkpoint -->`,
    progress: 95,
    validator: function (code) { return code.includes("INTRO_REVIEW_READY"); }
};
