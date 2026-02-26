window.Lessons.lesson2.modules[10] = {
            title: "11. Emphasis tags",
            body: `<p>Like strong, <code>&lt;em&gt;</code> makes text italic but gives it "semantic importance". It's the proper way to emphasize a word.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Wrap the word "really" in &lt;em&gt; tags.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="120" y="80" fill="#00ff9d" font-family="sans-serif" font-size="24" font-style="italic" text-anchor="middle">EMPHASIS</text></svg>`,
            initialCode: "<p>I really need a nap.</p>",
            progress: 55,
            validator: function (code) { return code.toLowerCase().includes("<em>really</em>"); }
        };