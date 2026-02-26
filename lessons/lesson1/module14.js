window.Lessons.lesson1.modules[13] = {
    title: "14. Messy vs Clean Code 🧹",
    body: `<p>The browser ignores extra spaces and line breaks. But <strong>humans</strong> need them! Good code is beautifully indented.</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Click 'MAKE IT READABLE' to format the crazy code block below and watch the animation!</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" id="format-svg">
        <rect id="rect1" x="20" y="20" width="60" height="10" fill="#569cd6" rx="2" style="transition: all 1s ease-in-out;"/>
        <rect id="rect2" x="90" y="20" width="40" height="10" fill="#569cd6" rx="2" style="transition: all 1s ease-in-out;"/>
        <rect id="rect3" x="140" y="20" width="50" height="10" fill="#ce9178" rx="2" style="transition: all 1s ease-in-out;"/>
        <rect id="rect4" x="200" y="20" width="30" height="10" fill="#569cd6" rx="2" style="transition: all 1s ease-in-out;"/>
        <rect id="rect5" x="20" y="40" width="70" height="10" fill="#569cd6" rx="2" style="transition: all 1s ease-in-out;"/>
        <rect id="rect6" x="100" y="40" width="60" height="10" fill="#ce9178" rx="2" style="transition: all 1s ease-in-out;"/>
        <rect id="rect7" x="170" y="40" width="40" height="10" fill="#569cd6" rx="2" style="transition: all 1s ease-in-out;"/>
    </svg>`,
    widgetCode: `<!-- INTERACTIVE MODULE -->
<style>
.format-game { background: #0f172a; height: 350px; border-radius: 12px; display: flex; flex-direction: column; padding: 20px; align-items: center; justify-content: center; }
.code-box { background: #1e293b; border: 2px solid #334155; padding: 20px; border-radius: 8px; width: 100%; max-width: 400px; font-family: 'Consolas', monospace; font-size: 14px; color: #d4d4d4; transition: all 4s cubic-bezier(0.4, 0, 0.2, 1); white-space: pre-wrap; word-break: break-all; margin-bottom: 20px;}
.code-tag { color: #569cd6; }
.code-box.clean { white-space: pre; border-color: #00ff9d; box-shadow: 0 0 20px rgba(0,255,157,0.2); }
.clean-btn { background: #3b82f6; color: white; border: none; padding: 12px 24px; border-radius: 6px; font-weight: bold; cursor: pointer; transition: 0.2s; font-size: 16px; }
.clean-btn:hover { background: #60a5fa; transform: translateY(-2px); }
</style>
<script>
window.cleanCode = function() {
    const box = document.getElementById('cbox');
    const svg = document.getElementById('format-svg');
    box.classList.add('clean');
    box.innerHTML = '&lt;<span class="code-tag">html</span>&gt;\\n  &lt;<span class="code-tag">head</span>&gt;\\n    &lt;<span class="code-tag">title</span>&gt;My Site&lt;/<span class="code-tag">title</span>&gt;\\n  &lt;/<span class="code-tag">head</span>&gt;\\n  &lt;<span class="code-tag">body</span>&gt;\\n    &lt;<span class="code-tag">h1</span>&gt;Hello World&lt;/<span class="code-tag">h1</span>&gt;\\n    &lt;<span class="code-tag">p</span>&gt;Welcome!&lt;/<span class="code-tag">p</span>&gt;\\n  &lt;/<span class="code-tag">body</span>&gt;\\n&lt;/<span class="code-tag">html</span>&gt;';
    
    if(svg) {
        document.getElementById('rect1').setAttribute('x', '20');
        document.getElementById('rect1').setAttribute('y', '10');
        document.getElementById('rect2').setAttribute('x', '40');
        document.getElementById('rect2').setAttribute('y', '30');
        document.getElementById('rect3').setAttribute('x', '60');
        document.getElementById('rect3').setAttribute('y', '50');
        document.getElementById('rect4').setAttribute('x', '40');
        document.getElementById('rect4').setAttribute('y', '70');
        document.getElementById('rect5').setAttribute('x', '40');
        document.getElementById('rect5').setAttribute('y', '90');
        document.getElementById('rect6').setAttribute('x', '60');
        document.getElementById('rect6').setAttribute('y', '110');
        document.getElementById('rect7').setAttribute('x', '20');
        document.getElementById('rect7').setAttribute('y', '130');
    }

    document.getElementById('cbtn').innerText = 'Formatting...';
    setTimeout(() => {
        document.getElementById('cbtn').innerText = 'Much Better! ✨';
        document.getElementById('cbtn').style.background = '#00ff9d';
        document.getElementById('cbtn').style.color = '#0f172a';
        window.completeModule('FORMAT_CLEANED');
    }, 1500);
}
</script>`,
    initialCode: `<div class="format-game">
    <div class="code-box" id="cbox">&lt;<span class="code-tag">html</span>&gt;&lt;<span class="code-tag">head</span>&gt;&lt;<span class="code-tag">title</span>&gt;My Site&lt;/<span class="code-tag">title</span>&gt;&lt;/<span class="code-tag">head</span>&gt;&lt;<span class="code-tag">body</span>&gt;&lt;<span class="code-tag">h1</span>&gt;Hello World&lt;/<span class="code-tag">h1</span>&gt;&lt;<span class="code-tag">p</span>&gt;Welcome!&lt;/<span class="code-tag">p</span>&gt;&lt;/<span class="code-tag">body</span>&gt;&lt;/<span class="code-tag">html</span>&gt;</div>
    <button class="clean-btn" id="cbtn" onclick="window.cleanCode()">🧹 MAKE IT READABLE</button>
</div>`,
    progress: 70,
    validator: function (code) { return code.includes("FORMAT_CLEANED"); }
};