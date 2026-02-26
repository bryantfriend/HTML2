window.Lessons.lesson3.modules[0] = {
            title: "1. Why lists are useful",
            body: `<p>Lists organize text, making it much easier to read than a giant block of paragraphs. Humans love bullet points!</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type "ORGANIZE" to proceed.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="60" y="30" width="120" height="10" fill="#00ff9d" rx="2"/><rect x="60" y="50" width="100" height="10" fill="#00ff9d" rx="2"/><rect x="60" y="70" width="140" height="10" fill="#00ff9d" rx="2"/></svg>`,
            initialCode: "",
            progress: 5,
            validator: function (code) { return code.toUpperCase().includes("ORGANIZE"); }
        };