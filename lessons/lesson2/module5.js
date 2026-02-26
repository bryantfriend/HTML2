window.Lessons.lesson2.modules[4] = {
            title: "5. <h2>–<h6> hierarchy",
            body: `<p>H2 is for major sections. H3 for sub-sections. It creates an organized hierarchy like an outline.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type an &lt;h2&gt; tag.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="30" width="160" height="20" fill="#ff00e5"/><rect x="60" y="60" width="140" height="15" fill="#00f2ff"/><rect x="80" y="85" width="120" height="10" fill="#00ff9d"/></svg>`,
            initialCode: "",
            progress: 25,
            validator: function (code) { return code.toLowerCase().includes("<h2>"); }
        };