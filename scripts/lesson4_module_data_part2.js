function buildSingleSliderScaffold(config) {
  const dimensionStyle = config.attr === "width" ? "height:auto;" : "width:240px;object-fit:cover;";
  return `<style>.${config.shellClass}{padding:14px;border-radius:16px;background:#0f172a;color:#e2e8f0;border:1px solid #1e3a5f;margin-bottom:14px}.${config.shellClass} input{width:100%}.${config.shellClass} ${config.tagName}{display:block;margin:14px auto 0;transition:width .2s ease,height .2s ease;${dimensionStyle}}</style>
<div class="${config.shellClass}">
  <label for="${config.sliderId}">${config.label}</label>
  <input id="${config.sliderId}" type="range" min="${config.min}" max="${config.max}" value="${config.start}">
  <p id="${config.readoutId}">Current ${config.attr}: ${config.start}px</p>
</div>
<script>(function(){
  const slider=document.getElementById('${config.sliderId}');
  const media=document.getElementById('${config.targetId}');
  const readout=document.getElementById('${config.readoutId}');
  const editor=document.getElementById('code-editor');
  const key='${config.key}';
  if(!slider||!media||!readout||!editor) return;
  window.lesson4SliderHandlers=window.lesson4SliderHandlers||{};
  if(window.lesson4SliderHandlers[key]) editor.removeEventListener('input', window.lesson4SliderHandlers[key]);
  function clamp(value){
    const number=parseInt(value,10);
    if(Number.isNaN(number)) return ${config.start};
    return Math.max(${config.min}, Math.min(${config.max}, number));
  }
  function paint(value){
    const number=clamp(value);
    media.style['${config.attr}']=number+'px';
    media.setAttribute('${config.attr}', number);
    readout.textContent='Current ${config.attr}: '+number+'px';
    slider.value=number;
  }
  function replaceAttr(number){
    const regex=/(<${config.tagName}\\b[^>]*data-challenge\\s*=\\s*["']${config.challengeId}["'][^>]*)(>)/i;
    let next=editor.value.replace(regex,function(match,start,end){
      const attrRegex=new RegExp('\\\\b${config.attr}\\\\s*=\\\\s*["\\']?\\\\d+["\\']?','i');
      if(attrRegex.test(start)) return start.replace(attrRegex,'${config.attr}="'+number+'"')+end;
      return start+' ${config.attr}="'+number+'"'+end;
    });
    if(next!==editor.value){
      editor.value=next;
      window.IntentEngine.run(window.Intents.updatePreview,{code:editor.value});
    }
  }
  function syncFromCode(){
    const match=editor.value.match(/<${config.tagName}\\b[^>]*data-challenge\\s*=\\s*["']${config.challengeId}["'][^>]*\\b${config.attr}\\s*=\\s*["']?(\\d+)["']?[^>]*>/i);
    if(match) paint(match[1]);
  }
  slider.addEventListener('input',function(){ paint(slider.value); replaceAttr(slider.value); });
  window.lesson4SliderHandlers[key]=syncFromCode;
  editor.addEventListener('input', syncFromCode);
  syncFromCode();
  paint(slider.value);
})();</script>`;
}

const modules = [
  {
    title: "11. Image Formats",
    intro: "Different file endings tell the browser what kind of image it is loading, and now students can drag the animated picture into the code instead of just rewriting the source.",
    demoHeading: "Switching the file extension changes the kind of media you show.",
    chip: "file types",
    browserTitle: "format-switch.html",
    demoCode: "&lt;img src=\"https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif\" alt=\"Dancing cat\"&gt;",
    demoPreview: `<div class="lesson-demo-badges"><span class="lesson-demo-badge">.jpg photo</span><span class="lesson-demo-badge">.png transparent</span><span class="lesson-demo-badge">.gif animated</span></div>`,
    captions: [
      "1. File endings matter.",
      "2. GIF files can be animated.",
      "3. Swap the source to try a new format."
    ],
    tips: [
      { title: "Swap", copy: "Change the source file name." },
      { title: "Try GIF", copy: "Use dance.gif for this mission." },
      { title: "Remember", copy: "Extensions tell the browser the format." }
    ],
    mission: "Drag the dancing GIF card into the code box, or type the GIF URL yourself, until the preview changes from a still picture to an animated GIF.",
    previewScaffold: "<style>.gif-browser{padding:14px;border-radius:16px;background:#0f172a;border:1px solid #1e3a5f;color:#e2e8f0;margin-bottom:14px}.gif-browser-track{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;margin-top:10px}.gif-card{padding:10px;border-radius:14px;background:#172033;border:1px solid #334155;cursor:grab;text-align:center;font-weight:700}.gif-card img{display:block;width:100%;max-width:120px;margin:0 auto 8px;border-radius:10px}.gif-card.dragging{opacity:.65}.gif-drop-tip{margin-top:10px;color:#93c5fd}</style>\n<div class=\"gif-browser\"><strong>Mini browser tray</strong><p style=\"margin:8px 0 0\">Drag the animated cat card into the code box. Drop it anywhere in the editor and the <code>src</code> will update.</p><div class=\"gif-browser-track\"><div class=\"gif-card\"><img src=\"assets/cat-demo.svg\" alt=\"Still cat\"><span>Still image</span></div><div id=\"drag-gif-card\" class=\"gif-card\" draggable=\"true\"><img src=\"https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif\" alt=\"Animated cat\"><span>Drag this GIF</span></div></div><p id=\"gif-drop-tip\" class=\"gif-drop-tip\">Goal GIF: <code>https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif</code></p></div>\n<script>(function(){const editor=document.getElementById('code-editor');const card=document.getElementById('drag-gif-card');const tip=document.getElementById('gif-drop-tip');const url='https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif';if(!editor||!card||!tip)return;window.lesson4DragHandlers=window.lesson4DragHandlers||{};const old=window.lesson4DragHandlers.gifDrop;if(old){editor.removeEventListener('dragover',old.dragover);editor.removeEventListener('dragleave',old.dragleave);editor.removeEventListener('drop',old.drop);}card.addEventListener('dragstart',function(event){card.classList.add('dragging');event.dataTransfer.setData('text/plain',url);});card.addEventListener('dragend',function(){card.classList.remove('dragging');});function dragover(event){event.preventDefault();editor.style.outline='2px solid #22d3ee';}function dragleave(){editor.style.outline='';}function drop(event){event.preventDefault();editor.style.outline='';const dropped=event.dataTransfer.getData('text/plain')||url;if(/\\bsrc\\s*=\\s*[\"'][^\"']*[\"']/i.test(editor.value)){editor.value=editor.value.replace(/\\bsrc\\s*=\\s*[\"'][^\"']*[\"']/i,'src=\"'+dropped+'\"');}else{editor.value=editor.value.replace(/<img\\b([^>]*)>/i,'<img$1 src=\"'+dropped+'\">');}window.IntentEngine.run(window.Intents.updatePreview,{code:editor.value});tip.textContent='Nice drop. The animated GIF source is now in the code box.';}window.lesson4DragHandlers.gifDrop={dragover:dragover,dragleave:dragleave,drop:drop};editor.addEventListener('dragover',dragover);editor.addEventListener('dragleave',dragleave);editor.addEventListener('drop',drop);})();</script>",
    initialCode: "<img data-challenge=\"format-swap\" src=\"\" alt=\"Dancing cat\" width=\"220\">",
    validator: `function(code) { return /<img\\b(?=[^>]*data-challenge\\s*=\\s*['"]format-swap['"])(?=[^>]*src\\s*=\\s*['"][^'"]*\\.gif['"])[^>]*>/i.test(code); }`
  },
  {
    title: "12. The Ultimate Image Tag",
    intro: "This is the full image recipe: source, alt text, and size working together, and now the checklist turns green as each part is completed.",
    demoHeading: "Build the full image tag piece by piece and watch the checklist light up.",
    chip: "full combo",
    browserTitle: "hero-image.html",
    demoCode: "&lt;img src=\"assets/cat-demo.svg\" alt=\"Space cat\" width=\"180\"&gt;",
    demoPreview: `<div class="lesson-demo-badges"><span class="lesson-demo-badge">src</span><span class="lesson-demo-badge">alt</span><span class="lesson-demo-badge">width</span></div>`,
    captions: [
      "1. Start with the image tag.",
      "2. Add source, alt text, and width.",
      "3. That creates a stronger final result."
    ],
    tips: [
      { title: "Combine", copy: "Use all three pieces together." },
      { title: "Build", copy: "A complete tag is the goal." },
      { title: "Clear", copy: "Each instruction turns green when the matching attribute appears." }
    ],
    mission: "Create an image tag with <code>src</code>, <code>alt</code>, and <code>width</code>.",
    previewScaffold: "<style>.ultimate-checklist{display:grid;gap:8px;margin-bottom:14px}.ultimate-check{padding:10px 12px;border-radius:12px;background:#0f172a;color:#cbd5e1;border:1px solid #334155;transition:.2s}.ultimate-check.done{border-color:#22c55e;background:#dcfce7;color:#14532d;font-weight:800}</style>\n<div class=\"ultimate-checklist\"><div id=\"check-src\" class=\"ultimate-check\">SRC - &lt;img src=\"assets/cat-demo.svg\"</div><div id=\"check-alt\" class=\"ultimate-check\">ALT - alt=\"Cat smiling\"</div><div id=\"check-width\" class=\"ultimate-check\">WIDTH - width=\"200\"</div></div>\n<script>(function(){const img=document.querySelector('img[data-challenge=\"ultimate-image\"]');const checks={src:document.getElementById('check-src'),alt:document.getElementById('check-alt'),width:document.getElementById('check-width')};if(!img||!checks.src||!checks.alt||!checks.width)return;checks.src.classList.toggle('done',img.hasAttribute('src'));checks.alt.classList.toggle('done',img.hasAttribute('alt'));checks.width.classList.toggle('done',img.hasAttribute('width'));})();</script>",
    initialCode: "<img data-challenge=\"ultimate-image\">",
    validator: `function(code) { return /<img\\b(?=[^>]*data-challenge\\s*=\\s*['"]ultimate-image['"])(?=[^>]*src\\s*=\\s*['"][^'"]+['"])(?=[^>]*alt\\s*=\\s*['"][^'"]+['"])(?=[^>]*width\\s*=\\s*['"][^'"]+['"])[^>]*>/i.test(code); }`
  },
  {
    title: "13. What about Sound?",
    intro: "Media is not only pictures. Audio tags can play music, voices, and effects.",
    demoHeading: "Audio tags use both an opening and a closing tag.",
    chip: "sound on",
    browserTitle: "audio-intro.html",
    demoCode: "&lt;audio&gt;\n&lt;/audio&gt;",
    demoPreview: `<div class="lesson-demo-player"><div class="lesson-demo-wave"><span></span><span></span><span></span><span></span><span></span></div><audio controls src="assets/media-master-tone.wav" style="width:100%;margin-top:10px"></audio></div>`,
    captions: [
      "1. Audio needs an opening tag.",
      "2. Audio also needs a closing tag.",
      "3. This one wraps the media player."
    ],
    tips: [
      { title: "Open", copy: "Type the opening audio tag." },
      { title: "Close", copy: "Add the closing tag too." },
      { title: "Wrap", copy: "Audio is not self-closing here." }
    ],
    mission: "Type <code>&lt;audio&gt;</code> and <code>&lt;/audio&gt;</code> below the sound button so the page has a real audio section.",
    previewScaffold: "<button onclick=\"(function(){const ctx=new(window.AudioContext||window.webkitAudioContext)();const o=ctx.createOscillator();const g=ctx.createGain();o.type='triangle';o.frequency.value=440;o.connect(g);g.connect(ctx.destination);g.gain.setValueAtTime(0.0001,ctx.currentTime);g.gain.exponentialRampToValueAtTime(0.18,ctx.currentTime+.02);g.gain.exponentialRampToValueAtTime(0.0001,ctx.currentTime+.5);o.start();o.stop(ctx.currentTime+.55);})();\" style=\"padding:12px 16px;border:none;border-radius:999px;background:#06b6d4;color:#082f49;font-weight:700;cursor:pointer;margin-bottom:12px\">Play sample sound</button>",
    initialCode: "",
    validator: `function(code) { return /<\\s*audio\\b/i.test(code) && /<\\s*\\/\\s*audio\\s*>/i.test(code); }`
  },
  {
    title: "14. Audio Sources",
    intro: "The audio tag also needs directions. Once the student adds the source, the player should wake up with a real beat.",
    demoHeading: "The player needs a music file before it can play anything fun.",
    chip: "sound path",
    browserTitle: "audio-source.html",
    demoCode: "&lt;audio src=\"music.mp3\"&gt;\n&lt;/audio&gt;",
    demoPreview: `<div class="lesson-demo-player"><div class="lesson-demo-badges"><span class="lesson-demo-badge">music.mp3</span><span class="lesson-demo-badge">source loaded</span></div></div>`,
    captions: [
      "1. Add the source in the opening audio tag.",
      "2. Put the file name in quotes.",
      "3. Now the player knows what to play."
    ],
    tips: [
      { title: "Point it", copy: "Set the audio file name with src." },
      { title: "Quote it", copy: "Keep the value in quotes." },
      { title: "Use", copy: "For this mission, type music.mp3." }
    ],
    mission: "Type <code>music.mp3</code> between the empty source quotes so the opening audio tag becomes <code>src=\"music.mp3\"</code>.",
    previewScaffold: "<style>.dj-booth{padding:12px;border-radius:16px;background:#0f172a;border:1px solid #1e3a5f;color:#cbd5e1;margin-bottom:14px}.dj-lights{display:flex;gap:8px;margin-bottom:10px}.dj-lights span{flex:1;height:10px;border-radius:999px;background:linear-gradient(90deg,#22d3ee,#3b82f6);opacity:.45;animation:djPulse 1.2s ease-in-out infinite}.dj-lights span:nth-child(2){animation-delay:.15s}.dj-lights span:nth-child(3){animation-delay:.3s}@keyframes djPulse{0%,100%{transform:scaleX(.7);opacity:.3}50%{transform:scaleX(1);opacity:1}}</style>\n<div class=\"dj-booth\"><div class=\"dj-lights\"><span></span><span></span><span></span></div><p id=\"dj-status\">Add the music source to load the track.</p></div>\n<script>(function(){const audio=document.getElementById('dj-player');const status=document.getElementById('dj-status');if(audio&&status&&/^music\\.mp3$/i.test((audio.getAttribute('src')||'').trim())){audio.src='assets/media-master-tone.wav';status.textContent='Track loaded. Press play!';}})();</script>",
    initialCode: "<audio id=\"dj-player\" data-challenge=\"dj-source\" src=\"\" controls>\n</audio>",
    validator: `function(code) { return /<audio\\b(?=[^>]*data-challenge\\s*=\\s*['"]dj-source['"])(?=[^>]*src\\s*=\\s*['"]music\\.mp3['"])[^>]*>/i.test(code); }`
  },
  {
    title: "15. The controls Attribute",
    intro: "Without controls, the audio player is invisible. This boolean attribute makes the buttons appear.",
    demoHeading: "Controls reveal the play bar, button, and timeline.",
    chip: "show controls",
    browserTitle: "audio-controls.html",
    demoCode: "&lt;audio src=\"music.mp3\" controls&gt;\n&lt;/audio&gt;",
    demoPreview: `<div class="lesson-demo-player"><div class="lesson-demo-audio-bar"><div class="lesson-demo-play">&#9654;</div><div class="lesson-demo-track"></div><span class="lesson-demo-badge">controls</span></div></div>`,
    captions: [
      "1. Add the word <code>controls</code>.",
      "2. No equals sign is needed here.",
      "3. The player buttons become visible."
    ],
    tips: [
      { title: "Boolean", copy: "This attribute is just one word." },
      { title: "Visible", copy: "Controls make the player usable." },
      { title: "Add it", copy: "Place it in the opening tag." }
    ],
    mission: "Add <code>controls</code> inside the opening <code>&lt;audio&gt;</code> tag so the polished player appears.",
    previewScaffold: "<style>.controls-shell{padding:12px;border-radius:16px;background:#0f172a;border:1px solid #1e3a5f;color:#cbd5e1;margin-bottom:14px}.controls-shell strong{color:#67e8f9}</style>\n<div class=\"controls-shell\"><strong>Mission hint:</strong> when controls appear, the player becomes usable.</div>",
    initialCode: "<audio data-challenge=\"audio-controls\" src=\"assets/media-master-tone.wav\">\n</audio>",
    validator: `function(code) { const tag = code.match(/<audio\\b[^>]*data-challenge\\s*=\\s*['"]audio-controls['"][^>]*>/i); return !!tag && /(?:\\s|<)controls(?=\\s|>)/i.test(tag[0]); }`
  },
  {
    title: "16. Video time!",
    intro: "Video tags work like audio tags, but now the page can show moving pictures too, and the module should feel more alive.",
    demoHeading: "Video needs opening and closing tags just like audio, and this demo uses a real clip.",
    chip: "video start",
    browserTitle: "video-intro.html",
    demoCode: "&lt;video&gt;\n&lt;/video&gt;",
    demoPreview: `<div class="lesson-demo-video-player"><video src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" muted loop autoplay playsinline style="width:100%;display:block"></video></div>`,
    captions: [
      "1. Open the video tag.",
      "2. Close the video tag.",
      "3. This creates the video container."
    ],
    tips: [
      { title: "Match", copy: "Use both opening and closing tags." },
      { title: "Mirror", copy: "Video behaves like audio here." },
      { title: "Prepare", copy: "Source and controls come next." }
    ],
    mission: "Type <code>&lt;video&gt;</code> and <code>&lt;/video&gt;</code> so the page gets ready for real moving media.",
    previewScaffold: "<style>.video-start-lab{padding:14px;border-radius:16px;background:linear-gradient(180deg,#0f172a,#111827);border:1px solid #1e3a5f;color:#cbd5e1;margin-bottom:14px}.video-start-lab button{margin-top:10px;padding:10px 14px;border:none;border-radius:999px;background:#22d3ee;color:#082f49;font-weight:700;cursor:pointer;animation:videoPulse 1.2s ease-in-out infinite;box-shadow:0 0 0 0 rgba(34,211,238,.45)}@keyframes videoPulse{0%{transform:scale(1);box-shadow:0 0 0 0 rgba(34,211,238,.45)}70%{transform:scale(1.05);box-shadow:0 0 0 12px rgba(34,211,238,0)}100%{transform:scale(1);box-shadow:0 0 0 0 rgba(34,211,238,0)}}</style>\n<div class=\"video-start-lab\"><strong>Video launch bay</strong><p style=\"margin:8px 0 0\">Type the opening and closing video tags below, or press the glowing button to insert them for practice.</p><button type=\"button\" id=\"insert-video-demo\">Insert demo video tag</button></div>\n<script>(function(){const button=document.getElementById('insert-video-demo');const editor=document.getElementById('code-editor');if(!button||!editor)return;button.addEventListener('click',function(){const openTag='<video>';const closeTag='</video>';editor.value=(editor.value||'').trim();if(!editor.value){editor.value=openTag+'\\n'+closeTag;}else if(!/<\\s*video\\b/i.test(editor.value)){editor.value+=((/\\n$/.test(editor.value)||!editor.value)?'':'\\n')+openTag+'\\n'+closeTag;}window.IntentEngine.run(window.Intents.updatePreview,{code:editor.value});});})();</script>",
    initialCode: "",
    validator: `function(code) { return /<\\s*video\\b/i.test(code) && /<\\s*\\/\\s*video\\s*>/i.test(code); }`
  },
  {
    title: "17. Video Source & Controls",
    intro: "Now give the video something to play and make the controls visible. The starter code now clearly shows where each missing piece goes.",
    demoHeading: "The video tag needs both a source and controls to feel complete.",
    chip: "ready to play",
    browserTitle: "movie-player.html",
    demoCode: "&lt;video src=\"movie.mp4\" controls&gt;\n&lt;/video&gt;",
    demoPreview: `<div class="lesson-demo-video-player"><div class="lesson-demo-screen"><div class="lesson-demo-clapper"></div></div><div class="lesson-demo-controls"><div class="lesson-demo-play">&#9654;</div><div class="lesson-demo-track"></div><span class="lesson-demo-badge">movie.mp4</span></div></div>`,
    captions: [
      "1. Add the video file with <code>src</code>.",
      "2. Add <code>controls</code> so people can use it.",
      "3. The player is now ready."
    ],
    tips: [
      { title: "Two parts", copy: "Use both src and controls." },
      { title: "Place them", copy: "Both belong in the opening tag." },
      { title: "Check", copy: "The mission unlocks when both appear." }
    ],
    mission: "Step 1: type <code>movie.mp4</code> between the source quotes. Step 2: type <code>controls</code> inside the opening tag before the first <code>&gt;</code>. When both are there, the lesson recap movie unlocks below.",
    previewScaffold: "<style>.movie-guide{display:grid;gap:8px;margin-bottom:14px}.movie-step{padding:10px 12px;border-radius:12px;background:#0f172a;border:1px solid #334155;color:#cbd5e1}.movie-step strong{color:#67e8f9}</style>\n<div class=\"movie-guide\"><div class=\"movie-step\"><strong>Step 1:</strong> Put <code>movie.mp4</code> between <code>src=\"\"</code>.</div><div class=\"movie-step\"><strong>Step 2:</strong> Type <code>controls</code> before the closing <code>&gt;</code> of the opening video tag.</div><div id=\"movie-unlock\" class=\"movie-step\">Add both parts to unlock the recap movie.</div></div>\n<script>(function(){const video=document.querySelector('video[data-challenge=\"lesson-movie\"]');const slot=document.getElementById('movie-unlock');if(video&&slot&&/^movie\\.mp4$/i.test((video.getAttribute('src')||'').trim())&&video.hasAttribute('controls')){slot.innerHTML='<iframe width=\"100%\" height=\"220\" src=\"https://www.youtube-nocookie.com/embed/qz0aGYrrlhU\" title=\"HTML lesson recap\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>';}})();</script>",
    initialCode: "<video data-challenge=\"lesson-movie\" src=\"\" width=\"320\"></video>\n<!-- Add controls inside the opening tag on line 1 -->",
    validator: `function(code) { const tag = code.match(/<video\\b[^>]*data-challenge\\s*=\\s*['"]lesson-movie['"][^>]*>/i); return !!tag && /\\bsrc\\s*=\\s*['"]movie\\.mp4['"]/i.test(tag[0]) && /(?:\\s|<)controls(?=\\s|>)/i.test(tag[0]); }`
  },
  {
    title: "18. Sizing Videos",
    intro: "Videos can take up a lot of space. Width keeps the player under control.",
    demoHeading: "Width shrinks the video player to a cleaner size.",
    chip: "video width",
    browserTitle: "video-size.html",
    demoCode: "&lt;video src=\"movie.mp4\" controls width=\"300\"&gt;\n&lt;/video&gt;",
    demoPreview: `<div class="lesson-demo-resize"><div class="lesson-demo-size-box tall" data-size="full"></div><div class="lesson-demo-size-box medium" data-size="300px"></div></div>`,
    captions: [
      "1. Add a width attribute to the video.",
      "2. Use pixels just like with images.",
      "3. The player becomes easier to fit on the page."
    ],
    tips: [
      { title: "Control", copy: "Resize the player with width." },
      { title: "Use 300", copy: "Set the width exactly to 300." },
      { title: "Keep neat", copy: "Smaller video players fit layouts better." }
    ],
    mission: "Add <code>width=\"300\"</code> to the video tag, then use the slider to test other widths in real time.",
    previewScaffold: buildSingleSliderScaffold({ shellClass: "video-width-lab", sliderId: "video-width-slider", readoutId: "video-width-readout", targetId: "video-width-player", key: "video-width", label: "Video width slider", min: 180, max: 520, start: 320, attr: "width", tagName: "video", challengeId: "video-width" }),
    initialCode: "<video id=\"video-width-player\" data-challenge=\"video-width\" src=\"https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4\" controls muted loop playsinline width=\"320\"></video>",
    validator: `function(code) { return /<video\\b(?=[^>]*data-challenge\\s*=\\s*['"]video-width['"])(?=[^>]*width\\s*=\\s*['"]300['"])[^>]*>/i.test(code); }`
  },
  {
    title: "19. The autoplay Attribute",
    intro: "Autoplay asks the video to begin immediately when the page loads.",
    demoHeading: "Autoplay tells the video to start without waiting for a click.",
    chip: "auto start",
    browserTitle: "auto-movie.html",
    demoCode: "&lt;video src=\"movie.mp4\" controls width=\"300\" autoplay&gt;\n&lt;/video&gt;",
    demoPreview: `<div class="lesson-demo-video-player"><div class="lesson-demo-screen"><div class="lesson-demo-clapper"></div></div><div class="lesson-demo-controls"><div class="lesson-demo-play">&#9654;</div><div class="lesson-demo-track"></div><span class="lesson-demo-badge">autoplay</span></div></div>`,
    captions: [
      "1. Add the word <code>autoplay</code> to the tag.",
      "2. This is another boolean attribute.",
      "3. The video is told to start on its own."
    ],
    tips: [
      { title: "Single word", copy: "Autoplay does not need =true." },
      { title: "Add it", copy: "Place autoplay in the opening tag." },
      { title: "Use carefully", copy: "Autoplay can surprise users if overused." }
    ],
    mission: "Type <code>autoplay</code> inside the opening video tag on line 1. Put it before the first <code>&gt;</code> so the movie can start by itself.",
    previewScaffold: "<div style=\"padding:14px;border-radius:16px;background:#0f172a;border:1px solid #1e3a5f;color:#cbd5e1;margin-bottom:14px\"><p style=\"margin:0\"><strong style=\"color:#67e8f9\">Where it goes:</strong> add <code>autoplay</code> on the first line with the other video settings.</p><p id=\"autoplay-status\" style=\"margin:10px 0 0;color:#cbd5e1\">Add autoplay to make the video start on its own.</p></div>\n<script>(function(){const video=document.getElementById('autoplay-player');const status=document.getElementById('autoplay-status');if(video&&status&&video.hasAttribute('autoplay')){video.play().catch(()=>{});status.textContent='Autoplay active: the video is trying to start automatically.';}})();</script>",
    initialCode: "<video id=\"autoplay-player\" data-challenge=\"autoplay-video\" src=\"https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4\" controls width=\"300\" muted loop playsinline>\n</video>\n<!-- Add autoplay inside the opening tag on line 1 -->",
    validator: `function(code) { const tag = code.match(/<video\\b[^>]*data-challenge\\s*=\\s*['"]autoplay-video['"][^>]*>/i); return !!tag && /(?:\\s|<)autoplay(?=\\s|>)/i.test(tag[0]); }`
  },
  {
    title: "20. The Media Portfolio Challenge",
    intro: "Final boss time. Build one tiny media gallery with image, audio, and video sections all on the same page. The new directions are step by step so students know exactly what to add.",
    demoHeading: "A polished page can mix multiple media types together, one green check at a time.",
    chip: "final build",
    browserTitle: "media-portfolio.html",
    demoCode: "&lt;h2&gt;Image&lt;/h2&gt;\n&lt;img ...&gt;\n&lt;h2&gt;Audio&lt;/h2&gt;\n&lt;audio ...&gt;&lt;/audio&gt;\n&lt;h2&gt;Video&lt;/h2&gt;\n&lt;video ...&gt;&lt;/video&gt;",
    demoPreview: `<div class="lesson-demo-portfolio"><div class="lesson-demo-section"><h4>Image</h4><div class="lesson-demo-badges"><span class="lesson-demo-badge">&lt;img&gt;</span></div></div><div class="lesson-demo-section"><h4>Audio</h4><div class="lesson-demo-badges"><span class="lesson-demo-badge">&lt;audio&gt;</span></div></div><div class="lesson-demo-section"><h4>Video</h4><div class="lesson-demo-badges"><span class="lesson-demo-badge">&lt;video&gt;</span></div></div></div>`,
    captions: [
      "1. Add clear headings for each media section.",
      "2. Place an image, audio player, and video player under them.",
      "3. That creates a mini media portfolio."
    ],
    tips: [
      { title: "Step 1", copy: "Keep three headings: one for Image, one for Audio, and one for Video." },
      { title: "Step 2", copy: "Under each heading, add the matching media tag." },
      { title: "Finish", copy: "Each finished section turns green before the full mission unlocks." }
    ],
    mission: "Step 1: keep three <code>&lt;h2&gt;</code> headings. Step 2: under Image add one <code>&lt;img&gt;</code>. Step 3: under Audio add one <code>&lt;audio&gt;</code>. Step 4: under Video add one <code>&lt;video&gt;</code>.",
    previewScaffold: "<style>.portfolio-checklist{display:grid;gap:8px;margin-bottom:14px}.portfolio-check{padding:10px 12px;border-radius:12px;background:#0f172a;color:#cbd5e1;border:1px solid #334155}.portfolio-check.done{border-color:#22c55e;background:#dcfce7;color:#14532d;font-weight:800}</style>\n<div class=\"portfolio-checklist\"><div id=\"portfolio-headings\" class=\"portfolio-check\">Step 1: Keep the Image, Audio, and Video headings</div><div id=\"portfolio-image\" class=\"portfolio-check\">Step 2: Add one image tag under Image</div><div id=\"portfolio-audio\" class=\"portfolio-check\">Step 3: Add one audio tag under Audio</div><div id=\"portfolio-video\" class=\"portfolio-check\">Step 4: Add one video tag under Video</div></div>\n<script>(function(){const html=document.body.innerHTML;const headingCount=(html.match(/<h2/gi)||[]).length;const headings=document.getElementById('portfolio-headings');const image=document.getElementById('portfolio-image');const audio=document.getElementById('portfolio-audio');const video=document.getElementById('portfolio-video');if(headings)headings.classList.toggle('done',headingCount>=3);if(image)image.classList.toggle('done',/<img\\b/i.test(html));if(audio)audio.classList.toggle('done',/<audio\\b/i.test(html));if(video)video.classList.toggle('done',/<video\\b/i.test(html));})();</script>",
    initialCode: "<h2>Image</h2>\n<!-- Add one image tag under this heading -->\n\n<h2>Audio</h2>\n<!-- Add one audio tag under this heading -->\n\n<h2>Video</h2>\n<!-- Add one video tag under this heading -->",
    validator: `function(code) { const clean = code.replace(/<script[\\s\\S]*?<\\/script>/gi, ''); const headingCount = (clean.match(/<h2\\b/gi) || []).length; return headingCount >= 3 && /<img\\b/i.test(clean) && /<audio\\b/i.test(clean) && /<video\\b/i.test(clean); }`
  },
  {
    title: "21. Media Master Quiz",
    intro: "Finish Lesson 4 with a short five-question checkpoint. Students choose answers with buttons, and the mission unlocks after all five are answered.",
    demoHeading: "This quick quiz reviews the biggest ideas from images, audio, and video.",
    chip: "5-question quiz",
    browserTitle: "media-master-quiz.html",
    demoCode: "Question 1\\nA B C D",
    demoPreview: `<div class="lesson-demo-badges"><span class="lesson-demo-badge">images</span><span class="lesson-demo-badge">alt text</span><span class="lesson-demo-badge">audio</span><span class="lesson-demo-badge">video</span><span class="lesson-demo-badge">autoplay</span></div>`,
    captions: [
      "1. Pick one answer for each question.",
      "2. Your choices save as you go.",
      "3. Answer all five to finish the lesson."
    ],
    tips: [
      { title: "Read", copy: "Take one question at a time." },
      { title: "Pick", copy: "Tap one answer button for each question." },
      { title: "Finish", copy: "The lesson unlocks after all five have an answer." }
    ],
    mission: "Answer all 5 multiple-choice questions. You do not need every answer to be correct to finish the module, but every question must have one choice selected.",
    previewScaffold: "<style>.lesson4-quiz{padding:16px;border-radius:18px;background:linear-gradient(180deg,#0f172a,#111827);border:1px solid #1e3a5f;color:#e2e8f0;margin-bottom:14px}.lesson4-quiz h4{margin:0 0 12px;color:#67e8f9;text-transform:uppercase;letter-spacing:.16em;font-size:11px}.lesson4-quiz-card{padding:12px;border-radius:14px;background:#111827;border:1px solid #334155;margin-top:10px}.lesson4-quiz-card p{margin:0 0 10px;font-weight:700}.lesson4-quiz-options{display:grid;gap:8px}.lesson4-quiz-option{display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:12px;border:1px solid #334155;background:#1e293b;color:#e2e8f0;cursor:pointer;text-align:left}.lesson4-quiz-option.selected{border-color:#22d3ee;background:rgba(34,211,238,.12)}.lesson4-quiz-dot{width:26px;height:26px;border-radius:999px;display:grid;place-items:center;background:#0f172a;color:#67e8f9;font:700 12px/1 monospace}.lesson4-quiz-status{margin-top:12px;color:#93c5fd;font-weight:700}</style>\n<div class=\"lesson4-quiz\"><h4>Media Master Checkpoint</h4><div class=\"lesson4-quiz-card\"><p>1. Which attribute tells the browser which image file to show?</p><div class=\"lesson4-quiz-options\"><button type=\"button\" class=\"lesson4-quiz-option\" data-q=\"1\" data-a=\"A\"><span class=\"lesson4-quiz-dot\">A</span><span>src</span></button><button type=\"button\" class=\"lesson4-quiz-option\" data-q=\"1\" data-a=\"B\"><span class=\"lesson4-quiz-dot\">B</span><span>alt</span></button><button type=\"button\" class=\"lesson4-quiz-option\" data-q=\"1\" data-a=\"C\"><span class=\"lesson4-quiz-dot\">C</span><span>width</span></button></div></div><div class=\"lesson4-quiz-card\"><p>2. What does alt text do when an image does not load?</p><div class=\"lesson4-quiz-options\"><button type=\"button\" class=\"lesson4-quiz-option\" data-q=\"2\" data-a=\"A\"><span class=\"lesson4-quiz-dot\">A</span><span>It changes the image size</span></button><button type=\"button\" class=\"lesson4-quiz-option\" data-q=\"2\" data-a=\"B\"><span class=\"lesson4-quiz-dot\">B</span><span>It gives a helpful description</span></button><button type=\"button\" class=\"lesson4-quiz-option\" data-q=\"2\" data-a=\"C\"><span class=\"lesson4-quiz-dot\">C</span><span>It turns the image into a GIF</span></button></div></div><div class=\"lesson4-quiz-card\"><p>3. Which tag wraps a sound player?</p><div class=\"lesson4-quiz-options\"><button type=\"button\" class=\"lesson4-quiz-option\" data-q=\"3\" data-a=\"A\"><span class=\"lesson4-quiz-dot\">A</span><span>&lt;img&gt;</span></button><button type=\"button\" class=\"lesson4-quiz-option\" data-q=\"3\" data-a=\"B\"><span class=\"lesson4-quiz-dot\">B</span><span>&lt;audio&gt;</span></button><button type=\"button\" class=\"lesson4-quiz-option\" data-q=\"3\" data-a=\"C\"><span class=\"lesson4-quiz-dot\">C</span><span>&lt;video&gt;</span></button></div></div><div class=\"lesson4-quiz-card\"><p>4. Which boolean attribute makes player buttons appear?</p><div class=\"lesson4-quiz-options\"><button type=\"button\" class=\"lesson4-quiz-option\" data-q=\"4\" data-a=\"A\"><span class=\"lesson4-quiz-dot\">A</span><span>controls</span></button><button type=\"button\" class=\"lesson4-quiz-option\" data-q=\"4\" data-a=\"B\"><span class=\"lesson4-quiz-dot\">B</span><span>height</span></button><button type=\"button\" class=\"lesson4-quiz-option\" data-q=\"4\" data-a=\"C\"><span class=\"lesson4-quiz-dot\">C</span><span>poster</span></button></div></div><div class=\"lesson4-quiz-card\"><p>5. Which word tells a video to try to start by itself?</p><div class=\"lesson4-quiz-options\"><button type=\"button\" class=\"lesson4-quiz-option\" data-q=\"5\" data-a=\"A\"><span class=\"lesson4-quiz-dot\">A</span><span>autoplay</span></button><button type=\"button\" class=\"lesson4-quiz-option\" data-q=\"5\" data-a=\"B\"><span class=\"lesson4-quiz-dot\">B</span><span>preview</span></button><button type=\"button\" class=\"lesson4-quiz-option\" data-q=\"5\" data-a=\"C\"><span class=\"lesson4-quiz-dot\">C</span><span>caption</span></button></div></div><div id=\"lesson4-quiz-status\" class=\"lesson4-quiz-status\">Answer all 5 questions to unlock the next button.</div></div>\n<script>(function(){const editor=document.getElementById('code-editor');const status=document.getElementById('lesson4-quiz-status');const buttons=Array.from(document.querySelectorAll('.lesson4-quiz-option'));if(!editor||!status||!buttons.length)return;editor.readOnly=true;editor.style.opacity='0.85';window.lesson4QuizAnswers=window.lesson4QuizAnswers||{};function paint(){buttons.forEach(function(button){button.classList.toggle('selected',window.lesson4QuizAnswers[button.dataset.q]===button.dataset.a);});const answered=Object.keys(window.lesson4QuizAnswers).filter(function(key){return window.lesson4QuizAnswers[key];}).length;status.textContent=answered===5?'All 5 answers are saved. You can go to the next module.':'Answer all 5 questions to unlock the next button. ('+answered+'/5 answered)';if(answered===5){editor.value='<!-- LESSON4_QUIZ:'+['1','2','3','4','5'].map(function(key){return window.lesson4QuizAnswers[key];}).join('')+' -->';editor.dispatchEvent(new Event('input',{bubbles:true}));}}buttons.forEach(function(button){button.addEventListener('click',function(){window.lesson4QuizAnswers[button.dataset.q]=button.dataset.a;paint();});});paint();})();</script>",
    initialCode: "<!-- Answer all 5 quiz questions -->",
    validator: `function(code) { return /LESSON4_QUIZ\\s*:\\s*[A-C]{5}/i.test(code); }`
  }
];

module.exports = modules;
