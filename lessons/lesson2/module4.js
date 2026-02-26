window.Lessons.lesson2.modules[3] = {
            title: "4. <h1> main title",
            body: `<p>The <code>&lt;h1&gt;</code> tag is the biggest heading. It should only be used once per page for the main title.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Write an &lt;h1&gt; element saying "My Website".</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="120" y="85" fill="#ff00e5" font-family="sans-serif" font-size="40" font-weight="bold" text-anchor="middle">H1</text></svg>`,
            initialCode: "",
            progress: 20,
            validator: function (code) { return code.toLowerCase().includes("<h1>my website</h1>"); }
        };