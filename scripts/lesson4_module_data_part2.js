const modules = [
  {
    title: "11. Image Formats",
    intro: "Different file endings tell the browser what kind of image it is loading.",
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
    mission: "Change the source from the cat image to <code>https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif</code> so the output becomes animated.",
    initialCode: "<img data-challenge=\"format-swap\" src=\"assets/cat-demo.svg\" alt=\"Dancing cat\" width=\"220\">",
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
    previewScaffold: "<style>.ultimate-checklist{display:grid;gap:8px;margin-bottom:14px}.ultimate-check{padding:10px 12px;border-radius:12px;background:#0f172a;color:#cbd5e1;border:1px solid #334155;transition:.2s}.ultimate-check.done{border-color:#22c55e;background:rgba(34,197,94,.12);color:#bbf7d0}</style>\n<div class=\"ultimate-checklist\"><div id=\"check-src\" class=\"ultimate-check\">SRC - &lt;img src=\"assets/cat-demo.svg\"</div><div id=\"check-alt\" class=\"ultimate-check\">ALT - alt=\"Cat smiling\"</div><div id=\"check-width\" class=\"ultimate-check\">WIDTH - width=\"200\"</div></div>\n<script>(function(){const img=document.querySelector('img[data-challenge=\"ultimate-image\"]');const checks={src:document.getElementById('check-src'),alt:document.getElementById('check-alt'),width:document.getElementById('check-width')};if(!img||!checks.src||!checks.alt||!checks.width)return;checks.src.classList.toggle('done',img.hasAttribute('src'));checks.alt.classList.toggle('done',img.hasAttribute('alt'));checks.width.classList.toggle('done',img.hasAttribute('width'));})();</script>",
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
    mission: "Add <code>src=\"music.mp3\"</code> to the opening audio tag to load the beat.",
    previewScaffold: "<style>.dj-booth{padding:12px;border-radius:16px;background:#0f172a;border:1px solid #1e3a5f;color:#cbd5e1;margin-bottom:14px}.dj-lights{display:flex;gap:8px;margin-bottom:10px}.dj-lights span{flex:1;height:10px;border-radius:999px;background:linear-gradient(90deg,#22d3ee,#3b82f6);opacity:.45;animation:djPulse 1.2s ease-in-out infinite}.dj-lights span:nth-child(2){animation-delay:.15s}.dj-lights span:nth-child(3){animation-delay:.3s}@keyframes djPulse{0%,100%{transform:scaleX(.7);opacity:.3}50%{transform:scaleX(1);opacity:1}}</style>\n<div class=\"dj-booth\"><div class=\"dj-lights\"><span></span><span></span><span></span></div><p id=\"dj-status\">Add the music source to load the track.</p></div>\n<script>(function(){const audio=document.getElementById('dj-player');const status=document.getElementById('dj-status');if(audio&&status&&/^music\\.mp3$/i.test((audio.getAttribute('src')||'').trim())){audio.src='assets/media-master-tone.wav';status.textContent='Track loaded. Press play!';}})();</script>",
    initialCode: "<audio id=\"dj-player\" data-challenge=\"dj-source\" controls>\n</audio>",
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
    previewScaffold: "<style>.video-start-lab{padding:14px;border-radius:16px;background:linear-gradient(180deg,#0f172a,#111827);border:1px solid #1e3a5f;color:#cbd5e1;margin-bottom:14px}.video-start-lab button{margin-top:10px;padding:10px 14px;border:none;border-radius:999px;background:#22d3ee;color:#082f49;font-weight:700;cursor:pointer}</style>\n<div class=\"video-start-lab\"><strong>Video launch bay</strong><p style=\"margin:8px 0 0\">Type the opening and closing video tags below. Use the button if you want to preview the structure first.</p><button type=\"button\" onclick=\"(function(){const editor=window.parent.document.getElementById('code-editor');const openTag='<'+ 'video>';const closeTag='</'+'video>';if(editor&&!editor.value.toLowerCase().includes('<video')){editor.value+=openTag+'\\n'+closeTag;window.parent.IntentEngine.run(window.parent.Intents.updatePreview,{code:editor.value});}})()\">Insert demo video tag</button></div>",
    initialCode: "",
    validator: `function(code) { return /<\\s*video\\b/i.test(code) && /<\\s*\\/\\s*video\\s*>/i.test(code); }`
  },
  {
    title: "17. Video Source & Controls",
    intro: "Now give the video something to play and buttons to press.",
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
    mission: "Add <code>src=\"movie.mp4\"</code> and <code>controls</code>. When you get it right, the lesson recap movie from YouTube unlocks below.",
    previewScaffold: "<div id=\"movie-unlock\" style=\"padding:14px;border-radius:16px;background:#0f172a;border:1px solid #1e3a5f;color:#cbd5e1;margin-bottom:14px\">Add <strong>src=\"movie.mp4\"</strong> and <strong>controls</strong> to unlock the lesson recap video.</div>\n<script>(function(){const video=document.querySelector('video[data-challenge=\"lesson-movie\"]');const slot=document.getElementById('movie-unlock');if(video&&slot&&/^movie\\.mp4$/i.test((video.getAttribute('src')||'').trim())&&video.hasAttribute('controls')){slot.innerHTML='<iframe width=\"100%\" height=\"220\" src=\"https://www.youtube-nocookie.com/embed/qz0aGYrrlhU\" title=\"HTML lesson recap\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>';}})();</script>",
    initialCode: "<video data-challenge=\"lesson-movie\" width=\"320\"></video>",
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
    previewScaffold: "<style>.video-width-lab{padding:14px;border-radius:16px;background:#0f172a;border:1px solid #1e3a5f;color:#cbd5e1;margin-bottom:14px}.video-width-lab input{width:100%}</style>\n<div class=\"video-width-lab\"><label for=\"video-width-slider\">Video width slider</label><input id=\"video-width-slider\" type=\"range\" min=\"180\" max=\"520\" value=\"320\"><p id=\"video-width-readout\">Current width: 320px</p></div>\n<script>(function(){const slider=document.getElementById('video-width-slider');const video=document.getElementById('video-width-player');const readout=document.getElementById('video-width-readout');if(!slider||!video||!readout)return;const start=parseInt(video.getAttribute('width')||'320',10);slider.value=start;function paint(){video.style.width=slider.value+'px';readout.textContent='Current width: '+slider.value+'px';}slider.addEventListener('input',paint);paint();})();</script>",
    initialCode: "<video id=\"video-width-player\" data-challenge=\"video-width\" src=\"https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4\" controls muted loop playsinline></video>",
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
    mission: "Add <code>autoplay</code> to the video tag so the movie starts by itself once the tag is correct.",
    previewScaffold: "<p id=\"autoplay-status\" style=\"color:#cbd5e1\">Add autoplay to make the video start on its own.</p>\n<script>(function(){const video=document.getElementById('autoplay-player');const status=document.getElementById('autoplay-status');if(video&&status&&video.hasAttribute('autoplay')){video.play().catch(()=>{});status.textContent='Autoplay active: the video is trying to start automatically.';}})();</script>",
    initialCode: "<video id=\"autoplay-player\" data-challenge=\"autoplay-video\" src=\"https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4\" controls width=\"300\" muted loop playsinline>\n</video>",
    validator: `function(code) { const tag = code.match(/<video\\b[^>]*data-challenge\\s*=\\s*['"]autoplay-video['"][^>]*>/i); return !!tag && /(?:\\s|<)autoplay(?=\\s|>)/i.test(tag[0]); }`
  },
  {
    title: "20. The Media Portfolio Challenge",
    intro: "Final boss time. Build one tiny media gallery with image, audio, and video sections all on the same page, and watch the checklist turn green as each piece is finished.",
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
      { title: "Organize", copy: "Use headings so the page feels tidy." },
      { title: "Combine", copy: "You need image, audio, and video tags." },
      { title: "Finish", copy: "Each completed section turns green before the full mission unlocks." }
    ],
    mission: "Create an <code>&lt;h2&gt;</code> for Image, Audio, and Video, then add the three media tags below them.",
    previewScaffold: "<style>.portfolio-checklist{display:grid;gap:8px;margin-bottom:14px}.portfolio-check{padding:10px 12px;border-radius:12px;background:#0f172a;color:#cbd5e1;border:1px solid #334155}.portfolio-check.done{border-color:#22c55e;background:rgba(34,197,94,.12);color:#bbf7d0}</style>\n<div class=\"portfolio-checklist\"><div id=\"portfolio-headings\" class=\"portfolio-check\">Add the Image, Audio, and Video headings</div><div id=\"portfolio-image\" class=\"portfolio-check\">Add an image tag</div><div id=\"portfolio-audio\" class=\"portfolio-check\">Add an audio tag</div><div id=\"portfolio-video\" class=\"portfolio-check\">Add a video tag</div></div>\n<script>(function(){const html=document.body.innerHTML;const headingCount=(html.match(/<h2/gi)||[]).length;const headings=document.getElementById('portfolio-headings');const image=document.getElementById('portfolio-image');const audio=document.getElementById('portfolio-audio');const video=document.getElementById('portfolio-video');if(headings)headings.classList.toggle('done',headingCount>=3);if(image)image.classList.toggle('done',/<img\\b/i.test(html));if(audio)audio.classList.toggle('done',/<audio\\b/i.test(html));if(video)video.classList.toggle('done',/<video\\b/i.test(html));})();</script>",
    initialCode: "<h2>My Image</h2>\n\n<h2>My Song</h2>\n\n<h2>My Movie</h2>",
    validator: `function(code) { const clean = code.replace(/<script[\\s\\S]*?<\\/script>/gi, ''); const headingCount = (clean.match(/<h2\\b/gi) || []).length; return headingCount >= 3 && /<img\\b/i.test(clean) && /<audio\\b/i.test(clean) && /<video\\b/i.test(clean); }`
  }
];

module.exports = modules;
