window.Lessons.lesson2.modules[16] = {
            title: "17. Students write content",
            body: `<p>Write one sentence about your favorite hobby using a paragraph tag.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Provide a &lt;p&gt; tag with a hobby.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="200" height="110" fill="none" stroke="#ff00e5" stroke-dasharray="4" stroke-width="2"/></svg>`,
            initialCode: "<p>I like to play basketball.</p>",
            progress: 85,
            validator: function (code) { return code.toLowerCase().includes("<p>") && code.length > 10; }
        };