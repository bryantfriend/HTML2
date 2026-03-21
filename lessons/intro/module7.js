window.Lessons.intro.modules[6] = {
  title: "7. CSS vs HTML vs JavaScript",
  body: `<p>You have already started using <strong>HTML</strong> to build structure. Next, here is the big picture:</p><p><strong>HTML</strong> = The Skeleton (Structure)<br><strong>CSS</strong> = The Skin/Clothes (Styling, colors, layout)<br><strong>JavaScript</strong> = The Muscles/Brain (Interactivity, pop-ups, games)</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Change at least 1 piece of clothing on the character to see how CSS works.</p>`,
  svg: ``,
  widgetCode: `<!-- INTERACTIVE MODULE -->
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
<script>
window.changeCloth = function(type, val) {
  if(type === 'hat') document.getElementById('disp-hat').innerText = val;
  if(type === 'shirt') document.getElementById('disp-shirt').style.background = val;
  if(type === 'pants') {
    document.getElementById('disp-pants').style.background = val;
    if(val === '#ef4444') { document.getElementById('disp-pants').style.height = '40px'; } 
    else { document.getElementById('disp-pants').style.height = '80px'; }
  }
  
  if(!window.cssChangedSignalSent) {
      document.getElementById('ap').style.borderColor = '#00ff9d';
      document.getElementById('ap').style.boxShadow = '0 0 20px rgba(0,255,157,0.2)';
      window.completeModule('CSS_CHANGED');
      window.cssChangedSignalSent = true;
  }
};
</script>
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
</div>`,
  initialCode: ``,
  progress: 35,
  validator: function (code) { return code.includes("CSS_CHANGED"); }
};
