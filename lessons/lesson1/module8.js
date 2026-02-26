window.Lessons.lesson1.modules[7] = {
    title: "8. The DOCTYPE Declaration 📜",
    body: `<p>Every HTML file should start with <code>&lt;!DOCTYPE html&gt;</code>. It's like a shout to the browser: "HEY! THIS IS AN HTML5 DOCUMENT!"</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Type the DOCTYPE declaration at the very top of the file.</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="30" width="160" height="90" fill="none" stroke="#f59e0b" stroke-width="2" stroke-dasharray="5 5"/><text x="120" y="80" fill="#f59e0b" font-family="monospace" font-size="14" text-anchor="middle" font-weight="bold"><!DOCTYPE html></text></svg>`,
    initialCode: "<html>\n<head>\n  <title>My Site</title>\n</head>\n<body>\n  \n</body>\n</html>",
    progress: 40,
    validator: function (code) { return code.toLowerCase().trim().startsWith("<!doctype html>"); }
};