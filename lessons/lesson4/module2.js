window.Lessons.lesson4.modules[1] = {
            title: "2. Image file types",
            body: `<p>The web primarily uses three types of image files: <strong>.jpg</strong> (photos). <strong>.png</strong> (graphics with transparency). <strong>.gif</strong> (animations).</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type "JPG PNG GIF".</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="120" y="50" fill="white" font-size="16" text-anchor="middle">.JPG</text><text x="120" y="80" fill="white" font-size="16" text-anchor="middle">.PNG</text><text x="120" y="110" fill="white" font-size="16" text-anchor="middle">.GIF</text></svg>`,
            initialCode: "",
            progress: 10,
            validator: function (code) { return code.toUpperCase().includes("JPG PNG GIF"); }
        };