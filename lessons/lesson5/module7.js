window.Lessons.lesson5.modules[6] = {
            title: "7. Opening new tab",
            body: `<p>Sometimes you don't want the user to leave your page. Add <code>target="_blank"</code> to your link to make it open in a brand new tab!</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Add target="_blank" to the link.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="40" width="100" height="70" fill="none" stroke="#444" stroke-width="2"/><rect x="80" y="60" width="100" height="70" fill="#0a0b1e" stroke="#ff00e5" stroke-width="2"/><text x="130" y="100" fill="white" font-size="12" text-anchor="middle">NEW TAB</text></svg>`,
            initialCode: `<a href="https://example.com">Visit Example</a>`,
            progress: 35,
            validator: function (code) { return code.toLowerCase().includes("target=\"_blank\""); }
        };