window.Lessons.lesson5.modules[4] = {
            title: "5. External links",
            body: `<p>Let's create an external link (a link going to a different website on the internet, like Google).</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Create a complete link pointing to https://google.com.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="120" y="80" fill="#00ff9d" font-family="monospace" font-size="14" text-anchor="middle">EXTERNAL SITE</text></svg>`,
            initialCode: `<a href="">Go to Google</a>`,
            progress: 25,
            validator: function (code) { return code.toLowerCase().includes("href=\"https://google.com\""); }
        };