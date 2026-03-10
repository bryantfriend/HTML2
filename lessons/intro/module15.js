window.Lessons.intro.modules[14] = {
            title: "15. Mistakes are normal",
            body: `<p>If you type a tag wrong, your code won't blow up. It will just look a bit weird or plain!</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Click 'Fix Error' to add the missing closing bracket to the image tag.</p>`,
            svg: ``,
            widgetCode: `<!-- INTERACTIVE MODULE -->
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
    initialCode: ``,
            progress: 75,
            validator: function (code) { return code.includes("ERROR_FIXED"); }
        };