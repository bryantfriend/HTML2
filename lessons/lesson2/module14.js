window.Lessons.lesson2.modules[13] = {
            title: "14. Spacing rules",
            body: `<p>If you press spacebar 50 times in your code, the browser will only show exactly 1 space. Browsers collapse whitespace!</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Add 20 spaces between the words below and check the preview.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="120" y="80" fill="#f00" font-family="monospace" font-size="16" text-anchor="middle">A          B  =  A B</text></svg>`,
            initialCode: "<p>Space          Here</p>",
            progress: 70,
            validator: function (code) { return code.includes("Space"); }
        };