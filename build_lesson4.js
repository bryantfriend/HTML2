const fs = require('fs');
const path = require('path');

const outDir = 'lessons/lesson4';
if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
}

// metadata
fs.writeFileSync(path.join(outDir, 'metadata.js'), `window.Lessons = window.Lessons || {};
window.Lessons.lesson4 = {
    id: "lesson4",
    title: "Lesson 4: Images & Media",
    description: "Make your websites pop with pictures, GIFs, audio, and video!",
    gameTitle: "Media Master",
    gamePath: "minigames/game4.html",
    modules: []
};`);

const modules = [
    {
        title: "1. A World of Pictures",
        body: "Text is great, but pictures make the web beautiful! Let's learn to drop images into our websites.",
        mission: "Type READY to begin.",
        initialCode: "<!-- Ready? -->",
        validator: `function(code) { return code.toUpperCase().includes("READY"); }`
    },
    {
        title: "2. The <img> Tag",
        body: "To add an image, we use the `<img>` tag. It's a special tag called a **self-closing** tag because it doesn't need an `</img>` at the end!",
        mission: "Type exactly `<img>`",
        initialCode: "",
        validator: `function(code) { return code.includes("<img>"); }`
    },
    {
        title: "3. The src Attribute",
        body: "The computer needs to know *which* image to show. We use the `src` (source) attribute to tell it the URL or file name of the image.",
        mission: "Type `src=\"cat.jpg\"` inside the img tag.",
        initialCode: "<img >",
        validator: `function(code) { return code.includes('src="cat.jpg"'); }`
    },
    {
        title: "4. Let's add a Cat!",
        body: "Put it all together! Add an image tag with `src=\"https://placekitten.com/200/200\"`",
        mission: "Write the full image tag.",
        initialCode: "",
        validator: `function(code) { return code.includes("<img") && code.includes("src="); }`
    },
    {
        title: "5. Broken Images",
        body: "If you spell the file name wrong, the image breaks! Try spelling it 'cot.jpg' to see what happens.",
        mission: "Make a broken image.",
        initialCode: "<img src=\"cat.jpg\">",
        validator: `function(code) { return code.includes('cot.jpg'); }`
    },
    {
        title: "6. The alt Attribute",
        body: "If an image breaks, or someone using a screen-reader visits your site, the `alt` attribute tells them what the image is supposed to be.",
        mission: "Add `alt=\"A cute cat\"` to the image tag.",
        initialCode: "<img src=\"cat.jpg\">",
        validator: `function(code) { return code.includes('alt='); }`
    },
    {
        title: "7. Alt text in action",
        body: "Now crack the image by misspelling it, and see how your alt text saves the day!",
        mission: "Break the src url, but keep the alt text describing it.",
        initialCode: "<img src=\"cat.png\" alt=\"Fluffy cat\">",
        validator: `function(code) { return !code.includes('cat.png') && code.includes('alt='); }`
    },
    {
        title: "8. The width Attribute",
        body: "Your cat might be too huge! Use the `width` attribute to set its size in pixels.",
        mission: "Add `width=\"100\"` to the img tag.",
        initialCode: "<img src=\"cat.jpg\">",
        validator: `function(code) { return code.includes('width=\"100\"'); }`
    },
    {
        title: "9. The height Attribute",
        body: "You can also specify the `height`. But usually, setting just one is better so the image doesn't look stretched!",
        mission: "Add `height=\"300\"`.",
        initialCode: "<img src=\"cat.jpg\">",
        validator: `function(code) { return code.includes('height=\"300\"'); }`
    },
    {
        title: "10. Squished Cat",
        body: "If you set weird custom widths and heights, your image will stretch!",
        mission: "Set width=\"500\" and height=\"50\" to squish the cat.",
        initialCode: "<img src=\"cat.jpg\" width=\"200\" height=\"200\">",
        validator: `function(code) { return code.includes('width=\"500\"') && code.includes('height=\"50\"'); }`
    },
    {
        title: "11. Image Formats",
        body: "Images come in different types like `.jpg`, `.png`, and `.gif`. GIFs can be animated!",
        mission: "Change the src from cat.jpg to dance.gif",
        initialCode: "<img src=\"cat.jpg\">",
        validator: `function(code) { return code.includes('dance.gif'); }`
    },
    {
        title: "12. The Ultimate Image Tag",
        body: "Let's put everything together. An image with a source, alt text, and a width.",
        mission: "Create an img tag with src, alt, and width.",
        initialCode: "",
        validator: `function(code) { return code.includes('<img') && code.includes('src=') && code.includes('alt=') && code.includes('width='); }`
    },
    {
        title: "13. What about Sound?",
        body: "We can add music or voice clips using the `<audio>` tag. Unlike images, audio tags have an opening and a closing tag.",
        mission: "Type `<audio>` and `</audio>`.",
        initialCode: "",
        validator: `function(code) { return code.includes('<audio>') && code.includes('</audio>'); }`
    },
    {
        title: "14. Audio Sources",
        body: "Just like images, audio needs a `src` attribute.",
        mission: "Add `src=\"music.mp3\"` to the opening audio tag.",
        initialCode: "<audio>\n</audio>",
        validator: `function(code) { return code.includes('src=\"music.mp3\"'); }`
    },
    {
        title: "15. The controls Attribute",
        body: "If you don't add the word `controls` inside the audio tag, the player will be invisible! This is a boolean attribute, it doesn't need an equals sign.",
        mission: "Add `controls` inside the opening `<audio>` tag.",
        initialCode: "<audio src=\"music.mp3\">\n</audio>",
        validator: `function(code) { return code.includes('controls'); }`
    },
    {
        title: "16. Video time!",
        body: "The `<video>` tag works exactly like the audio tag, but it shows moving pictures!",
        mission: "Type `<video>` and `</video>`.",
        initialCode: "",
        validator: `function(code) { return code.includes('<video>') && code.includes('</video>'); }`
    },
    {
        title: "17. Video Source & Controls",
        body: "Add a `src` and `controls` to the video tag so we can play it.",
        mission: "Add src=\"movie.mp4\" and controls.",
        initialCode: "<video>\n</video>",
        validator: `function(code) { return code.includes('src=') && code.includes('controls'); }`
    },
    {
        title: "18. Sizing Videos",
        body: "Videos can be huge! Use the `width` attribute on the video tag to shrink it down.",
        mission: "Add `width=\"300\"` to the video tag.",
        initialCode: "<video src=\"movie.mp4\" controls>\n</video>",
        validator: `function(code) { return code.includes('width=\"300\"'); }`
    },
    {
        title: "19. The autoplay Attribute",
        body: "Want a video to start on its own? Add the `autoplay` attribute!",
        mission: "Add `autoplay` to the tag.",
        initialCode: "<video src=\"movie.mp4\" controls width=\"300\">\n</video>",
        validator: `function(code) { return code.includes('autoplay'); }`
    },
    {
        title: "20. The Media Portfolio Challenge",
        body: "Final boss! Let's combine an image, an audio player, and a video player into one page with headings for each.",
        mission: "Create an `<h2>` for Image, Audio, and Video, and drop the three tags below them.",
        initialCode: "<h2>My Image</h2>\n\n\n<h2>My Song</h2>\n\n\n<h2>My Movie</h2>\n",
        validator: `function(code) { return code.includes('<img') && code.includes('<audio') && code.includes('<video'); }`
    }
];

modules.forEach((mod, i) => {
    const fileContent = `window.Lessons.lesson4.modules[${i}] = {
    title: "${mod.title}",
    body: \`<p>${mod.body}</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: ${mod.mission}</p>\`,
    svg: \`<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" style="background:#1e293b; border-radius:8px;">
        <circle cx="120" cy="75" r="40" fill="#3b82f6" opacity="0.5"/>
        <text x="120" y="80" fill="white" font-family="sans-serif" font-size="20" text-anchor="middle">MODULE ${i + 1}</text>
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

console.log("Successfully generated lesson4 modules!");
