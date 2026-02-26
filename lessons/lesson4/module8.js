window.Lessons.lesson4.modules[7] = {
            title: "8. Image size attributes",
            body: `<p>Sometimes internet images are HUGE! You can control them using the <code>width</code> or <code>height</code> attributes (measured in pixels).</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Give the image a width="200".</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="40" width="160" height="70" fill="none" stroke="#00f2ff" stroke-width="2"/><text x="120" y="30" fill="#00f2ff" font-family="sans-serif" font-size="12" text-anchor="middle">width="..."</text><line x1="40" y1="25" x2="200" y2="25" stroke="#00f2ff"/></svg>`,
            initialCode: `<img src="https://via.placeholder.com/400" alt="Placeholder">`,
            progress: 40,
            validator: function (code) { return code.toLowerCase().includes("width=\"200\""); }
        };