window.Lessons.lesson4.modules[14] = {
            title: "15. Teacher demo",
            body: `<p>Pay attention as the teacher searches for a free-to-use image online, copies the Image Link (URL), and embeds it.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type "COPY URL".</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><circle cx="120" cy="75" r="20" fill="#00ff9d" class="pulse-cyan"/><text x="120" y="115" fill="white" font-size="12" text-anchor="middle">COPY IMG LINK</text></svg>`,
            initialCode: "",
            progress: 75,
            validator: function (code) { return code.toUpperCase().includes("COPY URL"); }
        };