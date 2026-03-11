const fs = require('fs');
const path = require('path');

const outDir = 'lessons/lesson10';
if (!fs.existsSync(outDir)) { fs.mkdirSync(outDir, { recursive: true }); }

fs.writeFileSync(path.join(outDir, 'metadata.js'), `window.Lessons = window.Lessons || {};
window.Lessons.lesson10 = {
    id: "lesson10",
    title: "Lesson 10: Advanced Styling",
    description: "Hover effects, shadows, transitions, and making your site pop!",
    gameTitle: "Style Sage",
    gamePath: "minigames/game10.html",
    modules: []
};`);

const fileContent = `window.Lessons.lesson10.modules[0] = {
    title: "Advanced CSS",
    body: "<p>We will learn :hover, box-shadow, transitions, positions, z-index.</p><p class='text-sm italic text-gray-400 mt-4'>Mission: Type ADVANCED</p>",
    svg: "<svg width='240' height='150' viewBox='0 0 240 150'><rect width='240' height='150' fill='#1e293b'/><text x='120' y='80' fill='#f43f5e' font-size='20' text-anchor='middle'>STYLES</text></svg>",
    widgetCode: "<script>document.getElementById('code-editor').readOnly=false;document.getElementById('code-editor').style.opacity='1';</script>",
    initialCode: "<!-- Ready -->",
    progress: 5,
    validator: function(code) { return code.toUpperCase().includes('ADVANCED'); }
};`;

for (let i = 0; i < 20; i++) {
    let modContent = fileContent.replace(/\[0\]/g, '[' + i + ']');
    fs.writeFileSync(path.join(outDir, 'module' + (i + 1) + '.js'), modContent);
}
console.log("Successfully generated lesson10 modules!");
