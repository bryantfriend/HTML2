window.Lessons.lesson3.modules[13] = {
            title: "14. Create daily routine list",
            body: `<p>Think about your morning routine. Wake up, brush teeth, eat... write it out as steps.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Write out a routine in a list.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="120" y="80" fill="#00f2ff" font-size="40" text-anchor="middle">⏰</text></svg>`,
            initialCode: "<ol>\n  <li>Wake up</li>\n</ol>",
            progress: 70,
            validator: function (code) { return code.includes("<ol>") && (code.match(/<li>/g) || []).length > 1; }
        };