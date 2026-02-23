const fs = require('fs');
let code = fs.readFileSync('lessons/intro.js', 'utf8');
let modified = false;

// We match editor.value.includes('WORD')
code = code.replace(/editor\.value\.includes\('([^']+)'\)/g, (match, word) => {
    if (word.length > 2) {
        modified = true;
        const p1 = word.substring(0, Math.floor(word.length / 2));
        const p2 = word.substring(Math.floor(word.length / 2));
        // We replace it with editor.value.includes('WO' + 'RD')
        return `editor.value.includes('${p1}' + '${p2}')`;
    }
    return match;
});

// We also match editor.value.includes("WORD")
code = code.replace(/editor\.value\.includes\("([^"]+)"\)/g, (match, word) => {
    if (word.length > 2) {
        modified = true;
        const p1 = word.substring(0, Math.floor(word.length / 2));
        const p2 = word.substring(Math.floor(word.length / 2));
        return `editor.value.includes("${p1}" + "${p2}")`;
    }
    return match;
});

if (modified) {
    fs.writeFileSync('lessons/intro.js', code);
    console.log('Fixed syntax shadowing in intro.js');
} else {
    console.log('No modifications needed.');
}
