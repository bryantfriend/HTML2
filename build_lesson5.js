const fs = require('fs');
const path = require('path');

const outDir = 'lessons/lesson5';
if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
}

fs.writeFileSync(path.join(outDir, 'metadata.js'), `window.Lessons = window.Lessons || {};
window.Lessons.lesson5 = {
    id: "lesson5",
    title: "Lesson 5: Forms & Inputs",
    description: "Learn how to collect data from users with text boxes, checkboxes, and buttons!",
    gameTitle: "Form Frenzy",
    gamePath: "minigames/game5.html",
    modules: []
};`);

const modules = [
    {
        title: "1. Collecting Info",
        body: "Websites let you type things in, like your username or a search query. These are called **Forms**.",
        mission: "Type READY to begin.",
        initialCode: "<!-- Ready? -->",
        validator: `function(code) { return code.toUpperCase().includes("READY"); }`
    },
    {
        title: "2. The <form> Tag",
        body: "Everything related to collecting information goes inside a `<form>` tag.",
        mission: "Create opening and closing `<form>` tags.",
        initialCode: "",
        validator: `function(code) { return code.includes("<form>") && code.includes("</form>"); }`
    },
    {
        title: "3. Text Inputs",
        body: "Inside the form, we can put boxes. The simplest is `<input>`. Notice it doesn't need a closing tag!",
        mission: "Add an `<input>` tag inside the form.",
        initialCode: "<form>\n</form>",
        validator: `function(code) { return code.includes("<input>"); }`
    },
    {
        title: "4. Input Types",
        body: "There are lots of inputs! A text box is created with `type=\"text\"`.",
        mission: "Add `type=\"text\"` to your input.",
        initialCode: "<form>\n  <input>\n</form>",
        validator: `function(code) { return code.includes('type="text"'); }`
    },
    {
        title: "5. Passwords",
        body: "If you are typing a secret, you don't want people to see it! Use `type=\"password\"`.",
        mission: "Change the text input to a password input.",
        initialCode: "<form>\n  <input type=\"text\">\n</form>",
        validator: `function(code) { return code.includes('type="password"'); }`
    },
    {
        title: "6. Checkboxes",
        body: "Sometimes you just want to check a box. Try `type=\"checkbox\"`.",
        mission: "Change it to a checkbox.",
        initialCode: "<form>\n  <input type=\"text\">\n</form>",
        validator: `function(code) { return code.includes('type="checkbox"'); }`
    },
    {
        title: "7. Radio Buttons",
        body: "Radio buttons are round choices. Use `type=\"radio\"`.",
        mission: "Change it to a radio button.",
        initialCode: "<form>\n  <input type=\"checkbox\">\n</form>",
        validator: `function(code) { return code.includes('type="radio"'); }`
    },
    {
        title: "8. The Placeholder",
        body: "A text box is confusing if it's empty. Use the `placeholder` attribute to show a hint!",
        mission: "Add `placeholder=\"Enter your name\"` to the text input.",
        initialCode: "<form>\n  <input type=\"text\">\n</form>",
        validator: `function(code) { return code.includes('placeholder=\"Enter your name\"'); }`
    },
    {
        title: "9. Labels for Accessibility",
        body: "Instead of just using placeholders, we should label our inputs using the `<label>` tag. This is a must for screen readers!",
        mission: "Wrap the text 'Username:' in a `<label>` tag.",
        initialCode: "<form>\n  Username: <input type=\"text\">\n</form>",
        validator: `function(code) { return code.includes('<label>') && code.includes('</label>'); }`
    },
    {
        title: "10. Linking Labels",
        body: "To connect a label to an input, give the input an `id`, and the label a `for` attribute that matches!",
        mission: "Add `id=\"user\"` to the input, and `for=\"user\"` to the label.",
        initialCode: "<form>\n  <label>Username:</label>\n  <input type=\"text\">\n</form>",
        validator: `function(code) { return code.includes('id=\"user\"') && code.includes('for=\"user\"'); }`
    },
    {
        title: "11. The Button",
        body: "When you're done filling out a form, you need to submit it! Use the `<button>` tag.",
        mission: "Add a `<button>Submit</button>` after the input.",
        initialCode: "<form>\n  <input type=\"text\">\n</form>",
        validator: `function(code) { return code.includes('<button>'); }`
    },
    {
        title: "12. Button Types",
        body: "Buttons inside forms should be `type=\"submit\"`. This tells the browser: 'When clicked, send the data!'",
        mission: "Add `type=\"submit\"` to the button.",
        initialCode: "<form>\n  <input type=\"text\">\n  <button>Submit</button>\n</form>",
        validator: `function(code) { return code.includes('type=\"submit\"'); }`
    },
    {
        title: "13. Huge Text Areas",
        body: "If you need to write a whole message, a tiny input isn't enough! Use `<textarea>` instead.",
        mission: "We deleted the `<input>`. Try putting a `<textarea></textarea>`.",
        initialCode: "<form>\n</form>",
        validator: `function(code) { return code.includes('<textarea>'); }`
    },
    {
        title: "14. Text Area Sizing",
        body: "You can control its size using `rows` and `cols`.",
        mission: "Add `rows=\"5\"` to the textarea.",
        initialCode: "<form>\n  <textarea></textarea>\n</form>",
        validator: `function(code) { return code.includes('rows=\"5\"'); }`
    },
    {
        title: "15. Dropdown Menus",
        body: "To pick from a list, we use `<select>`. Inside the select, we put choices inside `<option>` tags.",
        mission: "Type `<select>` and `<option>Cool</option>`.",
        initialCode: "<form>\n</form>",
        validator: `function(code) { return code.includes('<select>') && code.includes('<option>'); }`
    },
    {
        title: "16. Multiple Options",
        body: "Add a few more choices to your dropdown menu!",
        mission: "Create 3 `<option>` tags inside the select.",
        initialCode: "<form>\n  <select>\n    <option>Pizza</option>\n  </select>\n</form>",
        validator: `function(code) { return (code.match(/<option>/gi)||[]).length >= 3; }`
    },
    {
        title: "17. Action Attribute",
        body: "But where does the form SEND the data? We define it using the `action` attribute on the `<form>` tag.",
        mission: "Add `action=\"/login\"` to the form tag.",
        initialCode: "<form>\n  <input type=\"text\">\n  <button>Go</button>\n</form>",
        validator: `function(code) { return code.includes('action=\"/login\"'); }`
    },
    {
        title: "18. Method Attribute",
        body: "The browser can send data visible in the URL (GET) or hidden (POST). For passwords, we always use POST.",
        mission: "Add `method=\"POST\"` to the form.",
        initialCode: "<form action=\"/login\">\n</form>",
        validator: `function(code) { return code.includes('method=\"POST\"'); }`
    },
    {
        title: "19. Putting it in a div",
        body: "Forms look messy right now. Let's wrap each label and input in a `<div>` to stack them neatly.",
        mission: "Wrap the label and input in a `<div>`.",
        initialCode: "<form>\n  <label>Name:</label>\n  <input type=\"text\">\n</form>",
        validator: `function(code) { return code.includes('<div>') && code.includes('</div>'); }`
    },
    {
        title: "20. The Contact Form Challenge",
        body: "Final boss! Build a contact form.",
        mission: "Create a `<form>` containing a text input for name, a `<textarea>` for the message, and a `<button>`.",
        initialCode: "<h2>Contact Me</h2>\n\n",
        validator: `function(code) { return code.includes('<form') && code.includes('<input') && code.includes('<textarea'); }`
    }
];

modules.forEach((mod, i) => {
    const fileContent = `window.Lessons.lesson5.modules[${i}] = {
    title: "${mod.title}",
    body: \`<p>${mod.body}</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: ${mod.mission}</p>\`,
    svg: \`<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" style="background:#1e293b; border-radius:8px;">
        <rect x="40" y="50" width="160" height="30" fill="#3b82f6" opacity="0.5" rx="4"/>
        <text x="120" y="70" fill="white" font-family="sans-serif" font-size="16" text-anchor="middle">MODULE ${i + 1}</text>
    </svg>\`,
    widgetCode: \`<!-- INTERACTIVE MODULE -->
<script>
(function() {
    const editor = document.getElementById('code-editor');
    if (editor) {
        editor.readOnly = false;
        editor.style.opacity = "1";
    }
})();
</script>\`,
    initialCode: \`${mod.initialCode.replace(/`/g, '\\`').replace(/\n/g, '\\n')}\`,
    progress: ${(i + 1) * 5},
    validator: ${mod.validator}
};`;

    fs.writeFileSync(path.join(outDir, 'module' + (i + 1) + '.js'), fileContent);
});

console.log("Successfully generated lesson5 modules!");
