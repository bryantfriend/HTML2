window.Lessons.lesson6.modules[13] = {
            title: "14. Choose a color theme 🎨",
            body: `<p>Time to build your site styles! Pick a background color for your body. Let's start with 'black'.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Write body { background-color: black; }.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="40" width="140" height="70" fill="black" stroke="#ff00e5" stroke-width="2"/></svg>`,
            initialCode: "<style>\n  \n</style>\n<p>Help I can't be seen.</p>",
            progress: 70,
            validator: function (code) { return code.toLowerCase().includes("background-color") && code.toLowerCase().includes("black"); }
        };