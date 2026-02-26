window.Lessons.lesson5.modules[5] = {
            title: "6. Safe linking practices",
            body: `<p>Never link to suspicious files or unknown websites. Hackers use bad links to spread malware through the web!</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type "SAFE".</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="50" width="60" height="50" fill="none" stroke="#00ff9d" stroke-width="4"/><path d="M100 50 A 20 20 0 0 1 140 50" fill="none" stroke="#00ff9d" stroke-width="4"/><circle cx="120" cy="75" r="5" fill="#00ff9d"/></svg>`,
            initialCode: "",
            progress: 30,
            validator: function (code) { return code.toUpperCase().includes("SAFE"); }
        };