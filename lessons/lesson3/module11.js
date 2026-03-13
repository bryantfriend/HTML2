window.Lessons.lesson3.modules[10] = {
    title: "11. demo",
    body: `<p>Watch this quick recap on how powerful lists are! You can even put a list <em>inside</em> another list.</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Watch the animation and click "Continue" in the code editor when you're ready.</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" id="m11-svg" style="background:#0f172a; border-radius:8px;">
        <rect x="20" y="20" width="200" height="110" rx="4" fill="#1e293b" />
        <g id="m11-play-group" cursor="pointer" onclick="window.startM11Demo()">
            <rect x="95" y="50" width="50" height="50" fill="transparent" />
            <circle cx="120" cy="75" r="25" fill="#3b82f6" id="m11-play-circle" />
            <polygon points="115,65 115,85 132,75" fill="white" />
        </g>
        
        <!-- Demo Content Scroll -->
        <g id="m11-demo-scroll" style="display:none;">
            <rect x="25" y="25" width="190" height="100" fill="#0f172a" rx="2" />
            <text id="m11-demo-line1" x="35" y="42" fill="#10b981" font-family="monospace" font-size="14"></text>
            <text id="m11-demo-line2" x="35" y="60" fill="#10b981" font-family="monospace" font-size="14"></text>
            <text id="m11-demo-line3" x="45" y="78" fill="#34d399" font-family="monospace" font-size="14"></text>
            <text id="m11-demo-line4" x="55" y="94" fill="#60a5fa" font-family="monospace" font-size="12"></text>
            <text id="m11-demo-line5" x="55" y="110" fill="#60a5fa" font-family="monospace" font-size="12"></text>
            <text id="m11-demo-line6" x="45" y="126" fill="#34d399" font-family="monospace" font-size="14"></text>
        </g>
        <text id="m11-msg" x="120" y="142" fill="#94a3b8" font-family="sans-serif" font-size="13" text-anchor="middle">Click to play demo</text>
    </svg>`,
    widgetCode: `<!-- INTERACTIVE MODULE -->
<script>
(function() {
    const editor = document.getElementById('code-editor');
    if (editor) {
        editor.readOnly = true;
        editor.style.opacity = "0.8";
    }

    window.startM11Demo = function() {
        const playBtn = document.getElementById('m11-play-group');
        const msg = document.getElementById('m11-msg');
        const scroll = document.getElementById('m11-demo-scroll');
        
        if (!playBtn || !scroll) return;

        playBtn.style.display = 'none';
        scroll.style.display = 'block';
        msg.textContent = "Nesting lists...";
        
        const lines = [
            "<ul>",
            "  <li>Outer Item",
            "    <ul>",
            "      <li>Nested A</li>",
            "      <li>Nested B</li>",
            "    </ul>"
        ];
        
        const els = [
            document.getElementById('m11-demo-line1'),
            document.getElementById('m11-demo-line2'),
            document.getElementById('m11-demo-line3'),
            document.getElementById('m11-demo-line4'),
            document.getElementById('m11-demo-line5'),
            document.getElementById('m11-demo-line6')
        ];

        let lIdx = 0; let cIdx = 0;
        const typing = setInterval(() => {
            if (lIdx < lines.length) {
                if (cIdx < lines[lIdx].length) {
                    els[lIdx].textContent += lines[lIdx][cIdx];
                    cIdx++;
                } else { lIdx++; cIdx = 0; }
            } else {
                clearInterval(typing);
                msg.textContent = "Finished! Click Continue below.";
                msg.setAttribute('fill', '#10b981');
                if (editor) {
                    editor.value = "<!-- Nested list example! -->\\n<button onclick='alert(\"Lists inside lists are powerful!\")'>Continue</button>";
                    editor.dispatchEvent(new Event('input', { bubbles: true }));
                }
            }
        }, 60);
    };
})();
</script>`,
    initialCode: `<!-- Click the blue play button to start! -->`,
    progress: 55,
    validator: function (code) {
        if (!code) return false;
        return code.includes("Continue");
    }
};