window.Lessons.intro.modules[4] = {
    title: "5. Typing Tags: <html></html>",
    body: `<p>HTML stands for <strong>HyperText Markup Language</strong>. Tags usually come in pairs: an <strong>opening tag</strong> <code>&lt;html&gt;</code> and a <strong>closing tag</strong> <code>&lt;/html&gt;</code>.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type both the opening and closing html tags: <code>&lt;html&gt;&lt;/html&gt;</code></p>`,
    svg: ``,
    initialCode: "",
    progress: 25,
    validator: function (code) {
        const clean = code.replace(/\s/g, '').toLowerCase();
        return clean.includes("<html></html>");
    }
};