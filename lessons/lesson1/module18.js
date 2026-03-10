window.Lessons.lesson1.modules[17] = {
    title: "18. Drawing with HTML 🎨",
    body: `<p>HTML isn't just for text! You can even draw interactive shapes and animations using something called <strong>SVG</strong> (Scalable Vector Graphics).</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Click PLAY to draw a cool animated geometric logo!</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><circle cx="120" cy="75" r="40" fill="none" stroke="#ff00e5" stroke-width="4"/><polygon points="110,60 110,90 135,75" fill="#00f2ff"/></svg>`,
    widgetCode: `<!-- INTERACTIVE MODULE -->
<style>
.svg-stage { background: #0f172a; height: 350px; border-radius: 12px; display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden; margin-top: 15px;}
.play-btn { background: #ff00e5; color: white; border: none; padding: 15px 30px; border-radius: 30px; font-size: 20px; font-weight: bold; cursor: pointer; box-shadow: 0 0 20px rgba(255,0,229,0.5); z-index: 10; transition: 0.3s; position: absolute;}
.play-btn:hover { transform: scale(1.1); box-shadow: 0 0 30px rgba(255,0,229,0.8); }

.svg-canvas { width: 100%; height: 100%; opacity: 0; transition: 1s; }
.shape { fill: none; stroke-width: 4; stroke-linecap: round; stroke-linejoin: round; }

/* Animations */
.draw-circle { stroke: #00ff9d; stroke-dasharray: 630; stroke-dashoffset: 630; }
.draw-poly { stroke: #3b82f6; stroke-dasharray: 400; stroke-dashoffset: 400; }
.draw-line { stroke: #ff00e5; stroke-dasharray: 200; stroke-dashoffset: 200; }

.animating .draw-circle { animation: draw-svg-anim 2s forwards ease-in-out; }
.animating .draw-poly { animation: draw-svg-anim 1.5s 1s forwards ease-in-out; }
.animating .draw-line { animation: draw-svg-anim 1s 2s forwards ease-in-out; }
.animating .fill-in { animation: fillUp-svg-anim 1s 3s forwards; }

@keyframes draw-svg-anim { to { stroke-dashoffset: 0; } }
@keyframes fillUp-svg-anim { to { fill: rgba(59,130,246,0.3); } }
@keyframes spin-svg-anim { 100% { transform: rotate(360deg); } }
.animating .spin-group { transform-origin: center; animation: spin-svg-anim 10s 3s linear infinite; }
</style>
<script>
window.playSVG = function() {
    const playBtn = document.getElementById('play-btn');
    playBtn.style.opacity = '0';
    setTimeout(() => playBtn.style.display = 'none', 300);
    
    const canvas = document.getElementById('canvas');
    canvas.style.opacity = '1';
    canvas.classList.add('animating');
    
    setTimeout(() => {
        window.completeModule('SVG_PLAYED');
    }, 4000);
}
</script>
<div class="svg-stage">
    <button class="play-btn" id="play-btn" onclick="window.playSVG()">▶ PLAY SVG</button>
    <svg class="svg-canvas" id="canvas" viewBox="0 0 400 350" xmlns="http://www.w3.org/2000/svg">
        <g class="spin-group" style="transform-origin: 200px 175px;">
            <circle cx="200" cy="175" r="100" class="shape draw-circle"/>
            <polygon points="200,75 286,225 114,225" class="shape draw-poly fill-in"/>
            <line x1="200" y1="75" x2="200" y2="275" class="shape draw-line"/>
            <line x1="100" y1="175" x2="300" y2="175" class="shape draw-line"/>
        </g>
    </svg>
</div>`,
    initialCode: ``,
    progress: 90,
    validator: function (code) { return code.includes("SVG_PLAYED"); }
};