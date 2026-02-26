window.Lessons.lesson4.modules[6] = {
            title: "7. alt text explained",
            body: `<p>Always include the <strong>alt</strong> (alternative text) attribute. If the image fails to load, or a blind person uses a screen reader, it reads the alt text!</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Add an alt attribute describing the broken image.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="60" y="40" width="120" height="70" fill="none" stroke="#666" stroke-dasharray="2"/><text x="120" y="80" fill="white" font-family="monospace" font-size="12" text-anchor="middle">X Broken File</text></svg>`,
            initialCode: `<img src="fake.jpg">`,
            progress: 35,
            validator: function (code) { return code.toLowerCase().includes("alt="); }
        };