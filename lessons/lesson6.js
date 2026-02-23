window.Lessons = window.Lessons || {};
window.Lessons.lesson6 = {
    id: "lesson6",
    title: "06: LESSON 6 — SIMPLE DESIGN",
    description: "Intro to basic CSS styling and colors. [20 MODULES]",
    modules: [
        {
            title: "1. Simple design intro",
            body: `<p>HTML builds the skeleton, but CSS (Cascading Style Sheets) gives it skin and clothes! It's time to make our pages look awesome.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type "STYLE" to begin.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="60" y="30" width="120" height="90" rx="8" fill="#161b33" stroke="#ff00e5" stroke-width="4"/><circle cx="120" cy="75" r="20" fill="#00f2ff"/></svg>`,
            initialCode: "",
            progress: 5,
            validator: function (code) { return code.toUpperCase().includes("STYLE"); }
        },
        {
            title: "2. Why design matters",
            body: `<p>Good design makes your content easier to read and enjoy. Poor design makes people click "back" immediately.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type "DESIGN".</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><path d="M70 75 Q120 20 170 75" fill="none" stroke="#00ff9d" stroke-width="4"/><circle cx="100" cy="65" r="5" fill="#00ff9d"/><circle cx="140" cy="65" r="5" fill="#00ff9d"/></svg>`,
            initialCode: "",
            progress: 10,
            validator: function (code) { return code.toUpperCase().includes("DESIGN"); }
        },
        {
            title: "3. Background color",
            body: `<p>By default, web pages are white. But you can use CSS to change the background of any element, especially the <code>&lt;body&gt;</code>.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type "BACKGROUND".</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="200" height="110" fill="#ff00e5"/><text x="120" y="80" fill="white" font-weight="bold" font-size="20" text-anchor="middle">COLOR</text></svg>`,
            initialCode: "",
            progress: 15,
            validator: function (code) { return code.toUpperCase().includes("BACKGROUND"); }
        },
        {
            title: "4. Text color",
            body: `<p>You can also change the color of the text itself. White text on a black background? Neon green text? You decide.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type "TEXT COLOR".</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="40" width="160" height="70" fill="black"/><text x="120" y="80" fill="#00ff9d" font-family="monospace" font-size="20" font-weight="bold" text-anchor="middle">HACKER GREEN</text></svg>`,
            initialCode: "",
            progress: 20,
            validator: function (code) { return code.toUpperCase().includes("TEXT COLOR"); }
        },
        {
            title: "5. Readability",
            body: `<p>Always ensure high contrast! Yellow text on a white background is almost invisible. Stick to dark on light, or light on dark!</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type "CONTRAST".</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="30" width="90" height="90" fill="white"/><text x="75" y="80" fill="yellow" font-size="14" font-weight="bold" text-anchor="middle">BAD</text><rect x="120" y="30" width="90" height="90" fill="black"/><text x="165" y="80" fill="white" font-size="14" font-weight="bold" text-anchor="middle">GOOD</text></svg>`,
            initialCode: "",
            progress: 25,
            validator: function (code) { return code.toUpperCase().includes("CONTRAST"); }
        },
        {
            title: "6. <style> tag intro",
            body: `<p>We place CSS rules inside a <code>&lt;style&gt;</code> tag, usually inside the <code>&lt;head&gt;</code> of our document.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Create a &lt;style&gt; tag inside the head.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="120" y="80" fill="#ff00e5" font-family="monospace" font-size="20" font-weight="bold" text-anchor="middle">&lt;style&gt;</text></svg>`,
            initialCode: "<html>\n  <head>\n    \n  </head>\n</html>",
            progress: 30,
            validator: function (code) { return code.toLowerCase().includes("<style>") && code.toLowerCase().includes("</style>") && code.indexOf("<style>") > code.indexOf("<head>"); }
        },
        {
            title: "7. Changing body background",
            body: `<p>In CSS, we write down the tag name, open some curly braces <code>{}</code>, and give it properties. Like: <code>body { background-color: black; }</code></p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Add CSS to make the body background black.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="30" width="160" height="90" rx="4" fill="none" stroke="#00f2ff" stroke-width="2"/><text x="120" y="70" fill="#00f2ff" font-family="monospace" font-size="14" text-anchor="middle">body {</text><text x="120" y="90" fill="#00f2ff" font-family="monospace" font-size="14" text-anchor="middle">  bg: black;</text><text x="120" y="110" fill="#00f2ff" font-family="monospace" font-size="14" text-anchor="middle">}</text></svg>`,
            initialCode: "<style>\n  body {\n    \n  }\n</style>",
            progress: 35,
            validator: function (code) { return code.toLowerCase().includes("background-color") && code.toLowerCase().includes("black"); }
        },
        {
            title: "8. Changing font color",
            body: `<p>The property to change text color is simply called <code>color</code>. Like: <code>color: white;</code></p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Give the p tag a text color of blue.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="120" y="80" fill="blue" font-family="monospace" font-size="24" font-weight="bold" text-anchor="middle">BLUE TEXT</text></svg>`,
            initialCode: "<style>\n  p {\n    \n  }\n</style>\n<p>Make me blue!</p>",
            progress: 40,
            validator: function (code) { return code.toLowerCase().includes("color") && code.toLowerCase().includes("blue"); }
        },
        {
            title: "9. Centering text",
            body: `<p>To push text to the middle of the screen, we use <code>text-align: center;</code>. Very useful for main headings!</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Center the h1 text.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="30" x2="220" y2="30" stroke="#444" stroke-width="2"/><text x="120" y="80" fill="#00ff9d" font-size="20" font-weight="bold" text-anchor="middle">CENTERED</text><line x1="20" y1="120" x2="220" y2="120" stroke="#444" stroke-width="2"/><line x1="120" y1="20" x2="120" y2="130" stroke="#00f2ff" stroke-width="1" stroke-dasharray="4"/></svg>`,
            initialCode: "<style>\n  h1 {\n    \n  }\n</style>\n<h1>Look at me!</h1>",
            progress: 45,
            validator: function (code) { return code.toLowerCase().includes("text-align") && code.toLowerCase().includes("center"); }
        },
        {
            title: "10. Page themes",
            body: `<p>Developers often pick a "theme" (2-3 matching colors) instead of using random colors everywhere.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type "THEME".</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="50" width="50" height="50" fill="#161b33"/><rect x="95" y="50" width="50" height="50" fill="#00f2ff"/><rect x="150" y="50" width="50" height="50" fill="#ff00e5"/></svg>`,
            initialCode: "",
            progress: 50,
            validator: function (code) { return code.toUpperCase().includes("THEME"); }
        },
        {
            title: "11. Matching colors",
            body: `<p>Try to pick 1 background color, 1 main text color, and 1 highlight color for your headings.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type "PALETTE".</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="200" height="110" fill="#2d3436"/><text x="120" y="60" fill="#ff7675" font-family="sans-serif" font-weight="bold" font-size="20" text-anchor="middle">RED ALERT</text><text x="120" y="100" fill="#dfe6e9" font-family="sans-serif" font-size="14" text-anchor="middle">Normal body text.</text></svg>`,
            initialCode: "",
            progress: 55,
            validator: function (code) { return code.toUpperCase().includes("PALETTE"); }
        },
        {
            title: "12. Avoiding ugly pages 😄",
            body: `<p>Don't just make an ugly site on purpose (though it is fun)! Focus on making it look genuinely nice and readable.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type "NOT UGLY".</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="200" height="110" fill="#ff0000"/><text x="120" y="80" fill="#00ff00" font-family="sans-serif" font-weight="bold" font-size="20" text-anchor="middle">MY EVES BURN</text></svg>`,
            initialCode: "",
            progress: 60,
            validator: function (code) { return code.toUpperCase().includes("NOT UGLY"); }
        },
        {
            title: "13. Teacher demo",
            body: `<p>Watch the teacher apply a dark mode style to a basic HTML page using the concepts we just learned.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type "DARK MODE".</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><circle cx="120" cy="75" r="30" fill="gray"/><path d="M120 45 A 30 30 0 0 1 120 105 A 20 20 0 0 0 120 45" fill="black"/></svg>`,
            initialCode: "",
            progress: 65,
            validator: function (code) { return code.toUpperCase().includes("DARK MODE"); }
        },
        {
            title: "14. Choose a color theme 🎨",
            body: `<p>Time to build your site styles! Pick a background color for your body. Let's start with 'black'.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Write body { background-color: black; }.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="40" width="140" height="70" fill="black" stroke="#ff00e5" stroke-width="2"/></svg>`,
            initialCode: "<style>\n  \n</style>\n<p>Help I can't be seen.</p>",
            progress: 70,
            validator: function (code) { return code.toLowerCase().includes("background-color") && code.toLowerCase().includes("black"); }
        },
        {
            title: "15. Apply background color",
            body: `<p>Wait, if the background is black, we can't see the text! This is because default text is black.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Confirm this by typing: "INVISIBLE".</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="200" height="110" fill="black"/><text x="120" y="80" fill="white" font-size="14" text-anchor="middle">Where am I?</text></svg>`,
            initialCode: "",
            progress: 75,
            validator: function (code) { return code.toUpperCase().includes("INVISIBLE"); }
        },
        {
            title: "16. Apply text color",
            body: `<p>Let's fix it. Inside the body CSS rule, under the background-color, set your <code>color</code> to white, silver, or lightgreen!</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Add color: white to the body style.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="200" height="110" fill="black"/><text x="120" y="80" fill="white" font-size="20" text-anchor="middle">VISIBLE</text></svg>`,
            initialCode: "<style>\n  body {\n    background-color: black;\n    \n  }\n</style>\n<p>I am cured.</p>",
            progress: 80,
            validator: function (code) { return code.toLowerCase().includes("color") && code.toLowerCase().includes("white"); }
        },
        {
            title: "17. Improve headings",
            body: `<p>Let's make our H1 heading really stand out with its own color and center it!</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Create a new style rule for h1 setting its color and text-align.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="120" y="50" fill="#00f2ff" font-family="sans-serif" font-weight="bold" font-size="24" text-anchor="middle">KING TITLE</text><text x="120" y="100" fill="gray" font-size="12" text-anchor="middle">body text here</text></svg>`,
            initialCode: "<style>\n  body {\n    background-color: black;\n    color: silver;\n  }\n  \n</style>\n<h1>Title</h1>\n<p>Text</p>",
            progress: 85,
            validator: function (code) { return code.toLowerCase().includes("h1 {") && code.toLowerCase().includes("color") && code.toLowerCase().includes("text-align"); }
        },
        {
            title: "18. Make page personal",
            body: `<p>The beauty of the web is customizability. If you want a pink background and hot-pink centered text, do it!</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Change the background-color to pink.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="200" height="110" fill="pink"/><text x="120" y="80" fill="#ff00e5" font-weight="bold" font-size="24" text-anchor="middle">PINK!</text></svg>`,
            initialCode: "<style>\n  body {\n    background-color: white;\n  }\n</style>",
            progress: 90,
            validator: function (code) { return code.toLowerCase().includes("pink"); }
        },
        {
            title: "19. Final polish",
            body: `<p>Take your most complete HTML file from earlier lessons, drop a <code>&lt;style&gt;</code> block in the <code>&lt;head&gt;</code>, and give it your custom theme.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type "POLISHED".</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><circle cx="120" cy="75" r="40" fill="gold"/><path d="M100 80 L115 95 L145 65" fill="none" stroke="white" stroke-width="6" stroke-linecap="round"/></svg>`,
            initialCode: "",
            progress: 95,
            validator: function (code) { return code.toUpperCase().includes("POLISHED"); }
        },
        {
            title: "20. Showcase Time 🚀",
            body: `<p>Prepare to present your final Website! What started as blank code is now a fully structured, linked, visual, and styled digital world!</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type "LAUNCH" to declare victory!</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="120" y="85" fill="#00ff9d" font-family="monospace" font-size="50" text-anchor="middle" class="pulse-cyan">🚀</text></svg>`,
            initialCode: "",
            progress: 100,
            validator: function (code) { return code.toUpperCase().includes("LAUNCH"); }
        }
    ]
};
