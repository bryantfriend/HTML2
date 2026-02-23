function finalizeMissionCompletion(payload, newState, oldState, contextData) {
    if (newState.view === 'LESSON' && !newState.isComplete && !oldState.missionCompleted && newState.missionCompleted) {

        // Mission just completed successfully! Clear the timer and unlock the button.
        if (window.missionTimerInterval) {
            clearInterval(window.missionTimerInterval);
        }

        const lesson = window.courseData.lessons[newState.currentLessonIndex];
        const nextBtn = document.getElementById('next-btn');

        nextBtn.disabled = false;
        nextBtn.classList.remove('bg-gray-700', 'text-gray-400', 'cursor-not-allowed', 'opacity-50', 'bg-[var(--neon-cyan)]');
        nextBtn.classList.add('bg-[var(--neon-green)]', 'text-black', 'shadow-[0_0_15px_var(--neon-green)]');

        if (newState.currentModuleIndex === lesson.modules.length - 1) {
            nextBtn.textContent = "MISSION ACCOMPLISHED (FINISH)";
        } else {
            nextBtn.textContent = "MISSION ACCOMPLISHED (NEXT)";
        }

        if (lesson.id === 'intro' && newState.currentModuleIndex === 10) {
            const moduleBody = document.getElementById('module-body');
            if (moduleBody && !document.getElementById('tag-matcher-btn')) {
                const btnHtml = `
                    <div class="mt-6 p-4 border border-[var(--neon-cyan)] rounded-lg bg-[#0f172a]/50 text-center animate-pulse">
                        <p class="text-[var(--neon-cyan)] text-sm font-bold mb-3 uppercase tracking-widest">MINI-GAME UNLOCKED</p>
                        <button id="tag-matcher-btn" onclick="window.open('tag-matcher.html', '_blank')" class="w-full py-3 px-6 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold transition transform hover:scale-105 active:scale-95 text-sm uppercase">🎮 PLAY TAG MATCHER</button>
                    </div>`;
                moduleBody.insertAdjacentHTML('beforeend', btnHtml);
            }
        }
    }
}
