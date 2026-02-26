window.Lessons.lesson6.modules[6] = {
            title: "7. Changing body background",
            body: `<p>In CSS, we write down the tag name, open some curly braces <code>{}</code>, and give it properties. Like: <code>body { background-color: black; }</code></p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Add CSS to make the body background black.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="30" width="160" height="90" rx="4" fill="none" stroke="#00f2ff" stroke-width="2"/><text x="120" y="70" fill="#00f2ff" font-family="monospace" font-size="14" text-anchor="middle">body {</text><text x="120" y="90" fill="#00f2ff" font-family="monospace" font-size="14" text-anchor="middle">  bg: black;</text><text x="120" y="110" fill="#00f2ff" font-family="monospace" font-size="14" text-anchor="middle">}</text></svg>`,
            initialCode: "<style>\n  body {\n    \n  }\n</style>",
            progress: 35,
            validator: function (code) { return code.toLowerCase().includes("background-color") && code.toLowerCase().includes("black"); }
        };