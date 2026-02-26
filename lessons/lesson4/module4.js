window.Lessons.lesson4.modules[3] = {
            title: "4. src attribute",
            body: `<p>But an <code>&lt;img&gt;</code> tag alone isn't enough. It needs to know WHERE the image is. We tell it using the <strong>src</strong> (source) attribute.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type exactly: src="url"</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="120" y="80" fill="#00f2ff" font-family="monospace" font-size="18" text-anchor="middle">src="..."</text></svg>`,
            initialCode: "",
            progress: 20,
            validator: function (code) { return code.toLowerCase().includes("src="); }
        };