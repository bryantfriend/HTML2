window.Lessons.lesson4.modules[0] = {
            title: "1. Why images matter 🖼️",
            body: `<p>A picture is worth a thousand words. Text provides information, but images provide emotion, context, and beauty.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type "PICTURE" to start embedding visuals.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="30" width="160" height="90" rx="4" fill="none" stroke="#00f2ff" stroke-width="2"/><circle cx="120" cy="75" r="30" fill="#00f2ff" class="pulse-cyan"/><polygon points="90,120 120,80 160,120" fill="#ff00e5"/></svg>`,
            initialCode: "",
            progress: 5,
            validator: function (code) { return code.toUpperCase().includes("PICTURE"); }
        };