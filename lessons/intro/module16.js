window.Lessons.intro.modules[15] = {
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
            <text x='150' y='140' text-anchor='middle' class='res' font-family='monospace'>&quot;5 + 5&quot;</text>
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
        };