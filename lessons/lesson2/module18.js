window.Lessons.lesson2.modules[17] = {
            title: "18. Add headings to organize",
            body: `<p>Put an H1 heading above your hobby paragraph to give the page a title.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Add an H1 tag above the paragraph.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="40" y="50" fill="white" font-size="24" font-weight="bold">TITLE (H1)</text><rect x="40" y="70" width="160" height="10" fill="#00ff9d"/></svg>`,
            initialCode: "<h1>My Cool Page</h1>\n<p>I like to play basketball.</p>",
            progress: 90,
            validator: function (code) { return code.toLowerCase().includes("<h1>"); }
        };