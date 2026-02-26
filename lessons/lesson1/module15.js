window.Lessons.lesson1.modules[14] = {
    title: "15. The Confused Robot 🤖",
    body: `<p>Browsers follow your explicit instructions. If a tag is broken, the robot gets stuck!</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Click the broken red tags to fix the structure!</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><text x="120" y="82" fill="#ef4444" font-size="24" text-anchor="middle">🤖🚧</text></svg>`,
    widgetCode: `<!-- INTERACTIVE MODULE -->
<style>
.robo-game { background: #0f172a; height: 350px; border-radius: 12px; padding: 15px; color: white; display: flex; flex-direction: column; align-items: center; position: relative;}
.path-container { display: flex; flex-direction: column; gap: 8px; align-items: center; width: 100%; margin-top: 5px; position: relative;}
.stone { background: #1e293b; padding: 8px 15px; border-radius: 6px; border: 2px solid #3b82f6; font-family: monospace; min-width: 140px; text-align: center; font-size: 14px; color: #93c5fd; position: relative; z-index: 2;}
.stone.broken { background: rgba(239,68,68,0.2); border-color: #ef4444; color: #fca5a5; cursor: pointer; border-style: dashed; animation: pulse-red 2s infinite;}
.stone.fixed { background: rgba(16,185,129,0.2); border-color: #10b981; color: #6ee7b7; border-style: solid; }

.robot { font-size: 24px; position: absolute; left: 50%; transform: translateX(-50%); top: 5px; z-index: 5; transition: top 0.5s ease-in-out;}
.flag { font-size: 24px; margin-top: -5px; z-index: 2;}
.walk-line { position: absolute; top: 0; bottom: 0; left: 50%; width: 4px; background: #334155; transform: translateX(-50%); z-index: 1;}

@keyframes pulse-red { 0% { box-shadow: 0 0 0 0 rgba(239,68,68,0.4); } 70% { box-shadow: 0 0 0 10px rgba(239,68,68,0); } 100% { box-shadow: 0 0 0 0 rgba(239,68,68,0); } }
</style>
<script>
(function() {
    window.sf15 = 0;
    window.fs15 = function(id, tag) {
        const el = document.getElementById(id);
        if(!el.classList.contains('broken')) return;
        
        // Sequence check
        if((id === 'st1' && window.sf15 === 0) || (id === 'st2' && window.sf15 === 1) || (id === 'st3' && window.sf15 === 2)) {
            el.classList.replace('broken', 'fixed');
            el.innerText = tag;
            window.sf15++;
            const r = document.getElementById('rob-15');
            const pos = [80, 130, 205];
            r.style.top = pos[window.sf15-1] + 'px';
            
            if(window.sf15 === 3) {
                setTimeout(() => {
                    r.innerText = '🤖🎉';
                    window.completeModule('ROBOT_SAVED');
                }, 600);
            }
        }
    };
    setTimeout(() => { 
        const rob = document.getElementById('rob-15');
        if(rob) rob.style.top = '35px'; 
    }, 500);
})();
</script>`,
    initialCode: `<div class="robo-game">
    <div class="path-container" id="p-cont">
        <div class="walk-line"></div>
        <div class="robot" id="rob-15">🤖</div>
        <div class="stone" style="margin-top: 35px;">&lt;html&gt;</div>
        <div class="stone broken" id="st1" onclick="window.fs15('st1', '&lt;head&gt;')">&lt;head</div>
        <div class="stone broken" id="st2" onclick="window.fs15('st2', '&lt;body&gt;')">body&gt;</div>
        <div class="stone broken" id="st3" onclick="window.fs15('st3', '&lt;/html&gt;')">&lt;html/&gt;</div>
        <div class="flag">🚩</div>
    </div>
</div>`,
    progress: 75,
    validator: function (code) { return code.includes("ROBOT_SAVED"); }
};