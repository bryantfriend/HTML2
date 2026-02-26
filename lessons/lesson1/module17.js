window.Lessons.lesson1.modules[16] = {
    title: "17. Fixing Missing Tags 🛠️",
    body: `<p>A missing tag is one of the most common errors. Browsers try to guess what you meant, but they often get it wrong!</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Add the missing <code>&lt;/body&gt;</code> tag at the bottom of the code editor.</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="40" width="160" height="80" fill="#334155" rx="8"/><text x="120" y="85" fill="#ef4444" font-family="monospace" font-size="20" text-anchor="middle" font-weight="bold">Missing &lt;/&gt;</text></svg>`,
    initialCode: "<html>\n<head>\n  <title>Repair Station</title>\n</head>\n<body>\n  <h1>Repair in Progress...</h1>\n  <p>Help! The body tag wasn't closed!</p>\n\n</html>",
    progress: 85,
    validator: function (code) { return code.toLowerCase().includes("</body>"); }
};