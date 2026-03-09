window.Lessons.lesson2.modules[16] = {
    title: "17. Students write content",
    body: `<p>Write one sentence about your favorite hobby using a paragraph tag.</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Provide a &lt;p&gt; tag with a hobby (e.g. basketball, gaming, coding, music) to materialize it!</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="200" height="110" fill="none" stroke="#ff00e5" stroke-dasharray="4" stroke-width="2"/></svg>`,
    initialCode: "",
    widgetCode: `
        <div id="hobby-lab" style="padding:15px; background:#1e1e2f; border-radius:8px; display:flex; flex-direction:column; height: 100%; min-height: 250px; position:relative; overflow:hidden;">
            <div style="text-align:center; font-weight:bold; color:#ff00e5; margin-bottom:5px; font-family:monospace;">✨ HOBBY MATERIALIZER ✨</div>
            
            <div id="hobby-scene" style="flex-grow:1; display:flex; flex-direction:column; align-items:center; justify-content:flex-end; position:relative; padding-bottom:20px; border-bottom: 2px solid #333;">
                <div id="materialize-beam" style="width:100px; height:0%; background:linear-gradient(to bottom, rgba(255,0,229,0.5), transparent); position:absolute; top:0; z-index:1; transition:all 0.5s;"></div>
                
                <div id="hobby-emoji" style="font-size:64px; position:absolute; bottom:20px; z-index:2; opacity:0; transform:translateY(-50px) scale(0.5); transition:all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275); text-shadow: 0 0 20px rgba(255,0,229,0.8);">
                    ⭐
                </div>
            </div>
            
            <div id="hobby-msg" style="text-align:center; margin-top:15px; font-weight:bold; min-height:48px; color:#aaa;">Awaiting paragraph input...</div>
        </div>
        <script>
            (function() {
                var editor = document.getElementById('code-editor');
                var beam = document.getElementById('materialize-beam');
                var emoji = document.getElementById('hobby-emoji');
                var msg = document.getElementById('hobby-msg');
                var lab = document.getElementById('hobby-lab');
                var svgDisplay = document.querySelector('#svg-display');
                
                if (svgDisplay && lab) {
                    svgDisplay.innerHTML = "";
                    svgDisplay.appendChild(lab);
                }
                
                window.m17_done = false;
                var materialized = false;
                
                function handleInput(e) {
                    if (!document.getElementById('hobby-lab')) {
                        if (editor) editor.removeEventListener('input', handleInput);
                        return;
                    }
                    if(!editor) return;
                    
                    var val = editor.value.toLowerCase();
                    var hasP = /<p[>\\s]/.test(val) && /<\\/p>/.test(val) && val.length > 10;
                    
                    if (hasP && !materialized) {
                        materialized = true;
                        
                        var obj = "⭐";
                        if (val.includes("basketball") || val.includes("hoop")) obj = "🏀";
                        if (val.includes("gam")) obj = "🎮";
                        if (val.includes("music") || val.includes("sing") || val.includes("guitar")) obj = "🎸";
                        if (val.includes("cod") || val.includes("program")) obj = "💻";
                        if (val.includes("draw") || val.includes("art")) obj = "🎨";
                        if (val.includes("read") || val.includes("book")) obj = "📚";
                        if (val.includes("sport") || val.includes("run") || val.includes("soccer")) obj = "⚽";
                        
                        emoji.textContent = obj;
                        
                        // Beam comes down
                        beam.style.height = "100%";
                        msg.innerHTML = "Materializing...";
                        msg.style.color = "#ff00e5";
                        
                        setTimeout(function() {
                            // Object drops in
                            emoji.style.opacity = "1";
                            emoji.style.transform = "translateY(0) scale(1)";
                            
                            setTimeout(function() {
                                beam.style.opacity = "0"; // Beam fades out
                                msg.innerHTML = "✨ HOBBY MATERIALIZED! ✨";
                                msg.style.color = "var(--neon-green)";
                                
                                if (!window.m17_done) {
                                    setTimeout(function() {
                                        window.m17_done = true;
                                        if (window.IntentEngine && window.Intents) {
                                            window.IntentEngine.run(window.Intents.updatePreview, {code: editor.value});
                                        }
                                    }, 1000);
                                }
                            }, 800);
                        }, 500);
                        
                    } else if (!hasP) {
                        materialized = false;
                        emoji.style.opacity = "0";
                        emoji.style.transform = "translateY(-50px) scale(0.5)";
                        beam.style.height = "0%";
                        beam.style.opacity = "1";
                        msg.innerHTML = "Awaiting paragraph input...<br>(Use &lt;p&gt;...)";
                        msg.style.color = "#aaa";
                    }
                }
                
                if (editor) {
                    editor.addEventListener('input', handleInput);
                }
            })();
        </script>
    `,
    progress: 85,
    validator: function (code) { return window.m17_done === true; }
};