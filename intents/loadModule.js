window.Intents = window.Intents || {};
window.Intents.loadModule = {
    validate: [window.Validators.validateLoadModule],
    normalize: [window.Normalizers.normalizeLoadModule],
    addContext: [window.Contexts.addContextCourseData],
    authorize: [window.Authorizors.authorizeAll],
    process: [window.Processors.processLoadModule],
    finalize: [window.Finalizers.finalizeLessonModule, window.Finalizers.finalizePreviewRender],
    emit: [window.Emitters.emitResult]
};
