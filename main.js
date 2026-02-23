window.state = {
    view: "MENU", // "MENU" | "LESSON"
    currentLessonIndex: 0,
    currentModuleIndex: 0,
    editorContent: "",
    isComplete: false,
    missionCompleted: false
};

// Initialize
window.onload = function () {
    const videoContainer = document.getElementById('intro-video-container');
    const video = document.getElementById('intro-video');
    const startPrompt = document.getElementById('start-prompt');
    const skipBtn = document.getElementById('skip-video-btn');

    const finishIntro = () => {
        if (!videoContainer.classList.contains('opacity-0')) {
            videoContainer.classList.add('opacity-0');
            setTimeout(() => {
                videoContainer.style.display = 'none';
            }, 1000);
            window.IntentEngine.run(window.Intents.showMenu, {});
        }
    };

    if (videoContainer && video) {
        // Try to play with sound
        let playPromise = video.play();
        if (playPromise !== undefined) {
            playPromise.then(_ => {
                // Autoplay started successfully (rare for unmuted)
                if (skipBtn) skipBtn.classList.remove('hidden');
            }).catch(error => {
                // Autoplay was prevented. Show a "Start" button
                if (startPrompt) startPrompt.classList.remove('hidden');
            });
        }

        // Clicking anywhere on the container when prompt is active will start the video
        videoContainer.addEventListener('click', () => {
            if (!startPrompt.classList.contains('hidden')) {
                startPrompt.classList.add('hidden');
                video.muted = false;
                video.play();
                if (skipBtn) skipBtn.classList.remove('hidden');
            }
        });

        if (skipBtn) {
            skipBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                video.pause();
                finishIntro();
            });
        }

        video.onended = () => {
            finishIntro();
        };

        // Fallback in case the video cannot load
        video.onerror = () => {
            finishIntro();
        };
    } else {
        window.IntentEngine.run(window.Intents.showMenu, {});
    }
};
// Global Event Listeners (Menu Buttons Generated Dynamically, so they use event delegation where necessary)

document.getElementById('next-btn').addEventListener('click', function () {
    const currentLesson = window.courseData.lessons[window.state.currentLessonIndex];
    if (window.state.currentModuleIndex < currentLesson.modules.length - 1) {
        window.IntentEngine.run(window.Intents.loadModule, { index: window.state.currentModuleIndex + 1 });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        window.IntentEngine.run(window.Intents.completeLesson, {});
    }
});

document.getElementById('prev-btn').addEventListener('click', function () {
    if (window.state.currentModuleIndex > 0) {
        window.IntentEngine.run(window.Intents.loadModule, { index: window.state.currentModuleIndex - 1 });
    }
});

document.getElementById('code-editor').addEventListener('input', function (e) {
    console.log("Input event fired", e.target, e.target.value);
    window.IntentEngine.run(window.Intents.updatePreview, { code: e.target.value });
});

document.getElementById('back-menu-btn').addEventListener('click', function () {
    window.IntentEngine.run(window.Intents.showMenu, {});
});
