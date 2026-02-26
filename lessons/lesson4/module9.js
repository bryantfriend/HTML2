window.Lessons.lesson4.modules[8] = {
            title: "9. Width vs height",
            body: `<p>You can set both width and height to squish or stretch an image. It's usually a bad idea, as they look distorted.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Set the width to "300" and the height to "50" to make a weird stretched image.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><ellipse cx="120" cy="75" rx="80" ry="20" fill="none" stroke="#ff00e5" stroke-width="3"/><text x="120" y="80" fill="white" font-size="10" text-anchor="middle">S Q U I S H E D</text></svg>`,
            initialCode: `<img src="https://via.placeholder.com/150" alt="Square">`,
            progress: 45,
            validator: function (code) { return code.toLowerCase().includes("width") && code.toLowerCase().includes("height"); }
        };