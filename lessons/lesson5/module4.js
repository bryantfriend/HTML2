window.Lessons.lesson5.modules[3] = {
            title: "4. href attribute",
            body: `<p>An anchor tag is useless without a destination. We use the <code>href</code> (hypertext reference) attribute to give it an address.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type exactly: href="url"</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="55" width="160" height="30" rx="4" fill="#0a0b1e" stroke="#00f2ff" stroke-width="2"/><text x="120" y="75" fill="#00f2ff" font-family="monospace" font-size="16" text-anchor="middle">href="..."</text></svg>`,
            initialCode: "",
            progress: 20,
            validator: function (code) { return code.toLowerCase().includes("href="); }
        };