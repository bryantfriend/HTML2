window.Lessons.lesson6.modules[8] = {
            title: "9. Centering text",
            body: `<p>To push text to the middle of the screen, we use <code>text-align: center;</code>. Very useful for main headings!</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Center the h1 text.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="30" x2="220" y2="30" stroke="#444" stroke-width="2"/><text x="120" y="80" fill="#00ff9d" font-size="20" font-weight="bold" text-anchor="middle">CENTERED</text><line x1="20" y1="120" x2="220" y2="120" stroke="#444" stroke-width="2"/><line x1="120" y1="20" x2="120" y2="130" stroke="#00f2ff" stroke-width="1" stroke-dasharray="4"/></svg>`,
            initialCode: "<style>\n  h1 {\n    \n  }\n</style>\n<h1>Look at me!</h1>",
            progress: 45,
            validator: function (code) { return code.toLowerCase().includes("text-align") && code.toLowerCase().includes("center"); }
        };