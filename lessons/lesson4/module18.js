window.Lessons.lesson4.modules[17] = {
            title: "18. Fix broken images",
            body: `<p>Images break when the URL is misspelled, or the file doesn't exist. Fix the spelling of 'placeholder'.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Fix the spelling error in the URL.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="120" y="80" fill="red" font-family="monospace" font-size="20" font-weight="bold" text-anchor="middle">TYPOS = BROKEN</text></svg>`,
            initialCode: "<img src=\"https://via.placxxholder.com/150\">\n<p>It's broken!</p>",
            progress: 90,
            validator: function (code) { return code.toLowerCase().includes("placeholder"); }
        };