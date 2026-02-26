window.Lessons.lesson3.modules[10] = {
            title: "11. Teacher demo",
            body: `<p>Watch the projector. The teacher is about to build a list and demonstrate an important concept.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type "WATCH".</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="30" width="160" height="90" fill="none" stroke="#00f2ff" stroke-width="2"/><circle cx="120" cy="75" r="20" fill="#00f2ff" class="pulse-cyan"/></svg>`,
            initialCode: "",
            progress: 55,
            validator: function (code) { return code.toUpperCase().includes("WATCH"); }
        };