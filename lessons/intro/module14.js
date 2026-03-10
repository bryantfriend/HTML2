window.Lessons.intro.modules[13] = {
    title: "14. Save → Refresh cycle 🔄",
    body: `<p>When building on a real computer, you change code, <strong>save the file</strong>, and <strong>refresh the browser</strong>.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Change the text in the code editor to include the word "Hola", then click Refresh below!</p>`,
    svg: ``,
    widgetCode: `<div style="background:white; border-radius:8px; padding:20px; color:black; font-family:sans-serif; text-align:center; height:150px; display:flex; flex-direction:column; justify-content:center;">
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
};