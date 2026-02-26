window.Lessons.lesson3.modules[11] = {
            title: "12. Create favorite foods list 🍕",
            body: `<p>Now it's your turn. Create an unordered list of your top 3 favorite foods.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Make a 3-item &lt;ul&gt;.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="120" y="80" fill="#00ff9d" font-size="40" text-anchor="middle">🍕</text></svg>`,
            initialCode: "<ul>\n  \n</ul>",
            progress: 60,
            validator: function (code) { return code.includes("<ul>") && (code.match(/<li>/g) || []).length >= 3; }
        };