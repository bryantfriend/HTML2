window.Lessons.lesson6.modules[7] = {
            title: "8. Changing font color",
            body: `<p>The property to change text color is simply called <code>color</code>. Like: <code>color: white;</code></p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Give the p tag a text color of blue.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="120" y="80" fill="blue" font-family="monospace" font-size="24" font-weight="bold" text-anchor="middle">BLUE TEXT</text></svg>`,
            initialCode: "<style>\n  p {\n    \n  }\n</style>\n<p>Make me blue!</p>",
            progress: 40,
            validator: function (code) { return code.toLowerCase().includes("color") && code.toLowerCase().includes("blue"); }
        };