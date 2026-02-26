window.Lessons.lesson3.modules[12] = {
            title: "13. Create favorite games list 🎮",
            body: `<p>Let's do an ordered list this time, ranking your top 3 favorite games from 1 to 3.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Make a 3-item &lt;ol&gt;.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="120" y="80" fill="#ff00e5" font-size="40" text-anchor="middle">🎮</text></svg>`,
            initialCode: "<ol>\n  \n</ol>",
            progress: 65,
            validator: function (code) { return code.includes("<ol>") && (code.match(/<li>/g) || []).length >= 3; }
        };