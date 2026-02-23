window.Lessons = window.Lessons || {};
window.Lessons.lesson5 = {
    id: "lesson5",
    title: "05: LESSON 5 — LINKS & NAVIGATION",
    description: "Forge paths between digital dimensions. [20 MODULES]",
    modules: [
        {
            title: "1. What is a link?",
            body: `<p>A link (or hyperlink) is a clickable element that magically transports you to another document or section of the web.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type "HYPERLINK".</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="120" y="80" fill="#00f2ff" font-family="monospace" font-size="16" text-decoration="underline" text-anchor="middle">CLICK ME</text><path d="M140 90 L160 110 L150 120" fill="white" stroke="white" stroke-width="2"/></svg>`,
            initialCode: "",
            progress: 5,
            validator: function (code) { return code.toUpperCase().includes("HYPERLINK"); }
        },
        {
            title: "2. How the web connects pages",
            body: `<p>The internet is literally a "web" of documents joined together by hyperlinks. Imagine a spiderweb of information!</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type "WEB".</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><circle cx="70" cy="50" r="10" fill="#00ff9d"/><circle cx="170" cy="40" r="10" fill="#ff00e5"/><circle cx="120" cy="110" r="10" fill="#00f2ff"/><line x1="70" y1="50" x2="170" y2="40" stroke="white"/><line x1="170" y1="40" x2="120" y2="110" stroke="white"/><line x1="120" y1="110" x2="70" y2="50" stroke="white"/></svg>`,
            initialCode: "",
            progress: 10,
            validator: function (code) { return code.toUpperCase().includes("WEB"); }
        },
        {
            title: "3. <a> tag",
            body: `<p>We create links using the <code>&lt;a&gt;</code> tag. The 'a' stands for <strong>anchor</strong>.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type an opening and closing &lt;a&gt; tag.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="60" y="80" fill="#ff00e5" font-family="monospace" font-size="20">&lt;a&gt;</text><text x="140" y="80" fill="#ff00e5" font-family="monospace" font-size="20">&lt;/a&gt;</text></svg>`,
            initialCode: "",
            progress: 15,
            validator: function (code) { return code.toLowerCase().includes("<a>") && code.toLowerCase().includes("</a>"); }
        },
        {
            title: "4. href attribute",
            body: `<p>An anchor tag is useless without a destination. We use the <code>href</code> (hypertext reference) attribute to give it an address.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type exactly: href="url"</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="55" width="160" height="30" rx="4" fill="#0a0b1e" stroke="#00f2ff" stroke-width="2"/><text x="120" y="75" fill="#00f2ff" font-family="monospace" font-size="16" text-anchor="middle">href="..."</text></svg>`,
            initialCode: "",
            progress: 20,
            validator: function (code) { return code.toLowerCase().includes("href="); }
        },
        {
            title: "5. External links",
            body: `<p>Let's create an external link (a link going to a different website on the internet, like Google).</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Create a complete link pointing to https://google.com.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="120" y="80" fill="#00ff9d" font-family="monospace" font-size="14" text-anchor="middle">EXTERNAL SITE</text></svg>`,
            initialCode: `<a href="">Go to Google</a>`,
            progress: 25,
            validator: function (code) { return code.toLowerCase().includes("href=\"https://google.com\""); }
        },
        {
            title: "6. Safe linking practices",
            body: `<p>Never link to suspicious files or unknown websites. Hackers use bad links to spread malware through the web!</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type "SAFE".</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="50" width="60" height="50" fill="none" stroke="#00ff9d" stroke-width="4"/><path d="M100 50 A 20 20 0 0 1 140 50" fill="none" stroke="#00ff9d" stroke-width="4"/><circle cx="120" cy="75" r="5" fill="#00ff9d"/></svg>`,
            initialCode: "",
            progress: 30,
            validator: function (code) { return code.toUpperCase().includes("SAFE"); }
        },
        {
            title: "7. Opening new tab",
            body: `<p>Sometimes you don't want the user to leave your page. Add <code>target="_blank"</code> to your link to make it open in a brand new tab!</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Add target="_blank" to the link.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="40" width="100" height="70" fill="none" stroke="#444" stroke-width="2"/><rect x="80" y="60" width="100" height="70" fill="#0a0b1e" stroke="#ff00e5" stroke-width="2"/><text x="130" y="100" fill="white" font-size="12" text-anchor="middle">NEW TAB</text></svg>`,
            initialCode: `<a href="https://example.com">Visit Example</a>`,
            progress: 35,
            validator: function (code) { return code.toLowerCase().includes("target=\"_blank\""); }
        },
        {
            title: "8. Internal links (same site)",
            body: `<p>If you build two HTML files in the same folder, you can link them together by just typing their filenames.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type "INTERNAL".</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="40" width="60" height="70" fill="none" stroke="#00f2ff" stroke-width="2"/><rect x="140" y="40" width="60" height="70" fill="none" stroke="#00f2ff" stroke-width="2"/><path d="M100 75 Q 120 40 140 75" fill="none" stroke="white" stroke-width="2"/><polygon points="140,75 130,65 130,85" fill="white"/></svg>`,
            initialCode: "",
            progress: 40,
            validator: function (code) { return code.toUpperCase().includes("INTERNAL"); }
        },
        {
            title: "9. Linking to another file",
            body: `<p>If we have a file called <code>about.html</code>, pointing to it is easy: <code>href="about.html"</code>.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Change the href to link to "about.html".</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="120" y="80" fill="#00ff9d" font-family="monospace" font-size="14" text-anchor="middle">href="about.html"</text></svg>`,
            initialCode: `<a href="">Go to about page</a>`,
            progress: 45,
            validator: function (code) { return code.toLowerCase().includes("href=\"about.html\""); }
        },
        {
            title: "10. Building 2-page site",
            body: `<p>A website rarely has just one page. Real sites have a Home page, an About page, Contact pages, etc.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type "MULTIPLE PAGES".</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="40" width="40" height="60" fill="none" stroke="#fff"/><rect x="100" y="40" width="40" height="60" fill="none" stroke="#fff"/><rect x="170" y="40" width="40" height="60" fill="none" stroke="#fff"/></svg>`,
            initialCode: "",
            progress: 50,
            validator: function (code) { return code.toUpperCase().includes("MULTIPLE PAGES"); }
        },
        {
            title: "11. Home page concept",
            body: `<p>The main page of a website is almost always named <code>index.html</code>. This is the entry point for the browser!</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type "INDEX.HTML".</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="120" y="80" fill="#00f2ff" font-family="monospace" font-size="20" font-weight="bold" text-anchor="middle">index.html</text></svg>`,
            initialCode: "",
            progress: 55,
            validator: function (code) { return code.toUpperCase().includes("INDEX.HTML"); }
        },
        {
            title: "12. About page concept",
            body: `<p>A secondary page gives more information without cluttering the Home page.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type "ABOUT".</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><circle cx="120" cy="50" r="15" fill="#ff00e5"/><path d="M100 100 Q120 70 140 100" stroke="#ff00e5" stroke-width="5" fill="none"/></svg>`,
            initialCode: "",
            progress: 60,
            validator: function (code) { return code.toUpperCase().includes("ABOUT"); }
        },
        {
            title: "13. Navigation buttons",
            body: `<p>Usually, we group our links at the top of the page in a navigation menu, so users can switch between pages quickly.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type "NAV MENUS".</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="200" height="30" fill="#161b33"/><text x="50" y="40" fill="white" font-size="12">HOME</text><text x="110" y="40" fill="white" font-size="12">ABOUT</text><text x="170" y="40" fill="white" font-size="12">CONTACT</text></svg>`,
            initialCode: "",
            progress: 65,
            validator: function (code) { return code.toUpperCase().includes("NAV MENUS"); }
        },
        {
            title: "14. Teacher demo",
            body: `<p>Watch the teacher create two separate files (index.html and about.html) and link them back and forth.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type "CONNECT".</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><path d="M40 75 L200 75" stroke="#00ff9d" stroke-width="4" stroke-dasharray="8" class="pulse-cyan"/></svg>`,
            initialCode: "",
            progress: 70,
            validator: function (code) { return code.toUpperCase().includes("CONNECT"); }
        },
        {
            title: "15. Students create Home page",
            body: `<p>You are pretending to be on index.html right now. Write a massive H1 welcoming users, and a link pointing to about.html.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Add an h1 and an a tag pointing to about.html.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="30" width="160" height="90" fill="none" stroke="#fff" stroke-dasharray="4"/><text x="120" y="70" fill="white" font-weight="bold" font-size="16" text-anchor="middle">HOME PAGE</text></svg>`,
            initialCode: "",
            progress: 75,
            validator: function (code) { return code.toLowerCase().includes("<h1>") && code.toLowerCase().includes("href=\"about.html\""); }
        },
        {
            title: "16. Create About page",
            body: `<p>Now imagine you are on about.html. Add a heading detailing your hobbies, and a link pointing BACK to index.html.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Add an h2 with hobbies, and a link pointing back to index.html.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="30" width="160" height="90" fill="none" stroke="#ff00e5" stroke-dasharray="4"/><text x="120" y="70" fill="white" font-weight="bold" font-size="16" text-anchor="middle">ABOUT PAGE</text></svg>`,
            initialCode: "",
            progress: 80,
            validator: function (code) { return code.toLowerCase().includes("<h2>") && code.toLowerCase().includes("href=\"index.html\""); }
        },
        {
            title: "17. Link pages together 🔄",
            body: `<p>When you have 2 pages pointing to each other, you have officially built an interconnected system!</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type "CYCLE".</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><circle cx="120" cy="75" r="40" fill="none" stroke="#00f2ff" stroke-width="4"/><polygon points="120,30 130,40 110,40" fill="#00f2ff"/><polygon points="120,120 110,110 130,110" fill="#00f2ff"/></svg>`,
            initialCode: "",
            progress: 85,
            validator: function (code) { return code.toUpperCase().includes("CYCLE"); }
        },
        {
            title: "18. Test navigation",
            body: `<p>Always test your links. Click them all. It is very easy to make a typo and link to nowhere.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Fix the typo in the href below.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="120" y="80" fill="red" font-family="monospace" font-size="16" text-anchor="middle">404 NOT FOUND</text></svg>`,
            initialCode: `<a href="inxdex.html">Go Home</a>`,
            progress: 90,
            validator: function (code) { return code.toLowerCase().includes("href=\"index.html\""); }
        },
        {
            title: "19. Fix broken links",
            body: `<p>Never let a dead link survive. It ruins user experience. Maintain your databanks securely.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type "MAINTENANCE".</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="100" y="40" width="40" height="70" rx="4" fill="#666"/><circle cx="120" cy="55" r="8" fill="white"/><circle cx="120" cy="95" r="8" fill="white"/></svg>`,
            initialCode: "",
            progress: 95,
            validator: function (code) { return code.toUpperCase().includes("MAINTENANCE"); }
        },
        {
            title: "20. Mini website complete 🎉",
            body: `<p>You now know structure, text formatting, lists, images, AND navigation linking. You are essentially a full fledged Web architect!</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type "VIRTUAL ARCHITECT" to master navigation.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="120" y="80" fill="#00ff9d" font-size="40" text-anchor="middle" class="pulse-cyan">🎉</text></svg>`,
            initialCode: "",
            progress: 100,
            validator: function (code) { return code.toUpperCase().includes("VIRTUAL ARCHITECT"); }
        }
    ]
};
