function finalizeShowSandbox(payload, newState, oldState, context) {
    document.getElementById('menu-view').classList.add('hidden');
    document.getElementById('lesson-view').classList.add('hidden');
    document.getElementById('completion-view').classList.add('hidden');
    document.getElementById('sandbox-view').classList.remove('hidden');
    
    if (!newState.sandboxProject) {
        newState.sandboxProject = window.normalizeSandboxProject
            ? window.normalizeSandboxProject(newState.sandbox || null)
            : {
                activeFile: 'index.html',
                files: {
                    'index.html': "<h1>Hello Cyber-Builder!</h1>",
                    'styles.css': "body { font-family: sans-serif; }",
                    'script.js': "console.log('Sandbox initialized');"
                }
            };
    }

    const project = newState.sandboxProject;
    newState.sandbox = {
        html: project.files['index.html'] || "",
        css: project.files['styles.css'] || "",
        js: project.files['script.js'] || ""
    };

    if (window.clearSandboxConsole) {
        window.clearSandboxConsole();
    }

    if (window.setSandboxDirty) {
        window.setSandboxDirty(false);
    }

    const projectName = document.getElementById('sandbox-project-name');
    const statusProject = document.getElementById('sandbox-status-project');
    const filename = newState.sandboxFilename || 'untitled_project';
    if (projectName) projectName.textContent = filename;
    if (statusProject) statusProject.textContent = filename + '.html';

    // Default to HTML tab
    if (window.switchSandboxTab) {
        window.switchSandboxTab(project.activeFile || 'index.html');
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
    
    // Trigger initial preview
    if (window.runSandboxPreview) {
        window.runSandboxPreview();
    } else if (window.IntentEngine && window.Intents.updateSandbox) {
        window.IntentEngine.run(window.Intents.updateSandbox, { type: 'html', code: s.html });
    }
}
