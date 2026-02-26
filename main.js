window.state = {
    view: "MENU", // "MENU" | "LESSON"
    currentLessonIndex: 0,
    currentModuleIndex: 0,
    editorContent: "",
    isComplete: false,
    missionCompleted: false,
    completedLessons: []
};

// Global helper for signaling module completion from interactive modules
window.completeModule = function (marker) {
    console.log("[Signal] completeModule called with marker:", marker);
    try {
        const editor = document.getElementById('code-editor');
        if (editor) {
            // Note: 'marker' is a variable, so checking it here doesn't cause self-detection of literals.
            if (!editor.value.includes(marker)) {
                editor.value += '\n<!-- ' + marker + ' -->';
                console.log("[Signal] Added marker to editor.");
            }

            if (window.IntentEngine && window.Intents && window.Intents.updatePreview) {
                console.log("[Signal] Triggering updatePreview intent...");
                window.IntentEngine.run(window.Intents.updatePreview, { code: editor.value });
                console.log("[Signal] updatePreview intent triggered.");
            } else {
                console.error("[Signal] IntentEngine or updatePreview intent missing!", {
                    engine: !!window.IntentEngine,
                    intents: !!window.Intents,
                    updatePreview: window.Intents ? !!window.Intents.updatePreview : false
                });
            }
        } else {
            console.error("[Signal] CRITICAL: code-editor element not found in DOM!");
        }
    } catch (e) {
        console.error("[Signal] EXCEPTION in completeModule:", e);
    }
};

// Initialize
window.onload = async function () {
    // Wait for lesson metadata to load before doing anything
    if (window.LessonMetadataLoaded) {
        await window.LessonMetadataLoaded;
    }

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
        // ... (rest of video logic)
        let playPromise = video.play();
        if (playPromise !== undefined) {
            playPromise.then(_ => {
                if (skipBtn) skipBtn.classList.remove('hidden');
            }).catch(error => {
                if (startPrompt) startPrompt.classList.remove('hidden');
            });
        }

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

        video.onerror = () => {
            finishIntro();
        };
    } else {
        window.IntentEngine.run(window.Intents.showMenu, {});
    }
};

// Global Event Listeners (Menu Buttons Generated Dynamically)
// We need to catch the 'start-lesson' from menu.
// The menu buttons currently probably call IntentEngine.run(window.Intents.startLesson, { index: ... })
// I will intercept or just make sure it's loaded.
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
