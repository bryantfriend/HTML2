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
        
        newState.sandbox = sandboxData;
        
        // Update all three editors
        const htmlEditor = document.getElementById('sandbox-editor-html');
        const cssEditor = document.getElementById('sandbox-editor-css');
        const jsEditor = document.getElementById('sandbox-editor-js');
        
        if (htmlEditor) htmlEditor.value = sandboxData.html || "";
        if (cssEditor) cssEditor.value = sandboxData.css || "";
        if (jsEditor) jsEditor.value = sandboxData.js || "";

        ['html', 'css', 'js'].forEach(type => {
            if (window.updateSandboxLineNumbers) {
                window.updateSandboxLineNumbers(type);
            }
        });

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
            window.switchSandboxTab('html');
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
