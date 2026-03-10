window.Lessons.lesson2.modules[15] = {
    title: "16. A Real 'About Me' Page",
    body: `<p>Let's look at a well-structured "About Me" page with H1, H2, and paragraph text.</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Click the 'RENDER WEBSITE' button on the tablet to see how the code looks in a real browser!</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="30" width="160" height="100" rx="10" fill="none" stroke="#00f2ff" stroke-width="4"/><circle cx="120" cy="115" r="5" fill="#00f2ff"/></svg>`,
    initialCode: "",
    widgetCode: `
        <div id="tablet-lab" style="padding:15px; background:#111; border-radius:8px; display:flex; flex-direction:column; height: 100%; min-height: 250px; position:relative; overflow:hidden;">
            <div style="text-align:center; font-weight:bold; color:#00f2ff; margin-bottom:5px; font-family:monospace;">📱 VIRTUAL TABLET</div>
            
            <div id="tablet-screen" style="flex-grow:1; background:#fff; border: 8px solid #222; border-radius:12px; margin: 0 20px; position:relative; overflow:hidden; display:flex; flex-direction:column; transition:all 0.5s;">
                <!-- Top Bar -->
                <div style="background:#eee; padding:5px; display:flex; gap:5px; border-bottom:1px solid #ccc;">
                    <div style="width:10px; height:10px; border-radius:50%; background:#ff5f56;"></div>
                    <div style="width:10px; height:10px; border-radius:50%; background:#ffbd2e;"></div>
                    <div style="width:10px; height:10px; border-radius:50%; background:#27c93f;"></div>
                </div>
                
                <!-- Content Area -->
                <div id="tablet-code" style="padding:10px; font-family:monospace; font-size:12px; color:#333; height:100%; background:#f8f9fa;">
                    &lt;h1&gt;Hi, I'm Alex!&lt;/h1&gt;<br>
                    &lt;h2&gt;My Hobbies&lt;/h2&gt;<br>
                    &lt;p&gt;I love coding websites, playing basketball, and reading sci-fi books.&lt;/p&gt;
                </div>
                
                <div id="tablet-web" style="padding:15px; font-family:sans-serif; color:#222; height:100%; background:#fff; display:none;">
                    <h1 style="margin:0 0 10px 0; color:#005f73; font-size:20px; border-bottom:2px solid #00f2ff; padding-bottom:5px;">Hi, I'm Alex!</h1>
                    <h2 style="margin:0 0 5px 0; color:#ba1826; font-size:16px;">My Hobbies</h2>
                    <p style="margin:0; font-size:12px; line-height:1.4; color:#555;">I love coding websites, playing basketball, and reading sci-fi books.</p>
                </div>
                
                <!-- Overlay Button -->
                <div id="render-btn" style="position:absolute; bottom:10px; left:50%; transform:translateX(-50%); background:var(--neon-green); color:black; font-weight:bold; padding:8px 16px; border-radius:20px; cursor:pointer; box-shadow:0 4px 10px rgba(0,255,157,0.5); transition:all 0.3s;" class="hover:scale-110">RENDER WEBSITE</div>
            </div>
            
            <div id="tablet-msg" style="text-align:center; margin-top:5px; font-weight:bold; min-height:24px; color:#aaa;">Viewing Raw HTML</div>
        </div>
        <script>
            (function() {
                var btn = document.getElementById('render-btn');
                var tCode = document.getElementById('tablet-code');
                var tWeb = document.getElementById('tablet-web');
                var msg = document.getElementById('tablet-msg');
                var editor = document.getElementById('code-editor');
                
                window.m16_done = false;
                
                if (btn) {
                    btn.onclick = function() {
                        btn.style.display = "none";
                        tCode.style.display = "none";
                        tWeb.style.display = "block";
                        
                        msg.innerHTML = "✨ RENDERED SUCCESSFULLY!";
                        msg.style.color = "var(--neon-green)";
                        
                        if (!window.m16_done) {
                            window.m16_done = true;
                            if (window.IntentEngine && window.Intents) {
                                window.IntentEngine.run(window.Intents.updatePreview, {code: editor ? editor.value : ""});
                            }
                        }
                    };
                }
            })();
        </script>
    `,
    progress: 80,
    validator: function (code) { return window.m16_done === true; }
};