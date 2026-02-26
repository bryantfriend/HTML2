window.Lessons.intro.modules[9] = {
            title: "10. Tags = building blocks 🧱",
            body: `<p>HTML is built with <strong>Tags</strong>. Tags are special keywords wrapped in angle brackets.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type a left angle bracket < and right angle bracket >.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="80" y="90" fill="#00f2ff" font-size="50" font-weight="bold">&lt;</text><text x="140" y="90" fill="#ff00e5" font-size="50" font-weight="bold">&gt;</text></svg>`,
            initialCode: "",
            progress: 50,
            validator: function (code) { return code.includes("<") && code.includes(">"); }
        };