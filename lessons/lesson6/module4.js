window.Lessons.lesson6.modules[3] = {
            title: "4. Text color",
            body: `<p>You can also change the color of the text itself. White text on a black background? Neon green text? You decide.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type "TEXT COLOR".</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="40" width="160" height="70" fill="black"/><text x="120" y="80" fill="#00ff9d" font-family="monospace" font-size="20" font-weight="bold" text-anchor="middle">HACKER GREEN</text></svg>`,
            initialCode: "",
            progress: 20,
            validator: function (code) { return code.toUpperCase().includes("TEXT COLOR"); }
        };