function finalizeMenuRender(payload, newState, oldState, contextData) {
    if (newState.view === 'MENU') {
        document.getElementById('menu-view').classList.remove('hidden');
        document.getElementById('lesson-view').classList.add('hidden');
        document.getElementById('completion-view').classList.add('hidden');

        document.getElementById('header-controls').classList.add('hidden');
        document.getElementById('mission-subtitle').textContent = "DASHBOARD_ACCESS_GRANTED";

        const grid = document.getElementById('menu-grid');
        grid.innerHTML = '';

        const lessons = window.courseData.lessons;
        for (let i = 0; i < lessons.length; i++) {
            const lesson = lessons[i];

            const card = document.createElement('div');
            card.className = "cyber-card p-6 rounded-xl border-t-4 border-t-[var(--neon-green)] hover:scale-105 transition cursor-pointer flex flex-col justify-between h-48";

            card.innerHTML =
                '<div>' +
                '<h3 class="heading-font text-xl text-[var(--neon-green)] mb-2">' + lesson.title + '</h3>' +
                '<p class="text-sm text-gray-400">' + lesson.description + '</p>' +
                '</div>' +
                '<div class="mt-4 text-xs font-mono text-[var(--neon-cyan)] flex justify-between items-center">' +
                '<span>MODULES: ' + lesson.modules.length + '</span>' +
                '<span class="bg-[var(--neon-cyan)]/20 px-2 py-1 rounded">START &rarr;</span>' +
                '</div>';

            card.onclick = function () {
                window.IntentEngine.run(window.Intents.startLesson, { lessonIndex: i });
            };

            grid.appendChild(card);
        }
    }
}
