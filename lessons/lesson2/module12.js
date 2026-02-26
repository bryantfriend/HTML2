window.Lessons.lesson2.modules[11] = {
            title: "12. Combining tags",
            body: `<p>You can put tags inside tags! Just be sure to close the inner tag before closing the outer tag: <code>&lt;p&gt;&lt;b&gt;Word&lt;/b&gt;&lt;/p&gt;</code></p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type "COMBINE".</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="40" width="160" height="70" fill="none" stroke="#ff00e5" stroke-width="2"/><rect x="60" y="55" width="120" height="40" fill="none" stroke="#00f2ff" stroke-width="2"/></svg>`,
            initialCode: "",
            progress: 60,
            validator: function (code) { return code.toUpperCase().includes("COMBINE"); }
        };