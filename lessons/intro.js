window.Lessons = window.Lessons || {};
window.Lessons.intro = {
    id: "intro",
    title: "00: INTRO LESSON — WHAT IS HTML?",
    description: "Understand the basics of Web Design and HTML. [20 MODULES]",
    modules: [
        {
            title: "1. Welcome to Web Design 🌐",
            body: `<p>Welcome to Web Design! This is where you learn to build the digital world.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Click and hold the READY button for 5 seconds.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="120" y="80" fill="#00f2ff" font-family="monospace" font-size="18" text-anchor="middle" class="pulse-cyan">WEB DESIGN</text></svg>`,
            initialCode: `<!-- INTERACTIVE MODULE -->
<style>
@keyframes intense-shake {
  0% { transform: translate(2px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(0px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(2px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(2px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
}
.shaking { animation: intense-shake 0.5s infinite; background-color: #ef4444 !important; box-shadow: 0 0 30px #ef4444; }
.fireworks-bg { background: radial-gradient(circle, #ff00e5 0%, #0f172a 100%) !important; }
.progress-container { width: 100%; height: 10px; background: rgba(255,255,255,0.2); border-radius: 5px; margin-top: 15px; overflow: hidden; opacity: 0; transition: opacity 0.3s; }
.progress-bar { height: 100%; background: #00ff9d; width: 0%; transition: width 0.1s linear; }
</style>
<div id="game-container" style="display:flex; flex-direction:column; justify-content:center; align-items:center; height:300px; background:#0f172a; border-radius:12px; transition: background 0.5s;">
    <button id="ready-btn" style="padding:20px 40px; font-size:24px; font-weight:bold; background:#3b82f6; color:white; border:none; border-radius:8px; cursor:pointer; transition:background 0.3s;"
        onmousedown="
            this.classList.add('shaking');
            this.innerText = 'HOLDING...';
            document.getElementById('prog-cont').style.opacity = '1';
            window.readyStartTime = Date.now();
            window.readyTimer = setInterval(() => {
                let elapsed = Date.now() - window.readyStartTime;
                let pct = Math.min((elapsed / 5000) * 100, 100);
                document.getElementById('prog-bar').style.width = pct + '%';
                if(pct >= 100) {
                    clearInterval(window.readyTimer);
                    this.style.display = 'none';
                    document.getElementById('prog-cont').style.display = 'none';
                    document.getElementById('game-container').classList.add('fireworks-bg');
                    document.getElementById('game-container').innerHTML = '<h1 style=\\'color:white; font-size:40px; text-align:center;\\'>🎉 BOOM! READY! 🎉</h1>';
                    const editor = document.getElementById('code-editor');
                    if(!editor.value.includes('MISSION_' + 'COMPLETE')) {
                        editor.value += '\\n<!-- ' + 'MISSION_' + 'COMPLETE' + ' -->';
                        editor.dispatchEvent(new Event('input', { bubbles: true }));
                    }
                }
            }, 50);
        "
        onmouseup="clearInterval(window.readyTimer); this.classList.remove('shaking'); this.innerText = 'READY'; document.getElementById('prog-bar').style.width = '0%'; document.getElementById('prog-cont').style.opacity = '0';"
        onmouseleave="clearInterval(window.readyTimer); this.classList.remove('shaking'); this.innerText = 'READY'; document.getElementById('prog-bar').style.width = '0%'; document.getElementById('prog-cont').style.opacity = '0';"
        ontouchstart="this.onmousedown();"
        ontouchend="this.onmouseup();"
    >READY</button>
    <div id="prog-cont" class="progress-container" style="width: 80%;"><div id="prog-bar" class="progress-bar"></div></div>
</div>`,
            progress: 5,
            validator: function (code) { return code.includes("MISSION_COMPLETE"); }
        },
        {
            title: "2. The Servers",
            body: `<p>A website is just a bunch of files. A server is a powerful computer that stays on 24/7 to serve those files to visitors.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Click the switch to power on the servers.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="30" width="160" height="90" fill="none" stroke="#00ff9d" stroke-width="2"/><text x="120" y="80" fill="#00ff9d" font-family="sans-serif" font-size="14" text-anchor="middle">www.web.com</text></svg>`,
            initialCode: `<!-- INTERACTIVE MODULE -->
<style>
.server-rack { width: 200px; height: 150px; background: #1e293b; border: 4px solid #334155; border-radius: 8px; margin: 0 auto; display: flex; flex-direction: column; padding: 10px; gap: 10px; }
.server-blade { flex: 1; background: #0f172a; border: 2px solid #475569; border-radius: 4px; position: relative; }
.light { width: 12px; height: 12px; border-radius: 50%; background: #334155; position: absolute; right: 10px; top: 10px; }
.server-on .light { animation: blink-light 0.5s infinite alternate; }
.server-on .blade-1 .light { animation: blink-light 0.41s infinite; background: #00ff9d; box-shadow: 0 0 10px #00ff9d; }
.server-on .blade-2 .light { animation: blink-light 0.37s infinite; background: #00f2ff; box-shadow: 0 0 10px #00f2ff;}
.server-on .blade-3 .light { animation: blink-light 0.53s infinite; background: #ff00e5; box-shadow: 0 0 10px #ff00e5;}
@keyframes blink-light { 0%, 30% { opacity: 0.1; } 31%, 100% { opacity: 1; } }
.switch-container { text-align: center; margin-top: 20px; }
.switch { width: 60px; height: 30px; background: #ef4444; border-radius: 15px; display: inline-block; position: relative; cursor: pointer; transition: background 0.3s; }
.switch::after { content: ''; position: absolute; width: 26px; height: 26px; background: white; border-radius: 50%; top: 2px; left: 2px; transition: transform 0.3s; }
.switch.on { background: #10b981; }
.switch.on::after { transform: translateX(30px); }
</style>
<div style="background:#020617; padding:40px 20px; border-radius:12px;">
    <div id="rack" class="server-rack">
        <div class="server-blade blade-1"><div class="light"></div></div>
        <div class="server-blade blade-2"><div class="light"></div></div>
        <div class="server-blade blade-3"><div class="light"></div></div>
    </div>
    <div class="switch-container">
        <div class="switch" onclick="
            this.classList.toggle('on');
            document.getElementById('rack').classList.toggle('server-on');
            if(this.classList.contains('on')) {
                const editor = document.getElementById('code-editor');
                if(!editor.value.includes('SERV' + 'ER_ON')) {
                    editor.value += '\\n<!-- ' + 'SERV' + 'ER_ON' + ' -->';
                    editor.dispatchEvent(new Event('input', { bubbles: true }));
                }
            }
        "></div>
        <p style="color:white; margin-top:10px; font-family:monospace;">MAIN POWER</p>
    </div>
</div>`,
            progress: 10,
            validator: function (code) { return code.includes("SERVER_ON"); }
        },
        {
            title: "3. How websites travel",
            body: `<p>When you type a web address, your Browser acts as a messenger. It travels across the internet to the Server, grabs the HTML file, and brings it back to your screen.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Click "FETCH WEBSITE" to send your character to the server!</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="80" y="20" width="80" height="110" rx="4" fill="none" stroke="#ff00e5" stroke-width="3"/><path d="M100 50 L140 50 M100 70 L140 70 M100 90 L120 90" stroke="#ff00e5" stroke-width="3"/></svg>`,
            initialCode: `<!-- INTERACTIVE MODULE -->
<style>
.world { background: #0f172a; height: 200px; position: relative; border-radius: 12px; overflow: hidden; display: flex; align-items: center; justify-content: space-between; padding: 0 40px; }
.pc { font-size: 50px; z-index: 10; }
.server { font-size: 50px; z-index: 10; }
.character { position: absolute; left: 80px; font-size: 40px; transition: left 1.5s linear, transform 0.2s; z-index: 20; display:flex; align-items:center; transform: scaleX(-1); }
.packet { font-size: 20px; opacity: 0; transition: opacity 0.2s; margin-left: 10px; transform: scaleX(-1); }
</style>
<div style="background:#020617; padding:20px; border-radius:12px;">
    <div class="world">
        <div class="pc" id="home-pc">💻</div>
        <div id="char" class="character">🏃<span id="packet" class="packet">📄</span></div>
        <div class="server">🗄️</div>
    </div>
    <div style="text-align:center; margin-top:15px;">
        <button style="padding:10px 20px; background:#00f2ff; color:black; font-weight:bold; border-radius:8px; cursor:pointer;" onclick="
            this.disabled = true; this.innerText = 'TRAVELING...';
            const char = document.getElementById('char'); const packet = document.getElementById('packet'); const pc = document.getElementById('home-pc');
            char.style.left = 'calc(100% - 130px)';
            setTimeout(() => {
                packet.style.opacity = '1'; char.style.transform = 'scaleX(1)';
                setTimeout(() => {
                    char.style.left = '80px';
                    setTimeout(() => {
                        packet.style.opacity = '0'; pc.innerText = '🖥️✨'; char.style.transform = 'scaleX(-1)';
                        this.innerText = 'WEBSITE LOADED!'; this.style.background = '#00ff9d';
                        const editor = document.getElementById('code-editor');
                        if(!editor.value.includes('FETCHE' + 'D_SITE')) {
                            editor.value += '\\n<!-- ' + 'FETCHE' + 'D_SITE' + ' -->';
                            editor.dispatchEvent(new Event('input', { bubbles: true }));
                        }
                    }, 1500);
                }, 500);
            }, 1500);
        ">FETCH WEBSITE</button>
    </div>
</div>`,
            progress: 15,
            validator: function (code) { return code.includes("FETCHED_SITE"); }
        },
        {
            title: "4. The Browser",
            body: `<p>A web browser (like Chrome, Safari, or Edge) is the software that translates HTML code into the visual page you interact with.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Double-click the Browser icon on the simulated desktop.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><circle cx="120" cy="75" r="40" fill="none" stroke="#00f2ff" stroke-width="5"/><circle cx="120" cy="75" r="15" fill="#00f2ff"/></svg>`,
            initialCode: `<!-- INTERACTIVE MODULE -->
<style>
.desktop { background: linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%); height: 300px; border-radius: 12px; position: relative; overflow: hidden; }
.icon { width: 64px; height: 64px; position: absolute; top: 20px; left: 20px; display: flex; flex-direction: column; align-items: center; cursor: pointer; color: white; text-shadow: 1px 1px 2px black; font-family: sans-serif; font-size: 12px; }
.icon:hover { background: rgba(255,255,255,0.2); border-radius: 8px; }
.browser-window { position: absolute; top: 10%; left: 10%; width: 80%; height: 80%; background: white; border-radius: 8px; box-shadow: 0 10px 30px rgba(0,0,0,0.5); display: none; flex-direction: column; overflow: hidden; transform: scale(0.5); opacity: 0; transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
.browser-window.open { display: flex; transform: scale(1); opacity: 1; }
.browser-bar { background: #e2e8f0; padding: 10px; display: flex; align-items: center; gap: 10px; border-bottom: 1px solid #cbd5e1; }
.browser-dots { display: flex; gap: 5px; } .dot { width: 12px; height: 12px; border-radius: 50%; }
.dot-red { background: #ef4444; } .dot-yellow { background: #eab308; } .dot-green { background: #22c55e; }
.search-bar { background: white; border-radius: 20px; padding: 5px 15px; flex: 1; font-family: sans-serif; font-size: 14px; color: #64748b; border: 1px solid #cbd5e1; }
.browser-content { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; color: black; font-family: sans-serif; }
.logo-text { font-size: 40px; font-weight: bold; margin-bottom: 20px; }
.logo-g { color: #4285F4; } .logo-o1 { color: #EA4335; } .logo-o2 { color: #FBBC05; } .logo-l { color: #4285F4; } .logo-e { color: #34A853; }
.fake-search { width: 80%; height: 40px; border-radius: 20px; border: 1px solid #dfe1e5; }
</style>
<div class="desktop">
    <div class="icon" ondblclick="
        const win = document.getElementById('browser-win');
        win.style.display = 'flex';
        setTimeout(() => win.classList.add('open'), 10);
        const editor = document.getElementById('code-editor');
        if(!editor.value.includes('BROWSER' + '_OPENED')) {
            editor.value += '\\n<!-- ' + 'BROWSER' + '_OPENED' + ' -->';
            editor.dispatchEvent(new Event('input', { bubbles: true }));
        }
    ">
        <svg viewBox="0 0 24 24" fill="#4285F4" style="width:40px; height:40px; margin-bottom:5px;">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM12 10.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zm-5.7 3c.64-2.8 3.16-4.9 6.2-4.9 1.13 0 2.21.3 3.16.82l-1.9 3.28C13.2 11.83 12.63 11.5 12 11.5c-1.38 0-2.5 1.12-2.5 2.5 0 .38.09.73.23 1.05l-3.43 5.95c-.38-.89-.6-1.89-.6-2.95zm6.2 6c-1.12 0-2.18-.3-3.13-.82l1.9-3.28c.55.87 1.15 1.2 1.76 1.2 1.38 0 2.5-1.12 2.5-2.5 0-.4-.1-.76-.25-1.09l3.43-5.94c.38.89.59 1.88.59 2.93 0 2.82-2.5 4.93-5.54 4.93z" fill="#fff"/>
        </svg>
        Browser
    </div>
    <div id="browser-win" class="browser-window">
        <div class="browser-bar"><div class="browser-dots"><div class="dot dot-red"></div><div class="dot dot-yellow"></div><div class="dot dot-green"></div></div><div class="search-bar">🔍 Search or type URL</div></div>
        <div class="browser-content"><div class="logo-text"><span class="logo-g">S</span><span class="logo-o1">e</span><span class="logo-o2">a</span><span class="logo-g">r</span><span class="logo-l">c</span><span class="logo-e">h</span></div><div class="fake-search"></div></div>
    </div>
</div>`,
            progress: 20,
            validator: function (code) { return code.includes("BROWSER_OPENED"); }
        },
        {
            title: "5. What is HTML?",
            body: `<p>HTML stands for <strong>HyperText Markup Language</strong>. It's the standard language for documents designed to be displayed in a browser.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type "HTML".</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="120" y="85" fill="#00ff9d" font-family="monospace" font-size="40" font-weight="bold" text-anchor="middle" letter-spacing="5">HTML</text></svg>`,
            initialCode: "",
            progress: 25,
            validator: function (code) { return code.toUpperCase().includes("HTML"); }
        },
        {
            title: "6. HTML builds structure",
            body: `<p>HTML is like the skeleton of a house. It tells the browser "Here is a paragraph", "Here is an image", and "Here is a title".</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Select a piece to the left and click its matching spot on the blueprint to build the house!</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="20" width="140" height="110" fill="none" stroke="#ff00e5" stroke-width="2"/><line x1="50" y1="50" x2="190" y2="50" stroke="#ff00e5" stroke-width="2"/></svg>`,
            initialCode: `<!-- INTERACTIVE MODULE -->
<style>
.house-game { display: flex; gap: 20px; height: 300px; background: #0f172a; border-radius: 12px; padding: 20px; color: white; user-select: none; }
.pieces { display: flex; flex-direction: column; gap: 10px; width: 120px; }
.piece { background: #3b82f6; padding: 10px; border-radius: 8px; text-align: center; cursor: pointer; font-weight: bold; border: 2px solid transparent; font-size: 14px; transition: 0.2s; }
.piece.selected { border-color: #ff00e5; background: #2563eb; transform: scale(1.05); }
.piece.placed { opacity: 0; pointer-events: none; }
.blueprint { flex: 1; position: relative; border: 2px dashed #475569; border-radius: 8px; background: rgba(0,0,0,0.2); }
.dz { border: 2px dashed #00f2ff; background: rgba(0,242,255,0.1); position: absolute; display: flex; align-items: center; justify-content: center; color: #00f2ff; font-size: 12px; cursor: pointer; transition: 0.2s; text-align: center; }
.dz:hover { background: rgba(0,242,255,0.2); transform: scale(1.02); }
.dz-body { bottom: 10px; left: 50%; transform: translateX(-50%); width: 160px; height: 140px; z-index: 1; }
.dz-head { bottom: 155px; left: 50%; transform: translateX(-50%); width: 180px; height: 60px; clip-path: polygon(50% 0%, 0% 100%, 100% 100%); border: none; background: rgba(0,242,255,0.2); z-index: 1; align-items: flex-end; padding-bottom: 5px; }
.dz-h1 { bottom: 10px; left: 50%; transform: translateX(-50%); width: 40px; height: 60px; z-index: 2; }
.dz-p1 { bottom: 80px; left: 50%; transform: translateX(-60px); width: 40px; height: 40px; z-index: 2; }
.dz-p2 { bottom: 80px; left: 50%; transform: translateX(20px); width: 40px; height: 40px; z-index: 2; }
.filled { background: #00ff9d !important; border: 2px solid #00ff9d !important; color: black !important; font-weight: bold; font-size: 14px; }
.dz-head.filled { background: #00ff9d !important; border: none !important; color: black !important; }
</style>
<div class="house-game" id="hg" onclick="
   if(event.target.classList.contains('piece') && !event.target.classList.contains('placed')) {
       let targetType = event.target.dataset.type;
       let dzs = document.querySelectorAll('.dz');
       for(let dz of dzs) {
           if(dz.dataset.type === targetType && !dz.classList.contains('filled')) {
               dz.classList.add('filled');
               dz.innerHTML = event.target.innerHTML;
               event.target.classList.add('placed');
               if(!window.placedCount) window.placedCount = 0;
               window.placedCount++;
               if(window.placedCount >= 5) {
                   document.getElementById('hg').style.background = 'radial-gradient(circle, #00ff9d, #0f172a)';
                   const editor = document.getElementById('code-editor');
                   if(!editor.value.includes('HOUSE' + '_BUILT')) {
                       editor.value += '\\n<!-- ' + 'HOUSE' + '_BUILT' + ' -->';
                       editor.dispatchEvent(new Event('input', { bubbles: true }));
                   }
               }
               break;
           }
       }
   }
">
  <div class="pieces">
    <div class="piece" data-type="head">head</div>
    <div class="piece" data-type="body">body</div>
    <div class="piece" data-type="h1">&lt;h1&gt;&lt;/h1&gt;</div>
    <div class="piece" data-type="p">&lt;p&gt;&lt;/p&gt;</div>
    <div class="piece" data-type="p">&lt;p&gt;&lt;/p&gt;</div>
  </div>
  <div class="blueprint">
    <div class="dz dz-body" data-type="body">Square<br>(body)</div>
    <div class="dz dz-head" data-type="head">Roof (head)</div>
    <div class="dz dz-h1" data-type="h1">Door (h1)</div>
    <div class="dz dz-p1" data-type="p">Win (p)</div>
    <div class="dz dz-p2" data-type="p">Win (p)</div>
  </div>
</div>`,
            progress: 30,
            validator: function (code) { return code.includes("HOUSE_BUILT"); }
        },
        {
            title: "7. CSS vs HTML vs JavaScript",
            body: `<p><strong>HTML</strong> = The Skeleton (Structure)<br><strong>CSS</strong> = The Skin/Clothes (Styling, colors, layout)<br><strong>JavaScript</strong> = The Muscles/Brain (Interactivity, pop-ups, games)</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Change at least 1 piece of clothing on the character to see how CSS works.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="120" y="60" fill="#00f2ff" font-size="12" text-anchor="middle">HTML = BONES</text><text x="120" y="85" fill="#ff00e5" font-size="12" text-anchor="middle">CSS = CLOTHES</text><text x="120" y="110" fill="#00ff9d" font-size="12" text-anchor="middle">JS = MUSCLES</text></svg>`,
            initialCode: `<!-- INTERACTIVE MODULE -->
<style>
.avatar-builder { display: flex; height: 300px; background: #0f172a; border-radius: 12px; padding: 20px; color: white; user-select: none; gap: 20px; }
.controls { width: 140px; display: flex; flex-direction: column; gap: 6px; overflow-y: auto; padding-right: 5px; }
/* Scrollbar styling for controls */
.controls::-webkit-scrollbar { width: 4px; }
.controls::-webkit-scrollbar-track { background: transparent; }
.controls::-webkit-scrollbar-thumb { background: #475569; border-radius: 4px; }
.category { font-size: 10px; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px; margin-bottom: -2px; margin-top: 6px; }
.btn-opt { background: #1e293b; color: white; border: 1px solid #334155; padding: 4px; border-radius: 4px; cursor: pointer; text-align: center; font-size: 12px; transition: 0.2s; }
.btn-opt:hover { background: #3b82f6; border-color: #60a5fa; }
.avatar-preview { flex: 1; background: #1e293b; border-radius: 8px; position: relative; display: flex; flex-direction: column; align-items: center; justify-content: flex-end; padding-bottom: 20px; border: 2px dashed #475569; transition: box-shadow 0.3s, border-color 0.3s; }
.av-head { width: 60px; height: 60px; background: #fcd34d; border-radius: 50%; position: relative; z-index: 2; margin-bottom: -10px; display: flex; justify-content: center; align-items: center; font-size: 24px; }
.av-shirt { width: 80px; height: 100px; background: #e2e8f0; border-radius: 20px 20px 5px 5px; z-index: 1; display: flex; justify-content: center; align-items: center; overflow: hidden; font-size: 30px; transition: 0.3s; box-shadow: inset 0 -10px 20px rgba(0,0,0,0.1); }
.av-pants { width: 80px; height: 80px; background: #1e3a8a; border-radius: 5px 5px 10px 10px; display: flex; flex-direction: row; gap: 4px; z-index: 1; transition: 0.3s; box-shadow: inset 0 -10px 20px rgba(0,0,0,0.2); }
.leg { flex: 1; background: inherit; border-radius: 0 0 10px 10px; }
.av-hat { position: absolute; top: -20px; font-size: 40px; z-index: 3; }
</style>
<div class="avatar-builder">
  <div class="controls" id="btn-controls">
    <div class="category" style="margin-top:0;">Hats</div>
    <div class="btn-opt" onclick="window.changeCloth('hat', '')">None</div>
    <div class="btn-opt" onclick="window.changeCloth('hat', '🎩')">Top Hat</div>
    <div class="btn-opt" onclick="window.changeCloth('hat', '🧢')">Cap</div>
    <div class="btn-opt" onclick="window.changeCloth('hat', '👑')">Crown</div>
    
    <div class="category">Shirts</div>
    <div class="btn-opt" onclick="window.changeCloth('shirt', '#e2e8f0')">White</div>
    <div class="btn-opt" onclick="window.changeCloth('shirt', '#ef4444')">Red</div>
    <div class="btn-opt" onclick="window.changeCloth('shirt', '#3b82f6')">Blue</div>
    <div class="btn-opt" onclick="window.changeCloth('shirt', '#10b981')">Green</div>
    <div class="btn-opt" onclick="window.changeCloth('shirt', '#8b5cf6')">Purple</div>
    
    <div class="category">Pants</div>
    <div class="btn-opt" onclick="window.changeCloth('pants', '#1e3a8a')">Jeans</div>
    <div class="btn-opt" onclick="window.changeCloth('pants', '#000000')">Black Pants</div>
    <div class="btn-opt" onclick="window.changeCloth('pants', '#f59e0b')">Khakis</div>
    <div class="btn-opt" onclick="window.changeCloth('pants', '#10b981')">Green Cargo</div>
    <div class="btn-opt" onclick="window.changeCloth('pants', '#ef4444')">Red Shorts</div>
  </div>
  <div class="avatar-preview" id="ap">
    <div class="av-head">👀<div id="disp-hat" class="av-hat"></div></div>
    <div id="disp-shirt" class="av-shirt"></div>
    <div id="disp-pants" class="av-pants"><div class="leg"></div><div class="leg"></div></div>
  </div>
</div>
<script>
window.changeCloth = function(type, val) {
  if(type === 'hat') document.getElementById('disp-hat').innerText = val;
  if(type === 'shirt') document.getElementById('disp-shirt').style.background = val;
  if(type === 'pants') {
    document.getElementById('disp-pants').style.background = val;
    if(val === '#ef4444') { document.getElementById('disp-pants').style.height = '40px'; } 
    else { document.getElementById('disp-pants').style.height = '80px'; }
  }
  
  const editor = document.getElementById('code-editor');
  if(!editor.value.includes('CSS_C' + 'HANGED')) {
      document.getElementById('ap').style.borderColor = '#00ff9d';
      document.getElementById('ap').style.boxShadow = '0 0 20px rgba(0,255,157,0.2)';
      editor.value += '\\n<!-- ' + 'CSS_C' + 'HANGED' + ' -->';
      editor.dispatchEvent(new Event('input', { bubbles: true }));
  }
};
</script>`,
            progress: 35,
            validator: function (code) { return code.includes("CSS_CHANGED"); }
        },
        {
            title: "8. Real website example",
            body: `<p>Every site you visit, from Google to YouTube, uses HTML at its core.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Click play on the video below.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="30" width="160" height="90" rx="6" fill="#161b33" stroke="#00f2ff" stroke-width="2"/><circle cx="120" cy="75" r="20" fill="red"/><polygon points="115,65 115,85 130,75" fill="white"/></svg>`,
            initialCode: `<!-- INTERACTIVE MODULE -->
<div style="background:#0f172a; border-radius:12px; height:300px; display:flex; flex-direction:column; justify-content:center; align-items:center; padding:10px;">
    <h3 id="vid-msg" style="color:#00f2ff; margin-bottom:10px; font-family:sans-serif; font-size:14px; text-transform:uppercase; letter-spacing:1px; animation: pulse-cyan 2s infinite;">Click Play to Complete!</h3>
    <div style="width:100%; max-width:400px; border-radius:8px; overflow:hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
        <iframe width="100%" height="225" src="https://www.youtube.com/embed/ok-plXXHlWw?enablejsapi=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen id="yt-player"></iframe>
    </div>
</div>
<script>
window.vtClicked = false;
window.ytCheck = setInterval(() => {
    if(!window.vtClicked && document.activeElement === document.getElementById('yt-player')) {
        window.vtClicked = true;
        document.getElementById('vid-msg').innerText = 'INITIALIZING... (10s)';
        let left = 10;
        window.vtTimer = setInterval(() => {
            left--;
            document.getElementById('vid-msg').innerText = 'WATCHING... (' + left + 's)';
            if(left <= 0) {
                clearInterval(window.vtTimer);
                clearInterval(window.ytCheck);
                document.getElementById('vid-msg').innerText = 'MISSION ACCOMPLISHED!';
                const editor = document.getElementById('code-editor');
                if(!editor.value.includes('VIDEO_' + 'PLAYED')) {
                    editor.value += '\\n<!-- ' + 'VIDEO_' + 'PLAYED' + ' -->';
                    editor.dispatchEvent(new Event('input', { bubbles: true }));
                }
            }
        }, 1000);
    }
}, 500);
</script>`,
            progress: 40,
            validator: function (code) { return code.includes("VIDEO_PLAYED"); }
        },
        {
            title: "9. Viewing page source",
            body: `<p>Teachers can demonstrate hitting F12 or Right Click -> View Page Source to see the messy Matrix of code behind the interface.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Hit the glowing F12 key to reveal the source code of WebSpace!</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="10" y="40" fill="#00ff9d" font-family="monospace" font-size="8">&lt;div class="hero"&gt;&lt;h1&gt;Hi&lt;/h1&gt;...</text><text x="10" y="60" fill="#00ff9d" font-family="monospace" font-size="8">&lt;script src="main.js"&gt;&lt;/script&gt;</text></svg>`,
            initialCode: `<!-- INTERACTIVE MODULE -->
<style>
.dev-game { display: flex; flex-direction: column; height: 300px; background: #0f172a; border-radius: 12px; overflow: hidden; user-select: none; }
.fake-site { flex: 1; background: white; color: black; padding: 20px; font-family: sans-serif; position: relative; }
.site-header { font-size: 24px; font-weight: bold; color: #3b82f6; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px; }
.site-body { margin-top: 10px; color: #475569; font-size: 14px; }
.hero-img { width: 100%; height: 80px; background: linear-gradient(45deg, #10b981, #3b82f6); border-radius: 8px; margin-top: 15px; color: white; display: flex; align-items: center; justify-content: center; font-weight: bold; }
.source-view { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: #1e1e1e; color: #d4d4d4; padding: 20px; font-family: 'Consolas', monospace; font-size: 13px; display: none; overflow: auto; line-height: 1.5; }
.code-tag { color: #569cd6; }
.code-str { color: #ce9178; }
.code-cmt { color: #6a9955; }
.keyboard-area { height: 70px; background: #1e293b; border-top: 4px solid #334155; display: flex; justify-content: center; align-items: center; gap: 8px; padding: 10px; }
.key { background: #0f172a; border: 2px solid #475569; border-radius: 6px; color: #94a3b8; padding: 10px 15px; font-family: monospace; font-size: 14px; font-weight: bold; box-shadow: 0 4px 0 #020617; }
.key-f12 { border-color: #ff00e5; color: white; box-shadow: 0 0 15px #ff00e5, 0 4px 0 #86007b; animation: pulse-pink 1.5s infinite; cursor: pointer; transition: 0.1s; }
.key-f12:active { transform: translateY(4px); box-shadow: 0 0 15px #ff00e5, 0 0px 0 #86007b; }
@keyframes pulse-pink { 0% { box-shadow: 0 0 5px #ff00e5, 0 4px 0 #86007b; } 50% { box-shadow: 0 0 20px #ff00e5, 0 4px 0 #86007b; } 100% { box-shadow: 0 0 5px #ff00e5, 0 4px 0 #86007b; } }
</style>
<div class="dev-game" id="dg">
  <div class="fake-site">
    <div class="site-header">WebSpace ✨</div>
    <div class="site-body">Welcome to the best website ever! Click F12 below to see how I built this.</div>
    <div class="hero-img">Super Cool Image</div>
    <div class="source-view" id="src-view">
      <span class="code-cmt">&lt;!-- Developer Tools --&gt;</span><br>
      &lt;<span class="code-tag">html</span>&gt;<br>
      &nbsp;&lt;<span class="code-tag">body</span>&gt;<br>
      &nbsp;&nbsp;&lt;<span class="code-tag">div</span> class=<span class="code-str">"header"</span>&gt;WebSpace ✨&lt;/<span class="code-tag">div</span>&gt;<br>
      &nbsp;&nbsp;&lt;<span class="code-tag">div</span> class=<span class="code-str">"body"</span>&gt;Welcome to the best website ever!&lt;/<span class="code-tag">div</span>&gt;<br>
      &nbsp;&nbsp;&lt;<span class="code-tag">div</span> class=<span class="code-str">"hero"</span>&gt;Super Cool Image&lt;/<span class="code-tag">div</span>&gt;<br>
      &nbsp;&lt;/<span class="code-tag">body</span>&gt;<br>
      &lt;/<span class="code-tag">html</span>&gt;
    </div>
  </div>
  <div class="keyboard-area text-[10px] md:text-sm">
    <div class="key">F10</div>
    <div class="key">F11</div>
    <div class="key key-f12" id="f12-btn" onclick="window.triggerF12()">F12</div>
    <div class="key" style="margin-left:20px;">PrtSc</div>
  </div>
</div>
<script>
window.triggerF12 = function() {
  document.getElementById('src-view').style.display = 'block';
  document.getElementById('dg').style.boxShadow = '0 0 20px #00ff9d';
  const editor = document.getElementById('code-editor');
  if(!editor.value.includes('F12_P' + 'RESSED')) {
      editor.value += '\\n<!-- ' + 'F12_P' + 'RESSED' + ' -->';
      editor.dispatchEvent(new Event('input', { bubbles: true }));
  }
};
window.f12Listener = function(e) {
  if (e.key === 'F12') {
    e.preventDefault();
    window.triggerF12();
  }
};
document.addEventListener('keydown', window.f12Listener);
</script>`,
            progress: 45,
            validator: function (code) { return code.includes("F12_PRESSED"); }
        },
        {
            title: "10. Tags = building blocks 🧱",
            body: `<p>HTML is built with <strong>Tags</strong>. Tags are special keywords wrapped in angle brackets.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type a left angle bracket < and right angle bracket >.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="80" y="90" fill="#00f2ff" font-size="50" font-weight="bold">&lt;</text><text x="140" y="90" fill="#ff00e5" font-size="50" font-weight="bold">&gt;</text></svg>`,
            initialCode: "",
            progress: 50,
            validator: function (code) { return code.includes("<") && code.includes(">"); }
        },
        {
            title: "11. Opening vs closing tags",
            body: `<p>Most tags come in pairs. An opening tag creates the start, and the closing tag (with a forward slash) marks the end.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type a forward slash / to unlock the Tag Matcher Mini-Game!</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="40" y="80" fill="#00ff9d" font-family="monospace" font-size="20">&lt;tag&gt;</text><text x="130" y="80" fill="#ff00e5" font-family="monospace" font-size="20">&lt;/tag&gt;</text></svg>`,
            initialCode: "",
            progress: 55,
            validator: function (code) { return code.includes("/"); }
        },
        {
            title: "12. Example tag: <p>",
            body: `<p>The <code>&lt;p&gt;</code> tag creates a paragraph of text. Everything between <code>&lt;p&gt;</code> and <code>&lt;/p&gt;</code> is part of that paragraph.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Write a &lt;p&gt;Hello&lt;/p&gt; element.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="120" y="80" fill="#00f2ff" font-family="monospace" font-size="20" text-anchor="middle">&lt;p&gt;Text&lt;/p&gt;</text></svg>`,
            initialCode: "",
            progress: 60,
            validator: function (code) { return code.toLowerCase().includes("<p>") && code.toLowerCase().includes("</p>"); }
        },
        {
            title: "13. Editing text live",
            body: `<p>In our editor below, what you type automatically becomes rendered by our mini-browser on the right.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Change the word "Change" to "Changed".</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="120" y="80" fill="#00ff9d" font-family="monospace" font-size="16" text-anchor="middle" class="pulse-cyan">LIVE PREVIEW</text></svg>`,
            initialCode: "<p>Change this text.</p>",
            progress: 65,
            validator: function (code) { return code.toLowerCase().includes("changed"); }
        },
        {
            title: "14. Save → Refresh cycle 🔄",
            body: `<p>When building on a real computer, you change code, <strong>save the file</strong>, and <strong>refresh the browser</strong>.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Change the text in the code editor to include the word "Hola", then click Refresh below!</p>`,
            svg: `<div style="background:white; border-radius:8px; padding:20px; color:black; font-family:sans-serif; text-align:center; height:150px; display:flex; flex-direction:column; justify-content:center;">
   <div id="sim-bro" style="border:2px solid #e2e8f0; border-radius:4px; padding:10px; margin-bottom:10px; min-height:40px; display:flex; align-items:center; justify-content:center; font-size:20px; font-weight:bold;">Welcome</div>
   <button onclick="
      const editor = document.getElementById('code-editor');
      if(editor.value.includes('Ho' + 'la') || editor.value.includes('ho' + 'la') || editor.value.includes('HO' + 'LA')) {
         document.getElementById('sim-bro').innerText = 'Hola';
         this.innerText = 'Refreshed! Mission Complete!';
         this.style.background = '#00ff9d';
         this.style.color = 'black';
         if(!editor.value.includes('REFR' + 'ESHED')) {
             editor.value += '\\n<!-- ' + 'REFR' + 'ESHED' + ' -->';
             editor.dispatchEvent(new Event('input', { bubbles: true }));
         }
      } else {
         alert('Please change the code below to include Hola first!');
      }
   " style="padding:5px 10px; background:#3b82f6; color:white; border:none; border-radius:4px; font-weight:bold; cursor:pointer; font-size:12px; transition:0.3s;">↻ REFRESH BROWSER</button>
</div>`,
            initialCode: `<h2>Welcome</h2>`,
            progress: 70,
            validator: function (code) { return code.includes("REFRESHED"); }
        },
        {
            title: "15. Mistakes are normal",
            body: `<p>If you type a tag wrong, your code won't blow up. It will just look a bit weird or plain!</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Click 'Fix Error' to add the missing closing bracket to the image tag.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="120" y="80" fill="#ff00e5" font-family="monospace" font-size="16" text-anchor="middle">ERROR: IT'S OK</text></svg>`,
            initialCode: `<!-- INTERACTIVE MODULE -->
<div style="text-align:center; padding: 20px; background:#0f172a; border-radius:12px; height:300px; display:flex; flex-direction:column; justify-content:center;">
    <div id="err-img" style="width:100px; height:100px; background:#ef4444; color:white; display:flex; align-items:center; justify-content:center; margin:0 auto 20px; border-radius:8px; box-shadow:0 10px 20px rgba(0,0,0,0.5); transition:0.3s;">
        Broken Image
    </div>
    <div id="code-line" style="font-family:monospace; font-size:18px; background:#1e293b; padding:15px; border-radius:8px; color:#f87171; text-align:center; margin-bottom:20px; transition:0.3s;">
        &lt;img src="cat.jpg"
    </div>
    <button onclick="
        document.getElementById('err-img').style.background = '#10b981';
        document.getElementById('err-img').innerText = '🐱';
        document.getElementById('err-img').style.fontSize = '50px';
        document.getElementById('code-line').innerText = '<img src=\\'cat.jpg\\'>';
        document.getElementById('code-line').style.color = '#00ff9d';
        this.innerText = 'Error Fixed!';
        this.style.background = '#00ff9d'; this.style.color = 'black';
        const editor = document.getElementById('code-editor');
        if(!editor.value.includes('ERROR' + '_FIXED')) {
            editor.value += '\\n<!-- ' + 'ERROR' + '_FIXED' + ' -->';
            editor.dispatchEvent(new Event('input', { bubbles: true }));
        }
    " style="padding:10px 20px; background:#3b82f6; color:white; border:none; border-radius:4px; font-weight:bold; cursor:pointer; margin: 0 auto; width: 200px; transition:0.3s;">🛠️ Fix Error</button>
</div>`,
            progress: 75,
            validator: function (code) { return code.includes("ERROR_FIXED"); }
        },
        {
            title: "16. HTML is not programming",
            body: `<p>HTML is a markup language, not a programming language. You don't do math or logic, you just describe structure.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Click 'CALCULATE' to see how HTML handles math.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="120" y="80" fill="#00f2ff" font-family="monospace" font-size="14" text-anchor="middle">NOT PROGRAMMING</text></svg>`,
            initialCode: `<!-- INTERACTIVE MODULE -->
<div id="math-container" style="background:#0f172a; padding:20px; border-radius:12px; text-align:center; color:white; height:300px; display:flex; flex-direction:column; justify-content:center; align-items:center;">
    <h3 style="margin-bottom:15px; color:#00f2ff; font-size:20px;">Try to do math in HTML!</h3>
    <button onclick="
        document.getElementById('math-container').innerHTML = \`
        <svg width='100%' height='200' viewBox='0 0 300 200' xmlns='http://www.w3.org/2000/svg'>
            <style>
              .math { font-size: 30px; font-weight: bold; fill: #00ff9d; }
              .cross { stroke: #ef4444; stroke-width: 6; stroke-dasharray: 100; stroke-dashoffset: 100; animation: drawX 0.4s 0.5s forwards; }
              .res { font-size: 40px; font-weight: bold; fill: #ff00e5; opacity: 0; animation: popIn 0.5s 1s forwards cubic-bezier(0.175, 0.885, 0.32, 1.275); }
              .spark { fill: #fcd34d; opacity: 0; animation: sparks 0.8s 1s ease-out forwards; }
              @keyframes drawX { to { stroke-dashoffset: 0; } }
              @keyframes popIn { 0% { opacity:0; transform: scale(0); } 100% { opacity:1; transform: scale(1); } }
              @keyframes sparks { 0% { opacity: 1; transform: translate(0,0) scale(1.5); } 100% { opacity: 0; transform: translate(var(--x), var(--y)) scale(0); } }
            </style>
            <text x='150' y='60' text-anchor='middle' class='math' font-family='monospace'>5 + 5 = 10?</text>
            <line x1='120' y1='30' x2='180' y2='70' class='cross' />
            <line x1='180' y1='30' x2='120' y2='70' class='cross' />
            <text x='150' y='140' text-anchor='middle' class='res' font-family='monospace'>"5 + 5"</text>
            <circle cx='150' cy='120' r='5' class='spark' style='--x: -60px; --y: -40px;' />
            <circle cx='150' cy='120' r='5' class='spark' style='--x: 60px; --y: -50px;' />
            <circle cx='150' cy='120' r='5' class='spark' style='--x: 0px; --y: -80px;' />
            <circle cx='150' cy='120' r='5' class='spark' style='--x: -50px; --y: 30px;' />
            <circle cx='150' cy='120' r='5' class='spark' style='--x: 50px; --y: 40px;' />
        </svg>
        <h3 style='color:#00f2ff; margin-top:10px; font-family:sans-serif;'>HTML only renders text!</h3>\`;
        const editor = document.getElementById('code-editor');
        if(!editor.value.includes('UNDER' + 'STOOD')) {
            editor.value += '\\\\n<!-- ' + 'UNDER' + 'STOOD' + ' -->';
            editor.dispatchEvent(new Event('input', { bubbles: true }));
        }
    " style="padding:16px 32px; background:#3b82f6; color:white; border:none; border-radius:8px; cursor:pointer; font-weight:bold; transition:0.3s; font-size:16px;">CALCULATE 5 + 5</button>
</div>`,
            progress: 80,
            validator: function (code) { return code.includes("UNDERSTOOD"); }
        },
        {
            title: "17. Why people learn HTML",
            body: `<p>HTML is the absolute foundation for all websites, web games, mobile apps built on web tech, and even email templates!</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Click to build the web development foundation stack.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="100" width="160" height="20" fill="#00ff9d"/></svg>`,
            initialCode: `<!-- INTERACTIVE MODULE -->
<style>
.stack-game { height: 300px; position: relative; display: flex; flex-direction: column; justify-content: flex-end; align-items: center; gap: 5px; background: #0f172a; padding-bottom: 30px; border-radius: 12px; }
.block { width: 80%; height: 50px; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size:18px; opacity: 0; transform: translateY(-50px); transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
.b-html { background: #ef4444; color: white; cursor: pointer; opacity: 1; transform: translateY(0); box-shadow: 0 5px 0 #b91c1c; }
.b-css { background: #3b82f6; color: white; box-shadow: 0 5px 0 #1d4ed8; z-index: 2; pointer-events: none; margin-bottom: -5px; }
.b-js { background: #f59e0b; color: black; box-shadow: 0 5px 0 #b45309; z-index: 3; pointer-events: none; margin-bottom: -5px; }
</style>
<div class="stack-game" id="sg">
    <div class="block b-js" id="b-js">JavaScript (Interactivity)</div>
    <div class="block b-css" id="b-css">CSS (Styling)</div>
    <div class="block b-html" onclick="
        document.getElementById('b-css').style.opacity = '1';
        document.getElementById('b-css').style.transform = 'translateY(0)';
        setTimeout(() => {
            document.getElementById('b-js').style.opacity = '1';
            document.getElementById('b-js').style.transform = 'translateY(0)';
            document.getElementById('sg').style.background = 'radial-gradient(circle at bottom, rgba(16,185,129,0.2) 0%, #0f172a 70%)';
            setTimeout(() => {
                const editor = document.getElementById('code-editor');
                if(!editor.value.includes('FOUNDATI' + 'ON_BUILT')) {
                    editor.value += '\\n<!-- ' + 'FOUNDATI' + 'ON_BUILT' + ' -->';
                    editor.dispatchEvent(new Event('input', { bubbles: true }));
                }
            }, 1000);
        }, 800);
        this.innerText = 'HTML (Foundation)';
        this.style.background = '#10b981';
        this.style.boxShadow = '0 5px 0 #059669';
        this.onclick = null;
    ">Click to lay HTML Foundation</div>
</div>`,
            progress: 85,
            validator: function (code) { return code.includes("FOUNDATION_BUILT"); }
        },
        {
            title: "18. What students will build",
            body: `<p>Soon, you will create files with text, headings, lists, and images, creating a personalized digital poster.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Click PLAY to see how HTML tags come together.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="70" y="20" width="100" height="110" fill="none" stroke="#ff00e5" stroke-width="2"/><circle cx="120" cy="50" r="15" fill="#00f2ff"/></svg>`,
            initialCode: `<!-- INTERACTIVE MODULE -->
<style>
.poster-container { height: 300px; background: #020617; border-radius: 12px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center; font-family: sans-serif; }
.play-btn { background: #ff00e5; color: white; border: none; padding: 15px 30px; border-radius: 30px; font-size: 20px; font-weight: bold; cursor: pointer; box-shadow: 0 0 20px rgba(255,0,229,0.5); z-index: 10; transition: 0.3s; }
.play-btn:hover { transform: scale(1.1); }
.site-builder { width: 90%; height: 90%; background: white; border-radius: 8px; display: none; flex-direction: column; overflow: hidden; opacity: 0; transition: opacity 0.5s; box-shadow: 0 20px 40px rgba(0,0,0,0.5); }
.sb-nav { height: 40px; background: #1e293b; display: flex; align-items: center; padding: 0 15px; transform: translateY(-100%); transition: 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
.sb-logo { color: #00f2ff; font-weight: bold; font-size: 16px; opacity: 0; transition: 0.5s; }
.sb-links { margin-left: auto; display: flex; gap: 10px; opacity: 0; transition: 0.5s; }
.sb-link { width: 30px; height: 6px; background: #475569; border-radius: 3px; }
.sb-hero { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; background: linear-gradient(135deg, #0f172a, #3b82f6); color: white; transform: scale(0.9); opacity: 0; transition: 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
.sb-h1 { font-size: 24px; font-weight: bold; margin-bottom: 10px; opacity: 0; transform: translateY(20px); transition: 0.5s; }
.sb-p { font-size: 12px; opacity: 0; transform: translateY(20px); transition: 0.5s; }
.sb-btn-ui { margin-top: 15px; padding: 8px 20px; background: #00ff9d; color: black; border-radius: 20px; font-weight: bold; font-size: 12px; opacity: 0; transform: scale(0); transition: 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
.sb-cards { display: flex; height: 60px; gap: 10px; padding: 10px; background: #f1f5f9; transform: translateY(100%); transition: 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
.sb-card { flex: 1; background: white; border-radius: 4px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); opacity: 0; transform: translateY(20px); transition: 0.5s; }
.progress-bar { position: absolute; bottom: 0; left: 0; height: 6px; background: #00ff9d; width: 0%; transition: width 1s linear; display: none; }
</style>
<div class="poster-container" id="pc">
    <button class="play-btn" id="play-btn" onclick="
        this.style.display = 'none';
        const pbar = document.getElementById('pbar'); pbar.style.display = 'block';
        const sb = document.getElementById('sb'); sb.style.display = 'flex';
        setTimeout(() => { sb.style.opacity = '1'; pbar.style.width = '10%'; }, 100);
        setTimeout(() => { document.getElementById('nav').style.transform = 'translateY(0)'; pbar.style.width = '20%'; }, 1000);
        setTimeout(() => { document.getElementById('logo').style.opacity = '1'; pbar.style.width = '30%'; }, 2000);
        setTimeout(() => { document.getElementById('links').style.opacity = '1'; pbar.style.width = '40%'; }, 3000);
        setTimeout(() => { const hero = document.getElementById('hero'); hero.style.opacity = '1'; hero.style.transform = 'scale(1)'; pbar.style.width = '50%'; }, 4000);
        setTimeout(() => { document.getElementById('h1').style.opacity = '1'; document.getElementById('h1').style.transform = 'translateY(0)'; pbar.style.width = '60%'; }, 5000);
        setTimeout(() => { document.getElementById('p').style.opacity = '1'; document.getElementById('p').style.transform = 'translateY(0)'; pbar.style.width = '70%'; }, 6000);
        setTimeout(() => { document.getElementById('btn-ui').style.opacity = '1'; document.getElementById('btn-ui').style.transform = 'scale(1)'; pbar.style.width = '80%'; }, 7000);
        setTimeout(() => { document.getElementById('cards').style.transform = 'translateY(0)'; pbar.style.width = '90%'; }, 8000);
        setTimeout(() => { document.querySelectorAll('.sb-card').forEach((c, i) => setTimeout(() => { c.style.opacity = '1'; c.style.transform = 'translateY(0)'; }, i * 200)); pbar.style.width = '95%'; }, 8500);
        setTimeout(() => { 
            pbar.style.width = '100%';
            setTimeout(() => { pbar.style.display = 'none'; }, 500);
            const editor = document.getElementById('code-editor');
            if(!editor.value.includes('POSTER' + '_BUILT')) {
                editor.value += '\\n<!-- ' + 'POSTER' + '_BUILT' + ' -->';
                editor.dispatchEvent(new Event('input', { bubbles: true }));
            }
        }, 10000);
    ">▶ PLAY VIDEO</button>
    <div class="site-builder" id="sb">
        <div class="sb-nav" id="nav">
            <div class="sb-logo" id="logo">MySite</div>
            <div class="sb-links" id="links"><div class="sb-link"></div><div class="sb-link"></div><div class="sb-link"></div></div>
        </div>
        <div class="sb-hero" id="hero">
            <div class="sb-h1" id="h1">Hello World!</div>
            <div class="sb-p" id="p">Welcome to my awesome website.</div>
            <div class="sb-btn-ui" id="btn-ui">Get Started</div>
        </div>
        <div class="sb-cards" id="cards">
            <div class="sb-card"></div><div class="sb-card"></div><div class="sb-card"></div>
        </div>
    </div>
    <div class="progress-bar" id="pbar"></div>
</div>`,
            progress: 90,
            validator: function (code) { return code.includes("POSTER_BUILT"); }
        },
        {
            title: "19. Quick preview of final project",
            body: `<p>By the end of module 6, you will have a styled website showcasing your portfolio piece!</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Interact with the simulated portfolio 3 times to unlock the final module.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="120" y="80" fill="#00ff9d" font-family="monospace" font-size="16" text-anchor="middle" class="pulse-cyan">YOUR PORTFOLIO</text></svg>`,
            initialCode: `<!-- INTERACTIVE MODULE -->
<style>
.portfolio { height: 300px; background: white; color: black; border-radius: 8px; overflow-y: auto; padding: 20px; font-family: sans-serif; position: relative; transition: 0.3s; }
.p-header { text-align: center; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px; margin-bottom: 20px; }
.p-btn { display: inline-block; padding: 10px 20px; background: #3b82f6; color: white; border-radius: 30px; cursor: pointer; margin: 5px; font-size: 14px; transition: 0.2s; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); }
.p-btn:hover { background: #2563eb; transform: translateY(-2px); }
.p-btn.clicked { background: #10b981; pointer-events: none; transform: scale(0.95); opacity: 0.8; }
.p-success { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(16,185,129,0.9); color: white; display: none; flex-direction: column; align-items: center; justify-content: center; font-size: 24px; font-weight: bold; z-index: 10; border-radius: 8px; animation: p-fade 0.5s; }
@keyframes p-fade { from { opacity: 0; } to { opacity: 1; } }
</style>
<div class="portfolio" id="pf">
    <div class="p-header">
        <div style="font-size:50px; margin-bottom:10px;">👤</div>
        <h2 style="font-weight:bold; font-size:26px; color:#1e293b; margin:0;">Alex Coder</h2>
        <p style="color:#64748b; font-size:16px;">Future Web Developer</p>
    </div>
    <div style="text-align:center;">
        <p style="margin-bottom:20px; font-size:15px; font-weight:bold; color:#f59e0b;">INTERACT WITH 3 LINKS!</p>
        <div class="p-btn" onclick="window.pfClick(this)">View My Projects</div>
        <div class="p-btn" onclick="window.pfClick(this)">Read About Me</div>
        <div class="p-btn" onclick="window.pfClick(this)">Contact Me</div>
    </div>
    <div class="p-success" id="p-success">
        <div style="font-size:50px; margin-bottom:10px;">🌟</div>
        Portfolio Complete!
    </div>
</div>
<script>
window.pfClicks = 0;
window.pfClick = function(btn) {
    btn.classList.add('clicked');
    btn.innerText += ' ✓';
    window.pfClicks++;
    if(window.pfClicks >= 3) {
        document.getElementById('p-success').style.display = 'flex';
        document.getElementById('pf').style.boxShadow = '0 0 20px #10b981';
        const editor = document.getElementById('code-editor');
        if(!editor.value.includes('PORTFOLIO' + '_REVIEWED')) {
            editor.value += '\\n<!-- ' + 'PORTFOLIO' + '_REVIEWED' + ' -->';
            editor.dispatchEvent(new Event('input', { bubbles: true }));
        }
    }
}
</script>`,
            progress: 95,
            validator: function (code) { return code.includes("PORTFOLIO_REVIEWED"); }
        },
        {
            title: "20. Final Challenge: How did you feel?",
            body: `<p>You've completed the introductory overview of Web Design and HTML.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Select the emoji below that best represents how this lesson made you feel, then click FINISH!</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="120" y="80" fill="#00f2ff" font-family="monospace" font-size="18" text-anchor="middle">HELLO WORLD</text></svg>`,
            initialCode: `<!-- INTERACTIVE MODULE -->
<style>
.emoji-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 15px; margin-top: 10px; padding: 25px; background: #1e293b; border-radius: 12px; height: 300px; place-items: center; align-content: center; transition: 0.3s; }
.emoji-btn { font-size: 35px; background: #0f172a; border: 2px solid #334155; border-radius: 12px; cursor: pointer; transition: 0.2s; width: 60px; height: 60px; display:flex; justify-content:center; align-items:center; user-select: none; }
.emoji-btn:hover { transform: scale(1.15); border-color: #00f2ff; background: rgba(0,242,255,0.1); }
.emoji-btn.selected { background: #00ff9d; border-color: white; transform: scale(1.15); box-shadow: 0 0 20px #00ff9d; pointer-events: none; }
</style>
<div style="text-align:center;">
    <div class="emoji-grid" id="egrid">
        <div class="emoji-btn" onclick="window.selEmo(this, '😀')">😀</div>
        <div class="emoji-btn" onclick="window.selEmo(this, '😎')">😎</div>
        <div class="emoji-btn" onclick="window.selEmo(this, '🚀')">🚀</div>
        <div class="emoji-btn" onclick="window.selEmo(this, '🤯')">🤯</div>
        <div class="emoji-btn" onclick="window.selEmo(this, '🤔')">🤔</div>
        <div class="emoji-btn" onclick="window.selEmo(this, '😴')">😴</div>
        <div class="emoji-btn" onclick="window.selEmo(this, '💪')">💪</div>
        <div class="emoji-btn" onclick="window.selEmo(this, '🎉')">🎉</div>
        <div class="emoji-btn" onclick="window.selEmo(this, '🧠')">🧠</div>
        <div class="emoji-btn" onclick="window.selEmo(this, '💻')">💻</div>
    </div>
</div>
<script>
window.selEmo = function(btn, emoji) {
    document.querySelectorAll('.emoji-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    window.lessonEmoji = emoji; // Save globally so completion screen can read it
    document.getElementById('egrid').style.boxShadow = '0 0 20px rgba(0,255,157,0.3)';
    const editor = document.getElementById('code-editor');
    if(!editor.value.includes('EMOJI_S' + 'ELECTED')) {
        editor.value += '\\n<!-- ' + 'EMOJI_S' + 'ELECTED' + ' -->';
        editor.dispatchEvent(new Event('input', { bubbles: true }));
    }
}
</script>`,
            progress: 100,
            validator: function (code) { return code.includes("EMOJI_SELECTED"); }
        }
    ]
};
