window.Lessons.lesson5.modules[7] = {
            title: "8. Internal links (same site)",
            body: `<p>If you build two HTML files in the same folder, you can link them together by just typing their filenames.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type "INTERNAL".</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="40" width="60" height="70" fill="none" stroke="#00f2ff" stroke-width="2"/><rect x="140" y="40" width="60" height="70" fill="none" stroke="#00f2ff" stroke-width="2"/><path d="M100 75 Q 120 40 140 75" fill="none" stroke="white" stroke-width="2"/><polygon points="140,75 130,65 130,85" fill="white"/></svg>`,
            initialCode: "",
            progress: 40,
            validator: function (code) { return code.toUpperCase().includes("INTERNAL"); }
        };