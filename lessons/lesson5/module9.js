window.Lessons.lesson5.modules[8] = {
            title: "9. Linking to another file",
            body: `<p>If we have a file called <code>about.html</code>, pointing to it is easy: <code>href="about.html"</code>.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Change the href to link to "about.html".</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="120" y="80" fill="#00ff9d" font-family="monospace" font-size="14" text-anchor="middle">href="about.html"</text></svg>`,
            initialCode: `<a href="">Go to about page</a>`,
            progress: 45,
            validator: function (code) { return code.toLowerCase().includes("href=\"about.html\""); }
        };