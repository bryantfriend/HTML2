const fs = require('fs');
const path = require('path');

const outDir = 'lessons/lesson6';
if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
}

fs.writeFileSync(path.join(outDir, 'metadata.js'), `window.Lessons = window.Lessons || {};
window.Lessons.lesson6 = {
    id: "lesson6",
    title: "Lesson 6: Semantic HTML",
    description: "Learn to build properly structured websites that search engines love!",
    gameTitle: "Structure Safari",
    gamePath: "minigames/game6.html",
    modules: []
};`);

const modules = [
    {
        title: "1. The <div> Soup",
        body: "We learned about `<div>`. They are great for grouping things, but what if a website is just 500 `<div>` tags? That's confusing for everyone, especially screen readers. We need meaning!",
        mission: "Type READY to begin.",
        initialCode: "<!-- Ready? -->",
        validator: `function(code) { return code.toUpperCase().includes("READY"); }`
    },
    {
        title: "2. The <header> Tag",
        body: "Instead of `<div id=\"header\">`, we should use the built-in `<header>` tag. It means 'this is the top part of the page'.",
        mission: "Create an opening and closing `<header>` tag.",
        initialCode: "",
        validator: `function(code) { return code.includes("<header>") && code.includes("</header>"); }`
    },
    {
        title: "3. The Navigation Bar",
        body: "Inside the header, we usually have a menu. The `<nav>` (navigation) tag tells browsers that this section contains links to other pages.",
        mission: "Put `<nav>` inside the `<header>`.",
        initialCode: "<header>\n</header>",
        validator: `function(code) { return code.includes("<nav>") && code.includes("</nav>"); }`
    },
    {
        title: "4. Building the Menu",
        body: "To make a real menu, we combine `<nav>` with the unordered list `<ul>` we learned earlier!",
        mission: "Add a `<ul>` with two `<li>` items inside the `<nav>`.",
        initialCode: "<header>\n  <nav>\n  </nav>\n</header>",
        validator: `function(code) { return code.includes("<ul>") && (code.match(/<li>/gi)||[]).length >= 2; }`
    },
    {
        title: "5. The <main> Tag",
        body: "The core content of your webpage should be wrapped in the `<main>` tag. There should only be ONE `<main>` tag per page.",
        mission: "Add an opening and closing `<main>` tag below the header.",
        initialCode: "<header>\n  <nav><ul><li>Home</li></ul></nav>\n</header>\n\n",
        validator: `function(code) { return code.includes("<main>") && code.includes("</main>"); }`
    },
    {
        title: "6. The <article> Tag",
        body: "Inside the `<main>` area, you might have a blog post, a news story, or a product. This independent piece of content is an `<article>`.",
        mission: "Put an `<article>` tag inside `<main>`.",
        initialCode: "<main>\n</main>",
        validator: `function(code) { return code.includes("<article>"); }`
    },
    {
        title: "7. Article Headlines",
        body: "Every article should have a headline. We use `<h2>` for this because `<h1>` is usually for the main title of the page.",
        mission: "Add an `<h2>` inside the article.",
        initialCode: "<article>\n</article>",
        validator: `function(code) { return code.includes("<h2>"); }`
    },
    {
        title: "8. The <section> Tag",
        body: "If your page has different parts (like 'About Us', 'Services', 'Contact'), use the `<section>` tag to separate them.",
        mission: "Create a `<section>` tag.",
        initialCode: "",
        validator: `function(code) { return code.includes("<section>") && code.includes("</section>"); }`
    },
    {
        title: "9. Sections vs Articles",
        body: "A `<section>` groups related things together. An `<article>` makes sense all on its own. Often, an article contains multiple sections!",
        mission: "Put two `<section>` tags inside the `<article>`.",
        initialCode: "<article>\n  <h2>My Blog</h2>\n</article>",
        validator: `function(code) { return (code.match(/<section>/gi)||[]).length >= 2; }`
    },
    {
        title: "10. The <aside> Tag",
        body: "Sometimes you have content that is related but not the main event (like a sidebar, ads, or recommended links). Use `<aside>`.",
        mission: "Add an `<aside>` next to the `<article>`.",
        initialCode: "<main>\n  <article>\n  </article>\n</main>",
        validator: `function(code) { return code.includes("<aside>"); }`
    },
    {
        title: "11. The <footer> Tag",
        body: "At the very bottom of the page, we have the `<footer>`. This usually contains copyright info or legal links.",
        mission: "Add a `<footer>` at the bottom, outside of `<main>`.",
        initialCode: "<main>\n  <article></article>\n</main>\n",
        validator: `function(code) { return code.includes("<footer>"); }`
    },
    {
        title: "12. Semantic Web Layout",
        body: "Let's build a mini-page structure! A header, main, and footer.",
        mission: "Write `<header>`, `<main>`, and `<footer>` in order.",
        initialCode: "",
        validator: `function(code) { return code.includes("<header") && code.includes("<main") && code.includes("<footer"); }`
    },
    {
        title: "13. What about Tables?",
        body: "Sometimes you need to show grid data, like a calendar or a roster. For this, we use the `<table>` tag.",
        mission: "Create a `<table>`.",
        initialCode: "",
        validator: `function(code) { return code.includes("<table>") && code.includes("</table>"); }`
    },
    {
        title: "14. Table Rows",
        body: "Inside a table, we add Rows using the `<tr>` (Table Row) tag.",
        mission: "Add one `<tr>` inside the table.",
        initialCode: "<table>\n</table>",
        validator: `function(code) { return code.includes("<tr>"); }`
    },
    {
        title: "15. Table Data",
        body: "Inside a row, we add cells using the `<td>` (Table Data) tag.",
        mission: "Add two `<td>` cells inside the row.",
        initialCode: "<table>\n  <tr>\n  </tr>\n</table>",
        validator: `function(code) { return (code.match(/<td>/gi)||[]).length >= 2; }`
    },
    {
        title: "16. Table Headers",
        body: "If the first row is labels (like 'Name' and 'Age'), use `<th>` (Table Header) instead of `<td>` so it's bold!",
        mission: "Change the `<td>` tags to `<th>` tags.",
        initialCode: "<table>\n  <tr>\n    <td>Name</td>\n    <td>Age</td>\n  </tr>\n</table>",
        validator: `function(code) { return code.includes("<th>"); }`
    },
    {
        title: "17. A Full Table",
        body: "Let's make a two-row table. Row 1: Headers. Row 2: Data.",
        mission: "Add another `<tr>` with two `<td>` elements.",
        initialCode: "<table>\n  <tr>\n    <th>Hero</th>\n    <th>Power</th>\n  </tr>\n</table>",
        validator: `function(code) { return (code.match(/<tr>/gi)||[]).length >= 2 && code.includes("<td>"); }`
    },
    {
        title: "18. Accessibility in Tables",
        body: "Always describe your table by putting a `<caption>` right inside the `<table>` tag.",
        mission: "Add `<caption>My Heroes</caption>`.",
        initialCode: "<table>\n  <tr>\n    <th>Hero</th>\n  </tr>\n</table>",
        validator: `function(code) { return code.includes("<caption>"); }`
    },
    {
        title: "19. Grouping Table Sections",
        body: "Just like a whole page, tables have `<thead>`, `<tbody>`, and `<tfoot>` to group rows together semantically.",
        mission: "Wrap the first row in `<thead>` and the second in `<tbody>`.",
        initialCode: "<table>\n  <tr><th>Hero</th></tr>\n  <tr><td>Batman</td></tr>\n</table>",
        validator: `function(code) { return code.includes("<thead>") && code.includes("<tbody>"); }`
    },
    {
        title: "20. Challenge: The Perfect Semantic Page",
        body: "Ready to prove you're a master? Build a valid, semantic webpage shell.",
        mission: "Create a page with a `<header>`, a `<nav>`, a `<main>`, an `<article>`, and a `<footer>`.",
        initialCode: "<!-- Build the semantic shell! -->\n",
        validator: `function(code) { return code.includes("<header") && code.includes("<nav") && code.includes("<main") && code.includes("<article") && code.includes("<footer"); }`
    }
];

modules.forEach((mod, i) => {
    const fileContent = `window.Lessons.lesson6.modules[${i}] = {
    title: "${mod.title}",
    body: \`<p>${mod.body}</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: ${mod.mission}</p>\`,
    svg: \`<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" style="background:#1e293b; border-radius:8px;">
        <rect x="40" y="30" width="160" height="90" fill="none" stroke="#fde047" stroke-width="4" rx="4"/>
        <text x="120" y="80" fill="#fde047" font-family="sans-serif" font-size="16" text-anchor="middle">MODULE ${i + 1}</text>
    </svg>\`,
    widgetCode: \`<!-- INTERACTIVE MODULE -->
<script>
(function() {
    const editor = document.getElementById('code-editor');
    if (editor) {
        editor.readOnly = false;
        editor.style.opacity = "1";
    }
})();
</script>\`,
    initialCode: \`${mod.initialCode.replace(/`/g, '\\`').replace(/\n/g, '\\n')}\`,
    progress: ${(i + 1) * 5},
    validator: ${mod.validator}
};`;

    fs.writeFileSync(path.join(outDir, 'module' + (i + 1) + '.js'), fileContent);
});

console.log("Successfully generated lesson6 modules!");
