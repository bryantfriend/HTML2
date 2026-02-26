window.Lessons.lesson2.modules[0] = {
            title: "1. Text is the heart of websites",
            body: `<p>Graphics and design are awesome, but text is how we communicate meaning and information across the web.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type "TEXT" to acknowledge.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="40" width="160" height="70" rx="4" fill="#161b33" stroke="#00f2ff" stroke-width="2"/><text x="120" y="80" fill="#00f2ff" font-family="monospace" font-size="16" text-anchor="middle">HELLO WORLD</text></svg>`,
            initialCode: "",
            progress: 5,
            validator: function (code) { return code.toUpperCase().includes("TEXT"); }
        };