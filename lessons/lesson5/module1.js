window.Lessons.lesson5.modules[0] = {
            title: "1. What is a link?",
            body: `<p>A link (or hyperlink) is a clickable element that magically transports you to another document or section of the web.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type "HYPERLINK".</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="120" y="80" fill="#00f2ff" font-family="monospace" font-size="16" text-decoration="underline" text-anchor="middle">CLICK ME</text><path d="M140 90 L160 110 L150 120" fill="white" stroke="white" stroke-width="2"/></svg>`,
            initialCode: "",
            progress: 5,
            validator: function (code) { return code.toUpperCase().includes("HYPERLINK"); }
        };