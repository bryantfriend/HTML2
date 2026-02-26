window.Lessons.intro.modules[10] = {
            title: "11. Opening vs closing tags",
            body: `<p>Most tags come in pairs. An opening tag creates the start, and the closing tag (with a forward slash) marks the end.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type a forward slash / to unlock the Tag Matcher Mini-Game!</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="40" y="80" fill="#00ff9d" font-family="monospace" font-size="20">&lt;tag&gt;</text><text x="130" y="80" fill="#ff00e5" font-family="monospace" font-size="20">&lt;/tag&gt;</text></svg>`,
            initialCode: "",
            progress: 55,
            validator: function (code) { return code.includes("/"); }
        };