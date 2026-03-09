window.Lessons.lesson2.modules[14] = {
    title: "15. Making an “About Me” page",
    body: `<p>A classic first website is the "About Me" page. It usually features a large heading for your name and paragraphs to hold your bio.</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Provide an &lt;h1&gt; and a &lt;p&gt; to complete the blueprint.</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><circle cx="120" cy="50" r="20" fill="#00ff9d"/><path d="M80 120 Q120 80 160 120" fill="none" stroke="#00ff9d" stroke-width="20" stroke-linecap="round"/></svg>`,
    initialCode: "",
    widgetCode: `
        <div id="blueprint-lab" style="padding:15px; background:#001524; border-radius:8px; display:flex; flex-direction:column; height: 100%; min-height: 250px; position:relative; overflow:hidden; border: 2px solid #005f73;">
            <div style="text-align:center; font-weight:bold; color:#00f2ff; margin-bottom:15px; font-family:monospace; letter-spacing: 2px;">📐 BLUEPRINT SCANNER</div>
            
            <div id="blueprint-scene" style="flex-grow:1; display:flex; flex-direction:column; align-items:center; justify-content:center; position:relative; background-image: linear-gradient(#005f73 1px, transparent 1px), linear-gradient(90deg, #005f73 1px, transparent 1px); background-size: 20px 20px; border-radius: 4px; padding: 20px;">
                
                <div style="width:100%; height:40px; margin-bottom:20px; position:relative;">
                    <div id="bp-h1" style="width:100%; height:100%; border:2px dashed #005f73; position:absolute; top:0; left:0; transition:all 0.5s;"></div>
                    <div id="bp-h1-fill" style="width:0%; height:100%; background:rgba(0, 242, 255, 0.2); border:2px solid #00f2ff; position:absolute; top:0; left:0; transition:all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275); display:flex; align-items:center; justify-content:center; overflow:hidden;">
                        <span style="color:#00f2ff; font-family:monospace; font-weight:bold; opacity:0; transition:opacity 0.5s; white-space:nowrap;" id="bp-h1-text">&lt;h1&gt; DESIGN DETECTED</span>
                    </div>
                </div>
                
                <div style="width:100%; height:80px; position:relative;">
                    <div id="bp-p" style="width:100%; height:100%; border:2px dashed #005f73; position:absolute; top:0; left:0; transition:all 0.5s;"></div>
                    <div id="bp-p-fill" style="width:0%; height:100%; background:rgba(0, 255, 157, 0.2); border:2px solid #00ff9d; position:absolute; top:0; left:0; transition:all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275); display:flex; align-items:center; justify-content:center; overflow:hidden;">
                        <span style="color:#00ff9d; font-family:monospace; font-weight:bold; opacity:0; transition:opacity 0.5s; white-space:nowrap;" id="bp-p-text">&lt;p&gt; DESIGN DETECTED</span>
                    </div>
                </div>
                
            </div>
            
            <div id="bp-msg" style="text-align:center; margin-top:15px; font-weight:bold; min-height:48px; color:#aaa;">Scanning for structure...</div>
        </div>
        <script>
            (function() {
                var editor = document.getElementById('code-editor');
                var bpH1Fill = document.getElementById('bp-h1-fill');
                var bpH1Text = document.getElementById('bp-h1-text');
                var bpPFill = document.getElementById('bp-p-fill');
                var bpPText = document.getElementById('bp-p-text');
                var msg = document.getElementById('bp-msg');
                var lab = document.getElementById('blueprint-lab');
                var svgDisplay = document.querySelector('#svg-display');
                
                if (svgDisplay && lab) {
                    svgDisplay.innerHTML = "";
                    svgDisplay.appendChild(lab);
                }
                
                window.m15_done = false;
                
                function handleInput(e) {
                    if (!document.getElementById('blueprint-lab')) {
                        if (editor) editor.removeEventListener('input', handleInput);
                        return;
                    }
                    if(!editor) return;
                    
                    var val = editor.value;
                    var hasH1 = /<h1[>\\s]/.test(val) && /<\\/h1>/.test(val);
                    var hasP = /<p[>\\s]/.test(val) && /<\\/p>/.test(val);
                    
                    if (hasH1) {
                        bpH1Fill.style.width = "100%";
                        setTimeout(function(){ bpH1Text.style.opacity = "1"; }, 500);
                    } else {
                        bpH1Fill.style.width = "0%";
                        bpH1Text.style.opacity = "0";
                    }
                    
                    if (hasP) {
                        bpPFill.style.width = "100%";
                        setTimeout(function(){ bpPText.style.opacity = "1"; }, 500);
                    } else {
                        bpPFill.style.width = "0%";
                        bpPText.style.opacity = "0";
                    }
                    
                    if (hasH1 && hasP) {
                        msg.innerHTML = "📐 BLUEPRINT COMPLETE!<br>Structure successfully mapped.";
                        msg.style.color = "#00f2ff";
                        
                        if (!window.m15_done) {
                            setTimeout(function() {
                                window.m15_done = true;
                                if (window.IntentEngine && window.Intents) {
                                    window.IntentEngine.run(window.Intents.updatePreview, {code: editor.value});
                                }
                            }, 1500);
                        }
                    } else if (hasH1) {
                        msg.innerHTML = "Header mapped. Missing paragraph.";
                        msg.style.color = "#00ff9d";
                    } else if (hasP) {
                        msg.innerHTML = "Paragraph mapped. Missing header.";
                        msg.style.color = "#00f2ff";
                    } else {
                        msg.innerHTML = "Scanning for structure...<br>Provide &lt;h1&gt; and &lt;p&gt; bounds.";
                        msg.style.color = "#aaa";
                    }
                }
                
                if (editor) {
                    editor.addEventListener('input', handleInput);
                }
            })();
        </script>
    `,
    progress: 75,
    validator: function (code) { return window.m15_done === true; }
};