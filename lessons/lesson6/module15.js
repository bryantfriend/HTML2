window.Lessons.lesson6.modules[14] = {
            title: "15. Apply background color",
            body: `<p>Wait, if the background is black, we can't see the text! This is because default text is black.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Confirm this by typing: "INVISIBLE".</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="200" height="110" fill="black"/><text x="120" y="80" fill="white" font-size="14" text-anchor="middle">Where am I?</text></svg>`,
            initialCode: "",
            progress: 75,
            validator: function (code) { return code.toUpperCase().includes("INVISIBLE"); }
        };