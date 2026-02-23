const fs = require('fs');
let code = fs.readFileSync('lessons/intro.js', 'utf8');
let modified = false;

// We match editor.value += '\n<!-- WORD -->'
code = code.replace(/editor\.value \+= '\\\\n<!-- ([a-zA-Z0-9_<>]+) -->'/g, (match, word) => {
    if (word.length > 2) {
        modified = true;
        const p1 = word.substring(0, Math.floor(word.length / 2));
        const p2 = word.substring(Math.floor(word.length / 2));
        return `editor.value += '\\\\n<!-- ' + '${p1}' + '${p2}' + ' -->'`;
    }
    return match;
});

// We also match editor.value += "\n<!-- WORD -->"
code = code.replace(/editor\.value \+= "\\\\n<!-- ([a-zA-Z0-9_<>]+) -->"/g, (match, word) => {
    if (word.length > 2) {
        modified = true;
        const p1 = word.substring(0, Math.floor(word.length / 2));
        const p2 = word.substring(Math.floor(word.length / 2));
        return `editor.value += "\\\\n<!-- " + "${p1}" + "${p2}" + " -->"`;
    }
    return match;
});

// For instances where standard newlines are used instead of escaped
code = code.replace(/editor\.value \+= '\\n<!-- ([a-zA-Z0-9_<>]+) -->'/g, (match, word) => {
    if (word.length > 2) {
        modified = true;
        const p1 = word.substring(0, Math.floor(word.length / 2));
        const p2 = word.substring(Math.floor(word.length / 2));
        return `editor.value += '\\n<!-- ' + '${p1}' + '${p2}' + ' -->'`;
    }
    return match;
});

if (modified) {
    fs.writeFileSync('lessons/intro.js', code);
    console.log('Fixed assignment shadowing in intro.js');
} else {
    console.log('No modifications needed.');
}
