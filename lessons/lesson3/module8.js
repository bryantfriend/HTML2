window.Lessons.lesson3.modules[7] = {
            title: "8. Nested lists (optional simple)",
            body: `<p>You can even put lists INSIDE lists to create sub-bullets. Just put a <code>&lt;ul&gt;</code> inside an <code>&lt;li&gt;</code>.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type "NESTED".</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="60" y="50" fill="white" font-size="16">• Main Task</text><text x="80" y="80" fill="#00f2ff" font-size="14">◦ Sub task A</text><text x="80" y="110" fill="#00f2ff" font-size="14">◦ Sub task B</text></svg>`,
            initialCode: "",
            progress: 40,
            validator: function (code) { return code.toUpperCase().includes("NESTED"); }
        };