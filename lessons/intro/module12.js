window.Lessons.intro.modules[11] = {
            title: "12. Example tag: <p>",
            body: `<p>The <code>&lt;p&gt;</code> tag creates a paragraph of text. Everything between <code>&lt;p&gt;</code> and <code>&lt;/p&gt;</code> is part of that paragraph.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Write a &lt;p&gt;Hello&lt;/p&gt; element.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="120" y="80" fill="#00f2ff" font-family="monospace" font-size="20" text-anchor="middle">&lt;p&gt;Text&lt;/p&gt;</text></svg>`,
            initialCode: "",
            progress: 60,
            validator: function (code) { return code.toLowerCase().includes("<p>") && code.toLowerCase().includes("</p>"); }
        };