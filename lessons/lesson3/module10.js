window.Lessons.lesson3.modules[9] = {
            title: "10. Lists for favorites",
            body: `<p>Unordered lists are great for groups of items that don't need a specific ranking, like a grocery list or favorites.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type "FAVORITES".</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><path d="M120 40 L140 80 L180 85 L150 115 L160 150 L120 130 L80 150 L90 115 L60 85 L100 80 Z" fill="#ff00e5"/></svg>`,
            initialCode: "",
            progress: 50,
            validator: function (code) { return code.toUpperCase().includes("FAVORITES"); }
        };