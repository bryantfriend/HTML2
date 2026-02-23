window.Lessons = window.Lessons || {};
window.Lessons.lesson4 = {
    id: "lesson4",
    title: "04: LESSON 4 — IMAGES",
    description: "Embed visual assets directly into your pages. [20 MODULES]",
    modules: [
        {
            title: "1. Why images matter 🖼️",
            body: `<p>A picture is worth a thousand words. Text provides information, but images provide emotion, context, and beauty.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type "PICTURE" to start embedding visuals.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="30" width="160" height="90" rx="4" fill="none" stroke="#00f2ff" stroke-width="2"/><circle cx="120" cy="75" r="30" fill="#00f2ff" class="pulse-cyan"/><polygon points="90,120 120,80 160,120" fill="#ff00e5"/></svg>`,
            initialCode: "",
            progress: 5,
            validator: function (code) { return code.toUpperCase().includes("PICTURE"); }
        },
        {
            title: "2. Image file types",
            body: `<p>The web primarily uses three types of image files: <strong>.jpg</strong> (photos). <strong>.png</strong> (graphics with transparency). <strong>.gif</strong> (animations).</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type "JPG PNG GIF".</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="120" y="50" fill="white" font-size="16" text-anchor="middle">.JPG</text><text x="120" y="80" fill="white" font-size="16" text-anchor="middle">.PNG</text><text x="120" y="110" fill="white" font-size="16" text-anchor="middle">.GIF</text></svg>`,
            initialCode: "",
            progress: 10,
            validator: function (code) { return code.toUpperCase().includes("JPG PNG GIF"); }
        },
        {
            title: "3. <img> tag overview",
            body: `<p>The <code>&lt;img&gt;</code> tag embeds an image. It is an "empty" tag, meaning it doesn't wrap text and it has no closing tag like <code>&lt;/img&gt;</code>.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type an &lt;img&gt; tag.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="50" width="140" height="50" rx="4" fill="#0a0b1e" stroke="#00ff9d" stroke-width="3"/><text x="120" y="82" fill="#00ff9d" font-family="monospace" font-size="24" font-weight="bold" text-anchor="middle">&lt;img&gt;</text></svg>`,
            initialCode: "",
            progress: 15,
            validator: function (code) { return code.toLowerCase().includes("<img"); }
        },
        {
            title: "4. src attribute",
            body: `<p>But an <code>&lt;img&gt;</code> tag alone isn't enough. It needs to know WHERE the image is. We tell it using the <strong>src</strong> (source) attribute.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type exactly: src="url"</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="120" y="80" fill="#00f2ff" font-family="monospace" font-size="18" text-anchor="middle">src="..."</text></svg>`,
            initialCode: "",
            progress: 20,
            validator: function (code) { return code.toLowerCase().includes("src="); }
        },
        {
            title: "5. File location basics",
            body: `<p>If the image file is saved in the exact same folder as your HTML file on your computer, you can just use the name: <code>src="dog.jpg"</code>.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Include dog.jpg as the src in an img tag.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="40" width="160" height="70" fill="none" stroke="#fff" stroke-dasharray="4"/><text x="120" y="80" fill="#ff00e5" font-family="monospace" font-size="14" text-anchor="middle">dog.jpg</text></svg>`,
            initialCode: `<img src="">`,
            progress: 25,
            validator: function (code) { return code.toLowerCase().includes("src=\"dog.jpg\""); }
        },
        {
            title: "6. Using internet images (with caution)",
            body: `<p>You can also grab an image directly from the internet by using its full web address (URL) in the src. (e.g., https://site.com/cat.jpg)</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Give the img tag the provided web URL.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="120" y="80" fill="#00ff9d" font-family="monospace" font-size="16" text-anchor="middle">INTERNET IMAGE</text></svg>`,
            initialCode: "<!-- URL: https://via.placeholder.com/100/ff00e5 -->\n<img>",
            progress: 30,
            validator: function (code) { return code.toLowerCase().includes("https://via.placeholder.com/100/ff00e5"); }
        },
        {
            title: "7. alt text explained",
            body: `<p>Always include the <strong>alt</strong> (alternative text) attribute. If the image fails to load, or a blind person uses a screen reader, it reads the alt text!</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Add an alt attribute describing the broken image.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="60" y="40" width="120" height="70" fill="none" stroke="#666" stroke-dasharray="2"/><text x="120" y="80" fill="white" font-family="monospace" font-size="12" text-anchor="middle">X Broken File</text></svg>`,
            initialCode: `<img src="fake.jpg">`,
            progress: 35,
            validator: function (code) { return code.toLowerCase().includes("alt="); }
        },
        {
            title: "8. Image size attributes",
            body: `<p>Sometimes internet images are HUGE! You can control them using the <code>width</code> or <code>height</code> attributes (measured in pixels).</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Give the image a width="200".</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="40" width="160" height="70" fill="none" stroke="#00f2ff" stroke-width="2"/><text x="120" y="30" fill="#00f2ff" font-family="sans-serif" font-size="12" text-anchor="middle">width="..."</text><line x1="40" y1="25" x2="200" y2="25" stroke="#00f2ff"/></svg>`,
            initialCode: `<img src="https://via.placeholder.com/400" alt="Placeholder">`,
            progress: 40,
            validator: function (code) { return code.toLowerCase().includes("width=\"200\""); }
        },
        {
            title: "9. Width vs height",
            body: `<p>You can set both width and height to squish or stretch an image. It's usually a bad idea, as they look distorted.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Set the width to "300" and the height to "50" to make a weird stretched image.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><ellipse cx="120" cy="75" rx="80" ry="20" fill="none" stroke="#ff00e5" stroke-width="3"/><text x="120" y="80" fill="white" font-size="10" text-anchor="middle">S Q U I S H E D</text></svg>`,
            initialCode: `<img src="https://via.placeholder.com/150" alt="Square">`,
            progress: 45,
            validator: function (code) { return code.toLowerCase().includes("width") && code.toLowerCase().includes("height"); }
        },
        {
            title: "10. Keeping proportions",
            body: `<p>Pro-tip: Only set the width OR the height, not both! The browser will automatically calculate the other one so the image retains its proportions perfectly.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Remove the height attribute so the image looks normal again.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="70" y="25" width="100" height="100" fill="none" stroke="#00ff9d" stroke-width="3"/><text x="120" y="80" fill="#00ff9d" font-size="16" text-anchor="middle">PERFECT</text></svg>`,
            initialCode: `<img src="https://via.placeholder.com/150" width="100" height="20" alt="Square">`,
            progress: 50,
            validator: function (code) { return code.toLowerCase().includes("width=\"100\"") && !code.toLowerCase().includes("height"); }
        },
        {
            title: "11. Placing images on page",
            body: `<p>Where you type the image code determines where it shows up. If you put it after a paragraph, the image will appear below the paragraph.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type "PLACEMENT".</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="120" y="40" fill="white" font-size="14" text-anchor="middle">TEXT ABOVE</text><rect x="80" y="60" width="80" height="60" fill="#00f2ff"/><text x="120" y="140" fill="white" font-size="14" text-anchor="middle">TEXT BELOW</text></svg>`,
            initialCode: "",
            progress: 55,
            validator: function (code) { return code.toUpperCase().includes("PLACEMENT"); }
        },
        {
            title: "12. Image under text",
            body: `<p>Put the placeholder image we used earlier directly underneath the heading.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Add an img inside the body underneath the h1.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="200" height="110" fill="none" stroke="#ff00e5" stroke-dasharray="4" stroke-width="2"/></svg>`,
            initialCode: "<h1>Look at this</h1>\n<!-- url: https://via.placeholder.com/100/00ff9d -->\n",
            progress: 60,
            validator: function (code) { return code.toLowerCase().includes("<img") && code.indexOf("<img") > code.indexOf("</h1>"); }
        },
        {
            title: "13. Image above text",
            body: `<p>What if we want an image banner at the top of the page? Simply place the img tag BEFORE the h1!</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Move the tag so the image is above the heading.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="200" height="40" fill="#00f2ff"/><text x="120" y="90" fill="white" font-size="20" text-anchor="middle">TITLE HERE</text></svg>`,
            initialCode: "<h1>Look at this</h1>\n<img src=\"https://via.placeholder.com/100/00ff9d\">",
            progress: 65,
            validator: function (code) { return code.toLowerCase().includes("<img") && code.indexOf("<img") < code.indexOf("<h1>"); }
        },
        {
            title: "14. Multiple images",
            body: `<p>You can add as many images as you like. They will tile across the screen right next to each other automatically.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Copy the image tag and paste it so you have 3 identical images side by side.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="50" width="50" height="50" fill="#ff00e5"/><rect x="95" y="50" width="50" height="50" fill="#ff00e5"/><rect x="170" y="50" width="50" height="50" fill="#ff00e5"/></svg>`,
            initialCode: "<img src=\"https://via.placeholder.com/50/ff00e5\">\n",
            progress: 70,
            validator: function (code) { return (code.toLowerCase().match(/<img/g) || []).length >= 3; }
        },
        {
            title: "15. Teacher demo",
            body: `<p>Pay attention as the teacher searches for a free-to-use image online, copies the Image Link (URL), and embeds it.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type "COPY URL".</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><circle cx="120" cy="75" r="20" fill="#00ff9d" class="pulse-cyan"/><text x="120" y="115" fill="white" font-size="12" text-anchor="middle">COPY IMG LINK</text></svg>`,
            initialCode: "",
            progress: 75,
            validator: function (code) { return code.toUpperCase().includes("COPY URL"); }
        },
        {
            title: "16. Add favorite animal image 🐼",
            body: `<p>Use the placeholder below (or a real URL if you have one) to display a picture of an animal!</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Add an image using: https://via.placeholder.com/150/000000/FFFFFF/?text=Panda</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="60" r="15" fill="white"/><circle cx="140" cy="60" r="15" fill="white"/><circle cx="105" cy="60" r="5" fill="black"/><circle cx="135" cy="60" r="5" fill="black"/><path d="M110 90 Q120 100 130 90" stroke="white" stroke-width="3" fill="none"/></svg>`,
            initialCode: "<h1>My Favorite Animal</h1>\n<!-- Add image below -->",
            progress: 80,
            validator: function (code) { return code.toLowerCase().includes("<img") && code.includes("text=Panda"); }
        },
        {
            title: "17. Add vacation image 🌴",
            body: `<p>Add a second image right next to the animal image.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Add another image: https://via.placeholder.com/150/000000/FFFFFF/?text=Beach</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="30" width="60" height="60" fill="gray"/><rect x="140" y="30" width="60" height="60" fill="gray"/></svg>`,
            initialCode: "<h1>My Favorite Things</h1>\n<img src=\"https://via.placeholder.com/150/000000/FFFFFF/?text=Panda\">",
            progress: 85,
            validator: function (code) { return (code.toLowerCase().match(/<img/g) || []).length >= 2 && code.includes("text=Beach"); }
        },
        {
            title: "18. Fix broken images",
            body: `<p>Images break when the URL is misspelled, or the file doesn't exist. Fix the spelling of 'placeholder'.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Fix the spelling error in the URL.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="120" y="80" fill="red" font-family="monospace" font-size="20" font-weight="bold" text-anchor="middle">TYPOS = BROKEN</text></svg>`,
            initialCode: "<img src=\"https://via.placxxholder.com/150\">\n<p>It's broken!</p>",
            progress: 90,
            validator: function (code) { return code.toLowerCase().includes("placeholder"); }
        },
        {
            title: "19. Review page visually",
            body: `<p>Look at how the text and images interact. Always make sure your images aren't so colossal they blow up the page.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type "PROPORTION".</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="60" y="30" width="120" height="90" fill="none" stroke="#00f2ff" stroke-width="4"/><text x="120" y="80" fill="#00f2ff" font-size="14" text-anchor="middle">BALANCED</text></svg>`,
            initialCode: "",
            progress: 95,
            validator: function (code) { return code.toUpperCase().includes("PROPORTION"); }
        },
        {
            title: "20. Share favorite image",
            body: `<p>You now hold the power to bring graphics onto the screen. Use it wisely!</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type "COMPLETE" to secure your image training.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="120" y="80" fill="#00ff9d" font-size="50" text-anchor="middle">📸</text></svg>`,
            initialCode: "",
            progress: 100,
            validator: function (code) { return code.toUpperCase().includes("COMPLETE"); }
        }
    ]
};
