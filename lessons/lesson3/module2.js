window.Lessons.lesson3.modules[1] = {
            title: "2. List types overview",
            body: `<p>There are two main types of lists in HTML: <strong>Unordered</strong> (bullet points) and <strong>Ordered</strong> (numbers).</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type "UL OL".</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="120" y="60" fill="white" font-size="20" text-anchor="middle">1. Ordered</text><text x="120" y="90" fill="white" font-size="20" text-anchor="middle">• Unordered</text></svg>`,
            initialCode: "",
            progress: 10,
            validator: function (code) { return code.toUpperCase().includes("UL OL"); }
        };