window.Lessons.lesson3.modules[10] = {
    title: "11. Teacher demo",
    body: `<p>Watch this quick recap on how powerful lists are!</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Watch the animation and click "Continue" in the code editor when you're ready.</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" id="m11-svg" style="background:#0f172a; border-radius:8px;">
        <rect x="20" y="20" width="200" height="110" rx="4" fill="#1e293b" />
        <circle cx="120" cy="75" r="20" fill="#3b82f6" cursor="pointer" id="m11-play" />
        <polygon points="115,65 115,85 130,75" fill="white" />
        <text id="m11-msg" x="120" y="115" fill="#94a3b8" font-family="sans-serif" font-size="10" text-anchor="middle">Click to play video demo</text>
    </svg>`,
    widgetCode: `<!-- INTERACTIVE MODULE -->
<script>
(function() {
    const playBtn = document.getElementById('m11-play');
    const msg = document.getElementById('m11-msg');
    const editor = document.getElementById('code-editor');
    
    if (editor) {
        editor.readOnly = true;
        editor.style.opacity = "0.8";
    }

    if (playBtn) {
        playBtn.addEventListener('click', () => {
            playBtn.setAttribute('fill', '#10b981');
            msg.setAttribute('fill', '#10b981');
            msg.textContent = "Demo playing... (Simulated)";
            setTimeout(() => {
                msg.textContent = "Finished! You can continue.";
                if (editor) {
                    editor.value = "<!-- Done watching! -->\\n<button onclick='alert(\"You completed the demo!\")'>Continue</button>";
                    editor.dispatchEvent(new Event('input', { bubbles: true }));
                }
            }, 2000);
        });
    }
})();
</script>`,
    initialCode: `<!-- Waiting for video... -->`,
    progress: 55,
    validator: function (code) {
        return code.includes("Continue");
    }
};