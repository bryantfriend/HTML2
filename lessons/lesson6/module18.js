window.Lessons.lesson6.modules[17] = {
            title: "18. Make page personal",
            body: `<p>The beauty of the web is customizability. If you want a pink background and hot-pink centered text, do it!</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Change the background-color to pink.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="200" height="110" fill="pink"/><text x="120" y="80" fill="#ff00e5" font-weight="bold" font-size="24" text-anchor="middle">PINK!</text></svg>`,
            initialCode: "<style>\n  body {\n    background-color: white;\n  }\n</style>",
            progress: 90,
            validator: function (code) { return code.toLowerCase().includes("pink"); }
        };