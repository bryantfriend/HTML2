window.Lessons.lesson6.modules[15] = {
            title: "16. Apply text color",
            body: `<p>Let's fix it. Inside the body CSS rule, under the background-color, set your <code>color</code> to white, silver, or lightgreen!</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Add color: white to the body style.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="200" height="110" fill="black"/><text x="120" y="80" fill="white" font-size="20" text-anchor="middle">VISIBLE</text></svg>`,
            initialCode: "<style>\n  body {\n    background-color: black;\n    \n  }\n</style>\n<p>I am cured.</p>",
            progress: 80,
            validator: function (code) { return code.toLowerCase().includes("color") && code.toLowerCase().includes("white"); }
        };