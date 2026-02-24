function finalizeCompleteLesson(payload, newState, oldState, contextData) {
    if (newState.view === 'LESSON' && newState.isComplete) {
        document.getElementById('menu-view').classList.add('hidden');
        document.getElementById('lesson-view').classList.add('hidden');
        document.getElementById('lesson-view').classList.remove('grid');
        document.getElementById('completion-view').classList.remove('hidden');

        document.getElementById('header-controls').classList.add('hidden');
        document.getElementById('mission-subtitle').textContent = "MISSION_ACCOMPLISHED";

        const lesson = window.courseData.lessons[newState.currentLessonIndex];
        let specialIntroComplete = "";
        if (lesson && lesson.id === 'intro' && window.lessonEmoji) {
            specialIntroComplete = `<div class="mb-6 text-6xl animate-bounce">${window.lessonEmoji}</div><p class="text-[var(--neon-pink)] font-bold text-2xl mb-8">Please show your teacher this screen to get credit for this lesson.</p>`;
        }

        document.getElementById('completion-content').innerHTML =
            '<div class="text-center py-20 animate-fade-in">' +
            (specialIntroComplete ? specialIntroComplete :
                '<div class="inline-block mb-8 p-6 rounded-full bg-[var(--neon-green)]/20 border-4 border-[var(--neon-green)]">' +
                '<svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="#00ff9d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>' +
                '</div>' +
                '<h2 class="heading-font text-5xl text-white mb-4 glow-text">ACCESS GRANTED</h2>' +
                '<p class="text-[var(--neon-cyan)] code-font text-xl mb-8">Recruit, you have successfully completed the framework.</p>') +
            '<div class="flex flex-col gap-4 items-center">' +
            '<button onclick="window.IntentEngine.run(window.Intents.showMenu, {})" class="w-64 py-4 px-10 bg-[var(--neon-pink)] text-white font-bold rounded-lg heading-font hover:scale-105 transition shadow-[0_0_15px_var(--neon-pink)]">RETURN TO DASHBOARD</button>' +
            (lesson && lesson.id === 'intro' ? '<button onclick="window.location.href=\\\'minigames/tag-matcher/index.html\\\'" class="w-64 py-4 px-10 bg-[var(--neon-cyan)] text-black font-bold rounded-lg heading-font hover:scale-105 transition shadow-[0_0_15px_var(--neon-cyan)]">PLAY TAG MATCHER</button>' : '') +
            '</div>' +
            '</div>';
    }
}
