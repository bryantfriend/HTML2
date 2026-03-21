function finalizeShowSandbox(payload, newState, oldState, context) {
    document.getElementById('menu-view').classList.add('hidden');
    document.getElementById('lesson-view').classList.add('hidden');
    document.getElementById('completion-view').classList.add('hidden');
    document.getElementById('sandbox-view').classList.remove('hidden');
    
    // Default content if state is empty
    if (!newState.sandbox) {
        newState.sandbox = window.getSandboxStarter ? window.getSandboxStarter() : {
            html: "<h1>Hello Cyber-Builder!</h1>",
            css: "body { font-family: sans-serif; }",
            js: "console.log('Sandbox initialized');"
        };
    }

    const s = newState.sandbox;
    const editors = {
        html: document.getElementById('sandbox-editor-html'),
        css: document.getElementById('sandbox-editor-css'),
        js: document.getElementById('sandbox-editor-js')
    };

    if (editors.html) editors.html.value = s.html;
    if (editors.css) editors.css.value = s.css;
    if (editors.js) editors.js.value = s.js;

    ['html', 'css', 'js'].forEach(type => {
        if (window.updateSandboxLineNumbers) {
            window.updateSandboxLineNumbers(type);
        }
    });

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
        window.switchSandboxTab('html');
    } else {
        const htmlTab = document.querySelector('.sandbox-tab[data-tab="html"]');
        if (htmlTab) htmlTab.click();
    }
    
    // Trigger initial preview
    if (window.runSandboxPreview) {
        window.runSandboxPreview();
    } else if (window.IntentEngine && window.Intents.updateSandbox) {
        window.IntentEngine.run(window.Intents.updateSandbox, { type: 'html', code: s.html });
    }
}
