window.Lessons.lesson3.modules[15] = {
            title: "16. Formatting for clarity",
            body: `<p>Look at your code. Are your <code>&lt;li&gt;</code> tags indented so you can clearly see they are inside the list container?</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type "INDENT".</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="120" y="80" fill="#ff00e5" font-family="monospace" font-size="16" text-anchor="middle" class="pulse-cyan">CLARITY</text></svg>`,
            initialCode: "",
            progress: 80,
            validator: function (code) { return code.toUpperCase().includes("INDENT"); }
        };