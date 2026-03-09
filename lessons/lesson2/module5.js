window.Lessons.lesson2.modules[4] = {
    title: "5. <h2>–<h6> hierarchy",
    body: `<p>H2 is for major sections. H3 for sub-sections. It creates an organized hierarchy like an outline.</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Build a website tower using headings. Try typing some &lt;h2&gt; and &lt;h3&gt; tags.</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg">
            <rect x="40" y="30" width="160" height="20" fill="#ff00e5"/>
            <rect x="60" y="60" width="140" height="15" fill="#00f2ff"/>
            <rect x="80" y="85" width="120" height="10" fill="#00ff9d"/>
          </svg>`,
    initialCode: "",
    widgetCode: `<!-- INTERACTIVE MODULE -->
        <div id="tower-system" style="padding:15px; background:#1e1e2f; border-radius:8px; display:flex; flex-direction:column; height: 100%; min-height: 300px;">
            <div style="display:flex; justify-content:center; gap:5px; margin-bottom:15px; flex-wrap:wrap;">
                <button class="heading-btn" data-insert="<h2>Section</h2>">H2</button>
                <button class="heading-btn" data-insert="<h3>Sub-section</h3>">H3</button>
                <button class="heading-btn" data-insert="<h4>Details</h4>">H4</button>
                <button class="heading-btn" data-insert="<h5>Points</h5>">H5</button>
                <button class="heading-btn" data-insert="<h6>Notes</h6>">H6</button>
            </div>
            
            <div style="text-align:center; font-weight:bold; color:var(--neon-pink); margin-bottom:10px;">🏗 WEBSITE TOWER</div>
            <div id="tower-container" style="flex-grow:1; display:flex; flex-direction:column; align-items:center; overflow-y:auto; padding:10px;">
                <div style="color:#555; margin-top:50px;">Waiting for blocks...</div>
            </div>
            
            <div id="tower-msg" style="text-align:center; margin-top:10px; font-weight:bold; min-height:24px;"></div>
        </div>
        
        <script>
            (function() {
                var editor = document.getElementById('code-editor');
                var container = document.getElementById('tower-container');
                var msg = document.getElementById('tower-msg');
                var btns = document.querySelectorAll('#tower-system .heading-btn');
                window.m5_done = false;
                
                var widthMap = {
                    2: '100%',
                    3: '85%',
                    4: '70%',
                    5: '55%',
                    6: '40%'
                };
                
                var colorMap = {
                    2: 'var(--neon-pink)',
                    3: 'var(--neon-cyan)',
                    4: 'var(--neon-green)',
                    5: '#ffbd2e',
                    6: '#ff5f56'
                };
                
                function buildTower() {
                    if (!document.getElementById('tower-system')) {
                        if (editor) editor.removeEventListener('input', buildTower);
                        return;
                    }

                    if(!editor) return;
                    var val = editor.value;
                    var regex = /<h([2-6])>(.*?)<\\/h\\1>/gi;
                    var match;
                    var blocks = [];
                    
                    while ((match = regex.exec(val)) !== null) {
                        blocks.push({ level: parseInt(match[1]), text: match[2] });
                    }
                    
                    if (blocks.length === 0) {
                        container.innerHTML = '<div style="color:#555; margin-top:50px;">Waiting for blocks...</div>';
                        msg.textContent = "";
                        return;
                    }
                    
                    container.innerHTML = "";
                    
                    blocks.forEach(function(block, idx) {
                        var div = document.createElement('div');
                        div.className = 'tower-block';
                        div.style.width = widthMap[block.level];
                        div.style.backgroundColor = colorMap[block.level];
                        div.style.padding = (8 - block.level) + 'px';
                        div.style.marginTop = '4px';
                        div.style.border = '1px solid black';
                        // Add drop animation
                        div.style.animation = 'bounce-low 0.5s ease-out';
                        
                        div.innerHTML = "<div style='background:rgba(0,0,0,0.3); height:10px; margin-bottom:4px;'></div>" +
                                        "<span style='font-size:" + (18 - block.level*2) + "px'>" + block.text + " (H" + block.level + ")</span>";
                        
                        container.appendChild(div);
                    });
                    
                    if (blocks.length >= 3) {
                        msg.textContent = "✔ TOWER BUILT PERFECTLY!";
                        msg.style.color = "var(--neon-green)";
                        
                        if (!window.m5_done) {
                            window.m5_done = true;
                            setTimeout(function() {
                                if (window.IntentEngine && window.Intents) {
                                    window.IntentEngine.run(window.Intents.updatePreview, {code: editor.value});
                                }
                            }, 1000);
                        }
                    } else {
                        msg.textContent = "Keep building... We need at least 3 blocks!";
                        msg.style.color = "#aaa";
                    }
                }
                
                if (editor) {
                    editor.addEventListener('input', buildTower);
                }
                
                btns.forEach(function(btn) {
                    btn.addEventListener('click', function() {
                        if (editor) {
                            editor.value += (editor.value.endsWith("\\n") || editor.value === "" ? "" : "\\n") + this.getAttribute('data-insert');
                            buildTower();
                            // If intent engine running, update it
                            if(window.IntentEngine && window.Intents && window.Intents.updatePreview) {
                                window.IntentEngine.run(window.Intents.updatePreview, {code: editor.value});
                            }
                        }
                    });
                });
                
                // Initial check
                buildTower();
            })();
        </script>
    `,
    progress: 25,
    validator: function (code) { return window.m5_done === true; }
};