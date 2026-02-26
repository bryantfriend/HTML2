window.Lessons.lesson3.modules[16] = {
            title: "17. Check for missing tags",
            body: `<p>A common error is forgetting to close individual list items with <code>&lt;/li&gt;</code>. Fix the broken list below.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Add the missing closing tags.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="40" width="160" height="70" fill="none" stroke="#f00" stroke-width="4" stroke-dasharray="8"/></svg>`,
            initialCode: "<ul>\n  <li>Broken item\n</ul>",
            progress: 85,
            validator: function (code) { return code.includes("</li>"); }
        };