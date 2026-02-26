window.Lessons.lesson3.modules[4] = {
            title: "5. List items <li>",
            body: `<p>To actually put things inside the list, you use the <code>&lt;li&gt;</code> (list item) tag for EACH individual line.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Write a list item saying "Apples".</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="120" y="80" fill="#00f2ff" font-family="monospace" font-size="20" text-anchor="middle">&lt;li&gt;Item&lt;/li&gt;</text></svg>`,
            initialCode: "<ul>\n  \n</ul>",
            progress: 25,
            validator: function (code) { return code.toLowerCase().includes("<li>apples</li>") || code.toLowerCase().includes("apples"); }
        };