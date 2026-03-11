const fs = require('fs');
const path = require('path');

const files = {
    // INTENTS
    "intents/showSandbox.js": `window.Intents.showSandbox = {
    validate: [window.Validators.validateShowSandbox],
    process: [window.Processors.processShowSandbox],
    finalize: [window.Finalizers.finalizeShowSandbox]
};`,
    "intents/updateSandbox.js": `window.Intents.updateSandbox = {
    validate: [window.Validators.validateUpdateSandbox],
    process: [window.Processors.processUpdateSandbox],
    finalize: [window.Finalizers.finalizeUpdateSandbox]
};`,
    "intents/saveSandbox.js": `window.Intents.saveSandbox = {
    validate: [window.Validators.validateSaveSandbox],
    process: [window.Processors.processSaveSandbox],
    finalize: [window.Finalizers.finalizeSaveSandbox]
};`,

    // VALIDATORS
    "stages/validators/validateShowSandbox.js": `window.Validators = window.Validators || {};
window.Validators.validateShowSandbox = function(payload) { return true; };`,
    "stages/validators/validateUpdateSandbox.js": `window.Validators = window.Validators || {};
window.Validators.validateUpdateSandbox = function(payload) { return typeof payload.code === 'string'; };`,
    "stages/validators/validateSaveSandbox.js": `window.Validators = window.Validators || {};
window.Validators.validateSaveSandbox = function(payload) { return true; };`,

    // PROCESSORS
    "stages/processors/processShowSandbox.js": `window.Processors = window.Processors || {};
window.Processors.processShowSandbox = function(payload, state, context) {
    state.view = "SANDBOX";
    return state;
};`,
    "stages/processors/processUpdateSandbox.js": `window.Processors = window.Processors || {};
window.Processors.processUpdateSandbox = function(payload, state, context) {
    state.sandboxCode = payload.code;
    return state;
};`,
    "stages/processors/processSaveSandbox.js": `window.Processors = window.Processors || {};
window.Processors.processSaveSandbox = function(payload, state, context) {
    // Mutation happens in finalize or here, but state doesn't really change, just saving side-effect.
    // We will do the localStorage side-effect in finalize.
    return state;
};`,

    // FINALIZERS
    "stages/finalizers/finalizeShowSandbox.js": `window.Finalizers = window.Finalizers || {};
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
};`,
    "stages/finalizers/finalizeUpdateSandbox.js": `window.Finalizers = window.Finalizers || {};
window.Finalizers.finalizeUpdateSandbox = function(payload, newState, oldState, context) {
    const iframe = document.getElementById('sandbox-preview');
    if (iframe) {
        iframe.srcdoc = payload.code;
    }
};`,
    "stages/finalizers/finalizeSaveSandbox.js": `window.Finalizers = window.Finalizers || {};
window.Finalizers.finalizeSaveSandbox = function(payload, newState, oldState, context) {
    localStorage.setItem('cyberBuilderSandbox', newState.sandboxCode || '');
    const btn = document.getElementById('sandbox-save-btn');
    const originalText = btn.innerText;
    btn.innerText = "SAVED!";
    btn.classList.replace('bg-gray-800', 'bg-green-600');
    setTimeout(() => {
        btn.innerText = originalText;
        btn.classList.replace('bg-green-600', 'bg-gray-800');
    }, 2000);
};`
};

for (const [filepath, content] of Object.entries(files)) {
    const dir = path.dirname(filepath);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(filepath, content);
    console.log("Created: " + filepath);
}
