window.Lessons.lesson5.modules[11] = {
            title: "12. About page concept",
            body: `<p>A secondary page gives more information without cluttering the Home page.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type "ABOUT".</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><circle cx="120" cy="50" r="15" fill="#ff00e5"/><path d="M100 100 Q120 70 140 100" stroke="#ff00e5" stroke-width="5" fill="none"/></svg>`,
            initialCode: "",
            progress: 60,
            validator: function (code) { return code.toUpperCase().includes("ABOUT"); }
        };