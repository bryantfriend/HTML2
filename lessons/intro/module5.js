window.Lessons.intro.modules[4] = {
    title: "5. Typing Tags: <html></html>",
    body: `<p>HTML stands for <strong>HyperText Markup Language</strong>. Tags usually come in pairs: an <strong>opening tag</strong> <code>&lt;html&gt;</code> and a <strong>closing tag</strong> <code>&lt;/html&gt;</code>.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type both the opening and closing html tags: <code>&lt;html&gt;&lt;/html&gt;</code></p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="120" y="85" fill="#00ff9d" font-family="monospace" font-size="30" font-weight="bold" text-anchor="middle" letter-spacing="2">&lt;html&gt;&lt;/html&gt;</text></svg>`,
    initialCode: "",
    progress: 25,
    validator: function (code) {
        const clean = code.replace(/\s/g, '').toLowerCase();
        return clean.includes("<html></html>");
    }
};