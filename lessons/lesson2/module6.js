window.Lessons.lesson2.modules[5] = {
    title: "6. Large vs Small Headings",
    body: `<p>H1 is the largest heading.<br>H6 is actually smaller than regular paragraph text!</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Test the text size machine. Click the H1, P, and H6 buttons below to see the difference.</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="120" y="60" fill="white" font-size="30" font-weight="bold" text-anchor="middle">BIG</text><text x="120" y="100" fill="white" font-size="10" text-anchor="middle">small</text></svg>`,
    initialCode: "",
    widgetCode: `
        <div id="size-lab" style="padding:15px; text-align:center; background:#1e1e2f; border-radius:8px; display:flex; flex-direction:column; height: 100%; min-height: 250px; position:relative; overflow:hidden;">
            <div style="text-align:center; font-weight:bold; color:var(--neon-green); margin-bottom:10px;">🧪 TEXT SIZE LAB</div>
            <div style="font-size:12px; color:#aaa; margin-bottom:15px;">Click all 3 sizes to test them!</div>
            
            <div style="display:flex; justify-content:center; gap:5px; margin-bottom:15px; z-index:10;">
                <button class="size-btn px-3 py-1 bg-blue-600 rounded text-white font-bold hover:bg-blue-500" data-type="h1">H1</button>
                <button class="size-btn px-3 py-1 bg-blue-600 rounded text-white font-bold hover:bg-blue-500" data-type="p">P</button>
                <button class="size-btn px-3 py-1 bg-blue-600 rounded text-white font-bold hover:bg-blue-500" data-type="h6">H6</button>
            </div>
            
            <div id="scene-container" style="flex-grow:1; display:flex; align-items:flex-end; justify-content:center; position:relative; padding-bottom:20px; border-bottom: 2px solid #555;">
                <div id="scene-text" style="display:none; z-index:5; font-weight:bold; text-align:center; padding: 10px; border-radius: 5px;"></div>
                <div id="scene-emoji" style="font-size:40px; position:absolute; bottom:10px; z-index:2; transition:all 0.5s;">🏙️</div>
            </div>
            
            <div id="lab-msg" style="text-align:center; margin-top:15px; font-weight:bold; min-height:48px; color:var(--neon-cyan);"></div>
        </div>
        <script>
            (function() {
                var editor = document.getElementById('code-editor');
                var lab = document.getElementById('size-lab');
                var sceneText = document.getElementById('scene-text');
                var sceneEmoji = document.getElementById('scene-emoji');
                var msg = document.getElementById('lab-msg');
                var btns = document.querySelectorAll('#size-lab .size-btn');
                
                var tested = { h1: false, p: false, h6: false };
                window.m6_done = false;
                
                function setScene(type) {
                    if (!document.getElementById('size-lab')) return;
                    
                    var activeContent = type === "h1" ? "My Title" : type === "h6" ? "Small heading" : "Normal paragraph text";
                    var tag = type;
                    
                    if(editor) {
                        editor.value = "<" + tag + ">" + activeContent + "</" + tag + ">";
                        if(window.IntentEngine && window.Intents && window.Intents.updatePreview) {
                            window.IntentEngine.run(window.Intents.updatePreview, {code: editor.value});
                        }
                    }
                    
                    sceneText.style.display = "block";
                    sceneText.textContent = activeContent;
                    
                    if (type === "h1") {
                        tested.h1 = true;
                        sceneText.style.fontSize = "40px";
                        sceneText.style.color = "var(--neon-pink)";
                        sceneText.style.animation = "bounce-low 0.5s ease-out";
                        sceneEmoji.textContent = "🦖";
                        sceneEmoji.style.fontSize = "80px";
                        sceneEmoji.style.transform = "translateX(-80px)";
                        msg.innerHTML = "😎 HUGE<br>H1 = GIANT MAIN TITLE";
                        lab.style.background = "#2a1515"; // dark red tint
                        lab.style.animation = "scan 0.3s ease infinite alternate"; // slight shake
                        setTimeout(function() { lab.style.animation = "none" }, 300);
                    } else if (type === "h6") {
                        tested.h6 = true;
                        sceneText.style.fontSize = "10px";
                        sceneText.style.color = "var(--neon-cyan)";
                        sceneText.style.animation = "none";
                        sceneEmoji.textContent = "🐜";
                        sceneEmoji.style.fontSize = "20px";
                        sceneEmoji.style.transform = "translateX(-40px)";
                        msg.innerHTML = "🤏 TINY<br>H6 = VERY SMALL HEADING";
                        lab.style.background = "#1e1e2f";
                    } else if (type === "p") {
                        tested.p = true;
                        sceneText.style.fontSize = "16px";
                        sceneText.style.color = "white";
                        sceneText.style.animation = "none";
                        sceneEmoji.textContent = "🚶";
                        sceneEmoji.style.fontSize = "30px";
                        sceneEmoji.style.transform = "translateX(-60px)";
                        msg.innerHTML = "Normal Person<br>P = Regular Paragraph";
                        lab.style.background = "#1e1e2f";
                    }
                    
                    if (tested.h1 && tested.p && tested.h6 && !window.m6_done) {
                        setTimeout(function() {
                            msg.innerHTML = "😲 SMALLER THAN P!<br>✅ You discovered the text size truth!";
                            msg.style.color = "var(--neon-green)";
                            if (!window.m6_done) {
                                window.m6_done = true;
                                if (window.IntentEngine && window.Intents) {
                                    window.IntentEngine.run(window.Intents.updatePreview, {code: editor.value});
                                }
                            }
                        }, 1000);
                    }
                }
                
                btns.forEach(function(btn) {
                    btn.addEventListener('click', function() {
                        setScene(this.getAttribute('data-type'));
                    });
                });
            })();
        </script>
    `,
    progress: 30,
    validator: function (code) { return window.m6_done === true; }
};