window.Lessons.lesson6.modules[18] = {
            title: "19. Final polish",
            body: `<p>Take your most complete HTML file from earlier lessons, drop a <code>&lt;style&gt;</code> block in the <code>&lt;head&gt;</code>, and give it your custom theme.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type "POLISHED".</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><circle cx="120" cy="75" r="40" fill="gold"/><path d="M100 80 L115 95 L145 65" fill="none" stroke="white" stroke-width="6" stroke-linecap="round"/></svg>`,
            initialCode: "",
            progress: 95,
            validator: function (code) { return code.toUpperCase().includes("POLISHED"); }
        };