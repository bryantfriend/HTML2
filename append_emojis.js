const fs = require('fs');
const files = ['lessons/lesson1.js', 'lessons/lesson2.js', 'lessons/lesson3.js', 'lessons/lesson4.js', 'lessons/lesson5.js', 'lessons/lesson6.js'];

const emojiModule = `        {
            title: "Bonus. How did you feel about this lesson?",
            body: "<p>We want to make sure these lessons are actually helpful!</p><p class='text-sm italic text-gray-400 mt-4'>Mission: Click the emoji that best represents how you feel right now.</p>",
            svg: "<svg width='240' height='150' viewBox='0 0 240 150' xmlns='http://www.w3.org/2000/svg'><text x='120' y='80' fill='#ff00e5' font-size='40' text-anchor='middle'>🤔</text></svg>",
            initialCode: "<!-- INTERACTIVE MODULE -->\\n<style>\\n.emoji-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 10px; padding: 20px; background: #0f172a; border-radius: 12px; }\\n.emoji-btn { background: #1e293b; border: 2px solid #334155; border-radius: 8px; font-size: 32px; padding: 10px; cursor: pointer; transition: 0.2s; }\\n.emoji-btn:hover { transform: scale(1.1); border-color: #00ff9d; background: rgba(0,255,157,0.1); }\\n.emoji-btn:active { transform: scale(0.9); }\\n</style>\\n<div class='emoji-grid'>\\n" +
                "  <button class='emoji-btn' onclick='window.selectEmoji(\\"🤯\\")'>🤯</button>\\n" +
                "  <button class='emoji-btn' onclick='window.selectEmoji(\\"🥱\\")'>🥱</button>\\n" +
                "  <button class='emoji-btn' onclick='window.selectEmoji(\\"😡\\")'>😡</button>\\n" +
                "  <button class='emoji-btn' onclick='window.selectEmoji(\\"😭\\")'>😭</button>\\n" +
                "  <button class='emoji-btn' onclick='window.selectEmoji(\\"🥵\\")'>🥵</button>\\n" +
                "  <button class='emoji-btn' onclick='window.selectEmoji(\\"🤩\\")'>🤩</button>\\n" +
                "  <button class='emoji-btn' onclick='window.selectEmoji(\\"😎\\")'>😎</button>\\n" +
                "  <button class='emoji-btn' onclick='window.selectEmoji(\\"🤓\\")'>🤓</button>\\n" +
                "  <button class='emoji-btn' onclick='window.selectEmoji(\\"🚀\\")'>🚀</button>\\n" +
                "  <button class='emoji-btn' onclick='window.selectEmoji(\\"🧠\\")'>🧠</button>\\n" +
                "</div>\\n<script>\\nwindow.selectEmoji = function(emoji) {\\n    window.lessonEmoji = emoji;\\n    try {\\n        const editor = window.parent.document.getElementById('code-editor');\\n        if(editor) {\\n            if(!editor.value.includes('EMOJI_SELECTED')) {\\n                editor.value += '\\n<!-- EMOJI_SELECTED -->';\\n                editor.dispatchEvent(new Event('input', { bubbles: true }));\\n            }\\n        }\\n    } catch(e) {}\\n}\\n</script>",
            progress: 100,
            validator: function (code) { return code.includes("EMOJI_SELECTED"); }
        }
    ]`;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');

    // Check if it already has the emoji module
    if (!content.includes('EMOJI_SELECTED')) {
        // Find the last "]" that closes the modules array
        const lastBracketIndex = content.lastIndexOf(']');
        if (lastBracketIndex !== -1) {
            // we need to insert a comma before the new module object
            const beforeBracket = content.substring(0, lastBracketIndex).trimEnd();

            // if it doesn't end with a comma, add one, then add the emojiModule
            let newContent = beforeBracket;
            if (newContent.endsWith('}')) {
                newContent += ',\n';
            }
            newContent += emojiModule + content.substring(lastBracketIndex + 1);
            fs.writeFileSync(file, newContent);
            console.log("Appended to " + file);
        }
    } else {
        console.log("Skipping " + file + " (already has EMOJI_SELECTED)");
    }
});
