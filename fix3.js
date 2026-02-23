const fs = require('fs');
let code = fs.readFileSync('lessons/lesson6.js', 'utf8');

const targetStr = "drop a ` < style > ` block in the ` < head > `, and give it your custom theme.";
const replacement = "drop a <code>&lt;style&gt;</code> block in the <code>&lt;head&gt;</code>, and give it your custom theme.";

if (code.includes(targetStr)) {
    code = code.replace(targetStr, replacement);
    fs.writeFileSync('lessons/lesson6.js', code);
    console.log('Fixed lesson6.js syntax error');
} else {
    console.log('Target string not found');
}
