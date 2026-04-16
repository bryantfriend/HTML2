require('./scripts/build_lesson8_game');
/*
const fs = require('fs');
const path = require('path');

const outDir = 'lessons/lesson8';
if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
}

fs.writeFileSync(path.join(outDir, 'metadata.js'), `window.Lessons = window.Lessons || {};
window.Lessons.lesson8 = {
    id: "lesson8",
    title: "Lesson 8: The Box Model",
    description: "Every HTML element is a box! Let's learn to control spacing with Margins, Padding, and Borders.",
    gameTitle: "Box Builder",
    gamePath: "minigames/game8.html",
    modules: []
};`);

const modules = [
    { title: "1. Everything is a Box", body: "In HTML, every tag is actually an invisible rectangular box. CSS lets us see and control these boxes.", mission: "Type READY to begin.", initialCode: "<!-- Ready? -->", validator: `function(code) { return code.toUpperCase().includes("READY"); }` },
    { title: "2. Visualizing the Box", body: "Let's put a border on a `<div>` so we can see it! We use the `border` property.", mission: "Add `border: 2px solid red;` to the div.", initialCode: "<style>\n  div {\n    background-color: yellow;\n  }\n</style>\n<div>I am a box!</div>", validator: `function(code) { return code.includes("border:") && code.includes("2px solid red"); }` },
    { title: "3. Height and Width", body: "By default, a `<div>` stretches all the way across the screen! We can shrink it using `width` and `height`.", mission: "Add `width: 200px;` and `height: 100px;`", initialCode: "<style>\n  div {\n    background-color: lightblue;\n  }\n</style>\n<div>Make me smaller!</div>", validator: `function(code) { return code.includes("width:") && code.includes("200px") && code.includes("height:") && code.includes("100px"); }` },
    { title: "4. Padding (Inner Space)", body: "The text inside the box is touching the edges! We use `padding` to push the text *away* from the inside walls of the box.", mission: "Add `padding: 20px;` to the div.", initialCode: "<style>\n  div {\n    background-color: salmon;\n    border: 2px solid black;\n  }\n</style>\n<div>Give me some space inside!</div>", validator: `function(code) { return code.includes("padding:") && code.includes("20px"); }` },
    { title: "5. Specific Padding", body: "You can specify padding for each side: `padding-top`, `padding-right`, `padding-bottom`, `padding-left`.", mission: "Give the div a `padding-left: 50px;`", initialCode: "<style>\n  div {\n    background-color: yellow;\n  }\n</style>\n<div>Push me right!</div>", validator: `function(code) { return code.includes("padding-left:") && code.includes("50px"); }` },
    { title: "6. Margin (Outer Space)", body: "If two boxes are touching the outside, we use `margin` to push them apart! Margin is space *outside* the border.", mission: "Add `margin: 30px;` to the boxes.", initialCode: "<style>\n  .box {\n    background-color: teal;\n    color: white;\n    padding: 10px;\n  }\n</style>\n<div class=\"box\">Box 1</div>\n<div class=\"box\">Box 2</div>", validator: `function(code) { return code.includes("margin:") && code.includes("30px"); }` },
    { title: "7. Centering a Box", body: "A magic trick to center a box in the middle of the screen is giving it a `width`, and then using `margin: 0 auto;` (which splits the left and right margin equally!).", mission: "Center the box by adding `margin: 0 auto;`", initialCode: "<style>\n  .box {\n    width: 300px;\n    background-color: pink;\n    padding: 20px;\n  }\n</style>\n<div class=\"box\">Center me!</div>", validator: `function(code) { return code.includes("margin:") && code.includes("0 auto"); }` },
    { title: "8. Margin vs Padding", body: "Remember: Padding expands the inside (background grows). Margin expands the outside (pushes other stuff away).", mission: "Give Box 1 `margin: 20px;` and Box 2 `padding: 20px;`", initialCode: "<style>\n  .b1 { background: red; }\n  .b2 { background: blue; color: white; }\n</style>\n<div class=\"b1\">Box 1</div>\n<div class=\"b2\">Box 2</div>", validator: `function(code) { return code.includes("margin: 20px") && code.includes("padding: 20px"); }` },
    { title: "9. Border Width and Style", body: "Borders don't just have to be solid! Try `dashed` or `dotted`.", mission: "Change `solid` to `dashed` and `2px` to `5px`.", initialCode: "<style>\n  div {\n    border: 2px solid black;\n  }\n</style>\n<div>Dashed lines!</div>", validator: `function(code) { return code.includes("5px dashed black"); }` },
    { title: "10. Border Radius (Curves)", body: "Sharp corners are so 1990s! Let's round the corners using `border-radius`.", mission: "Add `border-radius: 10px;` to the button.", initialCode: "<style>\n  button {\n    background-color: #3b82f6;\n    color: white;\n    padding: 10px 20px;\n    border: none;\n  }\n</style>\n<button>Click Me</button>", validator: `function(code) { return code.includes("border-radius:") && code.includes("10px"); }` },
    { title: "11. Perfect Circles", body: "If you have a square box (same width and height) and give it `border-radius: 50%;`, it becomes a perfect circle!", mission: "Make the box a circle with `border-radius: 50%;`", initialCode: "<style>\n  .circle {\n    width: 100px;\n    height: 100px;\n    background-color: red;\n  }\n</style>\n<div class=\"circle\"></div>", validator: `function(code) { return code.includes("border-radius:") && code.includes("50%"); }` },
    { title: "12. The Box Sizing Bug", body: "Normally, adding padding makes a box wider than its `width`! To fix this, we tell the browser to include padding in the width by using `box-sizing: border-box;`", mission: "Add `box-sizing: border-box;` to the div.", initialCode: "<style>\n  div {\n    width: 200px;\n    padding: 50px;\n    background: purple;\n    color: white;\n  }\n</style>\n<div>No stretching!</div>", validator: `function(code) { return code.includes("box-sizing:") && code.includes("border-box"); }` },
    { title: "13. Block vs Inline", body: "`<div>`, `<h1>`, and `<p>` are BLOCK boxes (take up the whole line). `<a>`, `<span>`, and `<button>` are INLINE boxes (sit next to each other).", mission: "Change the `<span>` to act like a block by adding `display: block;`", initialCode: "<style>\n  span {\n    background: yellow;\n  }\n</style>\n<span>I'm inline!</span><span>Me too!</span>", validator: `function(code) { return code.includes("display:") && code.includes("block"); }` },
    { title: "14. Inline-Block", body: "If you want boxes to sit next to each other but still have width and height, use `display: inline-block;`", mission: "Give the boxes `display: inline-block;` and `width: 100px;`", initialCode: "<style>\n  .box {\n    background: lightgreen;\n    height: 100px;\n    border: 2px solid black;\n  }\n</style>\n<div class=\"box\">1</div>\n<div class=\"box\">2</div>", validator: `function(code) { return code.includes("display:") && code.includes("inline-block") && code.includes("width:") && code.includes("100px"); }` },
    { title: "15. Review: Margin", body: "Quick check! To push another box completely away, what do you use?", mission: "Add 50px of margin.", initialCode: "<style>\n  .b { background: cyan; }\n</style>\n<div class=\"b\">Space me out</div>", validator: `function(code) { return code.includes("margin:") && code.includes("50px"); }` },
    { title: "16. Review: Padding", body: "To give text breathing room inside its box?", mission: "Add 30px of padding.", initialCode: "<style>\n  .b { background: pink; }\n</style>\n<div class=\"b\">Give me inner space</div>", validator: `function(code) { return code.includes("padding:") && code.includes("30px"); }` },
    { title: "17. Review: Radius", body: "To make rounded corners?", mission: "Add 15px border radius.", initialCode: "<style>\n  .b { background: lime; }\n</style>\n<div class=\"b\">Round me</div>", validator: `function(code) { return code.includes("border-radius:") && code.includes("15px"); }` },
    { title: "18. Shorthand Padding", body: "`padding: 10px 20px 30px 40px;` sets TOP, RIGHT, BOTTOM, LEFT in that order (clockwise).", mission: "Set padding to `10px 20px;` (10 top/bottom, 20 left/right)", initialCode: "<style>\n  .b { background: orange; }\n</style>\n<div class=\"b\">Clockwise</div>", validator: `function(code) { return code.includes("padding:") && code.includes("10px 20px"); }` },
    { title: "19. Transparent Borders", body: "You can make a box look invisible but still take up space!", mission: "Change background and border to `transparent`.", initialCode: "<style>\n  .ghost { border: 2px solid black; background: white; width: 100px; height: 100px; }\n</style>\n<div class=\"ghost\"></div>", validator: `function(code) { return (code.match(/transparent/gi)||[]).length >= 1; }` },
    { title: "20. The Ultimate Box Challenge", body: "Build a beautiful card! A centered box, with a solid border, rounded corners, inner padding, and margin to push it off the screen edges.", mission: "Complete the `.card` classes CSS according to the instructions.", initialCode: "<style>\n  .card {\n    width: 300px;\n    background: #1e293b;\n    color: white;\n    add margin auto, 20px padding, 15px radius, 2px solid cyan border\n  }\n</style>\n<div class=\"card\"><h2>Profile</h2><p>I am a card.</p></div>", validator: `function(code) { return code.includes("margin:") && code.includes("auto") && code.includes("padding:") && code.includes("20px") && code.includes("radius:") && code.includes("border:"); }` }
];

modules.forEach((mod, i) => {
    // Generate identical but 20 files setup
    const fileContent = `window.Lessons.lesson8.modules[${i}] = {
    title: "${mod.title.replace(/"/g, '\\"')}",
    body: \`<p>${mod.body.replace(/`/g, '\\`').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: ${mod.mission.replace(/`/g, '\\`').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>\`,
    svg: \`<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" style="background:#1e293b; border-radius:8px;">
        <rect x="70" y="25" width="100" height="100" fill="none" stroke="#2dd4bf" stroke-width="6" stroke-dasharray="10,5"/>
        <text x="120" y="80" fill="#2dd4bf" font-family="sans-serif" font-size="16" text-anchor="middle">MOD ${i + 1}</text>
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

console.log("Successfully generated lesson8 modules!");
*/
