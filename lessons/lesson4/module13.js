window.Lessons.lesson4.modules[12] = {
            title: "13. Image above text",
            body: `<p>What if we want an image banner at the top of the page? Simply place the img tag BEFORE the h1!</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Move the tag so the image is above the heading.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="200" height="40" fill="#00f2ff"/><text x="120" y="90" fill="white" font-size="20" text-anchor="middle">TITLE HERE</text></svg>`,
            initialCode: "<h1>Look at this</h1>\n<img src=\"https://via.placeholder.com/100/00ff9d\">",
            progress: 65,
            validator: function (code) { return code.toLowerCase().includes("<img") && code.indexOf("<img") < code.indexOf("<h1>"); }
        };