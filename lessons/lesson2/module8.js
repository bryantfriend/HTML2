window.Lessons.lesson2.modules[7] = {
    title: "8. Bold Text <b>",
    body: `<p>The <code>&lt;b&gt;</code> tag makes text <b>bold</b>. Bold words stand out more than normal words.</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Make the word "Strong" bold by wrapping it in <code>&lt;b&gt;</code> and <code>&lt;/b&gt;</code> tags.</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="120" y="85" fill="#00ff9d" font-family="sans-serif" font-size="36" font-weight="900" text-anchor="middle">&lt;b&gt; BOLD</text></svg>`,
    initialCode: "Strong vs weak",
    widgetCode: `
        <div id="fight-club" style="padding:15px; text-align:center; background:#111; border: 2px solid #555; border-radius:8px; display:flex; flex-direction:column; height: 100%; min-height: 250px; position:relative; overflow:hidden;">
            <div style="font-weight:bold; color:var(--neon-pink); margin-bottom:20px; font-size:18px;">🥊 TEXT FIGHT CLUB</div>
            
            <div id="fight-scene" style="flex-grow:1; display:flex; justify-content:center; align-items:center; position:relative; font-size:24px; color:white;">
                <div id="fighter-1" style="position:relative; transition:all 0.3s; margin-right:40px;">Strong</div>
                <div style="font-size:14px; color:#555; position:absolute; left:50%; transform:translateX(-50%);">vs</div>
                <div id="fighter-2" style="position:relative; transition:all 0.3s; margin-left:40px;">weak</div>
            </div>
            
            <div id="fight-msg" style="text-align:center; margin-top:10px; font-weight:bold; min-height:48px; color:#aaa;">🔔 Ding!<br>Both words look the same.</div>
        </div>
        <script>
            (function() {
                var editor = document.getElementById('code-editor');
                var f1 = document.getElementById('fighter-1');
                var f2 = document.getElementById('fighter-2');
                var msg = document.getElementById('fight-msg');
                var fightClub = document.getElementById('fight-club');
                
                window.m8_done = false;
                
                function handleInput(e) {
                    if (!document.getElementById('fight-club')) {
                        if (editor) editor.removeEventListener('input', handleInput);
                        return;
                    }
                    if(!editor) return;
                    
                    var val = editor.value;
                    
                    // Match configurations
                    var bothBold = val.match(/<b>\\s*strong\\s*<\\/b>\\s*vs\\s*<b>\\s*weak\\s*<\\/b>/i);
                    var strongBold = val.match(/<b>\\s*strong\\s*<\\/b>\\s*vs\\s*weak/i);
                    var weakBold = val.match(/strong\\s*vs\\s*<b>\\s*weak\\s*<\\/b>/i);
                    
                    // Reset positions and styles
                    f1.style.transform = "translateX(0) scale(1)";
                    f2.style.transform = "translateX(0) scale(1)";
                    f1.style.fontWeight = "normal";
                    f2.style.fontWeight = "normal";
                    f1.innerHTML = "Strong";
                    f2.innerHTML = "weak";
                    f1.style.color = "white";
                    f2.style.color = "white";
                    
                    if (bothBold) {
                        f1.style.fontWeight = "bold";
                        f2.style.fontWeight = "bold";
                        f1.innerHTML = "💪 STRONG";
                        f2.innerHTML = "WEAK 💪";
                        f1.style.color = "var(--neon-cyan)";
                        f2.style.color = "var(--neon-cyan)";
                        msg.innerHTML = "🤝 DRAW!<br>Both words are bold and equally strong.";
                        msg.style.color = "var(--neon-green)";
                        completeRound();
                    } else if (strongBold) {
                        f1.style.fontWeight = "bold";
                        f1.style.color = "var(--neon-cyan)";
                        
                        setTimeout(function() {
                            f1.innerHTML = "💪 STRONG";
                            f1.style.transform = "scale(1.2)";
                            msg.innerHTML = "🔔 ROUND 1";
                        }, 300);
                        
                        setTimeout(function() {
                            f1.style.transform = "translateX(40px) scale(1.2)"; // Punch
                            f2.innerHTML = "weak 💥";
                            fightClub.style.animation = "scan 0.1s ease 3 alternate"; // shake
                        }, 1000);
                        
                        setTimeout(function() {
                            fightClub.style.animation = "none";
                            f2.style.transform = "translateX(50px) rotate(15deg)"; // knockback
                            f2.style.opacity = "0.5";
                            f1.style.transform = "translateX(0) scale(1.2)"; // return
                            msg.innerHTML = "🏆 STRONG wins the fight!<br>Bold text stands out more.";
                            msg.style.color = "var(--neon-green)";
                            completeRound();
                        }, 1500);
                    } else if (weakBold) {
                        f2.style.fontWeight = "bold";
                        f2.style.color = "var(--neon-cyan)";
                        
                        setTimeout(function() {
                            f2.innerHTML = "WEAK 💪";
                            f2.style.transform = "scale(1.2)";
                        }, 300);
                        
                        setTimeout(function() {
                            f2.style.transform = "translateX(-40px) scale(1.2)"; // Punch
                            f1.innerHTML = "💥 Strong";
                            fightClub.style.animation = "scan 0.1s ease 3 alternate";
                        }, 1000);
                        
                        setTimeout(function() {
                            fightClub.style.animation = "none";
                            f1.style.transform = "translateX(-50px) rotate(-15deg)";
                            f1.style.opacity = "0.5";
                            f2.style.transform = "translateX(0) scale(1.2)";
                            msg.innerHTML = "🏆 weak wins the fight!<br>Wait, that wasn't the mission! Only make 'Strong' bold.";
                            msg.style.color = "#ffbd2e";
                        }, 1500);
                    } else {
                        msg.innerHTML = "🤝 It's a tie.<br>Both words look the same.";
                        msg.style.color = "#aaa";
                    }
                }
                
                function completeRound() {
                    if (!window.m8_done) {
                        setTimeout(function() {
                            window.m8_done = true;
                            if (window.IntentEngine && window.Intents) {
                                window.IntentEngine.run(window.Intents.updatePreview, {code: editor.value});
                            }
                        }, 1000);
                    }
                }
                
                if (editor) {
                    editor.addEventListener('input', handleInput);
                }
            })();
        </script>
    `,
    progress: 40,
    validator: function (code) { return window.m8_done === true; }
};