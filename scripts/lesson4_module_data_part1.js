const modules = [
  {
    title: "1. A World of Pictures",
    intro: "Meet your new media mission with a tiny demo instead of a wall of text.",
    demoHeading: "Watch how one image tag turns into a real picture.",
    chip: "image start",
    browserTitle: "my-gallery.html",
    demoCode: "&lt;img src=\"assets/cat-demo.svg\" alt=\"Sleepy cat\"&gt;",
    demoPreview: `<div class="lesson-demo-photo"><div class="lesson-demo-sun"></div><div class="lesson-demo-cat"><span class="lesson-demo-ear left"></span><span class="lesson-demo-ear right"></span><span class="lesson-demo-face"></span><span class="lesson-demo-face-smile"></span></div></div>`,
    captions: [
      "1. We type an &lt;img&gt; tag.",
      "2. The browser finds the picture with <code>src</code>.",
      "3. One image makes the page feel alive."
    ],
    tips: [
      { title: "Watch", copy: "See the tag become a picture." },
      { title: "Type", copy: "Enter a simple image tag in the editor." },
      { title: "Unlock", copy: "The mission clears as soon as your tag appears." }
    ],
    mission: "Copy the demo and type an image tag like <code>&lt;img src=\"assets/cat-demo.svg\" alt=\"A cat\"&gt;</code>.",
    initialCode: "",
    validator: `function(code) { return /<\\s*img\\b/i.test(code) && /\\bsrc\\s*=\\s*['"][^'"]+['"]/i.test(code); }`
  },
  {
    title: "2. The <img> Tag",
    intro: "This is the moment students learn the shape of the image tag. Keep it short, visual, and easy to copy.",
    demoHeading: "The browser only needs the opening image tag.",
    chip: "tag shape",
    browserTitle: "poster-board.html",
    demoCode: "&lt;img&gt;",
    demoPreview: `<div class="lesson-demo-badges"><span class="lesson-demo-badge">self-closing</span><span class="lesson-demo-badge">no end tag</span><span class="lesson-demo-badge">quick insert</span></div>`,
    captions: [
      "1. Start with the tag name.",
      "2. There is no closing &lt;/img&gt; tag here.",
      "3. It is a tiny doorway for pictures."
    ],
    tips: [
      { title: "Spot it", copy: "Focus on the exact tag shape." },
      { title: "Copy", copy: "Type the image tag on its own." },
      { title: "Remember", copy: "No closing tag is needed." }
    ],
    mission: "Type exactly <code>&lt;img&gt;</code>.",
    initialCode: "",
    validator: `function(code) { return /^\\s*<\\s*img\\s*\\/??\\s*>\\s*$/i.test(code); }`
  },
  {
    title: "3. The src Attribute",
    intro: "Now the tag needs directions. Src tells the browser which picture to show, so this mission should end with a real cat in the output.",
    demoHeading: "The source points the image tag to the file.",
    chip: "find file",
    browserTitle: "photo-path.html",
    demoCode: "&lt;img src=\"assets/cat-demo.svg\" alt=\"Cat\"&gt;",
    demoPreview: `<div class="lesson-demo-photo"><div class="lesson-demo-sun"></div><div class="lesson-demo-cat"><span class="lesson-demo-ear left"></span><span class="lesson-demo-ear right"></span><span class="lesson-demo-face"></span><span class="lesson-demo-face-smile"></span></div></div>`,
    captions: [
      "1. Add the <code>src</code> attribute inside the tag.",
      "2. Put the file name in quotes.",
      "3. The browser knows which image to load."
    ],
    tips: [
      { title: "Find", copy: "Tell the browser the file name." },
      { title: "Quote it", copy: "Wrap the file name in quotes." },
      { title: "Test", copy: "Your mission unlocks when src is present." }
    ],
    mission: "Add <code>src=\"assets/cat-demo.svg\"</code> to the challenge image so the output shows the cat.",
    previewScaffold: "<div style=\"padding:12px;border:1px solid #1e3a5f;border-radius:16px;background:#0f172a;color:#cbd5e1;margin-bottom:12px;\"><p style=\"margin:0 0 10px;font-weight:700;color:#67e8f9;\">Reference cat</p><img src=\"assets/cat-demo.svg\" alt=\"Reference cat\" width=\"120\"></div>",
    initialCode: "<img data-challenge=\"src-cat\" alt=\"My cat friend\">",
    validator: `function(code) { return /<img\\b[^>]*\\bsrc\\s*=\\s*['"]assets\\/cat-demo\\.svg['"][^>]*>/i.test(code); }`
  },
  {
    title: "4. Let's add a Cat!",
    intro: "Time for the first full win: write the whole image tag and make the page display a cat.",
    demoHeading: "A full image tag creates a real photo moment.",
    chip: "full tag",
    browserTitle: "cat-card.html",
    demoCode: "&lt;img src=\"assets/cat-demo.svg\" alt=\"Happy cat\"&gt;",
    demoPreview: `<div class="lesson-demo-photo"><div class="lesson-demo-sun"></div><div class="lesson-demo-cat"><span class="lesson-demo-ear left"></span><span class="lesson-demo-ear right"></span><span class="lesson-demo-face"></span><span class="lesson-demo-face-smile"></span></div></div>`,
    captions: [
      "1. Open the image tag.",
      "2. Add a source and a short description.",
      "3. The cat pops into the page."
    ],
    tips: [
      { title: "Assemble", copy: "Use one complete image tag." },
      { title: "Describe", copy: "Give the cat helpful alt text." },
      { title: "Win", copy: "A complete image tag unlocks the mission." }
    ],
    mission: "Write the full image tag with a source.",
    initialCode: "",
    validator: `function(code) { return /<\\s*img\\b/i.test(code) && /\\bsrc\\s*=\\s*['"][^'"]+['"]/i.test(code); }`
  },
  {
    title: "5. Broken Images",
    intro: "A wrong file path makes the browser shrug. This demo shows what happens when the source is misspelled.",
    demoHeading: "A broken file path means no picture appears.",
    chip: "debug mode",
    browserTitle: "oops-image.html",
    demoCode: "&lt;img src=\"assets/cat-broken.svg\" alt=\"Cat photo\"&gt;",
    demoPreview: `<div class="lesson-demo-broken"></div>`,
    captions: [
      "1. One wrong letter breaks the path.",
      "2. The browser cannot find the image file.",
      "3. That is how broken images happen."
    ],
    tips: [
      { title: "Misspell", copy: "Change the file name on purpose." },
      { title: "Notice", copy: "The preview should fail to load the image." },
      { title: "Learn", copy: "Tiny typos matter in file paths." }
    ],
    mission: "Break the cat image by changing the source to <code>assets/cat-broken.svg</code>.",
    initialCode: "<img data-challenge=\"broken-cat\" src=\"assets/cat-demo.svg\" alt=\"Cat photo\" width=\"190\">",
    validator: `function(code) { return /<img\\b(?=[^>]*data-challenge\\s*=\\s*['"]broken-cat['"])(?=[^>]*src\\s*=\\s*['"]assets\\/cat-broken\\.svg['"])[^>]*>/i.test(code); }`
  },
  {
    title: "6. The alt Attribute",
    intro: "Great websites still communicate even when the picture is missing. Alt gives the image a backup description.",
    demoHeading: "Alt text tells people what the picture is meant to show.",
    chip: "accessibility",
    browserTitle: "friendly-alt.html",
    demoCode: "&lt;img src=\"cat.jpg\" alt=\"A cute cat\"&gt;",
    demoPreview: `<div class="lesson-demo-altcard">A cute cat</div>`,
    captions: [
      "1. Add the <code>alt</code> attribute to the tag.",
      "2. Write a short, helpful description.",
      "3. Screen readers and broken images both benefit."
    ],
    tips: [
      { title: "Support", copy: "Alt text helps every visitor." },
      { title: "Describe", copy: "Keep the words short and clear." },
      { title: "Add it", copy: "Your mission unlocks when alt is included." }
    ],
    mission: "Add <code>alt=\"A cute cat\"</code> to the image tag.",
    initialCode: "<img src=\"cat.jpg\">",
    validator: `function(code) { return /<\\s*img\\b/i.test(code) && /\\balt\\s*=\\s*['"][^'"]+['"]/i.test(code); }`
  },
  {
    title: "7. Alt text in action",
    intro: "Now combine the two ideas in a clearer way: break the image path on purpose, but keep the alt text so the page still explains the picture.",
    demoHeading: "Even a broken image can still tell the story.",
    chip: "backup plan",
    browserTitle: "alt-saves-day.html",
    demoCode: "&lt;img src=\"assets/cat-glitch.svg\" alt=\"Fluffy cat\"&gt;",
    demoPreview: `<div class="lesson-demo-altcard">Fluffy cat</div>`,
    captions: [
      "1. Break the source on purpose.",
      "2. Keep the alt text helpful.",
      "3. Visitors still understand the content."
    ],
    tips: [
      { title: "Break it", copy: "Change the source so the file cannot be found." },
      { title: "Keep alt", copy: "Leave the words Fluffy cat in place." },
      { title: "See it", copy: "The alt text becomes the fallback message." }
    ],
    mission: "Change the source so the picture breaks, but keep <code>alt=\"Fluffy cat\"</code> on the image.",
    initialCode: "<img data-challenge=\"alt-save\" src=\"assets/cat-demo.svg\" alt=\"Fluffy cat\" width=\"190\">",
    validator: `function(code) { const tag = code.match(/<img\\b[^>]*data-challenge\\s*=\\s*['"]alt-save['"][^>]*>/i); if (!tag) return false; const src = tag[0].match(/\\bsrc\\s*=\\s*['"]([^'"]+)['"]/i); const alt = tag[0].match(/\\balt\\s*=\\s*['"]([^'"]+)['"]/i); return !!src && !!alt && alt[1].trim().toLowerCase() === 'fluffy cat' && !/^assets\\/cat-demo\\.svg$/i.test(src[1].trim()); }`
  },
  {
    title: "8. The width Attribute",
    intro: "Images need sizing too. Width lets you choose how wide the picture should appear.",
    demoHeading: "Width shrinks or expands the image across the page.",
    chip: "size control",
    browserTitle: "width-demo.html",
    demoCode: "&lt;img src=\"cat.jpg\" width=\"100\"&gt;",
    demoPreview: `<div class="lesson-demo-resize"><div class="lesson-demo-size-box medium" data-size="default"></div><div class="lesson-demo-size-box small" data-size="100px"></div></div>`,
    captions: [
      "1. Add the width attribute in pixels.",
      "2. Smaller width means a smaller picture.",
      "3. The browser scales it for you."
    ],
    tips: [
      { title: "Resize", copy: "Use width to control the image size." },
      { title: "Pixel count", copy: "Set it to 100 for this task." },
      { title: "Unlock", copy: "The mission checks for width=100 while the slider lets you experiment." }
    ],
    mission: "Add <code>width=\"100\"</code> to the image tag.",
    previewScaffold: "<style>.width-lab{padding:14px;border-radius:16px;background:#0f172a;color:#e2e8f0;border:1px solid #1e3a5f;margin-bottom:14px}.width-lab input{width:100%}.width-lab img{display:block;margin:14px auto 0;transition:width .2s ease}</style>\n<div class=\"width-lab\"><label for=\"width-slider-demo\">Width slider</label><input id=\"width-slider-demo\" type=\"range\" min=\"80\" max=\"340\" value=\"180\"><p id=\"width-slider-readout\">Current width: 180px</p></div>\n<script>(function(){const slider=document.getElementById('width-slider-demo');const img=document.getElementById('width-slider-cat');const readout=document.getElementById('width-slider-readout');if(!slider||!img||!readout)return;const start=parseInt(img.getAttribute('width')||'180',10);slider.value=start;function paint(){img.style.width=slider.value+'px';readout.textContent='Current width: '+slider.value+'px';}slider.addEventListener('input',paint);paint();})();</script>",
    initialCode: "<img id=\"width-slider-cat\" data-challenge=\"width-cat\" src=\"assets/cat-demo.svg\" alt=\"Width cat demo\">",
    validator: `function(code) { return /<img\\b(?=[^>]*data-challenge\\s*=\\s*['"]width-cat['"])(?=[^>]*width\\s*=\\s*['"]100['"])[^>]*>/i.test(code); }`
  },
  {
    title: "9. The height Attribute",
    intro: "You can also control height, though it can stretch the image if you are not careful.",
    demoHeading: "Height changes how tall the image stands.",
    chip: "height tool",
    browserTitle: "height-demo.html",
    demoCode: "&lt;img src=\"cat.jpg\" height=\"300\"&gt;",
    demoPreview: `<div class="lesson-demo-resize"><div class="lesson-demo-size-box medium" data-size="default"></div><div class="lesson-demo-size-box tall" data-size="300px"></div></div>`,
    captions: [
      "1. Add the height attribute in pixels.",
      "2. Taller height makes the picture stretch upward.",
      "3. That is why width-only sizing is often safer."
    ],
    tips: [
      { title: "Adjust", copy: "Use height to change the image vertically." },
      { title: "Type it", copy: "Set the value to 300." },
      { title: "Notice", copy: "Height can change the image shape, and the slider lets you test it live." }
    ],
    mission: "Add <code>height=\"300\"</code>.",
    previewScaffold: "<style>.height-lab{padding:14px;border-radius:16px;background:#0f172a;color:#e2e8f0;border:1px solid #1e3a5f;margin-bottom:14px}.height-lab input{width:100%}.height-lab img{display:block;margin:14px auto 0;transition:height .2s ease;width:180px;object-fit:cover}</style>\n<div class=\"height-lab\"><label for=\"height-slider-demo\">Height slider</label><input id=\"height-slider-demo\" type=\"range\" min=\"80\" max=\"340\" value=\"180\"><p id=\"height-slider-readout\">Current height: 180px</p></div>\n<script>(function(){const slider=document.getElementById('height-slider-demo');const img=document.getElementById('height-slider-cat');const readout=document.getElementById('height-slider-readout');if(!slider||!img||!readout)return;const start=parseInt(img.getAttribute('height')||'180',10);slider.value=start;function paint(){img.style.height=slider.value+'px';readout.textContent='Current height: '+slider.value+'px';}slider.addEventListener('input',paint);paint();})();</script>",
    initialCode: "<img id=\"height-slider-cat\" data-challenge=\"height-cat\" src=\"assets/cat-demo.svg\" alt=\"Height cat demo\">",
    validator: `function(code) { return /<img\\b(?=[^>]*data-challenge\\s*=\\s*['"]height-cat['"])(?=[^>]*height\\s*=\\s*['"]300['"])[^>]*>/i.test(code); }`
  },
  {
    title: "10. Squished Cat",
    intro: "Here is the silly version. Give the image a huge width and tiny height to see how stretching works.",
    demoHeading: "Mismatched width and height can squish the image.",
    chip: "fun distortion",
    browserTitle: "squish-lab.html",
    demoCode: "&lt;img src=\"cat.jpg\" width=\"500\" height=\"50\"&gt;",
    demoPreview: `<div class="lesson-demo-resize"><div class="lesson-demo-size-box medium" data-size="200x200"></div><div class="lesson-demo-size-box squish" data-size="500x50"></div></div>`,
    captions: [
      "1. Use a very wide width.",
      "2. Pair it with a tiny height.",
      "3. The cat gets hilariously squished."
    ],
    tips: [
      { title: "Play", copy: "This mission is meant to look weird." },
      { title: "Match", copy: "Set both width and height exactly." },
      { title: "Observe", copy: "Stretching changes the image proportions." }
    ],
    mission: "Use both sliders, then set the challenge image to <code>width=\"500\"</code> and <code>height=\"50\"</code>.",
    previewScaffold: "<style>.squish-lab{padding:14px;border-radius:16px;background:#0f172a;color:#e2e8f0;border:1px solid #1e3a5f;margin-bottom:14px}.squish-lab label{display:block;margin-top:8px}.squish-lab input{width:100%}.squish-lab img{display:block;margin:14px auto 0;transition:width .2s ease,height .2s ease;object-fit:fill}</style>\n<div class=\"squish-lab\"><label for=\"squish-width-slider\">Width slider</label><input id=\"squish-width-slider\" type=\"range\" min=\"80\" max=\"500\" value=\"200\"><label for=\"squish-height-slider\">Height slider</label><input id=\"squish-height-slider\" type=\"range\" min=\"50\" max=\"320\" value=\"200\"><p id=\"squish-readout\">Current size: 200 x 200</p></div>\n<script>(function(){const widthSlider=document.getElementById('squish-width-slider');const heightSlider=document.getElementById('squish-height-slider');const img=document.getElementById('squish-cat');const readout=document.getElementById('squish-readout');if(!widthSlider||!heightSlider||!img||!readout)return;widthSlider.value=parseInt(img.getAttribute('width')||'200',10);heightSlider.value=parseInt(img.getAttribute('height')||'200',10);function paint(){img.style.width=widthSlider.value+'px';img.style.height=heightSlider.value+'px';readout.textContent='Current size: '+widthSlider.value+' x '+heightSlider.value;}widthSlider.addEventListener('input',paint);heightSlider.addEventListener('input',paint);paint();})();</script>",
    initialCode: "<img id=\"squish-cat\" data-challenge=\"squish-cat\" src=\"assets/cat-demo.svg\" alt=\"Squish cat demo\" width=\"200\" height=\"200\">",
    validator: `function(code) { return /<img\\b(?=[^>]*data-challenge\\s*=\\s*['"]squish-cat['"])(?=[^>]*width\\s*=\\s*['"]500['"])(?=[^>]*height\\s*=\\s*['"]50['"])[^>]*>/i.test(code); }`
  }
];

module.exports = modules;
