window.Lessons.lesson2.modules[8] = {
    title: "9. Strong vs Bold",
    body: `<p>The <code>&lt;strong&gt;</code> tag also makes text bold. BUT it also tells computers: "This is important."</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Make the word "Important" strong. Then play the Accessibility Scan.</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="50" width="160" height="50" rx="4" fill="#ff00e5"/><text x="120" y="80" fill="white" font-family="sans-serif" font-weight="900" font-size="20" text-anchor="middle">STRONG</text></svg>`,
    initialCode: "Important",
    widgetCode: `
        <div id="detective-lab" style="padding:15px; background:#1e1e2f; border-radius:8px; display:flex; flex-direction:column; height: 100%; min-height: 280px; position:relative; overflow:hidden;">
            <div style="text-align:center; font-weight:bold; color:#ffbd2e; margin-bottom:10px;">🕵️ ACCESSIBILITY DETECTIVE</div>
            
            <div id="detective-scene" style="flex-grow:1; display:flex; flex-direction:column; align-items:center; position:relative; margin-bottom:10px;">
                <div id="robot" style="font-size:48px; position:relative; z-index:10; transition:all 0.3s;">🤖</div>
                <div id="scan-line" style="width:100px; height:2px; background:var(--neon-cyan); position:absolute; top:25px; opacity:0; box-shadow: 0 0 10px var(--neon-cyan); z-index:15;"></div>
                
                <div id="text-card" style="margin-top:20px; background:white; color:black; padding:10px 20px; border-radius:4px; font-size:24px; min-width:150px; text-align:center; box-shadow:0 4px 6px rgba(0,0,0,0.3); transition:all 0.3s; position:relative;">
                    <span id="target-word">Important</span>
                    <div id="badge" style="position:absolute; top:-10px; right:-10px; font-size:24px; display:none;">⭐</div>
                </div>
            </div>
            
            <button id="play-btn" style="display:none; margin:10px auto; padding:8px 16px; background:var(--neon-cyan); color:black; font-weight:bold; border-radius:4px; cursor:pointer;" class="hover:bg-cyan-300">Play Scan Animation</button>
            
            <div id="status-panel" style="background:#000; border:1px solid #333; border-radius:4px; padding:10px; font-family:monospace; min-height:70px;">
                <div style="color:#aaa; font-size:12px; margin-bottom:5px;">STATUS SCREEN</div>
                <div id="status-msg" style="color:var(--neon-green); font-size:14px;">Scanning page...<br>No important clues yet.</div>
            </div>
        </div>
        <script>
            (function() {
                var editor = document.getElementById('code-editor');
                var robot = document.getElementById('robot');
                var scanLine = document.getElementById('scan-line');
                var textCard = document.getElementById('text-card');
                var targetWord = document.getElementById('target-word');
                var badge = document.getElementById('badge');
                var statusMsg = document.getElementById('status-msg');
                var playBtn = document.getElementById('play-btn');
                var detectiveLab = document.getElementById('detective-lab');
                
                var isScanning = false;
                window.m9_done = false;
                
                // Idle animation
                var idleInterval = setInterval(function() {
                    if(!document.getElementById('detective-lab')) {
                        clearInterval(idleInterval);
                        return;
                    }
                    if(!isScanning) {
                        robot.style.transform = "translateY(-5px)";
                        setTimeout(function() { robot.style.transform = "translateY(0)"; }, 500);
                    }
                }, 2000);
                
                function runScan(hasStrong, hasB) {
                    if (isScanning) return;
                    isScanning = true;
                    playBtn.style.display = "none";
                    
                    // Scanning trace
                    statusMsg.innerHTML = "🕵️ Detective Scan Active...<br>Analyzing layout...";
                    statusMsg.style.color = "#aaa";
                    
                    scanLine.style.opacity = "1";
                    scanLine.style.animation = "scan 0.3s ease infinite alternate";
                    scanLine.style.top = "90px"; // move down to text card
                    
                    setTimeout(function() {
                        scanLine.style.opacity = "0";
                        scanLine.style.animation = "none";
                        scanLine.style.top = "25px";
                        isScanning = false;
                        
                        if (hasStrong) {
                            robot.innerHTML = "🤩";
                            robot.style.transform = "scale(1.2)";
                            badge.style.display = "block";
                            statusMsg.innerHTML = "IMPORTANT CLUE FOUND<br>Accessibility signal detected!";
                            statusMsg.style.color = "var(--neon-green)";
                            
                            if (!window.m9_done) {
                                window.m9_done = true;
                                setTimeout(function() {
                                    if(window.IntentEngine && window.Intents) {
                                        window.IntentEngine.run(window.Intents.updatePreview, {code: editor.value});
                                    }
                                }, 1500);
                            }
                        } else if (hasB) {
                            robot.innerHTML = "🤨";
                            badge.style.display = "none";
                            statusMsg.innerHTML = "BOLD STYLE FOUND<br>No importance signal.";
                            statusMsg.style.color = "#ffbd2e";
                        }
                    }, 1500);
                }
                
                function handleInput(e) {
                    if (!document.getElementById('detective-lab')) {
                        if (editor) editor.removeEventListener('input', handleInput);
                        return;
                    }
                    if(!editor) return;
                    
                    var val = editor.value;
                    
                    var hasB = val.match(/<b>\\s*important\\s*<\\/b>/i);
                    var hasStrong = val.match(/<strong>\\s*important\\s*<\\/strong>/i);
                    
                    if (!hasB && !hasStrong) {
                        targetWord.style.fontWeight = "normal";
                        robot.innerHTML = "🤖";
                        badge.style.display = "none";
                        statusMsg.innerHTML = "Scanning page...<br>No important clues yet.";
                        statusMsg.style.color = "var(--neon-green)";
                        playBtn.style.display = "none";
                        return;
                    }

                    targetWord.style.fontWeight = "bold";
                    
                    if (!isScanning) {
                        if (hasStrong) {
                            playBtn.style.display = "block";
                            playBtn.onclick = function() { runScan(true, false); };
                        } else if (hasB) {
                            playBtn.style.display = "block";
                            playBtn.onclick = function() { runScan(false, true); };
                        }
                    }
                }
                
                if (editor) {
                    editor.addEventListener('input', handleInput);
                }
            })();
        </script>
    `,
    progress: 45,
    validator: function (code) { return window.m9_done === true; }
};