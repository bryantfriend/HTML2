window.Lessons.lesson2.modules[2] = {
    title: "3. Heading Power Levels",
    body: `<p>Headings organize websites into sections. HTML gives us 6 levels:</p>
    <ul class="list-disc ml-5 text-gray-300">
        <li><code>&lt;h1&gt;</code> is the most powerful main title.</li>
        <li><code>&lt;h6&gt;</code> is the smallest label.</li>
    </ul>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Activate the heading control system. Type "H1 TO H6".</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg">
            <text x="40" y="60" fill="white" font-size="24" font-weight="bold">H1</text>
            <text x="80" y="60" fill="white" font-size="20">H2</text>
            <text x="120" y="60" fill="white" font-size="16">H3</text>
            <text x="160" y="60" fill="white" font-size="12">...</text>
          </svg>`,
    initialCode: "",
    widgetCode: `<!-- INTERACTIVE MODULE -->
        <div id="heading-control-panel" style="display:none; padding:15px; text-align:center; background:#1e1e2f; border-radius:8px;">
            <div id="power-system" class="animate-pulse" style="color:var(--neon-green); font-weight:bold; margin-bottom:15px;">HEADING SYSTEM ONLINE</div>
            
            <div style="display:flex; justify-content:center; gap:5px; margin-bottom:15px; flex-wrap:wrap;">
                <button class="heading-btn" data-level="1">H1</button>
                <button class="heading-btn" data-level="2">H2</button>
                <button class="heading-btn" data-level="3">H3</button>
                <button class="heading-btn" data-level="4">H4</button>
                <button class="heading-btn" data-level="5">H5</button>
                <button class="heading-btn" data-level="6">H6</button>
            </div>
            
            <div style="margin-bottom:15px;">
                <div style="font-size:12px; color:#aaa; margin-bottom:5px;">TITLE POWER</div>
                <div id="power-bar" style="color:var(--neon-cyan); letter-spacing:2px; font-family:monospace; font-size:18px;"></div>
            </div>
            
            <div id="emoji-display" style="font-size:24px; font-weight:bold; margin-top:20px; transition:all 0.3s; min-height:40px;"></div>
        </div>
        
        <script>
            (function() {
                var editor = document.getElementById('code-editor');
                var panel = document.getElementById('heading-control-panel');
                var powerBar = document.getElementById('power-bar');
                var emojiDisplay = document.getElementById('emoji-display');
                var isUnlocked = false;
                var clickCount = 0;
                window.m3_done = false;
                
                var personalities = {
                    1: { emoji: "😎 BOSS TITLE", bars: "██████████", size: "32px" },
                    2: { emoji: "😀 BIG TITLE", bars: "████████", size: "24px" },
                    3: { emoji: "🙂 NORMAL TITLE", bars: "██████", size: "18px" },
                    4: { emoji: "😐 SMALL TITLE", bars: "████", size: "14px" },
                    5: { emoji: "🤏 TINY TITLE", bars: "██", size: "10px" },
                    6: { emoji: "🤫 SECRET TITLE", bars: "█", size: "8px" }
                };
                
                function handleInput(e) {
                    if (!document.getElementById('power-system')) {
                        if (editor) editor.removeEventListener('input', handleInput);
                        return;
                    }

                    var val = e.target.value.trim().toUpperCase();
                    if(!isUnlocked && val.includes("H1 TO H6")) {
                        isUnlocked = true;
                        panel.style.display = "block";
                        
                        var svgDisplay = document.querySelector('#svg-display');
                        if (svgDisplay) {
                            svgDisplay.innerHTML = "";
                            svgDisplay.appendChild(panel);
                        }
                        
                        // Set editor content to h1
                        if (editor) {
                            editor.value = "<h1>The Title</h1>";
                        }
                        updateDemo(1);
                    }
                }
                
                function updateDemo(level) {
                    var info = personalities[level];
                    powerBar.textContent = info.bars;
                    emojiDisplay.textContent = info.emoji;
                    emojiDisplay.style.fontSize = info.size;
                    
                    // Add bounce animation class
                    emojiDisplay.classList.remove('animate-bounce-slow');
                    void emojiDisplay.offsetWidth; // trigger reflow
                    emojiDisplay.classList.add('animate-bounce-slow');
                    
                    // Update Editor Code
                    if(editor && isUnlocked) {
                        editor.value = "<h" + level + ">The Title</h" + level + ">";
                        if(window.IntentEngine && window.Intents && window.Intents.updatePreview) {
                            window.IntentEngine.run(window.Intents.updatePreview, {code: editor.value});
                        }
                    }
                    
                    clickCount++;
                    if(clickCount > 5 && !window.m3_done) {
                        window.m3_done = true;
                        if(window.IntentEngine && window.Intents) {
                            window.IntentEngine.run(window.Intents.updatePreview, {code: editor.value});
                        }
                    }
                }
                
                if (editor) {
                    editor.addEventListener('input', handleInput);
                }
                
                var btns = panel.querySelectorAll('.heading-btn');
                btns.forEach(function(btn) {
                    btn.addEventListener('click', function() {
                        var level = this.getAttribute('data-level');
                        updateDemo(level);
                    });
                });
            })();
        </script>
    `,
    progress: 15,
    validator: function (code) { return window.m3_done === true; }
};