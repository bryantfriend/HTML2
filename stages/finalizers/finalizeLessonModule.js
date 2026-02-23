function finalizeLessonModule(payload, newState, oldState, contextData) {
    if (newState.view === 'LESSON' && !newState.isComplete) {
        document.getElementById('menu-view').classList.add('hidden');
        document.getElementById('completion-view').classList.add('hidden');
        document.getElementById('lesson-view').classList.remove('hidden');
        document.getElementById('lesson-view').classList.add('grid');

        document.getElementById('header-controls').classList.remove('hidden');
        document.getElementById('back-menu-btn').classList.remove('hidden');
        document.getElementById('progress-container').classList.remove('hidden');

        const lesson = window.courseData.lessons[newState.currentLessonIndex];
        const mod = lesson.modules[newState.currentModuleIndex];

        document.getElementById('mission-subtitle').textContent = "MISSION: " + lesson.title;
        document.getElementById('module-title').textContent = mod.title;
        document.getElementById('module-body').innerHTML = mod.body;
        document.getElementById('svg-display').innerHTML = mod.svg;
        document.getElementById('code-editor').value = mod.initialCode;

        const inputContainer = document.getElementById('code-input-container');
        if (inputContainer) {
            if (mod.initialCode.includes('<!-- INTERACTIVE MODULE -->')) {
                inputContainer.classList.add('hidden');
            } else {
                inputContainer.classList.remove('hidden');
            }
        }

        document.getElementById('progress-bar-fill').style.width = mod.progress + '%';
        document.getElementById('progress-text').textContent = mod.progress + '%';

        const prevBtn = document.getElementById('prev-btn');
        if (newState.currentModuleIndex === 0) {
            prevBtn.classList.add('hidden');
        } else {
            prevBtn.classList.remove('hidden');
        }

        const nextBtn = document.getElementById('next-btn');
        nextBtn.disabled = true;
        nextBtn.classList.remove('bg-[var(--neon-cyan)]', 'text-black', 'bg-[var(--neon-green)]');
        nextBtn.classList.add('bg-gray-700', 'text-gray-400', 'cursor-not-allowed', 'opacity-50');

        if (window.missionTimerInterval) {
            clearInterval(window.missionTimerInterval);
        }

        let timeLeft = 60;

        function updateTimerUI() {
            if (timeLeft > 0) {
                if (newState.currentModuleIndex === lesson.modules.length - 1) {
                    nextBtn.textContent = "AWAITING CODE: " + timeLeft + "s";
                } else {
                    nextBtn.textContent = "AWAITING CODE: " + timeLeft + "s";
                }
                timeLeft--;
            } else {
                clearInterval(window.missionTimerInterval);
                nextBtn.disabled = false;
                nextBtn.classList.remove('bg-gray-700', 'text-gray-400', 'cursor-not-allowed', 'opacity-50');
                nextBtn.classList.add('bg-[var(--neon-cyan)]', 'text-black');

                if (newState.currentModuleIndex === lesson.modules.length - 1) {
                    nextBtn.textContent = "BYPASS GRANTED (FINISH)";
                } else {
                    nextBtn.textContent = "BYPASS GRANTED (NEXT)";
                }
            }
        }

        // Run immediately once, then interval
        updateTimerUI();
        window.missionTimerInterval = setInterval(updateTimerUI, 1000);

        // If there's no validator for this module, just autocomplete it immediately via a mock ping
        if (!mod.validator || typeof mod.validator !== 'function') {
            window.IntentEngine.run(window.Intents.updatePreview, { code: mod.initialCode });
        }
    }
}
