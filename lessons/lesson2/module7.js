window.Lessons.lesson2.modules[6] = {
    title: "7. Line Breaks <br>",
    body: `<p>The <code>&lt;br&gt;</code> tag forces text to drop to the next line. It is an "empty tag", meaning it needs no closing tag.</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Place a &lt;br&gt; between the words "Drop" and "Down".</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="120" y="60" fill="white" font-family="monospace" font-size="16" text-anchor="middle">DROP</text><path d="M140 65 L140 95 L130 85 M140 95 L150 85" fill="none" stroke="#00f2ff" stroke-width="2"/><text x="120" y="110" fill="#00f2ff" font-family="monospace" font-size="16" text-anchor="middle">DOWN</text></svg>`,
    initialCode: "Drop Down",
    widgetCode: `
        <div id="rain-machine" style="padding:15px; text-align:center; background:#1e1e2f; border-radius:8px; display:flex; flex-direction:column; height: 100%; min-height: 250px; position:relative; overflow:hidden;">
            <div style="font-size:40px; color:#aaa; margin-bottom:20px; z-index:5; position:relative;" id="rain-cloud">
                ☁️
                <div id="rain-drops" style="position:absolute; top:40px; left:50%; transform:translateX(-50%); width:50px; height:50px; overflow:hidden; display:none;">
                    <div style="width:4px; height:10px; background:var(--neon-cyan); position:absolute; left:10px; animation: rain-fall 0.4s linear infinite;"></div>
                    <div style="width:4px; height:10px; background:var(--neon-cyan); position:absolute; left:30px; animation: rain-fall 0.5s linear infinite 0.2s;"></div>
                </div>
            </div>
            
            <style>
                @keyframes rain-fall {
                    0% { top: -10px; opacity: 1; }
                    100% { top: 60px; opacity: 0; }
                }
                @keyframes heavy-bounce {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-15px); }
                }
            </style>
            
            <div id="rain-scene" style="flex-grow:1; position:relative; font-size:24px; font-weight:bold; color:white; z-index:10;">
                <span id="word-drop">Drop</span> <span id="word-down" style="display:inline-block; transition:transform 0.5s cubic-bezier(0.5, 0, 0.75, 0), color 0.5s;">Down</span>
            </div>
            
            <div id="rain-msg" style="text-align:center; margin-top:20px; font-weight:bold; min-height:48px; color:var(--neon-green); z-index:5;"></div>
        </div>
        <script>
            (function() {
                var editor = document.getElementById('code-editor');
                var wordDown = document.getElementById('word-down');
                var cloud = document.getElementById('rain-cloud');
                var rainDrops = document.getElementById('rain-drops');
                var msg = document.getElementById('rain-msg');
                var rm = document.getElementById('rain-machine');
                
                window.m7_done = false;
                
                function handleInput(e) {
                    if (!document.getElementById('rain-machine')) {
                        if (editor) editor.removeEventListener('input', handleInput);
                        return;
                    }
                    if(!editor) return;
                    
                    var val = editor.value.toLowerCase();
                    
                    var matchError = val.match(/<\\/br>/);
                    if (matchError) {
                        msg.innerHTML = "🚫 &lt;br&gt; is an empty tag!<br>It does not need a closing tag.";
                        msg.style.color = "#ff5f56";
                        wordDown.style.transform = "translateY(0)";
                        rainDrops.style.display = "none";
                        return;
                    }

                    var brMatch = val.match(/drop\\s*(<br\\s*\\/?>\\s*)+down/i);
                    var brCount = 0;
                    if (brMatch) {
                        var brs = val.match(/<br\\s*\\/?>/gi);
                        if(brs) brCount = brs.length;
                    }
                    
                    if (brCount > 0) {
                        cloud.style.color = "var(--neon-cyan)";
                        rainDrops.style.display = "block";
                        
                        var dropDistance = brCount * 40; 
                        wordDown.style.transform = "translateY(" + dropDistance + "px)";
                        wordDown.style.color = "var(--neon-cyan)";
                        
                        // Add bounce effect dynamically
                        wordDown.style.animation = "heavy-bounce 0.5s ease-out " + (0.5 * brCount) + "s 1";
                        
                        var funnyMsg = "✔ Line Break Created<br>&lt;br&gt; forces text onto a new line.";
                        if (brCount === 2) funnyMsg = "Whoa, double drop! It's getting deep in here.";
                        if (brCount === 3) funnyMsg = "Triple break! Is there a bottom to this page?!";
                        if (brCount === 4) funnyMsg = "We are reaching subterranean HTML levels! 🚇";
                        if (brCount === 5) {
                            funnyMsg = "Going to the center of the Earth! 🌍🔥";
                            wordDown.style.color = "#ff5f56";
                            document.getElementById('rain-machine').style.background = "#3f1a1a";
                        }
                        if (brCount >= 6) {
                            funnyMsg = "🚨 WARNING: CORE BREACH IMMINENT! TOO MUCH &lt;br&gt;! 🚨";
                            wordDown.style.color = "#ff5f56";
                            document.getElementById('rain-machine').style.background = "#5f0a0a";
                            wordDown.style.animation = "heavy-bounce 0.1s linear infinite"; // panic mode
                        }
                        
                        // Default background reset if < 5
                        if (brCount < 5) {
                            document.getElementById('rain-machine').style.background = "#1e1e2f";
                        }

                        msg.innerHTML = funnyMsg;
                        msg.style.color = (brCount >= 5) ? "#ff5f56" : "var(--neon-green)";
                        
                        if (!window.m7_done) {
                            setTimeout(function() {
                                window.m7_done = true;
                                if (window.IntentEngine && window.Intents) {
                                                                        window.IntentEngine.run(window.Intents.updatePreview, {code: editor.value});
                                }
                            }, 1000);
                        }
                    } else {
                        cloud.style.color = "#aaa";
                        rainDrops.style.display = "none";
                        wordDown.style.transform = "translateY(0)";
                        wordDown.style.color = "white";
                        wordDown.style.animation = "none";
                        msg.innerHTML = "";
                        document.getElementById('rain-machine').style.background = "#1e1e2f";
                    }
                }
                
                if (editor) {
                    editor.addEventListener('input', handleInput);
                }
            })();
        </script>
    `,
    progress: 35,
    validator: function (code) { return window.m7_done === true; }
};