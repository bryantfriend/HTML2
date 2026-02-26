window.Lessons.lesson3.modules[5] = {
            title: "6. Ordered lists <ol>",
            body: `<p>If the sequence matters (like a recipe), use the <code>&lt;ol&gt;</code> (ordered list) tag instead of <code>&lt;ul&gt;</code>.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Change &lt;ul&gt; to &lt;ol&gt;.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="40" width="160" height="70" rx="4" fill="none" stroke="#00ff9d" stroke-width="2"/><text x="45" y="55" fill="#00ff9d" font-family="monospace" font-size="12">&lt;ol&gt;</text><text x="45" y="105" fill="#00ff9d" font-family="monospace" font-size="12">&lt;/ol&gt;</text></svg>`,
            initialCode: "<ul>\n  <li>First</li>\n</ul>",
            progress: 30,
            validator: function (code) { return code.toLowerCase().includes("<ol>") && code.toLowerCase().includes("</ol>"); }
        };