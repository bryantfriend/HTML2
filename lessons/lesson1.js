window.Lessons = window.Lessons || {};
window.Lessons.lesson1 = {
    id: "lesson1",
    title: "01: LESSON 1 — PAGE STRUCTURE",
    description: "Learn the essential skeleton of every web page. [20 MODULES]",
    modules: [
        {
            title: "1. What is page structure?",
            body: `<p>Just like a building needs a foundation and framework, every web page needs a structure to hold its content.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type "SKELETON" to acknowledge.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="60" y="20" width="120" height="110" fill="none" stroke="#00f2ff" stroke-width="2"/><line x1="60" y1="50" x2="180" y2="50" stroke="#00f2ff" stroke-width="2"/><line x1="60" y1="100" x2="180" y2="100" stroke="#00f2ff" stroke-width="2"/></svg>`,
            initialCode: "",
            progress: 5,
            validator: function (code) { return code.toUpperCase().includes("SKELETON"); }
        },
        {
            title: "2. Every HTML page needs a skeleton",
            body: `<p>Without the basic structure, browsers don't know how to read your code properly. We must provide the correct tags in the exact order.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type "ORDER".</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="120" y="60" fill="#00ff9d" font-family="monospace" font-size="20" text-anchor="middle">1. HEAD</text><text x="120" y="90" fill="#00ff9d" font-family="monospace" font-size="20" text-anchor="middle">2. BODY</text></svg>`,
            initialCode: "",
            progress: 10,
            validator: function (code) { return code.toUpperCase().includes("ORDER"); }
        },
        {
            title: "3. <!DOCTYPE html>",
            body: `<p>The very first line of any web page is the DOCTYPE declaration. It tells the browser "Hey, I am using modern HTML5!"</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type exactly: &lt;!DOCTYPE html&gt;</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="120" y="80" fill="#ff00e5" font-family="monospace" font-size="16" font-weight="bold" text-anchor="middle">&lt;!DOCTYPE html&gt;</text></svg>`,
            initialCode: "",
            progress: 15,
            validator: function (code) { return code.toLowerCase().includes("<!doctype html>"); }
        },
        {
            title: "4. <html> tag",
            body: `<p>Right after the DOCTYPE comes the <code>&lt;html&gt;</code> tag. It forms a wrapper around the entire page.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type opening &lt;html&gt; and closing &lt;/html&gt; tags.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="30" width="160" height="90" rx="4" fill="none" stroke="#00f2ff" stroke-width="2"/><text x="45" y="45" fill="#00f2ff" font-family="monospace" font-size="12">&lt;html&gt;</text><text x="45" y="115" fill="#00f2ff" font-family="monospace" font-size="12">&lt;/html&gt;</text></svg>`,
            initialCode: "",
            progress: 20,
            validator: function (code) { return code.toLowerCase().includes("<html>") && code.toLowerCase().includes("</html>"); }
        },
        {
            title: "5. <head> tag",
            body: `<p>The <code>&lt;head&gt;</code> goes inside the html tags. It contains invisible data (meta-data) meant for the browser and search engines.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type the nested &lt;head&gt;&lt;/head&gt; tags.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="60" y="20" width="120" height="40" fill="#161b33" stroke="#ff00e5" stroke-width="2"/><text x="120" y="45" fill="#ff00e5" font-family="monospace" font-size="16" text-anchor="middle">&lt;head&gt;</text></svg>`,
            initialCode: "<html>\n  \n</html>",
            progress: 25,
            validator: function (code) { return code.toLowerCase().includes("<head>") && code.toLowerCase().includes("</head>"); }
        },
        {
            title: "6. <body> tag",
            body: `<p>The <code>&lt;body&gt;</code> goes below the head tag. It contains EVERYTHING the user will see.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Add the &lt;body&gt; and &lt;/body&gt; tags directly below the head tags.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="60" y="60" width="120" height="70" fill="#161b33" stroke="#00ff9d" stroke-width="2"/><text x="120" y="100" fill="#00ff9d" font-family="monospace" font-size="16" text-anchor="middle">&lt;body&gt;</text></svg>`,
            initialCode: "<html>\n  <head>\n  </head>\n  \n</html>",
            progress: 30,
            validator: function (code) { return code.toLowerCase().includes("<body>") && code.toLowerCase().includes("</body>"); }
        },
        {
            title: "7. Where visible content goes",
            body: `<p>Remember: If you want it on the screen, itMUST go inside the <code>&lt;body&gt;</code>.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Put a &lt;p&gt;Visible Content&lt;/p&gt; inside the body.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="20" width="180" height="110" fill="none" stroke="#00f2ff" stroke-width="2"/><rect x="40" y="40" width="160" height="80" fill="#161b33" stroke="#00ff9d" stroke-width="2"/><text x="120" y="85" fill="white" font-family="sans-serif" font-size="12" text-anchor="middle">I AM VISIBLE</text></svg>`,
            initialCode: "<html>\n  <body>\n    \n  </body>\n</html>",
            progress: 35,
            validator: function (code) { return code.toLowerCase().includes("<p>") && code.toLowerCase().includes("</body>"); }
        },
        {
            title: "8. Page title",
            body: `<p>The <code>&lt;title&gt;</code> tag lives inside the <code>&lt;head&gt;</code>. It describes the page to search engines.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Add a &lt;title&gt;My Page&lt;/title&gt; inside the head.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="30" width="160" height="40" fill="none" stroke="#ff00e5" stroke-width="2"/><text x="120" y="55" fill="#ff00e5" font-family="monospace" font-size="14" text-anchor="middle">&lt;title&gt;</text></svg>`,
            initialCode: "<html>\n  <head>\n    \n  </head>\n</html>",
            progress: 40,
            validator: function (code) { return code.toLowerCase().includes("<title>") && code.toLowerCase().includes("</title>"); }
        },
        {
            title: "9. Browser tab name",
            body: `<p>The text inside the title tag is precisely what shows up on your web browser's tab at the very top of the window.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type "TAB" to understand.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><path d="M20 50 L40 30 L100 30 L120 50 L220 50 L220 140 L20 140 Z" fill="#161b33" stroke="#00f2ff" stroke-width="2"/><text x="70" y="45" fill="white" font-family="sans-serif" font-size="10" text-anchor="middle">My Page</text></svg>`,
            initialCode: "",
            progress: 45,
            validator: function (code) { return code.toUpperCase().includes("TAB"); }
        },
        {
            title: "10. Writing first full page",
            body: `<p>Let's assemble the Exodia of HTML: DOCTYPE, html, head, title, body, and a paragraph.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Assemble a full valid page from memory or the template provided.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><circle cx="120" cy="75" r="40" fill="none" stroke="#00ff9d" stroke-width="4" stroke-dasharray="10 5" class="pulse-cyan"/><text x="120" y="80" fill="white" font-family="monospace" font-size="12" text-anchor="middle">ASSEMBLE</text></svg>`,
            initialCode: "<!DOCTYPE html>\n<html>\n  <head>\n    <title>Test</title>\n  </head>\n  <body>\n    <p>Done!</p>\n  </body>\n</html>",
            progress: 50,
            validator: function (code) {
                return code.toLowerCase().includes("<!doctype html>")
                    && code.toLowerCase().includes("</html>")
                    && code.toLowerCase().includes("<title>")
                    && code.toLowerCase().includes("<body>");
            }
        },
        {
            title: "11. Saving as .html",
            body: `<p>When building locally, you must save your text file with the <code>.html</code> extension so the computer knows what it is.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type "index.html".</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="70" y="50" width="100" height="50" fill="none" stroke="#ff00e5" stroke-width="2"/><text x="120" y="80" fill="#00f2ff" font-family="monospace" font-size="14" text-anchor="middle">.html</text></svg>`,
            initialCode: "",
            progress: 55,
            validator: function (code) { return code.toLowerCase().includes("index.html"); }
        },
        {
            title: "12. Opening file in browser",
            body: `<p>Double-click your new .html file on your desktop, and it will open in Chrome, Firefox, or your default browser instantly!</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type "DOUBLE CLICK".</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><path d="M120 70 L140 110 L125 105 L120 120 L110 115 L115 100 L100 100 Z" fill="white" stroke="black" stroke-width="1"/></svg>`,
            initialCode: "",
            progress: 60,
            validator: function (code) { return code.toUpperCase().includes("DOUBLE CLICK"); }
        },
        {
            title: "13. Editing + refreshing",
            body: `<p>To change the page, you open the file in a code editor, change the code, SAVE it, then switch to the browser and hit REFRESH (F5).</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type "F5".</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="50" width="60" height="50" rx="4" fill="#333" stroke="#444" stroke-width="2"/><text x="120" y="80" fill="white" font-family="sans-serif" font-weight="bold" font-size="16" text-anchor="middle">F5</text></svg>`,
            initialCode: "",
            progress: 65,
            validator: function (code) { return code.toUpperCase().includes("F5"); }
        },
        {
            title: "14. Indentation (basic neatness)",
            body: `<p>Notice how child tags are indented (pushed right) from parent tags? This makes code 1000x easier to read and debug.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type "SPACE" or "TAB" to show how we indent.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="40" x2="100" y2="40" stroke="#00f2ff" stroke-width="4"/><line x1="40" y1="70" x2="120" y2="70" stroke="#00ff9d" stroke-width="4"/><line x1="60" y1="100" x2="140" y2="100" stroke="#ff00e5" stroke-width="4"/></svg>`,
            initialCode: "",
            progress: 70,
            validator: function (code) { return code.toUpperCase().includes("SPACE") || code.toUpperCase().includes("TAB"); }
        },
        {
            title: "15. Why structure matters",
            body: `<p>If your HTML is broken, Google searches act weird, screen readers for the blind break, and CSS styling will betray you.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type "ACCESSIBILITY".</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="120" y="80" fill="#ff00e5" font-family="monospace" font-size="14" text-anchor="middle">AVOID CHAOS</text></svg>`,
            initialCode: "",
            progress: 75,
            validator: function (code) { return code.toUpperCase().includes("ACCESSIBILITY"); }
        },
        {
            title: "16. Common beginner mistakes",
            body: `<p>Forgetting to close tags (<code>&lt;/body&gt;</code>) or putting content inside the <code>&lt;head&gt;</code> instead of the <code>&lt;body&gt;</code>.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type "MISTAKE".</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="120" y="80" fill="#00f2ff" font-family="monospace" font-size="24" font-weight="bold" text-anchor="middle">Oops!</text></svg>`,
            initialCode: "",
            progress: 80,
            validator: function (code) { return code.toUpperCase().includes("MISTAKE"); }
        },
        {
            title: "17. Fixing missing tags",
            body: `<p>Look at the code below. The paragraph is missing its closing tag! The browser might guess it, but let's be accurate.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Add &lt;/p&gt; to close the paragraph.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><path d="M120 40 L120 110 M100 90 L120 110 L140 90" fill="none" stroke="#ff00e5" stroke-width="4" class="pulse-cyan"/></svg>`,
            initialCode: "<p>This is floating into the void...",
            progress: 85,
            validator: function (code) { return code.toLowerCase().includes("</p>"); }
        },
        {
            title: "18. Teacher demo walkthrough",
            body: `<p>Watch the screen as the teacher creates a blank file, types the skeleton, saves, and opens it.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type "WATCHING".</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><circle cx="120" cy="75" r="30" fill="none" stroke="#00ff9d" stroke-width="4"/><circle cx="120" cy="75" r="10" fill="#00ff9d"/></svg>`,
            initialCode: "",
            progress: 90,
            validator: function (code) { return code.toUpperCase().includes("WATCHING"); }
        },
        {
            title: "19. Build your own blank page",
            body: `<p>Now it's your turn. Write the absolute minimum structure for an HTML page.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: From scratch, write DOCTYPE, html, head, and body tags.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="20" width="160" height="110" fill="none" stroke="#00f2ff" stroke-width="2" stroke-dasharray="4"/></svg>`,
            initialCode: "",
            progress: 95,
            validator: function (code) {
                return code.toLowerCase().includes("<!doctype html>")
                    && code.toLowerCase().includes("<html>")
                    && code.toLowerCase().includes("<head>")
                    && code.toLowerCase().includes("<body>");
            }
        },
        {
            title: "20. Checkpoint activity ✅",
            body: `<p>You've successfully survived the page structure checkpoint. You now know how to lay the foundation!</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type "COMPLETE" to secure your knowledge and proceed.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><path d="M70 75 L100 105 L180 45" fill="none" stroke="#00ff9d" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" class="pulse-cyan"/></svg>`,
            initialCode: "",
            progress: 100,
            validator: function (code) { return code.toUpperCase().includes("COMPLETE"); }
        }
    ]
};
