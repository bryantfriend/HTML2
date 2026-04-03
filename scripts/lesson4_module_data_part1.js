function buildSingleSliderScaffold(config) {
  const dimensionStyle = config.attr === "width" ? "height:auto;" : "width:180px;object-fit:cover;";
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

function buildDualSliderScaffold(config) {
  return `<style>.${config.shellClass}{padding:14px;border-radius:16px;background:#0f172a;color:#e2e8f0;border:1px solid #1e3a5f;margin-bottom:14px}.${config.shellClass} label{display:block;margin-top:8px}.${config.shellClass} input{width:100%}.${config.shellClass} img{display:block;margin:14px auto 0;transition:width .2s ease,height .2s ease;object-fit:fill}</style>
<div class="${config.shellClass}">
  <label for="${config.widthId}">Width slider</label>
  <input id="${config.widthId}" type="range" min="${config.widthMin}" max="${config.widthMax}" value="${config.widthStart}">
  <label for="${config.heightId}">Height slider</label>
  <input id="${config.heightId}" type="range" min="${config.heightMin}" max="${config.heightMax}" value="${config.heightStart}">
  <p id="${config.readoutId}">Current size: ${config.widthStart} x ${config.heightStart}</p>
</div>
<script>(function(){
  const widthSlider=document.getElementById('${config.widthId}');
  const heightSlider=document.getElementById('${config.heightId}');
  const img=document.getElementById('${config.targetId}');
  const readout=document.getElementById('${config.readoutId}');
  const editor=document.getElementById('code-editor');
  const key='${config.key}';
  if(!widthSlider||!heightSlider||!img||!readout||!editor) return;
  window.lesson4SliderHandlers=window.lesson4SliderHandlers||{};
  if(window.lesson4SliderHandlers[key]) editor.removeEventListener('input', window.lesson4SliderHandlers[key]);
  function clamp(value,min,max,fallback){
    const number=parseInt(value,10);
    if(Number.isNaN(number)) return fallback;
    return Math.max(min, Math.min(max, number));
  }
  function paint(width,height){
    const safeWidth=clamp(width,${config.widthMin},${config.widthMax},${config.widthStart});
    const safeHeight=clamp(height,${config.heightMin},${config.heightMax},${config.heightStart});
    img.style.width=safeWidth+'px';
    img.style.height=safeHeight+'px';
    widthSlider.value=safeWidth;
    heightSlider.value=safeHeight;
    readout.textContent='Current size: '+safeWidth+' x '+safeHeight;
  }
  function replaceAttrs(width,height){
    const regex=/(<img\\b[^>]*data-challenge\\s*=\\s*["']${config.challengeId}["'][^>]*)(>)/i;
    let next=editor.value.replace(regex,function(match,start,end){
      const widthRegex=/\\bwidth\\s*=\\s*["']?\\d+["']?/i;
      const heightRegex=/\\bheight\\s*=\\s*["']?\\d+["']?/i;
      let updated=start;
      updated=widthRegex.test(updated)?updated.replace(widthRegex,'width="'+width+'"'):updated+' width="'+width+'"';
      updated=heightRegex.test(updated)?updated.replace(heightRegex,'height="'+height+'"'):updated+' height="'+height+'"';
      return updated+end;
    });
    if(next!==editor.value){
      editor.value=next;
      window.IntentEngine.run(window.Intents.updatePreview,{code:editor.value});
    }
  }
  function syncFromCode(){
    const tagMatch=editor.value.match(new RegExp('<img\\\\b[^>]*data-challenge\\\\s*=\\\\s*["\\']'+config.challengeId+'["\\'][^>]*>','i'));
    if(!tagMatch) return;
    const widthMatch=tagMatch[0].match(/\bwidth\s*=\s*["']?(\d+)["']?/i);
    const heightMatch=tagMatch[0].match(/\bheight\s*=\s*["']?(\d+)["']?/i);
    if(widthMatch || heightMatch){
      paint(widthMatch?widthMatch[1]:widthSlider.value,heightMatch?heightMatch[1]:heightSlider.value);
    }
  }
  widthSlider.addEventListener('input',function(){ paint(widthSlider.value,heightSlider.value); replaceAttrs(widthSlider.value,heightSlider.value); });
  heightSlider.addEventListener('input',function(){ paint(widthSlider.value,heightSlider.value); replaceAttrs(widthSlider.value,heightSlider.value); });
  window.lesson4SliderHandlers[key]=syncFromCode;
  editor.addEventListener('input', syncFromCode);
  syncFromCode();
  paint(widthSlider.value,heightSlider.value);
})();</script>`;
}

const modules = [
  {
    title: "1. A World of Pictures",
    intro: "Meet your new media mission with a tiny demo and a photo picker so students can play before they type.",
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
    mission: "Click the cat photo chip or type it yourself until the challenge tag shows the cat picture with <code>src=\"assets/cat-demo.svg\"</code>.",
    previewScaffold: "<style>.photo-picker-shell{padding:14px;border-radius:16px;background:#0f172a;color:#e2e8f0;border:1px solid #1e3a5f;margin-bottom:14px}.photo-picker-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px;margin-top:10px}.photo-picker-btn{padding:10px 8px;border-radius:14px;border:1px solid #334155;background:#172033;color:#e2e8f0;font-weight:700;cursor:pointer;transition:transform .18s ease,border-color .18s ease}.photo-picker-btn:hover{transform:translateY(-2px);border-color:#67e8f9}.photo-picker-btn.correct{border-color:#22c55e;background:rgba(34,197,94,.15);color:#dcfce7}</style>\n<div class=\"photo-picker-shell\"><strong>Photo picker mission</strong><p style=\"margin:8px 0 0\">Choose the real cat photo to auto-fill the source, or type the code yourself.</p><div class=\"photo-picker-grid\"><button type=\"button\" id=\"pick-space-cat\" class=\"photo-picker-btn\">Space Cat</button><button type=\"button\" id=\"pick-happy-cat\" class=\"photo-picker-btn\">Happy Cat</button><button type=\"button\" id=\"pick-glitch-cat\" class=\"photo-picker-btn\">Glitch Cat</button></div><p id=\"photo-picker-status\" style=\"margin:10px 0 0;color:#93c5fd\">Tip: the real lesson file is <code>assets/cat-demo.svg</code>.</p></div>\n<script>(function(){const editor=document.getElementById('code-editor');const status=document.getElementById('photo-picker-status');const choices=[['pick-space-cat','assets/space-cat.svg'],['pick-happy-cat','assets/cat-demo.svg'],['pick-glitch-cat','assets/cat-glitch.svg']];if(!editor||!status)return;function applySource(src){const tagRegex=/(<img\\b[^>]*data-challenge\\s*=\\s*[\"']starter-photo[\"'][^>]*)(>)/i;if(tagRegex.test(editor.value)){editor.value=editor.value.replace(tagRegex,function(match,start,end){if(/\\bsrc\\s*=\\s*[\"'][^\"']*[\"']/i.test(start)){return start.replace(/\\bsrc\\s*=\\s*[\"'][^\"']*[\"']/i,'src=\"'+src+'\"')+end;}return start+' src=\"'+src+'\"'+end;});}window.IntentEngine.run(window.Intents.updatePreview,{code:editor.value});const isCorrect=/assets\\/cat-demo\\.svg/i.test(src);status.innerHTML=isCorrect?'Nice choice. The cat source is loaded in the tag.':'That file exists in the demo picker, but the mission wants the real cat file.';choices.forEach(function(entry){const button=document.getElementById(entry[0]);if(button)button.classList.toggle('correct',button.id==='pick-happy-cat'&&isCorrect);});}choices.forEach(function(entry){const button=document.getElementById(entry[0]);if(button)button.addEventListener('click',function(){applySource(entry[1]);});});})();</script>",
    initialCode: "<img data-challenge=\"starter-photo\" alt=\"Class cat\">",
    validator: `function(code) { return /<img\\b(?=[^>]*data-challenge\\s*=\\s*['"]starter-photo['"])(?=[^>]*src\\s*=\\s*['"]assets\\/cat-demo\\.svg['"])[^>]*>/i.test(code); }`
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
    intro: "Time for the first full win: build the cat tag piece by piece instead of plain copying.",
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
    mission: "Use the build buttons or type the code to create one full cat image tag with the correct source and helpful alt text.",
    previewScaffold: "<style>.cat-build-shell{padding:14px;border-radius:16px;background:#0f172a;color:#e2e8f0;border:1px solid #1e3a5f;margin-bottom:14px}.cat-build-row{display:flex;flex-wrap:wrap;gap:8px;margin-top:10px}.cat-build-btn{padding:10px 12px;border-radius:999px;border:1px solid #334155;background:#172033;color:#e2e8f0;font-weight:700;cursor:pointer;transition:transform .18s ease,border-color .18s ease}.cat-build-btn:hover{transform:translateY(-2px);border-color:#67e8f9}</style>\n<div class=\"cat-build-shell\"><strong>Build the tag</strong><p style=\"margin:8px 0 0\">Press a helper button to add one part, then finish the rest in the code box.</p><div class=\"cat-build-row\"><button type=\"button\" id=\"cat-build-src\" class=\"cat-build-btn\">Add src</button><button type=\"button\" id=\"cat-build-alt\" class=\"cat-build-btn\">Add alt</button><button type=\"button\" id=\"cat-build-width\" class=\"cat-build-btn\">Add width</button></div><p id=\"cat-build-status\" style=\"margin:10px 0 0;color:#93c5fd\">Goal: a complete cat tag that shows the picture.</p></div>\n<script>(function(){const editor=document.getElementById('code-editor');const status=document.getElementById('cat-build-status');if(!editor||!status)return;function updateEditor(transform){editor.value=transform(editor.value||'');window.IntentEngine.run(window.Intents.updatePreview,{code:editor.value});}const actions={src:function(value){if(!/<img\\b/i.test(value)) value='<img data-challenge=\"cat-builder\">';return value.replace(/<img\\b([^>]*)>/i,function(match,attrs){if(/\\bsrc\\s*=/.test(attrs)) return '<img'+attrs.replace(/\\bsrc\\s*=\\s*[\"'][^\"']*[\"']/i,' src=\"assets/cat-demo.svg\"')+'>';return '<img'+attrs+' src=\"assets/cat-demo.svg\">';});},alt:function(value){if(!/<img\\b/i.test(value)) value='<img data-challenge=\"cat-builder\">';return value.replace(/<img\\b([^>]*)>/i,function(match,attrs){if(/\\balt\\s*=/.test(attrs)) return '<img'+attrs.replace(/\\balt\\s*=\\s*[\"'][^\"']*[\"']/i,' alt=\"Happy cat\"')+'>';return '<img'+attrs+' alt=\"Happy cat\">';});},width:function(value){if(!/<img\\b/i.test(value)) value='<img data-challenge=\"cat-builder\">';return value.replace(/<img\\b([^>]*)>/i,function(match,attrs){if(/\\bwidth\\s*=/.test(attrs)) return '<img'+attrs.replace(/\\bwidth\\s*=\\s*[\"'][^\"']*[\"']/i,' width=\"180\"')+'>';return '<img'+attrs+' width=\"180\">';});}};[['cat-build-src','src'],['cat-build-alt','alt'],['cat-build-width','width']].forEach(function(entry){const button=document.getElementById(entry[0]);if(button)button.addEventListener('click',function(){updateEditor(actions[entry[1]]);status.textContent='Nice. That part was added. Finish any missing pieces in the editor.';});});})();</script>",
    initialCode: "<img data-challenge=\"cat-builder\">",
    validator: `function(code) { return /<img\\b(?=[^>]*data-challenge\\s*=\\s*['"]cat-builder['"])(?=[^>]*src\\s*=\\s*['"]assets\\/cat-demo\\.svg['"])(?=[^>]*alt\\s*=\\s*['"][^'"]+['"])[^>]*>/i.test(code); }`
  },
  {
    title: "5. Broken Images",
    intro: "A wrong file path makes the browser shrug. This mission is now a repair game instead of a break-it game.",
    demoHeading: "Repair the file path so the cat comes back.",
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
      { title: "Inspect", copy: "The image starts broken on purpose." },
      { title: "Repair", copy: "Fix the source so the cat returns." },
      { title: "Learn", copy: "Tiny typos matter in file paths." }
    ],
    mission: "Repair the broken image by changing the challenge tag to <code>src=\"assets/cat-demo.svg\"</code>. You can click the repair button or type it yourself.",
    previewScaffold: "<style>.repair-bay{padding:14px;border-radius:16px;background:#0f172a;color:#e2e8f0;border:1px solid #1e3a5f;margin-bottom:14px}.repair-buttons{display:flex;gap:8px;flex-wrap:wrap;margin-top:10px}.repair-btn{padding:10px 12px;border-radius:999px;border:1px solid #334155;background:#172033;color:#e2e8f0;font-weight:700;cursor:pointer}.repair-btn.repair{border-color:#22c55e;color:#dcfce7}.repair-btn:hover{transform:translateY(-1px)}</style>\n<div class=\"repair-bay\"><strong>Repair bay</strong><p style=\"margin:8px 0 0\">The cat image is broken right now. Choose the repair button or type the correct file name in the code box.</p><div class=\"repair-buttons\"><button type=\"button\" id=\"repair-cat-path\" class=\"repair-btn repair\">Repair with assets/cat-demo.svg</button><button type=\"button\" id=\"keep-broken-path\" class=\"repair-btn\">Keep the broken path</button></div><p id=\"repair-cat-status\" style=\"margin:10px 0 0;color:#93c5fd\">Hint: the word <code>broken</code> should disappear from the source.</p></div>\n<script>(function(){const editor=document.getElementById('code-editor');const status=document.getElementById('repair-cat-status');if(!editor||!status)return;function setSource(src){editor.value=editor.value.replace(/(<img\\b[^>]*data-challenge\\s*=\\s*[\"']broken-cat[\"'][^>]*\\bsrc\\s*=\\s*[\"'])[^\"']*([\"'][^>]*>)/i,'$1'+src+'$2');window.IntentEngine.run(window.Intents.updatePreview,{code:editor.value});status.textContent=/cat-demo\\.svg/i.test(src)?'Nice repair. The cat file is back.':'That keeps the picture broken.';}const repair=document.getElementById('repair-cat-path');const broken=document.getElementById('keep-broken-path');if(repair)repair.addEventListener('click',function(){setSource('assets/cat-demo.svg');});if(broken)broken.addEventListener('click',function(){setSource('assets/cat-broken.svg');});})();</script>",
    initialCode: "<img data-challenge=\"broken-cat\" src=\"assets/cat-broken.svg\" alt=\"Cat photo\" width=\"190\">",
    validator: `function(code) { return /<img\\b(?=[^>]*data-challenge\\s*=\\s*['"]broken-cat['"])(?=[^>]*src\\s*=\\s*['"]assets\\/cat-demo\\.svg['"])[^>]*>/i.test(code); }`
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
    intro: "This time the image is already broken. The job is to add a helpful alt message so the page still explains what should be there.",
    demoHeading: "Even when the picture fails, alt text still tells the story.",
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
      { title: "Notice", copy: "The source already points to a missing file." },
      { title: "Add alt", copy: "Type a short message that describes the missing picture." },
      { title: "See it", copy: "The alt text becomes the fallback message." }
    ],
    mission: "The image is already broken. Add <code>alt=\"Fluffy cat\"</code> so the page still explains the missing picture.",
    previewScaffold: "<style>.alt-lab{padding:14px;border-radius:16px;background:#0f172a;color:#e2e8f0;border:1px solid #1e3a5f;margin-bottom:14px}.alt-toggle-row{display:flex;gap:8px;flex-wrap:wrap;margin-top:10px}.alt-toggle-row button{padding:9px 12px;border-radius:999px;border:1px solid #334155;background:#172033;color:#e2e8f0;font-weight:700;cursor:pointer}.alt-stage{margin-top:12px;padding:12px;border-radius:14px;background:#111827;border:1px dashed rgba(103,232,249,.35);min-height:74px;display:grid;place-items:center;text-align:center}</style>\n<div class=\"alt-lab\"><strong>Alt text lab</strong><p style=\"margin:8px 0 0\">Press the toggle buttons to compare a working image and a broken one. Then add the alt words in your challenge tag.</p><div class=\"alt-toggle-row\"><button type=\"button\" id=\"show-working-image\">Show working image</button><button type=\"button\" id=\"show-broken-image\">Show broken image</button></div><div id=\"alt-stage\" class=\"alt-stage\">Broken image view: if no alt text exists, visitors get almost no help.</div></div>\n<script>(function(){const stage=document.getElementById('alt-stage');const working=document.getElementById('show-working-image');const broken=document.getElementById('show-broken-image');if(working&&stage)working.addEventListener('click',function(){stage.innerHTML='<img src=\"assets/cat-demo.svg\" alt=\"Fluffy cat\" width=\"140\">';});if(broken&&stage)broken.addEventListener('click',function(){stage.textContent='Broken image view: alt text like \"Fluffy cat\" tells people what should be here.';});})();</script>",
    initialCode: "<img data-challenge=\"alt-save\" src=\"assets/cat-glitch.svg\" width=\"190\">",
    validator: `function(code) { const tag = code.match(/<img\\b[^>]*data-challenge\\s*=\\s*['"]alt-save['"][^>]*>/i); if (!tag) return false; const alt = tag[0].match(/\\balt\\s*=\\s*['"]([^'"]+)['"]/i); return !!alt && alt[1].trim().toLowerCase() === 'fluffy cat'; }`
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
    previewScaffold: buildSingleSliderScaffold({ shellClass: "width-lab", sliderId: "width-slider-demo", readoutId: "width-slider-readout", targetId: "width-slider-cat", key: "width-cat", label: "Width slider", min: 80, max: 340, start: 180, attr: "width", tagName: "img", challengeId: "width-cat" }),
    initialCode: "<img id=\"width-slider-cat\" data-challenge=\"width-cat\" src=\"assets/cat-demo.svg\" alt=\"Width cat demo\" width=\"180\">",
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
    previewScaffold: buildSingleSliderScaffold({ shellClass: "height-lab", sliderId: "height-slider-demo", readoutId: "height-slider-readout", targetId: "height-slider-cat", key: "height-cat", label: "Height slider", min: 80, max: 340, start: 180, attr: "height", tagName: "img", challengeId: "height-cat" }),
    initialCode: "<img id=\"height-slider-cat\" data-challenge=\"height-cat\" src=\"assets/cat-demo.svg\" alt=\"Height cat demo\" height=\"180\">",
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
    previewScaffold: buildDualSliderScaffold({ shellClass: "squish-lab", widthId: "squish-width-slider", heightId: "squish-height-slider", readoutId: "squish-readout", targetId: "squish-cat", key: "squish-cat", widthMin: 80, widthMax: 500, widthStart: 200, heightMin: 50, heightMax: 320, heightStart: 200, challengeId: "squish-cat" }),
    initialCode: "<img id=\"squish-cat\" data-challenge=\"squish-cat\" src=\"assets/cat-demo.svg\" alt=\"Squish cat demo\" width=\"200\" height=\"200\">",
    validator: `function(code) { return /<img\\b(?=[^>]*data-challenge\\s*=\\s*['"]squish-cat['"])(?=[^>]*width\\s*=\\s*['"]500['"])(?=[^>]*height\\s*=\\s*['"]50['"])[^>]*>/i.test(code); }`
  }
];

module.exports = modules;
