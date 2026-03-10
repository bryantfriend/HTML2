window.Lessons.intro.modules[5] = {
  title: "6. HTML builds structure",
  body: `<p>HTML is like the skeleton of a house. It tells the browser "Here is a paragraph", "Here is an image", and "Here is a title".</p>
            <p class="text-[var(--neon-pink)] font-bold">Step 1: Build the house by matching pieces.</p>
            <p class="text-[var(--neon-pink)] font-bold">Step 2: Type <code>&lt;body&gt;&lt;/body&gt;</code> in the editor to finalize the foundation!</p>`,
  svg: ``,
  widgetCode: `<!-- INTERACTIVE MODULE -->
<style>
.house-game { display: flex; gap: 80px; height: 300px; background: #0f172a; border-radius: 12px; padding: 20px 40px; color: white; user-select: none; }
.pieces { display: flex; flex-direction: column; gap: 10px; width: 140px; }
.piece { background: #3b82f6; padding: 10px; border-radius: 8px; text-align: center; cursor: pointer; font-weight: bold; border: 2px solid transparent; font-size: 14px; transition: 0.2s; }
.piece.selected { border-color: #ff00e5; background: #2563eb; transform: scale(1.05); }
.piece.placed { opacity: 0; pointer-events: none; }
.blueprint { flex: 1; position: relative; border: 2px dashed #475569; border-radius: 8px; background: rgba(0,0,0,0.2); }
.dz { border: 2px dashed #00f2ff; background: rgba(0,242,255,0.1); position: absolute; display: flex; align-items: center; justify-content: center; color: #00f2ff; font-size: 12px; cursor: pointer; transition: 0.2s; text-align: center; }
.dz:hover { background: rgba(0,242,255,0.2); transform: scale(1.02); }
.dz-body { bottom: 20px; left: 50%; transform: translateX(-50%); width: 180px; height: 160px; z-index: 1; align-items: flex-start; padding-top: 10px; }
.dz-head { bottom: 185px; left: 50%; transform: translateX(-50%); width: 220px; height: 70px; clip-path: polygon(50% 0%, 0% 100%, 100% 100%); border: none; background: rgba(0,242,255,0.2); z-index: 1; align-items: flex-end; padding-bottom: 5px; }
.dz-h1 { bottom: 20px; left: 50%; transform: translateX(-50%); width: 50px; height: 70px; z-index: 2; }
.dz-p1 { bottom: 100px; left: 50%; transform: translateX(-70px); width: 50px; height: 50px; z-index: 2; }
.dz-p2 { bottom: 100px; left: 50%; transform: translateX(20px); width: 50px; height: 50px; z-index: 2; }
.filled { background: #00ff9d !important; border: 2px solid #00ff9d !important; color: black !important; font-weight: bold; font-size: 14px; align-items: center !important; justify-content: center !important; padding: 0 !important; }
.dz-head.filled { background: #00ff9d !important; border: none !important; color: black !important; align-items: flex-end !important; padding-bottom: 10px !important; }
</style>
<script>
window.placedCount = 0;
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
                   // Manually trigger input so the validator runs immediately if they already typed body tags
                   document.getElementById('code-editor').dispatchEvent(new Event('input', { bubbles: true }));
               }
               break;
           }
       }
   }
};
</script>
<div class="house-game" id="hg" onclick="window.handleHouseClick(event.target)">
  <div class="pieces">
    <div class="piece" data-type="head">head</div>
    <div class="piece" data-type="body">body</div>
    <div class="piece" data-type="h1">&lt;h1&gt;&lt;/h1&gt;</div>
    <div class="piece" data-type="p">&lt;p&gt;&lt;/p&gt;</div>
    <div class="piece" data-type="p">&lt;p&gt;&lt;/p&gt;</div>
  </div>
  <div class="blueprint">
    <div class="dz dz-body" data-type="body">body</div>
    <div class="dz dz-head" data-type="head">head</div>
    <div class="dz dz-h1" data-type="h1">h1</div>
    <div class="dz dz-p1" data-type="p">p</div>
    <div class="dz dz-p2" data-type="p">p</div>
  </div>
</div>`,
  initialCode: ``,
  progress: 30,
  validator: function (code) {
    const clean = code.replace(/\s/g, '').toLowerCase();
    return (window.placedCount >= 5 || code.includes("HOUSE_BUILT")) && clean.includes("<body></body>");
  }
};