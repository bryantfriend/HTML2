window.Lessons.lesson4.modules[4] = {
            title: "5. File location basics",
            body: `<p>If the image file is saved in the exact same folder as your HTML file on your computer, you can just use the name: <code>src="dog.jpg"</code>.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Include dog.jpg as the src in an img tag.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="40" width="160" height="70" fill="none" stroke="#fff" stroke-dasharray="4"/><text x="120" y="80" fill="#ff00e5" font-family="monospace" font-size="14" text-anchor="middle">dog.jpg</text></svg>`,
            initialCode: `<img src="">`,
            progress: 25,
            validator: function (code) { return code.toLowerCase().includes("src=\"dog.jpg\""); }
        };