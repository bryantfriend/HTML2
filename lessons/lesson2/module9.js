window.Lessons.lesson2.modules[8] = {
            title: "9. Strong vs bold",
            body: `<p>The <code>&lt;strong&gt;</code> tag also makes text bold. BUT, it also tells computers "This is important." (Better for visually impaired users!).</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Use &lt;strong&gt; to emphasize "WARNING".</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="50" width="160" height="50" rx="4" fill="#ff00e5"/><text x="120" y="80" fill="white" font-family="sans-serif" font-weight="900" font-size="20" text-anchor="middle">STRONG</text></svg>`,
            initialCode: "<p>WARNING: Do not press.</p>",
            progress: 45,
            validator: function (code) { return code.toLowerCase().includes("<strong>warning</strong>"); }
        };