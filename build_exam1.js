const fs = require('fs');
const path = require('path');

const questions = [
  { prompt: 'What does HTML stand for?', options: ['HyperText Markup Language', 'High Transfer Machine Language', 'Home Tool Markup Logic', 'Hyperlink Text Machine Logic'], correct: 0 },
  { prompt: 'Which key is commonly used in the lessons to open browser developer tools?', options: ['F5', 'F9', 'F12', 'Tab'], correct: 2 },
  { prompt: 'Which file extension is correct for an HTML web page?', options: ['.html', '.jpg', '.mp3', '.zip'], correct: 0 },
  { prompt: 'Which tag is the outer container for the whole HTML document?', options: ['<body>', '<head>', '<html>', '<title>'], correct: 2 },
  { prompt: 'Which part of the page belongs inside the <head> section?', options: ['The page title', 'The main paragraph text', 'The list items students can see', 'The image shown in the body'], correct: 0 },
  { prompt: 'Which tag holds most of the visible content on the page?', options: ['<body>', '<meta>', '<head>', '<link>'], correct: 0 },
  { prompt: 'Which tag is the correct opening tag for the biggest heading?', options: ['<h1>', '<heading1>', '<head1>', '<header>'], correct: 0 },
  { prompt: 'Why do opening and closing tags need to match?', options: ['So the browser can read the structure correctly', 'So the file becomes shorter', 'So images load faster', 'So buttons appear automatically'], correct: 0 },
  { prompt: 'What does nesting mean in HTML?', options: ['Placing one tag inside another tag', 'Putting files in a folder', 'Deleting old code', 'Opening two tabs at once'], correct: 0 },
  { prompt: 'Which example is nested correctly?', options: ['<p><strong>Hi</strong></p>', '<p><strong>Hi</p></strong>', '<strong><p>Hi</strong></p>', '<p></strong>Hi<strong></p>'], correct: 0 },
  { prompt: 'Which tag creates a paragraph?', options: ['<p>', '<paragraph>', '<text>', '<h3>'], correct: 0 },
  { prompt: 'Which tag is used to make text strong or bold?', options: ['<strong>', '<em>', '<li>', '<img>'], correct: 0 },
  { prompt: 'Which tag is used for emphasized or italic text?', options: ['<em>', '<alt>', '<src>', '<list>'], correct: 0 },
  { prompt: 'What is the main purpose of a list in HTML?', options: ['To organize related items', 'To play music', 'To change file names', 'To save browser history'], correct: 0 },
  { prompt: 'Which tag starts an unordered list with bullet points?', options: ['<ul>', '<ol>', '<li>', '<list>'], correct: 0 },
  { prompt: 'Which tag starts an ordered list with numbers?', options: ['<ol>', '<ul>', '<li>', '<order>'], correct: 0 },
  { prompt: 'Which tag is used for each item inside a list?', options: ['<li>', '<item>', '<point>', '<entry>'], correct: 0 },
  { prompt: 'Which type of list uses bullet points by default?', options: ['Unordered list', 'Ordered list', 'Numbered heading', 'Nested paragraph'], correct: 0 },
  { prompt: 'Which type of list uses numbers by default?', options: ['Ordered list', 'Unordered list', 'Image list', 'Heading list'], correct: 0 },
  { prompt: 'If students click food buttons into a list, what idea is the activity teaching?', options: ['List items belong inside a list container', 'Videos need autoplay', 'Images need a width attribute', 'Headings must be underlined'], correct: 0 },
  { prompt: 'Which tag is best for the main page title?', options: ['<h1>', '<p>', '<li>', '<ul>'], correct: 0 },
  { prompt: 'Which tag is a good choice for a smaller heading under the main title?', options: ['<h2>', '<body>', '<img>', '<ol>'], correct: 0 },
  { prompt: 'Why do many examples indent nested HTML?', options: ['It makes the structure easier to read', 'It changes the font size', 'It uploads the file to the internet', 'It automatically fixes mistakes'], correct: 0 },
  { prompt: 'What usually happens if tags are closed in the wrong order?', options: ['The structure breaks or behaves strangely', 'The page turns into a video', 'The browser doubles the text size', 'The file becomes CSS'], correct: 0 },
  { prompt: 'Why is clean, readable HTML useful?', options: ['It is easier to understand and fix later', 'It makes every page animated', 'It removes the need for closing tags', 'It changes bullet lists into numbered lists'], correct: 0 },
  { prompt: 'Which example is a correct paragraph element?', options: ['<p>Hello</p>', '<p>Hello<p>', '<paragraph>Hello</paragraph>', '<p>Hello</h1>'], correct: 0 },
  { prompt: 'Which example is a correct list item element?', options: ['<li>Pizza</li>', '<ul>Pizza</ul>', '<item>Pizza</item>', '<li>Pizza<ul>'], correct: 0 },
  { prompt: 'What is a nested list?', options: ['A list placed inside a list item', 'A list with no closing tags', 'A heading inside the <head>', 'A paragraph with bullet points'], correct: 0 },
  { prompt: 'If you want three numbered steps, which outer tag should you choose?', options: ['<ol>', '<ul>', '<p>', '<h3>'], correct: 0 },
  { prompt: 'After finishing an interactive mission, when should the student move on?', options: ['When the next button unlocks', 'After deleting the code', 'After closing the browser', 'After renaming the file'], correct: 0 }
];

const outDir = path.join('lessons', 'exam1');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

fs.writeFileSync(path.join(outDir, 'metadata.js'), `window.Lessons = window.Lessons || {};
window.Lessons.exam1 = {
    id: "exam1",
    title: "Exam 1: Foundations Checkpoint",
    description: "30 multiple choice questions covering Lessons 0-3, followed by reflection and a score code.",
    modules: []
};`);

function escapeJs(value) {
  return String(value || '').replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$');
}

function escapeHtml(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function optionLabel(index) {
  return String.fromCharCode(65 + index);
}

function renderOption(option) {
  const escaped = escapeHtml(option);
  const looksLikeCode = /^<\/?[a-z0-9]+[^>]*>$/i.test(option) || /^<.+>$/.test(option) || /^\.[a-z0-9]+$/i.test(option) || /^[A-Z]\d{1,2}$/i.test(option);
  return looksLikeCode ? `<code class="exam1-inline-code">${escaped}</code>` : escaped;
}

questions.forEach((question, index) => {
  const qNum = index + 1;
  const optionsHtml = question.options.map((option, optionIndex) => {
    const label = optionLabel(optionIndex);
    return `<button type="button" class="exam1-option" data-choice="${label}" onclick="window.exam1Pick(${qNum}, '${label}', ${optionIndex === question.correct})"><span class="exam1-badge">${label}</span><span>${renderOption(option)}</span></button>`;
  }).join('');

  const widgetCode = `<!-- INTERACTIVE MODULE -->
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
  <p class="exam1-kicker">Exam 1 Question ${qNum} of 30</p>
  <p class="exam1-question">${escapeHtml(question.prompt)}</p>
  <div class="exam1-options">${optionsHtml}</div>
  <div id="exam1-status-${qNum}" class="exam1-status">Choose the best answer.</div>
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
    const status = document.getElementById('exam1-status-${qNum}');
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

  const previous = window.exam1Answers[${qNum}];
  if (previous) {
    window.exam1Pick(${qNum}, previous.selected, previous.correct);
  }
})();
</script>`;

  const fileContent = `window.Lessons.exam1.modules[${index}] = {
    title: "${qNum}. Exam Question ${qNum}",
    body: \`<p class="text-gray-300">Pick the best answer based on what you learned in Lessons 0, 1, 2, and 3.</p><p class="text-sm italic text-gray-400 mt-4">Mission: Choose your best answer to save your guess and unlock the next question.</p>\`,
    svg: \`<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="24" y="24" width="192" height="102" rx="18" fill="#0f172a" stroke="#67e8f9" stroke-width="2"/><text x="120" y="68" fill="#67e8f9" font-size="22" text-anchor="middle" font-family="monospace">Q${qNum}</text><text x="120" y="98" fill="#e2e8f0" font-size="12" text-anchor="middle" font-family="sans-serif">Exam 1 Checkpoint</text></svg>\`,
    widgetCode: \`${escapeJs(widgetCode)}\`,
    initialCode: \`<!-- Pick the best answer for Question ${qNum} -->\`,
    progress: ${Math.round((qNum / 31) * 100)},
    validator: function(code) { return /EXAM1_ANSWER\\s*:\\s*Q${qNum}\\s*:\\s*[A-D]/i.test(code); }
};`;

  fs.writeFileSync(path.join(outDir, `module${qNum}.js`), fileContent);
});

const emojiWidget = `<!-- INTERACTIVE MODULE -->
<style>
.exam1-emoji-shell { padding: 18px; border-radius: 18px; background: linear-gradient(180deg, #0f172a, #111827); border: 1px solid #1e3a5f; color: white; }
.exam1-scoreline { margin: 0 0 14px; color: #67e8f9; font-weight: 700; }
.exam1-emoji-grid { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 10px; }
.exam1-emoji-btn { font-size: 30px; padding: 10px; border-radius: 12px; border: none; background: #1e293b; cursor: pointer; transition: transform .15s ease, background .15s ease; }
.exam1-emoji-btn:hover { transform: scale(1.08); background: rgba(103, 232, 249, 0.14); }
</style>
<div class="exam1-emoji-shell">
  <p id="exam1-scoreline" class="exam1-scoreline">Current score: 0 / 30</p>
  <p class="mb-4">How did the exam feel?</p>
  <div class="exam1-emoji-grid">
    <button class="exam1-emoji-btn" onclick="window.exam1PickEmoji('🤯')">🤯</button>
    <button class="exam1-emoji-btn" onclick="window.exam1PickEmoji('😅')">😅</button>
    <button class="exam1-emoji-btn" onclick="window.exam1PickEmoji('😌')">😌</button>
    <button class="exam1-emoji-btn" onclick="window.exam1PickEmoji('😎')">😎</button>
    <button class="exam1-emoji-btn" onclick="window.exam1PickEmoji('🚀')">🚀</button>
  </div>
</div>
<script>
(function() {
  const editor = document.getElementById('code-editor');
  if (editor) {
    editor.readOnly = true;
    editor.style.opacity = '0.85';
  }
  const score = Object.values(window.exam1Answers || {}).filter(entry => entry && entry.correct).length;
  const scoreline = document.getElementById('exam1-scoreline');
  if (scoreline) {
    scoreline.textContent = 'Current score: ' + score + ' / 30';
  }
  window.exam1PickEmoji = function(emoji) {
    window.lessonEmoji = emoji;
    if (editor) {
      editor.value = '<!-- EXAM1_EMOJI:' + emoji + ' -->\\n<!-- EMOJI_SELECTED -->';
      editor.dispatchEvent(new Event('input', { bubbles: true }));
    }
  };
})();
</script>`;

fs.writeFileSync(path.join(outDir, 'module31.js'), `window.Lessons.exam1.modules[30] = {
    title: "31. Exam Reflection",
    body: \`<p>You made it through Exam 1. Pick the emoji that best matches how the exam felt, then your score code will appear on the final screen.</p><p class="text-sm italic text-gray-400 mt-4">Mission: Choose one emoji to finish the exam.</p>\`,
    svg: \`<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="24" y="24" width="192" height="102" rx="18" fill="#0f172a" stroke="#ff5fc4" stroke-width="2"/><text x="120" y="78" fill="#ff5fc4" font-size="20" text-anchor="middle" font-family="monospace">REFLECT</text><text x="120" y="104" fill="#e2e8f0" font-size="12" text-anchor="middle" font-family="sans-serif">Emoji + score code</text></svg>\`,
    widgetCode: \`${escapeJs(emojiWidget)}\`,
    initialCode: \`<!-- Choose an emoji to finish Exam 1 -->\`,
    progress: 100,
    validator: function(code) { return /EMOJI_SELECTED/i.test(code); }
};`);

console.log('Successfully generated exam1 modules!');
