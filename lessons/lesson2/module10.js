window.Lessons.lesson2.modules[9] = {
            title: "10. Italics",
            body: `<p>The <code>&lt;i&gt;</code> tag makes text <i>italic</i> (slanted).</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Make the word "slanted" italic.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="120" y="80" fill="#00f2ff" font-family="sans-serif" font-size="30" font-style="italic" text-anchor="middle">Italics</text></svg>`,
            initialCode: "<p>This is slanted.</p>",
            progress: 50,
            validator: function (code) { return code.toLowerCase().includes("<i>slanted</i>"); }
        };