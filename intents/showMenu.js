window.Intents = window.Intents || {};
window.Intents.showMenu = {
    validate: [window.Validators.validateShowMenu],
    normalize: [],
    addContext: [],
    authorize: [window.Authorizors.authorizeAll],
    process: [window.Processors.processShowMenu],
    finalize: [window.Finalizers.finalizeMenuRender],
    emit: [window.Emitters.emitResult]
};
