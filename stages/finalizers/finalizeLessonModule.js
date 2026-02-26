function finalizeLessonModule(payload, newState, oldState, contextData) {
    if (newState.view === 'LESSON' && !newState.isComplete) {
        const lesson = (window.courseData && window.courseData.lessons) ? window.courseData.lessons[newState.currentLessonIndex] : null;
        if (!lesson) return;

        // 1. Content Re-render Guard (Preserve interactive DOM state)
        const isSameModule = oldState &&
            oldState.view === 'LESSON' &&
            oldState.currentLessonIndex === newState.currentLessonIndex &&
            oldState.currentModuleIndex === newState.currentModuleIndex;

        if (!isSameModule) {
            const mod = lesson.modules[newState.currentModuleIndex];
            if (!mod) return;

            document.getElementById('menu-view').classList.add('hidden');
            document.getElementById('completion-view').classList.add('hidden');
            document.getElementById('lesson-view').classList.remove('hidden');
            document.getElementById('lesson-view').classList.add('grid');

            document.getElementById('header-controls').classList.remove('hidden');
            document.getElementById('back-menu-btn').classList.remove('hidden');
            document.getElementById('progress-container').classList.remove('hidden');

            document.getElementById('mission-subtitle').textContent = "MISSION: " + lesson.title;
            document.getElementById('module-title').textContent = mod.title;
            document.getElementById('module-body').innerHTML = mod.body;
            document.getElementById('svg-display').innerHTML = mod.svg;
            document.getElementById('code-editor').value = mod.initialCode;

            const inputContainer = document.getElementById('code-input-container');
            if (inputContainer) {
                inputContainer.classList.remove('hidden');
            }

            document.getElementById('progress-bar-fill').style.width = mod.progress + '%';
            document.getElementById('progress-text').textContent = mod.progress + '%';

            const prevBtn = document.getElementById('prev-btn');
            if (newState.currentModuleIndex === 0) {
                prevBtn.classList.add('hidden');
            } else {
                prevBtn.classList.remove('hidden');
            }
        }

        // 2. Button State Logic (Always update to ensure sync)
        const nextBtn = document.getElementById('next-btn');

        // Clear any existing timer
        if (window.missionTimerInterval) {
            clearInterval(window.missionTimerInterval);
        }

        if (newState.missionCompleted) {
            nextBtn.disabled = false;
            nextBtn.classList.remove('bg-gray-700', 'text-gray-400', 'cursor-not-allowed', 'opacity-50', 'bg-[var(--neon-cyan)]', 'animate-pulse');
            nextBtn.classList.add('bg-[var(--neon-green)]', 'text-black', 'shadow-[0_0_15px_var(--neon-green)]');

            if (newState.currentModuleIndex === lesson.modules.length - 1) {
                nextBtn.textContent = "MISSION ACCOMPLISHED (FINISH)";
            } else {
                nextBtn.textContent = "MISSION ACCOMPLISHED (NEXT)";
            }
            return;
        }

        // If not complete, lock it and start the bypass timer
        nextBtn.disabled = true;
        nextBtn.classList.remove('bg-[var(--neon-cyan)]', 'text-black', 'bg-[var(--neon-green)]', 'shadow-[0_0_15px_var(--neon-green)]');
        nextBtn.classList.add('bg-gray-700', 'text-gray-400', 'cursor-not-allowed', 'opacity-50');
        nextBtn.textContent = "NEXT MISSION (LOCKED)";

        let timeLeft = 60;
        function updateTimerUI() {
            if (timeLeft > 0) {
                nextBtn.textContent = "AWAITING CODE: " + timeLeft + "s";
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
        updateTimerUI();
        window.missionTimerInterval = setInterval(updateTimerUI, 1000);
    }
}
