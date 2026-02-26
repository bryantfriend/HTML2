window.Lessons.lesson6.modules[10] = {
            title: "11. Matching colors",
            body: `<p>Try to pick 1 background color, 1 main text color, and 1 highlight color for your headings.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type "PALETTE".</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="200" height="110" fill="#2d3436"/><text x="120" y="60" fill="#ff7675" font-family="sans-serif" font-weight="bold" font-size="20" text-anchor="middle">RED ALERT</text><text x="120" y="100" fill="#dfe6e9" font-family="sans-serif" font-size="14" text-anchor="middle">Normal body text.</text></svg>`,
            initialCode: "",
            progress: 55,
            validator: function (code) { return code.toUpperCase().includes("PALETTE"); }
        };