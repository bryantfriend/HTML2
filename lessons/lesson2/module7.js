window.Lessons.lesson2.modules[6] = {
            title: "7. Line breaks <br>",
            body: `<p>The <code>&lt;br&gt;</code> tag forces text to drop to the next line. It is an "empty" tag, meaning it needs no closing tag.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Place a &lt;br&gt; between the words "Drop" and "Down".</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="120" y="60" fill="white" font-family="monospace" font-size="16" text-anchor="middle">DROP</text><path d="M140 65 L140 95 L130 85 M140 95 L150 85" fill="none" stroke="#00f2ff" stroke-width="2"/><text x="120" y="110" fill="#00f2ff" font-family="monospace" font-size="16" text-anchor="middle">DOWN</text></svg>`,
            initialCode: "<p>Drop Down</p>",
            progress: 35,
            validator: function (code) { return code.toLowerCase().includes("drop<br>down") || code.toLowerCase().includes("drop <br> down"); }
        };