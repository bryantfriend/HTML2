window.Lessons.intro.modules[17] = {
            title: "18. What students will build",
            body: `<p>Soon, you will create files with text, headings, lists, and images, creating a personalized digital poster.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Click PLAY to see how HTML tags come together.</p>`,
            svg: ``,
            widgetCode: `<!-- INTERACTIVE MODULE -->
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
    initialCode: ``,
            progress: 90,
            validator: function (code) { return code.includes("POSTER_BUILT"); }
        };