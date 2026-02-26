window.Lessons.lesson3.modules[19] = {
            title: "20. Challenge: 3 lists on one page",
            body: `<p>Final test: Create a quick page featuring an H1 title, a paragraph, an Unordered list, and an Ordered list.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: You can do it!</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><circle cx="120" cy="75" r="45" fill="none" stroke="#00f2ff" stroke-width="5" class="pulse-cyan"/><text x="120" y="80" fill="white" font-weight="bold" font-size="18" text-anchor="middle">BOSS</text></svg>`,
            initialCode: "<h1>My Stuff</h1>\n<p>Info goes here</p>\n<ul>\n  <li>A</li>\n</ul>\n<ol>\n  <li>B</li>\n</ol>",
            progress: 100,
            validator: function (code) {
                return code.includes("<h1>") && code.includes("<p>") && code.includes("<ul>") && code.includes("<ol>");
            }
        };