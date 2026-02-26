window.Intents = window.Intents || {};
window.Intents.updatePreview = {
    validate: [window.Validators.validateUpdatePreview],
    normalize: [],
    addContext: [window.Contexts.addContextCourseData],
    authorize: [window.Authorizors.authorizeAll],
    process: [window.Processors.processUpdatePreview],
    finalize: [window.Finalizers.finalizeLessonModule, window.Finalizers.finalizePreviewRender, window.Finalizers.finalizeMissionCompletion],
    emit: [window.Emitters.emitResult]
};
