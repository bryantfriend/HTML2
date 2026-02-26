window.Lessons.lesson5.modules[16] = {
            title: "17. Link pages together 🔄",
            body: `<p>When you have 2 pages pointing to each other, you have officially built an interconnected system!</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type "CYCLE".</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><circle cx="120" cy="75" r="40" fill="none" stroke="#00f2ff" stroke-width="4"/><polygon points="120,30 130,40 110,40" fill="#00f2ff"/><polygon points="120,120 110,110 130,110" fill="#00f2ff"/></svg>`,
            initialCode: "",
            progress: 85,
            validator: function (code) { return code.toUpperCase().includes("CYCLE"); }
        };