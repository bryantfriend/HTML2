window.Lessons.lesson1.modules[10] = {
    title: "11. The Magic Extension ✨",
    body: `<p>A file is just text until you name it <code>.html</code>. That extension tells the computer to open it in a Browser.</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: 1. Click the "Rename" button below. 2. Change <code>index.txt</code> to <code>index.html</code>. 3. Double-click the file!</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="30" width="60" height="80" fill="white" stroke="#94a3b8" stroke-width="2"/><text x="120" y="130" fill="#00ff9d" font-family="monospace" font-size="14" text-anchor="middle">.html</text></svg>`,
    widgetCode: `<!-- INTERACTIVE MODULE -->
<style>
.desktop { background: #1e3a8a; height: 350px; border-radius: 12px; position: relative; display: flex; flex-direction: column; align-items: center; justify-content: center; font-family: sans-serif; }
.file-area { display: flex; flex-direction: column; align-items: center; }
.file-wrapper { position: relative; cursor: pointer; display: flex; flex-direction: column; align-items: center; transition: 0.2s; }
.file-wrapper:hover { transform: scale(1.05); }

.file-img { width: 64px; height: 80px; background: white; border-radius: 4px 12px 4px 4px; display: flex; align-items: center; justify-content: center; font-size: 30px; box-shadow: 0 5px 15px rgba(0,0,0,0.3); position: relative; }
.file-img::after { content: ''; position: absolute; top: 0; right: 0; border: 8px solid transparent; border-bottom-color: #cbd5e1; border-left-color: #cbd5e1; border-radius: 0 12px 0 0; }

.html-mode .file-img { background: #3b82f6; color: white; }
.html-mode .file-img::after { border-bottom-color: #1e40af; border-left-color: #1e40af; }

.file-label { color: white; margin-top: 10px; font-weight: bold; background: rgba(0,0,0,0.2); padding: 4px 10px; border-radius: 4px; font-size: 14px; }
.rename-btn { margin-top: 20px; background: #00ff9d; color: black; border: none; padding: 10px 20px; border-radius: 8px; font-weight: bold; cursor: pointer; transition: 0.2s; }
.rename-btn:hover { transform: scale(1.1); background: white; }

.modal-overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.7); display: none; align-items: center; justify-content: center; z-index: 10; }
.rename-modal { background: white; padding: 20px; border-radius: 12px; width: 80%; text-align: center; }
.rename-input { width: 100%; padding: 10px; border: 2px solid #3b82f6; border-radius: 8px; font-size: 18px; text-align: center; margin: 15px 0; font-family: monospace; }
.save-btn { background: #3b82f6; color: white; border: none; padding: 10px 20px; border-radius: 8px; cursor: pointer; font-weight: bold; }

.browser { position: absolute; inset: 10px; background: white; border-radius: 8px; display: none; flex-direction: column; z-index: 20; box-shadow: 0 20px 60px rgba(0,0,0,0.5); }
.browser-bar { background: #e2e8f0; height: 30px; display: flex; align-items: center; padding: 0 10px; gap: 5px; }
.dot { width: 10px; height: 10px; border-radius: 50%; }
</style>
<script>
(function() {
    window.fname = "index.txt";
    window.isHtml = false;

    window.showModal = function() {
        document.getElementById('overlay').style.display = 'flex';
        document.getElementById('r-inp').focus();
    };

    window.saveName = function() {
        const val = document.getElementById('r-inp').value;
        window.fname = val;
        document.getElementById('label').innerText = val;
        document.getElementById('overlay').style.display = 'none';
        
        if (val.toLowerCase().endsWith('.html')) {
            document.getElementById('file-cont').classList.add('html-mode');
            document.getElementById('icon').innerText = '🌐';
            window.isHtml = true;
        } else {
            document.getElementById('file-cont').classList.remove('html-mode');
            document.getElementById('icon').innerText = '📄';
            window.isHtml = false;
        }
    };

    window.launchFile = function() {
        if(window.isHtml) {
            document.getElementById('browser').style.display = 'flex';
            setTimeout(() => {
                window.completeModule('FILE_OPENED');
            }, 1000);
        } else {
            alert("This is a text file. It opens in Notepad. Change it to .html to see the website!");
        }
    };
})();
</script>
<div class="desktop">
    <div class="file-area">
        <div id="file-cont" class="file-wrapper" ondblclick="window.launchFile()">
            <div class="file-img" id="icon">📄</div>
            <div class="file-label" id="label">index.txt</div>
        </div>
        <button class="rename-btn" onclick="window.showModal()">RENAME FILE</button>
    </div>

    <div class="modal-overlay" id="overlay">
        <div class="rename-modal">
            <h3 style="margin:0; color: #1e293b;">Rename File</h3>
            <input type="text" id="r-inp" class="rename-input" value="index.txt">
            <button class="save-btn" onclick="window.saveName()">OK</button>
        </div>
    </div>

    <div id="browser" class="browser">
        <div class="browser-bar">
            <div class="dot" style="background:#ef4444"></div>
            <div class="dot" style="background:#f59e0b"></div>
            <div class="dot" style="background:#10b981"></div>
            <div style="margin-left:10px; font-size:12px; color:#475569">index.html</div>
        </div>
        <div style="flex:1; display:flex; align-items:center; justify-content:center; flex-direction:column; color: black;">
            <h1 style="font-size:32px; color:#3b82f6; margin:0;">Success! 🎉</h1>
            <p style="color:#64748b;">The browser has opened your file.</p>
        </div>
    </div>
</div>`,
    initialCode: ``,
    progress: 55,
    validator: function (code) { return code.includes("FILE_OPENED"); }
};