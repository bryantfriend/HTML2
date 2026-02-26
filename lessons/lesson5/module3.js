window.Lessons.lesson5.modules[2] = {
            title: "3. <a> tag",
            body: `<p>We create links using the <code>&lt;a&gt;</code> tag. The 'a' stands for <strong>anchor</strong>.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type an opening and closing &lt;a&gt; tag.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="60" y="80" fill="#ff00e5" font-family="monospace" font-size="20">&lt;a&gt;</text><text x="140" y="80" fill="#ff00e5" font-family="monospace" font-size="20">&lt;/a&gt;</text></svg>`,
            initialCode: "",
            progress: 15,
            validator: function (code) { return code.toLowerCase().includes("<a>") && code.toLowerCase().includes("</a>"); }
        };