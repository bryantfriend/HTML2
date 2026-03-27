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

window.sandboxIDE = window.sandboxIDE || {
    activeTab: 'html',
    autoRun: true,
    dirty: false,
    previewTimer: null,
    consoleEntries: [],
    panels: {
        explorerCollapsed: false,
        consoleCollapsed: false,
        focusMode: 'split'
    }
};

window.getSandboxEditors = function () {
    return {
        html: document.getElementById('sandbox-editor-html'),
        css: document.getElementById('sandbox-editor-css'),
        js: document.getElementById('sandbox-editor-js')
    };
};

window.getSandboxStarter = function () {
    return {
        html: "<main class=\"app-shell\">\n  <h1>Creative Sandbox</h1>\n  <p>Build your own experiment with HTML, CSS, and JavaScript.</p>\n  <button id=\"surprise-btn\">Click me</button>\n</main>",
        css: "body {\n  margin: 0;\n  min-height: 100vh;\n  display: grid;\n  place-items: center;\n  background: radial-gradient(circle at top, #12203f, #050816 65%);\n  color: #e2e8f0;\n  font-family: Arial, sans-serif;\n}\n\n.app-shell {\n  width: min(92vw, 520px);\n  padding: 32px;\n  border-radius: 24px;\n  background: rgba(15, 23, 42, 0.88);\n  border: 1px solid rgba(103, 232, 249, 0.24);\n  box-shadow: 0 30px 70px rgba(0, 0, 0, 0.45);\n}\n\nbutton {\n  margin-top: 18px;\n  padding: 12px 18px;\n  border: none;\n  border-radius: 999px;\n  background: #67e8f9;\n  color: #082f49;\n  font-weight: 700;\n  cursor: pointer;\n}",
        js: "const button = document.getElementById('surprise-btn');\nif (button) {\n  button.addEventListener('click', () => {\n    button.textContent = 'Nice work!';\n    console.log('Sandbox button clicked');\n  });\n}"
    };
};

window.clearSandboxConsole = function () {
    window.sandboxIDE.consoleEntries = [];
    const output = document.getElementById('sandbox-console-output');
    const count = document.getElementById('sandbox-console-count');
    if (output) {
        output.innerHTML = '<div class="sandbox-console-empty">Console output from your sandbox will appear here.</div>';
    }
    if (count) {
        count.textContent = '0 entries';
    }
};

window.renderSandboxConsole = function () {
    const output = document.getElementById('sandbox-console-output');
    const count = document.getElementById('sandbox-console-count');
    if (!output || !count) return;

    if (!window.sandboxIDE.consoleEntries.length) {
        output.innerHTML = '<div class="sandbox-console-empty">Console output from your sandbox will appear here.</div>';
        count.textContent = '0 entries';
        return;
    }

    output.innerHTML = window.sandboxIDE.consoleEntries.map(function (entry) {
        const safeMessage = String(entry.message || '')
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
        return '<div class="sandbox-console-entry ' + entry.type + '">' +
            '<div class="sandbox-console-type">' + entry.type + '</div>' +
            '<div>' + safeMessage + '</div>' +
            '</div>';
    }).join('');
    count.textContent = window.sandboxIDE.consoleEntries.length + ' entries';
    output.scrollTop = output.scrollHeight;
};

window.pushSandboxConsole = function (type, message) {
    window.sandboxIDE.consoleEntries.push({ type: type, message: message });
    if (window.sandboxIDE.consoleEntries.length > 60) {
        window.sandboxIDE.consoleEntries.shift();
    }
    window.renderSandboxConsole();
};

window.updateSandboxLineNumbers = function (type) {
    const editor = document.getElementById('sandbox-editor-' + type);
    const gutter = document.getElementById('sandbox-gutter-' + type);
    if (!editor || !gutter) return;
    const lineCount = Math.max((editor.value.match(/\n/g) || []).length + 1, 1);
    gutter.textContent = Array.from({ length: lineCount }, function (_, index) {
        return String(index + 1);
    }).join('\n');
    gutter.scrollTop = editor.scrollTop;
};

window.updateSandboxCursorStatus = function (type) {
    const editor = document.getElementById('sandbox-editor-' + type);
    const cursor = document.getElementById('sandbox-cursor-position');
    const selection = document.getElementById('sandbox-selection-size');
    if (!editor || !cursor || !selection) return;

    const start = editor.selectionStart || 0;
    const before = editor.value.slice(0, start).split('\n');
    const line = before.length;
    const column = before[before.length - 1].length + 1;
    cursor.textContent = 'Ln ' + line + ', Col ' + column;
    selection.textContent = Math.abs((editor.selectionEnd || 0) - start) + ' chars';
};

window.updateSandboxStatusBar = function () {
    const type = window.sandboxIDE.activeTab || 'html';
    const editor = document.getElementById('sandbox-editor-' + type);
    const lines = document.getElementById('sandbox-status-lines');
    const chars = document.getElementById('sandbox-status-characters');
    const language = document.getElementById('sandbox-active-language');
    const previewStatus = document.getElementById('sandbox-preview-status');
    const fileNames = { html: 'HTML', css: 'CSS', js: 'JavaScript' };
    if (editor && lines) {
        lines.textContent = Math.max((editor.value.match(/\n/g) || []).length + 1, 1) + ' line' + (((editor.value.match(/\n/g) || []).length + 1) === 1 ? '' : 's');
    }
    if (editor && chars) {
        chars.textContent = editor.value.length + ' chars';
    }
    if (language) {
        language.textContent = fileNames[type];
    }
    if (previewStatus && !previewStatus.textContent) {
        previewStatus.textContent = 'Preview synced';
    }
};

window.setSandboxDirty = function (isDirty) {
    window.sandboxIDE.dirty = isDirty;
    const indicator = document.getElementById('sandbox-dirty-indicator');
    if (indicator) {
        indicator.textContent = isDirty ? 'Unsaved changes' : 'Saved';
        indicator.style.color = isDirty ? '#f9a8d4' : '#86efac';
    }
    document.querySelectorAll('[data-file-dot]').forEach(function (dot) {
        dot.classList.toggle('dirty', isDirty);
    });
};

window.setSandboxPreviewStatus = function (label, stale) {
    const previewStatus = document.getElementById('sandbox-preview-status');
    if (!previewStatus) return;
    previewStatus.textContent = label;
    previewStatus.classList.toggle('sandbox-preview-stale', !!stale);
    previewStatus.classList.toggle('sandbox-preview-ready', !stale);
};

window.applySandboxPanelState = function () {
    const panels = window.sandboxIDE.panels || {};
    const workbench = document.querySelector('.sandbox-workbench');
    const shellGrid = document.getElementById('sandbox-shell-grid');
    const editorPanel = document.getElementById('sandbox-editor-panel');
    const previewPanel = document.getElementById('sandbox-preview-panel');
    const consoleShell = document.getElementById('sandbox-console-shell');
    const explorerToggle = document.getElementById('sandbox-explorer-toggle');
    const previewToggle = document.getElementById('sandbox-preview-toggle');
    const consoleToggle = document.getElementById('sandbox-console-toggle');
    const splitBtn = document.getElementById('sandbox-split-view-btn');
    const editorBtn = document.getElementById('sandbox-editor-focus-btn');
    const previewBtn = document.getElementById('sandbox-preview-focus-btn');

    if (workbench) {
        workbench.classList.toggle('explorer-collapsed', !!panels.explorerCollapsed);
    }
    if (consoleShell) {
        consoleShell.classList.toggle('collapsed', !!panels.consoleCollapsed);
    }
    if (shellGrid) {
        shellGrid.classList.remove('focus-editor', 'focus-preview');
        if (panels.focusMode === 'editor') {
            shellGrid.classList.add('focus-editor');
        } else if (panels.focusMode === 'preview') {
            shellGrid.classList.add('focus-preview');
        }
    }
    if (editorPanel) {
        editorPanel.classList.toggle('hidden-panel', panels.focusMode === 'preview');
    }
    if (previewPanel) {
        previewPanel.classList.toggle('hidden-panel', panels.focusMode === 'editor');
    }

    if (explorerToggle) {
        explorerToggle.textContent = panels.explorerCollapsed ? 'EXP' : 'MIN';
        explorerToggle.setAttribute('aria-expanded', String(!panels.explorerCollapsed));
    }
    if (previewToggle) {
        const previewHidden = panels.focusMode === 'editor';
        previewToggle.textContent = previewHidden ? 'EXP' : 'MIN';
        previewToggle.setAttribute('aria-expanded', String(!previewHidden));
    }
    if (consoleToggle) {
        consoleToggle.textContent = panels.consoleCollapsed ? 'EXP' : 'MIN';
        consoleToggle.setAttribute('aria-expanded', String(!panels.consoleCollapsed));
    }

    [
        [splitBtn, panels.focusMode === 'split'],
        [editorBtn, panels.focusMode === 'editor'],
        [previewBtn, panels.focusMode === 'preview']
    ].forEach(function (pair) {
        const btn = pair[0];
        const active = pair[1];
        if (btn) btn.classList.toggle('active', active);
    });
};

window.toggleSandboxExplorer = function () {
    window.sandboxIDE.panels.explorerCollapsed = !window.sandboxIDE.panels.explorerCollapsed;
    window.applySandboxPanelState();
};

window.toggleSandboxConsole = function () {
    window.sandboxIDE.panels.consoleCollapsed = !window.sandboxIDE.panels.consoleCollapsed;
    window.applySandboxPanelState();
};

window.setSandboxFocusMode = function (mode) {
    window.sandboxIDE.panels.focusMode = mode;
    window.applySandboxPanelState();
};

window.toggleSandboxPreviewPanel = function () {
    const currentMode = window.sandboxIDE.panels.focusMode;
    window.sandboxIDE.panels.focusMode = currentMode === 'editor' ? 'split' : 'editor';
    window.applySandboxPanelState();
};

window.switchSandboxTab = function (type) {
    window.sandboxIDE.activeTab = type;
    document.querySelectorAll('.sandbox-tab').forEach(function (tab) {
        tab.classList.toggle('active', tab.dataset.tab === type);
    });
    document.querySelectorAll('.sandbox-file').forEach(function (tab) {
        tab.classList.toggle('active', tab.dataset.tab === type);
    });
    document.querySelectorAll('.sandbox-editor-wrap').forEach(function (wrap) {
        wrap.classList.toggle('hidden', wrap.dataset.editorWrap !== type);
    });
    const fileNames = { html: 'index.html', css: 'styles.css', js: 'script.js' };
    const indicator = document.getElementById('sandbox-file-indicator');
    if (indicator) indicator.textContent = fileNames[type];
    window.updateSandboxLineNumbers(type);
    window.updateSandboxCursorStatus(type);
    window.updateSandboxStatusBar();
};

window.runSandboxPreview = function () {
    window.clearSandboxConsole();
    window.setSandboxPreviewStatus('Preview synced', false);
    if (window.IntentEngine && window.Intents.updateSandbox) {
        window.IntentEngine.run(window.Intents.updateSandbox, {
            type: window.sandboxIDE.activeTab || 'html',
            code: (window.state.sandbox && window.state.sandbox[window.sandboxIDE.activeTab || 'html']) || ''
        });
    }
};

window.scheduleSandboxPreview = function () {
    if (!window.sandboxIDE.autoRun) {
        window.setSandboxPreviewStatus('Preview stale - press RUN', true);
        return;
    }
    clearTimeout(window.sandboxIDE.previewTimer);
    window.setSandboxPreviewStatus('Syncing preview...', false);
    window.sandboxIDE.previewTimer = setTimeout(function () {
        window.runSandboxPreview();
    }, 220);
};

document.querySelectorAll('.sandbox-tab, .sandbox-file').forEach(function (tab) {
    tab.addEventListener('click', function () {
        window.switchSandboxTab(tab.dataset.tab);
    });
});

document.querySelectorAll('.sandbox-editor').forEach(function (editor) {
    editor.addEventListener('keydown', function (e) {
        if (e.key === 'Tab') {
            e.preventDefault();
            const start = editor.selectionStart;
            const end = editor.selectionEnd;
            editor.value = editor.value.slice(0, start) + '  ' + editor.value.slice(end);
            editor.selectionStart = editor.selectionEnd = start + 2;
            editor.dispatchEvent(new Event('input', { bubbles: true }));
        }
    });

    editor.addEventListener('input', function (e) {
        const type = e.target.id.replace('sandbox-editor-', '');
        window.updateSandboxLineNumbers(type);
        window.updateSandboxCursorStatus(type);
        window.updateSandboxStatusBar();
        window.setSandboxDirty(true);
        window.IntentEngine.run(window.Intents.updateSandbox, { code: e.target.value, type: type });
        window.scheduleSandboxPreview();
    });

    editor.addEventListener('scroll', function (e) {
        const type = e.target.id.replace('sandbox-editor-', '');
        const gutter = document.getElementById('sandbox-gutter-' + type);
        if (gutter) gutter.scrollTop = e.target.scrollTop;
    });

    ['click', 'keyup', 'select'].forEach(function (eventName) {
        editor.addEventListener(eventName, function (e) {
            const type = e.target.id.replace('sandbox-editor-', '');
            window.updateSandboxCursorStatus(type);
            window.updateSandboxStatusBar();
        });
    });
});

window.addEventListener('message', function (event) {
    if (!event.data || event.data.source !== 'sandbox-preview') return;
    window.pushSandboxConsole(event.data.level || 'log', event.data.message || '');
});

// Responsive Preview toggles
const deskBtn = document.getElementById('preview-desktop-btn');
const tabletBtn = document.getElementById('preview-tablet-btn');
const mobBtn = document.getElementById('preview-mobile-btn');
const previewFrame = document.getElementById('sandbox-preview');

if (deskBtn && mobBtn && tabletBtn && previewFrame) {
    const activatePreviewMode = function (mode) {
        previewFrame.classList.remove('mobile-view', 'tablet-view');
        [deskBtn, tabletBtn, mobBtn].forEach(function (btn) {
            btn.classList.remove('active');
            btn.classList.replace('bg-gray-800', 'bg-gray-400');
            btn.classList.replace('text-white', 'text-gray-700');
        });

        const buttonMap = { desktop: deskBtn, tablet: tabletBtn, mobile: mobBtn };
        if (mode === 'mobile') previewFrame.classList.add('mobile-view');
        if (mode === 'tablet') previewFrame.classList.add('tablet-view');

        const activeButton = buttonMap[mode];
        if (activeButton) {
            activeButton.classList.add('active');
            activeButton.classList.replace('bg-gray-400', 'bg-gray-800');
            activeButton.classList.replace('text-gray-700', 'text-white');
        }
    };

    deskBtn.onclick = () => {
        activatePreviewMode('desktop');
    };
    tabletBtn.onclick = () => {
        activatePreviewMode('tablet');
    };
    mobBtn.onclick = () => {
        activatePreviewMode('mobile');
    };
}

const sandboxRunBtn = document.getElementById('sandbox-run-btn');
if (sandboxRunBtn) {
    sandboxRunBtn.addEventListener('click', function () {
        window.runSandboxPreview();
    });
}

const sandboxAutoplayBtn = document.getElementById('sandbox-autoplay-btn');
if (sandboxAutoplayBtn) {
    sandboxAutoplayBtn.addEventListener('click', function () {
        window.sandboxIDE.autoRun = !window.sandboxIDE.autoRun;
        sandboxAutoplayBtn.textContent = 'AUTO-RUN: ' + (window.sandboxIDE.autoRun ? 'ON' : 'OFF');
        sandboxAutoplayBtn.classList.toggle('bg-[var(--neon-pink)]', window.sandboxIDE.autoRun);
        sandboxAutoplayBtn.classList.toggle('text-white', window.sandboxIDE.autoRun);
        sandboxAutoplayBtn.classList.toggle('border-pink-500', window.sandboxIDE.autoRun);
        if (window.sandboxIDE.autoRun) {
            window.scheduleSandboxPreview();
        } else {
            window.setSandboxPreviewStatus('Preview stale - press RUN', true);
        }
    });
}

const sandboxResetBtn = document.getElementById('sandbox-reset-btn');
if (sandboxResetBtn) {
    sandboxResetBtn.addEventListener('click', function () {
        const starter = window.getSandboxStarter();
        const editors = window.getSandboxEditors();
        Object.keys(starter).forEach(function (type) {
            if (editors[type]) {
                editors[type].value = starter[type];
                window.IntentEngine.run(window.Intents.updateSandbox, { code: starter[type], type: type });
                window.updateSandboxLineNumbers(type);
            }
        });
        window.setSandboxDirty(true);
        window.switchSandboxTab('html');
        window.scheduleSandboxPreview();
    });
}

const sandboxClearConsoleBtn = document.getElementById('sandbox-clear-console-btn');
if (sandboxClearConsoleBtn) {
    sandboxClearConsoleBtn.addEventListener('click', function () {
        window.clearSandboxConsole();
    });
}

const sandboxExplorerToggle = document.getElementById('sandbox-explorer-toggle');
if (sandboxExplorerToggle) {
    sandboxExplorerToggle.addEventListener('click', function () {
        window.toggleSandboxExplorer();
    });
}

const sandboxConsoleToggle = document.getElementById('sandbox-console-toggle');
if (sandboxConsoleToggle) {
    sandboxConsoleToggle.addEventListener('click', function () {
        window.toggleSandboxConsole();
    });
}

const sandboxPreviewToggle = document.getElementById('sandbox-preview-toggle');
if (sandboxPreviewToggle) {
    sandboxPreviewToggle.addEventListener('click', function () {
        window.toggleSandboxPreviewPanel();
    });
}

const sandboxSplitViewBtn = document.getElementById('sandbox-split-view-btn');
if (sandboxSplitViewBtn) {
    sandboxSplitViewBtn.addEventListener('click', function () {
        window.setSandboxFocusMode('split');
    });
}

const sandboxEditorFocusBtn = document.getElementById('sandbox-editor-focus-btn');
if (sandboxEditorFocusBtn) {
    sandboxEditorFocusBtn.addEventListener('click', function () {
        window.setSandboxFocusMode('editor');
    });
}

const sandboxPreviewFocusBtn = document.getElementById('sandbox-preview-focus-btn');
if (sandboxPreviewFocusBtn) {
    sandboxPreviewFocusBtn.addEventListener('click', function () {
        window.setSandboxFocusMode('preview');
    });
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
        const project = window.normalizeSandboxProject
            ? window.normalizeSandboxProject(window.state.sandboxProject || window.state.sandbox || null)
            : null;
        const files = project && project.files ? project.files : null;
        const activeHtml = files
            ? ((project.activeFile && String(project.activeFile).endsWith('.html') ? project.activeFile : null)
                || Object.keys(files).find(name => name.endsWith('.html'))
                || 'index.html')
            : null;
        const s = files
            ? {
                html: files[activeHtml] || "",
                css: Object.keys(files).filter(name => name.endsWith('.css')).map(name => files[name] || "").join('\n\n'),
                js: Object.keys(files).filter(name => name.endsWith('.js')).map(name => files[name] || "").join('\n\n')
            }
            : (window.state.sandbox || { html: "", css: "", js: "" });
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

document.addEventListener('keydown', function (e) {
    const isSaveShortcut = (e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 's';
    if (!isSaveShortcut || window.state.view !== 'SANDBOX') return;
    e.preventDefault();
    if (window.state.sandboxFilename) {
        window.IntentEngine.run(window.Intents.saveSandbox, { filename: window.state.sandboxFilename });
    } else if (saveModal) {
        saveFilenameInput.value = window.state.sandboxFilename || '';
        saveModal.classList.remove('hidden');
        saveFilenameInput.focus();
    }
});
