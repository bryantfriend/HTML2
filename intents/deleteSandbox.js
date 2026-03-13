window.Intents.deleteSandbox = {
    validate: [], // Simple enough to skip validation for now
    process: [window.Processors.processDeleteSandbox],
    finalize: [window.Finalizers.finalizeDeleteSandbox]
};
