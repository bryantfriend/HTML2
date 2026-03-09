window.Lessons.lesson2.modules[0] = {
    title: "1. The Internet Flood",
    body: `<p>Graphics and design are awesome, but text is how we communicate meaning and information across the web.</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Type any word to see what happens without HTML.</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="40" width="160" height="70" rx="4" fill="#161b33" stroke="#00f2ff" stroke-width="2"/><text x="120" y="80" fill="#00f2ff" font-family="monospace" font-size="16" text-anchor="middle">HELLO WORLD</text></svg>`,
    initialCode: "",
    widgetCode: `<!-- INTERACTIVE MODULE -->
        <div id="flood-container" style="position: relative; overflow: hidden; height: 100%; min-height: 250px; background: black; color: white; display:flex; flex-wrap:wrap; align-items:flex-start; align-content:flex-start; padding: 10px;">
        </div>
        <script>
            (function() {
                var container = document.getElementById('flood-container');
                var editor = document.getElementById('code-editor');
                var maxFloods = 100;
                window.m1_done = false;
                
                function handleInput(e) {
                    if (!document.getElementById('flood-container')) {
                        if (editor) editor.removeEventListener('input', handleInput);
                        return;
                    }
                    var val = e.target.value.trim().toUpperCase();
                    if (!val) {
                        container.innerHTML = "";
                        return;
                    }
                    
                    var newHTML = "";
                    for(var i=0; i<maxFloods; i++) {
                        newHTML += "<span style='margin-right:8px; font-weight:bold; color:var(--neon-green); font-family:monospace'>" + val + "</span>";
                    }
                    container.innerHTML = newHTML;
                    
                    if (!container.querySelector('.flood-msg')) {
                        var msg = document.createElement('div');
                        msg.className = 'flood-msg';
                        msg.style.position = 'absolute';
                        msg.style.top = '50%';
                        msg.style.left = '50%';
                        msg.style.transform = 'translate(-50%, -50%)';
                        msg.style.background = 'rgba(0,0,0,0.8)';
                        msg.style.padding = '20px';
                        msg.style.border = '2px solid var(--neon-pink)';
                        msg.style.textAlign = 'center';
                        msg.style.zIndex = '10';
                        msg.innerHTML = "<h2 style='color:var(--neon-pink); margin-bottom:10px;'>Too much text!</h2><p>HTML helps organize text.</p>";
                        container.appendChild(msg);
                        
                        setTimeout(function(){
                            window.m1_done = true;
                            if (window.IntentEngine && window.Intents) {
                                window.IntentEngine.run(window.Intents.updatePreview, {code: editor.value});
                            }
                        }, 1500);
                    }
                }
                
                if (editor) {
                    editor.addEventListener('input', handleInput);
                }
            })();
        </script>
    `,
    progress: 5,
    validator: function (code) { return window.m1_done === true; }
};