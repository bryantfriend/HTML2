window.Lessons.lesson4.modules[9] = {
            title: "10. Keeping proportions",
            body: `<p>Pro-tip: Only set the width OR the height, not both! The browser will automatically calculate the other one so the image retains its proportions perfectly.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Remove the height attribute so the image looks normal again.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="70" y="25" width="100" height="100" fill="none" stroke="#00ff9d" stroke-width="3"/><text x="120" y="80" fill="#00ff9d" font-size="16" text-anchor="middle">PERFECT</text></svg>`,
            initialCode: `<img src="https://via.placeholder.com/150" width="100" height="20" alt="Square">`,
            progress: 50,
            validator: function (code) { return code.toLowerCase().includes("width=\"100\"") && !code.toLowerCase().includes("height"); }
        };