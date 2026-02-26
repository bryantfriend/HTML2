window.Lessons.lesson6.modules[5] = {
            title: "6. <style> tag intro",
            body: `<p>We place CSS rules inside a <code>&lt;style&gt;</code> tag, usually inside the <code>&lt;head&gt;</code> of our document.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Create a &lt;style&gt; tag inside the head.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="120" y="80" fill="#ff00e5" font-family="monospace" font-size="20" font-weight="bold" text-anchor="middle">&lt;style&gt;</text></svg>`,
            initialCode: "<html>\n  <head>\n    \n  </head>\n</html>",
            progress: 30,
            validator: function (code) { return code.toLowerCase().includes("<style>") && code.toLowerCase().includes("</style>") && code.indexOf("<style>") > code.indexOf("<head>"); }
        };