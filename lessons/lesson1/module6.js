window.Lessons.lesson1.modules[5] = {
  title: "6. The <body> Tag — The Content 🏠",
  body: `<p>The <code>&lt;body&gt;</code> tag is where the magic happens. Everything you see on a website—text, images, buttons—must live inside the body.</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Write a &lt;body&gt; tag.</p>`,
  svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="60" y="40" width="120" height="80" rx="10" fill="none" stroke="#d946ef" stroke-width="3"/></svg>`,
  initialCode: "",
  progress: 30,
  validator: function (code) { return code.toLowerCase().includes("<body>"); }
};