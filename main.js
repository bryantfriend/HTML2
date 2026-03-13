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

// --- Sandbox Event Listeners ---
const sandboxNavBtn = document.getElementById('sandbox-nav-btn');
if (sandboxNavBtn) {
    sandboxNavBtn.addEventListener('click', function () {
        window.IntentEngine.run(window.Intents.showSandbox, {});
    });
}

// sandboxTabs logic
document.querySelectorAll('.sandbox-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        const type = tab.dataset.tab;
        document.querySelectorAll('.sandbox-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        document.querySelectorAll('.sandbox-editor').forEach(e => e.classList.add('hidden'));
        document.getElementById(`sandbox-editor-${type}`).classList.remove('hidden');
        
        const fileNames = { html: 'index.html', css: 'styles.css', js: 'script.js' };
        document.getElementById('sandbox-file-indicator').textContent = fileNames[type];
    });
});

document.querySelectorAll('.sandbox-editor').forEach(editor => {
    editor.addEventListener('input', (e) => {
        const type = e.target.id.replace('sandbox-editor-', '');
        window.IntentEngine.run(window.Intents.updateSandbox, { code: e.target.value, type: type });
    });
});

// Responsive Preview toggles
const deskBtn = document.getElementById('preview-desktop-btn');
const mobBtn = document.getElementById('preview-mobile-btn');
const previewFrame = document.getElementById('sandbox-preview');

if (deskBtn && mobBtn && previewFrame) {
    deskBtn.onclick = () => {
        previewFrame.classList.remove('mobile-view');
        deskBtn.classList.add('active');
        mobBtn.classList.remove('active');
        mobBtn.classList.replace('bg-gray-800', 'bg-gray-400');
        mobBtn.classList.replace('text-white', 'text-gray-700');
        deskBtn.classList.replace('bg-gray-400', 'bg-gray-800');
        deskBtn.classList.replace('text-gray-700', 'text-white');
    };
    mobBtn.onclick = () => {
        previewFrame.classList.add('mobile-view');
        mobBtn.classList.add('active');
        deskBtn.classList.remove('active');
        deskBtn.classList.replace('bg-gray-800', 'bg-gray-400');
        deskBtn.classList.replace('text-white', 'text-gray-700');
        mobBtn.classList.replace('bg-gray-400', 'bg-gray-800');
        mobBtn.classList.replace('text-gray-700', 'text-white');
    };
}

const sandboxSaveBtn = document.getElementById('sandbox-save-btn');
const saveModal = document.getElementById('save-modal');
const saveFilenameInput = document.getElementById('save-filename-input');
const confirmSaveBtn = document.getElementById('confirm-save-btn');
const cancelSaveBtn = document.getElementById('cancel-save-btn');

if (sandboxSaveBtn && saveModal) {
    sandboxSaveBtn.addEventListener('click', function () {
        saveFilenameInput.value = window.state.sandboxFilename || '';
        saveModal.classList.remove('hidden');
        saveFilenameInput.focus();
    });

    cancelSaveBtn.addEventListener('click', function () {
        saveModal.classList.add('hidden');
    });

    confirmSaveBtn.addEventListener('click', function () {
        const filename = saveFilenameInput.value.trim();
        if (filename) {
            window.IntentEngine.run(window.Intents.saveSandbox, { filename: filename });
        } else {
            alert("Please enter a valid file name.");
        }
    });
}

// Open Modal Logic
const sandboxOpenBtn = document.getElementById('sandbox-open-btn');
const openModal = document.getElementById('open-modal');
const savedProjectsList = document.getElementById('saved-projects-list');
const cancelOpenBtn = document.getElementById('cancel-open-btn');

if (sandboxOpenBtn && openModal) {
    sandboxOpenBtn.addEventListener('click', function () {
        savedProjectsList.innerHTML = '';
        let list = [];
        try {
            const listStr = localStorage.getItem('sandboxList');
            if (listStr) list = JSON.parse(listStr);
        } catch (e) { }

        if (list.length === 0) {
            savedProjectsList.innerHTML = '<p class="text-gray-500 code-font text-sm">No saved projects found.</p>';
        } else {
            list.forEach(item => {
                const container = document.createElement('div');
                container.className = 'group flex gap-2 items-center';
                
                const loadBtn = document.createElement('button');
                loadBtn.className = 'flex-1 text-left p-3 bg-black hover:bg-gray-800 border border-gray-700 rounded text-[var(--neon-cyan)] code-font transition flex justify-between items-center';
                loadBtn.innerHTML = `<span>${item}</span><span class="text-xs text-gray-500">LOAD &rarr;</span>`;
                loadBtn.onclick = () => {
                    window.IntentEngine.run(window.Intents.loadSandbox, { filename: item });
                };
                
                const deleteBtn = document.createElement('button');
                deleteBtn.className = 'p-3 bg-black hover:bg-red-900 border border-gray-700 rounded text-gray-500 hover:text-white transition opacity-0 group-hover:opacity-100';
                deleteBtn.innerHTML = '&times;';
                deleteBtn.title = "Delete Project";
                deleteBtn.onclick = (e) => {
                    e.stopPropagation();
                    if (confirm(`Are you sure you want to delete "${item}"?`)) {
                        window.IntentEngine.run(window.Intents.deleteSandbox, { filename: item });
                    }
                };
                
                container.appendChild(loadBtn);
                container.appendChild(deleteBtn);
                savedProjectsList.appendChild(container);
            });
        }

        openModal.classList.remove('hidden');
    });

    cancelOpenBtn.addEventListener('click', function () {
        openModal.classList.add('hidden');
    });
}

const sandboxExportBtn = document.getElementById('sandbox-export-btn');
if (sandboxExportBtn) {
    sandboxExportBtn.addEventListener('click', function () {
        const s = window.state.sandbox || { html: "", css: "", js: "" };
        const combined = `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>My Sandbox Project</title>
    <style>${s.css || ""}</style>
</head>
<body>
    ${s.html || ""}
    <script>${s.js || ""}<\/script>
</body>
</html>`;
        const blob = new Blob([combined], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        const filename = window.state.sandboxFilename ? window.state.sandboxFilename + '.html' : 'my_awesome_website.html';
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    });
}
