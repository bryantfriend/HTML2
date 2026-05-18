const fs = require('fs');
const path = require('path');

function escHtml(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function escTemplate(value) {
  return String(value || '').replace(/\\/g, '\\\\').replace(/`/g, '\\`');
}

const previewScaffold = `<style>
#preview-area { margin:0; padding:18px; background:linear-gradient(180deg,#eff6ff,#f8fafc); color:#0f172a; font-family:Arial,sans-serif; line-height:1.55; }
#preview-area body { margin:0; font-family:Arial,sans-serif; background:white; color:#0f172a; padding:18px; border-radius:18px; box-shadow:inset 0 0 0 1px rgba(148,163,184,0.22); }
#preview-area h1, #preview-area h2, #preview-area h3 { margin:0 0 12px; color:#0f172a; }
#preview-area p { margin:0 0 12px; }
#preview-area .exam-page { padding:20px; border-radius:16px; background:linear-gradient(180deg,#ffffff,#f8fafc); border:1px solid #dbeafe; }
#preview-area .exam-page strong { color:#0b57d0; }
</style>`;

const widgetStyle = `<style>
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
</style>`;

const QUESTIONS = [
  ['What is HTML mainly used for?', 'Building the structure of a webpage.', 'Changing the weather outside.', 'Charging a laptop battery.', 'Printing money at home.'],
  ['Which tag makes the biggest heading?', '<h1>', '<p>', '<li>', '<br>'],
  ['Which tag makes a paragraph?', '<p>', '<ol>', '<img>', '<title>'],
  ['What does `<!DOCTYPE html>` tell the browser?', 'This is an HTML5 document.', 'Turn the page into CSS.', 'Hide the webpage title.', 'Delete all closing tags.'],
  ['Which tag wraps the whole HTML page?', '<html>', '<body>', '<main>', '<head>'],
  ['Which section holds page info like the title?', '<head>', '<footer>', '<article>', '<section>'],
  ['Which section holds what we see on the page?', '<body>', '<head>', '<title>', '<meta>'],
  ['What shows in the browser tab?', 'The text inside `<title>`.', 'The first `<p>` tag.', 'The last `<li>` tag.', 'The `alt` text from an image.'],
  ['Which tag makes a numbered list?', '<ol>', '<ul>', '<li>', '<dl>'],
  ['Which tag makes a bulleted list?', '<ul>', '<ol>', '<table>', '<nav>'],
  ['Which tag makes one list item?', '<li>', '<ul>', '<ol>', '<h2>'],
  ['Which tag adds a line break?', '<br>', '<hr>', '<body>', '<main>'],
  ['Which tag makes important bold text?', '<strong>', '<i>', '<em>', '<small>'],
  ['Which tag usually makes italic text?', '<i>', '<h3>', '<ul>', '<form>'],
  ['Which tag adds an image?', '<img>', '<video>', '<audio>', '<source>'],
  ['Which attribute tells an image where to load from?', 'src', 'alt', 'href', 'rows'],
  ['Which attribute describes an image with words?', 'alt', 'src', 'id', 'method'],
  ['Why is `alt` text important?', 'It helps when an image does not load and supports accessibility.', 'It makes text rainbow colored.', 'It turns a list into a heading.', 'It closes an HTML tag automatically.'],
  ['Which attribute can change image width?', 'width', 'alt', 'class', 'lang'],
  ['Which attribute can change image height?', 'height', 'alt', 'title', 'charset'],
  ['Which tag plays sound on a webpage?', '<audio>', '<img>', '<label>', '<aside>'],
  ['Which tag plays a movie on a webpage?', '<video>', '<nav>', '<span>', '<ol>'],
  ['Which attribute shows play and pause buttons for audio or video?', 'controls', 'autoplay', 'loop', 'poster'],
  ['What does `autoplay` do on media?', 'It tries to start playing automatically.', 'It changes the sound into text.', 'It makes the video full screen.', 'It deletes the pause button.'],
  ['Which tag starts a form?', '<form>', '<input>', '<textarea>', '<select>'],
  ['Which tag makes a text box?', '<input>', '<option>', '<label>', '<button>'],
  ['Which input type hides the letters as you type?', 'password', 'text', 'checkbox', 'radio'],
  ['Which input type makes a check box?', 'checkbox', 'password', 'submit', 'range'],
  ['Which input type makes a radio button?', 'radio', 'button', 'hidden', 'email'],
  ['Which tag gives words to explain an input?', '<label>', '<legend>', '<article>', '<h5>'],
  ['Which attribute connects a label to an input id?', 'for', 'src', 'alt', 'rows'],
  ['Which attribute gives an input its name on the page for labels?', 'id', 'href', 'lang', 'loop'],
  ['Which tag makes a submit button?', '<button>', '<head>', '<meta>', '<style>'],
  ['Which button type sends the form?', 'submit', 'reset', 'text', 'audio'],
  ['Which tag makes a bigger typing box for messages?', '<textarea>', '<input>', '<img>', '<nav>'],
  ['Which attribute changes how many rows a textarea shows?', 'rows', 'cols', 'src', 'type'],
  ['Which tag starts a dropdown menu?', '<select>', '<option>', '<ul>', '<main>'],
  ['Which tag makes one dropdown choice?', '<option>', '<select>', '<label>', '<strong>'],
  ['What does the `action` attribute do on a form?', 'It says where the form data should go.', 'It picks the font size.', 'It turns bullets into numbers.', 'It adds a background image.'],
  ['What does the `method` attribute do on a form?', 'It says how the form sends data.', 'It adds a heading at the top.', 'It controls image width.', 'It hides the input label.'],
  ['Which pair is correct for a simple paragraph?', '<p>Hello</p>', '<p>Hello<p>', '</p>Hello<p>', '<paragraph>Hello</paragraph>'],
  ['Which pair is correct for a heading?', '<h2>About Me</h2>', '<h2>About Me<h2>', '</h2>About Me<h2>', '<heading>About Me</heading>'],
  ['Which page part is most like the main content area?', '<main>', '<title>', '<head>', '<meta>'],
  ['Which page part is often used for navigation links?', '<nav>', '<img>', '<em>', '<br>'],
  ['Which page part is often used at the bottom of a page?', '<footer>', '<audio>', '<ol>', '<input>'],
  ['If you want a favorite foods list with bullets, which tags do you need most?', '<ul> and <li>', '<ol> and <br>', '<img> and <alt>', '<form> and <video>'],
  ['If you want steps in order, which list is best?', '<ol>', '<ul>', '<li>', '<strong>'],
  ['Which file usually holds webpage structure?', 'An HTML file', 'A music file', 'A battery file', 'A printer file'],
  ['HTML, CSS, and JavaScript work together. What is HTML most like?', 'The skeleton or structure', 'The paint only', 'The sound effects only', 'The internet cable'],
  ['What should students usually look for when they see an opening tag like `<p>`?', 'A matching closing tag like `</p>`', 'A hashtag', 'A battery icon', 'A mouse pointer']
];

function buildQuestionObjects() {
  return QUESTIONS.map(([title, correct, wrong1, wrong2, wrong3], index) => ({
    id: index + 1,
    title,
    prompt: 'Choose one answer.',
    correct: { value: 'correct', label: correct, copy: 'Tap to choose this answer.' },
    wrong: [
      { value: 'wrong1', label: wrong1, copy: 'Tap to choose this answer.' },
      { value: 'wrong2', label: wrong2, copy: 'Tap to choose this answer.' },
      { value: 'wrong3', label: wrong3, copy: 'Tap to choose this answer.' }
    ]
  }));
}

function getCorrectIndex(questionNumber) {
  return ((questionNumber * 7) + 3) % 4;
}

function buildOptions(question) {
  const distractors = question.wrong.slice();
  const order = [0, 1, 2];
  if (question.id % 2 === 0) order.reverse();
  if (question.id % 3 === 0) order.push(order.shift());
  if (question.id % 5 === 0) order.unshift(order.pop());
  const arrangedWrong = order.map((idx) => distractors[idx]);
  const options = arrangedWrong.slice();
  options.splice(getCorrectIndex(question.id), 0, question.correct);
  return options.map((option, index) => ({
    key: String.fromCharCode(65 + index),
    ...option,
    correct: option === question.correct
  }));
}

function buildBody(questionNumber, total, questionTitle) {
  return `<section class="space-y-4 rounded-[24px] border border-cyan-400/15 bg-[linear-gradient(180deg,rgba(15,23,42,0.96),rgba(11,18,32,0.94))] p-5 shadow-[0_18px_40px_rgba(2,6,23,0.22)]">
  <p class="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[var(--neon-cyan)]">HTML Final Exam</p>
  <div class="flex flex-wrap items-center justify-between gap-3">
    <h3 class="heading-font text-2xl text-white">${questionNumber}. ${escHtml(questionTitle)}</h3>
    <span class="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.18em] text-cyan-100">Question ${questionNumber} of ${total}</span>
  </div>
  <p class="text-[15px] leading-7 text-slate-200">Pick one answer. Your score appears only at the end.</p>
  <div class="grid gap-3 md:grid-cols-3">
    <div class="rounded-2xl border border-slate-400/10 bg-slate-900/60 p-3 text-sm text-slate-200"><strong class="block text-[11px] uppercase tracking-[0.18em] text-cyan-300">Format</strong>4-answer multiple choice.</div>
    <div class="rounded-2xl border border-slate-400/10 bg-slate-900/60 p-3 text-sm text-slate-200"><strong class="block text-[11px] uppercase tracking-[0.18em] text-cyan-300">Pace</strong>40-minute exam. Work through all 50 questions.</div>
    <div class="rounded-2xl border border-slate-400/10 bg-slate-900/60 p-3 text-sm text-slate-200"><strong class="block text-[11px] uppercase tracking-[0.18em] text-cyan-300">Rule</strong>You will not see right or wrong until the end.</div>
  </div>
</section>`;
}

function buildBaseScript(rootId, questionKey, marker, total) {
  return `
(function() {
  const root = document.getElementById('${rootId}');
  if (!root) return;
  const editor = document.getElementById('code-editor');
  const status = root.querySelector('[data-exam2-status]');
  window.exam2Answers = window.exam2Answers || {};
  window.exam2TotalQuestions = ${total};
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
    window.exam2Answers['${questionKey}'] = { correct: !!correct, response: response };
    if (status) status.textContent = 'Answer saved. Move to the next question when you are ready.';
    if (editor) {
      editor.value = appendMarker(editor.value, '${marker}');
      editor.dispatchEvent(new Event('input', { bubbles: true }));
    }
    root.querySelectorAll('button').forEach(function(button) {
      button.disabled = true;
    });
  }
`;
}

function buildChoiceWidget(question, total) {
  const rootId = `exam2-q${question.id}`;
  const marker = `EX2_Q${question.id}_SUBMITTED`;
  const optionsHtml = buildOptions(question).map((option) => {
    return `<button type="button" class="exam2-option" data-value="${escHtml(option.value)}" data-correct="${option.correct ? 'true' : 'false'}"><strong>${option.key}. ${escHtml(option.label)}</strong><span>${escHtml(option.copy)}</span></button>`;
  }).join('');

  return `<!-- INTERACTIVE MODULE -->
${widgetStyle}
<div class="exam2-shell" id="${rootId}">
  <div class="exam2-top">
    <div>
      <p class="exam2-kicker">Record One Answer</p>
      <h4 class="exam2-heading">${escHtml(question.title)}</h4>
    </div>
    <div class="flex flex-wrap gap-2">
      <span class="exam2-chip">Multiple Choice</span>
      <span class="exam2-timer" data-exam2-timer>Time Left 40:00</span>
    </div>
  </div>
  <p class="exam2-prompt">${escHtml(question.prompt)}</p>
  <div class="exam2-option-grid">${optionsHtml}</div>
  <p class="exam2-status" data-exam2-status>Choose one answer to save it.</p>
</div>
<script>
${buildBaseScript(rootId, `q${question.id}`, marker, total)}
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

function buildFinishWidget(total) {
  return `<!-- INTERACTIVE MODULE -->
${widgetStyle}
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
${buildBaseScript('exam2-finish', 'finish', 'EX2_FINISHED', total)}
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
</script>`;
}

function buildPreviewHtml(questionNumber) {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Exam 2</title>
</head>
<body>
  <div class="exam-page">
    <h2>Exam 2</h2>
    <p><strong>Question ${questionNumber}</strong> is loaded.</p>
    <p>Use the answer buttons on the left to save one answer.</p>
  </div>
</body>
</html>`;
}

function writeModuleFile(moduleIndex, moduleObject) {
  const filePath = path.join(__dirname, '..', 'lessons', 'exam2', `module${moduleIndex}.js`);
  const content = `window.Lessons.exam2.modules[${moduleIndex - 1}] = {
    title: ${JSON.stringify(moduleObject.title)},
    body: \`${escTemplate(moduleObject.body)}\`,
    svg: \`\`,
    widgetCode: \`${escTemplate(moduleObject.widgetCode)}\`,
    initialCode: ${JSON.stringify(moduleObject.initialCode)},
    previewScaffold: \`${escTemplate(previewScaffold)}\`,
    progress: ${moduleObject.progress},
    validator: function(code) { return /${moduleObject.marker}/i.test(code); }
};
`;
  fs.writeFileSync(filePath, content);
}

function buildExam2() {
  const lessonsDir = path.join(__dirname, '..', 'lessons', 'exam2');
  fs.mkdirSync(lessonsDir, { recursive: true });

  const questions = buildQuestionObjects();
  const totalQuestions = questions.length;
  const totalModules = totalQuestions + 1;

  const metadata = `window.Lessons = window.Lessons || {};
window.Lessons.exam2 = {
    id: "exam2",
    title: "Exam 2: HTML Final Exam",
    description: "A 40-minute, 50-question HTML multiple choice exam. The score appears at the end.",
    gameTitle: "",
    gamePath: "",
    modules: []
};
`;
  fs.writeFileSync(path.join(lessonsDir, 'metadata.js'), metadata);

  questions.forEach((question, index) => {
    const moduleNumber = index + 1;
    writeModuleFile(moduleNumber, {
      title: `${moduleNumber}. ${question.title}`,
      body: buildBody(moduleNumber, totalQuestions, question.title),
      widgetCode: buildChoiceWidget(question, totalQuestions),
      initialCode: `<!-- Question ${moduleNumber}: click one answer on the left to save it. -->`,
      progress: Math.max(2, Math.round((moduleNumber / totalModules) * 100)),
      marker: `EX2_Q${moduleNumber}_SUBMITTED`
    });
  });

  writeModuleFile(totalModules, {
    title: `${totalModules}. Finish Exam`,
    body: `<section class="space-y-4 rounded-[24px] border border-cyan-400/15 bg-[linear-gradient(180deg,rgba(15,23,42,0.96),rgba(11,18,32,0.94))] p-5 shadow-[0_18px_40px_rgba(2,6,23,0.22)]">
  <p class="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[var(--neon-cyan)]">HTML Final Exam</p>
  <div class="flex flex-wrap items-center justify-between gap-3">
    <h3 class="heading-font text-2xl text-white">${totalModules}. Finish Exam</h3>
    <span class="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.18em] text-cyan-100">Final Step</span>
  </div>
  <p class="text-[15px] leading-7 text-slate-200">Finish the test to reveal the student score.</p>
</section>`,
    widgetCode: buildFinishWidget(totalQuestions),
    initialCode: '<!-- Finish Exam 2 -->',
    progress: 100,
    marker: 'EX2_FINISHED'
  });

  const previewPath = path.join(lessonsDir, 'preview.html');
  fs.writeFileSync(previewPath, buildPreviewHtml(1));
}

if (require.main === module) {
  buildExam2();
}

module.exports = buildExam2;
