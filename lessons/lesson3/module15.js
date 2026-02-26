window.Lessons.lesson3.modules[14] = {
            title: "15. Mixing lists + headings",
            body: `<p>Lists look best when they have a title above them. We use headings like <code>&lt;h2&gt;</code> for this.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Put an &lt;h2&gt;Title&lt;/h2&gt; before your list.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="30" width="160" height="20" fill="#00ff9d"/><circle cx="50" cy="70" r="4" fill="white"/><rect x="60" y="66" width="100" height="8" fill="gray"/></svg>`,
            initialCode: "\n<ul>\n  <li>Thing</li>\n</ul>",
            progress: 75,
            validator: function (code) { return code.includes("<h") && code.includes("<ul"); }
        };