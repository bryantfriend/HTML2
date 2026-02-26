window.Lessons.lesson4.modules[10] = {
            title: "11. Placing images on page",
            body: `<p>Where you type the image code determines where it shows up. If you put it after a paragraph, the image will appear below the paragraph.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type "PLACEMENT".</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="120" y="40" fill="white" font-size="14" text-anchor="middle">TEXT ABOVE</text><rect x="80" y="60" width="80" height="60" fill="#00f2ff"/><text x="120" y="140" fill="white" font-size="14" text-anchor="middle">TEXT BELOW</text></svg>`,
            initialCode: "",
            progress: 55,
            validator: function (code) { return code.toUpperCase().includes("PLACEMENT"); }
        };