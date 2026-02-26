window.Lessons.lesson2.modules[7] = {
            title: "8. Bold text",
            body: `<p>The <code>&lt;b&gt;</code> tag makes text <b>bold</b>. It's a quick way to make words stand out.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Wrap the word "bold" in &lt;b&gt; tags.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="120" y="85" fill="#00ff9d" font-family="sans-serif" font-size="36" font-weight="900" text-anchor="middle">&lt;b&gt; BOLD</text></svg>`,
            initialCode: "<p>Make me bold!</p>",
            progress: 40,
            validator: function (code) { return code.toLowerCase().includes("<b>bold</b>") || code.toLowerCase().includes("<b>make me bold!</b>"); }
        };