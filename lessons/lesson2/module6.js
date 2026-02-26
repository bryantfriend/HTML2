window.Lessons.lesson2.modules[5] = {
            title: "6. Large vs small headings",
            body: `<p>H1 is visually the largest by default. H6 is actually smaller than regular paragraph text!</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Write an &lt;h1&gt; and an &lt;h6&gt; to compare them in the preview.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="120" y="60" fill="white" font-size="30" font-weight="bold" text-anchor="middle">BIG</text><text x="120" y="100" fill="white" font-size="10" text-anchor="middle">small</text></svg>`,
            initialCode: "<h1>Big Title</h1>\n<h6>Tiny Title</h6>",
            progress: 30,
            validator: function (code) { return code.toLowerCase().includes("<h1>") && code.toLowerCase().includes("<h6>"); }
        };