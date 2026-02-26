window.Lessons.intro.modules[5] = {
  title: "6. HTML builds structure",
  body: `<p>HTML is like the skeleton of a house. It tells the browser "Here is a paragraph", "Here is an image", and "Here is a title".</p>
            <p class="text-[var(--neon-pink)] font-bold">Step 1: Build the house by matching pieces.</p>
            <p class="text-[var(--neon-pink)] font-bold">Step 2: Type <code>&lt;body&gt;&lt;/body&gt;</code> in the editor to finalize the foundation!</p>`,
  svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="20" width="140" height="110" fill="none" stroke="#ff00e5" stroke-width="2"/><line x1="50" y1="50" x2="190" y2="50" stroke="#ff00e5" stroke-width="2"/></svg>`,
  widgetCode: `<!-- INTERACTIVE MODULE -->
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
<script>
window.handleHouseClick = function(target) {
    if(target.classList.contains('piece') && !target.classList.contains('placed')) {
       let targetType = target.dataset.type;
       let dzs = document.querySelectorAll('.dz');
       for(let dz of dzs) {
           if(dz.dataset.type === targetType && !dz.classList.contains('filled')) {
               dz.classList.add('filled');
               dz.innerHTML = target.innerHTML;
               target.classList.add('placed');
               if(!window.placedCount) window.placedCount = 0;
               window.placedCount++;
               if(window.placedCount >= 5) {
                   document.getElementById('hg').style.background = 'radial-gradient(circle, #00ff9d, #0f172a)';
                   window.completeModule('HOUSE_BUILT');
               }
               break;
           }
       }
   }
};
</script>`,
  initialCode: `<div class="house-game" id="hg" onclick="window.handleHouseClick(event.target)">
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
  validator: function (code) {
    const clean = code.replace(/\s/g, '').toLowerCase();
    return code.includes("HOUSE_BUILT") && clean.includes("<body></body>");
  }
};