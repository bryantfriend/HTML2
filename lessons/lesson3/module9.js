window.Lessons.lesson3.modules[8] = {
            title: "9. Lists for steps/instructions",
            body: `<p>Ordered lists are perfect for How-To guides. Let's practice.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Write a 2-step OL.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="120" y="80" fill="#00ff9d" font-family="monospace" font-size="16" text-anchor="middle" class="pulse-cyan">INSTRUCTIONS</text></svg>`,
            initialCode: "<ol>\n  <li></li>\n  <li></li>\n</ol>",
            progress: 45,
            validator: function (code) { return (code.match(/<li>/g) || []).length >= 2 && code.includes("<ol>"); }
        };