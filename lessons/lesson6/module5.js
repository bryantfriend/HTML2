window.Lessons.lesson6.modules[4] = {
            title: "5. Readability",
            body: `<p>Always ensure high contrast! Yellow text on a white background is almost invisible. Stick to dark on light, or light on dark!</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type "CONTRAST".</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="30" width="90" height="90" fill="white"/><text x="75" y="80" fill="yellow" font-size="14" font-weight="bold" text-anchor="middle">BAD</text><rect x="120" y="30" width="90" height="90" fill="black"/><text x="165" y="80" fill="white" font-size="14" font-weight="bold" text-anchor="middle">GOOD</text></svg>`,
            initialCode: "",
            progress: 25,
            validator: function (code) { return code.toUpperCase().includes("CONTRAST"); }
        };