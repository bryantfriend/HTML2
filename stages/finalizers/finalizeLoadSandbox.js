function finalizeLoadSandbox(payload, newState, oldState, context) {
    const filename = payload.filename.trim();
    const savedStr = localStorage.getItem('sandbox_' + filename);

    if (savedStr !== null) {
        let sandboxData;
        try {
            sandboxData = JSON.parse(savedStr);
        } catch (e) {
            // Fallback for old single-string saves
            sandboxData = { html: savedStr, css: "", js: "" };
        }

        newState.sandboxProject = window.normalizeSandboxProject
            ? window.normalizeSandboxProject(sandboxData)
            : {
                activeFile: 'index.html',
                files: {
                    'index.html': sandboxData.html || "",
                    'styles.css': sandboxData.css || "",
                    'script.js': sandboxData.js || ""
                }
            };
        newState.sandbox = {
            html: newState.sandboxProject.files['index.html'] || "",
            css: newState.sandboxProject.files['styles.css'] || "",
            js: newState.sandboxProject.files['script.js'] || ""
        };

        // Update name indicator
        const nameDisplay = document.getElementById('sandbox-file-indicator');
        if (nameDisplay) {
            nameDisplay.textContent = filename + ".html";
        }
        const projectName = document.getElementById('sandbox-project-name');
        const statusProject = document.getElementById('sandbox-status-project');
        if (projectName) projectName.textContent = filename;
        if (statusProject) statusProject.textContent = filename + ".html";

        if (window.setSandboxDirty) {
            window.setSandboxDirty(false);
        }
        if (window.clearSandboxConsole) {
            window.clearSandboxConsole();
        }

        // Hide the open modal
        document.getElementById('open-modal').classList.add('hidden');

        // Trigger preview update
        if (window.switchSandboxTab) {
            window.switchSandboxTab(newState.sandboxProject.activeFile || 'index.html');
        }
        if (window.renderSandboxFileUI) {
            window.renderSandboxFileUI();
        }
        if (window.refreshSandboxIDE) {
            window.refreshSandboxIDE();
        }
        if (window.applySandboxPanelState) {
            window.applySandboxPanelState();
        }
        if (window.runSandboxPreview) {
            window.runSandboxPreview();
        } else if (window.IntentEngine && window.Intents.updateSandbox) {
            window.IntentEngine.run(window.Intents.updateSandbox, { type: 'html', code: sandboxData.html || "" });
        }
    } else {
        alert("Project not found!");
    }
}
