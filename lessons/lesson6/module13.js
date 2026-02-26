window.Lessons.lesson6.modules[12] = {
            title: "13. Teacher demo",
            body: `<p>Watch the teacher apply a dark mode style to a basic HTML page using the concepts we just learned.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type "DARK MODE".</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><circle cx="120" cy="75" r="30" fill="gray"/><path d="M120 45 A 30 30 0 0 1 120 105 A 20 20 0 0 0 120 45" fill="black"/></svg>`,
            initialCode: "",
            progress: 65,
            validator: function (code) { return code.toUpperCase().includes("DARK MODE"); }
        };