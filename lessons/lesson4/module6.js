window.Lessons.lesson4.modules[5] = {
            title: "6. Using internet images (with caution)",
            body: `<p>You can also grab an image directly from the internet by using its full web address (URL) in the src. (e.g., https://site.com/cat.jpg)</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Give the img tag the provided web URL.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="120" y="80" fill="#00ff9d" font-family="monospace" font-size="16" text-anchor="middle">INTERNET IMAGE</text></svg>`,
            initialCode: "<!-- URL: https://via.placeholder.com/100/ff00e5 -->\n<img>",
            progress: 30,
            validator: function (code) { return code.toLowerCase().includes("https://via.placeholder.com/100/ff00e5"); }
        };