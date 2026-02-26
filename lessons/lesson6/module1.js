window.Lessons.lesson6.modules[0] = {
            title: "1. Simple design intro",
            body: `<p>HTML builds the skeleton, but CSS (Cascading Style Sheets) gives it skin and clothes! It's time to make our pages look awesome.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type "STYLE" to begin.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="60" y="30" width="120" height="90" rx="8" fill="#161b33" stroke="#ff00e5" stroke-width="4"/><circle cx="120" cy="75" r="20" fill="#00f2ff"/></svg>`,
            initialCode: "",
            progress: 5,
            validator: function (code) { return code.toUpperCase().includes("STYLE"); }
        };