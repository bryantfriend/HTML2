window.Lessons = window.Lessons || {};
window.Lessons.lesson2 = {
    id: "lesson2",
    title: "02: LESSON 2 — TEXT & HEADINGS",
    description: "Format text using Headings and Paragraphs. [20 MODULES]",
    modules: [
        {
            title: "1. Text is the heart of websites",
            body: `<p>Graphics and design are awesome, but text is how we communicate meaning and information across the web.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type "TEXT" to acknowledge.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="40" width="160" height="70" rx="4" fill="#161b33" stroke="#00f2ff" stroke-width="2"/><text x="120" y="80" fill="#00f2ff" font-family="monospace" font-size="16" text-anchor="middle">HELLO WORLD</text></svg>`,
            initialCode: "",
            progress: 5,
            validator: function (code) { return code.toUpperCase().includes("TEXT"); }
        },
        {
            title: "2. Paragraph tag <p>",
            body: `<p>To write a block of regular text, we use the paragraph tag: <code>&lt;p&gt;</code>.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Create a paragraph saying "I love coding."</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><circle cx="120" cy="75" r="40" fill="none" stroke="#00ff9d" stroke-width="4"/><text x="120" y="85" fill="#00ff9d" font-family="monospace" font-size="30" font-weight="bold" text-anchor="middle">&lt;p&gt;</text></svg>`,
            initialCode: "",
            progress: 10,
            validator: function (code) { return code.toLowerCase().includes("<p>i love coding.</p>") || code.toLowerCase().includes("<p>i love coding</p>"); }
        },
        {
            title: "3. Headings overview",
            body: `<p>Headings are titles for different sections of your page. HTML gives us 6 levels: H1 through H6.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type "H1 TO H6".</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="40" y="60" fill="white" font-size="24" font-weight="bold">H1</text><text x="80" y="60" fill="white" font-size="20">H2</text><text x="120" y="60" fill="white" font-size="16">H3</text><text x="160" y="60" fill="white" font-size="12">...</text></svg>`,
            initialCode: "",
            progress: 15,
            validator: function (code) { return code.toUpperCase().includes("H1 TO H6"); }
        },
        {
            title: "4. <h1> main title",
            body: `<p>The <code>&lt;h1&gt;</code> tag is the biggest heading. It should only be used once per page for the main title.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Write an &lt;h1&gt; element saying "My Website".</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="120" y="85" fill="#ff00e5" font-family="sans-serif" font-size="40" font-weight="bold" text-anchor="middle">H1</text></svg>`,
            initialCode: "",
            progress: 20,
            validator: function (code) { return code.toLowerCase().includes("<h1>my website</h1>"); }
        },
        {
            title: "5. <h2>–<h6> hierarchy",
            body: `<p>H2 is for major sections. H3 for sub-sections. It creates an organized hierarchy like an outline.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type an &lt;h2&gt; tag.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="30" width="160" height="20" fill="#ff00e5"/><rect x="60" y="60" width="140" height="15" fill="#00f2ff"/><rect x="80" y="85" width="120" height="10" fill="#00ff9d"/></svg>`,
            initialCode: "",
            progress: 25,
            validator: function (code) { return code.toLowerCase().includes("<h2>"); }
        },
        {
            title: "6. Large vs small headings",
            body: `<p>H1 is visually the largest by default. H6 is actually smaller than regular paragraph text!</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Write an &lt;h1&gt; and an &lt;h6&gt; to compare them in the preview.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="120" y="60" fill="white" font-size="30" font-weight="bold" text-anchor="middle">BIG</text><text x="120" y="100" fill="white" font-size="10" text-anchor="middle">small</text></svg>`,
            initialCode: "<h1>Big Title</h1>\n<h6>Tiny Title</h6>",
            progress: 30,
            validator: function (code) { return code.toLowerCase().includes("<h1>") && code.toLowerCase().includes("<h6>"); }
        },
        {
            title: "7. Line breaks <br>",
            body: `<p>The <code>&lt;br&gt;</code> tag forces text to drop to the next line. It is an "empty" tag, meaning it needs no closing tag.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Place a &lt;br&gt; between the words "Drop" and "Down".</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="120" y="60" fill="white" font-family="monospace" font-size="16" text-anchor="middle">DROP</text><path d="M140 65 L140 95 L130 85 M140 95 L150 85" fill="none" stroke="#00f2ff" stroke-width="2"/><text x="120" y="110" fill="#00f2ff" font-family="monospace" font-size="16" text-anchor="middle">DOWN</text></svg>`,
            initialCode: "<p>Drop Down</p>",
            progress: 35,
            validator: function (code) { return code.toLowerCase().includes("drop<br>down") || code.toLowerCase().includes("drop <br> down"); }
        },
        {
            title: "8. Bold text",
            body: `<p>The <code>&lt;b&gt;</code> tag makes text <b>bold</b>. It's a quick way to make words stand out.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Wrap the word "bold" in &lt;b&gt; tags.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="120" y="85" fill="#00ff9d" font-family="sans-serif" font-size="36" font-weight="900" text-anchor="middle">&lt;b&gt; BOLD</text></svg>`,
            initialCode: "<p>Make me bold!</p>",
            progress: 40,
            validator: function (code) { return code.toLowerCase().includes("<b>bold</b>") || code.toLowerCase().includes("<b>make me bold!</b>"); }
        },
        {
            title: "9. Strong vs bold",
            body: `<p>The <code>&lt;strong&gt;</code> tag also makes text bold. BUT, it also tells computers "This is important." (Better for visually impaired users!).</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Use &lt;strong&gt; to emphasize "WARNING".</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="50" width="160" height="50" rx="4" fill="#ff00e5"/><text x="120" y="80" fill="white" font-family="sans-serif" font-weight="900" font-size="20" text-anchor="middle">STRONG</text></svg>`,
            initialCode: "<p>WARNING: Do not press.</p>",
            progress: 45,
            validator: function (code) { return code.toLowerCase().includes("<strong>warning</strong>"); }
        },
        {
            title: "10. Italics",
            body: `<p>The <code>&lt;i&gt;</code> tag makes text <i>italic</i> (slanted).</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Make the word "slanted" italic.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="120" y="80" fill="#00f2ff" font-family="sans-serif" font-size="30" font-style="italic" text-anchor="middle">Italics</text></svg>`,
            initialCode: "<p>This is slanted.</p>",
            progress: 50,
            validator: function (code) { return code.toLowerCase().includes("<i>slanted</i>"); }
        },
        {
            title: "11. Emphasis tags",
            body: `<p>Like strong, <code>&lt;em&gt;</code> makes text italic but gives it "semantic importance". It's the proper way to emphasize a word.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Wrap the word "really" in &lt;em&gt; tags.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="120" y="80" fill="#00ff9d" font-family="sans-serif" font-size="24" font-style="italic" text-anchor="middle">EMPHASIS</text></svg>`,
            initialCode: "<p>I really need a nap.</p>",
            progress: 55,
            validator: function (code) { return code.toLowerCase().includes("<em>really</em>"); }
        },
        {
            title: "12. Combining tags",
            body: `<p>You can put tags inside tags! Just be sure to close the inner tag before closing the outer tag: <code>&lt;p&gt;&lt;b&gt;Word&lt;/b&gt;&lt;/p&gt;</code></p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type "COMBINE".</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="40" width="160" height="70" fill="none" stroke="#ff00e5" stroke-width="2"/><rect x="60" y="55" width="120" height="40" fill="none" stroke="#00f2ff" stroke-width="2"/></svg>`,
            initialCode: "",
            progress: 60,
            validator: function (code) { return code.toUpperCase().includes("COMBINE"); }
        },
        {
            title: "13. Writing multiple paragraphs",
            body: `<p>Notice how paragraphs automatically push away from each other? This margin keeps text readable.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Write two separate &lt;p&gt; elements.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="30" width="160" height="30" fill="#333"/><path d="M120 60 L120 90" stroke="#ff00e5" stroke-width="2" stroke-dasharray="4"/><rect x="40" y="90" width="160" height="30" fill="#333"/></svg>`,
            initialCode: "<p>Paragraph 1</p>\n<p>Paragraph 2</p>",
            progress: 65,
            validator: function (code) { return (code.match(/<p>/g) || []).length >= 2; }
        },
        {
            title: "14. Spacing rules",
            body: `<p>If you press spacebar 50 times in your code, the browser will only show exactly 1 space. Browsers collapse whitespace!</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Add 20 spaces between the words below and check the preview.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="120" y="80" fill="#f00" font-family="monospace" font-size="16" text-anchor="middle">A          B  =  A B</text></svg>`,
            initialCode: "<p>Space          Here</p>",
            progress: 70,
            validator: function (code) { return code.includes("Space"); }
        },
        {
            title: "15. Making an “About Me” page",
            body: `<p>A classic first website is the "About Me" page. It requires headings for your name and paragraphs for your bio.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type "ABOUT ME".</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><circle cx="120" cy="50" r="20" fill="#00ff9d"/><path d="M80 120 Q120 80 160 120" fill="none" stroke="#00ff9d" stroke-width="20" stroke-linecap="round"/></svg>`,
            initialCode: "",
            progress: 75,
            validator: function (code) { return code.toUpperCase().includes("ABOUT ME"); }
        },
        {
            title: "16. Teacher example",
            body: `<p>Look at the teacher's example of a short, well-structured "About Me" page with H1, H2, and bold text.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type "LOOK" whilst watching the projector!</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><path d="M60 75 Q120 20 180 75 Q120 130 60 75" fill="none" stroke="#00f2ff" stroke-width="4"/><circle cx="120" cy="75" r="15" fill="#00f2ff"/></svg>`,
            initialCode: "",
            progress: 80,
            validator: function (code) { return code.toUpperCase().includes("LOOK"); }
        },
        {
            title: "17. Students write content",
            body: `<p>Write one sentence about your favorite hobby using a paragraph tag.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Provide a &lt;p&gt; tag with a hobby.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="200" height="110" fill="none" stroke="#ff00e5" stroke-dasharray="4" stroke-width="2"/></svg>`,
            initialCode: "<p>I like to play basketball.</p>",
            progress: 85,
            validator: function (code) { return code.toLowerCase().includes("<p>") && code.length > 10; }
        },
        {
            title: "18. Add headings to organize",
            body: `<p>Put an H1 heading above your hobby paragraph to give the page a title.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Add an H1 tag above the paragraph.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="40" y="50" fill="white" font-size="24" font-weight="bold">TITLE (H1)</text><rect x="40" y="70" width="160" height="10" fill="#00ff9d"/></svg>`,
            initialCode: "<h1>My Cool Page</h1>\n<p>I like to play basketball.</p>",
            progress: 90,
            validator: function (code) { return code.toLowerCase().includes("<h1>"); }
        },
        {
            title: "19. Review page readability",
            body: `<p>A website shouldn't just be a huge wall of text. Does the page look natural? White space is good!</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type "READABLE".</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="120" y="80" fill="#00f2ff" font-family="monospace" font-size="16" text-anchor="middle" class="pulse-cyan">READABILITY</text></svg>`,
            initialCode: "",
            progress: 95,
            validator: function (code) { return code.toUpperCase().includes("READABLE"); }
        },
        {
            title: "20. Share with partner 👥",
            body: `<p>Show the person next to you what you've created. Formatting text is the essence of HTML.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type "SHARED" to advance to the next level.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><circle cx="90" cy="60" r="15" fill="#ff00e5"/><circle cx="150" cy="60" r="15" fill="#00f2ff"/><path d="M60 120 Q90 80 120 120" fill="none" stroke="#ff00e5" stroke-width="10" stroke-linecap="round"/><path d="M120 120 Q150 80 180 120" fill="none" stroke="#00f2ff" stroke-width="10" stroke-linecap="round"/></svg>`,
            initialCode: "",
            progress: 100,
            validator: function (code) { return code.toUpperCase().includes("SHARED"); }
        }
    ]
};
