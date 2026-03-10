window.Lessons.lesson2.modules[19] = {
    title: "20. Share with partner 👥",
    body: `<p>Websites are meant to be shared across the world! We do this by sending our HTML files through the internet.</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Click the UPLOAD DATA button to transfer your website files to the global server.</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><circle cx="90" cy="60" r="15" fill="#ff00e5"/><circle cx="150" cy="60" r="15" fill="#00f2ff"/><path d="M60 120 Q90 80 120 120" fill="none" stroke="#ff00e5" stroke-width="10" stroke-linecap="round"/><path d="M120 120 Q150 80 180 120" fill="none" stroke="#00f2ff" stroke-width="10" stroke-linecap="round"/></svg>`,
    initialCode: "<p>This is my first website!</p>",
    widgetCode: `
        <div id="net-lab" style="padding:15px; background:#111; border-radius:8px; display:flex; flex-direction:column; height: 100%; min-height: 250px; position:relative; overflow:hidden;">
            <div style="text-align:center; font-weight:bold; color:var(--neon-purple, #8a2be2); margin-bottom:15px; font-family:monospace; letter-spacing: 2px;">🌐 NETWORK TRANSFER OVERRIDE</div>
            
            <div id="net-scene" style="flex-grow:1; display:flex; align-items:center; justify-content:space-between; position:relative; padding:0 20px;">
                
                <!-- Client -->
                <div style="text-align:center;">
                    <div style="font-size:32px;">💻</div>
                    <div style="font-family:monospace; color:#aaa; font-size:10px;">YOU</div>
                </div>
                
                <!-- Connection Line -->
                <div style="flex-grow:1; height:4px; background:#333; margin:0 15px; position:relative; overflow:hidden; border-radius:2px;">
                    <div id="data-packet" style="width:20px; height:4px; background:var(--neon-green); box-shadow:0 0 10px var(--neon-green); position:absolute; left:-20px; top:0; transition:all 2s ease-in-out;"></div>
                </div>
                
                <!-- Server -->
                <div style="text-align:center;">
                    <div style="font-size:32px;">🌍</div>
                    <div style="font-family:monospace; color:#00f2ff; font-size:10px;" id="server-status">SERVER</div>
                </div>
                
            </div>
            
            <button id="trig-send-btn" style="margin:10px auto 0 auto; padding:8px 16px; background:var(--neon-purple, #8a2be2); color:white; font-weight:bold; border-radius:4px; cursor:pointer;" class="hover:scale-105">UPLOAD DATA</button>
            <div id="net-msg" style="text-align:center; margin-top:5px; font-weight:bold; min-height:48px; color:#aaa;">Connection established. Ready to receive.</div>
        </div>
        <script>
            (function() {
                var btn = document.getElementById('trig-send-btn');
                var packet = document.getElementById('data-packet');
                var serverStatus = document.getElementById('server-status');
                var msg = document.getElementById('net-msg');
                var editor = document.getElementById('code-editor');
                
                window.m20_done = false;
                var sending = false;
                
                if (btn) {
                    btn.onclick = function() {
                        if (sending || window.m20_done) return;
                        sending = true;
                        
                        btn.style.opacity = "0.5";
                        msg.innerHTML = "Compressing HTML...<br>Uploading to server...";
                        msg.style.color = "var(--neon-green)";
                        
                        packet.style.left = "calc(100% + 20px)";
                        
                        setTimeout(function() {
                            serverStatus.innerHTML = "<span style='color:var(--neon-green)'>ONLINE</span>";
                            msg.innerHTML = "✔ 100% TRANSFERRED<br>Your website is live!";
                            
                            if (!window.m20_done) {
                                setTimeout(function() {
                                    window.m20_done = true;
                                    sending = false;
                                    if (window.IntentEngine && window.Intents) {
                                        window.IntentEngine.run(window.Intents.updatePreview, {code: editor ? editor.value : ""});
                                    }
                                }, 1500);
                            }
                        }, 2000);
                    };
                }
            })();
        </script>
    `,
    progress: 100,
    validator: function (code) { return window.m20_done === true; }
};