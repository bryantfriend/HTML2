window.Lessons.intro.modules[12] = {
            title: "13. Editing text live",
            body: `<p>In our editor below, what you type automatically becomes rendered by our mini-browser on the right.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Change the word "Change" to "Changed".</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="120" y="80" fill="#00ff9d" font-family="monospace" font-size="16" text-anchor="middle" class="pulse-cyan">LIVE PREVIEW</text></svg>`,
            initialCode: "<p>Change this text.</p>",
            progress: 65,
            validator: function (code) { return code.toLowerCase().includes("changed"); }
        };