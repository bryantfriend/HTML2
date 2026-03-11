const fs = require('fs');
const path = require('path');

const lessonsData = [
    {
        id: "lesson11", title: "Lesson 11: Intro to JavaScript",
        description: "Give your websites a brain! Learn how to show alerts, use the console, and store data in variables.",
        gameTitle: "Variable Voyager", gamePath: "minigames/game11.html", themeColor: "#eab308", keyword: "SCRIPT"
    },
    {
        id: "lesson12", title: "Lesson 12: Interactivity",
        description: "Make buttons actually do things! Learn about Event Listeners and how to change HTML from JavaScript.",
        gameTitle: "Event Explorer", gamePath: "minigames/game12.html", themeColor: "#f97316", keyword: "CLICK"
    },
    {
        id: "lesson13", title: "Lesson 13: Logic & Decisions",
        description: "Teach your website to think! Learn about If/Else statements and Loops.",
        gameTitle: "Logic Labyrinth", gamePath: "minigames/game13.html", themeColor: "#8b5cf6", keyword: "LOGIC"
    },
    {
        id: "lesson14", title: "Lesson 14: Portfolio Capstone",
        description: "The ultimate challenge. Combine HTML, CSS, and JS to build a multi-page portfolio showcasing your minigames!",
        gameTitle: "Master Builder", gamePath: "minigames/game14.html", themeColor: "#10b981", keyword: "PORTFOLIO"
    }
];

lessonsData.forEach(function (lesson) {
    const outDir = 'lessons/' + lesson.id;
    if (!fs.existsSync(outDir)) { fs.mkdirSync(outDir, { recursive: true }); }

    let metadataStr = "window.Lessons = window.Lessons || {};\n";
    metadataStr += "window.Lessons." + lesson.id + " = " + JSON.stringify({
        id: lesson.id,
        title: lesson.title,
        description: lesson.description,
        gameTitle: lesson.gameTitle,
        gamePath: lesson.gamePath,
        modules: []
    }, null, 4) + ";";
    fs.writeFileSync(path.join(outDir, 'metadata.js'), metadataStr);

    for (let i = 0; i < 20; i++) {
        let content = "window.Lessons." + lesson.id + ".modules[" + i + "] = " + JSON.stringify({
            title: lesson.title,
            body: "<p>We will learn about " + lesson.keyword + ".</p><p class='text-sm italic text-gray-400 mt-4'>Mission: Type " + lesson.keyword + "</p>",
            svg: "<svg width='240' height='150' viewBox='0 0 240 150'><rect width='240' height='150' fill='#1e293b'/><text x='120' y='80' fill='" + lesson.themeColor + "' font-size='20' text-anchor='middle'>" + lesson.keyword + "</text></svg>",
            widgetCode: "<script>document.getElementById('code-editor').readOnly=false;document.getElementById('code-editor').style.opacity='1';</" + "script>",
            initialCode: "<!-- Ready -->",
            progress: ((i + 1) * 5)
        }, null, 4) + ";\n";

        content += "window.Lessons." + lesson.id + ".modules[" + i + "].validator = function(code) { return code.toUpperCase().includes('" + lesson.keyword + "'); };\n";
        fs.writeFileSync(path.join(outDir, 'module' + (i + 1) + '.js'), content);
    }
    console.log("Successfully generated " + lesson.id + " modules!");
});
