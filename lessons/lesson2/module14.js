window.Lessons.lesson2.modules[13] = {
    title: "14. Spacing Rules",
    body: `<p>If you press spacebar 50 times in your code, the browser will only show exactly 1 space. Browsers collapse whitespace automatically!</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Add 20 or more spaces between the words "Space" and "Here" to summon the Whitespace Black Hole.</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><circle cx="120" cy="75" r="30" fill="black" stroke="#8a2be2" stroke-width="4"/><path d="M 80 75 Q 120 45 160 75" fill="none" stroke="#fff" stroke-dasharray="2" stroke-width="2"/></svg>`,
    initialCode: "<p>Space Here</p>",
    widgetCode: `
        <div id="blackhole-lab" style="padding:15px; background:#1e1e2f; border-radius:8px; display:flex; flex-direction:column; height: 100%; min-height: 250px; position:relative; overflow:hidden;">
            <div style="text-align:center; font-weight:bold; color:var(--neon-purple, #8a2be2); margin-bottom:15px; font-family:monospace;">🌌 WHITESPACE BLACK HOLE</div>
            
            <div id="space-scene" style="flex-grow:1; display:flex; flex-direction:column; align-items:center; justify-content:center; position:relative;">
                <div id="black-hole" style="width:60px; height:60px; background:radial-gradient(circle, black 40%, #8a2be2 100%); border-radius:50%; position:absolute; top:20px; box-shadow:0 0 30px #8a2be2; transform:scale(0); opacity:0; transition:all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275); animation:spin 2s linear infinite;"></div>
                
                <div id="word-container" style="display:flex; justify-content:center; align-items:center; width:100%; margin-top:40px;">
                    <span id="word-left" style="color:white; font-size:24px; font-weight:bold; transition:all 1s;">Space</span>
                    <span id="space-gap" style="display:inline-block; width:10px; height:20px; border-bottom:2px dashed #444; margin:0 5px; transition:all 1s;"></span>
                    <span id="word-right" style="color:white; font-size:24px; font-weight:bold; transition:all 1s;">Here</span>
                </div>
                
                <div id="space-counter" style="position:absolute; bottom:10px; font-family:monospace; color:#888; font-size:14px;">Spaces: <span id="count">1</span></div>
            </div>
            
            <div id="hole-msg" style="text-align:center; margin-top:15px; font-weight:bold; min-height:48px; color:#aaa;">Waiting for spaces...</div>
        </div>
        <style>
            @keyframes spin { 100% { transform: rotate(360deg) scale(1); } }
            @keyframes spin-suck { 100% { transform: rotate(720deg) scale(0); } }
        </style>
        <script>
            (function() {
                var editor = document.getElementById('code-editor');
                var wordLeft = document.getElementById('word-left');
                var wordRight = document.getElementById('word-right');
                var spaceGap = document.getElementById('space-gap');
                var blackHole = document.getElementById('black-hole');
                var counter = document.getElementById('count');
                var msg = document.getElementById('hole-msg');
                var lab = document.getElementById('blackhole-lab');
                var svgDisplay = document.querySelector('#svg-display');
                
                if (svgDisplay && lab) {
                    svgDisplay.innerHTML = "";
                    svgDisplay.appendChild(lab);
                }
                
                window.m14_done = false;
                var sucked = false;
                
                function handleInput(e) {
                    if (!document.getElementById('blackhole-lab')) {
                        if (editor) editor.removeEventListener('input', handleInput);
                        return;
                    }
                    if(!editor) return;
                    
                    var val = editor.value;
                    var match = val.match(/Space( +)Here/);
                    
                    if (match && !sucked) {
                        var spaces = match[1].length;
                        counter.innerText = spaces;
                        
                        // Expand the gap visually up to a point
                        var gapWidth = Math.min(spaces * 10, 200);
                        spaceGap.style.width = gapWidth + "px";
                        
                        if (spaces >= 20) {
                            sucked = true; // Block further updates
                            
                            // Summon Black Hole
                            blackHole.style.opacity = "1";
                            blackHole.style.transform = "scale(1)";
                            msg.innerHTML = "🌌 BLACK HOLE SUMMONED!<br>Collapsing whitespace...";
                            msg.style.color = "#8a2be2";
                            
                            setTimeout(function() {
                                // Suck in
                                spaceGap.style.width = "10px";
                                spaceGap.style.borderBottomColor = "#00f2ff";
                                wordLeft.style.color = "#00f2ff";
                                wordRight.style.color = "#00f2ff";
                                
                                blackHole.style.animation = "spin-suck 1s forwards";
                                
                                setTimeout(function() {
                                    msg.innerHTML = "✔ Whitespace Collapsed!<br>Only 1 space remains.";
                                    msg.style.color = "var(--neon-cyan)";
                                    
                                    if (!window.m14_done) {
                                        window.m14_done = true;
                                        if (window.IntentEngine && window.Intents) {
                                            window.IntentEngine.run(window.Intents.updatePreview, {code: editor.value});
                                        }
                                    }
                                }, 1000);
                            }, 1500);
                        } else {
                            msg.innerHTML = "More spaces needed! (" + spaces + "/20)";
                            msg.style.color = "#aaa";
                        }
                    } else if (!match && !sucked) {
                        counter.innerText = "0";
                        spaceGap.style.width = "0px";
                        msg.innerHTML = "Type 'Space' and 'Here' separated by spaces.";
                    }
                }
                
                if (editor) {
                    editor.addEventListener('input', handleInput);
                }
            })();
        </script>
    `,
    progress: 70,
    validator: function (code) { return window.m14_done === true; }
};