window.Lessons.lesson2.modules[15] = {
            title: "16. Teacher example",
            body: `<p>Look at the teacher's example of a short, well-structured "About Me" page with H1, H2, and bold text.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type "LOOK" whilst watching the projector!</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><path d="M60 75 Q120 20 180 75 Q120 130 60 75" fill="none" stroke="#00f2ff" stroke-width="4"/><circle cx="120" cy="75" r="15" fill="#00f2ff"/></svg>`,
            initialCode: "",
            progress: 80,
            validator: function (code) { return code.toUpperCase().includes("LOOK"); }
        };