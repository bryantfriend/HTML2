window.Intents = window.Intents || {};
window.Intents.loadSandbox = {
    validate: [window.Validators.validateLoadSandbox],
    process: [window.Processors.processLoadSandbox],
    finalize: [window.Finalizers.finalizeLoadSandbox]
};
