const fs = require('fs');
const path = require('path');

const outDir = 'lessons/lesson7';
if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
}

fs.writeFileSync(path.join(outDir, 'metadata.js'), `window.Lessons = window.Lessons || {};
window.Lessons.lesson7 = {
    id: "lesson7",
    title: "Lesson 7: Intro to CSS",
    description: "Time to make things beautiful! Learn how to add style and color to your HTML.",
    gameTitle: "Color Coder",
    gamePath: "minigames/game7.html",
    modules: []
};`);

const modules = [
    {
        title: "1. What is CSS?",
        body: "HTML is the skeleton (the structure). CSS is the skin and clothes (the styles). Without CSS, the web is just black and white text!",
        mission: "Type READY to begin.",
        initialCode: "<!-- Ready? -->",
        validator: `function(code) { return code.toUpperCase().includes("READY"); }`
    },
    {
        title: "2. The <style> Tag",
        body: "To write CSS inside an HTML file, we wrap it in a `<style>` tag, usually placed at the top of the page.",
        mission: "Create an opening and closing `<style>` tag.",
        initialCode: "",
        validator: `function(code) { return code.includes("<style>") && code.includes("</style>"); }`
    },
    {
        title: "3. Selecting Elements",
        body: "In CSS, we have to tell the browser *what* we want to style. This is called a **Selector**. Let's select all `<h1>` tags.",
        mission: "Type `h1 { }` inside the style tag.",
        initialCode: "<style>\n</style>\n\n<h1>Hello</h1>",
        validator: `function(code) { return code.includes("h1") && code.includes("{") && code.includes("}"); }`
    },
    {
        title: "4. Changing Color",
        body: "Inside the curly braces `{}`, we write rules. Let's change the color of the text. CSS rules end with a semicolon `;`.",
        mission: "Inside `h1 { }`, add `color: red;`",
        initialCode: "<style>\nh1 {\n\n}\n</style>\n\n<h1>Hello</h1>",
        validator: `function(code) { return code.includes("color:") && code.includes("red") && code.includes(";"); }`
    },
    {
        title: "5. Background Colors",
        body: "We can also change the background behind the text using `background-color`.",
        mission: "Add `background-color: blue;` inside the h1 selector.",
        initialCode: "<style>\nh1 {\n  color: white;\n}\n</style>\n\n<h1>Hello</h1>",
        validator: `function(code) { return code.includes("background-color:") && code.includes("blue"); }`
    },
    {
        title: "6. Styling the Whole Page",
        body: "What if we want the entire page's background to change? We select the `<body>` tag!",
        mission: "Add a new selector `body { }` and give it a `background-color: black;`",
        initialCode: "<style>\n  /* add body style here */\n  h1 { color: red; }\n</style>\n\n<h1>Hello</h1>",
        validator: `function(code) { return code.includes("body") && code.includes("background-color:") && code.includes("black"); }`
    },
    {
        title: "7. Using Hex Colors",
        body: "Words like 'red' and 'blue' are boring. We can use specific Hex color codes like `#FF5733` (a nice orange)!",
        mission: "Change the h1 color to `#FF5733;`",
        initialCode: "<style>\n  h1 { color: red; }\n</style>\n<h1>Hello</h1>",
        validator: `function(code) { return code.toLowerCase().includes("#ff5733"); }`
    },
    {
        title: "8. Font Size",
        body: "Let's make text huge! We use the `font-size` property, usually measured in pixels (`px`).",
        mission: "Set the `font-size` of the h1 to `50px;`",
        initialCode: "<style>\n  h1 {\n    color: blue;\n  }\n</style>\n<h1>Small</h1>",
        validator: `function(code) { return code.includes("font-size:") && code.includes("50px"); }`
    },
    {
        title: "9. Font Family",
        body: "Tired of the default font? Change it using `font-family`.",
        mission: "Change the `font-family` to `sans-serif;`",
        initialCode: "<style>\n  h1 { }\n</style>\n<h1>Ugly Font</h1>",
        validator: `function(code) { return code.includes("font-family:") && code.includes("sans-serif"); }`
    },
    {
        title: "10. Text Align",
        body: "To center text, use `text-align: center;`",
        mission: "Center the h1.",
        initialCode: "<style>\n  h1 { }\n</style>\n<h1>Left Side</h1>",
        validator: `function(code) { return code.includes("text-align:") && code.includes("center"); }`
    },
    {
        title: "11. Selecting Multiple Things",
        body: "What if we have multiple paragraphs? `p { color: green; }` will turn ALL `<p>` tags green!",
        mission: "Make all `<p>` tags green.",
        initialCode: "<style>\n</style>\n<p>One</p>\n<p>Two</p>",
        validator: `function(code) { return code.includes("p {") && code.includes("color:") && code.includes("green"); }`
    },
    {
        title: "12. Classes!",
        body: "If we only want ONE paragraph to be green, we give it a class: `<p class=\"special\">`. In CSS, we select classes using a dot: `.special`",
        mission: "Add `class=\"urgent\"` to the first paragraph.",
        initialCode: "<style>\n  .urgent { color: red; }\n</style>\n<p>Make me red!</p>\n<p>Leave me alone.</p>",
        validator: `function(code) { return code.includes("class=\"urgent\""); }`
    },
    {
        title: "13. Styling a Class",
        body: "Now write the CSS for a class yourself. Remember the DOT!",
        mission: "Create a rule `.fancy { color: purple; }`",
        initialCode: "<style>\n</style>\n<p class=\"fancy\">I am fancy!</p>",
        validator: `function(code) { return code.includes(".fancy") && code.includes("color:") && code.includes("purple"); }`
    },
    {
        title: "14. IDs vs Classes",
        body: "Classes can be used many times. IDs (`id=\"main\"`) can only be used ONCE per page. In CSS, we select IDs with a hashtag: `#main`",
        mission: "Style the ID `#title` to have `color: gold;`",
        initialCode: "<style>\n</style>\n<h1 id=\"title\">Golden</h1>",
        validator: `function(code) { return code.includes("#title") && code.includes("color:") && code.includes("gold"); }`
    },
    {
        title: "15. Bold and Italic in CSS",
        body: "We can make things bold using `font-weight: bold;` and italic using `font-style: italic;`",
        mission: "Make the `<p>` bold.",
        initialCode: "<style>\n  p { }\n</style>\n<p>Normal text</p>",
        validator: `function(code) { return code.includes("font-weight:") && code.includes("bold"); }`
    },
    {
        title: "16. Text Transformations",
        body: "Want to yell? `text-transform: uppercase;` will make all letters capital automatically!",
        mission: "Make the h1 uppercase.",
        initialCode: "<style>\n  h1 { }\n</style>\n<h1>whisper</h1>",
        validator: `function(code) { return code.includes("text-transform:") && code.includes("uppercase"); }`
    },
    {
        title: "17. Letter Spacing",
        body: "Spread your letters out with `letter-spacing: 5px;`",
        mission: "Give the h1 5px of letter spacing.",
        initialCode: "<style>\n  h1 { }\n</style>\n<h1>WIDE</h1>",
        validator: `function(code) { return code.includes("letter-spacing:") && code.includes("5px"); }`
    },
    {
        title: "18. Comments in CSS",
        body: "HTML comments look like `<!-- -->`. But CSS comments look like `/* this */`.",
        mission: "Write a CSS comment inside the style tag.",
        initialCode: "<style>\n\n</style>",
        validator: `function(code) { return code.includes("/*") && code.includes("*/"); }`
    },
    {
        title: "19. The Important Flag",
        body: "If something absolutely refuses to change color, you can force it by adding `!important` before the semicolon.",
        mission: "Force the color: `color: pink !important;`",
        initialCode: "<style>\n  h1 { color: black; }\n  .pink-text { color: pink; }\n</style>\n<h1 class=\"pink-text\">Force me pink!</h1>",
        validator: `function(code) { return code.includes("!important"); }`
    },
    {
        title: "20. The Master Stylist",
        body: "Final challenge! Create a style block. Make the `body` background dark. Make the `h1` centered and green. Make the `.bio` class italic and white.",
        mission: "Write the full CSS for body, h1, and .bio.",
        initialCode: "<style>\n</style>\n\n<h1>My Profile</h1>\n<p class=\"bio\">I love coding.</p>",
        validator: `function(code) { return code.includes("body") && code.includes("h1") && code.includes(".bio") && code.includes("italic"); }`
    }
];

modules.forEach((mod, i) => {
    const fileContent = `window.Lessons.lesson7.modules[${i}] = {
    title: "${mod.title}",
    body: \`<p>${mod.body}</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: ${mod.mission}</p>\`,
    svg: \`<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" style="background:#1e293b; border-radius:8px;">
        <rect x="40" y="40" width="160" height="70" fill="#ec4899" rx="10"/>
        <text x="120" y="80" fill="white" font-family="sans-serif" font-size="16" text-anchor="middle">MODULE ${i + 1}</text>
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

console.log("Successfully generated lesson7 modules!");
