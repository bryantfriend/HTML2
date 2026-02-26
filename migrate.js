const fs = require('fs');
let awesome = fs.readFileSync('lessons/awesome_intro.js', 'utf8');
let newLesson1 = awesome.replace('window.Lessons.intro = {', 'window.Lessons.lesson1 = {')
    .replace('id: "intro",', 'id: "lesson1",')
    .replace('title: "00: INTRO LESSON — WHAT IS HTML?",', 'title: "01: LESSON 1 — PAGE STRUCTURE",');
fs.writeFileSync('lessons/lesson1.js', newLesson1);

let newIntro = `window.Lessons = window.Lessons || {};
window.Lessons.intro = {
    id: "intro",
    title: "00: INTRO LESSON — WHAT IS HTML?",
    description: "Understand the basics of Web Design and HTML. [6 MODULES]",
    modules: [
        {
            title: "1. What is HTML?",
            body: "<p>HTML stands for HyperText Markup Language. It is the language used to create web pages.</p>",
            svg: "<svg width='240' height='150' viewBox='0 0 240 150' xmlns='http://www.w3.org/2000/svg'><text x='120' y='80' fill='#00f2ff' font-family='monospace' font-size='18' text-anchor='middle'>HTML</text></svg>",
            initialCode: "",
            progress: 15,
            validator: function (code) { return true; }
        },
        {
            title: "2. The Internet",
            body: "<p>The internet is a giant network of computers. Servers host websites, and browsers load them.</p>",
            svg: "<svg width='240' height='150' viewBox='0 0 240 150' xmlns='http://www.w3.org/2000/svg'><text x='120' y='80' fill='#00ff9d' font-family='monospace' font-size='18' text-anchor='middle'>INTERNET</text></svg>",
            initialCode: "",
            progress: 30,
            validator: function (code) { return true; }
        },
        {
            title: "3. Websites vs Web Apps",
            body: "<p>Websites give information (like Wikipedia). Web Apps let you DO things (like Gmail or Discord).</p>",
            svg: "<svg width='240' height='150' viewBox='0 0 240 150' xmlns='http://www.w3.org/2000/svg'><text x='120' y='80' fill='#ff00e5' font-family='monospace' font-size='18' text-anchor='middle'>WEB APPS</text></svg>",
            initialCode: "",
            progress: 45,
            validator: function (code) { return true; }
        },
        {
            title: "4. The Toolbox",
            body: "<p>Web developers use HTML for structure, CSS for style, and JavaScript for interactivity.</p>",
            svg: "<svg width='240' height='150' viewBox='0 0 240 150' xmlns='http://www.w3.org/2000/svg'><text x='120' y='80' fill='#fcd34d' font-family='monospace' font-size='18' text-anchor='middle'>TOOLBOX</text></svg>",
            initialCode: "",
            progress: 60,
            validator: function (code) { return true; }
        },
        {
            title: "5. Code Editors",
            body: "<p>To write HTML, we use a code editor. You will write your code in the dark panel below!</p>",
            svg: "<svg width='240' height='150' viewBox='0 0 240 150' xmlns='http://www.w3.org/2000/svg'><text x='120' y='80' fill='#3b82f6' font-family='monospace' font-size='18' text-anchor='middle'>EDITOR</text></svg>",
            initialCode: "<!-- Type here -->",
            progress: 75,
            validator: function (code) { return true; }
        },
        {
            title: "6. Ready to build?",
            body: "<p>Let's move on to the real stuff. In Lesson 1, you'll learn HTML tags.</p><p>Type READY in the editor.</p>",
            svg: "<svg width='240' height='150' viewBox='0 0 240 150' xmlns='http://www.w3.org/2000/svg'><text x='120' y='80' fill='#a855f7' font-family='monospace' font-size='18' text-anchor='middle'>READY</text></svg>",
            initialCode: "",
            progress: 90,
            validator: function (code) { return code.toUpperCase().includes("READY"); }
        }
    ]
};`;
fs.writeFileSync('lessons/intro.js', newIntro);
console.log("Migration successful!");
