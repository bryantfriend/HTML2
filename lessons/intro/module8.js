window.Lessons.intro.modules[7] = {
    title: "8. Real website example",
    body: `<p>Every site you visit, from Google to YouTube, uses HTML at its core.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Click play on the video below.</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="30" width="160" height="90" rx="6" fill="#161b33" stroke="#00f2ff" stroke-width="2"/><circle cx="120" cy="75" r="20" fill="red"/><polygon points="115,65 115,85 130,75" fill="white"/></svg>`,
    widgetCode: `<!-- INTERACTIVE MODULE -->
<script>
window.vtClicked = false;
window.startVideoCheck = function() {
    window.ytCheck = setInterval(() => {
        if(!window.vtClicked && document.activeElement === document.getElementById('yt-player')) {
            window.vtClicked = true;
            document.getElementById('vid-msg').innerText = 'INITIALIZING... (10s)';
            let left = 10;
            window.vtTimer = setInterval(() => {
                left--;
                document.getElementById('vid-msg').innerText = 'WATCHING... (' + left + 's)';
                if(left <= 0) {
                    clearInterval(window.vtTimer);
                    clearInterval(window.ytCheck);
                    document.getElementById('vid-msg').innerText = 'MISSION ACCOMPLISHED!';
                    window.completeModule('VIDEO_PLAYED');
                }
            }, 1000);
        }
    }, 500);
};
</script>`,
    initialCode: `<div style="background:#0f172a; border-radius:12px; height:300px; display:flex; flex-direction:column; justify-content:center; align-items:center; padding:10px;">
    <h3 id="vid-msg" style="color:#00f2ff; margin-bottom:10px; font-family:sans-serif; font-size:14px; text-transform:uppercase; letter-spacing:1px; animation: pulse-cyan 2s infinite;">Click Play to Complete!</h3>
    <div style="width:100%; max-width:400px; border-radius:8px; overflow:hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
        <iframe width="100%" height="225" src="https://www.youtube.com/embed/ok-plXXHlWw?enablejsapi=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen id="yt-player"></iframe>
    </div>
    <script>setTimeout(() => window.startVideoCheck(), 500);</script>
</div>`,
    progress: 40,
    validator: function (code) { return code.includes("VIDEO_PLAYED"); }
};