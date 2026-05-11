function finalizeCompleteLesson(payload, newState, oldState, contextData) {
    if (newState.view === 'LESSON' && newState.isComplete) {
        document.getElementById('menu-view').classList.add('hidden');
        document.getElementById('lesson-view').classList.add('hidden');
        document.getElementById('lesson-view').classList.remove('grid');
        document.getElementById('completion-view').classList.remove('hidden');

        const finishBtn = document.getElementById('finish-btn');
        if (finishBtn) {
            finishBtn.onclick = function () {
                if (window.IntentEngine && window.Intents && window.Intents.showMenu) {
                    window.IntentEngine.run(window.Intents.showMenu, {});
                } else {
                    window.location.reload(); // Fallback
                }
            };
        }

        document.getElementById('header-controls').classList.add('hidden');
        document.getElementById('mission-subtitle').textContent = "MISSION_ACCOMPLISHED";

        const lesson = window.courseData.lessons[newState.currentLessonIndex];
        function buildExamCode(prefix, score) {
            const seed = window.exam1SessionSeed || Date.now();
            const stamp = String(seed).slice(-6);
            const checksum = ((score * 17) + (seed % 89)).toString(36).toUpperCase();
            return `${prefix}-${String(score).padStart(2, '0')}-${stamp}-${checksum}`;
        }

        let emojiCompletionHtml = "";
        if (window.lessonEmoji) {
            emojiCompletionHtml = `<div class="mb-6 text-6xl animate-bounce">${window.lessonEmoji}</div><p class="text-[var(--neon-pink)] font-bold text-2xl mb-8">Please show your teacher this screen to get credit for this lesson.</p>`;
        } else {
            emojiCompletionHtml = '<div class="inline-block mb-8 p-6 rounded-full bg-[var(--neon-green)]/20 border-4 border-[var(--neon-green)]">' +
                '<svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="#00ff9d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>' +
                '</div>' +
                '<h2 class="heading-font text-5xl text-white mb-4 glow-text">ACCESS GRANTED</h2>' +
                '<p class="text-[var(--neon-cyan)] code-font text-xl mb-8">Recruit, you have successfully completed the framework.</p>';
        }

        let gameButtonHtml = '';
        if (lesson && lesson.gamePath && lesson.gameTitle) {
            gameButtonHtml = `<button onclick="window.location.href='${lesson.gamePath}'" class="w-64 py-4 px-10 bg-[var(--neon-cyan)] text-black font-bold rounded-lg heading-font hover:scale-105 transition shadow-[0_0_15px_var(--neon-cyan)]">PLAY ${lesson.gameTitle}</button>`;
        }

        if (lesson && lesson.id === 'exam1') {
            const score = Object.values(window.exam1Answers || {}).filter(entry => entry && entry.correct).length;
            if (!window.exam1ResultCode) {
                window.exam1ResultCode = buildExamCode('EX1', score);
            }
            emojiCompletionHtml =
                `<div class="mb-6 text-6xl">${window.lessonEmoji || '📝'}</div>` +
                `<h2 class="heading-font text-5xl text-white mb-4 glow-text">EXAM COMPLETE</h2>` +
                `<p class="text-[var(--neon-cyan)] code-font text-2xl mb-4">Score: ${score} / 30</p>` +
                `<div class="mb-8 rounded-xl border border-[var(--neon-pink)] bg-[var(--neon-pink)]/10 px-6 py-5">` +
                `<p class="text-sm uppercase tracking-[0.3em] text-gray-400 mb-2">Write Down This Exam Code</p>` +
                `<p class="heading-font text-3xl text-[var(--neon-pink)] break-all">${window.exam1ResultCode}</p>` +
                `</div>` +
                `<p class="text-[var(--neon-pink)] font-bold text-xl mb-8">Show this score and code to your teacher.</p>`;
            gameButtonHtml = '';
        }

        if (lesson && lesson.id === 'exam2') {
            const score = 100;
            if (!window.exam2ResultCode) {
                window.exam2ResultCode = buildExamCode('EX2', score);
            }
            emojiCompletionHtml =
                `<div class="mb-6 text-6xl">${window.lessonEmoji || '🚀'}</div>` +
                `<h2 class="heading-font text-5xl text-white mb-4 glow-text">HTML FINAL COMPLETE</h2>` +
                `<p class="text-[var(--neon-cyan)] code-font text-2xl mb-4">Full Marks: ${score} / 100</p>` +
                `<div class="mb-8 rounded-xl border border-[var(--neon-pink)] bg-[var(--neon-pink)]/10 px-6 py-5">` +
                `<p class="text-sm uppercase tracking-[0.3em] text-gray-400 mb-2">Write Down This Exam Code</p>` +
                `<p class="heading-font text-3xl text-[var(--neon-pink)] break-all">${window.exam2ResultCode}</p>` +
                `</div>` +
                `<p class="text-[var(--neon-pink)] font-bold text-xl mb-8">Every mission is guided, so finishing the exam earns full credit.</p>`;
            gameButtonHtml = '';
        }

        document.getElementById('completion-content').innerHTML =
            '<div class="text-center py-20 animate-fade-in">' +
            emojiCompletionHtml +
            '<div class="flex flex-col gap-4 items-center">' +
            '<button onclick="window.IntentEngine.run(window.Intents.showMenu, {})" class="w-64 py-4 px-10 bg-[var(--neon-pink)] text-white font-bold rounded-lg heading-font hover:scale-105 transition shadow-[0_0_15px_var(--neon-pink)]">RETURN TO DASHBOARD</button>' +
            gameButtonHtml +
            '</div>' +
            '</div>';
    }
}
