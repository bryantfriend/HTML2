window.Finalizers = window.Finalizers || {};
window.Finalizers.finalizeShowSandbox = function(payload, newState, oldState, context) {
    document.getElementById('menu-view').classList.add('hidden');
    document.getElementById('lesson-view').classList.add('hidden');
    document.getElementById('completion-view').classList.add('hidden');
    document.getElementById('sandbox-view').classList.remove('hidden');
    
    // Load from local storage
    const saved = localStorage.getItem('cyberBuilderSandbox');
    const editor = document.getElementById('sandbox-editor');
    if (saved) {
        editor.value = saved;
        newState.sandboxCode = saved;
    }
    
    // Trigger initial preview
    window.IntentEngine.run(window.Intents.updateSandbox, { code: editor.value });
};