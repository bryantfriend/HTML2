window.Lessons.lesson5.modules[17] = {
            title: "18. Test navigation",
            body: `<p>Always test your links. Click them all. It is very easy to make a typo and link to nowhere.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Fix the typo in the href below.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="120" y="80" fill="red" font-family="monospace" font-size="16" text-anchor="middle">404 NOT FOUND</text></svg>`,
            initialCode: `<a href="inxdex.html">Go Home</a>`,
            progress: 90,
            validator: function (code) { return code.toLowerCase().includes("href=\"index.html\""); }
        };