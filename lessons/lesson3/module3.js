window.Lessons.lesson3.modules[2] = {
            title: "3. Unordered lists <ul>",
            body: `<p>An unordered list uses the <code>&lt;ul&gt;</code> tag. It tells the browser "I am starting a list, use bullet points."</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Create opening and closing &lt;ul&gt; tags.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="40" width="160" height="70" rx="4" fill="none" stroke="#ff00e5" stroke-width="2"/><text x="45" y="55" fill="#ff00e5" font-family="monospace" font-size="12">&lt;ul&gt;</text><text x="45" y="105" fill="#ff00e5" font-family="monospace" font-size="12">&lt;/ul&gt;</text></svg>`,
            initialCode: "",
            progress: 15,
            validator: function (code) { return code.toLowerCase().includes("<ul>") && code.toLowerCase().includes("</ul>"); }
        };