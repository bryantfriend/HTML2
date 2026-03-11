const fs = require('fs');
const path = require('path');

const outDir = 'lessons/lesson9';
if (!fs.existsSync(outDir)) { fs.mkdirSync(outDir, { recursive: true }); }

fs.writeFileSync(path.join(outDir, 'metadata.js'), `window.Lessons = window.Lessons || {};
window.Lessons.lesson9 = {
    id: "lesson9",
    title: "Lesson 9: Layouts with Flexbox",
    description: "Centering things used to be a nightmare. Thanks to Flexbox, building layouts is easy!",
    gameTitle: "Flex Master",
    gamePath: "minigames/game9.html",
    modules: []
};`);

const fileContent = `window.Lessons.lesson9.modules[0] = {
    title: "Flexbox basics",
    body: "<p>We will learn display: flex, justify-content, align-items, flex-direction, gap, wrap.</p><p class='text-sm italic text-gray-400 mt-4'>Mission: Type FLEX</p>",
    svg: "<svg width='240' height='150' viewBox='0 0 240 150'><rect width='240' height='150' fill='#1e293b'/><text x='120' y='80' fill='#a855f7' font-size='20' text-anchor='middle'>FLEXBOX</text></svg>",
    widgetCode: "<script>document.getElementById('code-editor').readOnly=false;document.getElementById('code-editor').style.opacity='1';</script>",
    initialCode: "<!-- Ready -->",
    progress: 5,
    validator: function(code) { return code.toUpperCase().includes('FLEX'); }
};`;

for (let i = 0; i < 20; i++) {
    let modContent = fileContent.replace(/\[0\]/g, '[' + i + ']');
    fs.writeFileSync(path.join(outDir, 'module' + (i + 1) + '.js'), modContent);
}
console.log("Successfully generated lesson9 modules!");
