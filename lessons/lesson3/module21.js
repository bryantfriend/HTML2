window.Lessons.lesson3.modules[20] = {
            title: "Bonus. How did you feel about this lesson?",
            body: "<p>We want to make sure these lessons are actually helpful!</p><p class='text-sm italic text-gray-400 mt-4'>Mission: Click the emoji that best represents how you feel right now.</p>",
            svg: "<svg width='240' height='150' viewBox='0 0 240 150' xmlns='http://www.w3.org/2000/svg'><text x='120' y='80' fill='#ff00e5' font-size='40' text-anchor='middle'>🤔</text></svg>",
            initialCode: "<!-- INTERACTIVE MODULE -->\n<style>\n.emoji-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 10px; padding: 20px; background: #0f172a; border-radius: 12px; }\n.emoji-btn { background: #1e293b; border: 2px solid #334155; border-radius: 8px; font-size: 32px; padding: 10px; cursor: pointer; transition: 0.2s; }\n.emoji-btn:hover { transform: scale(1.1); border-color: #00ff9d; background: rgba(0,255,157,0.1); }\n.emoji-btn:active { transform: scale(0.9); }\n</style>\n<div class='emoji-grid'>\n" +
                "  <button class='emoji-btn' onclick='window.selectEmoji(\"🤯\")'>🤯</button>\n" +
                "  <button class='emoji-btn' onclick='window.selectEmoji(\"🥱\")'>🥱</button>\n" +
                "  <button class='emoji-btn' onclick='window.selectEmoji(\"😡\")'>😡</button>\n" +
                "  <button class='emoji-btn' onclick='window.selectEmoji(\"😭\")'>😭</button>\n" +
                "  <button class='emoji-btn' onclick='window.selectEmoji(\"🥵\")'>🥵</button>\n" +
                "  <button class='emoji-btn' onclick='window.selectEmoji(\"🤩\")'>🤩</button>\n" +
                "  <button class='emoji-btn' onclick='window.selectEmoji(\"😎\")'>😎</button>\n" +
                "  <button class='emoji-btn' onclick='window.selectEmoji(\"🤓\")'>🤓</button>\n" +
                "  <button class='emoji-btn' onclick='window.selectEmoji(\"🚀\")'>🚀</button>\n" +
                "  <button class='emoji-btn' onclick='window.selectEmoji(\"🧠\")'>🧠</button>\n" +
                "</div>\n<script>\nwindow.selectEmoji = function(emoji) {\n    window.lessonEmoji = emoji;\n    try {\n        const editor = window.parent.document.getElementById('code-editor');\n        if(editor) {\n            if(!editor.value.includes('EMOJI' + '_SELECTED')) {\n                editor.value += '\\n<!-- EMOJI' + '_SELECTED -->';\n                const engine = window.IntentEngine || (window.parent && window.parent.IntentEngine);\nconst intents = window.Intents || (window.parent && window.parent.Intents);\nif (engine && intents) engine.run(intents.updatePreview, { code: editor.value });\n            }\n        }\n    } catch(e) {}\n}\n</script>",
            progress: 100,
            validator: function (code) { return code.includes("EMOJI_SELECTED"); }
        };