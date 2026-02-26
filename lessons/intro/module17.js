window.Lessons.intro.modules[16] = {
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
        };