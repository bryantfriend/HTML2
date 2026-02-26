window.Lessons.lesson2.modules[2] = {
            title: "3. Headings overview",
            body: `<p>Headings are titles for different sections of your page. HTML gives us 6 levels: H1 through H6.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type "H1 TO H6".</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="40" y="60" fill="white" font-size="24" font-weight="bold">H1</text><text x="80" y="60" fill="white" font-size="20">H2</text><text x="120" y="60" fill="white" font-size="16">H3</text><text x="160" y="60" fill="white" font-size="12">...</text></svg>`,
            initialCode: "",
            progress: 15,
            validator: function (code) { return code.toUpperCase().includes("H1 TO H6"); }
        };