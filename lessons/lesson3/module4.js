window.Lessons.lesson3.modules[3] = {
            title: "4. Bullet points",
            body: `<p>Every item inside the <code>&lt;ul&gt;</code> will automatically get a little black circle (a bullet point) next to it.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type "BULLETS".</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="75" r="10" fill="#00ff9d" class="pulse-cyan"/><text x="120" y="80" fill="white" font-size="20">Item</text></svg>`,
            initialCode: "",
            progress: 20,
            validator: function (code) { return code.toUpperCase().includes("BULLETS"); }
        };