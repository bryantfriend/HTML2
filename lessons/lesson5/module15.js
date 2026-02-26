window.Lessons.lesson5.modules[14] = {
            title: "15. Students create Home page",
            body: `<p>You are pretending to be on index.html right now. Write a massive H1 welcoming users, and a link pointing to about.html.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Add an h1 and an a tag pointing to about.html.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="30" width="160" height="90" fill="none" stroke="#fff" stroke-dasharray="4"/><text x="120" y="70" fill="white" font-weight="bold" font-size="16" text-anchor="middle">HOME PAGE</text></svg>`,
            initialCode: "",
            progress: 75,
            validator: function (code) { return code.toLowerCase().includes("<h1>") && code.toLowerCase().includes("href=\"about.html\""); }
        };