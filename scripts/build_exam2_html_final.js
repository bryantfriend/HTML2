const fs = require('fs');
const path = require('path');

function escTemplate(value) {
  return String(value || '').replace(/\\/g, '\\\\').replace(/`/g, '\\`');
}

function escDouble(value) {
  return String(value || '').replace(/\\/g, '\\\\').replace(/"/g, '\\"');
}

function escHtml(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function htmlDoc(inner) {
  return [
    '<!DOCTYPE html>',
    '<html>',
    '<head>',
    '  <meta charset="UTF-8">',
    '  <title>Exam 2</title>',
    '</head>',
    '<body>',
    inner,
    '</body>',
    '</html>'
  ].join('\n');
}

const previewScaffold = `<style>
#preview-area { margin:0; padding:18px; background:linear-gradient(180deg,#eff6ff,#f8fafc); color:#0f172a; font-family:Arial,sans-serif; line-height:1.55; }
#preview-area body { margin:0; font-family:Arial,sans-serif; background:white; color:#0f172a; padding:18px; border-radius:18px; box-shadow:inset 0 0 0 1px rgba(148,163,184,0.22); }
#preview-area h1, #preview-area h2, #preview-area h3 { margin:0 0 12px; color:#0f172a; }
#preview-area p { margin:0 0 12px; }
#preview-area strong, #preview-area b { color:#0b57d0; }
#preview-area em, #preview-area i { color:#c026d3; }
#preview-area ul, #preview-area ol { padding-left:24px; margin:0 0 12px; }
#preview-area li { margin-bottom:6px; }
#preview-area img { display:block; max-width:180px; border-radius:16px; border:3px solid #bae6fd; background:#e0f2fe; padding:6px; margin:10px 0; }
#preview-area form, #preview-area header, #preview-area nav, #preview-area main, #preview-area article, #preview-area footer { display:block; padding:14px; border-radius:16px; margin-bottom:12px; }
#preview-area form { border:2px dashed #38bdf8; background:#f0f9ff; }
#preview-area label { display:block; font-weight:700; margin-bottom:6px; }
#preview-area input, #preview-area button { padding:10px 12px; border-radius:12px; border:1px solid #94a3b8; font:600 14px/1.2 Arial,sans-serif; }
#preview-area button { background:#38bdf8; color:#082f49; border-color:#0ea5e9; }
#preview-area header { background:#dbeafe; }
#preview-area nav { background:#fef3c7; }
#preview-area main { background:#dcfce7; }
#preview-area article { background:#ede9fe; }
#preview-area footer { background:#fee2e2; }
</style>`;

const baseWidgetStyle = `<style>
.exam2-shell{display:grid;gap:14px;padding:18px;border-radius:24px;background:linear-gradient(180deg,rgba(8,47,73,.86),rgba(15,23,42,.98));border:1px solid rgba(148,163,184,.16);box-shadow:0 18px 40px rgba(2,6,23,.26);color:#e2e8f0}
.exam2-top{display:flex;justify-content:space-between;gap:12px;align-items:flex-start}
.exam2-kicker{margin:0;color:#67e8f9;font-size:11px;font-weight:800;letter-spacing:.22em;text-transform:uppercase}
.exam2-heading{margin:4px 0 0;color:#fff;font-size:18px;line-height:1.35}
.exam2-chip{display:inline-flex;align-items:center;justify-content:center;padding:7px 12px;border-radius:999px;background:rgba(15,23,42,.72);border:1px solid rgba(103,232,249,.22);color:#cffafe;font-size:10px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;white-space:nowrap}
.exam2-timer{display:inline-flex;align-items:center;justify-content:center;padding:7px 12px;border-radius:999px;background:rgba(6,78,59,.42);border:1px solid rgba(74,222,128,.28);color:#dcfce7;font-size:10px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;white-space:nowrap}
.exam2-prompt{margin:0;color:#dbeafe;font-size:14px;line-height:1.6}
.exam2-code-target{padding:12px 14px;border-radius:16px;background:rgba(2,6,23,.86);border:1px solid rgba(148,163,184,.14);color:#f8fafc;font:700 13px/1.6 monospace;white-space:pre-wrap}
.exam2-option-grid{display:grid;gap:10px}
.exam2-option{width:100%;text-align:left;padding:14px 16px;border-radius:16px;border:1px solid rgba(148,163,184,.16);background:rgba(15,23,42,.74);color:#f8fafc;cursor:pointer;transition:transform .14s ease,border-color .14s ease,background .14s ease,box-shadow .14s ease}
.exam2-option:hover{transform:translateY(-1px);border-color:rgba(103,232,249,.36)}
.exam2-option strong{display:block;margin-bottom:4px;color:#fff;font-size:14px}
.exam2-option span{display:block;color:#cbd5e1;font-size:12px;line-height:1.45}
.exam2-option.selected{border-color:rgba(103,232,249,.46);background:rgba(8,47,73,.62);box-shadow:0 0 0 1px rgba(103,232,249,.18)}
.exam2-submit{justify-self:start;padding:11px 16px;border:none;border-radius:999px;background:linear-gradient(90deg,#67e8f9,#38bdf8);color:#082f49;font:800 13px/1.2 Arial,sans-serif;cursor:pointer;transition:transform .14s ease,box-shadow .14s ease}
.exam2-submit:hover{transform:translateY(-1px);box-shadow:0 0 18px rgba(56,189,248,.22)}
.exam2-status{margin:0;padding:11px 13px;border-radius:14px;background:rgba(15,23,42,.68);border:1px solid rgba(148,163,184,.12);color:#bae6fd;font-size:13px;line-height:1.5}
.exam2-shell.submitted .exam2-status{color:#dcfce7;border-color:rgba(74,222,128,.24);background:rgba(20,83,45,.34)}
@media(min-width:720px){.exam2-option-grid.cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.exam2-option-grid.cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}
</style>`;

function buildBody(index, total, title, prompt, answerMode) {
  return `<section class="space-y-4 rounded-[24px] border border-cyan-400/15 bg-[linear-gradient(180deg,rgba(15,23,42,0.96),rgba(11,18,32,0.94))] p-5 shadow-[0_18px_40px_rgba(2,6,23,0.22)]">
    <p class="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[var(--neon-cyan)]">HTML Final Exam</p>
    <div class="flex flex-wrap items-center justify-between gap-3">
      <h3 class="heading-font text-2xl text-white">${index}. ${title}</h3>
      <span class="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.18em] text-cyan-100">Question ${index} of ${total}</span>
    </div>
    <p class="text-[15px] leading-7 text-slate-200">${prompt}</p>
    <div class="grid gap-3 md:grid-cols-3">
      <div class="rounded-2xl border border-slate-400/10 bg-slate-900/60 p-3 text-sm text-slate-200"><strong class="block text-[11px] uppercase tracking-[0.18em] text-cyan-300">Format</strong>${answerMode}</div>
      <div class="rounded-2xl border border-slate-400/10 bg-slate-900/60 p-3 text-sm text-slate-200"><strong class="block text-[11px] uppercase tracking-[0.18em] text-cyan-300">Pace</strong>40-minute exam. Take your time and record one answer for each question.</div>
      <div class="rounded-2xl border border-slate-400/10 bg-slate-900/60 p-3 text-sm text-slate-200"><strong class="block text-[11px] uppercase tracking-[0.18em] text-cyan-300">Rule</strong>Once you submit an answer, it is recorded for your score.</div>
    </div>
  </section>`;
}

function baseExamScript(rootId, questionKey, marker) {
  return `
(function() {
  const root = document.getElementById('${rootId}');
  if (!root) return;
  const editor = document.getElementById('code-editor');
  const status = root.querySelector('[data-exam2-status]');
  window.exam2Answers = window.exam2Answers || {};
  window.exam2TotalQuestions = 20;
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

  function lockButtons() {
    root.querySelectorAll('button').forEach(function(button) {
      if (button.dataset.keepEnabled === 'true') return;
      button.disabled = true;
    });
  }

  function recordAnswer(correct, response) {
    if (root.dataset.submitted === 'true') return;
    root.dataset.submitted = 'true';
    root.classList.add('submitted');
    window.exam2Answers['${questionKey}'] = { correct: !!correct, response: response };
    if (status) status.textContent = 'Answer recorded. Continue when you are ready.';
    if (editor) {
      editor.value = appendMarker(editor.value, '${marker}');
      editor.dispatchEvent(new Event('input', { bubbles: true }));
    }
    lockButtons();
  }
`;
}

function choiceWidget(questionKey, marker, heading, prompt, options) {
  const rootId = `exam2-${questionKey}`;
  const optionsHtml = options.map((option) => (
    `<button type="button" class="exam2-option" data-value="${escHtml(option.value)}" data-correct="${option.correct ? 'true' : 'false'}"><strong>${escHtml(option.label)}</strong><span>${escHtml(option.copy)}</span></button>`
  )).join('');
  return `<!-- INTERACTIVE MODULE -->
${baseWidgetStyle}
<div class="exam2-shell" id="${rootId}">
  <div class="exam2-top">
    <div>
      <p class="exam2-kicker">Record One Answer</p>
      <h4 class="exam2-heading">${escHtml(heading)}</h4>
    </div>
    <div class="flex flex-wrap gap-2">
      <span class="exam2-chip">Multiple Choice</span>
      <span class="exam2-timer" data-exam2-timer>Time Left 40:00</span>
    </div>
  </div>
  <p class="exam2-prompt">${escHtml(prompt)}</p>
  <div class="exam2-option-grid cols-2">${optionsHtml}</div>
  <p class="exam2-status" data-exam2-status>Select one answer to record it.</p>
</div>
<script>
${baseExamScript(rootId, questionKey, marker)}
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
</script>`;
}

function typingWidget(questionKey, marker, heading, prompt, targetCode, evaluatorExpression) {
  const rootId = `exam2-${questionKey}`;
  return `<!-- INTERACTIVE MODULE -->
${baseWidgetStyle}
<div class="exam2-shell" id="${rootId}">
  <div class="exam2-top">
    <div>
      <p class="exam2-kicker">Type Then Submit</p>
      <h4 class="exam2-heading">${escHtml(heading)}</h4>
    </div>
    <div class="flex flex-wrap gap-2">
      <span class="exam2-chip">Typing Task</span>
      <span class="exam2-timer" data-exam2-timer>Time Left 40:00</span>
    </div>
  </div>
  <p class="exam2-prompt">${escHtml(prompt)}</p>
  <div class="exam2-code-target">${escHtml(targetCode)}</div>
  <button type="button" class="exam2-submit" data-submit-answer>Submit Answer</button>
  <p class="exam2-status" data-exam2-status>Type your answer in the code editor, then press Submit Answer.</p>
</div>
<script>
${baseExamScript(rootId, questionKey, marker)}
  const submitButton = root.querySelector('[data-submit-answer]');
  if (submitButton) {
    submitButton.addEventListener('click', function() {
      const code = editor ? editor.value : '';
      const correct = (${evaluatorExpression});
      recordAnswer(correct, String(code || '').trim().slice(0, 180));
    });
  }
})();
</script>`;
}

function reflectionWidget() {
  const rootId = 'exam2-finish';
  return `<!-- INTERACTIVE MODULE -->
${baseWidgetStyle}
<div class="exam2-shell" id="${rootId}">
  <div class="exam2-top">
    <div>
      <p class="exam2-kicker">Finish Exam</p>
      <h4 class="exam2-heading">Record how the exam felt, then finish.</h4>
    </div>
    <div class="flex flex-wrap gap-2">
      <span class="exam2-chip">Reflection</span>
      <span class="exam2-timer" data-exam2-timer>Time Left 40:00</span>
    </div>
  </div>
  <p class="exam2-prompt">Pick one emoji to end the exam and reveal the score screen.</p>
  <div class="exam2-option-grid cols-3">
    <button type="button" class="exam2-option" data-emoji="😎"><strong>😎</strong><span>Confident</span></button>
    <button type="button" class="exam2-option" data-emoji="🧠"><strong>🧠</strong><span>Thinking hard</span></button>
    <button type="button" class="exam2-option" data-emoji="🚀"><strong>🚀</strong><span>Ready for more</span></button>
    <button type="button" class="exam2-option" data-emoji="😅"><strong>😅</strong><span>A little tricky</span></button>
    <button type="button" class="exam2-option" data-emoji="🔥"><strong>🔥</strong><span>Strong finish</span></button>
    <button type="button" class="exam2-option" data-emoji="🙂"><strong>🙂</strong><span>All done</span></button>
  </div>
  <p class="exam2-status" data-exam2-status>Choose one emoji to finish the exam.</p>
</div>
<script>
${baseExamScript(rootId, 'finish', 'EX2_FINISHED')}
  const buttons = Array.from(root.querySelectorAll('[data-emoji]'));
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
</script>`;
}

function writeMetadata(outDir) {
  fs.writeFileSync(path.join(outDir, 'metadata.js'), `window.Lessons = window.Lessons || {};
window.Lessons.exam2 = {
    id: "exam2",
    title: "Exam 2: HTML Checkpoint",
    description: "A 40-minute HTML exam with multiple choice, true/false, and tag typing. Score is shown at the end.",
    gameTitle: "",
    gamePath: "",
    modules: []
};`);
}

function writeModule(outDir, index, module) {
  const fileContent = `window.Lessons.exam2.modules[${index}] = {
    title: "${escDouble(module.title)}",
    body: \`${escTemplate(module.body)}\`,
    svg: \`\`,
    widgetCode: \`${escTemplate(module.widgetCode)}\`,
    initialCode: \`${escTemplate(module.initialCode).replace(/\n/g, '\\n')}\`,
    previewScaffold: \`${escTemplate(previewScaffold).replace(/\n/g, '\\n')}\`,
    progress: ${module.progress},
    validator: ${module.validator}
};`;
  fs.writeFileSync(path.join(outDir, `module${index + 1}.js`), fileContent);
}

module.exports = function buildExam2HtmlFinal() {
  const outDir = path.resolve('lessons/exam2');
  fs.mkdirSync(outDir, { recursive: true });

  writeMetadata(outDir);

  const questions = [
    {
      title: '1. What Is HTML Mostly Used For?',
      body: buildBody(1, 20, 'What Is HTML Mostly Used For?', 'Choose the best job for HTML.', 'Click one answer.'),
      widgetCode: choiceWidget('q1', 'EX2_Q1_SUBMITTED', 'HTML mainly helps a webpage with...', 'Pick the best answer.', [
        { value: 'structure', label: 'Structure', copy: 'It builds the parts of the page.', correct: true },
        { value: 'color', label: 'Color', copy: 'That is mostly CSS.', correct: false },
        { value: 'animation', label: 'Animation', copy: 'That is usually JavaScript.', correct: false }
      ]),
      initialCode: htmlDoc('  <p>Question 1: click one answer on the left.</p>'),
      validator: 'function(code) { return /EX2_Q1_SUBMITTED/i.test(code); }'
    },
    {
      title: '2. True or False: Browsers Read HTML',
      body: buildBody(2, 20, 'True or False: Browsers Read HTML', 'Decide whether the statement is true or false.', 'Click True or False.'),
      widgetCode: choiceWidget('q2', 'EX2_Q2_SUBMITTED', 'A browser reads HTML and shows a webpage.', 'Pick True or False.', [
        { value: 'true', label: 'True', copy: 'Browsers turn HTML into what people see.', correct: true },
        { value: 'false', label: 'False', copy: 'That statement is not correct.', correct: false }
      ]),
      initialCode: htmlDoc('  <p>Question 2: true or false.</p>'),
      validator: 'function(code) { return /EX2_Q2_SUBMITTED/i.test(code); }'
    },
    {
      title: '3. Type the Doctype',
      body: buildBody(3, 20, 'Type the Doctype', 'Type the first line used in a normal HTML file.', 'Type the line in the editor, then press Submit Answer.'),
      widgetCode: typingWidget('q3', 'EX2_Q3_SUBMITTED', 'Type the doctype line.', 'Use lowercase html to match the common version.', '<!DOCTYPE html>', '/<!doctype\\s+html>/i.test(code)'),
      initialCode: '<html>\n<head>\n  <meta charset="UTF-8">\n  <title>Exam 2</title>\n</head>\n<body>\n  <p>Type the doctype above this html tag.</p>\n</body>\n</html>',
      validator: 'function(code) { return /EX2_Q3_SUBMITTED/i.test(code); }'
    },
    {
      title: '4. Which Tag Holds Visible Content?',
      body: buildBody(4, 20, 'Which Tag Holds Visible Content?', 'Choose the tag that usually holds what students can actually see on the page.', 'Click one answer.'),
      widgetCode: choiceWidget('q4', 'EX2_Q4_SUBMITTED', 'Visible page content usually goes inside...', 'Pick the best answer.', [
        { value: 'body', label: '<body>', copy: 'This holds the visible webpage content.', correct: true },
        { value: 'head', label: '<head>', copy: 'This usually holds behind-the-scenes page info.', correct: false },
        { value: 'title', label: '<title>', copy: 'This sets the browser tab title.', correct: false }
      ]),
      initialCode: htmlDoc('  <p>Question 4: choose one answer.</p>'),
      validator: 'function(code) { return /EX2_Q4_SUBMITTED/i.test(code); }'
    },
    {
      title: '5. Type One Main Heading',
      body: buildBody(5, 20, 'Type One Main Heading', 'Create a large page title using an h1 tag.', 'Type the tag in the editor, then press Submit Answer.'),
      widgetCode: typingWidget('q5', 'EX2_Q5_SUBMITTED', 'Type one h1 heading.', 'Use the exact sample heading shown below.', '<h1>My Page</h1>', '/<\\s*h1\\b[^>]*>\\s*my\\s*page\\s*<\\s*\\/\\s*h1\\s*>/i.test(code)'),
      initialCode: htmlDoc('  <!-- Type your main heading below -->\n'),
      validator: 'function(code) { return /EX2_Q5_SUBMITTED/i.test(code); }'
    },
    {
      title: '6. True or False: The p Tag Makes a Paragraph',
      body: buildBody(6, 20, 'True or False: The p Tag Makes a Paragraph', 'Decide whether the paragraph statement is true or false.', 'Click True or False.'),
      widgetCode: choiceWidget('q6', 'EX2_Q6_SUBMITTED', 'The <p> tag creates a paragraph.', 'Pick True or False.', [
        { value: 'true', label: 'True', copy: 'A paragraph tag wraps normal sentence text.', correct: true },
        { value: 'false', label: 'False', copy: 'That is not the job of the p tag.', correct: false }
      ]),
      initialCode: htmlDoc('  <p>Question 6: true or false.</p>'),
      validator: 'function(code) { return /EX2_Q6_SUBMITTED/i.test(code); }'
    },
    {
      title: '7. Which Tag Makes a Bullet List?',
      body: buildBody(7, 20, 'Which Tag Makes a Bullet List?', 'Choose the list tag that makes bullet points.', 'Click one answer.'),
      widgetCode: choiceWidget('q7', 'EX2_Q7_SUBMITTED', 'A bullet list uses which outer tag?', 'Pick the best answer.', [
        { value: 'ul', label: '<ul>', copy: 'This creates an unordered bullet list.', correct: true },
        { value: 'ol', label: '<ol>', copy: 'This creates a numbered list.', correct: false },
        { value: 'li', label: '<li>', copy: 'This is an item inside a list.', correct: false }
      ]),
      initialCode: htmlDoc('  <p>Question 7: choose one answer.</p>'),
      validator: 'function(code) { return /EX2_Q7_SUBMITTED/i.test(code); }'
    },
    {
      title: '8. Type the ul Tag Pair',
      body: buildBody(8, 20, 'Type the ul Tag Pair', 'Type the opening and closing ul tags.', 'Type the tag pair in the editor, then press Submit Answer.'),
      widgetCode: typingWidget('q8', 'EX2_Q8_SUBMITTED', 'Type the unordered list shell.', 'No list items are needed for this question.', '<ul></ul>', '/<\\s*ul\\b[^>]*>\\s*<\\s*\\/\\s*ul\\s*>/i.test(code)'),
      initialCode: htmlDoc('  <!-- Type the ul tags here -->\n'),
      validator: 'function(code) { return /EX2_Q8_SUBMITTED/i.test(code); }'
    },
    {
      title: '9. Which Tag Makes a Numbered List?',
      body: buildBody(9, 20, 'Which Tag Makes a Numbered List?', 'Choose the list tag that numbers the items.', 'Click one answer.'),
      widgetCode: choiceWidget('q9', 'EX2_Q9_SUBMITTED', 'A numbered list uses which outer tag?', 'Pick the best answer.', [
        { value: 'ol', label: '<ol>', copy: 'This creates an ordered numbered list.', correct: true },
        { value: 'ul', label: '<ul>', copy: 'This creates bullets, not numbers.', correct: false },
        { value: 'li', label: '<li>', copy: 'This is one item, not the whole list.', correct: false }
      ]),
      initialCode: htmlDoc('  <p>Question 9: choose one answer.</p>'),
      validator: 'function(code) { return /EX2_Q9_SUBMITTED/i.test(code); }'
    },
    {
      title: '10. Type One List Item',
      body: buildBody(10, 20, 'Type One List Item', 'Add one list item inside the starter ul.', 'Type the tag in the editor, then press Submit Answer.'),
      widgetCode: typingWidget('q10', 'EX2_Q10_SUBMITTED', 'Type one list item.', 'Use the exact sample tag shown below.', '<li>Item</li>', '/<\\s*li\\b[^>]*>\\s*item\\s*<\\s*\\/\\s*li\\s*>/i.test(code)'),
      initialCode: htmlDoc('  <ul>\n    <!-- Type one list item here -->\n  </ul>\n'),
      validator: 'function(code) { return /EX2_Q10_SUBMITTED/i.test(code); }'
    },
    {
      title: '11. Which Attribute Tells the Image File Path?',
      body: buildBody(11, 20, 'Which Attribute Tells the Image File Path?', 'Choose the attribute that points to the image file.', 'Click one answer.'),
      widgetCode: choiceWidget('q11', 'EX2_Q11_SUBMITTED', 'Which attribute tells the browser which image file to show?', 'Pick the best answer.', [
        { value: 'src', label: 'src', copy: 'This points to the image file path.', correct: true },
        { value: 'alt', label: 'alt', copy: 'This describes the image with words.', correct: false },
        { value: 'href', label: 'href', copy: 'This is commonly used with links.', correct: false }
      ]),
      initialCode: htmlDoc('  <p>Question 11: choose one answer.</p>'),
      validator: 'function(code) { return /EX2_Q11_SUBMITTED/i.test(code); }'
    },
    {
      title: '12. Type an Image Tag',
      body: buildBody(12, 20, 'Type an Image Tag', 'Add a simple image tag using the class cat picture.', 'Type the tag in the editor, then press Submit Answer.'),
      widgetCode: typingWidget('q12', 'EX2_Q12_SUBMITTED', 'Type the image tag.', 'The image should use the class cat file and an alt label.', '<img src="assets/exam-html-cat.svg" alt="cat">', '/<\\s*img\\b[^>]*\\bsrc\\s*=\\s*["\\\']assets\\/exam-html-cat\\.svg["\\\'][^>]*\\balt\\s*=\\s*["\\\']cat["\\\'][^>]*>/i.test(code) || /<\\s*img\\b[^>]*\\balt\\s*=\\s*["\\\']cat["\\\'][^>]*\\bsrc\\s*=\\s*["\\\']assets\\/exam-html-cat\\.svg["\\\'][^>]*>/i.test(code)'),
      initialCode: htmlDoc('  <!-- Type the image tag here -->\n'),
      validator: 'function(code) { return /EX2_Q12_SUBMITTED/i.test(code); }'
    },
    {
      title: '13. True or False: Alt Text Describes an Image',
      body: buildBody(13, 20, 'True or False: Alt Text Describes an Image', 'Decide whether alt text helps describe a picture.', 'Click True or False.'),
      widgetCode: choiceWidget('q13', 'EX2_Q13_SUBMITTED', 'Alt text describes the image for people and screen readers.', 'Pick True or False.', [
        { value: 'true', label: 'True', copy: 'Alt text is a description of the picture.', correct: true },
        { value: 'false', label: 'False', copy: 'That is not correct.', correct: false }
      ]),
      initialCode: htmlDoc('  <p>Question 13: true or false.</p>'),
      validator: 'function(code) { return /EX2_Q13_SUBMITTED/i.test(code); }'
    },
    {
      title: '14. Type the Form Tag Pair',
      body: buildBody(14, 20, 'Type the Form Tag Pair', 'Create the opening and closing form tags.', 'Type the tag pair in the editor, then press Submit Answer.'),
      widgetCode: typingWidget('q14', 'EX2_Q14_SUBMITTED', 'Type the form shell.', 'No inputs are needed for this question.', '<form></form>', '/<\\s*form\\b[^>]*>\\s*<\\s*\\/\\s*form\\s*>/i.test(code)'),
      initialCode: htmlDoc('  <!-- Type the form tags here -->\n'),
      validator: 'function(code) { return /EX2_Q14_SUBMITTED/i.test(code); }'
    },
    {
      title: '15. Which Input Type Makes a Normal Text Box?',
      body: buildBody(15, 20, 'Which Input Type Makes a Normal Text Box?', 'Choose the input type that creates a regular typing box.', 'Click one answer.'),
      widgetCode: choiceWidget('q15', 'EX2_Q15_SUBMITTED', 'Which input type makes a normal text field?', 'Pick the best answer.', [
        { value: 'text', label: 'text', copy: 'A regular typing field.', correct: true },
        { value: 'checkbox', label: 'checkbox', copy: 'A small check box.', correct: false },
        { value: 'radio', label: 'radio', copy: 'A choice dot.', correct: false }
      ]),
      initialCode: htmlDoc('  <form>\n    <!-- Question 15 -->\n  </form>\n'),
      validator: 'function(code) { return /EX2_Q15_SUBMITTED/i.test(code); }'
    },
    {
      title: '16. Type a Label Tag',
      body: buildBody(16, 20, 'Type a Label Tag', 'Add a label that says Name and points to name.', 'Type the label in the editor, then press Submit Answer.'),
      widgetCode: typingWidget('q16', 'EX2_Q16_SUBMITTED', 'Type the label tag.', 'Use the exact sample tag shown below.', '<label for="name">Name</label>', '/<\\s*label\\b[^>]*\\bfor\\s*=\\s*["\\\']name["\\\'][^>]*>\\s*name\\s*<\\s*\\/\\s*label\\s*>/i.test(code)'),
      initialCode: htmlDoc('  <form>\n    <input id="name" type="text">\n  </form>\n'),
      validator: 'function(code) { return /EX2_Q16_SUBMITTED/i.test(code); }'
    },
    {
      title: '17. Which Tag Makes a Button?',
      body: buildBody(17, 20, 'Which Tag Makes a Button?', 'Choose the tag that creates a clickable button.', 'Click one answer.'),
      widgetCode: choiceWidget('q17', 'EX2_Q17_SUBMITTED', 'Which tag creates a button on the page?', 'Pick the best answer.', [
        { value: 'button', label: '<button>', copy: 'This makes a clickable button.', correct: true },
        { value: 'press', label: '<press>', copy: 'This is not a real HTML tag.', correct: false },
        { value: 'click', label: '<click>', copy: 'This is not a real HTML tag either.', correct: false }
      ]),
      initialCode: htmlDoc('  <form>\n    <!-- Question 17 -->\n  </form>\n'),
      validator: 'function(code) { return /EX2_Q17_SUBMITTED/i.test(code); }'
    },
    {
      title: '18. True or False: Header, Main, and Footer Are Semantic Tags',
      body: buildBody(18, 20, 'True or False: Header, Main, and Footer Are Semantic Tags', 'Decide whether those tags are semantic HTML.', 'Click True or False.'),
      widgetCode: choiceWidget('q18', 'EX2_Q18_SUBMITTED', 'Header, main, and footer are semantic tags.', 'Pick True or False.', [
        { value: 'true', label: 'True', copy: 'They describe the job of each page area.', correct: true },
        { value: 'false', label: 'False', copy: 'That statement is not correct.', correct: false }
      ]),
      initialCode: htmlDoc('  <p>Question 18: true or false.</p>'),
      validator: 'function(code) { return /EX2_Q18_SUBMITTED/i.test(code); }'
    },
    {
      title: '19. Which Tag Usually Holds Menu Links?',
      body: buildBody(19, 20, 'Which Tag Usually Holds Menu Links?', 'Choose the semantic tag commonly used for navigation links.', 'Click one answer.'),
      widgetCode: choiceWidget('q19', 'EX2_Q19_SUBMITTED', 'Which semantic tag usually holds menu links?', 'Pick the best answer.', [
        { value: 'nav', label: '<nav>', copy: 'This is commonly used for navigation menus.', correct: true },
        { value: 'article', label: '<article>', copy: 'This is commonly used for one story or post.', correct: false },
        { value: 'footer', label: '<footer>', copy: 'This is usually the bottom section.', correct: false }
      ]),
      initialCode: htmlDoc('  <header>\n    <!-- Question 19 -->\n  </header>\n'),
      validator: 'function(code) { return /EX2_Q19_SUBMITTED/i.test(code); }'
    },
    {
      title: '20. Type the Footer Tag Pair',
      body: buildBody(20, 20, 'Type the Footer Tag Pair', 'Create the opening and closing footer tags.', 'Type the tag pair in the editor, then press Submit Answer.'),
      widgetCode: typingWidget('q20', 'EX2_Q20_SUBMITTED', 'Type the footer shell.', 'Use the exact semantic tag pair shown below.', '<footer></footer>', '/<\\s*footer\\b[^>]*>\\s*<\\s*\\/\\s*footer\\s*>/i.test(code)'),
      initialCode: htmlDoc('  <header></header>\n  <main></main>\n  <!-- Type the footer tags below -->\n'),
      validator: 'function(code) { return /EX2_Q20_SUBMITTED/i.test(code); }'
    },
    {
      title: '21. Finish Exam',
      body: `<section class="space-y-4 rounded-[24px] border border-cyan-400/15 bg-[linear-gradient(180deg,rgba(15,23,42,0.96),rgba(11,18,32,0.94))] p-5 shadow-[0_18px_40px_rgba(2,6,23,0.22)]">
        <p class="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[var(--neon-cyan)]">HTML Final Exam</p>
        <div class="flex flex-wrap items-center justify-between gap-3">
          <h3 class="heading-font text-2xl text-white">21. Finish Exam</h3>
          <span class="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.18em] text-cyan-100">Final Step</span>
        </div>
        <p class="text-[15px] leading-7 text-slate-200">Pick one emoji to finish the exam and reveal the score screen.</p>
      </section>`,
      widgetCode: reflectionWidget(),
      initialCode: '<!-- Pick one emoji to finish Exam 2 -->',
      validator: 'function(code) { return /EX2_FINISHED/i.test(code); }'
    }
  ];

  questions.forEach((module, index) => {
    writeModule(outDir, index, {
      ...module,
      progress: Math.round(((index + 1) / questions.length) * 100)
    });
  });

  return questions;
};
