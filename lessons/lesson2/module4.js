window.Lessons.lesson2.modules[3] = {
    title: "4. <h1> main title",
    body: `<p>The <code>&lt;h1&gt;</code> tag is the biggest heading. It should only be used once per page for the main title.</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Write an &lt;h1&gt; element saying "My Website". Remember to close it with &lt;/h1&gt;!</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="120" y="85" fill="#ff00e5" font-family="sans-serif" font-size="40" font-weight="bold" text-anchor="middle">H1</text></svg>`,
    initialCode: "",
    widgetCode: `<!-- INTERACTIVE MODULE -->
        <div id="banner-container" style="display:none; text-align:center; margin-top:20px; padding:20px; transition:all 0.5s;">
            <div style="color:var(--neon-green); font-family:monospace; margin-bottom:10px;">======================</div>
            <div id="banner-text" style="font-size:32px; font-weight:bold; color:var(--neon-pink); text-transform:uppercase; letter-spacing:4px; text-shadow:0 0 10px var(--neon-pink);"></div>
            <div style="color:var(--neon-green); font-family:monospace; margin-top:10px;">======================</div>
            <div id="banner-decorations" style="display:none; margin-top:20px; font-size:24px; animation: pulse-cyan 1.5s infinite;">
                🌟 💡 🎨
            </div>
        </div>
        <script>
            (function() {
                var editor = document.getElementById('code-editor');
                var container = document.getElementById('banner-container');
                var bannerText = document.getElementById('banner-text');
                var decos = document.getElementById('banner-decorations');
                window.m4_done = false;
                
                function handleInput(e) {
                    if (!document.getElementById('banner-container')) {
                        if (editor) editor.removeEventListener('input', handleInput);
                        return;
                    }
                    var val = e.target.value;
                    // Match <h1> ... </h1> with flexible spacing
                    var match = val.match(/<\\s*h1\\s*>\\s*(.*?)\\s*<\\s*\\/\\s*h1\\s*>/i);
                    
                    if(match && match[1].toLowerCase() === "my website") {
                        container.style.display = "block";
                        container.className = "neon-border";
                        container.style.backgroundColor = "rgba(0,0,0,0.5)";
                        bannerText.textContent = match[1];
                        
                        setTimeout(function() {
                            decos.style.display = "block";
                        }, 500);
                        
                        setTimeout(function() {
                            if (!window.m4_done) {
                                window.m4_done = true;
                                if (window.IntentEngine && window.Intents) {
                                    window.IntentEngine.run(window.Intents.updatePreview, {code: editor.value});
                                }
                            }
                        }, 1500);
                    } else {
                        container.style.display = "none";
                        decos.style.display = "none";
                    }
                }
                
                if (editor) {
                    editor.addEventListener('input', handleInput);
                }
            })();
        </script>
    `,
    progress: 20,
    validator: function (code) { return window.m4_done === true; }
};