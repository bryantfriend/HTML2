const fs = require('fs');
const path = require('path');
const { writeInteractiveLesson, escHtml } = require('./interactive_lesson_factory');

function marker(name) {
  return `code.includes("<!-- ${name} -->")`;
}

function tag(name) {
  return `/<\\s*${name}\\b/i.test(code)`;
}

function endTag(name) {
  return `/<\\s*\\/\\s*${name}\\s*>/i.test(code)`;
}

function pairedTag(name) {
  return `${tag(name)} && ${endTag(name)}`;
}

function countTag(name, count) {
  return `(code.match(/<\\s*${name}\\b/gi) || []).length >= ${count}`;
}

function attr(name, valuePattern) {
  if (!valuePattern) {
    return `/\\b${name}\\s*=\\s*["'][^"']+["']/i.test(code)`;
  }
  return `/\\b${name}\\s*=\\s*["']${valuePattern}["']/i.test(code)`;
}

function textInsideTag(name, textPattern) {
  return `/<\\s*${name}\\b[^>]*>[\\s\\S]*?${textPattern}[\\s\\S]*?<\\s*\\/\\s*${name}\\s*>/i.test(code)`;
}

function containsPattern(pattern) {
  return `/${pattern}/i.test(code)`;
}

function all(parts) {
  return `function(code) { return ${parts.join(' && ')}; }`;
}

function htmlDoc(inner) {
  return [
    '<!DOCTYPE html>',
    '<html>',
    '<head>',
    '  <meta charset="UTF-8">',
    '  <title>HTML Final Mission</title>',
    '</head>',
    '<body>',
    inner,
    '</body>',
    '</html>'
  ].join('\n');
}

function hero(label, sublabel, accent) {
  return `<svg class="quest-svg-stage" viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="10" y="10" width="300" height="130" rx="24" fill="#0f172a" stroke="rgba(148,163,184,0.2)"/>
    <rect x="28" y="26" width="264" height="18" rx="9" fill="${accent}"/>
    <rect x="28" y="58" width="122" height="56" rx="18" fill="#e0f2fe"/>
    <rect x="170" y="58" width="122" height="24" rx="12" fill="#fef3c7"/>
    <rect x="170" y="90" width="122" height="24" rx="12" fill="#dcfce7"/>
    <text x="160" y="42" fill="#082f49" font-size="12" text-anchor="middle" font-family="Arial, sans-serif">${escHtml(label)}</text>
    <text x="160" y="132" fill="#cbd5e1" font-size="12" text-anchor="middle" font-family="Arial, sans-serif">${escHtml(sublabel)}</text>
  </svg>`;
}

function previewCard(title, body, color) {
  return `<div style="width:100%;max-width:260px;padding:16px;border-radius:20px;background:linear-gradient(180deg,#ffffff,#f8fafc);box-shadow:inset 0 0 0 1px rgba(148,163,184,0.22);">
    <div style="padding:10px 12px;border-radius:14px;background:${color};color:#0f172a;font:900 12px/1.2 Arial,sans-serif;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:10px;">${escHtml(title)}</div>
    ${body}
  </div>`;
}

const previewScaffold = `<style>
#preview-area { margin:0; padding:18px; background:linear-gradient(180deg,#eff6ff,#f8fafc); color:#0f172a; font-family:Arial,sans-serif; line-height:1.55; }
#preview-area body { margin:0; font-family:Arial,sans-serif; background:white; color:#0f172a; padding:18px; border-radius:18px; box-shadow:inset 0 0 0 1px rgba(148,163,184,0.22); }
#preview-area h1, #preview-area h2 { margin:0 0 12px; color:#0f172a; }
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

module.exports = function buildExam2HtmlFinal() {
  const modules = [
    {
      title: '1. HTML Mission Start',
      kicker: 'Final Mission',
      intro: 'This easy final is secretly one more guided practice lap. Tap the card that tells what HTML really does.',
      watch: 'Look at the three page parts on the screen.',
      play: 'Tap the card that matches HTML.',
      type: 'No typing yet. Warm up first.',
      remember: 'HTML gives a webpage its structure.',
      mission: 'Choose the job of HTML.',
      hero: hero('HTML = structure', 'Easy points. Keep moving.', '#67e8f9'),
      widget: {
        type: 'choice',
        heading: 'What is HTML mainly used for?',
        chip: '1 easy answer',
        prompt: 'Pick the best job for HTML.',
        marker: 'EX2_M1_READY',
        success: 'Nice. HTML builds the structure of a webpage.',
        retry: 'Try again. Think structure, not paint or movement.',
        options: [
          { value: 'structure', label: 'Build the structure', copy: 'Headings, paragraphs, images, forms, and page parts.' },
          { value: 'style', label: 'Paint the colors', copy: 'That is mostly CSS.' },
          { value: 'motion', label: 'Make everything move', copy: 'That is usually JavaScript.' }
        ],
        correct: ['structure']
      },
      initialCode: htmlDoc('  <h1>HTML Final Mission</h1>\n  <p>Start by picking the best answer on the left.</p>'),
      validator: all([marker('EX2_M1_READY')])
    },
    {
      title: '2. The Biggest Heading',
      kicker: 'Text Tags',
      intro: 'Headings help readers know what a page is about right away.',
      watch: 'Notice how a big title stands out in the preview.',
      play: 'Read the heading card in the demo area.',
      type: 'Type <code>&lt;h1&gt;My First Page&lt;/h1&gt;</code> inside the body.',
      remember: '<code>&lt;h1&gt;</code> is the biggest heading tag.',
      mission: 'Add one big page heading.',
      hero: hero('Big title first', 'Students can see it instantly.', '#a5f3fc'),
      widget: {
        type: 'demo',
        heading: 'A page title should be easy to spot.',
        chip: 'type h1',
        browserTitle: 'index.html',
        code: '<h1>My First Page</h1>',
        preview: previewCard('Heading', '<h1 style="margin:0;font:900 28px/1.1 Arial,sans-serif;">My First Page</h1>', '#bfdbfe'),
        captions: ['Start with an opening h1 tag.', 'Put the title words in the middle.', 'Close the h1 tag to finish the heading.']
      },
      initialCode: htmlDoc('  <!-- Type your h1 heading below this line -->\n'),
      validator: all([textInsideTag('h1', 'my\\s*first\\s*page')])
    },
    {
      title: '3. Add a Paragraph',
      kicker: 'Text Tags',
      intro: 'Paragraph tags hold normal sentence text on a page.',
      watch: 'The heading stays bold while the paragraph sits underneath it.',
      play: 'Look for the sentence block in the preview card.',
      type: 'Type <code>&lt;p&gt;I am learning HTML.&lt;/p&gt;</code> under the heading.',
      remember: '<code>&lt;p&gt;</code> is for a paragraph of text.',
      mission: 'Add one paragraph.',
      hero: hero('Heading + paragraph', 'The page gets real content now.', '#93c5fd'),
      widget: {
        type: 'demo',
        heading: 'Most pages mix headings and paragraphs.',
        chip: 'type p',
        browserTitle: 'index.html',
        code: '<p>I am learning HTML.</p>',
        preview: previewCard('Paragraph', '<p style="margin:0;color:#334155;font:700 15px/1.5 Arial,sans-serif;">I am learning HTML.</p>', '#dbeafe'),
        captions: ['Open the paragraph tag.', 'Write the sentence inside it.', 'Close the tag so the browser knows where the paragraph ends.']
      },
      initialCode: htmlDoc('  <h1>My First Page</h1>\n  <!-- Add your paragraph here -->\n'),
      validator: all([textInsideTag('p', 'i\\s*am\\s*learning\\s*html')])
    },
    {
      title: '4. True or False: Break Line',
      kicker: 'Text Tags',
      intro: 'A line break is a tiny tag that jumps text to the next line.',
      watch: 'See the two short lines stack instead of sitting side by side.',
      play: 'Pick true or false, then add the break tag in the code.',
      type: 'Put <code>&lt;br&gt;</code> between <code>Hello</code> and <code>World</code>.',
      remember: '<code>&lt;br&gt;</code> does not need a closing tag here.',
      mission: 'Use a line break correctly.',
      hero: hero('Hello', 'World on the next line.', '#fde68a'),
      widget: {
        type: 'choice',
        heading: 'True or false: The <br> tag moves text to a new line.',
        chip: 'true / false',
        prompt: 'Pick the best answer.',
        marker: 'EX2_M4_TRUE',
        success: 'Correct. A line break moves the next text to a new line.',
        retry: 'Try again. Think of pressing Enter once.',
        options: [
          { value: 'true', label: 'True', copy: 'It starts a new line.' },
          { value: 'false', label: 'False', copy: 'It keeps everything on one line.' }
        ],
        correct: ['true']
      },
      initialCode: htmlDoc('  <p>Hello\n  World</p>\n'),
      validator: all([marker('EX2_M4_TRUE'), tag('br')])
    },
    {
      title: '5. Make It Strong',
      kicker: 'Text Tags',
      intro: 'Strong text makes an important word stand out.',
      watch: 'The key word looks more powerful in the preview.',
      play: 'Read the example word that pops out.',
      type: 'Wrap the word <code>important</code> with <code>&lt;strong&gt;</code> tags.',
      remember: '<code>&lt;strong&gt;</code> is a great choice for important text.',
      mission: 'Make one word strong.',
      hero: hero('Important words pop', 'Students see the change fast.', '#f9a8d4'),
      widget: {
        type: 'demo',
        heading: 'Strong text calls attention to the important part.',
        chip: 'type strong',
        browserTitle: 'index.html',
        code: '<strong>important</strong>',
        preview: previewCard('Strong', '<p style="margin:0;font:700 15px/1.5 Arial,sans-serif;">This is <strong>important</strong>.</p>', '#fbcfe8'),
        captions: ['Open the strong tag before the key word.', 'Leave the other words outside it.', 'Close the strong tag after the key word.']
      },
      initialCode: htmlDoc('  <p>This is important.</p>\n'),
      validator: all([textInsideTag('strong', 'important')])
    },
    {
      title: '6. Italic Feeling',
      kicker: 'Text Tags',
      intro: 'Emphasized text leans and helps a word feel special.',
      watch: 'The highlighted word looks different right away.',
      play: 'Spot the tilted word in the preview card.',
      type: 'Wrap the word <code>exciting</code> with <code>&lt;em&gt;</code> tags.',
      remember: '<code>&lt;em&gt;</code> emphasizes a word.',
      mission: 'Add one emphasized word.',
      hero: hero('Small emphasis', 'A tiny tag can change the feeling.', '#c4b5fd'),
      widget: {
        type: 'demo',
        heading: 'Emphasis makes a word feel different.',
        chip: 'type em',
        browserTitle: 'index.html',
        code: '<em>exciting</em>',
        preview: previewCard('Emphasis', '<p style="margin:0;font:700 15px/1.5 Arial,sans-serif;">HTML is <em>exciting</em>.</p>', '#ddd6fe'),
        captions: ['Open the em tag before the special word.', 'Keep the rest of the sentence outside it.', 'Close the em tag right after the word.']
      },
      initialCode: htmlDoc('  <p>HTML is exciting.</p>\n'),
      validator: all([textInsideTag('em', 'exciting')])
    },
    {
      title: '7. Build a Bullet List',
      kicker: 'Lists',
      intro: 'Unordered lists show bullet points for items that do not need numbers.',
      watch: 'The preview turns plain words into a real bullet list.',
      play: 'Notice the bullets appear automatically.',
      type: 'Add <code>&lt;ul&gt;</code> with 2 items: <code>Apples</code> and <code>Bananas</code>.',
      remember: '<code>&lt;ul&gt;</code> goes outside and <code>&lt;li&gt;</code> goes inside.',
      mission: 'Create a 2-item bullet list.',
      hero: hero('Bullets = unordered list', 'Great for favorites and supplies.', '#86efac'),
      widget: {
        type: 'demo',
        heading: 'A bullet list keeps items neat.',
        chip: 'ul + li',
        browserTitle: 'list.html',
        code: '<ul>\n  <li>Apples</li>\n  <li>Bananas</li>\n</ul>',
        preview: previewCard('List', '<ul style="margin:0;padding-left:24px;"><li>Apples</li><li>Bananas</li></ul>', '#dcfce7'),
        captions: ['Start with the ul tag.', 'Add one li for each item.', 'Close both the li tags and the ul tag.']
      },
      initialCode: htmlDoc('  <!-- Build your bullet list here -->\n'),
      validator: all([pairedTag('ul'), countTag('li', 2), containsPattern('apples'), containsPattern('bananas')])
    },
    {
      title: '8. Number the Steps',
      kicker: 'Lists',
      intro: 'Ordered lists use numbers when the order matters.',
      watch: 'The preview shows step 1 and step 2.',
      play: 'Think recipe steps or morning routines.',
      type: 'Add <code>&lt;ol&gt;</code> with 2 items: <code>Wake up</code> and <code>Eat breakfast</code>.',
      remember: '<code>&lt;ol&gt;</code> makes a numbered list.',
      mission: 'Create a 2-step ordered list.',
      hero: hero('Numbers = ordered list', 'Use it when sequence matters.', '#fcd34d'),
      widget: {
        type: 'demo',
        heading: 'Ordered lists are perfect for steps.',
        chip: 'ol + li',
        browserTitle: 'steps.html',
        code: '<ol>\n  <li>Wake up</li>\n  <li>Eat breakfast</li>\n</ol>',
        preview: previewCard('Steps', '<ol style="margin:0;padding-left:24px;"><li>Wake up</li><li>Eat breakfast</li></ol>', '#fef3c7'),
        captions: ['Open the ol tag for a numbered list.', 'Add one li for each step.', 'Close the ol tag when the list is done.']
      },
      initialCode: htmlDoc('  <!-- Build your numbered list here -->\n'),
      validator: all([pairedTag('ol'), countTag('li', 2), `/wake\\s*up/i.test(code)`, `/eat\\s*breakfast/i.test(code)`])
    },
    {
      title: '9. Easy Image Tag',
      kicker: 'Images',
      intro: 'The image tag places a picture on the page.',
      watch: 'When the tag appears, the cat picture appears too.',
      play: 'Use the exact source shown in the mission text.',
      type: 'Type <code>&lt;img src="assets/exam-html-cat.svg"&gt;</code> inside the body.',
      remember: '<code>src</code> tells the browser where the image lives.',
      mission: 'Show the cat image.',
      hero: hero('Picture power', 'One tag, instant image.', '#7dd3fc'),
      widget: {
        type: 'demo',
        heading: 'The img tag can place a picture with one line.',
        chip: 'type img',
        browserTitle: 'images.html',
        code: '<img src="assets/exam-html-cat.svg">',
        preview: previewCard('Image', '<img src="assets/exam-html-cat.svg" alt="Cat" style="margin:0 auto;">', '#dbeafe'),
        captions: ['Open the img tag.', 'Add the src attribute with the picture path.', 'Close the tag with > so the picture can appear.']
      },
      initialCode: htmlDoc('  <!-- Type the img tag here -->\n'),
      validator: all([tag('img'), attr('src', 'assets\\/exam-html-cat\\.svg')])
    },
    {
      title: '10. Alt Text Helps',
      kicker: 'Images',
      intro: 'Alt text explains an image if it does not load or if someone uses a screen reader.',
      watch: 'The mission is easy: keep the same image and add the helpful words.',
      play: 'Pick the true statement, then type the alt text.',
      type: 'Add <code>alt="happy cat"</code> to the image tag.',
      remember: 'Alt text describes the image.',
      mission: 'Add helpful alt text.',
      hero: hero('Pictures need words too', 'Alt text is part of good HTML.', '#bae6fd'),
      widget: {
        type: 'choice',
        heading: 'True or false: Alt text describes the picture.',
        chip: 'true / false',
        prompt: 'Pick the best answer.',
        marker: 'EX2_M10_TRUE',
        success: 'Exactly. Alt text tells what the picture is.',
        retry: 'Try again. Think description, not decoration.',
        options: [
          { value: 'true', label: 'True', copy: 'Alt text describes the image.' },
          { value: 'false', label: 'False', copy: 'Alt text changes the color of the image.' }
        ],
        correct: ['true']
      },
      initialCode: htmlDoc('  <img src="assets/exam-html-cat.svg">\n'),
      validator: all([marker('EX2_M10_TRUE'), attr('alt', 'happy\\s*cat')])
    },
    {
      title: '11. Form Shell',
      kicker: 'Forms',
      intro: 'A form wraps inputs and buttons that collect information.',
      watch: 'The dashed box in the preview shows the form area.',
      play: 'See the whole form container before adding smaller pieces later.',
      type: 'Type <code>&lt;form&gt;&lt;/form&gt;</code> inside the body.',
      remember: 'Forms hold interactive inputs.',
      mission: 'Create the form container.',
      hero: hero('Form = container', 'Big box first, details second.', '#38bdf8'),
      widget: {
        type: 'demo',
        heading: 'Start a form before adding inputs.',
        chip: 'type form',
        browserTitle: 'form.html',
        code: '<form></form>',
        preview: previewCard('Form', '<form style="margin:0;"><p style="margin:0;color:#0f172a;font:700 14px/1.4 Arial,sans-serif;">Your form box is ready.</p></form>', '#e0f2fe'),
        captions: ['Open the form tag first.', 'Leave space inside it for inputs later.', 'Close the form tag to finish the container.']
      },
      initialCode: htmlDoc('  <!-- Build your form here -->\n'),
      validator: all([pairedTag('form')])
    },
    {
      title: '12. Text Input',
      kicker: 'Forms',
      intro: 'A text input gives the student a place to type words.',
      watch: 'The field appears as soon as the input tag is added.',
      play: 'Use the exact <code>type="text"</code> value.',
      type: 'Inside the form, type <code>&lt;input type="text"&gt;</code>.',
      remember: 'Text fields use <code>type="text"</code>.',
      mission: 'Add a text input inside the form.',
      hero: hero('Typing field', 'Students know this one fast.', '#67e8f9'),
      widget: {
        type: 'choice',
        heading: 'Which input type makes a normal typing box?',
        chip: '1 easy answer',
        prompt: 'Pick the best type, then type it in the editor.',
        marker: 'EX2_M12_TYPE',
        success: 'Right. A normal typing box uses type="text".',
        retry: 'Try again. Think plain typing field.',
        options: [
          { value: 'text', label: 'text', copy: 'A normal typing field.' },
          { value: 'checkbox', label: 'checkbox', copy: 'A tiny box you check.' },
          { value: 'radio', label: 'radio', copy: 'A choice dot.' }
        ],
        correct: ['text']
      },
      initialCode: htmlDoc('  <form>\n    <!-- Add your text input here -->\n  </form>\n'),
      validator: all([marker('EX2_M12_TYPE'), tag('input'), attr('type', 'text')])
    },
    {
      title: '13. Label + Input Team',
      kicker: 'Forms',
      intro: 'A label tells the student what the input is for.',
      watch: 'The label appears above the input in the preview.',
      play: 'Match the same word in <code>for</code> and <code>id</code>.',
      type: 'Add <code>&lt;label for="name"&gt;Name&lt;/label&gt;</code> and make the input <code>id="name"</code>.',
      remember: 'The label <code>for</code> value should match the input <code>id</code>.',
      mission: 'Connect the label and input.',
      hero: hero('Label says what to type', 'Matching words make the connection.', '#22d3ee'),
      widget: {
        type: 'sequence',
        heading: 'Build the label team in order.',
        chip: '2 steps',
        marker: 'EX2_M13_FLOW',
        steps: [
          { value: 'label', label: 'Place the label first' },
          { value: 'input', label: 'Then match the input id' }
        ],
        success: 'Nice. Labels and inputs work best together.'
      },
      initialCode: htmlDoc('  <form>\n    <input type="text">\n  </form>\n'),
      validator: all([marker('EX2_M13_FLOW'), textInsideTag('label', 'name'), attr('for', 'name'), attr('id', 'name')])
    },
    {
      title: '14. Send Button',
      kicker: 'Forms',
      intro: 'Buttons let students click to submit or continue.',
      watch: 'The bright button appears at the bottom of the form.',
      play: 'Choose the tag that makes a real button.',
      type: 'Add <code>&lt;button&gt;Send&lt;/button&gt;</code> inside the form.',
      remember: 'Buttons use the <code>&lt;button&gt;</code> tag.',
      mission: 'Add a send button.',
      hero: hero('Button time', 'Every form needs a way to click forward.', '#38bdf8'),
      widget: {
        type: 'choice',
        heading: 'Which tag makes a button?',
        chip: '1 answer',
        prompt: 'Pick the button tag, then type it in the editor.',
        marker: 'EX2_M14_BUTTON',
        success: 'Perfect. That is the button tag.',
        retry: 'Try again. Look for the tag that creates a clickable button.',
        options: [
          { value: 'button', label: '<button>', copy: 'A clickable button element.' },
          { value: 'press', label: '<press>', copy: 'This is not a real HTML tag.' },
          { value: 'click', label: '<click>', copy: 'This is not a real HTML tag either.' }
        ],
        correct: ['button']
      },
      initialCode: htmlDoc('  <form>\n    <label for="name">Name</label>\n    <input id="name" type="text">\n  </form>\n'),
      validator: all([marker('EX2_M14_BUTTON'), textInsideTag('button', 'send')])
    },
    {
      title: '15. Head and Body Jobs',
      kicker: 'Page Structure',
      intro: 'The head stores behind-the-scenes page info, and the body holds the visible page content.',
      watch: 'One card is hidden info. The other is what the student sees.',
      play: 'Tap both correct job cards.',
      type: 'No typing on this one. Just sort the jobs.',
      remember: 'Body is for visible content.',
      mission: 'Choose the correct jobs for head and body.',
      hero: hero('Hidden info vs visible page', 'A simple but important split.', '#bfdbfe'),
      widget: {
        type: 'choice',
        heading: 'Tap the 2 true statements.',
        chip: '2 correct',
        prompt: 'Find the jobs that really match head and body.',
        marker: 'EX2_M15_READY',
        multi: true,
        success: 'Great. Head holds page info and body shows page content.',
        retry: 'Close. Pick the statements about hidden info and visible content.',
        options: [
          { value: 'head', label: 'The head stores page info', copy: 'Like title and meta tags.' },
          { value: 'body', label: 'The body shows page content', copy: 'Like headings, paragraphs, and images.' },
          { value: 'bodyhidden', label: 'The body hides everything', copy: 'That is not right.' },
          { value: 'headvisible', label: 'The head shows the main page text', copy: 'That is usually the body job.' }
        ],
        correct: ['head', 'body']
      },
      initialCode: htmlDoc('  <h1>Visible content lives here.</h1>\n'),
      validator: all([marker('EX2_M15_READY')])
    },
    {
      title: '16. True or False: Doctype',
      kicker: 'Page Structure',
      intro: 'The doctype line tells the browser which kind of document it is reading.',
      watch: 'This one is an easy memory checkpoint.',
      play: 'Pick true or false.',
      type: 'No typing needed here.',
      remember: 'Most HTML pages begin with <code>&lt;!DOCTYPE html&gt;</code>.',
      mission: 'Answer the doctype checkpoint.',
      hero: hero('First line matters', 'A fast confidence booster.', '#ddd6fe'),
      widget: {
        type: 'choice',
        heading: 'True or false: Most HTML files start with <!DOCTYPE html>.',
        chip: 'true / false',
        prompt: 'Pick the best answer.',
        marker: 'EX2_M16_TRUE',
        success: 'Correct. That line usually comes first.',
        retry: 'Try again. Think first line of the page.',
        options: [
          { value: 'true', label: 'True', copy: 'That is the usual first line.' },
          { value: 'false', label: 'False', copy: 'That is not right for a normal HTML page.' }
        ],
        correct: ['true']
      },
      initialCode: htmlDoc('  <p>Doctype is usually the first line above everything else.</p>\n'),
      validator: all([marker('EX2_M16_TRUE')])
    },
    {
      title: '17. Semantic Page Shell',
      kicker: 'Semantic HTML',
      intro: 'Semantic tags give the big areas of a page clear jobs.',
      watch: 'Top, middle, and bottom each get their own named section.',
      play: 'Tap the order first, then type the tags.',
      type: 'Add <code>&lt;header&gt;</code>, <code>&lt;main&gt;</code>, and <code>&lt;footer&gt;</code> in that order.',
      remember: 'Header = top, main = middle, footer = bottom.',
      mission: 'Build the semantic shell.',
      hero: hero('Top • Middle • Bottom', 'Easy page map review.', '#93c5fd'),
      widget: {
        type: 'sequence',
        heading: 'Tap the page parts in order.',
        chip: '3 steps',
        marker: 'EX2_M17_FLOW',
        steps: [
          { value: 'header', label: 'Header first' },
          { value: 'main', label: 'Main second' },
          { value: 'footer', label: 'Footer third' }
        ],
        success: 'Perfect. That is a clean page shell.'
      },
      initialCode: htmlDoc('  <!-- Build the page shell here -->\n'),
      validator: all([marker('EX2_M17_FLOW'), pairedTag('header'), pairedTag('main'), pairedTag('footer')])
    },
    {
      title: '18. Menu and Story',
      kicker: 'Semantic HTML',
      intro: 'A nav tag can hold the menu, and an article tag can hold one full story.',
      watch: 'The preview shows a menu block and a story block.',
      play: 'Pick the two semantic tags you need, then type them.',
      type: 'Put <code>&lt;nav&gt;</code> inside the header and <code>&lt;article&gt;</code> inside the main area.',
      remember: 'Nav is for navigation. Article is for one full piece of content.',
      mission: 'Add nav and article.',
      hero: hero('Menu + story', 'Two easy semantic wins.', '#86efac'),
      widget: {
        type: 'choice',
        heading: 'Which 2 tags fit this page best?',
        chip: '2 correct',
        prompt: 'Pick the menu tag and the story tag.',
        marker: 'EX2_M18_READY',
        multi: true,
        success: 'Yes. Nav fits the menu and article fits the story.',
        retry: 'Try again. One tag is for the menu and one is for the main story card.',
        options: [
          { value: 'nav', label: '<nav>', copy: 'A menu area with links.' },
          { value: 'article', label: '<article>', copy: 'One full story or post.' },
          { value: 'blink', label: '<blink>', copy: 'Not a real modern semantic tag.' },
          { value: 'bigbox', label: '<bigbox>', copy: 'Also not a real HTML tag.' }
        ],
        correct: ['nav', 'article']
      },
      initialCode: htmlDoc('  <header>\n  </header>\n  <main>\n  </main>\n'),
      validator: all([marker('EX2_M18_READY'), pairedTag('nav'), pairedTag('article')])
    },
    {
      title: '19. Final HTML Build',
      kicker: 'Victory Build',
      intro: 'Final easy build: show that you can put the most important HTML pieces together.',
      watch: 'This is not a trick. It is a guided wrap-up.',
      play: 'Use the checklist, then type the missing pieces.',
      type: 'Make sure your page includes an <code>&lt;h1&gt;</code>, a <code>&lt;p&gt;</code>, an <code>&lt;img&gt;</code>, a <code>&lt;form&gt;</code>, and a <code>&lt;button&gt;</code>.',
      remember: 'If you can build a tiny page, you understand a lot already.',
      mission: 'Build the tiny HTML page.',
      hero: hero('Tiny page = big win', 'Finish strong and earn full marks.', '#67e8f9'),
      widget: {
        type: 'toggle',
        heading: 'Tap through the final checklist.',
        chip: '5 parts',
        tabs: [
          { label: 'Title', content: previewCard('Need 1', '<p style="margin:0;">A big heading at the top.</p>', '#dbeafe') },
          { label: 'Text', content: previewCard('Need 2', '<p style="margin:0;">A paragraph under the heading.</p>', '#fef3c7') },
          { label: 'Image', content: previewCard('Need 3', '<img src="assets/exam-html-cat.svg" alt="Cat" style="margin:0 auto;">', '#dcfce7') },
          { label: 'Form', content: previewCard('Need 4', '<form style="margin:0;"><label>Name</label><input type="text"></form>', '#e0f2fe') },
          { label: 'Button', content: previewCard('Need 5', '<button type="button">Send</button>', '#fee2e2') }
        ],
        status: 'Tap every checklist card, then finish the page in the editor.'
      },
      initialCode: htmlDoc('  <h1>HTML Victory</h1>\n  <p>I can build with HTML.</p>\n  <!-- Add the image, form, and button below -->\n'),
      validator: all([tag('h1'), tag('p'), tag('img'), tag('form'), tag('button')])
    }
  ];

  writeInteractiveLesson({
    lessonId: 'exam2',
    outDir: 'lessons/exam2',
    title: 'Exam 2: HTML Victory Mission',
    description: 'A 40-minute, ultra-friendly HTML final that teaches while students play through easy wins.',
    gameTitle: '',
    gamePath: '',
    theme: {
      accent: '#67e8f9',
      accentSoft: '#38bdf8',
      panel: 'rgba(8,47,73,0.82)',
      panelAlt: 'rgba(15,23,42,0.96)',
      success: '#4ade80',
      ink: '#082f49',
      toggleColumns: 5
    },
    previewScaffold,
    modules
  });

  const outDir = path.resolve('lessons/exam2');
  const finalModule = `window.Lessons.exam2.modules[19] = {
    title: "20. Finish and Reflect",
    body: "<section class=\\"quest-body\\"><p class=\\"quest-kicker\\">Final Mission</p><h3 class=\\"quest-title\\">You made it to the end.</h3><p class=\\"quest-summary\\">Pick the emoji that matches how this HTML final felt. Finishing every mission gives full marks.</p><div class=\\"quest-memory\\"><strong>Remember:</strong> This exam is designed to teach while students finish it, so completing all missions means a perfect score.</div><p class=\\"quest-mission\\">Mission: Tap one emoji to finish the exam.</p></section>",
    svg: \`\`,
    widgetCode: \`<!-- INTERACTIVE MODULE -->
<style>
.exam2-emoji-wrap{display:grid;gap:14px;padding:18px;border-radius:24px;background:linear-gradient(180deg,rgba(15,23,42,.96),rgba(11,18,32,.94));border:1px solid rgba(148,163,184,.14);box-shadow:0 16px 40px rgba(2,6,23,.24)}
.exam2-emoji-grid{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:10px}
.exam2-emoji-btn{border:none;border-radius:18px;padding:14px;background:rgba(15,23,42,.74);color:white;font-size:32px;cursor:pointer;transition:transform .15s ease, background .15s ease, box-shadow .15s ease}
.exam2-emoji-btn:hover{transform:translateY(-2px) scale(1.03);background:rgba(8,47,73,.82);box-shadow:0 0 18px rgba(103,232,249,.16)}
.exam2-emoji-status{margin:0;padding:10px 12px;border-radius:14px;background:rgba(15,23,42,.66);border:1px solid rgba(148,163,184,.12);color:#bae6fd;font-size:13px;line-height:1.5;text-align:center}
@media(max-width:720px){.exam2-emoji-grid{grid-template-columns:repeat(3,minmax(0,1fr))}}
</style>
<div class="exam2-emoji-wrap">
  <div class="exam2-emoji-grid">
    <button type="button" class="exam2-emoji-btn" data-emoji="🤩">🤩</button>
    <button type="button" class="exam2-emoji-btn" data-emoji="😎">😎</button>
    <button type="button" class="exam2-emoji-btn" data-emoji="🧠">🧠</button>
    <button type="button" class="exam2-emoji-btn" data-emoji="🚀">🚀</button>
    <button type="button" class="exam2-emoji-btn" data-emoji="🔥">🔥</button>
  </div>
  <p class="exam2-emoji-status">Pick one emoji to finish your HTML victory mission.</p>
</div>
<script>
(function() {
  const editor = document.getElementById('code-editor');
  const buttons = Array.from(document.querySelectorAll('.exam2-emoji-btn'));
  const status = document.querySelector('.exam2-emoji-status');
  if (editor) {
    editor.readOnly = true;
    editor.style.opacity = '0.7';
  }
  buttons.forEach(function(button) {
    button.addEventListener('click', function() {
      const emoji = button.dataset.emoji;
      window.lessonEmoji = emoji;
      buttons.forEach(function(other) { other.style.background = 'rgba(15,23,42,.74)'; });
      button.style.background = 'rgba(20,83,45,.6)';
      if (status) status.textContent = 'Perfect. Full marks unlocked.';
      if (editor) {
        editor.value = '<!-- EXAM2_FULL_MARKS -->\\n<!-- EMOJI_SELECTED -->';
        editor.dispatchEvent(new Event('input', { bubbles: true }));
      }
    });
  });
})();
</script>\`,
    initialCode: \`<!-- Pick an emoji to finish your HTML final -->\`,
    previewScaffold: \`${previewScaffold.replace(/\n/g, '\\n')}\`,
    progress: 100,
    validator: function(code) { return /EXAM2_FULL_MARKS/i.test(code) && /EMOJI_SELECTED/i.test(code); }
  };`;

  fs.writeFileSync(path.join(outDir, 'module20.js'), finalModule);
  return modules;
};
