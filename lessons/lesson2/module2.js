window.Lessons.lesson2.modules[1] = {
            title: "2. Paragraph tag <p>",
            body: `<p>To write a block of regular text, we use the paragraph tag: <code>&lt;p&gt;</code>.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Create a paragraph saying "I love coding."</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><circle cx="120" cy="75" r="40" fill="none" stroke="#00ff9d" stroke-width="4"/><text x="120" y="85" fill="#00ff9d" font-family="monospace" font-size="30" font-weight="bold" text-anchor="middle">&lt;p&gt;</text></svg>`,
            initialCode: "",
            progress: 10,
            validator: function (code) { return code.toLowerCase().includes("<p>i love coding.</p>") || code.toLowerCase().includes("<p>i love coding</p>"); }
        };