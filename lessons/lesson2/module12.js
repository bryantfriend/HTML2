window.Lessons.lesson2.modules[11] = {
    title: "12. Combining tags",
    body: `<p>You can put tags inside tags! Just be sure to close the inner tag before closing the outer tag: <code>&lt;p&gt;&lt;b&gt;Word&lt;/b&gt;&lt;/p&gt;</code></p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Make the word "Super" bold inside a paragraph to power the Combiner Machine.</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="40" width="160" height="70" fill="none" stroke="#ff00e5" stroke-width="2"/><rect x="60" y="55" width="120" height="40" fill="none" stroke="#00f2ff" stroke-width="2"/></svg>`,
    initialCode: "Super",
    widgetCode: `
        <div id="combine-lab" style="padding:15px; background:#111; border-radius:8px; display:flex; flex-direction:column; height: 100%; min-height: 250px; position:relative; overflow:hidden;">
            <div style="text-align:center; font-weight:bold; color:var(--neon-cyan); margin-bottom:15px; font-family:monospace; letter-spacing:2px;">⚙️ TAG COMBINER</div>
            
            <div id="combine-scene" style="flex-grow:1; display:flex; flex-direction:column; align-items:center; justify-content:center; gap: 10px;">
                <div id="p-box" style="width:160px; height:80px; border:2px dashed #444; border-radius:8px; display:flex; align-items:center; justify-content:center; position:relative; transition:all 0.5s;">
                    <span style="position:absolute; top:-10px; left:10px; background:#111; padding:0 5px; color:#aaa; font-size:12px; font-family:monospace;">&lt;p&gt; shell</span>
                    
                    <div id="b-box" style="width:100px; height:40px; border:2px dashed #444; border-radius:4px; display:flex; align-items:center; justify-content:center; position:relative; transition:all 0.5s;">
                        <span style="position:absolute; top:-8px; left:5px; background:#111; padding:0 2px; color:#aaa; font-size:10px; font-family:monospace;">&lt;b&gt; core</span>
                        <span id="word-core" style="color:white; font-weight:normal; transition:all 0.5s;">Super</span>
                    </div>
                </div>
                
                <div id="energy-beam" style="width:4px; height:0px; background:var(--neon-green); box-shadow:0 0 10px var(--neon-green); transition:all 1s;"></div>
            </div>
            
            <div id="combine-msg" style="text-align:center; margin-top:15px; font-weight:bold; min-height:48px; color:#aaa;">Waiting for valid combination...</div>
        </div>
        <script>
            (function() {
                var editor = document.getElementById('code-editor');
                var pBox = document.getElementById('p-box');
                var bBox = document.getElementById('b-box');
                var wordCore = document.getElementById('word-core');
                var beam = document.getElementById('energy-beam');
                var msg = document.getElementById('combine-msg');
                var lab = document.getElementById('combine-lab');
                
                window.m12_done = false;
                var combined = false;
                
                function handleInput(e) {
                    if (!document.getElementById('combine-lab')) {
                        if (editor) editor.removeEventListener('input', handleInput);
                        return;
                    }
                    if(!editor) return;
                    
                    var val = editor.value.toLowerCase();
                    var hasP = /<p[>\\s]/.test(val) && /<\\/p>/.test(val);
                    var hasB = /<b[>\\s]/.test(val) && /<\\/b>/.test(val);
                    var isNested = /<p[>\\s]>.*<b[>\\s]>\\s*super\\s*<\\/b>.*<\\/p>/i.test(val);
                    var badNest = /<p[>\\s]>.*<b[>\\s]>.*<\\/p>.*<\\/b>/i.test(val);
                    
                    if (hasP) {
                        pBox.style.borderColor = "var(--neon-cyan)";
                        pBox.style.background = "rgba(0, 242, 255, 0.1)";
                    } else {
                        pBox.style.borderColor = "#444";
                        pBox.style.background = "transparent";
                    }
                    
                    if (hasB) {
                        bBox.style.borderColor = "var(--neon-pink)";
                        bBox.style.background = "rgba(255, 0, 229, 0.2)";
                        wordCore.style.fontWeight = "bold";
                        wordCore.style.color = "var(--neon-pink)";
                    } else {
                        bBox.style.borderColor = "#444";
                        bBox.style.background = "transparent";
                        wordCore.style.fontWeight = "normal";
                        wordCore.style.color = "white";
                    }
                    
                    if (badNest) {
                        msg.innerHTML = "🚫 Bad Nesting!<br>You must close the inside tag first!";
                        msg.style.color = "#ff5f56";
                        pBox.style.borderColor = "#ff5f56";
                        bBox.style.borderColor = "#ff5f56";
                        return;
                    }
                    
                    if (isNested && !combined) {
                        combined = true;
                        pBox.style.borderStyle = "solid";
                        pBox.style.boxShadow = "0 0 15px var(--neon-cyan)";
                        bBox.style.borderStyle = "solid";
                        bBox.style.boxShadow = "0 0 15px var(--neon-pink)";
                        
                        msg.innerHTML = "⚙️ ALIGNMENT LOCKED!";
                        msg.style.color = "var(--neon-green)";
                        beam.style.height = "20px";
                        
                        if (!window.m12_done) {
                            setTimeout(function() {
                                msg.innerHTML = "✔ PERFECT COMBINATION!";
                                window.m12_done = true;
                                if (window.IntentEngine && window.Intents) {
                                    window.IntentEngine.run(window.Intents.updatePreview, {code: editor.value});
                                }
                            }, 1500);
                        }
                    } else if (!isNested) {
                        combined = false;
                        pBox.style.borderStyle = "dashed";
                        pBox.style.boxShadow = "none";
                        bBox.style.borderStyle = "dashed";
                        bBox.style.boxShadow = "none";
                        beam.style.height = "0px";
                        
                        if (hasP && hasB) {
                            msg.innerHTML = "Both elements exist.<br>Now nest &lt;b&gt; inside &lt;p&gt;!.";
                            msg.style.color = "#ffbd2e";
                        } else {
                            msg.innerHTML = "Waiting for valid combination...<br>Nest &lt;b&gt; inside &lt;p&gt;";
                            msg.style.color = "#aaa";
                        }
                    }
                }
                
                if (editor) {
                    editor.addEventListener('input', handleInput);
                }
            })();
        </script>
    `,
    progress: 60,
    validator: function (code) { return window.m12_done === true; }
};