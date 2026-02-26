window.Lessons.lesson2.modules[12] = {
            title: "13. Writing multiple paragraphs",
            body: `<p>Notice how paragraphs automatically push away from each other? This margin keeps text readable.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Write two separate &lt;p&gt; elements.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="30" width="160" height="30" fill="#333"/><path d="M120 60 L120 90" stroke="#ff00e5" stroke-width="2" stroke-dasharray="4"/><rect x="40" y="90" width="160" height="30" fill="#333"/></svg>`,
            initialCode: "<p>Paragraph 1</p>\n<p>Paragraph 2</p>",
            progress: 65,
            validator: function (code) { return (code.match(/<p>/g) || []).length >= 2; }
        };