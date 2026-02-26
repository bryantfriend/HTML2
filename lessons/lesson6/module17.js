window.Lessons.lesson6.modules[16] = {
            title: "17. Improve headings",
            body: `<p>Let's make our H1 heading really stand out with its own color and center it!</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Create a new style rule for h1 setting its color and text-align.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="120" y="50" fill="#00f2ff" font-family="sans-serif" font-weight="bold" font-size="24" text-anchor="middle">KING TITLE</text><text x="120" y="100" fill="gray" font-size="12" text-anchor="middle">body text here</text></svg>`,
            initialCode: "<style>\n  body {\n    background-color: black;\n    color: silver;\n  }\n  \n</style>\n<h1>Title</h1>\n<p>Text</p>",
            progress: 85,
            validator: function (code) { return code.toLowerCase().includes("h1 {") && code.toLowerCase().includes("color") && code.toLowerCase().includes("text-align"); }
        };