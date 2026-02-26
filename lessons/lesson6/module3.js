window.Lessons.lesson6.modules[2] = {
            title: "3. Background color",
            body: `<p>By default, web pages are white. But you can use CSS to change the background of any element, especially the <code>&lt;body&gt;</code>.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type "BACKGROUND".</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="200" height="110" fill="#ff00e5"/><text x="120" y="80" fill="white" font-weight="bold" font-size="20" text-anchor="middle">COLOR</text></svg>`,
            initialCode: "",
            progress: 15,
            validator: function (code) { return code.toUpperCase().includes("BACKGROUND"); }
        };