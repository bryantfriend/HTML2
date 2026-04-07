window.Lessons.intro.modules[7] = {
    title: "8. Real website example",
    body: `<p>Every site you visit, from Google to YouTube, uses HTML at its core.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Click play on the video below.</p>`,
    svg: `<svg width="260" height="170" viewBox="0 0 260 170" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <defs>
    <linearGradient id="intro-web-glow" x1="0%" x2="100%" y1="0%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8"/>
      <stop offset="100%" stop-color="#a855f7"/>
    </linearGradient>
  </defs>
  <rect x="10" y="12" width="240" height="146" rx="18" fill="#0f172a" stroke="rgba(148,163,184,0.3)"/>
  <rect x="26" y="28" width="208" height="26" rx="10" fill="#111827" stroke="rgba(148,163,184,0.2)"/>
  <circle cx="40" cy="41" r="5" fill="#fb7185"/>
  <circle cx="56" cy="41" r="5" fill="#fbbf24"/>
  <circle cx="72" cy="41" r="5" fill="#4ade80"/>
  <rect x="26" y="66" width="90" height="72" rx="12" fill="rgba(56,189,248,0.18)" stroke="rgba(56,189,248,0.5)"/>
  <rect x="126" y="66" width="108" height="18" rx="8" fill="url(#intro-web-glow)"/>
  <rect x="126" y="92" width="108" height="14" rx="7" fill="rgba(148,163,184,0.35)"/>
  <rect x="126" y="112" width="86" height="14" rx="7" fill="rgba(148,163,184,0.25)"/>
  <text x="71" y="108" text-anchor="middle" fill="#7dd3fc" font-size="12" font-family="Arial, sans-serif">REAL SITE</text>
  <text x="126" y="152" fill="#94a3b8" font-size="11" font-family="Arial, sans-serif">HTML builds every page you see.</text>
</svg>`,
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
</script>
<div style="background:#0f172a; border-radius:12px; height:300px; display:flex; flex-direction:column; justify-content:center; align-items:center; padding:10px;">
    <h3 id="vid-msg" style="color:#00f2ff; margin-bottom:10px; font-family:sans-serif; font-size:14px; text-transform:uppercase; letter-spacing:1px; animation: pulse-cyan 2s infinite;">Click Play to Complete!</h3>
    <div style="width:100%; max-width:400px; border-radius:8px; overflow:hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
        <iframe width="100%" height="225" src="https://www.youtube.com/embed/ok-plXXHlWw?enablejsapi=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen id="yt-player"></iframe>
    </div>
    <script>setTimeout(() => window.startVideoCheck(), 500);</script>
</div>`,
    initialCode: ``,
    progress: 40,
    validator: function (code) { return code.includes("VIDEO_PLAYED"); }
};
