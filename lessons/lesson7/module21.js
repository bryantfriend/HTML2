window.Lessons.lesson7.modules[20] = {
    title: "21. CSS Master Quiz",
    body: `<p>Finish Lesson 7 with a short five-question checkpoint on everything you learned about CSS!</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Answer all 5 multiple-choice questions. You do not need every answer to be correct to finish the module, but every question must have one choice selected.</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" style="background:#0f172a; border-radius:8px;">
    <text x="120" y="80" fill="#22d3ee" font-family="monospace" font-size="28" font-weight="bold" text-anchor="middle">QUIZ TIME</text>
    <path d="M 90,100 L 110,120 L 160,70" stroke="#4ade80" stroke-width="6" fill="none">
        <animate attributeName="stroke-dasharray" values="0,100;100,0" dur="2s" repeatCount="indefinite"/>
    </path>
</svg>`,
    widgetCode: `<!-- INTERACTIVE MODULE -->
<style>
.lesson4-quiz{padding:16px;border-radius:18px;background:linear-gradient(180deg,#0f172a,#111827);border:1px solid #1e3a5f;color:#e2e8f0;margin-bottom:14px; max-height:600px; overflow-y:auto;}
.lesson4-quiz h4{margin:0 0 12px;color:#67e8f9;text-transform:uppercase;letter-spacing:.16em;font-size:11px}
.lesson4-quiz-card{padding:12px;border-radius:14px;background:#111827;border:1px solid #334155;margin-top:10px}
.lesson4-quiz-card p{margin:0 0 10px;font-weight:700; font-size:14px;}
.lesson4-quiz-options{display:grid;gap:8px}
.lesson4-quiz-option{display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:12px;border:1px solid #334155;background:#1e293b;color:#e2e8f0;cursor:pointer;text-align:left; font-size:13px; font-family:monospace;}
.lesson4-quiz-option.selected{border-color:#22d3ee;background:rgba(34,211,238,.12)}
.lesson4-quiz-dot{width:26px;height:26px;flex-shrink:0; border-radius:999px;display:grid;place-items:center;background:#0f172a;color:#67e8f9;font:700 12px/1 monospace}
.lesson4-quiz-status{margin-top:12px;color:#93c5fd;font-weight:700; font-size:13px;}
</style>`,
    hiddenWidgetCode: true,
    previewScaffold: `<div class="lesson4-quiz">
    <h4>CSS Master Checkpoint</h4>
    <div class="lesson4-quiz-card">
        <p>1. What does CSS stand for?</p>
        <div class="lesson4-quiz-options">
            <button type="button" class="lesson4-quiz-option" data-q="1" data-a="A"><span class="lesson4-quiz-dot">A</span><span>Cyber Style System</span></button>
            <button type="button" class="lesson4-quiz-option" data-q="1" data-a="B"><span class="lesson4-quiz-dot">B</span><span>Cascading Style Sheets</span></button>
            <button type="button" class="lesson4-quiz-option" data-q="1" data-a="C"><span class="lesson4-quiz-dot">C</span><span>Computer Syntax Sheets</span></button>
        </div>
    </div>
    <div class="lesson4-quiz-card">
        <p>2. Which symbol is used in CSS to target an ID?</p>
        <div class="lesson4-quiz-options">
            <button type="button" class="lesson4-quiz-option" data-q="2" data-a="A"><span class="lesson4-quiz-dot">A</span><span>The period (.)</span></button>
            <button type="button" class="lesson4-quiz-option" data-q="2" data-a="B"><span class="lesson4-quiz-dot">B</span><span>The hashtag (#)</span></button>
            <button type="button" class="lesson4-quiz-option" data-q="2" data-a="C"><span class="lesson4-quiz-dot">C</span><span>The brackets ({ })</span></button>
        </div>
    </div>
    <div class="lesson4-quiz-card">
        <p>3. Which symbol is used in CSS to target a Class?</p>
        <div class="lesson4-quiz-options">
            <button type="button" class="lesson4-quiz-option" data-q="3" data-a="A"><span class="lesson4-quiz-dot">A</span><span>The period (.)</span></button>
            <button type="button" class="lesson4-quiz-option" data-q="3" data-a="B"><span class="lesson4-quiz-dot">B</span><span>The asterisk (*)</span></button>
            <button type="button" class="lesson4-quiz-option" data-q="3" data-a="C"><span class="lesson4-quiz-dot">C</span><span>The colon (:)</span></button>
        </div>
    </div>
    <div class="lesson4-quiz-card">
        <p>4. Which CSS property changes the thickness of text?</p>
        <div class="lesson4-quiz-options">
            <button type="button" class="lesson4-quiz-option" data-q="4" data-a="A"><span class="lesson4-quiz-dot">A</span><span>font-size</span></button>
            <button type="button" class="lesson4-quiz-option" data-q="4" data-a="B"><span class="lesson4-quiz-dot">B</span><span>font-weight</span></button>
            <button type="button" class="lesson4-quiz-option" data-q="4" data-a="C"><span class="lesson4-quiz-dot">C</span><span>font-style</span></button>
        </div>
    </div>
    <div class="lesson4-quiz-card">
        <p>5. Which CSS property rounds the sharp corners of a box?</p>
        <div class="lesson4-quiz-options">
            <button type="button" class="lesson4-quiz-option" data-q="5" data-a="A"><span class="lesson4-quiz-dot">A</span><span>margin</span></button>
            <button type="button" class="lesson4-quiz-option" data-q="5" data-a="B"><span class="lesson4-quiz-dot">B</span><span>border-radius</span></button>
            <button type="button" class="lesson4-quiz-option" data-q="5" data-a="C"><span class="lesson4-quiz-dot">C</span><span>padding</span></button>
        </div>
    </div>
    <div id="lesson4-quiz-status" class="lesson4-quiz-status">Answer all 5 questions to unlock the next button.</div>
</div>
<script>
(function(){
    const editor=document.getElementById('code-editor');
    const status=document.getElementById('lesson4-quiz-status');
    const buttons=Array.from(document.querySelectorAll('.lesson4-quiz-option'));
    if(!editor||!status||!buttons.length)return;
    editor.readOnly=true;
    editor.style.opacity='0.85';
    window.lesson7QuizAnswers=window.lesson7QuizAnswers||{};
    function paint(){
        buttons.forEach(function(button){
            button.classList.toggle('selected',window.lesson7QuizAnswers[button.dataset.q]===button.dataset.a);
        });
        const answered=Object.keys(window.lesson7QuizAnswers).filter(function(key){return window.lesson7QuizAnswers[key];}).length;
        status.textContent=answered===5?'All 5 answers are saved. You can go to the next module.':'Answer all 5 questions to unlock the next button. ('+answered+'/5 answered)';
        if(answered===5){
            editor.value='<!-- QUIZ_COMPLETE:'+['1','2','3','4','5'].map(function(key){return window.lesson7QuizAnswers[key];}).join('')+' -->';
            if (window.IntentEngine && window.Intents) {
                window.IntentEngine.run(window.Intents.updatePreview, { code: editor.value });
            } else {
                editor.dispatchEvent(new Event('input',{bubbles:true}));
            }
        }
    }
    buttons.forEach(function(button){
        button.addEventListener('click',function(){
            window.lesson7QuizAnswers[button.dataset.q]=button.dataset.a;
            paint();
        });
    });
    paint();
})();
</script>`,
    initialCode: `<!-- Answer all 5 quiz questions -->`,
    hideVisualPanel: true,
    preserveCode: false,
    progress: 100,
    validator: function(code) { return /QUIZ_COMPLETE\s*:\s*[A-C]{5}/i.test(code); }
};
