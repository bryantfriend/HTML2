window.Lessons.lesson2.modules[17] = {
    title: "18. Add headings to organize",
    body: `<p>A website shouldn't just be one big paragraph. Use an H1 heading above your text to give the page a title.</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Add an &lt;h1&gt; tag ABOVE the paragraph to organize the hierarchy.</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="40" y="50" fill="white" font-size="24" font-weight="bold">TITLE (H1)</text><rect x="40" y="70" width="160" height="10" fill="#00ff9d"/></svg>`,
    initialCode: "\n<p>I like to play basketball.</p>",
    widgetCode: `
        <div id="org-lab" style="padding:15px; background:#111; border-radius:8px; display:flex; flex-direction:column; height: 100%; min-height: 250px; position:relative; overflow:hidden;">
            <div style="text-align:center; font-weight:bold; color:var(--neon-green); margin-bottom:5px; font-family:monospace;">🏢 HIERARCHY DASHBOARD</div>
            
            <div id="org-scene" style="flex-grow:1; display:flex; flex-direction:column; align-items:center; justify-content:center; position:relative; gap: 10px; padding-top:20px;">
                
                <div id="h1-block" style="width:100%; background:rgba(0,255,157,0.1); border:2px dashed #00ff9d; padding:15px; border-radius:4px; text-align:center; opacity:0; transform:translateY(20px); transition:all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);">
                    <span style="color:#00ff9d; font-family:monospace; font-weight:bold; font-size:18px;">&lt;h1&gt; <span id="h1-text"></span></span>
                </div>
                
                <div id="p-block" style="width:90%; background:rgba(255,255,255,0.05); border:1px solid #444; padding:10px; border-radius:4px; text-align:center; transition:all 0.5s;">
                    <span style="color:#ccc; font-family:monospace; font-size:14px;">&lt;p&gt; I like to play basketball.</span>
                </div>
                
            </div>
            
            <div id="org-msg" style="text-align:center; margin-top:15px; font-weight:bold; min-height:24px; color:#aaa;">Waiting for hierarchy...</div>
        </div>
        <script>
            (function() {
                var editor = document.getElementById('code-editor');
                var h1Block = document.getElementById('h1-block');
                var h1Text = document.getElementById('h1-text');
                var pBlock = document.getElementById('p-block');
                var msg = document.getElementById('org-msg');
                var lab = document.getElementById('org-lab');
                
                
                window.m18_done = false;
                
                function handleInput(e) {
                    if (!document.getElementById('org-lab')) {
                        if (editor) editor.removeEventListener('input', handleInput);
                        return;
                    }
                    if(!editor) return;
                    
                    var val = editor.value;
                    var h1Match = val.match(/<h1(?:>|\\s[^>]*>)\\s*(.*?)\\s*<\\/h1>/i);
                    var pMatchPos = val.toLowerCase().indexOf("<p>");
                    var h1MatchPos = val.toLowerCase().indexOf("<h1");
                    
                    if (h1Match && h1Match[1]) {
                        h1Text.textContent = h1Match[1];
                        
                        // Check hierarchy order
                        if (h1MatchPos < pMatchPos) {
                            // H1 is above P
                            h1Block.style.opacity = "1";
                            h1Block.style.transform = "translateY(0)";
                            h1Block.style.borderStyle = "solid";
                            h1Block.style.boxShadow = "0 0 15px rgba(0,255,157,0.3)";
                            
                            pBlock.style.transform = "translateY(0)";
                            
                            msg.innerHTML = "✔ PERFECT HIERARCHY!<br>H1 established as the primary structural node.";
                            msg.style.color = "var(--neon-green)";
                            
                            if (!window.m18_done && !window.m18_processing) {
                                window.m18_processing = true;
                                setTimeout(function() {
                                    window.m18_done = true;
                                    if (window.IntentEngine && window.Intents) {
                                        window.IntentEngine.run(window.Intents.updatePreview, {code: editor.value});
                                    }
                                }, 1500);
                            }
                        } else {
                            // H1 is below P
                            h1Block.style.opacity = "0.5";
                            h1Block.style.transform = "translateY(40px)"; // Push it down visually
                            h1Block.style.borderStyle = "dashed";
                            h1Block.style.boxShadow = "none";
                            
                            pBlock.style.transform = "translateY(-40px)"; // Push p up visually
                            
                            msg.innerHTML = "⚠️ WARNING!<br>The &lt;h1&gt; must be ABOVE the &lt;p&gt;.";
                            msg.style.color = "yellow";
                        }
                        
                    } else {
                        h1Block.style.opacity = "0";
                        h1Block.style.transform = "translateY(20px)";
                        pBlock.style.transform = "translateY(0)";
                        
                        msg.innerHTML = "Waiting for an &lt;h1&gt;...<br>Place it above the paragraph.";
                        msg.style.color = "#aaa";
                    }
                }
                
                if (editor) {
                    editor.addEventListener('input', handleInput);
                    // Initial check
                    handleInput();
                }
            })();
        </script>
    `,
    progress: 90,
    validator: function (code) { return window.m18_done === true; }
};