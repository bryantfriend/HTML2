window.Lessons.lesson4.modules[2] = {
            title: "3. <img> tag overview",
            body: `<p>The <code>&lt;img&gt;</code> tag embeds an image. It is an "empty" tag, meaning it doesn't wrap text and it has no closing tag like <code>&lt;/img&gt;</code>.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type an &lt;img&gt; tag.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="50" width="140" height="50" rx="4" fill="#0a0b1e" stroke="#00ff9d" stroke-width="3"/><text x="120" y="82" fill="#00ff9d" font-family="monospace" font-size="24" font-weight="bold" text-anchor="middle">&lt;img&gt;</text></svg>`,
            initialCode: "",
            progress: 15,
            validator: function (code) { return code.toLowerCase().includes("<img"); }
        };