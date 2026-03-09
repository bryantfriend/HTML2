window.Lessons.lesson2.modules[15] = {
    title: "16. Teacher example",
    body: `<p>Let's look at a well-structured "About Me" page with H1, H2, and paragraph text.</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Type "ON" to power up the Virtual Projector!</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><path d="M60 75 Q120 20 180 75 Q120 130 60 75" fill="none" stroke="#00f2ff" stroke-width="4"/><circle cx="120" cy="75" r="15" fill="#00f2ff"/></svg>`,
    initialCode: "",
    widgetCode: `
        <div id="projector-lab" style="padding:15px; background:#111; border-radius:8px; display:flex; flex-direction:column; height: 100%; min-height: 250px; position:relative; overflow:hidden;">
            <div style="text-align:center; font-weight:bold; color:#00f2ff; margin-bottom:5px; font-family:monospace;">📽️ VIRTUAL PROJECTOR</div>
            
            <div id="projector-scene" style="flex-grow:1; display:flex; position:relative; margin-top:10px;">
                <!-- Projector Device -->
                <div style="position:absolute; bottom:20px; left:10px; width:40px; height:30px; background:#333; border-radius:4px; z-index:2; border-bottom:4px solid #111;">
                    <div id="lens" style="position:absolute; right:-5px; top:5px; width:15px; height:15px; background:#222; border-radius:50%; border:2px solid #555; transition:all 0.5s;"></div>
                    <div id="power-light" style="position:absolute; left:5px; top:5px; width:6px; height:6px; background:red; border-radius:50%; box-shadow:0 0 5px red; transition:all 0.5s;"></div>
                </div>
                
                <!-- Light Beam -->
                <div id="beam" style="position:absolute; bottom:35px; left:45px; width:0%; height:0px; background:linear-gradient(90deg, rgba(0, 242, 255, 0.8), rgba(0, 242, 255, 0)); clip-path: polygon(0% 50%, 100% 0%, 100% 100%); transform-origin: left center; z-index:1; transition:all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275); opacity:0;"></div>
                
                <!-- Wall Projection screen -->
                <div id="wall" style="position:absolute; right:10px; top:10px; bottom:10px; width:180px; background:#222; border: 2px solid #444; border-radius:4px; opacity:0; transition:all 1s; padding:10px; box-shadow: 0 0 20px rgba(0,242,255,0); display:flex; flex-direction:column; justify-content:center;">
                    <div id="code-output" style="color:#00f2ff; font-family:monospace; font-size:10px; opacity:0; transition:opacity 1s;">
                        <span style="color:#ff00e5">&lt;h1&gt;</span>About Me<span style="color:#ff00e5">&lt;/h1&gt;</span><br>
                        <span style="color:#ff00e5">&lt;h2&gt;</span>Hobbies<span style="color:#ff00e5">&lt;/h2&gt;</span><br>
                        <span style="color:#ff00e5">&lt;p&gt;</span>I love code!<span style="color:#ff00e5">&lt;/p&gt;</span>
                    </div>
                </div>
            </div>
            
            <div id="proj-msg" style="text-align:center; margin-top:5px; font-weight:bold; min-height:24px; color:#aaa;">System Standby...</div>
        </div>
        <script>
            (function() {
                var editor = document.getElementById('code-editor');
                var lens = document.getElementById('lens');
                var powerLight = document.getElementById('power-light');
                var beam = document.getElementById('beam');
                var wall = document.getElementById('wall');
                var codeOut = document.getElementById('code-output');
                var msg = document.getElementById('proj-msg');
                var lab = document.getElementById('projector-lab');
                var svgDisplay = document.querySelector('#svg-display');
                
                if (svgDisplay && lab) {
                    svgDisplay.innerHTML = "";
                    svgDisplay.appendChild(lab);
                }
                
                window.m16_done = false;
                
                function handleInput(e) {
                    if (!document.getElementById('projector-lab')) {
                        if (editor) editor.removeEventListener('input', handleInput);
                        return;
                    }
                    if(!editor) return;
                    
                    var val = editor.value.toUpperCase();
                    
                    if (val.includes("ON")) {
                        powerLight.style.background = "#00ff9d";
                        powerLight.style.boxShadow = "0 0 10px #00ff9d";
                        lens.style.background = "#00f2ff";
                        lens.style.boxShadow = "0 0 15px #00f2ff";
                        
                        beam.style.opacity = "0.4";
                        beam.style.width = "calc(100% - 60px)";
                        beam.style.height = "160px"; // Spread
                        
                        wall.style.opacity = "1";
                        wall.style.boxShadow = "0 0 20px rgba(0,242,255,0.3)";
                        wall.style.borderColor = "#00f2ff";
                        
                        setTimeout(function(){
                            codeOut.style.opacity = "1";
                        }, 500);
                        
                        msg.innerHTML = "📽️ PROJECTOR ONLINE!";
                        msg.style.color = "#00ff9d";
                        
                        if (!window.m16_done) {
                            setTimeout(function() {
                                window.m16_done = true;
                                if (window.IntentEngine && window.Intents) {
                                    window.IntentEngine.run(window.Intents.updatePreview, {code: editor.value});
                                }
                            }, 1500);
                        }
                    } else {
                        powerLight.style.background = "red";
                        powerLight.style.boxShadow = "0 0 5px red";
                        lens.style.background = "#222";
                        lens.style.boxShadow = "none";
                        
                        beam.style.opacity = "0";
                        beam.style.width = "0%";
                        beam.style.height = "0px";
                        
                        wall.style.opacity = "0";
                        wall.style.boxShadow = "none";
                        wall.style.borderColor = "#444";
                        
                        codeOut.style.opacity = "0";
                        msg.innerHTML = "System Standby... (Type ON)";
                        msg.style.color = "#aaa";
                    }
                }
                
                if (editor) {
                    editor.addEventListener('input', handleInput);
                }
            })();
        </script>
    `,
    progress: 80,
    validator: function (code) { return window.m16_done === true; }
};