window.Lessons.lesson2.modules[12] = {
    title: "13. Paragraph Margins",
    body: `<p>Notice how paragraphs automatically push away from each other? This invisible spacing is called a <b>margin</b>. It acts like a magnetic force field!</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Create two separate &lt;p&gt; elements with text inside to see the margin magnets in action.</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="30" width="160" height="30" rx="4" fill="#333"/><path d="M120 60 L120 90" stroke="#ff00e5" stroke-width="2" stroke-dasharray="4"/><rect x="40" y="90" width="160" height="30" rx="4" fill="#333"/></svg>`,
    initialCode: "",
    widgetCode: `
        <div id="magnet-lab" style="padding:15px; background:#1e1e2f; border-radius:8px; display:flex; flex-direction:column; height: 100%; min-height: 250px; position:relative; overflow:hidden;">
            <div style="text-align:center; font-weight:bold; color:var(--neon-pink); margin-bottom:15px; font-family:monospace;">🧲 MARGIN MAGNETS</div>
            
            <div id="magnet-scene" style="flex-grow:1; display:flex; flex-direction:column; align-items:center; justify-content:center; position:relative; gap: 0px; transition: gap 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);">
                <div id="block-1" style="width:80%; background:#222; border: 2px solid #444; border-radius:4px; padding:10px; text-align:center; opacity:0; transform:translateY(20px); transition:all 0.5s;">
                    <span style="color:white; font-family:sans-serif;" id="text-1"></span>
                </div>
                
                <div id="force-field" style="height:0; display:flex; align-items:center; justify-content:center; overflow:hidden; transition:height 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);">
                    <div style="color:var(--neon-pink); font-size:24px; animation: pulse 1s infinite alternate;">⚡</div>
                </div>
                
                <div id="block-2" style="width:80%; background:#222; border: 2px solid #444; border-radius:4px; padding:10px; text-align:center; opacity:0; transform:translateY(-20px); transition:all 0.5s;">
                    <span style="color:white; font-family:sans-serif;" id="text-2"></span>
                </div>
            </div>
            
            <div id="magnet-msg" style="text-align:center; margin-top:15px; font-weight:bold; min-height:48px; color:#aaa;">Waiting for paragraphs...</div>
        </div>
        <script>
            (function() {
                var editor = document.getElementById('code-editor');
                var b1 = document.getElementById('block-1');
                var b2 = document.getElementById('block-2');
                var t1 = document.getElementById('text-1');
                var t2 = document.getElementById('text-2');
                var scene = document.getElementById('magnet-scene');
                var forceField = document.getElementById('force-field');
                var msg = document.getElementById('magnet-msg');
                var magnetLab = document.getElementById('magnet-lab');
                var svgDisplay = document.querySelector('#svg-display');
                
                if (svgDisplay && magnetLab) {
                    svgDisplay.innerHTML = "";
                    svgDisplay.appendChild(magnetLab);
                }
                
                window.m13_done = false;
                var repelled = false;
                
                function handleInput(e) {
                    if (!document.getElementById('magnet-lab')) {
                        if (editor) editor.removeEventListener('input', handleInput);
                        return;
                    }
                    if(!editor) return;
                    
                    var val = editor.value;
                    var pMatches = val.match(/<p>\\s*(.*?)\\s*<\\/p>/gi);
                    
                    if (!pMatches || pMatches.length === 0) {
                        b1.style.opacity = "0";
                        b2.style.opacity = "0";
                        scene.style.gap = "0px";
                        forceField.style.height = "0px";
                        repelled = false;
                        msg.innerHTML = "Waiting for paragraphs...";
                        msg.style.color = "#aaa";
                        return;
                    }
                    
                    if (pMatches.length >= 1) {
                        var m1 = pMatches[0].match(/<p>\\s*(.*?)\\s*<\\/p>/i);
                        if (m1 && m1[1]) {
                            t1.textContent = m1[1];
                            b1.style.opacity = "1";
                            b1.style.transform = "translateY(0)";
                            b1.style.borderColor = "var(--neon-cyan)";
                            
                            if (pMatches.length === 1) {
                                msg.innerHTML = "One paragraph created...<br>Need one more!";
                                msg.style.color = "var(--neon-cyan)";
                            }
                        }
                    }
                    
                    if (pMatches.length >= 2) {
                        var m2 = pMatches[1].match(/<p>\\s*(.*?)\\s*<\\/p>/i);
                        if (m2 && m2[1]) {
                            t2.textContent = m2[1];
                            b2.style.opacity = "1";
                            b2.style.transform = "translateY(0)";
                            b2.style.borderColor = "var(--neon-pink)";
                            
                            if (!repelled) {
                                repelled = true;
                                setTimeout(function() {
                                    scene.style.gap = "40px";
                                    forceField.style.height = "40px";
                                    msg.innerHTML = "🧲 REPELLED!<br>Paragraphs naturally push each other away.";
                                    msg.style.color = "var(--neon-green)";
                                    
                                    if (!window.m13_done) {
                                        setTimeout(function() {
                                            window.m13_done = true;
                                            if (window.IntentEngine && window.Intents) {
                                                window.IntentEngine.run(window.Intents.updatePreview, {code: editor.value});
                                            }
                                        }, 1500);
                                    }
                                }, 500); // Slight delay for dramatic effect
                            }
                        }
                    } else {
                        b2.style.opacity = "0";
                        b2.style.transform = "translateY(-20px)";
                        scene.style.gap = "0px";
                        forceField.style.height = "0px";
                        repelled = false;
                    }
                }
                
                if (editor) {
                    editor.addEventListener('input', handleInput);
                }
            })();
        </script>
    `,
    progress: 65,
    validator: function (code) { return window.m13_done === true; }
};