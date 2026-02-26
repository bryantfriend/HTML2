window.Lessons.lesson1.modules[4] = {
    title: "5. The <head> Tag — The Brain 🧠",
    body: `<p>The <code>&lt;head&gt;</code> tag is like the brain of the website. It contains information that <strong>doesn't show up</strong> on the page itself, like the title of the tab or special settings.</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Type "&lt;head&gt;" to start building your site's brain.</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><circle cx="120" cy="75" r="40" fill="none" stroke="#34d399" stroke-width="3"/><path d="M100 65 Q120 45 140 65" fill="none" stroke="#34d399" stroke-width="2"/></svg>`,
    initialCode: "",
    progress: 25,
    validator: function (code) { return code.toLowerCase().includes("<head>"); }
};