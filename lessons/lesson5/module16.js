window.Lessons.lesson5.modules[15] = {
            title: "16. Create About page",
            body: `<p>Now imagine you are on about.html. Add a heading detailing your hobbies, and a link pointing BACK to index.html.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Add an h2 with hobbies, and a link pointing back to index.html.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="30" width="160" height="90" fill="none" stroke="#ff00e5" stroke-dasharray="4"/><text x="120" y="70" fill="white" font-weight="bold" font-size="16" text-anchor="middle">ABOUT PAGE</text></svg>`,
            initialCode: "",
            progress: 80,
            validator: function (code) { return code.toLowerCase().includes("<h2>") && code.toLowerCase().includes("href=\"index.html\""); }
        };