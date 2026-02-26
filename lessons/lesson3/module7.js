window.Lessons.lesson3.modules[6] = {
            title: "7. Numbered lists",
            body: `<p>The browser automatically numbers your <code>&lt;li&gt;</code> tags when they are inside an <code>&lt;ol&gt;</code>! No need to type "1. 2. 3."</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Watch the preview as you create 3 list items.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="80" y="60" fill="#ff00e5" font-size="20" font-weight="bold">1.</text><text x="80" y="90" fill="#ff00e5" font-size="20" font-weight="bold">2.</text></svg>`,
            initialCode: "<ol>\n  <li>Wake up</li>\n  <li>Eat</li>\n  <li>Code</li>\n</ol>",
            progress: 35,
            validator: function (code) { return (code.match(/<li>/g) || []).length >= 3 && code.includes("<ol>"); }
        };