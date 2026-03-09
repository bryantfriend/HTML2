window.Lessons.lesson2.modules[9] = {
    title: "10. The Text Tilt Machine <i>",
    body: `<p>The <code>&lt;i&gt;</code> tag makes text <i>italic</i> (slanted/leaning).</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Click the machine's toggle lever to add <i> tags automatically.</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="120" y="80" fill="#00f2ff" font-family="sans-serif" font-size="30" font-style="italic" text-anchor="middle">Italics</text></svg>`,
    initialCode: "Leaning",
    widgetCode: `
        <div id="tilt-machine" style="padding:15px; background:#1e1e2f; border-radius:8px; display:flex; flex-direction:column; height: 100%; min-height: 250px; position:relative; overflow:hidden;">
            <div style="text-align:center; font-weight:bold; color:var(--neon-cyan); margin-bottom:15px; font-family:monospace;">⚙️ TEXT TILT MACHINE</div>
            
            <div id="tilt-scene" style="flex-grow:1; display:flex; flex-direction:column; align-items:center; justify-content:center; position:relative;">
                <div id="target-text" style="font-size:36px; color:white; font-weight:bold; transition:all 0.5s ease-in-out; transform-origin: bottom center;">Leaning</div>
            </div>
            
            <div style="display:flex; justify-content:space-between; align-items:center; background:#111; padding:10px; border-radius:4px; margin-top:20px;">
                <div style="font-family:monospace; font-size:12px; color:#aaa;">
                    TEXT ANGLE<br>
                    <span id="angle-disp">NORMAL 0°</span>
                </div>
                <!-- Interactive Toggle -->
                <div id="lever" style="width:50px; height:24px; background:#333; border-radius:12px; position:relative; transition:all 0.3s; cursor:pointer;" class="hover:bg-gray-700">
                    <div id="lever-knob" style="width:24px; height:24px; background:white; border-radius:50%; position:absolute; left:0; top:0; transition:all 0.3s; box-shadow:0 0 5px rgba(255,255,255,0.5);"></div>
                </div>
                <div style="font-family:monospace; font-size:12px; color:#aaa; text-align:right;">
                    STATE<br>
                    <span id="state-disp">OFF</span>
                </div>
            </div>
            
            <div id="tilt-msg" style="text-align:center; margin-top:15px; font-weight:bold; min-height:48px; color:var(--neon-green);"></div>
        </div>
        <script>
            (function() {
                var editor = document.getElementById('code-editor');
                var targetText = document.getElementById('target-text');
                var lever = document.getElementById('lever');
                var leverKnob = document.getElementById('lever-knob');
                var angleDisp = document.getElementById('angle-disp');
                var stateDisp = document.getElementById('state-disp');
                var msg = document.getElementById('tilt-msg');
                var machine = document.getElementById('tilt-machine');
                
                window.m10_done = false;
                
                var initVal = editor ? editor.value.toLowerCase() : "";
                var isItalic = initVal.includes("<i>");
                
                function syncUI() {
                    if (isItalic) {
                        leverKnob.style.left = "26px";
                        leverKnob.style.background = "var(--neon-cyan)";
                        leverKnob.style.boxShadow = "0 0 10px var(--neon-cyan)";
                        lever.style.background = "#005f73";
                        
                        angleDisp.innerHTML = "ITALIC 15°";
                        angleDisp.style.color = "var(--neon-cyan)";
                        stateDisp.innerHTML = "ON";
                        stateDisp.style.color = "var(--neon-cyan)";
                        
                        targetText.style.transform = "skewX(-15deg)";
                        targetText.style.color = "var(--neon-cyan)";
                        
                        msg.innerHTML = "✔ Italic Activated<br>&lt;i&gt; tags added by machine.";
                        machine.style.boxShadow = "inset 0 0 20px rgba(0, 242, 255, 0.2)";
                        
                        if (!window.m10_done) {
                            setTimeout(function() { window.m10_done = true; }, 1000);
                        }
                    } else {
                        leverKnob.style.left = "0";
                        leverKnob.style.background = "white";
                        leverKnob.style.boxShadow = "0 0 5px rgba(255,255,255,0.5)";
                        lever.style.background = "#333";
                        
                        angleDisp.innerHTML = "NORMAL 0°";
                        angleDisp.style.color = "#aaa";
                        stateDisp.innerHTML = "OFF";
                        stateDisp.style.color = "#aaa";
                        
                        targetText.style.transform = "skewX(0deg)";
                        targetText.style.color = "white";
                        
                        msg.innerHTML = "";
                        machine.style.boxShadow = "none";
                    }
                }
                
                // Initialize UI based on current editor value
                syncUI();
                
                function toggleItalic() {
                    isItalic = !isItalic;
                    
                    if (isItalic) {
                        if (editor) {
                            editor.value = "<i>Leaning</i>";
                            if (window.IntentEngine && window.Intents) {
                                window.IntentEngine.run(window.Intents.updatePreview, {code: editor.value});
                            }
                        }
                    } else {
                        if (editor) {
                            editor.value = "Leaning";
                            if (window.IntentEngine && window.Intents) {
                                window.IntentEngine.run(window.Intents.updatePreview, {code: editor.value});
                            }
                        }
                    }
                }
                
                if (lever) {
                    lever.addEventListener('click', toggleItalic);
                }
            })();
        </script>
    `,
    progress: 50,
    validator: function (code) { return window.m10_done === true; }
};