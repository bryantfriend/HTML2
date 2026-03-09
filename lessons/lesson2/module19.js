window.Lessons.lesson2.modules[18] = {
    title: "19. Review page readability",
    body: `<p>A website shouldn't just be a huge wall of text. Does the page look natural? Having good structure and whitespace makes it readable!</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Type "SCAN" anywhere in the editor to run the Readability Analyzer.</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="120" y="80" fill="#00f2ff" font-family="monospace" font-size="16" text-anchor="middle" class="pulse-cyan">READABILITY</text></svg>`,
    initialCode: "<h1>My Welcome Page</h1>\n<p>HTML is fun to write.</p>\n\n<!-- Type SCAN below -->\n",
    widgetCode: `
        <div id="scan-lab" style="padding:15px; background:#1e1e2f; border-radius:8px; display:flex; flex-direction:column; height: 100%; min-height: 250px; position:relative; overflow:hidden;">
            <div style="text-align:center; font-weight:bold; color:var(--neon-green); margin-bottom:5px; font-family:monospace; letter-spacing: 2px;">👁️ READABILITY SCANNER</div>
            
            <div id="scan-scene" style="flex-grow:1; position:relative; margin-top:10px; background:#111; border-radius:4px; padding:15px; font-family:monospace; color:#ccc; font-size:12px; overflow:hidden;">
                
                <div id="scan-content" style="opacity:0.5; transition:opacity 0.5s;">
                    <span style="color:#ff00e5">&lt;h1&gt;</span>My Welcome Page<span style="color:#ff00e5">&lt;/h1&gt;</span><br>
                    <span style="color:#ff00e5">&lt;p&gt;</span>HTML is fun to write.<span style="color:#ff00e5">&lt;/p&gt;</span>
                </div>
                
                <div id="laser" style="width:100%; height:4px; background:var(--neon-green); box-shadow:0 0 15px var(--neon-green); position:absolute; left:0; top:-10px; opacity:0; z-index:10;"></div>
                
                <div id="scan-result" style="position:absolute; inset:0; display:flex; flex-direction:column; align-items:center; justify-content:center; background:rgba(17,17,17,0.8); opacity:0; transition:all 0.5s; z-index:20;">
                    <div style="font-size:36px; font-weight:bold; color:var(--neon-green);">100%</div>
                    <div style="color:var(--neon-green); font-weight:bold;">READABLE FORMAT</div>
                </div>
            </div>
            
            <div id="scan-msg" style="text-align:center; margin-top:15px; font-weight:bold; min-height:24px; color:#aaa;">System Idle...</div>
        </div>
        <script>
            (function() {
                var editor = document.getElementById('code-editor');
                var laser = document.getElementById('laser');
                var result = document.getElementById('scan-result');
                var content = document.getElementById('scan-content');
                var msg = document.getElementById('scan-msg');
                var lab = document.getElementById('scan-lab');
                var svgDisplay = document.querySelector('#svg-display');
                
                if (svgDisplay && lab) {
                    svgDisplay.innerHTML = "";
                    svgDisplay.appendChild(lab);
                }
                
                window.m19_done = false;
                var scanning = false;
                
                function handleInput(e) {
                    if (!document.getElementById('scan-lab')) {
                        if (editor) editor.removeEventListener('input', handleInput);
                        return;
                    }
                    if(!editor) return;
                    
                    var val = editor.value.toUpperCase();
                    
                    if (val.includes("SCAN") && !scanning && !window.m19_done) {
                        scanning = true;
                        
                        msg.innerHTML = "Scanning structural integrity...";
                        msg.style.color = "var(--neon-yellow)";
                        
                        laser.style.opacity = "1";
                        laser.style.transition = "top 2s linear";
                        laser.style.top = "100%";
                        
                        setTimeout(function() {
                            laser.style.opacity = "0";
                            laser.style.top = "-10px";
                            
                            result.style.opacity = "1";
                            content.style.opacity = "0";
                            
                            msg.innerHTML = "✔ ANALYSIS COMPLETE";
                            msg.style.color = "var(--neon-green)";
                            
                            if (!window.m19_done) {
                                setTimeout(function() {
                                    window.m19_done = true;
                                    scanning = false;
                                    if (window.IntentEngine && window.Intents) {
                                        window.IntentEngine.run(window.Intents.updatePreview, {code: editor.value});
                                    }
                                }, 1500);
                            }
                        }, 2000);
                    }
                }
                
                if (editor) {
                    editor.addEventListener('input', handleInput);
                }
            })();
        </script>
    `,
    progress: 95,
    validator: function (code) { return window.m19_done === true; }
};