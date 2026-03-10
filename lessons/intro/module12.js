window.Lessons.intro.modules[11] = {
            title: "12. Example tag: <p>",
            body: `<p>The <code>&lt;p&gt;</code> tag creates a paragraph of text. Everything between <code>&lt;p&gt;</code> and <code>&lt;/p&gt;</code> is part of that paragraph.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Write a &lt;p&gt;Hello&lt;/p&gt; element.</p>`,
            svg: ``,
            initialCode: "",
            progress: 60,
            validator: function (code) { return code.toLowerCase().includes("<p>") && code.toLowerCase().includes("</p>"); }
        };