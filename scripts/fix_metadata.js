const fs = require('fs');
const path = require('path');

const lessonsDir = 'lessons';
const lessons = fs.readdirSync(lessonsDir).filter(f => fs.statSync(path.join(lessonsDir, f)).isDirectory());

lessons.forEach(lesson => {
    const metadataPath = path.join(lessonsDir, lesson, 'metadata.js');
    if (fs.existsSync(metadataPath)) {
        let content = fs.readFileSync(metadataPath, 'utf8');
        // Fix the literal \n and missing comma issues
        // The previous bad replace did: ",\n    modules:" where \n was literal backslash-n
        content = content.replace(/,\\n\s*modules:/, ',\n    modules:');
        // Also fix any remaining missing commas if they exist
        content = content.replace(/(?<![,\{\[]\s*)\n\s*modules:/, ',\n    modules:');

        fs.writeFileSync(metadataPath, content);
        console.log(`Fixed ${metadataPath}`);
    }
});
