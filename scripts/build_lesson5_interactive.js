const { writeInteractiveLesson, escHtml } = require('./interactive_lesson_factory');

function escapeRegex(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

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

function tagWithAttr(tagName, attrName, attrValue) {
  const pattern = `<\\s*${tagName}\\b[^>]*\\b${attrName}\\s*=\\s*(?:['"]${escapeRegex(attrValue)}['"]|${escapeRegex(attrValue)})`;
  return `new RegExp(${JSON.stringify(pattern)}, 'i').test(code)`;
}

function textInTag(tagName, text) {
  const pattern = `<\\s*${tagName}\\b[^>]*>\\s*${escapeRegex(text)}\\s*<\\s*\\/\\s*${tagName}\\s*>`;
  return `new RegExp(${JSON.stringify(pattern)}, 'i').test(code)`;
}

function all(parts) {
  return `function(code) { return ${parts.join(' && ')}; }`;
}

function previewCard(inner) {
  return `<div style="width:100%;max-width:250px;padding:14px;border-radius:20px;background:linear-gradient(180deg,#f8fbff,#e0f2fe);box-shadow:inset 0 0 0 1px rgba(96,165,250,0.18);">${inner}</div>`;
}

function formField(label, control) {
  return `<div style="display:grid;gap:6px;margin-bottom:10px;"><div style="font:700 12px/1.2 sans-serif;color:#0f172a;letter-spacing:0.04em;">${label}</div>${control}</div>`;
}

function inputBox(text) {
  return `<div style="padding:10px 12px;border-radius:12px;background:white;border:1px solid #93c5fd;color:#475569;font:600 13px/1.2 sans-serif;">${text}</div>`;
}

function buttonBox(text) {
  return `<div style="padding:11px 14px;border-radius:12px;background:linear-gradient(90deg,#38bdf8,#2563eb);color:white;font:800 13px/1.2 sans-serif;text-align:center;">${text}</div>`;
}

function formHero(label, accent) {
  const safeLabel = label.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  return `<svg class="quest-svg-stage" viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <linearGradient id="form-glow-${safeLabel}" x1="0%" x2="100%" y1="0%" y2="100%">
        <stop offset="0%" stop-color="#0ea5e9"/>
        <stop offset="100%" stop-color="#38bdf8"/>
      </linearGradient>
    </defs>
    <rect x="8" y="8" width="304" height="124" rx="22" fill="#0f172a" stroke="rgba(148,163,184,0.22)"/>
    <rect x="26" y="26" width="268" height="88" rx="18" fill="#111827" stroke="rgba(34,211,238,0.16)"/>
    <rect x="44" y="44" width="100" height="12" rx="6" fill="url(#form-glow-${safeLabel})" opacity="0.95"/>
    <rect x="44" y="68" width="232" height="16" rx="8" fill="#e0f2fe" opacity="0.92"/>
    <rect x="44" y="92" width="${accent}" height="14" rx="7" fill="url(#form-glow-${safeLabel})"/>
    <text x="242" y="48" fill="#bae6fd" font-size="12" font-family="Arial, sans-serif" text-anchor="end">${escHtml(label)}</text>
  </svg>`;
}

const previewScaffold = `<style>
body { margin:0; padding:14px; background:linear-gradient(180deg,#eff6ff,#f8fafc); font-family:Arial, sans-serif; color:#0f172a; }
form { display:grid; gap:12px; max-width:340px; padding:16px; border-radius:18px; background:white; border:1px solid #bfdbfe; box-shadow:0 12px 26px rgba(148,163,184,0.16); }
label { display:block; font-weight:700; margin-bottom:6px; color:#0f172a; }
input, textarea, select, button { width:100%; box-sizing:border-box; font:600 14px/1.3 Arial, sans-serif; padding:10px 12px; border-radius:12px; border:1px solid #93c5fd; }
textarea { min-height:120px; resize:vertical; }
button { border:none; color:white; background:linear-gradient(90deg,#0ea5e9,#2563eb); font-weight:800; cursor:pointer; }
div { box-sizing:border-box; }
</style>`;

module.exports = function buildLesson5Interactive() {
  const modules = [
    {
      title: '1. Form Mission Control',
      intro: 'Forms are the parts of a website that collect information from people.',
      watch: 'Watch the form kit light up on the left.',
      play: 'Tap every card that belongs in a form.',
      type: 'No typing yet. Solve the mini game to unlock the mission.',
      remember: 'A form is a team of controls that collects answers.',
      mission: 'Tap the 3 cards that belong in a form.',
      hero: formHero('Form kit', 176),
      widget: {
        type: 'choice',
        heading: 'Find the form tools.',
        chip: '3 correct',
        prompt: 'Which cards belong in a form?',
        multi: true,
        marker: 'FORM_TOOLKIT_READY',
        success: 'Form kit complete. Move to the next mission.',
        options: [
          { value: 'input', label: 'Text box', copy: 'Lets a person type an answer.' },
          { value: 'checkbox', label: 'Checkbox', copy: 'Lets a person turn a choice on.' },
          { value: 'button', label: 'Submit button', copy: 'Sends the form when clicked.' },
          { value: 'video', label: 'Movie player', copy: 'Shows media, not a form answer.' },
          { value: 'poster', label: 'Poster image', copy: 'Decorates the page.' },
          { value: 'headline', label: 'Big heading', copy: 'Introduces the page.' }
        ],
        correct: ['input', 'checkbox', 'button']
      },
      initialCode: '<!-- Find the form tools -->',
      validator: all([marker('FORM_TOOLKIT_READY')])
    },
    {
      title: '2. The Form Tag',
      intro: 'The <code>&lt;form&gt;</code> tag is the box that holds the whole data-collecting mission.',
      watch: 'Replay the demo and notice the form opens and closes around everything.',
      play: 'Say the rule out loud: form tags come in a pair.',
      type: 'Type <code>&lt;form&gt;&lt;/form&gt;</code> in the editor.',
      remember: 'Opening tag first. Closing tag second.',
      mission: 'Create opening and closing <code>&lt;form&gt;</code> tags.',
      hero: formHero('Open the form', 132),
      widget: {
        type: 'demo',
        heading: 'One form box holds the controls.',
        chip: 'tag pair',
        browserTitle: 'login-lab.html',
        code: '<form>\n</form>',
        preview: previewCard('<div style="padding:22px;border-radius:16px;border:2px dashed #7dd3fc;color:#0f172a;font:800 13px/1.4 sans-serif;text-align:center;">Everything inside here belongs to one form.</div>'),
        captions: ['Step 1: open the form.', 'Step 2: close the form.', 'Now type the same tag pair in the editor.']
      },
      initialCode: '',
      validator: all([pairedTag('form')])
    },
    {
      title: '3. Your First Input',
      intro: 'An <code>&lt;input&gt;</code> tag makes a box where a person can type.',
      watch: 'See how the input appears inside the form.',
      play: 'Point at the spot where the user will type.',
      type: 'Add one <code>&lt;input&gt;</code> inside the form.',
      remember: 'Input is a single tag. It does not need a closing tag.',
      mission: 'Add an <code>&lt;input&gt;</code> inside the form.',
      hero: formHero('Add an input', 208),
      widget: {
        type: 'demo',
        heading: 'Inputs are where answers go.',
        chip: 'single tag',
        browserTitle: 'name-form.html',
        code: '<form>\n  <input>\n</form>',
        preview: previewCard(formField('Name', inputBox('Type here...'))),
        captions: ['The form opens first.', 'The input creates a typing box.', 'Your job is to add that input tag.']
      },
      initialCode: '<form>\n</form>',
      validator: all([pairedTag('form'), tag('input')])
    },
    {
      title: '4. Text Inputs',
      intro: 'The most common input is a text box. We tell the browser with <code>type="text"</code>.',
      watch: 'Notice the input becomes a normal typing box.',
      play: 'Compare the code to the preview.',
      type: 'Add <code>type="text"</code> to the input.',
      remember: 'Type tells the browser what kind of control to build.',
      mission: 'Add <code>type="text"</code> to your input.',
      hero: formHero('Text box', 214),
      widget: {
        type: 'demo',
        heading: 'type="text" means a normal typing box.',
        chip: 'attribute',
        browserTitle: 'name-form.html',
        code: '<input type="text">',
        preview: previewCard(formField('Username', inputBox('player_one'))),
        captions: ['Start with an input.', 'Add type="text".', 'Now the browser knows to make a text box.']
      },
      initialCode: '<form>\n  <input>\n</form>',
      validator: all([tagWithAttr('input', 'type', 'text')])
    },
    {
      title: '5. Password Inputs',
      intro: 'Passwords should hide the letters so other people cannot read them easily.',
      watch: 'See how the password box hides the letters with dots.',
      play: 'Compare the text box and the secret box.',
      type: 'Change the input to <code>type="password"</code>.',
      remember: 'Password inputs hide the characters as you type.',
      mission: 'Change the input to a password input.',
      hero: formHero('Secret mode', 194),
      widget: {
        type: 'toggle',
        heading: 'Text input vs password input',
        chip: 'compare',
        tabs: [
          { label: 'Text', content: previewCard(formField('Password', inputBox('dragon123'))) },
          { label: 'Password', content: previewCard(formField('Password', inputBox('........'))) }
        ],
        status: 'Tap each tab, then type the password version in the editor.'
      },
      initialCode: '<form>\n  <input type="text">\n</form>',
      validator: all([tagWithAttr('input', 'type', 'password')])
    },
    {
      title: '6. Checkbox Mission',
      intro: 'Checkboxes are for choices where you can pick more than one thing.',
      watch: 'Look for the choices that can all be true at the same time.',
      play: 'Tap every card that could use a checkbox.',
      type: 'Then type <code>&lt;input type="checkbox"&gt;</code> in the editor.',
      remember: 'Checkbox = many answers can be on.',
      mission: 'Solve the mini game, then add a checkbox input.',
      hero: formHero('Many choices', 188),
      widget: {
        type: 'choice',
        heading: 'Find the checkbox jobs.',
        chip: '3 correct',
        prompt: 'Which choices could all be selected at once?',
        multi: true,
        marker: 'CHECKBOX_READY',
        success: 'Perfect. Those are checkbox style choices.',
        options: [
          { value: 'pizza', label: 'Pizza toppings', copy: 'You can choose cheese, olives, and peppers together.' },
          { value: 'club', label: 'School clubs', copy: 'You might join coding and art.' },
          { value: 'pets', label: 'Favorite pet', copy: 'Usually one answer in a poll.' },
          { value: 'skills', label: 'Skills you have', copy: 'You can have several skills.' },
          { value: 'winner', label: 'Race winner', copy: 'There is only one winner.' }
        ],
        correct: ['pizza', 'club', 'skills']
      },
      initialCode: '<form>\n  <input type="text">\n</form>',
      validator: all([marker('CHECKBOX_READY'), tagWithAttr('input', 'type', 'checkbox')])
    },
    {
      title: '7. Radio Buttons',
      intro: 'Radio buttons are for one choice from a group, like choosing one team color.',
      watch: 'Only one radio choice should win.',
      play: 'Tap the best example of a radio-button question.',
      type: 'Change the input to <code>type="radio"</code>.',
      remember: 'Radio = pick one answer.',
      mission: 'Solve the mini game, then add a radio input.',
      hero: formHero('Pick one', 152),
      widget: {
        type: 'choice',
        heading: 'Which question should use radio buttons?',
        chip: 'pick one',
        prompt: 'Tap the question where a person should choose only one answer.',
        marker: 'RADIO_READY',
        success: 'Exactly. Radio buttons are for one answer.',
        options: [
          { value: 'jersey', label: 'Choose your jersey size', copy: 'A person should pick one size.' },
          { value: 'snacks', label: 'Pick your snacks', copy: 'A person could want many snacks.' },
          { value: 'skills', label: 'Mark your skills', copy: 'A person can have many skills.' }
        ],
        correct: ['jersey']
      },
      initialCode: '<form>\n  <input type="checkbox">\n</form>',
      validator: all([marker('RADIO_READY'), tagWithAttr('input', 'type', 'radio')])
    },
    {
      title: '8. Placeholder Hints',
      intro: 'A placeholder shows a helpful hint inside an empty input box.',
      watch: 'See the hint text appear inside the box.',
      play: 'Read the hint before you type.',
      type: 'Add <code>placeholder="Enter your name"</code> to the text input.',
      remember: 'Placeholder is a hint, not the real answer.',
      mission: 'Add a helpful placeholder to the input.',
      hero: formHero('Add a hint', 230),
      widget: {
        type: 'toggle',
        heading: 'Empty box vs hinted box',
        chip: 'hint text',
        tabs: [
          { label: 'Empty', content: previewCard(formField('Name', inputBox('&nbsp;'))) },
          { label: 'Hint', content: previewCard(formField('Name', inputBox('Enter your name'))) }
        ],
        status: 'The hint helps the user know what to type.'
      },
      initialCode: '<form>\n  <input type="text">\n</form>',
      validator: all([tagWithAttr('input', 'placeholder', 'Enter your name')])
    },
    {
      title: '9. Labels Help Humans',
      intro: 'A label tells people exactly what each form box is for.',
      watch: 'See how the word Username becomes its own label.',
      play: 'Tap the steps in the right order: label first, input second.',
      type: 'Wrap the text <code>Username:</code> in a <code>&lt;label&gt;</code> tag.',
      remember: 'Labels are clearer and better for accessibility.',
      mission: 'Add a label around Username.',
      hero: formHero('Label the field', 140),
      widget: {
        type: 'sequence',
        heading: 'Build the field in order.',
        chip: '2 steps',
        marker: 'LABEL_READY',
        steps: [
          { value: 'label', label: 'Place the label' },
          { value: 'input', label: 'Place the input' }
        ],
        success: 'Yes. Labels come before the field here.'
      },
      initialCode: '<form>\n  Username: <input type="text">\n</form>',
      validator: all([marker('LABEL_READY'), pairedTag('label')])
    },
    {
      title: '10. Link Label + Input',
      intro: 'A label can point to the exact input by using <code>for</code> on the label and <code>id</code> on the input.',
      watch: 'Both names must match exactly.',
      play: 'Check that the matching words are the same on both parts.',
      type: 'Add <code>for="user"</code> and <code>id="user"</code>.',
      remember: 'The matching words must be identical.',
      mission: 'Link the label to the input with matching names.',
      hero: formHero('Match the names', 168),
      widget: {
        type: 'demo',
        heading: 'Matching names create a link.',
        chip: 'for + id',
        browserTitle: 'login-form.html',
        code: '<label for="user">Username</label>\n<input id="user" type="text">',
        preview: previewCard(formField('Username', inputBox('player_one'))),
        captions: ['The label uses for="user".', 'The input uses id="user".', 'Matching names connect the two parts.']
      },
      initialCode: '<form>\n  <label>Username:</label>\n  <input type="text">\n</form>',
      validator: all([tagWithAttr('label', 'for', 'user'), tagWithAttr('input', 'id', 'user')])
    },
    {
      title: '11. Add a Button',
      intro: 'Buttons let the person send the form or perform an action.',
      watch: 'The button stands out so the user knows what to press.',
      play: 'Notice the button comes after the input.',
      type: 'Add <code>&lt;button&gt;Submit&lt;/button&gt;</code> after the input.',
      remember: 'Buttons need opening and closing tags.',
      mission: 'Add a submit button.',
      hero: formHero('Add the button', 226),
      widget: {
        type: 'demo',
        heading: 'Buttons finish the form job.',
        chip: 'button',
        browserTitle: 'submit-form.html',
        code: '<button>Submit</button>',
        preview: previewCard(formField('Username', inputBox('player_one')) + buttonBox('Submit')),
        captions: ['The button comes after the field.', 'The text sits between the button tags.', 'Now build the same button in the editor.']
      },
      initialCode: '<form>\n  <input type="text">\n</form>',
      validator: all([textInTag('button', 'Submit')])
    },
    {
      title: '12. Submit Button Type',
      intro: 'Inside a form, the main button should use <code>type="submit"</code> so the browser knows its job.',
      watch: 'This type tells the browser to send the form.',
      play: 'Tap the button job that matches sending a form.',
      type: 'Add <code>type="submit"</code> to the button.',
      remember: 'Submit means send the form data.',
      mission: 'Make the button a submit button.',
      hero: formHero('Send the form', 192),
      widget: {
        type: 'choice',
        heading: 'Pick the button type that sends the form.',
        chip: 'one answer',
        prompt: 'Which button type should you use here?',
        marker: 'SUBMIT_READY',
        success: 'Correct. submit sends the form.',
        options: [
          { value: 'submit', label: 'submit', copy: 'Sends the form data.' },
          { value: 'button', label: 'button', copy: 'A general button with no form job yet.' },
          { value: 'reset', label: 'reset', copy: 'Clears the form fields.' }
        ],
        correct: ['submit']
      },
      initialCode: '<form>\n  <input type="text">\n  <button>Submit</button>\n</form>',
      validator: all([marker('SUBMIT_READY'), tagWithAttr('button', 'type', 'submit')])
    },
    {
      title: '13. Textarea for Big Messages',
      intro: 'When people need to type a longer message, use <code>&lt;textarea&gt;</code>.',
      watch: 'The message box is taller than a single input.',
      play: 'Compare the small field and the bigger message box.',
      type: 'Add <code>&lt;textarea&gt;&lt;/textarea&gt;</code> inside the form.',
      remember: 'Textarea uses an opening tag and a closing tag.',
      mission: 'Replace the input with a textarea.',
      hero: formHero('Big message box', 176),
      widget: {
        type: 'demo',
        heading: 'Textarea gives the user room to write.',
        chip: 'message box',
        browserTitle: 'contact-form.html',
        code: '<textarea></textarea>',
        preview: previewCard(formField('Message', '<div style="min-height:84px;padding:12px;border-radius:12px;background:white;border:1px solid #93c5fd;color:#64748b;font:600 13px/1.4 sans-serif;">Write your message here...</div>')),
        captions: ['Start the textarea.', 'Close the textarea.', 'Now type the tag pair in the editor.']
      },
      initialCode: '<form>\n</form>',
      validator: all([pairedTag('textarea')])
    },
    {
      title: '14. Textarea Rows',
      intro: 'The <code>rows</code> attribute changes how tall the textarea starts.',
      watch: 'More rows means a taller message box.',
      play: 'Compare the short box and the taller box.',
      type: 'Add <code>rows="5"</code> to the textarea.',
      remember: 'Rows controls starting height.',
      mission: 'Make the textarea start with 5 rows.',
      hero: formHero('More room', 206),
      widget: {
        type: 'toggle',
        heading: 'Short textarea vs tall textarea',
        chip: 'rows',
        tabs: [
          { label: '2 rows', content: previewCard(formField('Message', '<div style="min-height:48px;padding:12px;border-radius:12px;background:white;border:1px solid #93c5fd;color:#64748b;font:600 13px/1.4 sans-serif;">Short box</div>')) },
          { label: '5 rows', content: previewCard(formField('Message', '<div style="min-height:108px;padding:12px;border-radius:12px;background:white;border:1px solid #93c5fd;color:#64748b;font:600 13px/1.4 sans-serif;">More writing room</div>')) }
        ],
        status: 'The rows attribute controls the starting height.'
      },
      initialCode: '<form>\n  <textarea></textarea>\n</form>',
      validator: all([tagWithAttr('textarea', 'rows', '5')])
    },
    {
      title: '15. Dropdown Menus',
      intro: 'A <code>&lt;select&gt;</code> tag creates a dropdown menu, and each choice lives in an <code>&lt;option&gt;</code> tag.',
      watch: 'The select holds the option choices.',
      play: 'See the closed menu and imagine the choices inside it.',
      type: 'Add a <code>&lt;select&gt;</code> with one <code>&lt;option&gt;</code>.',
      remember: 'Select on the outside. Option on the inside.',
      mission: 'Create a dropdown menu with one option.',
      hero: formHero('Dropdown', 190),
      widget: {
        type: 'demo',
        heading: 'A dropdown stores its choices inside option tags.',
        chip: 'select',
        browserTitle: 'menu-form.html',
        code: '<select>\n  <option>Cool</option>\n</select>',
        preview: previewCard(formField('Favorite snack', '<div style="padding:10px 12px;border-radius:12px;background:white;border:1px solid #93c5fd;color:#0f172a;font:700 13px/1.2 sans-serif;display:flex;justify-content:space-between;"><span>Cool</span><span>v</span></div>')),
        captions: ['Open the select tag.', 'Place option tags inside it.', 'Now build your own dropdown in the editor.']
      },
      initialCode: '<form>\n</form>',
      validator: all([pairedTag('select'), countTag('option', 1)])
    },
    {
      title: '16. More Options',
      intro: 'A dropdown becomes useful when it offers a few choices.',
      watch: 'Each option becomes one line in the menu.',
      play: 'Imagine a lunch menu with several choices.',
      type: 'Add at least 3 <code>&lt;option&gt;</code> tags.',
      remember: 'Each option is its own tag.',
      mission: 'Create 3 options inside the select.',
      hero: formHero('More choices', 226),
      widget: {
        type: 'choice',
        heading: 'Pack the dropdown with menu choices.',
        chip: '3 cards',
        prompt: 'Tap the 3 foods you want to add to the lunch menu preview.',
        multi: true,
        marker: 'OPTION_READY',
        success: 'Great. Multiple choices make the dropdown useful.',
        options: [
          { value: 'pizza', label: 'Pizza', copy: 'One menu choice.' },
          { value: 'salad', label: 'Salad', copy: 'Another menu choice.' },
          { value: 'pasta', label: 'Pasta', copy: 'Another menu choice.' },
          { value: 'title', label: 'Main Title', copy: 'This is page text, not a dropdown option.' }
        ],
        correct: ['pizza', 'salad', 'pasta']
      },
      initialCode: '<form>\n  <select>\n    <option>Pizza</option>\n  </select>\n</form>',
      validator: all([marker('OPTION_READY'), countTag('option', 3)])
    },
    {
      title: '17. Action = Where It Goes',
      intro: 'The <code>action</code> attribute tells the form where to send the data.',
      watch: 'Think of action like the delivery address for the form.',
      play: 'Read the path carefully before you type it.',
      type: 'Add <code>action="/login"</code> to the form tag.',
      remember: 'Action is the destination.',
      mission: 'Tell the form where to send the data.',
      hero: formHero('Delivery path', 152),
      widget: {
        type: 'demo',
        heading: 'action points to the destination.',
        chip: 'destination',
        browserTitle: 'form-route.html',
        code: '<form action="/login">',
        preview: previewCard('<div style="display:grid;gap:10px;color:#0f172a;font:700 13px/1.4 sans-serif;"><div style="padding:12px;border-radius:14px;background:white;border:1px solid #bfdbfe;">Form packet ready</div><div style="padding:12px;border-radius:14px;background:#dbeafe;border:1px dashed #60a5fa;">Destination: /login</div></div>'),
        captions: ['The form packet gets ready.', 'The action points to /login.', 'Now type that same destination in the form tag.']
      },
      initialCode: '<form>\n  <input type="text">\n  <button>Go</button>\n</form>',
      validator: all([tagWithAttr('form', 'action', '/login')])
    },
    {
      title: '18. Method = How It Travels',
      intro: 'The <code>method</code> tells the browser how to send the data. For passwords, we usually use POST.',
      watch: 'GET puts data in the URL. POST sends it more safely for login forms.',
      play: 'Choose the better method for a password form.',
      type: 'Add <code>method="POST"</code> to the form.',
      remember: 'For login forms, POST is the better choice.',
      mission: 'Make the form use POST.',
      hero: formHero('Send with POST', 182),
      widget: {
        type: 'choice',
        heading: 'Which method fits a password form?',
        chip: 'one answer',
        prompt: 'Tap the better method for a login form.',
        marker: 'METHOD_READY',
        success: 'Correct. POST is the right choice here.',
        options: [
          { value: 'post', label: 'POST', copy: 'Used for login and form data.' },
          { value: 'get', label: 'GET', copy: 'Often shows data in the URL.' }
        ],
        correct: ['post']
      },
      initialCode: '<form action="/login">\n</form>',
      validator: all([marker('METHOD_READY'), tagWithAttr('form', 'method', 'POST')])
    },
    {
      title: '19. Wrap Fields in Divs',
      intro: 'A <code>&lt;div&gt;</code> can wrap one label and one input so the form layout stays neat.',
      watch: 'Each field group gets its own container.',
      play: 'Think of each div like one row in the form.',
      type: 'Wrap the label and input in a <code>&lt;div&gt;</code>.',
      remember: 'Div is a layout helper box.',
      mission: 'Put the label and input inside one div.',
      hero: formHero('Neat rows', 214),
      widget: {
        type: 'demo',
        heading: 'Divs group related form pieces.',
        chip: 'layout helper',
        browserTitle: 'tidy-form.html',
        code: '<div>\n  <label>Name:</label>\n  <input type="text">\n</div>',
        preview: previewCard('<div style="padding:12px;border-radius:14px;background:white;border:1px solid #bfdbfe;">' + formField('Name', inputBox('player_one')) + '</div>'),
        captions: ['The div opens around the group.', 'The label and input live inside it.', 'Now wrap your field in a div.']
      },
      initialCode: '<form>\n  <label>Name:</label>\n  <input type="text">\n</form>',
      validator: all([pairedTag('div')])
    },
    {
      title: '20. Contact Form Final Build',
      intro: 'Final mission: build a simple contact form that looks ready for a real website.',
      watch: 'Study the full example, then build your own version.',
      play: 'Use the checklist in your head: form, name field, message box, button.',
      type: 'Create a form with a label, an input, a textarea, and a button.',
      remember: 'Strong forms are clear, organized, and easy to use.',
      mission: 'Build the full contact form challenge.',
      hero: formHero('Final build', 244),
      widget: {
        type: 'demo',
        heading: 'A strong form has clear fields and a send button.',
        chip: 'boss mission',
        browserTitle: 'contact-form.html',
        code: '<form>\n  <label>Name</label>\n  <input type="text">\n  <label>Message</label>\n  <textarea rows="5"></textarea>\n  <button type="submit">Send</button>\n</form>',
        preview: previewCard(formField('Name', inputBox('Amina')) + formField('Message', '<div style="min-height:84px;padding:12px;border-radius:12px;background:white;border:1px solid #93c5fd;color:#64748b;font:600 13px/1.4 sans-serif;">Hello! I made a form.</div>') + buttonBox('Send')),
        captions: ['Start with the form.', 'Add the fields the person needs.', 'Finish with a clear button.']
      },
      initialCode: '<h2>Contact Me</h2>\n',
      validator: all([tag('form'), tag('label'), tag('input'), tag('textarea'), tag('button')])
    }
  ];

  writeInteractiveLesson({
    lessonId: 'lesson5',
    outDir: 'lessons/lesson5',
    title: 'Lesson 5: Forms & Inputs',
    description: 'Build fun web forms with text boxes, choices, message areas, and buttons.',
    gameTitle: 'Form Frenzy',
    gamePath: 'minigames/game5.html',
    theme: {
      accent: '#67e8f9',
      accentSoft: '#38bdf8',
      panel: 'rgba(8,47,73,0.82)',
      panelAlt: 'rgba(15,23,42,0.96)',
      success: '#4ade80',
      ink: '#082f49',
      toggleColumns: 2
    },
    previewScaffold,
    modules
  });

  return modules;
};
