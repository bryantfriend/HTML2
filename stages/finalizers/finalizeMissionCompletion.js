function finalizeMissionCompletion(payload, newState, oldState, contextData) {
    if (newState.view === 'LESSON' && !newState.isComplete && newState.missionCompleted) {
        // Mission just completed successfully! Clear the timer and unlock the button.
        if (window.missionTimerInterval) {
            clearInterval(window.missionTimerInterval);
        }

        const lesson = (window.courseData && window.courseData.lessons) ? window.courseData.lessons[newState.currentLessonIndex] : null;
        if (!lesson) return;

        const nextBtn = document.getElementById('next-btn');
        if (!nextBtn) return;

        // FORCE UNLOCK
        nextBtn.disabled = false;

        // Remove ALL possible 'locked' or 'pulsing' classes to be sure
        nextBtn.classList.remove(
            'bg-gray-700', 'text-gray-400', 'cursor-not-allowed', 'opacity-50',
            'bg-[var(--neon-cyan)]', 'animate-pulse'
        );

        // Add success classes
        nextBtn.classList.add('bg-[var(--neon-green)]', 'text-black', 'shadow-[0_0_15px_var(--neon-green)]');

        if (newState.currentModuleIndex === lesson.modules.length - 1) {
            nextBtn.textContent = "MISSION ACCOMPLISHED (FINISH)";
        } else {
            nextBtn.textContent = "MISSION ACCOMPLISHED (NEXT)";
        }

        // Show "PLAY GAME" button if this is the final module of a lesson that has a game
        if (newState.currentModuleIndex === lesson.modules.length - 1 && lesson.gamePath && lesson.gameTitle) {
            const moduleBody = document.getElementById('module-body');
            const gameBtnId = 'game-unlock-btn';
            if (moduleBody && !document.getElementById(gameBtnId)) {
                const btnHtml = `
                <div class="mt-6 p-4 border border-[var(--neon-cyan)] rounded-lg bg-[#0f172a]/50 text-center animate-pulse">
                    <p class="text-[var(--neon-cyan)] text-sm font-bold mb-3 uppercase tracking-widest">MINI-GAME UNLOCKED</p>
                    <button id="${gameBtnId}" onclick="window.open('${lesson.gamePath}', '_blank')" class="w-full py-3 px-6 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold transition transform hover:scale-105 active:scale-95 text-sm uppercase">🎮 PLAY ${lesson.gameTitle}</button>
                </div>`;
                moduleBody.insertAdjacentHTML('beforeend', btnHtml);
            }
        }
    }
}
