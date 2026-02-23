window.Lessons = window.Lessons || {};
window.Lessons.lesson3 = {
    id: "lesson3",
    title: "03: LESSON 3 — LISTS",
    description: "Organize information using structured lists. [20 MODULES]",
    modules: [
        {
            title: "1. Why lists are useful",
            body: `<p>Lists organize text, making it much easier to read than a giant block of paragraphs. Humans love bullet points!</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type "ORGANIZE" to proceed.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="60" y="30" width="120" height="10" fill="#00ff9d" rx="2"/><rect x="60" y="50" width="100" height="10" fill="#00ff9d" rx="2"/><rect x="60" y="70" width="140" height="10" fill="#00ff9d" rx="2"/></svg>`,
            initialCode: "",
            progress: 5,
            validator: function (code) { return code.toUpperCase().includes("ORGANIZE"); }
        },
        {
            title: "2. List types overview",
            body: `<p>There are two main types of lists in HTML: <strong>Unordered</strong> (bullet points) and <strong>Ordered</strong> (numbers).</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type "UL OL".</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="120" y="60" fill="white" font-size="20" text-anchor="middle">1. Ordered</text><text x="120" y="90" fill="white" font-size="20" text-anchor="middle">• Unordered</text></svg>`,
            initialCode: "",
            progress: 10,
            validator: function (code) { return code.toUpperCase().includes("UL OL"); }
        },
        {
            title: "3. Unordered lists <ul>",
            body: `<p>An unordered list uses the <code>&lt;ul&gt;</code> tag. It tells the browser "I am starting a list, use bullet points."</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Create opening and closing &lt;ul&gt; tags.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="40" width="160" height="70" rx="4" fill="none" stroke="#ff00e5" stroke-width="2"/><text x="45" y="55" fill="#ff00e5" font-family="monospace" font-size="12">&lt;ul&gt;</text><text x="45" y="105" fill="#ff00e5" font-family="monospace" font-size="12">&lt;/ul&gt;</text></svg>`,
            initialCode: "",
            progress: 15,
            validator: function (code) { return code.toLowerCase().includes("<ul>") && code.toLowerCase().includes("</ul>"); }
        },
        {
            title: "4. Bullet points",
            body: `<p>Every item inside the <code>&lt;ul&gt;</code> will automatically get a little black circle (a bullet point) next to it.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type "BULLETS".</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="75" r="10" fill="#00ff9d" class="pulse-cyan"/><text x="120" y="80" fill="white" font-size="20">Item</text></svg>`,
            initialCode: "",
            progress: 20,
            validator: function (code) { return code.toUpperCase().includes("BULLETS"); }
        },
        {
            title: "5. List items <li>",
            body: `<p>To actually put things inside the list, you use the <code>&lt;li&gt;</code> (list item) tag for EACH individual line.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Write a list item saying "Apples".</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="120" y="80" fill="#00f2ff" font-family="monospace" font-size="20" text-anchor="middle">&lt;li&gt;Item&lt;/li&gt;</text></svg>`,
            initialCode: "<ul>\n  \n</ul>",
            progress: 25,
            validator: function (code) { return code.toLowerCase().includes("<li>apples</li>") || code.toLowerCase().includes("apples"); }
        },
        {
            title: "6. Ordered lists <ol>",
            body: `<p>If the sequence matters (like a recipe), use the <code>&lt;ol&gt;</code> (ordered list) tag instead of <code>&lt;ul&gt;</code>.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Change &lt;ul&gt; to &lt;ol&gt;.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="40" width="160" height="70" rx="4" fill="none" stroke="#00ff9d" stroke-width="2"/><text x="45" y="55" fill="#00ff9d" font-family="monospace" font-size="12">&lt;ol&gt;</text><text x="45" y="105" fill="#00ff9d" font-family="monospace" font-size="12">&lt;/ol&gt;</text></svg>`,
            initialCode: "<ul>\n  <li>First</li>\n</ul>",
            progress: 30,
            validator: function (code) { return code.toLowerCase().includes("<ol>") && code.toLowerCase().includes("</ol>"); }
        },
        {
            title: "7. Numbered lists",
            body: `<p>The browser automatically numbers your <code>&lt;li&gt;</code> tags when they are inside an <code>&lt;ol&gt;</code>! No need to type "1. 2. 3."</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Watch the preview as you create 3 list items.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="80" y="60" fill="#ff00e5" font-size="20" font-weight="bold">1.</text><text x="80" y="90" fill="#ff00e5" font-size="20" font-weight="bold">2.</text></svg>`,
            initialCode: "<ol>\n  <li>Wake up</li>\n  <li>Eat</li>\n  <li>Code</li>\n</ol>",
            progress: 35,
            validator: function (code) { return (code.match(/<li>/g) || []).length >= 3 && code.includes("<ol>"); }
        },
        {
            title: "8. Nested lists (optional simple)",
            body: `<p>You can even put lists INSIDE lists to create sub-bullets. Just put a <code>&lt;ul&gt;</code> inside an <code>&lt;li&gt;</code>.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type "NESTED".</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="60" y="50" fill="white" font-size="16">• Main Task</text><text x="80" y="80" fill="#00f2ff" font-size="14">◦ Sub task A</text><text x="80" y="110" fill="#00f2ff" font-size="14">◦ Sub task B</text></svg>`,
            initialCode: "",
            progress: 40,
            validator: function (code) { return code.toUpperCase().includes("NESTED"); }
        },
        {
            title: "9. Lists for steps/instructions",
            body: `<p>Ordered lists are perfect for How-To guides. Let's practice.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Write a 2-step OL.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="120" y="80" fill="#00ff9d" font-family="monospace" font-size="16" text-anchor="middle" class="pulse-cyan">INSTRUCTIONS</text></svg>`,
            initialCode: "<ol>\n  <li></li>\n  <li></li>\n</ol>",
            progress: 45,
            validator: function (code) { return (code.match(/<li>/g) || []).length >= 2 && code.includes("<ol>"); }
        },
        {
            title: "10. Lists for favorites",
            body: `<p>Unordered lists are great for groups of items that don't need a specific ranking, like a grocery list or favorites.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type "FAVORITES".</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><path d="M120 40 L140 80 L180 85 L150 115 L160 150 L120 130 L80 150 L90 115 L60 85 L100 80 Z" fill="#ff00e5"/></svg>`,
            initialCode: "",
            progress: 50,
            validator: function (code) { return code.toUpperCase().includes("FAVORITES"); }
        },
        {
            title: "11. Teacher demo",
            body: `<p>Watch the projector. The teacher is about to build a list and demonstrate an important concept.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type "WATCH".</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="30" width="160" height="90" fill="none" stroke="#00f2ff" stroke-width="2"/><circle cx="120" cy="75" r="20" fill="#00f2ff" class="pulse-cyan"/></svg>`,
            initialCode: "",
            progress: 55,
            validator: function (code) { return code.toUpperCase().includes("WATCH"); }
        },
        {
            title: "12. Create favorite foods list 🍕",
            body: `<p>Now it's your turn. Create an unordered list of your top 3 favorite foods.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Make a 3-item &lt;ul&gt;.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="120" y="80" fill="#00ff9d" font-size="40" text-anchor="middle">🍕</text></svg>`,
            initialCode: "<ul>\n  \n</ul>",
            progress: 60,
            validator: function (code) { return code.includes("<ul>") && (code.match(/<li>/g) || []).length >= 3; }
        },
        {
            title: "13. Create favorite games list 🎮",
            body: `<p>Let's do an ordered list this time, ranking your top 3 favorite games from 1 to 3.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Make a 3-item &lt;ol&gt;.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="120" y="80" fill="#ff00e5" font-size="40" text-anchor="middle">🎮</text></svg>`,
            initialCode: "<ol>\n  \n</ol>",
            progress: 65,
            validator: function (code) { return code.includes("<ol>") && (code.match(/<li>/g) || []).length >= 3; }
        },
        {
            title: "14. Create daily routine list",
            body: `<p>Think about your morning routine. Wake up, brush teeth, eat... write it out as steps.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Write out a routine in a list.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="120" y="80" fill="#00f2ff" font-size="40" text-anchor="middle">⏰</text></svg>`,
            initialCode: "<ol>\n  <li>Wake up</li>\n</ol>",
            progress: 70,
            validator: function (code) { return code.includes("<ol>") && (code.match(/<li>/g) || []).length > 1; }
        },
        {
            title: "15. Mixing lists + headings",
            body: `<p>Lists look best when they have a title above them. We use headings like <code>&lt;h2&gt;</code> for this.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Put an &lt;h2&gt;Title&lt;/h2&gt; before your list.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="30" width="160" height="20" fill="#00ff9d"/><circle cx="50" cy="70" r="4" fill="white"/><rect x="60" y="66" width="100" height="8" fill="gray"/></svg>`,
            initialCode: "\n<ul>\n  <li>Thing</li>\n</ul>",
            progress: 75,
            validator: function (code) { return code.includes("<h") && code.includes("<ul"); }
        },
        {
            title: "16. Formatting for clarity",
            body: `<p>Look at your code. Are your <code>&lt;li&gt;</code> tags indented so you can clearly see they are inside the list container?</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type "INDENT".</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="120" y="80" fill="#ff00e5" font-family="monospace" font-size="16" text-anchor="middle" class="pulse-cyan">CLARITY</text></svg>`,
            initialCode: "",
            progress: 80,
            validator: function (code) { return code.toUpperCase().includes("INDENT"); }
        },
        {
            title: "17. Check for missing tags",
            body: `<p>A common error is forgetting to close individual list items with <code>&lt;/li&gt;</code>. Fix the broken list below.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Add the missing closing tags.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="40" width="160" height="70" fill="none" stroke="#f00" stroke-width="4" stroke-dasharray="8"/></svg>`,
            initialCode: "<ul>\n  <li>Broken item\n</ul>",
            progress: 85,
            validator: function (code) { return code.includes("</li>"); }
        },
        {
            title: "18. Make page neat",
            body: `<p>Clean code means a clean website. Programmers spend 10% of their time writing code and 90% reading it.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type "CLEAN CODE".</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="120" y="80" fill="#00ff9d" font-family="monospace" font-size="18" text-anchor="middle">CLEAN CODE</text></svg>`,
            initialCode: "",
            progress: 90,
            validator: function (code) { return code.toUpperCase().includes("CLEAN CODE"); }
        },
        {
            title: "19. Mini design improvement",
            body: `<p>Great websites use a combination of lists, paragraphs, and headings to break up information into digestable chunks.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type "CHUNKS".</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="40" width="50" height="50" fill="#00f2ff"/><rect x="95" y="40" width="50" height="50" fill="#00ff9d"/><rect x="160" y="40" width="50" height="50" fill="#ff00e5"/></svg>`,
            initialCode: "",
            progress: 95,
            validator: function (code) { return code.toUpperCase().includes("CHUNKS"); }
        },
        {
            title: "20. Challenge: 3 lists on one page",
            body: `<p>Final test: Create a quick page featuring an H1 title, a paragraph, an Unordered list, and an Ordered list.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: You can do it!</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><circle cx="120" cy="75" r="45" fill="none" stroke="#00f2ff" stroke-width="5" class="pulse-cyan"/><text x="120" y="80" fill="white" font-weight="bold" font-size="18" text-anchor="middle">BOSS</text></svg>`,
            initialCode: "<h1>My Stuff</h1>\n<p>Info goes here</p>\n<ul>\n  <li>A</li>\n</ul>\n<ol>\n  <li>B</li>\n</ol>",
            progress: 100,
            validator: function (code) {
                return code.includes("<h1>") && code.includes("<p>") && code.includes("<ul>") && code.includes("<ol>");
            }
        }
    ]
};
