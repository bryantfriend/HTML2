window.Lessons.lesson3.modules[17] = {
            title: "18. Make page neat",
            body: `<p>Clean code means a clean website. Programmers spend 10% of their time writing code and 90% reading it.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type "CLEAN CODE".</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="120" y="80" fill="#00ff9d" font-family="monospace" font-size="18" text-anchor="middle">CLEAN CODE</text></svg>`,
            initialCode: "",
            progress: 90,
            validator: function (code) { return code.toUpperCase().includes("CLEAN CODE"); }
        };