window.Intents = window.Intents || {};
window.Intents.completeLesson = {
    validate: [window.Validators.validateCompleteLesson],
    normalize: [],
    addContext: [window.Contexts.addContextCourseData],
    authorize: [window.Authorizors.authorizeAll],
    process: [window.Processors.processCompleteLesson],
    finalize: [window.Finalizers.finalizeCompleteLesson],
    emit: [window.Emitters.emitResult]
};
