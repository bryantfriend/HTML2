window.Lessons.lesson2.modules[14] = {
            title: "15. Making an “About Me” page",
            body: `<p>A classic first website is the "About Me" page. It requires headings for your name and paragraphs for your bio.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type "ABOUT ME".</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><circle cx="120" cy="50" r="20" fill="#00ff9d"/><path d="M80 120 Q120 80 160 120" fill="none" stroke="#00ff9d" stroke-width="20" stroke-linecap="round"/></svg>`,
            initialCode: "",
            progress: 75,
            validator: function (code) { return code.toUpperCase().includes("ABOUT ME"); }
        };