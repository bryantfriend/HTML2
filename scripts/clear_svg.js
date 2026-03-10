const fs = require('fs');
const path = require('path');

const dirs = ['intro']; // Only intro for now, as requested

dirs.forEach(d => {
    const dirPath = path.join(process.cwd(), 'lessons', d);
    if (!fs.existsSync(dirPath)) return;

    fs.readdirSync(dirPath).filter(f => f.startsWith('module') && f.endsWith('.js')).forEach(f => {
        const fp = path.join(dirPath, f);
        let content = fs.readFileSync(fp, 'utf8');

        let svgMatch = content.match(/svg:\s*\`([\s\S]*?)\`,/);
        if (svgMatch) {
            content = content.replace(svgMatch[0], 'svg: ``,');
            fs.writeFileSync(fp, content, 'utf8');
            console.log(`Cleared SVG in ${d}/${f}`);
        } else {
            let svgMatchDbl = content.match(/svg:\s*"([^"]*)",/);
            if (svgMatchDbl) {
                content = content.replace(svgMatchDbl[0], 'svg: ``,');
                fs.writeFileSync(fp, content, 'utf8');
                console.log(`Cleared SVG (quotes) in ${d}/${f}`);
            }
        }
    });
});
console.log('SVG clearing complete.');
