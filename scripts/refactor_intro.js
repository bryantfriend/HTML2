const fs = require('fs');
const path = require('path');

const dirs = ['intro', 'lesson1'];

dirs.forEach(d => {
    const dirPath = path.join(process.cwd(), 'lessons', d);
    if (!fs.existsSync(dirPath)) return;

    fs.readdirSync(dirPath).filter(f => f.startsWith('module') && f.endsWith('.js')).forEach(f => {
        const fp = path.join(dirPath, f);
        let content = fs.readFileSync(fp, 'utf8');

        let initialCodeMatch = content.match(/initialCode:\s*\`([\s\S]*?)\`,/);
        if (!initialCodeMatch) {
            let initialCodeMatchDbl = content.match(/initialCode:\s*"([^"]*)",/);
            if (initialCodeMatchDbl) {
                // Not standard backtick, ignore or let's not touch unless needed
                return;
            } else {
                return;
            }
        }

        let initContent = initialCodeMatch[1];

        // Heuristic to detect UI code instead of student starter code
        if (initContent.includes('<div style') || initContent.includes('<div class') || initContent.includes('onclick=')) {
            console.log(`Refactoring ${d}/${f}...`);
            let newInit = 'initialCode: \`\`,';

            let widgetMatch = content.match(/widgetCode:\s*\`([\s\S]*?)\`,/);
            if (widgetMatch) {
                let newWidget = `widgetCode: \`${widgetMatch[1]}\n${initContent}\`,`;
                content = content.replace(widgetMatch[0], newWidget);
                content = content.replace(initialCodeMatch[0], newInit);
            } else {
                // Insert widgetCode where initialCode was
                let newWidget = `widgetCode: \`${initContent}\`,\n    ${newInit}`;
                content = content.replace(initialCodeMatch[0], newWidget);
            }

            fs.writeFileSync(fp, content, 'utf8');
        }
    });
});
console.log('Refactor complete.');
