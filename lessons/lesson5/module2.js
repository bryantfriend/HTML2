window.Lessons.lesson5.modules[1] = {
            title: "2. How the web connects pages",
            body: `<p>The internet is literally a "web" of documents joined together by hyperlinks. Imagine a spiderweb of information!</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type "WEB".</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><circle cx="70" cy="50" r="10" fill="#00ff9d"/><circle cx="170" cy="40" r="10" fill="#ff00e5"/><circle cx="120" cy="110" r="10" fill="#00f2ff"/><line x1="70" y1="50" x2="170" y2="40" stroke="white"/><line x1="170" y1="40" x2="120" y2="110" stroke="white"/><line x1="120" y1="110" x2="70" y2="50" stroke="white"/></svg>`,
            initialCode: "",
            progress: 10,
            validator: function (code) { return code.toUpperCase().includes("WEB"); }
        };