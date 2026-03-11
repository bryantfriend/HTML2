window.Finalizers = window.Finalizers || {};
window.Finalizers.finalizeLoadSandbox = function (payload, newState, oldState, context) {
    const filename = payload.filename.trim();
    const savedCode = localStorage.getItem('sandbox_' + filename);

    if (savedCode !== null) {
        newState.sandboxCode = savedCode;
        const editor = document.getElementById('sandbox-editor');
        if (editor) {
            editor.value = savedCode;
        }

        // Update the visual filename indicator
        const nameDisplay = document.querySelector('#sandbox-view .terminal-header span:last-child');
        if (nameDisplay) {
            nameDisplay.textContent = filename + ".html";
        }

        // Hide the open modal
        document.getElementById('open-modal').classList.add('hidden');

        // Trigger preview update
        if (window.IntentEngine && window.Intents.updateSandbox) {
            window.IntentEngine.run(window.Intents.updateSandbox, { code: savedCode });
        }
    } else {
        alert("Project not found!");
    }
};
