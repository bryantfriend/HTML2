window.Intents = window.Intents || {};
window.Intents.startLesson = {
    validate: [window.Validators.validateStartLesson],
    normalize: [window.Normalizers.normalizeStartLesson],
    addContext: [window.Contexts.addContextCourseData],
    authorize: [window.Authorizors.authorizeAll],
    process: [window.Processors.processStartLesson],
    finalize: [window.Finalizers.finalizeLessonModule, window.Finalizers.finalizePreviewRender],
    emit: [window.Emitters.emitResult]
};
