window.Lessons.lesson2.modules[2] = {
    title: "3. Heading Power Levels",
    body: `<p>Headings organize websites into sections. HTML gives us 6 levels:</p>
    <ul class="list-disc ml-5 text-gray-300">
        <li><code>&lt;h1&gt;</code> is the most powerful main title.</li>
        <li><code>&lt;h6&gt;</code> is the smallest label.</li>
    </ul>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Click the BOOT SYSTEM button, then test all 6 heading power levels!</p>`,
    svg: ``,
    initialCode: "",
    widgetCode: `<!-- INTERACTIVE MODULE -->
        <div id="startup-screen" style="padding:15px; text-align:center; background:#1e1e2f; border-radius:8px; display:flex; flex-direction:column; align-items:center; justify-content:center; min-height:250px; width:100%;">
            <div style="color:#aaa; margin-bottom: 20px; font-family:monospace; letter-spacing:2px;">HEADING SYSTEM OFFLINE</div>
            <button id="activate-btn" style="background:#ef4444; color:white; border:none; padding:15px 30px; border-radius:50px; font-weight:bold; font-size:16px; cursor:pointer; box-shadow: 0 0 20px rgba(239,68,68,0.5); transition:all 0.2s;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">🔌 BOOT SYSTEM</button>
        </div>

        <div id="heading-control-panel" style="display:none; padding:15px; text-align:center; background:#1e1e2f; border-radius:8px; width:100%; min-height:250px;">
            <div id="power-system" class="animate-pulse" style="color:var(--neon-green); font-weight:bold; margin-bottom:15px;">HEADING SYSTEM ONLINE</div>
            
            <div style="display:flex; justify-content:center; gap:5px; margin-bottom:15px; flex-wrap:wrap;">
                <button class="heading-btn hover:bg-gray-600" data-level="1" style="background:#333; color:white; border:1px solid #555; padding:8px 16px; border-radius:4px; cursor:pointer; font-weight:bold; transition: 0.2s;">H1</button>
                <button class="heading-btn hover:bg-gray-600" data-level="2" style="background:#333; color:white; border:1px solid #555; padding:8px 16px; border-radius:4px; cursor:pointer; font-weight:bold; transition: 0.2s;">H2</button>
                <button class="heading-btn hover:bg-gray-600" data-level="3" style="background:#333; color:white; border:1px solid #555; padding:8px 16px; border-radius:4px; cursor:pointer; font-weight:bold; transition: 0.2s;">H3</button>
                <button class="heading-btn hover:bg-gray-600" data-level="4" style="background:#333; color:white; border:1px solid #555; padding:8px 16px; border-radius:4px; cursor:pointer; font-weight:bold; transition: 0.2s;">H4</button>
                <button class="heading-btn hover:bg-gray-600" data-level="5" style="background:#333; color:white; border:1px solid #555; padding:8px 16px; border-radius:4px; cursor:pointer; font-weight:bold; transition: 0.2s;">H5</button>
                <button class="heading-btn hover:bg-gray-600" data-level="6" style="background:#333; color:white; border:1px solid #555; padding:8px 16px; border-radius:4px; cursor:pointer; font-weight:bold; transition: 0.2s;">H6</button>
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
                var startup = document.getElementById('startup-screen');
                var actBtn = document.getElementById('activate-btn');
                var powerBar = document.getElementById('power-bar');
                var emojiDisplay = document.getElementById('emoji-display');
                var isUnlocked = false;
                var clickedLevels = new Set();
                window.m3_done = false;
                
                var personalities = {
                    1: { emoji: "😎 BOSS TITLE", bars: "██████████", size: "32px" },
                    2: { emoji: "😀 BIG TITLE", bars: "████████", size: "24px" },
                    3: { emoji: "🙂 NORMAL TITLE", bars: "██████", size: "18px" },
                    4: { emoji: "😐 SMALL TITLE", bars: "████", size: "14px" },
                    5: { emoji: "🤏 TINY TITLE", bars: "██", size: "10px" },
                    6: { emoji: "🤫 SECRET TITLE", bars: "█", size: "8px" }
                };
                
                if (actBtn) {
                    actBtn.addEventListener('click', function() {
                        isUnlocked = true;
                        startup.style.display = "none";
                        panel.style.display = "block";
                        
                        if (editor) {
                            editor.value = "<h1>The Title</h1>";
                            if(window.IntentEngine && window.Intents && window.Intents.updatePreview) {
                                window.IntentEngine.run(window.Intents.updatePreview, {code: editor.value});
                            }
                        }
                        updateDemo(1);
                    });
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
                    
                    clickedLevels.add(level.toString());
                    
                    // Mark as tested buttons
                    var btn = panel.querySelector('.heading-btn[data-level="' + level + '"]');
                    if (btn) {
                        btn.style.background = 'var(--neon-green)';
                        btn.style.color = '#000';
                        btn.style.borderColor = 'var(--neon-green)';
                    }
                    
                    if(clickedLevels.size >= 6 && !window.m3_done) {
                        window.m3_done = true;
                        if(window.IntentEngine && window.Intents) {
                            window.IntentEngine.run(window.Intents.updatePreview, {code: editor.value});
                        }
                    }
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